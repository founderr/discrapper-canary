"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("446674"),
  a = n("77078"),
  o = n("102985"),
  u = n("79798"),
  d = n("754474"),
  c = n("158998"),
  f = n("782340"),
  E = n("892802");

function h(e) {
  if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return d.BotTypes.AI;
  if (e.bot) return d.BotTypes.BOT;
  return null
}
let _ = e => {
  let {
    primary: t,
    secondary: n,
    botType: r,
    botVerified: s,
    discriminatorClass: o,
    className: d,
    usernameClass: c,
    color: h,
    botClass: _,
    showStreamerModeTooltip: C
  } = e;
  return (0, i.jsxs)("div", {
    className: l(E.info, d),
    children: [(0, i.jsx)(a.Tooltip, {
      text: f.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: C,
      "aria-label": !!C && void 0,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: l(E.username, c),
        style: null != h ? {
          color: h
        } : void 0,
        children: t
      })
    }), null != n ? (0, i.jsx)("span", {
      className: l(E.infoSpacing, o),
      children: n
    }) : void 0, null != r && (0, i.jsx)(u.default, {
      type: r,
      className: l(E.infoSpacing, _),
      verified: s
    })]
  })
};
var C = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: r,
    forceUsername: l,
    showAccountIdentifier: a,
    overrideDiscriminator: u,
    forcePomelo: f,
    ...E
  } = e, C = (0, s.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), p = C || t || n.isNonUserBot(), S = n.toString(), I = c.default.getName(n), R = l ? S : null != r ? r : I, m = n.isPomelo() || f;
  if (m || R !== S) {
    let e = R === S && m && l ? c.default.getUserTag(n, {
        forcePomelo: f
      }) : R,
      t = a && e !== "@".concat(S) ? c.default.getUserTag(n) : void 0;
    return (0, i.jsx)(_, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: h(n),
      showStreamerModeTooltip: C && e !== I,
      ...E
    })
  }
  return (0, i.jsx)(d.default, {
    name: R,
    botType: h(n),
    botVerified: n.isVerifiedBot(),
    discriminator: p || R !== S ? null : null != u ? u : n.discriminator,
    ...E
  })
}