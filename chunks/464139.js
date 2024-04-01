"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("735250");
n("470079");
var l = n("803997"),
  a = n.n(l),
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
  I = n("297621");

function m(e) {
  var t;
  let {
    message: n,
    compact: l,
    usernameHook: m,
    channel: N
  } = e, p = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(N.guild_id)), S = (0, o.default)(n), C = m(S), {
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
      className: a()(I.mainContainer, {
        [I.compact]: l
      }),
      iconNode: l ? null : (0, s.jsx)(f.AutomodAvatar, {
        src: A
      }),
      iconContainerClassName: I.iconContainer,
      compact: l,
      children: (0, s.jsxs)("div", {
        className: a()(I.content, {
          [I.compact]: l
        }),
        children: [(0, s.jsx)(c.BaseMessageHeader, {
          message: n,
          messageClassname: I.spanCorrection,
          className: a()(I.usernameContainer, I.spanCorrection, {
            [I.compact]: l
          }),
          username: (0, s.jsxs)("div", {
            className: I.spanCorrection,
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: I.username,
              children: T.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(d.default, {
              type: _.BotTagTypes.SYSTEM_DM,
              className: I.systemTag
            })]
          }),
          compact: l,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: a()(I.__invalid_messageContent, {
            [I.compact]: l
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