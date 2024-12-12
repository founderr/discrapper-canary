r.d(n, {
    h: function () {
        return a;
    }
});
var i = r(701488);
function a(e) {
    var n, r;
    if (i.Pc.has(e.id)) return !0;
    if ('embeddedActivityConfig' in e) return (null === (n = e.embeddedActivityConfig) || void 0 === n ? void 0 : n.displays_advertisements) === !0;
    if ('embedded_activity_config' in e) return (null === (r = e.embedded_activity_config) || void 0 === r ? void 0 : r.displays_advertisements) === !0;
    else return !1;
}
