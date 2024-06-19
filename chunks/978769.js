n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  r = n(709369),
  a = n(885110),
  o = n(976401),
  u = n(689938);

function c() {
  return null == (0, i.e7)([a.Z], () => a.Z.getBroadcast()) ? null : (0, l.jsx)(s.Popout, {
    position: "top",
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(r.Z, {
        onClose: t
      })
    },
    animation: s.Popout.Animation.FADE,
    children: e => (0, l.jsx)(o.Z, {
      ...e,
      tooltipText: u.Z.Messages.BROADCAST_SETTINGS,
      icon: s.SettingsIcon
    })
  })
}