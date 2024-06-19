t.d(s, {
  Z: function() {
    return S
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(512722),
  o = t.n(r),
  c = t(442837),
  u = t(780384),
  d = t(481060),
  E = t(355467),
  _ = t(100527),
  p = t(906732),
  I = t(210887),
  m = t(301766),
  N = t(509545),
  C = t(285952),
  h = t(74538),
  P = t(937615),
  T = t(689938),
  A = t(108526);

function R(e) {
  let {
    subscription: s,
    renewalMutations: t,
    transitionState: a,
    onClose: i,
    analyticsLocation: l
  } = e, r = (0, c.e7)([I.Z], () => I.Z.theme), {
    analyticsLocations: R
  } = (0, p.ZP)(_.Z.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function S() {
    await (0, E.dP)(s, s.planId, R, l), i()
  }
  let M = N.Z.get(s.planId);
  o()(null != M, "Missing subscriptionPlan");
  let f = (0, h.aS)(s.planId, !1, !1, {
      paymentSourceId: s.paymentSourceId,
      currency: s.currency
    }),
    g = (0, P.og)((0, P.T4)(f.amount, f.currency), M.interval, M.intervalCount);
  return (0, n.jsxs)(d.ModalRoot, {
    transitionState: a,
    "aria-label": T.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
    children: [(0, n.jsxs)(d.ModalHeader, {
      justify: C.Z.Justify.BETWEEN,
      separator: !1,
      children: [(0, n.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H4,
        children: T.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }), (0, n.jsx)(d.ModalCloseButton, {
        onClick: i
      })]
    }), (0, n.jsx)(d.ModalContent, {
      className: A.modalBody,
      children: (0, m.Q0)(s.planId) ? T.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
        downgradedPlan: h.ZP.getDisplayName(t.planId),
        existingRate: g
      }) : T.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
        existingPlan: h.ZP.getDisplayName(s.planId),
        downgradedPlan: h.ZP.getDisplayName(t.planId),
        existingRate: g
      })
    }), (0, n.jsxs)(d.ModalFooter, {
      children: [(0, n.jsx)(d.Button, {
        onClick: S,
        children: T.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }), (0, n.jsx)(d.Button, {
        look: d.Button.Looks.LINK,
        color: (0, u.ap)(r) ? d.Button.Colors.PRIMARY : d.Button.Colors.WHITE,
        onClick: i,
        children: T.Z.Messages.NEVERMIND
      })]
    })]
  })
}

function S(e) {
  let {
    subscription: s,
    renewalMutations: t,
    className: i,
    analyticsLocation: r
  } = e, [o, c] = a.useState(!1);
  return (0, n.jsxs)("div", {
    className: l()(A.root, i),
    children: [(0, n.jsx)(d.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: A.infoIcon
    }), (0, n.jsx)("div", {
      className: A.text,
      children: T.Z.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
        planName: s.hasExternalPlanChange ? (0, h.zL)(t) : h.ZP.getDisplayName(t.planId),
        date: s.currentPeriodEnd
      })
    }), s.isPurchasedExternally ? null : (0, n.jsx)(d.Anchor, {
      onClick: e => {
        c(!0), e.preventDefault()
      },
      className: A.cancelLink,
      children: T.Z.Messages.CANCEL
    }), o ? (0, n.jsx)(d.Modal, {
      renderModal: e => {
        let {
          transitionState: a
        } = e;
        return (0, n.jsx)(R, {
          subscription: s,
          renewalMutations: t,
          transitionState: a,
          onClose: () => c(!1),
          analyticsLocation: r
        })
      },
      onCloseRequest: () => c(!1)
    }) : null]
  })
}