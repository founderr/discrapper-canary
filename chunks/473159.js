n.d(t, {
    O: function () {
        return l;
    }
});
var r = n(47120);
var i = n(284737),
    a = n(228488),
    o = n(830917),
    s = n(919570);
function l(e) {
    let t = e.document,
        n = (0, o.Ig)(e);
    function r() {
        (0, i.dx)(e);
    }
    function l() {
        (0, i.T_)(e, !0);
    }
    function u() {
        !e.document.hasFocus() && (0, i.T_)(e, !1);
    }
    function c() {
        (0, i.gH)(e);
    }
    function d() {
        (0, i.Rz)(e);
    }
    function _() {
        (0, s.gK)(n);
    }
    function E() {
        setTimeout(() => {
            (0, s.HQ)(n);
        }, 0);
    }
    function f() {
        (0, i.CO)(e);
    }
    for (let n of (e.addEventListener('resize', r), e.addEventListener('focus', l), e.addEventListener('blur', u), e.addEventListener('unload', d), e.addEventListener('visibilitychange', f), s.wu)) t.addEventListener(n, _, !0), t.addEventListener(n, E, !1);
    (0, a.uF)(t, c), (0, i.S1)(e);
}
