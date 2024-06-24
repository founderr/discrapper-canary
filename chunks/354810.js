n.d(t, {
  Z: function() {
    return S
  }
});
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(974674),
  r = n(481060),
  o = n(420660),
  c = n(100527),
  u = n(906732),
  d = n(233440),
  h = n(199902),
  m = n(158776),
  p = n(998502),
  E = n(785717),
  g = n(204197),
  f = n(78675),
  C = n(438163),
  _ = n(652853),
  I = n(228168),
  x = n(981631),
  T = n(775784);
let N = p.ZP.getEnableHardwareAcceleration() ? a.Xo : a.qE,
  Z = r.AvatarSizes.SIZE_80;

function S(e) {
  let {
    user: t,
    displayProfile: n,
    channel: a,
    isHovering: p,
    onOpenProfile: S
  } = e, {
    theme: v
  } = (0, _.z)(), {
    analyticsLocations: A
  } = (0, u.ZP)(c.Z.AVATAR), {
    trackUserProfileAction: M
  } = (0, E.KZ)(), R = null == n ? void 0 : n.canUsePremiumProfileCustomization, {
    avatarSrc: j,
    eventHandlers: L,
    avatarDecorationSrc: O
  } = (0, g.Z)({
    user: t,
    size: Z,
    animateOnHover: !p
  }), P = i.useMemo(() => (0, d.W)(t, a.id), [t, a.id]), {
    status: y,
    customStatusActivity: b,
    isMobileOnline: D
  } = (0, s.cj)([h.Z, m.Z], () => {
    let e = null != h.Z.getAnyStreamForUser(t.id),
      n = m.Z.findActivity(t.id, t => {
        let {
          type: n
        } = t;
        return e ? n === x.IIU.PLAYING : n !== x.IIU.CUSTOM_STATUS
      });
    return {
      status: (0, o.Z)(n) ? r.StatusTypes.STREAMING : m.Z.getStatus(t.id),
      customStatusActivity: m.Z.findActivity(t.id, e => {
        let {
          type: t
        } = e;
        return t === x.IIU.CUSTOM_STATUS
      }),
      isMobileOnline: m.Z.isMobileOnline(t.id)
    }
  });
  return (0, l.jsxs)("header", {
    className: T.header,
    children: [(0, l.jsx)(f.Z, {
      user: t,
      displayProfile: n,
      profileType: I.y0.PANEL,
      animateOnHover: !p
    }), (0, l.jsx)(r.Clickable, {
      ...L,
      className: T.clickable,
      onClick: () => {
        M({
          action: "PRESS_VIEW_PROFILE",
          analyticsLocations: A
        }), null == S || S()
      },
      children: (0, l.jsx)(N, {
        src: j,
        avatarDecoration: O,
        size: Z,
        imageClassName: T.overlay,
        status: P || t.isNonUserBot() ? r.StatusTypes.UNKNOWN : y,
        statusBackdropColor: R && !P ? (0, r.getStatusBackdropColor)(v) : void 0,
        "aria-label": t.username,
        isMobile: D,
        statusTooltip: !0,
        statusTooltipDelay: I.vB
      })
    }), (0, l.jsx)(C.J, {
      user: t,
      statusActivity: b,
      profileType: I.y0.PANEL
    })]
  })
}