n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(300284),
  a = n(785717),
  r = n(993409),
  o = n(689938);

function c(e) {
  let {
    onClose: t
  } = e, {
    trackUserProfileAction: n
  } = (0, a.KZ)(), c = (0, l.Z)();
  return (0, s.jsx)(r.Z, {
    variant: "banner",
    icon: i.PencilIcon,
    text: o.Z.Messages.EDIT_PROFILE,
    onClick: () => {
      n({
        action: "EDIT_PROFILE"
      }), null == t || t(), c()
    }
  })
}