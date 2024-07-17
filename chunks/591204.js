t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250);
t(470079);
var l = t(481060),
  a = t(595519),
  r = t(542094),
  s = t(895924),
  o = t(176412),
  c = t(689938),
  u = t(539932);

function d(e) {
  let {
channel: n,
application: t,
sectionName: d,
commandName: m
  } = e, {
onActivityItemSelected: p,
activityAction: _,
buttonColor: E,
buttonText: A
  } = (0, o.P7)(n, t, s.Vh.APP_LAUNCHER_APPLICATION_VIEW, d), h = !(0, a.WS)(n, _ === r.JS.START);
  return (0, i.jsx)(l.Tooltip, {
shouldShow: h,
tooltipContentClassName: u.tooltipContent,
text: c.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START,
children: e => {
  let {
    onClick: n,
    ...a
  } = e;
  return (0, i.jsx)(l.Button, {
    ...a,
    type: 'submit',
    size: l.ButtonSizes.MEDIUM,
    color: E,
    disabled: h,
    onClick: () => {
      p(), null == n || n();
    },
    'aria-label': c.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
      buttonText: null != m ? m : A,
      applicationName: t.name
    }),
    children: null != m ? m : A
  });
}
  });
}