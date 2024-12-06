n.d(t, {
    k: function () {
        return h;
    },
    u: function () {
        return p;
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
    f = n(333438);
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
let p = {
    DEFAULT: 'default',
    SUCCESS: 'success',
    ERROR: 'error'
};
class h extends (r = a.PureComponent) {
    select() {
        var e;
        null === (e = this.inputRef.current) || void 0 === e || e.select();
    }
    renderInput(e) {
        var t;
        let { value: n, mode: r, autoFocus: a, spellCheck: s, inputClassName: l } = this.props,
            u = null === (t = this.context) || void 0 === t ? void 0 : t.titleId;
        return (0, i.jsx)('input', {
            className: o()((0, c.l)(f, 'input', r), l, { [f.inputHidden]: e }),
            ref: this.inputRef,
            type: 'text',
            value: n,
            onClick: this.handleInputClick,
            readOnly: !0,
            'aria-labelledby': u,
            autoFocus: a,
            spellCheck: s
        });
    }
    render() {
        let e;
        let { text: t = d.intl.string(d.t.OpuAlJ), mode: n, hideMessage: r, className: a, buttonLook: s, supportsCopy: _, disabled: h } = this.props,
            m = null != r;
        switch (n) {
            case p.SUCCESS:
                e = l.ButtonColors.GREEN;
                break;
            case p.ERROR:
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
                                this.renderInput(m),
                                m
                                    ? (0, i.jsx)('div', {
                                          className: f.hiddenMessage,
                                          children: r
                                      })
                                    : null
                            ]
                        }),
                        _
                            ? (0, i.jsx)(u.Z, {
                                  shrink: 1,
                                  grow: 0,
                                  style: { margin: 0 },
                                  children: (0, i.jsx)(l.Button, {
                                      className: f.button,
                                      onClick: this.handleButtonClick,
                                      size: l.ButtonSizes.MIN,
                                      color: e,
                                      look: s,
                                      disabled: h,
                                      children: t
                                  })
                              })
                            : null
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
_(h, 'contextType', l.FormContext),
    _(h, 'defaultProps', {
        supportsCopy: !0,
        buttonColor: l.ButtonColors.PRIMARY,
        buttonLook: l.ButtonLooks.FILLED,
        mode: p.DEFAULT
    }),
    _(h, 'Modes', p),
    _(h, 'ButtonColors', l.ButtonColors),
    _(h, 'ButtonLooks', l.ButtonLooks);
