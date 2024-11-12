n(47120), n(733860);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(100621),
    c = n(91192),
    d = n(336317),
    f = n(477690),
    _ = n(481060),
    p = n(80932),
    h = n(351773),
    m = n(209613),
    g = n(313201),
    E = n(633302),
    v = n(176354),
    I = n(624138),
    b = n(981631),
    S = n(388032),
    T = n(541836);
let y = (0, g.hQ)(),
    A = d.Z.convert.fromCodePoint('1f44f'),
    N = (0, I.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
    C = (0, I.Mg)(f.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE),
    R = (e) => {
        let { fade: t, surrogate: n, onClick: i, delay: a, index: s } = e,
            o = (0, c.JA)('item-'.concat(s)),
            l = v.ZP.getURL(A + n),
            f = (0, _.useSpring)(
                {
                    opacity: 1,
                    from: { opacity: t ? 0 : 1 },
                    delay: a
                },
                'animate-always'
            );
        return (0, r.jsx)(_.Clickable, {
            ...o,
            role: 'option',
            'aria-selected': 0 === s,
            onClick: () => i(n),
            className: T.diversityEmojiItem,
            children: (0, r.jsx)(u.animated.div, {
                'aria-label': (function (e) {
                    switch (d.Z.convert.toCodePoint(e)) {
                        case '1f3fb':
                            return S.intl.string(S.t.BVK5b2);
                        case '1f3fc':
                            return S.intl.string(S.t.xJWOKy);
                        case '1f3fd':
                            return S.intl.string(S.t['MB+T5u']);
                        case '1f3fe':
                            return S.intl.string(S.t.MODud3);
                        case '1f3ff':
                            return S.intl.string(S.t['0uzqsb']);
                        default:
                            return S.intl.string(S.t.bGN1o6);
                    }
                })(n),
                className: T.diversityEmojiItemImage,
                style: {
                    backgroundImage: 'url("'.concat(l, '")'),
                    ...f
                }
            })
        });
    },
    O = (e) => {
        let { id: t, selectedSurrogate: n, onClick: a, hasTabWrapper: o } = e,
            d = (0, m.Z)('diversity'),
            f = (0, _.useSpring)({
                height: (C + 2 * N) * (E.gw.length + 1),
                from: { height: C },
                config: { duration: 125 }
            });
        i.useEffect(() => {
            d.focusFirstVisibleItem();
        }, [d]);
        let p = ['', ...E.gw];
        return (
            l().remove(p, (e) => e === n),
            p.unshift(n),
            (0, r.jsx)(c.bG, {
                navigator: d,
                children: (0, r.jsx)(c.SJ, {
                    children: (e) => {
                        let { ref: n, ...i } = e;
                        return (0, r.jsx)(u.animated.div, {
                            ...i,
                            id: t,
                            ref: n,
                            className: s()(T.diversitySelectorOptions, { [T.diversitySelectorOptionsHasTabWrapper]: o }),
                            style: f,
                            role: 'listbox',
                            children: p.map((e, t) =>
                                (0, r.jsx)(
                                    R,
                                    {
                                        index: t,
                                        fade: 0 !== t,
                                        delay: 20 * t,
                                        surrogate: e,
                                        onClick: a
                                    },
                                    t
                                )
                            )
                        });
                    }
                })
            })
        );
    };
t.Z = (e) => {
    let { searchBarRef: t, selectedSurrogate: n, className: a, hasTabWrapper: s } = e,
        o = v.ZP.getURL(A + n),
        [l, u] = i.useState(!1),
        c = (0, h.Z)(null, () => u(!1)),
        d = i.useRef(null);
    return (0, r.jsxs)('div', {
        ref: c,
        className: a,
        children: [
            (0, r.jsx)(_.Clickable, {
                innerRef: d,
                className: T.diversitySelectorButton,
                onClick: () => {
                    u(!0);
                },
                'aria-label': S.intl.string(S.t.pAVHxc),
                'aria-haspopup': !0,
                'aria-expanded': l,
                'aria-controls': y,
                tabIndex: l ? -1 : 0,
                children: (0, r.jsx)('div', {
                    className: T.diversityEmojiItemImage,
                    style: { backgroundImage: 'url("'.concat(o, '")') }
                })
            }),
            l
                ? (0, r.jsx)('div', {
                      onKeyDown: (e) => {
                          e.keyCode === b.yXg.ESCAPE && (e.stopPropagation(), u(!1), null != d.current && d.current.focus());
                      },
                      children: (0, r.jsx)(O, {
                          id: y,
                          hasTabWrapper: s,
                          selectedSurrogate: n,
                          onClick: (e) => {
                              var n;
                              (0, p.t0)(e), u(!1), null === (n = t.current) || void 0 === n || n.focus();
                          }
                      })
                  })
                : null
        ]
    });
};
