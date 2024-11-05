e.d(t, {
    v: function () {
        return i;
    }
});
var r = e(944486),
    l = e(176505);
function i() {
    var n;
    let t = null !== (n = r.Z.getCurrentlySelectedChannelId()) && void 0 !== n ? n : void 0;
    return null != t && (0, l.AB)(t) ? { channel_static_route: t } : { channel_id: t };
}
