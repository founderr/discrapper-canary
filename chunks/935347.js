n(653041);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(392711),
  o = n.n(r),
  c = n(748780),
  u = n(442837),
  d = n(433517),
  E = n(481060),
  h = n(205355),
  _ = n(607070),
  I = n(38618),
  m = n(197344),
  T = n(474873),
  g = n(706454),
  p = n(215427),
  N = n(820254),
  S = n(838949),
  C = n(70956),
  A = n(358085),
  f = n(557177),
  Z = n(998502),
  L = n(981631),
  O = n(689938),
  v = n(76410);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class P extends i.PureComponent {
  createSound() {
    let {
      soundpack: e
    } = this.props, t = (0, f.uk)("discodo", e);
    return t.volume = 1, t
  }
  componentDidMount() {
    this.setProblemsTimeout()
  }
  componentDidUpdate(e, t) {
    let {
      ready: n,
      hide: s,
      problems: i,
      opacity: l
    } = this.state, {
      connected: a,
      soundpack: r,
      reducedMotion: o
    } = this.props, u = a && n && !s && !i;
    if (e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== a || u) {
      if (a && null != this.videoRef) {
        let e = Math.max(Math.ceil((this.videoRef.duration - this.videoRef.currentTime) * C.Z.Millis.SECOND), 600);
        clearTimeout(this._noProblemsTimeout), d.K.get(L.wli) && this._connectedSound.play(), o ? this.setState({
          problems: !1,
          hide: a
        }) : this._noProblemsTimeout = setTimeout(() => {
          this.setState({
            problems: !1,
            hide: a
          })
        }, e)
      } else this.setState({
        problems: !1,
        hide: a
      })
    } else t.hide !== s ? (s ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
      shouldRender: !0
    }), c.Z.timing(l, {
      toValue: s ? 0 : 1,
      duration: 200
    }).start(() => this.setState({
      shouldRender: !s
    }))) : t.problems !== i && i && h.Z.checkIncidents()
  }
  componentWillUnmount() {
    this.clearProblemsTimeout(), clearTimeout(this._noProblemsTimeout)
  }
  render() {
    let {
      connected: e,
      incident: t
    } = this.props;
    if (!this.state.shouldRender) return null;
    {
      let n = this._loadingText,
        i = null;
      return null != this._eventLoadingText && (n = this._eventLoadingText), null != t && (n = t.name, i = t.incident_updates[0].body), (0, s.jsxs)(c.Z.div, {
        className: v.container,
        style: {
          opacity: this.state.opacity
        },
        children: [(0, s.jsxs)("div", {
          className: v.content,
          children: [(0, s.jsx)(S.Z, {
            autoPlay: !0,
            loop: !e,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: this.state.ready ? v.ready : ""
          }), (0, s.jsxs)("div", {
            className: v.text,
            children: [null != t ? null : (0, s.jsx)("div", {
              className: v.tipTitle,
              children: O.Z.Messages.LOADING_DID_YOU_KNOW
            }), (0, s.jsx)("div", {
              className: null != t ? v.title : v.tip,
              children: n
            }), (0, s.jsx)("div", {
              className: v.body,
              children: i
            })]
          })]
        }), (0, s.jsxs)("div", {
          className: a()(v.problems, {
            [v.slideIn]: this.state.problems
          }),
          children: [(0, s.jsx)("div", {
            className: v.problemsText,
            children: O.Z.Messages.CONNECTING_PROBLEMS_CTA
          }), (0, s.jsxs)("div", {
            children: [(0, s.jsxs)(E.Anchor, {
              className: v.twitterLink,
              href: L.yXt.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, s.jsx)(E.XNeutralIcon, {
                size: "xs",
                color: "currentColor",
                className: v.icon
              }), O.Z.Messages.TWEET_US]
            }), (0, s.jsxs)(E.Anchor, {
              className: v.statusLink,
              href: L.yXt.STATUS,
              target: "_blank",
              children: [(0, s.jsx)(N.Z, {
                className: v.icon
              }), O.Z.Messages.SERVER_STATUS]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), R(this, "videoRef", null), R(this, "_noProblemsTimeout", null), R(this, "_problemsTimeout", null), R(this, "_connectedSound", this.createSound()), R(this, "_loadingText", function() {
      let e = [O.Z.Messages.ACCESSIBILITY_LOADING_TIP_1, O.Z.Messages.ACCESSIBILITY_LOADING_TIP_2, O.Z.Messages.ACCESSIBILITY_LOADING_TIP_3, O.Z.Messages.ACCESSIBILITY_LOADING_TIP_4, O.Z.Messages.ACCESSIBILITY_LOADING_TIP_5, O.Z.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
        tabHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "tab",
          className: v.keybind
        }, t)
      }), O.Z.Messages.ACCESSIBILITY_LOADING_TIP_7, O.Z.Messages.ACCESSIBILITY_LOADING_TIP_8, O.Z.Messages.ACCESSIBILITY_LOADING_TIP_9, O.Z.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
        F6Hook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "f6",
          className: v.keybind
        }, t),
        tabHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "tab",
          className: v.keybind
        }, t)
      }), O.Z.Messages.LOADING_LINE_1, O.Z.Messages.LOADING_LINE_2, O.Z.Messages.LOADING_LINE_4, O.Z.Messages.LOADING_LINE_5, O.Z.Messages.LOADING_LINE_6, O.Z.Messages.LOADING_LINE_7, O.Z.Messages.LOADING_LINE_8, O.Z.Messages.LOADING_LINE_9, O.Z.Messages.LOADING_LINE_10, O.Z.Messages.LOADING_LINE_11, O.Z.Messages.LOADING_LINE_12, O.Z.Messages.LOADING_LINE_13, O.Z.Messages.LOADING_LINE_14, O.Z.Messages.LOADING_LINE_15, O.Z.Messages.LOADING_TIP_1, O.Z.Messages.LOADING_TIP_2, O.Z.Messages.LOADING_TIP_3, O.Z.Messages.LOADING_TIP_4, O.Z.Messages.LOADING_TIP_5, O.Z.Messages.LOADING_TIP_6, O.Z.Messages.LOADING_TIP_7, O.Z.Messages.LOADING_TIP_8, O.Z.Messages.LOADING_TIP_9, O.Z.Messages.LOADING_TIP_10, O.Z.Messages.LOADING_TIP_11, O.Z.Messages.LOADING_TIP_12, O.Z.Messages.LOADING_TIP_13, O.Z.Messages.LOADING_TIP_14, O.Z.Messages.LOADING_TIP_15, O.Z.Messages.LOADING_TIP_16, O.Z.Messages.LOADING_TIP_17, O.Z.Messages.LOADING_TIP_18, O.Z.Messages.LOADING_TIP_19, O.Z.Messages.LOADING_TIP_20, O.Z.Messages.LOADING_TIP_21, O.Z.Messages.LOADING_TIP_22, O.Z.Messages.LOADING_TIP_23, O.Z.Messages.LOADING_TIP_24, O.Z.Messages.LOADING_TIP_25, O.Z.Messages.LOADING_TIP_26, O.Z.Messages.LOADING_TIP_27.format({
        asterisks: "**"
      }), O.Z.Messages.LOADING_KEYBIND_TIP_1.format({
        quickSwitcherHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "mod+k",
          className: v.keybind
        }, t)
      }), O.Z.Messages.LOADING_KEYBIND_TIP_2.format({
        markUnreadHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "alt+click",
          className: v.keybind
        }, t)
      }), O.Z.Messages.LOADING_KEYBIND_TIP_3.format({
        markServerUnreadHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "shift+esc",
          className: v.keybind
        }, t)
      }), O.Z.Messages.LOADING_KEYBIND_TIP_4.format({
        navigateUnreadHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "shift+alt+up",
          className: v.keybind
        }, t),
        downHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "down",
          className: v.keybind
        }, t)
      }), O.Z.Messages.LOADING_KEYBIND_TIP_5.format({
        keyboardShortcutsHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "mod+/",
          className: v.keybind
        }, t)
      }), O.Z.Messages.LOADING_KEYBIND_TIP_6.format({
        messageNewlineHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "shift+return",
          className: v.keybind
        }, t)
      }), O.Z.Messages.LOADING_KEYBIND_TIP_7.format({
        shiftHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "shift",
          className: v.keybind
        }, t)
      }), O.Z.Messages.LOADING_KEYBIND_TIP_8.format({
        upHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
          shortcut: "up",
          className: v.keybind
        }, t)
      })];
      return g.default.locale.startsWith("en-") && e.push(O.Z.Messages.POLLS_MARKETING_EASTER_EGG_LOADING_LINE), e[o().random(e.length - 1)]
    }()), R(this, "_eventLoadingText", function() {
      let e = m.Z.getLoadingTips();
      if (null != e && e.length > 0) return e[o().random(e.length - 1)]
    }()), R(this, "handleReady", () => {
      this.setState({
        ready: !0
      }), (0, A.isDesktop)() && (Z.ZP.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), Z.ZP.send("UPDATE_OPEN_ON_STARTUP"))
    }), R(this, "setVideoRef", e => {
      this.videoRef = e
    }), R(this, "setProblemsTimeout", () => {
      null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
        problems: !0
      }), 1e4))
    }), R(this, "clearProblemsTimeout", () => {
      clearTimeout(this._problemsTimeout), this._problemsTimeout = null
    });
    let {
      connected: t
    } = e;
    this.state = {
      ready: t,
      hide: t,
      problems: !1,
      shouldRender: !t,
      opacity: new c.Z.Value(t ? 0 : 1)
    }, this._connectedSound.volume = 1
  }
}
t.Z = u.ZP.connectStores([I.Z, p.Z, T.Z, _.Z], () => ({
  isTryingToConnect: I.Z.isTryingToConnect(),
  connected: I.Z.isConnected(),
  incident: p.Z.getIncident(),
  soundpack: T.Z.getSoundpack(),
  reducedMotion: _.Z.useReducedMotion
}))(e => {
  let {
    isTryingToConnect: t,
    connected: n,
    incident: i,
    soundpack: l,
    reducedMotion: a
  } = e;
  return t ? (0, s.jsx)(P, {
    reducedMotion: a,
    soundpack: l,
    connected: n,
    incident: i
  }) : null
})