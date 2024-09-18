t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    s = t(481060),
    l = t(904245),
    r = t(665906),
    o = t(314897),
    u = t(418476),
    d = t(689938);
function c(e, n) {
    let t = (0, a.e7)([o.default], () => o.default.getId()),
        c = (0, r.$R)(n),
        E = (0, r.Gu)(n);
    return (0, u.Z)(e, t) && c && !E
        ? (0, i.jsx)(s.MenuItem, {
              id: 'edit',
              label: d.Z.Messages.EDIT_MESSAGE,
              action: () => l.Z.startEditMessage(n.id, e.id, e.content),
              icon: s.PencilIcon
          })
        : null;
}
