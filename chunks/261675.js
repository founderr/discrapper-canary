"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var u = n("37983");
n("884691");
var a = n("77078"),
  d = n("306160"),
  l = n("782340");

function i(e) {
  return d.SUPPORTS_COPY ? (0, u.jsx)(a.MenuItem, {
    id: "copy-channel-topic",
    label: l.default.Messages.COPY_CHANNEL_TOPIC,
    action: () => (0, d.copy)(e.topic)
  }) : null
}