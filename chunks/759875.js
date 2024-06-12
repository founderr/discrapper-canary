"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var i = n("255025"),
  l = n("481060"),
  s = n("346610"),
  u = n("868643"),
  r = n("996861"),
  o = n("689938");

function d(e, t) {
  let n = (0, u.useCanForwardMessage)(e),
    {
      canForwardMessages: d
    } = s.MessageForwardingExperiment.useExperiment({
      location: "MessageActionsMenu"
    });
  return n && d ? (0, a.jsx)(l.MenuItem, {
    id: "forward",
    label: o.default.Messages.MESSAGE_ACTION_FORWARD,
    icon: i.ChatArrowRightIcon,
    action: () => {
      (0, r.forwardMessage)(t, e)
    }
  }) : null
}