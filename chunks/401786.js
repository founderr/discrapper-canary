t.r(s),
    t.d(s, {
        default: function () {
            return U;
        }
    }),
    t(411104),
    t(47120);
var n,
    a,
    i = t(735250),
    r = t(470079),
    o = t(392711),
    l = t.n(o),
    c = t(442837),
    d = t(481060),
    _ = t(355467),
    u = t(179360),
    E = t(100527),
    T = t(906732),
    S = t(600164),
    I = t(374649),
    N = t(431369),
    A = t(55610),
    C = t(653798),
    m = t(311821),
    g = t(42818),
    h = t(314884),
    O = t(509545),
    p = t(78839),
    R = t(267642),
    x = t(74538),
    f = t(937615),
    M = t(518062),
    D = t(474936),
    P = t(231338),
    L = t(689938),
    b = t(340875);
function Z(e) {
    let { premiumSubscription: s, isInventory: t, onNext: n, onClose: a } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H4,
                        children: t ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
                    }),
                    (0, i.jsx)(d.ModalCloseButton, { onClick: a })
                ]
            }),
            (0, i.jsxs)(d.ModalContent, {
                className: b.body,
                children: [
                    (0, i.jsx)('div', { className: b.cancelImage }),
                    (0, i.jsx)('div', {
                        children:
                            s.isPurchasedExternally && null != s.paymentGateway
                                ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
                                      paymentGatewayName: P.Vz[s.paymentGateway],
                                      subscriptionManagementLink: (0, x.JE)(s.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                                  })
                                : t
                                  ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({ endDate: s.currentPeriodEnd })
                                  : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({ endDate: s.currentPeriodEnd })
                    }),
                    (0, i.jsx)(A.Z, { fromBoostCancelModal: !0 })
                ]
            }),
            s.isPurchasedExternally
                ? null
                : (0, i.jsxs)(d.ModalFooter, {
                      justify: S.Z.Justify.START,
                      children: [
                          (0, i.jsx)(d.Button, {
                              onClick: n,
                              children: L.Z.Messages.NEXT
                          }),
                          (0, i.jsx)(d.Button, {
                              look: d.Button.Looks.LINK,
                              onClick: a,
                              children: L.Z.Messages.CANCEL
                          })
                      ]
                  })
        ]
    });
}
((a = n || (n = {}))[(a.START = 1)] = 'START'), (a[(a.PREVIEW = 2)] = 'PREVIEW'), (a[(a.CONFIRM = 3)] = 'CONFIRM');
async function v(e, s, t, n) {
    let a =
        null != n
            ? n
            : (function () {
                  let e = Object.values(h.Z.boostSlots),
                      s = l().sortBy(
                          e.filter((e) => !(0, R.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != s ? s.id : null;
              })();
    if (null == a) throw Error('No slot to cancel');
    await (0, u.pD)(a), await (0, _.Mg)(e, { items: (0, x.MY)(e, s) }, t);
}
function j(e) {
    var s, t, n;
    let { premiumSubscription: a, guildBoostSlotId: o, onBack: l, onNext: _, onClose: u } = e,
        [A, h] = r.useState(!1),
        [p, R] = r.useMemo(() => {
            try {
                return [(0, N.g)(a, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [a]);
    r.useEffect(() => {
        R && u();
    }, [R]);
    let { premiumSubscriptionPlan: P, premiumGuildPlan: Z } = (0, c.cj)([O.Z], () => {
            let e = O.Z.get(a.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? O.Z.getForSkuAndInterval((0, x.Wz)(D.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: j } = (0, T.ZP)(),
        [B] = (0, I.ED)({
            subscriptionId: a.id,
            renewal: !0,
            currency: a.currency,
            paymentSourceId: a.paymentSourceId,
            analyticsLocations: j,
            analyticsLocation: E.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        U = null != Z ? (0, x.Zx)(a, null !== (n = null === (s = p[0]) || void 0 === s ? void 0 : s.quantity) && void 0 !== n ? n : 0, Z.id) : null,
        [G] = (0, I.ED)({
            subscriptionId: a.id,
            items: U,
            renewal: !0,
            analyticsLocations: j,
            analyticsLocation: E.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == G || null == P || null == Z || null == B) return (0, i.jsx)(d.Spinner, {});
    let F =
            (a.items.some((e) => {
                let { planId: s } = e;
                return !D.Z1.has(s);
            }) &&
                null == a.renewalMutations) ||
            (null === (t = a.renewalMutations) || void 0 === t
                ? void 0
                : t.items.find((e) => {
                      let { planId: s } = e;
                      return !D.Z1.has(s);
                  })) != null,
        y = p.some((e) => {
            let { planId: s } = e;
            return D.Z1.has(s);
        }),
        V = F || y ? G.total - B.total : -B.total,
        { interval: Y, intervalCount: w } = P;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(M.Z, { onClose: u }),
            (0, i.jsxs)(d.ModalContent, {
                className: b.body,
                children: [
                    (0, i.jsx)('div', { children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({ endDate: G.subscriptionPeriodStart }) }),
                    (0, i.jsxs)(C.PO, {
                        className: b.invoiceTable,
                        children: [
                            (0, i.jsx)(C.q9, { children: L.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES }),
                            (0, i.jsx)(C.R$, {
                                label: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({ subscriptionCount: 1 }),
                                value: (0, f.og)((0, f.T4)(V, a.currency), Y, w),
                                className: b.invoiceCancelRow
                            }),
                            null != U && U.length > 0
                                ? (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(C.KU, {}),
                                          (0, i.jsx)(g.nd, {
                                              premiumSubscription: a,
                                              renewalInvoice: G,
                                              isUpdate: !0
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, i.jsxs)(d.ModalFooter, {
                align: S.Z.Align.CENTER,
                justify: S.Z.Justify.BETWEEN,
                children: [
                    (0, i.jsx)(d.Button, {
                        color: d.Button.Colors.RED,
                        disabled: A,
                        onClick: async () => {
                            try {
                                h(!0), await v(a, p, j, o), _();
                            } catch {
                                h(!1);
                            }
                        },
                        children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
                    }),
                    (0, i.jsx)(m.Z, { onClick: l })
                ]
            })
        ]
    });
}
function B(e) {
    let { premiumSubscription: s, onClose: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(d.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H4,
                        children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
                    }),
                    (0, i.jsx)(d.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, i.jsxs)(d.ModalContent, {
                className: b.body,
                children: [(0, i.jsx)('div', { className: b.cancelImage }), (0, i.jsx)('div', { children: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({ endDate: s.currentPeriodEnd }) })]
            }),
            (0, i.jsx)(d.ModalFooter, {
                children: (0, i.jsx)(d.Button, {
                    onClick: t,
                    children: L.Z.Messages.OKAY
                })
            })
        ]
    });
}
function U(e) {
    let s,
        { guildBoostSlot: t, transitionState: n, onClose: a } = e;
    r.useEffect(() => {
        !p.ZP.hasFetchedSubscriptions() && (0, _.jg)();
    }, []);
    let o = (0, c.e7)([p.ZP], () => p.ZP.getPremiumTypeSubscription()),
        [l, u] = r.useState(1),
        { analyticsLocations: S } = (0, T.ZP)(E.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == o) s = (0, i.jsx)(d.ModalContent, { children: (0, i.jsx)(d.Spinner, {}) });
    else
        switch (l) {
            case 1:
                s = (0, i.jsx)(Z, {
                    premiumSubscription: o,
                    isInventory: null == t.premiumGuildSubscription,
                    onNext: () => u(2),
                    onClose: a
                });
                break;
            case 2:
                s = (0, i.jsx)(j, {
                    premiumSubscription: o,
                    guildBoostSlotId: t.id,
                    onBack: () => u(1),
                    onNext: () => u(3),
                    onClose: a
                });
                break;
            case 3:
                s = (0, i.jsx)(B, {
                    premiumSubscription: o,
                    onClose: a
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(l));
        }
    return (0, i.jsx)(T.Gt, {
        value: S,
        children: (0, i.jsx)(d.ModalRoot, {
            transitionState: n,
            children: s
        })
    });
}
