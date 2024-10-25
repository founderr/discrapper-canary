t.d(s, {
    MM: function () {
        return Y;
    },
    Yn: function () {
        return H;
    },
    ZP: function () {
        return W;
    },
    eS: function () {
        return w;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(913527),
    d = t.n(c),
    _ = t(442837),
    u = t(692547),
    E = t(481060),
    T = t(230711),
    S = t(100527),
    I = t(906732),
    N = t(17894),
    m = t(600164),
    C = t(925329),
    A = t(963249),
    g = t(301766),
    h = t(594174),
    O = t(580130),
    p = t(626135),
    R = t(63063),
    x = t(74538),
    M = t(212895),
    f = t(374649),
    D = t(160913),
    L = t(987997),
    P = t(393411),
    b = t(908951),
    Z = t(592889),
    v = t(981631),
    j = t(689938),
    B = t(89216);
function U(e) {
    let s,
        { subscription: t, renewalInvoicePreview: a, fromStandaloneBillingPage: i = !0, className: o } = e,
        c = (0, _.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return l()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, x.uV)(t.additionalPlans)) return null;
    let { status: d } = t,
        u = (0, x.v6)(t);
    if (u) s = B.guildBoostingSubscriptionRowCanceled;
    else
        switch (d) {
            case v.O0b.PAST_DUE:
            case v.O0b.ACCOUNT_HOLD:
            case v.O0b.BILLING_RETRY:
                s = B.guildBoostingSubscriptionRowFailedPayment;
                break;
            case v.O0b.PAUSE_PENDING:
            case v.O0b.PAUSED:
                s = B.guildBoostingSubscriptionRowPaused;
                break;
            default:
                s = B.guildBoostingSubscriptionRowActive;
        }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)('div', {
                className: r()(s, o),
                children: [
                    (0, n.jsx)('div', { className: B.guildBoostingSubscriptionRowBackground }),
                    (0, n.jsx)('div', { className: B.guildBoostingImage }),
                    (0, n.jsxs)('div', {
                        className: B.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, n.jsx)('div', { className: r()(B.guildBoostingWordmark, { [B.canceled]: u }) }),
                            (0, n.jsx)('div', {
                                children: (0, x.bt)({
                                    subscription: t,
                                    renewalInvoicePreview: a,
                                    user: c
                                })
                            })
                        ]
                    }),
                    i &&
                        (0, n.jsx)(L.Z, {
                            color: E.Button.Colors.BRAND,
                            onClick: () => T.Z.open(v.oAB.GUILD_BOOSTING),
                            children: j.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
                        })
                ]
            }),
            !i &&
                (0, n.jsx)(E.Text, {
                    className: B.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: j.Z.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({ openAppHook: () => (0, N.Z)('app') })
                })
        ]
    });
}
function G() {
    return (
        a.useEffect(() => {
            p.default.track(v.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, n.jsxs)('div', {
            className: B.paymentBanner,
            children: [
                (0, n.jsx)(E.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: B.paymentBannerIcon,
                    color: u.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, n.jsx)(E.Text, {
                    className: B.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: j.Z.Messages.MISSING_PAYMENT_METHOD_BANNER
                })
            ]
        })
    );
}
function F() {
    return (
        a.useEffect(() => {
            p.default.track(v.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, n.jsxs)('div', {
            className: B.paymentBanner,
            children: [
                (0, n.jsx)(E.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: B.paymentBannerIcon,
                    color: u.Z.unsafe_rawColors.RED_360.css
                }),
                (0, n.jsx)(E.Text, {
                    className: B.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: j.Z.Messages.INVALID_PAYMENT_METHOD_BANNER
                })
            ]
        })
    );
}
function y(e) {
    let { daysPastDue: s, subscription: t, openInvoiceId: i } = e,
        { analyticsLocations: r } = (0, I.ZP)(S.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        a.useEffect(() => {
            p.default.track(v.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, n.jsxs)('div', {
            className: B.paymentBanner,
            children: [
                (0, n.jsx)(E.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: B.paymentBannerIcon,
                    color: u.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, n.jsx)(E.Text, {
                    className: B.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: j.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
                        daysPastDue: s,
                        paymentModalRedirect: () => {
                            (0, A.Z)({
                                initialPlanId: t.planIdFromItems,
                                openInvoiceId: i,
                                analyticsLocations: r
                            });
                        }
                    })
                })
            ]
        })
    );
}
function V(e) {
    let { subscription: s, renewalInvoicePreview: t, className: a } = e,
        i = (0, _.e7)([O.Z], () => O.Z.getUnactivatedFractionalPremiumUnits());
    return (0, n.jsxs)('div', {
        className: r()(B.billingInformation, a),
        children: [
            (0, n.jsx)(E.FormTitle, {
                tag: 'h3',
                className: B.detailBlockHeader,
                children: j.Z.Messages.PREMIUM_SETTINGS_BILLING_INFO
            }),
            (0, n.jsx)('div', { children: x.ZP.getBillingInformationString(s, t, !1, null != i ? i : []) })
        ]
    });
}
function Y() {
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(E.FormTitle, {
                className: B.sectionTitle,
                tag: 'h1',
                children: j.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
            }),
            (0, n.jsx)('p', {
                className: B.sectionDescription,
                children: j.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
            }),
            (0, n.jsx)(E.Card, {
                className: B.noItemsCard,
                type: E.Card.Types.CUSTOM,
                children: (0, n.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                        (0, n.jsx)(C.Z, {
                            game: null,
                            size: C.Z.Sizes.SMALL,
                            className: B.noItemsIcon
                        }),
                        (0, n.jsx)('span', {
                            className: B.cardText,
                            children: j.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
                        })
                    ]
                })
            })
        ]
    });
}
function k(e) {
    let { subscription: s, analyticsLocation: t, paymentSource: a, busy: i, fromStandaloneBillingPage: o, showInvalidPaymentMethod: l, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: _ } = e,
        { analyticsLocations: u } = (0, I.ZP)(S.Z.SUBSCRIPTION_DETAILS),
        T =
            null != d
                ? {}
                : {
                      subscriptionId: s.id,
                      renewal: !0,
                      analyticsLocations: u,
                      analyticsLocation: t
                  },
        [N] = (0, f.ED)(T);
    N = null != d ? d : N;
    let m =
            null != _
                ? {}
                : {
                      subscriptionId: s.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: u,
                      analyticsLocation: t
                  },
        [C] = (0, f.ED)(m);
    return ((C = null != _ ? _ : C), null == N || null == C)
        ? (0, n.jsx)(E.Spinner, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)('div', {
                      className: B.subscriptionRows,
                      children: [
                          (0, n.jsx)(P.Z, {
                              subscription: s,
                              renewalInvoicePreview: N,
                              paymentSource: a,
                              busy: i,
                              analyticsLocation: t
                          }),
                          (0, n.jsx)(U, {
                              subscription: s,
                              renewalInvoicePreview: N,
                              fromStandaloneBillingPage: o,
                              className: B.guildSubscriptionRow
                          })
                      ]
                  }),
                  (0, n.jsx)('div', {
                      children: (0, n.jsx)(E.HeadingLevel, {
                          component: (0, n.jsx)(E.FormTitle, {
                              tag: 'h5',
                              children: j.Z.Messages.BILLING_STEP_PAYMENT
                          }),
                          children: (0, n.jsxs)('div', {
                              className: B.details,
                              children: [
                                  (0, n.jsx)(V, {
                                      subscription: s,
                                      renewalInvoicePreview: C,
                                      className: B.detailsBlock
                                  }),
                                  (0, n.jsxs)('div', {
                                      className: r()(B.detailsBlock, { [B.redBorder]: l }),
                                      children: [
                                          (0, n.jsx)(E.FormTitle, {
                                              tag: 'h3',
                                              className: B.detailBlockHeader,
                                              children: s.isPurchasedExternally && null != s.paymentGateway ? j.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({ paymentGatewayName: v.Vzj[s.paymentGateway] }) : j.Z.Messages.BILLING_PAY_FOR_IT_WITH
                                          }),
                                          (0, n.jsx)(b.Z, {
                                              subscription: s,
                                              onPaymentSourceAdded: M.i1,
                                              highlightAddPaymentMethodButton: c || l,
                                              analyticsLocation: t,
                                              currentInvoicePreview: N,
                                              dropdownClassName: B.paymentDropdown
                                          })
                                      ]
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
let w = new Set([v.O0b.ACTIVE, v.O0b.PAST_DUE, v.O0b.CANCELED, v.O0b.PAUSE_PENDING, v.O0b.PAUSED]);
function H() {
    return (
        a.useEffect(() => {
            p.default.track(v.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, n.jsxs)('div', {
            className: B.duplicateSubscriptionsBanner,
            children: [
                (0, n.jsx)(E.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: u.Z.unsafe_rawColors.RED_360.css
                }),
                (0, n.jsx)(E.Text, {
                    className: B.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: j.Z.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({ helpCenterLink: R.Z.getArticleURL(v.BhN.NITRO) })
                })
            ]
        })
    );
}
function W(e) {
    var s;
    let t,
        { subscription: a, subscriptions: i, paymentSource: r, busy: o, fromStandaloneBillingPage: l = !0, analyticsLocation: c } = e;
    null != i && null != i[0] && (a = i[0]);
    let { analyticsLocations: u } = (0, I.ZP)(S.Z.SUBSCRIPTION_DETAILS),
        T = null != i ? i.slice(1) : [],
        [N] = (0, f.ED)({
            subscriptionId: a.id,
            renewal: !0,
            analyticsLocations: u,
            analyticsLocation: c
        }),
        [m] = (0, f.ED)({
            subscriptionId: a.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: u,
            analyticsLocation: c
        }),
        C = (0, _.e7)([h.default], () => {
            var e;
            return null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium();
        }),
        A = d()(a.currentPeriodEnd),
        O = null != a.paymentSourceId,
        p = null !== (s = null == m ? void 0 : m.total) && void 0 !== s ? s : 0,
        R = null == r ? void 0 : r.invalid,
        x = !O && p > 0 && (7 >= A.diff(d()(), 'days') || a.status === v.O0b.PAST_DUE) && !C && !a.isPurchasedExternally,
        M = R && a.status === v.O0b.PAST_DUE && !C && !a.isPurchasedExternally,
        L = (0, D.U)(),
        P = !C && L,
        b = (null == a ? void 0 : a.status) === v.O0b.PAST_DUE ? d()().diff(d()(a.currentPeriodStart), 'days') : 0,
        [U] = (0, f.Ox)({
            subscriptionId: a.id,
            preventFetch: !P
        });
    return null == N || null == m
        ? (0, n.jsx)(E.Spinner, {})
        : (null != a.renewalMutations &&
              ((a.renewalMutations.planId !== a.planId && !(0, g.Q0)(a.renewalMutations.planId)) || a.hasExternalPlanChange) &&
              (t = (0, n.jsx)(Z.Z, {
                  subscription: a,
                  renewalMutations: a.renewalMutations,
                  className: B.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, n.jsx)('div', {
              children: (0, n.jsxs)(E.HeadingLevel, {
                  component: (0, n.jsx)(E.FormTitle, {
                      className: B.sectionTitle,
                      tag: 'h1',
                      children: j.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
                  }),
                  children: [
                      x ? (0, n.jsx)(G, {}) : null,
                      M ? (0, n.jsx)(F, {}) : null,
                      P && null != U
                          ? (0, n.jsx)(y, {
                                daysPastDue: b,
                                subscription: a,
                                openInvoiceId: U.id
                            })
                          : null,
                      t,
                      (0, n.jsx)('div', {
                          children: (0, n.jsx)('p', {
                              className: B.sectionDescription,
                              children: j.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
                          })
                      }),
                      (0, n.jsxs)('div', {
                          children: [
                              (0, n.jsx)('div', {
                                  className: T.length > 0 ? B.dupSubscriptionRow : B.__invalid_singleSubscription,
                                  children: (0, n.jsx)(k, {
                                      subscription: a,
                                      analyticsLocation: c,
                                      paymentSource: r,
                                      busy: o,
                                      fromStandaloneBillingPage: l,
                                      showNoPaymentMethod: x,
                                      showInvalidPaymentMethod: M,
                                      fetchedCurrentInvoicePreview: N,
                                      fetchedRenewalInvoicePreview: m
                                  })
                              }),
                              T.map((e, s) =>
                                  (0, n.jsxs)(
                                      'div',
                                      {
                                          className: B.dupSubscriptionRow,
                                          children: [
                                              (0, n.jsx)(E.FormTitle, {
                                                  tag: 'h2',
                                                  className: B.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, n.jsx)(k, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: r,
                                                  busy: o,
                                                  fromStandaloneBillingPage: l,
                                                  showNoPaymentMethod: x,
                                                  showInvalidPaymentMethod: M,
                                                  fetchedCurrentInvoicePreview: null,
                                                  fetchedRenewalInvoicePreview: null
                                              })
                                          ]
                                      },
                                      s
                                  )
                              )
                          ]
                      })
                  ]
              })
          }));
}
