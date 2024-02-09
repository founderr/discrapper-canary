"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var r = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("446674"),
  a = n("77078"),
  o = n("102985"),
  u = n("79798"),
  c = n("754474"),
  d = n("158998"),
  f = n("782340"),
  h = n("892802");

function C(e) {
  if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return c.BotTypes.AI;
  if (e.bot) return c.BotTypes.BOT;
  return null
}
let v = e => {
  let {
    primary: t,
    secondary: n,
    botType: s,
    botVerified: l,
    discriminatorClass: o,
    className: c,
    usernameClass: d,
    color: C,
    botClass: v,
    showStreamerModeTooltip: p
  } = e;
  return (0, r.jsxs)("div", {
    className: i(h.info, c),
    children: [(0, r.jsx)(a.Tooltip, {
      text: f.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: p,
      "aria-label": !!p && void 0,
      children: e => (0, r.jsx)("span", {
        ...e,
        className: i(h.username, d),
        style: null != C ? {
          color: C
        } : void 0,
        children: t
      })
    }), null != n ? (0, r.jsx)("span", {
      className: i(h.infoSpacing, o),
      children: n
    }) : void 0, null != s && (0, r.jsx)(u.default, {
      type: s,
      className: i(h.infoSpacing, v),
      verified: l
    })]
  })
};
var p = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: s,
    forceUsername: i,
    showAccountIdentifier: a,
    overrideDiscriminator: u,
    forcePomelo: f,
    ...h
  } = e, p = (0, l.useStateFromStores)([o.default], () => o.default.hidePersonalInformation), E = p || t || n.isNonUserBot(), m = n.toString(), g = d.default.getName(n), I = i ? m : null != s ? s : g, L = n.isPomelo() || f;
  if (L || I !== m) {
    let e = I === m && L && i ? d.default.getUserTag(n, {
        forcePomelo: f
      }) : I,
      t = a && e !== "@".concat(m) ? d.default.getUserTag(n) : void 0;
    return (0, r.jsx)(v, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: C(n),
      showStreamerModeTooltip: p && e !== g,
      ...h
    })
  }
  return (0, r.jsx)(c.default, {
    name: I,
    botType: C(n),
    botVerified: n.isVerifiedBot(),
    discriminator: E || I !== m ? null : null != u ? u : n.discriminator,
    ...h
  })
}