function e(t, i, e) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = e),
        t
    );
}
function s(t, i) {
    return Math.max(Math.min((t - i) / 30, 1), -1);
}
i.Z = class t {
    initialize() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }
    terminate() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }
    update() {
        this.x !== this.px && this.y !== this.py && ((this.forceX += s(this.x, this.px)), (this.forceY += s(this.y, this.py)), (this.px = this.x), (this.py = this.y)), 0 !== this.forceX && (this.forceX = this.forceX * this.resistance), 0 !== this.forceY && (this.forceY = this.forceY * this.resistance);
    }
    render() {}
    constructor() {
        e(this, 'resistance', 0.98),
            e(this, 'px', 0),
            e(this, 'py', 0),
            e(this, 'x', 0),
            e(this, 'y', 0),
            e(this, 'forceX', 0),
            e(this, 'forceY', 0),
            e(this, 'handleMouseMove', (t) => {
                let { clientX: i, clientY: e } = t;
                (this.x = i), (this.y = e);
            });
    }
};
