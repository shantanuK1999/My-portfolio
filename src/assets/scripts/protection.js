document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("cut", e => e.preventDefault());
document.addEventListener("selectstart", e => e.preventDefault());
document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener("keydown", function (e) {
    const blockedCombos = (
        e.key === "F12" ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U") ||
        (e.metaKey && e.altKey && e.key === "I") ||
        ["Control", "Shift", "Alt", "Meta"].includes(e.key)
    );
    if (blockedCombos) {
        e.preventDefault();
    }
});

(function devToolsBlocker() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            document.body.innerHTML = "<h1>Access Denied</h1>";
            throw new Error("DevTools are blocked.");
        }
    });
    console.log(element);
})();

if (window.innerWidth > 500) {
    const cursor = document.querySelector('.custom-cursor');
    const trail = document.querySelector('.cursor-trail');

    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let isMoving = false;
    let idleTimeout;

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;

        clearTimeout(idleTimeout);
        if (!isMoving) {
            isMoving = true;
            trail.style.opacity = 1;
        }

        idleTimeout = setTimeout(() => {
            trail.style.opacity = 0;
            isMoving = false;
        }, 200);

        const dx = x - lastX;
        const dy = y - lastY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        trail.style.width = `${distance}px`;
        trail.style.transform = `translate(${lastX}px, ${lastY}px) rotate(${angle}deg)`;

        lastX = x;
        lastY = y;
    });
}
