t.r(n), t.d(n, {
  GuildBoostPurchaseModal: function() {
return en;
  },
  default: function() {
return et;
  }
}), t(47120);
var o, r = t(735250),
  a = t(470079),
  i = t(512722),
  c = t.n(i),
  l = t(77866),
  s = t(792986),
  u = t(772848),
  d = t(442837),
  p = t(780384),
  _ = t(481060),
  f = t(355467),
  m = t(179360),
  h = t(723484),
  S = t(330726),
  I = t(100527),
  E = t(906732),
  g = t(15640),
  b = t(89057),
  P = t(598),
  x = t(409813),
  y = t(45572),
  M = t(98278),
  v = t(431369),
  C = t(176919),
  N = t(3409),
  T = t(185139),
  A = t(210887),
  R = t(430824),
  L = t(314884),
  k = t(975060),
  O = t(853872),
  B = t(509545),
  U = t(78839),
  w = t(285952),
  j = t(626135),
  D = t(267642),
  Z = t(74538),
  F = t(212895),
  W = t(296848),
  G = t(518062),
  H = t(4434),
  Y = t(333451),
  V = t(981631),
  K = t(474936),
  z = t(231338),
  X = t(689938),
  q = t(55417);
(o || (o = {})).PREMIUM = 'discord://app/settings/nitro';
let J = K.Xh.NONE_MONTH,
  Q = [
x.h8.PLAN_SELECT,
x.h8.REVIEW,
x.h8.CONFIRM
  ],
  $ = [
x.h8.PLAN_SELECT,
x.h8.ADD_PAYMENT_STEPS,
x.h8.REVIEW,
x.h8.CONFIRM
  ];
async function ee(e) {
  await (0, m.X8)();
  let n = (0, D.vx)(L.Z.boostSlots);
  return (0, m.W3)(e, n.map(e => e.id));
}

function en(e) {
  let n, {
  transitionState: t,
  onClose: o,
  closeGuildPerksModal: i,
  analyticsLocations: m,
  analyticsLocation: en,
  analyticsSourceLocation: et,
  guildId: eo,
  onSubscribeComplete: er,
  totalNumberOfSlotsToAssign: ea = 1,
  disablePremiumUpsell: ei = !1,
  onSubscriptionConfirmation: ec,
  applicationId: el
} = e,
{
  activeSubscription: es,
  blockedPayments: eu
} = (0, P.usePaymentContext)(),
ed = (0, d.e7)([U.ZP], () => U.ZP.hasFetchedSubscriptions()),
ep = null != es ? es.paymentSourceId : null,
e_ = (0, d.e7)([B.Z], () => null != es ? (0, W.oE)(es.planId) : null),
ef = (0, d.e7)([B.Z], () => null == es || null != B.Z.get(es.planId)),
em = (0, d.e7)([B.Z], () => null == e_ ? B.Z.get(J) : e_),
eh = (0, d.e7)([A.Z], () => A.Z.theme),
eS = a.useRef((0, D.vx)(L.Z.boostSlots)).current,
eI = (0, d.e7)([O.Z], () => O.Z.defaultPaymentSourceId),
eE = (0, N.fL)(null != ep ? ep : ed ? eI : null),
{
  paymentSources: eg,
  setPurchaseError: eb,
  paymentSourceId: eP,
  setIsSubmittingCurrentStep: ex,
  paymentAuthenticationState: ey,
  setPaymentSourceId: eM,
  isSubmittingCurrentStep: ev,
  paymentError: eC,
  purchaseError: eN,
  purchaseErrorBlockRef: eT
} = eE,
eA = Object.keys(eg).length > 0,
[eR, eL] = a.useState(ea - eS.length),
[ek, eO] = a.useState(!1),
eB = (0, d.e7)([k.Z], () => k.Z.popupCallbackCalled),
eU = (0, g.V)(),
ew = a.useMemo(() => null != es && ef && eU ? (0, v.g)(es, eR) : [{
  planId: K.Xh.PREMIUM_MONTH_GUILD,
  quantity: eR
}], [
  es,
  ef,
  eR,
  eU
]),
[ej, eD] = (0, l.Z)(() => [
  (0, u.Z)(),
  Date.now()
]),
{
  analyticsLocations: eZ
} = (0, E.ZP)(m, I.Z.GUILD_BOOST_PURCHASE_MODAL),
eF = a.useMemo(() => {
  var e, n;
  return {
    load_id: ej,
    payment_type: z.Zu[z.GZ.SUBSCRIPTION],
    sku_id: K.Si.GUILD,
    subscription_type: V.NYc.PREMIUM,
    subscription_plan_id: null !== (n = null === (e = ew.find(e => {
      let {
        planId: n
      } = e;
      return K.Z1.has(n);
    })) || void 0 === e ? void 0 : e.planId) && void 0 !== n ? n : K.Xh.PREMIUM_MONTH_GUILD,
    quantity: eR,
    location: en,
    source: et,
    location_stack: eZ
  };
}, [
  ej,
  en,
  eZ,
  et,
  ew,
  eR
]);
  a.useEffect(() => {
(0, F.i1)(eP);
  }, [eP]), a.useEffect(() => {
(async () => {
  if (!0 === eB)
    try {
      if (null == k.Z.redirectedPaymentId)
        return;
      await (0, f.OP)(k.Z.redirectedPaymentId), eJ(x.h8.CONFIRM), eK(y.A.COMPLETED), null != eo && await ee(eo), null != er && er();
    } catch (e) {
      eK(y.A.FAIL), eb(e), j.default.track(V.rMx.PAYMENT_FLOW_FAILED, {
        ...eF,
        payment_error_code: null == e ? void 0 : e.code,
        payment_gateway: V.gg$.STRIPE,
        payment_source_id: eP,
        duration_ms: Date.now() - eD
      });
    } finally {
      ex(!1), (0, f.K2)();
    }
})();
  }, [eB]), a.useEffect(() => {
!U.ZP.hasFetchedSubscriptions() && (0, f.jg)(), j.default.track(V.rMx.PAYMENT_FLOW_STARTED, {
  ...eF,
  guild_id: eo,
  application_id: el
}), null != es && null != es.renewalMutations && j.default.track(V.rMx.PREMIUM_GUILD_PENDING_MODAL, {
  location: en,
  guild_id: eo
});
  }, []);
  let [eW, eG] = a.useState(Q), [eH, eY] = a.useState(x.h8.PLAN_SELECT), [eV, eK] = a.useState(y.A.WAITING), [ez, eX] = a.useState(!0), eq = (0, s.Z)(() => Date.now(), [eH]), eJ = a.useCallback((e, n) => {
eY(e), eb(null);
let t = Date.now();
j.default.track(V.rMx.PAYMENT_FLOW_STEP, {
  ...eF,
  from_step: null != n ? n : eH,
  to_step: e === x.h8.ADD_PAYMENT_STEPS ? x.h8.PAYMENT_TYPE : e,
  step_duration_ms: t - eq,
  flow_duration_ms: t - eD,
  guild_id: eo,
  application_id: el
});
  }, [
eb,
eF,
eH,
eq,
eD,
eo,
el
  ]), eQ = () => {
o(eV === y.A.COMPLETED);
  }, e$ = null != es && es.isPurchasedExternally;
  a.useEffect(() => {
ey !== C.wr.PENDING && eH !== x.h8.CONFIRM && null != ep && (eW !== Q && eG(Q), !Q.includes(eH) && eH !== x.h8.PREMIUM_UPSELL && eJ(x.h8.REVIEW)), eH === x.h8.ADD_PAYMENT_STEPS && eW !== $ && eG($), e$ && eH !== x.h8.PLAN_SELECT && eY(x.h8.PLAN_SELECT);
  }, [
eH,
eJ,
e$,
ey,
es,
ep,
eW
  ]), (0, C.bp)(eH, ey, eJ, eK), (0, x.dZ)(eH, eV, eK);
  let e0 = a.useRef(null),
[e1, e7] = (0, S.Z)(!1, 500),
[e2, e8] = a.useState(null),
[e4, e6] = a.useState([]),
[e5, e3] = a.useState(!1);
  a.useEffect(() => {
let e;
if (!!eU)
  null != B.Z.get(K.Xh.PREMIUM_MONTH_GUILD) && e6(e = (0, F.DE)(K.Xh.PREMIUM_MONTH_GUILD, eP, !1)), null == eP && null != es && null != es.paymentSourceId ? e8(es.currency) : null != e && e8(e[0]);
  }, [
eP,
es,
eU,
JSON.stringify(e4)
  ]);
  let e9 = (0, N.vP)({
paymentModalArgs: eE,
initialStep: x.h8.PAYMENT_TYPE,
prependSteps: [x.h8.PLAN_SELECT],
appendSteps: [
  x.h8.REVIEW,
  x.h8.CONFIRM
],
breadcrumpSteps: eW,
currentBreadcrumpStep: eH,
onReturn: () => {
  eJ(Object.values(eg).length < 1 ? x.h8.PLAN_SELECT : x.h8.REVIEW, x.h8.PAYMENT_TYPE);
},
onComplete: e => {
  eJ(x.h8.REVIEW, e);
},
onStepChange: e => {
  let {
    currentStep: n,
    toStep: t
  } = e, o = Date.now();
  j.default.track(V.rMx.PAYMENT_FLOW_STEP, {
    ...eF,
    from_step: n,
    to_step: t,
    step_duration_ms: o - eq,
    flow_duration_ms: o - eD,
    guild_id: eo
  });
}
  });
  if (eu)
n = (0, r.jsx)(b.Vq, {
  onClose: eQ
});
  else if (ed && ef && eU && null != e2 && '' !== e2) {
if (null == es ? void 0 : es.isPausedOrPausePending)
  n = (0, r.jsx)(_.ModalContent, {
    children: (0, r.jsx)('p', {
      className: q.copy,
      children: X.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
    })
  });
else if (null != es && null != es.renewalMutations)
  n = (0, r.jsx)(_.ModalContent, {
    children: (0, r.jsx)('p', {
      className: q.copy,
      children: X.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
    })
  });
else if (eH === x.h8.PREMIUM_UPSELL) {
  c()(null != em, 'Missing nextPremiumSubscriptionPlan'), c()(e2, 'Currency not defined');
  let e = null != eP ? {
    paymentSourceId: eP,
    currency: e2
  } : {
    currency: e2
  };
  n = (0, r.jsx)(Y.Z, {
    premiumSubscriptionPlan: em,
    analyticsLocation: en,
    analyticsSourceLocation: et,
    onClose: eQ,
    onBack: () => eJ(x.h8.PLAN_SELECT),
    onSkip: () => eJ(null != ep || eA ? x.h8.REVIEW : x.h8.ADD_PAYMENT_STEPS),
    onSubscriptionConfirmation: ec,
    priceOptions: e
  });
} else {
  let e, t, o, a;
  c()(e2, 'Currency not defined');
  let l = null != eP ? {
    paymentSourceId: eP,
    currency: e2
  } : {
    currency: e2
  };
  switch (eH) {
    case x.h8.PLAN_SELECT:
      c()(null != eo, 'Missing guildId'), c()(null != em, 'Missing nextPremiumSubscriptionPlan'), e = (0, r.jsx)(H.CP, {
        premiumSubscriptionPlan: em,
        numGuildBoosts: eR,
        setNumGuildBoosts: eL,
        setForceDisableSubmitButton: eX,
        premiumSubscription: es,
        existingAvailableSlots: eS,
        onClickPremiumSubscriptionLink: () => {
          if (__BILLING_STANDALONE__) {
            window.location.href = 'discord://app/settings/nitro';
            return;
          }
          eQ(), null != i && i(), (0, M.z)();
        },
        guildId: eo,
        priceOptions: l
      }), e$ && null != es && null != es.paymentGateway && (e = (0, r.jsxs)(r.Fragment, {
        children: [
          (0, r.jsx)(_.FormErrorBlock, {
            className: q.externalErrorBlock,
            children: X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
              paymentGatewayName: z.Vz[es.paymentGateway]
            })
          }),
          e
        ]
      })), o = (0, r.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: (0, p.ap)(eh) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
        onClick: eQ,
        children: X.Z.Messages.NEVERMIND
      }), a = (0, r.jsx)(_.Button, {
        type: 'submit',
        disabled: ez || 0 === eR || e$,
        onClick: () => {
          if (!ei && (null == e_ || e_.premiumSubscriptionType !== K.p9.TIER_2)) {
            eJ(x.h8.PREMIUM_UPSELL);
            return;
          }
          eJ(null != ep || eA ? x.h8.REVIEW : x.h8.ADD_PAYMENT_STEPS);
        },
        children: X.Z.Messages.CONTINUE
      });
      break;
    case x.h8.ADD_PAYMENT_STEPS:
      break;
    case x.h8.AWAITING_AUTHENTICATION:
      e = (0, r.jsx)(h.F, {
        className: q.__invalid_body
      });
      break;
    case x.h8.REVIEW:
      c()(null != em, 'Missing nextPremiumSubscriptionPlan'), e = (0, r.jsx)(H.Gq, {
        paymentSources: eg,
        priceOptions: l,
        currentPremiumSubscription: es,
        premiumSubscriptionPaymentSourceId: ep,
        premiumSubscriptionPlan: em,
        newAdditionalPlans: ew,
        onPaymentSourceChange: e => eM(null != e ? e.id : null),
        onPaymentSourceAdd: () => {
          eJ(x.h8.ADD_PAYMENT_STEPS), eM(null);
        },
        onPurchaseTermsChange: eO,
        legalTermsNodeRef: e0,
        hasLegalTermsFlash: e1
      }), t = x.h8.PLAN_SELECT, a = ek ? (0, r.jsx)(_.Button, {
        color: _.Button.Colors.GREEN,
        type: 'submit',
        submitting: ev,
        onClick: async () => {
          c()(null != ew, 'Missing newAdditionalPlans');
          let e = null != eP ? eg[eP] : null;
          eb(null);
          try {
            if (eK(y.A.PURCHASING), ex(!0), c()(null != eP, 'Missing paymentSourceId'), j.default.track(V.rMx.PAYMENT_FLOW_COMPLETED, {
                ...eF,
                duration_ms: Date.now() - eD,
                guild_id: eo,
                application_id: el
              }), e5)
              return;
            if (null == es || null == e_) {
              c()(null != e, 'Missing paymentSource');
              let n = await (0, f.XW)({
                items: ew,
                paymentSource: e,
                currency: l.currency
              });
              if (n.redirectConfirmation) {
                e3(null != n.redirectURL);
                return;
              }
            } else {
              let n = {
                items: (0, Z.MY)(es, ew)
              };
              n.currency = es.currency, null == n.currency && (n.currency = l.currency), n.paymentSource = null != ep ? eg[ep] : void 0, null == n.paymentSource && (c()(null != e, 'Missing paymentSource'), n.paymentSource = e, n.currency = l.currency);
              let t = await (0, f.Mg)(es, n, eZ);
              if (t.redirectConfirmation) {
                e3(null != t.redirectURL);
                return;
              }
            }
            eJ(x.h8.CONFIRM), eK(y.A.COMPLETED), null != eo && await ee(eo), null != er && er();
          } catch (n) {
            eK(y.A.FAIL), eb(n), j.default.track(V.rMx.PAYMENT_FLOW_FAILED, {
              ...eF,
              payment_error_code: null == n ? void 0 : n.code,
              payment_gateway: null != e ? e.type === V.HeQ.CARD ? V.gg$.STRIPE : V.gg$.BRAINTREE : null,
              payment_source_id: eP,
              duration_ms: Date.now() - eD
            });
          } finally {
            !e5 && ex(!1);
          }
        },
        children: X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
      }) : (0, r.jsx)(_.Tooltip, {
        text: X.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
        children: e => (0, r.jsx)(_.Button, {
          ...e,
          color: _.Button.Colors.GREEN,
          onClick: () => {
            null != e0.current && (e0.current.scrollIntoView({
              behavior: 'smooth'
            }), e7(!0));
          },
          type: 'submit',
          children: X.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
        })
      });
      break;
    case x.h8.CONFIRM:
      var ne;
      let s = R.Z.getGuild(eo);
      e = (0, r.jsx)(H.R7, {
        guild: s,
        guildBoostQuantity: eR + eS.length,
        onClose: eQ,
        withAnimation: !1,
        paymentSourceType: null === (ne = eg[null != eP ? eP : '']) || void 0 === ne ? void 0 : ne.type
      });
  }
  let u = null != eC && null == (0, x.ly)(eC) ? eC : eN;
  n = eH === x.h8.ADD_PAYMENT_STEPS ? e9 : (0, r.jsx)(T.Z, {
    hideBreadcrumbs: eH === x.h8.CONFIRM,
    steps: eW,
    currentStep: eH,
    paymentError: u,
    purchaseErrorBlockRef: eT,
    hasCurrencies: e4.length > 1,
    body: e,
    footer: eH !== x.h8.CONFIRM ? (0, r.jsxs)(_.ModalFooter, {
      direction: w.Z.Direction.HORIZONTAL,
      align: w.Z.Align.CENTER,
      justify: w.Z.Justify.END,
      children: [
        null != t ? (0, r.jsx)('div', {
          className: q.backStep,
          children: (0, r.jsx)(_.Button, {
            color: (0, p.ap)(eh) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
            look: _.Button.Looks.LINK,
            size: _.Button.Sizes.NONE,
            onClick: () => {
              null != t && eJ(t);
            },
            children: X.Z.Messages.BACK
          })
        }) : null,
        (0, r.jsxs)('div', {
          className: q.footerRight,
          children: [
            o,
            a
          ]
        })
      ]
    }) : null
  });
}
  } else
n = (0, r.jsx)('div', {
  className: q.loadingWrapper,
  children: (0, r.jsx)(_.Spinner, {})
});
  let nn = null;
  return !eu && eH !== x.h8.PREMIUM_UPSELL && (nn = (0, r.jsx)(G.Z, {
onClose: eQ,
currentStep: eH,
purchaseState: eV
  })), (0, r.jsxs)(_.ModalRoot, {
transitionState: t,
children: [
  nn,
  n
]
  });
}

function et(e) {
  let n = (0, d.e7)([U.ZP], () => U.ZP.getPremiumTypeSubscription()),
{
  analyticsLocations: t
} = (0, E.ZP)(I.Z.GUILD_BOOST_PURCHASE_MODAL);
  return (0, r.jsx)(E.Gt, {
value: t,
children: (0, r.jsx)(P.PaymentContextProvider, {
  activeSubscription: n,
  stepConfigs: [],
  skuIDs: [],
  children: (0, r.jsx)(en, {
    ...e
  })
})
  });
}