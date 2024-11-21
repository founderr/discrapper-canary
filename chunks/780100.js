function r(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t) => e.test(t.brand))) || e.test(window.navigator.userAgent));
}
function i(e) {
    var t;
    return 'undefined' != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform);
}
function a(e) {
    let t = null;
    return () => (null == t && (t = e()), t);
}
n.d(t, {
    Dt: function () {
        return _;
    },
    Pf: function () {
        return d;
    },
    V5: function () {
        return s;
    },
    ad: function () {
        return c;
    },
    gn: function () {
        return u;
    },
    vU: function () {
        return p;
    },
    zc: function () {
        return l;
    }
});
let s = a(function () {
        return i(/^Mac/i);
    }),
    o = a(function () {
        return i(/^iPhone/i);
    }),
    l = a(function () {
        return i(/^iPad/i) || (s() && navigator.maxTouchPoints > 1);
    }),
    u = a(function () {
        return o() || l();
    }),
    c = a(function () {
        return s() || u();
    }),
    d = a(function () {
        return r(/AppleWebKit/i) && !f();
    }),
    f = a(function () {
        return r(/Chrome/i);
    }),
    _ = a(function () {
        return r(/Android/i);
    }),
    p = a(function () {
        return r(/Firefox/i);
    });
