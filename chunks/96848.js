"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120"), n("757143");
var i = n("735250"),
  l = n("470079"),
  s = n("481060"),
  a = n("907040"),
  r = n("642113"),
  u = n("981631"),
  o = n("185923"),
  c = n("689938"),
  d = n("84099");
let m = {
    section: u.AnalyticsSections.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "gift_effect_emoji_picker"
  },
  p = o.EmojiIntention.GIFT;

function f(e) {
  let {
    setEmojiConfetti: t,
    emojiConfetti: n
  } = e, [u, o] = l.useState(!1), f = e => (0, i.jsxs)("div", {
    className: d.customGiftContent,
    children: [(0, i.jsxs)("div", {
      className: d.customGiftHeader,
      children: [(0, i.jsx)(s.Text, {
        variant: "text-md/bold",
        children: c.default.Messages.GIFT_SELECT_EMOJI
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: c.default.Messages.GIFT_SELECT_SOUNDBOARD_OR_EMOJI_DESCRIPTION
      })]
    }), e]
  }), S = e => {
    null != t && (t(e), o(!1))
  };
  return (0, i.jsx)(s.Popout, {
    shouldShow: u,
    position: "bottom",
    align: "left",
    autoInvert: !1,
    onRequestClose: () => o(!1),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(s.Dialog, {
        children: (0, i.jsx)(a.default, {
          analyticsOverride: m,
          closePopout: t,
          onSelectEmoji: S,
          wrapper: "div",
          pickerIntention: p,
          renderHeader: f,
          headerClassName: d.emojiHeader,
          className: d.emojiList,
          listHeaderClassName: d.emojiList,
          searchProps: {
            accessory: (0, i.jsx)(i.Fragment, {})
          }
        })
      })
    },
    children: () => (0, i.jsx)("div", {
      className: d.container,
      children: (0, i.jsx)(s.Clickable, {
        className: d.emoji,
        onClick: () => o(!0),
        children: (null == n ? void 0 : n.name) == null ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(r.default, {
            className: d.emojiIcon,
            width: 14,
            height: 14
          }), (0, i.jsx)(s.Text, {
            className: d.text,
            variant: "text-sm/semibold",
            children: c.default.Messages.GIFT_SELECT_EMOJI
          })]
        }) : (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(s.Text, {
            className: d.textSelected,
            variant: "text-sm/semibold",
            children: null == n.guildId ? n.optionallyDiverseSequence : null
          }), (0, i.jsx)(s.Text, {
            className: d.text,
            variant: "text-sm/semibold",
            children: n.name.replace(/_/g, " ")
          })]
        })
      })
    })
  })
}