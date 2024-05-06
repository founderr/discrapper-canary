"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
}), a("47120");
var n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  s = a.n(r),
  l = a("442837"),
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
  _ = a("689938"),
  C = a("875058"),
  g = a("453522");

function x(e) {
  let {
    guild: t,
    isExpanded: r,
    emptyFormFields: s,
    hasTermsField: l
  } = e, c = t.hasVerificationGate(), [u, f] = i.useState(c), m = e => {
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
      } = await Promise.resolve().then(a.bind(a, "481060"));
      return a => (0, n.jsx)(t, {
        ...a,
        header: _.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: _.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: _.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => h(e),
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: _.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
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
    className: C.itemWrapper,
    children: [(0, n.jsxs)("div", {
      className: C.itemContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (r || s && !u) && (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: _.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !r && (0, n.jsx)("div", {
        className: g.pillRow,
        children: l && (0, n.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: C.valuePill,
          children: [(0, n.jsx)(T.default, {
            width: 16,
            height: 16
          }), _.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, n.jsx)("div", {
      className: g.previewAndEnable,
      children: r || u || !s ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Clickable, {
          onMouseDown: m,
          onMouseUp: m,
          onClick: e => {
            m(e), I()
          },
          children: (0, n.jsx)(o.Tooltip, {
            tooltipContentClassName: g.__invalid_tooltip,
            text: _.default.Messages.PREVIEW,
            children: e => (0, n.jsx)(E.default, {
              height: 24,
              width: 24,
              className: g.previewIcon,
              ...e
            })
          })
        }), (0, n.jsx)(p.default, {
          checked: u,
          onChange: () => x(!u)
        })]
      }) : (0, n.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: _.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
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
  var t, a, r;
  let {
    guild: o,
    isClanContext: E = !1,
    onFieldsSave: T,
    onDescriptionSave: p,
    verificationForm: _
  } = e, [N, A] = i.useState(E), S = i.useRef(!1), R = i.useCallback(() => {
    S.current = !0
  }, []), L = null !== (t = (0, m.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, M = (0, l.useStateFromStores)([u.default], () => null != _ ? _ : u.default.get(o.id)), b = null !== (a = null == M ? void 0 : M.formFields) && void 0 !== a ? a : [];
  i.useEffect(() => {
    d.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let j = !E;
  return (0, n.jsx)(c.default, {
    renderHeader: j ? (0, n.jsx)(x, {
      guild: o,
      isExpanded: N,
      emptyFormFields: (null == b ? void 0 : b.length) == null || (null == b ? void 0 : b.length) === 0,
      hasTermsField: null == b ? void 0 : b.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: N,
    onExpand: () => A(!N),
    disableAnimation: E,
    disableBackground: !j,
    children: (0, n.jsx)("div", {
      className: s()(C.itemBodyContainer, {
        [C.noPadding]: !j,
        [g.rulesScreeningItemsNoBorder]: !j
      }),
      children: null != M && (0, n.jsx)(h.default, {
        guild: o,
        submittedGuildJoinRequestsCount: L,
        formFields: b,
        onFormFieldUpdate: R,
        hideVerificationLevelField: !0,
        isClanContext: E,
        onFieldsSave: null != T ? T : I,
        onDescriptionSave: null != p ? p : v,
        formDescription: null !== (r = null == M ? void 0 : M.description) && void 0 !== r ? r : ""
      })
    })
  })
}