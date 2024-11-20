n.r(t),
    n.d(t, {
        default: function () {
            return F;
        }
    }),
    n(411104),
    n(47120);
var i,
    s,
    r = n(200651),
    l = n(192379),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    d = n(481060),
    u = n(355467),
    m = n(179360),
    h = n(100527),
    g = n(906732),
    p = n(600164),
    x = n(374649),
    S = n(431369),
    T = n(55610),
    C = n(653798),
    E = n(311821),
    _ = n(42818),
    I = n(314884),
    f = n(509545),
    N = n(78839),
    A = n(267642),
    b = n(74538),
    v = n(937615),
    j = n(518062),
    O = n(474936),
    R = n(231338),
    P = n(388032),
    D = n(340875);
function y(e) {
    let { premiumSubscription: t, isInventory: n, onNext: i, onClose: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.ModalHeader, {
                separator: !1,
                children: [
                    (0, r.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H4,
                        children: n ? P.intl.string(P.t.iIoSd3) : P.intl.string(P.t.Skzv0t)
                    }),
                    (0, r.jsx)(d.ModalCloseButton, { onClick: s })
                ]
            }),
            (0, r.jsxs)(d.ModalContent, {
                className: D.body,
                children: [
                    (0, r.jsx)('div', { className: D.cancelImage }),
                    (0, r.jsx)('div', {
                        children:
                            t.isPurchasedExternally && null != t.paymentGateway
                                ? P.intl.format(P.t.HbpFLi, {
                                      paymentGatewayName: R.Vz[t.paymentGateway],
                                      subscriptionManagementLink: (0, b.JE)(t.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                                  })
                                : n
                                  ? P.intl.format(P.t.gXSnur, { endDate: t.currentPeriodEnd })
                                  : P.intl.format(P.t.otHdfX, { endDate: t.currentPeriodEnd })
                    }),
                    (0, r.jsx)(T.Z, { fromBoostCancelModal: !0 })
                ]
            }),
            t.isPurchasedExternally
                ? null
                : (0, r.jsxs)(d.ModalFooter, {
                      justify: p.Z.Justify.START,
                      children: [
                          (0, r.jsx)(d.Button, {
                              onClick: i,
                              children: P.intl.string(P.t.PDTjLC)
                          }),
                          (0, r.jsx)(d.Button, {
                              look: d.Button.Looks.LINK,
                              onClick: s,
                              children: P.intl.string(P.t['ETE/oK'])
                          })
                      ]
                  })
        ]
    });
}
((s = i || (i = {}))[(s.START = 1)] = 'START'), (s[(s.PREVIEW = 2)] = 'PREVIEW'), (s[(s.CONFIRM = 3)] = 'CONFIRM');
async function B(e, t, n, i) {
    let s =
        null != i
            ? i
            : (function () {
                  let e = Object.values(I.Z.boostSlots),
                      t = o().sortBy(
                          e.filter((e) => !(0, A.tl)(e)),
                          (e) => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null]
                      )[0];
                  return null != t ? t.id : null;
              })();
    if (null == s) throw Error('No slot to cancel');
    await (0, m.pD)(s), await (0, u.Mg)(e, { items: (0, b.MY)(e, t) }, n);
}
function L(e) {
    var t, n, i;
    let { premiumSubscription: s, guildBoostSlotId: a, onBack: o, onNext: u, onClose: m } = e,
        [T, I] = l.useState(!1),
        [N, A] = l.useMemo(() => {
            try {
                return [(0, S.g)(s, -1), !1];
            } catch {
                return [[], !0];
            }
        }, [s]);
    l.useEffect(() => {
        A && m();
    }, [A]);
    let { premiumSubscriptionPlan: R, premiumGuildPlan: y } = (0, c.cj)([f.Z], () => {
            let e = f.Z.get(s.planId);
            return {
                premiumSubscriptionPlan: e,
                premiumGuildPlan: null != e ? f.Z.getForSkuAndInterval((0, b.Wz)(O.Si.GUILD), e.interval, e.intervalCount) : null
            };
        }),
        { analyticsLocations: L } = (0, g.ZP)(),
        [Z] = (0, x.ED)({
            subscriptionId: s.id,
            renewal: !0,
            currency: s.currency,
            paymentSourceId: s.paymentSourceId,
            analyticsLocations: L,
            analyticsLocation: h.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
        }),
        F = null != y ? (0, b.Zx)(s, null !== (i = null === (t = N[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== i ? i : 0, y.id) : null,
        [M] = (0, x.ED)({
            subscriptionId: s.id,
            items: F,
            renewal: !0,
            analyticsLocations: L,
            analyticsLocation: h.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
        });
    if (null == M || null == R || null == y || null == Z) return (0, r.jsx)(d.Spinner, {});
    let k =
            (s.items.some((e) => {
                let { planId: t } = e;
                return !O.Z1.has(t);
            }) &&
                null == s.renewalMutations) ||
            (null === (n = s.renewalMutations) || void 0 === n
                ? void 0
                : n.items.find((e) => {
                      let { planId: t } = e;
                      return !O.Z1.has(t);
                  })) != null,
        w = N.some((e) => {
            let { planId: t } = e;
            return O.Z1.has(t);
        }),
        U = k || w ? M.total - Z.total : -Z.total,
        { interval: V, intervalCount: G } = R;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(j.Z, { onClose: m }),
            (0, r.jsxs)(d.ModalContent, {
                className: D.body,
                children: [
                    (0, r.jsx)('div', { children: P.intl.format(P.t['0W23cn'], { endDate: M.subscriptionPeriodStart }) }),
                    (0, r.jsxs)(C.PO, {
                        className: D.invoiceTable,
                        children: [
                            (0, r.jsx)(C.q9, { children: P.intl.string(P.t.iqhIp6) }),
                            (0, r.jsx)(C.R$, {
                                label: P.intl.format(P.t['Vg+LRk'], { subscriptionCount: 1 }),
                                value: (0, v.og)((0, v.T4)(U, s.currency), V, G),
                                className: D.invoiceCancelRow
                            }),
                            null != F && F.length > 0
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(C.KU, {}),
                                          (0, r.jsx)(_.nd, {
                                              premiumSubscription: s,
                                              renewalInvoice: M,
                                              isUpdate: !0
                                          })
                                      ]
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, r.jsxs)(d.ModalFooter, {
                align: p.Z.Align.CENTER,
                justify: p.Z.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(d.Button, {
                        color: d.Button.Colors.RED,
                        disabled: T,
                        onClick: async () => {
                            try {
                                I(!0), await B(s, N, L, a), u();
                            } catch {
                                I(!1);
                            }
                        },
                        children: P.intl.string(P.t['/AS/gI'])
                    }),
                    (0, r.jsx)(E.Z, { onClick: o })
                ]
            })
        ]
    });
}
function Z(e) {
    let { premiumSubscription: t, onClose: n } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(d.ModalHeader, {
                separator: !1,
                children: [
                    (0, r.jsx)(d.FormTitle, {
                        tag: d.FormTitleTags.H4,
                        children: P.intl.string(P.t['fZzV/P'])
                    }),
                    (0, r.jsx)(d.ModalCloseButton, { onClick: n })
                ]
            }),
            (0, r.jsxs)(d.ModalContent, {
                className: D.body,
                children: [(0, r.jsx)('div', { className: D.cancelImage }), (0, r.jsx)('div', { children: P.intl.format(P.t['H+z0np'], { endDate: t.currentPeriodEnd }) })]
            }),
            (0, r.jsx)(d.ModalFooter, {
                children: (0, r.jsx)(d.Button, {
                    onClick: n,
                    children: P.intl.string(P.t.BddRzc)
                })
            })
        ]
    });
}
function F(e) {
    let t,
        { guildBoostSlot: n, transitionState: i, onClose: s } = e;
    l.useEffect(() => {
        !N.ZP.hasFetchedSubscriptions() && (0, u.jg)();
    }, []);
    let a = (0, c.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        [o, m] = l.useState(1),
        { analyticsLocations: p } = (0, g.ZP)(h.Z.GUILD_BOOST_CANCELLATION_MODAL);
    if (null == a) t = (0, r.jsx)(d.ModalContent, { children: (0, r.jsx)(d.Spinner, {}) });
    else
        switch (o) {
            case 1:
                t = (0, r.jsx)(y, {
                    premiumSubscription: a,
                    isInventory: null == n.premiumGuildSubscription,
                    onNext: () => m(2),
                    onClose: s
                });
                break;
            case 2:
                t = (0, r.jsx)(L, {
                    premiumSubscription: a,
                    guildBoostSlotId: n.id,
                    onBack: () => m(1),
                    onNext: () => m(3),
                    onClose: s
                });
                break;
            case 3:
                t = (0, r.jsx)(Z, {
                    premiumSubscription: a,
                    onClose: s
                });
                break;
            default:
                throw Error('Unexpected step: '.concat(o));
        }
    return (0, r.jsx)(g.Gt, {
        value: p,
        children: (0, r.jsx)(d.ModalRoot, {
            transitionState: i,
            children: t
        })
    });
}
