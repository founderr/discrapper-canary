n.d(t, {
  Tk: function() {
    return v
  },
  ZP: function() {
    return L
  },
  ef: function() {
    return R
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
  N = n(358085),
  m = n(798628),
  h = n(79390),
  C = n(839963),
  S = n(897325),
  A = n(57101),
  p = n(562293),
  g = n(981631),
  f = n(689938);
let O = {
  channelId: g.lds,
  selectedAnswerIds: new Set,
  submitting: !1,
  editing: !1,
  showResults: !1
};

function R(e, t) {
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
  let _ = e.state === g.yb.SENT,
    I = _ ? null != a ? a : (0, p.H)(r.expiry) : "",
    T = null == I && _,
    {
      selectedAnswerIds: N,
      submitting: h,
      editing: C,
      showResults: S
    } = null !== (i = null != t ? t : (0, m.fU)(e.getChannelId(), e.id)) && void 0 !== i ? i : O,
    A = e.reactions,
    f = !0;
  if (!x(e)) {
    let t = E.Z.getMessage(e.channel_id, e.id);
    f = !e.isSearchHit && null != t, A = null !== (l = null == t ? void 0 : t.reactions) && void 0 !== l ? l : A
  }
  let R = N.size > 0,
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
    canSubmitVote: !h && R && !v && _ && !j && !U,
    expirationLabel: I,
    hasSelectedAnswer: R,
    hasVoted: v,
    hasVoteRecorded: M,
    isEditingVote: C,
    isExpired: T,
    isInteractive: f,
    isSent: _,
    reactions: A,
    selectedAnswerIds: N,
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
    poll: m
  } = e;
  if (null == m) return;
  let p = _.default.getCurrentUser();
  if (null == p) return;
  let g = l.Z.useReducedMotion,
    O = null === (o = u.Z.getChannel(e.getChannelId())) || void 0 === o ? void 0 : null === (n = o.getGuildId) || void 0 === n ? void 0 : n.call(o),
    x = (0, S.E)(p, O),
    L = m.answers,
    Z = m.layout_type,
    P = v(e, t, {
      formattedExpirationLabel: E
    });
  if (null == P) return;
  let {
    canTapAnswers: D,
    canRemoveVote: j,
    canShowVoteCounts: U,
    canSubmitVote: y,
    expirationLabel: b = f.Z.Messages.POLL_EXPIRED,
    hasSelectedAnswer: B,
    hasVoted: k,
    isEditingVote: G,
    isExpired: F,
    isInteractive: V,
    reactions: w,
    selectedAnswerIds: H,
    submitting: Y,
    tapShouldOpenVotersModal: K,
    showResults: W
  } = P, z = (0, h.cZ)(w), Q = f.Z.Messages.POLL_VOTES_COUNT.format({
    count: z.toLocaleString()
  }), X = Math.max(...L.map(e => {
    var t, n;
    let s = R(w, "".concat(e.answer_id));
    return null !== (n = null == s ? void 0 : null === (t = s.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0
  })), q = L.map(e => {
    var t, n, l;
    let o = "".concat(e.answer_id),
      u = R(w, o),
      d = null !== (n = null == u ? void 0 : null === (t = u.count_details) || void 0 === t ? void 0 : t.vote) && void 0 !== n ? n : 0,
      E = 0 === z ? 0 : d / z,
      _ = H.has(o),
      N = d >= X && 0 !== d,
      m = k && null !== (l = null == u ? void 0 : u.me_vote) && void 0 !== l && l,
      h = M({
        didSelfVote: m,
        hasVoted: k,
        isExpired: F,
        isSelected: _,
        isLeader: N,
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
      isVictor: F && N,
      didSelfVote: m,
      style: h,
      shouldAnimateTransition: Y && !g,
      votesPercentage: Math.round(100 * E),
      votes: (0, s.EQ)(Z).with(i.C.IMAGE_ONLY_ANSWERS, () => "(".concat(d.toLocaleString(), ")")).otherwise(() => f.Z.Messages.POLL_VOTES_COUNT.format({
        count: d.toLocaleString()
      }))
    }
  }), J = (0, s.EQ)({
    isExpired: F,
    canSubmitVote: y,
    hasVoted: k,
    isEditingVote: G,
    canRemoveVote: j,
    isInteractive: V,
    showResults: W
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
    enabled: y,
    type: "submit"
  })), $ = (0, N.isIOS)() ? f.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_IOS : f.Z.Messages.POLL_TAP_FOR_VOTERS_A11Y_ANDROID, ee = (0, s.EQ)({
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
    secondaryLabel: b,
    accessibilityHint: $,
    presentation: "text",
    enabled: !0,
    type: "showVoterDetails"
  })), et = !V || F || k || W ? void 0 : {
    label: f.Z.Messages.POLL_SHOW_VOTES,
    presentation: "textButton",
    enabled: !0,
    type: "showVotes"
  }, en = m.allow_multiselect, es = (0, s.EQ)({
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
    question: m.question,
    promptLabel: es,
    answers: q,
    answersInteraction: (0, s.EQ)({
      tapShouldOpenVotersModal: K,
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
    answerTapAccessibilityLabel: K ? $ : void 0,
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