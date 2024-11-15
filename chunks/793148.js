n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(540026),
    c = n(388032),
    d = n(771517);
function f(e, t, n) {
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
class _ extends (r = a.PureComponent) {
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
        let { iconClassName: e, iconColor: t, className: n, sliderWrapperClassName: r, sliderClassName: a, currentWindow: s, muted: f, minValue: _, maxValue: p, value: h, onVolumeShow: m, onVolumeHide: g } = this.props,
            { hovered: E, focused: v, dragging: b } = this.state,
            I = l.VoiceNormalIcon;
        return (
            f || h === _ ? (I = l.VoiceXIcon) : h < p / 2 && (I = l.VoiceLowIcon),
            (0, i.jsxs)('div', {
                className: o()(n, d.container),
                onMouseEnter: () => {
                    clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 }), null == m || m();
                },
                onMouseLeave: () => {
                    clearTimeout(this._hoverTimeout),
                        (this._hoverTimeout = setTimeout(() => {
                            this.setState({ hovered: !1 }), null == g || g();
                        }, 150));
                },
                onFocus: () => this.setState({ focused: !0 }),
                onBlur: () => this.setState({ focused: !1 }),
                onKeyDown: this.handleKeyDown,
                children: [
                    (0, i.jsx)('div', {
                        className: o()(d.volumeButtonSlider, r, { [d.sliderVisible]: E || v || b }),
                        onMouseEnter: () => {
                            clearTimeout(this._hoverTimeout), this.setState({ hovered: !0 });
                        },
                        onMouseLeave: () => {
                            clearTimeout(this._hoverTimeout), (this._hoverTimeout = setTimeout(() => this.setState({ hovered: !1 }), 150));
                        },
                        children: (0, i.jsx)(u.Z, {
                            sliderClassName: a,
                            type: u.Z.Types.VOLUME,
                            value: h / p,
                            onDrag: this.handleValueChange,
                            onDragStart: this.handleDragStart,
                            onDragEnd: this.handleDragEnd,
                            currentWindow: s,
                            ref: this._mediaBar
                        })
                    }),
                    (0, i.jsx)(l.Button, {
                        className: d.volumeButton,
                        'aria-label': c.intl.string(c.t['19lt29']),
                        size: l.Button.Sizes.NONE,
                        look: l.Button.Looks.BLANK,
                        onClick: this.handleToggleMute,
                        children: (0, i.jsx)(I, {
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
            f(this, '_mediaBar', a.createRef()),
            f(this, '_hoverTimeout', void 0),
            f(this, 'state', {
                hovered: !1,
                focused: !1,
                dragging: !1
            }),
            f(this, 'handleValueChange', (e) => {
                let { maxValue: t, onValueChange: n } = this.props;
                null == n || n(e * t);
            }),
            f(this, 'handleToggleMute', () => {
                let { onToggleMute: e } = this.props;
                null == e || e();
            }),
            f(this, 'handleKeyDown', (e) => {
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
            f(this, 'handleDragStart', () => {
                this.setState({ dragging: !0 });
            }),
            f(this, 'handleDragEnd', () => {
                this.setState({ dragging: !1 });
            }),
            f(this, 'blur', () => {
                this.setState({ focused: !1 });
            });
    }
}
f(_, 'defaultProps', {
    minValue: 0,
    maxValue: 100,
    handleSize: 16
}),
    (t.Z = _);
