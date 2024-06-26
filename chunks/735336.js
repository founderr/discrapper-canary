"use strict";
n.d(t, {
  Z: function() {
    return V
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(866442),
  l = n(442837),
  u = n(692547),
  _ = n(481060),
  c = n(230711),
  d = n(100527),
  E = n(906732),
  I = n(220082),
  T = n(583405),
  h = n(300284),
  f = n(695346),
  S = n(314897),
  N = n(430824),
  A = n(594174),
  m = n(451478),
  O = n(311715),
  p = n(626135),
  R = n(768581),
  g = n(74538),
  C = n(785717),
  v = n(888778),
  L = n(943217),
  D = n(793397),
  M = n(841040),
  P = n(228168),
  y = n(981631),
  U = n(474936),
  b = n(689938),
  G = n(300388);
let w = {
    [P.y0.POPOUT]: 18,
    [P.y0.MODAL]: 24,
    [P.y0.SETTINGS]: 0,
    [P.y0.PANEL]: 18,
    [P.y0.POMELO_POPOUT]: 18,
    [P.y0.CANCEL_MODAL]: 0
  },
  x = {
    [P.y0.MODAL]: y.ZY5.USER_PROFILE,
    [P.y0.POPOUT]: y.ZY5.USER_POPOUT,
    [P.y0.SETTINGS]: y.ZY5.USER_POPOUT,
    [P.y0.PANEL]: y.ZY5.DM_CHANNEL,
    [P.y0.POMELO_POPOUT]: y.ZY5.POMELO_POPOUT,
    [P.y0.CANCEL_MODAL]: y.ZY5.USER_POPOUT
  };

function B(e) {
  let {
    type: t,
    shown: s,
    onClick: a
  } = e, u = (0, l.e7)([A.default], () => {
    let e = A.default.getCurrentUser();
    return g.ZP.canUsePremiumProfileCustomization(e)
  }), I = r.useRef(!1), {
    analyticsLocations: T
  } = (0, E.ZP)(d.Z.BADGE);
  return r.useEffect(() => {
    s && !I.current && (I.current = !0, p.default.track(y.rMx.PREMIUM_UPSELL_VIEWED, {
      type: U.cd.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
      location: {
        page: x[t],
        section: y.jXE.NITRO_BANNER,
        object: y.qAy.NITRO_BADGE
      },
      location_stack: T
    }))
  }, [T, s, t]), (0, i.jsx)(_.Tooltip, {
    tooltipContentClassName: G.premiumIconTooltipContent,
    text: u ? b.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : b.Z.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
    children: e => (0, i.jsx)(_.Clickable, {
      ...e,
      onClick: u ? void 0 : () => {
        var e;
        e = T, (0, _.openModalLazy)(async () => {
          let {
            default: t
          } = await n.e("30364").then(n.bind(n, 968031));
          return n => {
            let {
              onClose: r,
              ...s
            } = n;
            return (0, i.jsx)(t, {
              analyticsLocations: e,
              title: b.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
              description: b.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                onAndMoreWithPremiumClick: () => {
                  r(), c.Z.open(y.oAB.PREMIUM, null, {
                    analyticsLocations: e
                  })
                }
              }),
              onClose: r,
              ...s
            })
          }
        }), null == a || a()
      },
      className: o()(G.premiumIconWrapper, {
        [G.visible]: s,
        [G.clickable]: !u
      }),
      children: (0, i.jsx)(_.TextBadge, {
        color: "rgba(32, 34, 37, 0.8)",
        text: (0, i.jsx)(_.NitroWheelIcon, {
          size: "xs",
          color: "currentColor",
          className: G.premiumIcon
        })
      })
    })
  })
}

function k(e) {
  let {
    darkenOnHover: t,
    profileType: n,
    profileLabel: r,
    icon: s,
    ...o
  } = e, a = w[n], l = "pencil" === s ? _.PencilIcon : _.SettingsIcon;
  return (0, i.jsx)(_.Clickable, {
    ...o,
    "aria-label": r,
    className: t ? G.pencilContainerDark : G.pencilContainer,
    children: (0, i.jsx)(_.Tooltip, {
      text: r,
      children: e => (0, i.jsx)(l, {
        ...e,
        color: "currentColor",
        size: "custom",
        width: a,
        height: a,
        className: G.editIcon
      })
    })
  })
}

function V(e) {
  var t, n;
  let {
    user: s,
    displayProfile: c,
    onClose: d,
    guildId: E,
    profileType: A,
    isHovering: p,
    animateOnHover: w,
    allowEdit: x = !0,
    showPremiumBadgeUpsell: V = !0,
    hasProfileEffect: Z = !1
  } = e, H = (0, l.e7)([N.Z], () => N.Z.getGuild(E)), F = (0, l.e7)([S.default], () => S.default.getId()) === s.id && x, Y = g.ZP.isPremiumAtLeast(null == c ? void 0 : c.premiumType, U.p9.TIER_2), {
    trackUserProfileAction: j
  } = (0, C.KZ)(), [W, K] = r.useState(!1), z = (0, l.e7)([m.Z], () => m.Z.isFocused()), q = f.QK.getSetting(), {
    bannerSrc: X,
    status: Q
  } = (0, v.Z)({
    displayProfile: c,
    size: (0, D.e7)(A),
    canAnimate: w || !q ? W : z
  }), J = (0, _.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(), $ = (0, _.getAvatarSize)(_.AvatarSizes.SIZE_80), ee = (0, a._i)((0, I.ZP)(s.getAvatarURL(E, $), J, !1)), et = (0, T.Z)(null !== (t = null == c ? void 0 : c.primaryColor) && void 0 !== t ? t : ee).hsl, en = (0, h.Z)({
    analyticsLocation: {
      page: y.ZY5.USER_POPOUT,
      section: y.jXE.PROFILE_POPOUT
    }
  });
  return (0, i.jsx)(L.Z, {
    isPremium: Y,
    hasThemeColors: null !== (n = null == c ? void 0 : c.canEditThemes) && void 0 !== n && n,
    profileType: A,
    hasBanner: null != X,
    hasProfileEffect: Z,
    children: (0, i.jsxs)("div", {
      className: o()(G.banner, (0, D.Ae)({
        profileType: A,
        user: {
          hasBanner: null != X,
          isPremium: Y,
          hasProfileEffect: Z
        }
      }), {
        [G.reducedMotion]: !q
      }),
      onMouseMove: () => K(!0),
      onMouseLeave: () => K(!1),
      style: {
        backgroundImage: null != X ? "url(".concat(X, ")") : void 0,
        backgroundColor: Q !== v.s.COMPLETE ? u.Z.unsafe_rawColors.PRIMARY_800.css : et
      },
      children: [F ? null == H ? (0, i.jsx)(k, {
        darkenOnHover: Z && p,
        profileType: A,
        profileLabel: b.Z.Messages.EDIT_PROFILE,
        icon: "pencil",
        onClick: () => {
          j({
            action: "EDIT_PROFILE"
          }), null == d || d(), en()
        }
      }) : (0, i.jsx)(_.Popout, {
        spacing: 6,
        position: "bottom",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(M.Z, {
            onClose: t,
            onSelect: d,
            guild: H
          })
        },
        children: e => (0, i.jsx)(k, {
          darkenOnHover: Z && p,
          profileLabel: b.Z.Messages.EDIT_PROFILE,
          icon: "pencil",
          ...e,
          profileType: A
        })
      }) : V && null != X && A !== P.y0.SETTINGS ? (0, i.jsx)(B, {
        type: A,
        shown: void 0 === p ? W : p,
        onClick: () => {
          j({
            action: "PRESS_PREMIUM_UPSELL"
          }), null == d || d()
        }
      }) : null, !q && (0, R.F8)(X) && (0, i.jsx)(O.Z, {
        className: G.gifTag
      })]
    })
  })
}