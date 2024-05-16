"use strict";
u.r(t), u.d(t, {
  default: function() {
    return o
  }
});
var n = u("735250");
u("470079");
var a = u("442837"),
  l = u("481060"),
  d = u("5036"),
  s = u("58468"),
  i = u("689938");

function o(e) {
  let t = (0, a.useStateFromStores)([s.default], () => s.default.isCollapsed(e.id), [e.id]);
  return __OVERLAY__ ? null : (0, n.jsx)(l.MenuCheckboxItem, {
    id: "hide-voice-names",
    label: i.default.Messages.VOICE_CHANNEL_HIDE_NAMES,
    action: () => d.default.update(e.id),
    checked: t
  })
}