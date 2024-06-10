"use strict";
s.r(t), s.d(t, {
  default: function() {
    return F
  }
}), s("411104"), s("47120");
var a, n, l = s("735250"),
  i = s("470079"),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("481060"),
  c = s("355467"),
  S = s("179360"),
  E = s("100527"),
  T = s("906732"),
  _ = s("374649"),
  I = s("431369"),
  N = s("55610"),
  g = s("653798"),
  f = s("311821"),
  m = s("42818"),
  C = s("314884"),
  A = s("509545"),
  O = s("78839"),
  h = s("285952"),
  p = s("267642"),
  R = s("74538"),
  M = s("937615"),
  x = s("518062"),
  D = s("474936"),
  L = s("231338"),
  P = s("689938"),
  b = s("683932");

function v(e) {
  let {
    premiumSubscription: t,
    isInventory: s,
    onNext: a,
    onClose: n
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(u.ModalHeader, {
      separator: !1,
      children: [(0, l.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H4,
        children: s ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_INVENTORY : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_TITLE_GUILD
      }), (0, l.jsx)(u.ModalCloseButton, {
        onClick: n
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: b.body,
      children: [(0, l.jsx)("div", {
        className: b.cancelImage
      }), (0, l.jsx)("div", {
        children: t.isPurchasedExternally && null != t.paymentGateway ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_EXTERNAL.format({
          paymentGatewayName: L.PaymentGatewayToFriendlyName[t.paymentGateway],
          subscriptionManagementLink: (0, R.getExternalSubscriptionMethodUrl)(t.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
        }) : s ? P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_INVENTORY.format({
          endDate: t.currentPeriodEnd
        }) : P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BODY_GUILD.format({
          endDate: t.currentPeriodEnd
        })
      }), (0, l.jsx)(N.default, {
        fromBoostCancelModal: !0
      })]
    }), t.isPurchasedExternally ? null : (0, l.jsxs)(u.ModalFooter, {
      justify: h.default.Justify.START,
      children: [(0, l.jsx)(u.Button, {
        onClick: a,
        children: P.default.Messages.NEXT
      }), (0, l.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        onClick: n,
        children: P.default.Messages.CANCEL
      })]
    })]
  })
}(n = a || (a = {}))[n.START = 1] = "START", n[n.PREVIEW = 2] = "PREVIEW", n[n.CONFIRM = 3] = "CONFIRM";
async function U(e, t, s, a) {
  let n = null != a ? a : function() {
    let e = Object.values(C.default.boostSlots),
      t = o().sortBy(e.filter(e => !(0, p.isGuildBoostSlotCanceled)(e)), e => [null != e.premiumGuildSubscription, null != e.cooldownEndsAt ? new Date(e.cooldownEndsAt) : null])[0];
    return null != t ? t.id : null
  }();
  if (null == n) throw Error("No slot to cancel");
  await (0, S.cancelGuildBoostSlot)(n), await (0, c.updateSubscription)(e, {
    items: (0, R.getItemsFromNewAdditionalPlans)(e, t)
  }, s)
}

function j(e) {
  var t, s, a;
  let {
    premiumSubscription: n,
    guildBoostSlotId: r,
    onBack: o,
    onNext: c,
    onClose: S
  } = e, [N, C] = i.useState(!1), [O, p] = i.useMemo(() => {
    try {
      return [(0, I.calculateAdditionalPlansWithPremiumGuildAdjustment)(n, -1), !1]
    } catch {
      return [
        [], !0
      ]
    }
  }, [n]);
  i.useEffect(() => {
    p && S()
  }, [p]);
  let {
    premiumSubscriptionPlan: L,
    premiumGuildPlan: v
  } = (0, d.useStateFromStoresObject)([A.default], () => {
    let e = A.default.get(n.planId);
    return {
      premiumSubscriptionPlan: e,
      premiumGuildPlan: null != e ? A.default.getForSkuAndInterval((0, R.castPremiumSubscriptionAsSkuId)(D.PremiumSubscriptionSKUs.GUILD), e.interval, e.intervalCount) : null
    }
  }), {
    analyticsLocations: j
  } = (0, T.default)(), [G] = (0, _.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    renewal: !0,
    currency: n.currency,
    paymentSourceId: n.paymentSourceId,
    analyticsLocations: j,
    analyticsLocation: E.default.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW
  }), F = null != v ? (0, R.getItemsWithUpsertedPremiumGuildPlan)(n, null !== (a = null === (t = O[0]) || void 0 === t ? void 0 : t.quantity) && void 0 !== a ? a : 0, v.id) : null, [B] = (0, _.useSubscriptionInvoicePreview)({
    subscriptionId: n.id,
    items: F,
    renewal: !0,
    analyticsLocations: j,
    analyticsLocation: E.default.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW
  });
  if (null == B || null == L || null == v || null == G) return (0, l.jsx)(u.Spinner, {});
  let y = n.items.some(e => {
      let {
        planId: t
      } = e;
      return !D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
    }) && null == n.renewalMutations || (null === (s = n.renewalMutations) || void 0 === s ? void 0 : s.items.find(e => {
      let {
        planId: t
      } = e;
      return !D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
    })) != null,
    V = O.some(e => {
      let {
        planId: t
      } = e;
      return D.PREMIUM_GUILD_SUBSCRIPTION_PLANS.has(t)
    }),
    H = y || V ? B.total - G.total : -G.total,
    {
      interval: Y,
      intervalCount: k
    } = L;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(x.default, {
      onClose: S
    }), (0, l.jsxs)(u.ModalContent, {
      className: b.body,
      children: [(0, l.jsx)("div", {
        children: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_PREVIEW.format({
          endDate: B.subscriptionPeriodStart
        })
      }), (0, l.jsxs)(g.PremiumInvoiceTable, {
        className: b.invoiceTable,
        children: [(0, l.jsx)(g.PremiumInvoiceTableHeader, {
          children: P.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
        }), (0, l.jsx)(g.PremiumInvoiceTableRow, {
          label: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_INVOICE_SUBSCRIPTION_CANCELLED.format({
            subscriptionCount: 1
          }),
          value: (0, M.formatRate)((0, M.formatPrice)(H, n.currency), Y, k),
          className: b.invoiceCancelRow
        }), null != F && F.length > 0 ? (0, l.jsxs)("div", {
          children: [(0, l.jsx)(g.PremiumInvoiceTableDivider, {}), (0, l.jsx)(m.SubscriptionInvoiceFooter, {
            premiumSubscription: n,
            renewalInvoice: B,
            isUpdate: !0
          })]
        }) : null]
      })]
    }), (0, l.jsxs)(u.ModalFooter, {
      align: h.default.Align.CENTER,
      justify: h.default.Justify.BETWEEN,
      children: [(0, l.jsx)(u.Button, {
        color: u.Button.Colors.RED,
        disabled: N,
        onClick: async () => {
          try {
            C(!0), await U(n, O, j, r), c()
          } catch {
            C(!1)
          }
        },
        children: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CANCEL_BUTTON
      }), (0, l.jsx)(f.default, {
        onClick: o
      })]
    })]
  })
}

function G(e) {
  let {
    premiumSubscription: t,
    onClose: s
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(u.ModalHeader, {
      separator: !1,
      children: [(0, l.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H4,
        children: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_TITLE
      }), (0, l.jsx)(u.ModalCloseButton, {
        onClick: s
      })]
    }), (0, l.jsxs)(u.ModalContent, {
      className: b.body,
      children: [(0, l.jsx)("div", {
        className: b.cancelImage
      }), (0, l.jsx)("div", {
        children: P.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_CONFIRM_BODY.format({
          endDate: t.currentPeriodEnd
        })
      })]
    }), (0, l.jsx)(u.ModalFooter, {
      children: (0, l.jsx)(u.Button, {
        onClick: s,
        children: P.default.Messages.OKAY
      })
    })]
  })
}

function F(e) {
  let t, {
    guildBoostSlot: s,
    transitionState: a,
    onClose: n
  } = e;
  i.useEffect(() => {
    !O.default.hasFetchedSubscriptions() && (0, c.fetchSubscriptions)()
  }, []);
  let r = (0, d.useStateFromStores)([O.default], () => O.default.getPremiumTypeSubscription()),
    [o, S] = i.useState(1),
    {
      analyticsLocations: _
    } = (0, T.default)(E.default.GUILD_BOOST_CANCELLATION_MODAL);
  if (null == r) t = (0, l.jsx)(u.ModalContent, {
    children: (0, l.jsx)(u.Spinner, {})
  });
  else switch (o) {
    case 1:
      t = (0, l.jsx)(v, {
        premiumSubscription: r,
        isInventory: null == s.premiumGuildSubscription,
        onNext: () => S(2),
        onClose: n
      });
      break;
    case 2:
      t = (0, l.jsx)(j, {
        premiumSubscription: r,
        guildBoostSlotId: s.id,
        onBack: () => S(1),
        onNext: () => S(3),
        onClose: n
      });
      break;
    case 3:
      t = (0, l.jsx)(G, {
        premiumSubscription: r,
        onClose: n
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(o))
  }
  return (0, l.jsx)(T.AnalyticsLocationProvider, {
    value: _,
    children: (0, l.jsx)(u.ModalRoot, {
      transitionState: a,
      children: t
    })
  })
}