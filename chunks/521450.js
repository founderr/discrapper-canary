var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(613828),
  o = s(435935),
  c = s(442837),
  E = s(481060),
  _ = s(37234),
  u = s(960412),
  d = s(151662),
  T = s(695346),
  I = s(981631),
  R = s(930441),
  A = s(689938),
  N = s(450470),
  C = s(331651);
t.Z = () => {
  let e = T.Ex.useSetting(),
    {
      categories: t,
      initialized: s
    } = (0, c.cj)([d.Z], () => d.Z.getEmailSettings());
  return a.useEffect(() => {
    null == s && (0, u.Y7)()
  }, [s]), (0, n.jsxs)("div", {
    className: N.container,
    children: [(0, n.jsx)(E.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: A.Z.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
    }), (0, n.jsx)(E.FormSwitch, {
      className: r()(C.marginTop8, C.marginBottom20),
      value: e,
      note: A.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: T.Ex.updateSetting,
      children: A.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
    }), e ? (0, n.jsx)(E.Card, {
      className: N.enableCard,
      type: E.Card.Types.CUSTOM,
      outline: !0,
      children: (0, n.jsxs)(o.k, {
        justify: o.k.Justify.END,
        children: [(0, n.jsx)(o.k.Child, {
          children: (0, n.jsx)(E.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: A.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
          })
        }), (0, n.jsx)(E.Clickable, {
          children: (0, n.jsx)(l.rU, {
            onClick: _.xf,
            to: {
              pathname: I.Z5c.FAMILY_CENTER,
              state: {
                scrollRestoration: !1
              }
            },
            children: A.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
          })
        }), (0, n.jsx)(E.IconBadge, {
          icon: E.ArrowSmallRightIcon,
          className: N.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, n.jsx)(E.FormSwitch, {
      className: r()(C.marginTop20, C.marginBottom20),
      value: !!t[R.$Z.FAMILY_CENTER_DIGEST],
      note: A.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: function(e) {
        (0, u.pR)(R.$Z.FAMILY_CENTER_DIGEST, e)
      },
      children: A.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
    })]
  })
}