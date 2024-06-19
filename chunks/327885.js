t.d(s, {
  Z: function() {
    return p
  }
});
var n = t(735250);
t(470079);
var i = t(512722),
  a = t.n(i),
  l = t(392711),
  r = t.n(l),
  o = t(442837),
  c = t(481060),
  E = t(660216),
  d = t(13245),
  _ = t(825209),
  T = t(887278),
  S = t(630699),
  u = t(658785),
  I = t(556296),
  N = t(808506),
  A = t(237997),
  C = t(739563),
  O = t(626135);
t(63063);
var m = t(13140),
  h = t(981631),
  g = t(689938),
  R = t(564939);
let M = x(null);

function x(e) {
  var s;
  let t = A.Z.getNotificationPositionMode(),
    n = t !== h._vf.DISABLED,
    i = I.Z.getOverlayKeybind(),
    a = I.Z.getOverlayChatKeybind();
  return {
    enabled: N.Z.enabled,
    notifications_enabled: n,
    notifications_position: n ? t : null,
    text_notifications_mode: A.Z.getTextChatNotificationMode(),
    hotkey: null != i ? (0, m.BB)(i.shortcut) : null,
    text_activation_hotkey: null != a ? (0, m.BB)(a.shortcut) : null,
    text_opacity_slider: A.Z.getTextWidgetOpacity(),
    old_enabled: null !== (s = null == e ? void 0 : e.enabled) && void 0 !== s ? s : N.Z.enabled
  }
}

function D(e) {
  let {
    children: s,
    title: t
  } = e;
  return (0, n.jsx)(c.FormItem, {
    title: t,
    className: R.userSettingsOverlayField,
    children: s
  })
}

function p(e) {
  let {
    className: s,
    showHeader: t = !0
  } = e, {
    enabled: i,
    legacyEnabled: l
  } = (0, o.cj)([N.Z], () => ({
    enabled: N.Z.enabled,
    legacyEnabled: N.Z.legacyEnabled
  })), {
    avatarSizeMode: m,
    displayNameMode: p,
    displayUserMode: L,
    notificationPositionMode: P,
    textChatNotificationMode: Z,
    shouldShowKeybindIndicators: f
  } = (0, o.cj)([A.Z], () => ({
    avatarSizeMode: A.Z.getAvatarSizeMode(),
    displayNameMode: A.Z.getDisplayNameMode(),
    displayUserMode: A.Z.getDisplayUserMode(),
    notificationPositionMode: A.Z.getNotificationPositionMode(),
    textChatNotificationMode: A.Z.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: A.Z.showKeybindIndicators
  })), v = (0, o.e7)([I.Z], () => I.Z.getOverlayKeybind()), {
    showKeybindIndicators: j
  } = u.Z.useExperiment({
    location: "overlay_user_settings"
  }), U = (0, T.$1)();

  function B(e) {
    d.Z.setEnabled(e, l), O.default.track(h.rMx.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - global"
    })
  }

  function b(e) {
    d.Z.setEnabled(i, e), O.default.track(h.rMx.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - legacy"
    })
  }
  return ! function() {
    let e = x(M);
    !r().isEqual(e, M) && (O.default.track(h.rMx.OVERLAY_SETTINGS_UPDATED, e), M = e)
  }(), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.FormSection, {
      className: s,
      tag: c.FormTitleTags.H1,
      title: t ? g.Z.Messages.OVERLAY : null,
      children: [!1, (0, n.jsxs)("div", {
        className: R.enableOverlaySection,
        children: [(0, S.H)() ? (0, n.jsxs)(c.FormItem, {
          title: g.Z.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: R.enableOverlayItem,
          children: [(0, n.jsx)(c.FormSwitch, {
            className: R.enableSwitch,
            value: i,
            hideBorder: !0,
            onChange: B,
            children: g.Z.Messages.ENABLE_INGAME_OVERLAY
          }), (0, n.jsx)(c.FormSwitch, {
            className: R.enableSwitch,
            value: l,
            disabled: U || !i,
            note: U ? g.Z.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: b,
            children: g.Z.Messages.ENABLE_LEGACY_OVERLAY
          })]
        }) : (0, n.jsx)(c.FormItem, {
          title: g.Z.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: R.enableOverlayItem,
          children: (0, n.jsx)(c.FormSwitch, {
            className: R.enableSwitch,
            value: i,
            disabled: U,
            note: U ? g.Z.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: B,
            children: g.Z.Messages.ENABLE_INGAME_OVERLAY
          })
        }), (0, n.jsx)(c.FormItem, {
          title: g.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
          className: R.enableOverlayItem,
          children: (0, n.jsx)(_.Z, {
            disabled: !i,
            defaultValue: null != v ? v.shortcut : [],
            onChange: function(e) {
              a()(null != v, "Keybind should never be undefined"), E.Z.setKeybind({
                ...v,
                shortcut: e
              })
            }
          })
        })]
      }), (0, n.jsx)(D, {
        title: g.Z.Messages.FORM_LABEL_AVATAR_SIZE,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
            name: g.Z.Messages.AVATAR_SIZE_OPTION_LARGE,
            value: h.ipw.LARGE
          }, {
            name: g.Z.Messages.AVATAR_SIZE_OPTION_SMALL,
            value: h.ipw.SMALL
          }],
          onChange: e => {
            let {
              value: s
            } = e;
            return d.Z.setAvatarSizeMode(s)
          },
          value: m
        })
      }), (0, n.jsx)(D, {
        title: g.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
            name: g.Z.Messages.DISPLAY_OPTION_ALWAYS,
            value: h.wC$.ALWAYS
          }, {
            name: g.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: h.wC$.ONLY_WHILE_SPEAKING
          }, {
            name: g.Z.Messages.DISPLAY_OPTION_NEVER,
            value: h.wC$.NEVER
          }],
          onChange: e => {
            let {
              value: s
            } = e;
            return d.Z.setDisplayNameMode(s)
          },
          value: p
        })
      }), (0, n.jsx)(D, {
        title: g.Z.Messages.FORM_LABEL_DISPLAY_USERS,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
            name: g.Z.Messages.DISPLAY_OPTION_ALWAYS,
            value: h.OYC.ALWAYS
          }, {
            name: g.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: h.OYC.ONLY_WHILE_SPEAKING
          }],
          onChange: e => {
            let {
              value: s
            } = e;
            return d.Z.setDisplayUserMode(s)
          },
          value: L
        })
      }), j && (0, n.jsx)(D, {
        children: (0, n.jsx)(c.FormSwitch, {
          value: f,
          onChange: e => d.Z.setShowKeybindIndicators(e),
          hideBorder: !0,
          children: g.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
        })
      })]
    }), (0, n.jsxs)(c.FormSection, {
      tag: c.FormTitleTags.H1,
      title: g.Z.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
      className: R.notificationSection,
      children: [(0, n.jsx)(D, {
        title: g.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        children: (0, n.jsx)("div", {
          className: R.notificationSettings,
          children: (0, n.jsx)(C.Z, {
            position: P,
            onChange: (e, s) => d.Z.setNotificationPositionMode(s)
          })
        })
      }), (0, n.jsx)(D, {
        children: (0, n.jsx)(c.FormSwitch, {
          value: P !== h._vf.DISABLED && Z === h.Ypu.ENABLED,
          disabled: P === h._vf.DISABLED,
          onChange: function() {
            let {
              ENABLED: e,
              DISABLED: s
            } = h.Ypu;
            d.Z.setTextChatNotificationMode(Z === e ? s : e)
          },
          hideBorder: !0,
          children: g.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
        })
      })]
    })]
  })
}