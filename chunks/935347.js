"use strict";
a.r(t), a("653041");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("392711"),
  o = a.n(r),
  u = a("748780"),
  d = a("442837"),
  c = a("433517"),
  f = a("481060"),
  E = a("205355"),
  h = a("607070"),
  _ = a("38618"),
  C = a("197344"),
  m = a("474873"),
  S = a("706454"),
  I = a("215427"),
  p = a("820254"),
  T = a("985806"),
  g = a("838949"),
  A = a("70956"),
  N = a("358085"),
  v = a("557177"),
  R = a("998502"),
  O = a("981631"),
  L = a("689938"),
  P = a("82863");

function M(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class x extends s.PureComponent {
  createSound() {
    let {
      soundpack: e
    } = this.props, t = (0, v.createSoundForPack)("discodo", e);
    return t.volume = 1, t
  }
  componentDidMount() {
    this.setProblemsTimeout()
  }
  componentDidUpdate(e, t) {
    let {
      ready: a,
      hide: n,
      problems: s,
      opacity: l
    } = this.state, {
      connected: i,
      soundpack: r,
      reducedMotion: o
    } = this.props, d = i && a && !n && !s;
    if (e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== i || d) {
      if (i && null != this.videoRef) {
        let e = Math.max(Math.ceil((this.videoRef.duration - this.videoRef.currentTime) * A.default.Millis.SECOND), 600);
        clearTimeout(this._noProblemsTimeout), c.Storage.get(O.DISCODO_STORAGE_KEY) && this._connectedSound.play(), o ? this.setState({
          problems: !1,
          hide: i
        }) : this._noProblemsTimeout = setTimeout(() => {
          this.setState({
            problems: !1,
            hide: i
          })
        }, e)
      } else this.setState({
        problems: !1,
        hide: i
      })
    } else t.hide !== n ? (n ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
      shouldRender: !0
    }), u.default.timing(l, {
      toValue: n ? 0 : 1,
      duration: 200
    }).start(() => this.setState({
      shouldRender: !n
    }))) : t.problems !== s && s && E.default.checkIncidents()
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
      let a = this._loadingText,
        s = null;
      return null != this._eventLoadingText && (a = this._eventLoadingText), null != t && (a = t.name, s = t.incident_updates[0].body), (0, n.jsxs)(u.default.div, {
        className: P.container,
        style: {
          opacity: this.state.opacity
        },
        children: [(0, n.jsxs)("div", {
          className: P.content,
          children: [(0, n.jsx)(g.default, {
            autoPlay: !0,
            loop: !e,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: this.state.ready ? P.ready : ""
          }), (0, n.jsxs)("div", {
            className: P.text,
            children: [null != t ? null : (0, n.jsx)("div", {
              className: P.tipTitle,
              children: L.default.Messages.LOADING_DID_YOU_KNOW
            }), (0, n.jsx)("div", {
              className: null != t ? P.title : P.tip,
              children: a
            }), (0, n.jsx)("div", {
              className: P.body,
              children: s
            })]
          })]
        }), (0, n.jsxs)("div", {
          className: i()(P.problems, {
            [P.slideIn]: this.state.problems
          }),
          children: [(0, n.jsx)("div", {
            className: P.problemsText,
            children: L.default.Messages.CONNECTING_PROBLEMS_CTA
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsxs)(f.Anchor, {
              className: P.twitterLink,
              href: O.Links.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, n.jsx)(T.default, {
                className: P.icon
              }), L.default.Messages.TWEET_US]
            }), (0, n.jsxs)(f.Anchor, {
              className: P.statusLink,
              href: O.Links.STATUS,
              target: "_blank",
              children: [(0, n.jsx)(p.default, {
                className: P.icon
              }), L.default.Messages.SERVER_STATUS]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), M(this, "videoRef", null), M(this, "_noProblemsTimeout", null), M(this, "_problemsTimeout", null), M(this, "_connectedSound", this.createSound()), M(this, "_loadingText", function() {
      let e = [L.default.Messages.ACCESSIBILITY_LOADING_TIP_1, L.default.Messages.ACCESSIBILITY_LOADING_TIP_2, L.default.Messages.ACCESSIBILITY_LOADING_TIP_3, L.default.Messages.ACCESSIBILITY_LOADING_TIP_4, L.default.Messages.ACCESSIBILITY_LOADING_TIP_5, L.default.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
        tabHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "tab",
          className: P.keybind
        }, t)
      }), L.default.Messages.ACCESSIBILITY_LOADING_TIP_7, L.default.Messages.ACCESSIBILITY_LOADING_TIP_8, L.default.Messages.ACCESSIBILITY_LOADING_TIP_9, L.default.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
        F6Hook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "f6",
          className: P.keybind
        }, t),
        tabHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "tab",
          className: P.keybind
        }, t)
      }), L.default.Messages.LOADING_LINE_1, L.default.Messages.LOADING_LINE_2, L.default.Messages.LOADING_LINE_4, L.default.Messages.LOADING_LINE_5, L.default.Messages.LOADING_LINE_6, L.default.Messages.LOADING_LINE_7, L.default.Messages.LOADING_LINE_8, L.default.Messages.LOADING_LINE_9, L.default.Messages.LOADING_LINE_10, L.default.Messages.LOADING_LINE_11, L.default.Messages.LOADING_LINE_12, L.default.Messages.LOADING_LINE_13, L.default.Messages.LOADING_LINE_14, L.default.Messages.LOADING_LINE_15, L.default.Messages.LOADING_TIP_1, L.default.Messages.LOADING_TIP_2, L.default.Messages.LOADING_TIP_3, L.default.Messages.LOADING_TIP_4, L.default.Messages.LOADING_TIP_5, L.default.Messages.LOADING_TIP_6, L.default.Messages.LOADING_TIP_7, L.default.Messages.LOADING_TIP_8, L.default.Messages.LOADING_TIP_9, L.default.Messages.LOADING_TIP_10, L.default.Messages.LOADING_TIP_11, L.default.Messages.LOADING_TIP_12, L.default.Messages.LOADING_TIP_13, L.default.Messages.LOADING_TIP_14, L.default.Messages.LOADING_TIP_15, L.default.Messages.LOADING_TIP_16, L.default.Messages.LOADING_TIP_17, L.default.Messages.LOADING_TIP_18, L.default.Messages.LOADING_TIP_19, L.default.Messages.LOADING_TIP_20, L.default.Messages.LOADING_TIP_21, L.default.Messages.LOADING_TIP_22, L.default.Messages.LOADING_TIP_23, L.default.Messages.LOADING_TIP_24, L.default.Messages.LOADING_TIP_25, L.default.Messages.LOADING_TIP_26, L.default.Messages.LOADING_TIP_27.format({
        asterisks: "**"
      }), L.default.Messages.LOADING_KEYBIND_TIP_1.format({
        quickSwitcherHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "mod+k",
          className: P.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_2.format({
        markUnreadHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "alt+click",
          className: P.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_3.format({
        markServerUnreadHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "shift+esc",
          className: P.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_4.format({
        navigateUnreadHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "shift+alt+up",
          className: P.keybind
        }, t),
        downHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "down",
          className: P.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_5.format({
        keyboardShortcutsHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "mod+/",
          className: P.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_6.format({
        messageNewlineHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "shift+return",
          className: P.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_7.format({
        shiftHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "shift",
          className: P.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_8.format({
        upHook: (e, t) => (0, n.jsx)(f.KeyCombo, {
          shortcut: "up",
          className: P.keybind
        }, t)
      })];
      return S.default.locale.startsWith("en-") && e.push(L.default.Messages.POLLS_MARKETING_EASTER_EGG_LOADING_LINE), e[o().random(e.length - 1)]
    }()), M(this, "_eventLoadingText", function() {
      let e = C.default.getLoadingTips();
      if (null != e && e.length > 0) return e[o().random(e.length - 1)]
    }()), M(this, "handleReady", () => {
      this.setState({
        ready: !0
      }), (0, N.isDesktop)() && (R.default.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), R.default.send("UPDATE_OPEN_ON_STARTUP"))
    }), M(this, "setVideoRef", e => {
      this.videoRef = e
    }), M(this, "setProblemsTimeout", () => {
      null == this._problemsTimeout && (this._problemsTimeout = setTimeout(() => this.setState({
        problems: !0
      }), 1e4))
    }), M(this, "clearProblemsTimeout", () => {
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
      opacity: new u.default.Value(t ? 0 : 1)
    }, this._connectedSound.volume = 1
  }
}
t.default = d.default.connectStores([_.default, I.default, m.default, h.default], () => ({
  isTryingToConnect: _.default.isTryingToConnect(),
  connected: _.default.isConnected(),
  incident: I.default.getIncident(),
  soundpack: m.default.getSoundpack(),
  reducedMotion: h.default.useReducedMotion
}))(e => {
  let {
    isTryingToConnect: t,
    connected: a,
    incident: s,
    soundpack: l,
    reducedMotion: i
  } = e;
  return t ? (0, n.jsx)(x, {
    reducedMotion: i,
    soundpack: l,
    connected: a,
    incident: s
  }) : null
})