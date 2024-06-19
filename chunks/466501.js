t.r(n), t.d(n, {
  default: function() {
    return h
  }
});
var i = t(735250),
  o = t(470079),
  a = t(481060),
  r = t(651711),
  l = t(434404),
  s = t(202858),
  c = t(587431),
  d = t(400842),
  u = t(271267),
  E = t(981631),
  _ = t(689938),
  M = t(15821),
  A = t(653904);

function S() {
  return (0, i.jsxs)("div", {
    className: M.eligibilityHeader,
    children: [(0, i.jsx)(a.Heading, {
      className: M.eligibilityHeaderText,
      variant: "heading-lg/extrabold",
      color: "header-primary",
      children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2
    }), (0, i.jsx)("img", {
      className: M.eligibilityHeaderImage,
      src: A,
      alt: ""
    }), (0, i.jsx)(a.ModalCloseButton, {
      className: M.eligibilityHeaderCloseButton,
      onClick: () => {
        (0, a.closeModal)(u.Q)
      }
    })]
  })
}

function C(e) {
  let {
    eligibility: n,
    eligibilityLoading: t,
    eligibilityError: _,
    guildId: A,
    onEligibilityBecameStale: S
  } = e, C = o.useMemo(() => ({
    onEligibilityBecameStale: S,
    sortedByIneligible: !0,
    actions: {
      onEnableMFAClick: s.ZP.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, a.closeModal)(u.Q), l.Z.open(A, E.pNK.SAFETY, void 0, E.KsC.SAFETY_PERMISSIONS)
      }
    }
  }), [A, S]), h = (0, r.Z)(n, C);
  return null != _ ? (0, i.jsx)("div", {
    className: M.paddedContainer,
    children: (0, i.jsx)(c.Z, {
      children: _.message
    })
  }) : null == h || t ? (0, i.jsx)("div", {
    className: M.paddedContainer,
    children: (0, i.jsx)(a.Spinner, {})
  }) : (0, i.jsx)("div", {
    children: h.map((e, n) => (0, i.jsxs)(o.Fragment, {
      children: [(0, i.jsx)(d.d, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), n < h.length - 1 ? (0, i.jsx)(a.FormDivider, {}) : null]
    }, e.checkedLabel))
  })
}

function h(e) {
  let {
    eligibility: n,
    eligibilityLoading: t,
    eligibilityError: o,
    refreshEligibility: r,
    guildId: l,
    transitionState: s
  } = e;
  return (0, i.jsxs)(a.ModalRoot, {
    className: M.eligibilityModal,
    size: a.ModalSize.MEDIUM,
    transitionState: s,
    children: [(0, i.jsx)(S, {}), (0, i.jsx)(a.ModalContent, {
      children: (0, i.jsx)(C, {
        eligibility: n,
        eligibilityLoading: t,
        eligibilityError: o,
        guildId: l,
        onEligibilityBecameStale: r
      })
    })]
  })
}