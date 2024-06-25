"use strict";
n.d(t, {
  e: function() {
    return k
  }
}), n(47120), n(653041);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(442837),
  a = n(704215),
  l = n(780384),
  u = n(481060),
  _ = n(845538),
  c = n(410030),
  d = n(100527),
  E = n(906732),
  I = n(605236),
  T = n(243778),
  h = n(963249),
  f = n(646476),
  S = n(819640),
  A = n(594174),
  N = n(147915),
  m = n(965645),
  O = n(362061),
  p = n(70956),
  R = n(709054),
  g = n(51144),
  C = n(981631),
  v = n(921944),
  L = n(474936),
  D = n(689938),
  M = n(93377),
  P = n(573809);
let y = [{
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
  b = 1 / 300,
  G = p.Z.Millis.DAYS_30,
  w = (0, s.animated)(m.Z),
  x = (0, s.animated)(O.Z),
  B = (0, s.animated)(u.GiftIcon);

function k(e) {
  let {
    themeOverride: t,
    hovered: n,
    isContentDismissed: o,
    boxColors: a = {
      dark: y,
      light: U
    }
  } = e, u = (0, c.ZP)(), [_, d] = function(e) {
    let [t, n] = r.useState(!1), [i, s] = r.useState(Math.floor(7 * Math.random()));
    return r.useEffect(() => {
      if (e) return;
      let t = Math.random() <= b;
      if (n(t), !t) {
        let e;
        do e = Math.floor(7 * Math.random()); while (e === i);
        s(e)
      }
    }, [e]), [t, i]
  }(n), E = (0, s.useSpring)({
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
  }), I = o ? d : 0, T = (0, l.wj)(null != t ? t : u) ? a.dark[I] : a.light[I];
  return !n && o ? (0, i.jsx)(B, {}) : o && _ ? (0, i.jsx)(x, {
    isDark: (0, l.wj)(u),
    style: E
  }) : (0, i.jsx)(w, {
    boxColor: T.box,
    ribbonColor: T.ribbon,
    style: E
  })
}
t.Z = r.memo(function(e) {
  let {
    disabled: t,
    channel: n
  } = e, {
    analyticsLocations: s
  } = (0, E.ZP)(d.Z.GIFT_BUTTON), [l, c] = r.useState(!1), m = (0, o.e7)([S.Z], () => !(null === S.Z || void 0 === S.Z ? void 0 : S.Z.hasLayers())), O = (0, o.e7)([A.default], () => A.default.getCurrentUser()), p = null != O ? R.default.age(O.id) : 0, y = !t && m && p >= G, {
    enabled: U
  } = f.RO.useExperiment({
    location: "ChannelPremiumGiftButton"
  }, {
    autoTrackExposure: y
  }), b = [];
  U && y && b.push(a.z.SEASONAL_GIFTING_COACHMARK_2023);
  let [w, x] = (0, T.U)(b), B = null != w, V = (0, g.Ft)(n), Z = null != V;
  if (t) return null;
  let H = () => {
      (0, h.Z)({
        isGift: !0,
        giftRecipient: null == V ? void 0 : V,
        initialPlanId: null,
        subscriptionTier: L.Si.TIER_2,
        analyticsLocations: s,
        analyticsObject: {
          page: n.isPrivate() ? C.ZY5.DM_CHANNEL : C.ZY5.GUILD_CHANNEL,
          section: C.jXE.CHANNEL_TEXT_AREA,
          object: C.qAy.SEASONAL_BUTTON_ICON,
          objectType: C.Qqv.GIFT
        }
      })
    },
    F = (0, i.jsxs)("div", {
      className: M.container,
      onMouseEnter: () => {
        !l && c(!0)
      },
      onMouseLeave: () => {
        c(!1)
      },
      children: [B && (0, i.jsx)(_.Z, {
        onComplete: () => c(!1),
        onDMCheckItOutClick: H,
        markAsDismissed: x,
        isDM: Z
      }), (0, i.jsx)(N.Z, {
        innerClassName: P.button,
        "aria-label": D.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
        isActive: !1,
        onClick: () => {
          c(!1), (0, I.EW)(a.z.SEASONAL_GIFTING_COACHMARK_2023, {
            dismissAction: v.L.TAKE_ACTION
          }), H()
        },
        children: (0, i.jsx)("div", {
          className: M.noPointerEvents,
          children: (0, i.jsx)(k, {
            hovered: l,
            isContentDismissed: !B
          })
        })
      })]
    });
  return B ? F : (0, i.jsx)(u.TooltipContainer, {
    className: M.container,
    text: (0, _.i)(Z),
    children: F
  })
})