n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    o = n(493683),
    l = n(592125),
    d = n(594174),
    s = n(388032);
function u(e, t) {
    var n;
    let u = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
        c = (0, r.e7)([l.Z], () => l.Z.getChannel(t), [t]);
    return null == c || c.isOwner(e) || null == u || !c.isOwner(u.id) || !(null === (n = c.recipients) || void 0 === n ? void 0 : n.includes(e))
        ? null
        : (0, i.jsx)(a.MenuItem, {
              id: 'remove',
              label: s.intl.string(s.t.n5zMIy),
              action: () => o.Z.removeRecipient(t, e),
              color: 'danger'
          });
}
