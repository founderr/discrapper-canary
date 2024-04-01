"use strict";
i.r(t), i.d(t, {
  default: function() {
    return v
  }
}), i("47120");
var a = i("735250"),
  l = i("470079"),
  n = i("803997"),
  s = i.n(n),
  r = i("442837"),
  o = i("481060"),
  d = i("11265"),
  c = i("863249"),
  u = i("944163"),
  f = i("246364"),
  m = i("571728"),
  E = i("755340"),
  I = i("794358"),
  x = i("931468"),
  h = i("449226"),
  T = i("689938"),
  M = i("893079"),
  F = i("120623");

function _(e) {
  let {
    guild: t,
    isExpanded: n,
    emptyFormFields: s,
    hasTermsField: r
  } = e, d = t.hasVerificationGate(), [u, f] = l.useState(d), m = e => {
    e.preventDefault(), e.stopPropagation()
  }, E = async e => {
    try {
      f(e), await c.default.enableVerificationForm(t.id, e)
    } catch {
      f(u)
    }
  }, _ = e => {
    e && s ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(i.bind(i, "481060"));
      return i => (0, a.jsx)(t, {
        ...i,
        header: T.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: T.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: T.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => E(e),
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: T.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : E(e)
  }, v = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([i.e("99387"), i.e("80026"), i.e("15986")]).then(i.bind(i, "645264"));
      return i => (0, a.jsx)(e, {
        ...i,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: M.itemWrapper,
    children: [(0, a.jsxs)("div", {
      className: M.itemContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (n || s && !u) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !n && (0, a.jsx)("div", {
        className: F.pillRow,
        children: r && (0, a.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: M.valuePill,
          children: [(0, a.jsx)(x.default, {
            width: 16,
            height: 16
          }), T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, a.jsx)("div", {
      className: F.previewAndEnable,
      children: n || u || !s ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), v()
          },
          children: (0, a.jsx)(o.Tooltip, {
            tooltipContentClassName: F.__invalid_tooltip,
            text: T.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(I.default, {
              height: 24,
              width: 24,
              className: F.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(h.default, {
          checked: u,
          onChange: () => _(!u)
        })]
      }) : (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: T.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function v(e) {
  var t;
  let {
    guild: i,
    isInitiallyExpanded: n = !1,
    showHeader: o = !0,
    disableAnimation: I = !1
  } = e, [x, h] = l.useState(n), T = l.useRef(!1), v = l.useCallback(() => {
    T.current = !0
  }, []), R = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: i.id
  }), p = (0, r.useStateFromStores)([u.default], () => u.default.get(i.id)), C = null !== (t = null == p ? void 0 : p.formFields) && void 0 !== t ? t : [];
  return l.useEffect(() => {
    c.default.fetchVerificationForm(i.id)
  }, [i.id]), (0, a.jsx)(d.default, {
    renderHeader: o ? (0, a.jsx)(_, {
      guild: i,
      isExpanded: x,
      emptyFormFields: (null == C ? void 0 : C.length) == null || (null == C ? void 0 : C.length) === 0,
      hasTermsField: null == C ? void 0 : C.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: x,
    onExpand: () => h(!x),
    disableAnimation: I,
    children: (0, a.jsx)("div", {
      className: s()(M.itemBodyContainer, F.rulesScreeningItems),
      children: null != p && (0, a.jsx)(E.default, {
        guild: i,
        submittedGuildJoinRequestsCount: R,
        formFields: C,
        onFormFieldUpdate: v,
        hideVerificationLevelField: !0
      })
    })
  })
}