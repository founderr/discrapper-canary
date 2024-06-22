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
  h = n(74538),
  m = n(204197),
  p = n(502762),
  E = n(981631),
  g = n(921944),
  f = n(474936),
  C = n(689938),
  _ = n(780104);

function I(e) {
  let {
    avatarSrc: t,
    username: n
  } = e, [i, c] = (0, o.U)([s.z.NITRO_ON_PROFILE_SIDE_PANEL], g.R.SIDEBAR, !0);
  return i !== s.z.NITRO_ON_PROFILE_SIDE_PANEL ? null : (0, l.jsxs)(p.Z.Overlay, {
    className: _.overlay,
    children: [(0, l.jsxs)("div", {
      className: _.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: _.contentText,
        children: C.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
          username: n
        })
      }), (0, l.jsx)(r.Clickable, {
        onClick: () => c(g.L.USER_DISMISS),
        "aria-label": C.Z.Messages.DISMISS,
        className: _.closeIconWrapper,
        children: (0, l.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: _.closeIcon
        })
      })]
    }), (0, l.jsxs)("div", {
      className: _.buttonGroup,
      children: [(0, l.jsx)(r.Button, {
        className: _.learnMoreButton,
        size: r.Button.Sizes.TINY,
        color: r.Button.Colors.CUSTOM,
        onClick: () => {
          (0, d.uL)(E.Z5c.APPLICATION_STORE)
        },
        children: C.Z.Messages.LEARN_MORE
      }), (0, l.jsx)(u.Z, {
        className: _.getNitroButton,
        size: r.Button.Sizes.TINY,
        color: r.Button.Colors.CUSTOM,
        buttonText: C.Z.Messages.MARKETING_PAGE_CTA_GET_NITRO
      })]
    })]
  })
}

function x(e) {
  let {
    avatarSrc: t,
    username: n
  } = e, [i, c] = (0, o.U)([s.z.NITRO_ON_PROFILE_SIDE_PANEL], g.R.SIDEBAR, !0);
  return i !== s.z.NITRO_ON_PROFILE_SIDE_PANEL ? null : (0, l.jsx)(p.Z.Overlay, {
    className: _.overlay2,
    children: (0, l.jsxs)("div", {
      className: _.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: _.contentText,
        children: C.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1_WITH_LINK.format({
          username: n,
          onClickLearnMore: () => {
            (0, d.uL)(E.Z5c.APPLICATION_STORE)
          }
        })
      }), (0, l.jsx)(r.Clickable, {
        onClick: () => c(g.L.USER_DISMISS),
        "aria-label": C.Z.Messages.DISMISS,
        className: _.closeIconWrapper,
        children: (0, l.jsx)(r.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: _.closeIcon
        })
      })]
    })
  })
}

function T(e) {
  let {
    avatarSrc: t,
    username: n
  } = e;
  return (0, l.jsx)(p.Z.Overlay, {
    className: _.overlay2,
    children: (0, l.jsxs)("div", {
      className: _.contentGroup,
      children: [(0, l.jsx)(a.qE, {
        src: t,
        size: r.AvatarSizes.SIZE_32,
        status: r.StatusTypes.UNKNOWN,
        "aria-label": n
      }), (0, l.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: _.contentText,
        children: C.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1_WITH_LINK.format({
          username: n,
          onClickLearnMore: () => {
            (0, d.uL)(E.Z5c.APPLICATION_STORE)
          }
        })
      })]
    })
  })
}

function N(e) {
  let {
    variant: t,
    avatarSrc: n,
    username: i
  } = e;
  if (1 === t) return (0, l.jsx)(I, {
    avatarSrc: n,
    username: i
  });
  if (2 === t) return (0, l.jsx)(x, {
    avatarSrc: n,
    username: i
  });
  if (3 === t) return (0, l.jsx)(T, {
    avatarSrc: n,
    username: i
  });
  return null
}
let Z = i.memo(function(e) {
  let {
    user: t,
    displayProfile: n
  } = e, {
    avatarSrc: i
  } = (0, m.Z)({
    user: t,
    size: r.AvatarSizes.SIZE_32
  }), s = null == n || !h.ZP.isPremiumAtLeast(n.premiumType, f.p9.TIER_2), {
    enabled: a,
    variant: o
  } = c.f.useExperiment({
    location: "SimplifiedProfilePanelPremiumUpsell"
  }, {
    disable: s,
    autoTrackExposure: !s
  });
  return a ? (0, l.jsx)(N, {
    variant: o,
    avatarSrc: i,
    username: t.username
  }) : null
});
t.Z = Z