"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("304497"),
  o = n("481060"),
  u = n("904245"),
  d = n("596454"),
  c = n("702346"),
  f = n("689938"),
  E = n("474059");

function _(e) {
  let {
    className: t,
    data: n,
    message: l
  } = e, r = Math.round(n.victorAnswerVotes / n.totalVotes * 100), c = l.messageReference, _ = a.useCallback(() => {
    null != c && u.default.jumpToMessage({
      channelId: c.channel_id,
      messageId: c.message_id,
      flash: !0,
      returnMessageId: l.id
    })
  }, [l.id, c]);
  return (0, s.jsxs)("div", {
    className: i()(E.container, t),
    children: [null != n.victorEmoji ? (0, s.jsx)(d.default, {
      className: E.emoji,
      emojiId: n.victorEmoji.id,
      emojiName: n.victorEmoji.name,
      animated: n.victorEmoji.animated
    }) : null, (0, s.jsx)(o.Text, {
      className: E.title,
      variant: "text-sm/semibold",
      color: "text-normal",
      children: n.victorAnswerText
    }), (0, s.jsxs)(o.Text, {
      className: E.description,
      variant: "text-xs/medium",
      color: "input-placeholder-text",
      children: [f.default.Messages.POLL_RESULT_WINNING, " • ", r, "%"]
    }), (0, s.jsx)(o.Button, {
      className: E.button,
      size: o.Button.Sizes.TINY,
      onClick: _,
      color: o.Button.Colors.PRIMARY,
      children: f.default.Messages.POLL_RESULT_VIEW_POLL
    })]
  })
}

function m(e) {
  let {
    message: t,
    compact: n
  } = e, l = t.embeds[0], i = a.useMemo(() => (function(e) {
    if ((null == e ? void 0 : e.fields) == null) return null;
    let t = {},
      n = {};
    for (let s of e.fields) switch (s.rawName) {
      case "poll_question_text":
        t.questionText = s.rawValue;
        break;
      case "victor_answer_id":
        t.victorAnswerId = s.rawValue;
        break;
      case "victor_answer_text":
        t.victorAnswerText = s.rawValue;
        break;
      case "victor_answer_votes":
        t.victorAnswerVotes = parseInt(s.rawValue, 10);
        break;
      case "total_votes":
        t.totalVotes = parseInt(s.rawValue, 10);
        break;
      case "victor_answer_emoji_id":
        n.id = s.rawValue;
        break;
      case "victor_answer_emoji_name":
        n.name = s.rawValue;
        break;
      case "victor_emoji_animated":
        n.animated = "true" === s.rawValue
    }
    if (null != n.name) {
      var s;
      n.animated = null !== (s = n.animated) && void 0 !== s && s, t.victorEmoji = n
    }
    return t
  })(l), [l]);
  return null == i ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.default, {
      iconNode: (0, s.jsx)(r.PollsIcon, {
        width: 16,
        height: 16
      }),
      timestamp: t.timestamp,
      compact: n,
      children: f.default.Messages.POLL_RESULT_MESSAGE_TITLE
    }), (0, s.jsx)(o.Text, {
      variant: "text-md/medium",
      color: "text-normal",
      children: i.questionText
    }), (0, s.jsx)(_, {
      className: E.embed,
      data: i,
      message: t
    })]
  })
}