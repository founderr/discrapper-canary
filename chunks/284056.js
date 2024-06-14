"use strict";
s.r(t), s.d(t, {
  NotchBackground: function() {
    return f.NotchBackground
  }
}), s("47120");
var n = s("735250"),
  a = s("470079"),
  l = s("392711"),
  i = s.n(l),
  r = s("442837"),
  o = s("46973"),
  u = s("846519"),
  d = s("481060"),
  c = s("846027"),
  E = s("131951"),
  _ = s("19780"),
  f = s("233304"),
  h = s("626135"),
  C = s("981631"),
  m = s("689938"),
  T = s("246963");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class A extends a.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), E.default.getMediaEngine().removeListener(o.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: s,
      outputDeviceName: n,
      outputVolume: a,
      inputMode: l,
      vadAutoThreshold: i,
      vadThreshold: r,
      location: o,
      isDeafened: u
    } = this.props, d = !1;
    e && !u && (c.default.toggleSelfDeaf(), d = !0), c.default.setLoopback(!0), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: !0,
      isDetectingInput: !0,
      didDeafenUser: d
    }), h.default.track(C.AnalyticEvents.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: s,
      output_device_name: n,
      output_device_volume: a,
      input_mode: l,
      input_sensitivity_is_automatic: i,
      input_sensitivity_threshold: Math.round(r),
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
    if (!!t) s && n && e && c.default.toggleSelfDeaf(), c.default.setLoopback(!1), this.setState({
      isMicTesting: !1,
      didDeafenUser: !1
    }), null != this._micTestStartTime && h.default.track(C.AnalyticEvents.MIC_TESTING_STOPPED, {
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
    return (0, n.jsx)(d.FormText, {
      className: T.micTestCaption,
      type: d.FormText.Types.DESCRIPTION,
      children: s ? a ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: s,
      notchBackground: a,
      buttonTest: l,
      buttonStop: i,
      buttonClassName: r,
      buttonColor: o,
      isDeafened: u
    } = this.props, {
      isMicTesting: c,
      volume: E
    } = this.state, _ = e && !c ? m.default.Messages.MIC_TEST_VOICE_CHANNEL_WARNING : null;
    return c && e && !u && this._micTestStop(), (0, n.jsxs)("div", {
      className: T.container,
      children: [(0, n.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        className: T.title,
        children: t
      }), null != s && (0, n.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        className: T.description,
        children: s
      }), (0, n.jsxs)("div", {
        className: T.micTest,
        children: [(0, n.jsx)(d.Tooltip, {
          text: _,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, n.jsx)(d.Button, {
              grow: !1,
              onClick: this.handleToggleMicTest,
              onMouseEnter: t,
              onMouseLeave: s,
              size: d.Button.Sizes.SMALL,
              className: r,
              color: o,
              children: c ? i : l
            })
          }
        }), (0, n.jsx)(f.default, {
          progress: c ? E + 100 : 0,
          notchBackground: a
        }), this.renderCaption()]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "_initTimeout", new u.Timeout), g(this, "_silenceTimeout", new u.Timeout), g(this, "_messageTimeout", new u.Timeout), g(this, "_micTestStartTime", void 0), g(this, "state", {
      volume: -100,
      isMicTesting: !1,
      isDetectingInput: !0,
      didDeafenUser: !1
    }), g(this, "setupVoiceActivity", () => {
      E.default.getMediaEngine().on(o.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
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
t.default = r.default.connectStores([_.default, E.default], () => {
  let e = E.default.getInputDeviceId(),
    t = E.default.getInputDevices(),
    s = i().find(t, t => {
      let {
        id: s
      } = t;
      return s === e
    }),
    n = E.default.getOutputDeviceId(),
    a = E.default.getOutputDevices(),
    l = i().find(a, e => {
      let {
        id: t
      } = e;
      return t === n
    }),
    r = E.default.getModeOptions();
  return {
    isVoiceConnected: _.default.isConnected(),
    inputVolume: E.default.getInputVolume(),
    outputVolume: E.default.getOutputVolume(),
    inputMode: E.default.getMode(),
    vadThreshold: r.threshold,
    isDeafened: E.default.isSelfDeaf(),
    vadAutoThreshold: r.autoThreshold,
    inputDeviceName: null != s ? s.name : "",
    outputDeviceName: null != l ? l.name : ""
  }
})(A)