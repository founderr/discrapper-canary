"use strict";
n.r(t), n.d(t, {
  FullScreenLayers: function() {
    return h
  },
  useFullScreenLayerStore: function() {
    return g
  },
  openFullScreenLayer: function() {
    return M
  },
  closeFullScreenLayer: function() {
    return p
  }
}), n("222007");
var l, u, a = n("37983"),
  d = n("884691"),
  i = n("995008"),
  r = n.n(i),
  s = n("324134"),
  o = n("308503"),
  c = n("769846"),
  E = n("77078"),
  f = n("485328"),
  _ = n("159885"),
  T = n("983782"),
  S = n("275495");
let v = (0, _.cssValueToNumber)(c.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
(u = l || (l = {}))[u.ENTERING = 1] = "ENTERING", u[u.ENTERED = 2] = "ENTERED", u[u.EXITING = 3] = "EXITING", u[u.EXITED = 4] = "EXITED";
let g = (0, o.default)(e => ({
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

function I(e) {
  let {
    item: t
  } = e, n = d.useRef(null);
  return (0, E.useFocusLock)(n), d.useEffect(() => (f.default.disable(), f.default.enableTemp(function(e) {
    return {
      POP_LAYER: {
        binds: ["esc"],
        comboKeysBindGlobal: !0,
        action() {
          p(e)
        }
      }
    }
  }(t.key)), () => {
    f.default.disableTemp()
  }), [t.key]), (0, a.jsx)(t.LayerComponent, {
    children: (0, a.jsxs)("div", {
      className: S.root,
      ref: n,
      children: [(0, a.jsx)("div", {
        className: S.drag
      }), t.render({
        transitionState: null != t ? t.transitionState : 3,
        closeLayer: () => p(t.key)
      })]
    })
  })
}
let N = {
    enter: S.enter,
    enterActive: S.enterActive,
    enterDone: S.enterDone,
    exit: S.exit,
    exitActive: S.exitActive,
    exitDone: S.exitDone
  },
  m = {
    enter: S.enterReducedMotion,
    enterActive: S.enterActiveReducedMotion,
    enterDone: S.enterDoneReducedMotion,
    exit: S.exitReducedMotion,
    exitActive: S.exitActiveReducedMotion,
    exitDone: S.exitDoneReducedMotion
  };

function h() {
  let {
    reducedMotion: e
  } = d.useContext(E.AccessibilityPreferencesContext), t = e.enabled, n = t ? m : N, l = g(e => e.fullScreenLayers);
  return (0, a.jsx)(s.TransitionGroup, {
    children: l.map(e => (0, a.jsx)(s.CSSTransition, {
      classNames: n,
      timeout: v,
      onEntered: () => {
        g.setState({
          fullScreenLayers: l.map(t => t.key === e.key ? {
            ...t,
            transitionState: 2
          } : t)
        })
      },
      unmountOnExit: !0,
      children: (0, a.jsx)(I, {
        item: e
      })
    }, e.key))
  })
}

function M(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
    {
      layerKey: n,
      Layer: l
    } = t,
    u = null != n ? n : r();
  return g.setState(t => ({
    fullScreenLayers: [...t.fullScreenLayers, {
      key: u,
      transitionState: 1,
      LayerComponent: null != l ? l : T.default,
      render: e
    }]
  })), u
}

function p(e) {
  g.setState(t => ({
    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
  }))
}