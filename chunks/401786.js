t.r(s), t.d(s, {
  default: function() {
    return U
  }
}), t(411104), t(47120);
var n, a, i = t(735250),
  r = t(470079),
  o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(481060),
  _ = t(355467),
  E = t(179360),
  u = t(100527),
  T = t(906732),
  S = t(374649),
  I = t(431369),
  N = t(55610),
  C = t(653798),
  m = t(311821),
  A = t(42818),
  g = t(314884),
  O = t(509545),
  h = t(78839),
  p = t(285952),
  R = t(267642),
  x = t(74538),
  M = t(937615),
  D = t(518062),
  f = t(474936),
  L = t(231338),
  P = t(689938),
  Z = t(890089);

function v(e) {
  let {
    premiumSubscription: s,
    isInventory: t,
    onNext: n,
    onClose: a
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: t ? P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
      }), (0, i.jsx)(d.ModalCloseButton, {
        onClick: a
      })]
    }), (0, i.jsxs)(d.ModalContent, {
      className: Z.body,
      children: [(0, i.jsx)("div", {
        className: Z.cancelImage
      }), (0, i.jsx)("div", {
        children: s.isPurchasedExternally && null != s.paymentGateway ? P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
          paymentGatewayName: L.Vz[s.paymentGateway],
          subscriptionManagementLink: (0, x.JE)(s.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
        }) : t ? P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
          endDate: s.currentPeriodEnd
        }) : P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
          endDate: s.currentPeriodEnd
        })
      }), (0, i.jsx)(N.Z, {
        fromBoostCancelModal: !0
      })]
    }), s.isPurchasedExternally ? null : (0, i.jsxs)(d.ModalFooter, {
      justify: p.Z.Justify.START,
      children: [(0, i.jsx)(d.Button, {
        onClick: n,
        children: P.Z.Messages.NEXT
      }), (0, i.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        onClick: a,
        children: P.Z.Messages.CANCEL
      })]
    })]
  })
}(a = n || (n = {}))[a.START = 1] = "START", a[a.PREVIEW = 2] = "PREVIEW", a[a.CONFIRM = 3] = "CONFIRM";
async function b(e, s, t, n) {
  let a = null != n ? n : function() {
    let e = Object.values(g.Z.boostSlots),
      s = l().sortBy(e.filter(e => !(0, R.tl)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
    return null != s ? s.id : null
  }();
  if (null == a) throw Error("No slot to cancel");
  await (0, E.pD)(a), await (0, _.Mg)(e, {
    items: (0, x.MY)(e, s)
  }, t)
}

function j(e) {
  var s, t, n;
  let {
    premiumSubscription: a,
    guildBoostSlotId: o,
    onBack: l,
    onNext: _,
    onClose: E
  } = e, [N, g] = r.useState(!1), [h, R] = r.useMemo(() => {
    try {
      return [(0, I.g)(a, -1), !1]
    } catch {
      return [
        [], !0
      ]
    }
  }, [a]);
  r.useEffect(() => {
    R && E()
  }, [R]);
  let {
    premiumSubscriptionPlan: L,
    premiumGuildPlan: v
  } = (0, c.cj)([O.Z], () => {
    let e = O.Z.get(a.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? O.Z.getForSkuAndInterval((0, x.Wz)(f.Si.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: j
  } = (0, T.ZP)(), [B] = (0, S.ED)({
    subscriptionId: a.id,
    renewal: !0,
    currency: a.currency,
    paymentSourceId: a.paymentSourceId,
    analyticsLocations: j,
    analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), U = null != v ? (0, x.Zx)(a, null !== (n = null === (s = h[0]) || void 0 === s ? void 0 : s.quantity) && void 0 !== n ? n : 0, v.id) : null, [G] = (0, S.ED)({
    subscriptionId: a.id,
    items: U,
    renewal: !0,
    analyticsLocations: j,
    analyticsLocation: u.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == G || null == L || null == v || null == B) return (0, i.jsx)(d.Spinner, {});
  let F = a.items.some(e => {
      let {
        planId: s
      } = e;
      return !f.Z1.has(s)
    }) && null == a.renewalMutations || (null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: s
      } = e;
      return !f.Z1.has(s)
    })) != null,
    V = h.some(e => {
      let {
        planId: s
      } = e;
      return f.Z1.has(s)
    }),
    y = F || V ? G.total - B.total : -B.total,
    {
      interval: Y,
      intervalCount: H
    } = L;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(D.Z, {
      onClose: E
    }), (0, i.jsxs)(d.ModalContent, {
      className: Z.body,
      children: [(0, i.jsx)("div", {
        children: P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
          endDate: G.subscriptionPeriodStart
        })
      }), (0, i.jsxs)(C.PO, {
        className: Z.invoiceTable,
        children: [(0, i.jsx)(C.q9, {
          children: P.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
        }), (0, i.jsx)(C.R$, {
          label: P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
            subscriptionCount: 1
          }),
          value: (0, M.og)((0, M.T4)(y, a.currency), Y, H),
          className: Z.invoiceCancelRow
        }), null != U && U.length > 0 ? (0, i.jsxs)("div", {
          children: [(0, i.jsx)(C.KU, {}), (0, i.jsx)(A.nd, {
            premiumSubscription: a,
            renewalInvoice: G,
            isUpdate: !0
          })]
        }) : null]
      })]
    }), (0, i.jsxs)(d.ModalFooter, {
      align: p.Z.Align.CENTER,
      justify: p.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(d.Button, {
        color: d.Button.Colors.RED,
        disabled: N,
        onClick: async () => {
          try {
            g(!0), await b(a, h, j, o), _()
          } catch {
            g(!1)
          }
        },
        children: P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
      }), (0, i.jsx)(m.Z, {
        onClick: l
      })]
    })]
  })
}

function B(e) {
  let {
    premiumSubscription: s,
    onClose: t
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(d.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
      }), (0, i.jsx)(d.ModalCloseButton, {
        onClick: t
      })]
    }), (0, i.jsxs)(d.ModalContent, {
      className: Z.body,
      children: [(0, i.jsx)("div", {
        className: Z.cancelImage
      }), (0, i.jsx)("div", {
        children: P.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
          endDate: s.currentPeriodEnd
        })
      })]
    }), (0, i.jsx)(d.ModalFooter, {
      children: (0, i.jsx)(d.Button, {
        onClick: t,
        children: P.Z.Messages.OKAY
      })
    })]
  })
}

function U(e) {
  let s, {
    guildBoostSlot: t,
    transitionState: n,
    onClose: a
  } = e;
  r.useEffect(() => {
    !h.ZP.hasFetchedSubscriptions() && (0, _.jg)()
  }, []);
  let o = (0, c.e7)([h.ZP], () => h.ZP.getPremiumTypeSubscription()),
    [l, E] = r.useState(1),
    {
      analyticsLocations: S
    } = (0, T.ZP)(u.Z.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == o) s = (0, i.jsx)(d.ModalContent, {
    children: (0, i.jsx)(d.Spinner, {})
  });
  else switch (l) {
    case 1:
      s = (0, i.jsx)(v, {
        premiumSubscription: o,
        isInventory: null == t.premiumGuildSubscription,
        onNext: () => E(2),
        onClose: a
      });
      break;
    case 2:
      s = (0, i.jsx)(j, {
        premiumSubscription: o,
        guildBoostSlotId: t.id,
        onBack: () => E(1),
        onNext: () => E(3),
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
      throw Error("Unexpected step: ".concat(l))
  }
  return (0, i.jsx)(T.Gt, {
    value: S,
    children: (0, i.jsx)(d.ModalRoot, {
      transitionState: n,
      children: s
    })
  })
}