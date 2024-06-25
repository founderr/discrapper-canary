"use strict";
n.d(t, {
  Z: function() {
    return D
  }
});
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(442837),
  a = n(481060),
  l = n(350810),
  u = n(579806),
  _ = n(40851),
  c = n(358221),
  d = n(754347),
  E = n(428548),
  I = n(718759),
  T = n(679219),
  h = n(835225),
  f = n(939039),
  S = n(117795),
  A = n(358085),
  N = n(792125),
  m = n(998502),
  O = n(689938),
  p = n(204172);
let R = e => m.ZP.close(e),
  g = e => m.ZP.minimize(e),
  C = (e, t) => {
    (0, A.isMac)() && !t.altKey ? m.ZP.fullscreen(e) : m.ZP.maximize(e)
  },
  v = e => {
    let {
      windowKey: t,
      themeOverride: n,
      hasOpenLayer: r
    } = e;
    return (0, i.jsxs)("div", {
      className: s()(p.typeWindows, (0, N.Q)(n), {
        [p.withBackgroundOverride]: !r
      }),
      children: [(0, i.jsx)("div", {
        className: p.wordmarkWindows,
        children: (0, i.jsx)(d.Z, {})
      }), (0, i.jsx)(a.Clickable, {
        className: p.winButtonClose,
        onClick: () => R(t),
        "aria-label": O.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
        tabIndex: -1,
        children: (0, i.jsx)(E.Z, {})
      }), (0, i.jsx)(a.Clickable, {
        className: p.winButtonMinMax,
        onClick: e => C(t, e),
        "aria-label": O.Z.Messages.TITLE_BAR_MAXIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, i.jsx)(T.Z, {})
      }), (0, i.jsx)(a.Clickable, {
        className: p.winButtonMinMax,
        onClick: () => g(t),
        "aria-label": O.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
        tabIndex: -1,
        children: (0, i.jsx)(f.Z, {})
      })]
    })
  },
  L = e => {
    let {
      focused: t,
      windowKey: n,
      frame: r,
      themeOverride: o,
      hasOpenLayer: l
    } = e;
    return (0, i.jsxs)(a.Clickable, {
      className: s()(r ? p.typeMacOSWithFrame : p.typeMacOS, t ? p.focused : p.unfocused, (0, N.Q)(o), {
        [p.withBackgroundOverride]: !l
      }),
      onDoubleClick: () => m.ZP.maximize(n),
      tabIndex: -1,
      children: [u.Z.window.USE_OSX_NATIVE_TRAFFIC_LIGHTS ? (0, i.jsx)("div", {
        className: p.macDragRegion
      }) : (0, i.jsxs)("div", {
        className: p.macButtons,
        children: [(0, i.jsx)(a.Clickable, {
          className: p.macButtonClose,
          onClick: () => R(n),
          "aria-label": O.Z.Messages.TITLE_BAR_CLOSE_WINDOW,
          tabIndex: -1,
          children: (0, i.jsx)(I.Z, {
            color: "#4c0000"
          })
        }), (0, i.jsx)(a.Clickable, {
          className: p.macButtonMinimize,
          onClick: () => g(n),
          "aria-label": O.Z.Messages.TITLE_BAR_MINIMIZE_WINDOW,
          tabIndex: -1,
          children: (0, i.jsx)(S.Z, {
            color: "#975500"
          })
        }), (0, i.jsx)(a.Clickable, {
          className: p.macButtonMaximize,
          onClick: e => C(n, e),
          "aria-label": O.Z.Messages.TITLE_BAR_FULLSCREEN_WINDOW,
          tabIndex: -1,
          children: (0, i.jsx)(h.Z, {
            color: "#006500"
          })
        })]
      }), r ? (0, i.jsx)("div", {
        className: p.wordmarkMacOS,
        children: (0, i.jsx)(d.Z, {
          color: "#ffffff"
        })
      }) : null]
    })
  };

function D(e) {
  let {
    focused: t,
    type: n,
    windowKey: r,
    macOSFrame: s = !1,
    themeOverride: a
  } = e, u = (0, _.bp)(), d = (0, o.e7)([c.Z], () => c.Z.isFullscreenInContext(u)), E = (0, l.Z)();
  if (d) return null;
  switch (n) {
    case A.PlatformTypes.WINDOWS:
      return (0, i.jsx)(v, {
        windowKey: r,
        themeOverride: a,
        hasOpenLayer: E
      });
    case A.PlatformTypes.OSX:
      return (0, i.jsx)(L, {
        focused: t,
        windowKey: r,
        frame: s,
        themeOverride: a,
        hasOpenLayer: E
      });
    default:
      return null
  }
}