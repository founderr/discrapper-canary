n.d(t, {
  Z: function() {
    return N
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
  E = n(981631),
  _ = n(674563),
  I = n(689938),
  T = n(923255);

function N(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, N = (0, r.ZP)(t), m = i(N), {
    avatarSrc: h,
    eventHandlers: {
      onMouseEnter: C,
      onMouseLeave: S
    }
  } = (0, d.m)(!0), A = "" !== t.content ? new Date(t.content).toLocaleString(I.Z.getLocale(), {
    hour: "numeric",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }) : "";
  return (0, s.jsx)("div", {
    onMouseEnter: C,
    onMouseLeave: S,
    children: (0, s.jsx)(u.Z, {
      className: l()(T.mainContainer, {
        [T.compact]: n
      }),
      iconNode: n ? null : (0, s.jsx)(d.S, {
        src: h
      }),
      iconContainerClassName: T.iconContainer,
      compact: n,
      children: (0, s.jsxs)("div", {
        className: l()(T.content, {
          [T.compact]: n
        }),
        children: [(0, s.jsx)(c.nD, {
          message: t,
          messageClassname: T.spanCorrection,
          className: l()(T.usernameContainer, T.spanCorrection, {
            [T.compact]: n
          }),
          username: (0, s.jsxs)("div", {
            className: T.spanCorrection,
            children: [(0, s.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: T.username,
              children: I.Z.Messages.GUILD_AUTOMOD_USERNAME
            }), (0, s.jsx)(o.Z, {
              type: _.Hb.SYSTEM_DM,
              className: T.systemTag
            })]
          }),
          compact: n,
          showTimestamp: !0
        }), (0, s.jsx)("div", {
          className: l()(T.__invalid_messageContent, {
            [T.compact]: n
          }),
          children: t.type === E.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED ? I.Z.Messages.GUILD_SERVER_LOCKDOWN_ENABLED_SYSTEM_MESSAGE_SHORT.format({
            username: N.nick,
            usernameHook: m,
            time: A
          }) : I.Z.Messages.GUILD_SERVER_LOCKDOWN_DISABLED_SYSTEM_MESSAGE.format({
            username: N.nick,
            usernameHook: m
          })
        })]
      })
    })
  })
}