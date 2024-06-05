"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  l = s.n(n),
  i = s("392711"),
  r = s.n(i),
  o = s("442837"),
  d = s("481060"),
  u = s("660216"),
  c = s("13245"),
  S = s("825209"),
  E = s("887278"),
  T = s("630699"),
  _ = s("658785"),
  I = s("556296"),
  f = s("808506"),
  m = s("237997"),
  N = s("739563"),
  g = s("626135");
s("63063");
var h = s("13140"),
  C = s("981631"),
  O = s("689938"),
  A = s("867541");
let p = R(null);

function R(e) {
  var t;
  let s = m.default.getNotificationPositionMode(),
    a = s !== C.OverlayNotificationPositions.DISABLED,
    n = I.default.getOverlayKeybind(),
    l = I.default.getOverlayChatKeybind();
  return {
    enabled: f.default.enabled,
    notifications_enabled: a,
    notifications_position: a ? s : null,
    text_notifications_mode: m.default.getTextChatNotificationMode(),
    hotkey: null != n ? (0, h.toString)(n.shortcut) : null,
    text_activation_hotkey: null != l ? (0, h.toString)(l.shortcut) : null,
    text_opacity_slider: m.default.getTextWidgetOpacity(),
    old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : f.default.enabled
  }
}

function x(e) {
  let {
    children: t,
    title: s
  } = e;
  return (0, a.jsx)(d.FormItem, {
    title: s,
    className: A.userSettingsOverlayField,
    children: t
  })
}

function M(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, {
    enabled: n,
    legacyEnabled: i
  } = (0, o.useStateFromStoresObject)([f.default], () => ({
    enabled: f.default.enabled,
    legacyEnabled: f.default.legacyEnabled
  })), {
    avatarSizeMode: h,
    displayNameMode: M,
    displayUserMode: D,
    notificationPositionMode: L,
    textChatNotificationMode: P,
    shouldShowKeybindIndicators: v
  } = (0, o.useStateFromStoresObject)([m.default], () => ({
    avatarSizeMode: m.default.getAvatarSizeMode(),
    displayNameMode: m.default.getDisplayNameMode(),
    displayUserMode: m.default.getDisplayUserMode(),
    notificationPositionMode: m.default.getNotificationPositionMode(),
    textChatNotificationMode: m.default.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: m.default.showKeybindIndicators
  })), b = (0, o.useStateFromStores)([I.default], () => I.default.getOverlayKeybind()), {
    showKeybindIndicators: U
  } = _.default.useExperiment({
    location: "overlay_user_settings"
  }), j = (0, E.isHookModuleTooOld)();

  function F(e) {
    c.default.setEnabled(e, i), g.default.track(C.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - global"
    })
  }

  function G(e) {
    c.default.setEnabled(n, e), g.default.track(C.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - legacy"
    })
  }
  return ! function() {
    let e = R(p);
    !r().isEqual(e, p) && (g.default.track(C.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, e), p = e)
  }(), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.FormSection, {
      className: t,
      tag: d.FormTitleTags.H1,
      title: s ? O.default.Messages.OVERLAY : null,
      children: [!1, (0, a.jsxs)("div", {
        className: A.enableOverlaySection,
        children: [(0, T.isOOPExperimentEnabled)() ? (0, a.jsxs)(d.FormItem, {
          title: O.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: A.enableOverlayItem,
          children: [(0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: n,
            hideBorder: !0,
            onChange: F,
            children: O.default.Messages.ENABLE_INGAME_OVERLAY
          }), (0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: i,
            disabled: j || !n,
            note: j ? O.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: G,
            children: O.default.Messages.ENABLE_LEGACY_OVERLAY
          })]
        }) : (0, a.jsx)(d.FormItem, {
          title: O.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: A.enableOverlayItem,
          children: (0, a.jsx)(d.FormSwitch, {
            className: A.enableSwitch,
            value: n,
            disabled: j,
            note: j ? O.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: F,
            children: O.default.Messages.ENABLE_INGAME_OVERLAY
          })
        }), (0, a.jsx)(d.FormItem, {
          title: O.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
          className: A.enableOverlayItem,
          children: (0, a.jsx)(S.default, {
            disabled: !n,
            defaultValue: null != b ? b.shortcut : [],
            onChange: function(e) {
              l()(null != b, "Keybind should never be undefined"), u.default.setKeybind({
                ...b,
                shortcut: e
              })
            }
          })
        })]
      }), (0, a.jsx)(x, {
        title: O.default.Messages.FORM_LABEL_AVATAR_SIZE,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: O.default.Messages.AVATAR_SIZE_OPTION_LARGE,
            value: C.OverlayAvatarSizes.LARGE
          }, {
            name: O.default.Messages.AVATAR_SIZE_OPTION_SMALL,
            value: C.OverlayAvatarSizes.SMALL
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setAvatarSizeMode(t)
          },
          value: h
        })
      }), (0, a.jsx)(x, {
        title: O.default.Messages.FORM_LABEL_DISPLAY_NAMES,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: O.default.Messages.DISPLAY_OPTION_ALWAYS,
            value: C.OverlayDisplayNames.ALWAYS
          }, {
            name: O.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: C.OverlayDisplayNames.ONLY_WHILE_SPEAKING
          }, {
            name: O.default.Messages.DISPLAY_OPTION_NEVER,
            value: C.OverlayDisplayNames.NEVER
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setDisplayNameMode(t)
          },
          value: M
        })
      }), (0, a.jsx)(x, {
        title: O.default.Messages.FORM_LABEL_DISPLAY_USERS,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: O.default.Messages.DISPLAY_OPTION_ALWAYS,
            value: C.OverlayDisplayUsers.ALWAYS
          }, {
            name: O.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: C.OverlayDisplayUsers.ONLY_WHILE_SPEAKING
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setDisplayUserMode(t)
          },
          value: D
        })
      }), U && (0, a.jsx)(x, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: v,
          onChange: e => c.default.setShowKeybindIndicators(e),
          hideBorder: !0,
          children: O.default.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
        })
      })]
    }), (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: O.default.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
      className: A.notificationSection,
      children: [(0, a.jsx)(x, {
        title: O.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        children: (0, a.jsx)("div", {
          className: A.notificationSettings,
          children: (0, a.jsx)(N.default, {
            position: L,
            onChange: (e, t) => c.default.setNotificationPositionMode(t)
          })
        })
      }), (0, a.jsx)(x, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: L !== C.OverlayNotificationPositions.DISABLED && P === C.OverlayNotificationTextChatTypes.ENABLED,
          disabled: L === C.OverlayNotificationPositions.DISABLED,
          onChange: function() {
            let {
              ENABLED: e,
              DISABLED: t
            } = C.OverlayNotificationTextChatTypes;
            c.default.setTextChatNotificationMode(P === e ? t : e)
          },
          hideBorder: !0,
          children: O.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
        })
      })]
    })]
  })
}