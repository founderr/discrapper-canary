n.d(t, {
    B_: function () {
        return f;
    },
    Lm: function () {
        return c;
    },
    Ol: function () {
        return d;
    },
    P4: function () {
        return _;
    },
    Tk: function () {
        return p;
    },
    cO: function () {
        return E;
    },
    cj: function () {
        return s;
    },
    qu: function () {
        return h;
    }
});
var r = n(411104);
var i = n(654861),
    a = n.n(i);
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
let s = 1420070400000,
    l = 4095,
    u = 22;
function c(e) {
    return Math.floor(Number(e) / 2 ** u) + s;
}
function d(e) {
    let t = e - s;
    return t <= 0 ? '0' : a()(t).shiftLeft(u).toString();
}
function _(e, t) {
    let n = e - s;
    return a()(n <= 0 ? 0 : n)
        .shiftLeft(u)
        .add(t.next())
        .toString();
}
function E(e) {
    return d(c(e) - 1);
}
function f(e) {
    return Date.now() - c(e);
}
function h(e, t) {
    return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1;
}
class p {
    next() {
        if (this.seq > l) throw Error('Snowflake sequence number overflow: '.concat(this.seq));
        return this.seq++;
    }
    reset() {
        this.seq = 0;
    }
    constructor() {
        o(this, 'seq', void 0), (this.seq = 0);
    }
}
