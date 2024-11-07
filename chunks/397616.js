i.d(e, {
    Z: function () {
        return u;
    }
});
var r = i(200651);
i(192379);
var t = i(442837),
    a = i(481060),
    s = i(493683),
    d = i(592125),
    l = i(594174),
    o = i(388032);
function u(n, e) {
    var i;
    let u = (0, t.e7)([l.default], () => l.default.getCurrentUser(), []),
        c = (0, t.e7)([d.Z], () => d.Z.getChannel(e), [e]);
    return null == c || c.isOwner(n) || null == u || !c.isOwner(u.id) || !(null === (i = c.recipients) || void 0 === i ? void 0 : i.includes(n))
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'remove',
              label: o.intl.string(o.t.n5zMIy),
              action: () => s.Z.removeRecipient(e, n),
              color: 'danger'
          });
}
