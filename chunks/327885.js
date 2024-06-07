"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
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
  N = s("808506"),
  g = s("237997"),
  f = s("739563"),
  m = s("626135");
s("63063");
var C = s("13140"),
  A = s("981631"),
  h = s("689938"),
  O = s("867541");
let p = R(null);

function R(e) {
  var t;
  let s = g.default.getNotificationPositionMode(),
    a = s !== A.OverlayNotificationPositions.DISABLED,
    n = I.default.getOverlayKeybind(),
    l = I.default.getOverlayChatKeybind();
  return {
    enabled: N.default.enabled,
    notifications_enabled: a,
    notifications_position: a ? s : null,
    text_notifications_mode: g.default.getTextChatNotificationMode(),
    hotkey: null != n ? (0, C.toString)(n.shortcut) : null,
    text_activation_hotkey: null != l ? (0, C.toString)(l.shortcut) : null,
    text_opacity_slider: g.default.getTextWidgetOpacity(),
    old_enabled: null !== (t = null == e ? void 0 : e.enabled) && void 0 !== t ? t : N.default.enabled
  }
}

function M(e) {
  let {
    children: t,
    title: s
  } = e;
  return (0, a.jsx)(d.FormItem, {
    title: s,
    className: O.userSettingsOverlayField,
    children: t
  })
}

function x(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, {
    enabled: n,
    legacyEnabled: i
  } = (0, o.useStateFromStoresObject)([N.default], () => ({
    enabled: N.default.enabled,
    legacyEnabled: N.default.legacyEnabled
  })), {
    avatarSizeMode: C,
    displayNameMode: x,
    displayUserMode: D,
    notificationPositionMode: L,
    textChatNotificationMode: P,
    shouldShowKeybindIndicators: b
  } = (0, o.useStateFromStoresObject)([g.default], () => ({
    avatarSizeMode: g.default.getAvatarSizeMode(),
    displayNameMode: g.default.getDisplayNameMode(),
    displayUserMode: g.default.getDisplayUserMode(),
    notificationPositionMode: g.default.getNotificationPositionMode(),
    textChatNotificationMode: g.default.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: g.default.showKeybindIndicators
  })), v = (0, o.useStateFromStores)([I.default], () => I.default.getOverlayKeybind()), {
    showKeybindIndicators: U
  } = _.default.useExperiment({
    location: "overlay_user_settings"
  }), j = (0, E.isHookModuleTooOld)();

  function G(e) {
    c.default.setEnabled(e, i), m.default.track(A.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - global"
    })
  }

  function F(e) {
    c.default.setEnabled(n, e), m.default.track(A.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - legacy"
    })
  }
  return ! function() {
    let e = R(p);
    !r().isEqual(e, p) && (m.default.track(A.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, e), p = e)
  }(), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.FormSection, {
      className: t,
      tag: d.FormTitleTags.H1,
      title: s ? h.default.Messages.OVERLAY : null,
      children: [!1, (0, a.jsxs)("div", {
        className: O.enableOverlaySection,
        children: [(0, T.isOOPExperimentEnabled)() ? (0, a.jsxs)(d.FormItem, {
          title: h.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: O.enableOverlayItem,
          children: [(0, a.jsx)(d.FormSwitch, {
            className: O.enableSwitch,
            value: n,
            hideBorder: !0,
            onChange: G,
            children: h.default.Messages.ENABLE_INGAME_OVERLAY
          }), (0, a.jsx)(d.FormSwitch, {
            className: O.enableSwitch,
            value: i,
            disabled: j || !n,
            note: j ? h.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: F,
            children: h.default.Messages.ENABLE_LEGACY_OVERLAY
          })]
        }) : (0, a.jsx)(d.FormItem, {
          title: h.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: O.enableOverlayItem,
          children: (0, a.jsx)(d.FormSwitch, {
            className: O.enableSwitch,
            value: n,
            disabled: j,
            note: j ? h.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: G,
            children: h.default.Messages.ENABLE_INGAME_OVERLAY
          })
        }), (0, a.jsx)(d.FormItem, {
          title: h.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
          className: O.enableOverlayItem,
          children: (0, a.jsx)(S.default, {
            disabled: !n,
            defaultValue: null != v ? v.shortcut : [],
            onChange: function(e) {
              l()(null != v, "Keybind should never be undefined"), u.default.setKeybind({
                ...v,
                shortcut: e
              })
            }
          })
        })]
      }), (0, a.jsx)(M, {
        title: h.default.Messages.FORM_LABEL_AVATAR_SIZE,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: h.default.Messages.AVATAR_SIZE_OPTION_LARGE,
            value: A.OverlayAvatarSizes.LARGE
          }, {
            name: h.default.Messages.AVATAR_SIZE_OPTION_SMALL,
            value: A.OverlayAvatarSizes.SMALL
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setAvatarSizeMode(t)
          },
          value: C
        })
      }), (0, a.jsx)(M, {
        title: h.default.Messages.FORM_LABEL_DISPLAY_NAMES,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: h.default.Messages.DISPLAY_OPTION_ALWAYS,
            value: A.OverlayDisplayNames.ALWAYS
          }, {
            name: h.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: A.OverlayDisplayNames.ONLY_WHILE_SPEAKING
          }, {
            name: h.default.Messages.DISPLAY_OPTION_NEVER,
            value: A.OverlayDisplayNames.NEVER
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setDisplayNameMode(t)
          },
          value: x
        })
      }), (0, a.jsx)(M, {
        title: h.default.Messages.FORM_LABEL_DISPLAY_USERS,
        children: (0, a.jsx)(d.RadioGroup, {
          options: [{
            name: h.default.Messages.DISPLAY_OPTION_ALWAYS,
            value: A.OverlayDisplayUsers.ALWAYS
          }, {
            name: h.default.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: A.OverlayDisplayUsers.ONLY_WHILE_SPEAKING
          }],
          onChange: e => {
            let {
              value: t
            } = e;
            return c.default.setDisplayUserMode(t)
          },
          value: D
        })
      }), U && (0, a.jsx)(M, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: b,
          onChange: e => c.default.setShowKeybindIndicators(e),
          hideBorder: !0,
          children: h.default.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
        })
      })]
    }), (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: h.default.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
      className: O.notificationSection,
      children: [(0, a.jsx)(M, {
        title: h.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        children: (0, a.jsx)("div", {
          className: O.notificationSettings,
          children: (0, a.jsx)(f.default, {
            position: L,
            onChange: (e, t) => c.default.setNotificationPositionMode(t)
          })
        })
      }), (0, a.jsx)(M, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: L !== A.OverlayNotificationPositions.DISABLED && P === A.OverlayNotificationTextChatTypes.ENABLED,
          disabled: L === A.OverlayNotificationPositions.DISABLED,
          onChange: function() {
            let {
              ENABLED: e,
              DISABLED: t
            } = A.OverlayNotificationTextChatTypes;
            c.default.setTextChatNotificationMode(P === e ? t : e)
          },
          hideBorder: !0,
          children: h.default.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
        })
      })]
    })]
  })
}