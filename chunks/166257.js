"use strict";
n.r(t), n.d(t, {
  ReactionLocations: function() {
    return l
  },
  getReactors: function() {
    return O
  },
  addReaction: function() {
    return p
  },
  playBurstReaction: function() {
    return I
  },
  removeAllReactions: function() {
    return M
  },
  removeEmojiReactions: function() {
    return N
  },
  removeReaction: function() {
    return C
  },
  removeReactionWithConfirmation: function() {
    return v
  }
});
var a, l, r = n("872717"),
  i = n("819855"),
  o = n("913144"),
  s = n("404118"),
  u = n("875978"),
  c = n("263024"),
  d = n("271938"),
  f = n("377253"),
  R = n("659500"),
  m = n("718517"),
  E = n("402671"),
  h = n("61069"),
  A = n("49111"),
  T = n("782340");

function g(e, t, n) {
  let {
    status: a,
    body: l
  } = e;
  if (429 === a) return setTimeout(t, e.body.retry_after * m.default.Millis.SECOND), !1;
  if (403 === a) switch (l && l.code) {
    case A.AbortCodes.TOO_MANY_REACTIONS:
      s.default.show({
        title: T.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
        body: T.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
        confirmText: T.default.Messages.OKAY
      });
      break;
    case A.AbortCodes.REACTION_BLOCKED:
      R.ComponentDispatch.dispatch(A.ComponentActions.SHAKE_APP, {
        duration: 200,
        intensity: 2
      })
  } else if (!n.isRetry) return t(), !1;
  return !0
}

function _(e, t, n, a, l) {
  var r, i;
  o.default.dispatch({
    type: e,
    channelId: t,
    messageId: n,
    userId: null !== (r = null == l ? void 0 : l.userId) && void 0 !== r ? r : d.default.getId(),
    emoji: a,
    optimistic: !0,
    colors: null !== (i = null == l ? void 0 : l.colors) && void 0 !== i ? i : [],
    reactionType: (null == l ? void 0 : l.burst) ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL
  })
}

function S(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: a,
    userId: l,
    useTypeEndpoint: r = !1,
    type: i = u.ReactionTypes.NORMAL
  } = e, o = null != a.id ? "".concat(a.name, ":").concat(a.id) : a.name;
  return null == l ? A.Endpoints.REACTIONS(t, n, o) : r ? A.Endpoints.REACTION_WITH_TYPE(t, n, o, l, i) : A.Endpoints.REACTION(t, n, o, l)
}
async function O(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: a,
    limit: l,
    after: i,
    type: s
  } = e, u = await r.default.get({
    url: S({
      channelId: t,
      messageId: n,
      emoji: a
    }),
    query: {
      limit: l,
      after: i,
      type: s
    },
    oldFormErrors: !0
  });
  return o.default.dispatch({
    type: "MESSAGE_REACTION_ADD_USERS",
    channelId: t,
    messageId: n,
    users: u.body,
    emoji: a,
    reactionType: s
  }), u.body
}
async function p(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
    l = arguments.length > 4 ? arguments[4] : void 0,
    o = null != l && !!l.burst,
    d = null != l && !!l.isRetry;
  if (!d && function(e, t, n, a) {
      let l = f.default.getMessage(e, t);
      return null != l && l.userHasReactedWithEmoji(n, a)
    }(e, t, n, o)) {
    s.default.show({
      title: T.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
      body: T.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
      confirmText: T.default.Messages.GOT_IT
    });
    return
  }
  let R = await y(n, o);
  _("MESSAGE_REACTION_ADD", e, t, n, {
    burst: o,
    colors: R
  }), await c.default.unarchiveThreadIfNecessary(e), r.default.put({
    url: S({
      channelId: e,
      messageId: t,
      emoji: n,
      userId: "@me"
    }),
    query: {
      location: a,
      type: o ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL
    },
    oldFormErrors: !0
  }).then(() => {
    o ? (i.AccessibilityAnnouncer.announce(T.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
      name: n.name
    })), h.default.triggerFullscreenAnimation({
      channelId: e,
      messageId: t,
      emoji: {
        ...n,
        animated: !1
      }
    })) : i.AccessibilityAnnouncer.announce(T.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
      name: n.name
    }))
  }).catch(l => {
    g(l, () => p(e, t, n, a, {
      burst: o,
      isRetry: !0
    }), {
      isRetry: d
    }) && (_("MESSAGE_REACTION_REMOVE", e, t, n, {
      burst: o
    }), o ? i.AccessibilityAnnouncer.announce(T.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
      name: n.name
    })) : i.AccessibilityAnnouncer.announce(T.default.Messages.REACTION_ADD_ERROR_A11Y.format({
      name: n.name
    })))
  })
}

function I(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: a,
    key: l
  } = e;
  o.default.dispatch({
    type: "BURST_REACTION_EFFECT_PLAY",
    channelId: t,
    messageId: n,
    emoji: a,
    key: l
  })
}
async function M(e, t, n) {
  let a = null != n && !!n.isRetry;
  await c.default.unarchiveThreadIfNecessary(e), r.default.delete({
    url: A.Endpoints.REMOVE_REACTIONS(e, t),
    oldFormErrors: !0
  }).catch(n => {
    g(n, () => M(e, t, {
      isRetry: !0
    }), {
      isRetry: a
    })
  })
}
async function N(e, t, n, a) {
  let l = null != a && !!a.isRetry;
  await c.default.unarchiveThreadIfNecessary(e);
  let i = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
  r.default.delete({
    url: A.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, i),
    oldFormErrors: !0
  }).catch(a => {
    g(a, () => N(e, t, n, {
      isRetry: !0
    }), {
      isRetry: l
    })
  })
}
async function C(e, t, n, a) {
  let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
    o = arguments.length > 5 ? arguments[5] : void 0,
    s = null != o && !!o.burst,
    d = null != o && !!o.isRetry;
  _("MESSAGE_REACTION_REMOVE", e, t, n, {
    userId: a,
    burst: s
  }), await c.default.unarchiveThreadIfNecessary(e), r.default.delete({
    url: S({
      channelId: e,
      messageId: t,
      emoji: n,
      userId: null != a ? a : "@me",
      type: s ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL,
      useTypeEndpoint: !0
    }),
    query: {
      location: l,
      burst: s
    },
    oldFormErrors: !0
  }).then(() => {
    (null == o ? void 0 : o.burst) ? i.AccessibilityAnnouncer.announce(T.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
      name: n.name
    })): i.AccessibilityAnnouncer.announce(T.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
      name: n.name
    }))
  }).catch(async r => {
    if (g(r, () => C(e, t, n, a, l, {
        burst: s,
        isRetry: !0
      }), {
        isRetry: d
      })) {
      let l = await y(n, s);
      _("MESSAGE_REACTION_ADD", e, t, n, {
        userId: a,
        burst: s,
        colors: l
      }), (null == o ? void 0 : o.burst) ? i.AccessibilityAnnouncer.announce(T.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
        name: n.name
      })) : i.AccessibilityAnnouncer.announce(T.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
        name: n.name
      }))
    }
  })
}
async function y(e, t) {
  let n = [];
  if (t) try {
    n = await (0, E.getEmojiColors)(e)
  } catch {}
  return n
}(a = l || (l = {})).MESSAGE = "Message", a.FORUM_TOOLBAR = "Forum Toolbar", a.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";

function v(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: a,
    reactionType: l,
    userId: r,
    location: i
  } = e, o = l === u.ReactionTypes.BURST;
  C(t, n, a, r, i, {
    burst: o
  })
}