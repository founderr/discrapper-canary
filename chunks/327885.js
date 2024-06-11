"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
  }
});
var a = s("735250");
s("470079");
var n = s("512722"),
  i = s.n(n),
  l = s("392711"),
  r = s.n(l),
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
var A = s("13140"),
  C = s("981631"),
  O = s("689938"),
  h = s("867541");
let R = p(null);

function p(e) {
  var t;
  let s = g.default.getNotificationPositionMode(),
    a = s !== C.OverlayNotificationPositions.DISABLED,
    n = I.default.getOverlayKeybind(),
    i = I.default.getOverlayChatKeybind();
  return {
    enabled: N.default.enabled,
    notifications_enabled: a,
    notifications_position: a ? s : null,
    text_notifications_mode: g.default.getTextChatNotificationMode(),
    hotkey: null != n ? (0, A.toString)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, A.toString)(i.shortcut) : null,
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
    className: h.userSettingsOverlayField,
    children: t
  })
}

function D(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, {
    enabled: n,
    legacyEnabled: l
  } = (0, o.useStateFromStoresObject)([N.default], () => ({
    enabled: N.default.enabled,
    legacyEnabled: N.default.legacyEnabled
  })), {
    avatarSizeMode: A,
    displayNameMode: D,
    displayUserMode: x,
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
    c.default.setEnabled(e, l), m.default.track(C.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - global"
    })
  }

  function F(e) {
    c.default.setEnabled(n, e), m.default.track(C.AnalyticEvents.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - legacy"
    })
  }
  return ! function() {
    let e = p(R);
    !r().isEqual(e, R) && (m.default.track(C.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, e), R = e)
  }(), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(d.FormSection, {
      className: t,
      tag: d.FormTitleTags.H1,
      title: s ? O.default.Messages.OVERLAY : null,
      children: [!1, (0, a.jsxs)("div", {
        className: h.enableOverlaySection,
        children: [(0, T.isOOPExperimentEnabled)() ? (0, a.jsxs)(d.FormItem, {
          title: O.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: h.enableOverlayItem,
          children: [(0, a.jsx)(d.FormSwitch, {
            className: h.enableSwitch,
            value: n,
            hideBorder: !0,
            onChange: G,
            children: O.default.Messages.ENABLE_INGAME_OVERLAY
          }), (0, a.jsx)(d.FormSwitch, {
            className: h.enableSwitch,
            value: l,
            disabled: j || !n,
            note: j ? O.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: F,
            children: O.default.Messages.ENABLE_LEGACY_OVERLAY
          })]
        }) : (0, a.jsx)(d.FormItem, {
          title: O.default.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: h.enableOverlayItem,
          children: (0, a.jsx)(d.FormSwitch, {
            className: h.enableSwitch,
            value: n,
            disabled: j,
            note: j ? O.default.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: G,
            children: O.default.Messages.ENABLE_INGAME_OVERLAY
          })
        }), (0, a.jsx)(d.FormItem, {
          title: O.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
          className: h.enableOverlayItem,
          children: (0, a.jsx)(S.default, {
            disabled: !n,
            defaultValue: null != v ? v.shortcut : [],
            onChange: function(e) {
              i()(null != v, "Keybind should never be undefined"), u.default.setKeybind({
                ...v,
                shortcut: e
              })
            }
          })
        })]
      }), (0, a.jsx)(M, {
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
          value: A
        })
      }), (0, a.jsx)(M, {
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
          value: D
        })
      }), (0, a.jsx)(M, {
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
          value: x
        })
      }), U && (0, a.jsx)(M, {
        children: (0, a.jsx)(d.FormSwitch, {
          value: b,
          onChange: e => c.default.setShowKeybindIndicators(e),
          hideBorder: !0,
          children: O.default.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
        })
      })]
    }), (0, a.jsxs)(d.FormSection, {
      tag: d.FormTitleTags.H1,
      title: O.default.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
      className: h.notificationSection,
      children: [(0, a.jsx)(M, {
        title: O.default.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        children: (0, a.jsx)("div", {
          className: h.notificationSettings,
          children: (0, a.jsx)(f.default, {
            position: L,
            onChange: (e, t) => c.default.setNotificationPositionMode(t)
          })
        })
      }), (0, a.jsx)(M, {
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