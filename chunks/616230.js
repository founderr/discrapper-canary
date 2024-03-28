"use strict";
i.r(t), i.d(t, {
  default: function() {
    return R
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
  E = i("571728"),
  I = i("755340"),
  T = i("794358"),
  m = i("931468"),
  _ = i("449226"),
  x = i("689938"),
  h = i("893079"),
  p = i("120623");

function M(e) {
  let {
    guild: t,
    isExpanded: n,
    emptyFormFields: s,
    hasTermsField: r
  } = e, d = t.hasVerificationGate(), [u, f] = l.useState(d), E = e => {
    e.preventDefault(), e.stopPropagation()
  }, I = async e => {
    try {
      f(e), await c.default.enableVerificationForm(t.id, e)
    } catch {
      f(u)
    }
  }, M = e => {
    e && s ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(i.bind(i, "481060"));
      return i => (0, a.jsx)(t, {
        ...i,
        header: x.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: x.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: x.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => I(e),
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: x.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : I(e)
  }, R = () => {
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
    className: h.itemWrapper,
    children: [(0, a.jsxs)("div", {
      className: h.itemContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: x.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (n || s && !u) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: x.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !n && (0, a.jsx)("div", {
        className: p.pillRow,
        children: r && (0, a.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: h.valuePill,
          children: [(0, a.jsx)(m.default, {
            width: 16,
            height: 16
          }), x.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, a.jsx)("div", {
      className: p.previewAndEnable,
      children: n || u || !s ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Clickable, {
          onMouseDown: E,
          onMouseUp: E,
          onClick: e => {
            E(e), R()
          },
          children: (0, a.jsx)(o.Tooltip, {
            tooltipContentClassName: p.__invalid_tooltip,
            text: x.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(T.default, {
              height: 24,
              width: 24,
              className: p.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(_.default, {
          checked: u,
          onChange: () => M(!u)
        })]
      }) : (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: x.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function R(e) {
  var t;
  let {
    guild: i
  } = e, [n, o] = l.useState(!1), [T, m] = l.useState(!1), _ = l.useRef(!1), x = l.useCallback(() => {
    _.current = !0
  }, []), R = (0, E.useSubmittedGuildJoinRequestTotal)({
    guildId: i.id
  }), F = (0, r.useStateFromStores)([u.default], () => u.default.get(i.id)), v = null !== (t = null == F ? void 0 : F.formFields) && void 0 !== t ? t : [];
  return l.useEffect(() => {
    c.default.fetchVerificationForm(i.id).then(() => {
      m(!0)
    })
  }, [i.id]), (0, a.jsx)(d.default, {
    renderHeader: (0, a.jsx)(M, {
      guild: i,
      isExpanded: n,
      emptyFormFields: (null == v ? void 0 : v.length) == null || (null == v ? void 0 : v.length) === 0,
      hasTermsField: null == v ? void 0 : v.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }),
    isExpanded: n,
    onExpand: () => o(!n),
    children: (0, a.jsx)("div", {
      className: s()(h.itemBodyContainer, p.rulesScreeningItems),
      children: T && (0, a.jsx)(I.default, {
        guild: i,
        submittedGuildJoinRequestsCount: R,
        formFields: v,
        onFormFieldUpdate: x,
        hideVerificationLevelField: !0
      })
    })
  })
}