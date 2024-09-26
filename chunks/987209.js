n.d(t, {
    KB: function () {
        return g;
    },
    wD: function () {
        return I;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(479446),
    s = n(646476),
    l = n(599659),
    u = n(155491),
    c = n(975104),
    d = n(669079),
    _ = n(598),
    E = n(474936),
    f = n(689938);
let h = E.Cj.STANDARD_BOX,
    p = void 0,
    [m, I, T] = (0, c.Z)();
function g(e) {
    let { isGift: t = !1, giftRecipient: n, giftMessage: r, giftStyle: c, children: I } = e,
        { selectedSkuId: T } = (0, _.usePaymentContext)(),
        [g, S] = a.useState(n),
        [A, v] = a.useState(),
        [N, O] = a.useState(!1),
        R = (0, d.pO)(g),
        C = (0, s.rK)(),
        { enabled: y } = s.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: R && C }),
        { enabled: L } = l.O.useExperiment({ location: 'gift card' }),
        b = p;
    R && ((b = y && C ? E.Cj.SEASONAL_STANDARD_BOX : null != c ? c : h), L && (b = E.Cj.NITROWEEN_STANDARD));
    let [D, M] = a.useState(b),
        [P, U] = a.useState(t && (0, d.MY)(g) === d.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == r ? f.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : r),
        [w, x] = a.useState(void 0),
        [G, k] = a.useState(void 0),
        B = (0, d.E5)(T, t),
        [F, Z] = a.useState(!1),
        [V, H] = a.useState(!1),
        [Y, j] = a.useState(),
        W = a.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: t } = e;
                return (
                    H(!0),
                    (0, o.YD)(g, B)
                        .then(() => {
                            H(!1), null == t || t(), Z(!0);
                        })
                        .catch((e) => {
                            H(!1), j(e), Z(!0);
                        })
                );
            },
            [g, B, H, Z, j]
        ),
        K = (0, u.x8)();
    return (0, i.jsx)(m.Provider, {
        value: {
            isGift: t,
            giftCode: B,
            giftMessage: r,
            giftRecipient: g,
            setGiftRecipient: S,
            giftRecipientError: A,
            setGiftRecipientError: v,
            validatingGiftRecipient: N,
            setValidatingGiftRecipient: O,
            soundEffect: w,
            setSoundEffect: x,
            emojiConfetti: G,
            setEmojiConfetti: k,
            customGiftMessage: P,
            setCustomGiftMessage: U,
            selectedGiftStyle: D,
            setSelectedGiftStyle: M,
            sendGiftMessage: W,
            hasSentMessage: F,
            isSendingMessage: V,
            giftMessageError: Y,
            alreadyHasHalloweenDeco: K
        },
        children: I
    });
}
