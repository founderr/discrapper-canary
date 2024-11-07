t.d(n, {
    Z: function () {
        return Z;
    }
}),
    t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    o = t.n(r),
    l = t(392711),
    s = t.n(l),
    d = t(442837),
    c = t(481060),
    u = t(37234),
    f = t(194359),
    p = t(700582),
    m = t(925329),
    g = t(479446),
    _ = t(522489),
    b = t(857039),
    h = t(93127),
    x = t(814443),
    C = t(590783),
    v = t(699516),
    S = t(246946),
    I = t(594174),
    j = t(572004),
    T = t(669079),
    y = t(74538),
    E = t(51144),
    N = t(563132),
    k = t(981631),
    P = t(474936),
    B = t(388032),
    A = t(421867);
function Z(e) {
    let { giftCode: n, application: t, sku: r, subscriptionPlan: l, selectedGiftStyle: s, onClose: u, hasSentMessage: f, giftRecipient: g, giftMessageError: h, isSendingMessage: x, halloweenDecoPurchase: v } = e,
        [I, Z] = a.useState(c.CopyInput.Modes.DEFAULT),
        O = (0, d.e7)([S.Z], () => S.Z.enabled),
        M = f || (null != s && null != g),
        R = (null == r ? void 0 : r.productLine) === k.POd.COLLECTIBLES,
        { selectedPlan: G } = (0, N.usePaymentContext)(),
        L = (0, b.Z)({ location: 'Gift purchase confirm' }) && (null == G ? void 0 : G.skuId) === P.Si.TIER_2 && null != v,
        D = () => (null != l ? l.skuId : null != r ? r.id : null),
        H = () => {
            let e;
            let n = null != s && P.kJ.includes(s);
            if (null != h) return B.intl.string(B.t.qB8ayc);
            if (null == l) return null;
            if (l.interval === P.rV.MONTH) {
                if (L) return B.intl.string(B.t.IelGKy);
                e = M ? (n ? B.t.ECjJJy : B.t['4ZJ+7e']) : B.t['P+z55e'];
            } else {
                if (L) return B.intl.string(B.t.gausub);
                e = M ? (n ? B.t.jeiz2N : B.t.p0pZXF) : B.t.bXqk3t;
            }
            return B.intl.format(e, {
                skuName: (0, y.aq)(l.id),
                intervalCount: l.intervalCount
            });
        },
        F = (e, n) => {
            null != r &&
                (0, T.dM)(
                    new C.Z({
                        code: n,
                        maxUses: 1
                    }),
                    r
                );
            try {
                (0, j.JG)(e), Z(c.CopyInput.Modes.SUCCESS);
            } catch (e) {
                Z(c.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                Z(c.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        W = () => {
            let e;
            if (null == n) return null;
            switch (I) {
                case c.CopyInput.Modes.SUCCESS:
                    e = B.intl.string(B.t.XVvPjY);
                    break;
                case c.CopyInput.Modes.ERROR:
                    e = B.intl.string(B.t.i4GM3N);
                    break;
                default:
                    e = B.intl.string(B.t.OpuAlJ);
            }
            return (0, i.jsxs)('div', {
                className: A.giftCodeSection,
                children: [
                    (0, i.jsx)(c.FormTitle, { children: B.intl.string(B.t['/dG4ND']) }),
                    null != n &&
                        (0, i.jsx)(c.CopyInput, {
                            hideMessage: O ? B.intl.string(B.t['0RLn4+']) : null,
                            value: (0, T.Nz)(n),
                            mode: I,
                            text: e,
                            onCopy: (e) => F(e, n),
                            supportsCopy: j.wS,
                            className: A.__invalid_copyInput,
                            buttonColor: c.ButtonColors.LINK,
                            buttonLook: c.ButtonLooks.LINK
                        }),
                    (0, i.jsx)('div', {
                        className: A.subtext,
                        children: B.intl.string(B.t.QWKUpq)
                    })
                ]
            });
        };
    return x
        ? (0, i.jsxs)('div', {
              className: A.confirmation,
              children: [
                  null != t
                      ? (0, i.jsx)(m.Z, {
                            game: t,
                            className: A.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: D()
                        })
                      : null,
                  (0, i.jsx)(c.Spinner, { type: c.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, i.jsxs)('div', {
              className: A.confirmation,
              children: [
                  null != t
                      ? (0, i.jsx)(m.Z, {
                            game: t,
                            className: A.__invalid_icon,
                            size: m.Z.Sizes.LARGE,
                            skuId: D()
                        })
                      : null,
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-lg/semibold',
                      className: o()({
                          [A.header]: null == s && !R,
                          [A.headerCustomGifting]: null != s && !R
                      }),
                      children: null != g || (f && null == h) ? B.intl.string(B.t.zOmK9P) : null != h ? B.intl.string(B.t.d1lrmZ) : B.intl.string(B.t['/s1xR0'])
                  }),
                  (f && null != g && null == h) || M
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(p.Z, {
                                    user: g,
                                    className: A.giftRecipient,
                                    size: c.AvatarSizes.SIZE_80
                                }),
                                (0, i.jsx)(c.Heading, {
                                    className: A.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: E.ZP.getName(g)
                                }),
                                (0, i.jsxs)('div', {
                                    className: A.giftRecipientTag,
                                    children: [' ', E.ZP.getUserTag(g)]
                                }),
                                (0, i.jsx)('div', {
                                    className: A.giftSentMessage,
                                    children: H()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, T.MY)(g, R),
                                { removeGiftRecipientUI: t } = _.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== T.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: A.blurb,
                                        children: H()
                                    }),
                                    !t &&
                                        null == h &&
                                        (0, i.jsx)(w, {
                                            giftCode: n,
                                            onClose: u
                                        }),
                                    (0, i.jsx)('div', { className: A.divider }),
                                    W()
                                ]
                            });
                        })()
              ]
          });
}
let w = (e) => {
    let { giftCode: n, onClose: t } = e;
    a.useEffect(() => {
        f.Z.fetchRelationships(), (0, h.W)();
    }, []);
    let [r, o] = a.useState(),
        [l, m] = a.useState(!1),
        [_, b] = a.useState(!1),
        { userAffinities: C, isLoading: S } = (0, d.cj)([x.Z], () => ({
            userAffinities: x.Z.getUserAffinitiesUserIds(),
            isLoading: x.Z.getFetching()
        })),
        j = Array.from(C.values()),
        T = (0, d.e7)([v.Z], () => v.Z.getFriendIDs()),
        y = s().difference(T, j),
        N = [...j, ...y],
        k = (0, d.e7)([I.default], () => I.default.filter((e) => N.includes(e.id) && !e.bot), [N]);
    if (null == k || 0 === k.length) return null;
    let P = s().sortBy(k, (e) => N.indexOf(e.id));
    return (0, i.jsxs)('div', {
        className: A.giftRecipientSection,
        children: [
            (0, i.jsx)(c.FormTitle, { children: B.intl.string(B.t.MJw05e) }),
            (0, i.jsxs)('div', {
                className: A.giftRecipient,
                children: [
                    (0, i.jsx)(c.SearchableSelect, {
                        placeholder: B.intl.string(B.t.J019jY),
                        wrapperClassName: A.giftRecipientInputWrapper,
                        className: l ? A.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, i.jsx)(p.Z, {
                                      user: e.value,
                                      size: c.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (S ? (0, i.jsx)(c.Spinner, { type: c.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: r,
                        onChange: (e) => {
                            o(e), m(!1);
                        },
                        options: P.map((e) => ({
                            value: e,
                            label: ''.concat(E.ZP.getUserTag(e))
                        }))
                    }),
                    (0, i.jsx)(c.Button, {
                        disabled: null == r,
                        submitting: _,
                        className: A.sendToRecipientButton,
                        onClick: () => {
                            b(!0),
                                (0, g.YD)(r, n)
                                    .then(() => {
                                        t(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        m(!0), b(!1);
                                    });
                        },
                        children: B.intl.string(B.t['+EgwQk'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: l ? A.subtextError : A.subtext,
                children: l ? B.intl.string(B.t.jo5Vbm) : B.intl.string(B.t['8/N3v7'])
            })
        ]
    });
};
