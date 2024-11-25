n.d(t, {
    F: function () {
        return A;
    },
    X: function () {
        return y;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l = n(200651),
    u = n(192379),
    c = n(120356),
    d = n.n(c),
    f = n(512722),
    _ = n.n(f),
    p = n(866442),
    h = n(692547),
    m = n(84735),
    g = n(481060),
    E = n(540059),
    v = n(981631),
    I = n(592901);
function b(e, t, n) {
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
((s = r || (r = {})).DEFAULT = 'default'), (s.INVERTED = 'inverted'), (s.GHOST = 'ghost'), (s.ROW = 'row'), ((o = i || (i = {})).TOP = 'top'), (o.CENTER = 'center');
let T = {
        BOX: I.box,
        ROUND: I.round,
        SMALL_BOX: I.smallBox
    },
    S = {
        top: I.alignTop,
        center: I.alignCenter
    };
class y extends (a = u.PureComponent) {
    render() {
        let { disabled: e, readOnly: t, value: n, align: r = 'center', className: i, innerClassName: a, children: s, size: o, reverse: u, displayOnly: c, type: f, onClick: _ } = this.props,
            p =
                null != s
                    ? (0, l.jsx)('div', {
                          className: d()(I.label, e ? I.labelDisabled : I.labelClickable, u ? I.labelReversed : I.labelForward),
                          style: { lineHeight: ''.concat(o, 'px') },
                          children: s
                      })
                    : null,
            h = this.props.disabled ? I.inputDisabled : this.props.readOnly ? I.inputReadonly : I.inputDefault;
        return (0, l.jsxs)(c ? 'span' : 'label', {
            className: d()(e ? I.checkboxWrapperDisabled : I.checkboxWrapper, S[r], i, {
                [I.row]: 'row' === f,
                [I.checked]: n
            }),
            children: [
                u ? p : null,
                !c &&
                    (0, l.jsx)(m.t, {
                        children: (0, l.jsx)('input', {
                            className: d()(a, h),
                            type: 'checkbox',
                            onClick: _,
                            onChange: e || t ? v.dG4 : this.handleChange,
                            checked: n,
                            style: {
                                width: o,
                                height: o
                            }
                        })
                    }),
                (0, l.jsx)(A, { ...this.props }),
                u ? null : p
            ]
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e, e.currentTarget.checked);
            });
    }
}
b(y, 'Types', r),
    b(y, 'Shapes', T),
    b(y, 'Aligns', i),
    b(y, 'defaultProps', {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: 'default',
        shape: T.BOX,
        align: 'center',
        onChange: v.dG4,
        reverse: !1
    });
function A(e) {
    let t = (0, E.Q)('Checkbox'),
        { indicatorClassName: n, value: r, size: i, shape: a, checkboxColor: s, type: o, color: c, disabled: f } = e,
        m = (function (e, t) {
            var n;
            let { value: r, type: i, color: a } = e,
                s = null !== (n = e.style) && void 0 !== n ? n : {};
            if (!1 === r) return s;
            if (((s = { ...s }), null == a)) {
                if (!t)
                    switch (i) {
                        case 'default':
                            s.borderColor = 'var(--control-brand-foreground)';
                            break;
                        case 'ghost':
                            (s.borderColor = 'var(--brand-15a)'), (s.backgroundColor = 'var(--brand-15a)');
                            break;
                        case 'row':
                        case 'inverted':
                            (s.borderColor = 'var(--brand-400)'), (s.backgroundColor = 'var(--brand-500)');
                    }
            } else
                switch (i) {
                    case 'default':
                        s.borderColor = a;
                        break;
                    case 'ghost':
                        if (a.startsWith('var(--')) {
                            let e = ''.concat(a.slice(0, -1), '-hsl)');
                            (s.borderColor = 'rgba('.concat(e, ', 0.15)')), (s.backgroundColor = 'rgba('.concat(e, ', 0.15)'));
                        } else _()((0, p.FX)(a), 'Checkbox: '.concat(a, ' is not a valid hex color')), (s.borderColor = (0, p.wK)(a, 0.15)), (s.backgroundColor = (0, p.wK)(a, 0.15));
                        break;
                    case 'row':
                    case 'inverted':
                        (s.backgroundColor = a), (s.borderColor = a);
                }
            return s;
        })(e, t),
        g = u.useMemo(() => (r ? (t ? h.Z.colors.WHITE.css : 'inverted' === o || 'row' === o ? h.Z.colors.WHITE.css : null != c ? c : h.Z.unsafe_rawColors.BRAND_500.css) : h.Z.unsafe_rawColors.TRANSPARENT.css), [r, o, c, t]);
    return (0, l.jsx)('div', {
        className: d()(I.checkbox, a, n, {
            [I.checked]: r,
            [I.checkboxDisabled]: f
        }),
        style: {
            width: i,
            height: i,
            borderColor: s,
            ...m
        },
        children: (0, l.jsx)(N, {
            isVisualRefreshEnabled: t,
            size: 'sm',
            color: g,
            'aria-hidden': !0
        })
    });
}
function N(e) {
    let { isVisualRefreshEnabled: t, ...n } = e;
    return t ? (0, l.jsx)(g.CheckmarkSmallBoldIcon, { ...n }) : (0, l.jsx)(g.CheckmarkLargeIcon, { ...n });
}
