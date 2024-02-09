"use strict";
n.r(t), n.d(t, {
  PrivateThreadMode: function() {
    return i
  },
  usePrivateThreadMode: function() {
    return y
  },
  getIsPrivate: function() {
    return D
  },
  getDefaultThreadName: function() {
    return R
  },
  useCreateThreadCommon: function() {
    return P
  },
  createThread: function() {
    return L
  },
  useCreateForumPostCommon: function() {
    return U
  }
}), n("781738"), n("424973"), n("222007");
var i, l, a = n("884691"),
  s = n("872717"),
  r = n("913144"),
  o = n("404118"),
  u = n("295426"),
  d = n("819689"),
  c = n("81594"),
  p = n("670902"),
  f = n("867965"),
  m = n("884351"),
  I = n("804888"),
  _ = n("42203"),
  T = n("474643"),
  C = n("377253"),
  A = n("401848"),
  E = n("718517"),
  N = n("568734"),
  S = n("252862"),
  g = n("300322"),
  O = n("24337"),
  M = n("648564"),
  h = n("49111"),
  v = n("782340");

function y(e) {
  let t = (0, g.useCanStartPublicThread)(e),
    n = (0, g.useCanStartPrivateThread)(e);
  return n ? t ? 2 : 3 : 1
}

function D(e, t) {
  var n;
  if (3 === t) return !0;
  return null !== (n = e.isPrivate) && void 0 !== n && n
}

function R(e, t) {
  var n, i, l, a;
  let s = null == t ? null : C.default.getMessage(e.id, t),
    r = null !== (l = null == s ? void 0 : null === (i = s.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
  if ("" !== r) return r.length > 40 ? r.substring(0, 40) + "..." : r;
  {
    let t = m.default.unparse(null !== (a = null == s ? void 0 : s.content) && void 0 !== a ? a : "", e.id, !0),
      n = (0, O.default)(t.split("\n")[0], !0);
    n = n.replace(/^[ #-]+/, "");
    let i = [];
    for (;;) {
      let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
      if (null == e || null == e.index) {
        i.push(n);
        break
      }
      i.push(n.substring(0, e.index)), i.push(e[0]), n = n.substring(e.index + e[0].length)
    }
    let l = i[0];
    for (let e = 1; e < i.length; e++) {
      let t = l + i[e];
      if (t.length > 40) break;
      l = t
    }
    return l.length > 40 && (l = l.substring(0, 40) + "..."), l
  }
}

function P(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: i,
    privateThreadMode: l,
    location: r,
    onThreadCreated: o,
    useDefaultThreadName: p,
    uploadHandler: f
  } = e;
  return a.useCallback(async (e, a, I) => {
    var C;
    let A = null == n,
      E = D(i, l),
      N = null !== (C = i.name) && void 0 !== C ? C : "";
    if ("" === N && p) {
      let e = R(t, n);
      N = "" !== e ? e : v.default.Messages.THREAD
    }
    let g = (0, S.getAutoArchiveDuration)(t),
      O = _.default.getChannel(n),
      M = await F(t, () => {
        let e = null != n ? h.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : h.Endpoints.CHANNEL_THREADS(t.id);
        return s.default.post({
          url: e,
          body: {
            name: N,
            type: E ? h.ChannelTypes.PRIVATE_THREAD : t.type === h.ChannelTypes.GUILD_ANNOUNCEMENT ? h.ChannelTypes.ANNOUNCEMENT_THREAD : h.ChannelTypes.PUBLIC_THREAD,
            auto_archive_duration: g,
            location: r
          }
        })
      });
    M !== O && (u.default.clearDraft(t.id, T.DraftType.ThreadSettings), u.default.clearDraft(t.id, T.DraftType.FirstThreadMessage), null == o || o(M), (A || e.length > 0 || null != a && a.length > 0 || null != I && I.length > 0) && function(e, t, n, i, l) {
      if (null != l && null != i && i.length > 0) l(e, i, t, n);
      else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
      else d.default.sendMessage(e.id, m.default.parse(e, t))
    }(M, e, a, I, f)), c.default.clearAll(t.id, T.DraftType.FirstThreadMessage)
  }, [t, n, i, o, l, r, p, f])
}

function L(e, t, n, i, l) {
  return F(e, () => s.default.post({
    url: h.Endpoints.CHANNEL_THREADS(e.id),
    body: {
      name: t,
      type: n,
      auto_archive_duration: i,
      location: l
    }
  }))
}

function U(e) {
  let {
    parentChannel: t,
    name: n,
    appliedTags: i,
    onThreadCreated: l,
    upload: r
  } = e;
  return a.useCallback(async (e, a, o) => {
    let d = 0,
      [p, m] = (0, I.default)(e);
    p && (e = m, d = (0, N.addFlag)(d, h.MessageFlags.SUPPRESS_NOTIFICATIONS));
    let _ = (0, S.getAutoArchiveDuration)(t, null),
      C = h.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
      A = {
        name: n,
        auto_archive_duration: _,
        applied_tags: i,
        message: {
          content: e,
          sticker_ids: a,
          flags: 0 !== d ? d : void 0
        }
      },
      E = await F(t, () => null != o && o.length > 0 ? r(C, A, o) : s.default.post({
        url: C,
        body: A
      }));
    return u.default.clearDraft(t.id, T.DraftType.ThreadSettings), u.default.clearDraft(t.id, T.DraftType.FirstThreadMessage), c.default.clearAll(t.id, T.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: E.id
    }), null == l || l(E), E
  }, [t, n, l, i, r])
}(l = i || (i = {}))[l.Disabled = 1] = "Disabled", l[l.Enabled = 2] = "Enabled", l[l.PrivateOnly = 3] = "PrivateOnly";
async function F(e, t) {
  let n;
  let i = e.isForumLikeChannel();
  try {
    n = await t(), null == n.body ? o.default.show({
      title: v.default.Messages.ERROR,
      body: v.default.Messages.ERROR_OCCURRED_TRY_AGAIN
    }) : (r.default.dispatch({
      type: "SLOWMODE_RESET_COOLDOWN",
      slowmodeType: A.SlowmodeType.CreateThread,
      channelId: e.id
    }), r.default.dispatch({
      type: "THREAD_CREATE_LOCAL",
      channelId: n.body.id
    }))
  } catch (t) {
    var l, a, s, u, d, c;
    if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === h.AbortCodes.TOO_MANY_THREADS) o.default.show({
      title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
      body: i ? v.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : v.default.Messages.TOO_MANY_THREADS_MESSAGE
    });
    else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === h.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) o.default.show({
      title: v.default.Messages.CANNOT_CREATE_THREAD,
      body: v.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
    });
    else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === h.AbortCodes.SLOWMODE_RATE_LIMITED) {
      let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
      n > 0 && r.default.dispatch({
        type: "SLOWMODE_SET_COOLDOWN",
        channelId: e.id,
        slowmodeType: A.SlowmodeType.CreateThread,
        cooldownMs: n * E.default.Millis.SECOND
      })
    } else if (429 === t.status) o.default.show({
      title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
      body: v.default.Messages.RATE_LIMITED
    });
    else if (M.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
    else {
      if (M.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
        null == t.body && n(), p.default.addConditionalChangeListener(() => {
          let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
          if (null != t) {
            let i = _.default.getChannel(t);
            return r.default.wait(() => {
              null == i ? n() : e(i)
            }), !1
          }
        })
      });
      o.default.show({
        title: v.default.Messages.ERROR,
        body: v.default.Messages.ERROR_OCCURRED_TRY_AGAIN
      })
    }
  }
  return new Promise((e, t) => {
    null == n.body && t(), _.default.addConditionalChangeListener(() => {
      let t = _.default.getChannel(n.body.id);
      if (null != t) return r.default.wait(() => {
        e(t)
      }), !1
    })
  })
}