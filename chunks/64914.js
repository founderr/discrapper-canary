"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("692547"),
  r = s("481060"),
  o = s("401430"),
  d = s("283595"),
  u = s("695103"),
  c = s("26290"),
  S = s("572004"),
  E = s("63063"),
  T = s("358085"),
  f = s("998502"),
  m = s("695346"),
  _ = s("399970"),
  g = s("981631"),
  I = s("689938"),
  h = s("358552");

function N() {
  let [e] = n.useState(() => f.default.getEnableHardwareAcceleration()), t = m.DisableGamesTab.useSetting(), s = m.DeveloperMode.useSetting(), N = m.DisableHomeAutoNav.useSetting(), {
    hasLibraryApplication: p,
    testModeApplicationId: C
  } = (0, l.useStateFromStoresObject)([u.default, d.default], () => ({
    hasLibraryApplication: d.default.hasLibraryApplication(),
    testModeApplicationId: u.default.testModeApplicationId
  })), A = n.useCallback(e => {
    m.DisableGamesTab.updateSetting(!e)
  }, []), O = n.useCallback(e => {
    e ? (0, r.openModal)(e => (0, a.jsx)(_.default, {
      ...e
    })) : o.reset()
  }, []), x = n.useCallback(e => {
    (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
      header: I.default.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: I.default.Messages.OKAY,
      cancelText: I.default.Messages.CANCEL,
      onConfirm: () => f.default.setEnableHardwareAcceleration(e),
      ...t,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: I.default.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), R = n.useCallback(e => {
    m.DisableHomeAutoNav.updateSetting(!e)
  }, []);
  return (0, a.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: I.default.Messages.SETTINGS_ADVANCED,
    children: [S.SUPPORTS_COPY && (0, a.jsx)(r.FormSwitch, {
      value: s,
      onChange: m.DeveloperMode.updateSetting,
      note: I.default.Messages.DEVELOPER_MODE_HELP_TEXT.format({
        apiDocsUrl: g.MarketingURLs.API_DOCS
      }),
      children: I.default.Messages.DEVELOPER_MODE
    }), T.isPlatformEmbedded && (0, a.jsx)(r.FormSwitch, {
      value: e,
      onChange: x,
      note: I.default.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
      children: I.default.Messages.HARDWARE_ACCELERATION
    }), p && (0, a.jsx)(r.FormSwitch, {
      value: !t,
      onChange: A,
      note: I.default.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
      children: I.default.Messages.USER_SETTINGS_SHOW_LIBRARY
    }), s && (0, a.jsx)(r.FormSwitch, {
      value: null != C,
      note: I.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
      onChange: O,
      children: I.default.Messages.DEVELOPER_APPLICATION_TEST_MODE
    }), (0, a.jsx)(r.FormSwitch, {
      value: !N,
      note: I.default.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
        helpCenterLink: E.default.getArticleURL(g.HelpdeskArticles.GUILD_HOME)
      }),
      onChange: R,
      children: (0, a.jsxs)("div", {
        className: h.badgedItem,
        children: [I.default.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, a.jsx)(c.TextBadge, {
          text: I.default.Messages.BETA,
          color: i.default.unsafe_rawColors.BRAND_500.css,
          className: h.__invalid_betaTag
        })]
      })
    })]
  })
}