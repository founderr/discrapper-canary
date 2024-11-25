t.d(n, {
    q: function () {
        return j;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(120356),
    s = t.n(r),
    a = t(481060),
    c = t(987209),
    o = t(321051),
    u = t(669079),
    d = t(479446),
    m = t(646476),
    p = t(599659),
    x = t(981632),
    h = t(96848),
    f = t(703926),
    v = t(474936),
    g = t(388032),
    S = t(461405);
let j = (e) => {
    let { isShopGift: n, className: t, optionsContainerClassName: r } = e,
        { giftRecipient: j, selectedGiftStyle: E, setSelectedGiftStyle: y, emojiConfetti: I, soundEffect: P, setEmojiConfetti: T, setSoundEffect: N } = (0, c.wD)(),
        [b, C] = l.useState(!1),
        _ = l.useRef(null),
        O = (0, a.useRadioGroup)({ orientation: 'horizontal' }),
        A = (0, u.MY)(j, n),
        Z = A === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        R = A !== u.xr.DEFAULT,
        M = (0, m.rK)(),
        { enabled: w } = m.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: M }),
        { enabled: L } = p.O.useExperiment({ location: 'gift card' }),
        k = null;
    return (
        R && (k = M && w ? v.kJ : v.QI),
        L && (k = v.RQ),
        (0, i.jsxs)('div', {
            children: [
                R &&
                    (0, i.jsxs)('div', {
                        className: s()(S.giftMainAnimation, t),
                        children: [
                            null != E
                                ? (0, i.jsx)(x.Z, {
                                      giftStyle: E,
                                      defaultAnimationState: d.SR.ACTION,
                                      idleAnimationState: d.SR.LOOP,
                                      shouldAnimate: !0,
                                      className: S.animation
                                  })
                                : (0, i.jsx)(a.Spinner, { className: S.spinner }),
                            Z &&
                                (0, i.jsxs)('div', {
                                    className: S.soundEmojiContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: S.sound,
                                            children: (0, i.jsx)(o.Z, {
                                                sound: P,
                                                onSelect: (e) => {
                                                    null != N && N(null == e ? void 0 : e);
                                                }
                                            })
                                        }),
                                        (0, i.jsx)('div', {
                                            className: S.emoji,
                                            children: (0, i.jsx)(h.Z, {
                                                setEmojiConfetti: T,
                                                emojiConfetti: null == I ? void 0 : I
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                (0, i.jsx)('div', {
                    tabIndex: null != E || b ? void 0 : 0,
                    onFocus: (e) => {
                        var n;
                        e.target === e.currentTarget && (null === (n = _.current) || void 0 === n || n.focus());
                    },
                    className: s()(S.giftBoxOptionContainer, r),
                    'aria-label': g.intl.string(g.t.v54NrK),
                    ...O,
                    children:
                        null != k &&
                        k.map((e, n) =>
                            (0, i.jsx)(
                                f.m,
                                {
                                    isSelected: E === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: y,
                                    ref: 0 === n ? _ : null,
                                    onFocus: () => C(!0),
                                    onBlur: () => C(!1)
                                },
                                e
                            )
                        )
                }),
                (0, i.jsx)('div', { className: S.__invalid_selectPlanDivider })
            ]
        })
    );
};
