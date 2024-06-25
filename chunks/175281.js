n.d(t, {
  Z: function() {
    return y
  }
}), n(47120), n(653041);
var l, i, s = n(735250),
  r = n(470079),
  a = n(120356),
  o = n.n(a),
  u = n(512722),
  c = n.n(u),
  d = n(392711),
  h = n.n(d),
  p = n(748780),
  g = n(442837),
  m = n(215569),
  C = n(481060),
  E = n(612226),
  f = n(951483),
  _ = n(714338),
  I = n(607070),
  N = n(585483),
  Z = n(557177),
  S = n(264549),
  x = n(981631),
  L = n(689938),
  T = n(661948);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i = l || (l = {})).UP = "UP", i.DOWN = "DOWN", i.LEFT = "LEFT", i.RIGHT = "RIGHT";
let A = {
  UP: h().throttle(() => (0, Z.GN)("ddr-up"), 100),
  DOWN: h().throttle(() => (0, Z.GN)("ddr-down"), 100),
  LEFT: h().throttle(() => (0, Z.GN)("ddr-left"), 100),
  RIGHT: h().throttle(() => (0, Z.GN)("ddr-right"), 100)
};

function M(e) {
  switch (e.keyCode) {
    case x.yXg.ARROW_UP:
      return "UP";
    case x.yXg.ARROW_DOWN:
      return "DOWN";
    case x.yXg.ARROW_LEFT:
      return "LEFT";
    case x.yXg.ARROW_RIGHT:
      return "RIGHT";
    default:
      return null
  }
}
let R = 1e3 / 60,
  O = [E.Q2.MESSAGE, E.Q2.NAVIGATION, E.Q2.VOICE_AND_VIDEO, E.Q2.CHAT, E.Q2.MISCELLANEOUS];

function P() {
  let e = r.useMemo(() => h()((0, E.Rv)()).groupBy(e => e.group).value(), []);
  return (0, s.jsx)("div", {
    className: T.keyboardShortcutList,
    children: O.map(t => {
      let n = e[t],
        l = (0, E.UD)(t),
        i = (0, E.U6)(t);
      return (0, s.jsxs)("div", {
        className: T.keyboardShortcutSection,
        children: [(0, s.jsxs)("div", {
          children: [(0, s.jsx)(C.Heading, {
            variant: "heading-lg/semibold",
            children: l
          }), null != i && (0, s.jsx)(C.Text, {
            className: T.keybindGroupDescription,
            variant: "text-sm/normal",
            children: i
          })]
        }), (0, s.jsx)("div", {
          className: T.keyboardShortcutListGroup,
          children: n.map((e, t) => {
            var n;
            return (null === (n = e.predicate) || void 0 === n ? void 0 : n.call(e)) === !1 ? null : (0, s.jsxs)("div", {
              className: o()(T.keybindGroup),
              children: [(0, s.jsx)(C.Text, {
                variant: "text-sm/normal",
                children: e.description
              }), (0, s.jsx)("div", {
                className: "keybind-shortcuts",
                children: e.binds.map(e => (0, s.jsx)(C.KeyCombo, {
                  className: T.keybindKey,
                  shortcut: e
                }, e))
              })]
            }, t)
          })
        }, t)]
      }, t)
    })
  })
}
class b extends r.PureComponent {
  componentDidMount() {
    this.lastInputedKeys = [], N.S.subscribe(x.CkL.SCROLL_PAGE_UP, this.scrollPageUp), N.S.subscribe(x.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.addEventListener("keydown", this.handleKeyDown, {
      capture: !0
    }), window.addEventListener("keyup", this.handleKeyUp, {
      capture: !0
    })
  }
  componentWillUnmount() {
    N.S.unsubscribe(x.CkL.SCROLL_PAGE_UP, this.scrollPageUp), N.S.unsubscribe(x.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), window.removeEventListener("keydown", this.handleKeyDown, {
      capture: !0
    }), window.removeEventListener("keyup", this.handleKeyUp, {
      capture: !0
    })
  }
  render() {
    let {
      UP: e,
      DOWN: t,
      LEFT: n,
      RIGHT: l
    } = this.state;
    return (0, s.jsxs)(p.Z.div, {
      className: T.keyboardShortcutsModal,
      style: this.getStyles(),
      children: [(0, s.jsxs)(C.H, {
        className: T.modalTitle,
        children: [(0, s.jsx)("div", {
          className: T.content,
          children: L.Z.Messages.KEYBIND_DESCRIPTION_MODAL_TITLE
        }), (0, s.jsx)(C.KeyCombo, {
          shortcut: "mod+/"
        })]
      }), (0, s.jsx)("div", {
        className: T.modalSubtitle,
        children: L.Z.Messages.KEYBIND_DESCRIPTION_MODAL_SUBTITLE
      }), (0, s.jsxs)("div", {
        className: T.ddrArrows,
        children: [(0, s.jsx)(j, {
          arrow: "LEFT",
          isActive: n,
          className: T.left,
          children: "left"
        }), (0, s.jsx)(j, {
          arrow: "DOWN",
          isActive: t,
          className: T.down,
          children: "down"
        }), (0, s.jsx)(j, {
          arrow: "UP",
          isActive: e,
          className: T.up,
          children: "up"
        }), (0, s.jsx)(j, {
          arrow: "RIGHT",
          isActive: l,
          className: T.right,
          children: "right"
        })]
      }), (0, s.jsx)(C.AdvancedScrollerAuto, {
        ref: this.scrollerRef,
        fade: !0,
        children: (0, s.jsx)(C.HeadingLevel, {
          children: (0, s.jsx)(P, {})
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "state", {
      UP: !1,
      DOWN: !1,
      LEFT: !1,
      RIGHT: !1,
      opacity: new p.Z.Value(1),
      scaleX: new p.Z.Value(1),
      scaleY: new p.Z.Value(0),
      animating: !1
    }), v(this, "scrollerRef", r.createRef()), v(this, "lastInputedKeys", []), v(this, "scrollPageUp", () => {
      let e = this.scrollerRef.current;
      c()(null != e, "Scroller is pagedUp when not mounted"), e.scrollPageUp({
        animate: !0
      })
    }), v(this, "scrollPageDown", () => {
      let e = this.scrollerRef.current;
      c()(null != e, "Scroller is pagedDown when not mounted"), e.scrollPageDown({
        animate: !0
      })
    }), v(this, "arrowUp", e => {
      let {
        direction: t
      } = e;
      this.setState({
        [t]: !1
      })
    }), v(this, "arrowDown", e => {
      let {
        direction: t
      } = e;
      A[t](), this.setState({
        [t]: !0
      })
    }), v(this, "componentWillLeave", e => {
      this.setState({
        animating: !0
      }), this.state.opacity.setValue(1), this.state.scaleX.setValue(.5), this.state.scaleY.setValue(1), p.Z.sequence([p.Z.timing(this.state.opacity, {
        toValue: .7,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: .7,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        delay: 300,
        toValue: .7,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: .7,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: .7,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: .7,
        duration: 2 * R
      }), p.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 2 * R
      }), p.Z.timing(this.state.scaleY, {
        delay: 100,
        toValue: .005,
        duration: 8 * R,
        easing: p.Z.Easing.in(p.Z.Easing.ease)
      }), p.Z.parallel([p.Z.timing(this.state.scaleX, {
        toValue: 1,
        duration: 10 * R,
        easing: p.Z.Easing.out(p.Z.Easing.ease)
      }), p.Z.timing(this.state.opacity, {
        toValue: 0,
        duration: 12 * R
      })])]).start(e)
    }), v(this, "toggleOpacity", () => {
      1 === this.state.opacity._value ? this.state.opacity.setValue(0) : this.state.opacity.setValue(1)
    }), v(this, "getStyles", () => ({
      opacity: this.state.opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
      }),
      transform: [{
        scaleX: this.state.scaleX.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 2]
        })
      }, {
        scaleY: this.state.scaleY.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      }]
    })), v(this, "handleKeyDown", e => {
      if (this.lastInputedKeys.push(e.keyCode), this.lastInputedKeys = this.lastInputedKeys.slice(-5), this.lastInputedKeys[0] === x.yXg.H && this.lastInputedKeys[1] === x.yXg.H && this.lastInputedKeys[2] === x.yXg.ARROW_RIGHT && this.lastInputedKeys[3] === x.yXg.N && this.lastInputedKeys[4] === x.yXg.K && this.props.activateRagingDemon(), this.props.keyboardModeEnabled) return;
      let t = M(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowDown({
        direction: t
      }))
    }), v(this, "handleKeyUp", e => {
      if (this.props.keyboardModeEnabled) return;
      let t = M(e);
      null !== t && (e.stopPropagation(), e.preventDefault(), this.arrowUp({
        direction: t
      }))
    }), v(this, "onArrowClick", e => {
      this.arrowDown({
        direction: e
      })
    })
  }
}

function j(e) {
  let {
    isActive: t,
    arrow: n,
    className: l,
    children: i
  } = e, [a, u] = r.useState(t), c = r.useCallback(() => {
    A[n](), u(!0)
  }, [n]);
  return r.useEffect(() => {
    if (a) {
      let e = setTimeout(() => u(!1), 500);
      return () => clearTimeout(e)
    }
  }, [a]), (0, s.jsx)(C.Clickable, {
    onClick: c,
    className: o()(T.arrow, l, {
      [T.active]: t || a
    }),
    children: i
  })
}

function y(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [l, i] = r.useState(!1), a = r.useMemo(() => __OVERLAY__ ? (0, f.Zg)() : (0, E.Rv)(), []), u = (0, g.e7)([I.Z], () => I.Z.keyboardModeEnabled);
  return (0, s.jsx)(C.ModalRoot, {
    className: o()(T.noBackground, {
      [T.noShadow]: l
    }),
    size: C.ModalSize.DYNAMIC,
    "aria-label": L.Z.Messages.KEYBINDS,
    transitionState: t,
    children: (0, s.jsx)(m.W, {
      component: "div",
      children: l ? (0, s.jsx)(S.Z, {
        onClose: n
      }, "raging-demo") : (0, s.jsx)(b, {
        content: a,
        keyboardModeEnabled: u,
        activateRagingDemon: function() {
          _.Z.disable(), i(!0)
        }
      }, "modal")
    })
  })
}