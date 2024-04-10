"use strict";
n.r(t), n.d(t, {
  OmniButtonNuxAnimation: function() {
    return I
  },
  useActivitiesInTextOnboardingVisibility: function() {
    return A
  }
});
var a, l, s = n("735250"),
  i = n("470079"),
  r = n("500923"),
  o = n.n(r),
  u = n("442837"),
  d = n("524437"),
  c = n("607070"),
  f = n("424602"),
  h = n("802171"),
  m = n("605236"),
  p = n("175355"),
  E = n("160683"),
  C = n("921944"),
  g = n("545528");

function S(e) {
  let t = (0, u.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    n = i.useRef(null);
  return i.useEffect(() => {
    let a;
    return null != n.current && (a = o().loadAnimation({
      container: n.current,
      renderer: "svg",
      loop: !0,
      autoplay: !t,
      animationData: JSON.parse(JSON.stringify(e))
    })), () => {
      null == a || a.destroy()
    }
  }, [n, t, e]), n
}

function _() {
  return (0, s.jsx)("div", {
    ref: S(a || (a = n.t(p, 2))),
    className: g.glow
  })
}

function T() {
  return (0, s.jsx)("div", {
    ref: S(l || (l = n.t(E, 2))),
    className: g.trinkets
  })
}
let I = e => {
  let {
    children: t
  } = e;
  return i.useEffect(() => {
    setTimeout(() => (0, m.markDismissibleContentAsDismissed)(d.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX_V2, {
      dismissAction: C.ContentDismissActionType.AUTO_DISMISS
    }), 1e4)
  }, []), (0, s.jsxs)("div", {
    className: g.animation,
    children: [(0, s.jsx)(_, {}), (0, s.jsx)("div", {
      className: g.circleLayer
    }), (0, s.jsx)("div", {
      className: g.omniButton,
      children: t
    }), (0, s.jsx)(T, {})]
  })
};

function A(e, t) {
  let n = h.default.getCurrentConfig({
      location: t,
      guildId: null == e ? void 0 : e.guild_id
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: a
    } = f.AppLauncherOnboardingExperiment.useExperiment({
      location: t
    }),
    l = n.entryPointEnabled;
  return n.activitiesInTextEnabled && l ? {
    desktopThrobberEnabled: a
  } : null
}