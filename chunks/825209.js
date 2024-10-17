t(47120), t(653041);
var n = t(735250),
    a = t(470079),
    i = t(921738),
    r = t.n(i),
    o = t(213005),
    l = t(455279),
    c = t(358085),
    d = t(998502),
    _ = t(981631);
function u(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
let E = c.isPlatformEmbedded && null != d.ZP.getDiscordUtils().inputCaptureRegisterElement;
class T extends a.PureComponent {
    componentDidMount() {
        this._mounted = !0;
    }
    componentWillUnmount() {
        (this._mounted = !1), this.cleanUp();
    }
    componentDidUpdate(e) {
        this.props.defaultValue !== e.defaultValue && this.setState({ codes: this.props.defaultValue });
    }
    cleanUp() {
        c.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), (this.gs = null));
    }
    handleComboChange(e) {
        let { mode: s } = this.state,
            { onChange: t } = this.props;
        s === l.c.RECORDING && (null != t && t(e), this.setState({ codes: e }));
    }
    render() {
        let e, s;
        let { codes: t, mode: a } = this.state,
            { disabled: i } = this.props;
        return (
            E ? ((s = d.ZP.getDiscordUtils().inputCaptureRegisterElement), (e = this.handleNativeChange)) : !c.isPlatformEmbedded && (e = this.handleComboKeys),
            (0, n.jsx)(l.Z, {
                disabled: i,
                value: t,
                mode: a,
                onClick: this.toggleRecordMode,
                onChange: e,
                registerNativeRecorder: s,
                disableOnClickWhileRecording: E
            })
        );
    }
    constructor(e) {
        super(e),
            u(this, '_input', void 0),
            u(this, 'gs', void 0),
            u(this, '_mounted', !1),
            u(this, 'recordStart', () => {
                c.isPlatformEmbedded && !E && ((this.gs = new o.Z()), this.gs.on('change', this.handleGSChange)), this.setState({ mode: l.c.RECORDING });
            }),
            u(this, 'recordEnd', () => {
                this.cleanUp(), this.setState({ mode: l.c.DEFAULT });
            }),
            u(this, 'toggleRecordMode', () => {
                this.state.mode === l.c.DEFAULT ? this.recordStart() : this.recordEnd();
            }),
            u(this, 'handleComboKeys', (e, s, t) => {
                if ((t.preventDefault(), 'keydown' === t.type)) {
                    let e = s.map((e) => [_.MoX.KEYBOARD_KEY, r()(e), _.CgE.BROWSER]),
                        { keyCode: n } = t;
                    null ==
                        e.find((e) => {
                            let [, s] = e;
                            return n === s;
                        }) && e.push([_.MoX.KEYBOARD_KEY, n, _.CgE.BROWSER]),
                        this.handleComboChange(e);
                }
            }),
            u(this, 'handleGSChange', (e) => {
                if (!1 === this._mounted) return;
                let s = [...e.combo];
                this.handleComboChange(s);
            }),
            u(this, 'handleNativeChange', (e) => {
                e.length > 0 && this.handleComboChange(e), this.recordEnd();
            });
        let { defaultValue: s } = e;
        this.state = {
            codes: s,
            mode: l.c.DEFAULT
        };
    }
}
s.Z = T;
