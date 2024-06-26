"use strict";
n.d(t, {
  Ox: function() {
    return p
  },
  QP: function() {
    return N
  },
  ob: function() {
    return g
  },
  q4: function() {
    return R
  }
}), n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(97613),
  l = n.n(a),
  u = n(832706),
  _ = n(435802),
  c = n(652874),
  d = n(477690),
  E = n(481060),
  I = n(714338),
  T = n(624138),
  h = n(153850),
  f = n(247194);
let S = (0, T.Mg)(d.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
(r = i || (i = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
let N = (0, c.Z)(e => ({
  fullScreenLayers: [],
  addLayer: t => e(e => {
    let {
      fullScreenLayers: n
    } = e;
    return {
      fullScreenLayers: [...n, t]
    }
  })
}));

function A(e) {
  let {
    item: t
  } = e, n = o.useRef(null);
  return (0, E.useFocusLock)(n), o.useEffect(() => (I.Z.disable(), I.Z.enableTemp(function(e) {
    return {
      POP_LAYER: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
          g(e)
        }
      }
    }
  }(t.key)), () => {
    I.Z.disableTemp()
  }), [t.key]), (0, s.jsx)(t.LayerComponent, {
    children: (0, s.jsxs)("div", {
      className: f.root,
      ref: n,
      children: [(0, s.jsx)("div", {
        className: f.drag
      }), t.render({
        transitionState: null != t ? t.transitionState : 3,
        closeLayer: () => g(t.key)
      })]
    })
  })
}
let m = {
    enter: f.enter,
    enterActive: f.enterActive,
    enterDone: f.enterDone,
    exit: f.exit,
    exitActive: f.exitActive,
    exitDone: f.exitDone
  },
  O = {
    enter: f.enterReducedMotion,
    enterActive: f.enterActiveReducedMotion,
    enterDone: f.enterDoneReducedMotion,
    exit: f.exitReducedMotion,
    exitActive: f.exitActiveReducedMotion,
    exitDone: f.exitDoneReducedMotion
  };

function p() {
  let {
    reducedMotion: e
  } = o.useContext(E.AccessibilityPreferencesContext), t = e.enabled ? O : m, n = N(e => e.fullScreenLayers);
  return (0, s.jsx)(u.Z, {
    children: n.map(e => (0, s.jsx)(_.Z, {
      classNames: t,
      timeout: S,
      onEntered: () => {
        N.setState({
          fullScreenLayers: n.map(t => t.key === e.key ? {
            ...t,
            transitionState: 2
          } : t)
        })
      },
      unmountOnExit: !0,
      children: (0, s.jsx)(A, {
        item: e
      })
    }, e.key))
  })
}

function R(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
    {
      layerKey: n,
      Layer: i
    } = t,
    r = null != n ? n : l()();
  return N.setState(t => ({
    fullScreenLayers: [...t.fullScreenLayers, {
      key: r,
      transitionState: 1,
      LayerComponent: null != i ? i : h.ZP,
      render: e
    }]
  })), r
}

function g(e) {
  N.setState(t => ({
    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
  }))
}