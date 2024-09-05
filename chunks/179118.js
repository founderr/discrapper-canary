n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120);
var a = n(735250),
    r = n(470079),
    s = n(120356),
    o = n.n(s),
    i = n(392711),
    l = n.n(i),
    c = n(442837),
    d = n(481060),
    u = n(37234),
    f = n(194359),
    p = n(700582),
    g = n(925329),
    C = n(479446),
    m = n(522489),
    _ = n(93127),
    h = n(814443),
    b = n(590783),
    x = n(699516),
    I = n(246946),
    E = n(594174),
    v = n(572004),
    L = n(669079),
    S = n(74538),
    T = n(51144),
    N = n(981631),
    O = n(474936),
    k = n(689938),
    B = n(851212);
function j(e) {
    let { giftCode: t, application: n, sku: s, subscriptionPlan: i, selectedGiftStyle: l, onClose: u, hasSentMessage: f, giftRecipient: C, giftMessageError: _, isSendingMessage: h } = e,
        [x, E] = r.useState(d.CopyInput.Modes.DEFAULT),
        j = (0, c.e7)([I.Z], () => I.Z.enabled),
        P = f || (null != l && null != C),
        A = (null == s ? void 0 : s.productLine) === N.POd.COLLECTIBLES,
        R = () => (null != i ? i.skuId : null != s ? s.id : null),
        y = () => {
            let e;
            let t = null != l && O.V4.includes(l);
            return null != _
                ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
                : null == i
                  ? null
                  : (e = i.interval === O.rV.MONTH ? (P ? (t ? k.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY) : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY) : P ? (t ? k.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY) : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, S.aq)(i.id),
                        intervalCount: i.intervalCount
                    });
        },
        M = (e, t) => {
            null != s &&
                (0, L.dM)(
                    new b.Z({
                        code: t,
                        maxUses: 1
                    }),
                    s
                );
            try {
                (0, v.JG)(e), E(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
                E(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                E(d.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        w = () => {
            let e;
            if (null == t) return null;
            switch (x) {
                case d.CopyInput.Modes.SUCCESS:
                    e = k.Z.Messages.BILLING_GIFT_COPIED;
                    break;
                case d.CopyInput.Modes.ERROR:
                    e = k.Z.Messages.FAILED;
                    break;
                default:
                    e = k.Z.Messages.COPY;
            }
            return (0, a.jsxs)('div', {
                className: B.giftCodeSection,
                children: [
                    (0, a.jsx)(d.FormTitle, { children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK }),
                    null != t &&
                        (0, a.jsx)(d.CopyInput, {
                            hideMessage: j ? k.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                            value: (0, L.Nz)(t),
                            mode: x,
                            text: e,
                            onCopy: (e) => M(e, t),
                            supportsCopy: v.wS,
                            className: B.__invalid_copyInput,
                            buttonColor: d.ButtonColors.LINK,
                            buttonLook: d.ButtonLooks.LINK
                        }),
                    (0, a.jsx)('div', {
                        className: B.subtext,
                        children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                    })
                ]
            });
        };
    return h
        ? (0, a.jsxs)('div', {
              className: B.confirmation,
              children: [
                  null != n
                      ? (0, a.jsx)(g.Z, {
                            game: n,
                            className: B.__invalid_icon,
                            size: g.Z.Sizes.LARGE,
                            skuId: R()
                        })
                      : null,
                  (0, a.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, a.jsxs)('div', {
              className: B.confirmation,
              children: [
                  null != n
                      ? (0, a.jsx)(g.Z, {
                            game: n,
                            className: B.__invalid_icon,
                            size: g.Z.Sizes.LARGE,
                            skuId: R()
                        })
                      : null,
                  (0, a.jsx)(d.Heading, {
                      variant: 'heading-lg/semibold',
                      className: o()({
                          [B.header]: null == l && !A,
                          [B.headerCustomGifting]: null != l && !A
                      }),
                      children: null != C || (f && null == _) ? k.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != _ ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : k.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
                  }),
                  (f && null != C && null == _) || P
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(p.Z, {
                                    user: C,
                                    className: B.giftRecipient,
                                    size: d.AvatarSizes.SIZE_80
                                }),
                                (0, a.jsx)(d.Heading, {
                                    className: B.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: T.ZP.getName(C)
                                }),
                                (0, a.jsxs)('div', {
                                    className: B.giftRecipientTag,
                                    children: [' ', T.ZP.getUserTag(C)]
                                }),
                                (0, a.jsx)('div', {
                                    className: B.giftSentMessage,
                                    children: y()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, L.MY)(C, A),
                                { removeGiftRecipientUI: n } = m.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== L.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('div', {
                                        className: B.blurb,
                                        children: y()
                                    }),
                                    !n &&
                                        null == _ &&
                                        (0, a.jsx)(Z, {
                                            giftCode: t,
                                            onClose: u
                                        }),
                                    (0, a.jsx)('div', { className: B.divider }),
                                    w()
                                ]
                            });
                        })()
              ]
          });
}
let Z = (e) => {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        f.Z.fetchRelationships(), (0, _.W)();
    }, []);
    let [s, o] = r.useState(),
        [i, g] = r.useState(!1),
        [m, b] = r.useState(!1),
        { userAffinities: I, isLoading: v } = (0, c.cj)([h.Z], () => ({
            userAffinities: h.Z.getUserAffinitiesUserIds(),
            isLoading: h.Z.getFetching()
        })),
        L = Array.from(I.values()),
        S = (0, c.e7)([x.Z], () => x.Z.getFriendIDs()),
        N = l().difference(S, L),
        O = [...L, ...N],
        j = (0, c.e7)([E.default], () => E.default.filter((e) => O.includes(e.id) && !e.bot), [O]);
    if (null == j || 0 === j.length) return null;
    let Z = l().sortBy(j, (e) => O.indexOf(e.id));
    return (0, a.jsxs)('div', {
        className: B.giftRecipientSection,
        children: [
            (0, a.jsx)(d.FormTitle, { children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL }),
            (0, a.jsxs)('div', {
                className: B.giftRecipient,
                children: [
                    (0, a.jsx)(d.SearchableSelect, {
                        placeholder: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                        wrapperClassName: B.giftRecipientInputWrapper,
                        className: i ? B.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, a.jsx)(p.Z, {
                                      user: e.value,
                                      size: d.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (v ? (0, a.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: s,
                        onChange: (e) => {
                            o(e), g(!1);
                        },
                        options: Z.map((e) => ({
                            value: e,
                            label: ''.concat(T.ZP.getUserTag(e))
                        }))
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: null == s,
                        submitting: m,
                        className: B.sendToRecipientButton,
                        onClick: () => {
                            b(!0),
                                (0, C.Y)(s, t)
                                    .then(() => {
                                        n(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        g(!0), b(!1);
                                    });
                        },
                        children: k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: i ? B.subtextError : B.subtext,
                children: i ? k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : k.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
            })
        ]
    });
};
