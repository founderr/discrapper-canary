n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    l = n(300284),
    s = n(314897),
    o = n(475413),
    c = n(388032);
function d(e) {
    let { userId: t, onClose: n } = e,
        d = (0, l.Z)();
    return (0, r.e7)([s.default], () => s.default.getId() === t)
        ? (0, i.jsx)(o.oY, {
              action: 'EDIT_PROFILE',
              icon: a.PencilIcon,
              tooltipText: c.intl.string(c.t.s5vZlZ),
              onClick: () => {
                  null == n || n(), d();
              }
          })
        : null;
}
