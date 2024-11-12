i.d(t, {
    Z: function () {
        return P;
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
    u = i(37234),
    f = i(194359),
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
    k = i(594174),
    v = i(572004),
    B = i(669079),
    y = i(74538),
    T = i(51144),
    O = i(563132),
    R = i(981631),
    E = i(474936),
    j = i(388032),
    N = i(524254);
function P(e) {
    let { giftCode: t, application: i, sku: a, subscriptionPlan: s, selectedGiftStyle: d, onClose: u, hasSentMessage: f, giftRecipient: b, giftMessageError: h, isSendingMessage: x, halloweenDecoPurchase: S } = e,
        [k, P] = o.useState(l.CopyInput.Modes.DEFAULT),
        M = (0, c.e7)([I.Z], () => I.Z.enabled),
        A = f || (null != d && null != b),
        G = (null == a ? void 0 : a.productLine) === R.POd.COLLECTIBLES,
        { selectedPlan: H } = (0, O.usePaymentContext)(),
        w = (0, m.Z)({ location: 'Gift purchase confirm' }) && (null == H ? void 0 : H.skuId) === E.Si.TIER_2 && null != S,
        W = () => (null != s ? s.skuId : null != a ? a.id : null),
        D = () => {
            let e;
            let t = null != d && E.kJ.includes(d);
            if (null != h) return j.intl.string(j.t.qB8ayc);
            if (null == s) return null;
            if (s.interval === E.rV.MONTH) {
                if (w) return j.intl.string(j.t.IelGKy);
                e = A ? (t ? j.t.ECjJJy : j.t['4ZJ+7e']) : j.t['P+z55e'];
            } else {
                if (w) return j.intl.string(j.t.gausub);
                e = A ? (t ? j.t.jeiz2N : j.t.p0pZXF) : j.t.bXqk3t;
            }
            return j.intl.format(e, {
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
                (0, v.JG)(e), P(l.CopyInput.Modes.SUCCESS);
            } catch (e) {
                P(l.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                P(l.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        Z = () => {
            let e;
            if (null == t) return null;
            switch (k) {
                case l.CopyInput.Modes.SUCCESS:
                    e = j.intl.string(j.t.XVvPjY);
                    break;
                case l.CopyInput.Modes.ERROR:
                    e = j.intl.string(j.t.i4GM3N);
                    break;
                default:
                    e = j.intl.string(j.t.OpuAlJ);
            }
            return (0, n.jsxs)('div', {
                className: N.giftCodeSection,
                children: [
                    (0, n.jsx)(l.FormTitle, { children: j.intl.string(j.t['/dG4ND']) }),
                    null != t &&
                        (0, n.jsx)(l.CopyInput, {
                            hideMessage: M ? j.intl.string(j.t['0RLn4+']) : null,
                            value: (0, B.Nz)(t),
                            mode: k,
                            text: e,
                            onCopy: (e) => U(e, t),
                            supportsCopy: v.wS,
                            className: N.__invalid_copyInput,
                            buttonColor: l.ButtonColors.LINK,
                            buttonLook: l.ButtonLooks.LINK
                        }),
                    (0, n.jsx)('div', {
                        className: N.subtext,
                        children: j.intl.string(j.t.QWKUpq)
                    })
                ]
            });
        };
    return x
        ? (0, n.jsxs)('div', {
              className: N.confirmation,
              children: [
                  null != i
                      ? (0, n.jsx)(_.Z, {
                            game: i,
                            className: N.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: W()
                        })
                      : null,
                  (0, n.jsx)(l.Spinner, { type: l.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, n.jsxs)('div', {
              className: N.confirmation,
              children: [
                  null != i
                      ? (0, n.jsx)(_.Z, {
                            game: i,
                            className: N.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: W()
                        })
                      : null,
                  (0, n.jsx)(l.Heading, {
                      variant: 'heading-lg/semibold',
                      className: r()({
                          [N.header]: null == d && !G,
                          [N.headerCustomGifting]: null != d && !G
                      }),
                      children: null != b || (f && null == h) ? j.intl.string(j.t.zOmK9P) : null != h ? j.intl.string(j.t.d1lrmZ) : j.intl.string(j.t['/s1xR0'])
                  }),
                  (f && null != b && null == h) || A
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.Z, {
                                    user: b,
                                    className: N.giftRecipient,
                                    size: l.AvatarSizes.SIZE_80
                                }),
                                (0, n.jsx)(l.Heading, {
                                    className: N.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: T.ZP.getName(b)
                                }),
                                (0, n.jsxs)('div', {
                                    className: N.giftRecipientTag,
                                    children: [' ', T.ZP.getUserTag(b)]
                                }),
                                (0, n.jsx)('div', {
                                    className: N.giftSentMessage,
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
                                        className: N.blurb,
                                        children: D()
                                    }),
                                    !i &&
                                        null == h &&
                                        (0, n.jsx)(L, {
                                            giftCode: t,
                                            onClose: u
                                        }),
                                    (0, n.jsx)('div', { className: N.divider }),
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
        f.Z.fetchRelationships(), (0, h.W)();
    }, []);
    let [a, r] = o.useState(),
        [s, _] = o.useState(!1),
        [g, m] = o.useState(!1),
        { userAffinities: C, isLoading: I } = (0, c.cj)([x.Z], () => ({
            userAffinities: x.Z.getUserAffinitiesUserIds(),
            isLoading: x.Z.getFetching()
        })),
        v = Array.from(C.values()),
        B = (0, c.e7)([S.Z], () => S.Z.getFriendIDs()),
        y = d().difference(B, v),
        O = [...v, ...y],
        R = (0, c.e7)([k.default], () => k.default.filter((e) => O.includes(e.id) && !e.bot), [O]);
    if (null == R || 0 === R.length) return null;
    let E = d().sortBy(R, (e) => O.indexOf(e.id));
    return (0, n.jsxs)('div', {
        className: N.giftRecipientSection,
        children: [
            (0, n.jsx)(l.FormTitle, { children: j.intl.string(j.t.MJw05e) }),
            (0, n.jsxs)('div', {
                className: N.giftRecipient,
                children: [
                    (0, n.jsx)(l.SearchableSelect, {
                        placeholder: j.intl.string(j.t.J019jY),
                        wrapperClassName: N.giftRecipientInputWrapper,
                        className: s ? N.giftRecipientInputError : void 0,
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
                        options: E.map((e) => ({
                            value: e,
                            label: ''.concat(T.ZP.getUserTag(e))
                        }))
                    }),
                    (0, n.jsx)(l.Button, {
                        disabled: null == a,
                        submitting: g,
                        className: N.sendToRecipientButton,
                        onClick: () => {
                            m(!0),
                                (0, b.YD)(a, t)
                                    .then(() => {
                                        i(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        _(!0), m(!1);
                                    });
                        },
                        children: j.intl.string(j.t['+EgwQk'])
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: s ? N.subtextError : N.subtext,
                children: s ? j.intl.string(j.t.jo5Vbm) : j.intl.string(j.t['8/N3v7'])
            })
        ]
    });
};
