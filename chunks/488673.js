"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("222007");
var n = a("37983"),
  l = a("884691"),
  i = a("414456"),
  r = a.n(i),
  s = a("551042"),
  u = a("77078"),
  o = a("272030"),
  d = a("49671"),
  c = a("817963"),
  f = a("42203"),
  m = a("305961"),
  v = a("957255"),
  E = a("697218"),
  p = a("433487"),
  h = a("299039"),
  C = a("803725"),
  N = a("142485"),
  x = a("643290"),
  g = a("431734"),
  I = a("80028"),
  _ = a("846325"),
  S = a("782340"),
  L = a("515597"),
  T = a("446825").Buffer;

function M(e) {
  let {
    clip: t,
    cropData: i,
    channelId: M,
    clipName: A,
    voiceAudioEnabled: R,
    applicationAudioEnabled: j,
    onSetClipName: b,
    onChangeVoiceAudioEnabled: P,
    onChangeApplicationAudioEnabled: w,
    onPrompt: D,
    onClose: y
  } = e, [O, k] = l.useState(null), {
    onShareClick: F
  } = (0, N.default)({
    channelId: M,
    setExporting: e => k(null != e ? "share" : null)
  });
  async function U() {
    let e = f.default.getChannel(M);
    k("export"), D(!0);
    try {
      let l = await (0, C.exportClip)(t, {
        ...i,
        applicationAudio: j,
        voiceAudio: R
      });
      (0, u.openModalLazy)(async () => {
        let {
          default: i
        } = await a.el("823749").then(a.bind(a, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? m.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, E.default).canCreateExpressions, u = null == A || "" === A ? (0, I.CLIP_NAME_TEMPLATE)(h.default.extractTimestamp(t.id)) : A, o = u.slice(0, _.MAX_LENGTH_SOUND_NAME);
        return t => (0, n.jsx)(i, {
          ...t,
          showGuildPicker: !0,
          guildId: s ? null == e ? void 0 : e.guild_id : void 0,
          sourceFile: {
            file: new File([l], "".concat(u, ".mp4"), {
              type: "video/mp4"
            }),
            name: o
          }
        })
      })
    } catch (e) {} finally {
      k(null), D(!1)
    }
  }
  async function G() {
    k("export"), D(!0);
    try {
      let e = await (0, C.exportClip)(t, {
          ...i,
          applicationAudio: j,
          voiceAudio: R
        }),
        a = await e.arrayBuffer();
      await d.default.fileManager.saveWithDialog(T.from(a), (0, I.CLIPS_EXPORT_FILENAME)(t.id))
    } catch (e) {} finally {
      k(null), D(!1)
    }
  }

  function B() {
    D(!0), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("386092").then(a.bind(a, "386092"));
      return a => (0, n.jsx)(e, {
        clip: t,
        ...a,
        onClose: async () => {
          await a.onClose(), D(!1)
        },
        onAfterDelete: async () => {
          await a.onClose(), y(), D(!1)
        }
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: L.clipForm,
    children: [(0, n.jsxs)("div", {
      className: r(L.clipFormSection, L.editSection),
      children: [(0, n.jsx)(u.FormItem, {
        className: L.clipFormItem,
        title: S.default.Messages.CLIPS_EDIT_TITLE,
        children: (0, n.jsx)(u.TextInput, {
          onChange: e => {
            "" === e ? b(void 0) : b(e)
          },
          value: A,
          minLength: I.CLIP_NAME_MIN_CHAR_LENGTH,
          maxLength: I.CLIP_NAME_MAX_CHAR_LENGTH,
          placeholder: S.default.Messages.CLIPS_UNTITLED
        })
      }), (0, n.jsxs)("div", {
        className: L.clipFormSwitches,
        children: [(0, n.jsx)(u.FormSwitch, {
          onChange: w,
          value: j,
          hideBorder: !0,
          children: S.default.Messages.CLIPS_EDIT_GAME_AUDIO
        }), (0, n.jsx)(u.FormSwitch, {
          onChange: P,
          value: R,
          hideBorder: !0,
          children: S.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: r(L.clipFormSection, L.metadataSection),
      children: [(0, n.jsx)(x.default, {
        clip: t
      }), (0, n.jsx)(g.default, {
        className: L.userList,
        clip: t
      })]
    }), (0, n.jsxs)("div", {
      className: L.clipFormFooter,
      children: [(0, n.jsx)(u.Button, {
        submitting: "share" === O,
        disabled: null != O && "share" !== O,
        color: u.Button.Colors.BRAND,
        wrapperClassName: L.clipFormFooterButton,
        onClick: () => F({
          clip: {
            ...t,
            name: A
          },
          cropData: i,
          applicationAudioEnabled: j,
          voiceAudioEnabled: R,
          onShareComplete: () => {
            s.closeModal(I.CLIPS_EDIT_MODAL_KEY), s.closeModal(I.CLIPS_GALLERY_MODAL_KEY)
          }
        }),
        children: S.default.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, n.jsx)(u.Button, {
        size: u.Button.Sizes.ICON,
        className: L.clipFormFooterButton,
        disabled: null != O,
        wrapperClassName: r(L.clipFormFooterButton, {
          [L.submittingWrapperFix]: null != O
        }),
        color: u.Button.Colors.PRIMARY,
        onClick: y,
        children: S.default.Messages.SAVE_CHANGES
      }), (0, n.jsx)(u.Button, {
        "aria-label": S.default.Messages.MORE_OPTIONS,
        size: u.Button.Sizes.ICON,
        wrapperClassName: r(L.clipFormFooterButton, {
          [L.submittingWrapperFix]: null != O
        }),
        submitting: "export" === O,
        disabled: null != O && "export" !== O,
        color: u.Button.Colors.PRIMARY,
        onClick: function(e) {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await a.el("87102").then(a.bind(a, "87102"));
            return t => (0, n.jsx)(e, {
              ...t,
              onExportToSoundboard: U,
              onExportToFile: G,
              onDelete: B,
              channelId: M
            })
          })
        },
        children: (0, n.jsx)(p.default, {})
      })]
    })]
  })
}