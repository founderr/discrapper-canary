t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(399606),
  o = t(481060),
  _ = t(607070),
  c = t(100527),
  E = t(906732),
  u = t(66595),
  R = t(535322),
  d = t(477734),
  I = t(626135),
  T = t(881100),
  A = t(981631),
  M = t(689938),
  S = t(318219);
let N = e => e ? M.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : M.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  p = e => {
    let {
      isShowingAll: s,
      onClick: t
    } = e;
    return (0, n.jsxs)(o.Clickable, {
      onClick: t,
      className: S.customButton,
      children: [s ? M.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : M.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, s ? (0, n.jsx)(o.ChevronSmallUpIcon, {
        size: "md",
        color: "currentColor",
        className: S.arrow
      }) : (0, n.jsx)(o.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: S.arrow
      })]
    })
  },
  m = e => {
    let {
      title: s,
      description: t,
      className: a,
      imageSource: r,
      imageClassName: l,
      titleBadge: _,
      isNew: d = !1,
      isEarlyAccess: I = !1
    } = e, {
      analyticsLocations: T
    } = (0, E.ZP)(c.Z.PREMIUM_MARKETING_PERK_CARD);
    return (0, n.jsx)(E.Gt, {
      value: T,
      children: (0, n.jsxs)("div", {
        className: i()(S.perkCard, a),
        children: [d ? (0, n.jsx)(R.Z, {
          className: S.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, I ? (0, n.jsx)(u.Z, {
          className: S.perkCardEarlyAccessBadge
        }) : null, (0, n.jsx)("img", {
          src: r,
          alt: "",
          className: i()(l, S.perksCardArt)
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: S.perkCardHeading,
            children: [s, " ", _]
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: S.perkCardDescription,
            children: "function" == typeof t ? t(T) : t
          })]
        })]
      })
    })
  };
s.Z = e => {
  let {
    className: s,
    isSubscriberNitroHome: t = !1
  } = e, [r, c] = a.useState(!1), u = (0, T.N)({
    styles: S
  }), R = (0, l.e7)([_.Z], () => _.Z.useReducedMotion), {
    analyticsLocations: M
  } = (0, E.ZP)(), C = (0, d._f)(), g = [u.emoji, u.streaming, u.upload, u.customAppIcons, u.soundboard, C ? u.remix : u.videoBackground, u.superReactions, u.stickersPerkDiscoverability, u.badgeAlt];
  return (0, n.jsxs)("div", {
    className: i()(S.perksContainer, s, {
      [S.partiallyHidden]: t && !r,
      [S.subscriberNitroHome]: t,
      [S.reducedMotion]: R
    }),
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: i()(S.perksTitle),
      children: N(t)
    }), (0, n.jsx)("div", {
      className: i()(S.perkCardContainer, {
        [S.perkCardContainerExpanded]: r
      }),
      children: g.map(e => null != e && (0, n.jsx)(m, {
        ...e
      }, e.title))
    }), t && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: i()({
          [S.sizeGizmo]: !r,
          [S.sizeGizmoExpanded]: r
        }),
        children: (0, n.jsx)(p, {
          onClick: () => {
            I.default.track(A.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: M,
              was_expanded: r
            }), c(!r)
          },
          isShowingAll: r
        })
      }), (0, n.jsx)("div", {
        className: i()(S.cover, {
          [S.hidden]: r
        })
      })]
    })]
  })
}