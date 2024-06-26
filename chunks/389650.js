t.d(s, {
  Z: function() {
    return Y
  }
}), t(47120), t(653041);
var n = t(735250),
  a = t(470079),
  i = t(120356),
  r = t.n(i),
  o = t(392711),
  l = t.n(o),
  c = t(442837),
  d = t(692547),
  _ = t(481060),
  E = t(660216),
  u = t(225433),
  T = t(825209),
  S = t(721383),
  I = t(612226),
  N = t(714338),
  C = t(924557),
  A = t(74299),
  m = t(131951),
  O = t(556296),
  g = t(808506),
  h = t(285952),
  R = t(474333),
  p = t(63063),
  x = t(358085),
  M = t(13140),
  D = t(210887),
  f = t(659947),
  L = t(981631),
  P = t(420212),
  Z = t(689938),
  v = t(649560),
  b = t(5973),
  j = t(331651);

function U(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}

function B(e) {
  let {
    children: s
  } = e;
  return s([I.Q2.MESSAGE, I.Q2.NAVIGATION, I.Q2.DND, I.Q2.CHAT, I.Q2.VOICE_AND_VIDEO, I.Q2.MISCELLANEOUS])
}
let G = l()((0, I.Rv)()).filter(e => e.description !== Z.Z.Messages.KEYBIND_DESCRIPTION_MODAL_EASTER_EGG).groupBy(e => e.group).value(),
  F = c.ZP.connectStores([D.Z], () => ({
    theme: D.Z.theme
  }))(_.EmptyState);
class V extends a.PureComponent {
  renderMessage() {
    let {
      keybind: e
    } = this.props, s = M.BB(e.shortcut);
    return N.Z.hasBind(s) ? (0, n.jsx)(_.FormText, {
      className: v.keybindMessage,
      type: _.FormTextTypes.DESCRIPTION,
      style: {
        color: d.Z.unsafe_rawColors.RED_400.css
      },
      children: Z.Z.Messages.KEYBIND_CONFLICT
    }) : P.Sp.has(s) ? (0, n.jsx)(_.FormText, {
      className: v.keybindMessage,
      type: _.FormTextTypes.DESCRIPTION,
      style: {
        color: d.Z.unsafe_rawColors.RED_400.css
      },
      children: Z.Z.Messages.KEYBIND_NAVIGATION_CONFLICT.format({
        keyboardNavArticle: p.Z.getArticleURL(L.BhN.KEYBOARD_NAVIGATION)
      })
    }) : (0, n.jsx)(_.FormText, {
      className: v.keybindMessage,
      type: _.FormTextTypes.DESCRIPTION,
      children: this.props.keybindDescriptions[e.action]
    })
  }
  render() {
    let {
      managed: e,
      enabled: s
    } = this.props.keybind;
    return (0, n.jsxs)(h.Z, {
      direction: h.Z.Direction.VERTICAL,
      className: r()(v.keybindGroup, b.card),
      children: [!e && (0, n.jsx)(u.Z, {
        "aria-label": Z.Z.Messages.REMOVE_KEYBIND,
        className: v.removeKeybind,
        onClick: this.handleDeleteKeybind,
        look: u.Z.Looks.FILLED
      }), (0, n.jsxs)(h.Z, {
        className: j.marginBottom8,
        children: [(0, n.jsx)(h.Z.Child, {
          basis: "45%",
          children: (0, n.jsx)(_.FormItem, {
            title: Z.Z.Messages.USER_SETTINGS_KEYBINDS_ACTION,
            className: v.item,
            children: (0, n.jsx)(_.SingleSelect, {
              value: this.props.keybind.action,
              options: this.props.keybindActionTypes,
              onChange: this.handleActionChanged,
              isDisabled: e
            })
          })
        }), (0, n.jsx)(h.Z.Child, {
          basis: "45%",
          children: (0, n.jsx)(_.FormItem, {
            title: Z.Z.Messages.USER_SETTINGS_KEYBINDS_KEYBIND,
            className: v.item,
            children: (0, n.jsx)(T.Z, {
              defaultValue: this.props.keybind.shortcut,
              onChange: this.handleShortcutChange
            })
          })
        }), (0, n.jsx)(h.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, n.jsx)(_.FormItem, {
            className: v.switch,
            children: (0, n.jsx)(_.Tooltip, {
              text: Z.Z.Messages.USER_SETTINGS_KEYBIND_ENABLE_DISABLE,
              children: e => (0, n.jsx)("div", {
                ...e,
                children: (0, n.jsx)(_.Switch, {
                  checked: s,
                  onChange: this.handleEnableDisable
                })
              })
            })
          })
        })]
      }), (0, n.jsx)(h.Z.Child, {
        children: this.renderMessage()
      }), this.renderExtraSettings()]
    })
  }
  renderExtraSettings() {
    let {
      action: e
    } = this.props.keybind;
    if (e === L.kg4.SWITCH_TO_VOICE_CHANNEL) return (0, n.jsx)(f.Z, {
      keybind: this.props.keybind
    })
  }
  constructor(...e) {
    super(...e), U(this, "handleActionChanged", e => {
      E.Z.setKeybind({
        ...this.props.keybind,
        action: e
      })
    }), U(this, "handleShortcutChange", e => {
      E.Z.setKeybind({
        ...this.props.keybind,
        shortcut: e
      })
    }), U(this, "handleDeleteKeybind", () => {
      E.Z.deleteKeybind(this.props.keybind.id)
    }), U(this, "handleEnableDisable", () => {
      let {
        keybind: e
      } = this.props;
      E.Z.setKeybind({
        ...this.props.keybind,
        enabled: !e.enabled
      })
    })
  }
}
class y extends a.PureComponent {
  componentDidMount() {
    E.Z.enableAll(!1)
  }
  componentWillUnmount() {
    E.Z.enableAll(!0)
  }
  get keybindActionTypes() {
    let {
      overlaySupported: e,
      canGoLive: s,
      allowSoundboard: t,
      enableClips: n
    } = this.props, a = [{
      value: L.kg4.UNASSIGNED,
      label: Z.Z.Messages.KEYBIND_UNASSIGNED
    }, {
      value: L.kg4.PUSH_TO_TALK,
      label: Z.Z.Messages.KEYBIND_PUSH_TO_TALK
    }, {
      value: L.kg4.PUSH_TO_TALK_PRIORITY,
      label: Z.Z.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY
    }, {
      value: L.kg4.PUSH_TO_MUTE,
      label: Z.Z.Messages.KEYBIND_PUSH_TO_MUTE
    }, {
      value: L.kg4.TOGGLE_MUTE,
      label: Z.Z.Messages.KEYBIND_TOGGLE_MUTE
    }, {
      value: L.kg4.TOGGLE_DEAFEN,
      label: Z.Z.Messages.KEYBIND_TOGGLE_DEAFEN
    }, {
      value: L.kg4.TOGGLE_VOICE_MODE,
      label: Z.Z.Messages.KEYBIND_TOGGLE_VOICE_MODE
    }, {
      value: L.kg4.TOGGLE_STREAMER_MODE,
      label: Z.Z.Messages.KEYBIND_TOGGLE_STREAM_MODE
    }];
    return e && (a.push({
      value: L.kg4.TOGGLE_OVERLAY,
      label: Z.Z.Messages.KEYBIND_TOGGLE_OVERLAY
    }), a.push({
      value: L.kg4.TOGGLE_OVERLAY_INPUT_LOCK,
      label: Z.Z.Messages.KEYBIND_TOGGLE_OVERLAY_INPUT_LOCK
    }), a.push({
      value: L.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET,
      label: Z.Z.Messages.KEYBIND_ACTIVATE_OVERLAY_CHAT
    })), s && (0, x.isWindows)() && a.push({
      value: L.kg4.TOGGLE_GO_LIVE_STREAMING,
      label: Z.Z.Messages.KEYBIND_TOGGLE_GO_LIVE_STREAMING
    }), (0, x.isDesktop)() && (a.push({
      value: L.kg4.NAVIGATE_BACK,
      label: Z.Z.Messages.KEYBIND_NAVIGATE_BACK
    }, {
      value: L.kg4.NAVIGATE_FORWARD,
      label: Z.Z.Messages.KEYBIND_NAVIGATE_FORWARD
    }, {
      value: L.kg4.SWITCH_TO_VOICE_CHANNEL,
      label: Z.Z.Messages.USER_SETTINGS_KEYBINDS_SWITCH_TO_VOICE_CHANNEL_LABEL
    }, {
      value: L.kg4.DISCONNECT_FROM_VOICE_CHANNEL,
      label: Z.Z.Messages.USER_SETTINGS_KEYBINDS_VOICE_CHANNEL_DISCONNECT_LABEL
    }), t && a.push({
      value: L.kg4.SOUNDBOARD,
      label: Z.Z.Messages.KEYBIND_SOUNDBOARD
    }, {
      value: L.kg4.SOUNDBOARD_HOLD,
      label: Z.Z.Messages.KEYBIND_SOUNDBOARD_HOLD
    }), n && a.push({
      value: L.kg4.SAVE_CLIP,
      label: Z.Z.Messages.CLIPS_SAVE
    })), a
  }
  get keybindDescriptions() {
    let {
      overlaySupported: e,
      canGoLive: s,
      enableClips: t
    } = this.props, n = {
      [L.kg4.UNASSIGNED]: Z.Z.Messages.KEYBIND_DESCRIPTION_UNASSIGNED,
      [L.kg4.PUSH_TO_MUTE]: Z.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_MUTE,
      [L.kg4.PUSH_TO_TALK]: Z.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK,
      [L.kg4.PUSH_TO_TALK_PRIORITY]: Z.Z.Messages.KEYBIND_DESCRIPTION_PUSH_TO_TALK_PRIORITY,
      [L.kg4.TOGGLE_MUTE]: Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_MUTE,
      [L.kg4.TOGGLE_DEAFEN]: Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_DEAFEN,
      [L.kg4.TOGGLE_VOICE_MODE]: Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_VOICE_MODE,
      [L.kg4.TOGGLE_STREAMER_MODE]: Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_STREAMER_MODE
    };
    return e && (n[L.kg4.TOGGLE_OVERLAY] = Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY, n[L.kg4.TOGGLE_OVERLAY_INPUT_LOCK] = Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_OVERLAY_INPUT_LOCK), s && (0, x.isWindows)() && (n[L.kg4.TOGGLE_GO_LIVE_STREAMING] = Z.Z.Messages.KEYBIND_DESCRIPTION_TOGGLE_GO_LIVE_STREAMING), (0, x.isDesktop)() && (n[L.kg4.NAVIGATE_BACK] = Z.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_BACK, n[L.kg4.NAVIGATE_FORWARD] = Z.Z.Messages.KEYBIND_DESCRIPTION_NAVIGATE_FORWARD, n[L.kg4.SOUNDBOARD] = (0, x.isWindows)() ? Z.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_NO_POPOUT_WHEEL_SUPPORT : Z.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD, n[L.kg4.SOUNDBOARD_HOLD] = (0, x.isWindows)() ? Z.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD_NO_POPOUT_WHEEL_SUPPORT : Z.Z.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD, t && (n[L.kg4.SAVE_CLIP] = Z.Z.Messages.CLIPS_KEYBIND_DESCRIPTION)), n
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
      className: j.marginTop60,
      children: (0, n.jsx)(_.EmptyStateImage, {
        darkSrc: t(572279),
        lightSrc: t(871803),
        width: 320,
        height: 170
      })
    })
  }
  render() {
    let e = this.props.enableClips,
      s = l()(this.props.keybinds).reject(e => e.managed && ![L.kg4.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET, L.kg4.SAVE_CLIP].includes(e.action)).reject(s => !e && s.action === L.kg4.SAVE_CLIP).reject(e => !this.props.allowSoundboard && (e.action === L.kg4.SOUNDBOARD || e.action === L.kg4.SOUNDBOARD_HOLD)).sortBy(e => e.id).sortBy(e => !0 === e.managed ? -1 : 0).value();
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(_.FormSection, {
        tag: _.FormTitleTags.H1,
        title: Z.Z.Messages.KEYBINDS,
        children: x.isPlatformEmbedded ? (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)(h.Z, {
            justify: h.Z.Justify.BETWEEN,
            className: j.marginBottom20,
            children: [(0, n.jsx)(h.Z.Child, {
              grow: 0,
              children: (0, n.jsx)(R.Z, {
                messageType: R.Q.WARNING,
                children: Z.Z.Messages.ADD_KEYBIND_WARNING
              })
            }), (0, n.jsx)(h.Z.Child, {
              wrap: !0,
              grow: 0,
              children: (0, n.jsx)(_.Button, {
                size: _.ButtonSizes.LARGE,
                onClick: this.handleAddKeybind,
                children: Z.Z.Messages.ADD_KEYBIND
              })
            })]
          }), (0, n.jsx)(_.FormDivider, {}), (0, n.jsxs)(_.FormSection, {
            children: [this.renderKeybinds(s), this.renderEmpty(s)]
          })]
        }) : (0, n.jsx)(R.Z, {
          messageType: R.Q.INFO,
          textVariant: "text-lg/medium",
          className: v.browserNotice,
          children: Z.Z.Messages.KEYBIND_IN_BROSWER_NOTICE.format({
            downloadLink: L.EYA.DOWNLOAD
          })
        })
      }), (0, n.jsx)(_.FormDivider, {}), (0, n.jsxs)(_.FormSection, {
        tag: _.FormTitleTags.H1,
        title: Z.Z.Messages.USER_SETTINGS_KEYBINDS_DEFAULT_KEYBINDS_TITLE,
        className: j.marginTop60,
        children: [(0, n.jsxs)("div", {
          className: v.defaultKeybind,
          children: [(0, n.jsx)(_.Text, {
            variant: "text-md/normal",
            children: Z.Z.Messages.USER_SETTINGS_KEYBINDS_SHOW_LIST_TITLE
          }), (0, n.jsx)("div", {
            className: v.defaultKeybindShortcutGroup,
            children: (0, n.jsx)(_.KeyCombo, {
              shortcut: S._.binds["0"],
              className: v.__invalid_defaultKeybindShortcut
            })
          })]
        }), (0, n.jsx)(_.FormDivider, {}), (0, n.jsx)(B, {
          children: e => (0, n.jsx)(n.Fragment, {
            children: e.map((e, s) => {
              let t = (0, I.UD)(e),
                i = (0, I.U6)(e),
                o = G[e];
              return (0, n.jsxs)("div", {
                className: v.defaultKeybindGroup,
                children: [(0, n.jsx)(_.Heading, {
                  variant: "heading-deprecated-12/semibold",
                  className: r()(v.defaultKeybindGroupHeader, {
                    [v.defaultKeybindGroupWithDescription]: null != i
                  }),
                  children: t
                }), null != i && (0, n.jsx)(_.Text, {
                  color: "header-secondary",
                  className: v.defaultKeybindGroupDescription,
                  variant: "text-sm/normal",
                  children: i
                }), (0, n.jsx)(_.FormDivider, {}), o.map(e => (0, n.jsxs)(a.Fragment, {
                  children: [(0, n.jsxs)("div", {
                    className: v.defaultKeybind,
                    children: [(0, n.jsx)(_.Text, {
                      variant: "text-md/normal",
                      children: e.description
                    }), (0, n.jsx)("div", {
                      className: v.defaultKeybindShortcutGroup,
                      children: e.binds.map(e => (0, n.jsx)(_.KeyCombo, {
                        shortcut: e
                      }, e))
                    })]
                  }), (0, n.jsx)(_.FormDivider, {})]
                }, e.description))]
              }, s)
            })
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), U(this, "handleAddKeybind", () => {
      E.Z.addKeybind()
    })
  }
}

function Y() {
  let e = (0, c.e7)([O.Z], () => O.Z.getState()),
    s = (0, c.e7)([m.Z], () => (0, A.Z)(m.Z)),
    t = (0, c.e7)([g.Z], () => g.Z.isSupported()),
    a = (0, C.Go)();
  return (0, n.jsx)(y, {
    keybinds: e,
    canGoLive: s,
    overlaySupported: t,
    allowSoundboard: (0, x.isWindows)(),
    enableClips: a
  })
}