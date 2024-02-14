"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("77078"),
  d = s("567062"),
  u = s("50926"),
  c = s("526253"),
  E = s("567054"),
  _ = s("859130"),
  I = s("613786"),
  T = s("462579"),
  f = s("641892"),
  S = s("690343"),
  m = s("782340"),
  N = s("854743"),
  g = s("108288");

function h(e) {
  let {
    guild: t,
    isExpanded: n,
    emptyFormFields: i,
    hasTermsField: r
  } = e, d = t.hasVerificationGate(), [c, E] = l.useState(d), _ = e => {
    e.preventDefault(), e.stopPropagation()
  }, I = async e => {
    try {
      E(e), await u.default.enableVerificationForm(t.id, e)
    } catch {
      E(c)
    }
  }, h = e => {
    e && i ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await s.el("77078").then(s.bind(s, "77078"));
      return s => (0, a.jsx)(t, {
        ...s,
        header: m.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: m.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: m.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => I(e),
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: m.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : I(e)
  }, C = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await s.el("93184").then(s.bind(s, "93184"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: N.itemWrapper,
    children: [(0, a.jsxs)("div", {
      className: N.itemContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: m.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (n || i && !c) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: m.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !n && (0, a.jsx)("div", {
        className: g.pillRow,
        children: r && (0, a.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: N.valuePill,
          children: [(0, a.jsx)(f.default, {
            width: 16,
            height: 16
          }), m.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, a.jsx)("div", {
      className: g.previewAndEnable,
      children: n || c || !i ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Clickable, {
          onMouseDown: _,
          onMouseUp: _,
          onClick: e => {
            _(e), C()
          },
          children: (0, a.jsx)(o.Tooltip, {
            tooltipContentClassName: g.tooltip,
            text: m.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(T.default, {
              height: 24,
              width: 24,
              className: g.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(S.default, {
          checked: c,
          onChange: () => h(!c)
        })]
      }) : (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: m.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}

function C(e) {
  var t;
  let {
    guild: s
  } = e, [n, o] = l.useState(!1), [T, f] = l.useState(!1), S = l.useRef(!1), m = l.useCallback(() => {
    S.current = !0
  }, []), C = (0, _.useSubmittedGuildJoinRequestTotal)({
    guildId: s.id
  }), R = (0, r.useStateFromStores)([c.default], () => c.default.get(s.id)), x = null !== (t = null == R ? void 0 : R.formFields) && void 0 !== t ? t : [];
  return l.useEffect(() => {
    u.default.fetchVerificationForm(s.id).then(() => {
      f(!0)
    })
  }, [s.id]), (0, a.jsx)(d.default, {
    renderHeader: (0, a.jsx)(h, {
      guild: s,
      isExpanded: n,
      emptyFormFields: (null == x ? void 0 : x.length) == null || (null == x ? void 0 : x.length) === 0,
      hasTermsField: null == x ? void 0 : x.some(e => e.field_type === E.VerificationFormFieldTypes.TERMS)
    }),
    isExpanded: n,
    onExpand: () => o(!n),
    children: (0, a.jsx)("div", {
      className: i(N.itemBodyContainer, g.rulesScreeningItems),
      children: T && (0, a.jsx)(I.default, {
        guild: s,
        submittedGuildJoinRequestsCount: C,
        formFields: x,
        onFormFieldUpdate: m,
        hideVerificationLevelField: !0
      })
    })
  })
}