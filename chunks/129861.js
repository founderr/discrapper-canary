"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(246946),
  u = n(467679),
  _ = n(180828),
  c = n(51144),
  d = n(689938),
  E = n(81364);

function I(e) {
  if (e.isSystemUser()) return _.J.SYSTEM_DM;
  if (e.isClyde()) return _.J.AI;
  if (e.bot) return _.J.BOT;
  return null
}
let T = e => {
  let {
    primary: t,
    secondary: n,
    botType: r,
    botVerified: o,
    discriminatorClass: l,
    className: _,
    usernameClass: c,
    color: I,
    botClass: T,
    showStreamerModeTooltip: h
  } = e;
  return (0, i.jsxs)("div", {
    className: s()(E.info, _),
    children: [(0, i.jsx)(a.Tooltip, {
      text: d.Z.Messages.STREAMER_MODE_ENABLED,
      shouldShow: h,
      "aria-label": !!h && void 0,
      children: e => (0, i.jsx)("span", {
        ...e,
        className: s()(E.__invalid_username, c),
        style: null != I ? {
          color: I
        } : void 0,
        children: t
      })
    }), null != n ? (0, i.jsx)("span", {
      className: s()(E.infoSpacing, l),
      children: n
    }) : void 0, null != r && (0, i.jsx)(u.Z, {
      type: r,
      className: s()(E.infoSpacing, T),
      verified: o
    })]
  })
};
t.Z = e => {
  let {
    hideDiscriminator: t = !1,
    user: n,
    nick: r,
    forceUsername: s,
    showAccountIdentifier: a,
    overrideDiscriminator: u,
    forcePomelo: d,
    ...E
  } = e, h = (0, o.e7)([l.Z], () => l.Z.hidePersonalInformation), f = h || t || n.isNonUserBot(), S = n.toString(), A = c.ZP.getName(n), N = s ? S : null != r ? r : A, m = n.isPomelo() || d;
  if (m || N !== S) {
    let e = N === S && m && s ? c.ZP.getUserTag(n, {
        forcePomelo: d
      }) : N,
      t = a && e !== "@".concat(S) ? c.ZP.getUserTag(n) : void 0;
    return (0, i.jsx)(T, {
      primary: e,
      secondary: t,
      botVerified: n.isVerifiedBot(),
      botType: I(n),
      showStreamerModeTooltip: h && e !== A,
      ...E
    })
  }
  return (0, i.jsx)(_.Z, {
    name: N,
    botType: I(n),
    botVerified: n.isVerifiedBot(),
    discriminator: f || N !== S ? null : null != u ? u : n.discriminator,
    ...E
  })
}