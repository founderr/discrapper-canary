"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  i = n("120356"),
  s = n.n(i),
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
  g = n("453522");

function x(e) {
  let {
    guild: t,
    isExpanded: i,
    emptyFormFields: s,
    hasTermsField: l
  } = e, c = t.hasVerificationGate(), [u, f] = r.useState(c), m = e => {
    e.preventDefault(), e.stopPropagation()
  }, h = async e => {
    try {
      f(e), await d.default.enableVerificationForm(t.id, e)
    } catch {
      f(u)
    }
  }, x = e => {
    e && s ? (0, o.openModalLazy)(async () => {
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
      }), (i || s && !u) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: C.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !i && (0, a.jsx)("div", {
        className: g.pillRow,
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
      className: g.previewAndEnable,
      children: i || u || !s ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), I()
          },
          children: (0, a.jsx)(o.Tooltip, {
            tooltipContentClassName: g.__invalid_tooltip,
            text: C.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(p.default, {
              height: 24,
              width: 24,
              className: g.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(E.default, {
          checked: u,
          onChange: () => x(!u)
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
async function v(e, t) {
  await d.default.updateVerificationFormDescription(e, t)
}

function N(e) {
  var t, n, i;
  let {
    guild: o,
    isClanContext: p = !1,
    onFieldsSave: T,
    onDescriptionSave: E,
    verificationForm: C
  } = e, [N, S] = r.useState(p), A = r.useRef(!1), L = r.useCallback(() => {
    A.current = !0
  }, []), b = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, R = (0, l.useStateFromStores)([u.default], () => null != C ? C : u.default.get(o.id)), M = null !== (n = null == R ? void 0 : R.formFields) && void 0 !== n ? n : [];
  r.useEffect(() => {
    d.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let y = !p;
  return (0, a.jsx)(c.default, {
    renderHeader: y ? (0, a.jsx)(x, {
      guild: o,
      isExpanded: N,
      emptyFormFields: (null == M ? void 0 : M.length) == null || (null == M ? void 0 : M.length) === 0,
      hasTermsField: null == M ? void 0 : M.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: N,
    onExpand: () => S(!N),
    disableAnimation: p,
    disableBackground: !y,
    children: (0, a.jsx)("div", {
      className: s()(_.itemBodyContainer, {
        [_.noPadding]: !y,
        [g.rulesScreeningItemsNoBorder]: !y
      }),
      children: null != R && (0, a.jsx)(h.default, {
        guild: o,
        submittedGuildJoinRequestsCount: b,
        formFields: M,
        onFormFieldUpdate: L,
        hideVerificationLevelField: !0,
        isClanContext: p,
        onFieldsSave: null != T ? T : I,
        onDescriptionSave: null != E ? E : v,
        formDescription: null !== (i = null == R ? void 0 : R.description) && void 0 !== i ? i : ""
      })
    })
  })
}