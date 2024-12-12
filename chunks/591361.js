r.d(n, {
    O: function () {
        return d;
    },
    a8: function () {
        return h;
    },
    u6: function () {
        return _;
    }
});
var i = r(192379),
    a = r(464170),
    s = r(969129),
    o = r(558883),
    l = r(661763),
    u = r(523603),
    c = r(491116);
function d(e, n, r) {
    let l = (0, s.Q3)({
            ...e,
            value: n.isSelected
        }),
        { isInvalid: u, validationErrors: c, validationDetails: d } = l.displayValidation,
        {
            labelProps: f,
            inputProps: _,
            isSelected: h,
            isPressed: p,
            isDisabled: m,
            isReadOnly: g
        } = (0, o.O)(
            {
                ...e,
                isInvalid: u
            },
            n,
            r
        );
    (0, a.Q)(e, l, r);
    let { isIndeterminate: E, isRequired: v, validationBehavior: I = 'aria' } = e;
    return (
        (0, i.useEffect)(() => {
            r.current && (r.current.indeterminate = !!E);
        }),
        {
            labelProps: f,
            inputProps: {
                ..._,
                checked: h,
                'aria-required': (v && 'aria' === I) || void 0,
                required: v && 'native' === I
            },
            isSelected: h,
            isPressed: p,
            isDisabled: m,
            isReadOnly: g,
            isInvalid: u,
            validationErrors: c,
            validationDetails: d
        }
    );
}
let f = new WeakMap();
function _(e, n) {
    let { isDisabled: r, name: i, validationBehavior: a = 'aria' } = e,
        { isInvalid: s, validationErrors: o, validationDetails: c } = n.displayValidation,
        {
            labelProps: d,
            fieldProps: _,
            descriptionProps: h,
            errorMessageProps: p
        } = (0, u.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: s,
            errorMessage: e.errorMessage || o
        });
    f.set(n, {
        name: i,
        descriptionId: h.id,
        errorMessageId: p.id,
        validationBehavior: a
    });
    let m = (0, l.zL)(e, { labelable: !0 });
    return {
        groupProps: (0, l.dG)(m, {
            role: 'group',
            'aria-disabled': r || void 0,
            ..._
        }),
        labelProps: d,
        descriptionProps: h,
        errorMessageProps: p,
        isInvalid: s,
        validationErrors: o,
        validationDetails: c
    };
}
function h(e, n, r) {
    var a, o;
    let l = (0, c.l)({
            isReadOnly: e.isReadOnly || n.isReadOnly,
            isSelected: n.isSelected(e.value),
            onChange(r) {
                r ? n.addValue(e.value) : n.removeValue(e.value), e.onChange && e.onChange(r);
            }
        }),
        { name: u, descriptionId: _, errorMessageId: h, validationBehavior: p } = f.get(n);
    p = null !== (a = e.validationBehavior) && void 0 !== a ? a : p;
    let { realtimeValidation: m } = (0, s.Q3)({
            ...e,
            value: l.isSelected,
            name: void 0,
            validationBehavior: 'aria'
        }),
        g = (0, i.useRef)(s.PS),
        E = () => {
            n.setInvalid(e.value, m.isInvalid ? m : g.current);
        };
    (0, i.useEffect)(E);
    let v = n.realtimeValidation.isInvalid ? n.realtimeValidation : m,
        I = 'native' === p ? n.displayValidation : v,
        T = d(
            {
                ...e,
                isReadOnly: e.isReadOnly || n.isReadOnly,
                isDisabled: e.isDisabled || n.isDisabled,
                name: e.name || u,
                isRequired: null !== (o = e.isRequired) && void 0 !== o ? o : n.isRequired,
                validationBehavior: p,
                [s.tL]: {
                    realtimeValidation: v,
                    displayValidation: I,
                    resetValidation: n.resetValidation,
                    commitValidation: n.commitValidation,
                    updateValidation(e) {
                        (g.current = e), E();
                    }
                }
            },
            l,
            r
        );
    return {
        ...T,
        inputProps: {
            ...T.inputProps,
            'aria-describedby': [e['aria-describedby'], n.isInvalid ? h : null, _].filter(Boolean).join(' ') || void 0
        }
    };
}
