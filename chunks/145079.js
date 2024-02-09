"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  a = n("102985"),
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
    botType: l,
    botVerified: r,
    discriminatorClass: a,
    className: c,
    usernameClass: d,
    color: C,
    botClass: v,
    showStreamerModeTooltip: p
  } = e;
  return (0, s.jsxs)("div", {
    className: i(h.info, c),
    children: [(0, s.jsx)(o.Tooltip, {
      text: f.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: p,
      "aria-label": !!p && void 0,
      children: e => (0, s.jsx)("span", {
        ...e,
        className: i(h.username, d),
        style: null != C ? {
          color: C
        } : void 0,
        children: t
      })
    }), null != n ? (0, s.jsx)("span", {
      className: i(h.infoSpacing, a),
      children: n
    }) : void 0, null != l && (0, s.jsx)(u.default, {
      type: l,
      className: i(h.infoSpacing, v),
      verified: r
    })]
  })
};
var p = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: l,
    forceUsername: i,
    showAccountIdentifier: o,
    overrideDiscriminator: u,
    forcePomelo: f,
    ...h
  } = e, p = (0, r.useStateFromStores)([a.default], () => a.default.hidePersonalInformation), E = p || t || n.isNonUserBot(), m = n.toString(), g = d.default.getName(n), I = i ? m : null != l ? l : g, L = n.isPomelo() || f;
  if (L || I !== m) {
    let e = I === m && L && i ? d.default.getUserTag(n, {
        forcePomelo: f
      }) : I,
      t = o && e !== "@".concat(m) ? d.default.getUserTag(n) : void 0;
    return (0, s.jsx)(v, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: C(n),
      showStreamerModeTooltip: p && e !== g,
      ...h
    })
  }
  return (0, s.jsx)(c.default, {
    name: I,
    botType: C(n),
    botVerified: n.isVerifiedBot(),
    discriminator: E || I !== m ? null : null != u ? u : n.discriminator,
    ...h
  })
}