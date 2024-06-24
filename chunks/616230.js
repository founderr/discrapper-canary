t.d(n, {
  Z: function() {
    return p
  }
}), t(47120);
var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  l = t(442837),
  o = t(481060),
  c = t(11265),
  d = t(863249),
  u = t(944163),
  m = t(246364),
  h = t(571728),
  C = t(755340),
  x = t(449226),
  f = t(689938),
  E = t(609191),
  T = t(294251);

function _(e) {
  let {
    guild: n,
    isExpanded: s,
    emptyFormFields: i,
    hasTermsField: l
  } = e, c = n.hasVerificationGate(), [u, m] = r.useState(c), h = e => {
    e.preventDefault(), e.stopPropagation()
  }, C = async e => {
    try {
      m(e), await d.Z.enableVerificationForm(n.id, e)
    } catch {
      m(u)
    }
  }, _ = e => {
    e && i ? (0, o.openModalLazy)(async () => {
      let {
        ConfirmModal: n
      } = await Promise.resolve().then(t.bind(t, 481060));
      return t => (0, a.jsx)(n, {
        ...t,
        header: f.Z.Messages.MEMBER_VERIFICATION_WARNING_TITLE,
        cancelText: f.Z.Messages.MEMBER_VERIFICATION_WARNING_CANCEL,
        confirmText: f.Z.Messages.MEMBER_VERIFICATION_WARNING_CONFIRM,
        onConfirm: () => C(e),
        children: (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          children: f.Z.Messages.MEMBER_VERIFICATION_AUTOMATIC_WARNING
        })
      })
    }) : C(e)
  }, I = () => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("80026"), t.e("36869")]).then(t.bind(t, 645264));
      return t => (0, a.jsx)(e, {
        ...t,
        guildId: n.id,
        isPreview: !0
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: E.itemWrapper,
    children: [(0, a.jsxs)("div", {
      className: E.itemContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: f.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_SCREENING
      }), (s || i && !u) && (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: f.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_EDIT_SUBTITLE
      }), !s && (0, a.jsx)("div", {
        className: T.pillRow,
        children: l && (0, a.jsxs)(o.Text, {
          color: "interactive-normal",
          variant: "text-xs/medium",
          className: E.valuePill,
          children: [(0, a.jsx)(o.BookCheckIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16
          }), f.Z.Messages.GUILD_SETTINGS_SAFETY_RULES_FORM_PILL]
        })
      })]
    }), (0, a.jsx)("div", {
      className: T.previewAndEnable,
      children: s || u || !i ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(o.Clickable, {
          onMouseDown: h,
          onMouseUp: h,
          onClick: e => {
            h(e), I()
          },
          children: (0, a.jsx)(o.Tooltip, {
            tooltipContentClassName: T.__invalid_tooltip,
            text: f.Z.Messages.PREVIEW,
            children: e => (0, a.jsx)(o.EyeIcon, {
              size: "md",
              color: "currentColor",
              className: T.previewIcon,
              ...e
            })
          })
        }), (0, a.jsx)(x.Z, {
          checked: u,
          onChange: () => _(!u)
        })]
      }) : (0, a.jsx)(o.Button, {
        size: o.Button.Sizes.SMALL,
        children: f.Z.Messages.GUILD_AUTOMOD_RULE_SETUP_BUTTON
      })
    })]
  })
}
async function I(e, n) {
  await d.Z.updateVerificationForm(e, n)
}
async function g(e, n) {
  await d.Z.updateVerificationFormDescription(e, n)
}

function p(e) {
  var n, t, s;
  let {
    guild: o,
    isClanContext: x = !1,
    onFieldsSave: f,
    onDescriptionSave: p,
    verificationForm: N
  } = e, [v, y] = r.useState(x), S = r.useRef(!1), A = r.useCallback(() => {
    S.current = !0
  }, []), M = null !== (n = (0, h.A)({
    guildId: o.id
  })) && void 0 !== n ? n : 0, b = (0, l.e7)([u.Z], () => null != N ? N : u.Z.get(o.id)), j = null !== (t = null == b ? void 0 : b.formFields) && void 0 !== t ? t : [];
  r.useEffect(() => {
    d.Z.fetchVerificationForm(o.id)
  }, [o.id]);
  let R = null != b,
    L = !x;
  return (0, a.jsx)(c.Z, {
    renderHeader: L ? (0, a.jsx)(_, {
      guild: o,
      isExpanded: v,
      emptyFormFields: (null == j ? void 0 : j.length) == null || (null == j ? void 0 : j.length) === 0,
      hasTermsField: null == j ? void 0 : j.some(e => e.field_type === m.QJ.TERMS)
    }) : null,
    isExpanded: v,
    onExpand: () => y(!v),
    disableAnimation: x,
    disableBackground: !L,
    children: (0, a.jsx)("div", {
      className: i()(E.itemBodyContainer, {
        [E.noPadding]: !L,
        [T.rulesScreeningItemsNoBorder]: !L
      }),
      children: R && (0, a.jsx)(C.Z, {
        guild: o,
        submittedGuildJoinRequestsCount: M,
        formFields: j,
        onFormFieldUpdate: A,
        hideVerificationLevelField: !0,
        isClanContext: x,
        onFieldsSave: null != f ? f : I,
        onDescriptionSave: null != p ? p : g,
        formDescription: null !== (s = null == b ? void 0 : b.description) && void 0 !== s ? s : ""
      })
    })
  })
}