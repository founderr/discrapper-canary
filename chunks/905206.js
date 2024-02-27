"use strict";
n.r(t), n.d(t, {
  isPollMessageDirectlyInteractive: function() {
    return g
  },
  computeBasicPollChatData: function() {
    return M
  },
  default: function() {
    return O
  }
}), n("222007"), n("794252");
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
  _ = n("562228"),
  T = n("214400"),
  I = n("410328"),
  m = n("868586"),
  N = n("973799"),
  p = n("49111"),
  S = n("782340");
let A = {
  channelId: p.EMPTY_STRING_CHANNEL_ID,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function C(e, t) {
  for (let n of e) {
    let e = "number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id;
    if (e === t) return n
  }
}
let h = e => (0, s.match)(e).with({
  isInteractive: !1
}, () => "normalVote").with({
  isExpired: !0,
  isLeader: !0
}, () => "victor").with({
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

function g(e) {
  let t = o.default.getMessage(e.channel_id, e.id);
  return t === e && !0
}

function M(e, t) {
  var n, s;
  let {
    formattedExpirationLabel: l
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: a
  } = e;
  if (null == a) return;
  let i = e.state === p.MessageStates.SENT,
    r = i ? null != l ? l : (0, N.formatExpirationLabel)(a.expiry) : "",
    u = null == r && i,
    {
      selectedAnswerIds: d,
      submitting: c,
      editing: E,
      showResults: _
    } = null !== (n = null != t ? t : (0, f.getPollState)(e.getChannelId(), e.id)) && void 0 !== n ? n : A,
    T = e.reactions,
    I = !0;
  if (!g(e)) {
    let t = o.default.getMessage(e.channel_id, e.id);
    I = null != t, T = null !== (s = null == t ? void 0 : t.reactions) && void 0 !== s ? s : T
  }
  let m = d.size > 0,
    S = T.some(e => !0 === e.me_vote),
    C = !E && S,
    h = I && (C || u || _);
  return {
    poll: a,
    canTapAnswers: i && (!S || E || h),
    canRemoveVote: C && i && !u,
    canShowVoteCounts: h,
    canSubmitVote: !c && m && !C && i,
    expirationLabel: r,
    hasSelectedAnswer: m,
    hasVoted: C,
    hasVoteRecorded: S,
    isEditingVote: E,
    isExpired: u,
    isInteractive: I,
    isSent: i,
    reactions: T,
    selectedAnswerIds: d,
    submitting: c,
    tapShouldOpenVotersModal: h,
    showResults: _
  }
}

function O(e, t, n) {
  var o, f;
  let {
    animateEmoji: N = !1,
    theme: p = "dark",
    formattedExpirationLabel: A
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, {
    poll: g
  } = e;
  if (null == g || !t) return;
  let O = u.default.getCurrentUser();
  if (null == O) return;
  let R = null === (f = r.default.getChannel(e.getChannelId())) || void 0 === f ? void 0 : null === (o = f.getGuildId) || void 0 === o ? void 0 : o.call(f),
    L = (0, I.getAvatarUrl)(O, R),
    v = g.answers,
    P = g.layout_type,
    D = M(e, n, {
      formattedExpirationLabel: A
    });
  if (null == D) return;
  let {
    canTapAnswers: x,
    canRemoveVote: y,
    canShowVoteCounts: U,
    canSubmitVote: j,
    expirationLabel: b,
    hasSelectedAnswer: G,
    hasVoted: B,
    isEditingVote: k,
    isExpired: F,
    isInteractive: w,
    reactions: H,
    selectedAnswerIds: V,
    submitting: Y,
    tapShouldOpenVotersModal: K,
    showResults: W
  } = D, z = (0, _.getTotalVotes)(H), Q = S.default.Messages.POLL_VOTES_COUNT.format({
    count: String(z)
  }), Z = "".concat(Q, "  •  ").concat(null != b ? b : S.default.Messages.POLL_EXPIRED), J = Math.max(...v.map(e => {
    var t, n;
    let s = C(H, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), X = v.map(e => {
    var t, n, r;
    let o = "".concat(e.answer_id),
      u = C(H, o),
      E = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      f = V.has(o),
      _ = E >= J && 0 !== E,
      T = B && null !== (r = null == u ? void 0 : u.me_vote) && void 0 !== r && r,
      I = h({
        didSelfVote: T,
        hasVoted: B,
        isExpired: F,
        isInteractive: w,
        isSelected: f,
        isLeader: _,
        showResults: W
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
          animateEmoji: N
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: f,
      isVictor: F && _,
      didSelfVote: T,
      style: I,
      shouldAnimateTransition: Y,
      votesPercentage: Math.round(100 * (0 === z ? 0 : E / z)),
      votes: (0, s.match)(P).with(l.PollLayoutTypes.IMAGE_ONLY_ANSWERS, () => "(".concat(String(E), ")")).otherwise(() => S.default.Messages.POLL_VOTES_COUNT.format({
        count: String(E)
      }))
    }
  }), q = (0, s.match)({
    isExpired: F,
    canSubmitVote: j,
    hasVoted: B,
    isEditingVote: k,
    canRemoveVote: y,
    isInteractive: w
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: S.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: G,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: S.default.Messages.POLL_REMOVE_VOTE,
    presentation: "secondaryButton",
    enabled: !0,
    type: "remove"
  })).otherwise(() => ({
    label: S.default.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: j,
    type: "submit"
  })), $ = (0, s.match)({
    isInteractive: w,
    isEditingVote: k
  }).with({
    isInteractive: !1
  }, () => ({
    label: S.default.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: S.default.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: Z,
    presentation: "text",
    enabled: !1
  })), ee = !w || F || B ? void 0 : {
    label: W ? S.default.Messages.POLL_HIDE_VOTES : S.default.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, et = g.allow_multiselect, en = (0, s.match)({
    isInteractive: w,
    isExpired: F,
    canSelectMultipleAnswers: et
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => S.default.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => S.default.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: g.question,
    promptLabel: en,
    answers: X,
    answersInteraction: (0, s.match)({
      tapShouldOpenVotersModal: K,
      canTapAnswers: x,
      canSelectMultipleAnswers: et
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => T.PollChatAnswerInteractionType.LIST).with({
      canTapAnswers: !1
    }, () => T.PollChatAnswerInteractionType.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => T.PollChatAnswerInteractionType.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => T.PollChatAnswerInteractionType.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: (0, s.match)({
      tapShouldOpenVotersModal: K,
      platform: (0, E.getNativePlatform)()
    }).with({
      tapShouldOpenVotersModal: !0,
      platform: "android"
    }, () => S.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).with({
      tapShouldOpenVotersModal: !0,
      platform: "ios"
    }, () => S.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS).with({
      tapShouldOpenVotersModal: !0,
      platform: "web"
    }, () => S.default.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID).otherwise(() => void 0),
    layoutType: P,
    resources: (0, m.default)({
      theme: p,
      layoutType: P
    }),
    containerStyle: "normal",
    primaryAction: q,
    canSubmitVote: j,
    canTapAnswers: x,
    canSelectMultipleAnswers: et,
    hasSelectedAnswer: G,
    canShowVoteCounts: U,
    hasVoted: B,
    expirationLabel: Z,
    isExpired: F,
    myAvatarUrl: L,
    secondaryAction: $,
    tertiaryAction: ee
  }
}