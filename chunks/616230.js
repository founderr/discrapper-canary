"use strict";
a.r(t), a.d(t, {
  default: function() {
    return A
  }
}), a("47120");
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("442837"),
  o = a("481060"),
  d = a("11265"),
  c = a("863249"),
  u = a("944163"),
  f = a("246364"),
  m = a("571728"),
  E = a("755340"),
  h = a("794358"),
  T = a("931468"),
  _ = a("449226"),
  C = a("689938"),
  x = a("212723"),
  p = a("5288");

function I(e) {
  let {
    guild: t,
    isExpanded: i,
    emptyFormFields: s,
    hasTermsField: l
  } = e, d = t.hasVerificationGate(), [u, f] = r.useState(d), m = e => {
    e.preventDefault(), e.stopPropagation()
  }, E = async e => {
    try {
      f(e), await c.default.enableVerificationForm(t.id, e)
    } catch {
      f(u)
    }
  }, I = e => {
    e && s ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(a.bind(a, "481060"));
      return a => (0, n.jsx)(t, {
        ...a,
        header: C.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: C.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: C.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => E(e),
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : E(e)
  }, g = () => {
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
    className: x.itemWrapper,
    children: [(0, n.jsxs)("div", {
      className: x.itemContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (i || s && !u) && (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !i && (0, n.jsx)("div", {
        className: p.pillRow,
        children: l && (0, n.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: x.valuePill,
          children: [(0, n.jsx)(T.default, {
            width: 16,
            height: 16
          }), C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, n.jsx)("div", {
      className: p.previewAndEnable,
      children: i || u || !s ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), g()
          },
          children: (0, n.jsx)(o.Tooltip, {
            tooltipContentClassName: p.__invalid_tooltip,
            text: C.default.Messages.PREVIEW,
            children: e => (0, n.jsx)(h.default, {
              height: 24,
              width: 24,
              className: p.previewIcon,
              ...e
            })
          })
        }), (0, n.jsx)(_.default, {
          checked: u,
          onChange: () => I(!u)
        })]
      }) : (0, n.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: C.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function g(e, t) {
  await c.default.updateVerificationForm(e, t)
}
async function N(e, t) {
  await c.default.updateVerificationFormDescription(e, t)
}

function A(e) {
  var t, a, i;
  let {
    guild: o,
    isClanContext: h = !1,
    onFieldsSave: T,
    onDescriptionSave: _,
    verificationForm: C
  } = e, [A, v] = r.useState(h), S = r.useRef(!1), R = r.useCallback(() => {
    S.current = !0
  }, []), L = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, y = (0, l.useStateFromStores)([u.default], () => null != C ? C : u.default.get(o.id)), M = null !== (a = null == y ? void 0 : y.formFields) && void 0 !== a ? a : [];
  r.useEffect(() => {
    c.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let j = !h;
  return (0, n.jsx)(d.default, {
    renderHeader: j ? (0, n.jsx)(I, {
      guild: o,
      isExpanded: A,
      emptyFormFields: (null == M ? void 0 : M.length) == null || (null == M ? void 0 : M.length) === 0,
      hasTermsField: null == M ? void 0 : M.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: A,
    onExpand: () => v(!A),
    disableAnimation: h,
    disableBackground: !j,
    children: (0, n.jsx)("div", {
      className: s()(x.itemBodyContainer, {
        [x.noPadding]: !j,
        [p.rulesScreeningItemsNoBorder]: !j
      }),
      children: null != y && (0, n.jsx)(E.default, {
        guild: o,
        submittedGuildJoinRequestsCount: L,
        formFields: M,
        onFormFieldUpdate: R,
        hideVerificationLevelField: !0,
        isClanContext: h,
        onFieldsSave: null != T ? T : g,
        onDescriptionSave: null != _ ? _ : N,
        formDescription: null !== (i = null == y ? void 0 : y.description) && void 0 !== i ? i : ""
      })
    })
  })
}