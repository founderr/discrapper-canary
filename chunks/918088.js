"use strict";
n.r(t), n.d(t, {
  computeBasicPollChatData: function() {
    return L
  },
  default: function() {
    return P
  },
  isPollMessageDirectlyInteractive: function() {
    return v
  },
  reactionForId: function() {
    return O
  }
}), n("47120"), n("627341");
var s = n("278074"),
  a = n("263568"),
  l = n("607070"),
  i = n("339085"),
  r = n("633302"),
  o = n("715903"),
  u = n("69882"),
  d = n("592125"),
  c = n("271383"),
  E = n("375954"),
  f = n("594174"),
  _ = n("768581"),
  T = n("176354"),
  I = n("358085"),
  m = n("798628"),
  N = n("79390"),
  p = n("839963"),
  S = n("897325"),
  C = n("57101"),
  A = n("562293"),
  h = n("981631"),
  g = n("689938");
let M = {
  channelId: h.EMPTY_STRING_SNOWFLAKE_ID,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function O(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}
let R = e => (0, s.match)(e).with({
  isExpired: !0,
  isLeader: !0,
  didSelfVote: !0
}, () => "victorSelected").with({
  isExpired: !0,
  isLeader: !0,
  didSelfVote: !1
}, () => "victorNotSelected").with({
  isExpired: !0,
  didSelfVote: !0
}, () => "loserSelected").with({
  isExpired: !0
}, () => "notVoted").with({
  didSelfVote: !0,
  isExpired: !1
}, () => "voted").with({
  hasVoted: !0,
  isExpired: !1
}, () => "notVoted").with({
  isSelected: !0
}, () => "selected").with({
  isExpired: !1,
  showResults: !0
}, () => "notVoted").otherwise(() => "normalVote");

function v(e) {
  return E.default.getMessage(e.channel_id, e.id) === e && !0
}

function L(e, t) {
  var n, s, a, l;
  let {
    formattedExpirationLabel: i
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: r
  } = e;
  if (null == r) return;
  let f = e.state === h.MessageStates.SENT,
    _ = f ? null != i ? i : (0, A.formatExpirationLabel)(r.expiry) : "",
    T = null == _ && f,
    {
      selectedAnswerIds: I,
      submitting: N,
      editing: p,
      showResults: S
    } = null !== (a = null != t ? t : (0, m.getPollState)(e.getChannelId(), e.id)) && void 0 !== a ? a : M,
    C = e.reactions,
    g = !0;
  if (!v(e)) {
    let t = E.default.getMessage(e.channel_id, e.id);
    g = !e.isSearchHit && null != t, C = null !== (l = null == t ? void 0 : t.reactions) && void 0 !== l ? l : C
  }
  let O = I.size > 0,
    R = C.some(e => !0 === e.me_vote),
    L = !p && R,
    P = L || T || S,
    x = f && g && (!R || p || P),
    D = null === (s = d.default.getChannel(e.getChannelId())) || void 0 === s ? void 0 : null === (n = s.getGuildId) || void 0 === n ? void 0 : n.call(s),
    y = null != D ? c.default.getSelfMember(D) : null,
    U = (0, o.hasAutomodQuarantinedProfile)(y),
    j = (0, u.isMemberCommunicationDisabled)(y);
  return {
    poll: r,
    canTapAnswers: x,
    canRemoveVote: L && f && !T,
    canShowVoteCounts: P,
    canSubmitVote: !N && O && !L && f && !U && !j,
    expirationLabel: _,
    hasSelectedAnswer: O,
    hasVoted: L,
    hasVoteRecorded: R,
    isEditingVote: p,
    isExpired: T,
    isInteractive: g,
    isSent: f,
    reactions: C,
    selectedAnswerIds: I,
    submitting: N,
    tapShouldOpenVotersModal: P,
    showResults: S
  }
}

function P(e, t) {
  var n, o;
  let {
    animateEmoji: u = !1,
    theme: c = "dark",
    formattedExpirationLabel: E
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: m
  } = e;
  if (null == m) return;
  let A = f.default.getCurrentUser();
  if (null == A) return;
  let h = l.default.useReducedMotion,
    M = null === (o = d.default.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
    v = (0, S.getAvatarUrl)(A, M),
    P = m.answers,
    x = m.layout_type,
    D = L(e, t, {
      formattedExpirationLabel: E
    });
  if (null == D) return;
  let {
    canTapAnswers: y,
    canRemoveVote: U,
    canShowVoteCounts: j,
    canSubmitVote: b,
    expirationLabel: G = g.default.Messages.POLL_EXPIRED,
    hasSelectedAnswer: B,
    hasVoted: F,
    isEditingVote: k,
    isExpired: w,
    isInteractive: H,
    reactions: V,
    selectedAnswerIds: Y,
    submitting: K,
    tapShouldOpenVotersModal: W,
    showResults: z
  } = D, Q = (0, N.getTotalVotes)(V), q = g.default.Messages.POLL_VOTES_COUNT.format({
    count: Q.toLocaleString()
  }), X = Math.max(...P.map(e => {
    var t, n;
    let s = O(V, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), Z = P.map(e => {
    var t, n, l;
    let o = "".concat(e.answer_id),
      d = O(V, o),
      c = null !== (n = null == d ? void 0 : null === (t = d.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      E = Y.has(o),
      f = c >= X && 0 !== c,
      I = F && null !== (l = null == d ? void 0 : d.me_vote) && void 0 !== l && l,
      m = R({
        didSelfVote: I,
        hasVoted: F,
        isExpired: w,
        isSelected: E,
        isLeader: f,
        showResults: z
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
          let s = e.animated;
          if (null == s && null != e.id) {
            var a, l;
            s = null !== (l = null === (a = i.default.getCustomEmojiById(e.id)) || void 0 === a ? void 0 : a.animated) && void 0 !== l && l
          }
          let o = t && null != s && s;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? r.default.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? T.default.getURL(e.name) : _.default.getEmojiURL({
              id: e.id,
              animated: o,
              size: n
            }),
            animated: o
          }
        }(e.poll_media.emoji, {
          animateEmoji: u
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: E,
      isVictor: w && f,
      didSelfVote: I,
      style: m,
      shouldAnimateTransition: K && !h,
      votesPercentage: Math.round(100 * (0 === Q ? 0 : c / Q)),
      votes: (0, s.match)(x).with(a.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")")).otherwise(() => g.default.Messages.POLL_VOTES_COUNT.format({
        count: c.toLocaleString()
      }))
    }
  }), J = (0, s.match)({
    isExpired: w,
    canSubmitVote: b,
    hasVoted: F,
    isEditingVote: k,
    canRemoveVote: U,
    isInteractive: H,
    showResults: z
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: g.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: B,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: g.default.Messages.POLL_REMOVE_VOTE,
    presentation: "secondaryButton",
    enabled: !0,
    type: "remove"
  })).with({
    hasVoted: !1,
    showResults: !0
  }, () => ({
    label: g.default.Messages.POLL_HIDE_VOTES,
    presentation: "secondaryButton",
    enabled: !0,
    type: "showVotes"
  })).otherwise(() => ({
    label: g.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: b,
    type: "submit"
  })), $ = (0, I.isIOS)() ? g.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS : g.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID, ee = (0, s.match)({
    isExpired: w,
    isInteractive: H,
    isEditingVote: k
  }).with({
    isInteractive: !1,
    isExpired: !1
  }, () => ({
    label: g.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: g.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: q,
    secondaryLabel: G,
    accessibilityHint: $,
    presentation: "text",
    enabled: !0,
    type: "showVoterDetails"
  })), et = !H || w || F || z ? void 0 : {
    label: g.default.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, en = m.allow_multiselect, es = (0, s.match)({
    isInteractive: H,
    isExpired: w,
    canSelectMultipleAnswers: en
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => g.default.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => g.default.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: m.question,
    promptLabel: es,
    answers: Z,
    answersInteraction: (0, s.match)({
      tapShouldOpenVotersModal: W,
      canTapAnswers: y,
      canSelectMultipleAnswers: en
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => p.PollChatAnswerInteractionType.LIST).with({
      canTapAnswers: !1
    }, () => p.PollChatAnswerInteractionType.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => p.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => p.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: W ? $ : void 0,
    layoutType: x,
    resources: (0, C.default)({
      theme: c,
      layoutType: x
    }),
    containerStyle: "normal",
    primaryAction: J,
    isInteractive: H,
    canTapAnswers: y,
    canSelectMultipleAnswers: en,
    hasSelectedAnswer: B,
    canShowVoteCounts: j,
    hasVoted: F,
    isExpired: w,
    myAvatarUrl: v,
    secondaryAction: ee,
    tertiaryAction: et
  }
}