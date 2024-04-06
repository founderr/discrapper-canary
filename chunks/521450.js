"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("613828"),
  o = n("435935"),
  u = n("442837"),
  d = n("481060"),
  c = n("37234"),
  f = n("960412"),
  E = n("151662"),
  _ = n("695346"),
  h = n("877453"),
  C = n("26290"),
  m = n("981631"),
  S = n("930441"),
  I = n("689938"),
  T = n("663041"),
  p = n("794711");
t.default = () => {
  let e = _.FamilyCenterEnabled.useSetting(),
    {
      categories: t,
      initialized: n
    } = (0, u.useStateFromStoresObject)([E.default], () => E.default.getEmailSettings());
  return s.useEffect(() => {
    null == n && (0, f.fetchEmailSettings)()
  }, [n]), (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsx)(d.Text, {
      variant: "eyebrow",
      color: "text-muted",
      children: I.default.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
    }), (0, a.jsx)(d.FormSwitch, {
      className: i()(p.marginTop8, p.marginBottom20),
      value: e,
      note: I.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
      hideBorder: !0,
      onChange: _.FamilyCenterEnabled.updateSetting,
      children: I.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
    }), e ? (0, a.jsx)(d.Card, {
      className: T.enableCard,
      type: d.Card.Types.CUSTOM,
      outline: !0,
      children: (0, a.jsxs)(o.Flex, {
        justify: o.Flex.Justify.END,
        children: [(0, a.jsx)(o.Flex.Child, {
          children: (0, a.jsx)(d.Text, {
            variant: "text-sm/semibold",
            color: "text-normal",
            children: I.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
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
            children: I.default.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
          })
        }), (0, a.jsx)(C.IconBadge, {
          icon: h.default,
          className: T.arrow,
          disableColor: !0
        })]
      })
    }) : null, (0, a.jsx)(d.FormSwitch, {
      className: i()(p.marginTop20, p.marginBottom20),
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