r.d(n, {
    W: function () {
        return a;
    }
});
var i = r(592125);
function a(e, n) {
    let r = i.Z.getChannel(n);
    return null != r && e.bot && r.isPrivate() && null == r.rawRecipients.find((n) => n.id === e.id);
}
