"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  a = n("803997"),
  s = n.n(a),
  l = n("442837"),
  o = n("481060"),
  u = n("11265"),
  c = n("863249"),
  d = n("944163"),
  f = n("246364"),
  p = n("571728"),
  m = n("755340"),
  E = n("794358"),
  I = n("931468"),
  _ = n("449226"),
  T = n("689938"),
  h = n("893079"),
  g = n("120623");

function C(e) {
  let {
    guild: t,
    isExpanded: a,
    emptyFormFields: s,
    hasTermsField: l
  } = e, u = t.hasVerificationGate(), [d, f] = r.useState(u), p = e => {
    e.preventDefault(), e.stopPropagation()
  }, m = async e => {
    try {
      f(e), await c.default.enableVerificationForm(t.id, e)
    } catch {
      f(d)
    }
  }, C = e => {
    e && s ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(n.bind(n, "481060"));
      return n => (0, i.jsx)(t, {
        ...n,
        header: T.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: T.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: T.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => m(e),
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: T.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : m(e)
  }, v = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("99387"), n.e("80026"), n.e("15986")]).then(n.bind(n, "645264"));
      return n => (0, i.jsx)(e, {
        ...n,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, i.jsxs)("div", {
    className: h.itemWrapper,
    children: [(0, i.jsxs)("div", {
      className: h.itemContent,
      children: [(0, i.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (a || s && !d) && (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !a && (0, i.jsx)("div", {
        className: g.pillRow,
        children: l && (0, i.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: h.valuePill,
          children: [(0, i.jsx)(I.default, {
            width: 16,
            height: 16
          }), T.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, i.jsx)("div", {
      className: g.previewAndEnable,
      children: a || d || !s ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(o.Clickable, {
          onMouseDown: p,
          onMouseUp: p,
          onClick: e => {
            p(e), v()
          },
          children: (0, i.jsx)(o.Tooltip, {
            tooltipContentClassName: g.__invalid_tooltip,
            text: T.default.Messages.PREVIEW,
            children: e => (0, i.jsx)(E.default, {
              height: 24,
              width: 24,
              className: g.previewIcon,
              ...e
            })
          })
        }), (0, i.jsx)(_.default, {
          checked: d,
          onChange: () => C(!d)
        })]
      }) : (0, i.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: T.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function v(e, t) {
  await c.default.updateVerificationForm(e, t)
}
async function x(e, t) {
  await c.default.updateVerificationFormDescription(e, t)
}

function N(e) {
  var t, n, a;
  let {
    guild: o,
    isClanContext: E = !1,
    onFieldsSave: I,
    onDescriptionSave: _,
    verificationForm: T
  } = e, [N, R] = r.useState(E), A = r.useRef(!1), S = r.useCallback(() => {
    A.current = !0
  }, []), M = null !== (t = (0, p.useSubmittedGuildJoinRequestTotal)({
    guildId: o.id
  })) && void 0 !== t ? t : 0, O = (0, l.useStateFromStores)([d.default], () => null != T ? T : d.default.get(o.id)), b = null !== (n = null == O ? void 0 : O.formFields) && void 0 !== n ? n : [];
  r.useEffect(() => {
    c.default.fetchVerificationForm(o.id)
  }, [o.id]);
  let F = !E;
  return (0, i.jsx)(u.default, {
    renderHeader: F ? (0, i.jsx)(C, {
      guild: o,
      isExpanded: N,
      emptyFormFields: (null == b ? void 0 : b.length) == null || (null == b ? void 0 : b.length) === 0,
      hasTermsField: null == b ? void 0 : b.some(e => e.field_type === f.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: N,
    onExpand: () => R(!N),
    disableAnimation: E,
    disableBackground: !F,
    children: (0, i.jsx)("div", {
      className: s()(h.itemBodyContainer, g.rulesScreeningItems, {
        [h.noPadding]: !F,
        [g.rulesScreeningItemsNoBorder]: !F
      }),
      children: null != O && (0, i.jsx)(m.default, {
        guild: o,
        submittedGuildJoinRequestsCount: M,
        formFields: b,
        onFormFieldUpdate: S,
        hideVerificationLevelField: !0,
        isClanContext: E,
        onFieldsSave: null != I ? I : v,
        onDescriptionSave: null != _ ? _ : x,
        formDescription: null !== (a = null == O ? void 0 : O.description) && void 0 !== a ? a : ""
      })
    })
  })
}