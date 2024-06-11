"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  i = s("442837"),
  l = s("692547"),
  r = s("481060"),
  o = s("401430"),
  d = s("921801"),
  u = s("283595"),
  c = s("695103"),
  S = s("572004"),
  E = s("63063"),
  T = s("358085"),
  _ = s("998502"),
  I = s("695346"),
  N = s("399970"),
  g = s("726985"),
  f = s("981631"),
  m = s("689938"),
  A = s("485767");

function C() {
  let [e] = n.useState(() => _.default.getEnableHardwareAcceleration()), t = I.DisableGamesTab.useSetting(), s = I.DeveloperMode.useSetting(), C = I.DisableHomeAutoNav.useSetting(), {
    hasLibraryApplication: O,
    testModeApplicationId: h
  } = (0, i.useStateFromStoresObject)([c.default, u.default], () => ({
    hasLibraryApplication: u.default.hasLibraryApplication(),
    testModeApplicationId: c.default.testModeApplicationId
  })), R = n.useCallback(e => {
    I.DisableGamesTab.updateSetting(!e)
  }, []), p = n.useCallback(e => {
    e ? (0, r.openModal)(e => (0, a.jsx)(N.default, {
      ...e
    })) : o.reset()
  }, []), M = n.useCallback(e => {
    (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
      header: m.default.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: m.default.Messages.OKAY,
      cancelText: m.default.Messages.CANCEL,
      onConfirm: () => _.default.setEnableHardwareAcceleration(e),
      ...t,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: m.default.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), D = n.useCallback(e => {
    I.DisableHomeAutoNav.updateSetting(!e)
  }, []);
  return (0, a.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: m.default.Messages.SETTINGS_ADVANCED,
    children: [S.SUPPORTS_COPY && (0, a.jsx)(d.Subsetting, {
      setting: g.WebSetting.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, a.jsx)(r.FormSwitch, {
        value: s,
        onChange: I.DeveloperMode.updateSetting,
        note: m.default.Messages.DEVELOPER_MODE_HELP_TEXT.format({
          apiDocsUrl: f.MarketingURLs.API_DOCS
        }),
        children: m.default.Messages.DEVELOPER_MODE
      })
    }), T.isPlatformEmbedded && (0, a.jsx)(d.Subsetting, {
      setting: g.WebSetting.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, a.jsx)(r.FormSwitch, {
        value: e,
        onChange: M,
        note: m.default.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
        children: m.default.Messages.HARDWARE_ACCELERATION
      })
    }), O && (0, a.jsx)(d.Subsetting, {
      setting: g.WebSetting.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, a.jsx)(r.FormSwitch, {
        value: !t,
        onChange: R,
        note: m.default.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
        children: m.default.Messages.USER_SETTINGS_SHOW_LIBRARY
      })
    }), s && (0, a.jsx)(d.Subsetting, {
      setting: g.WebSetting.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, a.jsx)(r.FormSwitch, {
        value: null != h,
        note: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
        onChange: p,
        children: m.default.Messages.DEVELOPER_APPLICATION_TEST_MODE
      })
    }), (0, a.jsx)(d.Subsetting, {
      setting: g.WebSetting.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME,
      children: (0, a.jsx)(r.FormSwitch, {
        value: !C,
        note: m.default.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
          helpCenterLink: E.default.getArticleURL(f.HelpdeskArticles.GUILD_HOME)
        }),
        onChange: D,
        children: (0, a.jsxs)("div", {
          className: A.badgedItem,
          children: [m.default.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, a.jsx)(r.TextBadge, {
            text: m.default.Messages.BETA,
            color: l.default.unsafe_rawColors.BRAND_500.css,
            className: A.__invalid_betaTag
          })]
        })
      })
    })]
  })
}