"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  i = s("695346"),
  l = s("689938");

function r(e) {
  let t = i.LegacyUsernameDisabled.useSetting();
  return (0, a.jsx)(n.FormSwitch, {
    hideBorder: !0,
    value: !t,
    onChange: () => i.LegacyUsernameDisabled.updateSetting(!t),
    note: t ? null : l.default.Messages.UNIQUE_USERNAME_TOGGLE_SUBTITLE.format({
      username: e.legacyUsername
    }),
    children: l.default.Messages.UNIQUE_USERNAME_TOGGLE_TITLE
  })
}