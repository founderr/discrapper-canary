n.d(t, {
    G: function () {
        return H;
    }
});
var r = n(288377),
    i = n(138073),
    a = n(665898),
    s = n(936031),
    o = n(698649),
    l = n(614529),
    u = n(836098),
    c = n(454516),
    d = n(394711),
    _ = n(177679),
    E = n(612617),
    f = n(186207),
    h = n(142197),
    p = n(55231),
    I = n(265839),
    m = n(175486),
    T = n(629053),
    S = n(890521),
    g = n(891873),
    A = n(695848),
    N = n(261978),
    R = n(917322),
    O = n(108901),
    v = n(591840),
    C = n(818727),
    L = n(437223),
    D = n(516544),
    y = n(193014),
    b = n(30728),
    M = n(384762),
    P = n(290731),
    U = n(341348),
    w = n(882645),
    x = n(788654),
    G = n(770003),
    k = n(192379),
    B = n(661763),
    F = n(649859),
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
    'sk-SK': D.Z,
    'sl-SI': y.Z,
    'sr-SP': b.Z,
    'sv-SE': M.Z,
    'tr-TR': P.Z,
    'uk-UA': U.Z,
    'zh-CN': w.Z,
    'zh-TW': x.Z
};
