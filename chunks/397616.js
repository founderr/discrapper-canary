t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(735250);
t(470079);
var r = t(442837), a = t(481060), s = t(493683), o = t(592125), l = t(594174), u = t(689938);
function d(e, n) {
    let t = (0, r.e7)([l.default], () => l.default.getCurrentUser(), []), d = (0, r.e7)([o.Z], () => o.Z.getChannel(n), [n]);
    return null == d || d.isOwner(e) || null == t || !d.isOwner(t.id) ? null : (0, i.jsx)(a.MenuItem, {
        id: 'remove',
        label: u.Z.Messages.REMOVE_FROM_GROUP,
        action: () => s.Z.removeRecipient(n, e),
        color: 'danger'
    });
}
