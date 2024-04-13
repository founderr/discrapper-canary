"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("613828"),
  o = a("435935"),
  u = a("442837"),
  d = a("481060"),
  c = a("37234"),
  f = a("960412"),
  E = a("151662"),
  h = a("695346"),
  _ = a("877453"),
  C = a("26290"),
  m = a("981631"),
  S = a("930441"),
  I = a("689938"),
  p = a("663041"),
  T = a("794711");
t.default = () => {
  let e = h.FamilyCenterEnabled.useSetting(),
    {
      categories: t,
      initialized: a
    } = (0, u.useStateFromStoresObject)([E.default], () => E.default.getEmailSettings());
  return s.useEffect(() => {
    null == a && (0, f.fetchEmailSettings)()
  }, [a]), (0, n.jsxs)("div", {
    className: p.container,
    children: [(0, n.jsx)(d.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: I.default.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
    }), (0, n.jsx)(d.FormSwitch, {
      className: i()(T.marginTop8, T.marginBottom20),
      value: e,
      note: I.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: h.FamilyCenterEnabled.updateSetting,
      children: I.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
    }), e ? (0, n.jsx)(d.Card, {
      className: p.enableCard,
      type: d.Card.Types.CUSTOM,
      outline: !0,
      children: (0, n.jsxs)(o.Flex, {
        justify: o.Flex.Justify.END,
        children: [(0, n.jsx)(o.Flex.Child, {
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: I.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
          })
        }), (0, n.jsx)(d.Clickable, {
          children: (0, n.jsx)(r.Link, {
            onClick: c.popLayer,
            to: {
              pathname: m.Routes.FAMILY_CENTER,
              state: {
                scrollRestoration: !1
              }
            },
            children: I.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
          })
        }), (0, n.jsx)(C.IconBadge, {
          icon: _.default,
          className: p.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, n.jsx)(d.FormSwitch, {
      className: i()(T.marginTop20, T.marginBottom20),
      value: !!t[S.EmailCategories.FAMILY_CENTER_DIGEST],
      note: I.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: function(e) {
        (0, f.updateEmailSetting)(S.EmailCategories.FAMILY_CENTER_DIGEST, e)
      },
      children: I.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
    })]
  })
}