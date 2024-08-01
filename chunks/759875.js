n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(346610),
  r = n(868643),
  l = n(996861),
  o = n(689938);

function c(e, t) {
  let n = (0, r.a)(e),
{
  canForwardMessages: c
} = a.w.useExperiment({
  location: 'MessageActionsMenu'
}, {
  autoTrackExposure: !1
});
  return n && c ? (0, i.jsx)(s.MenuItem, {
id: 'forward',
label: o.Z.Messages.MESSAGE_ACTION_FORWARD,
icon: s.ChatArrowRightIcon,
action: () => {
  (0, l.ts)(t, e);
}
  }) : null;
}