n.d(t, {
  Z: function() {
    return o
  }
});
var l = n(735250);
n(470079);
var i = n(481060),
  s = n(475179),
  a = n(871499),
  r = n(689938);

function o(e) {
  let {
    channelId: t,
    ...n
  } = e;
  return (0, l.jsx)(a.Z, {
    onClick: function() {
      s.Z.selectParticipant(t, null)
    },
    label: r.Z.Messages.VIDEO_CALL_RETURN_TO_GRID,
    iconComponent: i.GridSquareIcon,
    tooltipPosition: "bottom",
    ...n
  })
}