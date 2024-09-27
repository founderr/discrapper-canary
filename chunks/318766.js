n.d(t, {
    u: function () {
        return R;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(526629),
    u = n(442837),
    c = n(704215),
    d = n(481060),
    _ = n(607070),
    E = n(243778),
    f = n(130402),
    h = n(78839),
    p = n(626135),
    m = n(153066),
    I = n(981631),
    T = n(921944),
    g = n(185923),
    S = n(689938),
    A = n(427522);
let v = 20,
    N = 24,
    O = 77,
    R = {
        tension: 800,
        friction: 24
    },
    C = () => {
        let e = (0, u.e7)([_.Z], () => _.Z.useReducedMotion);
        return (0, i.jsxs)('div', {
            className: A.premiumTooltipContainer,
            children: [
                (0, i.jsx)(d.LottieAnimation, {
                    className: s()(A.premiumUnlockAnimation, { [A.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, i.jsx)(d.Text, {
                    variant: 'text-sm/medium',
                    className: A.premiumTooltipText,
                    children: S.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_TOOLTIP.format()
                })
            ]
        });
    };
function y(e) {
    return {
        '--custom-emoji-sprite-size': ''.concat(N, 'px'),
        '--custom-emoji-sprite-row': Math.floor(e / v),
        '--custom-emoji-sprite-col': e % v
    };
}
function L(e) {
    let { tabIndex: t, className: n, renderButtonContents: r, active: o, onClick: v, 'aria-controls': N, focusProps: L } = e,
        [b, D] = a.useState(!1),
        [M, P] = a.useState(50),
        U = (0, u.e7)([h.ZP], () => h.ZP.inReverseTrial()),
        w = b || o,
        x = (0, m.l)(A, 'emojiButton', w ? 'Hovered' : 'Normal'),
        G = y(M),
        k = a.useCallback(() => {
            if (w) return;
            let e = Math.floor(Math.random() * O);
            D(!0), P(e), (0, f.x)(g.qR.EmojiButtonMouseEntered);
        }, [w, D, P]),
        B = a.useCallback(() => {
            D(!1);
        }, [D]),
        F = a.useCallback(() => (0, f.x)(g.qR.EmojiButtonFocused), []),
        [Z, V] = (0, E.US)(U ? [c.z.REVERSE_TRIAL_EMOJI_BUTTON] : [], void 0, !0),
        H = Z === c.z.REVERSE_TRIAL_EMOJI_BUTTON,
        Y = (0, u.e7)([_.Z], () => _.Z.useReducedMotion);
    return (0, i.jsx)(d.Tooltip, {
        text: C(),
        'aria-label': S.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_TOOLTIP.plainFormat(),
        position: 'top',
        shouldShow: U && !o && H,
        tooltipClassName: A.premiumTooltip,
        tooltipContentClassName: A.premiumTooltipContainer,
        children: (e) =>
            (0, i.jsx)(d.Button, {
                look: d.Button.Looks.BLANK,
                size: d.Button.Sizes.NONE,
                tabIndex: t,
                className: s()(x, n),
                onMouseEnter: () => {
                    var t;
                    k(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e), p.default.track(I.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                },
                onMouseOver: k,
                onMouseLeave: () => {
                    var t;
                    B(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e), H && V(T.L.USER_DISMISS);
                },
                onFocus: F,
                onClick: (t) => {
                    var n;
                    null == v || v(t), null === (n = e.onClick) || void 0 === n || n.call(e);
                },
                'aria-label': S.Z.Messages.SELECT_EMOJI,
                'aria-controls': N,
                'aria-expanded': o,
                'aria-haspopup': 'dialog',
                focusProps: L,
                onContextMenu: e.onContextMenu,
                children:
                    null != r
                        ? r()
                        : (0, i.jsx)(d.Spring, {
                              config: R,
                              to: { value: w ? 1 : 0 },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, i.jsxs)(l.animated.div, {
                                      className: A.spriteContainer,
                                      style: {
                                          ...G,
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                      },
                                      children: [(0, i.jsx)('div', { className: s()(A.sprite, A.spriteColored, w ? A.active : A.inactive) }), (0, i.jsx)('div', { className: s()(A.sprite, U && H ? A.spritePremiumColored : A.spriteGreyscale, w ? A.inactive : A.active, { [A.reducedMotion]: Y }) })]
                                  });
                              }
                          })
            })
    });
}
t.Z = L;
