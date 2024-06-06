"use strict";
t.r(i), t.d(i, {
  default: function() {
    return m
  }
});
var l = t("735250"),
  n = t("470079"),
  s = t("481060"),
  r = t("651711"),
  a = t("434404"),
  o = t("202858"),
  d = t("587431"),
  c = t("400842"),
  u = t("271267"),
  f = t("981631"),
  h = t("689938"),
  g = t("772064"),
  v = t("653904");

function x() {
  return (0, l.jsxs)("div", {
    className: g.eligibilityHeader,
    children: [(0, l.jsx)(s.Heading, {
      className: g.eligibilityHeaderText,
      variant: "heading-lg/extrabold",
      color: "header-primary",
      children: h.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2
    }), (0, l.jsx)("img", {
      className: g.eligibilityHeaderImage,
      src: v,
      alt: ""
    }), (0, l.jsx)(s.ModalCloseButton, {
      className: g.eligibilityHeaderCloseButton,
      onClick: () => {
        (0, s.closeModal)(u.ELIGIBILITY_MODAL_KEY)
      }
    })]
  })
}

function b(e) {
  let {
    eligibility: i,
    eligibilityLoading: t,
    eligibilityError: h,
    guildId: v,
    onEligibilityBecameStale: x
  } = e, b = n.useMemo(() => ({
    onEligibilityBecameStale: x,
    sortedByIneligible: !0,
    actions: {
      onEnableMFAClick: o.default.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, s.closeModal)(u.ELIGIBILITY_MODAL_KEY), a.default.open(v, f.GuildSettingsSections.SAFETY, void 0, f.GuildSettingsSubsections.SAFETY_PERMISSIONS)
      }
    }
  }), [v, x]), m = (0, r.default)(i, b);
  return null != h ? (0, l.jsx)("div", {
    className: g.paddedContainer,
    children: (0, l.jsx)(d.default, {
      children: h.message
    })
  }) : null == m || t ? (0, l.jsx)("div", {
    className: g.paddedContainer,
    children: (0, l.jsx)(s.Spinner, {})
  }) : (0, l.jsx)("div", {
    children: m.map((e, i) => (0, l.jsxs)(n.Fragment, {
      children: [(0, l.jsx)(c.ChecklistItem, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), i < m.length - 1 ? (0, l.jsx)(s.FormDivider, {}) : null]
    }, e.checkedLabel))
  })
}

function m(e) {
  let {
    eligibility: i,
    eligibilityLoading: t,
    eligibilityError: n,
    refreshEligibility: r,
    guildId: a,
    transitionState: o
  } = e;
  return (0, l.jsxs)(s.ModalRoot, {
    className: g.eligibilityModal,
    size: s.ModalSize.MEDIUM,
    transitionState: o,
    children: [(0, l.jsx)(x, {}), (0, l.jsx)(s.ModalContent, {
      children: (0, l.jsx)(b, {
        eligibility: i,
        eligibilityLoading: t,
        eligibilityError: n,
        guildId: a,
        onEligibilityBecameStale: r
      })
    })]
  })
}