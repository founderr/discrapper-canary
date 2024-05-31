"use strict";
s.r(t), s.d(t, {
  default: function() {
    return Y
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
  f = s("612226"),
  m = s("714338"),
  g = s("924557"),
  I = s("74299"),
  N = s("131951"),
  h = s("556296"),
  C = s("808506"),
  A = s("186095"),
  p = s("285952"),
  O = s("474333"),
  R = s("63063"),
  x = s("358085"),
  M = s("13140"),
  v = s("210887"),
  L = s("659947"),
  D = s("981631"),
  P = s("420212"),
  b = s("689938"),
  j = s("996196"),
  U = s("164149"),
  y = s("611273");

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
  return t([f.KeybindGroup.MESSAGE, f.KeybindGroup.NAVIGATION, f.KeybindGroup.DND, f.KeybindGroup.CHAT, f.KeybindGroup.VOICE_AND_VIDEO, f.KeybindGroup.MISCELLANEOUS])
}
let B = o()((0, f.getDefaultLayoutContent)()).filter(e => e.description !== b.default.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
  k = d.default.connectStores([v.default], () => ({
    theme: v.default.theme
  }))(A.default);
class w extends n.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, t = M.toString(e.shortcut);
    return m.default.hasBind(t) ? (0, a.jsx)(c.FormText, {
      className: j.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      style: {
        color: u.default.unsafe_rawColors.RED_400.css
      },
      children: b.default.Messages.KEYBIND_CONFLICT
    }) : P.NavigationShortcuts.has(t) ? (0, a.jsx)(c.FormText, {
      className: j.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      style: {
        color: u.default.unsafe_rawColors.RED_400.css
      },
      children: b.default.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
        keyboardNavArticle: R.default.getArticleURL(D.HelpdeskArticles.KEYBOARD_NAVIGATION)
      })
    }) : (0, a.jsx)(c.FormText, {
      className: j.keybindMessage,
      type: c.FormTextTypes.DESCRIPTION,
      children: this.props.keybindDescriptions[e.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: t
    } = this.props.keybind;
    return (0, a.jsxs)(p.default, {
      direction: p.default.Direction.VERTICAL,
      className: i()(j.keybindGroup, U.card),
      children: [!e && (0, a.jsx)(E.default, {
        "aria-label": b.default.Messages.REMOVE_KEYBIND,
        className: j.removeKeybind,
        onClick: this.handleDeleteKeybind,
        look: E.default.Looks.FILLED
      }), (0, a.jsxs)(p.default, {
        className: y.marginBottom8,
        children: [(0, a.jsx)(p.default.Child, {
          basis: "45%",
          children: (0, a.jsx)(c.FormItem, {
            title: b.default.Messages.USER_SETTINGS_KEYBINDS_ACTION,
            className: j.item,
            children: (0, a.jsx)(c.SingleSelect, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: e
            })
          })
        }), (0, a.jsx)(p.default.Child, {
          basis: "45%",
          children: (0, a.jsx)(c.FormItem, {
            title: b.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
            className: j.item,
            children: (0, a.jsx)(T.default, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), (0, a.jsx)(p.default.Child, {
          grow: 0,
          shrink: 0,
          children: (0, a.jsx)(c.FormItem, {
            className: j.switch,
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
      }), (0, a.jsx)(p.default.Child, {
        children: this.renderMessage()
      }), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    if (e === D.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL) return (0, a.jsx)(L.default, {
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
      value: D.GlobalKeybindActions.UNASSIGNED,
      label: b.default.Messages.KEYBIND_UNASSIGNED
    }, {
      value: D.GlobalKeybindActions.PUSH_TO_TALK,
      label: b.default.Messages.KEYBIND_PUSH_TO_TALK
    }, {
      value: D.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY,
      label: b.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
    }, {
      value: D.GlobalKeybindActions.PUSH_TO_MUTE,
      label: b.default.Messages.KEYBIND_PUSH_TO_MUTE
    }, {
      value: D.GlobalKeybindActions.TOGGLE_MUTE,
      label: b.default.Messages.KEYBIND_TOGGLE_MUTE
    }, {
      value: D.GlobalKeybindActions.TOGGLE_DEAFEN,
      label: b.default.Messages.KEYBIND_TOGGLE_DEAFEN
    }, {
      value: D.GlobalKeybindActions.TOGGLE_VOICE_MODE,
      label: b.default.Messages.KEYBIND_TOGGLE_VOICE_MODE
    }, {
      value: D.GlobalKeybindActions.TOGGLE_STREAMER_MODE,
      label: b.default.Messages.KEYBIND_TOGGLE_STREAM_MODE
    }];
    return e && (n.push({
      value: D.GlobalKeybindActions.TOGGLE_OVERLAY,
      label: b.default.Messages.KEYBIND_TOGGLE_OVERLAY
    }), n.push({
      value: D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK,
      label: b.default.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
    }), n.push({
      value: D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: b.default.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
    })), t && (0, x.isWindows)() && n.push({
      value: D.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING,
      label: b.default.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
    }), (0, x.isDesktop)() && (n.push({
      value: D.GlobalKeybindActions.NAVIGATE_BACK,
      label: b.default.Messages.KEYBIND_NAVIGATE_BACK
    }, {
      value: D.GlobalKeybindActions.NAVIGATE_FORWARD,
      label: b.default.Messages.KEYBIND_NAVIGATE_FORWARD
    }, {
      value: D.GlobalKeybindActions.SWITCH_TO_VOICE_CHANNEL,
      label: b.default.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
    }, {
      value: D.GlobalKeybindActions.DISCONNECT_FROM_VOICE_CHANNEL,
      label: b.default.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
    }), s && n.push({
      value: D.GlobalKeybindActions.SOUNDBOARD,
      label: b.default.Messages.KEYBIND_SOUNDBOARD
    }, {
      value: D.GlobalKeybindActions.SOUNDBOARD_HOLD,
      label: b.default.Messages.KEYBIND_SOUNDBOARD_HOLD
    }), a && n.push({
      value: D.GlobalKeybindActions.SAVE_CLIP,
      label: b.default.Messages.CLIPS_SAVE
    })), n
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: t,
      enableClips: s
    } = this.props, a = {
      [D.GlobalKeybindActions.UNASSIGNED]: b.default.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
      [D.GlobalKeybindActions.PUSH_TO_MUTE]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
      [D.GlobalKeybindActions.PUSH_TO_TALK]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
      [D.GlobalKeybindActions.PUSH_TO_TALK_PRIORITY]: b.default.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
      [D.GlobalKeybindActions.TOGGLE_MUTE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
      [D.GlobalKeybindActions.TOGGLE_DEAFEN]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
      [D.GlobalKeybindActions.TOGGLE_VOICE_MODE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
      [D.GlobalKeybindActions.TOGGLE_STREAMER_MODE]: b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
    };
    return e && (a[D.GlobalKeybindActions.TOGGLE_OVERLAY] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, a[D.GlobalKeybindActions.TOGGLE_OVERLAY_INPUT_LOCK] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), t && (0, x.isWindows)() && (a[D.GlobalKeybindActions.TOGGLE_GO_LIVE_STREAMING] = b.default.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, x.isDesktop)() && (a[D.GlobalKeybindActions.NAVIGATE_BACK] = b.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, a[D.GlobalKeybindActions.NAVIGATE_FORWARD] = b.default.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, a[D.GlobalKeybindActions.SOUNDBOARD] = (0, x.isWindows)() ? b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, a[D.GlobalKeybindActions.SOUNDBOARD_HOLD] = (0, x.isWindows)() ? b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : b.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, s && (a[D.GlobalKeybindActions.SAVE_CLIP] = b.default.Messages.CLIPS_KEYBIND_DESCRIPTION)), a
  }
  renderKeybinds(e) {
    return e.map(e => (0, a.jsx)("div", {
      className: j.row,
      children: (0, a.jsx)(w, {
        keybind: e,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes
      }, e.id)
    }, e.id))
  }
  renderEmpty(e) {
    if (0 === e.length) return (0, a.jsx)(k, {
      className: y.marginTop60,
      children: (0, a.jsx)(A.EmptyStateImage, {
        darkSrc: s("572279"),
        lightSrc: s("871803"),
        width: 320,
        height: 170
      })
    })
  }
  render() {
    let e = this.props.enableClips,
      t = o()(this.props.keybinds).reject(e => e.managed && ![D.GlobalKeybindActions.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, D.GlobalKeybindActions.SAVE_CLIP].includes(e.action)).reject(t => !e && t.action === D.GlobalKeybindActions.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === D.GlobalKeybindActions.SOUNDBOARD || e.action === D.GlobalKeybindActions.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: b.default.Messages.KEYBINDS,
        children: x.isPlatformEmbedded ? (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsxs)(p.default, {
            justify: p.default.Justify.BETWEEN,
            className: y.marginBottom20,
            children: [(0, a.jsx)(p.default.Child, {
              grow: 0,
              children: (0, a.jsx)(O.default, {
                messageType: O.HelpMessageTypes.WARNING,
                children: b.default.Messages.ADD_KEYBIND_WARNING
              })
            }), (0, a.jsx)(p.default.Child, {
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
        }) : (0, a.jsx)(O.default, {
          messageType: O.HelpMessageTypes.INFO,
          textVariant: "text-lg/medium",
          className: j.browserNotice,
          children: b.default.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
            downloadLink: D.MarketingURLs.DOWNLOAD
          })
        })
      }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsxs)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: b.default.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
        className: y.marginTop60,
        children: [(0, a.jsxs)("div", {
          className: j.defaultKeybind,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            children: b.default.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
          }), (0, a.jsx)("div", {
            className: j.defaultKeybindShortcutGroup,
            children: (0, a.jsx)(c.KeyCombo, {
              shortcut: _.TOGGLE_HOTKEYS.binds["0"],
              className: j.__invalid_defaultKeybindShortcut
            })
          })]
        }), (0, a.jsx)(c.FormDivider, {}), (0, a.jsx)(F, {
          children: e => (0, a.jsx)(a.Fragment, {
            children: e.map((e, t) => {
              let s = (0, f.getNameForKeybindGroup)(e),
                l = (0, f.getDescriptionForKeybindGroup)(e),
                r = B[e];
              return (0, a.jsxs)("div", {
                className: j.defaultKeybindGroup,
                children: [(0, a.jsx)(c.Heading, {
                  variant: "heading-deprecated-12/semibold",
                  className: i()(j.defaultKeybindGroupHeader, {
                    [j.defaultKeybindGroupWithDescription]: null != l
                  }),
                  children: s
                }), null != l && (0, a.jsx)(c.Text, {
                  color: "header-secondary",
                  className: j.defaultKeybindGroupDescription,
                  variant: "text-sm/normal",
                  children: l
                }), (0, a.jsx)(c.FormDivider, {}), r.map(e => (0, a.jsxs)(n.Fragment, {
                  children: [(0, a.jsxs)("div", {
                    className: j.defaultKeybind,
                    children: [(0, a.jsx)(c.Text, {
                      variant: "text-md/normal",
                      children: e.description
                    }), (0, a.jsx)("div", {
                      className: j.defaultKeybindShortcutGroup,
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
  let e = (0, d.useStateFromStores)([h.default], () => h.default.getState()),
    t = (0, d.useStateFromStores)([N.default], () => (0, I.default)(N.default)),
    s = (0, d.useStateFromStores)([C.default], () => C.default.isSupported()),
    n = (0, g.useEnableClips)();
  return (0, a.jsx)(H, {
    keybinds: e,
    canGoLive: t,
    overlaySupported: s,
    allowSoundboard: (0, x.isWindows)(),
    enableClips: n
  })
}