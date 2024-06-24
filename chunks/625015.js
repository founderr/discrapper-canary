n(47120);
var l = n(735250),
  i = n(470079),
  s = n(704215),
  a = n(974674),
  r = n(481060),
  o = n(243778),
  c = n(261892),
  u = n(197115),
  d = n(703656),
  h = n(594174),
  m = n(626135),
  p = n(74538),
  E = n(204197),
  g = n(502762),
  f = n(981631),
  C = n(921944),
  _ = n(474936),
  I = n(689938),
  x = n(780104);

function T() {
  m.default.track(f.rMx.PREMIUM_UPSELL_INTERACTED, {
    cta_type: "Learn more button",
    target: "premium marketing page"
  }), (0, d.uL)(f.Z5c.APPLICATION_STORE)
}

function N(e) {
  let {
    avatarSrc: t,
    username: n
  } = e, [i, c] = (0, o.U)([s.z.NITRO_ON_PROFILE_SIDE_PANEL], C.R.SIDEBAR, !0);
  return i !== s.z.NITRO_ON_PROFILE_SIDE_PANEL ? null : (0, l.jsxs)(g.Z.Overlay, {
    className: x.overlay,
    children: [(0, l.jsxs)("div", {
      className: x.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: x.contentText,
        children: I.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
          username: n
        })
      }), (0, l.jsx)(r.Clickable, {
        onClick: () => c(C.L.USER_DISMISS),
        "aria-label": I.Z.Messages.DISMISS,
        className: x.closeIconWrapper,
        children: (0, l.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: x.closeIcon
        })
      })]
    }), (0, l.jsxs)("div", {
      className: x.buttonGroup,
      children: [(0, l.jsx)(r.Button, {
        className: x.learnMoreButton,
        size: r.Button.Sizes.TINY,
        color: r.Button.Colors.CUSTOM,
        onClick: T,
        children: I.Z.Messages.LEARN_MORE
      }), (0, l.jsx)(u.Z, {
        className: x.getNitroButton,
        size: r.Button.Sizes.TINY,
        color: r.Button.Colors.CUSTOM,
        buttonText: I.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO
      })]
    })]
  })
}

function Z(e) {
  let {
    avatarSrc: t,
    username: n
  } = e, [i, c] = (0, o.U)([s.z.NITRO_ON_PROFILE_SIDE_PANEL], C.R.SIDEBAR, !0);
  return i !== s.z.NITRO_ON_PROFILE_SIDE_PANEL ? null : (0, l.jsx)(g.Z.Overlay, {
    className: x.overlay2,
    children: (0, l.jsxs)("div", {
      className: x.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: x.contentText,
        children: I.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1_WITH_LINK.format({
          username: n,
          onClickLearnMore: T
        })
      }), (0, l.jsx)(r.Clickable, {
        onClick: () => c(C.L.USER_DISMISS),
        "aria-label": I.Z.Messages.DISMISS,
        className: x.closeIconWrapper,
        children: (0, l.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: x.closeIcon
        })
      })]
    })
  })
}

function S(e) {
  let {
    avatarSrc: t,
    username: n
  } = e;
  return (0, l.jsx)(g.Z.Overlay, {
    className: x.overlay2,
    children: (0, l.jsxs)("div", {
      className: x.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: x.contentText,
        children: I.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1_WITH_LINK.format({
          username: n,
          onClickLearnMore: T
        })
      })]
    })
  })
}

function v(e) {
  let {
    variant: t,
    avatarSrc: n,
    username: i
  } = e;
  if (1 === t) return (0, l.jsx)(N, {
    avatarSrc: n,
    username: i
  });
  if (2 === t) return (0, l.jsx)(Z, {
    avatarSrc: n,
    username: i
  });
  if (3 === t) return (0, l.jsx)(S, {
    avatarSrc: n,
    username: i
  });
  return null
}
let A = i.memo(function(e) {
  let {
    user: t,
    displayProfile: n
  } = e, {
    avatarSrc: i
  } = (0, E.Z)({
    user: t,
    size: r.AvatarSizes.SIZE_32
  }), s = h.default.getCurrentUser(), a = p.ZP.isPremium(s) || null == n || !p.ZP.isPremiumAtLeast(n.premiumType, _.p9.TIER_2), {
    enabled: o,
    variant: u
  } = c.f.useExperiment({
    location: "SimplifiedProfilePanelPremiumUpsell"
  }, {
    disable: a,
    autoTrackExposure: !a
  });
  return o ? (0, l.jsx)(v, {
    variant: u,
    avatarSrc: i,
    username: t.username
  }) : null
});
t.Z = A