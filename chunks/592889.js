"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  r = s.n(i),
  l = s("512722"),
  u = s.n(l),
  o = s("442837"),
  d = s("780384"),
  c = s("481060"),
  p = s("355467"),
  f = s("100527"),
  E = s("906732"),
  m = s("210887"),
  _ = s("301766"),
  S = s("509545"),
  I = s("285952"),
  N = s("759231"),
  P = s("74538"),
  C = s("937615"),
  T = s("689938"),
  h = s("765094");

function A(e) {
  let {
    subscription: t,
    renewalMutations: s,
    transitionState: n,
    onClose: i,
    analyticsLocation: r
  } = e, l = (0, o.useStateFromStores)([m.default], () => m.default.theme), {
    analyticsLocations: N
  } = (0, E.default)(f.default.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL);
  async function A() {
    await (0, p.upgradeSubscription)(t, t.planId, N, r), i()
  }
  let R = S.default.get(t.planId);
  u()(null != R, "Missing subscriptionPlan");
  let M = (0, P.getPrice)(t.planId, !1, !1, {
      paymentSourceId: t.paymentSourceId,
      currency: t.currency
    }),
    y = (0, C.formatRate)((0, C.formatPrice)(M.amount, M.currency), R.interval, R.intervalCount);
  return (0, a.jsxs)(c.ModalRoot, {
    transitionState: n,
    "aria-label": T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER,
    children: [(0, a.jsxs)(c.ModalHeader, {
      justify: I.default.Justify.BETWEEN,
      separator: !1,
      children: [(0, a.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H4,
        children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_HEADER
      }), (0, a.jsx)(c.ModalCloseButton, {
        onClick: i
      })]
    }), (0, a.jsx)(c.ModalContent, {
      className: h.modalBody,
      children: (0, _.isNoneSubscription)(t.planId) ? T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY_NO_EXISTING_PLAN.format({
        downgradedPlan: P.default.getDisplayName(s.planId),
        existingRate: y
      }) : T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BODY.format({
        existingPlan: P.default.getDisplayName(t.planId),
        downgradedPlan: P.default.getDisplayName(s.planId),
        existingRate: y
      })
    }), (0, a.jsxs)(c.ModalFooter, {
      children: [(0, a.jsx)(c.Button, {
        onClick: A,
        children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_CANCEL_BUTTON
      }), (0, a.jsx)(c.Button, {
        look: c.Button.Looks.LINK,
        color: (0, d.isThemeLight)(l) ? c.Button.Colors.PRIMARY : c.Button.Colors.WHITE,
        onClick: i,
        children: T.default.Messages.NEVERMIND
      })]
    })]
  })
}

function R(e) {
  let {
    subscription: t,
    renewalMutations: s,
    className: i,
    analyticsLocation: l
  } = e, [u, o] = n.useState(!1);
  return (0, a.jsxs)("div", {
    className: r()(h.root, i),
    children: [(0, a.jsx)(N.default, {
      className: h.infoIcon
    }), (0, a.jsx)("div", {
      className: h.text,
      children: T.default.Messages.PREMIUM_PENDING_PLAN_CHANGE_NOTICE.format({
        planName: t.hasExternalPlanChange ? (0, P.getExternalPlanDisplayName)(s) : P.default.getDisplayName(s.planId),
        date: t.currentPeriodEnd
      })
    }), t.isPurchasedExternally ? null : (0, a.jsx)(c.Anchor, {
      onClick: e => {
        o(!0), e.preventDefault()
      },
      className: h.cancelLink,
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
          analyticsLocation: l
        })
      },
      onCloseRequest: () => o(!1)
    }) : null]
  })
}