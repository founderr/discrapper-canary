"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
  n = s.n(r),
  l = s("399606"),
  o = s("481060"),
  u = s("607070"),
  d = s("100527"),
  c = s("906732"),
  _ = s("66595"),
  E = s("535322"),
  T = s("477734"),
  I = s("86813"),
  f = s("826026"),
  R = s("626135"),
  S = s("881100"),
  m = s("474936"),
  A = s("981631"),
  N = s("689938"),
  p = s("213153");
let C = (e, t) => t === m.PremiumTypes.TIER_0 ? N.default.Messages.NITRO_MARKETING_BASIC_PERKS : e ? N.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : N.default.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  g = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: p.customButton,
      children: [t ? N.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : N.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(f.default, {
        className: p.arrow
      }) : (0, a.jsx)(I.default, {
        className: p.arrow
      })]
    })
  },
  O = e => {
    let {
      title: t,
      description: s,
      className: i,
      imageSource: r,
      imageClassName: l,
      titleBadge: u,
      isNew: T = !1,
      isEarlyAccess: I = !1
    } = e, {
      analyticsLocations: f
    } = (0, c.default)(d.default.PREMIUM_MARKETING_PERK_CARD);
    return (0, a.jsx)(c.AnalyticsLocationProvider, {
      value: f,
      children: (0, a.jsxs)("div", {
        className: n()(p.perkCard, i),
        children: [T ? (0, a.jsx)(E.default, {
          className: p.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, I ? (0, a.jsx)(_.default, {
          className: p.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: r,
          alt: "",
          className: n()(l, p.perksCardArt)
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: p.perkCardHeading,
            children: [t, " ", u]
          }), (0, a.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: p.perkCardDescription,
            children: "function" == typeof s ? s(f) : s
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
    I = (0, S.usePerkCards)({
      styles: p,
      selectedPremiumType: r
    }),
    f = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion),
    {
      analyticsLocations: N
    } = (0, c.default)(),
    P = (0, T.useIsRemixANitroPerk)();
  return t = r !== m.PremiumTypes.TIER_0 ? [I.emoji, I.streaming, I.upload, I.customAppIcons, I.soundboard, P ? I.remix : I.videoBackground, I.superReactions, I.stickersPerkDiscoverability, I.badgeAlt] : [I.emoji, I.upload, I.customAppIcons, I.superReactions, I.stickersPerkDiscoverability, I.badgeAlt], (0, a.jsxs)("div", {
    className: n()(p.perksContainer, s, {
      [p.partiallyHidden]: d && !_,
      [p.subscriberNitroHome]: d,
      [p.reducedMotion]: f
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: n()({
        [p.perksTitle]: null == r,
        [p.perksTitleStackedCards]: null != r
      }),
      children: C(d, r)
    }), (0, a.jsx)("div", {
      className: n()(p.perkCardContainer, {
        [p.perkCardContainerExpanded]: _
      }),
      children: t.map(e => null != e && (0, a.jsx)(O, {
        ...e
      }, e.title))
    }), d && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: n()({
          [p.sizeGizmo]: !_,
          [p.sizeGizmoExpanded]: _
        }),
        children: (0, a.jsx)(g, {
          onClick: () => {
            R.default.track(A.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: N,
              was_expanded: _
            }), E(!_)
          },
          isShowingAll: _
        })
      }), (0, a.jsx)("div", {
        className: n()(p.cover, {
          [p.hidden]: _
        })
      })]
    })]
  })
}