n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    d = n(481060),
    u = n(37234),
    m = n(194359),
    h = n(700582),
    f = n(925329),
    p = n(479446),
    g = n(522489),
    _ = n(857039),
    C = n(93127),
    E = n(814443),
    I = n(590783),
    x = n(699516),
    v = n(246946),
    N = n(594174),
    T = n(572004),
    S = n(669079),
    b = n(74538),
    A = n(51144),
    j = n(563132),
    Z = n(981631),
    R = n(474936),
    P = n(388032),
    y = n(524254);
function L(e) {
    let { giftCode: t, application: n, sku: l, subscriptionPlan: o, selectedGiftStyle: s, onClose: u, hasSentMessage: m, giftRecipient: p, giftMessageError: C, isSendingMessage: E, halloweenDecoPurchase: x } = e,
        [N, L] = r.useState(d.CopyInput.Modes.DEFAULT),
        M = (0, c.e7)([v.Z], () => v.Z.enabled),
        k = m || (null != s && null != p),
        D = (null == l ? void 0 : l.productLine) === Z.POd.COLLECTIBLES,
        { selectedPlan: B } = (0, j.usePaymentContext)(),
        w = (0, _.Z)({ location: 'Gift purchase confirm' }) && (null == B ? void 0 : B.skuId) === R.Si.TIER_2 && null != x,
        U = () => (null != o ? o.skuId : null != l ? l.id : null),
        F = () => {
            let e;
            let t = null != s && R.kJ.includes(s);
            if (null != C) return P.intl.string(P.t.qB8ayc);
            if (null == o) return null;
            if (o.interval === R.rV.MONTH) {
                if (w) return P.intl.string(P.t.IelGKy);
                e = k ? (t ? P.t.ECjJJy : P.t['4ZJ+7e']) : P.t['P+z55e'];
            } else {
                if (w) return P.intl.string(P.t.gausub);
                e = k ? (t ? P.t.jeiz2N : P.t.p0pZXF) : P.t.bXqk3t;
            }
            return P.intl.format(e, {
                skuName: (0, b.aq)(o.id),
                intervalCount: o.intervalCount
            });
        },
        G = (e, t) => {
            null != l &&
                (0, S.dM)(
                    new I.Z({
                        code: t,
                        maxUses: 1
                    }),
                    l
                );
            try {
                (0, T.JG)(e), L(d.CopyInput.Modes.SUCCESS);
            } catch (e) {
                L(d.CopyInput.Modes.ERROR);
            }
            setTimeout(() => {
                L(d.CopyInput.Modes.DEFAULT);
            }, 1500);
        },
        V = () => {
            let e;
            if (null == t) return null;
            switch (N) {
                case d.CopyInput.Modes.SUCCESS:
                    e = P.intl.string(P.t.XVvPjY);
                    break;
                case d.CopyInput.Modes.ERROR:
                    e = P.intl.string(P.t.i4GM3N);
                    break;
                default:
                    e = P.intl.string(P.t.OpuAlJ);
            }
            return (0, i.jsxs)('div', {
                className: y.giftCodeSection,
                children: [
                    (0, i.jsx)(d.FormTitle, { children: P.intl.string(P.t['/dG4ND']) }),
                    null != t &&
                        (0, i.jsx)(d.CopyInput, {
                            hideMessage: M ? P.intl.string(P.t['0RLn4+']) : null,
                            value: (0, S.Nz)(t),
                            mode: N,
                            text: e,
                            onCopy: (e) => G(e, t),
                            supportsCopy: T.wS,
                            className: y.__invalid_copyInput,
                            buttonColor: d.ButtonColors.LINK,
                            buttonLook: d.ButtonLooks.LINK
                        }),
                    (0, i.jsx)('div', {
                        className: y.subtext,
                        children: P.intl.string(P.t.QWKUpq)
                    })
                ]
            });
        };
    return E
        ? (0, i.jsxs)('div', {
              className: y.confirmation,
              children: [
                  null != n
                      ? (0, i.jsx)(f.Z, {
                            game: n,
                            className: y.__invalid_icon,
                            size: f.Z.Sizes.LARGE,
                            skuId: U()
                        })
                      : null,
                  (0, i.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS })
              ]
          })
        : (0, i.jsxs)('div', {
              className: y.confirmation,
              children: [
                  null != n
                      ? (0, i.jsx)(f.Z, {
                            game: n,
                            className: y.__invalid_icon,
                            size: f.Z.Sizes.LARGE,
                            skuId: U()
                        })
                      : null,
                  (0, i.jsx)(d.Heading, {
                      variant: 'heading-lg/semibold',
                      className: a()({
                          [y.header]: null == s && !D,
                          [y.headerCustomGifting]: null != s && !D
                      }),
                      children: null != p || (m && null == C) ? P.intl.string(P.t.zOmK9P) : null != C ? P.intl.string(P.t.d1lrmZ) : P.intl.string(P.t['/s1xR0'])
                  }),
                  (m && null != p && null == C) || k
                      ? (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h.Z, {
                                    user: p,
                                    className: y.giftRecipient,
                                    size: d.AvatarSizes.SIZE_80
                                }),
                                (0, i.jsx)(d.Heading, {
                                    className: y.giftRecipientName,
                                    variant: 'heading-md/semibold',
                                    children: A.ZP.getName(p)
                                }),
                                (0, i.jsxs)('div', {
                                    className: y.giftRecipientTag,
                                    children: [' ', A.ZP.getUserTag(p)]
                                }),
                                (0, i.jsx)('div', {
                                    className: y.giftSentMessage,
                                    children: F()
                                })
                            ]
                        })
                      : (() => {
                            let e = (0, S.MY)(p, D),
                                { removeGiftRecipientUI: n } = g.m.getCurrentConfig(
                                    { location: 'GiftPurchaseConfirmation' },
                                    {
                                        autoTrackExposure: !1,
                                        disable: __BILLING_STANDALONE__ || e !== S.xr.CUSTOM_STYLE
                                    }
                                );
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)('div', {
                                        className: y.blurb,
                                        children: F()
                                    }),
                                    !n &&
                                        null == C &&
                                        (0, i.jsx)(O, {
                                            giftCode: t,
                                            onClose: u
                                        }),
                                    (0, i.jsx)('div', { className: y.divider }),
                                    V()
                                ]
                            });
                        })()
              ]
          });
}
let O = (e) => {
    let { giftCode: t, onClose: n } = e;
    r.useEffect(() => {
        m.Z.fetchRelationships(), (0, C.W)();
    }, []);
    let [l, a] = r.useState(),
        [o, f] = r.useState(!1),
        [g, _] = r.useState(!1),
        { userAffinities: I, isLoading: v } = (0, c.cj)([E.Z], () => ({
            userAffinities: E.Z.getUserAffinitiesUserIds(),
            isLoading: E.Z.getFetching()
        })),
        T = Array.from(I.values()),
        S = (0, c.e7)([x.Z], () => x.Z.getFriendIDs()),
        b = s().difference(S, T),
        j = [...T, ...b],
        Z = (0, c.e7)([N.default], () => N.default.filter((e) => j.includes(e.id) && !e.bot), [j]);
    if (null == Z || 0 === Z.length) return null;
    let R = s().sortBy(Z, (e) => j.indexOf(e.id));
    return (0, i.jsxs)('div', {
        className: y.giftRecipientSection,
        children: [
            (0, i.jsx)(d.FormTitle, { children: P.intl.string(P.t.MJw05e) }),
            (0, i.jsxs)('div', {
                className: y.giftRecipient,
                children: [
                    (0, i.jsx)(d.SearchableSelect, {
                        placeholder: P.intl.string(P.t.J019jY),
                        wrapperClassName: y.giftRecipientInputWrapper,
                        className: o ? y.giftRecipientInputError : void 0,
                        renderOptionPrefix: (e) =>
                            (null == e ? void 0 : e.value) == null
                                ? null
                                : (0, i.jsx)(h.Z, {
                                      user: e.value,
                                      size: d.AvatarSizes.SIZE_20
                                  }),
                        renderLeading: () => (v ? (0, i.jsx)(d.Spinner, { type: d.SpinnerTypes.PULSING_ELLIPSIS }) : null),
                        value: l,
                        onChange: (e) => {
                            a(e), f(!1);
                        },
                        options: R.map((e) => ({
                            value: e,
                            label: ''.concat(A.ZP.getUserTag(e))
                        }))
                    }),
                    (0, i.jsx)(d.Button, {
                        disabled: null == l,
                        submitting: g,
                        className: y.sendToRecipientButton,
                        onClick: () => {
                            _(!0),
                                (0, p.YD)(l, t)
                                    .then(() => {
                                        n(), (0, u.Ou)();
                                    })
                                    .catch(() => {
                                        f(!0), _(!1);
                                    });
                        },
                        children: P.intl.string(P.t['+EgwQk'])
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: o ? y.subtextError : y.subtext,
                children: o ? P.intl.string(P.t.jo5Vbm) : P.intl.string(P.t['8/N3v7'])
            })
        ]
    });
};
