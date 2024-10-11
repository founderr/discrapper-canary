n.d(t, {
    F: function () {
        return O;
    },
    X: function () {
        return R;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l = n(735250),
    u = n(470079),
    c = n(120356),
    d = n.n(c),
    _ = n(512722),
    E = n.n(_),
    f = n(866442),
    h = n(692547),
    p = n(84735),
    I = n(481060),
    m = n(540059),
    T = n(981631),
    S = n(766581);
function g(e, t, n) {
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
let A = {
        BOX: S.box,
        ROUND: S.round,
        SMALL_BOX: S.smallBox
    },
    N = {
        top: S.alignTop,
        center: S.alignCenter
    };
class R extends (a = u.PureComponent) {
    render() {
        let { disabled: e, readOnly: t, value: n, align: r = 'center', className: i, innerClassName: a, children: s, size: o, reverse: u, displayOnly: c, type: _, onClick: E } = this.props,
            f =
                null != s
                    ? (0, l.jsx)('div', {
                          className: d()(S.label, e ? S.labelDisabled : S.labelClickable, u ? S.labelReversed : S.labelForward),
                          style: { lineHeight: ''.concat(o, 'px') },
                          children: s
                      })
                    : null,
            h = this.props.disabled ? S.inputDisabled : this.props.readOnly ? S.inputReadonly : S.inputDefault;
        return (0, l.jsxs)(c ? 'span' : 'label', {
            className: d()(e ? S.checkboxWrapperDisabled : S.checkboxWrapper, N[r], i, {
                [S.row]: 'row' === _,
                [S.checked]: n
            }),
            children: [
                u ? f : null,
                !c &&
                    (0, l.jsx)(p.t, {
                        children: (0, l.jsx)('input', {
                            className: d()(a, h),
                            type: 'checkbox',
                            onClick: E,
                            onChange: e || t ? T.dG4 : this.handleChange,
                            checked: n,
                            style: {
                                width: o,
                                height: o
                            }
                        })
                    }),
                (0, l.jsx)(O, { ...this.props }),
                u ? null : f
            ]
        });
    }
    constructor(...e) {
        super(...e),
            g(this, 'handleChange', (e) => {
                let { onChange: t } = this.props;
                null == t || t(e, e.currentTarget.checked);
            });
    }
}
g(R, 'Types', r),
    g(R, 'Shapes', A),
    g(R, 'Aligns', i),
    g(R, 'defaultProps', {
        size: 24,
        disabled: !1,
        readOnly: !1,
        displayOnly: !1,
        value: !1,
        type: 'default',
        shape: A.BOX,
        align: 'center',
        onChange: T.dG4,
        reverse: !1
    });
function O(e) {
    let t = (0, m.Q)('Checkbox'),
        { value: n, size: r, shape: i, checkboxColor: a, type: s, color: o, disabled: c } = e,
        _ = (function (e, t) {
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
                        } else E()((0, f.FX)(a), 'Checkbox: '.concat(a, ' is not a valid hex color')), (s.borderColor = (0, f.wK)(a, 0.15)), (s.backgroundColor = (0, f.wK)(a, 0.15));
                        break;
                    case 'row':
                    case 'inverted':
                        (s.backgroundColor = a), (s.borderColor = a);
                }
            return s;
        })(e, t),
        p = u.useMemo(() => (n ? (t ? h.Z.colors.WHITE.css : 'inverted' === s || 'row' === s ? h.Z.colors.WHITE.css : null != o ? o : h.Z.unsafe_rawColors.BRAND_500.css) : h.Z.unsafe_rawColors.TRANSPARENT.css), [n, s, o, t]);
    return (0, l.jsx)('div', {
        className: d()(S.checkbox, i, {
            [S.checked]: n,
            [S.checkboxDisabled]: c
        }),
        style: {
            width: r,
            height: r,
            borderColor: a,
            ..._
        },
        children: (0, l.jsx)(v, {
            isVisualRefreshEnabled: t,
            size: 'sm',
            color: p,
            'aria-hidden': !0
        })
    });
}
function v(e) {
    let { isVisualRefreshEnabled: t, ...n } = e;
    return t ? (0, l.jsx)(I.CheckmarkSmallBoldIcon, { ...n }) : (0, l.jsx)(I.CheckmarkLargeIcon, { ...n });
}
