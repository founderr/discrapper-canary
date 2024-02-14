"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("222007");
var l = a("37983"),
  n = a("884691"),
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
  p = a("697218"),
  h = a("433487"),
  x = a("299039"),
  C = a("803725"),
  g = a("142485"),
  E = a("643290"),
  N = a("431734"),
  L = a("80028"),
  I = a("846325"),
  j = a("782340"),
  M = a("309799"),
  T = a("446825").Buffer;

function S(e) {
  let {
    clip: t,
    cropData: i,
    channelId: S,
    clipName: _,
    voiceAudioEnabled: b,
    applicationAudioEnabled: w,
    onSetClipName: R,
    onChangeVoiceAudioEnabled: A,
    onChangeApplicationAudioEnabled: y,
    onPrompt: D,
    onClose: k
  } = e, [P, O] = n.useState(null), {
    onShareClick: F
  } = (0, g.default)({
    channelId: S,
    setExporting: e => O(null != e ? "share" : null)
  });
  async function B() {
    let e = f.default.getChannel(S);
    O("export"), D(!0);
    try {
      let n = await (0, C.exportClip)(t, {
        ...i,
        applicationAudio: w,
        voiceAudio: b
      });
      (0, u.openModalLazy)(async () => {
        let {
          default: i
        } = await a.el("823749").then(a.bind(a, "823749")), r = (null == e ? void 0 : e.guild_id) != null ? m.default.getGuild(e.guild_id) : null, s = null != r && (0, c.getManageResourcePermissions)(r, v.default, p.default).canCreateExpressions, u = null == _ || "" === _ ? (0, L.CLIP_NAME_TEMPLATE)(x.default.extractTimestamp(t.id)) : _, o = u.slice(0, I.MAX_LENGTH_SOUND_NAME);
        return t => (0, l.jsx)(i, {
          ...t,
          showGuildPicker: !0,
          guildId: s ? null == e ? void 0 : e.guild_id : void 0,
          sourceFile: {
            file: new File([n], "".concat(u, ".mp4"), {
              type: "video/mp4"
            }),
            name: o
          }
        })
      })
    } catch (e) {} finally {
      O(null), D(!1)
    }
  }
  async function U() {
    O("export"), D(!0);
    try {
      let e = await (0, C.exportClip)(t, {
          ...i,
          applicationAudio: w,
          voiceAudio: b
        }),
        a = await e.arrayBuffer();
      await d.default.fileManager.saveWithDialog(T.from(a), (0, L.CLIPS_EXPORT_FILENAME)(t.id))
    } catch (e) {} finally {
      O(null), D(!1)
    }
  }

  function H() {
    D(!0), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await a.el("386092").then(a.bind(a, "386092"));
      return a => (0, l.jsx)(e, {
        clip: t,
        ...a,
        onClose: async () => {
          await a.onClose(), D(!1)
        },
        onAfterDelete: async () => {
          await a.onClose(), k(), D(!1)
        }
      })
    })
  }
  return (0, l.jsxs)("div", {
    className: M.clipForm,
    children: [(0, l.jsxs)("div", {
      className: r(M.clipFormSection, M.editSection),
      children: [(0, l.jsx)(u.FormItem, {
        className: M.clipFormItem,
        title: j.default.Messages.CLIPS_EDIT_TITLE,
        children: (0, l.jsx)(u.TextInput, {
          onChange: e => {
            "" === e ? R(void 0) : R(e)
          },
          value: _,
          minLength: L.CLIP_NAME_MIN_CHAR_LENGTH,
          maxLength: L.CLIP_NAME_MAX_CHAR_LENGTH,
          placeholder: j.default.Messages.CLIPS_UNTITLED
        })
      }), (0, l.jsxs)("div", {
        className: M.clipFormSwitches,
        children: [(0, l.jsx)(u.FormSwitch, {
          onChange: y,
          value: w,
          hideBorder: !0,
          children: j.default.Messages.CLIPS_EDIT_GAME_AUDIO
        }), (0, l.jsx)(u.FormSwitch, {
          onChange: A,
          value: b,
          hideBorder: !0,
          children: j.default.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
        })]
      })]
    }), (0, l.jsxs)("div", {
      className: r(M.clipFormSection, M.metadataSection),
      children: [(0, l.jsx)(E.default, {
        clip: t
      }), (0, l.jsx)(N.default, {
        className: M.userList,
        clip: t
      })]
    }), (0, l.jsxs)("div", {
      className: M.clipFormFooter,
      children: [(0, l.jsx)(u.Button, {
        submitting: "share" === P,
        disabled: null != P && "share" !== P,
        color: u.Button.Colors.BRAND,
        wrapperClassName: M.clipFormFooterButton,
        onClick: () => F({
          clip: {
            ...t,
            name: _
          },
          cropData: i,
          applicationAudioEnabled: w,
          voiceAudioEnabled: b,
          onShareComplete: () => {
            s.closeModal(L.CLIPS_EDIT_MODAL_KEY), s.closeModal(L.CLIPS_GALLERY_MODAL_KEY)
          }
        }),
        children: j.default.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, l.jsx)(u.Button, {
        size: u.Button.Sizes.ICON,
        className: M.clipFormFooterButton,
        disabled: null != P,
        wrapperClassName: r(M.clipFormFooterButton, {
          [M.submittingWrapperFix]: null != P
        }),
        color: u.Button.Colors.PRIMARY,
        onClick: k,
        children: j.default.Messages.SAVE_CHANGES
      }), (0, l.jsx)(u.Button, {
        "aria-label": j.default.Messages.MORE_OPTIONS,
        size: u.Button.Sizes.ICON,
        wrapperClassName: r(M.clipFormFooterButton, {
          [M.submittingWrapperFix]: null != P
        }),
        submitting: "export" === P,
        disabled: null != P && "export" !== P,
        color: u.Button.Colors.PRIMARY,
        onClick: function(e) {
          (0, o.openContextMenuLazy)(e, async () => {
            let {
              default: e
            } = await a.el("87102").then(a.bind(a, "87102"));
            return t => (0, l.jsx)(e, {
              ...t,
              onExportToSoundboard: B,
              onExportToFile: U,
              onDelete: H,
              channelId: S
            })
          })
        },
        children: (0, l.jsx)(h.default, {})
      })]
    })]
  })
}