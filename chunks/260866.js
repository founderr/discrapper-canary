n.d(t, {
    $o: function () {
        return f;
    },
    NE: function () {
        return _;
    },
    P1: function () {
        return c;
    },
    P2: function () {
        return E;
    },
    ie: function () {
        return a;
    },
    jb: function () {
        return l;
    },
    kn: function () {
        return o;
    },
    qR: function () {
        return d;
    },
    x3: function () {
        return u;
    }
});
var r = n(47120);
function i(e, t, n) {
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
let a = 'data-list-item-id',
    o = 'data-list-id',
    s = '___';
function l(e, t) {
    return ''.concat(e).concat(s).concat(t);
}
function u(e) {
    return e.split(s)[1];
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
    return '['.concat(t, '="').concat(e, '"]');
}
function d(e, t) {
    return ''.concat(e, '-').concat(t);
}
function _(e, t, n) {
    return ''.concat(e, '-').concat(t, '-').concat(n);
}
function E(e, t) {
    let n = !1;
    return function () {
        for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
        !n && (e(...i), (n = !0), setTimeout(() => (n = !1), t));
    };
}
class f {
    get(e) {
        let t = this.handlers.get(e);
        return null == t && ((t = this.makeHandler(e)), this.handlers.set(e, t)), t;
    }
    clean() {
        delete this.handlers, (this.handlers = new Map());
    }
    constructor(e) {
        i(this, 'makeHandler', void 0), i(this, 'handlers', void 0), (this.makeHandler = e), (this.handlers = new Map()), (this.makeHandler = e);
    }
}
