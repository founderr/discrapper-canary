n.d(t, {
    u: function () {
        return S;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(752877),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    f = n(540059),
    _ = n(243778),
    p = n(130402),
    h = n(140465),
    m = n(626135),
    g = n(153066),
    E = n(981631),
    v = n(921944),
    I = n(185923),
    T = n(388032),
    b = n(659650);
let S = {
        tension: 800,
        friction: 24
    },
    y = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: b.premiumTooltipContainer,
            children: [
                (0, r.jsx)(c.LottieAnimation, {
                    className: s()(b.premiumUnlockAnimation, { [b.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    className: b.premiumTooltipText,
                    children: T.intl.format(T.t['/7R4q6'], {})
                })
            ]
        });
    };
t.Z = function (e) {
    var t, n;
    let { tabIndex: a, className: A, renderButtonContents: N, active: C, onClick: R, 'aria-controls': O, focusProps: D } = e,
        [L, x] = i.useState(!1),
        [w, P] = i.useState(50),
        M = (0, h.x8)('EmojiButton'),
        k = L || C,
        U = (0, g.l)(b, 'emojiButton', k ? 'Hovered' : 'Normal'),
        B = (0, f.Q)('EmojiButton');
    let G =
            ((t = w),
            (n = B),
            {
                '--custom-emoji-sprite-size': ''.concat(n ? 18 : 24, 'px'),
                '--custom-emoji-sprite-row': Math.floor(t / 20),
                '--custom-emoji-sprite-col': t % 20
            }),
        Z = i.useCallback(() => {
            if (k) return;
            let e = Math.floor(77 * Math.random());
            x(!0), P(e), (0, p.x)(I.qR.EmojiButtonMouseEntered);
        }, [k, x, P]),
        F = i.useCallback(() => {
            x(!1);
        }, [x]),
        V = i.useCallback(() => (0, p.x)(I.qR.EmojiButtonFocused), []),
        [j, H] = (0, _.US)(M ? [u.z.TRIAL_FOR_ALL_EMOJI_BUTTON] : [], void 0, !0),
        Y = j === u.z.TRIAL_FOR_ALL_EMOJI_BUTTON,
        W = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsx)(c.Tooltip, {
        text: y(),
        'aria-label': T.intl.formatToMarkdownString(T.t['/7R4q6'], {}),
        position: 'top',
        shouldShow: M && !C && Y,
        tooltipClassName: b.premiumTooltip,
        tooltipContentClassName: b.premiumTooltipContainer,
        children: (e) =>
            (0, r.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                tabIndex: a,
                className: s()(U, A),
                onMouseEnter: () => {
                    var t;
                    Z(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), m.default.track(E.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                },
                onMouseOver: Z,
                onMouseLeave: () => {
                    var t;
                    F(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e), Y && H(v.L.USER_DISMISS);
                },
                onFocus: V,
                onClick: (t) => {
                    var n;
                    null == R || R(t), null === (n = e.onClick) || void 0 === n || n.call(e);
                },
                'aria-label': T.intl.string(T.t['59QgaG']),
                'aria-controls': O,
                'aria-expanded': C,
                'aria-haspopup': 'dialog',
                focusProps: D,
                onContextMenu: e.onContextMenu,
                children:
                    null != N
                        ? N()
                        : (0, r.jsx)(c.Spring, {
                              config: S,
                              to: { value: k ? 1 : 0 },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(o.animated.div, {
                                      className: b.spriteContainer,
                                      style: {
                                          ...G,
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                      },
                                      children: [(0, r.jsx)('div', { className: s()(b.sprite, b.spriteColored, k ? b.active : b.inactive) }), (0, r.jsx)('div', { className: s()(b.sprite, M && Y ? b.spritePremiumColored : b.spriteGreyscale, k ? b.inactive : b.active, { [b.reducedMotion]: W }) })]
                                  });
                              }
                          })
            })
    });
};
