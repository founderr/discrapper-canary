"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("735250");
n("470079");
var u = n("481060"),
  l = n("572004"),
  s = n("689938");

function i(e) {
  return l.SUPPORTS_COPY ? (0, a.jsx)(u.MenuItem, {
    id: "copy-channel-topic",
    label: s.default.Messages.COPY_CHANNEL_TOPIC,
    action: () => (0, l.copy)(e.topic)
  }) : null
}