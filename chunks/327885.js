t.d(s, {
  Z: function() {
    return D
  }
});
var n = t(735250);
t(470079);
var a = t(512722),
  i = t.n(a),
  r = t(392711),
  o = t.n(r),
  l = t(442837),
  c = t(481060),
  d = t(660216),
  _ = t(13245),
  E = t(825209),
  u = t(887278),
  T = t(630699),
  S = t(658785),
  I = t(556296),
  N = t(808506),
  C = t(237997),
  A = t(739563),
  m = t(626135);
t(63063);
var O = t(13140),
  g = t(981631),
  h = t(689938),
  R = t(564939);
let p = x(null);

function x(e) {
  var s;
  let t = C.Z.getNotificationPositionMode(),
    n = t !== g._vf.DISABLED,
    a = I.Z.getOverlayKeybind(),
    i = I.Z.getOverlayChatKeybind();
  return {
    enabled: N.Z.enabled,
    notifications_enabled: n,
    notifications_position: n ? t : null,
    text_notifications_mode: C.Z.getTextChatNotificationMode(),
    hotkey: null != a ? (0, O.BB)(a.shortcut) : null,
    text_activation_hotkey: null != i ? (0, O.BB)(i.shortcut) : null,
    text_opacity_slider: C.Z.getTextWidgetOpacity(),
    old_enabled: null !== (s = null == e ? void 0 : e.enabled) && void 0 !== s ? s : N.Z.enabled
  }
}

function M(e) {
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

function D(e) {
  let {
    className: s,
    showHeader: t = !0
  } = e, {
    enabled: a,
    legacyEnabled: r
  } = (0, l.cj)([N.Z], () => ({
    enabled: N.Z.enabled,
    legacyEnabled: N.Z.legacyEnabled
  })), {
    avatarSizeMode: O,
    displayNameMode: D,
    displayUserMode: f,
    notificationPositionMode: L,
    textChatNotificationMode: P,
    shouldShowKeybindIndicators: Z
  } = (0, l.cj)([C.Z], () => ({
    avatarSizeMode: C.Z.getAvatarSizeMode(),
    displayNameMode: C.Z.getDisplayNameMode(),
    displayUserMode: C.Z.getDisplayUserMode(),
    notificationPositionMode: C.Z.getNotificationPositionMode(),
    textChatNotificationMode: C.Z.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: C.Z.showKeybindIndicators
  })), v = (0, l.e7)([I.Z], () => I.Z.getOverlayKeybind()), {
    showKeybindIndicators: b
  } = S.Z.useExperiment({
    location: "overlay_user_settings"
  }), j = (0, u.$1)();

  function U(e) {
    _.Z.setEnabled(e, r), m.default.track(g.rMx.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - global"
    })
  }

  function B(e) {
    _.Z.setEnabled(a, e), m.default.track(g.rMx.OVERLAY_TOGGLED, {
      enabled: e,
      setting_type: "overlay toggled - legacy"
    })
  }
  return ! function() {
    let e = x(p);
    !o().isEqual(e, p) && (m.default.track(g.rMx.OVERLAY_SETTINGS_UPDATED, e), p = e)
  }(), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(c.FormSection, {
      className: s,
      tag: c.FormTitleTags.H1,
      title: t ? h.Z.Messages.OVERLAY : null,
      children: [!1, (0, n.jsxs)("div", {
        className: R.enableOverlaySection,
        children: [(0, T.H)() ? (0, n.jsxs)(c.FormItem, {
          title: h.Z.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: R.enableOverlayItem,
          children: [(0, n.jsx)(c.FormSwitch, {
            className: R.enableSwitch,
            value: a,
            hideBorder: !0,
            onChange: U,
            children: h.Z.Messages.ENABLE_INGAME_OVERLAY
          }), (0, n.jsx)(c.FormSwitch, {
            className: R.enableSwitch,
            value: r,
            disabled: j || !a,
            note: j ? h.Z.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: B,
            children: h.Z.Messages.ENABLE_LEGACY_OVERLAY
          })]
        }) : (0, n.jsx)(c.FormItem, {
          title: h.Z.Messages.SETTINGS_GAMES_ENABLE_OVERLAY_LABEL,
          className: R.enableOverlayItem,
          children: (0, n.jsx)(c.FormSwitch, {
            className: R.enableSwitch,
            value: a,
            disabled: j,
            note: j ? h.Z.Messages.OVERLAY_DISABLED_OLD_CLIENT : null,
            hideBorder: !0,
            onChange: U,
            children: h.Z.Messages.ENABLE_INGAME_OVERLAY
          })
        }), (0, n.jsx)(c.FormItem, {
          title: h.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK,
          className: R.enableOverlayItem,
          children: (0, n.jsx)(E.Z, {
            disabled: !a,
            defaultValue: null != v ? v.shortcut : [],
            onChange: function(e) {
              i()(null != v, "Keybind should never be undefined"), d.Z.setKeybind({
                ...v,
                shortcut: e
              })
            }
          })
        })]
      }), (0, n.jsx)(M, {
        title: h.Z.Messages.FORM_LABEL_AVATAR_SIZE,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
            name: h.Z.Messages.AVATAR_SIZE_OPTION_LARGE,
            value: g.ipw.LARGE
          }, {
            name: h.Z.Messages.AVATAR_SIZE_OPTION_SMALL,
            value: g.ipw.SMALL
          }],
          onChange: e => {
            let {
              value: s
            } = e;
            return _.Z.setAvatarSizeMode(s)
          },
          value: O
        })
      }), (0, n.jsx)(M, {
        title: h.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
            name: h.Z.Messages.DISPLAY_OPTION_ALWAYS,
            value: g.wC$.ALWAYS
          }, {
            name: h.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: g.wC$.ONLY_WHILE_SPEAKING
          }, {
            name: h.Z.Messages.DISPLAY_OPTION_NEVER,
            value: g.wC$.NEVER
          }],
          onChange: e => {
            let {
              value: s
            } = e;
            return _.Z.setDisplayNameMode(s)
          },
          value: D
        })
      }), (0, n.jsx)(M, {
        title: h.Z.Messages.FORM_LABEL_DISPLAY_USERS,
        children: (0, n.jsx)(c.RadioGroup, {
          options: [{
            name: h.Z.Messages.DISPLAY_OPTION_ALWAYS,
            value: g.OYC.ALWAYS
          }, {
            name: h.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING,
            value: g.OYC.ONLY_WHILE_SPEAKING
          }],
          onChange: e => {
            let {
              value: s
            } = e;
            return _.Z.setDisplayUserMode(s)
          },
          value: f
        })
      }), b && (0, n.jsx)(M, {
        children: (0, n.jsx)(c.FormSwitch, {
          value: Z,
          onChange: e => _.Z.setShowKeybindIndicators(e),
          hideBorder: !0,
          children: h.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
        })
      })]
    }), (0, n.jsxs)(c.FormSection, {
      tag: c.FormTitleTags.H1,
      title: h.Z.Messages.OVERLAY_NOTIFICATIONS_SETTINGS,
      className: R.notificationSection,
      children: [(0, n.jsx)(M, {
        title: h.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        children: (0, n.jsx)("div", {
          className: R.notificationSettings,
          children: (0, n.jsx)(A.Z, {
            position: L,
            onChange: (e, s) => _.Z.setNotificationPositionMode(s)
          })
        })
      }), (0, n.jsx)(M, {
        children: (0, n.jsx)(c.FormSwitch, {
          value: L !== g._vf.DISABLED && P === g.Ypu.ENABLED,
          disabled: L === g._vf.DISABLED,
          onChange: function() {
            let {
              ENABLED: e,
              DISABLED: s
            } = g.Ypu;
            _.Z.setTextChatNotificationMode(P === e ? s : e)
          },
          hideBorder: !0,
          children: h.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
        })
      })]
    })]
  })
}