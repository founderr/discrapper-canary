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
  o = n("368598"),
  u = n("49671"),
  d = n("244201"),
  c = n("191145"),
  f = n("270227"),
  h = n("940277"),
  p = n("386811"),
  m = n("964264"),
  C = n("655804"),
  E = n("58463"),
  g = n("238500"),
  S = n("773336"),
  v = n("439932"),
  _ = n("50885"),
  T = n("782340"),
  A = n("804392");
let I = e => _.default.close(e),
  M = e => _.default.minimize(e),
  x = (e, t) => {
    (0, S.isMac)() && !t.altKey ? _.default.fullscreen(e) : _.default.maximize(e)
  },
  y = e => {
    let {
      windowKey: t,
      themeOverride: n,
      hasOpenLayer: r
    } = e;
    return (0, a.jsxs)("div", {
      className: s(A.typeWindows, (0, v.getThemeClass)(n), {
        [A.withBackgroundOverride]: !r
      }),
      children: [(0, a.jsx)("div", {
        className: A.wordmarkWindows,
        children: (0, a.jsx)(f.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: A.winButtonClose,
        onClick: () => I(t),
        "aria-label": T.default.Messages.TITLE_BAR_CLOSE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(h.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: A.winButtonMinMax,
        onClick: e => x(t, e),
        "aria-label": T.default.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(m.default, {})
      }), (0, a.jsx)(l.Clickable, {
        className: A.winButtonMinMax,
        onClick: () => M(t),
        "aria-label": T.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, a.jsx)(E.default, {})
      })]
    })
  },
  R = e => {
    let {
      focused: t,
      windowKey: n,
      frame: r,
      themeOverride: i,
      hasOpenLayer: o
    } = e;
    return (0, a.jsxs)(l.Clickable, {
      className: s(r ? A.typeMacOSWithFrame : A.typeMacOS, t ? A.focused : A.unfocused, (0, v.getThemeClass)(i), {
        [A.withBackgroundOverride]: !o
      }),
      onDoubleClick: () => _.default.maximize(n),
      tabIndex: -1,
      children: [u.default.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, a.jsx)("div", {
        className: A.macDragRegion
      }) : (0, a.jsxs)("div", {
        className: A.macButtons,
        children: [(0, a.jsx)(l.Clickable, {
          className: A.macButtonClose,
          onClick: () => I(n),
          "aria-label": T.default.Messages.TITLE_BAR_CLOSE_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(p.default, {
            color: "#4c0000"
          })
        }), (0, a.jsx)(l.Clickable, {
          className: A.macButtonMinimize,
          onClick: () => M(n),
          "aria-label": T.default.Messages.TITLE_BAR_MINIMIZE_WINDOW,
          tabIndex: -1,
          children: (0, a.jsx)(g.default, {
            color: "#975500"
          })
        }), (0, a.jsx)(l.Clickable, {
          className: A.macButtonMaximize,
          onClick: e => x(n, e),
          "aria-label": T.default.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
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

function L(e) {
  let {
    focused: t,
    type: n,
    windowKey: r,
    macOSFrame: s = !1,
    themeOverride: l
  } = e, u = (0, d.useAppContext)(), f = (0, i.useStateFromStores)([c.default], () => c.default.isFullscreenInContext(u)), h = (0, o.default)();
  if (f) return null;
  switch (n) {
    case S.PlatformTypes.WINDOWS:
      return (0, a.jsx)(y, {
        windowKey: r,
        themeOverride: l,
        hasOpenLayer: h
      });
    case S.PlatformTypes.OSX:
      return (0, a.jsx)(R, {
        focused: t,
        windowKey: r,
        frame: s,
        themeOverride: l,
        hasOpenLayer: h
      });
    default:
      return null
  }
}