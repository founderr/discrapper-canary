var r = n(47120);
var i = n(733860);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(392711),
    c = n.n(u),
    d = n(526629),
    _ = n(91192),
    E = n(946188),
    f = n(477690),
    h = n(481060),
    p = n(80932),
    m = n(351773),
    I = n(209613),
    T = n(313201),
    g = n(633302),
    S = n(176354),
    A = n(624138),
    v = n(981631),
    N = n(689938),
    O = n(731319);
let R = 20,
    C = 125,
    y = (0, T.hQ)(),
    b = E.Z.convert.fromCodePoint('1f44f'),
    L = (0, A.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    D = (0, A.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);
function M(e) {
    switch (E.Z.convert.toCodePoint(e)) {
        case '1f3fb':
            return N.Z.Messages.EMOJI_MODIFIER_LIGHT_SKIN_TONE;
        case '1f3fc':
            return N.Z.Messages.EMOJI_MODIFIER_MEDIUM_LIGHT_SKIN_TONE;
        case '1f3fd':
            return N.Z.Messages.EMOJI_MODIFIER_MEDIUM_SKIN_TONE;
        case '1f3fe':
            return N.Z.Messages.EMOJI_MODIFIER_MEDIUM_DARK_SKIN_TONE;
        case '1f3ff':
            return N.Z.Messages.EMOJI_MODIFIER_DARK_SKIN_TONE;
        default:
            return N.Z.Messages.EMOJI_MODIFIER_NONE;
    }
}
let P = (e) => {
        let { fade: t, surrogate: n, onClick: r, delay: i, index: o } = e,
            s = (0, _.JA)('item-'.concat(o)),
            l = S.ZP.getURL(b + n),
            u = (0, h.useSpring)(
                {
                    opacity: 1,
                    from: { opacity: t ? 0 : 1 },
                    delay: i
                },
                'animate-always'
            );
        return (0, a.jsx)(h.Clickable, {
            ...s,
            role: 'option',
            'aria-selected': 0 === o,
            onClick: () => r(n),
            className: O.diversityEmojiItem,
            children: (0, a.jsx)(d.animated.div, {
                'aria-label': M(n),
                className: O.diversityEmojiItemImage,
                style: {
                    backgroundImage: 'url("'.concat(l, '")'),
                    ...u
                }
            })
        });
    },
    U = (e) => {
        let { id: t, selectedSurrogate: n, onClick: r, hasTabWrapper: i } = e,
            s = (0, I.Z)('diversity'),
            u = (0, h.useSpring)({
                height: (D + 2 * L) * (g.gw.length + 1),
                from: { height: D },
                config: { duration: C }
            });
        o.useEffect(() => {
            s.focusFirstVisibleItem();
        }, [s]);
        let E = ['', ...g.gw];
        return (
            c().remove(E, (e) => e === n),
            E.unshift(n),
            (0, a.jsx)(_.bG, {
                navigator: s,
                children: (0, a.jsx)(_.SJ, {
                    children: (e) => {
                        let { ref: n, ...o } = e;
                        return (0, a.jsx)(d.animated.div, {
                            ...o,
                            id: t,
                            ref: n,
                            className: l()(O.diversitySelectorOptions, { [O.diversitySelectorOptionsHasTabWrapper]: i }),
                            style: u,
                            role: 'listbox',
                            children: E.map((e, t) =>
                                (0, a.jsx)(
                                    P,
                                    {
                                        index: t,
                                        fade: 0 !== t,
                                        delay: t * R,
                                        surrogate: e,
                                        onClick: r
                                    },
                                    t
                                )
                            )
                        });
                    }
                })
            })
        );
    },
    w = (e) => {
        let { searchBarRef: t, selectedSurrogate: n, className: r, hasTabWrapper: i } = e,
            s = S.ZP.getURL(b + n),
            [l, u] = o.useState(!1),
            c = (0, m.Z)(null, () => u(!1)),
            d = o.useRef(null),
            _ = () => {
                u(!0);
            },
            E = (e) => {
                e.keyCode === v.yXg.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
            },
            f = (e) => {
                var n;
                (0, p.t0)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus();
            };
        return (0, a.jsxs)('div', {
            ref: c,
            className: r,
            children: [
                (0, a.jsx)(h.Clickable, {
                    innerRef: d,
                    className: O.diversitySelectorButton,
                    onClick: _,
                    'aria-label': N.Z.Messages.EMOJI_MODIFIER_MENU_BUTTON,
                    'aria-haspopup': !0,
                    'aria-expanded': l,
                    'aria-controls': y,
                    tabIndex: l ? -1 : 0,
                    children: (0, a.jsx)('div', {
                        className: O.diversityEmojiItemImage,
                        style: { backgroundImage: 'url("'.concat(s, '")') }
                    })
                }),
                l
                    ? (0, a.jsx)('div', {
                          onKeyDown: E,
                          children: (0, a.jsx)(U, {
                              id: y,
                              hasTabWrapper: i,
                              selectedSurrogate: n,
                              onClick: f
                          })
                      })
                    : null
            ]
        });
    };
t.Z = w;
