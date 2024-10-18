n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    u = n(481060),
    d = n(37234),
    _ = n(194359),
    E = n(700582),
    I = n(925329),
    m = n(479446),
    T = n(522489),
    f = n(857039),
    h = n(93127),
    N = n(814443),
    p = n(590783),
    C = n(699516),
    g = n(246946),
    S = n(594174),
    A = n(572004),
    x = n(669079),
    R = n(74538),
    O = n(51144),
    v = n(598),
    M = n(981631),
    L = n(474936),
    Z = n(689938),
    P = n(524254);
function b(e) {
    let { giftCode: t, application: n, sku: s, subscriptionPlan: l, selectedGiftStyle: o, onClose: d, hasSentMessage: _, giftRecipient: m, giftMessageError: h, isSendingMessage: N, halloweenDecoPurchase: C } = e,
        [S, b] = a.useState(u.CopyInput.Modes.DEFAULT),
        j = (0, c.e7)([g.Z], () => g.Z.enabled),
        U = _ || (null != o && null != m),
        y = (null == s ? void 0 : s.productLine) === M.POd.COLLECTIBLES,
        { selectedPlan: B } = (0, v.usePaymentContext)(),
        k = (0, f.Z)({ location: 'Gift purchase confirm' }) && (null == B ? void 0 : B.skuId) === L.Si.TIER_2 && null != C,
        G = () => (null != l ? l.skuId : null != s ? s.id : null),
        F = () => {
            let e;
            let t = null != o && L.V4.includes(o);
            if (null != h) return Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB;
            if (null == l) return null;
            if (l.interval === L.rV.MONTH) {
                if (k) return Z.Z.Messages.NITROWEEN_DESKTOP_GIFT_CONFIRMATION_TITLE_MONTH;
                e = U ? (t ? Z.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY) : Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY;
            } else {
                if (k) return Z.Z.Messages.NITROWEEN_DESKTOP_GIFT_CONFIRMATION_TITLE_YEAR;
                e = U ? (t ? Z.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY) : Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY;
            }
            return e.format({
                skuName: (0, R.aq)(l.id),
                intervalCount: l.intervalCount
            });
        },
        w = (e, t) => {
            null != s &&
                (0, x.dM)(
                    new p.Z({
                        code: t,
                        maxUses: 1
                    }),
                    s
                );
            try {
                (0, A.JG)(e), b(u.CopyInput.Modes.SUCCESS);
            } catch (e) {
                b(u.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                b(u.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        V = () => {
            let e;
            if (null == t) return null;
            switch (S) {
                case u.CopyInput.Modes.SUCCESS:
                    e = Z.Z.Messages.BILLING_GIFT_COPIED;
                    break;
                case u.CopyInput.Modes.ERROR:
                    e = Z.Z.Messages.FAILED;
                    break;
                default:
                    e = Z.Z.Messages.COPY;
            }
            return (0, i.jsxs)('div', {
                className: P.giftCodeSection,
                children: [
                    (0, i.jsx)(u.FormTitle, { children: Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK }),
                    null != t &&
                        (0, i.jsx)(u.CopyInput, {
                            hideMessage: j ? Z.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                            value: (0, x.Nz)(t),
                            mode: S,
                            text: e,
                            onCopy: (e) => w(e, t),
                            supportsCopy: A.wS,
                            className: P.__invalid_copyInput,
                            buttonColor: u.ButtonColors.LINK,
                            buttonLook: u.ButtonLooks.LINK
                        }),
                    (0, i.jsx)('div', {
                        className: P.subtext,
                        children: Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                    })
                ]
            });
        };
    return N
        ? (0, i.jsxs)('div', {
              className: P.confirmation,
              children: [
                  null != n
                      ? (0, i.jsx)(I.Z, {
                            game: n,
                            className: P.__invalid_icon,
                            size: I.Z.Sizes.LARGE,
                            skuId: G()
                        })
                      : null,
                  (0, i.jsx)(u.Spinner, { type: u.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, i.jsxs)('div', {
              className: P.confirmation,
              children: [
                  null != n
                      ? (0, i.jsx)(I.Z, {
                            game: n,
                            className: P.__invalid_icon,
                            size: I.Z.Sizes.LARGE,
                            skuId: G()
                        })
                      : null,
                  (0, i.jsx)(u.Heading, {
                      variant: 'heading-lg/semibold',
                      className: r()({
                          [P.header]: null == o && !y,
                          [P.headerCustomGifting]: null != o && !y
                      }),
                      children: null != m || (_ && null == h) ? Z.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != h ? Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : Z.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
                  }),
                  (_ && null != m && null == h) || U
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(E.Z, {
                                    user: m,
                                    className: P.giftRecipient,
                                    size: u.AvatarSizes.SIZE_80
                                }),
                                (0, i.jsx)(u.Heading, {
                                    className: P.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: O.ZP.getName(m)
                                }),
                                (0, i.jsxs)('div', {
                                    className: P.giftRecipientTag,
                                    children: [' ', O.ZP.getUserTag(m)]
                                }),
                                (0, i.jsx)('div', {
                                    className: P.giftSentMessage,
                                    children: F()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, x.MY)(m, y),
                                { removeGiftRecipientUI: n } = T.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== x.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: P.blurb,
                                        children: F()
                                    }),
                                    !n &&
                                        null == h &&
                                        (0, i.jsx)(D, {
                                            giftCode: t,
                                            onClose: d
                                        }),
                                    (0, i.jsx)('div', { className: P.divider }),
                                    V()
                                ]
                            });
                        })()
              ]
          });
}
let D = (e) => {
    let { giftCode: t, onClose: n } = e;
    a.useEffect(() => {
        _.Z.fetchRelationships(), (0, h.W)();
    }, []);
    let [s, r] = a.useState(),
        [l, I] = a.useState(!1),
        [T, f] = a.useState(!1),
        { userAffinities: p, isLoading: g } = (0, c.cj)([N.Z], () => ({
            userAffinities: N.Z.getUserAffinitiesUserIds(),
            isLoading: N.Z.getFetching()
        })),
        A = Array.from(p.values()),
        x = (0, c.e7)([C.Z], () => C.Z.getFriendIDs()),
        R = o().difference(x, A),
        v = [...A, ...R],
        M = (0, c.e7)([S.default], () => S.default.filter((e) => v.includes(e.id) && !e.bot), [v]);
    if (null == M || 0 === M.length) return null;
    let L = o().sortBy(M, (e) => v.indexOf(e.id));
    return (0, i.jsxs)('div', {
        className: P.giftRecipientSection,
        children: [
            (0, i.jsx)(u.FormTitle, { children: Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL }),
            (0, i.jsxs)('div', {
                className: P.giftRecipient,
                children: [
                    (0, i.jsx)(u.SearchableSelect, {
                        placeholder: Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                        wrapperClassName: P.giftRecipientInputWrapper,
                        className: l ? P.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, i.jsx)(E.Z, {
                                      user: e.value,
                                      size: u.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (g ? (0, i.jsx)(u.Spinner, { type: u.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: s,
                        onChange: (e) => {
                            r(e), I(!1);
                        },
                        options: L.map((e) => ({
                            value: e,
                            label: ''.concat(O.ZP.getUserTag(e))
                        }))
                    }),
                    (0, i.jsx)(u.Button, {
                        disabled: null == s,
                        submitting: T,
                        className: P.sendToRecipientButton,
                        onClick: () => {
                            f(!0),
                                (0, m.YD)(s, t)
                                    .then(() => {
                                        n(), (0, d.Ou)();
                                    })
                                    .catch(() => {
                                        I(!0), f(!1);
                                    });
                        },
                        children: Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: l ? P.subtextError : P.subtext,
                children: l ? Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : Z.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
            })
        ]
    });
};
