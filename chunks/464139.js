"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("442837"),
  r = n("481060"),
  o = n("739566"),
  u = n("430824"),
  d = n("467679"),
  c = n("778947"),
  E = n("702346"),
  f = n("787374"),
  _ = n("674563"),
  T = n("689938"),
  m = n("807850");

function I(e) {
  var t;
  let {
    message: n,
    compact: a,
    usernameHook: I,
    channel: N
  } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(N.guild_id)), S = (0, o.default)(n), C = I(S), {
    avatarSrc: A,
    eventHandlers: {
      onMouseEnter: h,
      onMouseLeave: g
    }
  } = (0, f.useAutomodAvatar)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: h,
    onMouseLeave: g,
    children: (0, s.jsx)(E.default, {
      className: l()(m.mainContainer, {
        [m.compact]: a
      }),
      iconNode: a ? null : (0, s.jsx)(f.AutomodAvatar, {
        src: A
      }),
      iconContainerClassName: m.iconContainer,
      compact: a,
      children: (0, s.jsxs)("div", {
        className: l()(m.content, {
          [m.compact]: a
        }),
        children: [(0, s.jsx)(c.BaseMessageHeader, {
          message: n,
          messageClassname: m.spanCorrection,
          className: l()(m.usernameContainer, m.spanCorrection, {
            [m.compact]: a
          }),
          username: (0, s.jsxs)("div", {
            className: m.spanCorrection,
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: m.username,
              children: T.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(d.default, {
              type: _.BotTagTypes.SYSTEM_DM,
              className: m.systemTag
            })]
          }),
          compact: a,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(m.__invalid_messageContent, {
            [m.compact]: a
          }),
          children: T.default.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
            username: S.nick,
            usernameHook: C,
            guildName: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : ""
          })
        })]
      })
    })
  })
}