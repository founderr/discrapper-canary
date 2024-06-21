n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(430824),
  c = n(467679),
  u = n(702346),
  d = n(739566),
  E = n(464891),
  _ = n(83561),
  I = n(674563),
  T = n(689938),
  N = n(840431);

function m(e) {
  var t;
  let {
    message: n,
    compact: i,
    usernameHook: m,
    channel: h
  } = e, C = (0, a.e7)([o.Z], () => o.Z.getGuild(h.guild_id)), S = (0, d.ZP)(n), A = m(S), {
    avatarSrc: p,
    eventHandlers: {
      onMouseEnter: g,
      onMouseLeave: f
    }
  } = (0, _.m)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: g,
    onMouseLeave: f,
    children: (0, s.jsx)(u.Z, {
      className: l()(N.mainContainer, {
        [N.compact]: i
      }),
      iconNode: i ? null : (0, s.jsx)(_.S, {
        src: p
      }),
      iconContainerClassName: N.iconContainer,
      compact: i,
      children: (0, s.jsxs)("div", {
        className: l()(N.content, {
          [N.compact]: i
        }),
        children: [(0, s.jsx)(E.nD, {
          message: n,
          messageClassname: N.spanCorrection,
          className: l()(N.usernameContainer, N.spanCorrection, {
            [N.compact]: i
          }),
          username: (0, s.jsxs)("div", {
            className: N.spanCorrection,
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: N.username,
              children: T.Z.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(c.Z, {
              type: I.Hb.SYSTEM_DM,
              className: N.systemTag
            })]
          }),
          compact: i,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(N.__invalid_messageContent, {
            [N.compact]: i
          }),
          children: T.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
            username: S.nick,
            usernameHook: A,
            guildName: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : ""
          })
        })]
      })
    })
  })
}