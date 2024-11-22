n.d(t, {
    u: function () {
        return T;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    f = n(243778),
    _ = n(130402),
    p = n(140465),
    h = n(626135),
    m = n(153066),
    g = n(981631),
    E = n(921944),
    v = n(185923),
    b = n(388032),
    I = n(427522);
let T = {
        tension: 800,
        friction: 24
    },
    S = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: I.premiumTooltipContainer,
            children: [
                (0, r.jsx)(c.LottieAnimation, {
                    className: s()(I.premiumUnlockAnimation, { [I.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    className: I.premiumTooltipText,
                    children: b.intl.format(b.t['/7R4q6'], {})
                })
            ]
        });
    };
t.Z = function (e) {
    var t;
    let { tabIndex: n, className: a, renderButtonContents: y, active: A, onClick: N, 'aria-controls': C, focusProps: R } = e,
        [O, D] = i.useState(!1),
        [L, x] = i.useState(50),
        w = (0, p.x8)('EmojiButton'),
        M = O || A,
        P = (0, m.l)(I, 'emojiButton', M ? 'Hovered' : 'Normal');
    let k =
            ((t = L),
            {
                '--custom-emoji-sprite-size': ''.concat(24, 'px'),
                '--custom-emoji-sprite-row': Math.floor(t / 20),
                '--custom-emoji-sprite-col': t % 20
            }),
        U = i.useCallback(() => {
            if (M) return;
            let e = Math.floor(77 * Math.random());
            D(!0), x(e), (0, _.x)(v.qR.EmojiButtonMouseEntered);
        }, [M, D, x]),
        B = i.useCallback(() => {
            D(!1);
        }, [D]),
        G = i.useCallback(() => (0, _.x)(v.qR.EmojiButtonFocused), []),
        [Z, F] = (0, f.US)(w ? [u.z.TRIAL_FOR_ALL_EMOJI_BUTTON] : [], void 0, !0),
        V = Z === u.z.TRIAL_FOR_ALL_EMOJI_BUTTON,
        j = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsx)(c.Tooltip, {
        text: S(),
        'aria-label': b.intl.formatToMarkdownString(b.t['/7R4q6'], {}),
        position: 'top',
        shouldShow: w && !A && V,
        tooltipClassName: I.premiumTooltip,
        tooltipContentClassName: I.premiumTooltipContainer,
        children: (e) =>
            (0, r.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                tabIndex: n,
                className: s()(P, a),
                onMouseEnter: () => {
                    var t;
                    U(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), h.default.track(g.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                },
                onMouseOver: U,
                onMouseLeave: () => {
                    var t;
                    B(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e), V && F(E.L.USER_DISMISS);
                },
                onFocus: G,
                onClick: (t) => {
                    var n;
                    null == N || N(t), null === (n = e.onClick) || void 0 === n || n.call(e);
                },
                'aria-label': b.intl.string(b.t['59QgaG']),
                'aria-controls': C,
                'aria-expanded': A,
                'aria-haspopup': 'dialog',
                focusProps: R,
                onContextMenu: e.onContextMenu,
                children:
                    null != y
                        ? y()
                        : (0, r.jsx)(c.Spring, {
                              config: T,
                              to: { value: M ? 1 : 0 },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(o.animated.div, {
                                      className: I.spriteContainer,
                                      style: {
                                          ...k,
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                      },
                                      children: [(0, r.jsx)('div', { className: s()(I.sprite, I.spriteColored, M ? I.active : I.inactive) }), (0, r.jsx)('div', { className: s()(I.sprite, w && V ? I.spritePremiumColored : I.spriteGreyscale, M ? I.inactive : I.active, { [I.reducedMotion]: j }) })]
                                  });
                              }
                          })
            })
    });
};
