"use strict";
n.r(t), n.d(t, {
  SeasonalGiftIcon: function() {
    return G
  },
  default: function() {
    return B
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
  m = n("812204"),
  p = n("685665"),
  h = n("10641"),
  E = n("384997"),
  g = n("649844"),
  S = n("53253"),
  C = n("778588"),
  T = n("697218"),
  v = n("551305"),
  I = n("978679"),
  _ = n("953957"),
  N = n("762974"),
  A = n("718517"),
  y = n("158998"),
  x = n("49111"),
  O = n("994428"),
  R = n("646718"),
  M = n("782340"),
  L = n("240497"),
  P = n("350583");
let b = [{
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
  j = [{
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
  U = 1 / 300,
  D = A.default.Millis.DAYS_30,
  k = (0, a.animated)(_.default),
  w = (0, a.animated)(N.default),
  F = (0, a.animated)(I.default);

function G(e) {
  let {
    themeOverride: t,
    hovered: n,
    isContentDismissed: s,
    boxColors: r = {
      dark: b,
      light: j
    }
  } = e, o = (0, f.default)(), [d, c] = function(e) {
    let [t, n] = i.useState(!1), [l, a] = i.useState(Math.floor(7 * Math.random()));
    return i.useEffect(() => {
      if (e) return;
      let t = Math.random() <= U;
      if (n(t), !t) {
        let e;
        do e = Math.floor(7 * Math.random()); while (e === l);
        a(e)
      }
    }, [e]), [t, l]
  }(n), m = (0, a.useSpring)({
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
  }), p = s ? c : 0, h = (0, u.isThemeDark)(null != t ? t : o) ? r.dark[p] : r.light[p];
  return !n && s ? (0, l.jsx)(F, {}) : s && d ? (0, l.jsx)(w, {
    isDark: (0, u.isThemeDark)(o),
    style: m
  }) : (0, l.jsx)(k, {
    boxColor: h.box,
    ribbonColor: h.ribbon,
    style: m
  })
}
var B = i.memo(function(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    analyticsLocations: a
  } = (0, p.default)(m.default.GIFT_BUTTON), [u, f] = i.useState(!1), I = (0, r.useStateFromStores)([C.default], () => !(null === C.default || void 0 === C.default ? void 0 : C.default.hasLayers())), _ = (0, r.useStateFromStores)([T.default], () => T.default.getCurrentUser()), N = null != _ ? s.default.age(_.id) : 0, A = !t && I && N >= D, {
    enabled: b
  } = S.SeasonalGiftingMarketingExperiment.useExperiment({
    location: "ChannelPremiumGiftButton"
  }, {
    autoTrackExposure: A
  }), j = [];
  b && A && j.push(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023);
  let [U, k] = (0, E.useSelectedDismissibleContent)(j), w = null != U, F = (0, y.useDirectMessageRecipient)(n), B = null != F;
  if (t) return null;
  let H = () => {
      (0, g.default)({
        isGift: !0,
        giftRecipient: null == F ? void 0 : F,
        initialPlanId: null,
        subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
        analyticsLocations: a,
        analyticsObject: {
          page: n.isPrivate() ? x.AnalyticsPages.DM_CHANNEL : x.AnalyticsPages.GUILD_CHANNEL,
          section: x.AnalyticsSections.CHANNEL_TEXT_AREA,
          object: x.AnalyticsObjects.SEASONAL_BUTTON_ICON,
          objectType: x.AnalyticsObjectTypes.GIFT
        }
      })
    },
    V = (0, l.jsxs)("div", {
      className: L.container,
      onMouseEnter: () => {
        !u && f(!0)
      },
      onMouseLeave: () => {
        f(!1)
      },
      children: [w && (0, l.jsx)(c.default, {
        onComplete: () => f(!1),
        onDMCheckItOutClick: H,
        markAsDismissed: k,
        isDM: B
      }), (0, l.jsx)(v.default, {
        innerClassName: P.button,
        "aria-label": M.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
        isActive: !1,
        onClick: () => {
          f(!1), (0, h.markDismissibleContentAsDismissed)(o.DismissibleContent.SEASONAL_GIFTING_COACHMARK_2023, {
            dismissAction: O.ContentDismissActionType.TAKE_ACTION
          }), H()
        },
        children: (0, l.jsx)("div", {
          className: L.noPointerEvents,
          children: (0, l.jsx)(G, {
            hovered: u,
            isContentDismissed: !w
          })
        })
      })]
    });
  return w ? V : (0, l.jsx)(d.TooltipContainer, {
    className: L.container,
    text: (0, c.getSeasonalGiftingBody)(B),
    children: V
  })
})