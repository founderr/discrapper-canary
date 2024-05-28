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
  d = s("283595"),
  u = s("695103"),
  c = s("26290"),
  S = s("572004"),
  E = s("63063"),
  T = s("358085"),
  _ = s("998502"),
  f = s("695346"),
  m = s("399970"),
  I = s("981631"),
  g = s("689938"),
  N = s("485767");

function h() {
  let [e] = n.useState(() => _.default.getEnableHardwareAcceleration()), t = f.DisableGamesTab.useSetting(), s = f.DeveloperMode.useSetting(), h = f.DisableHomeAutoNav.useSetting(), {
    hasLibraryApplication: C,
    testModeApplicationId: O
  } = (0, l.useStateFromStoresObject)([u.default, d.default], () => ({
    hasLibraryApplication: d.default.hasLibraryApplication(),
    testModeApplicationId: u.default.testModeApplicationId
  })), A = n.useCallback(e => {
    f.DisableGamesTab.updateSetting(!e)
  }, []), p = n.useCallback(e => {
    e ? (0, r.openModal)(e => (0, a.jsx)(m.default, {
      ...e
    })) : o.reset()
  }, []), R = n.useCallback(e => {
    (0, r.openModal)(t => (0, a.jsx)(r.ConfirmModal, {
      header: g.default.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: g.default.Messages.OKAY,
      cancelText: g.default.Messages.CANCEL,
      onConfirm: () => _.default.setEnableHardwareAcceleration(e),
      ...t,
      children: (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: g.default.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), x = n.useCallback(e => {
    f.DisableHomeAutoNav.updateSetting(!e)
  }, []);
  return (0, a.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: g.default.Messages.SETTINGS_ADVANCED,
    children: [S.SUPPORTS_COPY && (0, a.jsx)(r.FormSwitch, {
      value: s,
      onChange: f.DeveloperMode.updateSetting,
      note: g.default.Messages.DEVELOPER_MODE_HELP_TEXT.format({
        apiDocsUrl: I.MarketingURLs.API_DOCS
      }),
      children: g.default.Messages.DEVELOPER_MODE
    }), T.isPlatformEmbedded && (0, a.jsx)(r.FormSwitch, {
      value: e,
      onChange: R,
      note: g.default.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
      children: g.default.Messages.HARDWARE_ACCELERATION
    }), C && (0, a.jsx)(r.FormSwitch, {
      value: !t,
      onChange: A,
      note: g.default.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
      children: g.default.Messages.USER_SETTINGS_SHOW_LIBRARY
    }), s && (0, a.jsx)(r.FormSwitch, {
      value: null != O,
      note: g.default.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
      onChange: p,
      children: g.default.Messages.DEVELOPER_APPLICATION_TEST_MODE
    }), (0, a.jsx)(r.FormSwitch, {
      value: !h,
      note: g.default.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
        helpCenterLink: E.default.getArticleURL(I.HelpdeskArticles.GUILD_HOME)
      }),
      onChange: x,
      children: (0, a.jsxs)("div", {
        className: N.badgedItem,
        children: [g.default.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, a.jsx)(c.TextBadge, {
          text: g.default.Messages.BETA,
          color: i.default.unsafe_rawColors.BRAND_500.css,
          className: N.__invalid_betaTag
        })]
      })
    })]
  })
}