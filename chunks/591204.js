t.d(n, {
  Z: function() {
    return s
  }
});
var i = t(735250);
t(470079);
var l = t(481060),
  a = t(895924),
  r = t(176412);

function s(e) {
  let {
    channel: n,
    application: t,
    sectionName: s,
    disabled: o,
    commandName: c
  } = e, {
    onActivityItemSelected: u,
    buttonColor: d,
    buttonText: m
  } = (0, r.P)(n, t, a.Vh.APP_LAUNCHER_APPLICATION_VIEW, s);
  return (0, i.jsx)(l.Button, {
    type: "submit",
    size: l.ButtonSizes.MEDIUM,
    color: d,
    disabled: o,
    onClick: u,
    children: null != c ? c : m
  })
}