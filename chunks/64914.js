"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("692547"),
  r = s("481060"),
  o = s("401430"),
  d = s("921801"),
  u = s("283595"),
  c = s("695103"),
  S = s("26290"),
  E = s("572004"),
  T = s("63063"),
  _ = s("358085"),
  I = s("998502"),
  f = s("695346"),
  m = s("399970"),
  N = s("726985"),
  g = s("981631"),
  h = s("689938"),
  C = s("485767");

function O() {
  let [e] = n.useState(() => I.default.getEnableHardwareAcceleration()), t = f.DisableGamesTab.useSetting(), s = f.DeveloperMode.useSetting(), O = f.DisableHomeAutoNav.useSetting(), {
    hasLibraryApplication: A,
    testModeApplicationId: p
  } = (0, l.useStateFromStoresObject)([c.default, u.default], () => ({
    hasLibraryApplication: u.default.hasLibraryApplication(),
    testModeApplicationId: c.default.testModeApplicationId
  })), R = n.useCallback(e => {
    f.DisableGamesTab.updateSetting(!e)
  }, []), x = n.useCallback(e => {
    e ? (0, r.openModal)(e => (0, a.jsx)(m.default, {
      ...e
    })) : o.reset()
  }, []), M = n.useCallback(e => {
    (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
      header: h.default.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: h.default.Messages.OKAY,
      cancelText: h.default.Messages.CANCEL,
      onConfirm: () => I.default.setEnableHardwareAcceleration(e),
      ...t,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: h.default.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), D = n.useCallback(e => {
    f.DisableHomeAutoNav.updateSetting(!e)
  }, []);
  return (0, a.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: h.default.Messages.SETTINGS_ADVANCED,
    children: [E.SUPPORTS_COPY && (0, a.jsx)(d.Subsetting, {
      setting: N.WebSetting.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, a.jsx)(r.FormSwitch, {
        value: s,
        onChange: f.DeveloperMode.updateSetting,
        note: h.default.Messages.DEVELOPER_MODE_HELP_TEXT.format({
          apiDocsUrl: g.MarketingURLs.API_DOCS
        }),
        children: h.default.Messages.DEVELOPER_MODE
      })
    }), _.isPlatformEmbedded && (0, a.jsx)(d.Subsetting, {
      setting: N.WebSetting.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, a.jsx)(r.FormSwitch, {
        value: e,
        onChange: M,
        note: h.default.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
        children: h.default.Messages.HARDWARE_ACCELERATION
      })
    }), A && (0, a.jsx)(d.Subsetting, {
      setting: N.WebSetting.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, a.jsx)(r.FormSwitch, {
        value: !t,
        onChange: R,
        note: h.default.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
        children: h.default.Messages.USER_SETTINGS_SHOW_LIBRARY
      })
    }), s && (0, a.jsx)(d.Subsetting, {
      setting: N.WebSetting.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, a.jsx)(r.FormSwitch, {
        value: null != p,
        note: h.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
        onChange: x,
        children: h.default.Messages.DEVELOPER_APPLICATION_TEST_MODE
      })
    }), (0, a.jsx)(d.Subsetting, {
      setting: N.WebSetting.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME,
      children: (0, a.jsx)(r.FormSwitch, {
        value: !O,
        note: h.default.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
          helpCenterLink: T.default.getArticleURL(g.HelpdeskArticles.GUILD_HOME)
        }),
        onChange: D,
        children: (0, a.jsxs)("div", {
          className: C.badgedItem,
          children: [h.default.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, a.jsx)(S.TextBadge, {
            text: h.default.Messages.BETA,
            color: i.default.unsafe_rawColors.BRAND_500.css,
            className: C.__invalid_betaTag
          })]
        })
      })
    })]
  })
}