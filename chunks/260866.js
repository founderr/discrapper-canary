r.d(n, {
    $o: function () {
        return p;
    },
    NE: function () {
        return _;
    },
    P1: function () {
        return d;
    },
    P2: function () {
        return h;
    },
    ie: function () {
        return s;
    },
    jb: function () {
        return u;
    },
    kn: function () {
        return o;
    },
    qR: function () {
        return f;
    },
    x3: function () {
        return c;
    }
});
var i = r(47120);
function a(e, n, r) {
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
let s = 'data-list-item-id',
    o = 'data-list-id',
    l = '___';
function u(e, n) {
    return ''.concat(e).concat(l).concat(n);
}
function c(e) {
    return e.split(l)[1];
}
function d(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
    return '['.concat(n, '="').concat(e, '"]');
}
function f(e, n) {
    return ''.concat(e, '-').concat(n);
}
function _(e, n, r) {
    return ''.concat(e, '-').concat(n, '-').concat(r);
}
function h(e, n) {
    let r = !1;
    return function () {
        for (var i = arguments.length, a = Array(i), s = 0; s < i; s++) a[s] = arguments[s];
        !r && (e(...a), (r = !0), setTimeout(() => (r = !1), n));
    };
}
class p {
    get(e) {
        let n = this.handlers.get(e);
        return null == n && ((n = this.makeHandler(e)), this.handlers.set(e, n)), n;
    }
    clean() {
        delete this.handlers, (this.handlers = new Map());
    }
    constructor(e) {
        a(this, 'makeHandler', void 0), a(this, 'handlers', void 0), (this.makeHandler = e), (this.handlers = new Map()), (this.makeHandler = e);
    }
}
