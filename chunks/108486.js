"use strict";
n.r(t), n.d(t, {
  SeasonalGiftIcon: function() {
    return B
  },
  default: function() {
    return H
  }
}), n("222007"), n("424973");
var l = n("37983"),
  i = n("884691"),
  a = n("907002"),
  s = n("249654"),
  r = n("446674"),
  o = n("151426"),
  u = n("819855"),
  d = n("77078"),
  c = n("373807"),
  f = n("841098"),
  p = n("812204"),
  m = n("685665"),
  h = n("10641"),
  E = n("384997"),
  g = n("649844"),
  S = n("53253"),
  C = n("977591"),
  T = n("778588"),
  v = n("697218"),
  I = n("551305"),
  _ = n("978679"),
  y = n("953957"),
  A = n("762974"),
  N = n("718517"),
  x = n("158998"),
  O = n("49111"),
  R = n("994428"),
  M = n("646718"),
  L = n("782340"),
  P = n("426068"),
  b = n("537461");
let j = [{
    box: "#FFD89E",
    ribbon: "#FF7476"
  }, {
    box: "#17B5E2",
    ribbon: "#FFFFFF"
  }, {
    box: "#EED169",
    ribbon: "#51A1EB"
  }, {
    box: "#509C65",
    ribbon: "#FFC96E"
  }, {
    box: "#E4578A",
    ribbon: "#BEC4FF"
  }, {
    box: "#AFE0FC",
    ribbon: "#FF9356"
  }, {
    box: "#DB6D6D",
    ribbon: "#67DA9C"
  }],
  U = [{
    box: "#EABB75",
    ribbon: "#E4595C"
  }, {
    box: "#2D7AA5",
    ribbon: "#64C7C2"
  }, {
    box: "#ECBF21",
    ribbon: "#51A1EB"
  }, {
    box: "#439359",
    ribbon: "#D5A24C"
  }, {
    box: "#FC90C4",
    ribbon: "#777FCE"
  }, {
    box: "#549DC6",
    ribbon: "#FF9356"
  }, {
    box: "#DB6F6F",
    ribbon: "#81C29F"
  }],
  D = 1 / 300,
  k = N.default.Millis.DAYS_30,
  w = (0, a.animated)(y.default),
  F = (0, a.animated)(A.default),
  G = (0, a.animated)(_.default);

function B(e) {
  let {
    themeOverride: t,
    hovered: n,
    isContentDismissed: s,
    boxColors: r = {
      dark: j,
      light: U
    }
  } = e, o = (0, f.default)(), [d, c] = function(e) {
    let [t, n] = i.useState(!1), [l, a] = i.useState(Math.floor(7 * Math.random()));
    return i.useEffect(() => {
      if (e) return;
      let t = Math.random() <= D;
      if (n(t), !t) {
        let e;
        do e = Math.floor(7 * Math.random()); while (e === l);
        a(e)
      }
    }, [e]), [t, l]
  }(n), p = (0, a.useSpring)({
    reverse: !n,
    reset: !0,
    from: {
      scale: 1
    },
    to: {
      scale: 1.14
    },
    config: {
      tension: 800,
      friction: 24
    }
  }), m = s ? c : 0, h = (0, u.isThemeDark)(null != t ? t : o) ? r.dark[m] : r.light[m];
  return !n && s ? (0, l.jsx)(G, {}) : s && d ? (0, l.jsx)(F, {
    isDark: (0, u.isThemeDark)(o),
    style: p
  }) : (0, l.jsx)(w, {
    boxColor: h.box,
    ribbonColor: h.ribbon,
    style: p
  })
}
var H = i.memo(function(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    analyticsLocations: a
  } = (0, m.default)(p.default.GIFT_BUTTON), [u, f] = i.useState(!1), _ = (0, r.useStateFromStores)([T.default], () => !(null === T.default || void 0 === T.default ? void 0 : T.default.hasLayers())), y = (0, r.useStateFromStores)([v.default], () => v.default.getCurrentUser()), A = null != y ? s.default.age(y.id) : 0, N = !t && _ && A >= k, {
    enabled: j
  } = S.SeasonalGiftingMarketingExperiment.useExperiment({
    location: "ChannelPremiumGiftButton"
  }, {
    autoTrackExposure: N
  }), U = [];
  j && N && U.push(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023);
  let [D, w] = (0, E.useSelectedDismissibleContent)(U), F = null != D, G = (0, x.useDirectMessageRecipient)(n), H = null != G, {
    enabled: V
  } = C.ExpandedGiftingRevampExperiment.useExperiment({
    location: "ChannelPremiumGiftButton"
  }, {
    autoTrackExposure: !1
  });
  if (t) return null;
  let K = () => {
      (0, g.default)({
        isGift: !0,
        giftRecipient: null == G ? void 0 : G,
        initialPlanId: null,
        subscriptionTier: M.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: a,
        analyticsObject: {
          page: n.isPrivate() ? O.AnalyticsPages.DM_CHANNEL : O.AnalyticsPages.GUILD_CHANNEL,
          section: O.AnalyticsSections.CHANNEL_TEXT_AREA,
          object: O.AnalyticsObjects.SEASONAL_BUTTON_ICON,
          objectType: O.AnalyticsObjectTypes.GIFT
        }
      })
    },
    W = (0, l.jsxs)("div", {
      className: P.container,
      onMouseEnter: () => {
        !u && f(!0)
      },
      onMouseLeave: () => {
        f(!1)
      },
      children: [F && (0, l.jsx)(c.default, {
        onComplete: () => f(!1),
        onDMCheckItOutClick: K,
        markAsDismissed: w,
        isDM: H
      }), (0, l.jsx)(I.default, {
        innerClassName: b.button,
        "aria-label": L.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
        isActive: !1,
        onClick: () => {
          f(!1), (0, h.markDismissibleContentAsDismissed)(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023, {
            dismissAction: R.ContentDismissActionType.TAKE_ACTION
          }), K()
        },
        children: (0, l.jsx)("div", {
          className: P.noPointerEvents,
          children: (0, l.jsx)(B, {
            hovered: u,
            isContentDismissed: !F
          })
        })
      })]
    });
  return F ? W : (0, l.jsx)(d.TooltipContainer, {
    className: P.container,
    text: (0, c.getSeasonalGiftingBody)(H, V),
    children: W
  })
})