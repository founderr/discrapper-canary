n.d(t, {
  n: function() {
    return j
  }
}), n(411104), n(47120), n(390547), n(724458);
var s = n(512722),
  i = n.n(s),
  l = n(392711),
  a = n.n(l),
  r = n(263568),
  o = n(442837),
  c = n(570140),
  u = n(668781),
  d = n(749210),
  E = n(904245),
  _ = n(881052),
  I = n(367907),
  T = n(41776),
  m = n(566006),
  N = n(48854),
  h = n(869765),
  C = n(314897),
  S = n(592125),
  A = n(703558),
  g = n(607744),
  p = n(375954),
  f = n(117530),
  R = n(553803),
  O = n(316758),
  M = n(467531),
  x = n(798628),
  v = n(918088),
  L = n(981631),
  Z = n(689938);

function P(e, t) {
  let n = [...t],
    s = 0,
    i = 0;
  for (let t of n) {
    var l;
    let n = null == e ? void 0 : null === (l = e.find(e => e.answer_id === parseInt(t))) || void 0 === l ? void 0 : l.poll_media;
    (null == n ? void 0 : n.text) != null && (s += 1), (null == n ? void 0 : n.emoji) != null && (i += 1)
  }
  return {
    analyticsSelectedAnswerIds: n,
    selectedTextAnswersCount: s,
    selectedEmojiAnswersCount: i
  }
}

function D(e) {
  let {
    guildId: t,
    title: n,
    body: s
  } = e;
  u.Z.show({
    title: n,
    body: s,
    confirmText: Z.Z.Messages.LURKER_MODE_POPOUT_JOIN,
    cancelText: Z.Z.Messages.LURKER_MODE_POPOUT_CANCEL,
    onConfirm: () => {
      d.Z.joinGuild(t, {
        source: L.vtS.POLL_ALERT
      })
    }
  })
}

function j(e) {
  let {
    channelId: t,
    messageId: n,
    answerId: s
  } = e, i = S.Z.getChannel(t);
  if (null == i) return;
  if (T.Z.isLurking(i.guild_id)) {
    D({
      guildId: i.guild_id,
      title: Z.Z.Messages.POLL_LURKING_SEE_VOTES_TITLE,
      body: Z.Z.Messages.POLL_LURKING_VOTE_SUBTITLE
    });
    return
  }
  let l = p.Z.getMessage(t, n);
  if (null == l || null == l.poll || 0 === l.poll.answers.length) return;
  let a = null != s ? s : String(l.poll.answers[0].answer_id);
  R.A({
    message: l,
    initialAnswerId: a
  })
}

function U(e) {
  let {
    channelId: t,
    messageId: n,
    isEditing: s
  } = e;
  (0, x.eu)(t, n, e => {
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
  } = e, s = p.Z.getMessage(t, n);
  return null == s ? [] : s.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
}
async function y(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: s
  } = e, i = b({
    channelId: t,
    messageId: n
  }), l = a().difference(i, s), r = a().difference(s, i), u = C.default.getId(), d = [...l.map(e => ({
    type: "MESSAGE_REACTION_REMOVE",
    id: e
  })), ...r.map(e => ({
    type: "MESSAGE_REACTION_ADD",
    id: e
  }))], E = o.ZP.Emitter.batched(() => {
    let e;
    for (let {
        id: s,
        type: i
      }
      of d) e = c.Z.dispatch({
      type: i,
      channelId: t,
      messageId: n,
      emoji: {
        id: s,
        name: s
      },
      userId: u,
      optimistic: !0,
      reactionType: m.O.VOTE
    });
    return e
  });
  null != E && await E
}
async function B(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = S.Z.getChannel(t);
  if (null == s) return;
  if (T.Z.isLurking(s.guild_id)) {
    D({
      guildId: s.guild_id,
      title: Z.Z.Messages.POLL_LURKING_VOTE_TITLE,
      body: Z.Z.Messages.POLL_LURKING_VOTE_SUBTITLE
    });
    return
  }
  if (!g.Z.canChatInGuild(s.guild_id)) {
    u.Z.show({
      title: Z.Z.Messages.POLL_GUILD_MEMBER_UNVERIFIED_TITLE,
      body: Z.Z.Messages.POLL_GUILD_MEMBER_UNVERIFIED_SUBTITLE
    });
    return
  }
  let l = (0, x.fU)(t, n);
  i()(null != l, "Must not be able to vote without existing state!");
  let a = b({
    channelId: t,
    messageId: n
  });
  try {
    let e = [...l.selectedAnswerIds.values()];
    (0, x.eu)(t, n, e => (i()(null != e, "Must not be able to vote without existing state!"), {
      ...e,
      submitting: !0,
      editing: !1
    })), await y({
      channelId: t,
      messageId: n,
      answerIds: e
    }), await M.B({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, x.eu)(t, n, () => void 0)
  } catch (e) {
    var r, o, c;
    u.Z.show({
      title: Z.Z.Messages.GENERIC_ERROR_TITLE,
      body: null !== (c = null !== (o = null === (r = e.getAnyErrorMessage) || void 0 === r ? void 0 : r.call(e)) && void 0 !== o ? o : e.message) && void 0 !== c ? c : Z.Z.Messages.GENERIC_ERROR_BODY
    }), await y({
      channelId: t,
      messageId: n,
      answerIds: a
    }), (0, x.eu)(t, n, e => {
      if (null != e) return {
        ...e,
        submitting: !1,
        editing: !1
      }
    })
  }
}
async function k(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = S.Z.getChannel(t);
  if (null != s) {
    if (T.Z.isLurking(s.guild_id)) {
      D({
        guildId: s.guild_id,
        title: Z.Z.Messages.POLL_LURKING_UNVOTE_TITLE,
        body: Z.Z.Messages.POLL_LURKING_UNVOTE_SUBTITLE
      });
      return
    }
    return (0, x.eu)(t, n, e => {
      var n;
      return {
        channelId: t,
        selectedAnswerIds: new Set,
        submitting: !1,
        editing: !1,
        showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
      }
    }), await B({
      channelId: t,
      messageId: n
    })
  }
}
async function G(e) {
  let {
    channelId: t,
    messageId: n,
    type: s
  } = e;
  switch (s) {
    case "submit":
      await B({
        channelId: t,
        messageId: n
      });
      break;
    case "remove":
      await k({
        channelId: t,
        messageId: n
      });
      break;
    case "cancel":
      U({
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
        (0, x.eu)(t, n, e => {
          var s, i;
          let l = null == e || !e.showResults,
            a = p.Z.getMessage(t, n),
            r = null != a ? a.reactions.reduce((e, t) => {
              var n, s;
              return e + (null !== (s = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== s ? s : 0)
            }, 0) : 0;
          return I.ZP.trackWithMetadata(L.rMx.POLL_SHOW_RESULTS_CLICKED, {
            channel_id: t,
            message_id: n,
            show_results: l,
            votes_count: r
          }), {
            channelId: t,
            selectedAnswerIds: new Set,
            submitting: null !== (s = null == e ? void 0 : e.submitting) && void 0 !== s && s,
            editing: null !== (i = null == e ? void 0 : e.submitting) && void 0 !== i && i,
            showResults: l
          }
        })
      }({
        channelId: t,
        messageId: n
      });
      break;
    case "showVoterDetails":
      j({
        channelId: t,
        messageId: n
      });
      break;
    default:
      i()(!1, "Unknown poll action type: ".concat(s))
  }
}
async function F(e) {
  let {
    channel: t,
    question: n,
    answers: s,
    allowMultiSelect: i,
    duration: l,
    layout: a,
    onClose: o
  } = e, c = f.Z.getUploads(t.id, A.d.Poll), u = s.map(e => {
    var t, n;
    let s = null == c ? void 0 : c.findIndex(t => t.id === e.localCreationAnswerId),
      i = {
        attachment_ids: -1 !== s ? ["".concat(s)] : void 0
      };
    a === r.C.DEFAULT && (i.text = null === (n = e.text) || void 0 === n ? void 0 : n.trim());
    let l = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
    return null != l && (null != l.id ? i.emoji = {
      id: l.id,
      name: ""
    } : null != l.optionallyDiverseSequence && (i.emoji = {
      name: l.optionallyDiverseSequence
    })), {
      poll_media: i
    }
  }), d = {
    question: {
      text: n.trim()
    },
    answers: u,
    allow_multiselect: i,
    duration: l,
    layout_type: a
  };
  try {
    if (null != c && c.length > 0) {
      var I;
      let e = null !== (I = C.default.getToken()) && void 0 !== I ? I : "";
      await O.sk({
        channel: t,
        items: c,
        token: e,
        poll: d,
        nonce: (0, N.r)(),
        maxSizeCallback: () => {}
      })
    } else await E.Z.sendPollMessage(t.id, d);
    null == o || o()
  } catch (e) {
    if ("poll" === (e instanceof _.Hx ? e : new _.Hx(e)).getAnyErrorMessage() && null != e.text) throw {
      ...e,
      body: JSON.parse(e.text)
    };
    throw e
  }
}
async function V(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  await u.Z.confirm({
    title: Z.Z.Messages.POLL_END_EARLY_CONFIRMATION_TITLE,
    body: Z.Z.Messages.POLL_END_EARLY_CONFIRMATION_TEXT
  }) && await M.W({
    channelId: t,
    messageId: n
  })
}
t.Z = {
  handlePollAnswerTapped: function(e) {
    var t, n;
    let {
      answerId: s,
      ...l
    } = e, {
      channelId: a,
      messageId: r,
      message: o
    } = function(e) {
      let {
        channelId: t,
        messageId: n
      } = e, s = p.Z.getMessage(t, n);
      if (null != s) return {
        message: s,
        channelId: t,
        messageId: n
      };
      let l = h.Z.getMessage(t, n);
      if (null != l.message) return {
        channelId: t,
        messageId: n,
        message: l.message
      };
      throw i()(null != s, "Tapped on a non-existent poll message"), Error()
    }(l), {
      tapShouldOpenVotersModal: c
    } = null !== (n = (0, v.Tk)(o)) && void 0 !== n ? n : {};
    if (!0 === c) {
      j({
        channelId: a,
        messageId: r,
        answerId: s
      });
      return
    }
    let u = null === (t = o.poll) || void 0 === t ? void 0 : t.allow_multiselect;
    (0, x.eu)(a, r, e => {
      var t, n;
      if (null == e) {
        let e = new Set([s]),
          {
            analyticsSelectedAnswerIds: t,
            selectedTextAnswersCount: i,
            selectedEmojiAnswersCount: l
          } = P(null === (n = o.poll) || void 0 === n ? void 0 : n.answers, e);
        return I.ZP.trackWithMetadata(L.rMx.POLL_VOTE_SELECTED, {
          channel_id: a,
          message_id: r,
          selected_answer_ids: t,
          selected_text_answers_count: i,
          selected_emoji_answers_count: l
        }), {
          channelId: a,
          selectedAnswerIds: e,
          submitting: !1,
          editing: !1,
          showResults: !1
        }
      }
      let i = {
          ...e
        },
        l = new Set(i.selectedAnswerIds);
      if (i.selectedAnswerIds = l, l.has(s)) l.delete(s);
      else {
        if (!u)
          for (let e of l) l.delete(e);
        l.add(s)
      }
      let {
        analyticsSelectedAnswerIds: c,
        selectedTextAnswersCount: d,
        selectedEmojiAnswersCount: E
      } = P(null === (t = o.poll) || void 0 === t ? void 0 : t.answers, l);
      return I.ZP.trackWithMetadata(L.rMx.POLL_VOTE_SELECTED, {
        channel_id: a,
        message_id: r,
        selected_answer_ids: c,
        selected_text_answers_count: d,
        selected_emoji_answers_count: E
      }), i
    })
  },
  handlePollSubmitVote: B,
  handleUpdateVoteEditingState: U,
  handlePollActionTapped: G,
  createPoll: F,
  endPollEarly: V
}