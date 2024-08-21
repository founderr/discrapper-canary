n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(493683),
    s = n(592125),
    l = n(594174),
    d = n(689938);
function u(e, t) {
    let n = (0, i.e7)([l.default], () => l.default.getCurrentUser(), []),
        u = (0, i.e7)([s.Z], () => s.Z.getChannel(t), [t]);
    return null == u || u.isOwner(e) || null == n || !u.isOwner(n.id)
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'remove',
              label: d.Z.Messages.REMOVE_FROM_GROUP,
              action: () => o.Z.removeRecipient(t, e),
              color: 'danger'
          });
}
