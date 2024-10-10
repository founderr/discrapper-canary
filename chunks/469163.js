n.d(t, {
    G: function () {
        return H;
    }
});
var r = n(127118),
    i = n(258008),
    a = n(536411),
    s = n(92981),
    o = n(129370),
    l = n(695249),
    u = n(226259),
    c = n(700830),
    d = n(108968),
    _ = n(859455),
    E = n(213693),
    f = n(563725),
    h = n(543179),
    p = n(2022),
    I = n(859974),
    m = n(993770),
    T = n(98426),
    S = n(842979),
    g = n(501422),
    A = n(852785),
    N = n(286507),
    R = n(995747),
    O = n(297418),
    v = n(229619),
    C = n(625895),
    L = n(290578),
    y = n(993518),
    D = n(440586),
    b = n(763677),
    M = n(724777),
    P = n(200045),
    U = n(938450),
    w = n(498184),
    x = n(951308),
    G = n(770003),
    k = n(470079),
    B = n(182823),
    F = n(616073),
    V = {};
function H(e) {
    var t;
    let n = (0, k.useRef)(),
        { value: r, textValue: i, minValue: a, maxValue: s, isDisabled: o, isReadOnly: l, isRequired: u, onIncrement: c, onIncrementPage: d, onDecrement: _, onDecrementPage: E, onDecrementToMin: f, onIncrementToMax: h } = e;
    let p = (0, F.qb)((t = V) && t.__esModule ? t.default : t, '@react-aria/spinbutton'),
        I = () => clearTimeout(n.current);
    (0, k.useEffect)(() => () => I(), []);
    let m = (0, k.useRef)(!1),
        T = () => {
            m.current = !0;
        },
        S = () => {
            m.current = !1;
        };
    (i = '' === i ? p.format('Empty') : (i || `${r}`).replace('-', '\u2212')),
        (0, k.useEffect)(() => {
            m.current && ((0, G.gb)('assertive'), (0, G.xQ)(i, 'assertive'));
        }, [i]);
    let g = (0, B.iW)((e) => {
            I(),
                c(),
                (n.current = window.setTimeout(() => {
                    (isNaN(s) || isNaN(r) || r < s) && g(60);
                }, e));
        }),
        A = (0, B.iW)((e) => {
            I(),
                _(),
                (n.current = window.setTimeout(() => {
                    (isNaN(a) || isNaN(r) || r > a) && A(60);
                }, e));
        }),
        N = (e) => {
            e.preventDefault();
        },
        { addGlobalListener: R, removeAllGlobalListeners: O } = (0, B.xi)();
    return {
        spinButtonProps: {
            role: 'spinbutton',
            'aria-valuenow': isNaN(r) ? null : r,
            'aria-valuetext': i,
            'aria-valuemin': a,
            'aria-valuemax': s,
            'aria-disabled': o || null,
            'aria-readonly': l || null,
            'aria-required': u || null,
            onKeyDown: (e) => {
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && !l)
                    switch (e.key) {
                        case 'PageUp':
                            if (d) {
                                e.preventDefault(), d();
                                break;
                            }
                        case 'ArrowUp':
                        case 'Up':
                            c && (e.preventDefault(), c());
                            break;
                        case 'PageDown':
                            if (E) {
                                e.preventDefault(), E();
                                break;
                            }
                        case 'ArrowDown':
                        case 'Down':
                            _ && (e.preventDefault(), _());
                            break;
                        case 'Home':
                            f && (e.preventDefault(), f());
                            break;
                        case 'End':
                            h && (e.preventDefault(), h());
                    }
            },
            onFocus: T,
            onBlur: S
        },
        incrementButtonProps: {
            onPressStart: () => {
                g(400), R(window, 'contextmenu', N);
            },
            onPressEnd: () => {
                I(), O();
            },
            onFocus: T,
            onBlur: S
        },
        decrementButtonProps: {
            onPressStart: () => {
                A(400), R(window, 'contextmenu', N);
            },
            onPressEnd: () => {
                I(), O();
            },
            onFocus: T,
            onBlur: S
        }
    };
}
V = {
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
