var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(570140),
    d = t(355467),
    _ = t(179360),
    u = t(496929),
    E = t(821849),
    T = t(230711),
    S = t(497321),
    I = t(975298),
    N = t(167354),
    m = t(15640),
    A = t(600164),
    C = t(925329),
    g = t(406174),
    h = t(810762),
    O = t(681833),
    p = t(856888),
    R = t(921801),
    x = t(246946),
    M = t(663389),
    f = t(351402),
    D = t(853872),
    L = t(78839),
    P = t(580130),
    b = t(626135),
    Z = t(63063),
    v = t(74538),
    j = t(391077),
    B = t(639056),
    U = t(52164),
    G = t(91430),
    F = t(474936),
    y = t(981631),
    V = t(526761),
    Y = t(726985),
    k = t(689938),
    w = t(982241);
function H() {
    return (0, n.jsx)(l.Card, {
        className: w.noItemsCard,
        type: l.Card.Types.CUSTOM,
        children: (0, n.jsxs)(A.Z, {
            align: A.Z.Align.CENTER,
            children: [
                (0, n.jsx)(C.Z, {
                    game: null,
                    size: C.Z.Sizes.SMALL,
                    className: w.noItemsIcon
                }),
                (0, n.jsx)('span', {
                    className: w.cardText,
                    children: k.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
                })
            ]
        })
    });
}
function W() {
    let e = (0, o.e7)([P.Z], () => P.Z.getForApplication(F.CL));
    return (
        a.useEffect(() => {
            (0, u.yD)(F.CL);
        }, []),
        (0, n.jsxs)('section', {
            children: [
                (0, n.jsx)(l.Heading, {
                    variant: 'heading-md/bold',
                    className: w.accountCreditTitle,
                    children: k.Z.Messages.BILLING_SUBSCRIPTION_CREDIT
                }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    className: w.accountCreditDescription,
                    children: k.Z.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
                }),
                null != e && v.ZP.hasAccountCredit(e)
                    ? (0, n.jsx)(B.Z, {
                          className: w.accountCredit,
                          entitlements: e
                      })
                    : (0, n.jsx)(H, {})
            ]
        })
    );
}
function K() {
    return (0, n.jsx)('hr', { className: w.hr });
}
s.Z = function () {
    var e, s;
    let t = (0, o.e7)([L.ZP], () => L.ZP.getPremiumTypeSubscription()),
        i = (0, N.Z)({ subscriptionFilter: (e) => G.eS.has(e.status) }),
        u = i.length > 1,
        A = (0, o.e7)([D.Z], () => (null != t && null != t.paymentSourceId ? D.Z.getPaymentSource(t.paymentSourceId) : null), [t]),
        C = (0, o.e7)([L.ZP], () => L.ZP.hasFetchedSubscriptions()),
        v = (0, o.e7)([f.Z], () => f.Z.isBusy),
        B = (0, m.V)(),
        H = (0, o.e7)([M.Z], () => M.Z.getSubsection()),
        z = (0, o.e7)([L.ZP], () => {
            var e, s;
            return null !== (s = null === (e = L.ZP.getActiveApplicationSubscriptions()) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0;
        }),
        Q = (0, o.e7)([L.ZP], () => {
            var e;
            return Object.values(null !== (e = L.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === y.NYc.GUILD)
                .filter((e) => e.status !== y.O0b.ENDED).length;
        }),
        { fractionalState: X, endsAt: q } = (0, I.Z)({ forceFetch: !0 }),
        J = (0, o.e7)([P.Z], () => P.Z.getFractionalPremium(!1));
    if (
        (a.useEffect(
            () => (
                c.Z.wait(() => {
                    (0, E.Y2)(), d.jg(), (0, _.X8)(), d.tZ();
                }),
                function () {
                    T.Z.clearSubsection();
                }
            ),
            []
        ),
        x.Z.enabled)
    )
        return (0, n.jsx)(S.Z, {});
    if (!C || !B)
        return (0, n.jsx)('div', {
            className: r()(w.container, w.loading),
            children: (0, n.jsx)(l.Spinner, {})
        });
    if (H === V.cP) return (0, n.jsx)(h.Z, { onGoBack: () => T.Z.clearSubsection() });
    if (H === V.XZ) return (0, n.jsx)(p.Z, { onGoBack: () => T.Z.clearSubsection() });
    return (0, n.jsx)('div', {
        className: w.container,
        children: (0, n.jsxs)('div', {
            className: w.content,
            children: [
                u ? (0, n.jsx)(G.Yn, {}) : null,
                null != t
                    ? (0, n.jsx)(G.ZP, {
                          subscription: t,
                          paymentSource: A,
                          busy: v,
                          subscriptions: i
                      })
                    : (0, n.jsx)(G.MM, {}),
                X === F.a$.FP_ONLY &&
                    J.length > 0 &&
                    ((e = J),
                    (s = q),
                    (0, n.jsxs)('section', {
                        children: [
                            (0, n.jsx)(l.Heading, {
                                variant: 'heading-md/bold',
                                className: w.accountCreditTitle,
                                children: k.Z.Messages.FRACTIONAL_PREMIUM_CREDIT_HEADER
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: w.accountCreditDescription,
                                children: k.Z.Messages.FRACTIONAL_PREMIUM_CREDIT_DESCRIPTION.format({ helpCenterLink: Z.Z.getArticleURL(y.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                            }),
                            (0, n.jsx)(j.Z, {
                                className: w.accountCredit,
                                entitlements: e,
                                endsAt: s
                            })
                        ]
                    })),
                (0, n.jsx)(R.F, {
                    setting: Y.s6.SUBSCRIPTIONS_CREDITS,
                    children: (0, n.jsx)(W, {})
                }),
                Q > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(K, {}),
                            (0, n.jsx)(g.Z, {
                                count: Q,
                                onClickManageSubscription: () => T.Z.setSection(y.oAB.SUBSCRIPTIONS, V.cP)
                            })
                        ]
                    }),
                z > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(K, {}),
                            (0, n.jsx)(O.Z, {
                                count: z,
                                onClickManageSubscription: () => {
                                    T.Z.setSection(y.oAB.SUBSCRIPTIONS, V.XZ), b.default.track(y.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                }
                            })
                        ]
                    }),
                (0, n.jsx)(K, {}),
                null != t
                    ? (0, n.jsx)(U.Z, {
                          subscription: t,
                          withOverheadSeparator: !1
                      })
                    : null
            ]
        })
    });
};
