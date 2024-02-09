"use strict";
t.r(x), t.d(x, {
  ReactionLocations: function() {
    return a
  },
  getReactors: function() {
    return w
  },
  addReaction: function() {
    return E
  },
  playBurstReaction: function() {
    return g
  },
  removeAllReactions: function() {
    return A
  },
  removeEmojiReactions: function() {
    return R
  },
  removeReaction: function() {
    return O
  },
  removeReactionWithConfirmation: function() {
    return N
  }
});
var s, a, o = t("872717"),
  y = t("819855"),
  k = t("913144"),
  d = t("404118"),
  r = t("875978"),
  p = t("263024"),
  e = t("271938"),
  n = t("377253"),
  m = t("659500"),
  c = t("718517"),
  l = t("402671"),
  f = t("61069"),
  _ = t("49111"),
  h = t("782340");

function u(i, x, t) {
  let {
    status: s,
    body: a
  } = i;
  if (429 === s) return setTimeout(x, i.body.retry_after * c.default.Millis.SECOND), !1;
  if (403 === s) switch (a && a.code) {
    case _.AbortCodes.TOO_MANY_REACTIONS:
      d.default.show({
        title: h.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
        body: h.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
        confirmText: h.default.Messages.OKAY
      });
      break;
    case _.AbortCodes.REACTION_BLOCKED:
      m.ComponentDispatch.dispatch(_.ComponentActions.SHAKE_APP, {
        duration: 200,
        intensity: 2
      })
  } else if (!t.isRetry) return x(), !1;
  return !0
}

function I(i, x, t, s, a) {
  var o, y;
  k.default.dispatch({
    type: i,
    channelId: x,
    messageId: t,
    userId: null !== (o = null == a ? void 0 : a.userId) && void 0 !== o ? o : e.default.getId(),
    emoji: s,
    optimistic: !0,
    colors: null !== (y = null == a ? void 0 : a.colors) && void 0 !== y ? y : [],
    reactionType: (null == a ? void 0 : a.burst) ? r.ReactionTypes.BURST : r.ReactionTypes.NORMAL
  })
}

function b(i) {
  let {
    channelId: x,
    messageId: t,
    emoji: s,
    userId: a,
    useTypeEndpoint: o = !1,
    type: y = r.ReactionTypes.NORMAL
  } = i, k = null != s.id ? "".concat(s.name, ":").concat(s.id) : s.name;
  return null == a ? _.Endpoints.REACTIONS(x, t, k) : o ? _.Endpoints.REACTION_WITH_TYPE(x, t, k, a, y) : _.Endpoints.REACTION(x, t, k, a)
}(s = a || (a = {})).MESSAGE = "Message", s.FORUM_TOOLBAR = "Forum Toolbar", s.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";
async function w(i) {
  let {
    channelId: x,
    messageId: t,
    emoji: s,
    limit: a,
    after: y,
    type: d
  } = i, p = d === r.ReactionTypes.VOTE ? function(i, x, t) {
    var s;
    let a = null !== (s = t.id) && void 0 !== s ? s : t.name;
    return _.Endpoints.POLL_ANSWER_VOTERS(i, x, a)
  }(x, t, s) : b({
    channelId: x,
    messageId: t,
    emoji: s
  }), e = await o.default.get({
    url: p,
    query: {
      limit: a,
      after: y,
      type: d
    },
    oldFormErrors: !0
  }), n = d === r.ReactionTypes.VOTE ? e.body.users : e.body;
  return k.default.dispatch({
    type: "MESSAGE_REACTION_ADD_USERS",
    channelId: x,
    messageId: t,
    users: n,
    emoji: s,
    reactionType: d
  }), n
}
async function E(i, x, t) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
    a = arguments.length > 4 ? arguments[4] : void 0,
    k = null != a && !!a.burst,
    e = null != a && !!a.isRetry;
  if (!e && function(i, x, t, s) {
      let a = n.default.getMessage(i, x);
      return null != a && a.userHasReactedWithEmoji(t, s)
    }(i, x, t, k)) {
    d.default.show({
      title: h.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
      body: h.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
      confirmText: h.default.Messages.GOT_IT
    });
    return
  }
  let m = await T(t, k);
  I("MESSAGE_REACTION_ADD", i, x, t, {
    burst: k,
    colors: m
  }), await p.default.unarchiveThreadIfNecessary(i), o.default.put({
    url: b({
      channelId: i,
      messageId: x,
      emoji: t,
      userId: "@me"
    }),
    query: {
      location: s,
      type: k ? r.ReactionTypes.BURST : r.ReactionTypes.NORMAL
    },
    oldFormErrors: !0
  }).then(() => {
    k ? (y.AccessibilityAnnouncer.announce(h.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
      name: t.name
    })), f.default.triggerFullscreenAnimation({
      channelId: i,
      messageId: x,
      emoji: {
        ...t,
        animated: !1
      }
    })) : y.AccessibilityAnnouncer.announce(h.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
      name: t.name
    }))
  }).catch(a => {
    u(a, () => E(i, x, t, s, {
      burst: k,
      isRetry: !0
    }), {
      isRetry: e
    }) && (I("MESSAGE_REACTION_REMOVE", i, x, t, {
      burst: k
    }), k ? y.AccessibilityAnnouncer.announce(h.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
      name: t.name
    })) : y.AccessibilityAnnouncer.announce(h.default.Messages.REACTION_ADD_ERROR_A11Y.format({
      name: t.name
    })))
  })
}

function g(i) {
  let {
    channelId: x,
    messageId: t,
    emoji: s,
    key: a
  } = i;
  k.default.dispatch({
    type: "BURST_REACTION_EFFECT_PLAY",
    channelId: x,
    messageId: t,
    emoji: s,
    key: a
  })
}
async function A(i, x, t) {
  let s = null != t && !!t.isRetry;
  await p.default.unarchiveThreadIfNecessary(i), o.default.delete({
    url: _.Endpoints.REMOVE_REACTIONS(i, x),
    oldFormErrors: !0
  }).catch(t => {
    u(t, () => A(i, x, {
      isRetry: !0
    }), {
      isRetry: s
    })
  })
}
async function R(i, x, t, s) {
  let a = null != s && !!s.isRetry;
  await p.default.unarchiveThreadIfNecessary(i);
  let y = null === t.id ? t.name : "".concat(t.name, ":").concat(t.id);
  o.default.delete({
    url: _.Endpoints.REMOVE_EMOJI_REACTIONS(i, x, y),
    oldFormErrors: !0
  }).catch(s => {
    u(s, () => R(i, x, t, {
      isRetry: !0
    }), {
      isRetry: a
    })
  })
}
async function O(i, x, t, s) {
  let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
    k = arguments.length > 5 ? arguments[5] : void 0,
    d = null != k && !!k.burst,
    e = null != k && !!k.isRetry;
  I("MESSAGE_REACTION_REMOVE", i, x, t, {
    userId: s,
    burst: d
  }), await p.default.unarchiveThreadIfNecessary(i), o.default.delete({
    url: b({
      channelId: i,
      messageId: x,
      emoji: t,
      userId: null != s ? s : "@me",
      type: d ? r.ReactionTypes.BURST : r.ReactionTypes.NORMAL,
      useTypeEndpoint: !0
    }),
    query: {
      location: a,
      burst: d
    },
    oldFormErrors: !0
  }).then(() => {
    (null == k ? void 0 : k.burst) ? y.AccessibilityAnnouncer.announce(h.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
      name: t.name
    })): y.AccessibilityAnnouncer.announce(h.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
      name: t.name
    }))
  }).catch(async o => {
    if (u(o, () => O(i, x, t, s, a, {
        burst: d,
        isRetry: !0
      }), {
        isRetry: e
      })) {
      let a = await T(t, d);
      I("MESSAGE_REACTION_ADD", i, x, t, {
        userId: s,
        burst: d,
        colors: a
      }), (null == k ? void 0 : k.burst) ? y.AccessibilityAnnouncer.announce(h.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
        name: t.name
      })) : y.AccessibilityAnnouncer.announce(h.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
        name: t.name
      }))
    }
  })
}
async function T(i, x) {
  let t = [];
  if (x) try {
    t = await (0, l.getEmojiColors)(i)
  } catch {}
  return t
}

function N(i) {
  let {
    channelId: x,
    messageId: t,
    emoji: s,
    reactionType: a,
    userId: o,
    location: y
  } = i, k = a === r.ReactionTypes.BURST;
  O(x, t, s, o, y, {
    burst: k
  })
}