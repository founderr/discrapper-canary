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
  f = n("702346"),
  E = n("787374"),
  _ = n("674563"),
  m = n("689938"),
  T = n("807850");

function I(e) {
  var t;
  let {
    message: n,
    compact: a,
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
      className: l()(T.mainContainer, {
        [T.compact]: a
      }),
      iconNode: a ? null : (0, s.jsx)(E.AutomodAvatar, {
        src: C
      }),
      iconContainerClassName: T.iconContainer,
      compact: a,
      children: (0, s.jsxs)("div", {
        className: l()(T.content, {
          [T.compact]: a
        }),
        children: [(0, s.jsx)(c.BaseMessageHeader, {
          message: n,
          messageClassname: T.spanCorrection,
          className: l()(T.usernameContainer, T.spanCorrection, {
            [T.compact]: a
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
          compact: a,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(T.__invalid_messageContent, {
            [T.compact]: a
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