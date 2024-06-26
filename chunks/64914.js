t.d(s, {
  Z: function() {
    return A
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  i = t(442837),
  r = t(692547),
  o = t(481060),
  l = t(401430),
  c = t(921801),
  d = t(695103),
  _ = t(63063),
  E = t(998502),
  u = t(695346),
  T = t(399970),
  S = t(726985),
  I = t(981631),
  N = t(689938),
  C = t(805807);

function A() {
  let [e] = a.useState(() => E.ZP.getEnableHardwareAcceleration()), s = u.bm.useSetting(), t = u.Sb.useSetting(), A = u.xU.useSetting(), m = (0, i.e7)([d.Z], () => d.Z.testModeApplicationId), O = a.useCallback(e => {
    u.bm.updateSetting(!e)
  }, []), g = a.useCallback(e => {
    e ? (0, o.openModal)(e => (0, n.jsx)(T.Z, {
      ...e
    })) : l.mc()
  }, []), h = a.useCallback(e => {
    (0, o.openModal)(s => (0, n.jsx)(o.ConfirmModal, {
      header: N.Z.Messages.SWITCH_HARDWARE_ACCELERATION,
      confirmText: N.Z.Messages.OKAY,
      cancelText: N.Z.Messages.CANCEL,
      onConfirm: () => E.ZP.setEnableHardwareAcceleration(e),
      ...s,
      children: (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: N.Z.Messages.SWITCH_HARDWARE_ACCELERATION_BODY
      })
    }))
  }, []), R = a.useCallback(e => {
    u.xU.updateSetting(!e)
  }, []);
  return (0, n.jsxs)(o.FormSection, {
    tag: o.FormTitleTags.H1,
    title: N.Z.Messages.SETTINGS_ADVANCED,
    children: [(0, n.jsx)(c.F, {
      setting: S.s6.SETTINGS_ADVANCED_DEVELOPER_MODE,
      children: (0, n.jsx)(o.FormSwitch, {
        value: t,
        onChange: u.Sb.updateSetting,
        note: N.Z.Messages.DEVELOPER_MODE_HELP_TEXT.format({
          apiDocsUrl: I.EYA.API_DOCS
        }),
        children: N.Z.Messages.DEVELOPER_MODE
      })
    }), (0, n.jsx)(c.F, {
      setting: S.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION,
      children: (0, n.jsx)(o.FormSwitch, {
        value: e,
        onChange: h,
        note: N.Z.Messages.HARDWARE_ACCELERATION_HELP_TEXT,
        children: N.Z.Messages.HARDWARE_ACCELERATION
      })
    }), (0, n.jsx)(c.F, {
      setting: S.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY,
      children: (0, n.jsx)(o.FormSwitch, {
        value: !s,
        onChange: O,
        note: N.Z.Messages.USER_SETTINGS_SHOW_LIBRARY_NOTE,
        children: N.Z.Messages.USER_SETTINGS_SHOW_LIBRARY
      })
    }), (0, n.jsx)(c.F, {
      setting: S.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE,
      children: (0, n.jsx)(o.FormSwitch, {
        value: null != m,
        note: N.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE_NOTE,
        onChange: g,
        children: N.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE
      })
    }), (0, n.jsx)(c.F, {
      setting: S.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME,
      children: (0, n.jsx)(o.FormSwitch, {
        value: !A,
        note: N.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV_HELP_TEXT.format({
          helpCenterLink: _.Z.getArticleURL(I.BhN.GUILD_HOME)
        }),
        onChange: R,
        children: (0, n.jsxs)("div", {
          className: C.badgedItem,
          children: [N.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV, (0, n.jsx)(o.TextBadge, {
            text: N.Z.Messages.BETA,
            color: r.Z.unsafe_rawColors.BRAND_500.css,
            className: C.__invalid_betaTag
          })]
        })
      })
    })]
  })
}