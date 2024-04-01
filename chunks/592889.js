"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("803997"),
  l = s.n(i),
  r = s("512722"),
  u = s.n(r),
  o = s("442837"),
  d = s("780384"),
  c = s("481060"),
  f = s("355467"),
  E = s("100527"),
  m = s("906732"),
  _ = s("210887"),
  p = s("301766"),
  I = s("509545"),
  N = s("285952"),
  S = s("759231"),
  P = s("74538"),
  C = s("937615"),
  T = s("689938"),
  R = s("643311");

function A(e) {
  let {
    subscription: t,
    renewalMutations: s,
    transitionState: n,
    onClose: i,
    analyticsLocation: l
  } = e, r = (0, o.useStateFromStores)([_.default], () => _.default.theme), {
    analyticsLocations: S
  } = (0, m.default)(E.default.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function A() {
    await (0, f.upgradeSubscription)(t, t.planId, S, l), i()
  }
  let M = I.default.get(t.planId);
  u()(null != M, "Missing subscriptionPlan");
  let h = (0, P.getPrice)(t.planId, !1, !1, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    L = (0, C.formatRate)((0, C.formatPrice)(h.amount, h.currency), M.interval, M.intervalCount);
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: n,
    "aria-label": T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
    children: [(0, a.jsxs)(c.ModalHeader, {
      justify: N.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }), (0, a.jsx)(c.ModalCloseButton, {
        onClick: i
      })]
    }), (0, a.jsx)(c.ModalContent, {
      className: R.modalBody,
      children: (0, p.isNoneSubscription)(t.planId) ? T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
        downgradedPlan: P.default.getDisplayName(s.planId),
        existingRate: L
      }) : T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
        existingPlan: P.default.getDisplayName(t.planId),
        downgradedPlan: P.default.getDisplayName(s.planId),
        existingRate: L
      })
    }), (0, a.jsxs)(c.ModalFooter, {
      children: [(0, a.jsx)(c.Button, {
        onClick: A,
        children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }), (0, a.jsx)(c.Button, {
        look: c.Button.Looks.LINK,
        color: (0, d.isThemeLight)(r) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        onClick: i,
        children: T.default.Messages.NEVERMIND
      })]
    })]
  })
}

function M(e) {
  let {
    subscription: t,
    renewalMutations: s,
    className: i,
    analyticsLocation: r
  } = e, [u, o] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: l()(R.root, i),
    children: [(0, a.jsx)(S.default, {
      className: R.infoIcon
    }), (0, a.jsx)("div", {
      className: R.text,
      children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
        planName: t.hasExternalPlanChange ? (0, P.getExternalPlanDisplayName)(s) : P.default.getDisplayName(s.planId),
        date: t.currentPeriodEnd
      })
    }), t.isPurchasedExternally ? null : (0, a.jsx)(c.Anchor, {
      onClick: e => {
        o(!0), e.preventDefault()
      },
      className: R.cancelLink,
      children: T.default.Messages.CANCEL
    }), u ? (0, a.jsx)(c.Modal, {
      renderModal: e => {
        let {
          transitionState: n
        } = e;
        return (0, a.jsx)(A, {
          subscription: t,
          renewalMutations: s,
          transitionState: n,
          onClose: () => o(!1),
          analyticsLocation: r
        })
      },
      onCloseRequest: () => o(!1)
    }) : null]
  })
}