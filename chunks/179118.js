n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    l = n.n(s),
    d = n(442837),
    c = n(481060),
    u = n(37234),
    f = n(194359),
    p = n(700582),
    _ = n(925329),
    b = n(479446),
    h = n(522489),
    m = n(857039),
    g = n(93127),
    C = n(814443),
    x = n(590783),
    v = n(699516),
    I = n(246946),
    S = n(594174),
    k = n(572004),
    y = n(669079),
    B = n(74538),
    T = n(51144),
    A = n(563132),
    F = n(981631),
    L = n(474936),
    E = n(388032),
    R = n(524254);
function O(e) {
    let { giftCode: t, application: n, sku: r, subscriptionPlan: s, selectedGiftStyle: l, onClose: u, hasSentMessage: f, giftRecipient: b, giftMessageError: g, isSendingMessage: C, halloweenDecoPurchase: v } = e,
        [S, O] = o.useState(c.CopyInput.Modes.DEFAULT),
        M = (0, d.e7)([I.Z], () => I.Z.enabled),
        N = f || (null != l && null != b),
        P = (null == r ? void 0 : r.productLine) === F.POd.COLLECTIBLES,
        { selectedPlan: j } = (0, A.usePaymentContext)(),
        U = (0, m.Z)({ location: 'Gift purchase confirm' }) && (null == j ? void 0 : j.skuId) === L.Si.TIER_2 && null != v,
        Z = () => (null != s ? s.skuId : null != r ? r.id : null),
        H = () => {
            let e;
            let t = null != l && L.kJ.includes(l);
            if (null != g) return E.intl.string(E.t.qB8ayc);
            if (null == s) return null;
            if (s.interval === L.rV.MONTH) {
                if (U) return E.intl.string(E.t.IelGKy);
                e = N ? (t ? E.t.ECjJJy : E.t['4ZJ+7e']) : E.t['P+z55e'];
            } else {
                if (U) return E.intl.string(E.t.gausub);
                e = N ? (t ? E.t.jeiz2N : E.t.p0pZXF) : E.t.bXqk3t;
            }
            return E.intl.format(e, {
                skuName: (0, B.aq)(s.id),
                intervalCount: s.intervalCount
            });
        },
        G = (e, t) => {
            null != r &&
                (0, y.dM)(
                    new x.Z({
                        code: t,
                        maxUses: 1
                    }),
                    r
                );
            try {
                (0, k.JG)(e), O(c.CopyInput.Modes.SUCCESS);
            } catch (e) {
                O(c.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                O(c.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        D = () => {
            let e;
            if (null == t) return null;
            switch (S) {
                case c.CopyInput.Modes.SUCCESS:
                    e = E.intl.string(E.t.XVvPjY);
                    break;
                case c.CopyInput.Modes.ERROR:
                    e = E.intl.string(E.t.i4GM3N);
                    break;
                default:
                    e = E.intl.string(E.t.OpuAlJ);
            }
            return (0, i.jsxs)('div', {
                className: R.giftCodeSection,
                children: [
                    (0, i.jsx)(c.FormTitle, { children: E.intl.string(E.t['/dG4ND']) }),
                    null != t &&
                        (0, i.jsx)(c.CopyInput, {
                            hideMessage: M ? E.intl.string(E.t['0RLn4+']) : null,
                            value: (0, y.Nz)(t),
                            mode: S,
                            text: e,
                            onCopy: (e) => G(e, t),
                            supportsCopy: k.wS,
                            className: R.__invalid_copyInput,
                            buttonColor: c.ButtonColors.LINK,
                            buttonLook: c.ButtonLooks.LINK
                        }),
                    (0, i.jsx)('div', {
                        className: R.subtext,
                        children: E.intl.string(E.t.QWKUpq)
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
                  (0, i.jsx)(c.Spinner, { type: c.SpinnerTypes.PULSING_ELLIPSIS })
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
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-lg/semibold',
                      className: a()({
                          [R.header]: null == l && !P,
                          [R.headerCustomGifting]: null != l && !P
                      }),
                      children: null != b || (f && null == g) ? E.intl.string(E.t.zOmK9P) : null != g ? E.intl.string(E.t.d1lrmZ) : E.intl.string(E.t['/s1xR0'])
                  }),
                  (f && null != b && null == g) || N
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.Z, {
                                    user: b,
                                    className: R.giftRecipient,
                                    size: c.AvatarSizes.SIZE_80
                                }),
                                (0, i.jsx)(c.Heading, {
                                    className: R.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: T.ZP.getName(b)
                                }),
                                (0, i.jsxs)('div', {
                                    className: R.giftRecipientTag,
                                    children: [' ', T.ZP.getUserTag(b)]
                                }),
                                (0, i.jsx)('div', {
                                    className: R.giftSentMessage,
                                    children: H()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, y.MY)(b, P),
                                { removeGiftRecipientUI: n } = h.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== y.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: R.blurb,
                                        children: H()
                                    }),
                                    !n &&
                                        null == g &&
                                        (0, i.jsx)(w, {
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
let w = (e) => {
    let { giftCode: t, onClose: n } = e;
    o.useEffect(() => {
        f.Z.fetchRelationships(), (0, g.W)();
    }, []);
    let [r, a] = o.useState(),
        [s, _] = o.useState(!1),
        [h, m] = o.useState(!1),
        { userAffinities: x, isLoading: I } = (0, d.cj)([C.Z], () => ({
            userAffinities: C.Z.getUserAffinitiesUserIds(),
            isLoading: C.Z.getFetching()
        })),
        k = Array.from(x.values()),
        y = (0, d.e7)([v.Z], () => v.Z.getFriendIDs()),
        B = l().difference(y, k),
        A = [...k, ...B],
        F = (0, d.e7)([S.default], () => S.default.filter((e) => A.includes(e.id) && !e.bot), [A]);
    if (null == F || 0 === F.length) return null;
    let L = l().sortBy(F, (e) => A.indexOf(e.id));
    return (0, i.jsxs)('div', {
        className: R.giftRecipientSection,
        children: [
            (0, i.jsx)(c.FormTitle, { children: E.intl.string(E.t.MJw05e) }),
            (0, i.jsxs)('div', {
                className: R.giftRecipient,
                children: [
                    (0, i.jsx)(c.SearchableSelect, {
                        placeholder: E.intl.string(E.t.J019jY),
                        wrapperClassName: R.giftRecipientInputWrapper,
                        className: s ? R.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, i.jsx)(p.Z, {
                                      user: e.value,
                                      size: c.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (I ? (0, i.jsx)(c.Spinner, { type: c.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: r,
                        onChange: (e) => {
                            a(e), _(!1);
                        },
                        options: L.map((e) => ({
                            value: e,
                            label: ''.concat(T.ZP.getUserTag(e))
                        }))
                    }),
                    (0, i.jsx)(c.Button, {
                        disabled: null == r,
                        submitting: h,
                        className: R.sendToRecipientButton,
                        onClick: () => {
                            m(!0),
                                (0, b.YD)(r, t)
                                    .then(() => {
                                        n(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        _(!0), m(!1);
                                    });
                        },
                        children: E.intl.string(E.t['+EgwQk'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: s ? R.subtextError : R.subtext,
                children: s ? E.intl.string(E.t.jo5Vbm) : E.intl.string(E.t['8/N3v7'])
            })
        ]
    });
};
