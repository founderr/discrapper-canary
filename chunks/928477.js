"use strict";
n.d(t, {
  JA: function() {
    return y
  },
  Jw: function() {
    return i
  },
  Od: function() {
    return P
  },
  Wj: function() {
    return b
  },
  gK: function() {
    return U
  },
  oD: function() {
    return M
  },
  vH: function() {
    return D
  }
}), n(757143), n(653041), n(47120);
var i, r, s = n(470079),
  o = n(544891),
  a = n(570140),
  l = n(668781),
  u = n(430742),
  _ = n(904245),
  c = n(166459),
  d = n(238349),
  E = n(228392),
  I = n(957730),
  T = n(467798),
  h = n(592125),
  S = n(703558),
  f = n(375954),
  N = n(300429),
  A = n(70956),
  m = n(630388),
  O = n(709054),
  R = n(968437),
  p = n(665906),
  g = n(456077),
  C = n(124368),
  v = n(981631),
  L = n(689938);

function D(e) {
  let t = (0, p.NE)(e);
  return (0, p.Xu)(e) ? t ? 2 : 3 : 1
}

function M(e, t) {
  var n;
  if (3 === t) return !0;
  return null !== (n = e.isPrivate) && void 0 !== n && n
}

function P(e, t) {
  var n, i, r, s;
  let o = null == t ? null : f.Z.getMessage(e.id, t),
    a = null !== (r = null == o ? void 0 : null === (i = o.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== r ? r : "";
  if ("" !== a) return a.length > 40 ? a.substring(0, 40) + "..." : a;
  {
    let t = I.ZP.unparse(null !== (s = null == o ? void 0 : o.content) && void 0 !== s ? s : "", e.id, !0),
      n = (0, g.Z)(t.split("\n")[0], !0);
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
    let r = i[0];
    for (let e = 1; e < i.length; e++) {
      let t = r + i[e];
      if (t.length > 40) break;
      r = t
    }
    return r.length > 40 && (r = r.substring(0, 40) + "..."), r
  }
}

function y(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: i,
    privateThreadMode: r,
    location: a,
    onThreadCreated: l,
    useDefaultThreadName: d,
    uploadHandler: E
  } = e;
  return s.useCallback(async (e, s, T) => {
    var f;
    let N = null == n,
      A = M(i, r),
      m = null !== (f = i.name) && void 0 !== f ? f : "";
    if ("" === m && d) {
      let e = P(t, n);
      m = "" !== e ? e : L.Z.Messages.THREAD
    }
    let p = (0, R.WD)(t),
      g = h.Z.getChannel(O.default.castMessageIdAsChannelId(n)),
      C = await G(t, () => {
        let e = null != n ? v.ANM.CHANNEL_MESSAGE_THREADS(t.id, n) : v.ANM.CHANNEL_THREADS(t.id);
        return o.tn.post({
          url: e,
          body: {
            name: m,
            type: A ? v.d4z.PRIVATE_THREAD : t.type === v.d4z.GUILD_ANNOUNCEMENT ? v.d4z.ANNOUNCEMENT_THREAD : v.d4z.PUBLIC_THREAD,
            auto_archive_duration: p,
            location: a
          }
        })
      });
    C !== g && (u.Z.clearDraft(t.id, S.d.ThreadSettings), u.Z.clearDraft(t.id, S.d.FirstThreadMessage), null == l || l(C), (N || e.length > 0 || null != s && s.length > 0 || null != T && T.length > 0) && function(e, t, n, i, r) {
      if (null != r && null != i && i.length > 0) r(e, i, t, n);
      else if (null != n && n.length > 0) _.Z.sendStickers(e.id, n, t);
      else _.Z.sendMessage(e.id, I.ZP.parse(e, t))
    }(C, e, s, T, E)), c.Z.clearAll(t.id, S.d.FirstThreadMessage)
  }, [t, n, i, l, r, a, d, E])
}

function U(e, t, n, i, r) {
  return G(e, () => o.tn.post({
    url: v.ANM.CHANNEL_THREADS(e.id),
    body: {
      name: t,
      type: n,
      auto_archive_duration: i,
      location: r
    }
  }))
}

function b(e) {
  let {
    parentChannel: t,
    name: n,
    appliedTags: i,
    onThreadCreated: r,
    upload: a
  } = e;
  return s.useCallback(async (e, s, l) => {
    let _ = 0,
      [d, I] = (0, T.ZP)(e);
    d && (e = I, _ = (0, m.pj)(_, v.iLy.SUPPRESS_NOTIFICATIONS));
    let h = (0, R.WD)(t, null),
      f = v.ANM.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
      N = {
        name: n,
        auto_archive_duration: h,
        applied_tags: i,
        message: {
          content: e,
          sticker_ids: s,
          flags: 0 !== _ ? _ : void 0
        }
      },
      A = await G(t, () => null != l && l.length > 0 ? a(f, N, l) : o.tn.post({
        url: f,
        body: N
      }));
    return u.Z.clearDraft(t.id, S.d.ThreadSettings), u.Z.clearDraft(t.id, S.d.FirstThreadMessage), c.Z.clearAll(t.id, S.d.FirstThreadMessage), (0, E.Je)({
      guildId: t.guild_id,
      channelId: t.id,
      postId: A.id
    }), null == r || r(A), A
  }, [t, n, r, i, a])
}(r = i || (i = {}))[r.Disabled = 1] = "Disabled", r[r.Enabled = 2] = "Enabled", r[r.PrivateOnly = 3] = "PrivateOnly";
async function G(e, t) {
  let n;
  let i = e.isForumLikeChannel();
  try {
    n = await t(), null == n.body ? l.Z.show({
      title: L.Z.Messages.ERROR,
      body: L.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
    }) : (a.Z.dispatch({
      type: "SLOWMODE_RESET_COOLDOWN",
      slowmodeType: N.S.CreateThread,
      channelId: e.id
    }), a.Z.dispatch({
      type: "THREAD_CREATE_LOCAL",
      channelId: n.body.id
    }))
  } catch (t) {
    var r, s, o, u, _, c;
    if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === v.evJ.TOO_MANY_THREADS) l.Z.show({
      title: i ? L.Z.Messages.CANNOT_CREATE_FORUM_POST : L.Z.Messages.CANNOT_CREATE_THREAD,
      body: i ? L.Z.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : L.Z.Messages.TOO_MANY_THREADS_MESSAGE
    });
    else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === v.evJ.TOO_MANY_ANNOUNCEMENT_THREADS) l.Z.show({
      title: L.Z.Messages.CANNOT_CREATE_THREAD,
      body: L.Z.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
    });
    else if ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === v.evJ.SLOWMODE_RATE_LIMITED) {
      let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
      n > 0 && a.Z.dispatch({
        type: "SLOWMODE_SET_COOLDOWN",
        channelId: e.id,
        slowmodeType: N.S.CreateThread,
        cooldownMs: n * A.Z.Millis.SECOND
      })
    } else if (429 === t.status) l.Z.show({
      title: i ? L.Z.Messages.CANNOT_CREATE_FORUM_POST : L.Z.Messages.CANNOT_CREATE_THREAD,
      body: L.Z.Messages.RATE_LIMITED
    });
    else if (C.fZ.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
    else {
      if (C.RN.has(null === (_ = t.body) || void 0 === _ ? void 0 : _.code)) return new Promise((e, n) => {
        null == t.body && n(), d.Z.addConditionalChangeListener(() => {
          let t = d.Z.getAndDeleteMostRecentUserCreatedThreadId();
          if (null != t) {
            let i = h.Z.getChannel(t);
            return a.Z.wait(() => {
              null == i ? n() : e(i)
            }), !1
          }
        })
      });
      l.Z.show({
        title: L.Z.Messages.ERROR,
        body: L.Z.Messages.ERROR_OCCURRED_TRY_AGAIN
      })
    }
  }
  return new Promise((e, t) => {
    null == n.body && t(), h.Z.addConditionalChangeListener(() => {
      let t = h.Z.getChannel(n.body.id);
      if (null != t) return a.Z.wait(() => {
        e(t)
      }), !1
    })
  })
}