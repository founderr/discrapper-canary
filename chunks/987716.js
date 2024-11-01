s.d(n, {
    q: function () {
        return x;
    }
}),
    s(47120);
var t = s(200651),
    l = s(192379),
    i = s(120356),
    r = s.n(i),
    a = s(481060),
    c = s(987209),
    o = s(321051),
    u = s(669079),
    d = s(479446),
    _ = s(646476),
    m = s(599659),
    I = s(981632),
    E = s(96848),
    p = s(703926),
    N = s(474936),
    T = s(689938),
    S = s(522888);
let x = (e) => {
    let { isShopGift: n, className: s, optionsContainerClassName: i } = e,
        { giftRecipient: x, selectedGiftStyle: h, setSelectedGiftStyle: P, emojiConfetti: f, soundEffect: A, setEmojiConfetti: v, setSoundEffect: M } = (0, c.wD)(),
        [g, R] = l.useState(!1),
        L = l.useRef(null),
        O = (0, a.useRadioGroup)({ orientation: 'horizontal' }),
        C = (0, u.MY)(x, n),
        j = C === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        Z = C !== u.xr.DEFAULT,
        y = (0, _.rK)(),
        { enabled: b } = _.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: y }),
        { enabled: D } = m.O.useExperiment({ location: 'gift card' }),
        G = null;
    return (
        Z && (G = y && b ? N.V4 : N.QI),
        D && (G = N.RQ),
        (0, t.jsxs)('div', {
            children: [
                Z &&
                    (0, t.jsxs)('div', {
                        className: r()(S.giftMainAnimation, s),
                        children: [
                            null != h
                                ? (0, t.jsx)(I.Z, {
                                      giftStyle: h,
                                      defaultAnimationState: d.SR.ACTION,
                                      idleAnimationState: d.SR.LOOP,
                                      shouldAnimate: !0,
                                      className: S.animation
                                  })
                                : (0, t.jsx)(a.Spinner, { className: S.spinner }),
                            j &&
                                (0, t.jsxs)('div', {
                                    className: S.soundEmojiContainer,
                                    children: [
                                        (0, t.jsx)('div', {
                                            className: S.sound,
                                            children: (0, t.jsx)(o.Z, {
                                                sound: A,
                                                onSelect: (e) => {
                                                    null != M && M(null == e ? void 0 : e);
                                                }
                                            })
                                        }),
                                        (0, t.jsx)('div', {
                                            className: S.emoji,
                                            children: (0, t.jsx)(E.Z, {
                                                setEmojiConfetti: v,
                                                emojiConfetti: null == f ? void 0 : f
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                (0, t.jsx)('div', {
                    tabIndex: null != h || g ? void 0 : 0,
                    onFocus: (e) => {
                        var n;
                        e.target === e.currentTarget && (null === (n = L.current) || void 0 === n || n.focus());
                    },
                    className: r()(S.giftBoxOptionContainer, i),
                    'aria-label': T.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                    ...O,
                    children:
                        null != G &&
                        G.map((e, n) =>
                            (0, t.jsx)(
                                p.m,
                                {
                                    isSelected: h === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: P,
                                    ref: 0 === n ? L : null,
                                    onFocus: () => R(!0),
                                    onBlur: () => R(!1)
                                },
                                e
                            )
                        )
                }),
                (0, t.jsx)('div', { className: S.__invalid_selectPlanDivider })
            ]
        })
    );
};
