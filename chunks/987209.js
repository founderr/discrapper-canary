t.d(n, {
    KB: function () {
        return g;
    },
    wD: function () {
        return m;
    }
}),
    t(47120);
var o = t(735250),
    r = t(470079),
    a = t(479446),
    i = t(646476),
    c = t(975104),
    l = t(669079),
    s = t(598),
    u = t(474936),
    d = t(689938);
let p = u.Cj.STANDARD_BOX,
    _ = void 0,
    [f, m, h] = (0, c.Z)();
function g(e) {
    let { isGift: n = !1, giftRecipient: t, giftMessage: c, giftStyle: m, children: h } = e,
        { selectedSkuId: g } = (0, s.usePaymentContext)(),
        [S, b] = r.useState(t),
        [E, I] = r.useState(),
        [P, T] = r.useState(!1),
        x = (0, l.pO)(S),
        y = (0, i.rK)(),
        { enabled: M } = i.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: x && y }),
        C = _;
    x && (C = M && y ? u.Cj.SEASONAL_STANDARD_BOX : null != m ? m : p);
    let [v, N] = r.useState(C),
        [A, R] = r.useState(n && (0, l.MY)(S) === l.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == c ? d.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : c),
        [L, k] = r.useState(void 0),
        [O, B] = r.useState(void 0),
        U = (0, l.E5)(g, n),
        [w, D] = r.useState(!1),
        [j, Z] = r.useState(!1),
        [F, W] = r.useState(),
        G = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    Z(!0),
                    (0, a.YD)(S, U)
                        .then(() => {
                            Z(!1), null == n || n(), D(!0);
                        })
                        .catch((e) => {
                            Z(!1), W(e), D(!0);
                        })
                );
            },
            [S, U, Z, D, W]
        );
    return (0, o.jsx)(f.Provider, {
        value: {
            isGift: n,
            giftCode: U,
            giftMessage: c,
            giftRecipient: S,
            setGiftRecipient: b,
            giftRecipientError: E,
            setGiftRecipientError: I,
            validatingGiftRecipient: P,
            setValidatingGiftRecipient: T,
            soundEffect: L,
            setSoundEffect: k,
            emojiConfetti: O,
            setEmojiConfetti: B,
            customGiftMessage: A,
            setCustomGiftMessage: R,
            selectedGiftStyle: v,
            setSelectedGiftStyle: N,
            sendGiftMessage: G,
            hasSentMessage: w,
            isSendingMessage: j,
            giftMessageError: F
        },
        children: h
    });
}
