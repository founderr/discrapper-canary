t.d(i, {
    Z: function () {
        return w;
    }
}),
    t(47120);
var n = t(200651),
    r = t(192379),
    a = t(120356),
    o = t.n(a),
    s = t(392711),
    l = t.n(s),
    c = t(442837),
    d = t(481060),
    u = t(37234),
    f = t(194359),
    p = t(700582),
    _ = t(925329),
    b = t(479446),
    m = t(522489),
    g = t(857039),
    h = t(93127),
    x = t(814443),
    v = t(590783),
    C = t(699516),
    I = t(246946),
    S = t(594174),
    k = t(572004),
    y = t(669079),
    T = t(74538),
    B = t(51144),
    j = t(563132),
    E = t(981631),
    P = t(474936),
    N = t(388032),
    A = t(431852);
function w(e) {
    let { giftCode: i, application: t, sku: a, subscriptionPlan: s, selectedGiftStyle: l, onClose: u, hasSentMessage: f, giftRecipient: b, giftMessageError: h, isSendingMessage: x, halloweenDecoPurchase: C } = e,
        [S, w] = r.useState(d.CopyInput.Modes.DEFAULT),
        Z = (0, c.e7)([I.Z], () => I.Z.enabled),
        R = f || (null != l && null != b),
        L = (null == a ? void 0 : a.productLine) === E.POd.COLLECTIBLES,
        { selectedPlan: M } = (0, j.usePaymentContext)(),
        G = (0, g.Z)({ location: 'Gift purchase confirm' }) && (null == M ? void 0 : M.skuId) === P.Si.TIER_2 && null != C,
        D = () => (null != s ? s.skuId : null != a ? a.id : null),
        H = () => {
            let e;
            let i = null != l && P.kJ.includes(l);
            if (null != h) return N.intl.string(N.t.qB8ayc);
            if (null == s) return null;
            if (s.interval === P.rV.MONTH) {
                if (G) return N.intl.string(N.t.IelGKy);
                e = R ? (i ? N.t.ECjJJy : N.t['4ZJ+7e']) : N.t['P+z55e'];
            } else {
                if (G) return N.intl.string(N.t.gausub);
                e = R ? (i ? N.t.jeiz2N : N.t.p0pZXF) : N.t.bXqk3t;
            }
            return N.intl.format(e, {
                skuName: (0, T.aq)(s.id),
                intervalCount: s.intervalCount
            });
        },
        U = (e, i) => {
            null != a &&
                (0, y.dM)(
                    new v.Z({
                        code: i,
                        maxUses: 1
                    }),
                    a
                );
            try {
                (0, k.JG)(e), w(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
                w(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                w(d.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        W = () => {
            let e;
            if (null == i) return null;
            switch (S) {
                case d.CopyInput.Modes.SUCCESS:
                    e = N.intl.string(N.t.XVvPjY);
                    break;
                case d.CopyInput.Modes.ERROR:
                    e = N.intl.string(N.t.i4GM3N);
                    break;
                default:
                    e = N.intl.string(N.t.OpuAlJ);
            }
            return (0, n.jsxs)('div', {
                className: A.giftCodeSection,
                children: [
                    (0, n.jsx)(d.FormTitle, { children: N.intl.string(N.t['/dG4ND']) }),
                    null != i &&
                        (0, n.jsx)(d.CopyInput, {
                            hideMessage: Z ? N.intl.string(N.t['0RLn4+']) : null,
                            value: (0, y.Nz)(i),
                            mode: S,
                            text: e,
                            onCopy: (e) => U(e, i),
                            supportsCopy: k.wS,
                            className: A.__invalid_copyInput,
                            buttonColor: d.ButtonColors.LINK,
                            buttonLook: d.ButtonLooks.LINK
                        }),
                    (0, n.jsx)('div', {
                        className: A.subtext,
                        children: N.intl.string(N.t.QWKUpq)
                    })
                ]
            });
        };
    return x
        ? (0, n.jsxs)('div', {
              className: A.confirmation,
              children: [
                  null != t
                      ? (0, n.jsx)(_.Z, {
                            game: t,
                            className: A.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: D()
                        })
                      : null,
                  (0, n.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, n.jsxs)('div', {
              className: A.confirmation,
              children: [
                  null != t
                      ? (0, n.jsx)(_.Z, {
                            game: t,
                            className: A.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: D()
                        })
                      : null,
                  (0, n.jsx)(d.Heading, {
                      variant: 'heading-lg/semibold',
                      className: o()({
                          [A.header]: null == l && !L,
                          [A.headerCustomGifting]: null != l && !L
                      }),
                      children: null != b || (f && null == h) ? N.intl.string(N.t.zOmK9P) : null != h ? N.intl.string(N.t.d1lrmZ) : N.intl.string(N.t['/s1xR0'])
                  }),
                  (f && null != b && null == h) || R
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.Z, {
                                    user: b,
                                    className: A.giftRecipient,
                                    size: d.AvatarSizes.SIZE_80
                                }),
                                (0, n.jsx)(d.Heading, {
                                    className: A.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: B.ZP.getName(b)
                                }),
                                (0, n.jsxs)('div', {
                                    className: A.giftRecipientTag,
                                    children: [' ', B.ZP.getUserTag(b)]
                                }),
                                (0, n.jsx)('div', {
                                    className: A.giftSentMessage,
                                    children: H()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, y.MY)(b, L),
                                { removeGiftRecipientUI: t } = m.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== y.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)('div', {
                                        className: A.blurb,
                                        children: H()
                                    }),
                                    !t &&
                                        null == h &&
                                        (0, n.jsx)(O, {
                                            giftCode: i,
                                            onClose: u
                                        }),
                                    (0, n.jsx)('div', { className: A.divider }),
                                    W()
                                ]
                            });
                        })()
              ]
          });
}
let O = (e) => {
    let { giftCode: i, onClose: t } = e;
    r.useEffect(() => {
        f.Z.fetchRelationships(), (0, h.W)();
    }, []);
    let [a, o] = r.useState(),
        [s, _] = r.useState(!1),
        [m, g] = r.useState(!1),
        { userAffinities: v, isLoading: I } = (0, c.cj)([x.Z], () => ({
            userAffinities: x.Z.getUserAffinitiesUserIds(),
            isLoading: x.Z.getFetching()
        })),
        k = Array.from(v.values()),
        y = (0, c.e7)([C.Z], () => C.Z.getFriendIDs()),
        T = l().difference(y, k),
        j = [...k, ...T],
        E = (0, c.e7)([S.default], () => S.default.filter((e) => j.includes(e.id) && !e.bot), [j]);
    if (null == E || 0 === E.length) return null;
    let P = l().sortBy(E, (e) => j.indexOf(e.id));
    return (0, n.jsxs)('div', {
        className: A.giftRecipientSection,
        children: [
            (0, n.jsx)(d.FormTitle, { children: N.intl.string(N.t.MJw05e) }),
            (0, n.jsxs)('div', {
                className: A.giftRecipient,
                children: [
                    (0, n.jsx)(d.SearchableSelect, {
                        placeholder: N.intl.string(N.t.J019jY),
                        wrapperClassName: A.giftRecipientInputWrapper,
                        className: s ? A.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, n.jsx)(p.Z, {
                                      user: e.value,
                                      size: d.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (I ? (0, n.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: a,
                        onChange: (e) => {
                            o(e), _(!1);
                        },
                        options: P.map((e) => ({
                            value: e,
                            label: ''.concat(B.ZP.getUserTag(e))
                        }))
                    }),
                    (0, n.jsx)(d.Button, {
                        disabled: null == a,
                        submitting: m,
                        className: A.sendToRecipientButton,
                        onClick: () => {
                            g(!0),
                                (0, b.YD)(a, i)
                                    .then(() => {
                                        t(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        _(!0), g(!1);
                                    });
                        },
                        children: N.intl.string(N.t['+EgwQk'])
                    })
                ]
            }),
            (0, n.jsx)('div', {
                className: s ? A.subtextError : A.subtext,
                children: s ? N.intl.string(N.t.jo5Vbm) : N.intl.string(N.t['8/N3v7'])
            })
        ]
    });
};
