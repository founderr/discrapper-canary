"use strict";
l.r(t), l.d(t, {
  VOICE_CHANNEL_STATUS_MODAL_KEY: function() {
    return m
  },
  default: function() {
    return _
  }
}), l("222007"), l("781738");
var n = l("37983"),
  a = l("884691"),
  s = l("65597"),
  u = l("77078"),
  r = l("18054"),
  o = l("207273"),
  i = l("850391"),
  d = l("149022"),
  c = l("681060"),
  f = l("945956"),
  C = l("145131"),
  h = l("599110"),
  S = l("49111"),
  T = l("782340"),
  N = l("658812");
let m = "VoiceChannelStatusModal";

function _(e) {
  let {
    channel: t,
    transitionState: l,
    onClose: _
  } = e, A = (0, s.default)([o.default], () => o.default.getChannelStatus(t)), L = (0, s.default)([f.default], () => f.default.getMediaSessionId()), [g, I] = a.useState(null != A ? A : ""), [O, p] = a.useState(!1), [M, E] = a.useState(null);
  a.useEffect(() => {
    h.default.track(S.AnalyticEvents.OPEN_MODAL, {
      type: "Voice Channel Topic Modal",
      guild_id: t.guild_id
    })
  }, [t.guild_id]);
  let v = async e => {
    g === A && _(), null == e || e.preventDefault(), E(null), p(!0);
    let l = g.length,
      n = g.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length;
    await r.default.updateVoiceChannelStatus(t.id, g).then(e => {
      204 === e.status ? (h.default.track(S.AnalyticEvents.VOICE_CHANNEL_TOPIC_SET, {
        guild_id: t.guild_id,
        channel_id: t.id,
        media_session_id: L,
        raw_length: l,
        text_length: n
      }), _()) : E(e.body.message)
    }, e => {
      E(e.body.message)
    }), p(!1)
  }, [x, V] = a.useState((0, d.toRichValue)(g));
  return (0, n.jsx)("form", {
    onSubmit: v,
    className: N.form,
    children: (0, n.jsxs)(u.ModalRoot, {
      transitionState: l,
      size: u.ModalSize.SMALL,
      children: [(0, n.jsxs)(u.ModalContent, {
        children: [(0, n.jsxs)(u.ModalHeader, {
          direction: C.default.Direction.VERTICAL,
          className: N.modalHeader,
          separator: !1,
          children: [(0, n.jsx)(u.ModalCloseButton, {
            className: N.closeButton,
            onClick: _
          }), (0, n.jsx)("div", {
            className: N.headerImage
          }), (0, n.jsx)(u.FormTitle, {
            tag: "h1",
            className: N.title,
            children: T.default.Messages.VOICE_CHANNEL_STATUS_MODAL_TITLE
          }), (0, n.jsx)(u.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: T.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SUBTITLE
          })]
        }), (0, n.jsxs)(u.FormSection, {
          className: N.inputSection,
          title: T.default.Messages.VOICE_CHANNEL_STATUS,
          children: [(0, n.jsx)(c.default, {
            innerClassName: N.textArea,
            textValue: g,
            richValue: x,
            placeholder: T.default.Messages.VOICE_CHANNEL_STATUS_MODAL_PREFILL_CHANNEL.format({
              channelName: t.name
            }),
            focused: !0,
            channel: t,
            onChange: (e, t, l) => {
              I(t), V(l)
            },
            onSubmit: () => (v(), Promise.resolve({
              shouldClear: !1,
              shouldRefocus: !0
            })),
            type: i.ChatInputTypes.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: m,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0
          }), null != M ? (0, n.jsx)(u.FormErrorBlock, {
            className: N.error,
            children: M
          }) : null]
        })]
      }), (0, n.jsxs)(u.ModalFooter, {
        justify: C.default.Justify.BETWEEN,
        direction: C.default.Direction.HORIZONTAL,
        children: [(0, n.jsx)(u.Button, {
          color: u.Button.Colors.PRIMARY,
          onClick: _,
          children: T.default.Messages.CANCEL
        }), (0, n.jsx)(u.Button, {
          onClick: v,
          submitting: O,
          className: N.button,
          disabled: g.length > 500,
          children: T.default.Messages.VOICE_CHANNEL_STATUS_MODAL_SET_STATUS
        })]
      })]
    })
  })
}