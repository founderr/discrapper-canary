"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("442837"),
  o = a("481060"),
  c = a("11265"),
  d = a("863249"),
  u = a("944163"),
  f = a("246364"),
  m = a("571728"),
  h = a("755340"),
  E = a("794358"),
  p = a("931468"),
  C = a("449226"),
  T = a("689938"),
  _ = a("212723"),
  x = a("5288");

function g(e) {
  let {
    guild: t,
    isExpanded: s,
    emptyFormFields: i,
    hasTermsField: l
  } = e, c = t.hasVerificationGate(), [u, f] = r.useState(c), m = e => {
    e.preventDefault(), e.stopPropagation()
  }, h = async e => {
    try {
      f(e), await d.default.enableVerificationForm(t.id, e)
    } catch {
      f(u)
    }
  }, g = e => {
    e && i ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(a.bind(a, "481060"));
      return a => (0, n.jsx)(t, {
        ...a,
        header: T.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: T.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: T.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => h(e),
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: T.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : h(e)
  }, N = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("49237"), a.e("99387"), a.e("80026"), a.e("36869")]).then(a.bind(a, "645264"));
      return a => (0, n.jsx)(e, {
        ...a,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, n.jsxs)("div", {
    className: _.itemWrapper,
    children: [(0, n.jsxs)("div", {
      className: _.itemContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (s || i && !u) && (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !s && (0, n.jsx)("div", {
        className: x.pillRow,
        children: l && (0, n.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: _.valuePill,
          children: [(0, n.jsx)(p.default, {
            width: 16,
            height: 16
          }), T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, n.jsx)("div", {
      className: x.previewAndEnable,
      children: s || u || !i ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), N()
          },
          children: (0, n.jsx)(o.Tooltip, {
            tooltipContentClassName: x.__invalid_tooltip,
            text: T.default.Messages.PREVIEW,
            children: e => (0, n.jsx)(E.default, {
              height: 24,
              width: 24,
              className: x.previewIcon,
              ...e
            })
          })
        }), (0, n.jsx)(C.default, {
          checked: u,
          onChange: () => g(!u)
        })]
      }) : (0, n.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: T.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function N(e, t) {
  await d.default.updateVerificationForm(e, t)
}
async function I(e, t) {
  await d.default.updateVerificationFormDescription(e, t)
}

function v(e) {
  var t, a, s;
  let {
    guild: o,
    isClanContext: E = !1,
    onFieldsSave: p,
    onDescriptionSave: C,
    verificationForm: T
  } = e, [v, A] = r.useState(E), S = r.useRef(!1), L = r.useCallback(() => {
    S.current = !0
  }, []), R = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, y = (0, l.useStateFromStores)([u.default], () => null != T ? T : u.default.get(o.id)), M = null !== (a = null == y ? void 0 : y.formFields) && void 0 !== a ? a : [];
  r.useEffect(() => {
    d.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let b = !E;
  return (0, n.jsx)(c.default, {
    renderHeader: b ? (0, n.jsx)(g, {
      guild: o,
      isExpanded: v,
      emptyFormFields: (null == M ? void 0 : M.length) == null || (null == M ? void 0 : M.length) === 0,
      hasTermsField: null == M ? void 0 : M.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: v,
    onExpand: () => A(!v),
    disableAnimation: E,
    disableBackground: !b,
    children: (0, n.jsx)("div", {
      className: i()(_.itemBodyContainer, {
        [_.noPadding]: !b,
        [x.rulesScreeningItemsNoBorder]: !b
      }),
      children: null != y && (0, n.jsx)(h.default, {
        guild: o,
        submittedGuildJoinRequestsCount: R,
        formFields: M,
        onFormFieldUpdate: L,
        hideVerificationLevelField: !0,
        isClanContext: E,
        onFieldsSave: null != p ? p : N,
        onDescriptionSave: null != C ? C : I,
        formDescription: null !== (s = null == y ? void 0 : y.description) && void 0 !== s ? s : ""
      })
    })
  })
}