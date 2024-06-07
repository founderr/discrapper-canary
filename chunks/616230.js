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
  E = n("794358"),
  p = n("931468"),
  C = n("449226"),
  T = n("689938"),
  _ = n("212723"),
  x = n("5288");

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
        header: T.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: T.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: T.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => h(e),
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: T.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
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
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (s || i && !u) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !s && (0, a.jsx)("div", {
        className: x.pillRow,
        children: l && (0, a.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: _.valuePill,
          children: [(0, a.jsx)(p.default, {
            width: 16,
            height: 16
          }), T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
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
            text: T.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(E.default, {
              height: 24,
              width: 24,
              className: x.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(C.default, {
          checked: u,
          onChange: () => g(!u)
        })]
      }) : (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: T.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
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
    isClanContext: E = !1,
    onFieldsSave: p,
    onDescriptionSave: C,
    verificationForm: T
  } = e, [v, A] = r.useState(E), S = r.useRef(!1), L = r.useCallback(() => {
    S.current = !0
  }, []), R = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, y = (0, l.useStateFromStores)([u.default], () => null != T ? T : u.default.get(o.id)), M = null !== (n = null == y ? void 0 : y.formFields) && void 0 !== n ? n : [];
  r.useEffect(() => {
    d.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let b = !E;
  return (0, a.jsx)(c.default, {
    renderHeader: b ? (0, a.jsx)(g, {
      guild: o,
      isExpanded: v,
      emptyFormFields: (null == M ? void 0 : M.length) == null || (null == M ? void 0 : M.length) === 0,
      hasTermsField: null == M ? void 0 : M.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: v,
    onExpand: () => A(!v),
    disableAnimation: E,
    disableBackground: !b,
    children: (0, a.jsx)("div", {
      className: i()(_.itemBodyContainer, {
        [_.noPadding]: !b,
        [x.rulesScreeningItemsNoBorder]: !b
      }),
      children: null != y && (0, a.jsx)(h.default, {
        guild: o,
        submittedGuildJoinRequestsCount: R,
        formFields: M,
        onFormFieldUpdate: L,
        hideVerificationLevelField: !0,
        isClanContext: E,
        onFieldsSave: null != p ? p : I,
        onDescriptionSave: null != C ? C : N,
        formDescription: null !== (s = null == y ? void 0 : y.description) && void 0 !== s ? s : ""
      })
    })
  })
}