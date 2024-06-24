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
  m = n(74538),
  p = n(204197),
  E = n(502762),
  g = n(981631),
  f = n(921944),
  C = n(474936),
  _ = n(689938),
  I = n(780104);

function x(e) {
  let {
    avatarSrc: t,
    username: n
  } = e, [i, c] = (0, o.U)([s.z.NITRO_ON_PROFILE_SIDE_PANEL], f.R.SIDEBAR, !0);
  return i !== s.z.NITRO_ON_PROFILE_SIDE_PANEL ? null : (0, l.jsxs)(E.Z.Overlay, {
    className: I.overlay,
    children: [(0, l.jsxs)("div", {
      className: I.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: I.contentText,
        children: _.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
          username: n
        })
      }), (0, l.jsx)(r.Clickable, {
        onClick: () => c(f.L.USER_DISMISS),
        "aria-label": _.Z.Messages.DISMISS,
        className: I.closeIconWrapper,
        children: (0, l.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: I.closeIcon
        })
      })]
    }), (0, l.jsxs)("div", {
      className: I.buttonGroup,
      children: [(0, l.jsx)(r.Button, {
        className: I.learnMoreButton,
        size: r.Button.Sizes.TINY,
        color: r.Button.Colors.CUSTOM,
        onClick: () => {
          (0, d.uL)(g.Z5c.APPLICATION_STORE)
        },
        children: _.Z.Messages.LEARN_MORE
      }), (0, l.jsx)(u.Z, {
        className: I.getNitroButton,
        size: r.Button.Sizes.TINY,
        color: r.Button.Colors.CUSTOM,
        buttonText: _.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO
      })]
    })]
  })
}

function T(e) {
  let {
    avatarSrc: t,
    username: n
  } = e, [i, c] = (0, o.U)([s.z.NITRO_ON_PROFILE_SIDE_PANEL], f.R.SIDEBAR, !0);
  return i !== s.z.NITRO_ON_PROFILE_SIDE_PANEL ? null : (0, l.jsx)(E.Z.Overlay, {
    className: I.overlay2,
    children: (0, l.jsxs)("div", {
      className: I.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: I.contentText,
        children: _.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1_WITH_LINK.format({
          username: n,
          onClickLearnMore: () => {
            (0, d.uL)(g.Z5c.APPLICATION_STORE)
          }
        })
      }), (0, l.jsx)(r.Clickable, {
        onClick: () => c(f.L.USER_DISMISS),
        "aria-label": _.Z.Messages.DISMISS,
        className: I.closeIconWrapper,
        children: (0, l.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: I.closeIcon
        })
      })]
    })
  })
}

function N(e) {
  let {
    avatarSrc: t,
    username: n
  } = e;
  return (0, l.jsx)(E.Z.Overlay, {
    className: I.overlay2,
    children: (0, l.jsxs)("div", {
      className: I.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: I.contentText,
        children: _.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1_WITH_LINK.format({
          username: n,
          onClickLearnMore: () => {
            (0, d.uL)(g.Z5c.APPLICATION_STORE)
          }
        })
      })]
    })
  })
}

function Z(e) {
  let {
    variant: t,
    avatarSrc: n,
    username: i
  } = e;
  if (1 === t) return (0, l.jsx)(x, {
    avatarSrc: n,
    username: i
  });
  if (2 === t) return (0, l.jsx)(T, {
    avatarSrc: n,
    username: i
  });
  if (3 === t) return (0, l.jsx)(N, {
    avatarSrc: n,
    username: i
  });
  return null
}
let S = i.memo(function(e) {
  let {
    user: t,
    displayProfile: n
  } = e, {
    avatarSrc: i
  } = (0, p.Z)({
    user: t,
    size: r.AvatarSizes.SIZE_32
  }), s = h.default.getCurrentUser(), a = m.ZP.isPremium(s) || null == n || !m.ZP.isPremiumAtLeast(n.premiumType, C.p9.TIER_2), {
    enabled: o,
    variant: u
  } = c.f.useExperiment({
    location: "SimplifiedProfilePanelPremiumUpsell"
  }, {
    disable: a,
    autoTrackExposure: !a
  });
  return o ? (0, l.jsx)(Z, {
    variant: u,
    avatarSrc: i,
    username: t.username
  }) : null
});
t.Z = S