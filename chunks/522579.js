n.d(t, {
    z9: function () {
        return r;
    }
}),
    n(399606);
var i = n(592125),
    l = n(709054);
function r(e, t) {
    if (e !== l.default.castChannelIdAsMessageId(t)) return !1;
    let n = i.Z.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let r = i.Z.getChannel(n.parent_id);
    return (null == r ? void 0 : r.isMediaChannel()) === !0;
}
