"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("399606"),
  o = s("481060"),
  u = s("607070"),
  c = s("100527"),
  d = s("906732"),
  _ = s("66595"),
  E = s("535322"),
  R = s("477734"),
  T = s("86813"),
  f = s("826026"),
  I = s("626135"),
  S = s("881100"),
  m = s("981631"),
  p = s("689938"),
  A = s("35962");
let M = e => e ? p.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : p.default.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  C = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: A.customButton,
      children: [t ? p.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : p.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(f.default, {
        className: A.arrow
      }) : (0, a.jsx)(T.default, {
        className: A.arrow
      })]
    })
  },
  N = e => {
    let {
      title: t,
      description: s,
      className: r,
      imageSource: i,
      imageClassName: l,
      titleBadge: u,
      isNew: R = !1,
      isEarlyAccess: T = !1
    } = e, {
      analyticsLocations: f
    } = (0, d.default)(c.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(d.AnalyticsLocationProvider, {
      value: f,
      children: (0, a.jsxs)("div", {
        className: n()(A.perkCard, r),
        children: [R ? (0, a.jsx)(E.default, {
          className: A.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, T ? (0, a.jsx)(_.default, {
          className: A.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: i,
          alt: "",
          className: n()(l, A.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: A.perkCardHeading,
            children: [t, " ", u]
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: A.perkCardDescription,
            children: "function" == typeof s ? s(f) : s
          })]
        })]
      })
    })
  };
t.default = e => {
  let {
    className: t,
    isSubscriberNitroHome: s = !1
  } = e, [i, c] = r.useState(!1), _ = (0, S.usePerkCards)({
    styles: A
  }), E = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion), {
    analyticsLocations: T
  } = (0, d.default)(), f = (0, R.useIsRemixANitroPerk)(), p = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, f ? _.remix : _.videoBackground, _.superReactions, _.stickersPerkDiscoverability, _.badgeAlt];
  return (0, a.jsxs)("div", {
    className: n()(A.perksContainer, t, {
      [A.partiallyHidden]: s && !i,
      [A.subscriberNitroHome]: s,
      [A.reducedMotion]: E
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: n()(A.perksTitle),
      children: M(s)
    }), (0, a.jsx)("div", {
      className: n()(A.perkCardContainer, {
        [A.perkCardContainerExpanded]: i
      }),
      children: p.map(e => null != e && (0, a.jsx)(N, {
        ...e
      }, e.title))
    }), s && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: n()({
          [A.sizeGizmo]: !i,
          [A.sizeGizmoExpanded]: i
        }),
        children: (0, a.jsx)(C, {
          onClick: () => {
            I.default.track(m.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: T,
              was_expanded: i
            }), c(!i)
          },
          isShowingAll: i
        })
      }), (0, a.jsx)("div", {
        className: n()(A.cover, {
          [A.hidden]: i
        })
      })]
    })]
  })
}