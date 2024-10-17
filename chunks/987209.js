t.d(n, {
    KB: function () {
        return g;
    },
    wD: function () {
        return E;
    }
}),
    t(47120);
var o = t(735250),
    r = t(470079),
    l = t(479446),
    i = t(646476),
    a = t(599659),
    s = t(155491),
    c = t(975104),
    u = t(669079),
    d = t(598),
    p = t(474936),
    f = t(689938);
let _ = p.Cj.STANDARD_BOX,
    m = void 0,
    [S, E, h] = (0, c.Z)();
function g(e) {
    let { isGift: n = !1, giftRecipient: t, giftMessage: c, giftStyle: E, children: h } = e,
        { selectedSkuId: g } = (0, d.usePaymentContext)(),
        [I, T] = r.useState(t),
        [P, M] = r.useState(),
        [C, b] = r.useState(!1),
        x = (0, u.pO)(I),
        v = (0, i.rK)(),
        { enabled: N } = i.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: x && v }),
        { enabled: R } = a.O.useExperiment({ location: 'gift card' }),
        A = m;
    x && ((A = N && v ? p.Cj.SEASONAL_STANDARD_BOX : null != E ? E : _), R && (A = p.Cj.NITROWEEN_STANDARD));
    let [y, L] = r.useState(A),
        [k, O] = r.useState(n && (0, u.MY)(I) === u.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? f.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : c),
        [U, D] = r.useState(void 0),
        [B, Z] = r.useState(void 0),
        j = (0, u.E5)(g, n),
        [w, F] = r.useState(!1),
        [G, W] = r.useState(!1),
        [Y, H] = r.useState(),
        V = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    W(!0),
                    (0, l.YD)(I, j)
                        .then(() => {
                            W(!1), null == n || n(), F(!0);
                        })
                        .catch((e) => {
                            W(!1), H(e), F(!0);
                        })
                );
            },
            [I, j, W, F, H]
        ),
        K = (0, s.x8)();
    return (0, o.jsx)(S.Provider, {
        value: {
            isGift: n,
            giftCode: j,
            giftMessage: c,
            giftRecipient: I,
            setGiftRecipient: T,
            giftRecipientError: P,
            setGiftRecipientError: M,
            validatingGiftRecipient: C,
            setValidatingGiftRecipient: b,
            soundEffect: U,
            setSoundEffect: D,
            emojiConfetti: B,
            setEmojiConfetti: Z,
            customGiftMessage: k,
            setCustomGiftMessage: O,
            selectedGiftStyle: y,
            setSelectedGiftStyle: L,
            sendGiftMessage: V,
            hasSentMessage: w,
            isSendingMessage: G,
            giftMessageError: Y,
            alreadyHasHalloweenDeco: K
        },
        children: h
    });
}
