n(653041);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(392711),
  o = n.n(l),
  c = n(748780),
  d = n(442837),
  u = n(433517),
  _ = n(481060),
  E = n(205355),
  h = n(607070),
  I = n(38618),
  m = n(197344),
  p = n(474873),
  g = n(706454),
  T = n(215427),
  C = n(820254),
  f = n(838949),
  S = n(70956),
  N = n(358085),
  A = n(557177),
  Z = n(998502),
  L = n(981631),
  v = n(689938),
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
    } = this.props, t = (0, A.uk)("discodo", e);
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
      opacity: a
    } = this.state, {
      connected: r,
      soundpack: l,
      reducedMotion: o
    } = this.props, d = r && n && !i && !s;
    if (e.soundpack !== l && (this._connectedSound = this.createSound()), e.connected !== r || d) {
      if (r && null != this.videoRef) {
        let e = Math.max(Math.ceil((this.videoRef.duration - this.videoRef.currentTime) * S.Z.Millis.SECOND), 600);
        clearTimeout(this._noProblemsTimeout), u.K.get(L.wli) && this._connectedSound.play(), o ? this.setState({
          problems: !1,
          hide: r
        }) : this._noProblemsTimeout = setTimeout(() => {
          this.setState({
            problems: !1,
            hide: r
          })
        }, e)
      } else this.setState({
        problems: !1,
        hide: r
      })
    } else t.hide !== i ? (i ? this.clearProblemsTimeout() : this.setProblemsTimeout(), this.setState({
      shouldRender: !0
    }), c.Z.timing(a, {
      toValue: i ? 0 : 1,
      duration: 200
    }).start(() => this.setState({
      shouldRender: !i
    }))) : t.problems !== s && s && E.Z.checkIncidents()
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
          children: [(0, i.jsx)(f.Z, {
            autoPlay: !0,
            loop: !e,
            setRef: this.setVideoRef,
            onReady: this.handleReady,
            className: this.state.ready ? O.ready : ""
          }), (0, i.jsxs)("div", {
            className: O.text,
            children: [null != t ? null : (0, i.jsx)("div", {
              className: O.tipTitle,
              children: v.Z.Messages.LOADING_DID_YOU_KNOW
            }), (0, i.jsx)("div", {
              className: null != t ? O.title : O.tip,
              children: n
            }), (0, i.jsx)("div", {
              className: O.body,
              children: s
            })]
          })]
        }), (0, i.jsxs)("div", {
          className: r()(O.problems, {
            [O.slideIn]: this.state.problems
          }),
          children: [(0, i.jsx)("div", {
            className: O.problemsText,
            children: v.Z.Messages.CONNECTING_PROBLEMS_CTA
          }), (0, i.jsxs)("div", {
            children: [(0, i.jsxs)(_.Anchor, {
              className: O.twitterLink,
              href: L.yXt.TWITTER_SUPPORT,
              target: "_blank",
              children: [(0, i.jsx)(_.XNeutralIcon, {
                size: "xs",
                color: "currentColor",
                className: O.icon
              }), v.Z.Messages.TWEET_US]
            }), (0, i.jsxs)(_.Anchor, {
              className: O.statusLink,
              href: L.yXt.STATUS,
              target: "_blank",
              children: [(0, i.jsx)(C.Z, {
                className: O.icon
              }), v.Z.Messages.SERVER_STATUS]
            })]
          })]
        })]
      })
    }
  }
  constructor(e) {
    super(e), R(this, "videoRef", null), R(this, "_noProblemsTimeout", null), R(this, "_problemsTimeout", null), R(this, "_connectedSound", this.createSound()), R(this, "_loadingText", function() {
      let e = [v.Z.Messages.ACCESSIBILITY_LOADING_TIP_1, v.Z.Messages.ACCESSIBILITY_LOADING_TIP_2, v.Z.Messages.ACCESSIBILITY_LOADING_TIP_3, v.Z.Messages.ACCESSIBILITY_LOADING_TIP_4, v.Z.Messages.ACCESSIBILITY_LOADING_TIP_5, v.Z.Messages.ACCESSIBILITY_LOADING_TIP_6.format({
        tabHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "tab",
          className: O.keybind
        }, t)
      }), v.Z.Messages.ACCESSIBILITY_LOADING_TIP_7, v.Z.Messages.ACCESSIBILITY_LOADING_TIP_8, v.Z.Messages.ACCESSIBILITY_LOADING_TIP_9, v.Z.Messages.ACCESSIBILITY_LOADING_TIP_10.format({
        F6Hook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "f6",
          className: O.keybind
        }, t),
        tabHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "tab",
          className: O.keybind
        }, t)
      }), v.Z.Messages.LOADING_LINE_1, v.Z.Messages.LOADING_LINE_2, v.Z.Messages.LOADING_LINE_4, v.Z.Messages.LOADING_LINE_5, v.Z.Messages.LOADING_LINE_6, v.Z.Messages.LOADING_LINE_7, v.Z.Messages.LOADING_LINE_8, v.Z.Messages.LOADING_LINE_9, v.Z.Messages.LOADING_LINE_10, v.Z.Messages.LOADING_LINE_11, v.Z.Messages.LOADING_LINE_12, v.Z.Messages.LOADING_LINE_13, v.Z.Messages.LOADING_LINE_14, v.Z.Messages.LOADING_LINE_15, v.Z.Messages.LOADING_TIP_1, v.Z.Messages.LOADING_TIP_2, v.Z.Messages.LOADING_TIP_3, v.Z.Messages.LOADING_TIP_4, v.Z.Messages.LOADING_TIP_5, v.Z.Messages.LOADING_TIP_6, v.Z.Messages.LOADING_TIP_7, v.Z.Messages.LOADING_TIP_8, v.Z.Messages.LOADING_TIP_9, v.Z.Messages.LOADING_TIP_10, v.Z.Messages.LOADING_TIP_11, v.Z.Messages.LOADING_TIP_12, v.Z.Messages.LOADING_TIP_13, v.Z.Messages.LOADING_TIP_14, v.Z.Messages.LOADING_TIP_15, v.Z.Messages.LOADING_TIP_16, v.Z.Messages.LOADING_TIP_17, v.Z.Messages.LOADING_TIP_18, v.Z.Messages.LOADING_TIP_19, v.Z.Messages.LOADING_TIP_20, v.Z.Messages.LOADING_TIP_21, v.Z.Messages.LOADING_TIP_22, v.Z.Messages.LOADING_TIP_23, v.Z.Messages.LOADING_TIP_24, v.Z.Messages.LOADING_TIP_25, v.Z.Messages.LOADING_TIP_26, v.Z.Messages.LOADING_TIP_27.format({
        asterisks: "**"
      }), v.Z.Messages.LOADING_KEYBIND_TIP_1.format({
        quickSwitcherHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "mod+k",
          className: O.keybind
        }, t)
      }), v.Z.Messages.LOADING_KEYBIND_TIP_2.format({
        markUnreadHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "alt+click",
          className: O.keybind
        }, t)
      }), v.Z.Messages.LOADING_KEYBIND_TIP_3.format({
        markServerUnreadHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "shift+esc",
          className: O.keybind
        }, t)
      }), v.Z.Messages.LOADING_KEYBIND_TIP_4.format({
        navigateUnreadHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "shift+alt+up",
          className: O.keybind
        }, t),
        downHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "down",
          className: O.keybind
        }, t)
      }), v.Z.Messages.LOADING_KEYBIND_TIP_5.format({
        keyboardShortcutsHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "mod+/",
          className: O.keybind
        }, t)
      }), v.Z.Messages.LOADING_KEYBIND_TIP_6.format({
        messageNewlineHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "shift+return",
          className: O.keybind
        }, t)
      }), v.Z.Messages.LOADING_KEYBIND_TIP_7.format({
        shiftHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "shift",
          className: O.keybind
        }, t)
      }), v.Z.Messages.LOADING_KEYBIND_TIP_8.format({
        upHook: (e, t) => (0, i.jsx)(_.KeyCombo, {
          shortcut: "up",
          className: O.keybind
        }, t)
      })];
      return g.default.locale.startsWith("en-") && e.push(v.Z.Messages.POLLS_MARKETING_EASTER_EGG_LOADING_LINE), e[o().random(e.length - 1)]
    }()), R(this, "_eventLoadingText", function() {
      let e = m.Z.getLoadingTips();
      if (null != e && e.length > 0) return e[o().random(e.length - 1)]
    }()), R(this, "handleReady", () => {
      this.setState({
        ready: !0
      }), (0, N.isDesktop)() && (Z.ZP.send("UPDATED_QUOTES", ["Hold Tight — Loading Discord"]), Z.ZP.send("UPDATE_OPEN_ON_STARTUP"))
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
t.Z = d.ZP.connectStores([I.Z, T.Z, p.Z, h.Z], () => ({
  isTryingToConnect: I.Z.isTryingToConnect(),
  connected: I.Z.isConnected(),
  incident: T.Z.getIncident(),
  soundpack: p.Z.getSoundpack(),
  reducedMotion: h.Z.useReducedMotion
}))(e => {
  let {
    isTryingToConnect: t,
    connected: n,
    incident: s,
    soundpack: a,
    reducedMotion: r
  } = e;
  return t ? (0, i.jsx)(x, {
    reducedMotion: r,
    soundpack: a,
    connected: n,
    incident: s
  }) : null
})