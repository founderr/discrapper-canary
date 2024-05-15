"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  l = a.n(i),
  s = a("442837"),
  o = a("481060"),
  c = a("11265"),
  d = a("863249"),
  u = a("944163"),
  f = a("246364"),
  m = a("571728"),
  h = a("755340"),
  E = a("794358"),
  T = a("931468"),
  p = a("449226"),
  C = a("689938"),
  _ = a("212723"),
  x = a("5288");

function g(e) {
  let {
    guild: t,
    isExpanded: i,
    emptyFormFields: l,
    hasTermsField: s
  } = e, c = t.hasVerificationGate(), [u, f] = r.useState(c), m = e => {
    e.preventDefault(), e.stopPropagation()
  }, h = async e => {
    try {
      f(e), await d.default.enableVerificationForm(t.id, e)
    } catch {
      f(u)
    }
  }, g = e => {
    e && l ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(a.bind(a, "481060"));
      return a => (0, n.jsx)(t, {
        ...a,
        header: C.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: C.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: C.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => h(e),
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : h(e)
  }, I = () => {
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
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (i || l && !u) && (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !i && (0, n.jsx)("div", {
        className: x.pillRow,
        children: s && (0, n.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: _.valuePill,
          children: [(0, n.jsx)(T.default, {
            width: 16,
            height: 16
          }), C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, n.jsx)("div", {
      className: x.previewAndEnable,
      children: i || u || !l ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), I()
          },
          children: (0, n.jsx)(o.Tooltip, {
            tooltipContentClassName: x.__invalid_tooltip,
            text: C.default.Messages.PREVIEW,
            children: e => (0, n.jsx)(E.default, {
              height: 24,
              width: 24,
              className: x.previewIcon,
              ...e
            })
          })
        }), (0, n.jsx)(p.default, {
          checked: u,
          onChange: () => g(!u)
        })]
      }) : (0, n.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: C.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function I(e, t) {
  await d.default.updateVerificationForm(e, t)
}
async function v(e, t) {
  await d.default.updateVerificationFormDescription(e, t)
}

function N(e) {
  var t, a, i;
  let {
    guild: o,
    isClanContext: E = !1,
    onFieldsSave: T,
    onDescriptionSave: p,
    verificationForm: C
  } = e, [N, S] = r.useState(E), A = r.useRef(!1), R = r.useCallback(() => {
    A.current = !0
  }, []), M = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, L = (0, s.useStateFromStores)([u.default], () => null != C ? C : u.default.get(o.id)), y = null !== (a = null == L ? void 0 : L.formFields) && void 0 !== a ? a : [];
  r.useEffect(() => {
    d.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let b = !E;
  return (0, n.jsx)(c.default, {
    renderHeader: b ? (0, n.jsx)(g, {
      guild: o,
      isExpanded: N,
      emptyFormFields: (null == y ? void 0 : y.length) == null || (null == y ? void 0 : y.length) === 0,
      hasTermsField: null == y ? void 0 : y.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: N,
    onExpand: () => S(!N),
    disableAnimation: E,
    disableBackground: !b,
    children: (0, n.jsx)("div", {
      className: l()(_.itemBodyContainer, {
        [_.noPadding]: !b,
        [x.rulesScreeningItemsNoBorder]: !b
      }),
      children: null != L && (0, n.jsx)(h.default, {
        guild: o,
        submittedGuildJoinRequestsCount: M,
        formFields: y,
        onFormFieldUpdate: R,
        hideVerificationLevelField: !0,
        isClanContext: E,
        onFieldsSave: null != T ? T : I,
        onDescriptionSave: null != p ? p : v,
        formDescription: null !== (i = null == L ? void 0 : L.description) && void 0 !== i ? i : ""
      })
    })
  })
}