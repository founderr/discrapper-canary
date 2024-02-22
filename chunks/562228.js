"use strict";
n.r(t), n.d(t, {
  generateEmptyPollAnswer: function() {
    return u
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
  isAnswerFilled: function() {
    return f
  },
  isIncompleteAnswer: function() {
    return _
  },
  createPollServerDataFromCreateRequest: function() {
    return g
  }
}), n("781738"), n("222007");
var a = n("748820"),
  l = n("418009"),
  s = n("957255"),
  i = n("718517"),
  r = n("83995"),
  d = n("49111");

function u() {
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
  let t = d.ChannelTypesSets.POLLS.has(e.type),
    {
      enabled: n
    } = r.CreateGuildPollsExperiment.useExperiment({
      guildId: e.guild_id,
      location: "useCanPostPollsInChannel"
    }, {
      autoTrackExposure: !0,
      disable: !t || e.isPrivate() || !s.default.can(d.Permissions.SEND_MESSAGES, e)
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

function f(e, t) {
  return t === l.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? null != e.image : null != e.text && e.text.length > 0
}

function _(e, t) {
  return t === l.PollLayoutTypes.DEFAULT && null != e.image && (null == e.text || 0 === e.text.length)
}

function g(e) {
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