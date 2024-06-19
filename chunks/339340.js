t.r(n), t.d(n, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return T
  },
  default: function() {
    return h
  }
}), t(47120), t(757143);
var l = t(735250),
  i = t(470079),
  u = t(399606),
  r = t(343817),
  a = t(481060),
  o = t(787014),
  s = t(12498),
  d = t(541716),
  c = t(752305),
  E = t(893718),
  C = t(19780),
  f = t(285952),
  N = t(626135),
  _ = t(981631),
  Z = t(689938),
  I = t(685782);
let T = "VoiceChannelStatusModal";

function h(e) {
  let {
    channel: n,
    transitionState: t,
    onClose: h
  } = e, S = (0, u.e7)([s.Z], () => s.Z.getChannelStatus(n)), g = (0, u.e7)([C.Z], () => C.Z.getMediaSessionId()), [A, L] = i.useState(null != S ? S : ""), [v, O] = i.useState(!1), [m, M] = i.useState(null), P = A.length > 500;
  i.useEffect(() => {
    N.default.track(_.rMx.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: n.guild_id
    })
  }, [n.guild_id]);
  let V = e => {
      M(new r.Hx(e, e.status).getAnyErrorMessage())
    },
    p = async e => {
      A === S && h(), null == e || e.preventDefault(), M(null), O(!0);
      let t = A.length,
        l = A.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
      try {
        let e = await o.ZP.updateVoiceChannelStatus(n.id, A);
        204 === e.status ? (N.default.track(_.rMx.VOICE_CHANNEL_TOPIC_SET, {
          guild_id: n.guild_id,
          channel_id: n.id,
          media_session_id: g,
          raw_length: t,
          text_length: l
        }), h()) : V(e)
      } catch (e) {
        V(e)
      }
      O(!1)
    }, [D, x] = i.useState((0, c.JM)(A)), G = async () => (!P && !v && await p(), Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    }));
  return (0, l.jsx)("form", {
    onSubmit: p,
    className: I.form,
    children: (0, l.jsxs)(a.ModalRoot, {
      transitionState: t,
      size: a.ModalSize.SMALL,
      children: [(0, l.jsxs)(a.ModalContent, {
        children: [(0, l.jsxs)(a.ModalHeader, {
          direction: f.Z.Direction.VERTICAL,
          className: I.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(a.ModalCloseButton, {
            className: I.closeButton,
            onClick: h
          }), (0, l.jsx)("div", {
            className: I.headerImage
          }), (0, l.jsx)(a.FormTitle, {
            tag: "h1",
            className: I.title,
            children: Z.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(a.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: Z.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(a.FormSection, {
          className: I.inputSection,
          title: Z.Z.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(E.Z, {
            innerClassName: I.textArea,
            textValue: A,
            richValue: D,
            placeholder: Z.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: n.name
            }),
            focused: !0,
            channel: n,
            onChange: (e, n, t) => {
              L(n), x(t)
            },
            onSubmit: G,
            type: d.I.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: T,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != m ? (0, l.jsx)(a.FormErrorBlock, {
            className: I.error,
            children: m
          }) : null]
        })]
      }), (0, l.jsxs)(a.ModalFooter, {
        justify: f.Z.Justify.BETWEEN,
        direction: f.Z.Direction.HORIZONTAL,
        children: [(0, l.jsx)(a.Button, {
          color: a.Button.Colors.PRIMARY,
          onClick: h,
          children: Z.Z.Messages.CANCEL
        }), (0, l.jsx)(a.Button, {
          onClick: p,
          submitting: v,
          className: I.button,
          disabled: P,
          children: Z.Z.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}