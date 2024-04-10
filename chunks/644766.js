"use strict";
n.r(t), n.d(t, {
  NoticeButton: function() {
    return A
  },
  NoticeButtonAnchor: function() {
    return u
  },
  NoticeCloseButton: function() {
    return T
  },
  NoticeColors: function() {
    return _
  },
  PrimaryCTANoticeButton: function() {
    return N
  },
  default: function() {
    return L
  }
});
var i = n("735250");
n("470079");
var E = n("803997"),
  o = n.n(E),
  r = n("873546"),
  s = n("481060"),
  l = n("465670"),
  c = n("626135"),
  I = n("981631"),
  a = n("689938"),
  S = n("15499");
let _ = Object.freeze({
  DEFAULT: S.colorDefault,
  NEUTRAL: S.colorNeutral,
  BRAND: S.colorBrand,
  WARNING: S.colorWarning,
  DANGER: S.colorDanger,
  INFO: S.colorInfo,
  STREAMER_MODE: S.colorStreamerMode,
  CUSTOM: S.colorCustom,
  SPOTIFY: S.colorSpotify,
  PLAYSTATION: S.colorPlayStation,
  PREMIUM_TIER_0: S.colorPremiumTier0,
  PREMIUM_TIER_1: S.colorPremiumTier1,
  PREMIUM_TIER_2: S.colorPremiumTier2
});

function A(e) {
  let {
    children: t,
    className: n,
    minor: E = !1,
    ...r
  } = e;
  return (0, i.jsx)(s.FocusRing, {
    children: (0, i.jsx)("button", {
      className: o()(S.button, n, {
        [S.buttonMinor]: E
      }),
      ...r,
      children: t
    })
  })
}

function N(e) {
  let {
    children: t,
    noticeType: n,
    additionalTrackingProps: E,
    ...o
  } = e;
  return (0, i.jsx)(A, {
    ...o,
    onClick: e => {
      var t, i;
      null != o.onClick && o.onClick(e), t = n, i = E, null != t && c.default.track(I.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: t,
        ...i
      })
    },
    children: t
  })
}

function u(e) {
  let {
    children: t,
    href: n,
    ...E
  } = e;
  return (0, i.jsx)(s.Anchor, {
    ...E,
    className: S.button,
    href: n,
    children: t
  })
}

function T(e) {
  let {
    onClick: t,
    noticeType: n
  } = e;
  return (0, i.jsx)(s.Clickable, {
    focusProps: {
      offset: 6
    },
    className: S.closeButton,
    onClick: () => {
      var e;
      t(), null != (e = n) && c.default.track(I.AnalyticEvents.APP_NOTICE_CLOSED, {
        notice_type: e
      })
    },
    "aria-label": a.default.Messages.DISMISS,
    children: (0, i.jsx)(l.default, {
      className: S.closeIcon,
      width: 18,
      height: 18
    })
  })
}

function L(e) {
  let {
    color: t = _.DEFAULT,
    className: n,
    style: E,
    children: s
  } = e;
  return (0, i.jsx)("div", {
    className: o()(S.notice, {
      [S.isMobile]: r.isMobile
    }, n, t),
    style: null != E ? E : void 0,
    children: s
  })
}