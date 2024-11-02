n.d(t, {
    W: function () {
        return o;
    }
});
var l = n(592125),
    a = n(496675),
    i = n(981631);
function o(e) {
    let t = l.Z.getChannel(e),
        n = null == t ? void 0 : t.isPrivate(),
        o = null == t ? void 0 : t.isForumChannel();
    return n || (a.Z.can(i.Plq.ATTACH_FILES, t) && a.Z.can(i.Plq.SEND_MESSAGES, t) && !o);
}
