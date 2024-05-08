"use strict";
n.r(t), n.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return T
  },
  default: function() {
    return m
  }
}), n("47120"), n("757143");
var l = n("735250"),
  u = n("470079"),
  a = n("399606"),
  i = n("343817"),
  r = n("481060"),
  s = n("787014"),
  d = n("12498"),
  o = n("541716"),
  c = n("752305"),
  f = n("893718"),
  E = n("19780"),
  S = n("285952"),
  C = n("626135"),
  N = n("981631"),
  h = n("689938"),
  _ = n("407247");
let T = "VoiceChannelStatusModal";

function m(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: m
  } = e, v = (0, a.useStateFromStores)([d.default], () => d.default.getChannelStatus(t)), I = (0, a.useStateFromStores)([E.default], () => E.default.getMediaSessionId()), [g, A] = u.useState(null != v ? v : ""), [L, p] = u.useState(!1), [O, M] = u.useState(null), y = g.length > 500;
  u.useEffect(() => {
    C.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let G = e => {
      M(new i.APIError(e, e.status).getAnyErrorMessage())
    },
    V = async e => {
      g === v && m(), null == e || e.preventDefault(), M(null), p(!0);
      let n = g.length,
        l = g.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
      try {
        let e = await s.default.updateVoiceChannelStatus(t.id, g);
        204 === e.status ? (C.default.track(N.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
          guild_id: t.guild_id,
          channel_id: t.id,
          media_session_id: I,
          raw_length: n,
          text_length: l
        }), m()) : G(e)
      } catch (e) {
        G(e)
      }
      p(!1)
    }, [x, D] = u.useState((0, c.toRichValue)(g)), P = async () => (!y && !L && await V(), Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    }));
  return (0, l.jsx)("form", {
    onSubmit: V,
    className: _.form,
    children: (0, l.jsxs)(r.ModalRoot, {
      transitionState: n,
      size: r.ModalSize.SMALL,
      children: [(0, l.jsxs)(r.ModalContent, {
        children: [(0, l.jsxs)(r.ModalHeader, {
          direction: S.default.Direction.VERTICAL,
          className: _.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(r.ModalCloseButton, {
            className: _.closeButton,
            onClick: m
          }), (0, l.jsx)("div", {
            className: _.headerImage
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h1",
            className: _.title,
            children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(r.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(r.FormSection, {
          className: _.inputSection,
          title: h.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(f.default, {
            innerClassName: _.textArea,
            textValue: g,
            richValue: x,
            placeholder: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: t.name
            }),
            focused: !0,
            channel: t,
            onChange: (e, t, n) => {
              A(t), D(n)
            },
            onSubmit: P,
            type: o.ChatInputTypes.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: T,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != O ? (0, l.jsx)(r.FormErrorBlock, {
            className: _.error,
            children: O
          }) : null]
        })]
      }), (0, l.jsxs)(r.ModalFooter, {
        justify: S.default.Justify.BETWEEN,
        direction: S.default.Direction.HORIZONTAL,
        children: [(0, l.jsx)(r.Button, {
          color: r.Button.Colors.PRIMARY,
          onClick: m,
          children: h.default.Messages.CANCEL
        }), (0, l.jsx)(r.Button, {
          onClick: V,
          submitting: L,
          className: _.button,
          disabled: y,
          children: h.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}