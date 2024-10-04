n.d(t, {
    _: function () {
        return E._;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(392711),
    i = n.n(r),
    l = n(442837),
    o = n(46973),
    c = n(846519),
    d = n(481060),
    _ = n(846027),
    E = n(794347),
    u = n(131951),
    T = n(19780),
    I = n(626135),
    R = n(981631),
    g = n(689938),
    N = n(456849);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class C extends a.PureComponent {
    componentDidMount() {
        this._initTimeout.start(1000, this.setupVoiceActivity);
    }
    componentWillUnmount() {
        this._initTimeout.stop(), this._silenceTimeout.stop(), this._micTestStop(), u.Z.getMediaEngine().removeListener(o.aB.VoiceActivity, this.handleVoiceActivity);
    }
    _micTestStart() {
        let { isVoiceConnected: e, inputDeviceName: t, inputVolume: n, outputDeviceName: s, outputVolume: a, inputMode: r, vadAutoThreshold: i, vadThreshold: l, location: o, isDeafened: c } = this.props,
            d = !1;
        e && !c && (_.Z.toggleSelfDeaf(), (d = !0)),
            _.Z.setLoopback(!0),
            (this._micTestStartTime = Date.now()),
            this.setState({
                isMicTesting: !0,
                isDetectingInput: !0,
                didDeafenUser: d
            }),
            I.default.track(R.rMx.MIC_TESTING_STARTED, {
                input_device_name: t,
                input_device_volume: n,
                output_device_name: s,
                output_device_volume: a,
                input_mode: r,
                input_sensitivity_is_automatic: i,
                input_sensitivity_threshold: Math.round(l),
                location: o
            });
    }
    _micTestStop() {
        let { didDeafenUser: e, isMicTesting: t } = this.state,
            { isVoiceConnected: n, isDeafened: s } = this.props;
        if (!t) return;
        if (
            (n && s && e && _.Z.toggleSelfDeaf(),
            _.Z.setLoopback(!1),
            this.setState({
                isMicTesting: !1,
                didDeafenUser: !1
            }),
            null != this._micTestStartTime)
        )
            I.default.track(R.rMx.MIC_TESTING_STOPPED, { testing_duration: Math.round((Date.now() - this._micTestStartTime) / 1000) });
    }
    renderCaption() {
        let { captionVoice: e, captionNoVoice: t } = this.props,
            { isMicTesting: n, isDetectingInput: a } = this.state;
        return (0, s.jsx)(d.FormText, {
            className: N.micTestCaption,
            type: d.FormText.Types.DESCRIPTION,
            children: n ? (a ? e : t) : null
        });
    }
    render() {
        let { isVoiceConnected: e, title: t, description: n, notchBackground: a, buttonTest: r, buttonStop: i, buttonClassName: l, buttonColor: o, isDeafened: c } = this.props,
            { isMicTesting: _, volume: u } = this.state,
            T = e && !_ ? g.Z.Messages.MIC_TEST_VOICE_CHANNEL_WARNING : null;
        return (
            _ && e && !c && this._micTestStop(),
            (0, s.jsxs)('div', {
                className: N.container,
                children: [
                    (0, s.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H5,
                        className: N.title,
                        children: t
                    }),
                    null != n &&
                        (0, s.jsx)(d.FormText, {
                            type: d.FormText.Types.DESCRIPTION,
                            className: N.description,
                            children: n
                        }),
                    (0, s.jsxs)('div', {
                        className: N.micTest,
                        children: [
                            (0, s.jsx)(d.Tooltip, {
                                text: T,
                                children: (e) => {
                                    let { onMouseEnter: t, onMouseLeave: n } = e;
                                    return (0, s.jsx)(d.Button, {
                                        grow: !1,
                                        onClick: this.handleToggleMicTest,
                                        onMouseEnter: t,
                                        onMouseLeave: n,
                                        size: d.Button.Sizes.SMALL,
                                        className: l,
                                        color: o,
                                        children: _ ? i : r
                                    });
                                }
                            }),
                            (0, s.jsx)(E.Z, {
                                progress: _ ? u + 100 : 0,
                                notchBackground: a
                            }),
                            this.renderCaption()
                        ]
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            m(this, '_initTimeout', new c.V7()),
            m(this, '_silenceTimeout', new c.V7()),
            m(this, '_messageTimeout', new c.V7()),
            m(this, '_micTestStartTime', void 0),
            m(this, 'state', {
                volume: -100,
                isMicTesting: !1,
                isDetectingInput: !0,
                didDeafenUser: !1
            }),
            m(this, 'setupVoiceActivity', () => {
                u.Z.getMediaEngine().on(o.aB.VoiceActivity, this.handleVoiceActivity);
            }),
            m(this, 'handleVoiceActivity', (e) => {
                let { isMicTesting: t } = this.state;
                if (t && e <= -100) {
                    !this._silenceTimeout.isStarted() &&
                        this._silenceTimeout.start(2000, () => {
                            this.setState({ isDetectingInput: !1 });
                        }),
                        this.setState({ volume: -100 });
                    return;
                }
                this._silenceTimeout.stop(),
                    this.setState({
                        volume: e,
                        isDetectingInput: !0
                    });
            }),
            m(this, 'handleToggleMicTest', () => {
                this.state.isMicTesting ? this._micTestStop() : this._micTestStart();
            });
    }
}
t.Z = l.ZP.connectStores([T.Z, u.Z], () => {
    let e = u.Z.getInputDeviceId(),
        t = u.Z.getInputDevices(),
        n = i().find(t, (t) => {
            let { id: n } = t;
            return n === e;
        }),
        s = u.Z.getOutputDeviceId(),
        a = u.Z.getOutputDevices(),
        r = i().find(a, (e) => {
            let { id: t } = e;
            return t === s;
        }),
        l = u.Z.getModeOptions();
    return {
        isVoiceConnected: T.Z.isConnected(),
        inputVolume: u.Z.getInputVolume(),
        outputVolume: u.Z.getOutputVolume(),
        inputMode: u.Z.getMode(),
        vadThreshold: l.threshold,
        isDeafened: u.Z.isSelfDeaf(),
        vadAutoThreshold: l.autoThreshold,
        inputDeviceName: null != n ? n.name : '',
        outputDeviceName: null != r ? r.name : ''
    };
})(C);
