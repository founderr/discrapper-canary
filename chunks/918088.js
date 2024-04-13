"use strict";
n.r(t), n.d(t, {
  computeBasicPollChatData: function() {
    return v
  },
  default: function() {
    return L
  },
  isPollMessageDirectlyInteractive: function() {
    return O
  },
  reactionForId: function() {
    return M
  }
}), n("47120"), n("627341");
var s = n("278074"),
  a = n("263568"),
  l = n("339085"),
  i = n("633302"),
  r = n("715903"),
  o = n("69882"),
  u = n("592125"),
  d = n("271383"),
  c = n("375954"),
  f = n("594174"),
  E = n("768581"),
  _ = n("176354"),
  m = n("358085"),
  T = n("798628"),
  I = n("79390"),
  p = n("839963"),
  h = n("897325"),
  N = n("57101"),
  S = n("562293"),
  C = n("981631"),
  A = n("689938");
let g = {
  channelId: C.EMPTY_STRING_SNOWFLAKE_ID,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function M(e, t) {
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

function O(e) {
  return c.default.getMessage(e.channel_id, e.id) === e && !0
}

function v(e, t) {
  var n, s, a, l;
  let {
    formattedExpirationLabel: i
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: f
  } = e;
  if (null == f) return;
  let E = e.state === C.MessageStates.SENT,
    _ = E ? null != i ? i : (0, S.formatExpirationLabel)(f.expiry) : "",
    m = null == _ && E,
    {
      selectedAnswerIds: I,
      submitting: p,
      editing: h,
      showResults: N
    } = null !== (a = null != t ? t : (0, T.getPollState)(e.getChannelId(), e.id)) && void 0 !== a ? a : g,
    A = e.reactions,
    M = !0;
  if (!O(e)) {
    let t = c.default.getMessage(e.channel_id, e.id);
    M = !e.isSearchHit && null != t, A = null !== (l = null == t ? void 0 : t.reactions) && void 0 !== l ? l : A
  }
  let R = I.size > 0,
    v = A.some(e => !0 === e.me_vote),
    L = !h && v,
    x = L || m || N,
    D = E && M && (!v || h || x),
    P = null === (s = u.default.getChannel(e.getChannelId())) || void 0 === s ? void 0 : null === (n = s.getGuildId) || void 0 === n ? void 0 : n.call(s),
    y = null != P ? d.default.getSelfMember(P) : null,
    U = (0, r.hasAutomodQuarantinedProfile)(y),
    b = (0, o.isMemberCommunicationDisabled)(y);
  return {
    poll: f,
    canTapAnswers: D,
    canRemoveVote: L && E && !m,
    canShowVoteCounts: x,
    canSubmitVote: !p && R && !L && E && !U && !b,
    expirationLabel: _,
    hasSelectedAnswer: R,
    hasVoted: L,
    hasVoteRecorded: v,
    isEditingVote: h,
    isExpired: m,
    isInteractive: M,
    isSent: E,
    reactions: A,
    selectedAnswerIds: I,
    submitting: p,
    tapShouldOpenVotersModal: x,
    showResults: N
  }
}

function L(e, t) {
  var n, r;
  let {
    animateEmoji: o = !1,
    theme: d = "dark",
    formattedExpirationLabel: c
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: T
  } = e;
  if (null == T) return;
  let S = f.default.getCurrentUser();
  if (null == S) return;
  let C = null === (r = u.default.getChannel(e.getChannelId())) || void 0 === r ? void 0 : null === (n = r.getGuildId) || void 0 === n ? void 0 : n.call(r),
    g = (0, h.getAvatarUrl)(S, C),
    O = T.answers,
    L = T.layout_type,
    x = v(e, t, {
      formattedExpirationLabel: c
    });
  if (null == x) return;
  let {
    canTapAnswers: D,
    canRemoveVote: P,
    canShowVoteCounts: y,
    canSubmitVote: U,
    expirationLabel: b = A.default.Messages.POLL_EXPIRED,
    hasSelectedAnswer: j,
    hasVoted: G,
    isEditingVote: B,
    isExpired: F,
    isInteractive: k,
    reactions: w,
    selectedAnswerIds: H,
    submitting: V,
    tapShouldOpenVotersModal: Y,
    showResults: K
  } = x, W = (0, I.getTotalVotes)(w), z = A.default.Messages.POLL_VOTES_COUNT.format({
    count: W.toLocaleString()
  }), Q = Math.max(...O.map(e => {
    var t, n;
    let s = M(w, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), q = O.map(e => {
    var t, n, r;
    let u = "".concat(e.answer_id),
      d = M(w, u),
      c = null !== (n = null == d ? void 0 : null === (t = d.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      f = H.has(u),
      m = c >= Q && 0 !== c,
      T = G && null !== (r = null == d ? void 0 : d.me_vote) && void 0 !== r && r,
      I = R({
        didSelfVote: T,
        hasVoted: G,
        isExpired: F,
        isSelected: f,
        isLeader: m,
        showResults: K
      });
    return {
      answerId: u,
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
            var a, r;
            s = null !== (r = null === (a = l.default.getCustomEmojiById(e.id)) || void 0 === a ? void 0 : a.animated) && void 0 !== r && r
          }
          let o = t && null != s && s;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? i.default.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? _.default.getURL(e.name) : E.default.getEmojiURL({
              id: e.id,
              animated: o,
              size: n
            }),
            animated: o
          }
        }(e.poll_media.emoji, {
          animateEmoji: o
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: f,
      isVictor: F && m,
      didSelfVote: T,
      style: I,
      shouldAnimateTransition: V,
      votesPercentage: Math.round(100 * (0 === W ? 0 : c / W)),
      votes: (0, s.match)(L).with(a.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")")).otherwise(() => A.default.Messages.POLL_VOTES_COUNT.format({
        count: c.toLocaleString()
      }))
    }
  }), J = (0, s.match)({
    isExpired: F,
    canSubmitVote: U,
    hasVoted: G,
    isEditingVote: B,
    canRemoveVote: P,
    isInteractive: k,
    showResults: K
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: A.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: j,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: A.default.Messages.POLL_REMOVE_VOTE,
    presentation: "secondaryButton",
    enabled: !0,
    type: "remove"
  })).with({
    hasVoted: !1,
    showResults: !0
  }, () => ({
    label: A.default.Messages.POLL_HIDE_VOTES,
    presentation: "secondaryButton",
    enabled: !0,
    type: "showVotes"
  })).otherwise(() => ({
    label: A.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: U,
    type: "submit"
  })), Z = (0, s.match)({
    isExpired: F,
    isInteractive: k,
    isEditingVote: B
  }).with({
    isInteractive: !1,
    isExpired: !1
  }, () => ({
    label: A.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: A.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: z,
    secondaryLabel: b,
    presentation: "text",
    enabled: !0,
    type: "showVoterDetails"
  })), X = !k || F || G || K ? void 0 : {
    label: A.default.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, $ = T.allow_multiselect, ee = (0, s.match)({
    isInteractive: k,
    isExpired: F,
    canSelectMultipleAnswers: $
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => A.default.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => A.default.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: T.question,
    promptLabel: ee,
    answers: q,
    answersInteraction: (0, s.match)({
      tapShouldOpenVotersModal: Y,
      canTapAnswers: D,
      canSelectMultipleAnswers: $
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => p.PollChatAnswerInteractionType.LIST).with({
      canTapAnswers: !1
    }, () => p.PollChatAnswerInteractionType.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => p.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => p.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: (0, s.match)({
      tapShouldOpenVotersModal: Y,
      platform: (0, m.getNativePlatform)()
    }).with({
      tapShouldOpenVotersModal: !0,
      platform: "android"
    }, () => A.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).with({
      tapShouldOpenVotersModal: !0,
      platform: "ios"
    }, () => A.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS).with({
      tapShouldOpenVotersModal: !0,
      platform: "web"
    }, () => A.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).otherwise(() => void 0),
    layoutType: L,
    resources: (0, N.default)({
      theme: d,
      layoutType: L
    }),
    containerStyle: "normal",
    primaryAction: J,
    isInteractive: k,
    canTapAnswers: D,
    canSelectMultipleAnswers: $,
    hasSelectedAnswer: j,
    canShowVoteCounts: y,
    hasVoted: G,
    isExpired: F,
    myAvatarUrl: g,
    secondaryAction: Z,
    tertiaryAction: X
  }
}