n.d(t, {
    KB: function () {
        return b;
    },
    wD: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(597688),
    o = n(479446),
    l = n(646476),
    u = n(599659),
    c = n(155491),
    d = n(717401),
    f = n(975104),
    _ = n(669079),
    p = n(563132),
    h = n(474936),
    m = n(388032);
let g = h.Cj.STANDARD_BOX,
    E = void 0,
    [v, I, T] = (0, f.Z)();
function b(e) {
    let { isGift: t = !1, giftRecipient: n, giftMessage: f, giftStyle: I, giftingOrigin: T, children: b } = e,
        { selectedSkuId: S } = (0, p.usePaymentContext)(),
        [y, A] = i.useState(n),
        [N, C] = i.useState(),
        [R, O] = i.useState(!1),
        D = (0, _.pO)(y),
        L = (0, l.TX)(),
        { enabled: x } = u.O.useExperiment({ location: 'gift card' }),
        w = E;
    D && ((w = L ? h.Cj.SEASONAL_STANDARD_BOX : null != I ? I : g), x && (w = h.Cj.NITROWEEN_STANDARD));
    let [P, M] = i.useState(w),
        k = (0, d.iE)(),
        [U, B] = i.useState(),
        [G, Z] = i.useState(t && (0, _.MY)(y) === _.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == f ? m.intl.string(m.t.ZkOo1d) : f),
        [F, V] = i.useState(void 0),
        [j, H] = i.useState(void 0),
        Y = (0, _.E5)(S, t),
        [W, K] = i.useState(!1),
        [z, q] = i.useState(!1),
        [Q, X] = i.useState(),
        J = i.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    q(!0),
                    (0, o.YD)(y, Y)
                        .then(() => {
                            q(!1), null == t || t(), K(!0);
                        })
                        .catch((e) => {
                            q(!1), X(e), K(!0);
                        })
                );
            },
            [y, Y, q, K, X]
        ),
        $ = (0, c.x8)(),
        ee = (0, a.Wu)([s.Z], () => s.Z.recommendedGiftSkuIds);
    return (0, r.jsx)(v.Provider, {
        value: {
            isGift: t,
            giftCode: Y,
            giftMessage: f,
            giftRecipient: y,
            setGiftRecipient: A,
            giftRecipientError: N,
            setGiftRecipientError: C,
            validatingGiftRecipient: R,
            setValidatingGiftRecipient: O,
            soundEffect: F,
            setSoundEffect: V,
            emojiConfetti: j,
            setEmojiConfetti: H,
            customGiftMessage: G,
            setCustomGiftMessage: Z,
            selectedGiftStyle: P,
            setSelectedGiftStyle: M,
            sendGiftMessage: J,
            hasSentMessage: W,
            isSendingMessage: z,
            giftMessageError: Q,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: ee,
            giftingOrigin: T,
            claimableRewards: k,
            selectedGiftingPromotionReward: U,
            setSelectedGiftingPromotionReward: B
        },
        children: b
    });
}
