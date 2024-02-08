"use strict";
n.r(t), n.d(t, {
  getSeasonalGiftingBody: function() {
    return p
  },
  default: function() {
    return h
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("77078"),
  s = n("977591"),
  r = n("841792"),
  o = n("599110"),
  u = n("49111"),
  d = n("994428"),
  c = n("782340"),
  f = n("843011");

function p(e, t) {
  return e || t ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : c.default.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
}

function m(e) {
  let {
    onComplete: t,
    onDMCheckItOutClick: d,
    isDM: m
  } = e;
  i.useEffect(() => {
    o.default.track(u.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
      type: "holiday_gifting_tip"
    })
  }, []);
  let {
    enabled: h
  } = s.ExpandedGiftingRevampExperiment.useExperiment({
    location: "ChannelPremiumGiftButton"
  }, {
    autoTrackExposure: !1
  }), E = i.useMemo(() => [() => n.el("540902").then(n.t.bind(n, "540902", 19)), () => n.el("915604").then(n.t.bind(n, "915604", 19)), () => n.el("166505").then(n.t.bind(n, "166505", 19))], []), S = m || h, g = S ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : c.default.Messages.SEASONAL_GIFTING_POPUP_HEADER, C = S ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : c.default.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
  return (0, l.jsxs)("div", {
    className: f.container,
    children: [(0, l.jsx)(r.default, {
      className: f.image,
      animationData: E
    }), (0, l.jsxs)("div", {
      className: f.body,
      children: [(0, l.jsx)(a.Heading, {
        className: f.text,
        variant: "heading-sm/semibold",
        children: g
      }), (0, l.jsx)(a.Text, {
        className: f.text,
        variant: "text-sm/normal",
        children: p(m, h)
      })]
    }), (0, l.jsxs)("div", {
      className: f.dmButtonContainer,
      children: [(0, l.jsx)(a.Button, {
        className: f.dmButton,
        look: a.Button.Looks.FILLED,
        color: a.Button.Colors.BRAND,
        onClick: () => t(),
        children: c.default.Messages.GOT_IT
      }), (0, l.jsx)(a.Button, {
        className: f.dmButton,
        look: a.Button.Looks.INVERTED,
        color: a.Button.Colors.BRAND,
        onClick: () => d(),
        children: C
      })]
    }), (0, l.jsx)("div", {
      className: f.pointer
    })]
  })
}

function h(e) {
  let {
    onComplete: t,
    onDMCheckItOutClick: n,
    markAsDismissed: i,
    isDM: s
  } = e;
  return (0, l.jsx)(a.Popout, {
    spacing: 0,
    shouldShow: !0,
    position: "top",
    align: "center",
    renderPopout: e => (0, l.jsx)(m, {
      ...e,
      onComplete: () => {
        t(), i(d.ContentDismissActionType.USER_DISMISS)
      },
      onDMCheckItOutClick: () => {
        n(), t(), i(d.ContentDismissActionType.TAKE_ACTION)
      },
      isDM: s
    }),
    onRequestClose: () => void 0,
    closeOnScroll: !1,
    ignoreModalClicks: !0,
    children: () => (0, l.jsx)("div", {
      className: f.popoutTarget
    })
  })
}