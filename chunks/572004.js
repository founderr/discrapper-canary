n.d(t, {
    JG: function () {
        return l;
    },
    wS: function () {
        return s;
    }
});
var r = n(411104);
var i = n(852229),
    a = n(358085),
    o = n(998502);
let s = (() => {
    if (a.isPlatformEmbedded) return null != o.ZP.copy;
    try {
        return document.queryCommandEnabled('copy') || document.queryCommandSupported('copy');
    } catch (e) {
        return !1;
    }
})();
function l(e) {
    return !!s && (a.isPlatformEmbedded ? (o.ZP.copy(e), !0) : i.J(e));
}
