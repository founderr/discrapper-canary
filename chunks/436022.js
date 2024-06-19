_.r(e), _.d(e, {
  default: function() {
    return o
  }
}), _(47120);
var E = _(735250),
  R = _(470079),
  N = _(481060),
  t = _(355467),
  a = _(362786),
  l = _(689938),
  r = _(722302);
let n = {
  [a.HZ.GIFTING_REFUND]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_GIFTING_REFUND,
  [a.HZ.BUYERS_REMORSE]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_BUYERS_REMORSE,
  [a.HZ.WRONG_PURCHASE]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_WRONG_PURCHASE,
  [a.HZ.FORGOT_TO_CANCEL]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_FORGOT_TO_CANCEL,
  [a.HZ.SERVER_BOOSTING_COOLDOWN]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_SERVER_BOOSTING_COOLDOWN,
  [a.HZ.USER_CONFUSION]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_USER_CONFUSION,
  [a.HZ.WANT_TO_SWITCH_TIERS]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_WANT_TO_SWITCH_TIERS,
  [a.HZ.DONT_NEED]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_DONT_NEED,
  [a.HZ.OTHER]: () => l.Z.Messages.BILLING_REFUND_USER_REASON_OTHER
};

function o(s) {
  let e, {
      payment: _,
      reportProblemUrl: o,
      onClose: O,
      ...i
    } = s,
    [I, S] = R.useState(null),
    [u, L] = R.useState(!1),
    [U, c] = R.useState(null);
  e = u ? (0, E.jsx)(N.Spinner, {}) : null != U ? (0, E.jsxs)("div", {
    children: [(0, E.jsx)(N.Text, {
      variant: "text-md/normal",
      className: r.refundErrorTitle,
      children: l.Z.Messages.BILLING_REFUND_ERROR.format({
        error: U
      })
    }), (0, E.jsx)(N.Text, {
      className: r.refundErrorSupport,
      variant: "text-sm/normal",
      children: l.Z.Messages.BILLING_REFUND_ERROR_CONTACT_SUPPORT.format({
        supportUrl: o
      })
    })]
  }) : (0, E.jsxs)("div", {
    className: r.body,
    children: [(0, E.jsx)(N.SingleSelect, {
      options: Object.entries(n).sort((s, e) => {
        let [_] = s, [E] = e;
        return Number(_) === a.HZ.OTHER ? 1 : Number(E) === a.HZ.OTHER ? -1 : 0
      }).map(s => {
        let [e, _] = s;
        return {
          value: parseInt(e),
          label: _()
        }
      }),
      onChange: s => S(s),
      value: I,
      placeholder: l.Z.Messages.BILLING_REFUND_SELECT_REASON
    }), (0, E.jsxs)(N.Text, {
      className: r.notice,
      variant: "text-sm/normal",
      children: [l.Z.Messages.BILLING_REFUND_REVOCATION_NOTICE, " ", _.isPremiumSubscription || _.isPremiumGuildSubscription || _.isPremiumGift ? l.Z.Messages.BILLING_REFUND_ONE_TIME_REFUND_NOTICE : null]
    })]
  });
  let d = null == I || u || null != U;
  return (0, E.jsxs)(N.ModalRoot, {
    ...i,
    children: [(0, E.jsx)(N.ModalHeader, {
      separator: !1,
      children: (0, E.jsx)(N.Heading, {
        variant: "heading-lg/semibold",
        children: null != U ? l.Z.Messages.BILLING_REFUND_MODAL_HEADER_ERROR : l.Z.Messages.BILLING_REFUND_MODAL_HEADER
      })
    }), (0, E.jsx)(N.ModalContent, {
      children: e
    }), (0, E.jsxs)(N.ModalFooter, {
      children: [(0, E.jsx)(N.Button, {
        type: "submit",
        color: N.Button.Colors.RED,
        onClick: async () => {
          if (!d && null != I) {
            L(!0), c(null);
            try {
              await (0, t.Os)(_.id, I), O()
            } catch (s) {
              c(s.body.message)
            } finally {
              L(!1)
            }
          }
        },
        disabled: d,
        autoFocus: !0,
        children: l.Z.Messages.SUBMIT
      }), (0, E.jsx)(N.Button, {
        type: "button",
        look: N.Button.Looks.LINK,
        color: N.Button.Colors.PRIMARY,
        onClick: () => {
          O()
        },
        children: l.Z.Messages.NEVERMIND
      })]
    })]
  })
}