n.d(t, {
    G: function () {
        return H;
    }
});
var r = n(127118),
    i = n(258008),
    a = n(536411),
    o = n(92981),
    s = n(129370),
    l = n(695249),
    u = n(226259),
    c = n(700830),
    d = n(108968),
    _ = n(859455),
    E = n(213693),
    f = n(563725),
    h = n(543179),
    p = n(2022),
    m = n(859974),
    I = n(993770),
    T = n(98426),
    g = n(842979),
    S = n(501422),
    A = n(852785),
    v = n(286507),
    N = n(995747),
    O = n(297418),
    R = n(229619),
    C = n(625895),
    y = n(290578),
    L = n(993518),
    b = n(440586),
    D = n(763677),
    M = n(724777),
    P = n(200045),
    U = n(938450),
    w = n(498184),
    x = n(951308),
    G = n(770003),
    k = n(470079),
    B = n(182823),
    F = n(616073);
function Z(e) {
    return e && e.__esModule ? e.default : e;
}
var V = {};
function H(e) {
    let t = (0, k.useRef)(),
        { value: n, textValue: r, minValue: i, maxValue: a, isDisabled: o, isReadOnly: s, isRequired: l, onIncrement: u, onIncrementPage: c, onDecrement: d, onDecrementPage: _, onDecrementToMin: E, onIncrementToMax: f } = e,
        h = (0, F.qb)(Z(V), '@react-aria/spinbutton'),
        p = () => clearTimeout(t.current);
    (0, k.useEffect)(() => () => p(), []);
    let m = (e) => {
            if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !s)
                switch (e.key) {
                    case 'PageUp':
                        if (c) {
                            e.preventDefault(), c();
                            break;
                        }
                    case 'ArrowUp':
                    case 'Up':
                        u && (e.preventDefault(), u());
                        break;
                    case 'PageDown':
                        if (_) {
                            e.preventDefault(), _();
                            break;
                        }
                    case 'ArrowDown':
                    case 'Down':
                        d && (e.preventDefault(), d());
                        break;
                    case 'Home':
                        E && (e.preventDefault(), E());
                        break;
                    case 'End':
                        f && (e.preventDefault(), f());
                }
        },
        I = (0, k.useRef)(!1),
        T = () => {
            I.current = !0;
        },
        g = () => {
            I.current = !1;
        };
    (r = '' === r ? h.format('Empty') : (r || `${n}`).replace('-', '\u2212')),
        (0, k.useEffect)(() => {
            I.current && ((0, G.gb)('assertive'), (0, G.xQ)(r, 'assertive'));
        }, [r]);
    let S = (0, B.iW)((e) => {
            p(),
                u(),
                (t.current = window.setTimeout(() => {
                    (isNaN(a) || isNaN(n) || n < a) && S(60);
                }, e));
        }),
        A = (0, B.iW)((e) => {
            p(),
                d(),
                (t.current = window.setTimeout(() => {
                    (isNaN(i) || isNaN(n) || n > i) && A(60);
                }, e));
        }),
        v = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: N, removeAllGlobalListeners: O } = (0, B.xi)();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': isNaN(n) ? null : n,
            'aria-valuetext': r,
            'aria-valuemin': i,
            'aria-valuemax': a,
            'aria-disabled': o || null,
            'aria-readonly': s || null,
            'aria-required': l || null,
            onKeyDown: m,
            onFocus: T,
            onBlur: g
        },
        incrementButtonProps: {
            onPressStart: () => {
                S(400), N(window, 'contextmenu', v);
            },
            onPressEnd: () => {
                p(), O();
            },
            onFocus: T,
            onBlur: g
        },
        decrementButtonProps: {
            onPressStart: () => {
                A(400), N(window, 'contextmenu', v);
            },
            onPressEnd: () => {
                p(), O();
            },
            onFocus: T,
            onBlur: g
        }
    };
}
V = {
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
