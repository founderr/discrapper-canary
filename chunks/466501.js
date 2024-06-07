"use strict";
t.r(i), t.d(i, {
  default: function() {
    return I
  }
});
var l = t("735250"),
  n = t("470079"),
  a = t("481060"),
  s = t("651711"),
  r = t("434404"),
  c = t("202858"),
  o = t("587431"),
  d = t("400842"),
  u = t("271267"),
  h = t("981631"),
  f = t("689938"),
  g = t("772064"),
  x = t("653904");

function v() {
  return (0, l.jsxs)("div", {
    className: g.eligibilityHeader,
    children: [(0, l.jsx)(a.Heading, {
      className: g.eligibilityHeaderText,
      variant: "heading-lg/extrabold",
      color: "header-primary",
      children: f.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_NOT_ELIGIBLE_TITLE_V2
    }), (0, l.jsx)("img", {
      className: g.eligibilityHeaderImage,
      src: x,
      alt: ""
    }), (0, l.jsx)(a.ModalCloseButton, {
      className: g.eligibilityHeaderCloseButton,
      onClick: () => {
        (0, a.closeModal)(u.ELIGIBILITY_MODAL_KEY)
      }
    })]
  })
}

function m(e) {
  let {
    eligibility: i,
    eligibilityLoading: t,
    eligibilityError: f,
    guildId: x,
    onEligibilityBecameStale: v
  } = e, m = n.useMemo(() => ({
    onEligibilityBecameStale: v,
    sortedByIneligible: !0,
    actions: {
      onEnableMFAClick: c.default.enableMFA,
      onRequireModeratorMFAClick: () => {
        (0, a.closeModal)(u.ELIGIBILITY_MODAL_KEY), r.default.open(x, h.GuildSettingsSections.SAFETY, void 0, h.GuildSettingsSubsections.SAFETY_PERMISSIONS)
      }
    }
  }), [x, v]), I = (0, s.default)(i, m);
  return null != f ? (0, l.jsx)("div", {
    className: g.paddedContainer,
    children: (0, l.jsx)(o.default, {
      children: f.message
    })
  }) : null == I || t ? (0, l.jsx)("div", {
    className: g.paddedContainer,
    children: (0, l.jsx)(a.Spinner, {})
  }) : (0, l.jsx)("div", {
    children: I.map((e, i) => (0, l.jsxs)(n.Fragment, {
      children: [(0, l.jsx)(d.ChecklistItem, {
        name: e.checked ? e.checkedLabel : e.uncheckedLabel,
        description: e.description,
        checked: e.checked,
        actionLabel: e.actionLabel,
        actionHandler: e.actionHandler
      }), i < I.length - 1 ? (0, l.jsx)(a.FormDivider, {}) : null]
    }, e.checkedLabel))
  })
}

function I(e) {
  let {
    eligibility: i,
    eligibilityLoading: t,
    eligibilityError: n,
    refreshEligibility: s,
    guildId: r,
    transitionState: c
  } = e;
  return (0, l.jsxs)(a.ModalRoot, {
    className: g.eligibilityModal,
    size: a.ModalSize.MEDIUM,
    transitionState: c,
    children: [(0, l.jsx)(v, {}), (0, l.jsx)(a.ModalContent, {
      children: (0, l.jsx)(m, {
        eligibility: i,
        eligibilityLoading: t,
        eligibilityError: n,
        guildId: r,
        onEligibilityBecameStale: s
      })
    })]
  })
}