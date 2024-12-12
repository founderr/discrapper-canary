r.d(n, {
    JG: function () {
        return u;
    },
    wS: function () {
        return l;
    }
});
var i = r(411104);
var a = r(852229),
    s = r(358085),
    o = r(998502);
let l = (() => {
    if (s.isPlatformEmbedded) return null != o.ZP.copy;
    try {
        return document.queryCommandEnabled('copy') || document.queryCommandSupported('copy');
    } catch (e) {
        return !1;
    }
})();
function u(e) {
    return !!l && (s.isPlatformEmbedded ? (o.ZP.copy(e), !0) : a.J(e));
}
