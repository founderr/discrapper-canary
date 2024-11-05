e.d(t, {
    Z: function () {
        return a;
    }
});
var r = e(399606),
    l = e(592125),
    i = e(176505);
function a(n) {
    let t = (0, r.e7)([l.Z], () => {
        let t = l.Z.getChannel(n);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? l.Z.getChannel(null == t ? void 0 : t.parent_id) : null;
    });
    return (null == t ? void 0 : t.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
