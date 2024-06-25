t.d(s, {
  Z: function() {
    return Y
  }
}), t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(392711),
  o = t.n(r),
  c = t(442837),
  E = t(692547),
  d = t(481060),
  _ = t(660216),
  T = t(225433),
  S = t(825209),
  u = t(721383),
  I = t(612226),
  N = t(714338),
  A = t(924557),
  C = t(74299),
  O = t(131951),
  m = t(556296),
  h = t(808506),
  g = t(285952),
  R = t(474333),
  M = t(63063),
  x = t(358085),
  p = t(13140),
  D = t(210887),
  L = t(659947),
  P = t(981631),
  Z = t(420212),
  f = t(689938),
  v = t(649560),
  j = t(5973),
  U = t(331651);

function B(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function b(e) {
  let {
    children: s
  } = e;
  return s([I.Q2.MESSAGE, I.Q2.NAVIGATION, I.Q2.DND, I.Q2.CHAT, I.Q2.VOICE_AND_VIDEO, I.Q2.MISCELLANEOUS])
}
let G = o()((0, I.Rv)()).filter(e => e.description !== f.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
  F = c.ZP.connectStores([D.Z], () => ({
    theme: D.Z.theme
  }))(d.EmptyState);
class V extends i.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, s = p.BB(e.shortcut);
    return N.Z.hasBind(s) ? (0, n.jsx)(d.FormText, {
      className: v.keybindMessage,
      type: d.FormTextTypes.DESCRIPTION,
      style: {
        color: E.Z.unsafe_rawColors.RED_400.css
      },
      children: f.Z.Messages.KEYBIND_CONFLICT
    }) : Z.Sp.has(s) ? (0, n.jsx)(d.FormText, {
      className: v.keybindMessage,
      type: d.FormTextTypes.DESCRIPTION,
      style: {
        color: E.Z.unsafe_rawColors.RED_400.css
      },
      children: f.Z.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
        keyboardNavArticle: M.Z.getArticleURL(P.BhN.KEYBOARD_NAVIGATION)
      })
    }) : (0, n.jsx)(d.FormText, {
      className: v.keybindMessage,
      type: d.FormTextTypes.DESCRIPTION,
      children: this.props.keybindDescriptions[e.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: s
    } = this.props.keybind;
    return (0, n.jsxs)(g.Z, {
      direction: g.Z.Direction.VERTICAL,
      className: l()(v.keybindGroup, j.card),
      children: [!e && (0, n.jsx)(T.Z, {
        "aria-label": f.Z.Messages.REMOVE_KEYBIND,
        className: v.removeKeybind,
        onClick: this.handleDeleteKeybind,
        look: T.Z.Looks.FILLED
      }), (0, n.jsxs)(g.Z, {
        className: U.marginBottom8,
        children: [(0, n.jsx)(g.Z.Child, {
          basis: "45%",
          children: (0, n.jsx)(d.FormItem, {
            title: f.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION,
            className: v.item,
            children: (0, n.jsx)(d.SingleSelect, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: e
            })
          })
        }), (0, n.jsx)(g.Z.Child, {
          basis: "45%",
          children: (0, n.jsx)(d.FormItem, {
            title: f.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
            className: v.item,
            children: (0, n.jsx)(S.Z, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), (0, n.jsx)(g.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(d.FormItem, {
            className: v.switch,
            children: (0, n.jsx)(d.Tooltip, {
              text: f.Z.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
              children: e => (0, n.jsx)("div", {
                ...e,
                children: (0, n.jsx)(d.Switch, {
                  checked: s,
                  onChange: this.handleEnableDisable
                })
              })
            })
          })
        })]
      }), (0, n.jsx)(g.Z.Child, {
        children: this.renderMessage()
      }), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    if (e === P.kg4.SWITCH_TO_VOICE_CHANNEL) return (0, n.jsx)(L.Z, {
      keybind: this.props.keybind
    })
  }
  constructor(...e) {
    super(...e), B(this, "handleActionChanged", e => {
      _.Z.setKeybind({
        ...this.props.keybind,
        action: e
      })
    }), B(this, "handleShortcutChange", e => {
      _.Z.setKeybind({
        ...this.props.keybind,
        shortcut: e
      })
    }), B(this, "handleDeleteKeybind", () => {
      _.Z.deleteKeybind(this.props.keybind.id)
    }), B(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      _.Z.setKeybind({
        ...this.props.keybind,
        enabled: !e.enabled
      })
    })
  }
}
class y extends i.PureComponent {
  componentDidMount() {
    _.Z.enableAll(!1)
  }
  componentWillUnmount() {
    _.Z.enableAll(!0)
  }
  get keybindActionTypes() {
    let {
      overlaySupported: e,
      canGoLive: s,
      allowSoundboard: t,
      enableClips: n
    } = this.props, i = [{
      value: P.kg4.UNASSIGNED,
      label: f.Z.Messages.KEYBIND_UNASSIGNED
    }, {
      value: P.kg4.PUSH_TO_TALK,
      label: f.Z.Messages.KEYBIND_PUSH_TO_TALK
    }, {
      value: P.kg4.PUSH_TO_TALK_PRIORITY,
      label: f.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
    }, {
      value: P.kg4.PUSH_TO_MUTE,
      label: f.Z.Messages.KEYBIND_PUSH_TO_MUTE
    }, {
      value: P.kg4.TOGGLE_MUTE,
      label: f.Z.Messages.KEYBIND_TOGGLE_MUTE
    }, {
      value: P.kg4.TOGGLE_DEAFEN,
      label: f.Z.Messages.KEYBIND_TOGGLE_DEAFEN
    }, {
      value: P.kg4.TOGGLE_VOICE_MODE,
      label: f.Z.Messages.KEYBIND_TOGGLE_VOICE_MODE
    }, {
      value: P.kg4.TOGGLE_STREAMER_MODE,
      label: f.Z.Messages.KEYBIND_TOGGLE_STREAM_MODE
    }];
    return e && (i.push({
      value: P.kg4.TOGGLE_OVERLAY,
      label: f.Z.Messages.KEYBIND_TOGGLE_OVERLAY
    }), i.push({
      value: P.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
      label: f.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
    }), i.push({
      value: P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: f.Z.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
    })), s && (0, x.isWindows)() && i.push({
      value: P.kg4.TOGGLE_GO_LIVE_STREAMING,
      label: f.Z.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
    }), (0, x.isDesktop)() && (i.push({
      value: P.kg4.NAVIGATE_BACK,
      label: f.Z.Messages.KEYBIND_NAVIGATE_BACK
    }, {
      value: P.kg4.NAVIGATE_FORWARD,
      label: f.Z.Messages.KEYBIND_NAVIGATE_FORWARD
    }, {
      value: P.kg4.SWITCH_TO_VOICE_CHANNEL,
      label: f.Z.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
    }, {
      value: P.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
      label: f.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
    }), t && i.push({
      value: P.kg4.SOUNDBOARD,
      label: f.Z.Messages.KEYBIND_SOUNDBOARD
    }, {
      value: P.kg4.SOUNDBOARD_HOLD,
      label: f.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
    }), n && i.push({
      value: P.kg4.SAVE_CLIP,
      label: f.Z.Messages.CLIPS_SAVE
    })), i
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: s,
      enableClips: t
    } = this.props, n = {
      [P.kg4.UNASSIGNED]: f.Z.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
      [P.kg4.PUSH_TO_MUTE]: f.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
      [P.kg4.PUSH_TO_TALK]: f.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
      [P.kg4.PUSH_TO_TALK_PRIORITY]: f.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
      [P.kg4.TOGGLE_MUTE]: f.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
      [P.kg4.TOGGLE_DEAFEN]: f.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
      [P.kg4.TOGGLE_VOICE_MODE]: f.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
      [P.kg4.TOGGLE_STREAMER_MODE]: f.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
    };
    return e && (n[P.kg4.TOGGLE_OVERLAY] = f.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, n[P.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = f.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), s && (0, x.isWindows)() && (n[P.kg4.TOGGLE_GO_LIVE_STREAMING] = f.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, x.isDesktop)() && (n[P.kg4.NAVIGATE_BACK] = f.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, n[P.kg4.NAVIGATE_FORWARD] = f.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, n[P.kg4.SOUNDBOARD] = (0, x.isWindows)() ? f.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : f.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, n[P.kg4.SOUNDBOARD_HOLD] = (0, x.isWindows)() ? f.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : f.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, t && (n[P.kg4.SAVE_CLIP] = f.Z.Messages.CLIPS_KEYBIND_DESCRIPTION)), n
  }
  renderKeybinds(e) {
    return e.map(e => (0, n.jsx)("div", {
      className: v.row,
      children: (0, n.jsx)(V, {
        keybind: e,
        keybindDescriptions: this.keybindDescriptions,
        keybindActionTypes: this.keybindActionTypes
      }, e.id)
    }, e.id))
  }
  renderEmpty(e) {
    if (0 === e.length) return (0, n.jsx)(F, {
      className: U.marginTop60,
      children: (0, n.jsx)(d.EmptyStateImage, {
        darkSrc: t(572279),
        lightSrc: t(871803),
        width: 320,
        height: 170
      })
    })
  }
  render() {
    let e = this.props.enableClips,
      s = o()(this.props.keybinds).reject(e => e.managed && ![P.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, P.kg4.SAVE_CLIP].includes(e.action)).reject(s => !e && s.action === P.kg4.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === P.kg4.SOUNDBOARD || e.action === P.kg4.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(d.FormSection, {
        tag: d.FormTitleTags.H1,
        title: f.Z.Messages.KEYBINDS,
        children: x.isPlatformEmbedded ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)(g.Z, {
            justify: g.Z.Justify.BETWEEN,
            className: U.marginBottom20,
            children: [(0, n.jsx)(g.Z.Child, {
              grow: 0,
              children: (0, n.jsx)(R.Z, {
                messageType: R.Q.WARNING,
                children: f.Z.Messages.ADD_KEYBIND_WARNING
              })
            }), (0, n.jsx)(g.Z.Child, {
              wrap: !0,
              grow: 0,
              children: (0, n.jsx)(d.Button, {
                size: d.ButtonSizes.LARGE,
                onClick: this.handleAddKeybind,
                children: f.Z.Messages.ADD_KEYBIND
              })
            })]
          }), (0, n.jsx)(d.FormDivider, {}), (0, n.jsxs)(d.FormSection, {
            children: [this.renderKeybinds(s), this.renderEmpty(s)]
          })]
        }) : (0, n.jsx)(R.Z, {
          messageType: R.Q.INFO,
          textVariant: "text-lg/medium",
          className: v.browserNotice,
          children: f.Z.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
            downloadLink: P.EYA.DOWNLOAD
          })
        })
      }), (0, n.jsx)(d.FormDivider, {}), (0, n.jsxs)(d.FormSection, {
        tag: d.FormTitleTags.H1,
        title: f.Z.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
        className: U.marginTop60,
        children: [(0, n.jsxs)("div", {
          className: v.defaultKeybind,
          children: [(0, n.jsx)(d.Text, {
            variant: "text-md/normal",
            children: f.Z.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
          }), (0, n.jsx)("div", {
            className: v.defaultKeybindShortcutGroup,
            children: (0, n.jsx)(d.KeyCombo, {
              shortcut: u._.binds["0"],
              className: v.__invalid_defaultKeybindShortcut
            })
          })]
        }), (0, n.jsx)(d.FormDivider, {}), (0, n.jsx)(b, {
          children: e => (0, n.jsx)(n.Fragment, {
            children: e.map((e, s) => {
              let t = (0, I.UD)(e),
                a = (0, I.U6)(e),
                r = G[e];
              return (0, n.jsxs)("div", {
                className: v.defaultKeybindGroup,
                children: [(0, n.jsx)(d.Heading, {
                  variant: "heading-deprecated-12/semibold",
                  className: l()(v.defaultKeybindGroupHeader, {
                    [v.defaultKeybindGroupWithDescription]: null != a
                  }),
                  children: t
                }), null != a && (0, n.jsx)(d.Text, {
                  color: "header-secondary",
                  className: v.defaultKeybindGroupDescription,
                  variant: "text-sm/normal",
                  children: a
                }), (0, n.jsx)(d.FormDivider, {}), r.map(e => (0, n.jsxs)(i.Fragment, {
                  children: [(0, n.jsxs)("div", {
                    className: v.defaultKeybind,
                    children: [(0, n.jsx)(d.Text, {
                      variant: "text-md/normal",
                      children: e.description
                    }), (0, n.jsx)("div", {
                      className: v.defaultKeybindShortcutGroup,
                      children: e.binds.map(e => (0, n.jsx)(d.KeyCombo, {
                        shortcut: e
                      }, e))
                    })]
                  }), (0, n.jsx)(d.FormDivider, {})]
                }, e.description))]
              }, s)
            })
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), B(this, "handleAddKeybind", () => {
      _.Z.addKeybind()
    })
  }
}

function Y() {
  let e = (0, c.e7)([m.Z], () => m.Z.getState()),
    s = (0, c.e7)([O.Z], () => (0, C.Z)(O.Z)),
    t = (0, c.e7)([h.Z], () => h.Z.isSupported()),
    i = (0, A.Go)();
  return (0, n.jsx)(y, {
    keybinds: e,
    canGoLive: s,
    overlaySupported: t,
    allowSoundboard: (0, x.isWindows)(),
    enableClips: i
  })
}