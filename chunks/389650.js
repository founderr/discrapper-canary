"use strict";
s.r(t), s.d(t, {
  default: function() {
    return w
  }
}), s("47120"), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
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
  f = s("714338"),
  m = s("924557"),
  N = s("74299"),
  g = s("131951"),
  h = s("556296"),
  C = s("808506"),
  O = s("186095"),
  A = s("285952"),
  p = s("474333"),
  R = s("63063"),
  x = s("358085"),
  M = s("13140"),
  D = s("210887"),
  L = s("659947"),
  P = s("981631"),
  v = s("420212"),
  b = s("689938"),
  U = s("996196"),
  j = s("164149"),
  F = s("611273");

function G(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function B(e) {
  let {
    children: t
  } = e;
  return t([I.KeybindGroup.MESSAGE, I.KeybindGroup.NAVIGATION, I.KeybindGroup.DND, I.KeybindGroup.CHAT, I.KeybindGroup.VOICE_AND_VIDEO, I.KeybindGroup.MISCELLANEOUS])
}
let y = o()((0, I.getDefaultLayoutContent)()).filter(e => e.description !== b.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
  V = d.default.connectStores([D.default], () => ({
    theme: D.default.theme
  }))(O.default);
class H extends n.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = M.toString(e.shortcut);
    return f.default.hasBind(t) ? (0, a.jsx)(c.FormText, {
      className: U.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      style: {
        color: u.default.unsafe_rawColors.RED_400.css
      },
      children: b.default.Messages.KEYBIND_CONFLICT
    }) : v.NavigationShortcuts.has(t) ? (0, a.jsx)(c.FormText, {
      className: U.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      style: {
        color: u.default.unsafe_rawColors.RED_400.css
      },
      children: b.default.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
        keyboardNavArticle: R.default.getArticleURL(P.HelpdeskArticles.KEYBOARD_NAVIGATION)
      })
    }) : (0, a.jsx)(c.FormText, {
      className: U.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      children: this.props.keybindDescriptions[e.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, a.jsxs)(A.default, {
      direction: A.default.Direction.VERTICAL,
      className: i()(U.keybindGroup, j.card),
      children: [!e && (0, a.jsx)(E.default, {
        "aria-label": b.default.Messages.REMOVE_KEYBIND,
        className: U.removeKeybind,
        onClick: this.handleDeleteKeybind,
        look: E.default.Looks.FILLED
      }), (0, a.jsxs)(A.default, {
        className: F.marginBottom8,
        children: [(0, a.jsx)(A.default.Child, {
          basis: "45%",
          children: (0, a.jsx)(c.FormItem, {
            title: b.default.Messages.USER_SETTINGS_KEYBINDS_ACTION,
            className: U.item,
            children: (0, a.jsx)(c.SingleSelect, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: e
            })
          })
        }), (0, a.jsx)(A.default.Child, {
          basis: "45%",
          children: (0, a.jsx)(c.FormItem, {
            title: b.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
            className: U.item,
            children: (0, a.jsx)(T.default, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), (0, a.jsx)(A.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(c.FormItem, {
            className: U.switch,
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
      }), (0, a.jsx)(A.default.Child, {
        children: this.renderMessage()
      }), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    if (e === P.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL) return (0, a.jsx)(L.default, {
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
class k extends n.PureComponent {
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
      value: P.GlobalKeybindActions.UNASSIGNED,
      label: b.default.Messages.KEYBIND_UNASSIGNED
    }, {
      value: P.GlobalKeybindActions.PUSH_TO_TALK,
      label: b.default.Messages.KEYBIND_PUSH_TO_TALK
    }, {
      value: P.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY,
      label: b.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
    }, {
      value: P.GlobalKeybindActions.PUSH_TO_MUTE,
      label: b.default.Messages.KEYBIND_PUSH_TO_MUTE
    }, {
      value: P.GlobalKeybindActions.TOGGLE_MUTE,
      label: b.default.Messages.KEYBIND_TOGGLE_MUTE
    }, {
      value: P.GlobalKeybindActions.TOGGLE_DEAFEN,
      label: b.default.Messages.KEYBIND_TOGGLE_DEAFEN
    }, {
      value: P.GlobalKeybindActions.TOGGLE_VOICE_MODE,
      label: b.default.Messages.KEYBIND_TOGGLE_VOICE_MODE
    }, {
      value: P.GlobalKeybindActions.TOGGLE_STREAMER_MODE,
      label: b.default.Messages.KEYBIND_TOGGLE_STREAM_MODE
    }];
    return e && (n.push({
      value: P.GlobalKeybindActions.TOGGLE_OVERLAY,
      label: b.default.Messages.KEYBIND_TOGGLE_OVERLAY
    }), n.push({
      value: P.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK,
      label: b.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
    }), n.push({
      value: P.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: b.default.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
    })), t && (0, x.isWindows)() && n.push({
      value: P.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING,
      label: b.default.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
    }), (0, x.isDesktop)() && (n.push({
      value: P.GlobalKeybindActions.NAVIGATE_BACK,
      label: b.default.Messages.KEYBIND_NAVIGATE_BACK
    }, {
      value: P.GlobalKeybindActions.NAVIGATE_FORWARD,
      label: b.default.Messages.KEYBIND_NAVIGATE_FORWARD
    }, {
      value: P.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL,
      label: b.default.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
    }, {
      value: P.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL,
      label: b.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
    }), s && n.push({
      value: P.GlobalKeybindActions.SOUNDBOARD,
      label: b.default.Messages.KEYBIND_SOUNDBOARD
    }, {
      value: P.GlobalKeybindActions.SOUNDBOARD_HOLD,
      label: b.default.Messages.KEYBIND_SOUNDBOARD_HOLD
    }), a && n.push({
      value: P.GlobalKeybindActions.SAVE_CLIP,
      label: b.default.Messages.CLIPS_SAVE
    })), n
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: s
    } = this.props, a = {
      [P.GlobalKeybindActions.UNASSIGNED]: b.default.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
      [P.GlobalKeybindActions.PUSH_TO_MUTE]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
      [P.GlobalKeybindActions.PUSH_TO_TALK]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
      [P.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
      [P.GlobalKeybindActions.TOGGLE_MUTE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
      [P.GlobalKeybindActions.TOGGLE_DEAFEN]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
      [P.GlobalKeybindActions.TOGGLE_VOICE_MODE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
      [P.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
    };
    return e && (a[P.GlobalKeybindActions.TOGGLE_OVERLAY] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, a[P.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), t && (0, x.isWindows)() && (a[P.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, x.isDesktop)() && (a[P.GlobalKeybindActions.NAVIGATE_BACK] = b.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, a[P.GlobalKeybindActions.NAVIGATE_FORWARD] = b.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, a[P.GlobalKeybindActions.SOUNDBOARD] = (0, x.isWindows)() ? b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, a[P.GlobalKeybindActions.SOUNDBOARD_HOLD] = (0, x.isWindows)() ? b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, s && (a[P.GlobalKeybindActions.SAVE_CLIP] = b.default.Messages.CLIPS_KEYBIND_DESCRIPTION)), a
  }
  renderKeybinds(e) {
    return e.map(e => (0, a.jsx)("div", {
      className: U.row,
      children: (0, a.jsx)(H, {
        keybind: e,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes
      }, e.id)
    }, e.id))
  }
  renderEmpty(e) {
    if (0 === e.length) return (0, a.jsx)(V, {
      className: F.marginTop60,
      children: (0, a.jsx)(O.EmptyStateImage, {
        darkSrc: s("572279"),
        lightSrc: s("871803"),
        width: 320,
        height: 170
      })
    })
  }
  render() {
    let e = this.props.enableClips,
      t = o()(this.props.keybinds).reject(e => e.managed && ![P.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, P.GlobalKeybindActions.SAVE_CLIP].includes(e.action)).reject(t => !e && t.action === P.GlobalKeybindActions.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === P.GlobalKeybindActions.SOUNDBOARD || e.action === P.GlobalKeybindActions.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: b.default.Messages.KEYBINDS,
        children: x.isPlatformEmbedded ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)(A.default, {
            justify: A.default.Justify.BETWEEN,
            className: F.marginBottom20,
            children: [(0, a.jsx)(A.default.Child, {
              grow: 0,
              children: (0, a.jsx)(p.default, {
                messageType: p.HelpMessageTypes.WARNING,
                children: b.default.Messages.ADD_KEYBIND_WARNING
              })
            }), (0, a.jsx)(A.default.Child, {
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
        }) : (0, a.jsx)(p.default, {
          messageType: p.HelpMessageTypes.INFO,
          textVariant: "text-lg/medium",
          className: U.browserNotice,
          children: b.default.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
            downloadLink: P.MarketingURLs.DOWNLOAD
          })
        })
      }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsxs)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: b.default.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
        className: F.marginTop60,
        children: [(0, a.jsxs)("div", {
          className: U.defaultKeybind,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            children: b.default.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
          }), (0, a.jsx)("div", {
            className: U.defaultKeybindShortcutGroup,
            children: (0, a.jsx)(c.KeyCombo, {
              shortcut: _.TOGGLE_HOTKEYS.binds["0"],
              className: U.__invalid_defaultKeybindShortcut
            })
          })]
        }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsx)(B, {
          children: e => (0, a.jsx)(a.Fragment, {
            children: e.map((e, t) => {
              let s = (0, I.getNameForKeybindGroup)(e),
                l = (0, I.getDescriptionForKeybindGroup)(e),
                r = y[e];
              return (0, a.jsxs)("div", {
                className: U.defaultKeybindGroup,
                children: [(0, a.jsx)(c.Heading, {
                  variant: "heading-deprecated-12/semibold",
                  className: i()(U.defaultKeybindGroupHeader, {
                    [U.defaultKeybindGroupWithDescription]: null != l
                  }),
                  children: s
                }), null != l && (0, a.jsx)(c.Text, {
                  color: "header-secondary",
                  className: U.defaultKeybindGroupDescription,
                  variant: "text-sm/normal",
                  children: l
                }), (0, a.jsx)(c.FormDivider, {}), r.map(e => (0, a.jsxs)(n.Fragment, {
                  children: [(0, a.jsxs)("div", {
                    className: U.defaultKeybind,
                    children: [(0, a.jsx)(c.Text, {
                      variant: "text-md/normal",
                      children: e.description
                    }), (0, a.jsx)("div", {
                      className: U.defaultKeybindShortcutGroup,
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

function w() {
  let e = (0, d.useStateFromStores)([h.default], () => h.default.getState()),
    t = (0, d.useStateFromStores)([g.default], () => (0, N.default)(g.default)),
    s = (0, d.useStateFromStores)([C.default], () => C.default.isSupported()),
    n = (0, m.useEnableClips)();
  return (0, a.jsx)(k, {
    keybinds: e,
    canGoLive: t,
    overlaySupported: s,
    allowSoundboard: (0, x.isWindows)(),
    enableClips: n
  })
}