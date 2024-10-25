var n = t(200651),
    a = t(192379),
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
    I = t(167354),
    N = t(15640),
    m = t(600164),
    C = t(925329),
    A = t(406174),
    g = t(810762),
    h = t(681833),
    O = t(856888),
    p = t(921801),
    R = t(246946),
    x = t(663389),
    M = t(351402),
    f = t(853872),
    D = t(78839),
    L = t(580130),
    P = t(626135),
    b = t(63063),
    Z = t(74538),
    v = t(391077),
    j = t(639056),
    B = t(52164),
    U = t(91430),
    G = t(474936),
    F = t(981631),
    y = t(526761),
    V = t(726985),
    Y = t(689938),
    k = t(982241);
function w() {
    return (0, n.jsx)(l.Card, {
        className: k.noItemsCard,
        type: l.Card.Types.CUSTOM,
        children: (0, n.jsxs)(m.Z, {
            align: m.Z.Align.CENTER,
            children: [
                (0, n.jsx)(C.Z, {
                    game: null,
                    size: C.Z.Sizes.SMALL,
                    className: k.noItemsIcon
                }),
                (0, n.jsx)('span', {
                    className: k.cardText,
                    children: Y.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
                })
            ]
        })
    });
}
function H() {
    let e = (0, o.e7)([L.Z], () => L.Z.getForApplication(G.CL));
    return (
        a.useEffect(() => {
            (0, u.yD)(G.CL);
        }, []),
        (0, n.jsxs)('section', {
            children: [
                (0, n.jsx)(l.Heading, {
                    variant: 'heading-md/bold',
                    className: k.accountCreditTitle,
                    children: Y.Z.Messages.BILLING_SUBSCRIPTION_CREDIT
                }),
                (0, n.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    className: k.accountCreditDescription,
                    children: Y.Z.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
                }),
                null != e && Z.ZP.hasAccountCredit(e)
                    ? (0, n.jsx)(j.Z, {
                          className: k.accountCredit,
                          entitlements: e
                      })
                    : (0, n.jsx)(w, {})
            ]
        })
    );
}
function W() {
    return (0, n.jsx)('hr', { className: k.hr });
}
s.Z = function () {
    var e, s;
    let t = (0, o.e7)([D.ZP], () => D.ZP.getPremiumTypeSubscription()),
        i = (0, I.Z)({ subscriptionFilter: (e) => U.eS.has(e.status) }),
        u = i.length > 1,
        m = (0, o.e7)([f.Z], () => (null != t && null != t.paymentSourceId ? f.Z.getPaymentSource(t.paymentSourceId) : null), [t]),
        C = (0, o.e7)([D.ZP], () => D.ZP.hasFetchedSubscriptions()),
        Z = (0, o.e7)([M.Z], () => M.Z.isBusy),
        j = (0, N.V)(),
        G = (0, o.e7)([x.Z], () => x.Z.getSubsection()),
        w = (0, o.e7)([D.ZP], () => {
            var e, s;
            return null !== (s = null === (e = D.ZP.getActiveApplicationSubscriptions()) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0;
        }),
        K = (0, o.e7)([D.ZP], () => {
            var e;
            return Object.values(null !== (e = D.ZP.getSubscriptions()) && void 0 !== e ? e : {})
                .filter((e) => e.type === F.NYc.GUILD)
                .filter((e) => e.status !== F.O0b.ENDED).length;
        }),
        z = (0, o.e7)([L.Z], () => L.Z.getFractionalPremium(!1)),
        Q = (0, o.e7)([L.Z], () => L.Z.getUnactivatedFractionalPremiumUnits()),
        X = null !== t ? t.currentPeriodEnd : void 0,
        q = z.length > 0 || Q.length > 0;
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
        R.Z.enabled)
    )
        return (0, n.jsx)(S.Z, {});
    if (!C || !j)
        return (0, n.jsx)('div', {
            className: r()(k.container, k.loading),
            children: (0, n.jsx)(l.Spinner, {})
        });
    if (G === y.cP) return (0, n.jsx)(g.Z, { onGoBack: () => T.Z.clearSubsection() });
    if (G === y.XZ) return (0, n.jsx)(O.Z, { onGoBack: () => T.Z.clearSubsection() });
    return (0, n.jsx)('div', {
        className: k.container,
        children: (0, n.jsxs)('div', {
            className: k.content,
            children: [
                u ? (0, n.jsx)(U.Yn, {}) : null,
                null != t
                    ? (0, n.jsx)(U.ZP, {
                          subscription: t,
                          paymentSource: m,
                          busy: Z,
                          subscriptions: i
                      })
                    : (0, n.jsx)(U.MM, {}),
                q &&
                    ((e = Q),
                    (s = X),
                    (0, n.jsxs)('section', {
                        children: [
                            (0, n.jsx)(l.Heading, {
                                variant: 'heading-md/bold',
                                className: k.accountCreditTitle,
                                children: Y.Z.Messages.FRACTIONAL_PREMIUM_CREDIT_HEADER
                            }),
                            (0, n.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                className: k.accountCreditDescription,
                                children: Y.Z.Messages.FRACTIONAL_PREMIUM_CREDIT_DESCRIPTION.format({ helpCenterLink: b.Z.getArticleURL(F.BhN.FRACTIONAL_PREMIUM_ABOUT) })
                            }),
                            (0, n.jsx)(v.Z, {
                                className: k.accountCredit,
                                unactivatedUnits: e,
                                activationDate: s
                            })
                        ]
                    })),
                (0, n.jsx)(p.F, {
                    setting: V.s6.SUBSCRIPTIONS_CREDITS,
                    children: (0, n.jsx)(H, {})
                }),
                K > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(W, {}),
                            (0, n.jsx)(A.Z, {
                                count: K,
                                onClickManageSubscription: () => T.Z.setSection(F.oAB.SUBSCRIPTIONS, y.cP)
                            })
                        ]
                    }),
                w > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(W, {}),
                            (0, n.jsx)(h.Z, {
                                count: w,
                                onClickManageSubscription: () => {
                                    T.Z.setSection(F.oAB.SUBSCRIPTIONS, y.XZ), P.default.track(F.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
                                }
                            })
                        ]
                    }),
                (0, n.jsx)(W, {}),
                null != t
                    ? (0, n.jsx)(B.Z, {
                          subscription: t,
                          withOverheadSeparator: !1
                      })
                    : null
            ]
        })
    });
};
