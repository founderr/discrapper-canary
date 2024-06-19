t.d(s, {
  Z: function() {
    return h
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(692547),
  r = t(481060),
  o = t(401430),
  c = t(921801),
  E = t(283595),
  d = t(695103),
  _ = t(572004),
  T = t(63063),
  S = t(358085),
  u = t(998502),
  I = t(695346),
  N = t(399970),
  A = t(726985),
  C = t(981631),
  O = t(689938),
  m = t(805807);

function h() {
  let [e] = i.useState(() => u.ZP.getEnableHardwareAcceleration()), s = I.bm.useSetting(), t = I.Sb.useSetting(), h = I.xU.useSetting(), {
    hasLibraryApplication: g,
    testModeApplicationId: R
  } = (0, a.cj)([d.Z, E.Z], () => ({
    hasLibraryApplication: E.Z.hasLibraryApplication(),
    testModeApplicationId: d.Z.testModeApplicationId
  })), M = i.useCallback(e => {
    I.bm.updateSetting(!e)
  }, []), x = i.useCallback(e => {
    e ? (0, r.openModal)(e => (0, n.jsx)(N.Z, {
      ...e
    })) : o.mc()
  }, []), D = i.useCallback(e => {
    (0, r.openModal)(s => (0, n.jsx)(r.ConfirmModal, {
      header: O.Z.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: O.Z.Messages.OKAY,
      cancelText: O.Z.Messages.CANCEL,
      onConfirm: () => u.ZP.setEnableHardwareAcceleration(e),
      ...s,
      children: (0, n.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: O.Z.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), p = i.useCallback(e => {
    I.xU.updateSetting(!e)
  }, []);
  return (0, n.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: O.Z.Messages.SETTINGS_ADVANCED,
    children: [_.wS && (0, n.jsx)(c.F, {
      setting: A.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, n.jsx)(r.FormSwitch, {
        value: t,
        onChange: I.Sb.updateSetting,
        note: O.Z.Messages.DEVELOPER_MODE_HELP_TEXT.format({
          apiDocsUrl: C.EYA.API_DOCS
        }),
        children: O.Z.Messages.DEVELOPER_MODE
      })
    }), S.isPlatformEmbedded && (0, n.jsx)(c.F, {
      setting: A.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, n.jsx)(r.FormSwitch, {
        value: e,
        onChange: D,
        note: O.Z.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
        children: O.Z.Messages.HARDWARE_ACCELERATION
      })
    }), g && (0, n.jsx)(c.F, {
      setting: A.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, n.jsx)(r.FormSwitch, {
        value: !s,
        onChange: M,
        note: O.Z.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
        children: O.Z.Messages.USER_SETTINGS_SHOW_LIBRARY
      })
    }), t && (0, n.jsx)(c.F, {
      setting: A.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, n.jsx)(r.FormSwitch, {
        value: null != R,
        note: O.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
        onChange: x,
        children: O.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE
      })
    }), (0, n.jsx)(c.F, {
      setting: A.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME,
      children: (0, n.jsx)(r.FormSwitch, {
        value: !h,
        note: O.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
          helpCenterLink: T.Z.getArticleURL(C.BhN.GUILD_HOME)
        }),
        onChange: p,
        children: (0, n.jsxs)("div", {
          className: m.badgedItem,
          children: [O.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, n.jsx)(r.TextBadge, {
            text: O.Z.Messages.BETA,
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            className: m.__invalid_betaTag
          })]
        })
      })
    })]
  })
}