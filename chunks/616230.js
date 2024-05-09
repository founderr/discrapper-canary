"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("442837"),
  _ = s("481060"),
  r = s("11265"),
  u = s("863249"),
  o = s("944163"),
  T = s("246364"),
  d = s("571728"),
  A = s("755340"),
  I = s("794358"),
  L = s("931468"),
  c = s("449226"),
  N = s("689938"),
  S = s("212723"),
  g = s("5288");

function D(e) {
  let {
    guild: t,
    isExpanded: i,
    emptyFormFields: E,
    hasTermsField: l
  } = e, r = t.hasVerificationGate(), [o, T] = n.useState(r), d = e => {
    e.preventDefault(), e.stopPropagation()
  }, A = async e => {
    try {
      T(e), await u.default.enableVerificationForm(t.id, e)
    } catch {
      T(o)
    }
  }, D = e => {
    e && E ? (0, _.openModalLazy)(async () => {
      let {
        ConfirmModal: t
      } = await Promise.resolve().then(s.bind(s, "481060"));
      return s => (0, a.jsx)(t, {
        ...s,
        header: N.default.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: N.default.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: N.default.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => A(e),
        children: (0, a.jsx)(_.Text, {
          variant: "text-md/normal",
          children: N.default.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : A(e)
  }, C = () => {
    (0, _.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("49237"), s.e("99387"), s.e("80026"), s.e("36869")]).then(s.bind(s, "645264"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t.id,
        isPreview: !0
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: S.itemWrapper,
    children: [(0, a.jsxs)("div", {
      className: S.itemContent,
      children: [(0, a.jsx)(_.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: N.default.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (i || E && !o) && (0, a.jsx)(_.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: N.default.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !i && (0, a.jsx)("div", {
        className: g.pillRow,
        children: l && (0, a.jsxs)(_.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: S.valuePill,
          children: [(0, a.jsx)(L.default, {
            width: 16,
            height: 16
          }), N.default.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, a.jsx)("div", {
      className: g.previewAndEnable,
      children: i || o || !E ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(_.Clickable, {
          onMouseDown: d,
          onMouseUp: d,
          onClick: e => {
            d(e), C()
          },
          children: (0, a.jsx)(_.Tooltip, {
            tooltipContentClassName: g.__invalid_tooltip,
            text: N.default.Messages.PREVIEW,
            children: e => (0, a.jsx)(I.default, {
              height: 24,
              width: 24,
              className: g.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(c.default, {
          checked: o,
          onChange: () => D(!o)
        })]
      }) : (0, a.jsx)(_.Button, {
        size: _.Button.Sizes.SMALL,
        children: N.default.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function C(e, t) {
  await u.default.updateVerificationForm(e, t)
}
async function f(e, t) {
  await u.default.updateVerificationFormDescription(e, t)
}

function O(e) {
  var t, s, i;
  let {
    guild: _,
    isClanContext: I = !1,
    onFieldsSave: L,
    onDescriptionSave: c,
    verificationForm: N
  } = e, [O, G] = n.useState(I), M = n.useRef(!1), U = n.useCallback(() => {
    M.current = !0
  }, []), R = null !== (t = (0, d.useSubmittedGuildJoinRequestTotal)({
    guildId: _.id
  })) && void 0 !== t ? t : 0, h = (0, l.useStateFromStores)([o.default], () => null != N ? N : o.default.get(_.id)), m = null !== (s = null == h ? void 0 : h.formFields) && void 0 !== s ? s : [];
  n.useEffect(() => {
    u.default.fetchVerificationForm(_.id)
  }, [_.id]);
  let p = !I;
  return (0, a.jsx)(r.default, {
    renderHeader: p ? (0, a.jsx)(D, {
      guild: _,
      isExpanded: O,
      emptyFormFields: (null == m ? void 0 : m.length) == null || (null == m ? void 0 : m.length) === 0,
      hasTermsField: null == m ? void 0 : m.some(e => e.field_type === T.VerificationFormFieldTypes.TERMS)
    }) : null,
    isExpanded: O,
    onExpand: () => G(!O),
    disableAnimation: I,
    disableBackground: !p,
    children: (0, a.jsx)("div", {
      className: E()(S.itemBodyContainer, {
        [S.noPadding]: !p,
        [g.rulesScreeningItemsNoBorder]: !p
      }),
      children: null != h && (0, a.jsx)(A.default, {
        guild: _,
        submittedGuildJoinRequestsCount: R,
        formFields: m,
        onFormFieldUpdate: U,
        hideVerificationLevelField: !0,
        isClanContext: I,
        onFieldsSave: null != L ? L : C,
        onDescriptionSave: null != c ? c : f,
        formDescription: null !== (i = null == h ? void 0 : h.description) && void 0 !== i ? i : ""
      })
    })
  })
}