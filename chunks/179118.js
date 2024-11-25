i.d(t, {
    Z: function () {
        return N;
    }
}),
    i(47120);
var n = i(200651),
    o = i(192379),
    a = i(120356),
    r = i.n(a),
    s = i(392711),
    d = i.n(s),
    c = i(442837),
    l = i(481060),
    f = i(37234),
    u = i(194359),
    p = i(700582),
    _ = i(925329),
    b = i(479446),
    g = i(522489),
    m = i(857039),
    h = i(93127),
    x = i(814443),
    C = i(590783),
    S = i(699516),
    I = i(246946),
    v = i(594174),
    k = i(572004),
    B = i(669079),
    y = i(74538),
    T = i(51144),
    E = i(563132),
    O = i(981631),
    R = i(474936),
    P = i(388032),
    j = i(431852);
function N(e) {
    let { giftCode: t, application: i, sku: a, subscriptionPlan: s, selectedGiftStyle: d, onClose: f, hasSentMessage: u, giftRecipient: b, giftMessageError: h, isSendingMessage: x, halloweenDecoPurchase: S } = e,
        [v, N] = o.useState(l.CopyInput.Modes.DEFAULT),
        M = (0, c.e7)([I.Z], () => I.Z.enabled),
        A = u || (null != d && null != b),
        G = (null == a ? void 0 : a.productLine) === O.POd.COLLECTIBLES,
        { selectedPlan: H } = (0, E.usePaymentContext)(),
        w = (0, m.Z)({ location: 'Gift purchase confirm' }) && (null == H ? void 0 : H.skuId) === R.Si.TIER_2 && null != S,
        W = () => (null != s ? s.skuId : null != a ? a.id : null),
        D = () => {
            let e;
            let t = null != d && R.kJ.includes(d);
            if (null != h) return P.intl.string(P.t.qB8ayc);
            if (null == s) return null;
            if (s.interval === R.rV.MONTH) {
                if (w) return P.intl.string(P.t.IelGKy);
                e = A ? (t ? P.t.ECjJJy : P.t['4ZJ+7e']) : P.t['P+z55e'];
            } else {
                if (w) return P.intl.string(P.t.gausub);
                e = A ? (t ? P.t.jeiz2N : P.t.p0pZXF) : P.t.bXqk3t;
            }
            return P.intl.format(e, {
                skuName: (0, y.aq)(s.id),
                intervalCount: s.intervalCount
            });
        },
        U = (e, t) => {
            null != a &&
                (0, B.dM)(
                    new C.Z({
                        code: t,
                        maxUses: 1
                    }),
                    a
                );
            try {
                (0, k.JG)(e), N(l.CopyInput.Modes.SUCCESS);
            } catch (e) {
                N(l.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                N(l.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        Z = () => {
            let e;
            if (null == t) return null;
            switch (v) {
                case l.CopyInput.Modes.SUCCESS:
                    e = P.intl.string(P.t.XVvPjY);
                    break;
                case l.CopyInput.Modes.ERROR:
                    e = P.intl.string(P.t.i4GM3N);
                    break;
                default:
                    e = P.intl.string(P.t.OpuAlJ);
            }
            return (0, n.jsxs)('div', {
                className: j.giftCodeSection,
                children: [
                    (0, n.jsx)(l.FormTitle, { children: P.intl.string(P.t['/dG4ND']) }),
                    null != t &&
                        (0, n.jsx)(l.CopyInput, {
                            hideMessage: M ? P.intl.string(P.t['0RLn4+']) : null,
                            value: (0, B.Nz)(t),
                            mode: v,
                            text: e,
                            onCopy: (e) => U(e, t),
                            supportsCopy: k.wS,
                            className: j.__invalid_copyInput,
                            buttonColor: l.ButtonColors.LINK,
                            buttonLook: l.ButtonLooks.LINK
                        }),
                    (0, n.jsx)('div', {
                        className: j.subtext,
                        children: P.intl.string(P.t.QWKUpq)
                    })
                ]
            });
        };
    return x
        ? (0, n.jsxs)('div', {
              className: j.confirmation,
              children: [
                  null != i
                      ? (0, n.jsx)(_.Z, {
                            game: i,
                            className: j.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: W()
                        })
                      : null,
                  (0, n.jsx)(l.Spinner, { type: l.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, n.jsxs)('div', {
              className: j.confirmation,
              children: [
                  null != i
                      ? (0, n.jsx)(_.Z, {
                            game: i,
                            className: j.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: W()
                        })
                      : null,
                  (0, n.jsx)(l.Heading, {
                      variant: 'heading-lg/semibold',
                      className: r()({
                          [j.header]: null == d && !G,
                          [j.headerCustomGifting]: null != d && !G
                      }),
                      children: null != b || (u && null == h) ? P.intl.string(P.t.zOmK9P) : null != h ? P.intl.string(P.t.d1lrmZ) : P.intl.string(P.t['/s1xR0'])
                  }),
                  (u && null != b && null == h) || A
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.Z, {
                                    user: b,
                                    className: j.giftRecipient,
                                    size: l.AvatarSizes.SIZE_80
                                }),
                                (0, n.jsx)(l.Heading, {
                                    className: j.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: T.ZP.getName(b)
                                }),
                                (0, n.jsxs)('div', {
                                    className: j.giftRecipientTag,
                                    children: [' ', T.ZP.getUserTag(b)]
                                }),
                                (0, n.jsx)('div', {
                                    className: j.giftSentMessage,
                                    children: D()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, B.MY)(b, G),
                                { removeGiftRecipientUI: i } = g.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== B.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)('div', {
                                        className: j.blurb,
                                        children: D()
                                    }),
                                    !i &&
                                        null == h &&
                                        (0, n.jsx)(L, {
                                            giftCode: t,
                                            onClose: f
                                        }),
                                    (0, n.jsx)('div', { className: j.divider }),
                                    Z()
                                ]
                            });
                        })()
              ]
          });
}
let L = (e) => {
    let { giftCode: t, onClose: i } = e;
    o.useEffect(() => {
        u.Z.fetchRelationships(), (0, h.W)();
    }, []);
    let [a, r] = o.useState(),
        [s, _] = o.useState(!1),
        [g, m] = o.useState(!1),
        { userAffinities: C, isLoading: I } = (0, c.cj)([x.Z], () => ({
            userAffinities: x.Z.getUserAffinitiesUserIds(),
            isLoading: x.Z.getFetching()
        })),
        k = Array.from(C.values()),
        B = (0, c.e7)([S.Z], () => S.Z.getFriendIDs()),
        y = d().difference(B, k),
        E = [...k, ...y],
        O = (0, c.e7)([v.default], () => v.default.filter((e) => E.includes(e.id) && !e.bot), [E]);
    if (null == O || 0 === O.length) return null;
    let R = d().sortBy(O, (e) => E.indexOf(e.id));
    return (0, n.jsxs)('div', {
        className: j.giftRecipientSection,
        children: [
            (0, n.jsx)(l.FormTitle, { children: P.intl.string(P.t.MJw05e) }),
            (0, n.jsxs)('div', {
                className: j.giftRecipient,
                children: [
                    (0, n.jsx)(l.SearchableSelect, {
                        placeholder: P.intl.string(P.t.J019jY),
                        wrapperClassName: j.giftRecipientInputWrapper,
                        className: s ? j.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, n.jsx)(p.Z, {
                                      user: e.value,
                                      size: l.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (I ? (0, n.jsx)(l.Spinner, { type: l.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            r(e), _(!1);
                        },
                        options: R.map((e) => ({
                            value: e,
                            label: ''.concat(T.ZP.getUserTag(e))
                        }))
                    }),
                    (0, n.jsx)(l.Button, {
                        disabled: null == a,
                        submitting: g,
                        className: j.sendToRecipientButton,
                        onClick: () => {
                            m(!0),
                                (0, b.YD)(a, t)
                                    .then(() => {
                                        i(), (0, f.Ou)();
                                    })
                                    .catch(() => {
                                        _(!0), m(!1);
                                    });
                        },
                        children: P.intl.string(P.t['+EgwQk'])
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: s ? j.subtextError : j.subtext,
                children: s ? P.intl.string(P.t.jo5Vbm) : P.intl.string(P.t['8/N3v7'])
            })
        ]
    });
};
