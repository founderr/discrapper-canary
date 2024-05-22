"use strict";
s.r(t), s("47120"), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("921738"),
  i = s.n(l),
  r = s("213005"),
  o = s("504884"),
  d = s("358085"),
  u = s("998502"),
  c = s("981631");

function S(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
let E = d.isPlatformEmbedded && null != u.default.getDiscordUtils().inputCaptureRegisterElement;
class T extends n.PureComponent {
  componentDidMount() {
    this._mounted = !0
  }
  componentWillUnmount() {
    this._mounted = !1, this.cleanUp()
  }
  componentDidUpdate(e) {
    this.props.defaultValue !== e.defaultValue && this.setState({
      codes: this.props.defaultValue
    })
  }
  cleanUp() {
    d.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
  }
  handleComboChange(e) {
    let {
      mode: t
    } = this.state, {
      onChange: s
    } = this.props;
    t === o.RecordModes.RECORDING && (null != s && s(e), this.setState({
      codes: e
    }))
  }
  render() {
    let e, t;
    let {
      codes: s,
      mode: n
    } = this.state, {
      disabled: l
    } = this.props;
    return E ? (t = u.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !d.isPlatformEmbedded && (e = this.handleComboKeys), (0, a.jsx)(o.default, {
      disabled: l,
      value: s,
      mode: n,
      onClick: this.toggleRecordMode,
      onChange: e,
      registerNativeRecorder: t,
      disableOnClickWhileRecording: E
    })
  }
  constructor(e) {
    super(e), S(this, "_input", void 0), S(this, "gs", void 0), S(this, "_mounted", !1), S(this, "recordStart", () => {
      d.isPlatformEmbedded && !E && (this.gs = new r.default, this.gs.on("change", this.handleGSChange)), this.setState({
        mode: o.RecordModes.RECORDING
      })
    }), S(this, "recordEnd", () => {
      this.cleanUp(), this.setState({
        mode: o.RecordModes.DEFAULT
      })
    }), S(this, "toggleRecordMode", () => {
      this.state.mode === o.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
    }), S(this, "handleComboKeys", (e, t, s) => {
      if (s.preventDefault(), "keydown" === s.type) {
        let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, i()(e), c.KeyboardEnvs.BROWSER]),
          {
            keyCode: a
          } = s;
        null == e.find(e => {
          let [, t] = e;
          return a === t
        }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, a, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
      }
    }), S(this, "handleGSChange", e => {
      if (!1 === this._mounted) return;
      let t = [...e.combo];
      this.handleComboChange(t)
    }), S(this, "handleNativeChange", e => {
      e.length > 0 && this.handleComboChange(e), this.recordEnd()
    });
    let {
      defaultValue: t
    } = e;
    this.state = {
      codes: t,
      mode: o.RecordModes.DEFAULT
    }
  }
}
t.default = T