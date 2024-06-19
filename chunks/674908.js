a.d(t, {
  Z: function() {
    return L
  }
}), a(47120);
var n = a(735250),
  l = a(470079),
  r = a(120356),
  i = a.n(r),
  s = a(952265),
  o = a(481060),
  u = a(239091),
  d = a(579806),
  c = a(889161),
  m = a(592125),
  v = a(430824),
  f = a(496675),
  p = a(594174),
  h = a(709054),
  x = a(39604),
  g = a(680056),
  j = a(678651),
  C = a(445229),
  b = a(20437),
  E = a(356659),
  N = a(710111),
  T = a(689938),
  I = a(240356),
  S = a(413135).Buffer;

function L(e) {
  let {
    clip: t,
    channelId: r,
    clipName: L,
    onSetClipName: w,
    onClose: y
  } = e, {
    videoPlayerRef: k,
    cropData: M,
    voiceAudioEnabled: R,
    setVoiceAudioEnabled: _,
    applicationAudioEnabled: Z,
    setApplicationAudioEnabled: D
  } = (0, b.S)(), [P, A] = l.useState(null), {
    onShareClick: O
  } = (0, g.Z)({
    channelId: r,
    setExporting: e => A(null != e ? "share" : null)
  });
  async function F() {
    var e;
    let l = m.Z.getChannel(r);
    A("export"), null === (e = k.current) || void 0 === e || e.pause();
    try {
      let e = await (0, x.rO)(t, {
        ...M,
        applicationAudio: Z,
        voiceAudio: R
      });
      (0, o.openModalLazy)(async () => {
        let {
          default: r
        } = await Promise.all([a.e("49237"), a.e("99387"), a.e("56035"), a.e("358")]).then(a.bind(a, 758961)), i = (null == l ? void 0 : l.guild_id) != null ? v.Z.getGuild(l.guild_id) : null, s = null != i && (0, c.Gw)(i, f.Z, p.default).canCreateExpressions, o = null == L || "" === L ? (0, E.yl)(h.default.extractTimestamp(t.id)) : L, u = o.slice(0, N.Ek);
        return t => (0, n.jsx)(r, {
          ...t,
          showGuildPicker: !0,
          guildId: s ? null == l ? void 0 : l.guild_id : void 0,
          sourceFile: {
            file: new File([e], "".concat(o, ".mp4"), {
              type: "video/mp4"
            }),
            name: u
          }
        })
      })
    } catch (e) {} finally {
      A(null)
    }
  }
  async function B() {
    var e;
    A("export"), null === (e = k.current) || void 0 === e || e.pause();
    try {
      let e = await (0, x.rO)(t, {
          ...M,
          applicationAudio: Z,
          voiceAudio: R
        }),
        a = await e.arrayBuffer();
      await d.Z.fileManager.saveWithDialog(S.from(a), (0, E.EF)(t.id))
    } catch (e) {} finally {
      A(null)
    }
  }

  function U() {
    var e;
    null === (e = k.current) || void 0 === e || e.pause(), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("15915")]).then(a.bind(a, 799677));
      return a => (0, n.jsx)(e, {
        clip: t,
        ...a,
        onClose: async () => {
          await a.onClose()
        },
        onAfterDelete: async () => {
          await a.onClose(), y()
        }
      })
    })
  }
  return (0, n.jsxs)("div", {
    className: I.clipForm,
    children: [(0, n.jsxs)("div", {
      className: i()(I.clipFormSection, I.editSection),
      children: [(0, n.jsx)(o.FormItem, {
        className: I.clipFormItem,
        title: T.Z.Messages.CLIPS_EDIT_TITLE,
        children: (0, n.jsx)(o.TextInput, {
          onChange: e => {
            "" === e ? w(void 0) : w(e)
          },
          value: L,
          minLength: E.XH,
          maxLength: E.MG,
          placeholder: T.Z.Messages.CLIPS_UNTITLED
        })
      }), (0, n.jsxs)("div", {
        className: I.clipFormSwitches,
        children: [(0, n.jsx)(o.FormSwitch, {
          onChange: D,
          value: Z,
          hideBorder: !0,
          children: T.Z.Messages.CLIPS_EDIT_GAME_AUDIO
        }), (0, n.jsx)(o.FormSwitch, {
          onChange: _,
          value: R,
          hideBorder: !0,
          children: T.Z.Messages.CLIPS_EDIT_VOICE_CHANNEL_AUDIO
        })]
      })]
    }), (0, n.jsxs)("div", {
      className: i()(I.clipFormSection, I.metadataSection),
      children: [(0, n.jsx)(j.Z, {
        clip: t
      }), (0, n.jsx)(C.Z, {
        className: I.userList,
        clip: t
      })]
    }), (0, n.jsxs)("div", {
      className: I.clipFormFooter,
      children: [(0, n.jsx)(o.Button, {
        submitting: "share" === P,
        disabled: null != P && "share" !== P,
        color: o.Button.Colors.BRAND,
        wrapperClassName: I.clipFormFooterButton,
        onClick: () => O({
          clip: {
            ...t,
            name: L
          },
          cropData: M,
          applicationAudioEnabled: Z,
          voiceAudioEnabled: R,
          onShareComplete: () => {
            s.Mr(E.Ut), s.Mr(E.Qr)
          }
        }),
        children: T.Z.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, n.jsx)(o.Button, {
        size: o.Button.Sizes.ICON,
        className: I.clipFormFooterButton,
        disabled: null != P,
        wrapperClassName: i()(I.clipFormFooterButton, {
          [I.submittingWrapperFix]: null != P
        }),
        color: o.Button.Colors.PRIMARY,
        onClick: y,
        children: T.Z.Messages.SAVE_CHANGES
      }), (0, n.jsx)(o.Button, {
        "aria-label": T.Z.Messages.MORE_OPTIONS,
        size: o.Button.Sizes.ICON,
        wrapperClassName: i()(I.clipFormFooterButton, {
          [I.submittingWrapperFix]: null != P
        }),
        submitting: "export" === P,
        disabled: null != P && "export" !== P,
        color: o.Button.Colors.PRIMARY,
        onClick: function(e) {
          (0, u.jW)(e, async () => {
            let {
              default: e
            } = await a.e("32157").then(a.bind(a, 151090));
            return t => (0, n.jsx)(e, {
              ...t,
              onExportToSoundboard: F,
              onExportToFile: B,
              onDelete: U,
              channelId: r
            })
          })
        },
        children: (0, n.jsx)(o.MoreHorizontalIcon, {
          size: "md",
          color: "currentColor"
        })
      })]
    })]
  })
}