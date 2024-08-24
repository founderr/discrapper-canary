n.d(t, {
    u: function () {
        return g;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(338545),
    l = n(442837),
    u = n(704215),
    c = n(481060),
    d = n(607070),
    _ = n(243778),
    E = n(130402),
    f = n(78839),
    h = n(153066),
    p = n(921944),
    I = n(185923),
    m = n(689938),
    T = n(822387);
let g = {
        tension: 800,
        friction: 24
    },
    S = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: T.premiumTooltipContainer,
            children: [
                (0, r.jsx)(c.LottieAnimation, {
                    className: s()(T.premiumUnlockAnimation, { [T.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    className: T.premiumTooltipText,
                    children: m.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_TOOLTIP.format()
                })
            ]
        });
    };
t.Z = function (e) {
    var t;
    let { tabIndex: n, className: a, renderButtonContents: A, active: N, onClick: O, 'aria-controls': v, focusProps: R } = e,
        [C, y] = i.useState(!1),
        [D, L] = i.useState(50),
        b = (0, l.e7)([f.ZP], () => f.ZP.inReverseTrial()),
        M = C || N,
        P = (0, h.l)(T, 'emojiButton', M ? 'Hovered' : 'Normal');
    let U =
            ((t = D),
            {
                '--custom-emoji-sprite-size': ''.concat(24, 'px'),
                '--custom-emoji-sprite-row': Math.floor(t / 20),
                '--custom-emoji-sprite-col': t % 20
            }),
        w = i.useCallback(() => {
            if (M) return;
            let e = Math.floor(77 * Math.random());
            y(!0), L(e), (0, E.x)(I.qR.EmojiButtonMouseEntered);
        }, [M, y, L]),
        x = i.useCallback(() => {
            y(!1);
        }, [y]),
        G = i.useCallback(() => (0, E.x)(I.qR.EmojiButtonFocused), []),
        [k, B] = (0, _.US)(b ? [u.z.REVERSE_TRIAL_EMOJI_BUTTON] : [], void 0, !0),
        F = k === u.z.REVERSE_TRIAL_EMOJI_BUTTON,
        V = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, r.jsx)(c.Tooltip, {
        text: S(),
        'aria-label': ''.concat(m.Z.Messages.PREMIUM_REVERSE_TRIAL_EMOJI_TOOLTIP.format()),
        position: 'top',
        shouldShow: b && !N,
        tooltipClassName: T.premiumTooltip,
        tooltipContentClassName: T.premiumTooltipContainer,
        children: (e) =>
            (0, r.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                tabIndex: n,
                className: s()(P, a),
                onMouseEnter: () => {
                    var t;
                    w(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                },
                onMouseOver: w,
                onMouseLeave: () => {
                    var t;
                    x(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e), F && B(p.L.USER_DISMISS);
                },
                onFocus: G,
                onClick: (t) => {
                    var n;
                    null == O || O(t), null === (n = e.onClick) || void 0 === n || n.call(e);
                },
                'aria-label': m.Z.Messages.SELECT_EMOJI,
                'aria-controls': v,
                'aria-expanded': N,
                'aria-haspopup': 'dialog',
                focusProps: R,
                onContextMenu: e.onContextMenu,
                children:
                    null != A
                        ? A()
                        : (0, r.jsx)(c.Spring, {
                              config: g,
                              to: { value: M ? 1 : 0 },
                              children: (e) => {
                                  let { value: t } = e;
                                  return (0, r.jsxs)(o.animated.div, {
                                      className: T.spriteContainer,
                                      style: {
                                          ...U,
                                          transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                      },
                                      children: [(0, r.jsx)('div', { className: s()(T.sprite, T.spriteColored, M ? T.active : T.inactive) }), (0, r.jsx)('div', { className: s()(T.sprite, b && F ? T.spritePremiumColored : T.spriteGreyscale, M ? T.inactive : T.active, { [T.reducedMotion]: V }) })]
                                  });
                              }
                          })
            })
    });
};
