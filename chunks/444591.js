function i(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
r.d(n, {
    Z: function () {
        return a;
    }
});
class a {
    createDragPreview(e) {
        if (null == this.container || null == this.svg || null == this.foreignObject) return;
        let { width: n, height: r } = e.getBoundingClientRect();
        this.svg.setAttribute('viewBox', '0 0 '.concat(n, ' ').concat(r)), this.svg.setAttribute('width', ''.concat(n)), this.svg.setAttribute('height', ''.concat(r)), this.foreignObject.setAttribute('x', '0'), this.foreignObject.setAttribute('y', '0'), this.foreignObject.setAttribute('width', ''.concat(n)), this.foreignObject.setAttribute('height', ''.concat(r));
        let i = e.cloneNode(!0);
        this.foreignObject.appendChild(i);
    }
    render(e) {
        let n = this.container;
        if (null == n) return;
        let r = e.getSourceClientOffset();
        if (null != r) e.isDragging() && ((n.style.position = 'fixed'), (n.style.left = ''.concat(r.x + 30, 'px')), (n.style.top = ''.concat(r.y + 15, 'px')));
    }
    clear() {
        null != this.foreignObject && (this.foreignObject.innerHTML = '');
    }
    constructor(e) {
        i(this, 'container', void 0), i(this, 'svg', void 0), i(this, 'foreignObject', void 0), (this.container = null == e ? void 0 : e.createElement('div'));
        let n = (this.svg = null == e ? void 0 : e.createElement('svg'));
        null != n && (n.style.contain = 'paint'), (this.foreignObject = null == e ? void 0 : e.createElement('foreignObject')), null != this.container && null != this.svg && null != this.foreignObject && ((this.container.className = 'drag-previewer'), (this.container.style.cssText = 'z-index: 1000; filter: drop-shadow(0 0 0 var(--background-floating)) drop-shadow(var(--elevation-high))'), this.svg.appendChild(this.foreignObject), this.container.appendChild(this.svg), null == e || e.body.appendChild(this.container));
    }
}
