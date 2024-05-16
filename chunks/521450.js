"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("613828"),
  o = n("435935"),
  u = n("442837"),
  d = n("481060"),
  c = n("37234"),
  f = n("960412"),
  E = n("151662"),
  h = n("695346"),
  _ = n("877453"),
  C = n("26290"),
  m = n("981631"),
  S = n("930441"),
  p = n("689938"),
  g = n("120762"),
  I = n("611273");
t.default = () => {
  let e = h.FamilyCenterEnabled.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, u.useStateFromStoresObject)([E.default], () => E.default.getEmailSettings());
  return s.useEffect(() => {
    null == n && (0, f.fetchEmailSettings)()
  }, [n]), (0, a.jsxs)("div", {
    className: g.container,
    children: [(0, a.jsx)(d.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: p.default.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
    }), (0, a.jsx)(d.FormSwitch, {
      className: i()(I.marginTop8, I.marginBottom20),
      value: e,
      note: p.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: h.FamilyCenterEnabled.updateSetting,
      children: p.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
    }), e ? (0, a.jsx)(d.Card, {
      className: g.enableCard,
      type: d.Card.Types.CUSTOM,
      outline: !0,
      children: (0, a.jsxs)(o.Flex, {
        justify: o.Flex.Justify.END,
        children: [(0, a.jsx)(o.Flex.Child, {
          children: (0, a.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: p.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
          })
        }), (0, a.jsx)(d.Clickable, {
          children: (0, a.jsx)(r.Link, {
            onClick: c.popLayer,
            to: {
              pathname: m.Routes.FAMILY_CENTER,
              state: {
                scrollRestoration: !1
              }
            },
            children: p.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
          })
        }), (0, a.jsx)(C.IconBadge, {
          icon: _.default,
          className: g.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, a.jsx)(d.FormSwitch, {
      className: i()(I.marginTop20, I.marginBottom20),
      value: !!t[S.EmailCategories.FAMILY_CENTER_DIGEST],
      note: p.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: function(e) {
        (0, f.updateEmailSetting)(S.EmailCategories.FAMILY_CENTER_DIGEST, e)
      },
      children: p.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
    })]
  })
}