r.d(n, {
    Ft: function () {
        return u;
    },
    Ui: function () {
        return s;
    },
    Zn: function () {
        return o;
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
function s(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        i = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : '',
        a = null != e ? '?redirect_to='.concat(encodeURIComponent(e)) : '';
    return (
        0 !== r.length && (r = 0 === a.length ? '?'.concat(r) : '&'.concat(r)),
        ''
            .concat(n ? i : '', '/login')
            .concat(a)
            .concat(r)
    );
}
class o {
    toString() {
        return this.value;
    }
    constructor(e) {
        a(this, 'value', void 0), (this.value = e);
    }
}
function l(e, n) {
    return e.map((e) =>
        null == e
            ? e
            : e instanceof o
              ? e.toString()
              : null == n
                ? encodeURIComponent(e)
                : String(e)
                      .split('')
                      .map((e) => (null != n && n.includes(e) ? e : encodeURIComponent(e)))
                      .join('')
    );
}
function u(e, n) {
    let r = {};
    for (let i of Object.keys(e)) {
        let a = e[i];
        if ('function' != typeof a) {
            r[i] = a;
            continue;
        }
        r[i] = function () {
            for (var e = arguments.length, r = Array(e), i = 0; i < e; i++) r[i] = arguments[i];
            return a(...l(r, n));
        };
    }
    return r;
}
