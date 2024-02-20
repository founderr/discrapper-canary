"use strict";
n.r(t), n.d(t, {
  reactionForId: function() {
    return A
  },
  isPollMessageDirectlyInteractive: function() {
    return h
  },
  computeBasicPollChatData: function() {
    return g
  },
  default: function() {
    return M
  }
}), n("222007"), n("794252"), n("808653");
var s = n("506838"),
  l = n("418009"),
  a = n("385976"),
  i = n("867805"),
  r = n("42203"),
  o = n("377253"),
  u = n("697218"),
  d = n("315102"),
  c = n("402671"),
  E = n("773336"),
  f = n("641126"),
  _ = n("214400"),
  T = n("410328"),
  I = n("868586"),
  m = n("973799"),
  N = n("49111"),
  p = n("782340");
let S = {
  channelId: N.EMPTY_STRING_CHANNEL_ID,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function A(e, t) {
  for (let n of e) {
    let e = "number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id;
    if (e === t) return n
  }
}
let C = e => (0, s.match)(e).with({
  isInteractive: !1
}, () => "normalVote").with({
  isVictor: !0
}, () => "victor").with({
  isExpired: !0
}, () => "loser").with({
  didSelfVote: !0,
  isExpired: !1
}, () => "voted").with({
  hasVoted: !0,
  isExpired: !1
}, () => "notVoted").with({
  isSelected: !0
}, () => "selected").otherwise(() => "normalVote");

function h(e) {
  let t = o.default.getMessage(e.channel_id, e.id);
  return t === e && !0
}

function g(e, t) {
  var n, s;
  let {
    formattedExpirationLabel: l
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: a
  } = e;
  if (null == a) return;
  let i = e.state === N.MessageStates.SENT,
    r = i ? null != l ? l : (0, m.formatExpirationLabel)(a.expiry) : "",
    u = null == r && i,
    {
      selectedAnswerIds: d,
      submitting: c,
      editing: E,
      showResults: _
    } = null !== (n = null != t ? t : (0, f.getPollState)(e.getChannelId(), e.id)) && void 0 !== n ? n : S,
    T = e.reactions,
    I = !0;
  if (!h(e)) {
    let t = o.default.getMessage(e.channel_id, e.id);
    I = null != t, T = null !== (s = null == t ? void 0 : t.reactions) && void 0 !== s ? s : T
  }
  let p = d.size > 0,
    A = T.some(e => !0 === e.me_vote),
    C = !E && A,
    g = I && (C || u || _);
  return {
    poll: a,
    canTapAnswers: i && (!A || E || g),
    canRemoveVote: C && i && !u,
    canShowVoteCounts: g,
    canSubmitVote: !c && p && !C && i,
    expirationLabel: r,
    hasSelectedAnswer: p,
    hasVoted: C,
    hasVoteRecorded: A,
    isEditingVote: E,
    isExpired: u,
    isInteractive: I,
    isSent: i,
    reactions: T,
    selectedAnswerIds: d,
    submitting: c,
    tapShouldOpenVotersModal: g,
    showResults: _
  }
}

function M(e, t, n) {
  var o, f;
  let {
    animateEmoji: m = !1,
    theme: N = "dark",
    formattedExpirationLabel: S
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, {
    poll: h
  } = e;
  if (null == h || !t) return;
  let M = u.default.getCurrentUser();
  if (null == M) return;
  let O = null === (f = r.default.getChannel(e.getChannelId())) || void 0 === f ? void 0 : null === (o = f.getGuildId) || void 0 === o ? void 0 : o.call(f),
    R = (0, T.getAvatarUrl)(M, O),
    L = h.answers,
    v = h.layout_type,
    P = g(e, n, {
      formattedExpirationLabel: S
    });
  if (null == P) return;
  let {
    canTapAnswers: D,
    canRemoveVote: x,
    canShowVoteCounts: y,
    canSubmitVote: U,
    expirationLabel: j,
    hasSelectedAnswer: b,
    hasVoted: G,
    isEditingVote: B,
    isExpired: k,
    isInteractive: F,
    reactions: w,
    selectedAnswerIds: H,
    submitting: V,
    tapShouldOpenVotersModal: Y,
    showResults: W
  } = P, K = w.reduce((e, t) => {
    var n, s;
    return e + (null !== (s = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== s ? s : 0)
  }, 0), z = Math.max(...L.map(e => {
    var t, n;
    let s = A(w, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), Q = L.map(e => {
    var t, n, r;
    let o = "".concat(e.answer_id),
      u = A(w, o),
      E = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      f = H.has(o),
      _ = k ? E >= z && 0 !== E : void 0,
      T = G && null !== (r = null == u ? void 0 : u.me_vote) && void 0 !== r && r,
      I = C({
        didSelfVote: T,
        hasVoted: G,
        isExpired: k,
        isInteractive: F,
        isSelected: f,
        isVictor: _
      });
    return {
      answerId: o,
      pollMedia: {
        text: e.poll_media.text,
        emoji: function(e) {
          let {
            animateEmoji: t = !1,
            size: n = 48
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null == e) return;
          let s = !1;
          if (null != e.id) {
            var l, r;
            s = null !== (r = null === (l = a.default.getCustomEmojiById(e.id)) || void 0 === l ? void 0 : l.animated) && void 0 !== r && r
          }
          let o = s && t;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? i.default.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? c.default.getURL(e.name) : d.default.getEmojiURL({
              id: e.id,
              animated: o,
              size: n
            }),
            animated: o
          }
        }(e.poll_media.emoji, {
          animateEmoji: m
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: f,
      isVictor: _,
      didSelfVote: T,
      style: I,
      shouldAnimateTransition: V,
      votesPercentage: Math.round(100 * (0 === K ? 0 : E / K)),
      votes: (0, s.match)(v).with(l.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(String(E), ")")).otherwise(() => p.default.Messages.POLL_VOTES_COUNT.format({
        count: String(E)
      }))
    }
  }), Z = (0, s.match)({
    isExpired: k,
    canSubmitVote: U,
    hasVoted: G,
    isEditingVote: B,
    canRemoveVote: x,
    isInteractive: F
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: p.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: b,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: p.default.Messages.POLL_REMOVE_VOTE,
    presentation: "textButton",
    enabled: !0,
    type: "remove"
  })).otherwise(() => ({
    label: p.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: U,
    type: "submit"
  })), J = (0, s.match)({
    isInteractive: F,
    isEditingVote: B
  }).with({
    isInteractive: !1
  }, () => ({
    label: p.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: p.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: null != j ? j : p.default.Messages.POLL_EXPIRED,
    presentation: "text",
    enabled: !1
  })), X = !F || k || G ? void 0 : {
    label: W ? p.default.Messages.POLL_HIDE_VOTES : p.default.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, q = h.allow_multiselect, $ = (0, s.match)({
    isInteractive: F,
    isExpired: k,
    canSelectMultipleAnswers: q
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => p.default.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => p.default.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: h.question,
    promptLabel: $,
    answers: Q,
    answersInteraction: (0, s.match)({
      tapShouldOpenVotersModal: Y,
      canTapAnswers: D,
      canSelectMultipleAnswers: q
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => _.PollChatAnswerInteractionType.LIST).with({
      canTapAnswers: !1
    }, () => _.PollChatAnswerInteractionType.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => _.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => _.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: (0, s.match)({
      tapShouldOpenVotersModal: Y,
      platform: (0, E.getNativePlatform)()
    }).with({
      tapShouldOpenVotersModal: !0,
      platform: "android"
    }, () => p.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).with({
      tapShouldOpenVotersModal: !0,
      platform: "ios"
    }, () => p.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS).with({
      tapShouldOpenVotersModal: !0,
      platform: "web"
    }, () => p.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).otherwise(() => void 0),
    layoutType: v,
    resources: (0, I.default)({
      theme: N,
      layoutType: v
    }),
    containerStyle: "normal",
    primaryAction: Z,
    canSubmitVote: U,
    canTapAnswers: D,
    canSelectMultipleAnswers: q,
    hasSelectedAnswer: b,
    canShowVoteCounts: y,
    hasVoted: G,
    expirationLabel: null != j ? j : p.default.Messages.POLL_EXPIRED,
    isExpired: k,
    myAvatarUrl: R,
    secondaryAction: J,
    tertiaryAction: X
  }
}