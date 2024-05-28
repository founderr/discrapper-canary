"use strict";
s.r(t), s.d(t, {
  NotchBackground: function() {
    return f.NotchBackground
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("392711"),
  i = s.n(l),
  r = s("442837"),
  u = s("46973"),
  o = s("846519"),
  d = s("481060"),
  c = s("846027"),
  E = s("131951"),
  _ = s("19780"),
  f = s("233304"),
  h = s("626135"),
  m = s("981631"),
  T = s("689938"),
  C = s("246963");

function g(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class A extends n.PureComponent {
  componentDidMount() {
    this._initTimeout.start(1e3, this.setupVoiceActivity)
  }
  componentWillUnmount() {
    this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), E.default.getMediaEngine().removeListener(u.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
  }
  _micTestStart() {
    let {
      isVoiceConnected: e,
      inputDeviceName: t,
      inputVolume: s,
      outputDeviceName: a,
      outputVolume: n,
      inputMode: l,
      vadAutoThreshold: i,
      vadThreshold: r,
      location: u,
      isDeafened: o
    } = this.props, d = !1;
    e && !o && (c.default.toggleSelfDeaf(), d = !0), c.default.setLoopback(!0), this._micTestStartTime = Date.now(), this.setState({
      isMicTesting: !0,
      isDetectingInput: !0,
      didDeafenUser: d
    }), h.default.track(m.AnalyticEvents.MIC_TESTING_STARTED, {
      input_device_name: t,
      input_device_volume: s,
      output_device_name: a,
      output_device_volume: n,
      input_mode: l,
      input_sensitivity_is_automatic: i,
      input_sensitivity_threshold: Math.round(r),
      location: u
    })
  }
  _micTestStop() {
    let {
      didDeafenUser: e,
      isMicTesting: t
    } = this.state, {
      isVoiceConnected: s,
      isDeafened: a
    } = this.props;
    if (!!t) s && a && e && c.default.toggleSelfDeaf(), c.default.setLoopback(!1), this.setState({
      isMicTesting: !1,
      didDeafenUser: !1
    }), null != this._micTestStartTime && h.default.track(m.AnalyticEvents.MIC_TESTING_STOPPED, {
      testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1e3)
    })
  }
  renderCaption() {
    let {
      captionVoice: e,
      captionNoVoice: t
    } = this.props, {
      isMicTesting: s,
      isDetectingInput: n
    } = this.state;
    return (0, a.jsx)(d.FormText, {
      className: C.micTestCaption,
      type: d.FormText.Types.DESCRIPTION,
      children: s ? n ? e : t : null
    })
  }
  render() {
    let {
      isVoiceConnected: e,
      title: t,
      description: s,
      notchBackground: n,
      buttonTest: l,
      buttonStop: i,
      buttonClassName: r,
      buttonColor: u,
      isDeafened: o
    } = this.props, {
      isMicTesting: c,
      volume: E
    } = this.state, _ = e && !c ? T.default.Messages.MIC_TEST_VOICE_CHANNEL_WARNING : null;
    return c && e && !o && this._micTestStop(), (0, a.jsxs)("div", {
      className: C.container,
      children: [(0, a.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H5,
        className: C.title,
        children: t
      }), null != s && (0, a.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        className: C.description,
        children: s
      }), (0, a.jsxs)("div", {
        className: C.micTest,
        children: [(0, a.jsx)(d.Tooltip, {
          text: _,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, a.jsx)(d.Button, {
              grow: !1,
              onClick: this.handleToggleMicTest,
              onMouseEnter: t,
              onMouseLeave: s,
              size: d.Button.Sizes.SMALL,
              className: r,
              color: u,
              children: c ? i : l
            })
          }
        }), (0, a.jsx)(f.default, {
          progress: c ? E + 100 : 0,
          notchBackground: n
        }), this.renderCaption()]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "_initTimeout", new o.Timeout), g(this, "_silenceTimeout", new o.Timeout), g(this, "_messageTimeout", new o.Timeout), g(this, "_micTestStartTime", void 0), g(this, "state", {
      volume: -100,
      isMicTesting: !1,
      isDetectingInput: !0,
      didDeafenUser: !1
    }), g(this, "setupVoiceActivity", () => {
      E.default.getMediaEngine().on(u.MediaEngineEvent.VoiceActivity, this.handleVoiceActivity)
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
    a = E.default.getOutputDeviceId(),
    n = E.default.getOutputDevices(),
    l = i().find(n, e => {
      let {
        id: t
      } = e;
      return t === a
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