var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(613828),
  c = n(435935),
  o = n(442837),
  d = n(481060),
  u = n(37234),
  E = n(960412),
  _ = n(151662),
  h = n(695346),
  T = n(981631),
  I = n(930441),
  C = n(689938),
  N = n(450470),
  g = n(331651);
t.Z = () => {
  let e = h.Ex.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, o.cj)([_.Z], () => _.Z.getEmailSettings());
  return a.useEffect(() => {
    null == n && (0, E.Y7)()
  }, [n]), (0, s.jsxs)("div", {
    className: N.container,
    children: [(0, s.jsx)(d.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: C.Z.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
    }), (0, s.jsx)(d.FormSwitch, {
      className: l()(g.marginTop8, g.marginBottom20),
      value: e,
      note: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: h.Ex.updateSetting,
      children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
    }), e ? (0, s.jsx)(d.Card, {
      className: N.enableCard,
      type: d.Card.Types.CUSTOM,
      outline: !0,
      children: (0, s.jsxs)(c.k, {
        justify: c.k.Justify.END,
        children: [(0, s.jsx)(c.k.Child, {
          children: (0, s.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
          })
        }), (0, s.jsx)(d.Clickable, {
          children: (0, s.jsx)(r.rU, {
            onClick: u.xf,
            to: {
              pathname: T.Z5c.FAMILY_CENTER,
              state: {
                scrollRestoration: !1
              }
            },
            children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
          })
        }), (0, s.jsx)(d.IconBadge, {
          icon: d.ArrowSmallRightIcon,
          className: N.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, s.jsx)(d.FormSwitch, {
      className: l()(g.marginTop20, g.marginBottom20),
      value: !!t[I.$Z.FAMILY_CENTER_DIGEST],
      note: C.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: function(e) {
        (0, E.pR)(I.$Z.FAMILY_CENTER_DIGEST, e)
      },
      children: C.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
    })]
  })
}