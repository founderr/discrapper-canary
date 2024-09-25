n.d(t, {
    H9: function () {
        return K;
    },
    iX: function () {
        return z;
    },
    u4: function () {
        return j;
    },
    x7: function () {
        return q;
    }
});
var r = n(488745),
    i = n(478741),
    a = n(833442),
    o = n(278448),
    s = n(996244),
    l = n(367890),
    u = n(351931),
    c = n(850565),
    d = n(346957),
    _ = n(815915),
    E = n(970151),
    f = n(311899),
    h = n(831280),
    p = n(221022),
    m = n(623226),
    I = n(66099),
    T = n(130196),
    g = n(739050),
    S = n(985265),
    A = n(169794),
    v = n(301485),
    N = n(151593),
    O = n(558254),
    R = n(279465),
    C = n(134945),
    y = n(36737),
    b = n(884147),
    L = n(696421),
    D = n(623126),
    M = n(800889),
    P = n(135858),
    U = n(959736),
    w = n(103878),
    x = n(317141),
    G = n(182823),
    k = n(616073),
    B = n(612001),
    F = n(795250),
    Z = n(148836),
    V = n(275857);
function H(e) {
    return e && e.__esModule ? e.default : e;
}
n(470079);
var Y = {};
function j(e, t, n) {
    let { type: r = 'menu', isDisabled: i, trigger: a = 'press' } = e,
        o = (0, G.Me)(),
        { triggerProps: s, overlayProps: l } = (0, F.IB)({ type: r }, t, n),
        u = (e) => {
            if (!i) {
                if (('longPress' !== a || e.altKey) && n && n.current)
                    switch (e.key) {
                        case 'Enter':
                        case ' ':
                            if ('longPress' === a) return;
                        case 'ArrowDown':
                            !('continuePropagation' in e) && e.stopPropagation(), e.preventDefault(), t.toggle('first');
                            break;
                        case 'ArrowUp':
                            !('continuePropagation' in e) && e.stopPropagation(), e.preventDefault(), t.toggle('last');
                            break;
                        default:
                            'continuePropagation' in e && e.continuePropagation();
                    }
            }
        },
        c = (0, k.qb)(H(Y), '@react-aria/menu'),
        { longPressProps: d } = (0, B.TA)({
            isDisabled: i || 'longPress' !== a,
            accessibilityDescription: c.format('longPressMessage'),
            onLongPressStart() {
                t.close();
            },
            onLongPress() {
                t.open('first');
            }
        }),
        _ = {
            onPressStart(e) {
                'touch' !== e.pointerType && 'keyboard' !== e.pointerType && !i && t.toggle('virtual' === e.pointerType ? 'first' : null);
            },
            onPress(e) {
                'touch' === e.pointerType && !i && t.toggle();
            }
        };
    return (
        delete s.onPress,
        {
            menuTriggerProps: {
                ...s,
                ...('press' === a ? _ : d),
                id: o,
                onKeyDown: u
            },
            menuProps: {
                ...l,
                'aria-labelledby': o,
                autoFocus: t.focusStrategy || !0,
                onClose: t.close
            }
        }
    );
}
Y = {
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
let W = new WeakMap();
function K(e, t, n) {
    let { shouldFocusWrap: r = !0, onKeyDown: i, onKeyUp: a, ...o } = e;
    !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let s = (0, G.zL)(e, { labelable: !0 }),
        { listProps: l } = (0, Z._t)({
            ...o,
            ref: n,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            shouldFocusWrap: r,
            linkBehavior: 'override'
        });
    return (
        W.set(t, {
            onClose: e.onClose,
            onAction: e.onAction
        }),
        {
            menuProps: (0, G.dG)(
                s,
                {
                    onKeyDown: i,
                    onKeyUp: a
                },
                {
                    role: 'menu',
                    ...l,
                    onKeyDown: (e) => {
                        'Escape' !== e.key && l.onKeyDown(e);
                    }
                }
            )
        }
    );
}
function z(e, t, n) {
    var r, i, a;
    let { key: o, closeOnSelect: s, isVirtualized: l, 'aria-haspopup': u, onPressStart: c, onPressUp: d, onPress: _, onPressChange: E, onPressEnd: f, onHoverStart: h, onHoverChange: p, onHoverEnd: m, onKeyDown: I, onKeyUp: T, onFocus: g, onFocusChange: S, onBlur: A } = e,
        v = !!u,
        N = null !== (i = e.isDisabled) && void 0 !== i ? i : t.disabledKeys.has(o),
        O = null !== (a = e.isSelected) && void 0 !== a ? a : t.selectionManager.isSelected(o),
        R = W.get(t),
        C = e.onClose || R.onClose,
        y = v ? () => {} : e.onAction || R.onAction,
        b = (0, G.tv)(),
        L = (e) => {
            y && y(o), e.target instanceof HTMLAnchorElement && b.open(e.target, e);
        },
        D = 'menuitem';
    !v && ('single' === t.selectionManager.selectionMode ? (D = 'menuitemradio') : 'multiple' === t.selectionManager.selectionMode && (D = 'menuitemcheckbox'));
    let M = (0, G.mp)(),
        P = (0, G.mp)(),
        U = (0, G.mp)(),
        w = {
            'aria-disabled': N || void 0,
            role: D,
            'aria-label': e['aria-label'],
            'aria-labelledby': M,
            'aria-describedby': [P, U].filter(Boolean).join(' ') || void 0,
            'aria-controls': e['aria-controls'],
            'aria-haspopup': u,
            'aria-expanded': e['aria-expanded']
        };
    'none' !== t.selectionManager.selectionMode && !v && (w['aria-checked'] = O);
    let x = t.collection.getItem(o);
    l && ((w['aria-posinset'] = null == x ? void 0 : x.index), (w['aria-setsize'] = (0, V.is)(t.collection)));
    let k = (e) => {
            'keyboard' === e.pointerType && L(e), null == c || c(e);
        },
        F = (e) => {
            'keyboard' !== e.pointerType && (L(e), !v && C && (null != s ? s : 'multiple' !== t.selectionManager.selectionMode || t.selectionManager.isLink(o)) && C()), null == d || d(e);
        },
        { itemProps: H, isFocused: Y } = (0, Z.Cs)({
            selectionManager: t.selectionManager,
            key: o,
            ref: n,
            shouldSelectOnPressUp: !0,
            allowsDifferentPressOrigin: !0,
            linkBehavior: 'none'
        }),
        { pressProps: j, isPressed: K } = (0, B.r7)({
            onPressStart: k,
            onPress: _,
            onPressUp: F,
            onPressChange: E,
            onPressEnd: f,
            isDisabled: N
        }),
        { hoverProps: z } = (0, B.XI)({
            isDisabled: N,
            onHoverStart(e) {
                !(0, B.E)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(o)), null == h || h(e);
            },
            onHoverChange: p,
            onHoverEnd: m
        }),
        { keyboardProps: q } = (0, B.v5)({
            onKeyDown: (e) => {
                if (e.repeat) {
                    e.continuePropagation();
                    return;
                }
                switch (e.key) {
                    case ' ':
                        !N && 'none' === t.selectionManager.selectionMode && !v && !1 !== s && C && C();
                        break;
                    case 'Enter':
                        !N && !1 !== s && !v && C && C();
                        break;
                    default:
                        !v && e.continuePropagation(), null == I || I(e);
                }
            },
            onKeyUp: T
        }),
        { focusProps: Q } = (0, B.KK)({
            onBlur: A,
            onFocus: g,
            onFocusChange: S
        }),
        X = (0, G.zL)(x.props, { isLink: !!(null == x ? void 0 : null === (r = x.props) || void 0 === r ? void 0 : r.href) });
    return (
        delete X.id,
        {
            menuItemProps: {
                ...w,
                ...(0, G.dG)(X, v ? { onFocus: H.onFocus } : H, j, z, q, Q),
                tabIndex: null != H.tabIndex ? -1 : void 0
            },
            labelProps: { id: M },
            descriptionProps: { id: P },
            keyboardShortcutProps: { id: U },
            isFocused: Y,
            isSelected: O,
            isPressed: K,
            isDisabled: N
        }
    );
}
function q(e) {
    let { heading: t, 'aria-label': n } = e,
        r = (0, G.Me)();
    return {
        itemProps: { role: 'presentation' },
        headingProps: t
            ? {
                  id: r,
                  role: 'presentation'
              }
            : {},
        groupProps: {
            role: 'group',
            'aria-label': n,
            'aria-labelledby': t ? r : void 0
        }
    };
}
let Q = 2,
    X = 50,
    $ = 1000,
    J = null;
function ee(e) {
    let { menuRef: t, submenuRef: n, isOpen: r, isDisabled: i } = e,
        a = $1Hnir$useRef(),
        o = $1Hnir$useRef(),
        s = $1Hnir$useRef(0),
        l = $1Hnir$useRef(),
        u = $1Hnir$useRef(),
        c = $1Hnir$useRef(),
        d = $1Hnir$useRef(2),
        [_, E] = $1Hnir$useState(!1),
        f = () => {
            n.current && ((o.current = n.current.getBoundingClientRect()), (c.current = void 0));
        };
    $1Hnir$useResizeObserver({
        ref: n,
        onResize: f
    });
    let h = () => {
            E(!1), (d.current = Q);
        },
        p = $1Hnir$useInteractionModality();
    $1Hnir$useEffect(() => {
        _ && t.current ? (t.current.style.pointerEvents = 'none') : (t.current.style.pointerEvents = '');
    }, [t, _]),
        $1Hnir$useEffect(() => {
            let e = n.current,
                _ = t.current;
            if (i || !e || !r || 'pointer' !== p) {
                h();
                return;
            }
            o.current = e.getBoundingClientRect();
            let f = (e) => {
                if ('touch' === e.pointerType || 'pen' === e.pointerType) return;
                let t = Date.now();
                if (t - s.current < X) return;
                clearTimeout(l.current), clearTimeout(u.current);
                let { clientX: n, clientY: r } = e;
                if (!a.current) {
                    a.current = {
                        x: n,
                        y: r
                    };
                    return;
                }
                if (!o.current) return;
                if ((!c.current && (c.current = n > o.current.right ? 'left' : 'right'), n < _.getBoundingClientRect().left || n > _.getBoundingClientRect().right || r < _.getBoundingClientRect().top || r > _.getBoundingClientRect().bottom)) {
                    h();
                    return;
                }
                let i = a.current.x,
                    f = a.current.y,
                    p = 'right' === c.current ? o.current.left - i : i - o.current.right,
                    m = Math.atan2(f - o.current.top, p) + J,
                    I = Math.atan2(f - o.current.bottom, p) - J,
                    T = Math.atan2(f - r, 'left' === c.current ? -(n - i) : n - i),
                    g = T < m && T > I;
                (d.current = g ? Math.min(d.current + 1, Q) : Math.max(d.current - 1, 0)),
                    d.current >= Q ? E(!0) : E(!1),
                    (s.current = t),
                    (a.current = {
                        x: n,
                        y: r
                    }),
                    g &&
                        (l.current = setTimeout(() => {
                            h(),
                                (u.current = setTimeout(() => {
                                    let e = document.elementFromPoint(n, r);
                                    e &&
                                        _.contains(e) &&
                                        e.dispatchEvent(
                                            new PointerEvent('pointerover', {
                                                bubbles: !0,
                                                cancelable: !0
                                            })
                                        );
                                }, 100));
                        }, $));
            };
            return (
                window.addEventListener('pointermove', f),
                () => {
                    window.removeEventListener('pointermove', f), clearTimeout(l.current), clearTimeout(u.current), (d.current = Q);
                }
            );
        }, [i, r, t, p, E, n]);
}
