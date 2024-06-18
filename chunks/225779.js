"use strict";
n.d(t, {
  DM: function() {
    return d
  },
  Ey: function() {
    return E
  },
  No: function() {
    return I
  },
  Ry: function() {
    return h
  },
  qX: function() {
    return S
  },
  u3: function() {
    return T
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(873546),
  a = n(481060),
  l = n(626135),
  u = n(981631),
  _ = n(689938),
  c = n(988920);
let d = Object.freeze({
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

function E(e) {
  let {
    children: t,
    className: n,
    minor: r = !1,
    ...o
  } = e;
  return (0, i.jsx)(a.FocusRing, {
    children: (0, i.jsx)("button", {
      className: s()(c.button, n, {
        [c.buttonMinor]: r
      }),
      ...o,
      children: t
    })
  })
}

function I(e) {
  let {
    children: t,
    noticeType: n,
    additionalTrackingProps: r,
    ...s
  } = e;
  return (0, i.jsx)(E, {
    ...s,
    onClick: e => {
      var t, i;
      null != s.onClick && s.onClick(e), t = n, i = r, null != t && l.default.track(u.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
        notice_type: t,
        ...i
      })
    },
    children: t
  })
}

function T(e) {
  let {
    children: t,
    href: n,
    ...r
  } = e;
  return (0, i.jsx)(a.Anchor, {
    ...r,
    className: c.button,
    href: n,
    children: t
  })
}

function h(e) {
  let {
    onClick: t,
    noticeType: n
  } = e;
  return (0, i.jsx)(a.Clickable, {
    focusProps: {
      offset: 6
    },
    className: c.closeButton,
    onClick: () => {
      var e;
      t(), null != (e = n) && l.default.track(u.rMx.APP_NOTICE_CLOSED, {
        notice_type: e
      })
    },
    "aria-label": _.Z.Messages.DISMISS,
    children: (0, i.jsx)(a.CloseSmallIcon, {
      size: "sm",
      color: "currentColor",
      className: c.closeIcon
    })
  })
}

function S(e) {
  let {
    color: t = d.DEFAULT,
    className: n,
    style: r,
    children: a
  } = e;
  return (0, i.jsx)("div", {
    className: s()(c.notice, {
      [c.isMobile]: o.tq
    }, n, t),
    style: null != r ? r : void 0,
    children: a
  })
}