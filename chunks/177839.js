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
  m = s("626135"),
  I = s("881100"),
  S = s("474936"),
  p = s("981631"),
  A = s("689938"),
  g = s("35962");
let N = (e, t) => t === S.PremiumTypes.TIER_0 ? A.default.Messages.NITRO_MARKETING_BASIC_PERKS : e ? A.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : A.default.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  M = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: g.customButton,
      children: [t ? A.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : A.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(f.default, {
        className: g.arrow
      }) : (0, a.jsx)(T.default, {
        className: g.arrow
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
      isNew: R = !1,
      isEarlyAccess: T = !1
    } = e, {
      analyticsLocations: f
    } = (0, d.default)(c.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(d.AnalyticsLocationProvider, {
      value: f,
      children: (0, a.jsxs)("div", {
        className: n()(g.perkCard, r),
        children: [R ? (0, a.jsx)(E.default, {
          className: g.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, T ? (0, a.jsx)(_.default, {
          className: g.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: i,
          alt: "",
          className: n()(l, g.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: g.perkCardHeading,
            children: [t, " ", u]
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: g.perkCardDescription,
            children: "function" == typeof s ? s(f) : s
          })]
        })]
      })
    })
  };
t.default = e => {
  let t, {
      className: s,
      selectedPremiumType: i,
      isSubscriberNitroHome: c = !1
    } = e,
    [_, E] = r.useState(!1),
    T = (0, I.usePerkCards)({
      styles: g,
      selectedPremiumType: i
    }),
    f = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    {
      analyticsLocations: A
    } = (0, d.default)(),
    P = (0, R.useIsRemixANitroPerk)();
  return t = i !== S.PremiumTypes.TIER_0 ? [T.emoji, T.streaming, T.upload, T.customAppIcons, T.soundboard, P ? T.remix : T.videoBackground, T.superReactions, T.stickersPerkDiscoverability, T.badgeAlt] : [T.emoji, T.upload, T.customAppIcons, T.superReactions, T.stickersPerkDiscoverability, T.badgeAlt], (0, a.jsxs)("div", {
    className: n()(g.perksContainer, s, {
      [g.partiallyHidden]: c && !_,
      [g.subscriberNitroHome]: c,
      [g.reducedMotion]: f
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: n()({
        [g.perksTitle]: null == i,
        [g.perksTitleStackedCards]: null != i
      }),
      children: N(c, i)
    }), (0, a.jsx)("div", {
      className: n()(g.perkCardContainer, {
        [g.perkCardContainerExpanded]: _
      }),
      children: t.map(e => null != e && (0, a.jsx)(C, {
        ...e
      }, e.title))
    }), c && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: n()({
          [g.sizeGizmo]: !_,
          [g.sizeGizmoExpanded]: _
        }),
        children: (0, a.jsx)(M, {
          onClick: () => {
            m.default.track(p.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: A,
              was_expanded: _
            }), E(!_)
          },
          isShowingAll: _
        })
      }), (0, a.jsx)("div", {
        className: n()(g.cover, {
          [g.hidden]: _
        })
      })]
    })]
  })
}