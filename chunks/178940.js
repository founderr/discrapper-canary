n.d(t, {
    X: function () {
        return A;
    }
});
var r,
    i,
    a,
    o = n(47120);
var s = n(735250),
    l = n(470079),
    u = n(120356),
    c = n.n(u),
    d = n(512722),
    _ = n.n(d),
    E = n(866442),
    f = n(692547),
    h = n(84735),
    p = n(481060),
    m = n(981631),
    I = n(766581);
function T(e, t, n) {
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
!(function (e) {
    (e.DEFAULT = 'default'), (e.INVERTED = 'inverted'), (e.GHOST = 'ghost'), (e.ROW = 'row');
})(r || (r = {})),
    !(function (e) {
        (e.TOP = 'top'), (e.CENTER = 'center');
    })(i || (i = {}));
let g = {
        BOX: I.box,
        ROUND: I.round,
        SMALL_BOX: I.smallBox
    },
    S = {
        top: I.alignTop,
        center: I.alignCenter
    };
class A extends (a = l.PureComponent) {
    getInputMode() {
        return this.props.disabled ? 'disabled' : this.props.readOnly ? 'readonly' : 'default';
    }
    getStyle() {
        var e;
        let { value: t, type: n, color: r } = this.props,
            i = null !== (e = this.props.style) && void 0 !== e ? e : {};
        if (!1 === t) return i;
        if (((i = { ...i }), r === f.Z.unsafe_rawColors.BRAND_500.css))
            switch (n) {
                case 'default':
                    i.borderColor = 'var(--control-brand-foreground)';
                    break;
                case 'ghost':
                    (i.borderColor = 'var(--brand-15a)'), (i.backgroundColor = 'var(--brand-15a)');
                    break;
                case 'row':
                case 'inverted':
                    (i.borderColor = 'var(--brand-400)'), (i.backgroundColor = 'var(--brand-500)');
            }
        else
            switch (n) {
                case 'default':
                    i.borderColor = r;
                    break;
                case 'ghost':
                    if (r.startsWith('var(--')) {
                        let e = ''.concat(r.slice(0, -1), '-hsl)');
                        (i.borderColor = 'rgba('.concat(e, ', 0.15)')), (i.backgroundColor = 'rgba('.concat(e, ', 0.15)'));
                    } else _()((0, E.FX)(r), 'Checkbox: '.concat(r, ' is not a valid hex color')), (i.borderColor = (0, E.wK)(r, 0.15)), (i.backgroundColor = (0, E.wK)(r, 0.15));
                    break;
                case 'row':
                case 'inverted':
                    (i.backgroundColor = r), (i.borderColor = r);
            }
        return i;
    }
    getColor() {
        let { value: e, type: t, color: n } = this.props;
        return e ? ('inverted' === t || 'row' === t ? f.Z.unsafe_rawColors.WHITE_500.css : n) : f.Z.unsafe_rawColors.TRANSPARENT.css;
    }
    render() {
        let { disabled: e, readOnly: t, value: n, shape: r, align: i = 'center', className: a, innerClassName: o, children: l, size: u, reverse: d, checkboxColor: _, displayOnly: E, type: f, onClick: T } = this.props,
            g =
                null != l
                    ? (0, s.jsx)('div', {
                          className: c()(I.label, e ? I.labelDisabled : I.labelClickable, d ? I.labelReversed : I.labelForward),
                          style: { lineHeight: ''.concat(u, 'px') },
                          children: l
                      })
                    : null,
            A = E ? 'span' : 'label',
            v = this.props.disabled ? I.inputDisabled : this.props.readOnly ? I.inputReadonly : I.inputDefault;
        return (0, s.jsxs)(A, {
            className: c()(e ? I.checkboxWrapperDisabled : I.checkboxWrapper, S[i], a, {
                [I.row]: 'row' === f,
                [I.checked]: n
            }),
            children: [
                d ? g : null,
                !E &&
                    (0, s.jsx)(h.t, {
                        children: (0, s.jsx)('input', {
                            className: c()(o, v),
                            type: 'checkbox',
                            onClick: T,
                            onChange: e || t ? m.dG4 : this.handleChange,
                            checked: n,
                            style: {
                                width: u,
                                height: u
                            }
                        })
                    }),
                (0, s.jsx)('div', {
                    className: c()(I.checkbox, r, { [I.checked]: n }),
                    style: {
                        width: u,
                        height: u,
                        borderColor: _,
                        ...this.getStyle()
                    },
                    children: (0, s.jsx)(p.CheckmarkLargeIcon, {
                        size: 'sm',
                        color: this.getColor(),
                        'aria-hidden': !0
                    })
                }),
                d ? null : g
            ]
        });
    }
    constructor(...e) {
        super(...e),
            T(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e, e.currentTarget.checked);
            });
    }
}
T(A, 'Types', r),
    T(A, 'Shapes', g),
    T(A, 'Aligns', i),
    T(A, 'defaultProps', {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: 'default',
        color: f.Z.unsafe_rawColors.BRAND_500.css,
        shape: g.BOX,
        align: 'center',
        onChange: m.dG4,
        reverse: !1
    });
