"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var l = n("120356"),
  a = n.n(l),
  i = n("442837"),
  r = n("481060"),
  o = n("739566"),
  u = n("430824"),
  d = n("467679"),
  c = n("778947"),
  f = n("702346"),
  E = n("787374"),
  _ = n("674563"),
  m = n("689938"),
  T = n("297621");

function I(e) {
  var t;
  let {
    message: n,
    compact: l,
    usernameHook: I,
    channel: p
  } = e, h = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(p.guild_id)), N = (0, o.default)(n), S = I(N), {
    avatarSrc: C,
    eventHandlers: {
      onMouseEnter: A,
      onMouseLeave: g
    }
  } = (0, E.useAutomodAvatar)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: A,
    onMouseLeave: g,
    children: (0, s.jsx)(f.default, {
      className: a()(T.mainContainer, {
        [T.compact]: l
      }),
      iconNode: l ? null : (0, s.jsx)(E.AutomodAvatar, {
        src: C
      }),
      iconContainerClassName: T.iconContainer,
      compact: l,
      children: (0, s.jsxs)("div", {
        className: a()(T.content, {
          [T.compact]: l
        }),
        children: [(0, s.jsx)(c.BaseMessageHeader, {
          message: n,
          messageClassname: T.spanCorrection,
          className: a()(T.usernameContainer, T.spanCorrection, {
            [T.compact]: l
          }),
          username: (0, s.jsxs)("div", {
            className: T.spanCorrection,
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: T.username,
              children: m.default.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(d.default, {
              type: _.BotTagTypes.SYSTEM_DM,
              className: T.systemTag
            })]
          }),
          compact: l,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: a()(T.__invalid_messageContent, {
            [T.compact]: l
          }),
          children: m.default.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
            username: N.nick,
            usernameHook: S,
            guildName: null !== (t = null == h ? void 0 : h.name) && void 0 !== t ? t : ""
          })
        })]
      })
    })
  })
}