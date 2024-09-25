n.d(t, {
    I: function () {
        return W;
    }
});
var r = n(939421),
    i = n(434514),
    a = n(609059),
    o = n(3587),
    s = n(793766),
    l = n(267480),
    u = n(227241),
    c = n(613488),
    d = n(575912),
    _ = n(575697),
    E = n(378266),
    f = n(674360),
    h = n(918203),
    p = n(620018),
    m = n(519718),
    I = n(648980),
    T = n(576094),
    g = n(397250),
    S = n(617451),
    A = n(376425),
    v = n(334268),
    N = n(543659),
    O = n(927105),
    R = n(635311),
    C = n(705665),
    y = n(517898),
    b = n(694147),
    L = n(443992),
    D = n(978038),
    M = n(261248),
    P = n(41410),
    U = n(58463),
    w = n(352021),
    x = n(170781),
    G = n(182823),
    k = n(470079),
    B = n(201284),
    F = n(612001),
    Z = n(640900),
    V = n(616073),
    H = n(469163);
function Y(e) {
    return e && e.__esModule ? e.default : e;
}
var j = {};
function W(e, t, n) {
    let r,
        { id: i, decrementAriaLabel: a, incrementAriaLabel: o, isDisabled: s, isReadOnly: l, isRequired: u, minValue: c, maxValue: d, autoFocus: _, label: E, formatOptions: f, onBlur: h = () => {}, onFocus: p, onFocusChange: m, onKeyDown: I, onKeyUp: T, description: g, errorMessage: S, ...A } = e,
        { increment: v, incrementToMax: N, decrement: O, decrementToMin: R, numberValue: C, inputValue: y, commit: b, commitValidation: L } = t,
        D = (0, V.qb)(Y(j), '@react-aria/numberfield'),
        M = (0, G.Me)(i),
        { focusProps: P } = (0, F.KK)({
            onBlur() {
                b();
            }
        }),
        U = (0, V.Ux)(f),
        w = (0, k.useMemo)(() => U.resolvedOptions(), [U]),
        x = (0, V.Ux)({
            ...f,
            currencySign: void 0
        }),
        W = (0, k.useMemo)(() => (isNaN(C) ? '' : x.format(C)), [x, C]),
        {
            spinButtonProps: K,
            incrementButtonProps: z,
            decrementButtonProps: q
        } = (0, H.G)({
            isDisabled: s,
            isReadOnly: l,
            isRequired: u,
            maxValue: d,
            minValue: c,
            onIncrement: v,
            onIncrementToMax: N,
            onDecrement: O,
            onDecrementToMin: R,
            value: C,
            textValue: W
        }),
        [Q, X] = (0, k.useState)(!1),
        { focusWithinProps: $ } = (0, F.L_)({
            isDisabled: s,
            onFocusWithinChange: X
        }),
        J = (0, k.useCallback)(
            (e) => {
                !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? v() : e.deltaY < 0 && O());
            },
            [O, v]
        ),
        ee = s || l || !Q;
    (0, F.y0)(
        {
            onScroll: J,
            isDisabled: ee
        },
        n
    );
    let et = w.maximumFractionDigits > 0,
        en = isNaN(t.minValue) || t.minValue < 0,
        er = 'numeric';
    (0, G.IN)() ? (en ? (er = 'text') : et && (er = 'decimal')) : (0, G.Dt)() && (en ? (er = 'numeric') : et && (er = 'decimal'));
    let ei = (e) => {
            t.validate(e) && t.setInputValue(e);
        },
        ea = (0, G.zL)(e),
        eo = (0, k.useCallback)(
            (e) => {
                'Enter' === e.key ? (b(), L()) : e.continuePropagation();
            },
            [b, L]
        ),
        { isInvalid: es, validationErrors: el, validationDetails: eu } = t.displayValidation,
        {
            labelProps: ec,
            inputProps: ed,
            descriptionProps: e_,
            errorMessageProps: eE
        } = (0, Z.h)(
            {
                ...A,
                ...ea,
                name: void 0,
                label: E,
                autoFocus: _,
                isDisabled: s,
                isReadOnly: l,
                isRequired: u,
                validate: void 0,
                [B.tL]: t,
                value: y,
                defaultValue: void 0,
                autoComplete: 'off',
                'aria-label': e['aria-label'] || null,
                'aria-labelledby': e['aria-labelledby'] || null,
                id: M,
                type: 'text',
                inputMode: er,
                onChange: ei,
                onBlur: h,
                onFocus: p,
                onFocusChange: m,
                onKeyDown: (0, k.useMemo)(() => (0, G.tS)(eo, I), [eo, I]),
                onKeyUp: T,
                description: g,
                errorMessage: S
            },
            t,
            n
        );
    (0, G.y$)(n, t.numberValue, t.setNumberValue);
    let ef = (0, G.dG)(K, P, ed, {
        role: null,
        'aria-roledescription': (0, G.gn)() ? null : D.format('numberField'),
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
        autoCorrect: 'off',
        spellCheck: 'false'
    });
    'native' === e.validationBehavior && (ef['aria-required'] = void 0);
    let eh = (e) => {
            document.activeElement !== n.current && ('mouse' === e.pointerType ? n.current.focus() : e.target.focus());
        },
        ep = e['aria-label'] || ('string' == typeof e.label ? e.label : '');
    !ep && (r = null != e.label ? ec.id : e['aria-labelledby']);
    let em = (0, G.Me)(),
        eI = (0, G.Me)(),
        eT = (0, G.dG)(z, {
            'aria-label': o || D.format('increase', { fieldLabel: ep }).trim(),
            id: r && !o ? em : null,
            'aria-labelledby': r && !o ? `${em} ${r}` : null,
            'aria-controls': M,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !t.canIncrement,
            onPressStart: eh
        }),
        eg = (0, G.dG)(q, {
            'aria-label': a || D.format('decrease', { fieldLabel: ep }).trim(),
            id: r && !a ? eI : null,
            'aria-labelledby': r && !a ? `${eI} ${r}` : null,
            'aria-controls': M,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !t.canDecrement,
            onPressStart: eh
        });
    return {
        groupProps: {
            ...$,
            role: 'group',
            'aria-disabled': s,
            'aria-invalid': es ? 'true' : void 0
        },
        labelProps: ec,
        inputProps: ef,
        incrementButtonProps: eT,
        decrementButtonProps: eg,
        errorMessageProps: eE,
        descriptionProps: e_,
        isInvalid: es,
        validationErrors: el,
        validationDetails: eu
    };
}
j = {
    'ar-AE': r.Z,
    'bg-BG': i.Z,
    'cs-CZ': a.Z,
    'da-DK': o.Z,
    'de-DE': s.Z,
    'el-GR': l.Z,
    'en-US': u.Z,
    'es-ES': c.Z,
    'et-EE': d.Z,
    'fi-FI': _.Z,
    'fr-FR': E.Z,
    'he-IL': f.Z,
    'hr-HR': h.Z,
    'hu-HU': p.Z,
    'it-IT': m.Z,
    'ja-JP': I.Z,
    'ko-KR': T.Z,
    'lt-LT': g.Z,
    'lv-LV': S.Z,
    'nb-NO': A.Z,
    'nl-NL': v.Z,
    'pl-PL': N.Z,
    'pt-BR': O.Z,
    'pt-PT': R.Z,
    'ro-RO': C.Z,
    'ru-RU': y.Z,
    'sk-SK': b.Z,
    'sl-SI': L.Z,
    'sr-SP': D.Z,
    'sv-SE': M.Z,
    'tr-TR': P.Z,
    'uk-UA': U.Z,
    'zh-CN': w.Z,
    'zh-TW': x.Z
};
