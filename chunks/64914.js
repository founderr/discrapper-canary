"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  N = s("695346"),
  g = s("399970"),
  f = s("726985"),
  m = s("981631"),
  C = s("689938"),
  A = s("485767");

function h() {
  let [e] = n.useState(() => I.default.getEnableHardwareAcceleration()), t = N.DisableGamesTab.useSetting(), s = N.DeveloperMode.useSetting(), h = N.DisableHomeAutoNav.useSetting(), {
    hasLibraryApplication: O,
    testModeApplicationId: p
  } = (0, l.useStateFromStoresObject)([c.default, u.default], () => ({
    hasLibraryApplication: u.default.hasLibraryApplication(),
    testModeApplicationId: c.default.testModeApplicationId
  })), R = n.useCallback(e => {
    N.DisableGamesTab.updateSetting(!e)
  }, []), M = n.useCallback(e => {
    e ? (0, r.openModal)(e => (0, a.jsx)(g.default, {
      ...e
    })) : o.reset()
  }, []), x = n.useCallback(e => {
    (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
      header: C.default.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: C.default.Messages.OKAY,
      cancelText: C.default.Messages.CANCEL,
      onConfirm: () => I.default.setEnableHardwareAcceleration(e),
      ...t,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: C.default.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), D = n.useCallback(e => {
    N.DisableHomeAutoNav.updateSetting(!e)
  }, []);
  return (0, a.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: C.default.Messages.SETTINGS_ADVANCED,
    children: [E.SUPPORTS_COPY && (0, a.jsx)(d.Subsetting, {
      setting: f.WebSetting.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, a.jsx)(r.FormSwitch, {
        value: s,
        onChange: N.DeveloperMode.updateSetting,
        note: C.default.Messages.DEVELOPER_MODE_HELP_TEXT.format({
          apiDocsUrl: m.MarketingURLs.API_DOCS
        }),
        children: C.default.Messages.DEVELOPER_MODE
      })
    }), _.isPlatformEmbedded && (0, a.jsx)(d.Subsetting, {
      setting: f.WebSetting.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, a.jsx)(r.FormSwitch, {
        value: e,
        onChange: x,
        note: C.default.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
        children: C.default.Messages.HARDWARE_ACCELERATION
      })
    }), O && (0, a.jsx)(d.Subsetting, {
      setting: f.WebSetting.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, a.jsx)(r.FormSwitch, {
        value: !t,
        onChange: R,
        note: C.default.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
        children: C.default.Messages.USER_SETTINGS_SHOW_LIBRARY
      })
    }), s && (0, a.jsx)(d.Subsetting, {
      setting: f.WebSetting.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, a.jsx)(r.FormSwitch, {
        value: null != p,
        note: C.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
        onChange: M,
        children: C.default.Messages.DEVELOPER_APPLICATION_TEST_MODE
      })
    }), (0, a.jsx)(d.Subsetting, {
      setting: f.WebSetting.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME,
      children: (0, a.jsx)(r.FormSwitch, {
        value: !h,
        note: C.default.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
          helpCenterLink: T.default.getArticleURL(m.HelpdeskArticles.GUILD_HOME)
        }),
        onChange: D,
        children: (0, a.jsxs)("div", {
          className: A.badgedItem,
          children: [C.default.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, a.jsx)(S.TextBadge, {
            text: C.default.Messages.BETA,
            color: i.default.unsafe_rawColors.BRAND_500.css,
            className: A.__invalid_betaTag
          })]
        })
      })
    })]
  })
}