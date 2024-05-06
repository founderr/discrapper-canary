"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("442837"),
  o = n("481060"),
  c = n("11265"),
  d = n("863249"),
  u = n("944163"),
  f = n("246364"),
  m = n("571728"),
  h = n("755340"),
  p = n("794358"),
  T = n("931468"),
  E = n("449226"),
  C = n("689938"),
  _ = n("875058"),
  x = n("453522");

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
      } = await Promise.resolve().then(n.bind(n, "481060"));
      return n => (0, a.jsx)(t, {
        ...n,
        header: C.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: C.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: C.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => h(e),
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : h(e)
  }, I = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("80026"), n.e("36869")]).then(n.bind(n, "645264"));
      return n => (0, a.jsx)(e, {
        ...n,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: _.itemWrapper,
    children: [(0, a.jsxs)("div", {
      className: _.itemContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (s || i && !u) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !s && (0, a.jsx)("div", {
        className: x.pillRow,
        children: l && (0, a.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: _.valuePill,
          children: [(0, a.jsx)(T.default, {
            width: 16,
            height: 16
          }), C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, a.jsx)("div", {
      className: x.previewAndEnable,
      children: s || u || !i ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), I()
          },
          children: (0, a.jsx)(o.Tooltip, {
            tooltipContentClassName: x.__invalid_tooltip,
            text: C.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(p.default, {
              height: 24,
              width: 24,
              className: x.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(E.default, {
          checked: u,
          onChange: () => g(!u)
        })]
      }) : (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: C.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function I(e, t) {
  await d.default.updateVerificationForm(e, t)
}
async function N(e, t) {
  await d.default.updateVerificationFormDescription(e, t)
}

function v(e) {
  var t, n, s;
  let {
    guild: o,
    isClanContext: p = !1,
    onFieldsSave: T,
    onDescriptionSave: E,
    verificationForm: C
  } = e, [v, A] = r.useState(p), S = r.useRef(!1), L = r.useCallback(() => {
    S.current = !0
  }, []), R = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, b = (0, l.useStateFromStores)([u.default], () => null != C ? C : u.default.get(o.id)), y = null !== (n = null == b ? void 0 : b.formFields) && void 0 !== n ? n : [];
  r.useEffect(() => {
    d.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let j = !p;
  return (0, a.jsx)(c.default, {
    renderHeader: j ? (0, a.jsx)(g, {
      guild: o,
      isExpanded: v,
      emptyFormFields: (null == y ? void 0 : y.length) == null || (null == y ? void 0 : y.length) === 0,
      hasTermsField: null == y ? void 0 : y.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: v,
    onExpand: () => A(!v),
    disableAnimation: p,
    disableBackground: !j,
    children: (0, a.jsx)("div", {
      className: i()(_.itemBodyContainer, {
        [_.noPadding]: !j,
        [x.rulesScreeningItemsNoBorder]: !j
      }),
      children: null != b && (0, a.jsx)(h.default, {
        guild: o,
        submittedGuildJoinRequestsCount: R,
        formFields: y,
        onFormFieldUpdate: L,
        hideVerificationLevelField: !0,
        isClanContext: p,
        onFieldsSave: null != T ? T : I,
        onDescriptionSave: null != E ? E : N,
        formDescription: null !== (s = null == b ? void 0 : b.description) && void 0 !== s ? s : ""
      })
    })
  })
}