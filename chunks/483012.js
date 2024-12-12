r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(570140);
function o(e, n, r) {
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
class l {
    static flush(e, n) {
        for (let r of l.batchers) null != r.action && (null == e || r.shouldFlush(e, n)) && r.flush();
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                s.Z.dispatch(e).catch((n) =>
                    this.socket.resetSocketOnError({
                        error: n,
                        action: e.type
                    })
                );
    }
    constructor(e, n, r) {
        o(this, 'socket', void 0),
            o(this, 'action', void 0),
            o(this, 'add', void 0),
            o(this, 'shouldFlush', void 0),
            (this.socket = e),
            (this.action = null),
            (this.shouldFlush = r),
            (this.add = (e) => {
                this.action = n(this.action, e);
            }),
            l.batchers.push(this);
    }
}
o(l, 'batchers', []);
