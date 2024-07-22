t.d(n, {
  Z: function() {
return E;
  }
});
var i = t(735250);
t(470079);
var l = t(442837),
  a = t(481060),
  r = t(595519),
  s = t(374065),
  o = t(542094),
  c = t(895924),
  u = t(496675),
  d = t(176412),
  m = t(231338),
  p = t(689938),
  _ = t(119178);

function E(e) {
  let {
channel: n,
application: t,
sectionName: E,
commandName: A,
buttonSize: h = a.ButtonSizes.MEDIUM
  } = e, {
onActivityItemSelected: f,
activityAction: N,
buttonColor: C,
buttonText: v
  } = (0, d.P7)(n, t, c.Vh.APP_LAUNCHER_APPLICATION_VIEW, E), I = function(e) {
let {
  channel: n,
  activityAction: t
} = e, i = (0, l.e7)([u.Z], () => u.Z.can(m.Pl.USE_EMBEDDED_ACTIVITIES, n)), a = (0, s.KF)(n.id), c = !1;
switch (t) {
  case o.JS.LEAVE:
    c = !1;
    break;
  case o.JS.START:
    n.isGuildVoice() ? a !== s.jy.CAN_LAUNCH && (c = !0) : !(0, r.WS)(n, !0) && (c = !0);
    break;
  case o.JS.JOIN:
    n.isGuildVoice() ? c = !i : !(0, r.WS)(n, !1) && (c = !0);
}
return c;
  }({
channel: n,
activityAction: N
  });
  return (0, i.jsx)(a.Tooltip, {
shouldShow: I,
tooltipContentClassName: _.tooltipContent,
text: p.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START,
children: e => {
  let {
    onClick: n,
    ...l
  } = e;
  return (0, i.jsx)(a.Button, {
    ...l,
    type: 'submit',
    size: h,
    color: C,
    disabled: I,
    onClick: () => {
      f(), null == n || n();
    },
    'aria-label': p.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
      buttonText: null != A ? A : v,
      applicationName: t.name
    }),
    children: null != A ? A : v
  });
}
  });
}