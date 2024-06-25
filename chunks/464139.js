n.d(t, {
  Z: function() {
    return N
  }
});
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(739566),
  c = n(430824),
  u = n(467679),
  d = n(778947),
  E = n(702346),
  _ = n(787374),
  I = n(674563),
  T = n(689938),
  m = n(923255);

function N(e) {
  var t;
  let {
    message: n,
    compact: i,
    usernameHook: N,
    channel: h
  } = e, C = (0, a.e7)([c.Z], () => c.Z.getGuild(h.guild_id)), S = (0, o.ZP)(n), A = N(S), {
    avatarSrc: g,
    eventHandlers: {
      onMouseEnter: p,
      onMouseLeave: f
    }
  } = (0, _.m)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: p,
    onMouseLeave: f,
    children: (0, s.jsx)(E.Z, {
      className: l()(m.mainContainer, {
        [m.compact]: i
      }),
      iconNode: i ? null : (0, s.jsx)(_.S, {
        src: g
      }),
      iconContainerClassName: m.iconContainer,
      compact: i,
      children: (0, s.jsxs)("div", {
        className: l()(m.content, {
          [m.compact]: i
        }),
        children: [(0, s.jsx)(d.nD, {
          message: n,
          messageClassname: m.spanCorrection,
          className: l()(m.usernameContainer, m.spanCorrection, {
            [m.compact]: i
          }),
          username: (0, s.jsxs)("div", {
            className: m.spanCorrection,
            children: [(0, s.jsx)(r.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: m.username,
              children: T.Z.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(u.Z, {
              type: I.Hb.SYSTEM_DM,
              className: m.systemTag
            })]
          }),
          compact: i,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(m.__invalid_messageContent, {
            [m.compact]: i
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