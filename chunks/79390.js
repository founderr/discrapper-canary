"use strict";
n.r(t), n.d(t, {
  createPollServerDataFromCreateRequest: function() {
    return v
  },
  filterOutUUID: function() {
    return N
  },
  generateEmptyPollAnswer: function() {
    return m
  },
  getPollAnswerVotesTooltipText: function() {
    return y
  },
  getPollResultsReplyPreview: function() {
    return D
  },
  getTotalVotes: function() {
    return M
  },
  hasNonVoteReactions: function() {
    return p
  },
  isAnswerFilled: function() {
    return g
  },
  isIncompleteAnswer: function() {
    return L
  },
  isPollCreationEmpty: function() {
    return R
  },
  useCanPostImagePolls: function() {
    return C
  },
  useCanPostPollsInChannel: function() {
    return O
  }
}), n("757143"), n("47120"), n("724458");
var i = n("392711"),
  r = n.n(i),
  s = n("153832"),
  a = n("263568"),
  o = n("468194"),
  l = n("442837"),
  u = n("566006"),
  d = n("592125"),
  _ = n("542578"),
  c = n("375954"),
  E = n("496675"),
  I = n("699516"),
  T = n("70956"),
  f = n("5192"),
  S = n("489887"),
  h = n("981631"),
  A = n("689938");

function m() {
  return {
    text: void 0,
    image: void 0,
    localCreationAnswerId: function() {
      return (0, s.v4)()
    }()
  }
}

function N(e) {
  return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
}

function p(e) {
  for (let t of e.reactions)
    if (null == t.me_vote) return !0;
  return !1
}

function O(e) {
  return (0, l.useStateFromStores)([E.default], () => !!(null != e && h.ChannelTypesSets.POLLS.has(e.type)) && (!!e.isPrivate() || E.default.can(h.Permissions.SEND_MESSAGES, e) && E.default.can(h.Permissions.SEND_POLLS, e)))
}

function C() {
  return !1
}

function R(e, t, n) {
  return 0 === e.length && null == t.find(e => g(e, n))
}

function g(e, t) {
  if (t === a.PollLayoutTypes.IMAGE_ONLY_ANSWERS) return null != e.image;
  {
    var n;
    let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
    return null != t && t.length > 0
  }
}

function L(e, t) {
  var n;
  let i = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
  return t === a.PollLayoutTypes.DEFAULT && null != e.image && (null == i || 0 === i.length)
}

function v(e) {
  var t, n;
  if (null == e) return;
  let i = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
    var n, i;
    let r = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
      s = {
        ...e.poll_media,
        emoji: null != r ? {
          id: r.id,
          name: null !== (i = r.name) && void 0 !== i ? i : ""
        } : void 0
      };
    return {
      ...e,
      answer_id: t + 1,
      poll_media: s
    }
  });
  let r = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * T.default.Millis.HOUR).toISOString()) : "0";
  return {
    ...e,
    expiry: r,
    answers: i
  }
}

function D(e) {
  let t = function(e, t) {
    var n, i, r, s;
    let a = null !== (s = null === (r = e.embeds[0]) || void 0 === r ? void 0 : null === (i = r.fields) || void 0 === i ? void 0 : null === (n = i.find(e => "poll_question_text" === e.rawName)) || void 0 === n ? void 0 : n.rawValue) && void 0 !== s ? s : "";
    return null != t ? (0, o.truncateText)(a, t) : a
  }(e, S.POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS);
  return A.default.Messages.POLL_RESULT_REPLY_TEXT.format({
    title: t
  })
}

function M(e) {
  return e.reduce((e, t) => {
    var n, i;
    return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0)
  }, 0)
}

function y(e, t, n) {
  var i, s;
  let a = c.default.getMessage(t, e);
  if (null == a) return "";
  let o = a.getReaction({
      id: n,
      name: "",
      animated: !1
    }),
    l = null !== (s = null == o ? void 0 : null === (i = o.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== s ? s : 0,
    E = function(e, t) {
      let n = e.getChannelId(),
        i = _.default.getReactions(n, e.id, {
          id: t,
          name: "",
          animated: !1
        }, S.VOTES_TOOLTIP_MAX_USERS, u.ReactionTypes.VOTE),
        s = d.default.getChannel(n),
        a = null == s || s.isPrivate() ? null : s.getGuildId();
      return r()(i).reject(e => I.default.isBlocked(e.id)).take(S.VOTES_TOOLTIP_MAX_USERS).map(e => f.default.getName(a, null == s ? void 0 : s.id, e)).value()
    }(a, n);
  return 0 === E.length ? "" : function(e, t) {
    let n = Math.max(0, t - e.length);
    if (1 === e.length) return n > 0 ? A.default.Messages.POLL_VOTES_TOOLTIP_1_N.format({
      a: e[0],
      n: n.toLocaleString()
    }) : e[0];
    if (2 === e.length) return n > 0 ? A.default.Messages.POLL_VOTES_TOOLTIP_2_N.format({
      a: e[0],
      b: e[1],
      n: n.toLocaleString()
    }) : A.default.Messages.POLL_VOTES_TOOLTIP_2.format({
      a: e[0],
      b: e[1]
    });
    if (3 !== e.length) return A.default.Messages.POLL_VOTES_TOOLTIP_N.format({
      n: n.toLocaleString()
    });
    else return n > 0 ? A.default.Messages.POLL_VOTES_TOOLTIP_3_N.format({
      a: e[0],
      b: e[1],
      c: e[2],
      n: n.toLocaleString()
    }) : A.default.Messages.POLL_VOTES_TOOLTIP_3.format({
      a: e[0],
      b: e[1],
      c: e[2]
    })
  }(E, l)
}