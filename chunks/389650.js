"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Y
  }
}), s("47120"), s("653041");
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  l = s.n(i),
  r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("692547"),
  c = s("481060"),
  S = s("660216"),
  E = s("225433"),
  T = s("825209"),
  _ = s("721383"),
  I = s("612226"),
  N = s("714338"),
  g = s("924557"),
  f = s("74299"),
  m = s("131951"),
  A = s("556296"),
  C = s("808506"),
  O = s("285952"),
  h = s("474333"),
  R = s("63063"),
  p = s("358085"),
  M = s("13140"),
  D = s("210887"),
  x = s("659947"),
  L = s("981631"),
  P = s("420212"),
  b = s("689938"),
  v = s("996196"),
  U = s("164149"),
  j = s("611273");

function G(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function F(e) {
  let {
    children: t
  } = e;
  return t([I.KeybindGroup.MESSAGE, I.KeybindGroup.NAVIGATION, I.KeybindGroup.DND, I.KeybindGroup.CHAT, I.KeybindGroup.VOICE_AND_VIDEO, I.KeybindGroup.MISCELLANEOUS])
}
let B = o()((0, I.getDefaultLayoutContent)()).filter(e => e.description !== b.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
  y = d.default.connectStores([D.default], () => ({
    theme: D.default.theme
  }))(c.EmptyState);
class V extends n.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = M.toString(e.shortcut);
    return N.default.hasBind(t) ? (0, a.jsx)(c.FormText, {
      className: v.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      style: {
        color: u.default.unsafe_rawColors.RED_400.css
      },
      children: b.default.Messages.KEYBIND_CONFLICT
    }) : P.NavigationShortcuts.has(t) ? (0, a.jsx)(c.FormText, {
      className: v.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      style: {
        color: u.default.unsafe_rawColors.RED_400.css
      },
      children: b.default.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
        keyboardNavArticle: R.default.getArticleURL(L.HelpdeskArticles.KEYBOARD_NAVIGATION)
      })
    }) : (0, a.jsx)(c.FormText, {
      className: v.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      children: this.props.keybindDescriptions[e.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, a.jsxs)(O.default, {
      direction: O.default.Direction.VERTICAL,
      className: l()(v.keybindGroup, U.card),
      children: [!e && (0, a.jsx)(E.default, {
        "aria-label": b.default.Messages.REMOVE_KEYBIND,
        className: v.removeKeybind,
        onClick: this.handleDeleteKeybind,
        look: E.default.Looks.FILLED
      }), (0, a.jsxs)(O.default, {
        className: j.marginBottom8,
        children: [(0, a.jsx)(O.default.Child, {
          basis: "45%",
          children: (0, a.jsx)(c.FormItem, {
            title: b.default.Messages.USER_SETTINGS_KEYBINDS_ACTION,
            className: v.item,
            children: (0, a.jsx)(c.SingleSelect, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: e
            })
          })
        }), (0, a.jsx)(O.default.Child, {
          basis: "45%",
          children: (0, a.jsx)(c.FormItem, {
            title: b.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
            className: v.item,
            children: (0, a.jsx)(T.default, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), (0, a.jsx)(O.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(c.FormItem, {
            className: v.switch,
            children: (0, a.jsx)(c.Tooltip, {
              text: b.default.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
              children: e => (0, a.jsx)("div", {
                ...e,
                children: (0, a.jsx)(c.Switch, {
                  checked: t,
                  onChange: this.handleEnableDisable
                })
              })
            })
          })
        })]
      }), (0, a.jsx)(O.default.Child, {
        children: this.renderMessage()
      }), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    if (e === L.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL) return (0, a.jsx)(x.default, {
      keybind: this.props.keybind
    })
  }
  constructor(...e) {
    super(...e), G(this, "handleActionChanged", e => {
      S.default.setKeybind({
        ...this.props.keybind,
        action: e
      })
    }), G(this, "handleShortcutChange", e => {
      S.default.setKeybind({
        ...this.props.keybind,
        shortcut: e
      })
    }), G(this, "handleDeleteKeybind", () => {
      S.default.deleteKeybind(this.props.keybind.id)
    }), G(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      S.default.setKeybind({
        ...this.props.keybind,
        enabled: !e.enabled
      })
    })
  }
}
class H extends n.PureComponent {
  componentDidMount() {
    S.default.enableAll(!1)
  }
  componentWillUnmount() {
    S.default.enableAll(!0)
  }
  get keybindActionTypes() {
    let {
      overlaySupported: e,
      canGoLive: t,
      allowSoundboard: s,
      enableClips: a
    } = this.props, n = [{
      value: L.GlobalKeybindActions.UNASSIGNED,
      label: b.default.Messages.KEYBIND_UNASSIGNED
    }, {
      value: L.GlobalKeybindActions.PUSH_TO_TALK,
      label: b.default.Messages.KEYBIND_PUSH_TO_TALK
    }, {
      value: L.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY,
      label: b.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
    }, {
      value: L.GlobalKeybindActions.PUSH_TO_MUTE,
      label: b.default.Messages.KEYBIND_PUSH_TO_MUTE
    }, {
      value: L.GlobalKeybindActions.TOGGLE_MUTE,
      label: b.default.Messages.KEYBIND_TOGGLE_MUTE
    }, {
      value: L.GlobalKeybindActions.TOGGLE_DEAFEN,
      label: b.default.Messages.KEYBIND_TOGGLE_DEAFEN
    }, {
      value: L.GlobalKeybindActions.TOGGLE_VOICE_MODE,
      label: b.default.Messages.KEYBIND_TOGGLE_VOICE_MODE
    }, {
      value: L.GlobalKeybindActions.TOGGLE_STREAMER_MODE,
      label: b.default.Messages.KEYBIND_TOGGLE_STREAM_MODE
    }];
    return e && (n.push({
      value: L.GlobalKeybindActions.TOGGLE_OVERLAY,
      label: b.default.Messages.KEYBIND_TOGGLE_OVERLAY
    }), n.push({
      value: L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK,
      label: b.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
    }), n.push({
      value: L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: b.default.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
    })), t && (0, p.isWindows)() && n.push({
      value: L.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING,
      label: b.default.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
    }), (0, p.isDesktop)() && (n.push({
      value: L.GlobalKeybindActions.NAVIGATE_BACK,
      label: b.default.Messages.KEYBIND_NAVIGATE_BACK
    }, {
      value: L.GlobalKeybindActions.NAVIGATE_FORWARD,
      label: b.default.Messages.KEYBIND_NAVIGATE_FORWARD
    }, {
      value: L.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL,
      label: b.default.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
    }, {
      value: L.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL,
      label: b.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
    }), s && n.push({
      value: L.GlobalKeybindActions.SOUNDBOARD,
      label: b.default.Messages.KEYBIND_SOUNDBOARD
    }, {
      value: L.GlobalKeybindActions.SOUNDBOARD_HOLD,
      label: b.default.Messages.KEYBIND_SOUNDBOARD_HOLD
    }), a && n.push({
      value: L.GlobalKeybindActions.SAVE_CLIP,
      label: b.default.Messages.CLIPS_SAVE
    })), n
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: s
    } = this.props, a = {
      [L.GlobalKeybindActions.UNASSIGNED]: b.default.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
      [L.GlobalKeybindActions.PUSH_TO_MUTE]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
      [L.GlobalKeybindActions.PUSH_TO_TALK]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
      [L.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
      [L.GlobalKeybindActions.TOGGLE_MUTE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
      [L.GlobalKeybindActions.TOGGLE_DEAFEN]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
      [L.GlobalKeybindActions.TOGGLE_VOICE_MODE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
      [L.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
    };
    return e && (a[L.GlobalKeybindActions.TOGGLE_OVERLAY] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, a[L.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), t && (0, p.isWindows)() && (a[L.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, p.isDesktop)() && (a[L.GlobalKeybindActions.NAVIGATE_BACK] = b.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, a[L.GlobalKeybindActions.NAVIGATE_FORWARD] = b.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, a[L.GlobalKeybindActions.SOUNDBOARD] = (0, p.isWindows)() ? b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, a[L.GlobalKeybindActions.SOUNDBOARD_HOLD] = (0, p.isWindows)() ? b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, s && (a[L.GlobalKeybindActions.SAVE_CLIP] = b.default.Messages.CLIPS_KEYBIND_DESCRIPTION)), a
  }
  renderKeybinds(e) {
    return e.map(e => (0, a.jsx)("div", {
      className: v.row,
      children: (0, a.jsx)(V, {
        keybind: e,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes
      }, e.id)
    }, e.id))
  }
  renderEmpty(e) {
    if (0 === e.length) return (0, a.jsx)(y, {
      className: j.marginTop60,
      children: (0, a.jsx)(c.EmptyStateImage, {
        darkSrc: s("572279"),
        lightSrc: s("871803"),
        width: 320,
        height: 170
      })
    })
  }
  render() {
    let e = this.props.enableClips,
      t = o()(this.props.keybinds).reject(e => e.managed && ![L.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, L.GlobalKeybindActions.SAVE_CLIP].includes(e.action)).reject(t => !e && t.action === L.GlobalKeybindActions.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === L.GlobalKeybindActions.SOUNDBOARD || e.action === L.GlobalKeybindActions.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: b.default.Messages.KEYBINDS,
        children: p.isPlatformEmbedded ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)(O.default, {
            justify: O.default.Justify.BETWEEN,
            className: j.marginBottom20,
            children: [(0, a.jsx)(O.default.Child, {
              grow: 0,
              children: (0, a.jsx)(h.default, {
                messageType: h.HelpMessageTypes.WARNING,
                children: b.default.Messages.ADD_KEYBIND_WARNING
              })
            }), (0, a.jsx)(O.default.Child, {
              wrap: !0,
              grow: 0,
              children: (0, a.jsx)(c.Button, {
                size: c.ButtonSizes.LARGE,
                onClick: this.handleAddKeybind,
                children: b.default.Messages.ADD_KEYBIND
              })
            })]
          }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsxs)(c.FormSection, {
            children: [this.renderKeybinds(t), this.renderEmpty(t)]
          })]
        }) : (0, a.jsx)(h.default, {
          messageType: h.HelpMessageTypes.INFO,
          textVariant: "text-lg/medium",
          className: v.browserNotice,
          children: b.default.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
            downloadLink: L.MarketingURLs.DOWNLOAD
          })
        })
      }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsxs)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: b.default.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
        className: j.marginTop60,
        children: [(0, a.jsxs)("div", {
          className: v.defaultKeybind,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            children: b.default.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
          }), (0, a.jsx)("div", {
            className: v.defaultKeybindShortcutGroup,
            children: (0, a.jsx)(c.KeyCombo, {
              shortcut: _.TOGGLE_HOTKEYS.binds["0"],
              className: v.__invalid_defaultKeybindShortcut
            })
          })]
        }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsx)(F, {
          children: e => (0, a.jsx)(a.Fragment, {
            children: e.map((e, t) => {
              let s = (0, I.getNameForKeybindGroup)(e),
                i = (0, I.getDescriptionForKeybindGroup)(e),
                r = B[e];
              return (0, a.jsxs)("div", {
                className: v.defaultKeybindGroup,
                children: [(0, a.jsx)(c.Heading, {
                  variant: "heading-deprecated-12/semibold",
                  className: l()(v.defaultKeybindGroupHeader, {
                    [v.defaultKeybindGroupWithDescription]: null != i
                  }),
                  children: s
                }), null != i && (0, a.jsx)(c.Text, {
                  color: "header-secondary",
                  className: v.defaultKeybindGroupDescription,
                  variant: "text-sm/normal",
                  children: i
                }), (0, a.jsx)(c.FormDivider, {}), r.map(e => (0, a.jsxs)(n.Fragment, {
                  children: [(0, a.jsxs)("div", {
                    className: v.defaultKeybind,
                    children: [(0, a.jsx)(c.Text, {
                      variant: "text-md/normal",
                      children: e.description
                    }), (0, a.jsx)("div", {
                      className: v.defaultKeybindShortcutGroup,
                      children: e.binds.map(e => (0, a.jsx)(c.KeyCombo, {
                        shortcut: e
                      }, e))
                    })]
                  }), (0, a.jsx)(c.FormDivider, {})]
                }, e.description))]
              }, t)
            })
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), G(this, "handleAddKeybind", () => {
      S.default.addKeybind()
    })
  }
}

function Y() {
  let e = (0, d.useStateFromStores)([A.default], () => A.default.getState()),
    t = (0, d.useStateFromStores)([m.default], () => (0, f.default)(m.default)),
    s = (0, d.useStateFromStores)([C.default], () => C.default.isSupported()),
    n = (0, g.useEnableClips)();
  return (0, a.jsx)(H, {
    keybinds: e,
    canGoLive: t,
    overlaySupported: s,
    allowSoundboard: (0, p.isWindows)(),
    enableClips: n
  })
}