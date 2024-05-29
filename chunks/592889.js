"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("512722"),
  u = s.n(r),
  o = s("442837"),
  d = s("780384"),
  c = s("481060"),
  p = s("355467"),
  m = s("100527"),
  f = s("906732"),
  E = s("210887"),
  _ = s("301766"),
  I = s("509545"),
  S = s("285952"),
  N = s("759231"),
  C = s("74538"),
  P = s("937615"),
  h = s("689938"),
  T = s("765094");

function A(e) {
  let {
    subscription: t,
    renewalMutations: s,
    transitionState: n,
    onClose: i,
    analyticsLocation: l
  } = e, r = (0, o.useStateFromStores)([E.default], () => E.default.theme), {
    analyticsLocations: N
  } = (0, f.default)(m.default.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function A() {
    await (0, p.upgradeSubscription)(t, t.planId, N, l), i()
  }
  let R = I.default.get(t.planId);
  u()(null != R, "Missing subscriptionPlan");
  let y = (0, C.getPrice)(t.planId, !1, !1, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    M = (0, P.formatRate)((0, P.formatPrice)(y.amount, y.currency), R.interval, R.intervalCount);
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: n,
    "aria-label": h.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
    children: [(0, a.jsxs)(c.ModalHeader, {
      justify: S.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: h.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }), (0, a.jsx)(c.ModalCloseButton, {
        onClick: i
      })]
    }), (0, a.jsx)(c.ModalContent, {
      className: T.modalBody,
      children: (0, _.isNoneSubscription)(t.planId) ? h.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
        downgradedPlan: C.default.getDisplayName(s.planId),
        existingRate: M
      }) : h.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
        existingPlan: C.default.getDisplayName(t.planId),
        downgradedPlan: C.default.getDisplayName(s.planId),
        existingRate: M
      })
    }), (0, a.jsxs)(c.ModalFooter, {
      children: [(0, a.jsx)(c.Button, {
        onClick: A,
        children: h.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }), (0, a.jsx)(c.Button, {
        look: c.Button.Looks.LINK,
        color: (0, d.isThemeLight)(r) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        onClick: i,
        children: h.default.Messages.NEVERMIND
      })]
    })]
  })
}

function R(e) {
  let {
    subscription: t,
    renewalMutations: s,
    className: i,
    analyticsLocation: r
  } = e, [u, o] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: l()(T.root, i),
    children: [(0, a.jsx)(N.default, {
      className: T.infoIcon
    }), (0, a.jsx)("div", {
      className: T.text,
      children: h.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
        planName: t.hasExternalPlanChange ? (0, C.getExternalPlanDisplayName)(s) : C.default.getDisplayName(s.planId),
        date: t.currentPeriodEnd
      })
    }), t.isPurchasedExternally ? null : (0, a.jsx)(c.Anchor, {
      onClick: e => {
        o(!0), e.preventDefault()
      },
      className: T.cancelLink,
      children: h.default.Messages.CANCEL
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