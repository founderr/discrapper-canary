var s = n(735250),
  a = n(470079),
  i = n(120356),
  l = n.n(i),
  r = n(613828),
  o = n(435935),
  c = n(442837),
  d = n(481060),
  u = n(37234),
  E = n(960412),
  _ = n(151662),
  h = n(695346),
  m = n(981631),
  T = n(930441),
  C = n(689938),
  g = n(450470),
  p = n(331651);
t.Z = () => {
  let e = h.Ex.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, c.cj)([_.Z], () => _.Z.getEmailSettings());
  return a.useEffect(() => {
    null == n && (0, E.Y7)()
  }, [n]), (0, s.jsxs)("div", {
    className: g.container,
    children: [(0, s.jsx)(d.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: C.Z.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
    }), (0, s.jsx)(d.FormSwitch, {
      className: l()(p.marginTop8, p.marginBottom20),
      value: e,
      note: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: h.Ex.updateSetting,
      children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
    }), e ? (0, s.jsx)(d.Card, {
      className: g.enableCard,
      type: d.Card.Types.CUSTOM,
      outline: !0,
      children: (0, s.jsxs)(o.k, {
        justify: o.k.Justify.END,
        children: [(0, s.jsx)(o.k.Child, {
          children: (0, s.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
          })
        }), (0, s.jsx)(d.Clickable, {
          children: (0, s.jsx)(r.rU, {
            onClick: u.xf,
            to: {
              pathname: m.Z5c.FAMILY_CENTER,
              state: {
                scrollRestoration: !1
              }
            },
            children: C.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
          })
        }), (0, s.jsx)(d.IconBadge, {
          icon: d.ArrowSmallRightIcon,
          className: g.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, s.jsx)(d.FormSwitch, {
      className: l()(p.marginTop20, p.marginBottom20),
      value: !!t[T.$Z.FAMILY_CENTER_DIGEST],
      note: C.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: function(e) {
        (0, E.pR)(T.$Z.FAMILY_CENTER_DIGEST, e)
      },
      children: C.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
    })]
  })
}