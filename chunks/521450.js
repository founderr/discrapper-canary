"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("613828"),
  u = s("435935"),
  o = s("442837"),
  d = s("481060"),
  c = s("37234"),
  E = s("960412"),
  _ = s("151662"),
  f = s("695346"),
  h = s("877453"),
  m = s("26290"),
  T = s("981631"),
  C = s("930441"),
  g = s("689938"),
  A = s("120762"),
  N = s("611273");
t.default = () => {
  let e = f.FamilyCenterEnabled.useSetting(),
    {
      categories: t,
      initialized: s
    } = (0, o.useStateFromStoresObject)([_.default], () => _.default.getEmailSettings());
  return n.useEffect(() => {
    null == s && (0, E.fetchEmailSettings)()
  }, [s]), (0, a.jsxs)("div", {
    className: A.container,
    children: [(0, a.jsx)(d.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: g.default.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
    }), (0, a.jsx)(d.FormSwitch, {
      className: i()(N.marginTop8, N.marginBottom20),
      value: e,
      note: g.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: f.FamilyCenterEnabled.updateSetting,
      children: g.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
    }), e ? (0, a.jsx)(d.Card, {
      className: A.enableCard,
      type: d.Card.Types.CUSTOM,
      outline: !0,
      children: (0, a.jsxs)(u.Flex, {
        justify: u.Flex.Justify.END,
        children: [(0, a.jsx)(u.Flex.Child, {
          children: (0, a.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: g.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
          })
        }), (0, a.jsx)(d.Clickable, {
          children: (0, a.jsx)(r.Link, {
            onClick: c.popLayer,
            to: {
              pathname: T.Routes.FAMILY_CENTER,
              state: {
                scrollRestoration: !1
              }
            },
            children: g.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
          })
        }), (0, a.jsx)(m.IconBadge, {
          icon: h.default,
          className: A.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, a.jsx)(d.FormSwitch, {
      className: i()(N.marginTop20, N.marginBottom20),
      value: !!t[C.EmailCategories.FAMILY_CENTER_DIGEST],
      note: g.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: function(e) {
        (0, E.updateEmailSetting)(C.EmailCategories.FAMILY_CENTER_DIGEST, e)
      },
      children: g.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
    })]
  })
}