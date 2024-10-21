t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    a = t(481060),
    s = t(493683),
    o = t(592125),
    d = t(594174),
    l = t(689938);
function u(e, n) {
    var t;
    let u = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
        c = (0, r.e7)([o.Z], () => o.Z.getChannel(n), [n]);
    return null == c || c.isOwner(e) || null == u || !c.isOwner(u.id) || !(null === (t = c.recipients) || void 0 === t ? void 0 : t.includes(e))
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'remove',
              label: l.Z.Messages.REMOVE_FROM_GROUP,
              action: () => s.Z.removeRecipient(n, e),
              color: 'danger'
          });
}
