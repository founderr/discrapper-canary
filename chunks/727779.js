n.d(t, {
  Z: function() {
    return c
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(824203),
  a = n(981631),
  r = n(689938),
  o = n(166804);

function c(e) {
  var t;
  let n, {
      message: c,
      onDeleteMessage: u,
      children: d
    } = e,
    E = null === (t = c.interactionMetadata) || void 0 === t ? void 0 : t.ephemerality_reason,
    _ = () => u(c, !0);
  if (null != E) {
    let e = (0, l.in)(E);
    n = (0, s.jsx)("div", {
      className: o.userAppsBetaContent,
      children: r.Z.Messages.APPLICATION_COMMAND_USER_INSTALL_EPHEMERAL_WITH_REASON.format({
        handleDelete: _,
        reason: e
      })
    })
  } else n = c.type === a.uaV.STAGE_RAISE_HAND ? r.Z.Messages.STAGE_SYSTEM_MESSAGE_MODERATOR_VISIBILITY_MESSAGE.format({
    handleDelete: _
  }) : r.Z.Messages.ONLY_YOU_CAN_SEE_AND_DELETE_THESE.format({
    count: 1,
    countMessages: 1,
    handleDelete: _
  });
  return (0, s.jsxs)("div", {
    className: o.ephemeralMessage,
    onClick: e => e.stopPropagation(),
    children: [(0, s.jsx)(i.EyeIcon, {
      size: "xs",
      color: "currentColor",
      className: o.icon
    }), n, d]
  })
}