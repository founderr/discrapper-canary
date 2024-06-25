s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(399606),
  o = s(481060),
  c = s(607070),
  E = s(100527),
  _ = s(906732),
  u = s(66595),
  d = s(535322),
  T = s(477734),
  I = s(626135),
  R = s(881100),
  A = s(981631),
  N = s(689938),
  C = s(318219);
let g = e => e ? N.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : N.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  m = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, n.jsxs)(o.Clickable, {
      onClick: s,
      className: C.customButton,
      children: [t ? N.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : N.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, n.jsx)(o.ChevronSmallUpIcon, {
        size: "md",
        color: "currentColor",
        className: C.arrow
      }) : (0, n.jsx)(o.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: C.arrow
      })]
    })
  },
  M = e => {
    let {
      title: t,
      description: s,
      className: a,
      imageSource: i,
      imageClassName: l,
      titleBadge: c,
      isNew: T = !1,
      isEarlyAccess: I = !1
    } = e, {
      analyticsLocations: R
    } = (0, _.ZP)(E.Z.PREMIUM_MARKETING_PERK_CARD);
    return (0, n.jsx)(_.Gt, {
      value: R,
      children: (0, n.jsxs)("div", {
        className: r()(C.perkCard, a),
        children: [T ? (0, n.jsx)(d.Z, {
          className: C.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, I ? (0, n.jsx)(u.Z, {
          className: C.perkCardEarlyAccessBadge
        }) : null, (0, n.jsx)("img", {
          src: i,
          alt: "",
          className: r()(l, C.perksCardArt)
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: C.perkCardHeading,
            children: [t, " ", c]
          }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: C.perkCardDescription,
            children: "function" == typeof s ? s(R) : s
          })]
        })]
      })
    })
  };
t.Z = e => {
  let {
    className: t,
    isSubscriberNitroHome: s = !1
  } = e, [i, E] = a.useState(!1), u = (0, R.N)({
    styles: C
  }), d = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {
    analyticsLocations: N
  } = (0, _.ZP)(), S = (0, T._f)(), p = [u.emoji, u.streaming, u.upload, u.customAppIcons, u.soundboard, S ? u.remix : u.videoBackground, u.superReactions, u.stickersPerkDiscoverability, u.badgeAlt];
  return (0, n.jsxs)("div", {
    className: r()(C.perksContainer, t, {
      [C.partiallyHidden]: s && !i,
      [C.subscriberNitroHome]: s,
      [C.reducedMotion]: d
    }),
    children: [(0, n.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: r()(C.perksTitle),
      children: g(s)
    }), (0, n.jsx)("div", {
      className: r()(C.perkCardContainer, {
        [C.perkCardContainerExpanded]: i
      }),
      children: p.map(e => null != e && (0, n.jsx)(M, {
        ...e
      }, e.title))
    }), s && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("div", {
        className: r()({
          [C.sizeGizmo]: !i,
          [C.sizeGizmoExpanded]: i
        }),
        children: (0, n.jsx)(m, {
          onClick: () => {
            I.default.track(A.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: N,
              was_expanded: i
            }), E(!i)
          },
          isShowingAll: i
        })
      }), (0, n.jsx)("div", {
        className: r()(C.cover, {
          [C.hidden]: i
        })
      })]
    })]
  })
}