"use strict";
n.r(t), n.d(t, {
  computeBasicPollChatData: function() {
    return v
  },
  default: function() {
    return L
  },
  isPollMessageDirectlyInteractive: function() {
    return R
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
  E = n("594174"),
  f = n("768581"),
  _ = n("176354"),
  T = n("358085"),
  I = n("798628"),
  m = n("79390"),
  N = n("839963"),
  p = n("897325"),
  S = n("57101"),
  C = n("562293"),
  A = n("981631"),
  h = n("689938");
let g = {
  channelId: A.EMPTY_STRING_SNOWFLAKE_ID,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function M(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}
let O = e => (0, s.match)(e).with({
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

function R(e) {
  return c.default.getMessage(e.channel_id, e.id) === e && !0
}

function v(e, t) {
  var n, s, a, l;
  let {
    formattedExpirationLabel: i
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: E
  } = e;
  if (null == E) return;
  let f = e.state === A.MessageStates.SENT,
    _ = f ? null != i ? i : (0, C.formatExpirationLabel)(E.expiry) : "",
    T = null == _ && f,
    {
      selectedAnswerIds: m,
      submitting: N,
      editing: p,
      showResults: S
    } = null !== (a = null != t ? t : (0, I.getPollState)(e.getChannelId(), e.id)) && void 0 !== a ? a : g,
    h = e.reactions,
    M = !0;
  if (!R(e)) {
    let t = c.default.getMessage(e.channel_id, e.id);
    M = !e.isSearchHit && null != t, h = null !== (l = null == t ? void 0 : t.reactions) && void 0 !== l ? l : h
  }
  let O = m.size > 0,
    v = h.some(e => !0 === e.me_vote),
    L = !p && v,
    P = L || T || S,
    D = f && M && (!v || p || P),
    x = null === (s = u.default.getChannel(e.getChannelId())) || void 0 === s ? void 0 : null === (n = s.getGuildId) || void 0 === n ? void 0 : n.call(s),
    y = null != x ? d.default.getSelfMember(x) : null,
    U = (0, r.hasAutomodQuarantinedProfile)(y),
    j = (0, o.isMemberCommunicationDisabled)(y);
  return {
    poll: E,
    canTapAnswers: D,
    canRemoveVote: L && f && !T,
    canShowVoteCounts: P,
    canSubmitVote: !N && O && !L && f && !U && !j,
    expirationLabel: _,
    hasSelectedAnswer: O,
    hasVoted: L,
    hasVoteRecorded: v,
    isEditingVote: p,
    isExpired: T,
    isInteractive: M,
    isSent: f,
    reactions: h,
    selectedAnswerIds: m,
    submitting: N,
    tapShouldOpenVotersModal: P,
    showResults: S
  }
}

function L(e, t) {
  var n, r;
  let {
    animateEmoji: o = !1,
    theme: d = "dark",
    formattedExpirationLabel: c
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: I
  } = e;
  if (null == I) return;
  let C = E.default.getCurrentUser();
  if (null == C) return;
  let A = null === (r = u.default.getChannel(e.getChannelId())) || void 0 === r ? void 0 : null === (n = r.getGuildId) || void 0 === n ? void 0 : n.call(r),
    g = (0, p.getAvatarUrl)(C, A),
    R = I.answers,
    L = I.layout_type,
    P = v(e, t, {
      formattedExpirationLabel: c
    });
  if (null == P) return;
  let {
    canTapAnswers: D,
    canRemoveVote: x,
    canShowVoteCounts: y,
    canSubmitVote: U,
    expirationLabel: j = h.default.Messages.POLL_EXPIRED,
    hasSelectedAnswer: b,
    hasVoted: G,
    isEditingVote: B,
    isExpired: F,
    isInteractive: k,
    reactions: w,
    selectedAnswerIds: H,
    submitting: V,
    tapShouldOpenVotersModal: Y,
    showResults: K
  } = P, W = (0, m.getTotalVotes)(w), z = h.default.Messages.POLL_VOTES_COUNT.format({
    count: W.toLocaleString()
  }), Q = Math.max(...R.map(e => {
    var t, n;
    let s = M(w, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), q = R.map(e => {
    var t, n, r;
    let u = "".concat(e.answer_id),
      d = M(w, u),
      c = null !== (n = null == d ? void 0 : null === (t = d.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      E = H.has(u),
      T = c >= Q && 0 !== c,
      I = G && null !== (r = null == d ? void 0 : d.me_vote) && void 0 !== r && r,
      m = O({
        didSelfVote: I,
        hasVoted: G,
        isExpired: F,
        isSelected: E,
        isLeader: T,
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
            src: null == e.id ? _.default.getURL(e.name) : f.default.getEmojiURL({
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
      isSelected: E,
      isVictor: F && T,
      didSelfVote: I,
      style: m,
      shouldAnimateTransition: V,
      votesPercentage: Math.round(100 * (0 === W ? 0 : c / W)),
      votes: (0, s.match)(L).with(a.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(c.toLocaleString(), ")")).otherwise(() => h.default.Messages.POLL_VOTES_COUNT.format({
        count: c.toLocaleString()
      }))
    }
  }), J = (0, s.match)({
    isExpired: F,
    canSubmitVote: U,
    hasVoted: G,
    isEditingVote: B,
    canRemoveVote: x,
    isInteractive: k,
    showResults: K
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: h.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: b,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: h.default.Messages.POLL_REMOVE_VOTE,
    presentation: "secondaryButton",
    enabled: !0,
    type: "remove"
  })).with({
    hasVoted: !1,
    showResults: !0
  }, () => ({
    label: h.default.Messages.POLL_HIDE_VOTES,
    presentation: "secondaryButton",
    enabled: !0,
    type: "showVotes"
  })).otherwise(() => ({
    label: h.default.Messages.POLL_SUBMIT_VOTE,
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
    label: h.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: h.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: z,
    secondaryLabel: j,
    presentation: "text",
    enabled: !0,
    type: "showVoterDetails"
  })), X = !k || F || G || K ? void 0 : {
    label: h.default.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, $ = I.allow_multiselect, ee = (0, s.match)({
    isInteractive: k,
    isExpired: F,
    canSelectMultipleAnswers: $
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => h.default.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => h.default.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: I.question,
    promptLabel: ee,
    answers: q,
    answersInteraction: (0, s.match)({
      tapShouldOpenVotersModal: Y,
      canTapAnswers: D,
      canSelectMultipleAnswers: $
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => N.PollChatAnswerInteractionType.LIST).with({
      canTapAnswers: !1
    }, () => N.PollChatAnswerInteractionType.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => N.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => N.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: (0, s.match)({
      tapShouldOpenVotersModal: Y,
      platform: (0, T.getNativePlatform)()
    }).with({
      tapShouldOpenVotersModal: !0,
      platform: "android"
    }, () => h.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).with({
      tapShouldOpenVotersModal: !0,
      platform: "ios"
    }, () => h.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS).with({
      tapShouldOpenVotersModal: !0,
      platform: "web"
    }, () => h.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).otherwise(() => void 0),
    layoutType: L,
    resources: (0, S.default)({
      theme: d,
      layoutType: L
    }),
    containerStyle: "normal",
    primaryAction: J,
    isInteractive: k,
    canTapAnswers: D,
    canSelectMultipleAnswers: $,
    hasSelectedAnswer: b,
    canShowVoteCounts: y,
    hasVoted: G,
    isExpired: F,
    myAvatarUrl: g,
    secondaryAction: Z,
    tertiaryAction: X
  }
}