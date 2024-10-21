n.d(t, {
    t: function () {
        return V;
    }
});
var r = n(992420),
    i = n(579515),
    a = n(53003),
    s = n(938568),
    o = n(609944),
    l = n(280919),
    u = n(770351),
    c = n(312423),
    d = n(793956),
    _ = n(379937),
    E = n(683562),
    f = n(321175),
    h = n(342406),
    p = n(554054),
    I = n(423800),
    m = n(417315),
    T = n(967442),
    S = n(478861),
    g = n(296681),
    A = n(553793),
    N = n(57277),
    R = n(120999),
    O = n(939479),
    v = n(97291),
    C = n(633474),
    L = n(414471),
    D = n(591552),
    y = n(465606),
    b = n(649169),
    M = n(229004),
    P = n(417992),
    U = n(716623),
    w = n(916866),
    x = n(456057),
    G = n(661763),
    k = n(649859),
    B = n(298397),
    F = {};
function V(e, t, n) {
    var r;
    let i = (0, k.qb)((r = F) && r.__esModule ? r.default : r, '@react-aria/searchfield'),
        { isDisabled: a, isReadOnly: s, onSubmit: o = () => {}, onClear: l, type: u = 'search' } = e,
        {
            labelProps: c,
            inputProps: d,
            descriptionProps: _,
            errorMessageProps: E,
            ...f
        } = (0, B.E)(
            {
                ...e,
                value: t.value,
                onChange: t.setValue,
                onKeyDown: s
                    ? e.onKeyDown
                    : (0, G.tS)((e) => {
                          let n = e.key;
                          'Enter' === n && e.preventDefault(), !a && !s && ('Enter' === n && o(t.value), 'Escape' === n && ('' === t.value ? e.continuePropagation() : (t.setValue(''), l && l())));
                      }, e.onKeyDown),
                type: u
            },
            n
        );
    return {
        labelProps: c,
        inputProps: {
            ...d,
            defaultValue: void 0
        },
        clearButtonProps: {
            'aria-label': i.format('Clear search'),
            excludeFromTabOrder: !0,
            preventFocusOnPress: !0,
            isDisabled: a || s,
            onPress: () => {
                t.setValue(''), l && l();
            },
            onPressStart: () => {
                var e;
                null === (e = n.current) || void 0 === e || e.focus();
            }
        },
        descriptionProps: _,
        errorMessageProps: E,
        ...f
    };
}
F = {
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
    'sk-SK': D.Z,
    'sl-SI': y.Z,
    'sr-SP': b.Z,
    'sv-SE': M.Z,
    'tr-TR': P.Z,
    'uk-UA': U.Z,
    'zh-CN': w.Z,
    'zh-TW': x.Z
};
