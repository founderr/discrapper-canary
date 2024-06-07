"use strict";
n.r(t), n.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return _
  },
  default: function() {
    return T
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
  h = n("981631"),
  N = n("689938"),
  v = n("287950");
let _ = "VoiceChannelStatusModal";

function T(e) {
  let {
    channel: t,
    transitionState: n,
    onClose: T
  } = e, m = (0, a.useStateFromStores)([d.default], () => d.default.getChannelStatus(t)), I = (0, a.useStateFromStores)([E.default], () => E.default.getMediaSessionId()), [g, A] = u.useState(null != m ? m : ""), [p, L] = u.useState(!1), [O, M] = u.useState(null), y = g.length > 500;
  u.useEffect(() => {
    C.default.track(h.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let G = e => {
      M(new i.APIError(e, e.status).getAnyErrorMessage())
    },
    x = async e => {
      g === m && T(), null == e || e.preventDefault(), M(null), L(!0);
      let n = g.length,
        l = g.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
      try {
        let e = await s.default.updateVoiceChannelStatus(t.id, g);
        204 === e.status ? (C.default.track(h.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
          guild_id: t.guild_id,
          channel_id: t.id,
          media_session_id: I,
          raw_length: n,
          text_length: l
        }), T()) : G(e)
      } catch (e) {
        G(e)
      }
      L(!1)
    }, [V, D] = u.useState((0, c.toRichValue)(g)), P = async () => (!y && !p && await x(), Promise.resolve({
      shouldClear: !1,
      shouldRefocus: !0
    }));
  return (0, l.jsx)("form", {
    onSubmit: x,
    className: v.form,
    children: (0, l.jsxs)(r.ModalRoot, {
      transitionState: n,
      size: r.ModalSize.SMALL,
      children: [(0, l.jsxs)(r.ModalContent, {
        children: [(0, l.jsxs)(r.ModalHeader, {
          direction: S.default.Direction.VERTICAL,
          className: v.modalHeader,
          separator: !1,
          children: [(0, l.jsx)(r.ModalCloseButton, {
            className: v.closeButton,
            onClick: T
          }), (0, l.jsx)("div", {
            className: v.headerImage
          }), (0, l.jsx)(r.FormTitle, {
            tag: "h1",
            className: v.title,
            children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, l.jsx)(r.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, l.jsxs)(r.FormSection, {
          className: v.inputSection,
          title: N.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, l.jsx)(f.default, {
            innerClassName: v.textArea,
            textValue: g,
            richValue: V,
            placeholder: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
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
            parentModalKey: _,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != O ? (0, l.jsx)(r.FormErrorBlock, {
            className: v.error,
            children: O
          }) : null]
        })]
      }), (0, l.jsxs)(r.ModalFooter, {
        justify: S.default.Justify.BETWEEN,
        direction: S.default.Direction.HORIZONTAL,
        children: [(0, l.jsx)(r.Button, {
          color: r.Button.Colors.PRIMARY,
          onClick: T,
          children: N.default.Messages.CANCEL
        }), (0, l.jsx)(r.Button, {
          onClick: x,
          submitting: p,
          className: v.button,
          disabled: y,
          children: N.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}