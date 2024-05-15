"use strict";
n.r(t), n("653041");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n.n(r),
  u = n("748780"),
  d = n("442837"),
  c = n("433517"),
  f = n("481060"),
  E = n("205355"),
  h = n("607070"),
  _ = n("38618"),
  C = n("197344"),
  m = n("474873"),
  p = n("706454"),
  S = n("215427"),
  g = n("820254"),
  I = n("985806"),
  T = n("838949"),
  A = n("70956"),
  N = n("358085"),
  v = n("557177"),
  R = n("998502"),
  O = n("981631"),
  L = n("689938"),
  y = n("376244");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class P extends s.PureComponent {
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
      ready: n,
      hide: a,
      problems: s,
      opacity: l
    } = this.state, {
      connected: i,
      soundpack: r,
      reducedMotion: o
    } = this.props, d = i && n && !a && !s;
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
    } else t.hide !== a ? (a ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
      shouldRender: !0
    }), u.default.timing(l, {
      toValue: a ? 0 : 1,
      duration: 200
    }).start(() => this.setState({
      shouldRender: !a
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
      let n = this._loadingText,
        s = null;
      return null != this._eventLoadingText && (n = this._eventLoadingText), null != t && (n = t.name, s = t.incident_updates[0].body), (0, a.jsxs)(u.default.div, {
        className: y.container,
        style: {
          opacity: this.state.opacity
        },
        children: [(0, a.jsxs)("div", {
          className: y.content,
          children: [(0, a.jsx)(T.default, {
            autoPlay: !0,
            loop: !e,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: this.state.ready ? y.ready : ""
          }), (0, a.jsxs)("div", {
            className: y.text,
            children: [null != t ? null : (0, a.jsx)("div", {
              className: y.tipTitle,
              children: L.default.Messages.LOADING_DID_YOU_KNOW
            }), (0, a.jsx)("div", {
              className: null != t ? y.title : y.tip,
              children: n
            }), (0, a.jsx)("div", {
              className: y.body,
              children: s
            })]
          })]
        }), (0, a.jsxs)("div", {
          className: i()(y.problems, {
            [y.slideIn]: this.state.problems
          }),
          children: [(0, a.jsx)("div", {
            className: y.problemsText,
            children: L.default.Messages.CONNECTING_PROBLEMS_CTA
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(f.Anchor, {
              className: y.twitterLink,
              href: O.Links.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, a.jsx)(I.default, {
                className: y.icon
              }), L.default.Messages.TWEET_US]
            }), (0, a.jsxs)(f.Anchor, {
              className: y.statusLink,
              href: O.Links.STATUS,
              target: "_blank",
              children: [(0, a.jsx)(g.default, {
                className: y.icon
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
        tabHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "tab",
          className: y.keybind
        }, t)
      }), L.default.Messages.ACCESSIBILITY_LOADING_TIP_7, L.default.Messages.ACCESSIBILITY_LOADING_TIP_8, L.default.Messages.ACCESSIBILITY_LOADING_TIP_9, L.default.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
        F6Hook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "f6",
          className: y.keybind
        }, t),
        tabHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "tab",
          className: y.keybind
        }, t)
      }), L.default.Messages.LOADING_LINE_1, L.default.Messages.LOADING_LINE_2, L.default.Messages.LOADING_LINE_4, L.default.Messages.LOADING_LINE_5, L.default.Messages.LOADING_LINE_6, L.default.Messages.LOADING_LINE_7, L.default.Messages.LOADING_LINE_8, L.default.Messages.LOADING_LINE_9, L.default.Messages.LOADING_LINE_10, L.default.Messages.LOADING_LINE_11, L.default.Messages.LOADING_LINE_12, L.default.Messages.LOADING_LINE_13, L.default.Messages.LOADING_LINE_14, L.default.Messages.LOADING_LINE_15, L.default.Messages.LOADING_TIP_1, L.default.Messages.LOADING_TIP_2, L.default.Messages.LOADING_TIP_3, L.default.Messages.LOADING_TIP_4, L.default.Messages.LOADING_TIP_5, L.default.Messages.LOADING_TIP_6, L.default.Messages.LOADING_TIP_7, L.default.Messages.LOADING_TIP_8, L.default.Messages.LOADING_TIP_9, L.default.Messages.LOADING_TIP_10, L.default.Messages.LOADING_TIP_11, L.default.Messages.LOADING_TIP_12, L.default.Messages.LOADING_TIP_13, L.default.Messages.LOADING_TIP_14, L.default.Messages.LOADING_TIP_15, L.default.Messages.LOADING_TIP_16, L.default.Messages.LOADING_TIP_17, L.default.Messages.LOADING_TIP_18, L.default.Messages.LOADING_TIP_19, L.default.Messages.LOADING_TIP_20, L.default.Messages.LOADING_TIP_21, L.default.Messages.LOADING_TIP_22, L.default.Messages.LOADING_TIP_23, L.default.Messages.LOADING_TIP_24, L.default.Messages.LOADING_TIP_25, L.default.Messages.LOADING_TIP_26, L.default.Messages.LOADING_TIP_27.format({
        asterisks: "**"
      }), L.default.Messages.LOADING_KEYBIND_TIP_1.format({
        quickSwitcherHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "mod+k",
          className: y.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_2.format({
        markUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "alt+click",
          className: y.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_3.format({
        markServerUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+esc",
          className: y.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_4.format({
        navigateUnreadHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+alt+up",
          className: y.keybind
        }, t),
        downHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "down",
          className: y.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_5.format({
        keyboardShortcutsHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "mod+/",
          className: y.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_6.format({
        messageNewlineHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift+return",
          className: y.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_7.format({
        shiftHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "shift",
          className: y.keybind
        }, t)
      }), L.default.Messages.LOADING_KEYBIND_TIP_8.format({
        upHook: (e, t) => (0, a.jsx)(f.KeyCombo, {
          shortcut: "up",
          className: y.keybind
        }, t)
      })];
      return p.default.locale.startsWith("en-") && e.push(L.default.Messages.POLLS_MARKETING_EASTER_EGG_LOADING_LINE), e[o().random(e.length - 1)]
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
t.default = d.default.connectStores([_.default, S.default, m.default, h.default], () => ({
  isTryingToConnect: _.default.isTryingToConnect(),
  connected: _.default.isConnected(),
  incident: S.default.getIncident(),
  soundpack: m.default.getSoundpack(),
  reducedMotion: h.default.useReducedMotion
}))(e => {
  let {
    isTryingToConnect: t,
    connected: n,
    incident: s,
    soundpack: l,
    reducedMotion: i
  } = e;
  return t ? (0, a.jsx)(P, {
    reducedMotion: i,
    soundpack: l,
    connected: n,
    incident: s
  }) : null
})