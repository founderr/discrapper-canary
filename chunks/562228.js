"use strict";
n.r(t), n.d(t, {
  generateEmptyPollAnswer: function() {
    return d
  },
  filterOutUUID: function() {
    return o
  },
  hasNonVoteReactions: function() {
    return c
  },
  useCanPostPollsInChannel: function() {
    return E
  },
  useCanPostImagePolls: function() {
    return _
  },
  isAnswerFilled: function() {
    return f
  },
  isIncompleteAnswer: function() {
    return g
  },
  createPollServerDataFromCreateRequest: function() {
    return S
  },
  getTotalVotes: function() {
    return h
  }
}), n("781738"), n("222007"), n("808653");
var a = n("748820"),
  l = n("418009"),
  s = n("957255"),
  i = n("718517"),
  r = n("83995"),
  u = n("49111");

function d() {
  return {
    text: void 0,
    image: void 0,
    localCreationAnswerId: function() {
      return (0, a.v4)()
    }()
  }
}

function o(e) {
  return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
}

function c(e) {
  for (let t of e.reactions)
    if (null == t.me_vote) return !0;
  return !1
}

function E(e) {
  let t = u.ChannelTypesSets.POLLS.has(e.type),
    {
      enabled: n
    } = r.CreateGuildPollsExperiment.useExperiment({
      guildId: e.guild_id,
      location: "useCanPostPollsInChannel"
    }, {
      autoTrackExposure: !0,
      disable: !t || e.isPrivate() || !s.default.can(u.Permissions.SEND_MESSAGES, e)
    }),
    {
      enabled: a
    } = r.CreateGDMPollsExperiment.useExperiment({
      location: "useCanPostPollsInChannel"
    }, {
      autoTrackExposure: !0,
      disable: !t || !e.isPrivate()
    });
  return n || a
}

function _() {
  return !1
}

function f(e, t) {
  return t === l.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? null != e.image : null != e.text && e.text.length > 0
}

function g(e, t) {
  return t === l.PollLayoutTypes.DEFAULT && null != e.image && (null == e.text || 0 === e.text.length)
}

function S(e) {
  var t, n;
  if (null == e) return;
  let a = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
    var n, a, l;
    let s = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
      i = {
        ...e.poll_media,
        emoji: null != s ? {
          id: null !== (a = s.id) && void 0 !== a ? a : null,
          name: null !== (l = s.name) && void 0 !== l ? l : ""
        } : void 0
      };
    return {
      ...e,
      answer_id: t + 1,
      poll_media: i
    }
  });
  let l = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * i.default.Millis.HOUR).toISOString()) : "0";
  return {
    ...e,
    expiry: l,
    answers: a
  }
}

function h(e) {
  return e.reduce((e, t) => {
    var n, a;
    return e + (null !== (a = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== a ? a : 0)
  }, 0)
}