n.d(t, {
    E: function () {
        return Q;
    }
});
var r = n(235003),
    i = n(385201),
    a = n(875889),
    o = n(867377),
    s = n(502651),
    l = n(364920),
    u = n(478943),
    c = n(518034),
    d = n(706015),
    _ = n(974046),
    E = n(554520),
    f = n(726249),
    h = n(395861),
    p = n(953523),
    m = n(706440),
    I = n(788675),
    T = n(591995),
    g = n(885723),
    S = n(580917),
    A = n(773959),
    v = n(168147),
    N = n(408291),
    O = n(396423),
    R = n(701809),
    C = n(340132),
    y = n(355180),
    L = n(778341),
    b = n(368480),
    D = n(453440),
    M = n(910188),
    P = n(733710),
    U = n(213789),
    w = n(814137),
    x = n(574573),
    G = n(770003),
    k = n(795250),
    B = n(753264),
    F = n(182823),
    Z = n(470079),
    V = n(275857),
    H = n(148836),
    Y = n(201284),
    j = n(616073),
    W = n(370225),
    K = n(640900);
function z(e) {
    return e && e.__esModule ? e.default : e;
}
var q = {};
function Q(e, t) {
    var n, r;
    let { buttonRef: i, popoverRef: a, inputRef: o, listBoxRef: s, keyboardDelegate: l, shouldFocusWrap: u, isReadOnly: c, isDisabled: d } = e,
        _ = (0, j.qb)(z(q), '@react-aria/combobox'),
        { menuTriggerProps: E, menuProps: f } = (0, W.u4)(
            {
                type: 'listbox',
                isDisabled: d || c
            },
            t,
            i
        );
    (0, B.Oj).set(t, { id: f.id });
    let h = (0, Z.useMemo)(() => l || new H.dp(t.collection, t.disabledKeys, s), [l, t.collection, t.disabledKeys, s]),
        { collectionProps: p } = (0, H.gq)({
            selectionManager: t.selectionManager,
            keyboardDelegate: h,
            disallowTypeAhead: !0,
            disallowEmptySelection: !0,
            shouldFocusWrap: u,
            ref: o,
            isVirtualized: !0
        }),
        m = (0, F.tv)(),
        I = (n) => {
            switch (n.key) {
                case 'Enter':
                case 'Tab':
                    if ((t.isOpen && 'Enter' === n.key && n.preventDefault(), t.isOpen && null != t.selectionManager.focusedKey && t.selectionManager.isLink(t.selectionManager.focusedKey))) {
                        if ('Enter' === n.key) {
                            let e = s.current.querySelector(`[data-key="${CSS.escape(t.selectionManager.focusedKey.toString())}"]`);
                            e instanceof HTMLAnchorElement && m.open(e, n);
                        }
                        t.close();
                    } else t.commit();
                    break;
                case 'Escape':
                    (null !== t.selectedKey || '' === t.inputValue || e.allowsCustomValue) && n.continuePropagation(), t.revert();
                    break;
                case 'ArrowDown':
                    t.open('first', 'manual');
                    break;
                case 'ArrowUp':
                    t.open('last', 'manual');
                    break;
                case 'ArrowLeft':
                case 'ArrowRight':
                    t.selectionManager.setFocusedKey(null);
            }
        },
        T = (n) => {
            var r;
            !(n.relatedTarget === (null == i ? void 0 : i.current) || (null === (r = a.current) || void 0 === r ? void 0 : r.contains(n.relatedTarget))) && (e.onBlur && e.onBlur(n), t.setFocused(!1));
        },
        g = (n) => {
            !t.isFocused && (e.onFocus && e.onFocus(n), t.setFocused(!0));
        },
        { isInvalid: S, validationErrors: A, validationDetails: v } = t.displayValidation,
        {
            labelProps: N,
            inputProps: O,
            descriptionProps: R,
            errorMessageProps: C
        } = (0, K.E)(
            {
                ...e,
                onChange: t.setInputValue,
                onKeyDown: c ? e.onKeyDown : (0, F.tS)(t.isOpen && p.onKeyDown, I, e.onKeyDown),
                onBlur: T,
                value: t.inputValue,
                onFocus: g,
                autoComplete: 'off',
                validate: void 0,
                [Y.tL]: t
            },
            o
        ),
        y = (e) => {
            'touch' === e.pointerType && (o.current.focus(), t.toggle(null, 'manual'));
        },
        L = (e) => {
            'touch' !== e.pointerType && (o.current.focus(), t.toggle('keyboard' === e.pointerType || 'virtual' === e.pointerType ? 'first' : null, 'manual'));
        },
        b = (0, F.bE)({
            id: E.id,
            'aria-label': _.format('buttonLabel'),
            'aria-labelledby': e['aria-labelledby'] || N.id
        }),
        D = (0, F.bE)({
            id: f.id,
            'aria-label': _.format('listboxLabel'),
            'aria-labelledby': e['aria-labelledby'] || N.id
        }),
        M = (0, Z.useRef)(0),
        P = (e) => {
            if (d || c) return;
            if (e.timeStamp - M.current < 500) {
                e.preventDefault(), o.current.focus();
                return;
            }
            let n = e.target.getBoundingClientRect(),
                r = e.changedTouches[0],
                i = Math.ceil(n.left + 0.5 * n.width),
                a = Math.ceil(n.top + 0.5 * n.height);
            r.clientX === i && r.clientY === a && (e.preventDefault(), o.current.focus(), t.toggle(null, 'manual'), (M.current = e.timeStamp));
        },
        U = null != t.selectionManager.focusedKey && t.isOpen ? t.collection.getItem(t.selectionManager.focusedKey) : void 0,
        w = null !== (n = null == U ? void 0 : U.parentKey) && void 0 !== n ? n : null,
        x = null !== (r = t.selectionManager.focusedKey) && void 0 !== r ? r : null,
        Q = (0, Z.useRef)(w),
        X = (0, Z.useRef)(x);
    (0, Z.useEffect)(() => {
        if ((0, F.ad)() && null != U && x !== X.current) {
            let e = t.selectionManager.isSelected(x),
                n = null != w ? t.collection.getItem(w) : null,
                r = (null == n ? void 0 : n['aria-label']) || ('string' == typeof (null == n ? void 0 : n.rendered) ? n.rendered : '') || '',
                i = _.format('focusAnnouncement', {
                    isGroupChange: n && w !== Q.current,
                    groupTitle: r,
                    groupCount: n ? [...(0, V._P)(n, t.collection)].length : 0,
                    optionText: U['aria-label'] || U.textValue || '',
                    isSelected: e
                });
            (0, G.xQ)(i);
        }
        (Q.current = w), (X.current = x);
    });
    let $ = (0, V.is)(t.collection),
        J = (0, Z.useRef)($),
        ee = (0, Z.useRef)(t.isOpen);
    (0, Z.useEffect)(() => {
        let e = t.isOpen !== ee.current && (null == t.selectionManager.focusedKey || (0, F.ad)());
        if (t.isOpen && (e || $ !== J.current)) {
            let e = _.format('countAnnouncement', { optionCount: $ });
            (0, G.xQ)(e);
        }
        (J.current = $), (ee.current = t.isOpen);
    });
    let et = (0, Z.useRef)(t.selectedKey);
    return (
        (0, Z.useEffect)(() => {
            if ((0, F.ad)() && t.isFocused && t.selectedItem && t.selectedKey !== et.current) {
                let e = t.selectedItem['aria-label'] || t.selectedItem.textValue || '',
                    n = _.format('selectedAnnouncement', { optionText: e });
                (0, G.xQ)(n);
            }
            et.current = t.selectedKey;
        }),
        (0, Z.useEffect)(() => {
            if (t.isOpen) return (0, k.RP)([o.current, a.current]);
        }, [t.isOpen, o, a]),
        {
            labelProps: N,
            buttonProps: {
                ...E,
                ...b,
                excludeFromTabOrder: !0,
                onPress: y,
                onPressStart: L,
                isDisabled: d || c
            },
            inputProps: (0, F.dG)(O, {
                role: 'combobox',
                'aria-expanded': E['aria-expanded'],
                'aria-controls': t.isOpen ? f.id : void 0,
                'aria-autocomplete': 'list',
                'aria-activedescendant': U ? (0, B.x3)(t, U.key) : void 0,
                onTouchEnd: P,
                autoCorrect: 'off',
                spellCheck: 'false'
            }),
            listBoxProps: (0, F.dG)(f, D, {
                autoFocus: t.focusStrategy,
                shouldUseVirtualFocus: !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                linkBehavior: 'selection'
            }),
            descriptionProps: R,
            errorMessageProps: C,
            isInvalid: S,
            validationErrors: A,
            validationDetails: v
        }
    );
}
q = {
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
    'sk-SK': L.Z,
    'sl-SI': b.Z,
    'sr-SP': D.Z,
    'sv-SE': M.Z,
    'tr-TR': P.Z,
    'uk-UA': U.Z,
    'zh-CN': w.Z,
    'zh-TW': x.Z
};
