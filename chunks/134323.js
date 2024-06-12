"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var i = n("481060"),
  l = n("280845"),
  s = n("351167"),
  r = n("996861"),
  u = n("689938");

function o(e, t) {
  return (0, l.useCanReplyToMessage)(t, e) ? (0, a.jsx)(i.MenuItem, {
    id: "reply",
    label: u.default.Messages.MESSAGE_ACTION_REPLY,
    icon: s.default,
    action: n => {
      (0, r.replyToMessage)(t, e, n)
    }
  }) : null
}