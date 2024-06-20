n.d(t, {
  _: function() {
    return h._
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(392711),
  l = n.n(i),
  r = n(442837),
  c = n(46973),
  o = n(846519),
  d = n(481060),
  u = n(846027),
  E = n(131951),
  _ = n(19780),
  h = n(233304),
  T = n(626135),
  I = n(981631),
  C = n(689938),
  N = n(35739);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class A extends a.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), E.Z.getMediaEngine().removeListener(c.aB.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: n,
      outputDeviceName: s,
      outputVolume: a,
      inputMode: i,
      vadAutoThreshold: l,
      vadThreshold: r,
      location: c,
      isDeafened: o
    } = this.props, d = !1;
    e && !o && (u.Z.toggleSelfDeaf(), d = !0), u.Z.setLoopback(!0), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: !0,
      isDetectingInput: !0,
      didDeafenUser: d
    }), T.default.track(I.rMx.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: n,
      output_device_name: s,
      output_device_volume: a,
      input_mode: i,
      input_sensitivity_is_automatic: l,
      input_sensitivity_threshold: Math.round(r),
      location: c
    })
  }
  _micTestStop() {
    let {
      didDeafenUser: e,
      isMicTesting: t
    } = this.state, {
      isVoiceConnected: n,
      isDeafened: s
    } = this.props;
    if (!t) return;
    if (n && s && e && u.Z.toggleSelfDeaf(), u.Z.setLoopback(!1), this.setState({
        isMicTesting: !1,
        didDeafenUser: !1
      }), null != this._micTestStartTime) T.default.track(I.rMx.MIC_TESTING_STOPPED, {
      testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
    })
  }
  renderCaption() {
    let {
      captionVoice: e,
      captionNoVoice: t
    } = this.props, {
      isMicTesting: n,
      isDetectingInput: a
    } = this.state;
    return (0, s.jsx)(d.FormText, {
      className: N.micTestCaption,
      type: d.FormText.Types.DESCRIPTION,
      children: n ? a ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: n,
      notchBackground: a,
      buttonTest: i,
      buttonStop: l,
      buttonClassName: r,
      buttonColor: c,
      isDeafened: o
    } = this.props, {
      isMicTesting: u,
      volume: E
    } = this.state, _ = e && !u ? C.Z.Messages.MIC_TEST_VOICE_CHANNEL_WARNING : null;
    return u && e && !o && this._micTestStop(), (0, s.jsxs)("div", {
      className: N.container,
      children: [(0, s.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        className: N.title,
        children: t
      }), null != n && (0, s.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        className: N.description,
        children: n
      }), (0, s.jsxs)("div", {
        className: N.micTest,
        children: [(0, s.jsx)(d.Tooltip, {
          text: _,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: n
            } = e;
            return (0, s.jsx)(d.Button, {
              grow: !1,
              onClick: this.handleToggleMicTest,
              onMouseEnter: t,
              onMouseLeave: n,
              size: d.Button.Sizes.SMALL,
              className: r,
              color: c,
              children: u ? l : i
            })
          }
        }), (0, s.jsx)(h.Z, {
          progress: u ? E + 100 : 0,
          notchBackground: a
        }), this.renderCaption()]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "_initTimeout", new o.V7), g(this, "_silenceTimeout", new o.V7), g(this, "_messageTimeout", new o.V7), g(this, "_micTestStartTime", void 0), g(this, "state", {
      volume: -100,
      isMicTesting: !1,
      isDetectingInput: !0,
      didDeafenUser: !1
    }), g(this, "setupVoiceActivity", () => {
      E.Z.getMediaEngine().on(c.aB.VoiceActivity, this.handleVoiceActivity)
    }), g(this, "handleVoiceActivity", e => {
      let {
        isMicTesting: t
      } = this.state;
      if (t && e <= -100) {
        !this._silenceTimeout.isStarted() && this._silenceTimeout.start(2e3, () => {
          this.setState({
            isDetectingInput: !1
          })
        }), this.setState({
          volume: -100
        });
        return
      }
      this._silenceTimeout.stop(), this.setState({
        volume: e,
        isDetectingInput: !0
      })
    }), g(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}
t.Z = r.ZP.connectStores([_.Z, E.Z], () => {
  let e = E.Z.getInputDeviceId(),
    t = E.Z.getInputDevices(),
    n = l().find(t, t => {
      let {
        id: n
      } = t;
      return n === e
    }),
    s = E.Z.getOutputDeviceId(),
    a = E.Z.getOutputDevices(),
    i = l().find(a, e => {
      let {
        id: t
      } = e;
      return t === s
    }),
    r = E.Z.getModeOptions();
  return {
    isVoiceConnected: _.Z.isConnected(),
    inputVolume: E.Z.getInputVolume(),
    outputVolume: E.Z.getOutputVolume(),
    inputMode: E.Z.getMode(),
    vadThreshold: r.threshold,
    isDeafened: E.Z.isSelfDeaf(),
    vadAutoThreshold: r.autoThreshold,
    inputDeviceName: null != n ? n.name : "",
    outputDeviceName: null != i ? i.name : ""
  }
})(A)