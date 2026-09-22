import { useEffect, useRef } from 'react';

export function ScrollCanvas({ frameCount = 300 }: { frameCount?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d', { alpha: false });
        if (!context) return;

        const images: HTMLImageElement[] = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = `/frames/Frame_${i.toString().padStart(8, '0')}.png`;
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
            // Find the h-[400vh] wrapper that contains this canvas
            const wrapper = canvas.parentElement?.parentElement;
            if (!wrapper) return;

            // Calculate progress strictly within this wrapper, ignoring the rest of the page
            const rect = wrapper.getBoundingClientRect();
            const maxScroll = wrapper.scrollHeight - window.innerHeight;

            // rect.top goes negative as we scroll down. 
            // We clamp between 0 and 1 so it stops exactly at the last frame when the section ends.
            const scrollProgress = -rect.top;
            const fraction = Math.max(0, Math.min(1, scrollProgress / maxScroll));

            scrollTarget = fraction * (frameCount - 1);
        };

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

        const render = () => {
            scrollCurrent += (scrollTarget - scrollCurrent) * 0.15;
            const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.round(scrollCurrent)));
            const img = images[frameIndex];

            drawImageCover(img);
            animationFrameId = requestAnimationFrame(render);
        };

        handleResize();
        updateScrollTarget();

        images[0].onload = () => drawImageCover(images[0]);
        render();

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', updateScrollTarget, { passive: true });

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', updateScrollTarget);
            cancelAnimationFrame(animationFrameId);
        };
    }, [frameCount]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none saturate-[1.3] contrast-[1.15]"
        />
    );
}