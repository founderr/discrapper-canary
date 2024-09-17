t.d(n, {
    KB: function () {
        return S;
    },
    wD: function () {
        return h;
    }
}),
    t(47120);
var o = t(735250),
    r = t(470079),
    a = t(479446),
    i = t(646476),
    c = t(155491),
    l = t(975104),
    s = t(669079),
    u = t(598),
    d = t(474936),
    p = t(689938);
let _ = d.Cj.STANDARD_BOX,
    f = void 0,
    [m, h, g] = (0, l.Z)();
function S(e) {
    let { isGift: n = !1, giftRecipient: t, giftMessage: l, giftStyle: h, children: g } = e,
        { selectedSkuId: S } = (0, u.usePaymentContext)(),
        [b, E] = r.useState(t),
        [I, P] = r.useState(),
        [x, T] = r.useState(!1),
        y = (0, s.pO)(b),
        M = (0, i.rK)(),
        { enabled: C } = i.ZP.useExperiment({ location: 'PaymentContextProvider' }, { autoTrackExposure: y && M }),
        v = f;
    y && (v = C && M ? d.Cj.SEASONAL_STANDARD_BOX : null != h ? h : _);
    let [N, A] = r.useState(v),
        [R, L] = r.useState(n && (0, s.MY)(b) === s.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null == l ? p.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : l),
        [k, O] = r.useState(void 0),
        [B, U] = r.useState(void 0),
        w = (0, s.E5)(S, n),
        [D, j] = r.useState(!1),
        [Z, F] = r.useState(!1),
        [W, G] = r.useState(),
        Y = r.useCallback(
            (e) => {
                let { onSubscriptionConfirmation: n } = e;
                return (
                    F(!0),
                    (0, a.YD)(b, w)
                        .then(() => {
                            F(!1), null == n || n(), j(!0);
                        })
                        .catch((e) => {
                            F(!1), G(e), j(!0);
                        })
                );
            },
            [b, w, F, j, G]
        ),
        H = (0, c.x8)();
    return (0, o.jsx)(m.Provider, {
        value: {
            isGift: n,
            giftCode: w,
            giftMessage: l,
            giftRecipient: b,
            setGiftRecipient: E,
            giftRecipientError: I,
            setGiftRecipientError: P,
            validatingGiftRecipient: x,
            setValidatingGiftRecipient: T,
            soundEffect: k,
            setSoundEffect: O,
            emojiConfetti: B,
            setEmojiConfetti: U,
            customGiftMessage: R,
            setCustomGiftMessage: L,
            selectedGiftStyle: N,
            setSelectedGiftStyle: A,
            sendGiftMessage: Y,
            hasSentMessage: D,
            isSendingMessage: Z,
            giftMessageError: W,
            alreadyHasHalloweenDeco: H
        },
        children: g
    });
}
