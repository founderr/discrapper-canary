var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  l = t(481060),
  o = t(838221),
  c = t(246364),
  d = t(700833),
  u = t(689938),
  m = t(237261);

function h(e) {
  let {
    onClick: n,
    text: t,
    icon: r
  } = e;
  return (0, a.jsx)("div", {
    className: m.addFormFieldContainer,
    children: (0, a.jsxs)(l.Clickable, {
      className: m.addFormField,
      onClick: n,
      children: [(0, a.jsx)(r, {
        className: m.icon,
        size: "xs",
        color: "currentColor"
      }), (0, a.jsx)(l.FormText, {
        className: m.addFormFieldText,
        children: t
      })]
    })
  })
}
n.Z = function(e) {
  let {
    addFormField: n,
    showManualApprovalWarning: s,
    guild: C,
    showHeader: x
  } = e, f = r.useCallback(e => {
    (0, d.Md)(e, n, C)
  }, [n, C]), E = r.useCallback(e => {
    s ? (0, l.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("54845")]).then(t.bind(t, 199836));
      return t => (0, a.jsx)(n, {
        ...t,
        onSubmit: () => f(e)
      })
    }) : f(e)
  }, [s, f]);
  return (0, a.jsxs)("div", {
    className: i()(m.spacingContainer, m.backgroundContainer),
    children: [x && (0, a.jsx)("div", {
      className: m.containerTopHat,
      children: (0, a.jsx)(l.Text, {
        className: m.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, a.jsxs)("div", {
      className: m.leftRailIconContainer,
      children: [(0, a.jsx)("div", {
        className: m.iconContainer,
        children: (0, a.jsx)(l.PlusSmallIcon, {
          size: "custom",
          color: "currentColor",
          width: 18,
          height: 20,
          className: m.icon
        })
      }), (0, a.jsxs)(l.FormSection, {
        children: [(0, a.jsx)(l.FormTitle, {
          tag: "h3",
          className: m.leftRailIconContainerTitle,
          children: u.Z.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, a.jsx)(l.FormText, {
          className: m.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: u.Z.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, a.jsx)(h, {
          formFieldType: c.QJ.TEXT_INPUT,
          addFormField: n,
          icon: (0, l.makeIconCompat)(o.Z),
          text: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => E(c.QJ.TEXT_INPUT)
        }), (0, a.jsx)(h, {
          formFieldType: c.QJ.PARAGRAPH,
          addFormField: n,
          icon: l.ChannelListIcon,
          text: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => E(c.QJ.PARAGRAPH)
        }), (0, a.jsx)(h, {
          formFieldType: c.QJ.MULTIPLE_CHOICE,
          addFormField: n,
          icon: l.ListBulletsIcon,
          text: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => E(c.QJ.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}