"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("77078"),
  s = n("79112"),
  i = n("474571"),
  r = n("49111"),
  o = n("782340");

function u() {
  return (0, l.jsx)(a.MenuItem, {
    id: "voice-settings",
    label: o.default.Messages.VOICE_SETTINGS,
    action: () => s.default.open(r.UserSettingsSections.VOICE),
    icon: i.default
  })
}