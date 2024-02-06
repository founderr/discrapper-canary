"use strict";
n.r(t), n.d(t, {
  default: function() {
    return eu
  }
}), n("222007"), n("581081"), n("424973"), n("686130"), n("781738"), n("808653");
var i = n("917351"),
  s = n.n(i),
  r = n("866227"),
  a = n.n(r),
  o = n("102053"),
  l = n("446674"),
  u = n("913144"),
  d = n("80507"),
  c = n("802493"),
  f = n("595525"),
  _ = n("629538"),
  h = n("39616"),
  g = n("828674"),
  m = n("153043"),
  E = n("256941"),
  p = n("505985"),
  v = n("915639"),
  S = n("374363"),
  T = n("26989"),
  I = n("778689"),
  C = n("305961"),
  A = n("677099"),
  y = n("697218"),
  N = n("315102"),
  R = n("718517"),
  D = n("402671"),
  O = n("449008"),
  P = n("655518"),
  b = n("299039"),
  L = n("858619"),
  M = n("867805"),
  U = n("802461"),
  w = n("26430"),
  k = n("958706"),
  V = n("115279"),
  G = n("397336");
let F = [V.EmojiCategories.TOP_GUILD_EMOJI.toString(), V.EmojiCategories.FAVORITES.toString(), V.EmojiCategories.RECENT.toString(), V.EmojiCategories.CUSTOM.toString()].concat(M.default.getCategories()),
  x = {
    pendingUsages: []
  };
class B {
  getEmoji(e) {
    return this.build(), this._emojiMap[e]
  }
  getUsableEmoji(e) {
    let t = this.getEmoji(e);
    return null != t && this.isUsable(t) ? t : null
  }
  isUsable(e) {
    if (0 === e.roles.length) return !0;
    let t = T.default.getMember(this.id, this._userId);
    if (null == t) return !1;
    let n = t.roles.some(t => e.roles.includes(t));
    return !!(n || (0, m.isPurchasableRoleSubscriptionEmoji)(e)) || !1
  }
  get rawEmojis() {
    return this._emojis
  }
  get emojis() {
    return this.build(), this._emojis
  }
  get emoticons() {
    return this.build(), this._emoticons
  }
  get usableEmojis() {
    return this.build(), this._usableEmojis
  }
  build() {
    this._dirty && (this._dirty = !1, this._emojis.forEach(e => {
      e.url = N.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 48
      }), e.allNamesString = ":".concat(e.name, ":"), e.guildId = this.id, e.type = L.EmojiTypes.GUILD, this._emojiMap[e.id] = e
    }), this._usableEmojis = s.sortBy(this._emojis.filter(e => this.isUsable(e)), e => e.name), this._emoticons = this._usableEmojis.filter(e => !e.require_colons))
  }
  constructor(e, t, n, i = !1) {
    this._dirty = !0, this._emojiMap = {}, this._emoticons = [], this._usableEmojis = [], this._canSeeServerSubIAP = !1, this._totalUsable = 0, this.id = e, this._userId = t, this._emojis = n, this._canSeeServerSubIAP = i
  }
}
let H = b.default.fromTimestamp(Date.now() - 60 * R.default.Millis.DAY),
  Y = [],
  j = 2,
  W = F.slice(0),
  K = {},
  z = {},
  q = null,
  X = new Map;

function Q(e) {
  var t;
  let n = Z()[e];
  return null != n ? null === (t = K[n]) || void 0 === t ? void 0 : t.getUsableEmoji(e) : null
}

function Z() {
  if (J(), null == z)
    for (let e in z = {}, K) {
      let t = K[e];
      for (let n of t.rawEmojis) z[n.id] = e
    }
  return z
}
async function J() {
  if (0 !== j) return;
  let e = c.default.database();
  if (null == e) return;
  j = 2;
  let t = await (0, f.tryLoadOrResetCacheGatewayAsync)("EmojiStore.loadSavedEmojis", () => o.default.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", () => _.default.getAsync(e)));
  null != t && u.default.dispatch({
    type: "CACHED_EMOJIS_LOADED",
    emojis: t
  })
}
class $ {
  static get(e) {
    return void 0 === e && (e = null), (null == $._lastInstance || $._lastInstance.guildId !== e) && ($._lastInstance = new $(e)), $._lastInstance
  }
  static reset() {
    $._lastInstance = null
  }
  static resetFrequentlyUsed() {
    null != $._lastInstance && ($._lastInstance.frequentlyUsed = null)
  }
  static resetFavorites() {
    null != $._lastInstance && ($._lastInstance.favorites = null, $._lastInstance.favoriteNamesAndIds = null)
  }
  static clear(e) {
    null != $._lastInstance && $._lastInstance.guildId === e && ($._lastInstance = null)
  }
  ensureDisambiguated() {
    null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
  }
  getDisambiguatedEmoji() {
    return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji
  }
  getCustomEmoji() {
    return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis
  }
  getGroupedCustomEmoji() {
    return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis
  }
  getByName(e) {
    if ((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
    if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
      let t = this.unicodeAliases[e];
      if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
    }
  }
  getEmoticonByName(e) {
    if (null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
  }
  getById(e) {
    if (null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
  }
  getCustomEmoticonRegex() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))), this.emoticonRegex
  }
  getFrequentlyUsedEmojisWithoutFetchingLatest() {
    return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = ee.frequently.map(e => null != e.id ? this.getById(e.id) : null != e.name ? M.default.getByName(e.name) : void 0).filter(O.isNotNullish)), this.frequentlyUsed
  }
  rebuildFavoriteEmojisWithoutFetchingLatest() {
    if (this.ensureDisambiguated(), null == this.favorites || null == this.favoriteNamesAndIds) {
      var e, t;
      this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = S.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(e => {
        var t;
        null === (t = this.favoriteNamesAndIds) || void 0 === t || t.add(e);
        let n = this.getById(e);
        return null == n && (n = M.default.getByName(e)), n
      }).filter(O.isNotNullish)
    }
    return [this.favorites, this.favoriteNamesAndIds]
  }
  get favoriteEmojisWithoutFetchingLatest() {
    return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
  }
  getEmojiInPriorityOrderWithoutFetchingLatest() {
    let e = new Set;
    return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(t => !e.has(t) && (e.add(t), !0))
  }
  getTopEmojiWithoutFetchingLatest(e) {
    if (this.ensureDisambiguated(), null == this.topEmojis) {
      var t;
      let n = X.get(e),
        i = w.default.getTopEmojiIdsByGuildId(e);
      if (null == n && null == i) return Y;
      let s = null !== (t = null == n ? void 0 : n.emojiIds) && void 0 !== t ? t : i,
        r = s.map(e => {
          var t;
          return null !== (t = this.getById(e)) && void 0 !== t ? t : M.default.getByName(M.default.convertSurrogateToName(e, !1))
        }),
        a = [];
      r.forEach(e => {
        null != e && a.push(e)
      });
      let o = this.getNewlyAddedEmojiForGuild(e).map(e => e.id);
      this.topEmojis = a.filter(e => !o.includes(e.id))
    }
    return this.topEmojis
  }
  getNewlyAddedEmojiForGuild(e) {
    if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return Y;
    let t = this.newlyAddedEmoji[e];
    return null == t ? Y : t
  }
  getEscapedCustomEmoticonNames() {
    return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
  }
  nameMatchesChain(e) {
    return s(this.getDisambiguatedEmoji()).filter(t => {
      let {
        id: n,
        names: i,
        name: r
      } = t, a = null != i && s.some(i, e), o = null != r && e(r), l = null != r && s.some(h.default.getTermsForEmoji(r), e), u = null != n && s.some(U.default.getCaptionsForEmojiById({
        emojiId: n
      }), e);
      return a || o || l || u
    })
  }
  _buildDisambiguatedCustomEmoji() {
    let e = {},
      t = [];
    this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
    let n = t => {
        var n, i;
        let s = t.name,
          r = null !== (n = e[s]) && void 0 !== n ? n : 0;
        if (e[s] = r + 1, r > 0) {
          let e = "".concat(s, "~").concat(r);
          t = {
            ...t,
            name: e,
            originalName: s,
            allNamesString: ":".concat(e, ":")
          }
        }
        if (this.emojisByName[t.name] = t, "names" in t && (null === (i = t.names) || void 0 === i || i.slice(1).forEach(e => this.unicodeAliases[e] = t.name)), null != t.id) {
          let e, n;
          if (this.emojisById[t.id] = t, this.customEmojis[t.name] = t, t.type === L.EmojiTypes.GUILD) e = t.guildId, n = !0;
          null != e && (null != this.groupedCustomEmojis[e] ? this.groupedCustomEmojis[e].push(t) : this.groupedCustomEmojis[e] = [t], n && b.default.compare(t.id, H) >= 0 && (null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e].push(t) : this.newlyAddedEmoji[e] = [t]))
        }
        null == this.disambiguatedEmoji && (this.disambiguatedEmoji = []), this.disambiguatedEmoji.push(t)
      },
      i = e => {
        !Object.prototype.hasOwnProperty.call(this.emoticonsByName, e.name) && (t.push(P.default.escape(e.name)), this.emoticonsByName[e.name] = e)
      };
    M.default.forEach(n);
    let r = e => {
      let t = K[null == e ? "null" : e];
      null != t && (s.each(t.usableEmojis, n), s.each(t.emoticons, i))
    };
    for (let e in r(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[e] ? this.newlyAddedEmoji[e] = this.newlyAddedEmoji[e].sort((e, t) => b.default.compare(t.id, e.id)).slice(0, 3) : this.newlyAddedEmoji[e] = [];
    A.default.getFlattenedGuildIds().forEach(e => {
      e !== this.guildId && r(e)
    }), this.escapedEmoticonNames = t.join("|")
  }
  constructor(e) {
    this.emoticonRegex = null, this.frequentlyUsed = null, this.favorites = null, this.favoriteNamesAndIds = null, this.topEmojis = null, this.escapedEmoticonNames = null, this.disambiguatedEmoji = null, this.newlyAddedEmoji = null, this.isFavoriteEmojiWithoutFetchingLatest = e => {
      var t;
      if (null == e) return !1;
      let n = this.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
      return null != e.id ? n.has(e.id) : n.has(null !== (t = e.name) && void 0 !== t ? t : "")
    }, this.guildId = e
  }
}
$._lastInstance = null;
let ee = new d.default({
  computeBonus: () => 100,
  computeWeight: e => {
    let t = 0;
    return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
  },
  lookupKey: e => {
    var t;
    return null !== (t = M.default.getByName(e)) && void 0 !== t ? t : Q(e)
  },
  afterCompute: () => {
    $.resetFrequentlyUsed(), W = F.slice(0), !s.some(K, e => e.usableEmojis.length > 0) && W.splice(F.indexOf(V.EmojiCategories.CUSTOM), 1)
  },
  numFrequentlyItems: 42
});

function et() {
  K = {}, z = {}, $.reset(), X.clear(), j = 2
}

function en(e) {
  let t = K[e];
  null != t && delete K[e]
}

function ei() {
  z = null, $.reset(), 0 !== j && ee.compute()
}

function es(e, t) {
  if (en(e), $.clear(e), null == t) return;
  let n = y.default.getCurrentUser();
  if (null == n) return;
  let i = (0, p.canUseRoleSubscriptionIAP)(e);
  K[e] = new B(e, n.id, t, i)
}

function er() {
  var e, t, n, i;
  let r = S.default.settings,
    a = null === (t = r.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
  null != a && M.default.setDefaultDiversitySurrogate(a), $.reset();
  let o = S.default.frecencyWithoutFetchingLatest,
    l = null !== (i = null === (n = o.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== i ? i : {};
  ee.overwriteHistory(s.mapValues(l, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), x.pendingUsages), s.isEmpty(l) && s.isEmpty(x.pendingUsages) && S.default.hasLoaded(G.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (ee.track("thumbsup"), ee.track("thumbsup"), ee.track("eyes"), ee.track("eyes"), ee.track("laughing"), ee.track("laughing"), ee.track("watermelon"), ee.track("fork_and_knife"), ee.track("yum"), ee.track("weary"), ee.track("tired_face"), ee.track("poop"), ee.track("100"))
}

function ea(e) {
  for (let i of e) {
    var t, n;
    let e = null !== (n = null !== (t = i.id) && void 0 !== t ? t : i.uniqueName) && void 0 !== n ? n : i.name;
    null != e && (ee.track(e), x.pendingUsages.push({
      key: e,
      timestamp: Date.now()
    }))
  }
  let i = e.length > 0;
  return i && 0 !== j && ee.compute(), i
}

function eo(e) {
  let {
    guildId: t,
    role: n
  } = e;
  if (!(0, g.isSubscriptionRole)(n)) return !1;
  {
    let e = K[t];
    es(t, null == e ? void 0 : e.emojis), ei()
  }
}
class el extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(c.default, I.default, T.default, C.default, v.default, E.default, w.default, y.default), null != e && (x = e), this.syncWith([S.default], er)
  }
  getState() {
    return x
  }
  get loadState() {
    return j
  }
  hasPendingUsage() {
    return x.pendingUsages.length > 0
  }
  get categories() {
    return W
  }
  get diversitySurrogate() {
    var e;
    return null !== (e = M.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
  }
  get emojiFrecencyWithoutFetchingLatest() {
    return ee
  }
  getGuildEmoji(e) {
    var t;
    J();
    let n = K[e];
    return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
  }
  getUsableGuildEmoji(e) {
    var t;
    J();
    let n = K[e];
    return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
  }
  getGuilds() {
    return K
  }
  getDisambiguatedEmojiContext(e) {
    return J(), $.get(e)
  }
  getSearchResultsOrder(e, t, n) {
    let i = t.toLowerCase(),
      r = P.default.escape(i);
    if (e.length > 0) {
      let t = RegExp("^".concat(r), "i"),
        n = new RegExp("(^|_|[A-Z])".concat(r, "s?([A-Z]|_|$)")),
        a = n.test.bind(n),
        o = t.test.bind(t),
        l = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
          if (null == e || null == t) return 0;
          let n = e.toLowerCase(),
            s = 1 + (n === i ? 4 : 0) + (a(n) || a(e) ? 2 : 0) + (o(e) ? 1 : 0),
            r = ee.getScore(t);
          return null != r && (s *= r / 100), s
        };
      e = s.orderBy(e, [e => null != e.names ? l(e.names[0]) : l(e.name, e.id), e => null != e.names ? e.names[0] : e.name], ["desc", "asc"])
    }
    return n > 0 && (e = e.slice(0, n)), e
  }
  searchWithoutFetchingLatest(e) {
    let t, {
      channel: n,
      query: i,
      count: s = 0,
      intention: r,
      includeExternalGuilds: a = !0,
      matchComparator: o
    } = e;
    J();
    let l = i.toLowerCase().replaceAll(/[ _]/g, ""),
      u = P.default.escape(l);
    if (null == o) {
      let e = RegExp("".concat(u), "i");
      t = t => e.test(t.replaceAll("_", ""))
    } else t = o;
    let d = null != n ? n.getGuildId() : null,
      c = $.get(d).nameMatchesChain(t).reduce((e, t) => {
        let i = D.default.getEmojiUnavailableReason({
          emoji: t,
          channel: n,
          intention: r,
          forceIncludeExternalGuilds: a
        });
        return i === k.EmojiDisabledReasons.PREMIUM_LOCKED ? e.locked.push(t) : null == i && e.unlocked.push(t), e
      }, {
        unlocked: [],
        locked: []
      });
    return {
      unlocked: this.getSearchResultsOrder(c.unlocked, i, s),
      locked: this.getSearchResultsOrder(c.locked, i, 0)
    }
  }
  getUsableCustomEmojiById(e) {
    return J(), Q(e)
  }
  getCustomEmojiById(e) {
    return J(),
      function(e) {
        var t;
        let n = Z()[e];
        return null != n ? null === (t = K[n]) || void 0 === t ? void 0 : t.getEmoji(e) : null
      }(e)
  }
  getTopEmoji(e) {
    return null == e ? Y : (J(), $.get(e).getTopEmojiWithoutFetchingLatest(e))
  }
  getNewlyAddedEmoji(e) {
    return null == e ? Y : (J(), $.get(e).getNewlyAddedEmojiForGuild(e))
  }
  getTopEmojisMetadata(e) {
    return X.get(e)
  }
  getEmojiAutosuggestion(e) {
    if (null != q && q.length > 0) {
      let {
        locked: t,
        unlocked: n
      } = this.searchWithoutFetchingLatest({
        channel: e,
        count: 10,
        query: q,
        intention: k.EmojiIntention.CHAT
      });
      return [...n.slice(0, 5), ...t.slice(0, 5)].slice(0, 5)
    }
    return []
  }
  hasUsableEmojiInAnyGuild() {
    J();
    let e = Object.keys(K);
    return e.some(e => K[e].usableEmojis.length > 0)
  }
  hasFavoriteEmojis(e) {
    let t = $.get(e);
    return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
  }
}
el.displayName = "EmojiStore", el.persistKey = "EmojiStoreV2";
var eu = new el(u.default, {
  BACKGROUND_SYNC: function() {
    et()
  },
  CONNECTION_OPEN: function(e) {
    for (let t of (et(), e.guilds)) es(t.id, t.emojis);
    j = e.guilds.every(e => null != e.emojis) ? 1 : 0, ei()
  },
  CACHED_EMOJIS_LOADED: function(e) {
    let {
      emojis: t
    } = e;
    for (let [e, n] of t) !Object.hasOwn(K, e) && I.default.isMember(e) && es(e, n);
    ei()
  },
  GUILD_MEMBER_UPDATE: function(e) {
    var t;
    let {
      guildId: n,
      user: i
    } = e;
    if (i.id !== (null === (t = y.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
    let s = K[n];
    es(n, null == s ? void 0 : s.usableEmojis), ei()
  },
  GUILD_CREATE: function(e) {
    0 !== j && null == e.guild.emojis && null != e.guild.emojiUpdates && (j = 0), es(e.guild.id, e.guild.emojis), ei()
  },
  GUILD_UPDATE: function(e) {
    es(e.guild.id, e.guild.emojis), ei()
  },
  GUILD_EMOJIS_UPDATE: function(e) {
    let {
      guildId: t,
      emojis: n
    } = e;
    es(t, n), ei()
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    en(t.id), X.delete(t.id), ei()
  },
  MESSAGE_REACTION_ADD: function(e) {
    if (!e.optimistic) return !1;
    let t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : M.default.getByName(M.default.convertSurrogateToName(e.emoji.name, !1));
    if (null == t) return !1;
    ea([t])
  },
  EMOJI_TRACK_USAGE: function(e) {
    let {
      emojiUsed: t
    } = e;
    ea(t)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (h.default.setEmojiLocale(v.default.locale), t !== G.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    x.pendingUsages = []
  },
  GUILD_ROLE_CREATE: eo,
  GUILD_ROLE_UPDATE: eo,
  TOP_EMOJIS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      topEmojisMetadata: n
    } = e;
    X.set(t, {
      emojiIds: n.map(e => e.emojiId),
      topEmojisTTL: a(a()).add(1, "days").valueOf()
    })
  },
  EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
    let {
      text: t
    } = e;
    q = t
  }
})