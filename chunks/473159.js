r.d(n, {
    O: function () {
        return u;
    }
});
var i = r(47120);
var a = r(284737),
    s = r(228488),
    o = r(830917),
    l = r(919570);
function u(e) {
    let n = e.document,
        r = (0, o.Ig)(e);
    function i() {
        (0, a.dx)(e);
    }
    function u() {
        (0, a.T_)(e, !0);
    }
    function c() {
        !e.document.hasFocus() && (0, a.T_)(e, !1);
    }
    function d() {
        (0, a.gH)(e);
    }
    function f() {
        (0, a.Rz)(e);
    }
    function _() {
        (0, l.gK)(r);
    }
    function h() {
        setTimeout(() => {
            (0, l.HQ)(r);
        }, 0);
    }
    function p() {
        (0, a.CO)(e);
    }
    for (let r of (e.addEventListener('resize', i), e.addEventListener('focus', u), e.addEventListener('blur', c), e.addEventListener('unload', f), e.addEventListener('visibilitychange', p), l.wu)) n.addEventListener(r, _, !0), n.addEventListener(r, h, !1);
    (0, s.uF)(n, d), (0, a.S1)(e);
}
