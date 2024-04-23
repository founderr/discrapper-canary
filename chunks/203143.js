"use strict";
n.r(t), n.d(t, {
  handleShowVotesForAnswer: function() {
    return U
  }
}), n("411104"), n("47120"), n("390547"), n("724458");
var s = n("512722"),
  l = n.n(s),
  a = n("392711"),
  i = n.n(a),
  r = n("263568"),
  o = n("442837"),
  u = n("570140"),
  d = n("668781"),
  c = n("749210"),
  f = n("904245"),
  E = n("881052"),
  _ = n("367907"),
  m = n("41776"),
  T = n("566006"),
  I = n("3148"),
  p = n("869765"),
  h = n("314897"),
  N = n("592125"),
  S = n("703558"),
  C = n("607744"),
  A = n("375954"),
  g = n("117530"),
  M = n("553803"),
  R = n("316758"),
  v = n("467531"),
  O = n("798628"),
  x = n("918088"),
  L = n("981631"),
  D = n("689938");

function P(e, t) {
  let n = [...t],
    s = 0,
    l = 0;
  for (let t of n) {
    var a;
    let n = null == e ? void 0 : null === (a = e.find(e => e.answer_id === parseInt(t))) || void 0 === a ? void 0 : a.poll_media;
    (null == n ? void 0 : n.text) != null && (s += 1), (null == n ? void 0 : n.emoji) != null && (l += 1)
  }
  return {
    analyticsSelectedAnswerIds: n,
    selectedTextAnswersCount: s,
    selectedEmojiAnswersCount: l
  }
}

function y(e) {
  let {
    guildId: t,
    title: n,
    body: s
  } = e;
  d.default.show({
    title: n,
    body: s,
    confirmText: D.default.Messages.LURKER_MODE_POPOUT_JOIN,
    cancelText: D.default.Messages.LURKER_MODE_POPOUT_CANCEL,
    onConfirm: () => {
      c.default.joinGuild(t, {
        source: L.JoinGuildSources.POLL_ALERT
      })
    }
  })
}

function U(e) {
  let {
    channelId: t,
    messageId: n,
    answerId: s
  } = e, l = N.default.getChannel(t);
  if (null == l) return;
  if (m.default.isLurking(l.guild_id)) {
    y({
      guildId: l.guild_id,
      title: D.default.Messages.POLL_LURKING_SEE_VOTES_TITLE,
      body: D.default.Messages.POLL_LURKING_VOTE_SUBTITLE
    });
    return
  }
  let a = A.default.getMessage(t, n);
  if (null == a || null == a.poll || 0 === a.poll.answers.length) return;
  let i = null != s ? s : String(a.poll.answers[0].answer_id);
  M.showVotesForAnswer({
    message: a,
    initialAnswerId: i
  })
}

function j(e) {
  let {
    channelId: t,
    messageId: n,
    isEditing: s
  } = e;
  (0, O.updatePollState)(t, n, e => {
    var n;
    return {
      channelId: t,
      selectedAnswerIds: new Set,
      submitting: !1,
      editing: s,
      showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
    }
  })
}

function b(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = A.default.getMessage(t, n);
  return null == s ? [] : s.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
}
async function B(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: s
  } = e, l = b({
    channelId: t,
    messageId: n
  }), a = i().difference(l, s), r = i().difference(s, l), d = h.default.getId(), c = [...a.map(e => ({
    type: "MESSAGE_REACTION_REMOVE",
    id: e
  })), ...r.map(e => ({
    type: "MESSAGE_REACTION_ADD",
    id: e
  }))], f = o.default.Emitter.batched(() => {
    let e;
    for (let {
        id: s,
        type: l
      }
      of c) e = u.default.dispatch({
      type: l,
      channelId: t,
      messageId: n,
      emoji: {
        id: s,
        name: s
      },
      userId: d,
      optimistic: !0,
      reactionType: T.ReactionTypes.VOTE
    });
    return e
  });
  null != f && await f
}
async function G(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = N.default.getChannel(t);
  if (null == s) return;
  if (m.default.isLurking(s.guild_id)) {
    y({
      guildId: s.guild_id,
      title: D.default.Messages.POLL_LURKING_VOTE_TITLE,
      body: D.default.Messages.POLL_LURKING_VOTE_SUBTITLE
    });
    return
  }
  if (!C.default.canChatInGuild(s.guild_id)) {
    d.default.show({
      title: D.default.Messages.POLL_GUILD_MEMBER_UNVERIFIED_TITLE,
      body: D.default.Messages.POLL_GUILD_MEMBER_UNVERIFIED_SUBTITLE
    });
    return
  }
  let a = (0, O.getPollState)(t, n);
  l()(null != a, "Must not be able to vote without existing state!");
  let i = b({
    channelId: t,
    messageId: n
  });
  try {
    let e = [...a.selectedAnswerIds.values()];
    (0, O.updatePollState)(t, n, e => (l()(null != e, "Must not be able to vote without existing state!"), {
      ...e,
      submitting: !0,
      editing: !1
    })), await B({
      channelId: t,
      messageId: n,
      answerIds: e
    }), await v.submitPollVote({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, O.updatePollState)(t, n, () => void 0)
  } catch (e) {
    var r, o, u;
    d.default.show({
      title: D.default.Messages.GENERIC_ERROR_TITLE,
      body: null !== (u = null !== (o = null === (r = e.getAnyErrorMessage) || void 0 === r ? void 0 : r.call(e)) && void 0 !== o ? o : e.message) && void 0 !== u ? u : D.default.Messages.GENERIC_ERROR_BODY
    }), await B({
      channelId: t,
      messageId: n,
      answerIds: i
    }), (0, O.updatePollState)(t, n, e => {
      if (null != e) return {
        ...e,
        submitting: !1,
        editing: !1
      }
    })
  }
}
async function F(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = N.default.getChannel(t);
  if (null != s) {
    if (m.default.isLurking(s.guild_id)) {
      y({
        guildId: s.guild_id,
        title: D.default.Messages.POLL_LURKING_UNVOTE_TITLE,
        body: D.default.Messages.POLL_LURKING_UNVOTE_SUBTITLE
      });
      return
    }
    return (0, O.updatePollState)(t, n, e => {
      var n;
      return {
        channelId: t,
        selectedAnswerIds: new Set,
        submitting: !1,
        editing: !1,
        showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
      }
    }), await G({
      channelId: t,
      messageId: n
    })
  }
}
async function k(e) {
  let {
    channelId: t,
    messageId: n,
    type: s
  } = e;
  switch (s) {
    case "submit":
      await G({
        channelId: t,
        messageId: n
      });
      break;
    case "remove":
      await F({
        channelId: t,
        messageId: n
      });
      break;
    case "cancel":
      j({
        channelId: t,
        messageId: n,
        isEditing: !1
      });
      break;
    case "showVotes":
      ! function(e) {
        let {
          channelId: t,
          messageId: n
        } = e;
        (0, O.updatePollState)(t, n, e => {
          var s, l;
          let a = null == e || !e.showResults,
            i = A.default.getMessage(t, n),
            r = null != i ? i.reactions.reduce((e, t) => {
              var n, s;
              return e + (null !== (s = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== s ? s : 0)
            }, 0) : 0;
          return _.default.trackWithMetadata(L.AnalyticEvents.POLL_SHOW_RESULTS_CLICKED, {
            channel_id: t,
            message_id: n,
            show_results: a,
            votes_count: r
          }), {
            channelId: t,
            selectedAnswerIds: new Set,
            submitting: null !== (s = null == e ? void 0 : e.submitting) && void 0 !== s && s,
            editing: null !== (l = null == e ? void 0 : e.submitting) && void 0 !== l && l,
            showResults: a
          }
        })
      }({
        channelId: t,
        messageId: n
      });
      break;
    case "showVoterDetails":
      U({
        channelId: t,
        messageId: n
      });
      break;
    default:
      l()(!1, "Unknown poll action type: ".concat(s))
  }
}
async function w(e) {
  let {
    channel: t,
    question: n,
    answers: s,
    allowMultiSelect: l,
    duration: a,
    layout: i,
    onClose: o
  } = e, u = g.default.getUploads(t.id, S.DraftType.Poll), d = s.map(e => {
    var t, n;
    let s = null == u ? void 0 : u.findIndex(t => t.id === e.localCreationAnswerId),
      l = {
        attachment_ids: -1 !== s ? ["".concat(s)] : void 0
      };
    i === r.PollLayoutTypes.DEFAULT && (l.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
    let a = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
    return null != a && (null != a.id ? l.emoji = {
      id: a.id,
      name: ""
    } : null != a.optionallyDiverseSequence && (l.emoji = {
      name: a.optionallyDiverseSequence
    })), {
      poll_media: l
    }
  }), c = {
    question: {
      text: n.trim()
    },
    answers: d,
    allow_multiselect: l,
    duration: a,
    layout_type: i
  };
  try {
    if (null != u && u.length > 0) {
      var _;
      let e = null !== (_ = h.default.getToken()) && void 0 !== _ ? _ : "";
      await R.sendPollMessageWithAttachments({
        channel: t,
        items: u,
        token: e,
        poll: c,
        nonce: (0, I.createNonce)(),
        maxSizeCallback: () => {}
      })
    } else await f.default.sendPollMessage(t.id, c);
    null == o || o()
  } catch (e) {
    if ("poll" === (e instanceof E.APIError ? e : new E.APIError(e)).getAnyErrorMessage() && null != e.text) throw {
      ...e,
      body: JSON.parse(e.text)
    };
    throw e
  }
}
async function H(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  await d.default.confirm({
    title: D.default.Messages.POLL_END_EARLY_CONFIRMATION_TITLE,
    body: D.default.Messages.POLL_END_EARLY_CONFIRMATION_TEXT
  }) && await v.endPollEarly({
    channelId: t,
    messageId: n
  })
}
t.default = {
  handlePollAnswerTapped: function(e) {
    var t, n;
    let {
      answerId: s,
      ...a
    } = e, {
      channelId: i,
      messageId: r,
      message: o
    } = function(e) {
      let {
        channelId: t,
        messageId: n
      } = e, s = A.default.getMessage(t, n);
      if (null != s) return {
        message: s,
        channelId: t,
        messageId: n
      };
      let a = p.default.getMessage(t, n);
      if (null != a.message) return {
        channelId: t,
        messageId: n,
        message: a.message
      };
      throw l()(null != s, "Tapped on a non-existent poll message"), Error()
    }(a), {
      tapShouldOpenVotersModal: u
    } = null !== (n = (0, x.computeBasicPollChatData)(o)) && void 0 !== n ? n : {};
    if (!0 === u) {
      U({
        channelId: i,
        messageId: r,
        answerId: s
      });
      return
    }
    let d = null === (t = o.poll) || void 0 === t ? void 0 : t.allow_multiselect;
    (0, O.updatePollState)(i, r, e => {
      var t, n;
      if (null == e) {
        let e = new Set([s]),
          {
            analyticsSelectedAnswerIds: t,
            selectedTextAnswersCount: l,
            selectedEmojiAnswersCount: a
          } = P(null === (n = o.poll) || void 0 === n ? void 0 : n.answers, e);
        return _.default.trackWithMetadata(L.AnalyticEvents.POLL_VOTE_SELECTED, {
          channel_id: i,
          message_id: r,
          selected_answer_ids: t,
          selected_text_answers_count: l,
          selected_emoji_answers_count: a
        }), {
          channelId: i,
          selectedAnswerIds: e,
          submitting: !1,
          editing: !1,
          showResults: !1
        }
      }
      let l = {
          ...e
        },
        a = new Set(l.selectedAnswerIds);
      if (l.selectedAnswerIds = a, a.has(s)) a.delete(s);
      else {
        if (!d)
          for (let e of a) a.delete(e);
        a.add(s)
      }
      let {
        analyticsSelectedAnswerIds: u,
        selectedTextAnswersCount: c,
        selectedEmojiAnswersCount: f
      } = P(null === (t = o.poll) || void 0 === t ? void 0 : t.answers, a);
      return _.default.trackWithMetadata(L.AnalyticEvents.POLL_VOTE_SELECTED, {
        channel_id: i,
        message_id: r,
        selected_answer_ids: u,
        selected_text_answers_count: c,
        selected_emoji_answers_count: f
      }), l
    })
  },
  handlePollSubmitVote: G,
  handleUpdateVoteEditingState: j,
  handlePollActionTapped: k,
  createPoll: w,
  endPollEarly: H
}