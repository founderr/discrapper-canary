"use strict";
n.d(t, {
  Z: function() {
    return Y
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
  h = n(556084),
  S = n(300284),
  f = n(695346),
  N = n(314897),
  A = n(592125),
  m = n(430824),
  O = n(944486),
  R = n(594174),
  p = n(451478),
  g = n(311715),
  C = n(626135),
  v = n(768581),
  L = n(74538),
  D = n(785717),
  M = n(621853),
  P = n(333231),
  y = n(943217),
  U = n(793397),
  b = n(841040),
  G = n(228168),
  w = n(981631),
  B = n(474936),
  k = n(689938),
  x = n(300388);
let V = {
    [G.y0.POPOUT]: 18,
    [G.y0.MODAL]: 24,
    [G.y0.SETTINGS]: 0,
    [G.y0.PANEL]: 18,
    [G.y0.POMELO_POPOUT]: 18,
    [G.y0.CANCEL_MODAL]: 0
  },
  Z = {
    [G.y0.MODAL]: w.ZY5.USER_PROFILE,
    [G.y0.POPOUT]: w.ZY5.USER_POPOUT,
    [G.y0.SETTINGS]: w.ZY5.USER_POPOUT,
    [G.y0.PANEL]: w.ZY5.DM_CHANNEL,
    [G.y0.POMELO_POPOUT]: w.ZY5.POMELO_POPOUT,
    [G.y0.CANCEL_MODAL]: w.ZY5.USER_POPOUT
  };

function H(e) {
  let {
    type: t,
    shown: s,
    onClick: a
  } = e, u = (0, l.e7)([R.default], () => {
    let e = R.default.getCurrentUser();
    return L.ZP.canUsePremiumProfileCustomization(e)
  }), I = r.useRef(!1), {
    analyticsLocations: T
  } = (0, E.ZP)(d.Z.BADGE);
  return r.useEffect(() => {
    s && !I.current && (I.current = !0, C.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
      type: B.cd.CUSTOM_PROFILES_PROFILE_BANNER_SOCIAL_UPSELL,
      location: {
        page: Z[t],
        section: w.jXE.NITRO_BANNER,
        object: w.qAy.NITRO_BADGE
      },
      location_stack: T
    }))
  }, [T, s, t]), (0, i.jsx)(_.Tooltip, {
    tooltipContentClassName: x.premiumIconTooltipContent,
    text: u ? k.Z.Messages.PROFILE_CUSTOMIZATION_NITRO_ICON_TOOLTIP : k.Z.Messages.USER_SETTINGS_PROFILE_THEMES_USER_PROFILE_ICON_TOOLTIP_UPSELL,
    children: e => (0, i.jsx)(_.Clickable, {
      ...e,
      onClick: u ? void 0 : () => {
        var e;
        e = T, (0, _.openModalLazy)(async () => {
          let {
            default: t
          } = await Promise.all([n.e("99387"), n.e("30364")]).then(n.bind(n, 968031));
          return n => {
            let {
              onClose: r,
              ...s
            } = n;
            return (0, i.jsx)(t, {
              analyticsLocations: e,
              title: k.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_TITLE,
              description: k.Z.Messages.USER_SETTINGS_PROFILE_THEMES_UPSELL_FROM_ICON_MODAL_DESCRIPTION.format({
                onAndMoreWithPremiumClick: () => {
                  r(), c.Z.open(w.oAB.PREMIUM, null, {
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
      className: o()(x.premiumIconWrapper, {
        [x.visible]: s,
        [x.clickable]: !u
      }),
      children: (0, i.jsx)(_.TextBadge, {
        color: "rgba(32, 34, 37, 0.8)",
        text: (0, i.jsx)(_.NitroWheelIcon, {
          size: "xs",
          color: "currentColor",
          className: x.premiumIcon
        })
      })
    })
  })
}

function F(e) {
  let {
    darkenOnHover: t,
    profileType: n,
    profileLabel: r,
    icon: s,
    ...o
  } = e, a = V[n], l = "pencil" === s ? _.PencilIcon : _.SettingsIcon;
  return (0, i.jsx)(_.Clickable, {
    ...o,
    "aria-label": r,
    className: t ? x.pencilContainerDark : x.pencilContainer,
    children: (0, i.jsx)(_.Tooltip, {
      text: r,
      children: e => (0, i.jsx)(l, {
        ...e,
        color: "currentColor",
        size: "custom",
        width: a,
        height: a,
        className: x.editIcon
      })
    })
  })
}

function Y(e) {
  var t, n, s;
  let {
    user: c,
    displayProfile: d,
    onClose: E,
    guildId: R,
    profileType: C,
    isHovering: V,
    animateOnHover: Z,
    allowEdit: Y = !0,
    showPremiumBadgeUpsell: j = !0,
    hasProfileEffect: W = !1
  } = e, K = (0, l.e7)([m.Z], () => m.Z.getGuild(R)), z = (0, l.e7)([N.default], () => N.default.getId()) === c.id && Y, q = L.ZP.isPremiumAtLeast(null == d ? void 0 : d.premiumType, B.p9.TIER_2), {
    trackUserProfileAction: X
  } = (0, D.KZ)(), [Q, J] = r.useState(!1), $ = (0, l.e7)([p.Z], () => p.Z.isFocused()), ee = f.QK.getSetting(), {
    bannerSrc: et,
    status: en
  } = (0, P.Z)({
    displayProfile: d,
    size: (0, U.e7)(C),
    canAnimate: Z || !ee ? Q : $
  }), ei = (0, _.useToken)(u.Z.unsafe_rawColors.PRIMARY_800).hex(), er = (0, _.getAvatarSize)(_.AvatarSizes.SIZE_80), es = (0, a._i)((0, I.ZP)(c.getAvatarURL(R, er), ei, !1)), eo = (0, T.Z)(null !== (t = null == d ? void 0 : d.primaryColor) && void 0 !== t ? t : es).hsl, ea = (0, l.e7)([M.Z], () => M.Z.getUserProfile(c.id)), el = A.Z.getChannel(O.Z.getChannelId()), {
    appsInGDMEnabled: eu,
    availableApplications: e_
  } = (0, h.j)({
    channelId: null !== (n = null == el ? void 0 : el.id) && void 0 !== n ? n : w.lds
  }), ec = null == ea ? void 0 : ea.application, ed = eu && null != e_.find(e => e.id === (null == ec ? void 0 : ec.id)), eE = (0, S.Z)({
    analyticsLocation: {
      page: w.ZY5.USER_POPOUT,
      section: w.jXE.PROFILE_POPOUT
    }
  });
  return (0, i.jsx)(y.Z, {
    isPremium: q,
    hasThemeColors: null !== (s = null == d ? void 0 : d.canEditThemes) && void 0 !== s && s,
    profileType: C,
    hasBanner: null != et,
    hasProfileEffect: W,
    children: (0, i.jsxs)("div", {
      className: o()(x.banner, (0, U.Ae)({
        profileType: C,
        user: {
          hasBanner: null != et,
          isPremium: q,
          hasProfileEffect: W
        }
      }), {
        [x.reducedMotion]: !ee
      }),
      onMouseMove: () => J(!0),
      onMouseLeave: () => J(!1),
      style: {
        backgroundImage: null != et ? "url(".concat(et, ")") : void 0,
        backgroundColor: en !== P.s.COMPLETE ? u.Z.unsafe_rawColors.PRIMARY_800.css : eo
      },
      children: [z ? null == K ? (0, i.jsx)(F, {
        darkenOnHover: W && V,
        profileType: C,
        profileLabel: k.Z.Messages.EDIT_PROFILE,
        icon: "pencil",
        onClick: () => {
          X({
            action: "EDIT_PROFILE"
          }), null == E || E(), eE()
        }
      }) : (0, i.jsx)(_.Popout, {
        spacing: 6,
        position: "bottom",
        renderPopout: e => {
          let {
            closePopout: t
          } = e;
          return (0, i.jsx)(b.Z, {
            onClose: t,
            onSelect: E,
            guild: K
          })
        },
        children: e => (0, i.jsx)(F, {
          darkenOnHover: W && V,
          profileLabel: k.Z.Messages.EDIT_PROFILE,
          icon: "pencil",
          ...e,
          profileType: C
        })
      }) : j && null != et && C !== G.y0.SETTINGS ? (0, i.jsx)(H, {
        type: C,
        shown: void 0 === V ? Q : V,
        onClick: () => {
          X({
            action: "PRESS_PREMIUM_UPSELL"
          }), null == E || E()
        }
      }) : null, ed ? C !== G.y0.MODAL ? null : (0, i.jsx)(_.Clickable, {
        onClick: E,
        "aria-label": k.Z.Messages.BACK,
        className: x.pencilContainer,
        children: (0, i.jsx)(_.Tooltip, {
          text: k.Z.Messages.BACK,
          children: e => (0, i.jsx)(_.CloseSmallIcon, {
            size: "md",
            ...e,
            className: x.closeIcon,
            color: "white"
          })
        })
      }) : null, !ee && (0, v.F8)(et) && (0, i.jsx)(g.Z, {
        className: x.gifTag
      })]
    })
  })
}