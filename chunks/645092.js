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
  r = n(739566),
  o = n(467679),
  c = n(778947),
  u = n(702346),
  d = n(787374),
  E = n(674563),
  _ = n(689938),
  I = n(923255);

function T(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, T = (0, r.ZP)(t), N = i(T), {
    avatarSrc: m,
    eventHandlers: {
      onMouseEnter: h,
      onMouseLeave: C
    }
  } = (0, d.m)(!0);
  return (0, s.jsx)("div", {
    onMouseEnter: h,
    onMouseLeave: C,
    children: (0, s.jsx)(u.Z, {
      className: l()(I.mainContainer, {
        [I.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(d.S, {
        src: m
      }),
      iconContainerClassName: I.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: l()(I.content, {
          [I.compact]: n
        }),
        children: [(0, s.jsx)(c.nD, {
          message: t,
          messageClassname: I.spanCorrection,
          className: l()(I.usernameContainer, I.spanCorrection, {
            [I.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: I.spanCorrection,
            children: [(0, s.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: I.username,
              children: _.Z.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(o.Z, {
              type: E.Hb.SYSTEM_DM,
              className: I.systemTag
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(I.__invalid_messageContent, {
            [I.compact]: n
          }),
          children: _.Z.Messages.GUILD_REPORT_FALSE_ALARM_SYSTEM_MESSAGE_SHORT.format({
            username: T.nick,
            usernameHook: N
          })
        })]
      })
    })
  })
}