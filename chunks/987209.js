t.d(n, {
    KB: function () {
        return T;
    },
    wD: function () {
        return g;
    }
}),
    t(47120);
var o = t(200651),
    r = t(192379),
    l = t(442837),
    i = t(597688),
    a = t(479446),
    s = t(646476),
    c = t(599659),
    u = t(155491),
    d = t(975104),
    p = t(669079),
    f = t(598),
    _ = t(474936),
    m = t(689938);
let S = _.Cj.STANDARD_BOX,
    E = void 0,
    [h, g, I] = (0, d.Z)();
function T(e) {
    let { isGift: n = !1, giftRecipient: t, giftMessage: d, giftStyle: g, giftingOrigin: I, children: T } = e,
        { selectedSkuId: P } = (0, f.usePaymentContext)(),
        [M, C] = r.useState(t),
        [b, x] = r.useState(),
        [v, N] = r.useState(!1),
        R = (0, p.pO)(M),
        A = (0, s.rK)(),
        { enabled: y } = s.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: R && A }),
        { enabled: L } = c.O.useExperiment({ location: 'gift card' }),
        k = E;
    R && ((k = y && A ? _.Cj.SEASONAL_STANDARD_BOX : null != g ? g : S), L && (k = _.Cj.NITROWEEN_STANDARD));
    let [O, U] = r.useState(k),
        [D, B] = r.useState(n && (0, p.MY)(M) === p.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == d ? m.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : d),
        [Z, j] = r.useState(void 0),
        [w, F] = r.useState(void 0),
        G = (0, p.E5)(P, n),
        [W, Y] = r.useState(!1),
        [H, V] = r.useState(!1),
        [K, X] = r.useState(),
        z = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    V(!0),
                    (0, a.YD)(M, G)
                        .then(() => {
                            V(!1), null == n || n(), Y(!0);
                        })
                        .catch((e) => {
                            V(!1), X(e), Y(!0);
                        })
                );
            },
            [M, G, V, Y, X]
        ),
        $ = (0, u.x8)(),
        q = (0, l.Wu)([i.Z], () => i.Z.recommendedGiftSkuIds);
    return (0, o.jsx)(h.Provider, {
        value: {
            isGift: n,
            giftCode: G,
            giftMessage: d,
            giftRecipient: M,
            setGiftRecipient: C,
            giftRecipientError: b,
            setGiftRecipientError: x,
            validatingGiftRecipient: v,
            setValidatingGiftRecipient: N,
            soundEffect: Z,
            setSoundEffect: j,
            emojiConfetti: w,
            setEmojiConfetti: F,
            customGiftMessage: D,
            setCustomGiftMessage: B,
            selectedGiftStyle: O,
            setSelectedGiftStyle: U,
            sendGiftMessage: z,
            hasSentMessage: W,
            isSendingMessage: H,
            giftMessageError: K,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: q,
            giftingOrigin: I
        },
        children: T
    });
}
