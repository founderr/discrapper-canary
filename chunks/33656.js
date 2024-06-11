"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("724458");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("921801"),
  u = s("663389"),
  c = s("960412"),
  S = s("151662"),
  E = s("930441"),
  T = s("726985"),
  _ = s("689938"),
  I = s("63057"),
  N = s("611273");

function g(e) {
  let {
    label: t,
    onChange: s,
    enabled: n,
    subLabel: i
  } = e;
  return (0, a.jsx)(o.FormSwitch, {
    value: !!n,
    onChange: s,
    note: i,
    children: t
  })
}

function f() {
  let e = (0, r.useStateFromStores)([u.default], () => u.default.getSubsection()),
    t = n.createRef(),
    {
      categories: s,
      initialized: i
    } = (0, r.useStateFromStoresObject)([S.default], () => S.default.getEmailSettings());
  n.useEffect(() => {
    if (null == i)(0, c.fetchEmailSettings)();
    else if (e === E.EMAILS_SUBSECTION.toUpperCase()) {
      var s;
      null == t || null === (s = t.current) || void 0 === s || s.scrollIntoView(!0)
    }
  }, [i, t, e]);
  let f = E.MarketingEmailCategories.reduce((e, t) => e || !!s[t], !1),
    m = {
      [E.EmailCategories.COMMUNICATION]: T.WebSetting.NOTIFICATIONS_EMAILS_COMMUNICATION,
      [E.EmailCategories.SOCIAL]: T.WebSetting.NOTIFICATIONS_EMAILS_SOCIAL,
      [E.EmailCategories.UPDATES_AND_ANNOUNCEMENTS]: T.WebSetting.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES,
      [E.EmailCategories.TIPS]: T.WebSetting.NOTIFICATIONS_EMAILS_TIPS,
      [E.EmailCategories.RECOMMENDATIONS_AND_EVENTS]: T.WebSetting.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS
    };
  return i ? (0, a.jsxs)(d.Subsetting, {
    setting: T.WebSetting.NOTIFICATIONS_EMAILS,
    children: [(0, a.jsx)("div", {
      ref: t
    }), (0, a.jsxs)(o.FormSection, {
      className: l()(N.marginTop40),
      tag: o.FormTitleTags.H1,
      title: _.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
      children: [E.EmailCategoriesList.map(e => {
        let {
          category: t,
          label: n,
          subLabel: i
        } = e, l = m[t], r = (0, a.jsx)(g, {
          label: n(),
          subLabel: i(),
          enabled: s[t],
          onChange: e => {
            var s, a;
            return s = t, a = e, void(0, c.updateEmailSetting)(s, a)
          }
        }, n());
        return null != l ? (0, a.jsx)(d.Subsetting, {
          setting: l,
          children: r
        }, n()) : r
      }), (0, a.jsxs)(d.Subsetting, {
        setting: T.WebSetting.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS,
        children: [(0, a.jsx)(o.Button, {
          className: I.marketingUnsubscribeButton,
          disabled: !f,
          look: o.ButtonLooks.LINK,
          color: o.ButtonColors.LINK,
          onClick: c.updateMarketingEmailSettings,
          children: _.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING
        }), (0, a.jsx)(o.FormText, {
          type: o.FormTextTypes.DESCRIPTION,
          children: _.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING_DESCRIPTION
        }), (0, a.jsx)(o.FormDivider, {
          className: l()(N.marginTop40, N.marginBottom40)
        })]
      })]
    })]
  }) : null
}