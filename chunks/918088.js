n.d(t, {
  Tk: function() {
    return v
  },
  ZP: function() {
    return L
  },
  ef: function() {
    return O
  },
  r8: function() {
    return x
  }
}), n(47120), n(627341);
var s = n(278074),
  i = n(263568),
  l = n(607070),
  a = n(339085),
  r = n(633302),
  o = n(715903),
  c = n(69882),
  u = n(592125),
  d = n(271383),
  E = n(375954),
  _ = n(594174),
  I = n(768581),
  T = n(176354),
  m = n(358085),
  N = n(798628),
  h = n(79390),
  C = n(839963),
  S = n(897325),
  A = n(57101),
  g = n(562293),
  p = n(981631),
  f = n(689938);
let R = {
  channelId: p.lds,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function O(e, t) {
  for (let n of e)
    if (("number" == typeof n.emoji.id ? "".concat(n.emoji.id) : n.emoji.id) === t) return n
}
let M = e => (0, s.EQ)(e).with({
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

function x(e) {
  return null == e.poll || E.Z.getMessage(e.channel_id, e.id) === e && !0
}

function v(e, t) {
  var n, s, i, l;
  let {
    formattedExpirationLabel: a
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: r
  } = e;
  if (null == r) return;
  let _ = e.state === p.yb.SENT,
    I = _ ? null != a ? a : (0, g.H)(r.expiry) : "",
    T = null == I && _,
    {
      selectedAnswerIds: m,
      submitting: h,
      editing: C,
      showResults: S
    } = null !== (i = null != t ? t : (0, N.fU)(e.getChannelId(), e.id)) && void 0 !== i ? i : R,
    A = e.reactions,
    f = !0;
  if (!x(e)) {
    let t = E.Z.getMessage(e.channel_id, e.id);
    f = !e.isSearchHit && null != t, A = null !== (l = null == t ? void 0 : t.reactions) && void 0 !== l ? l : A
  }
  let O = m.size > 0,
    M = A.some(e => !0 === e.me_vote),
    v = !C && M,
    L = v || T || S,
    Z = _ && f && (!M || C || L),
    P = null === (s = u.Z.getChannel(e.getChannelId())) || void 0 === s ? void 0 : null === (n = s.getGuildId) || void 0 === n ? void 0 : n.call(s),
    D = null != P ? d.ZP.getSelfMember(P) : null,
    j = (0, o.EY)(D),
    U = (0, c.b)(D);
  return {
    poll: r,
    canTapAnswers: Z,
    canRemoveVote: v && _ && !T,
    canShowVoteCounts: L,
    canSubmitVote: !h && O && !v && _ && !j && !U,
    expirationLabel: I,
    hasSelectedAnswer: O,
    hasVoted: v,
    hasVoteRecorded: M,
    isEditingVote: C,
    isExpired: T,
    isInteractive: f,
    isSent: _,
    reactions: A,
    selectedAnswerIds: m,
    submitting: h,
    tapShouldOpenVotersModal: L,
    showResults: S
  }
}

function L(e, t) {
  var n, o;
  let {
    animateEmoji: c = !1,
    theme: d = "dark",
    formattedExpirationLabel: E
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
    poll: N
  } = e;
  if (null == N) return;
  let g = _.default.getCurrentUser();
  if (null == g) return;
  let p = l.Z.useReducedMotion,
    R = null === (o = u.Z.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
    x = (0, S.E)(g, R),
    L = N.answers,
    Z = N.layout_type,
    P = v(e, t, {
      formattedExpirationLabel: E
    });
  if (null == P) return;
  let {
    canTapAnswers: D,
    canRemoveVote: j,
    canShowVoteCounts: U,
    canSubmitVote: b,
    expirationLabel: y = f.Z.Messages.POLL_EXPIRED,
    hasSelectedAnswer: B,
    hasVoted: k,
    isEditingVote: G,
    isExpired: F,
    isInteractive: V,
    reactions: w,
    selectedAnswerIds: H,
    submitting: Y,
    tapShouldOpenVotersModal: W,
    showResults: z
  } = P, K = (0, h.cZ)(w), Q = f.Z.Messages.POLL_VOTES_COUNT.format({
    count: K.toLocaleString()
  }), X = Math.max(...L.map(e => {
    var t, n;
    let s = O(w, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), q = L.map(e => {
    var t, n, l;
    let o = "".concat(e.answer_id),
      u = O(w, o),
      d = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      E = 0 === K ? 0 : d / K,
      _ = H.has(o),
      m = d >= X && 0 !== d,
      N = k && null !== (l = null == u ? void 0 : u.me_vote) && void 0 !== l && l,
      h = M({
        didSelfVote: N,
        hasVoted: k,
        isExpired: F,
        isSelected: _,
        isLeader: m,
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
            var i, l;
            s = null !== (l = null === (i = a.Z.getCustomEmojiById(e.id)) || void 0 === i ? void 0 : i.animated) && void 0 !== l && l
          }
          let o = t && null != s && s;
          return {
            id: null == e.id ? null : "".concat(e.id),
            name: e.name,
            displayName: null == e.id ? r.ZP.convertSurrogateToName(e.name) : e.name,
            src: null == e.id ? T.ZP.getURL(e.name) : I.ZP.getEmojiURL({
              id: e.id,
              animated: o,
              size: n
            }),
            animated: o
          }
        }(e.poll_media.emoji, {
          animateEmoji: c
        }),
        stickerId: e.poll_media.sticker_id,
        attachmentIds: e.poll_media.attachment_ids
      },
      isSelected: _,
      isVictor: F && m,
      didSelfVote: N,
      style: h,
      shouldAnimateTransition: Y && !p,
      votesPercentage: Math.round(100 * E),
      votes: (0, s.EQ)(Z).with(i.C.IMAGE_ONLY_ANSWERS, () => "(".concat(d.toLocaleString(), ")")).otherwise(() => f.Z.Messages.POLL_VOTES_COUNT.format({
        count: d.toLocaleString()
      }))
    }
  }), J = (0, s.EQ)({
    isExpired: F,
    canSubmitVote: b,
    hasVoted: k,
    isEditingVote: G,
    canRemoveVote: j,
    isInteractive: V,
    showResults: z
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    isEditingVote: !0
  }, () => ({
    label: f.Z.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: B,
    type: "submit"
  })).with({
    canRemoveVote: !0
  }, () => ({
    label: f.Z.Messages.POLL_REMOVE_VOTE,
    presentation: "secondaryButton",
    enabled: !0,
    type: "remove"
  })).with({
    hasVoted: !1,
    showResults: !0
  }, () => ({
    label: f.Z.Messages.POLL_HIDE_VOTES,
    presentation: "secondaryButton",
    enabled: !0,
    type: "showVotes"
  })).otherwise(() => ({
    label: f.Z.Messages.POLL_SUBMIT_VOTE,
    presentation: "button",
    enabled: b,
    type: "submit"
  })), $ = (0, m.isIOS)() ? f.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS : f.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID, ee = (0, s.EQ)({
    isExpired: F,
    isInteractive: V,
    isEditingVote: G
  }).with({
    isInteractive: !1,
    isExpired: !1
  }, () => ({
    label: f.Z.Messages.POLL_NOT_INTERACTIVE,
    presentation: "text",
    enabled: !1
  })).with({
    isEditingVote: !0
  }, () => ({
    label: f.Z.Messages.CANCEL,
    presentation: "textButton",
    enabled: !0,
    type: "cancel"
  })).otherwise(() => ({
    label: Q,
    secondaryLabel: y,
    accessibilityHint: $,
    presentation: "text",
    enabled: !0,
    type: "showVoterDetails"
  })), et = !V || F || k || z ? void 0 : {
    label: f.Z.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, en = N.allow_multiselect, es = (0, s.EQ)({
    isInteractive: V,
    isExpired: F,
    canSelectMultipleAnswers: en
  }).with({
    isInteractive: !1
  }, () => void 0).with({
    isExpired: !0
  }, () => void 0).with({
    canSelectMultipleAnswers: !0
  }, () => f.Z.Messages.POLL_SELECT_MULTIPLE_ANSWERS).otherwise(() => f.Z.Messages.POLL_SELECT_ONE_ANSWER);
  return {
    question: N.question,
    promptLabel: es,
    answers: q,
    answersInteraction: (0, s.EQ)({
      tapShouldOpenVotersModal: W,
      canTapAnswers: D,
      canSelectMultipleAnswers: en
    }).with({
      tapShouldOpenVotersModal: !0
    }, () => C.Y7.LIST).with({
      canTapAnswers: !1
    }, () => C.Y7.LIST).with({
      canSelectMultipleAnswers: !1
    }, () => C.Y7.RADIO_BUTTONS).with({
      canSelectMultipleAnswers: !0
    }, () => C.Y7.CHECKBOXES).exhaustive(),
    answerTapAccessibilityLabel: W ? $ : void 0,
    layoutType: Z,
    resources: (0, A.Z)({
      theme: d,
      layoutType: Z
    }),
    containerStyle: "normal",
    primaryAction: J,
    isInteractive: V,
    canTapAnswers: D,
    canSelectMultipleAnswers: en,
    hasSelectedAnswer: B,
    canShowVoteCounts: U,
    hasVoted: k,
    isExpired: F,
    myAvatarUrl: x,
    secondaryAction: ee,
    tertiaryAction: et
  }
}