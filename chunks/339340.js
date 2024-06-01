"use strict";
n.r(t), n.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return T
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
  g = n("689938"),
  C = n("287950");
let T = "VoiceChannelStatusModal";

function h(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: h
  } = e, L = (0, i.useStateFromStores)([d.default], () => d.default.getChannelStatus(t)), M = (0, i.useStateFromStores)([E.default], () => E.default.getMediaSessionId()), [I, A] = a.useState(null != L ? L : ""), [O, m] = a.useState(!1), [v, U] = a.useState(null), p = I.length > 500;
  a.useEffect(() => {
    N.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let G = e => {
      U(new u.APIError(e, e.status).getAnyErrorMessage())
    },
    y = async e => {
      I === L && h(), null == e || e.preventDefault(), U(null), m(!0);
      let n = I.length,
        l = I.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
      try {
        let e = await r.default.updateVoiceChannelStatus(t.id, I);
        204 === e.status ? (N.default.track(_.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
          guild_id: t.guild_id,
          channel_id: t.id,
          media_session_id: M,
          raw_length: n,
          text_length: l
        }), h()) : G(e)
      } catch (e) {
        G(e)
      }
      m(!1)
    }, [R, x] = a.useState((0, c.toRichValue)(I)), F = async () => (!p && !O && await y(), Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    }));
  return (0, l.jsx)("form", {
    onSubmit: y,
    className: C.form,
    children: (0, l.jsxs)(s.ModalRoot, {
      transitionState: n,
      size: s.ModalSize.SMALL,
      children: [(0, l.jsxs)(s.ModalContent, {
        children: [(0, l.jsxs)(s.ModalHeader, {
          direction: S.default.Direction.VERTICAL,
          className: C.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(s.ModalCloseButton, {
            className: C.closeButton,
            onClick: h
          }), (0, l.jsx)("div", {
            className: C.headerImage
          }), (0, l.jsx)(s.FormTitle, {
            tag: "h1",
            className: C.title,
            children: g.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(s.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: g.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(s.FormSection, {
          className: C.inputSection,
          title: g.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(f.default, {
            innerClassName: C.textArea,
            textValue: I,
            richValue: R,
            placeholder: g.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: t.name
            }),
            focused: !0,
            channel: t,
            onChange: (e, t, n) => {
              A(t), x(n)
            },
            onSubmit: F,
            type: o.ChatInputTypes.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: T,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != v ? (0, l.jsx)(s.FormErrorBlock, {
            className: C.error,
            children: v
          }) : null]
        })]
      }), (0, l.jsxs)(s.ModalFooter, {
        justify: S.default.Justify.BETWEEN,
        direction: S.default.Direction.HORIZONTAL,
        children: [(0, l.jsx)(s.Button, {
          color: s.Button.Colors.PRIMARY,
          onClick: h,
          children: g.default.Messages.CANCEL
        }), (0, l.jsx)(s.Button, {
          onClick: y,
          submitting: O,
          className: C.button,
          disabled: p,
          children: g.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}