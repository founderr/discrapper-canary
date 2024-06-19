n.d(t, {
  Z: function() {
    return c
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(475179),
  a = n(871499),
  r = n(354459),
  o = n(689938);

function c(e) {
  let {
    channelId: t,
    isHorizontal: n,
    ...c
  } = e;
  return (0, l.jsx)(a.Z, {
    onClick: function() {
      s.Z.selectParticipant(t, r.dF.AUTO)
    },
    label: o.Z.Messages.VIDEO_CALL_AUTO_SELECT,
    iconComponent: n ? i.GridHorizontalIcon : i.GridVerticalIcon,
    tooltipPosition: "bottom",
    ...c
  })
}