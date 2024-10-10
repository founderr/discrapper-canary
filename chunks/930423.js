n.d(t, {
    I: function () {
        return j;
    }
});
var r = n(939421),
    i = n(434514),
    a = n(609059),
    s = n(3587),
    o = n(793766),
    l = n(267480),
    u = n(227241),
    c = n(613488),
    d = n(575912),
    _ = n(575697),
    E = n(378266),
    f = n(674360),
    h = n(918203),
    p = n(620018),
    I = n(519718),
    m = n(648980),
    T = n(576094),
    S = n(397250),
    g = n(617451),
    A = n(376425),
    N = n(334268),
    R = n(543659),
    O = n(927105),
    v = n(635311),
    C = n(705665),
    L = n(517898),
    y = n(694147),
    D = n(443992),
    b = n(978038),
    M = n(261248),
    P = n(41410),
    U = n(58463),
    w = n(352021),
    x = n(170781),
    G = n(182823),
    k = n(470079),
    B = n(201284),
    F = n(612001),
    V = n(640900),
    H = n(616073),
    Z = n(469163),
    Y = {};
function j(e, t, n) {
    var r;
    let i,
        { id: a, decrementAriaLabel: s, incrementAriaLabel: o, isDisabled: l, isReadOnly: u, isRequired: c, minValue: d, maxValue: _, autoFocus: E, label: f, formatOptions: h, onBlur: p = () => {}, onFocus: I, onFocusChange: m, onKeyDown: T, onKeyUp: S, description: g, errorMessage: A, ...N } = e,
        { increment: R, incrementToMax: O, decrement: v, decrementToMin: C, numberValue: L, inputValue: y, commit: D, commitValidation: b } = t;
    let M = (0, H.qb)((r = Y) && r.__esModule ? r.default : r, '@react-aria/numberfield'),
        P = (0, G.Me)(a),
        { focusProps: U } = (0, F.KK)({
            onBlur() {
                D();
            }
        }),
        w = (0, H.Ux)(h),
        x = (0, k.useMemo)(() => w.resolvedOptions(), [w]),
        j = (0, H.Ux)({
            ...h,
            currencySign: void 0
        }),
        W = (0, k.useMemo)(() => (isNaN(L) ? '' : j.format(L)), [j, L]),
        {
            spinButtonProps: K,
            incrementButtonProps: z,
            decrementButtonProps: q
        } = (0, Z.G)({
            isDisabled: l,
            isReadOnly: u,
            isRequired: c,
            maxValue: _,
            minValue: d,
            onIncrement: R,
            onIncrementToMax: O,
            onDecrement: v,
            onDecrementToMin: C,
            value: L,
            textValue: W
        }),
        [Q, X] = (0, k.useState)(!1),
        { focusWithinProps: $ } = (0, F.L_)({
            isDisabled: l,
            onFocusWithinChange: X
        }),
        J = (0, k.useCallback)(
            (e) => {
                !(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) && (e.deltaY > 0 ? R() : e.deltaY < 0 && v());
            },
            [v, R]
        ),
        ee = l || u || !Q;
    (0, F.y0)(
        {
            onScroll: J,
            isDisabled: ee
        },
        n
    );
    let et = x.maximumFractionDigits > 0,
        en = isNaN(t.minValue) || t.minValue < 0,
        er = 'numeric';
    (0, G.IN)() ? (en ? (er = 'text') : et && (er = 'decimal')) : (0, G.Dt)() && (en ? (er = 'numeric') : et && (er = 'decimal'));
    let ei = (0, G.zL)(e),
        ea = (0, k.useCallback)(
            (e) => {
                'Enter' === e.key ? (D(), b()) : e.continuePropagation();
            },
            [D, b]
        ),
        { isInvalid: es, validationErrors: eo, validationDetails: el } = t.displayValidation,
        {
            labelProps: eu,
            inputProps: ec,
            descriptionProps: ed,
            errorMessageProps: e_
        } = (0, V.h)(
            {
                ...N,
                ...ei,
                name: void 0,
                label: f,
                autoFocus: E,
                isDisabled: l,
                isReadOnly: u,
                isRequired: c,
                validate: void 0,
                [B.tL]: t,
                value: y,
                defaultValue: void 0,
                autoComplete: 'off',
                'aria-label': e['aria-label'] || null,
                'aria-labelledby': e['aria-labelledby'] || null,
                id: P,
                type: 'text',
                inputMode: er,
                onChange: (e) => {
                    t.validate(e) && t.setInputValue(e);
                },
                onBlur: p,
                onFocus: I,
                onFocusChange: m,
                onKeyDown: (0, k.useMemo)(() => (0, G.tS)(ea, T), [ea, T]),
                onKeyUp: S,
                description: g,
                errorMessage: A
            },
            t,
            n
        );
    (0, G.y$)(n, t.numberValue, t.setNumberValue);
    let eE = (0, G.dG)(K, U, ec, {
        role: null,
        'aria-roledescription': (0, G.gn)() ? null : M.format('numberField'),
        'aria-valuemax': null,
        'aria-valuemin': null,
        'aria-valuenow': null,
        'aria-valuetext': null,
        autoCorrect: 'off',
        spellCheck: 'false'
    });
    'native' === e.validationBehavior && (eE['aria-required'] = void 0);
    let ef = (e) => {
            document.activeElement !== n.current && ('mouse' === e.pointerType ? n.current.focus() : e.target.focus());
        },
        eh = e['aria-label'] || ('string' == typeof e.label ? e.label : '');
    !eh && (i = null != e.label ? eu.id : e['aria-labelledby']);
    let ep = (0, G.Me)(),
        eI = (0, G.Me)(),
        em = (0, G.dG)(z, {
            'aria-label': o || M.format('increase', { fieldLabel: eh }).trim(),
            id: i && !o ? ep : null,
            'aria-labelledby': i && !o ? `${ep} ${i}` : null,
            'aria-controls': P,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !t.canIncrement,
            onPressStart: ef
        }),
        eT = (0, G.dG)(q, {
            'aria-label': s || M.format('decrease', { fieldLabel: eh }).trim(),
            id: i && !s ? eI : null,
            'aria-labelledby': i && !s ? `${eI} ${i}` : null,
            'aria-controls': P,
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            allowFocusWhenDisabled: !0,
            isDisabled: !t.canDecrement,
            onPressStart: ef
        });
    return {
        groupProps: {
            ...$,
            role: 'group',
            'aria-disabled': l,
            'aria-invalid': es ? 'true' : void 0
        },
        labelProps: eu,
        inputProps: eE,
        incrementButtonProps: em,
        decrementButtonProps: eT,
        errorMessageProps: e_,
        descriptionProps: ed,
        isInvalid: es,
        validationErrors: eo,
        validationDetails: el
    };
}
Y = {
    'ar-AE': r.Z,
    'bg-BG': i.Z,
    'cs-CZ': a.Z,
    'da-DK': s.Z,
    'de-DE': o.Z,
    'el-GR': l.Z,
    'en-US': u.Z,
    'es-ES': c.Z,
    'et-EE': d.Z,
    'fi-FI': _.Z,
    'fr-FR': E.Z,
    'he-IL': f.Z,
    'hr-HR': h.Z,
    'hu-HU': p.Z,
    'it-IT': I.Z,
    'ja-JP': m.Z,
    'ko-KR': T.Z,
    'lt-LT': S.Z,
    'lv-LV': g.Z,
    'nb-NO': A.Z,
    'nl-NL': N.Z,
    'pl-PL': R.Z,
    'pt-BR': O.Z,
    'pt-PT': v.Z,
    'ro-RO': C.Z,
    'ru-RU': L.Z,
    'sk-SK': y.Z,
    'sl-SI': D.Z,
    'sr-SP': b.Z,
    'sv-SE': M.Z,
    'tr-TR': P.Z,
    'uk-UA': U.Z,
    'zh-CN': w.Z,
    'zh-TW': x.Z
};
