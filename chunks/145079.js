"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  i = n.n(a),
  s = n("446674"),
  r = n("77078"),
  u = n("102985"),
  d = n("79798"),
  o = n("754474"),
  c = n("158998"),
  f = n("782340"),
  E = n("892802");

function I(e) {
  if (e.isSystemUser()) return o.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return o.BotTypes.AI;
  if (e.bot) return o.BotTypes.BOT;
  return null
}
let _ = e => {
  let {
    primary: t,
    secondary: n,
    botType: a,
    botVerified: s,
    discriminatorClass: u,
    className: o,
    usernameClass: c,
    color: I,
    botClass: _,
    showStreamerModeTooltip: h
  } = e;
  return (0, l.jsxs)("div", {
    className: i(E.info, o),
    children: [(0, l.jsx)(r.Tooltip, {
      text: f.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: h,
      "aria-label": !!h && void 0,
      children: e => (0, l.jsx)("span", {
        ...e,
        className: i(E.username, c),
        style: null != I ? {
          color: I
        } : void 0,
        children: t
      })
    }), null != n ? (0, l.jsx)("span", {
      className: i(E.infoSpacing, u),
      children: n
    }) : void 0, null != a && (0, l.jsx)(d.default, {
      type: a,
      className: i(E.infoSpacing, _),
      verified: s
    })]
  })
};
var h = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: a,
    forceUsername: i,
    showAccountIdentifier: r,
    overrideDiscriminator: d,
    forcePomelo: f,
    ...E
  } = e, h = (0, s.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), T = h || t || n.isNonUserBot(), v = n.toString(), N = c.default.getName(n), m = i ? v : null != a ? a : N, S = n.isPomelo() || f;
  if (S || m !== v) {
    let e = m === v && S && i ? c.default.getUserTag(n, {
        forcePomelo: f
      }) : m,
      t = r && e !== "@".concat(v) ? c.default.getUserTag(n) : void 0;
    return (0, l.jsx)(_, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: I(n),
      showStreamerModeTooltip: h && e !== N,
      ...E
    })
  }
  return (0, l.jsx)(o.default, {
    name: m,
    botType: I(n),
    botVerified: n.isVerifiedBot(),
    discriminator: T || m !== v ? null : null != d ? d : n.discriminator,
    ...E
  })
}