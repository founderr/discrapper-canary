n.r(t), n.d(t, {
  Steps: function() {
    return s
  },
  default: function() {
    return X
  }
}), n(47120), n(411104);
var s, a, i = n(735250),
  o = n(470079),
  r = n(120356),
  l = n.n(r),
  c = n(887024),
  d = n(512722),
  u = n.n(d),
  _ = n(442837),
  p = n(780384),
  m = n(481060),
  f = n(355467),
  E = n(410030),
  I = n(100527),
  C = n(906732),
  h = n(211242),
  N = n(509545),
  P = n(285952),
  g = n(626135),
  T = n(122289),
  S = n(63063),
  R = n(74538),
  A = n(937615),
  b = n(374649),
  x = n(140465),
  M = n(314684),
  L = n(653798),
  y = n(625881),
  B = n(440984),
  D = n(398775),
  O = n(973159),
  v = n(311821),
  U = n(42818),
  Z = n(798769),
  j = n(459965),
  w = n(119269),
  k = n(474936),
  G = n(981631),
  F = n(689938),
  Y = n(927344);
(a = s || (s = {}))[a.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", a[a.CONFIRM = 2] = "CONFIRM", a[a.PREVIEW = 3] = "PREVIEW", a[a.CONFIRM_DISCOUNT = 4] = "CONFIRM_DISCOUNT", a[a.DISCOUNT_APPLIED = 5] = "DISCOUNT_APPLIED", a[a.PAUSE_SELECT = 6] = "PAUSE_SELECT", a[a.PAUSE_CONFIRM = 7] = "PAUSE_CONFIRM";
async function H(e) {
  let {
    premiumSubscription: t,
    onClose: n,
    setHasError: s,
    setIsCancelling: a,
    analyticsLocations: i,
    analyticsLocation: o
  } = e;
  try {
    if (a(!0), s(!1), [G.O0b.PAST_DUE, G.O0b.PAUSED, G.O0b.BILLING_RETRY].includes(t.status)) await (0, f.EO)(t.id, i, o);
    else {
      var r, l;
      let e = null !== (l = null === (r = t.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== l ? l : t.items;
      await (0, f.Mg)(t, {
        items: (0, R.Ue)(e)
      }, i, o)
    }
    n()
  } catch {
    s(!0), a(!1)
  }
}

function W(e) {
  var t;
  let {
    premiumSubscription: n,
    premiumType: s,
    setStep: a,
    onClose: r,
    whatYouLoseExperienceEnabled: l,
    analyticsLocation: c
  } = e, d = (0, h.Q)(), [u, _] = o.useState(!1), [f, I] = o.useState(!1), N = (0, E.ZP)(), {
    analyticsLocations: g
  } = (0, C.ZP)(), T = null;
  switch (n.status) {
    case G.O0b.PAST_DUE:
    case G.O0b.PAUSED:
    case G.O0b.BILLING_RETRY:
      T = F.Z.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
      break;
    default:
      switch (s) {
        case k.p9.TIER_0:
          T = d ? F.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
            date: n.currentPeriodEnd,
            helpdeskArticle: S.Z.getArticleURL(G.BhN.BLOCKED_PAYMENTS)
          }) : F.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
            date: n.currentPeriodEnd
          });
          break;
        case k.p9.TIER_1:
          T = d ? F.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
            date: n.currentPeriodEnd,
            helpdeskArticle: S.Z.getArticleURL(G.BhN.BLOCKED_PAYMENTS)
          }) : F.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
            date: n.currentPeriodEnd
          });
          break;
        default:
          T = d ? F.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
            date: n.currentPeriodEnd,
            helpdeskArticle: S.Z.getArticleURL(G.BhN.BLOCKED_PAYMENTS)
          }) : F.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
            date: n.currentPeriodEnd
          })
      }
  }
  let A = n.items.some(e => {
      let {
        planId: t
      } = e;
      return !k.dJ.has(t)
    }) && null == n.renewalMutations || (null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !k.dJ.has(t)
    })) != null,
    b = A ? (0, i.jsx)(m.Button, {
      onClick: () => a(3),
      children: F.Z.Messages.NEXT
    }) : (0, i.jsx)(m.Button, {
      color: m.Button.Colors.RED,
      disabled: u,
      onClick: async () => {
        await H({
          setHasError: I,
          onClose: r,
          premiumSubscription: n,
          setIsCancelling: _,
          analyticsLocations: g,
          analyticsLocation: c
        })
      },
      children: l ? F.Z.Messages.CONFIRM : F.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: R.ZP.getDisplayPremiumType(n.planId)
      })
    }),
    x = (0, i.jsx)(m.Button, {
      look: m.Button.Looks.LINK,
      color: (0, p.ap)(N) ? m.Button.Colors.PRIMARY : m.Button.Colors.WHITE,
      onClick: r,
      children: l ? F.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : F.Z.Messages.CANCEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [l ? (0, i.jsx)(Z.Z, {
      premiumType: s,
      className: Y.cancellationHeader,
      onClose: r
    }) : (0, i.jsxs)(m.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(m.FormTitle, {
        tag: m.FormTitleTags.H4,
        children: F.Z.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: R.ZP.getDisplayPremiumType(n.planId)
        })
      }), (0, i.jsx)(m.ModalCloseButton, {
        onClick: r
      })]
    }), (0, i.jsxs)(m.ModalContent, {
      className: Y.body,
      children: [f ? (0, i.jsx)(m.FormErrorBlock, {
        className: Y.errorBlock,
        children: F.Z.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)("div", {
        className: Y.cancelImage
      }), (0, i.jsx)("div", {
        children: T
      })]
    }), (0, i.jsxs)(m.ModalFooter, {
      justify: P.Z.Justify.START,
      children: [b, x]
    })]
  })
}

function V(e) {
  var t, n;
  let {
    premiumSubscription: s
  } = e, {
    analyticsLocations: a
  } = (0, C.ZP)(), [o] = (0, b.ED)({
    subscriptionId: s.id,
    items: (0, R.Ue)(null !== (n = null === (t = s.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== n ? n : s.items),
    renewal: !0,
    analyticsLocations: a,
    analyticsLocation: I.Z.CANCEL_INVOICE_PREVIEW
  }), r = (0, _.e7)([N.Z], () => N.Z.get(s.planId));
  if (null == o || null == r) return (0, i.jsx)(m.Spinner, {
    className: Y.loading
  });
  let {
    intervalType: l,
    intervalCount: c
  } = R.ZP.getIntervalForInvoice(o);
  return (0, i.jsxs)("div", {
    className: Y.__invalid_bodyText,
    children: [(0, i.jsx)("div", {
      className: Y.renewalInvoiceDate,
      children: 0 !== o.total ? F.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: o.subscriptionPeriodStart,
        rate: (0, A.og)((0, A.T4)(o.total, o.currency), l, c)
      }) : F.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: o.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(L.PO, {
      children: [(0, i.jsx)(L.q9, {
        children: F.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(L.R$, {
        label: F.Z.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: R.ZP.getDisplayName(r.id)
        }),
        value: (0, R.PK)(r),
        className: Y.invoiceCancelRow
      }), (0, i.jsx)(L.KU, {}), (0, i.jsx)(U.nd, {
        premiumSubscription: s,
        renewalInvoice: o,
        isUpdate: !0
      })]
    })]
  })
}

function z(e) {
  let {
    premiumSubscription: t,
    premiumType: n,
    onBack: s,
    onClose: a,
    analyticsLocation: r
  } = e, [c, d] = o.useState(!1), [u, _] = o.useState(!1), {
    analyticsLocations: p
  } = (0, C.ZP)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(Z.Z, {
      premiumType: n,
      onClose: a
    }), (0, i.jsxs)(m.ModalContent, {
      className: l()(Y.previewStep, Y.body),
      children: [u ? (0, i.jsx)(m.FormErrorBlock, {
        className: Y.errorBlock,
        children: F.Z.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)(V, {
        premiumSubscription: t
      })]
    }), (0, i.jsxs)(m.ModalFooter, {
      align: P.Z.Align.CENTER,
      justify: P.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(m.Button, {
        color: m.Button.Colors.RED,
        disabled: c,
        onClick: async () => {
          await H({
            setHasError: _,
            onClose: a,
            premiumSubscription: t,
            setIsCancelling: d,
            analyticsLocations: p,
            analyticsLocation: r
          })
        },
        children: F.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: R.ZP.getDisplayPremiumType(t.planId)
        })
      }), (0, i.jsx)(v.Z, {
        onClick: s
      })]
    })]
  })
}

function K(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null === (t = (0, R.Af)(e)) || void 0 === t ? void 0 : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
    subscription_status: e.status
  }
}
let q = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Redeem Churn Discount Started",
  5: "Redeem Churn Discount Completed",
  6: "Select Pause Duration",
  7: "Confirm Pause Duration"
};

function X(e) {
  var t;
  let n, {
      premiumSubscription: s,
      transitionState: a,
      onClose: r,
      analyticsLocations: l,
      analyticsLocation: d,
      initialStep: _
    } = e,
    f = o.useRef(new c.qA),
    [h, N] = o.useState(null),
    P = (0, M.yQ)(),
    S = (null == P ? void 0 : P.showCard) === !0,
    A = null === (t = (0, R.Af)(s)) || void 0 === t ? void 0 : t.planId,
    b = null != A ? R.ZP.getPremiumType(A) : null;
  u()(null != b, "Should not be cancelling Nitro without premiumType");
  let L = (0, E.ZP)();
  o.useEffect(() => {
    g.default.track(G.rMx.CANCELLATION_FLOW_STARTED, K(s))
  }, [s]);
  let v = b === k.p9.TIER_0 || b === k.p9.TIER_1 || b === k.p9.TIER_2;
  null == _ && (_ = v ? 1 : 2);
  let {
    analyticsLocations: U
  } = (0, C.ZP)(l, I.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [Z, H, V, X] = function(e, t, n) {
    let [s, a] = o.useState(e), [i, r] = o.useState(Date.now()), [l] = o.useState(Date.now()), c = o.useCallback(e => {
      g.default.track(G.rMx.CANCELLATION_FLOW_STEP, {
        from_step: q[s],
        to_step: q[e],
        step_duration_ms: Date.now() - i,
        flow_duration_ms: Date.now() - l,
        location_stack: n,
        ...K(t)
      }), a(e), r(Date.now())
    }, [n, l, i, s, t]);
    return [s, c, i, l]
  }(_, s, l), [Q, J] = o.useState(null);
  (0, j.w)(s, r, !1);
  let $ = e => {
      r(), g.default.track(G.rMx.CANCELLATION_FLOW_STEP, {
        from_step: q[e],
        to_step: null,
        step_duration_ms: Date.now() - V,
        flow_duration_ms: Date.now() - X,
        location_stack: l,
        ...K(s)
      })
    },
    ee = (0, x.UV)(),
    {
      churnUserDiscountOffer: et,
      isFetchingChurnDiscountOffer: en
    } = (0, x.WR)(!ee || 1 !== Z);
  switch (Z) {
    case 6:
      n = (0, i.jsx)(D.of, {
        premiumSubscription: s,
        premiumType: b,
        setStep: H,
        onClose: () => $(Z),
        pauseDuration: Q,
        setPauseDuration: J,
        footer: (0, i.jsxs)("div", {
          className: Y.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(m.Button, {
            disabled: null === Q,
            onClick: () => {
              0 === Q ? H(1) : H(7)
            },
            children: F.Z.Messages.CONTINUE
          }), (0, i.jsx)(m.Button, {
            look: m.Button.Looks.LINK,
            color: (0, p.wj)(L) ? m.Button.Colors.WHITE : m.Button.Colors.PRIMARY,
            onClick: r,
            children: F.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        analyticsLocation: d
      });
      break;
    case 7:
      if (null == Q) {
        let e = Error("No pause duration to set");
        throw (0, T.q2)(e, {
          extra: {
            subscriptionId: s.id,
            status: s.status
          }
        }), e
      }
      n = (0, i.jsx)(D.Sz, {
        premiumSubscription: s,
        premiumType: b,
        setStep: H,
        onClose: () => $(Z),
        analyticsLocation: d,
        pauseDuration: Q
      });
      break;
    case 1:
      n = (0, i.jsx)(O.Z, {
        premiumType: b,
        titleText: F.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: S ? F.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE_TENURE_REWARD_V2 : F.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        subtitleClassName: S ? Y.subtitleSection : void 0,
        subtitleIcon: S && (0, i.jsx)("div", {
          className: Y.subtitleIcon,
          children: (0, i.jsx)(w.Z, {
            staticPercentage: 100,
            iconClassName: Y.iconClassName,
            showAnimations: !1,
            innerCircleClassName: Y.innerCircle,
            progressCircleStrokeSize: 5,
            backgroundCircleSize: "38%"
          })
        }),
        footer: (0, i.jsxs)("div", {
          className: Y.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(m.Button, {
            onClick: () => H(2),
            children: F.Z.Messages.CONTINUE
          }), (0, i.jsx)(m.Button, {
            look: m.Button.Looks.LINK,
            color: (0, p.wj)(L) ? m.Button.Colors.WHITE : m.Button.Colors.PRIMARY,
            onClick: () => $(Z),
            children: F.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        onClose: () => $(Z),
        onDiscountClaim: () => H(4),
        onContinue: () => H(2),
        isLoading: ee && en,
        churnUserDiscountOffer: et,
        analyticsLocations: U
      });
      break;
    case 2:
      n = (0, i.jsx)(W, {
        premiumSubscription: s,
        premiumType: b,
        setStep: H,
        onClose: () => $(Z),
        whatYouLoseExperienceEnabled: v,
        analyticsLocation: d
      });
      break;
    case 3:
      n = (0, i.jsx)(z, {
        premiumSubscription: s,
        premiumType: b,
        onBack: () => H(2),
        onClose: () => $(Z),
        analyticsLocation: d
      });
      break;
    case 4:
      n = (0, i.jsx)(y.Z, {
        premiumSubscription: s,
        premiumType: b,
        onClose: () => $(Z),
        onConfirm: () => H(5),
        userDiscountOffer: et
      });
      break;
    case 5:
      n = (0, i.jsx)(B.D, {
        premiumSubscription: s,
        premiumType: b,
        onClose: () => $(Z),
        confettiCanvas: h,
        userDiscountOffer: et
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(Z))
  }
  return (0, i.jsxs)(C.Gt, {
    value: U,
    children: [(0, i.jsx)(c.O_, {
      ref: N,
      className: Y.confettiCanvas,
      environment: f.current
    }), (0, i.jsx)(m.ModalRoot, {
      transitionState: a,
      children: n
    })]
  })
}