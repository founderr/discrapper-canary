"use strict";
n.d(t, {
  Z: function() {
    return A
  }
}), n(47120);
var i, s, l = n(735250),
  o = n(470079),
  a = n(442837),
  r = n(481060),
  c = n(13245),
  d = n(906467),
  u = n(556296),
  h = n(237997),
  p = n(285952),
  f = n(739563),
  E = n(998502),
  g = n(13140),
  m = n(658785),
  Z = n(981631),
  I = n(689938),
  S = n(793365),
  _ = n(331651);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).GENERAL = "GENERAL", s.VOICE = "VOICE", s.DEVELOPER = "DEVELOPER";
let v = () => [{
    value: Z.ipw.LARGE,
    name: I.Z.Messages.AVATAR_SIZE_OPTION_LARGE
  }, {
    value: Z.ipw.SMALL,
    name: I.Z.Messages.AVATAR_SIZE_OPTION_SMALL
  }],
  x = () => [{
    value: Z.wC$.ALWAYS,
    name: I.Z.Messages.DISPLAY_OPTION_ALWAYS
  }, {
    value: Z.wC$.ONLY_WHILE_SPEAKING,
    name: I.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
  }, {
    value: Z.wC$.NEVER,
    name: I.Z.Messages.DISPLAY_OPTION_NEVER
  }],
  N = () => [{
    value: Z.OYC.ALWAYS,
    name: I.Z.Messages.DISPLAY_OPTION_ALWAYS
  }, {
    value: Z.OYC.ONLY_WHILE_SPEAKING,
    name: I.Z.Messages.DISPLAY_OPTION_ONLY_WHILE_SPEAKING
  }];

function T() {
  let e = h.Z.getNotificationPositionMode(),
    t = e !== Z._vf.DISABLED,
    n = u.Z.getOverlayKeybind(),
    i = u.Z.getOverlayChatKeybind();
  c.Z.track(Z.rMx.OVERLAY_SETTINGS_UPDATED, {
    enabled: !0,
    notifications_enabled: t,
    notifications_position: t ? e : null,
    text_notifications_mode: h.Z.getTextChatNotificationMode(),
    text_opacity_slider: h.Z.getTextWidgetOpacity(),
    hotkey: null != n ? (0, g.BB)(n.shortcut) : null,
    text_activation_hotkey: null != i ? (0, g.BB)(i.shortcut) : null
  })
}
class O extends o.PureComponent {
  componentDidMount() {
    c.Z.track(Z.rMx.SETTINGS_PANE_VIEWED, {
      settings_type: "overlay",
      destination_pane: "OVERLAY SETTINGS",
      origin_pane: null
    })
  }
  handleChangeNotificationPositionMode(e, t) {
    c.Z.setNotificationPositionMode(t), T()
  }
  handleChangeAvatarSizeMode(e) {
    let {
      value: t
    } = e;
    c.Z.setAvatarSizeMode(t)
  }
  handleChangeDisplayNameMode(e) {
    let {
      value: t
    } = e;
    c.Z.setDisplayNameMode(t)
  }
  handleChangeDisplayUserMode(e) {
    let {
      value: t
    } = e;
    c.Z.setDisplayUserMode(t)
  }
  renderHeader() {
    return (0, l.jsxs)(p.Z, {
      direction: p.Z.Direction.VERTICAL,
      grow: 0,
      shrink: 0,
      className: S.header,
      children: [(0, l.jsxs)(p.Z, {
        children: [(0, l.jsx)(r.FormTitle, {
          className: S.headerTitle,
          tag: "h1",
          children: I.Z.Messages.OVERLAY_SETTINGS_TITLE
        }), (0, l.jsx)(r.ModalCloseButton, {
          className: S.headerClose,
          onClick: this.props.onClose
        })]
      }), this.renderTabBar()]
    })
  }
  renderTabBar() {
    let {
      selectedSection: e
    } = this.state, t = d.Z.isDeveloper ? (0, l.jsx)(r.TabBar.Item, {
      id: "DEVELOPER",
      className: S.tabBarItem,
      children: "Developer"
    }) : null;
    return (0, l.jsxs)(r.TabBar, {
      selectedItem: e,
      type: "top",
      className: S.__invalid_tabBar,
      onItemSelect: this.handleSelectSection,
      children: [(0, l.jsx)(r.TabBar.Item, {
        id: "GENERAL",
        className: S.tabBarItem,
        children: I.Z.Messages.OVERLAY_SETTINGS_GENERAL_TAB
      }), (0, l.jsx)(r.TabBar.Item, {
        id: "VOICE",
        className: S.tabBarItem,
        children: I.Z.Messages.OVERLAY_SETTINGS_VOICE_TAB
      }), t]
    })
  }
  renderBody() {
    let e;
    let {
      selectedSection: t
    } = this.state;
    switch (t) {
      case "DEVELOPER":
        e = this.renderDeveloperSettings();
        break;
      case "VOICE":
        e = this.renderVoiceSettings();
        break;
      default:
        e = this.renderGeneralSettings()
    }
    return (0, l.jsx)(r.ModalContent, {
      className: S.content,
      children: e
    }, t)
  }
  renderGeneralSettings() {
    let {
      textChatNotificationMode: e,
      notificationPositionMode: t,
      shouldShowKeybindIndicators: n,
      showKeybindIndicators: i
    } = this.props, s = t !== Z._vf.DISABLED;
    return (0, l.jsxs)(o.Fragment, {
      children: [(0, l.jsx)(r.FormItem, {
        title: I.Z.Messages.FORM_LABEL_NOTIFICATION_POSITION,
        className: _.marginBottom20,
        children: (0, l.jsx)(f.Z, {
          position: t,
          onChange: this.handleChangeNotificationPositionMode
        })
      }), (0, l.jsx)(r.FormSwitch, {
        value: s && e === Z.Ypu.ENABLED,
        onChange: this.handleToggleTextChatNotifications,
        disabled: !s,
        hideBorder: !0,
        children: I.Z.Messages.FORM_LABEL_OVERLAY_TEXT_CHAT_NOTIFICATIONS
      }), i && (0, l.jsx)(r.FormSwitch, {
        value: n,
        onChange: e => c.Z.setShowKeybindIndicators(e),
        hideBorder: !0,
        children: I.Z.Messages.FORM_LABEL_OVERLAY_SHOW_MUTE_DEAFEN_KEYBINDS
      })]
    })
  }
  renderVoiceSettings() {
    let {
      avatarSizeMode: e,
      displayNameMode: t,
      displayUserMode: n
    } = this.props;
    return (0, l.jsxs)(o.Fragment, {
      children: [(0, l.jsx)(r.FormItem, {
        title: I.Z.Messages.FORM_LABEL_AVATAR_SIZE,
        className: _.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeAvatarSizeMode,
          options: v(),
          value: e,
          size: r.RadioGroup.Sizes.SMALL
        })
      }), (0, l.jsx)(r.FormItem, {
        title: I.Z.Messages.FORM_LABEL_DISPLAY_NAMES,
        className: _.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeDisplayNameMode,
          options: x(),
          value: t,
          size: r.RadioGroup.Sizes.SMALL
        })
      }), (0, l.jsx)(r.FormItem, {
        title: I.Z.Messages.FORM_LABEL_DISPLAY_USERS,
        className: _.marginBottom20,
        children: (0, l.jsx)(r.RadioGroup, {
          onChange: this.handleChangeDisplayUserMode,
          options: N(),
          value: n,
          size: r.RadioGroup.Sizes.SMALL
        })
      })]
    })
  }
  renderDeveloperSettings() {
    return (0, l.jsx)(o.Fragment, {
      children: (0, l.jsx)(r.FormItem, {
        title: "Crashes",
        className: _.marginBottom20,
        children: (0, l.jsx)(r.SingleSelect, {
          value: void 0,
          options: [{
            value: void 0,
            label: "Native crash"
          }, {
            value: 0,
            label: "Abort()"
          }, {
            value: 1,
            label: "SIGSEGV()"
          }, {
            value: 2,
            label: "EXCEPTION_ACCESS_VIOLATION"
          }, {
            value: 3,
            label: "RaiseFailFastException"
          }, {
            value: 4,
            label: "Out of Memory"
          }],
          onChange: e => null != e && E.ZP.crash(e)
        })
      })
    })
  }
  render() {
    return (0, l.jsxs)(r.ModalRoot, {
      "aria-label": I.Z.Messages.OVERLAY_SETTINGS_TITLE,
      transitionState: r.ModalTransitionState.ENTERED,
      children: [this.renderHeader(), this.renderBody()]
    })
  }
  constructor(...e) {
    super(...e), C(this, "state", {
      selectedSection: "GENERAL"
    }), C(this, "handleSelectSection", e => {
      this.setState({
        selectedSection: e
      })
    }), C(this, "handleToggleTextChatNotifications", () => {
      let {
        ENABLED: e,
        DISABLED: t
      } = Z.Ypu, n = this.props.textChatNotificationMode === e ? t : e;
      c.Z.setTextChatNotificationMode(n), T()
    })
  }
}

function A(e) {
  let {
    onClose: t
  } = e, {
    avatarSizeMode: n,
    displayNameMode: i,
    displayUserMode: s,
    notificationPositionMode: o,
    textChatNotificationMode: r,
    shouldShowKeybindIndicators: c
  } = (0, a.cj)([h.Z], () => ({
    avatarSizeMode: h.Z.getAvatarSizeMode(),
    displayNameMode: h.Z.getDisplayNameMode(),
    displayUserMode: h.Z.getDisplayUserMode(),
    notificationPositionMode: h.Z.getNotificationPositionMode(),
    textChatNotificationMode: h.Z.getTextChatNotificationMode(),
    shouldShowKeybindIndicators: h.Z.showKeybindIndicators
  })), {
    showKeybindIndicators: d
  } = m.Z.useExperiment({
    location: "Overlay Settings"
  });
  return (0, l.jsx)(O, {
    onClose: t,
    avatarSizeMode: n,
    displayNameMode: i,
    displayUserMode: s,
    notificationPositionMode: o,
    textChatNotificationMode: r,
    shouldShowKeybindIndicators: c,
    showKeybindIndicators: d
  })
}