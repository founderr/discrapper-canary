t.d(s, {
  Z: function() {
    return r
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(695346),
  l = t(689938);

function r(e) {
  let s = a.R_.useSetting();
  return (0, n.jsx)(i.FormSwitch, {
    hideBorder: !0,
    value: !s,
    onChange: () => a.R_.updateSetting(!s),
    note: s ? null : l.Z.Messages.UNIQUE_USERNAME_TOGGLE_SUBTITLE.format({
      username: e.legacyUsername
    }),
    children: l.Z.Messages.UNIQUE_USERNAME_TOGGLE_TITLE
  })
}