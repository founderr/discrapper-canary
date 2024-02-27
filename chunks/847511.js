"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("70102"), n("222007"), n("881410");
var s = n("627445"),
  l = n.n(s),
  a = n("917351"),
  i = n.n(a),
  r = n("418009"),
  o = n("446674"),
  u = n("913144"),
  d = n("404118"),
  c = n("819689"),
  E = n("448993"),
  f = n("875978"),
  _ = n("815297"),
  T = n("256572"),
  I = n("271938"),
  m = n("474643"),
  N = n("377253"),
  p = n("585722"),
  S = n("239013"),
  A = n("914271"),
  C = n("690714"),
  h = n("641126"),
  g = n("905206"),
  M = n("782340");

function O(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = N.default.getMessage(t, n);
  if (null != s) return {
    message: s,
    channelId: t,
    messageId: n
  };
  let a = T.default.getMessage(t, n);
  if (null != a.message) return {
    channelId: t,
    messageId: n,
    message: a.message
  };
  throw l(null != s, "Tapped on a non-existent poll message"), Error()
}

function R(e) {
  let {
    isEditing: t,
    ...n
  } = e, {
    channelId: s,
    messageId: l
  } = O(n);
  (0, h.updatePollState)(s, l, e => {
    var n;
    return {
      channelId: s,
      selectedAnswerIds: new Set,
      submitting: !1,
      editing: t,
      showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
    }
  })
}

function L(e) {
  let {
    channelId: t,
    messageId: n
  } = e, s = N.default.getMessage(t, n);
  return null == s ? [] : s.reactions.flatMap(e => !0 === e.me_vote ? e.emoji.name : [])
}
async function v(e) {
  let {
    channelId: t,
    messageId: n,
    answerIds: s
  } = e, l = L({
    channelId: t,
    messageId: n
  }), a = i.difference(l, s), r = i.difference(s, l), d = I.default.getId(), c = [...a.map(e => ({
    type: "MESSAGE_REACTION_REMOVE",
    id: e
  })), ...r.map(e => ({
    type: "MESSAGE_REACTION_ADD",
    id: e
  }))], E = o.default.Emitter.batched(() => {
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
      reactionType: f.ReactionTypes.VOTE
    });
    return e
  });
  null != E && await E
}
async function P(e) {
  let {
    channelId: t,
    messageId: n
  } = O(e), s = (0, h.getPollState)(t, n);
  l(null != s, "Must not be able to vote without existing state!");
  let a = L({
    channelId: t,
    messageId: n
  });
  try {
    let e = [...s.selectedAnswerIds.values()];
    (0, h.updatePollState)(t, n, e => (l(null != e, "Must not be able to vote without existing state!"), {
      ...e,
      submitting: !0,
      editing: !1
    })), await v({
      channelId: t,
      messageId: n,
      answerIds: e
    }), await C.submitPollVote({
      channelId: t,
      messageId: n,
      answerIds: e
    }), (0, h.updatePollState)(t, n, () => void 0)
  } catch (e) {
    var i, r, o;
    d.default.show({
      title: M.default.Messages.GENERIC_ERROR_TITLE,
      body: null !== (o = null !== (r = null === (i = e.getAnyErrorMessage) || void 0 === i ? void 0 : i.call(e)) && void 0 !== r ? r : e.message) && void 0 !== o ? o : M.default.Messages.GENERIC_ERROR_BODY
    }), await v({
      channelId: t,
      messageId: n,
      answerIds: a
    }), (0, h.updatePollState)(t, n, e => {
      if (null != e) return {
        ...e,
        submitting: !1,
        editing: !1
      }
    })
  }
}
async function D(e) {
  let {
    channelId: t,
    messageId: n
  } = e;
  return (0, h.updatePollState)(t, n, e => {
    var n;
    return {
      channelId: t,
      selectedAnswerIds: new Set,
      submitting: !1,
      editing: !1,
      showResults: null !== (n = null == e ? void 0 : e.showResults) && void 0 !== n && n
    }
  }), await P({
    channelId: t,
    messageId: n
  })
}
async function x(e) {
  let {
    channelId: t,
    messageId: n,
    type: s
  } = e;
  switch (s) {
    case "submit":
      await P({
        channelId: t,
        messageId: n
      });
      break;
    case "remove":
      await D({
        channelId: t,
        messageId: n
      });
      break;
    case "cancel":
      R({
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
        (0, h.updatePollState)(t, n, e => {
          var n, s;
          return {
            channelId: t,
            selectedAnswerIds: new Set,
            submitting: null !== (n = null == e ? void 0 : e.submitting) && void 0 !== n && n,
            editing: null !== (s = null == e ? void 0 : e.submitting) && void 0 !== s && s,
            showResults: null == e || !e.showResults
          }
        })
      }({
        channelId: t,
        messageId: n
      });
      break;
    default:
      l(!1, "Unknown poll action type: ".concat(s))
  }
}
var y = {
  handlePollAnswerTapped: function(e) {
    var t, n;
    let {
      answerId: s,
      ...l
    } = e, {
      channelId: a,
      messageId: i,
      message: r
    } = O(l), {
      tapShouldOpenVotersModal: o
    } = null !== (n = (0, g.computeBasicPollChatData)(r)) && void 0 !== n ? n : {};
    if (!0 === o) {
      S.showVotesForAnswer({
        channelId: a,
        messageId: i,
        answerId: s
      });
      return
    }
    let u = null === (t = r.poll) || void 0 === t ? void 0 : t.allow_multiselect;
    (0, h.updatePollState)(a, i, e => {
      if (null == e) return {
        channelId: a,
        selectedAnswerIds: new Set([s]),
        submitting: !1,
        editing: !1,
        showResults: !1
      };
      let t = {
          ...e
        },
        n = new Set(t.selectedAnswerIds);
      if (t.selectedAnswerIds = n, n.has(s)) n.delete(s);
      else {
        if (!u)
          for (let e of n) n.delete(e);
        n.add(s)
      }
      return t
    })
  },
  handlePollSubmitVote: P,
  handleUpdateVoteEditingState: R,
  handlePollActionTapped: x,
  createPoll: async function e(e) {
    let {
      channel: t,
      question: n,
      answers: s,
      allowMultiSelect: l,
      duration: a,
      layout: i,
      onClose: o
    } = e, u = p.default.getUploads(t.id, m.DraftType.Poll), d = s.map(e => {
      var t;
      let n = null == u ? void 0 : u.findIndex(t => t.id === e.localCreationAnswerId),
        s = {
          attachment_ids: -1 !== n ? ["".concat(n)] : []
        };
      i === r.PollLayoutTypes.DEFAULT && (s.text = e.text);
      let l = null === (t = e.image) || void 0 === t ? void 0 : t.emoji;
      return null != l && (null != l.id ? s.emoji = {
        id: l.id,
        name: ""
      } : null != l.optionallyDiverseSequence && (s.emoji = {
        name: l.optionallyDiverseSequence
      })), {
        poll_media: s
      }
    }), f = {
      question: {
        text: n,
        attachment_ids: []
      },
      answers: d,
      allow_multiselect: l,
      duration: a,
      layout_type: i
    };
    try {
      if (null != u && u.length > 0) {
        var T;
        let e = null !== (T = I.default.getToken()) && void 0 !== T ? T : "";
        await A.sendPollMessageWithAttachments({
          channel: t,
          items: u,
          token: e,
          poll: f,
          nonce: (0, _.createNonce)(),
          maxSizeCallback: () => {}
        })
      } else await c.default.sendPollMessage(t.id, f);
      null == o || o()
    } catch (t) {
      let e = t instanceof E.APIError ? t : new E.APIError(t);
      if ("poll" === e.getAnyErrorMessage() && null != t.text) throw {
        ...t,
        body: JSON.parse(t.text)
      };
      throw t
    }
  },
  endPollEarly: async function e(e) {
    let {
      channelId: t,
      messageId: n
    } = e, s = await d.default.confirm({
      title: M.default.Messages.POLL_END_EARLY_CONFIRMATION_TITLE,
      body: M.default.Messages.POLL_END_EARLY_CONFIRMATION_TEXT
    });
    s && await C.endPollEarly({
      channelId: t,
      messageId: n
    })
  }
}