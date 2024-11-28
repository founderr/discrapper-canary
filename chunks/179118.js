n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    d = n.n(s),
    c = n(442837),
    l = n(481060),
    u = n(37234),
    f = n(194359),
    p = n(700582),
    _ = n(925329),
    b = n(479446),
    m = n(522489),
    g = n(857039),
    h = n(93127),
    C = n(814443),
    x = n(590783),
    I = n(699516),
    S = n(246946),
    v = n(594174),
    y = n(572004),
    k = n(669079),
    B = n(74538),
    A = n(51144),
    T = n(563132),
    E = n(981631),
    L = n(474936),
    F = n(388032),
    R = n(431852);
function P(e) {
    let { giftCode: t, application: n, sku: r, subscriptionPlan: s, selectedGiftStyle: d, onClose: u, hasSentMessage: f, giftRecipient: b, giftMessageError: h, isSendingMessage: C, halloweenDecoPurchase: I } = e,
        [v, P] = o.useState(l.CopyInput.Modes.DEFAULT),
        O = (0, c.e7)([S.Z], () => S.Z.enabled),
        M = f || (null != d && null != b),
        j = (null == r ? void 0 : r.productLine) === E.POd.COLLECTIBLES,
        { selectedPlan: w } = (0, T.usePaymentContext)(),
        U = (0, g.Z)({ location: 'Gift purchase confirm' }) && (null == w ? void 0 : w.skuId) === L.Si.TIER_2 && null != I,
        Z = () => (null != s ? s.skuId : null != r ? r.id : null),
        G = () => {
            let e;
            let t = null != d && L.kJ.includes(d);
            if (null != h) return F.intl.string(F.t.qB8ayc);
            if (null == s) return null;
            if (s.interval === L.rV.MONTH) {
                if (U) return F.intl.string(F.t.IelGKy);
                e = M ? (t ? F.t.ECjJJy : F.t['4ZJ+7e']) : F.t['P+z55e'];
            } else {
                if (U) return F.intl.string(F.t.gausub);
                e = M ? (t ? F.t.jeiz2N : F.t.p0pZXF) : F.t.bXqk3t;
            }
            return F.intl.format(e, {
                skuName: (0, B.aq)(s.id),
                intervalCount: s.intervalCount
            });
        },
        H = (e, t) => {
            null != r &&
                (0, k.dM)(
                    new x.Z({
                        code: t,
                        maxUses: 1
                    }),
                    r
                );
            try {
                (0, y.JG)(e), P(l.CopyInput.Modes.SUCCESS);
            } catch (e) {
                P(l.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                P(l.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        D = () => {
            let e;
            if (null == t) return null;
            switch (v) {
                case l.CopyInput.Modes.SUCCESS:
                    e = F.intl.string(F.t.XVvPjY);
                    break;
                case l.CopyInput.Modes.ERROR:
                    e = F.intl.string(F.t.i4GM3N);
                    break;
                default:
                    e = F.intl.string(F.t.OpuAlJ);
            }
            return (0, i.jsxs)('div', {
                className: R.giftCodeSection,
                children: [
                    (0, i.jsx)(l.FormTitle, { children: F.intl.string(F.t['/dG4ND']) }),
                    null != t &&
                        (0, i.jsx)(l.CopyInput, {
                            hideMessage: O ? F.intl.string(F.t['0RLn4+']) : null,
                            value: (0, k.Nz)(t),
                            mode: v,
                            text: e,
                            onCopy: (e) => H(e, t),
                            supportsCopy: y.wS,
                            className: R.__invalid_copyInput,
                            buttonColor: l.ButtonColors.LINK,
                            buttonLook: l.ButtonLooks.LINK
                        }),
                    (0, i.jsx)('div', {
                        className: R.subtext,
                        children: F.intl.string(F.t.QWKUpq)
                    })
                ]
            });
        };
    return C
        ? (0, i.jsxs)('div', {
              className: R.confirmation,
              children: [
                  null != n
                      ? (0, i.jsx)(_.Z, {
                            game: n,
                            className: R.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: Z()
                        })
                      : null,
                  (0, i.jsx)(l.Spinner, { type: l.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, i.jsxs)('div', {
              className: R.confirmation,
              children: [
                  null != n
                      ? (0, i.jsx)(_.Z, {
                            game: n,
                            className: R.__invalid_icon,
                            size: _.Z.Sizes.LARGE,
                            skuId: Z()
                        })
                      : null,
                  (0, i.jsx)(l.Heading, {
                      variant: 'heading-lg/semibold',
                      className: a()({
                          [R.header]: null == d && !j,
                          [R.headerCustomGifting]: null != d && !j
                      }),
                      children: null != b || (f && null == h) ? F.intl.string(F.t.zOmK9P) : null != h ? F.intl.string(F.t.d1lrmZ) : F.intl.string(F.t['/s1xR0'])
                  }),
                  (f && null != b && null == h) || M
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.Z, {
                                    user: b,
                                    className: R.giftRecipient,
                                    size: l.AvatarSizes.SIZE_80
                                }),
                                (0, i.jsx)(l.Heading, {
                                    className: R.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: A.ZP.getName(b)
                                }),
                                (0, i.jsxs)('div', {
                                    className: R.giftRecipientTag,
                                    children: [' ', A.ZP.getUserTag(b)]
                                }),
                                (0, i.jsx)('div', {
                                    className: R.giftSentMessage,
                                    children: G()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, k.MY)(b, j),
                                { removeGiftRecipientUI: n } = m.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== k.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: R.blurb,
                                        children: G()
                                    }),
                                    !n &&
                                        null == h &&
                                        (0, i.jsx)(N, {
                                            giftCode: t,
                                            onClose: u
                                        }),
                                    (0, i.jsx)('div', { className: R.divider }),
                                    D()
                                ]
                            });
                        })()
              ]
          });
}
let N = (e) => {
    let { giftCode: t, onClose: n } = e;
    o.useEffect(() => {
        f.Z.fetchRelationships(), (0, h.W)();
    }, []);
    let [r, a] = o.useState(),
        [s, _] = o.useState(!1),
        [m, g] = o.useState(!1),
        { userAffinities: x, isLoading: S } = (0, c.cj)([C.Z], () => ({
            userAffinities: C.Z.getUserAffinitiesUserIds(),
            isLoading: C.Z.getFetching()
        })),
        y = Array.from(x.values()),
        k = (0, c.e7)([I.Z], () => I.Z.getFriendIDs()),
        B = d().difference(k, y),
        T = [...y, ...B],
        E = (0, c.e7)([v.default], () => v.default.filter((e) => T.includes(e.id) && !e.bot), [T]);
    if (null == E || 0 === E.length) return null;
    let L = d().sortBy(E, (e) => T.indexOf(e.id));
    return (0, i.jsxs)('div', {
        className: R.giftRecipientSection,
        children: [
            (0, i.jsx)(l.FormTitle, { children: F.intl.string(F.t.MJw05e) }),
            (0, i.jsxs)('div', {
                className: R.giftRecipient,
                children: [
                    (0, i.jsx)(l.SearchableSelect, {
                        placeholder: F.intl.string(F.t.J019jY),
                        wrapperClassName: R.giftRecipientInputWrapper,
                        className: s ? R.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, i.jsx)(p.Z, {
                                      user: e.value,
                                      size: l.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (S ? (0, i.jsx)(l.Spinner, { type: l.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: r,
                        onChange: (e) => {
                            a(e), _(!1);
                        },
                        options: L.map((e) => ({
                            value: e,
                            label: ''.concat(A.ZP.getUserTag(e))
                        }))
                    }),
                    (0, i.jsx)(l.Button, {
                        disabled: null == r,
                        submitting: m,
                        className: R.sendToRecipientButton,
                        onClick: () => {
                            g(!0),
                                (0, b.YD)(r, t)
                                    .then(() => {
                                        n(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        _(!0), g(!1);
                                    });
                        },
                        children: F.intl.string(F.t['+EgwQk'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: s ? R.subtextError : R.subtext,
                children: s ? F.intl.string(F.t.jo5Vbm) : F.intl.string(F.t['8/N3v7'])
            })
        ]
    });
};
