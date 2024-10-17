s.d(n, {
    q: function () {
        return T;
    }
}),
    s(47120);
var t = s(735250),
    l = s(470079),
    i = s(481060),
    r = s(987209),
    a = s(321051),
    c = s(669079),
    o = s(479446),
    u = s(646476),
    d = s(599659),
    _ = s(981632),
    m = s(96848),
    I = s(703926),
    E = s(474936),
    p = s(689938),
    N = s(522888);
let T = (e) => {
    let { isShopGift: n } = e,
        { giftRecipient: s, selectedGiftStyle: T, setSelectedGiftStyle: S, emojiConfetti: x, soundEffect: h, setEmojiConfetti: P, setSoundEffect: f } = (0, r.wD)(),
        [A, v] = l.useState(!1),
        M = l.useRef(null),
        g = (0, i.useRadioGroup)({ orientation: 'horizontal' }),
        R = (0, c.MY)(s, n),
        L = R === c.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD,
        O = R !== c.xr.DEFAULT,
        C = (0, u.rK)(),
        { enabled: j } = u.ZP.useExperiment({ location: 'premiumGiftSelect_GiftAnimationOptions' }, { autoTrackExposure: C }),
        { enabled: Z } = d.O.useExperiment({ location: 'gift card' }),
        y = null;
    return (
        O && (y = C && j ? E.V4 : E.QI),
        Z && (y = E.RQ),
        (0, t.jsxs)('div', {
            children: [
                O &&
                    (0, t.jsxs)('div', {
                        className: N.giftMainAnimation,
                        children: [
                            null != T
                                ? (0, t.jsx)(_.Z, {
                                      giftStyle: T,
                                      defaultAnimationState: o.SR.ACTION,
                                      idleAnimationState: o.SR.LOOP,
                                      shouldAnimate: !0,
                                      className: N.animation
                                  })
                                : (0, t.jsx)(i.Spinner, { className: N.spinner }),
                            L &&
                                (0, t.jsxs)('div', {
                                    className: N.soundEmojiContainer,
                                    children: [
                                        (0, t.jsx)('div', {
                                            className: N.sound,
                                            children: (0, t.jsx)(a.Z, {
                                                sound: h,
                                                onSelect: (e) => {
                                                    null != f && f(null == e ? void 0 : e);
                                                }
                                            })
                                        }),
                                        (0, t.jsx)('div', {
                                            className: N.emoji,
                                            children: (0, t.jsx)(m.Z, {
                                                setEmojiConfetti: P,
                                                emojiConfetti: null == x ? void 0 : x
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                (0, t.jsx)('div', {
                    tabIndex: null != T || A ? void 0 : 0,
                    onFocus: (e) => {
                        var n;
                        e.target === e.currentTarget && (null === (n = M.current) || void 0 === n || n.focus());
                    },
                    className: N.giftBoxOptionContainer,
                    'aria-label': p.Z.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
                    ...g,
                    children:
                        null != y &&
                        y.map((e, n) =>
                            (0, t.jsx)(
                                I.m,
                                {
                                    isSelected: T === e,
                                    giftStyle: e,
                                    setSelectedGiftStyle: S,
                                    ref: 0 === n ? M : null,
                                    onFocus: () => v(!0),
                                    onBlur: () => v(!1)
                                },
                                e
                            )
                        )
                }),
                (0, t.jsx)('div', { className: N.__invalid_selectPlanDivider })
            ]
        })
    );
};
