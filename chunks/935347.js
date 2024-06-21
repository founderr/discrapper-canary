n(653041);
var i = n(735250),
  s = n(470079),
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
  g = n(474873),
  p = n(706454),
  N = n(215427),
  T = n(820254),
  C = n(838949),
  S = n(70956),
  A = n(358085),
  f = n(557177),
  Z = n(998502),
  v = n(981631),
  L = n(689938),
  O = n(76410);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class x extends s.PureComponent {
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
      hide: i,
      problems: s,
      opacity: l
    } = this.state, {
      connected: a,
      soundpack: r,
      reducedMotion: o
    } = this.props, u = a && n && !i && !s;
    if (e.soundpack !== r && (this._connectedSound = this.createSound()), e.connected !== a || u) {
      if (a && null != this.videoRef) {
        let e = Math.max(Math.ceil((this.videoRef.duration - this.videoRef.currentTime) * S.Z.Millis.SECOND), 600);
        clearTimeout(this._noProblemsTimeout), d.K.get(v.wli) && this._connectedSound.play(), o ? this.setState({
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
    } else t.hide !== i ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
      shouldRender: !0
    }), c.Z.timing(l, {
      toValue: i ? 0 : 1,
      duration: 200
    }).start(() => this.setState({
      shouldRender: !i
    }))) : t.problems !== s && s && h.Z.checkIncidents()
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
      return null != this._eventLoadingText && (n = this._eventLoadingText), null != t && (n = t.name, s = t.incident_updates[0].body), (0, i.jsxs)(c.Z.div, {
        className: O.container,
        style: {
          opacity: this.state.opacity
        },
        children: [(0, i.jsxs)("div", {
          className: O.content,
          children: [(0, i.jsx)(C.Z, {
            autoPlay: !0,
            loop: !e,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: this.state.ready ? O.ready : ""
          }), (0, i.jsxs)("div", {
            className: O.text,
            children: [null != t ? null : (0, i.jsx)("div", {
              className: O.tipTitle,
              children: L.Z.Messages.LOADING_DID_YOU_KNOW
            }), (0, i.jsx)("div", {
              className: null != t ? O.title : O.tip,
              children: n
            }), (0, i.jsx)("div", {
              className: O.body,
              children: s
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: a()(O.problems, {
            [O.slideIn]: this.state.problems
          }),
          children: [(0, i.jsx)("div", {
            className: O.problemsText,
            children: L.Z.Messages.CONNECTING_PROBLEMS_CTA
          }), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(E.Anchor, {
              className: O.twitterLink,
              href: v.yXt.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, i.jsx)(E.XNeutralIcon, {
                size: "xs",
                color: "currentColor",
                className: O.icon
              }), L.Z.Messages.TWEET_US]
            }), (0, i.jsxs)(E.Anchor, {
              className: O.statusLink,
              href: v.yXt.STATUS,
              target: "_blank",
              children: [(0, i.jsx)(T.Z, {
                className: O.icon
              }), L.Z.Messages.SERVER_STATUS]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), R(this, "videoRef", null), R(this, "_noProblemsTimeout", null), R(this, "_problemsTimeout", null), R(this, "_connectedSound", this.createSound()), R(this, "_loadingText", function() {
      let e = [L.Z.Messages.ACCESSIBILITY_LOADING_TIP_1, L.Z.Messages.ACCESSIBILITY_LOADING_TIP_2, L.Z.Messages.ACCESSIBILITY_LOADING_TIP_3, L.Z.Messages.ACCESSIBILITY_LOADING_TIP_4, L.Z.Messages.ACCESSIBILITY_LOADING_TIP_5, L.Z.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
        tabHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "tab",
          className: O.keybind
        }, t)
      }), L.Z.Messages.ACCESSIBILITY_LOADING_TIP_7, L.Z.Messages.ACCESSIBILITY_LOADING_TIP_8, L.Z.Messages.ACCESSIBILITY_LOADING_TIP_9, L.Z.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
        F6Hook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "f6",
          className: O.keybind
        }, t),
        tabHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "tab",
          className: O.keybind
        }, t)
      }), L.Z.Messages.LOADING_LINE_1, L.Z.Messages.LOADING_LINE_2, L.Z.Messages.LOADING_LINE_4, L.Z.Messages.LOADING_LINE_5, L.Z.Messages.LOADING_LINE_6, L.Z.Messages.LOADING_LINE_7, L.Z.Messages.LOADING_LINE_8, L.Z.Messages.LOADING_LINE_9, L.Z.Messages.LOADING_LINE_10, L.Z.Messages.LOADING_LINE_11, L.Z.Messages.LOADING_LINE_12, L.Z.Messages.LOADING_LINE_13, L.Z.Messages.LOADING_LINE_14, L.Z.Messages.LOADING_LINE_15, L.Z.Messages.LOADING_TIP_1, L.Z.Messages.LOADING_TIP_2, L.Z.Messages.LOADING_TIP_3, L.Z.Messages.LOADING_TIP_4, L.Z.Messages.LOADING_TIP_5, L.Z.Messages.LOADING_TIP_6, L.Z.Messages.LOADING_TIP_7, L.Z.Messages.LOADING_TIP_8, L.Z.Messages.LOADING_TIP_9, L.Z.Messages.LOADING_TIP_10, L.Z.Messages.LOADING_TIP_11, L.Z.Messages.LOADING_TIP_12, L.Z.Messages.LOADING_TIP_13, L.Z.Messages.LOADING_TIP_14, L.Z.Messages.LOADING_TIP_15, L.Z.Messages.LOADING_TIP_16, L.Z.Messages.LOADING_TIP_17, L.Z.Messages.LOADING_TIP_18, L.Z.Messages.LOADING_TIP_19, L.Z.Messages.LOADING_TIP_20, L.Z.Messages.LOADING_TIP_21, L.Z.Messages.LOADING_TIP_22, L.Z.Messages.LOADING_TIP_23, L.Z.Messages.LOADING_TIP_24, L.Z.Messages.LOADING_TIP_25, L.Z.Messages.LOADING_TIP_26, L.Z.Messages.LOADING_TIP_27.format({
        asterisks: "**"
      }), L.Z.Messages.LOADING_KEYBIND_TIP_1.format({
        quickSwitcherHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "mod+k",
          className: O.keybind
        }, t)
      }), L.Z.Messages.LOADING_KEYBIND_TIP_2.format({
        markUnreadHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "alt+click",
          className: O.keybind
        }, t)
      }), L.Z.Messages.LOADING_KEYBIND_TIP_3.format({
        markServerUnreadHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "shift+esc",
          className: O.keybind
        }, t)
      }), L.Z.Messages.LOADING_KEYBIND_TIP_4.format({
        navigateUnreadHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "shift+alt+up",
          className: O.keybind
        }, t),
        downHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "down",
          className: O.keybind
        }, t)
      }), L.Z.Messages.LOADING_KEYBIND_TIP_5.format({
        keyboardShortcutsHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "mod+/",
          className: O.keybind
        }, t)
      }), L.Z.Messages.LOADING_KEYBIND_TIP_6.format({
        messageNewlineHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "shift+return",
          className: O.keybind
        }, t)
      }), L.Z.Messages.LOADING_KEYBIND_TIP_7.format({
        shiftHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "shift",
          className: O.keybind
        }, t)
      }), L.Z.Messages.LOADING_KEYBIND_TIP_8.format({
        upHook: (e, t) => (0, i.jsx)(E.KeyCombo, {
          shortcut: "up",
          className: O.keybind
        }, t)
      })];
      return p.default.locale.startsWith("en-") && e.push(L.Z.Messages.POLLS_MARKETING_EASTER_EGG_LOADING_LINE), e[o().random(e.length - 1)]
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
t.Z = u.ZP.connectStores([I.Z, N.Z, g.Z, _.Z], () => ({
  isTryingToConnect: I.Z.isTryingToConnect(),
  connected: I.Z.isConnected(),
  incident: N.Z.getIncident(),
  soundpack: g.Z.getSoundpack(),
  reducedMotion: _.Z.useReducedMotion
}))(e => {
  let {
    isTryingToConnect: t,
    connected: n,
    incident: s,
    soundpack: l,
    reducedMotion: a
  } = e;
  return t ? (0, i.jsx)(x, {
    reducedMotion: a,
    soundpack: l,
    connected: n,
    incident: s
  }) : null
})