n.d(t, {
    Z: function () {
        return o;
    },
    q: function () {
        return s;
    }
});
var r = n(470079),
    i = n(812206),
    a = n(701488);
function o(e) {
    return r.useMemo(() => s(e), [e]);
}
function s(e) {
    var t, n;
    if (!(null != e && a.P9.includes(null != e ? e : ''))) return !0;
    return null === (n = i.Z.getApplication(e)) || void 0 === n ? void 0 : null === (t = n.embeddedActivityConfig) || void 0 === t ? void 0 : t.legacy_responsive_aspect_ratio;
}
