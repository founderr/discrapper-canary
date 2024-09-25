n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class s {
    static flush(e, t) {
        for (let n of s.batchers) null != n.action && (null == e || n.shouldFlush(e, t)) && n.flush();
    }
    flush() {
        let { action: e } = this;
        (this.action = null),
            null != e &&
                a.Z.dispatch(e).catch((t) =>
                    this.socket.resetSocketOnError({
                        error: t,
                        action: e.type
                    })
                );
    }
    constructor(e, t, n) {
        o(this, 'socket', void 0),
            o(this, 'action', void 0),
            o(this, 'add', void 0),
            o(this, 'shouldFlush', void 0),
            (this.socket = e),
            (this.action = null),
            (this.shouldFlush = n),
            (this.add = (e) => {
                this.action = t(this.action, e);
            }),
            s.batchers.push(this);
    }
}
o(s, 'batchers', []);
