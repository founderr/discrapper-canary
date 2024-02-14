"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
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
  E = n("940277"),
  S = n("386811"),
  h = n("964264"),
  C = n("655804"),
  _ = n("58463"),
  p = n("238500"),
  m = n("773336"),
  g = n("439932"),
  T = n("50885"),
  v = n("782340"),
  A = n("804392");
let I = e => T.default.close(e),
  R = e => T.default.minimize(e),
  M = (e, t) => {
    (0, m.isMac)() && !t.altKey ? T.default.fullscreen(e) : T.default.maximize(e)
  },
  O = e => {
    let {
      windowKey: t,
      themeOverride: n,
      hasOpenLayer: r
    } = e;
    return (0, a.jsxs)("div", {
      className: s(A.typeWindows, (0, g.getThemeClass)(n), {
        [A.withBackgroundOverride]: !r
      }),
      children: [(0, a.jsx)("div", {
        className: A.wordmarkWindows,
        children: (0, a.jsx)(f.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: A.winButtonClose,
        onClick: () => I(t),
        "aria-label": v.default.Messages.TITLE_BAR_CLOSE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(E.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: A.winButtonMinMax,
        onClick: e => M(t, e),
        "aria-label": v.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(h.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: A.winButtonMinMax,
        onClick: () => R(t),
        "aria-label": v.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(_.default, {})
      })]
    })
  },
  L = e => {
    let {
      focused: t,
      windowKey: n,
      frame: r,
      themeOverride: i,
      hasOpenLayer: u
    } = e;
    return (0, a.jsxs)(l.Clickable, {
      className: s(r ? A.typeMacOSWithFrame : A.typeMacOS, t ? A.focused : A.unfocused, (0, g.getThemeClass)(i), {
        [A.withBackgroundOverride]: !u
      }),
      onDoubleClick: () => T.default.maximize(n),
      tabIndex: -1,
      children: [o.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
        className: A.macDragRegion
      }) : (0, a.jsxs)("div", {
        className: A.macButtons,
        children: [(0, a.jsx)(l.Clickable, {
          className: A.macButtonClose,
          onClick: () => I(n),
          "aria-label": v.default.Messages.TITLE_BAR_CLOSE_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(S.default, {
            color: "#4c0000"
          })
        }), (0, a.jsx)(l.Clickable, {
          className: A.macButtonMinimize,
          onClick: () => R(n),
          "aria-label": v.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(p.default, {
            color: "#975500"
          })
        }), (0, a.jsx)(l.Clickable, {
          className: A.macButtonMaximize,
          onClick: e => M(n, e),
          "aria-label": v.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(C.default, {
            color: "#006500"
          })
        })]
      }), r ? (0, a.jsx)("div", {
        className: A.wordmarkMacOS,
        children: (0, a.jsx)(f.default, {
          color: "#ffffff"
        })
      }) : null]
    })
  };

function N(e) {
  let {
    focused: t,
    type: n,
    windowKey: r,
    macOSFrame: s = !1,
    themeOverride: l
  } = e, o = (0, d.useAppContext)(), f = (0, i.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(o)), E = (0, u.default)();
  if (f) return null;
  switch (n) {
    case m.PlatformTypes.WINDOWS:
      return (0, a.jsx)(O, {
        windowKey: r,
        themeOverride: l,
        hasOpenLayer: E
      });
    case m.PlatformTypes.OSX:
      return (0, a.jsx)(L, {
        focused: t,
        windowKey: r,
        frame: s,
        themeOverride: l,
        hasOpenLayer: E
      });
    default:
      return null
  }
}