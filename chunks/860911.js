r.d(t, {
    Ft: function () {
        return _;
    },
    Ui: function () {
        return a;
    },
    Zn: function () {
        return n;
    }
}),
    r(47120);
function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
        a = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : '',
        n = null != e ? '?redirect_to='.concat(encodeURIComponent(e)) : '';
    return (
        0 !== r.length && (r = 0 === n.length ? '?'.concat(r) : '&'.concat(r)),
        ''
            .concat(t ? a : '', '/login')
            .concat(n)
            .concat(r)
    );
}
class n {
    toString() {
        return this.value;
    }
    constructor(e) {
        var t, r, a;
        (t = this),
            (a = void 0),
            (r = 'value') in t
                ? Object.defineProperty(t, r, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[r] = a),
            (this.value = e);
    }
}
function _(e, t) {
    let r = {};
    for (let a of Object.keys(e)) {
        let _ = e[a];
        if ('function' != typeof _) {
            r[a] = _;
            continue;
        }
        r[a] = function () {
            for (var e = arguments.length, r = Array(e), a = 0; a < e; a++) r[a] = arguments[a];
            return _(
                ...(function (e, t) {
                    return e.map((e) =>
                        null == e
                            ? e
                            : e instanceof n
                              ? e.toString()
                              : null == t
                                ? encodeURIComponent(e)
                                : String(e)
                                      .split('')
                                      .map((e) => (null != t && t.includes(e) ? e : encodeURIComponent(e)))
                                      .join('')
                    );
                })(r, t)
            );
        };
    }
    return r;
}
