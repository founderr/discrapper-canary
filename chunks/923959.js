"use strict";
n.r(t), n.d(t, {
  GUILD_SELECTABLE_CHANNELS_KEY: function() {
    return C
  },
  GUILD_VOCAL_CHANNELS_KEY: function() {
    return A
  },
  default: function() {
    return K
  }
}), n("424973"), n("222007"), n("808653");
var i = n("917351"),
  r = n.n(i),
  s = n("316693"),
  a = n("446674"),
  o = n("913144"),
  l = n("203288"),
  u = n("679653"),
  c = n("379881"),
  d = n("106682"),
  p = n("233069"),
  h = n("991170"),
  f = n("271938"),
  E = n("42203"),
  _ = n("26989"),
  m = n("305961"),
  S = n("957255"),
  g = n("27618"),
  T = n("697218"),
  I = n("49111"),
  v = n("782340");
let C = "SELECTABLE",
  A = "VOCAL",
  R = null,
  N = {},
  y = {},
  O = {},
  D = null,
  b = {},
  P = {
    comparator: -1,
    channel: (0, p.createChannelRecord)({
      id: I.NULL_STRING_CHANNEL_ID,
      type: I.ChannelTypes.GUILD_CATEGORY,
      name: v.default.Messages.UNCATEGORIZED
    })
  },
  L = w(I.NULL_STRING_GUILD_ID),
  M = [],
  U = {};

function w(e) {
  return {
    id: e,
    [C]: [],
    [A]: [],
    [I.ChannelTypes.GUILD_CATEGORY]: [P],
    count: 0
  }
}

function k(e, t) {
  let {
    comparator: n
  } = e, {
    comparator: i
  } = t;
  return n - i
}

function G() {
  N = {}, b = {}, y = {}, O = {}, null != R && x(R)
}

function x(e) {
  var t;
  let n = w(e);
  return N[e] = n, b[e] = [], ! function(e) {
      let {
        id: t
      } = e, n = function(e) {
        if (e === I.FAVORITES) return function() {
          let e = {},
            t = c.default.getFavoriteChannels();
          for (let n in t) {
            let i = E.default.getChannel(n);
            if (null == i) continue;
            let r = t[n],
              s = (0, d.createFavoritesChannelRecord)(t, r, i);
            e[n] = {
              channel: s,
              comparator: s.position
            }
          }
          return e
        }();
        let t = {},
          n = E.default.getMutableGuildChannelsForGuild(e);
        for (let e in n) t[e] = {
          channel: n[e],
          comparator: n[e].position
        };
        return t
      }(t);
      r.forEach(n, n => {
        var i;
        let r = n.channel;
        if (e.count += 1, p.GUILD_NON_CATEGORY_CHANNEL_TYPES.has(r.type) && !S.default.can(I.Permissions.VIEW_CHANNEL, r) && !l.default.isChannelGated(r.guild_id, r.id) && r.id !== D) return;
        let s = (i = r.type, (0, p.isGuildSelectableChannelType)(i) ? C : (0, p.isGuildVocalChannelType)(i) ? A : i);
        r.type === I.ChannelTypes.GUILD_DIRECTORY && (null == b[t] && (b[t] = []), b[t].push(n)), null != e[s] && e[s].push(n)
      })
    }(n), (t = n)[C].sort(k), t[A].sort(k), t[I.ChannelTypes.GUILD_CATEGORY].sort(k),
    function(e) {
      let t = y[e.id] = {},
        n = {};
      e[C].forEach(e => {
        let {
          channel: i
        } = e, r = (0, u.computeChannelName)(i, T.default, g.default), s = Object.prototype.hasOwnProperty.call(n, r) ? n[r] : null;
        null == s ? n[r] = 1 : (n[r] = s + 1, r += "~".concat(s)), t[i.id] = {
          id: i.id,
          name: r
        }
      })
    }(n),
    function(e) {
      let t = T.default.getCurrentUser();
      (function(e, t) {
        let n = m.default.getGuild(t);
        if (null != n && H(e, n)) return !0;
        let i = N[t];
        null == i && (i = x(t));
        let {
          [C]: r, [A]: s
        } = i;
        for (let {
            channel: t
          }
          of r)
          if (H(e, t)) return !0;
        for (let {
            channel: t
          }
          of s)
          if (H(e, t)) return !0;
        return !1
      })(t, e) ? O[e] = !0: delete O[e]
    }(e), n
}

function F(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  if (null == t) return !1;
  N[t] = void 0, R === t && x(t)
}

function V(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) return !1;
  N[t] = void 0, t === R && x(t)
}

function B(e) {
  let {
    guildId: t
  } = e;
  N[t] = void 0, t === R && x(t)
}

function H(e, t) {
  return s.default.hasAny(h.default.computePermissions({
    user: e,
    context: t,
    checkElevated: !1
  }), I.ElevatedPermissions)
}

function j(e, t) {
  var n;
  D = t;
  let i = null !== (n = null == e ? void 0 : e.getGuildId()) && void 0 !== n ? n : null;
  if (null == i) return !1;
  N[i] = void 0, i === R && x(i)
}

function Y() {
  x(I.FAVORITES)
}
class W extends a.default.Store {
  initialize() {
    this.waitFor(m.default, _.default, E.default, S.default, f.default, l.default, c.default), this.syncWith([c.default], Y)
  }
  getAllGuilds() {
    return N
  }
  getChannels(e) {
    var t;
    let n;
    return null != e ? (null == (n = N[t = e]) && (n = x(t)), n) : L
  }
  getFirstChannelOfType(e, t, n) {
    let i = this.getChannels(e)[n],
      r = i.find(t);
    return null != r ? r.channel : null
  }
  getFirstChannel(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return null !== (n = this.getFirstChannelOfType(e, t, C)) && void 0 !== n ? n : i ? this.getFirstChannelOfType(e, t, A) : null
  }
  getDefaultChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.Permissions.VIEW_CHANNEL;
    return this.getFirstChannel(e, e => S.default.can(n, e.channel), t)
  }
  getSFWDefaultChannel(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.Permissions.VIEW_CHANNEL;
    return this.getFirstChannel(e, e => S.default.can(n, e.channel) && !e.channel.nsfw, t)
  }
  getSelectableChannelIds(e) {
    return this.getChannels(e)[C].map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })
  }
  getSelectableChannels(e) {
    return this.getChannels(e)[C]
  }
  getVocalChannelIds(e) {
    return this.getChannels(e)[A].map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })
  }
  getDirectoryChannelIds(e) {
    var t, n;
    return null !== (n = null === (t = b[e]) || void 0 === t ? void 0 : t.map(e => {
      let {
        channel: t
      } = e;
      return t.id
    })) && void 0 !== n ? n : M
  }
  hasSelectableChannel(e, t) {
    return this.getSelectableChannelIds(e).includes(t)
  }
  hasElevatedPermissions(e) {
    return O[e] || !1
  }
  hasChannels(e) {
    return this.getChannels(e).count > 0
  }
  hasCategories(e) {
    return this.getChannels(e)[I.ChannelTypes.GUILD_CATEGORY].length > 1
  }
  getTextChannelNameDisambiguations(e) {
    var t;
    return null != e && null !== (t = y[e]) && void 0 !== t ? t : U
  }
}
W.displayName = "GuildChannelStore";
var K = new W(o.default, {
  BACKGROUND_SYNC: G,
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    if (R = null != t ? t : null, null == t || null != N[t]) return !1;
    x(t)
  },
  CONNECTION_OPEN: G,
  OVERLAY_INITIALIZE: G,
  CACHE_LOADED_LAZY: G,
  GUILD_CREATE: F,
  GUILD_UPDATE: F,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    return delete N[t], delete y[t], delete O[t], delete b[t], !0
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    if (f.default.getId() !== n.id) return !1;
    N[t] = void 0, t === R && x(t)
  },
  CHANNEL_CREATE: V,
  CHANNEL_DELETE: V,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let e of t) {
      let {
        guild_id: t
      } = e;
      null != t && (N[t] = void 0, n = !0, R === t && x(t))
    }
    return n
  },
  GUILD_ROLE_CREATE: B,
  GUILD_ROLE_UPDATE: B,
  GUILD_ROLE_DELETE: B,
  IMPERSONATE_UPDATE: B,
  IMPERSONATE_STOP: B,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null == t && null != D ? j(E.default.getChannel(D), null) : j(E.default.getChannel(t), t)
  },
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    let t = E.default.getBasicChannel(e.id);
    null != t && null != t.guild_id && x(t.guild_id)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        channelId: n,
        sessionId: i
      } = t;
      return f.default.getSessionId() !== i ? e : j(E.default.getChannel(n), n) || e
    }, !1)
  }
})