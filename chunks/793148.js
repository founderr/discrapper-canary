var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(540026),
    d = n(689938),
    _ = n(493464);
function E(e, t, n) {
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
let f = 150;
class h extends (r = o.PureComponent) {
    componentDidMount() {
        this.updateMediaBar();
    }
    componentDidUpdate(e) {
        (this.props.value !== e.value || this.props.muted !== e.muted) && this.updateMediaBar();
    }
    updateMediaBar() {
        let { muted: e, value: t, maxValue: n } = this.props,
            r = this._mediaBar.current;
        null != r && (e ? r.setGrabber(0) : r.setGrabber(t / n));
    }
    render() {
        let { iconClassName: e, iconColor: t, className: n, sliderWrapperClassName: r, sliderClassName: i, currentWindow: o, muted: s, minValue: E, maxValue: h, value: p, onVolumeShow: m, onVolumeHide: I } = this.props,
            { hovered: T, focused: g, dragging: S } = this.state,
            A = u.VoiceNormalIcon;
        return (
            s || p === E ? (A = u.VoiceXIcon) : p < h / 2 && (A = u.VoiceLowIcon),
            (0, a.jsxs)('div', {
                className: l()(n, _.container),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), null == m || m();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), null == I || I();
                        }, f));
                },
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, a.jsx)('div', {
                        className: l()(_.volumeButtonSlider, r, { [_.sliderVisible]: T || g || S }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout), (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), f));
                        },
                        children: (0, a.jsx)(c.Z, {
                            sliderClassName: i,
                            type: c.Z.Types.VOLUME,
                            value: p / h,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: o,
                            ref: this._mediaBar
                        })
                    }),
                    (0, a.jsx)(u.Button, {
                        className: _.volumeButton,
                        'aria-label': d.Z.Messages.CONTROL_VOLUME,
                        size: u.Button.Sizes.NONE,
                        look: u.Button.Looks.BLANK,
                        onClick: this.handleToggleMute,
                        children: (0, a.jsx)(A, {
                            color: t,
                            className: e
                        })
                    })
                ]
            })
        );
    }
    constructor(...e) {
        super(...e),
            E(this, '_mediaBar', o.createRef()),
            E(this, '_hoverTimeout', void 0),
            E(this, 'state', {
                hovered: !1,
                focused: !1,
                dragging: !1
            }),
            E(this, 'handleValueChange', (e) => {
                let { maxValue: t, onValueChange: n } = this.props,
                    r = e * t;
                null == n || n(r);
            }),
            E(this, 'handleToggleMute', () => {
                let { onToggleMute: e } = this.props;
                null == e || e();
            }),
            E(this, 'handleKeyDown', (e) => {
                let { minValue: t, value: n, maxValue: r, onValueChange: i } = this.props,
                    a = 0.05 * (r - t);
                switch (e.key) {
                    case 'ArrowUp':
                        e.stopPropagation(), e.preventDefault(), null == i || i(Math.min(r, n + a));
                        break;
                    case 'ArrowDown':
                        e.stopPropagation(), e.preventDefault(), null == i || i(Math.max(t, n - a));
                }
            }),
            E(this, 'handleDragStart', () => {
                this.setState({ dragging: !0 });
            }),
            E(this, 'handleDragEnd', () => {
                this.setState({ dragging: !1 });
            }),
            E(this, 'blur', () => {
                this.setState({ focused: !1 });
            });
    }
}
E(h, 'defaultProps', {
    minValue: 0,
    maxValue: 100,
    handleSize: 16
}),
    (t.Z = h);
