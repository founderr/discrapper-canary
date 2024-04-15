"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("399606"),
  o = s("481060"),
  u = s("607070"),
  d = s("100527"),
  c = s("906732"),
  _ = s("66595"),
  E = s("535322"),
  C = s("477734"),
  f = s("86813"),
  T = s("826026"),
  I = s("626135"),
  R = s("881100"),
  S = s("474936"),
  p = s("981631"),
  m = s("689938"),
  A = s("213153");
let g = (e, t) => t === S.PremiumTypes.TIER_0 ? m.default.Messages.NITRO_MARKETING_BASIC_PERKS : e ? m.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : m.default.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  N = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: A.customButton,
      children: [t ? m.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : m.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(T.default, {
        className: A.arrow
      }) : (0, a.jsx)(f.default, {
        className: A.arrow
      })]
    })
  },
  O = e => {
    let {
      title: t,
      description: s,
      className: i,
      imageSource: r,
      imageClassName: n,
      titleBadge: u,
      isNew: C = !1,
      isEarlyAccess: f = !1
    } = e, {
      analyticsLocations: T
    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: T,
      children: (0, a.jsxs)("div", {
        className: l()(A.perkCard, i),
        children: [C ? (0, a.jsx)(E.default, {
          className: A.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, f ? (0, a.jsx)(_.default, {
          className: A.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: r,
          alt: "",
          className: l()(n, A.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: A.perkCardHeading,
            children: [t, " ", u]
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: A.perkCardDescription,
            children: "function" == typeof s ? s(T) : s
          })]
        })]
      })
    })
  };
t.default = e => {
  let t, {
      className: s,
      selectedPremiumType: r,
      isSubscriberNitroHome: d = !1
    } = e,
    [_, E] = i.useState(!1),
    f = (0, R.usePerkCards)({
      styles: A,
      selectedPremiumType: r
    }),
    T = (0, n.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    {
      analyticsLocations: m
    } = (0, c.default)(),
    P = (0, C.useIsRemixANitroPerk)();
  return t = r !== S.PremiumTypes.TIER_0 ? [f.emoji, f.streaming, f.upload, f.customAppIcons, f.soundboard, P ? f.remix : f.videoBackground, f.superReactions, f.stickersPerkDiscoverability, f.badgeAlt] : [f.emoji, f.upload, f.customAppIcons, f.superReactions, f.stickersPerkDiscoverability, f.badgeAlt], (0, a.jsxs)("div", {
    className: l()(A.perksContainer, s, {
      [A.partiallyHidden]: d && !_,
      [A.subscriberNitroHome]: d,
      [A.reducedMotion]: T
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: l()({
        [A.perksTitle]: null == r,
        [A.perksTitleStackedCards]: null != r
      }),
      children: g(d, r)
    }), (0, a.jsx)("div", {
      className: l()(A.perkCardContainer, {
        [A.perkCardContainerExpanded]: _
      }),
      children: t.map(e => null != e && (0, a.jsx)(O, {
        ...e
      }, e.title))
    }), d && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: l()({
          [A.sizeGizmo]: !_,
          [A.sizeGizmoExpanded]: _
        }),
        children: (0, a.jsx)(N, {
          onClick: () => {
            I.default.track(p.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: m,
              was_expanded: _
            }), E(!_)
          },
          isShowingAll: _
        })
      }), (0, a.jsx)("div", {
        className: l()(A.cover, {
          [A.hidden]: _
        })
      })]
    })]
  })
}