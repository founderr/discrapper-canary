n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(481060),
  r = n(592125),
  o = n(944486),
  c = n(471253),
  u = n(623633),
  d = n(930180),
  E = n(689938),
  _ = n(905185);

function I(e) {
  let t = o.Z.getVoiceChannelId();
  if (null == t) return;
  let n = r.Z.getChannel(t);
  if (null != n)(0, c.RK)(n, e)
}

function T() {
  var e;
  let t = (0, u.Z)(),
    n = null !== (e = (0, d._d)(null == t ? void 0 : t.id)) && void 0 !== e ? e : 0;
  return null == t ? null : (0, s.jsxs)(a.Notice, {
    className: _.container,
    color: a.NoticeColors.DEFAULT,
    children: [(0, s.jsx)("div", {
      children: E.Z.Messages.STAGE_SPEAK_INVITE_HEADER
    }), n > 0 ? (0, s.jsxs)("div", {
      className: _.blocked,
      children: [(0, s.jsx)(a.DenyIcon, {
        size: "xxs",
        color: "currentColor",
        className: _.blockedIcon
      }), (0, s.jsx)("div", {
        className: _.blockedText,
        children: E.Z.Messages.STAGE_SPEAK_INVITE_HEADER_BLOCKED_USERS.format({
          number: n
        })
      })]
    }) : null, (0, s.jsx)(a.Button, {
      className: l()(_.__invalid_button, _.acceptButton),
      size: a.Button.Sizes.MIN,
      color: a.Button.Colors.WHITE,
      onClick: () => I(!1),
      children: (0, s.jsx)(a.Text, {
        className: _.acceptText,
        variant: "text-xs/normal",
        color: "none",
        children: E.Z.Messages.STAGE_SPEAK_INVITE_ACCEPT
      })
    }), (0, s.jsx)(a.Button, {
      className: l()(_.__invalid_button, _.declineButton),
      look: a.Button.Looks.OUTLINED,
      size: a.Button.Sizes.MIN,
      color: a.Button.Colors.WHITE,
      onClick: () => I(!0),
      children: (0, s.jsx)(a.Text, {
        className: _.declineText,
        variant: "text-xs/normal",
        color: "none",
        children: E.Z.Messages.STAGE_SPEAK_INVITE_DECLINE
      })
    })]
  })
}