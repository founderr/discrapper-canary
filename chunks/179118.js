n.d(t, {
    Z: function () {
        return Z;
    }
}), n(47120);
var r = n(735250), s = n(470079), a = n(120356), o = n.n(a), i = n(392711), l = n.n(i), c = n(442837), d = n(481060), u = n(37234), p = n(194359), g = n(700582), f = n(479446), C = n(93127), m = n(814443), h = n(590783), _ = n(699516), b = n(246946), x = n(594174), I = n(366695), E = n(572004), L = n(669079), S = n(74538), v = n(51144), T = n(981631), N = n(474936), O = n(689938), j = n(882284);
function Z(e) {
    let {
            giftCode: t,
            application: n,
            sku: a,
            subscriptionPlan: i,
            selectedGiftStyle: l,
            onClose: u,
            hasSentMessage: p,
            giftRecipient: f,
            giftMessageError: C,
            isSendingMessage: m
        } = e, [_, x] = s.useState(d.CopyInput.Modes.DEFAULT), Z = (0, c.e7)([b.Z], () => b.Z.enabled), R = p || null != l && null != f, A = () => null != i ? i.skuId : null != a ? a.id : null, P = () => {
            let e;
            let t = null != l && N.V4.includes(l);
            return null != C ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_FAILURE_GENERIC_BLURB : null == i ? null : (e = i.interval === N.rV.MONTH ? R ? t ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_MONTHLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_MONTHLY : R ? t ? O.Z.Messages.APPLICATION_STORE_SEASONAL_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_CONFIRM_SUBSCRIPTION_YEARLY : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRM_SUBSCRIPTION_YEARLY).format({
                skuName: (0, S.aq)(i.id),
                intervalCount: i.intervalCount
            });
        }, B = (e, t) => {
            null != a && (0, L.dM)(new h.Z({
                code: t,
                maxUses: 1
            }), a);
            try {
                (0, E.JG)(e), x(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
                x(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                x(d.CopyInput.Modes.DEFAULT);
            }, 1500);
        }, M = () => {
            let e;
            if (null == t)
                return null;
            switch (_) {
            case d.CopyInput.Modes.SUCCESS:
                e = O.Z.Messages.BILLING_GIFT_COPIED;
                break;
            case d.CopyInput.Modes.ERROR:
                e = O.Z.Messages.FAILED;
                break;
            default:
                e = O.Z.Messages.COPY;
            }
            return (0, r.jsxs)('div', {
                className: j.giftCodeSection,
                children: [
                    (0, r.jsx)(d.FormTitle, { children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_PRIVATE_LINK }),
                    null != t && (0, r.jsx)(d.CopyInput, {
                        hideMessage: Z ? O.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                        value: (0, L.Nz)(t),
                        mode: _,
                        text: e,
                        onCopy: e => B(e, t),
                        supportsCopy: E.wS,
                        className: j.__invalid_copyInput,
                        buttonColor: d.ButtonColors.LINK,
                        buttonLook: d.ButtonLooks.LINK
                    }),
                    (0, r.jsx)('div', {
                        className: j.subtext,
                        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_CONFIRMATION_SUBTEXT_NO_FORMAT
                    })
                ]
            });
        };
    if (m)
        return (0, r.jsxs)('div', {
            className: j.confirmation,
            children: [
                null != n ? (0, r.jsx)(I.Z, {
                    game: n,
                    className: j.__invalid_icon,
                    size: I.Z.Sizes.LARGE,
                    skuId: A()
                }) : null,
                (0, r.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS })
            ]
        });
    let y = (null == a ? void 0 : a.productLine) === T.POd.COLLECTIBLES;
    return (0, r.jsxs)('div', {
        className: j.confirmation,
        children: [
            null != n ? (0, r.jsx)(I.Z, {
                game: n,
                className: j.__invalid_icon,
                size: I.Z.Sizes.LARGE,
                skuId: A()
            }) : null,
            (0, r.jsx)(d.Heading, {
                variant: 'heading-lg/semibold',
                className: o()({
                    [j.header]: null == l && !y,
                    [j.headerCustomGifting]: null != l && !y
                }),
                children: null != f || p && null == C ? O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_AND_MESSAGE_CONFIRMATION_TITLE : null != C ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_AND_MESSAGE_FAILED : O.Z.Messages.APPLICATION_STORE_PURCHASE_GIFT_CONFIRMATION_TITLE
            }),
            p && null != f && null == C || R ? (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(g.Z, {
                        user: f,
                        className: j.giftRecipient,
                        size: d.AvatarSizes.SIZE_80
                    }),
                    (0, r.jsx)(d.Heading, {
                        className: j.giftRecipientName,
                        variant: 'heading-md/semibold',
                        children: v.ZP.getName(f)
                    }),
                    (0, r.jsxs)('div', {
                        className: j.giftRecipientTag,
                        children: [
                            ' ',
                            v.ZP.getUserTag(f)
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: j.giftSentMessage,
                        children: P()
                    })
                ]
            }) : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)('div', {
                        className: j.blurb,
                        children: P()
                    }),
                    null == C && (0, r.jsx)(k, {
                        giftCode: t,
                        onClose: u
                    }),
                    (0, r.jsx)('div', { className: j.divider }),
                    M()
                ]
            })
        ]
    });
}
let k = e => {
    let {
        giftCode: t,
        onClose: n
    } = e;
    s.useEffect(() => {
        p.Z.fetchRelationships(), (0, C.W)();
    }, []);
    let [a, o] = s.useState(), [i, h] = s.useState(!1), [b, I] = s.useState(!1), {
            userAffinities: E,
            isLoading: L
        } = (0, c.cj)([m.Z], () => ({
            userAffinities: m.Z.getUserAffinitiesUserIds(),
            isLoading: m.Z.getFetching()
        })), S = Array.from(E.values()), T = (0, c.e7)([_.Z], () => _.Z.getFriendIDs()), N = l().difference(T, S), Z = [
            ...S,
            ...N
        ], k = (0, c.e7)([x.default], () => x.default.filter(e => Z.includes(e.id) && !e.bot), [Z]);
    if (null == k || 0 === k.length)
        return null;
    let R = l().sortBy(k, e => Z.indexOf(e.id));
    return (0, r.jsxs)('div', {
        className: j.giftRecipientSection,
        children: [
            (0, r.jsx)(d.FormTitle, { children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SECTION_LABEL }),
            (0, r.jsxs)('div', {
                className: j.giftRecipient,
                children: [
                    (0, r.jsx)(d.SearchableSelect, {
                        placeholder: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SELECT_PLACEHOLDER,
                        wrapperClassName: j.giftRecipientInputWrapper,
                        className: i ? j.giftRecipientInputError : void 0,
                        renderOptionPrefix: e => (null == e ? void 0 : e.value) == null ? null : (0, r.jsx)(g.Z, {
                            user: e.value,
                            size: d.AvatarSizes.SIZE_20
                        }),
                        renderLeading: () => L ? (0, r.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }) : null,
                        value: a,
                        onChange: e => {
                            o(e), h(!1);
                        },
                        options: R.map(e => ({
                            value: e,
                            label: ''.concat(v.ZP.getUserTag(e))
                        }))
                    }),
                    (0, r.jsx)(d.Button, {
                        disabled: null == a,
                        submitting: b,
                        className: j.sendToRecipientButton,
                        onClick: () => {
                            I(!0), (0, f.Y)(a, t).then(() => {
                                n(), (0, u.Ou)();
                            }).catch(() => {
                                h(!0), I(!1);
                            });
                        },
                        children: O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_SEND_NOW_BUTTON
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: i ? j.subtextError : j.subtext,
                children: i ? O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_ERROR_SENDING_LINK : O.Z.Messages.APPLICATION_STORE_GIFT_PURCHASE_GIFT_RECIPIENT_SUBTEXT
            })
        ]
    });
};
