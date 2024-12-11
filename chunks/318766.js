n.d(t, {
    u: function () {
        return A;
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
    m = n(125900),
    g = n(546424),
    E = n(626135),
    v = n(153066),
    I = n(981631),
    T = n(921944),
    b = n(185923),
    S = n(388032),
    y = n(659650);
let A = {
        tension: 800,
        friction: 24
    },
    N = () => {
        let e = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
        return (0, r.jsxs)('div', {
            className: y.premiumTooltipContainer,
            children: [
                (0, r.jsx)(c.LottieAnimation, {
                    className: s()(y.premiumUnlockAnimation, { [y.reducedMotion]: e }),
                    loop: !1,
                    shouldAnimate: !e,
                    pauseAtFrame: e ? 149 : void 0,
                    importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    className: y.premiumTooltipText,
                    children: S.intl.format(S.t['/7R4q6'], {})
                })
            ]
        });
    };
t.Z = function (e) {
    var t, n;
    let { tabIndex: a, className: C, renderButtonContents: R, active: O, onClick: D, 'aria-controls': L, focusProps: x, shouldShowSoundmojiCoachmark: w = !1 } = e,
        [P, M] = i.useState(!1),
        [k, U] = i.useState(50),
        B = (0, h.x8)('EmojiButton'),
        G = P || O,
        Z = (0, v.l)(y, 'emojiButton', G ? 'Hovered' : 'Normal'),
        F = (0, f.Q3)('EmojiButton');
    let V =
            ((t = k),
            (n = F),
            {
                '--custom-emoji-sprite-size': ''.concat(n ? 18 : 24, 'px'),
                '--custom-emoji-sprite-row': Math.floor(t / 20),
                '--custom-emoji-sprite-col': t % 20
            }),
        j = i.useCallback(() => {
            if (G) return;
            let e = Math.floor(77 * Math.random());
            M(!0), U(e), (0, p.x)(b.qR.EmojiButtonMouseEntered);
        }, [G, M, U]),
        H = i.useCallback(() => {
            M(!1);
        }, [M]),
        Y = i.useCallback(() => (0, p.x)(b.qR.EmojiButtonFocused), []),
        [W, K] = (0, _.US)(B ? [u.z.TRIAL_FOR_ALL_EMOJI_BUTTON] : [], void 0, !0),
        z = W === u.z.TRIAL_FOR_ALL_EMOJI_BUTTON,
        q = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        [Q, X] = i.useState(!1),
        J = B && !O && z,
        [$, ee] = i.useState(!1),
        et = (0, m.V2)({ location: 'EmojiButton' }),
        [en, er] = (0, _.US)(w && et ? [u.z.SOUNDMOJI_COACHMARK] : []),
        ei = !Q && en === u.z.SOUNDMOJI_COACHMARK && !$;
    return (0, r.jsx)(c.Popout, {
        renderPopout: () => (0, r.jsx)(g.Z, { markAsDismissed: er }),
        position: 'top',
        align: 'right',
        shouldShow: ei,
        animationPosition: 'bottom',
        onRequestClose: () => ee(!0),
        children: (e) =>
            (0, r.jsx)(c.Tooltip, {
                text: () => (0, r.jsx)(N, {}),
                'aria-label': S.intl.formatToMarkdownString(S.t['/7R4q6'], {}),
                position: 'top',
                shouldShow: J,
                onTooltipHide: () => X(!1),
                onTooltipShow: () => X(J),
                tooltipClassName: y.premiumTooltip,
                tooltipContentClassName: y.premiumTooltipContainer,
                children: (t) =>
                    (0, r.jsx)(c.Button, {
                        ...e,
                        look: c.Button.Looks.BLANK,
                        size: c.Button.Sizes.NONE,
                        tabIndex: a,
                        className: s()(Z, C),
                        onMouseEnter: () => {
                            var e;
                            j(), null === (e = t.onMouseEnter) || void 0 === e || e.call(t), E.default.track(I.rMx.EMOJI_PICKER_BUTTON_HOVERED);
                        },
                        onMouseOver: j,
                        onMouseLeave: () => {
                            var e;
                            H(), null === (e = t.onMouseLeave) || void 0 === e || e.call(t), z && K(T.L.USER_DISMISS);
                        },
                        onFocus: Y,
                        onClick: (e) => {
                            var n;
                            null == D || D(e), null === (n = t.onClick) || void 0 === n || n.call(t);
                        },
                        'aria-label': S.intl.string(S.t['59QgaG']),
                        'aria-controls': L,
                        'aria-expanded': O,
                        'aria-haspopup': 'dialog',
                        focusProps: x,
                        onContextMenu: t.onContextMenu,
                        children:
                            null != R
                                ? R()
                                : (0, r.jsx)(c.Spring, {
                                      config: A,
                                      to: { value: G ? 1 : 0 },
                                      children: (e) => {
                                          let { value: t } = e;
                                          return (0, r.jsxs)(o.animated.div, {
                                              className: y.spriteContainer,
                                              style: {
                                                  ...V,
                                                  transform: t.to([0, 1], [1, 1.14]).to((e) => 'scale('.concat(e, ')'))
                                              },
                                              children: [(0, r.jsx)('div', { className: s()(y.sprite, y.spriteColored, G ? y.active : y.inactive) }), (0, r.jsx)('div', { className: s()(y.sprite, B && z ? y.spritePremiumColored : y.spriteGreyscale, G ? y.inactive : y.active, { [y.reducedMotion]: q }) })]
                                          });
                                      }
                                  })
                    })
            })
    });
};
