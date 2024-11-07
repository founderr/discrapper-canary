n.d(t, {
    k: function () {
        return p;
    },
    u: function () {
        return h;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(600164),
    c = n(153066),
    d = n(388032),
    f = n(392623);
function _(e, t, n) {
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
let h = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
};
class p extends (r = a.PureComponent) {
    select() {
        var e;
        null === (e = this.inputRef.current) || void 0 === e || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: r } = this.props,
            a = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
        return (0, i.jsx)('input', {
            className: o()((0, c.l)(f, 'input', r), { [f.inputHidden]: e }),
            ref: this.inputRef,
            type: 'text',
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            'aria-labelledby': a
        });
    }
    render() {
        let e;
        let { text: t = d.intl.string(d.t.OpuAlJ), mode: n, hideMessage: r, className: a, buttonLook: s } = this.props,
            _ = null != r;
        switch (n) {
            case h.SUCCESS:
                e = l.ButtonColors.GREEN;
                break;
            case h.ERROR:
                e = l.ButtonColors.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, i.jsx)(l.FocusRing, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, i.jsx)('div', {
                className: o()((0, c.l)(f, 'copyInput', n), a),
                ref: this.containerRef,
                children: (0, i.jsxs)(u.Z, {
                    className: f.layout,
                    children: [
                        (0, i.jsxs)(u.Z, {
                            className: f.inputWrapper,
                            children: [
                                this.renderInput(_),
                                _
                                    ? (0, i.jsx)('div', {
                                          className: f.hiddenMessage,
                                          children: r
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(u.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, i.jsx)(l.Button, {
                                className: f.button,
                                onClick: this.handleButtonClick,
                                size: l.ButtonSizes.MIN,
                                color: e,
                                look: s,
                                children: t
                            })
                        })
                    ]
                })
            })
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'inputRef', a.createRef()),
            _(this, 'containerRef', a.createRef()),
            _(this, 'handleButtonClick', () => {
                this.select();
                let { onCopy: e, value: t } = this.props;
                e(t);
            }),
            _(this, 'handleInputClick', () => {
                this.select();
            });
    }
}
_(p, 'contextType', l.FormContext),
    _(p, 'defaultProps', {
        supportsCopy: !0,
        buttonColor: l.ButtonColors.PRIMARY,
        buttonLook: l.ButtonLooks.FILLED,
        mode: h.DEFAULT
    }),
    _(p, 'Modes', h),
    _(p, 'ButtonColors', l.ButtonColors),
    _(p, 'ButtonLooks', l.ButtonLooks);
