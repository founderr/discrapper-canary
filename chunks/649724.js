n.d(t, {
    k: function () {
        return p;
    },
    u: function () {
        return h;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(481060),
    c = n(600164),
    d = n(153066),
    _ = n(689938),
    E = n(893873);
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
let h = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
};
class p extends (r = o.PureComponent) {
    select() {
        var e;
        null === (e = this.inputRef.current) || void 0 === e || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: r } = this.props,
            i = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
        return (0, a.jsx)('input', {
            className: l()((0, d.l)(E, 'input', r), { [E.inputHidden]: e }),
            ref: this.inputRef,
            type: 'text',
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            'aria-labelledby': i
        });
    }
    render() {
        let e;
        let { text: t = _.Z.Messages.COPY, mode: n, hideMessage: r, className: i, buttonLook: o } = this.props,
            s = null != r;
        switch (n) {
            case h.SUCCESS:
                e = u.ButtonColors.GREEN;
                break;
            case h.ERROR:
                e = u.ButtonColors.RED;
                break;
            default:
                e = this.props.buttonColor;
        }
        return (0, a.jsx)(u.FocusRing, {
            focusTarget: this.inputRef,
            ringTarget: this.containerRef,
            children: (0, a.jsx)('div', {
                className: l()((0, d.l)(E, 'copyInput', n), i),
                ref: this.containerRef,
                children: (0, a.jsxs)(c.Z, {
                    className: E.layout,
                    children: [
                        (0, a.jsxs)(c.Z, {
                            className: E.inputWrapper,
                            children: [
                                this.renderInput(s),
                                s
                                    ? (0, a.jsx)('div', {
                                          className: E.hiddenMessage,
                                          children: r
                                      })
                                    : null
                            ]
                        }),
                        (0, a.jsx)(c.Z, {
                            shrink: 1,
                            grow: 0,
                            style: { margin: 0 },
                            children: (0, a.jsx)(u.Button, {
                                className: E.button,
                                onClick: this.handleButtonClick,
                                size: u.ButtonSizes.MIN,
                                color: e,
                                look: o,
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
            f(this, 'inputRef', o.createRef()),
            f(this, 'containerRef', o.createRef()),
            f(this, 'handleButtonClick', () => {
                this.select();
                let { onCopy: e, value: t } = this.props;
                e(t);
            }),
            f(this, 'handleInputClick', () => {
                this.select();
            });
    }
}
f(p, 'contextType', u.FormContext),
    f(p, 'defaultProps', {
        supportsCopy: !0,
        buttonColor: u.ButtonColors.PRIMARY,
        buttonLook: u.ButtonLooks.FILLED,
        mode: h.DEFAULT
    }),
    f(p, 'Modes', h),
    f(p, 'ButtonColors', u.ButtonColors),
    f(p, 'ButtonLooks', u.ButtonLooks);
