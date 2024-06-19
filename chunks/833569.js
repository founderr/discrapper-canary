t.r(s), t.d(s, {
  Steps: function() {
    return n
  },
  default: function() {
    return q
  }
}), t(47120), t(411104);
var n, a, i = t(735250),
  l = t(470079),
  r = t(120356),
  o = t.n(r),
  c = t(887024),
  u = t(512722),
  d = t.n(u),
  E = t(442837),
  _ = t(780384),
  p = t(481060),
  I = t(355467),
  m = t(410030),
  N = t(100527),
  C = t(906732),
  h = t(211242),
  P = t(509545),
  T = t(285952),
  A = t(626135),
  R = t(122289),
  S = t(63063),
  M = t(74538),
  f = t(937615),
  g = t(374649),
  L = t(140465),
  x = t(314684),
  O = t(653798),
  D = t(625881),
  y = t(440984),
  U = t(398775),
  Z = t(973159),
  v = t(311821),
  B = t(42818),
  j = t(798769),
  b = t(459965),
  G = t(119269),
  k = t(474936),
  w = t(981631),
  Y = t(689938),
  F = t(927344);
(a = n || (n = {}))[a.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", a[a.CONFIRM = 2] = "CONFIRM", a[a.PREVIEW = 3] = "PREVIEW", a[a.CONFIRM_DISCOUNT = 4] = "CONFIRM_DISCOUNT", a[a.DISCOUNT_APPLIED = 5] = "DISCOUNT_APPLIED", a[a.PAUSE_SELECT = 6] = "PAUSE_SELECT", a[a.PAUSE_CONFIRM = 7] = "PAUSE_CONFIRM";
async function H(e) {
  let {
    premiumSubscription: s,
    onClose: t,
    setHasError: n,
    setIsCancelling: a,
    analyticsLocations: i,
    analyticsLocation: l
  } = e;
  try {
    if (a(!0), n(!1), [w.O0b.PAST_DUE, w.O0b.PAUSED, w.O0b.BILLING_RETRY].includes(s.status)) await (0, I.EO)(s.id, i, l);
    else {
      var r, o;
      let e = null !== (o = null === (r = s.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== o ? o : s.items;
      await (0, I.Mg)(s, {
        items: (0, M.Ue)(e)
      }, i, l)
    }
    t()
  } catch {
    n(!0), a(!1)
  }
}

function W(e) {
  var s;
  let {
    premiumSubscription: t,
    premiumType: n,
    setStep: a,
    onClose: r,
    whatYouLoseExperienceEnabled: o,
    analyticsLocation: c
  } = e, u = (0, h.Q)(), [d, E] = l.useState(!1), [I, N] = l.useState(!1), P = (0, m.ZP)(), {
    analyticsLocations: A
  } = (0, C.ZP)(), R = null;
  switch (t.status) {
    case w.O0b.PAST_DUE:
    case w.O0b.PAUSED:
    case w.O0b.BILLING_RETRY:
      R = Y.Z.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
      break;
    default:
      switch (n) {
        case k.p9.TIER_0:
          R = u ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
            date: t.currentPeriodEnd,
            helpdeskArticle: S.Z.getArticleURL(w.BhN.BLOCKED_PAYMENTS)
          }) : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
            date: t.currentPeriodEnd
          });
          break;
        case k.p9.TIER_1:
          R = u ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
            date: t.currentPeriodEnd,
            helpdeskArticle: S.Z.getArticleURL(w.BhN.BLOCKED_PAYMENTS)
          }) : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
            date: t.currentPeriodEnd
          });
          break;
        default:
          R = u ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
            date: t.currentPeriodEnd,
            helpdeskArticle: S.Z.getArticleURL(w.BhN.BLOCKED_PAYMENTS)
          }) : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
            date: t.currentPeriodEnd
          })
      }
  }
  let f = t.items.some(e => {
      let {
        planId: s
      } = e;
      return !k.dJ.has(s)
    }) && null == t.renewalMutations || (null === (s = t.renewalMutations) || void 0 === s ? void 0 : s.items.find(e => {
      let {
        planId: s
      } = e;
      return !k.dJ.has(s)
    })) != null,
    g = f ? (0, i.jsx)(p.Button, {
      onClick: () => a(3),
      children: Y.Z.Messages.NEXT
    }) : (0, i.jsx)(p.Button, {
      color: p.Button.Colors.RED,
      disabled: d,
      onClick: async () => {
        await H({
          setHasError: N,
          onClose: r,
          premiumSubscription: t,
          setIsCancelling: E,
          analyticsLocations: A,
          analyticsLocation: c
        })
      },
      children: o ? Y.Z.Messages.CONFIRM : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: M.ZP.getDisplayPremiumType(t.planId)
      })
    }),
    L = (0, i.jsx)(p.Button, {
      look: p.Button.Looks.LINK,
      color: (0, _.ap)(P) ? p.Button.Colors.PRIMARY : p.Button.Colors.WHITE,
      onClick: r,
      children: o ? Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : Y.Z.Messages.CANCEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [o ? (0, i.jsx)(j.Z, {
      premiumType: n,
      className: F.cancellationHeader,
      onClose: r
    }) : (0, i.jsxs)(p.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(p.FormTitle, {
        tag: p.FormTitleTags.H4,
        children: Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: M.ZP.getDisplayPremiumType(t.planId)
        })
      }), (0, i.jsx)(p.ModalCloseButton, {
        onClick: r
      })]
    }), (0, i.jsxs)(p.ModalContent, {
      className: F.body,
      children: [I ? (0, i.jsx)(p.FormErrorBlock, {
        className: F.errorBlock,
        children: Y.Z.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)("div", {
        className: F.cancelImage
      }), (0, i.jsx)("div", {
        children: R
      })]
    }), (0, i.jsxs)(p.ModalFooter, {
      justify: T.Z.Justify.START,
      children: [g, L]
    })]
  })
}

function V(e) {
  var s, t;
  let {
    premiumSubscription: n
  } = e, {
    analyticsLocations: a
  } = (0, C.ZP)(), [l] = (0, g.ED)({
    subscriptionId: n.id,
    items: (0, M.Ue)(null !== (t = null === (s = n.renewalMutations) || void 0 === s ? void 0 : s.items) && void 0 !== t ? t : n.items),
    renewal: !0,
    analyticsLocations: a,
    analyticsLocation: N.Z.CANCEL_INVOICE_PREVIEW
  }), r = (0, E.e7)([P.Z], () => P.Z.get(n.planId));
  if (null == l || null == r) return (0, i.jsx)(p.Spinner, {
    className: F.loading
  });
  let {
    intervalType: o,
    intervalCount: c
  } = M.ZP.getIntervalForInvoice(l);
  return (0, i.jsxs)("div", {
    className: F.__invalid_bodyText,
    children: [(0, i.jsx)("div", {
      className: F.renewalInvoiceDate,
      children: 0 !== l.total ? Y.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: l.subscriptionPeriodStart,
        rate: (0, f.og)((0, f.T4)(l.total, l.currency), o, c)
      }) : Y.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: l.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(O.PO, {
      children: [(0, i.jsx)(O.q9, {
        children: Y.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(O.R$, {
        label: Y.Z.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: M.ZP.getDisplayName(r.id)
        }),
        value: (0, M.PK)(r),
        className: F.invoiceCancelRow
      }), (0, i.jsx)(O.KU, {}), (0, i.jsx)(B.nd, {
        premiumSubscription: n,
        renewalInvoice: l,
        isUpdate: !0
      })]
    })]
  })
}

function z(e) {
  let {
    premiumSubscription: s,
    premiumType: t,
    onBack: n,
    onClose: a,
    analyticsLocation: r
  } = e, [c, u] = l.useState(!1), [d, E] = l.useState(!1), {
    analyticsLocations: _
  } = (0, C.ZP)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(j.Z, {
      premiumType: t,
      onClose: a
    }), (0, i.jsxs)(p.ModalContent, {
      className: o()(F.previewStep, F.body),
      children: [d ? (0, i.jsx)(p.FormErrorBlock, {
        className: F.errorBlock,
        children: Y.Z.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)(V, {
        premiumSubscription: s
      })]
    }), (0, i.jsxs)(p.ModalFooter, {
      align: T.Z.Align.CENTER,
      justify: T.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(p.Button, {
        color: p.Button.Colors.RED,
        disabled: c,
        onClick: async () => {
          await H({
            setHasError: E,
            onClose: a,
            premiumSubscription: s,
            setIsCancelling: u,
            analyticsLocations: _,
            analyticsLocation: r
          })
        },
        children: Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: M.ZP.getDisplayPremiumType(s.planId)
        })
      }), (0, i.jsx)(v.Z, {
        onClick: n
      })]
    })]
  })
}

function K(e) {
  var s;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null === (s = (0, M.Af)(e)) || void 0 === s ? void 0 : s.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
    subscription_status: e.status
  }
}
let X = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Redeem Churn Discount Started",
  5: "Redeem Churn Discount Completed",
  6: "Select Pause Duration",
  7: "Confirm Pause Duration"
};

function q(e) {
  var s;
  let t, {
      premiumSubscription: n,
      transitionState: a,
      onClose: r,
      analyticsLocations: o,
      analyticsLocation: u,
      initialStep: E
    } = e,
    I = l.useRef(new c.qA),
    [h, P] = l.useState(null),
    T = (0, x.yQ)(),
    S = (null == T ? void 0 : T.showCard) === !0,
    f = null === (s = (0, M.Af)(n)) || void 0 === s ? void 0 : s.planId,
    g = null != f ? M.ZP.getPremiumType(f) : null;
  d()(null != g, "Should not be cancelling Nitro without premiumType");
  let O = (0, m.ZP)();
  l.useEffect(() => {
    A.default.track(w.rMx.CANCELLATION_FLOW_STARTED, K(n))
  }, [n]);
  let v = g === k.p9.TIER_0 || g === k.p9.TIER_1 || g === k.p9.TIER_2;
  null == E && (E = v ? 1 : 2);
  let {
    analyticsLocations: B
  } = (0, C.ZP)(o, N.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [j, H, V, q] = function(e, s, t) {
    let [n, a] = l.useState(e), [i, r] = l.useState(Date.now()), [o] = l.useState(Date.now()), c = l.useCallback(e => {
      A.default.track(w.rMx.CANCELLATION_FLOW_STEP, {
        from_step: X[n],
        to_step: X[e],
        step_duration_ms: Date.now() - i,
        flow_duration_ms: Date.now() - o,
        location_stack: t,
        ...K(s)
      }), a(e), r(Date.now())
    }, [t, o, i, n, s]);
    return [n, c, i, o]
  }(E, n, o), [Q, J] = l.useState(null);
  (0, b.w)(n, r, !1);
  let $ = e => {
      r(), A.default.track(w.rMx.CANCELLATION_FLOW_STEP, {
        from_step: X[e],
        to_step: null,
        step_duration_ms: Date.now() - V,
        flow_duration_ms: Date.now() - q,
        location_stack: o,
        ...K(n)
      })
    },
    ee = (0, L.UV)(),
    {
      churnUserDiscountOffer: es,
      isFetchingChurnDiscountOffer: et
    } = (0, L.WR)(!ee || 1 !== j);
  switch (j) {
    case 6:
      t = (0, i.jsx)(U.of, {
        premiumSubscription: n,
        premiumType: g,
        setStep: H,
        onClose: () => $(j),
        pauseDuration: Q,
        setPauseDuration: J,
        footer: (0, i.jsxs)("div", {
          className: F.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(p.Button, {
            disabled: null === Q,
            onClick: () => {
              0 === Q ? H(1) : H(7)
            },
            children: Y.Z.Messages.CONTINUE
          }), (0, i.jsx)(p.Button, {
            look: p.Button.Looks.LINK,
            color: (0, _.wj)(O) ? p.Button.Colors.WHITE : p.Button.Colors.PRIMARY,
            onClick: r,
            children: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        analyticsLocation: u
      });
      break;
    case 7:
      if (null == Q) {
        let e = Error("No pause duration to set");
        throw (0, R.q2)(e, {
          extra: {
            subscriptionId: n.id,
            status: n.status
          }
        }), e
      }
      t = (0, i.jsx)(U.Sz, {
        premiumSubscription: n,
        premiumType: g,
        setStep: H,
        onClose: () => $(j),
        analyticsLocation: u,
        pauseDuration: Q
      });
      break;
    case 1:
      t = (0, i.jsx)(Z.Z, {
        premiumType: g,
        titleText: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: S ? Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE_TENURE_REWARD_V2 : Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        subtitleClassName: S ? F.subtitleSection : void 0,
        subtitleIcon: S && (0, i.jsx)("div", {
          className: F.subtitleIcon,
          children: (0, i.jsx)(G.Z, {
            staticPercentage: 100,
            iconClassName: F.iconClassName,
            showAnimations: !1,
            innerCircleClassName: F.innerCircle,
            progressCircleStrokeSize: 5,
            backgroundCircleSize: "38%"
          })
        }),
        footer: (0, i.jsxs)("div", {
          className: F.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(p.Button, {
            onClick: () => H(2),
            children: Y.Z.Messages.CONTINUE
          }), (0, i.jsx)(p.Button, {
            look: p.Button.Looks.LINK,
            color: (0, _.wj)(O) ? p.Button.Colors.WHITE : p.Button.Colors.PRIMARY,
            onClick: () => $(j),
            children: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        onClose: () => $(j),
        onDiscountClaim: () => H(4),
        onContinue: () => H(2),
        isLoading: ee && et,
        churnUserDiscountOffer: es,
        analyticsLocations: B
      });
      break;
    case 2:
      t = (0, i.jsx)(W, {
        premiumSubscription: n,
        premiumType: g,
        setStep: H,
        onClose: () => $(j),
        whatYouLoseExperienceEnabled: v,
        analyticsLocation: u
      });
      break;
    case 3:
      t = (0, i.jsx)(z, {
        premiumSubscription: n,
        premiumType: g,
        onBack: () => H(2),
        onClose: () => $(j),
        analyticsLocation: u
      });
      break;
    case 4:
      t = (0, i.jsx)(D.Z, {
        premiumSubscription: n,
        premiumType: g,
        onClose: () => $(j),
        onConfirm: () => H(5),
        userDiscountOffer: es
      });
      break;
    case 5:
      t = (0, i.jsx)(y.D, {
        premiumSubscription: n,
        premiumType: g,
        onClose: () => $(j),
        confettiCanvas: h,
        userDiscountOffer: es
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(j))
  }
  return (0, i.jsxs)(C.Gt, {
    value: B,
    children: [(0, i.jsx)(c.O_, {
      ref: P,
      className: F.confettiCanvas,
      environment: I.current
    }), (0, i.jsx)(p.ModalRoot, {
      transitionState: a,
      children: t
    })]
  })
}