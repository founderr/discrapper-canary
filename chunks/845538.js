"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  },
  getSeasonalGiftingBody: function() {
    return c
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("873546"),
  a = n("481060"),
  o = n("626135"),
  l = n("981631"),
  u = n("921944"),
  d = n("689938"),
  _ = n("628842");

function c(e) {
  return e || !(s.isMobile || s.isTablet) ? d.default.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : d.default.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
}

function E(e) {
  let {
    onComplete: t,
    onDMCheckItOutClick: u,
    isDM: E
  } = e;
  r.useEffect(() => {
    o.default.track(l.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
      type: "holiday_gifting_tip"
    })
  }, []);
  let I = r.useMemo(() => [() => n.e("36278").then(n.t.bind(n, "268147", 19)), () => n.e("66902").then(n.t.bind(n, "7171", 19)), () => n.e("99694").then(n.t.bind(n, "55562", 19))], []),
    T = E || !(s.isMobile || s.isTablet),
    f = T ? d.default.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : d.default.Messages.SEASONAL_GIFTING_POPUP_HEADER,
    S = T ? d.default.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : d.default.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
  return (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)(a.ChainedLottieAnimation, {
      className: _.image,
      animationData: I
    }), (0, i.jsxs)("div", {
      className: _.body,
      children: [(0, i.jsx)(a.Heading, {
        className: _.text,
        variant: "heading-sm/semibold",
        children: f
      }), (0, i.jsx)(a.Text, {
        className: _.text,
        variant: "text-sm/normal",
        children: c(E)
      })]
    }), (0, i.jsxs)("div", {
      className: _.dmButtonContainer,
      children: [(0, i.jsx)(a.Button, {
        className: _.dmButton,
        look: a.Button.Looks.FILLED,
        color: a.Button.Colors.BRAND,
        onClick: () => t(),
        children: d.default.Messages.GOT_IT
      }), (0, i.jsx)(a.Button, {
        className: _.dmButton,
        color: a.Button.Colors.BRAND_INVERTED,
        onClick: () => u(),
        children: S
      })]
    }), (0, i.jsx)("div", {
      className: _.pointer
    })]
  })
}

function I(e) {
  let {
    onComplete: t,
    onDMCheckItOutClick: n,
    markAsDismissed: r,
    isDM: s
  } = e;
  return (0, i.jsx)(a.Popout, {
    spacing: 0,
    shouldShow: !0,
    position: "top",
    align: "center",
    renderPopout: e => (0, i.jsx)(E, {
      ...e,
      onComplete: () => {
        t(), r(u.ContentDismissActionType.USER_DISMISS)
      },
      onDMCheckItOutClick: () => {
        n(), t(), r(u.ContentDismissActionType.TAKE_ACTION)
      },
      isDM: s
    }),
    onRequestClose: () => void 0,
    closeOnScroll: !1,
    ignoreModalClicks: !0,
    children: () => (0, i.jsx)("div", {
      className: _.popoutTarget
    })
  })
}