import { useEffect, useRef } from 'react';

// 1. Define the props to accept the progress function
interface ScrollCanvasProps {
    frameCount?: number;
    onProgress?: (progress: number) => void;
}

export function ScrollCanvas({ frameCount = 300, onProgress }: ScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d', { alpha: false });
        if (!context) return;

        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        // We moved this up so it can be called the moment the first frame loads
        const drawImageCover = (img: HTMLImageElement) => {
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.naturalWidth;
            const ih = img.naturalHeight;

            const scale = Math.max(cw / iw, ch / ih);
            const dw = iw * scale;
            const dh = ih * scale;
            const dx = (cw - dw) / 2;
            const dy = (ch - dh) / 2;

            context.clearRect(0, 0, cw, ch);
            context.fillStyle = '#000000';
            context.fillRect(0, 0, cw, ch);
            context.drawImage(img, 0, 0, iw, ih, dx, dy, dw, dh);
        };

        // 2. Preload loop with progress tracking
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = `/frames-webp/Frame_${i.toString().padStart(8, '0')}.webp`;

            img.onload = () => {
                loadedCount++;

                // Fire the progress prop back to App.tsx
                if (onProgress) {
                    onProgress((loadedCount / frameCount) * 100);
                }

                // Draw the very first frame immediately so the background isn't blank
                if (i === 0) {
                    drawImageCover(img);
                }
            };

            img.decode().catch(() => { });
            images.push(img);
        }

        let scrollTarget = 0;
        let scrollCurrent = 0;
        let animationFrameId: number;

        const handleResize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
        };

        const updateScrollTarget = () => {
            const wrapper = canvas.parentElement?.parentElement;
            if (!wrapper) return;

            const rect = wrapper.getBoundingClientRect();
            const maxScroll = wrapper.scrollHeight - window.innerHeight;

            const scrollProgress = -rect.top;
            const fraction = Math.max(0, Math.min(1, scrollProgress / maxScroll));

            scrollTarget = fraction * (frameCount);
        };

        const render = () => {
            scrollCurrent += (scrollTarget - scrollCurrent) * 0.15;
            const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.round(scrollCurrent)));
            const img = images[frameIndex];

            drawImageCover(img);
            animationFrameId = requestAnimationFrame(render);
        };

        handleResize();
        updateScrollTarget();
        render();

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', updateScrollTarget, { passive: true });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', updateScrollTarget);
            cancelAnimationFrame(animationFrameId);
        };
    }, [frameCount, onProgress]); // Added onProgress to dependency array

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none saturate-[1.3] contrast-[1.15]"
        />
    );
}