t.d(s, {
  Z: function() {
    return C
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(692547),
  r = t(481060),
  o = t(401430),
  c = t(921801),
  E = t(695103),
  d = t(63063),
  _ = t(998502),
  T = t(695346),
  S = t(399970),
  u = t(726985),
  I = t(981631),
  N = t(689938),
  A = t(805807);

function C() {
  let [e] = i.useState(() => _.ZP.getEnableHardwareAcceleration()), s = T.bm.useSetting(), t = T.Sb.useSetting(), C = T.xU.useSetting(), O = (0, a.e7)([E.Z], () => E.Z.testModeApplicationId), m = i.useCallback(e => {
    T.bm.updateSetting(!e)
  }, []), h = i.useCallback(e => {
    e ? (0, r.openModal)(e => (0, n.jsx)(S.Z, {
      ...e
    })) : o.mc()
  }, []), g = i.useCallback(e => {
    (0, r.openModal)(s => (0, n.jsx)(r.ConfirmModal, {
      header: N.Z.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: N.Z.Messages.OKAY,
      cancelText: N.Z.Messages.CANCEL,
      onConfirm: () => _.ZP.setEnableHardwareAcceleration(e),
      ...s,
      children: (0, n.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: N.Z.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), R = i.useCallback(e => {
    T.xU.updateSetting(!e)
  }, []);
  return (0, n.jsxs)(r.FormSection, {
    tag: r.FormTitleTags.H1,
    title: N.Z.Messages.SETTINGS_ADVANCED,
    children: [(0, n.jsx)(c.F, {
      setting: u.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, n.jsx)(r.FormSwitch, {
        value: t,
        onChange: T.Sb.updateSetting,
        note: N.Z.Messages.DEVELOPER_MODE_HELP_TEXT.format({
          apiDocsUrl: I.EYA.API_DOCS
        }),
        children: N.Z.Messages.DEVELOPER_MODE
      })
    }), (0, n.jsx)(c.F, {
      setting: u.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, n.jsx)(r.FormSwitch, {
        value: e,
        onChange: g,
        note: N.Z.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
        children: N.Z.Messages.HARDWARE_ACCELERATION
      })
    }), (0, n.jsx)(c.F, {
      setting: u.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, n.jsx)(r.FormSwitch, {
        value: !s,
        onChange: m,
        note: N.Z.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
        children: N.Z.Messages.USER_SETTINGS_SHOW_LIBRARY
      })
    }), (0, n.jsx)(c.F, {
      setting: u.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, n.jsx)(r.FormSwitch, {
        value: null != O,
        note: N.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
        onChange: h,
        children: N.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE
      })
    }), (0, n.jsx)(c.F, {
      setting: u.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME,
      children: (0, n.jsx)(r.FormSwitch, {
        value: !C,
        note: N.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
          helpCenterLink: d.Z.getArticleURL(I.BhN.GUILD_HOME)
        }),
        onChange: R,
        children: (0, n.jsxs)("div", {
          className: A.badgedItem,
          children: [N.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, n.jsx)(r.TextBadge, {
            text: N.Z.Messages.BETA,
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            className: A.__invalid_betaTag
          })]
        })
      })
    })]
  })
}