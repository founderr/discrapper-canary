"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var i = n("138270"),
  l = n("481060"),
  s = n("346610"),
  r = n("868643"),
  u = n("996861"),
  o = n("689938");

function d(e, t) {
  let n = (0, r.useCanForwardMessage)(e),
    {
      canForwardMessages: d
    } = s.MessageForwardingExperiment.useExperiment({
      location: "MessageActionsMenu"
    });
  return n && d ? (0, a.jsx)(l.MenuItem, {
    id: "forward",
    label: o.default.Messages.MESSAGE_ACTION_FORWARD,
    icon: i.ArrowAngleRightUpIcon,
    action: () => {
      (0, u.forwardMessage)(t, e)
    }
  }) : null
}