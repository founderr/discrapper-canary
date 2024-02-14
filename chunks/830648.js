"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("65597"),
  o = s("77078"),
  u = s("206230"),
  d = s("812204"),
  c = s("685665"),
  _ = s("516322"),
  E = s("441413"),
  I = s("238956"),
  T = s("837899"),
  f = s("425190"),
  S = s("599110"),
  R = s("331358"),
  m = s("49111"),
  A = s("782340"),
  N = s("101662");
let p = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: N.customButton,
      children: [t ? A.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : A.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(f.default, {
        className: N.arrow
      }) : (0, a.jsx)(T.default, {
        className: N.arrow
      })]
    })
  },
  g = e => {
    let {
      title: t,
      description: s,
      className: n,
      imageSource: i,
      imageClassName: l,
      titleBadge: u,
      isNew: I = !1,
      isEarlyAccess: T = !1
    } = e, {
      AnalyticsLocationProvider: f,
      analyticsLocations: S
    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(f, {
      children: (0, a.jsxs)("div", {
        className: r(N.perkCard, n),
        children: [I ? (0, a.jsx)(E.default, {
          className: N.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, T ? (0, a.jsx)(_.default, {
          className: N.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: i,
          alt: "",
          className: r(l, N.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: N.perkCardHeading,
            children: [t, " ", u]
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: N.perkCardDescription,
            children: "function" == typeof s ? s(S) : s
          })]
        })]
      })
    })
  };
var C = e => {
  let {
    className: t,
    isSubscriberNitroHome: s = !1
  } = e, [i, d] = n.useState(!1), _ = (0, R.usePerkCards)({
    styles: N
  }), E = (0, l.default)([u.default], () => u.default.useReducedMotion), {
    analyticsLocations: T
  } = (0, c.default)(), f = (0, I.useIsRemixANitroPerk)(), C = [_.emoji, _.streaming, _.upload, _.customAppIcons, _.soundboard, f ? _.remix : _.videoBackground, _.superReactions, _.stickersPerkDiscoverability, _.badgeAlt];
  return (0, a.jsxs)("div", {
    className: r(N.perksContainer, t, {
      [N.partiallyHidden]: s && !i,
      [N.subscriberNitroHome]: s,
      [N.reducedMotion]: E
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: N.perksTitle,
      children: s ? A.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : A.default.Messages.PREMIUM_MARKETING_PERKS_TITLE
    }), (0, a.jsx)("div", {
      className: r(N.perkCardContainer, {
        [N.perkCardContainerExpanded]: i
      }),
      children: C.map(e => null != e && (0, a.jsx)(g, {
        ...e
      }, e.title))
    }), s && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: r({
          [N.sizeGizmo]: !i,
          [N.sizeGizmoExpanded]: i
        }),
        children: (0, a.jsx)(p, {
          onClick: () => {
            S.default.track(m.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: T,
              was_expanded: i
            }), d(!i)
          },
          isShowingAll: i
        })
      }), (0, a.jsx)("div", {
        className: r(N.cover, {
          [N.hidden]: i
        })
      })]
    })]
  })
}