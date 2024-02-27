"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("222007");
var a = s("37983"),
  i = s("884691"),
  r = s("414456"),
  n = s.n(r),
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
  m = s("646718"),
  A = s("49111"),
  p = s("782340"),
  N = s("101662");
let g = (e, t) => t === m.PremiumTypes.TIER_0 ? p.default.Messages.NITRO_MARKETING_BASIC_PERKS : e ? p.default.Messages.PREMIUM_MARKETING_PERKS_TITLE_NITRO_HOME : p.default.Messages.PREMIUM_MARKETING_PERKS_TITLE,
  C = e => {
    let {
      isShowingAll: t,
      onClick: s
    } = e;
    return (0, a.jsxs)(o.Clickable, {
      onClick: s,
      className: N.customButton,
      children: [t ? p.default.Messages.PREMIUM_MARKETING_PERKS_SEE_LESS : p.default.Messages.PREMIUM_MARKETING_PERKS_SEE_ALL, t ? (0, a.jsx)(f.default, {
        className: N.arrow
      }) : (0, a.jsx)(T.default, {
        className: N.arrow
      })]
    })
  },
  P = e => {
    let {
      title: t,
      description: s,
      className: i,
      imageSource: r,
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
        className: n(N.perkCard, i),
        children: [I ? (0, a.jsx)(E.default, {
          className: N.perkCardNewBadge,
          shouldInheritBackgroundColor: !0,
          shouldInheritTextColor: !0
        }) : null, T ? (0, a.jsx)(_.default, {
          className: N.perkCardEarlyAccessBadge
        }) : null, (0, a.jsx)("img", {
          src: r,
          alt: "",
          className: n(l, N.perksCardArt)
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
var O = e => {
  let t, {
      className: s,
      selectedPremiumType: r,
      isSubscriberNitroHome: d = !1
    } = e,
    [_, E] = i.useState(!1),
    T = (0, R.usePerkCards)({
      styles: N
    }),
    f = (0, l.default)([u.default], () => u.default.useReducedMotion),
    {
      analyticsLocations: p
    } = (0, c.default)(),
    O = (0, I.useIsRemixANitroPerk)();
  return t = r !== m.PremiumTypes.TIER_0 ? [T.emoji, T.streaming, T.upload, T.customAppIcons, T.soundboard, O ? T.remix : T.videoBackground, T.superReactions, T.stickersPerkDiscoverability, T.badgeAlt] : [T.emoji, T.upload, T.customAppIcons, T.superReactions, T.stickersPerkDiscoverability, T.badgeAlt], (0, a.jsxs)("div", {
    className: n(N.perksContainer, s, {
      [N.partiallyHidden]: d && !_,
      [N.subscriberNitroHome]: d,
      [N.reducedMotion]: f
    }),
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-xxl/extrabold",
      className: n({
        [N.perksTitle]: null == r,
        [N.perksTitleStackedCards]: null != r
      }),
      children: g(d, r)
    }), (0, a.jsx)("div", {
      className: n(N.perkCardContainer, {
        [N.perkCardContainerExpanded]: _
      }),
      children: t.map(e => null != e && (0, a.jsx)(P, {
        ...e
      }, e.title))
    }), d && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: n({
          [N.sizeGizmo]: !_,
          [N.sizeGizmoExpanded]: _
        }),
        children: (0, a.jsx)(C, {
          onClick: () => {
            S.default.track(A.AnalyticEvents.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
              location_stack: p,
              was_expanded: _
            }), E(!_)
          },
          isShowingAll: _
        })
      }), (0, a.jsx)("div", {
        className: n(N.cover, {
          [N.hidden]: _
        })
      })]
    })]
  })
}