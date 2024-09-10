r.d(t, {
    Z: function () {
        return j;
    }
}),
    r(47120);
var a = r(735250),
    n = r(470079),
    s = r(120356),
    i = r.n(s),
    o = r(392711),
    l = r.n(o),
    c = r(442837),
    d = r(481060),
    u = r(37234),
    f = r(194359),
    p = r(700582),
    m = r(925329),
    C = r(479446),
    _ = r(522489),
    g = r(93127),
    h = r(814443),
    b = r(590783),
    E = r(699516),
    I = r(246946),
    x = r(594174),
    v = r(572004),
    T = r(669079),
    S = r(74538),
    L = r(51144),
    N = r(981631),
    O = r(474936),
    B = r(689938),
    k = r(851212);
function j(e) {
    let { giftCode: t, application: r, sku: s, subscriptionPlan: o, selectedGiftStyle: l, onClose: u, hasSentMessage: f, giftRecipient: C, giftMessageError: g, isSendingMessage: h } = e,
        [E, x] = n.useState(d.CopyInput.Modes.DEFAULT),
        j = (0, c.e7)([I.Z], () => I.Z.enabled),
        P = f || (null != l && null != C),
        Z = (null == s ? void 0 : s.productLine) === N.POd.COLLECTIBLES,
        A = () => (null != o ? o.skuId : null != s ? s.id : null),
        M = () => {
            let e;
            let t = null != l && O.V4.includes(l);
            return null != g
                ? B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB
                : null == o
                  ? null
                  : (e = o.interval === O.rV.MONTH ? (P ? (t ? B.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY) : B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY) : P ? (t ? B.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY) : B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                        skuName: (0, S.aq)(o.id),
                        intervalCount: o.intervalCount
                    });
        },
        y = (e, t) => {
            null != s &&
                (0, T.dM)(
                    new b.Z({
                        code: t,
                        maxUses: 1
                    }),
                    s
                );
            try {
                (0, v.JG)(e), x(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
                x(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                x(d.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        w = () => {
            let e;
            if (null == t) return null;
            switch (E) {
                case d.CopyInput.Modes.SUCCESS:
                    e = B.Z.Messages.BILLING_GIFT_COPIED;
                    break;
                case d.CopyInput.Modes.ERROR:
                    e = B.Z.Messages.FAILED;
                    break;
                default:
                    e = B.Z.Messages.COPY;
            }
            return (0, a.jsxs)('div', {
                className: k.giftCodeSection,
                children: [
                    (0, a.jsx)(d.FormTitle, { children: B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK }),
                    null != t &&
                        (0, a.jsx)(d.CopyInput, {
                            hideMessage: j ? B.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                            value: (0, T.Nz)(t),
                            mode: E,
                            text: e,
                            onCopy: (e) => y(e, t),
                            supportsCopy: v.wS,
                            className: k.__invalid_copyInput,
                            buttonColor: d.ButtonColors.LINK,
                            buttonLook: d.ButtonLooks.LINK
                        }),
                    (0, a.jsx)('div', {
                        className: k.subtext,
                        children: B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                    })
                ]
            });
        };
    return h
        ? (0, a.jsxs)('div', {
              className: k.confirmation,
              children: [
                  null != r
                      ? (0, a.jsx)(m.Z, {
                            game: r,
                            className: k.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: A()
                        })
                      : null,
                  (0, a.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, a.jsxs)('div', {
              className: k.confirmation,
              children: [
                  null != r
                      ? (0, a.jsx)(m.Z, {
                            game: r,
                            className: k.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: A()
                        })
                      : null,
                  (0, a.jsx)(d.Heading, {
                      variant: 'heading-lg/semibold',
                      className: i()({
                          [k.header]: null == l && !Z,
                          [k.headerCustomGifting]: null != l && !Z
                      }),
                      children: null != C || (f && null == g) ? B.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != g ? B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : B.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
                  }),
                  (f && null != C && null == g) || P
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(p.Z, {
                                    user: C,
                                    className: k.giftRecipient,
                                    size: d.AvatarSizes.SIZE_80
                                }),
                                (0, a.jsx)(d.Heading, {
                                    className: k.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: L.ZP.getName(C)
                                }),
                                (0, a.jsxs)('div', {
                                    className: k.giftRecipientTag,
                                    children: [' ', L.ZP.getUserTag(C)]
                                }),
                                (0, a.jsx)('div', {
                                    className: k.giftSentMessage,
                                    children: M()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, T.MY)(C, Z),
                                { removeGiftRecipientUI: r } = _.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== T.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)('div', {
                                        className: k.blurb,
                                        children: M()
                                    }),
                                    !r &&
                                        null == g &&
                                        (0, a.jsx)(R, {
                                            giftCode: t,
                                            onClose: u
                                        }),
                                    (0, a.jsx)('div', { className: k.divider }),
                                    w()
                                ]
                            });
                        })()
              ]
          });
}
let R = (e) => {
    let { giftCode: t, onClose: r } = e;
    n.useEffect(() => {
        f.Z.fetchRelationships(), (0, g.W)();
    }, []);
    let [s, i] = n.useState(),
        [o, m] = n.useState(!1),
        [_, b] = n.useState(!1),
        { userAffinities: I, isLoading: v } = (0, c.cj)([h.Z], () => ({
            userAffinities: h.Z.getUserAffinitiesUserIds(),
            isLoading: h.Z.getFetching()
        })),
        T = Array.from(I.values()),
        S = (0, c.e7)([E.Z], () => E.Z.getFriendIDs()),
        N = l().difference(S, T),
        O = [...T, ...N],
        j = (0, c.e7)([x.default], () => x.default.filter((e) => O.includes(e.id) && !e.bot), [O]);
    if (null == j || 0 === j.length) return null;
    let R = l().sortBy(j, (e) => O.indexOf(e.id));
    return (0, a.jsxs)('div', {
        className: k.giftRecipientSection,
        children: [
            (0, a.jsx)(d.FormTitle, { children: B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL }),
            (0, a.jsxs)('div', {
                className: k.giftRecipient,
                children: [
                    (0, a.jsx)(d.SearchableSelect, {
                        placeholder: B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                        wrapperClassName: k.giftRecipientInputWrapper,
                        className: o ? k.giftRecipientInputError : void 0,
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
                            i(e), m(!1);
                        },
                        options: R.map((e) => ({
                            value: e,
                            label: ''.concat(L.ZP.getUserTag(e))
                        }))
                    }),
                    (0, a.jsx)(d.Button, {
                        disabled: null == s,
                        submitting: _,
                        className: k.sendToRecipientButton,
                        onClick: () => {
                            b(!0),
                                (0, C.YD)(s, t)
                                    .then(() => {
                                        r(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        m(!0), b(!1);
                                    });
                        },
                        children: B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: o ? k.subtextError : k.subtext,
                children: o ? B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : B.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
            })
        ]
    });
};
