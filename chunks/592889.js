n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  o = n.n(i),
  r = n(512722),
  l = n.n(r),
  c = n(442837),
  d = n(780384),
  u = n(481060),
  _ = n(355467),
  p = n(100527),
  m = n(906732),
  f = n(210887),
  E = n(301766),
  I = n(509545),
  C = n(285952),
  h = n(74538),
  N = n(937615),
  P = n(689938),
  g = n(108526);

function T(e) {
  let {
    subscription: t,
    renewalMutations: n,
    transitionState: a,
    onClose: i,
    analyticsLocation: o
  } = e, r = (0, c.e7)([f.Z], () => f.Z.theme), {
    analyticsLocations: T
  } = (0, m.ZP)(p.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function S() {
    await (0, _.dP)(t, t.planId, T, o), i()
  }
  let R = I.Z.get(t.planId);
  l()(null != R, "Missing subscriptionPlan");
  let A = (0, h.aS)(t.planId, !1, !1, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    b = (0, N.og)((0, N.T4)(A.amount, A.currency), R.interval, R.intervalCount);
  return (0, s.jsxs)(u.ModalRoot, {
    transitionState: a,
    "aria-label": P.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
    children: [(0, s.jsxs)(u.ModalHeader, {
      justify: C.Z.Justify.BETWEEN,
      separator: !1,
      children: [(0, s.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H4,
        children: P.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }), (0, s.jsx)(u.ModalCloseButton, {
        onClick: i
      })]
    }), (0, s.jsx)(u.ModalContent, {
      className: g.modalBody,
      children: (0, E.Q0)(t.planId) ? P.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
        downgradedPlan: h.ZP.getDisplayName(n.planId),
        existingRate: b
      }) : P.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
        existingPlan: h.ZP.getDisplayName(t.planId),
        downgradedPlan: h.ZP.getDisplayName(n.planId),
        existingRate: b
      })
    }), (0, s.jsxs)(u.ModalFooter, {
      children: [(0, s.jsx)(u.Button, {
        onClick: S,
        children: P.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }), (0, s.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: (0, d.ap)(r) ? u.Button.Colors.PRIMARY : u.Button.Colors.WHITE,
        onClick: i,
        children: P.Z.Messages.NEVERMIND
      })]
    })]
  })
}

function S(e) {
  let {
    subscription: t,
    renewalMutations: n,
    className: i,
    analyticsLocation: r
  } = e, [l, c] = a.useState(!1);
  return (0, s.jsxs)("div", {
    className: o()(g.root, i),
    children: [(0, s.jsx)(u.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: g.infoIcon
    }), (0, s.jsx)("div", {
      className: g.text,
      children: P.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
        planName: t.hasExternalPlanChange ? (0, h.zL)(n) : h.ZP.getDisplayName(n.planId),
        date: t.currentPeriodEnd
      })
    }), t.isPurchasedExternally ? null : (0, s.jsx)(u.Anchor, {
      onClick: e => {
        c(!0), e.preventDefault()
      },
      className: g.cancelLink,
      children: P.Z.Messages.CANCEL
    }), l ? (0, s.jsx)(u.Modal, {
      renderModal: e => {
        let {
          transitionState: a
        } = e;
        return (0, s.jsx)(T, {
          subscription: t,
          renewalMutations: n,
          transitionState: a,
          onClose: () => c(!1),
          analyticsLocation: r
        })
      },
      onCloseRequest: () => c(!1)
    }) : null]
  })
}