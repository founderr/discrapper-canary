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
    l = t(192379),
    i = t(442837),
    r = t(597688),
    a = t(479446),
    s = t(646476),
    u = t(599659),
    c = t(155491),
    d = t(975104),
    p = t(669079),
    f = t(563132),
    m = t(474936),
    _ = t(388032);
let S = m.Cj.STANDARD_BOX,
    E = void 0,
    [h, g, P] = (0, d.Z)();
function T(e) {
    let { isGift: n = !1, giftRecipient: t, giftMessage: d, giftStyle: g, giftingOrigin: P, children: T } = e,
        { selectedSkuId: I } = (0, f.usePaymentContext)(),
        [x, C] = l.useState(t),
        [b, N] = l.useState(),
        [y, A] = l.useState(!1),
        k = (0, p.pO)(x),
        M = (0, s.rK)(),
        { enabled: v } = s.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: k && M }),
        { enabled: R } = u.O.useExperiment({ location: 'gift card' }),
        L = E;
    k && ((L = v && M ? m.Cj.SEASONAL_STANDARD_BOX : null != g ? g : S), R && (L = m.Cj.NITROWEEN_STANDARD));
    let [j, B] = l.useState(L),
        [Z, O] = l.useState(n && (0, p.MY)(x) === p.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == d ? _.intl.string(_.t.ZkOo1d) : d),
        [D, U] = l.useState(void 0),
        [w, F] = l.useState(void 0),
        W = (0, p.E5)(I, n),
        [G, Y] = l.useState(!1),
        [H, V] = l.useState(!1),
        [X, z] = l.useState(),
        K = l.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    V(!0),
                    (0, a.YD)(x, W)
                        .then(() => {
                            V(!1), null == n || n(), Y(!0);
                        })
                        .catch((e) => {
                            V(!1), z(e), Y(!0);
                        })
                );
            },
            [x, W, V, Y, z]
        ),
        $ = (0, c.x8)(),
        q = (0, i.Wu)([r.Z], () => r.Z.recommendedGiftSkuIds);
    return (0, o.jsx)(h.Provider, {
        value: {
            isGift: n,
            giftCode: W,
            giftMessage: d,
            giftRecipient: x,
            setGiftRecipient: C,
            giftRecipientError: b,
            setGiftRecipientError: N,
            validatingGiftRecipient: y,
            setValidatingGiftRecipient: A,
            soundEffect: D,
            setSoundEffect: U,
            emojiConfetti: w,
            setEmojiConfetti: F,
            customGiftMessage: Z,
            setCustomGiftMessage: O,
            selectedGiftStyle: j,
            setSelectedGiftStyle: B,
            sendGiftMessage: K,
            hasSentMessage: G,
            isSendingMessage: H,
            giftMessageError: X,
            alreadyHasHalloweenDeco: $,
            recommendedGiftSkuIds: q,
            giftingOrigin: P
        },
        children: T
    });
}
