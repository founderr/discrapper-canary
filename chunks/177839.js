n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(399606),
  o = n(481060),
  c = n(607070),
  d = n(100527),
  _ = n(906732),
  E = n(66595),
  u = n(535322),
  T = n(477734),
  I = n(626135),
  R = n(881100),
  C = n(981631),
  g = n(689938),
  p = n(318219);
let A = e => e ? g.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : g.Z.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  N = e => {
    let {
      isShowingAll: t,
      onClick: n
    } = e;
    return (0, s.jsxs)(o.Clickable, {
      onClick: n,
      className: p.customButton,
      children: [t ? g.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : g.Z.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, s.jsx)(o.ChevronSmallUpIcon, {
        size: "md",
        color: "currentColor",
        className: p.arrow
      }) : (0, s.jsx)(o.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: p.arrow
      })]
    })
  },
  m = e => {
    let {
      title: t,
      description: n,
      className: a,
      imageSource: i,
      imageClassName: l,
      titleBadge: c,
      isNew: T = !1,
      isEarlyAccess: I = !1
    } = e, {
      analyticsLocations: R
    } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
    return (0, s.jsx)(_.Gt, {
      value: R,
      children: (0, s.jsxs)("div", {
        className: r()(p.perkCard, a),
        children: [T ? (0, s.jsx)(u.Z, {
          className: p.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, I ? (0, s.jsx)(E.Z, {
          className: p.perkCardEarlyAccessBadge
        }) : null, (0, s.jsx)("img", {
          src: i,
          alt: "",
          className: r()(l, p.perksCardArt)
        }), (0, s.jsxs)("div", {
          children: [(0, s.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: p.perkCardHeading,
            children: [t, " ", c]
          }), (0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: p.perkCardDescription,
            children: "function" == typeof n ? n(R) : n
          })]
        })]
      })
    })
  };
t.Z = e => {
  let {
    className: t,
    isSubscriberNitroHome: n = !1
  } = e, [i, d] = a.useState(!1), E = (0, R.N)({
    styles: p
  }), u = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {
    analyticsLocations: g
  } = (0, _.ZP)(), S = (0, T._f)(), f = [E.emoji, E.streaming, E.upload, E.customAppIcons, E.soundboard, S ? E.remix : E.videoBackground, E.superReactions, E.stickersPerkDiscoverability, E.badgeAlt];
  return (0, s.jsxs)("div", {
    className: r()(p.perksContainer, t, {
      [p.partiallyHidden]: n && !i,
      [p.subscriberNitroHome]: n,
      [p.reducedMotion]: u
    }),
    children: [(0, s.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: r()(p.perksTitle),
      children: A(n)
    }), (0, s.jsx)("div", {
      className: r()(p.perkCardContainer, {
        [p.perkCardContainerExpanded]: i
      }),
      children: f.map(e => null != e && (0, s.jsx)(m, {
        ...e
      }, e.title))
    }), n && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: r()({
          [p.sizeGizmo]: !i,
          [p.sizeGizmoExpanded]: i
        }),
        children: (0, s.jsx)(N, {
          onClick: () => {
            I.default.track(C.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: g,
              was_expanded: i
            }), d(!i)
          },
          isShowingAll: i
        })
      }), (0, s.jsx)("div", {
        className: r()(p.cover, {
          [p.hidden]: i
        })
      })]
    })]
  })
}