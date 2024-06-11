"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("481060"),
  r = n("592125"),
  o = n("944486"),
  u = n("83097"),
  d = n("471253"),
  c = n("623633"),
  f = n("930180"),
  E = n("689938"),
  _ = n("13408");

function m(e) {
  let t = o.default.getVoiceChannelId();
  if (null == t) return;
  let n = r.default.getChannel(t);
  null != n && (0, d.audienceAckRequestToSpeak)(n, e)
}

function T() {
  var e;
  let t = (0, c.default)(),
    n = null !== (e = (0, f.useStageBlockedUsersCount)(null == t ? void 0 : t.id)) && void 0 !== e ? e : 0;
  return null == t ? null : (0, s.jsxs)(i.Notice, {
    className: _.container,
    color: i.NoticeColors.DEFAULT,
    children: [(0, s.jsx)("div", {
      children: E.default.Messages.STAGE_SPEAK_INVITE_HEADER
    }), n > 0 ? (0, s.jsxs)("div", {
      className: _.blocked,
      children: [(0, s.jsx)(u.default, {
        width: 12,
        height: 12,
        className: _.blockedIcon
      }), (0, s.jsx)("div", {
        className: _.blockedText,
        children: E.default.Messages.STAGE_SPEAK_INVITE_HEADER_BLOCKED_USERS.format({
          number: n
        })
      })]
    }) : null, (0, s.jsx)(i.Button, {
      className: l()(_.__invalid_button, _.acceptButton),
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.WHITE,
      onClick: () => m(!1),
      children: (0, s.jsx)(i.Text, {
        className: _.acceptText,
        variant: "text-xs/normal",
        color: "none",
        children: E.default.Messages.STAGE_SPEAK_INVITE_ACCEPT
      })
    }), (0, s.jsx)(i.Button, {
      className: l()(_.__invalid_button, _.declineButton),
      look: i.Button.Looks.OUTLINED,
      size: i.Button.Sizes.MIN,
      color: i.Button.Colors.WHITE,
      onClick: () => m(!0),
      children: (0, s.jsx)(i.Text, {
        className: _.declineText,
        variant: "text-xs/normal",
        color: "none",
        children: E.default.Messages.STAGE_SPEAK_INVITE_DECLINE
      })
    })]
  })
}