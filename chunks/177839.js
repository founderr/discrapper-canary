"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("399606"),
  o = s("481060"),
  u = s("607070"),
  d = s("100527"),
  c = s("906732"),
  _ = s("66595"),
  E = s("535322"),
  T = s("477734"),
  I = s("86813"),
  R = s("826026"),
  f = s("626135"),
  S = s("881100"),
  A = s("981631"),
  m = s("689938"),
  N = s("35962");
let p = e => e ? m.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : m.default.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  g = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: N.customButton,
      children: [t ? m.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : m.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(R.default, {
        className: N.arrow
      }) : (0, a.jsx)(I.default, {
        className: N.arrow
      })]
    })
  },
  C = e => {
    let {
      title: t,
      description: s,
      className: r,
      imageSource: i,
      imageClassName: l,
      titleBadge: u,
      isNew: T = !1,
      isEarlyAccess: I = !1
    } = e, {
      analyticsLocations: R
    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: R,
      children: (0, a.jsxs)("div", {
        className: n()(N.perkCard, r),
        children: [T ? (0, a.jsx)(E.default, {
          className: N.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, I ? (0, a.jsx)(_.default, {
          className: N.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: i,
          alt: "",
          className: n()(l, N.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: N.perkCardHeading,
            children: [t, " ", u]
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: N.perkCardDescription,
            children: "function" == typeof s ? s(R) : s
          })]
        })]
      })
    })
  };
t.default = e => {
  let {
    className: t,
    isSubscriberNitroHome: s = !1
  } = e, [i, d] = r.useState(!1), _ = (0, S.usePerkCards)({
    styles: N
  }), E = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion), {
    analyticsLocations: I
  } = (0, c.default)(), R = (0, T.useIsRemixANitroPerk)(), m = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, R ? _.remix : _.videoBackground, _.superReactions, _.stickersPerkDiscoverability, _.badgeAlt];
  return (0, a.jsxs)("div", {
    className: n()(N.perksContainer, t, {
      [N.partiallyHidden]: s && !i,
      [N.subscriberNitroHome]: s,
      [N.reducedMotion]: E
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: n()(N.perksTitle),
      children: p(s)
    }), (0, a.jsx)("div", {
      className: n()(N.perkCardContainer, {
        [N.perkCardContainerExpanded]: i
      }),
      children: m.map(e => null != e && (0, a.jsx)(C, {
        ...e
      }, e.title))
    }), s && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: n()({
          [N.sizeGizmo]: !i,
          [N.sizeGizmoExpanded]: i
        }),
        children: (0, a.jsx)(g, {
          onClick: () => {
            f.default.track(A.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: I,
              was_expanded: i
            }), d(!i)
          },
          isShowingAll: i
        })
      }), (0, a.jsx)("div", {
        className: n()(N.cover, {
          [N.hidden]: i
        })
      })]
    })]
  })
}