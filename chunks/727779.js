"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("824203"),
  l = n("794358"),
  i = n("981631"),
  r = n("689938"),
  o = n("799038");

function u(e) {
  var t;
  let n, {
      message: u,
      onDeleteMessage: d,
      children: c
    } = e,
    f = null === (t = u.interactionMetadata) || void 0 === t ? void 0 : t.ephemerality_reason,
    E = () => d(u, !0);
  if (null != f) {
    let e = (0, a.getEphemeralReasonMessage)(f);
    n = (0, s.jsx)("div", {
      className: o.userAppsBetaContent,
      children: r.default.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_WITH_REASON.format({
        handleDelete: E,
        reason: e
      })
    })
  } else n = u.type === i.MessageTypes.STAGE_RAISE_HAND ? r.default.Messages.STAGE_SYSTEM_MESSAGE_MODERATOR_VISIBILITY_MESSAGE.format({
    handleDelete: E
  }) : r.default.Messages.ONLY_YOU_CAN_SEE_AND_DELETE_THESE.format({
    count: 1,
    countMessages: 1,
    handleDelete: E
  });
  return (0, s.jsxs)("div", {
    className: o.ephemeralMessage,
    onClick: e => e.stopPropagation(),
    children: [(0, s.jsx)(l.default, {
      className: o.icon,
      width: 16,
      height: 16
    }), n, c]
  })
}