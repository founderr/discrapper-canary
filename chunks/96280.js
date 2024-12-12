r.d(n, {
    W: function () {
        return a;
    }
});
var i = r(726074);
class a {
    enqueueTask(e) {
        let { queue: n, requestFlush: r } = this;
        !n.length && (r(), (this.flushing = !0)), (n[n.length] = e);
    }
    constructor() {
        (this.queue = []),
            (this.pendingErrors = []),
            (this.flushing = !1),
            (this.index = 0),
            (this.capacity = 1024),
            (this.flush = () => {
                let { queue: e } = this;
                for (; this.index < e.length; ) {
                    let n = this.index;
                    if ((this.index++, e[n].call(), this.index > this.capacity)) {
                        for (let n = 0, r = e.length - this.index; n < r; n++) e[n] = e[n + this.index];
                        (e.length -= this.index), (this.index = 0);
                    }
                }
                (e.length = 0), (this.index = 0), (this.flushing = !1);
            }),
            (this.registerPendingError = (e) => {
                this.pendingErrors.push(e), this.requestErrorThrow();
            }),
            (this.requestFlush = (0, i.tX)(this.flush)),
            (this.requestErrorThrow = (0, i.as)(() => {
                if (this.pendingErrors.length) throw this.pendingErrors.shift();
            }));
    }
}
