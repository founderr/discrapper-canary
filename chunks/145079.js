"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("446674"),
  a = n("77078"),
  u = n("102985"),
  o = n("79798"),
  c = n("754474"),
  d = n("158998"),
  f = n("782340"),
  I = n("892802");

function _(e) {
  if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
  if (e.isClyde()) return c.BotTypes.AI;
  if (e.bot) return c.BotTypes.BOT;
  return null
}
let E = e => {
  let {
    primary: t,
    secondary: n,
    botType: i,
    botVerified: l,
    discriminatorClass: u,
    className: c,
    usernameClass: d,
    color: _,
    botClass: E,
    showStreamerModeTooltip: T
  } = e;
  return (0, r.jsxs)("div", {
    className: s(I.info, c),
    children: [(0, r.jsx)(a.Tooltip, {
      text: f.default.Messages.STREAMER_MODE_ENABLED,
      shouldShow: T,
      "aria-label": !!T && void 0,
      children: e => (0, r.jsx)("span", {
        ...e,
        className: s(I.username, d),
        style: null != _ ? {
          color: _
        } : void 0,
        children: t
      })
    }), null != n ? (0, r.jsx)("span", {
      className: s(I.infoSpacing, u),
      children: n
    }) : void 0, null != i && (0, r.jsx)(o.default, {
      type: i,
      className: s(I.infoSpacing, E),
      verified: l
    })]
  })
};
var T = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: i,
    forceUsername: s,
    showAccountIdentifier: a,
    overrideDiscriminator: o,
    forcePomelo: f,
    ...I
  } = e, T = (0, l.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), S = T || t || n.isNonUserBot(), N = n.toString(), p = d.default.getName(n), C = s ? N : null != i ? i : p, m = n.isPomelo() || f;
  if (m || C !== N) {
    let e = C === N && m && s ? d.default.getUserTag(n, {
        forcePomelo: f
      }) : C,
      t = a && e !== "@".concat(N) ? d.default.getUserTag(n) : void 0;
    return (0, r.jsx)(E, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: _(n),
      showStreamerModeTooltip: T && e !== p,
      ...I
    })
  }
  return (0, r.jsx)(c.default, {
    name: C,
    botType: _(n),
    botVerified: n.isVerifiedBot(),
    discriminator: S || C !== N ? null : null != o ? o : n.discriminator,
    ...I
  })
}