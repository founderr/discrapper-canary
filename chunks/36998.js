n.d(e, {
    v: function () {
        return i;
    }
});
var r = n(944486),
    l = n(176505);
function i() {
    var t;
    let e = null !== (t = r.Z.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
    return null != e && (0, l.AB)(e) ? { channel_static_route: e } : { channel_id: e };
}
