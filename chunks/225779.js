"use strict";
n.r(t), n.d(t, {
  Notice: function() {
    return h
  },
  NoticeButton: function() {
    return I
  },
  NoticeButtonAnchor: function() {
    return f
  },
  NoticeCloseButton: function() {
    return S
  },
  NoticeColors: function() {
    return E
  },
  PrimaryCTANoticeButton: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  a = n("873546"),
  o = n("481060"),
  l = n("465670"),
  u = n("626135"),
  d = n("981631"),
  _ = n("689938"),
  c = n("988920");
let E = Object.freeze({
  DEFAULT: c.colorDefault,
  NEUTRAL: c.colorNeutral,
  BRAND: c.colorBrand,
  WARNING: c.colorWarning,
  DANGER: c.colorDanger,
  INFO: c.colorInfo,
  STREAMER_MODE: c.colorStreamerMode,
  CUSTOM: c.colorCustom,
  SPOTIFY: c.colorSpotify,
  PLAYSTATION: c.colorPlayStation,
  PREMIUM_TIER_0: c.colorPremiumTier0,
  PREMIUM_TIER_1: c.colorPremiumTier1,
  PREMIUM_TIER_2: c.colorPremiumTier2
});

function I(e) {
  let {
    children: t,
    className: n,
    minor: r = !1,
    ...a
  } = e;
  return (0, i.jsx)(o.FocusRing, {
    children: (0, i.jsx)("button", {
      className: s()(c.button, n, {
        [c.buttonMinor]: r
      }),
      ...a,
      children: t
    })
  })
}

function T(e) {
  let {
    children: t,
    noticeType: n,
    additionalTrackingProps: r,
    ...s
  } = e;
  return (0, i.jsx)(I, {
    ...s,
    onClick: e => {
      var t, i;
      null != s.onClick && s.onClick(e), t = n, i = r, null != t && u.default.track(d.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: t,
        ...i
      })
    },
    children: t
  })
}

function f(e) {
  let {
    children: t,
    href: n,
    ...r
  } = e;
  return (0, i.jsx)(o.Anchor, {
    ...r,
    className: c.button,
    href: n,
    children: t
  })
}

function S(e) {
  let {
    onClick: t,
    noticeType: n
  } = e;
  return (0, i.jsx)(o.Clickable, {
    focusProps: {
      offset: 6
    },
    className: c.closeButton,
    onClick: () => {
      var e;
      t(), null != (e = n) && u.default.track(d.AnalyticEvents.APP_NOTICE_CLOSED, {
        notice_type: e
      })
    },
    "aria-label": _.default.Messages.DISMISS,
    children: (0, i.jsx)(l.default, {
      className: c.closeIcon,
      width: 18,
      height: 18
    })
  })
}

function h(e) {
  let {
    color: t = E.DEFAULT,
    className: n,
    style: r,
    children: o
  } = e;
  return (0, i.jsx)("div", {
    className: s()(c.notice, {
      [c.isMobile]: a.isMobile
    }, n, t),
    style: null != r ? r : void 0,
    children: o
  })
}