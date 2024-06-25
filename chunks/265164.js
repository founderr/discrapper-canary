"use strict";
n(47120), n(653041), n(733860);
var i, r = n(512722),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(353926),
  u = n(786761),
  _ = n(314897),
  c = n(592125),
  d = n(375954),
  E = n(306680),
  I = n(9156),
  T = n(626135),
  h = n(70956),
  S = n(709054),
  f = n(761080),
  N = n(584925),
  A = n(207205),
  m = n(981631);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = [],
  p = null,
  g = [],
  C = {},
  v = {},
  L = {},
  D = {},
  M = {},
  P = {},
  y = {},
  U = {},
  b = new Set,
  G = !1,
  w = 0,
  B = !1,
  x = 0;

function k() {
  R = g, g = [], w++, V(R)
}

function V(e) {
  let t = [],
    n = [];
  if (e.forEach(e => {
      let i = null != N.Z.getReadTimestamp(e.id);
      e.type === f.Rr.MESSAGE ? i = i || !(0, A.$U)(e.data.channel_id, e.data.message_id) : e.type === f.Rr.SUMMARY && (i = i || !(0, A.$U)(e.data.channel_id, e.data.summary_id)), i ? t.push(e) : n.push(e)
    }), null != C.load_id) {
    var i;
    T.default.track(m.rMx.FEED_LOADED, {
      ...C,
      unread_feed_item_ids: n.map(e => e.id),
      read_feed_item_ids: t.map(e => e.id),
      home_session_id: "gravity"
    }), p = null !== (i = C.load_id) && void 0 !== i ? i : null, C = {}
  }
  let r = [...n, ...t];
  (0, A.es)(D, r)
}

function Z(e) {
  let {
    type: t,
    messageId: n,
    userId: i,
    emoji: r,
    reactionType: s
  } = e, o = D[n];
  if (null == o || o.type !== f.Rr.MESSAGE) return !1;
  let a = _.default.getId() === i;
  "MESSAGE_REACTION_ADD" === t ? o.message = o.message.addReaction(r, a, e.colors, s) : o.message = o.message.removeReaction(r, a, s)
}
class H extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(d.Z, c.Z, E.ZP, l.Z, I.ZP, _.default, N.Z), this.syncWith([E.ZP], () => (function() {
        if (!(0, A.rK)("GravityStore-recomputeMentionStates")) return !1;
        R.forEach(e => {
          if (e.type === f.Rr.MESSAGE) {
            if (e.data.has_mention) {
              if (0 !== E.ZP.getMentionCount(e.data.channel_id)) return;
              delete U[e.data.channel_id]
            }
          }
        }), g.forEach(e => {
          if (e.type === f.Rr.MESSAGE) {
            if (e.data.has_mention) {
              if (0 !== E.ZP.getMentionCount(e.data.channel_id)) return;
              delete U[e.data.channel_id]
            }
          }
        }), Object.values(v).forEach(e => {
          if (e.type === f.Rr.MESSAGE) {
            if (e.data.has_mention) {
              if (0 !== E.ZP.getMentionCount(e.data.channel_id)) return;
              delete U[e.data.channel_id]
            }
          }
        })
      })()), null != e) {
      var t, n, i;
      R = null !== (t = e.dehydratedItems) && void 0 !== t ? t : [], v = null !== (n = e.locallyAddedItems) && void 0 !== n ? n : {}, x = null !== (i = e.numOpens) && void 0 !== i ? i : 0
    }
  }
  getVersion() {
    return w
  }
  getDehydratedItems() {
    return R
  }
  getNewDehydratedItems() {
    return g
  }
  getDehydratedItem(e) {
    var t;
    return null !== (t = L[e]) && void 0 !== t ? t : null
  }
  getHydratedItem(e) {
    var t;
    return null !== (t = D[e]) && void 0 !== t ? t : null
  }
  getMessage(e) {
    let t = D[e];
    return null == t || t.type !== f.Rr.MESSAGE ? null : t.message
  }
  getHydratedItems() {
    return D
  }
  getMissingItems() {
    return M
  }
  getCustomChannelScore(e, t) {
    var n;
    return null == y[e] ? 0 : null !== (n = y[e][t]) && void 0 !== n ? n : 0
  }
  getCustomChannelScores(e) {
    var t;
    return null !== (t = y[e]) && void 0 !== t ? t : {}
  }
  getCustomGuildScore(e) {
    var t;
    return null !== (t = P[e]) && void 0 !== t ? t : 0
  }
  getNumLocallyAddedItems() {
    return Object.keys(v).length
  }
  getMentionCount(e) {
    var t;
    return (0, A.rK)("GravityStore-getMentionCount") ? null !== (t = U[e]) && void 0 !== t ? t : 0 : 0
  }
  getMentionedGuilds() {
    return b
  }
  hasNewContent() {
    let e = 1 === w && B,
      t = g.length > 0 && (0 === R.length || g[0].id !== R[0].id);
    return G && (e || t)
  }
  getActiveSummary() {
    return null
  }
  getLoadId() {
    return p
  }
  hasOpenedEnoughTimes() {
    return 5 === x
  }
  getState() {
    return {
      dehydratedItems: R,
      locallyAddedItems: v,
      numOpens: x
    }
  }
}
O(H, "displayName", "GravityStore"), O(H, "persistKey", "GravityStore"), t.Z = new H(a.Z, {
  LOGOUT: function() {
    return !1
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      message: n,
      guildId: i,
      channelId: r
    } = e;
    if (!(0, A.rK)("GravityStore-handleMessageCreate") || null == i || (null === (t = n.author) || void 0 === t ? void 0 : t.id) === _.default.getId()) return !1;
    let s = c.Z.getChannel(r);
    if (null == s || s.type !== m.d4z.GUILD_ANNOUNCEMENT || I.ZP.isChannelMuted(i, r)) return !1;
    let o = d.Z.getMessage(n.channel_id, n.id);
    null == o && (o = (0, u.e5)(n));
    let a = o.mentionEveryone;
    if (n.id in L) return !1;
    let l = {
      type: f.Rr.MESSAGE,
      id: n.id,
      score: Date.now(),
      data: {
        channel_id: n.channel_id,
        guild_id: i,
        message_id: n.id,
        channel_type: m.d4z.GUILD_ANNOUNCEMENT,
        has_mention: a
      }
    };
    a && (null == U[r] && (U[r] = 0), U[r]++, b.add(i)), null == (g = 0 === g.length ? [...R] : [...g]).find(e => e.id === n.id) && (g.unshift(l), v[n.id] = l), L[n.id] = l, D[n.id] = {
      ...l,
      message: o
    }
  },
  LOAD_GRAVITY_DEHYDRATED: function(e) {
    let {
      items: t,
      loadId: n,
      startTime: i
    } = e;
    g = function(e) {
      let t = e.filter(e => f.zd.has(e.type));
      t.sort((e, t) => t.score - e.score);
      let n = t.filter(e => e.score >= 20 && e.score < 40),
        i = t.filter(e => e.score >= 40),
        r = [],
        o = {},
        a = {},
        l = 0,
        u = 0,
        _ = 0;
      for (;;) {
        if (_++, l >= i.length) {
          for (; 0 !== Object.keys(o).length;) {
            ;
            Object.keys(o).forEach(e => {
              o[e].length > 0 ? r.push(o[e].shift()) : delete o[e]
            })
          }
          break
        }
        let e = null;
        if (Object.keys(o).forEach(t => {
            let n = o[t][0];
            if (null == n) return;
            let i = a[t];
            if (null == i && (null == e || e.score < n.score)) {
              e = n;
              return
            }
            r.length >= i + 3 && (null == e || e.score < n.score) && (e = n)
          }), null != e) {
          s()(e.type === f.Rr.MESSAGE || e.type === f.Rr.SUMMARY, "Invalid item type");
          let t = e.data.guild_id;
          a[t] = r.length, r.push(e), o[t].shift();
          continue
        }
        let t = !0;
        if (_ % 7 == 0 && u < n.length ? (e = n[u], u++, t = !1) : (e = i[l], l++), e.type !== f.Rr.MESSAGE && e.type !== f.Rr.SUMMARY) {
          r.push(e);
          continue
        }
        if (null == a[e.data.guild_id]) {
          a[e.data.guild_id] = r.length, o[e.data.guild_id] = [], r.push(e);
          continue
        } {
          let n = a[e.data.guild_id];
          r.length < n + 3 ? t ? o[e.data.guild_id].push(e) : u-- : o[e.data.guild_id].length > 0 ? (a[e.data.guild_id] = r.length, r.push(o[e.data.guild_id].shift()), o[e.data.guild_id].push(e)) : (a[e.data.guild_id] = r.length, r.push(e))
        }
      }
      return r
    }(t), ! function() {
      let e = new Set;
      g.forEach(t => {
        e.add(t.id)
      }), Object.values(v).forEach(t => {
        e.has(t.id) || S.default.age(t.id) > h.Z.Millis.DAY || t.type === f.Rr.MESSAGE && I.ZP.isChannelMuted(t.data.guild_id, t.data.channel_id) ? delete v[t.id] : !e.has(t.id) && (g.unshift(t), e.add(t.id))
      }), g.forEach(e => {
        L[e.id] = e
      })
    }(), U = {}, g.forEach(e => {
      e.type === f.Rr.MESSAGE && e.data.channel_type === m.d4z.GUILD_ANNOUNCEMENT && e.data.has_mention && 0 > S.default.compare(E.ZP.ackMessageId(e.data.channel_id), e.data.message_id) && (null == U[e.data.channel_id] && (U[e.data.channel_id] = 0), U[e.data.channel_id]++, b.add(e.data.guild_id))
    }), G = !0, C = {
      load_id: n,
      load_time_millis: Date.now() - i,
      feed_item_ids: g.map(e => e.id)
    }, 0 === w && (g.length > 0 && (0 === R.length || R[0].id !== g[0].id) ? (B = !0, V(R), V(g)) : k())
  },
  LOAD_GRAVITY_HYDRATED: function(e) {
    let {
      messageItems: t,
      summaryItems: n,
      activityItems: i,
      requestMessageItems: r,
      requestSummaryItems: s,
      requestActivityItems: o
    } = e;
    D = {
      ...D
    };
    let a = r.filter(e => null == t.find(t => t.message.id === e.message_id)),
      l = s.filter(e => null == n.find(t => t.id === e.summary_id)),
      _ = o.filter(e => null == i.find(t => t.id === e.outbox_content_id));
    a.forEach(e => {
      M[e.message_id] = !0
    }), l.forEach(e => {
      M[e.summary_id] = !0
    }), _.forEach(e => {
      M[e.outbox_content_id] = !0
    }), t.forEach(e => {
      let t = L[e.message.id];
      if (null != t) null != d.Z.getMessage(e.channel_id, e.message.id) ? D[e.message.id] = {
        ...t,
        message: d.Z.getMessage(e.channel_id, e.message.id)
      } : D[e.message.id] = {
        ...t,
        message: (0, u.e5)(e.message)
      }
    }), n.forEach(e => {
      let t = L[e.id];
      if (null == t || t.type !== f.Rr.SUMMARY) return;
      let n = (0, A.wV)(e, t.data.guild_id);
      if (n.messages.length < 3) {
        M[n.id] = !0;
        return
      }
      D[e.id] = {
        ...t,
        summary: n
      }
    }), i.forEach(e => {
      let t = L[e.id];
      if (null != t) D[e.id] = {
        ...t,
        activity: e
      }
    })
  },
  LOAD_GRAVITY_CUSTOM_SCORES: function(e) {
    let {
      scores: t
    } = e;
    for (let e of t)
      for (let t of (P[e.guild_id] = e.guild_score, Object.keys(e.custom_channel_scores))) null == y[e.guild_id] && (y[e.guild_id] = {}), y[e.guild_id][t] = e.custom_channel_scores[t]
  },
  GRAVITY_CUSTOM_SCORES_UPDATED: function(e) {
    let {
      channelScores: t,
      guildId: n,
      guildScore: i
    } = e;
    null != i && (P[n] = i), null == t || t.forEach(e => {
      let {
        channelId: t,
        score: i
      } = e;
      null == y[n] && (y[n] = {}), y[n][t] = i
    })
  },
  RELOAD_GRAVITY: function(e) {
    let {
      versionOnly: t
    } = e;
    if (t) {
      w++;
      return
    }
    if (0 === g.length) return !1;
    k()
  },
  GRAVITY_TAB_OPENED: function() {
    B && (k(), B = !1), x < 5 && x++
  },
  GRAVITY_FEEDBACK_GIVEN: function() {
    x = 6
  },
  MESSAGE_REACTION_ADD: Z,
  MESSAGE_REACTION_ADD_MANY: function(e) {
    let {
      messageId: t,
      reactions: n
    } = e, i = D[t];
    if (null == i || i.type !== f.Rr.MESSAGE) return !1;
    let r = _.default.getId();
    i.message = i.message.addReactionBatch(n, r)
  },
  MESSAGE_REACTION_REMOVE: Z,
  MESSAGE_REACTION_REMOVE_ALL: function(e) {
    let {
      messageId: t
    } = e, n = D[t];
    if (null == n || n.type !== f.Rr.MESSAGE) return !1;
    n.message = n.message.set("reactions", [])
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
    let {
      messageId: t,
      emoji: n
    } = e, i = D[t];
    if (null == i || i.type !== f.Rr.MESSAGE) return !1;
    i.message = i.message.removeReactionsForEmoji(n)
  }
})