"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var a = n("37983");
n("884691");
var r = n("414456"),
  s = n.n(r),
  i = n("446674"),
  l = n("77078"),
  u = n("368598"),
  o = n("49671"),
  d = n("244201"),
  c = n("191145"),
  f = n("270227"),
  S = n("940277"),
  E = n("386811"),
  h = n("964264"),
  _ = n("655804"),
  C = n("58463"),
  p = n("238500"),
  m = n("773336"),
  T = n("439932"),
  g = n("50885"),
  A = n("782340"),
  v = n("804392");
let I = e => g.default.close(e),
  R = e => g.default.minimize(e),
  M = (e, t) => {
    (0, m.isMac)() && !t.altKey ? g.default.fullscreen(e) : g.default.maximize(e)
  },
  O = e => {
    let {
      windowKey: t,
      themeOverride: n,
      hasOpenLayer: r
    } = e;
    return (0, a.jsxs)("div", {
      className: s(v.typeWindows, (0, T.getThemeClass)(n), {
        [v.withBackgroundOverride]: !r
      }),
      children: [(0, a.jsx)("div", {
        className: v.wordmarkWindows,
        children: (0, a.jsx)(f.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: v.winButtonClose,
        onClick: () => I(t),
        "aria-label": A.default.Messages.TITLE_BAR_CLOSE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(S.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: v.winButtonMinMax,
        onClick: e => M(t, e),
        "aria-label": A.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(h.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: v.winButtonMinMax,
        onClick: () => R(t),
        "aria-label": A.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(C.default, {})
      })]
    })
  },
  N = e => {
    let {
      focused: t,
      windowKey: n,
      frame: r,
      themeOverride: i,
      hasOpenLayer: u
    } = e;
    return (0, a.jsxs)(l.Clickable, {
      className: s(r ? v.typeMacOSWithFrame : v.typeMacOS, t ? v.focused : v.unfocused, (0, T.getThemeClass)(i), {
        [v.withBackgroundOverride]: !u
      }),
      onDoubleClick: () => g.default.maximize(n),
      tabIndex: -1,
      children: [o.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
        className: v.macDragRegion
      }) : (0, a.jsxs)("div", {
        className: v.macButtons,
        children: [(0, a.jsx)(l.Clickable, {
          className: v.macButtonClose,
          onClick: () => I(n),
          "aria-label": A.default.Messages.TITLE_BAR_CLOSE_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(E.default, {
            color: "#4c0000"
          })
        }), (0, a.jsx)(l.Clickable, {
          className: v.macButtonMinimize,
          onClick: () => R(n),
          "aria-label": A.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(p.default, {
            color: "#975500"
          })
        }), (0, a.jsx)(l.Clickable, {
          className: v.macButtonMaximize,
          onClick: e => M(n, e),
          "aria-label": A.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(_.default, {
            color: "#006500"
          })
        })]
      }), r ? (0, a.jsx)("div", {
        className: v.wordmarkMacOS,
        children: (0, a.jsx)(f.default, {
          color: "#ffffff"
        })
      }) : null]
    })
  };

function L(e) {
  let {
    focused: t,
    type: n,
    windowKey: r,
    macOSFrame: s = !1,
    themeOverride: l
  } = e, o = (0, d.useAppContext)(), f = (0, i.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(o)), S = (0, u.default)();
  if (f) return null;
  switch (n) {
    case m.PlatformTypes.WINDOWS:
      return (0, a.jsx)(O, {
        windowKey: r,
        themeOverride: l,
        hasOpenLayer: S
      });
    case m.PlatformTypes.OSX:
      return (0, a.jsx)(N, {
        focused: t,
        windowKey: r,
        frame: s,
        themeOverride: l,
        hasOpenLayer: S
      });
    default:
      return null
  }
}