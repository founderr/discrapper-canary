"use strict";
n.r(t), n.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return L
  },
  default: function() {
    return h
  }
}), n("47120"), n("757143");
var l = n("735250"),
  a = n("470079"),
  i = n("399606"),
  u = n("343817"),
  s = n("481060"),
  r = n("787014"),
  d = n("12498"),
  o = n("541716"),
  c = n("752305"),
  f = n("893718"),
  E = n("19780"),
  S = n("285952"),
  N = n("626135"),
  _ = n("981631"),
  C = n("689938"),
  g = n("287950");
let L = "VoiceChannelStatusModal";

function h(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: h
  } = e, T = (0, i.useStateFromStores)([d.default], () => d.default.getChannelStatus(t)), I = (0, i.useStateFromStores)([E.default], () => E.default.getMediaSessionId()), [m, A] = a.useState(null != T ? T : ""), [O, v] = a.useState(!1), [M, p] = a.useState(null), G = m.length > 500;
  a.useEffect(() => {
    N.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let U = e => {
      p(new u.APIError(e, e.status).getAnyErrorMessage())
    },
    F = async e => {
      m === T && h(), null == e || e.preventDefault(), p(null), v(!0);
      let n = m.length,
        l = m.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
      try {
        let e = await r.default.updateVoiceChannelStatus(t.id, m);
        204 === e.status ? (N.default.track(_.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
          guild_id: t.guild_id,
          channel_id: t.id,
          media_session_id: I,
          raw_length: n,
          text_length: l
        }), h()) : U(e)
      } catch (e) {
        U(e)
      }
      v(!1)
    }, [y, V] = a.useState((0, c.toRichValue)(m)), x = async () => (!G && !O && await F(), Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    }));
  return (0, l.jsx)("form", {
    onSubmit: F,
    className: g.form,
    children: (0, l.jsxs)(s.ModalRoot, {
      transitionState: n,
      size: s.ModalSize.SMALL,
      children: [(0, l.jsxs)(s.ModalContent, {
        children: [(0, l.jsxs)(s.ModalHeader, {
          direction: S.default.Direction.VERTICAL,
          className: g.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(s.ModalCloseButton, {
            className: g.closeButton,
            onClick: h
          }), (0, l.jsx)("div", {
            className: g.headerImage
          }), (0, l.jsx)(s.FormTitle, {
            tag: "h1",
            className: g.title,
            children: C.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(s.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: C.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(s.FormSection, {
          className: g.inputSection,
          title: C.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(f.default, {
            innerClassName: g.textArea,
            textValue: m,
            richValue: y,
            placeholder: C.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: t.name
            }),
            focused: !0,
            channel: t,
            onChange: (e, t, n) => {
              A(t), V(n)
            },
            onSubmit: x,
            type: o.ChatInputTypes.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: L,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != M ? (0, l.jsx)(s.FormErrorBlock, {
            className: g.error,
            children: M
          }) : null]
        })]
      }), (0, l.jsxs)(s.ModalFooter, {
        justify: S.default.Justify.BETWEEN,
        direction: S.default.Direction.HORIZONTAL,
        children: [(0, l.jsx)(s.Button, {
          color: s.Button.Colors.PRIMARY,
          onClick: h,
          children: C.default.Messages.CANCEL
        }), (0, l.jsx)(s.Button, {
          onClick: F,
          submitting: O,
          className: g.button,
          disabled: G,
          children: C.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}