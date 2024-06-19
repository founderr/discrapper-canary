t.r(s), t.d(s, {
  default: function() {
    return b
  }
}), t(411104), t(47120);
var n, i, a = t(735250),
  l = t(470079),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  E = t(481060),
  d = t(355467),
  _ = t(179360),
  T = t(100527),
  S = t(906732),
  u = t(374649),
  I = t(431369),
  N = t(55610),
  A = t(653798),
  C = t(311821),
  O = t(42818),
  m = t(314884),
  h = t(509545),
  g = t(78839),
  R = t(285952),
  M = t(267642),
  x = t(74538),
  D = t(937615),
  p = t(518062),
  L = t(474936),
  P = t(231338),
  Z = t(689938),
  f = t(890089);

function v(e) {
  let {
    premiumSubscription: s,
    isInventory: t,
    onNext: n,
    onClose: i
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.ModalHeader, {
      separator: !1,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H4,
        children: t ? Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
      }), (0, a.jsx)(E.ModalCloseButton, {
        onClick: i
      })]
    }), (0, a.jsxs)(E.ModalContent, {
      className: f.body,
      children: [(0, a.jsx)("div", {
        className: f.cancelImage
      }), (0, a.jsx)("div", {
        children: s.isPurchasedExternally && null != s.paymentGateway ? Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
          paymentGatewayName: P.Vz[s.paymentGateway],
          subscriptionManagementLink: (0, x.JE)(s.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
        }) : t ? Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
          endDate: s.currentPeriodEnd
        }) : Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
          endDate: s.currentPeriodEnd
        })
      }), (0, a.jsx)(N.Z, {
        fromBoostCancelModal: !0
      })]
    }), s.isPurchasedExternally ? null : (0, a.jsxs)(E.ModalFooter, {
      justify: R.Z.Justify.START,
      children: [(0, a.jsx)(E.Button, {
        onClick: n,
        children: Z.Z.Messages.NEXT
      }), (0, a.jsx)(E.Button, {
        look: E.Button.Looks.LINK,
        onClick: i,
        children: Z.Z.Messages.CANCEL
      })]
    })]
  })
}(i = n || (n = {}))[i.START = 1] = "START", i[i.PREVIEW = 2] = "PREVIEW", i[i.CONFIRM = 3] = "CONFIRM";
async function j(e, s, t, n) {
  let i = null != n ? n : function() {
    let e = Object.values(m.Z.boostSlots),
      s = o().sortBy(e.filter(e => !(0, M.tl)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
    return null != s ? s.id : null
  }();
  if (null == i) throw Error("No slot to cancel");
  await (0, _.pD)(i), await (0, d.Mg)(e, {
    items: (0, x.MY)(e, s)
  }, t)
}

function U(e) {
  var s, t, n;
  let {
    premiumSubscription: i,
    guildBoostSlotId: r,
    onBack: o,
    onNext: d,
    onClose: _
  } = e, [N, m] = l.useState(!1), [g, M] = l.useMemo(() => {
    try {
      return [(0, I.g)(i, -1), !1]
    } catch {
      return [
        [], !0
      ]
    }
  }, [i]);
  l.useEffect(() => {
    M && _()
  }, [M]);
  let {
    premiumSubscriptionPlan: P,
    premiumGuildPlan: v
  } = (0, c.cj)([h.Z], () => {
    let e = h.Z.get(i.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? h.Z.getForSkuAndInterval((0, x.Wz)(L.Si.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: U
  } = (0, S.ZP)(), [B] = (0, u.ED)({
    subscriptionId: i.id,
    renewal: !0,
    currency: i.currency,
    paymentSourceId: i.paymentSourceId,
    analyticsLocations: U,
    analyticsLocation: T.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), b = null != v ? (0, x.Zx)(i, null !== (n = null === (s = g[0]) || void 0 === s ? void 0 : s.quantity) && void 0 !== n ? n : 0, v.id) : null, [G] = (0, u.ED)({
    subscriptionId: i.id,
    items: b,
    renewal: !0,
    analyticsLocations: U,
    analyticsLocation: T.Z.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == G || null == P || null == v || null == B) return (0, a.jsx)(E.Spinner, {});
  let F = i.items.some(e => {
      let {
        planId: s
      } = e;
      return !L.Z1.has(s)
    }) && null == i.renewalMutations || (null === (t = i.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: s
      } = e;
      return !L.Z1.has(s)
    })) != null,
    V = g.some(e => {
      let {
        planId: s
      } = e;
      return L.Z1.has(s)
    }),
    y = F || V ? G.total - B.total : -B.total,
    {
      interval: Y,
      intervalCount: H
    } = P;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.Z, {
      onClose: _
    }), (0, a.jsxs)(E.ModalContent, {
      className: f.body,
      children: [(0, a.jsx)("div", {
        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
          endDate: G.subscriptionPeriodStart
        })
      }), (0, a.jsxs)(A.PO, {
        className: f.invoiceTable,
        children: [(0, a.jsx)(A.q9, {
          children: Z.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
        }), (0, a.jsx)(A.R$, {
          label: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
            subscriptionCount: 1
          }),
          value: (0, D.og)((0, D.T4)(y, i.currency), Y, H),
          className: f.invoiceCancelRow
        }), null != b && b.length > 0 ? (0, a.jsxs)("div", {
          children: [(0, a.jsx)(A.KU, {}), (0, a.jsx)(O.nd, {
            premiumSubscription: i,
            renewalInvoice: G,
            isUpdate: !0
          })]
        }) : null]
      })]
    }), (0, a.jsxs)(E.ModalFooter, {
      align: R.Z.Align.CENTER,
      justify: R.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(E.Button, {
        color: E.Button.Colors.RED,
        disabled: N,
        onClick: async () => {
          try {
            m(!0), await j(i, g, U, r), d()
          } catch {
            m(!1)
          }
        },
        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
      }), (0, a.jsx)(C.Z, {
        onClick: o
      })]
    })]
  })
}

function B(e) {
  let {
    premiumSubscription: s,
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(E.ModalHeader, {
      separator: !1,
      children: [(0, a.jsx)(E.FormTitle, {
        tag: E.FormTitleTags.H4,
        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
      }), (0, a.jsx)(E.ModalCloseButton, {
        onClick: t
      })]
    }), (0, a.jsxs)(E.ModalContent, {
      className: f.body,
      children: [(0, a.jsx)("div", {
        className: f.cancelImage
      }), (0, a.jsx)("div", {
        children: Z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
          endDate: s.currentPeriodEnd
        })
      })]
    }), (0, a.jsx)(E.ModalFooter, {
      children: (0, a.jsx)(E.Button, {
        onClick: t,
        children: Z.Z.Messages.OKAY
      })
    })]
  })
}

function b(e) {
  let s, {
    guildBoostSlot: t,
    transitionState: n,
    onClose: i
  } = e;
  l.useEffect(() => {
    !g.ZP.hasFetchedSubscriptions() && (0, d.jg)()
  }, []);
  let r = (0, c.e7)([g.ZP], () => g.ZP.getPremiumTypeSubscription()),
    [o, _] = l.useState(1),
    {
      analyticsLocations: u
    } = (0, S.ZP)(T.Z.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == r) s = (0, a.jsx)(E.ModalContent, {
    children: (0, a.jsx)(E.Spinner, {})
  });
  else switch (o) {
    case 1:
      s = (0, a.jsx)(v, {
        premiumSubscription: r,
        isInventory: null == t.premiumGuildSubscription,
        onNext: () => _(2),
        onClose: i
      });
      break;
    case 2:
      s = (0, a.jsx)(U, {
        premiumSubscription: r,
        guildBoostSlotId: t.id,
        onBack: () => _(1),
        onNext: () => _(3),
        onClose: i
      });
      break;
    case 3:
      s = (0, a.jsx)(B, {
        premiumSubscription: r,
        onClose: i
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(o))
  }
  return (0, a.jsx)(S.Gt, {
    value: u,
    children: (0, a.jsx)(E.ModalRoot, {
      transitionState: n,
      children: s
    })
  })
}