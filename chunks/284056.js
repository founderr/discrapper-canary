s.d(t, {
  _: function() {
    return T._
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(392711),
  r = s.n(i),
  l = s(442837),
  o = s(46973),
  c = s(846519),
  E = s(481060),
  _ = s(846027),
  u = s(131951),
  d = s(19780),
  T = s(233304),
  I = s(626135),
  R = s(981631),
  A = s(689938),
  N = s(35739);

function C(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class g extends a.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), u.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: s,
      outputDeviceName: n,
      outputVolume: a,
      inputMode: i,
      vadAutoThreshold: r,
      vadThreshold: l,
      location: o,
      isDeafened: c
    } = this.props, E = !1;
    e && !c && (_.Z.toggleSelfDeaf(), E = !0), _.Z.setLoopback(!0), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: !0,
      isDetectingInput: !0,
      didDeafenUser: E
    }), I.default.track(R.rMx.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: s,
      output_device_name: n,
      output_device_volume: a,
      input_mode: i,
      input_sensitivity_is_automatic: r,
      input_sensitivity_threshold: Math.round(l),
      location: o
    })
  }
  _micTestStop() {
    let {
      didDeafenUser: e,
      isMicTesting: t
    } = this.state, {
      isVoiceConnected: s,
      isDeafened: n
    } = this.props;
    if (!t) return;
    if (s && n && e && _.Z.toggleSelfDeaf(), _.Z.setLoopback(!1), this.setState({
        isMicTesting: !1,
        didDeafenUser: !1
      }), null != this._micTestStartTime) I.default.track(R.rMx.MIC_TESTING_STOPPED, {
      testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
    })
  }
  renderCaption() {
    let {
      captionVoice: e,
      captionNoVoice: t
    } = this.props, {
      isMicTesting: s,
      isDetectingInput: a
    } = this.state;
    return (0, n.jsx)(E.FormText, {
      className: N.micTestCaption,
      type: E.FormText.Types.DESCRIPTION,
      children: s ? a ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: s,
      notchBackground: a,
      buttonTest: i,
      buttonStop: r,
      buttonClassName: l,
      buttonColor: o,
      isDeafened: c
    } = this.props, {
      isMicTesting: _,
      volume: u
    } = this.state, d = e && !_ ? A.Z.Messages.MIC_TEST_VOICE_CHANNEL_WARNING : null;
    return _ && e && !c && this._micTestStop(), (0, n.jsxs)("div", {
      className: N.container,
      children: [(0, n.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H5,
        className: N.title,
        children: t
      }), null != s && (0, n.jsx)(E.FormText, {
        type: E.FormText.Types.DESCRIPTION,
        className: N.description,
        children: s
      }), (0, n.jsxs)("div", {
        className: N.micTest,
        children: [(0, n.jsx)(E.Tooltip, {
          text: d,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, n.jsx)(E.Button, {
              grow: !1,
              onClick: this.handleToggleMicTest,
              onMouseEnter: t,
              onMouseLeave: s,
              size: E.Button.Sizes.SMALL,
              className: l,
              color: o,
              children: _ ? r : i
            })
          }
        }), (0, n.jsx)(T.Z, {
          progress: _ ? u + 100 : 0,
          notchBackground: a
        }), this.renderCaption()]
      })]
    })
  }
  constructor(...e) {
    super(...e), C(this, "_initTimeout", new c.V7), C(this, "_silenceTimeout", new c.V7), C(this, "_messageTimeout", new c.V7), C(this, "_micTestStartTime", void 0), C(this, "state", {
      volume: -100,
      isMicTesting: !1,
      isDetectingInput: !0,
      didDeafenUser: !1
    }), C(this, "setupVoiceActivity", () => {
      u.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity)
    }), C(this, "handleVoiceActivity", e => {
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
    }), C(this, "handleToggleMicTest", () => {
      this.state.isMicTesting ? this._micTestStop() : this._micTestStart()
    })
  }
}
t.Z = l.ZP.connectStores([d.Z, u.Z], () => {
  let e = u.Z.getInputDeviceId(),
    t = u.Z.getInputDevices(),
    s = r().find(t, t => {
      let {
        id: s
      } = t;
      return s === e
    }),
    n = u.Z.getOutputDeviceId(),
    a = u.Z.getOutputDevices(),
    i = r().find(a, e => {
      let {
        id: t
      } = e;
      return t === n
    }),
    l = u.Z.getModeOptions();
  return {
    isVoiceConnected: d.Z.isConnected(),
    inputVolume: u.Z.getInputVolume(),
    outputVolume: u.Z.getOutputVolume(),
    inputMode: u.Z.getMode(),
    vadThreshold: l.threshold,
    isDeafened: u.Z.isSelfDeaf(),
    vadAutoThreshold: l.autoThreshold,
    inputDeviceName: null != s ? s.name : "",
    outputDeviceName: null != i ? i.name : ""
  }
})(g)