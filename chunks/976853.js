n.d(e, {
    Z: function () {
        return a;
    }
});
var r = n(399606),
    l = n(592125),
    i = n(176505);
function a(t) {
    let e = (0, r.e7)([l.Z], () => {
        let e = l.Z.getChannel(t);
        return (null == e ? void 0 : e.parent_id) != null && e.isForumPost() ? l.Z.getChannel(null == e ? void 0 : e.parent_id) : null;
    });
    return (null == e ? void 0 : e.hasFlag(i.zZ.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0;
}
