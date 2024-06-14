"use strict";
s.r(t);
var n = s("735250"),
  a = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("613828"),
  o = s("435935"),
  u = s("442837"),
  d = s("481060"),
  c = s("37234"),
  E = s("960412"),
  f = s("151662"),
  _ = s("695346"),
  h = s("877453"),
  C = s("981631"),
  m = s("930441"),
  T = s("689938"),
  g = s("120762"),
  A = s("611273");
t.default = () => {
  let e = _.FamilyCenterEnabled.useSetting(),
    {
      categories: t,
      initialized: s
    } = (0, u.useStateFromStoresObject)([f.default], () => f.default.getEmailSettings());
  return a.useEffect(() => {
    null == s && (0, E.fetchEmailSettings)()
  }, [s]), (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsx)(d.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: T.default.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
    }), (0, n.jsx)(d.FormSwitch, {
      className: i()(A.marginTop8, A.marginBottom20),
      value: e,
      note: T.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: _.FamilyCenterEnabled.updateSetting,
      children: T.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
    }), e ? (0, n.jsx)(d.Card, {
      className: g.enableCard,
      type: d.Card.Types.CUSTOM,
      outline: !0,
      children: (0, n.jsxs)(o.Flex, {
        justify: o.Flex.Justify.END,
        children: [(0, n.jsx)(o.Flex.Child, {
          children: (0, n.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: T.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
          })
        }), (0, n.jsx)(d.Clickable, {
          children: (0, n.jsx)(r.Link, {
            onClick: c.popLayer,
            to: {
              pathname: C.Routes.FAMILY_CENTER,
              state: {
                scrollRestoration: !1
              }
            },
            children: T.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
          })
        }), (0, n.jsx)(d.IconBadge, {
          icon: h.default,
          className: g.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, n.jsx)(d.FormSwitch, {
      className: i()(A.marginTop20, A.marginBottom20),
      value: !!t[m.EmailCategories.FAMILY_CENTER_DIGEST],
      note: T.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: function(e) {
        (0, E.updateEmailSetting)(m.EmailCategories.FAMILY_CENTER_DIGEST, e)
      },
      children: T.default.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
    })]
  })
}