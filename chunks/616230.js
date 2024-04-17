"use strict";
i.r(t), i.d(t, {
  default: function() {
    return R
  }
}), i("47120");
var n = i("735250"),
  r = i("470079"),
  s = i("120356"),
  a = i.n(s),
  l = i("442837"),
  o = i("481060"),
  c = i("11265"),
  u = i("863249"),
  d = i("944163"),
  f = i("246364"),
  p = i("571728"),
  C = i("755340"),
  m = i("794358"),
  h = i("931468"),
  _ = i("449226"),
  E = i("689938"),
  I = i("893079"),
  T = i("120623");

function x(e) {
  let {
    guild: t,
    isExpanded: s,
    emptyFormFields: a,
    hasTermsField: l
  } = e, c = t.hasVerificationGate(), [d, f] = r.useState(c), p = e => {
    e.preventDefault(), e.stopPropagation()
  }, C = async e => {
    try {
      f(e), await u.default.enableVerificationForm(t.id, e)
    } catch {
      f(d)
    }
  }, x = e => {
    e && a ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(i.bind(i, "481060"));
      return i => (0, n.jsx)(t, {
        ...i,
        header: E.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: E.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: E.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => C(e),
        children: (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          children: E.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : C(e)
  }, g = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([i.e("49237"), i.e("99387"), i.e("80026"), i.e("36869")]).then(i.bind(i, "645264"));
      return i => (0, n.jsx)(e, {
        ...i,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, n.jsxs)("div", {
    className: I.itemWrapper,
    children: [(0, n.jsxs)("div", {
      className: I.itemContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: E.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (s || a && !d) && (0, n.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: E.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !s && (0, n.jsx)("div", {
        className: T.pillRow,
        children: l && (0, n.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: I.valuePill,
          children: [(0, n.jsx)(h.default, {
            width: 16,
            height: 16
          }), E.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, n.jsx)("div", {
      className: T.previewAndEnable,
      children: s || d || !a ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Clickable, {
          onMouseDown: p,
          onMouseUp: p,
          onClick: e => {
            p(e), g()
          },
          children: (0, n.jsx)(o.Tooltip, {
            tooltipContentClassName: T.__invalid_tooltip,
            text: E.default.Messages.PREVIEW,
            children: e => (0, n.jsx)(m.default, {
              height: 24,
              width: 24,
              className: T.previewIcon,
              ...e
            })
          })
        }), (0, n.jsx)(_.default, {
          checked: d,
          onChange: () => x(!d)
        })]
      }) : (0, n.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: E.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function g(e, t) {
  await u.default.updateVerificationForm(e, t)
}
async function v(e, t) {
  await u.default.updateVerificationFormDescription(e, t)
}

function R(e) {
  var t, i, s;
  let {
    guild: o,
    isClanContext: m = !1,
    onFieldsSave: h,
    onDescriptionSave: _,
    verificationForm: E
  } = e, [R, A] = r.useState(m), N = r.useRef(!1), S = r.useCallback(() => {
    N.current = !0
  }, []), M = null !== (t = (0, p.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, L = (0, l.useStateFromStores)([d.default], () => null != E ? E : d.default.get(o.id)), j = null !== (i = null == L ? void 0 : L.formFields) && void 0 !== i ? i : [];
  r.useEffect(() => {
    u.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let b = !m;
  return (0, n.jsx)(c.default, {
    renderHeader: b ? (0, n.jsx)(x, {
      guild: o,
      isExpanded: R,
      emptyFormFields: (null == j ? void 0 : j.length) == null || (null == j ? void 0 : j.length) === 0,
      hasTermsField: null == j ? void 0 : j.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: R,
    onExpand: () => A(!R),
    disableAnimation: m,
    disableBackground: !b,
    children: (0, n.jsx)("div", {
      className: a()(I.itemBodyContainer, {
        [I.noPadding]: !b,
        [T.rulesScreeningItemsNoBorder]: !b
      }),
      children: null != L && (0, n.jsx)(C.default, {
        guild: o,
        submittedGuildJoinRequestsCount: M,
        formFields: j,
        onFormFieldUpdate: S,
        hideVerificationLevelField: !0,
        isClanContext: m,
        onFieldsSave: null != h ? h : g,
        onDescriptionSave: null != _ ? _ : v,
        formDescription: null !== (s = null == L ? void 0 : L.description) && void 0 !== s ? s : ""
      })
    })
  })
}