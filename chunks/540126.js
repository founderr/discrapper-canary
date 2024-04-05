"use strict";
n.r(t), n.d(t, {
  ChannelListFavoritesCategory: function() {
    return ee
  },
  MAX_NEW_CHANNELS_TO_SHOW: function() {
    return k
  },
  SECTION_INDEX_COMMUNITY: function() {
    return W
  },
  SECTION_INDEX_FAVORITES: function() {
    return j
  },
  SECTION_INDEX_FIRST_NAMED_CATEGORY: function() {
    return J
  },
  SECTION_INDEX_UNCATEGORIZED_CHANNELS: function() {
    return z
  },
  computeSubtitle: function() {
    return eo
  },
  computeThreadIds: function() {
    return eh
  },
  default: function() {
    return q
  }
}), n("47120"), n("411104"), n("653041"), n("390547"), n("733860");
var i, s, l = n("512722"),
  a = n.n(l),
  r = n("392711"),
  d = n.n(r),
  o = n("317381"),
  h = n("812206"),
  u = n("12498"),
  c = n("430198"),
  C = n("931261"),
  g = n("924301"),
  f = n("160404"),
  p = n("278147"),
  I = n("18036"),
  v = n("398758"),
  E = n("22082"),
  S = n("601070"),
  y = n("569471"),
  m = n("131704"),
  _ = n("680089"),
  N = n("592125"),
  w = n("58468"),
  L = n("430824"),
  T = n("496675"),
  O = n("306680"),
  R = n("944486"),
  A = n("9156"),
  b = n("979651"),
  D = n("938475"),
  G = n("823379"),
  U = n("709054"),
  V = n("968358"),
  M = n("203818"),
  P = n("443063"),
  F = n("981631"),
  H = n("176505"),
  B = n("231338");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let Y = "placeholder-channel-id",
  k = 2;
(s = i || (i = {}))[s.CannotShow = 1] = "CannotShow", s[s.DoNotShow = 2] = "DoNotShow", s[s.WouldShowIfUncollapsed = 3] = "WouldShowIfUncollapsed", s[s.Show = 4] = "Show";
let W = 0,
  j = 1,
  z = 3,
  J = 4,
  K = new Set([String(P.ChannelListCommunityRow.GUILD_DIRECTORY)]);
class q {
  getGuild(e, t) {
    var n;
    return (!(e in this.guilds) || !d().isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getCommunitySection().getRows().filter(e => !K.has(e)), t)) && (this.guilds[e] = new X(e, t)), this.guilds[e]
  }
  getGuildWithoutCommunityRows(e) {
    return !(e in this.guilds) && (this.guilds[e] = new X(e, [])), this.guilds[e]
  }
  clear() {
    this.guilds = {}
  }
  clearGuildId(e) {
    return null != e && e in this.guilds && (delete this.guilds[e], !0)
  }
  updateRecentsCategory(e) {
    var t, n;
    if (null == e || !(e in this.guilds)) return !1;
    return null !== (n = null === (t = this.guilds[e]) || void 0 === t ? void 0 : t.updateRecentsCategory()) && void 0 !== n && n
  }
  nonPositionalChannelIdUpdate(e) {
    let t = N.default.getBasicChannel(e);
    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof m.ChannelRecordBase || null != (t = N.default.getChannel(e))) && this.nonPositionalChannelUpdate(t)
  }
  nonPositionalChannelUpdate(e) {
    if (null == e.guild_id) return !1;
    let t = this.guilds[e.guild_id];
    if (null == t) return !1;
    let n = !1;
    return e.isThread() && (n = this.nonPositionalChannelIdUpdate(e.parent_id)), t.nonPositionalChannelUpdate(e) || n
  }
  updateSubtitles(e, t) {
    (null == e ? Object.values(this.guilds) : e in this.guilds ? [this.guilds[e]] : []).forEach(e => e.updateSubtitles(t))
  }
  constructor() {
    x(this, "guilds", {})
  }
}
class X {
  get initializationData() {
    return {
      selectedChannel: N.default.getChannel(R.default.getChannelId()),
      selectedVoiceChannelId: R.default.getVoiceChannelId(),
      activeJoinedRelevantThreads: S.default.getActiveJoinedRelevantThreadsForGuild(this.id),
      activeJoinedUnreadThreads: S.default.getActiveJoinedUnreadThreadsForGuild(this.id)
    }
  }
  invalidate() {
    this.sections = null, this.rows = null, this.sortedNamedCategories = null, this.firstVoiceChannel = void 0, this.version++
  }
  getSortedNamedCategories() {
    return null == this.sortedNamedCategories && this.getRows(), this.sortedNamedCategories
  }
  getSortedCategories() {
    return [this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.getSortedNamedCategories(), this.voiceChannelsCategory]
  }
  getSections() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return (null == this.sections && (this.sections = this.getRows().map(e => e.length)), e) ? [...this.sections] : this.sections
  }
  getRows() {
    if (null == this.rows) {
      this.sortedNamedCategories = d().sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.communitySection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
      let e = 0;
      for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
        for (let n of (t.position = ++e, t.getShownChannelIds())) t.channels[n].position = ++e
    }
    return this.rows
  }
  getCategoryFromSection(e) {
    switch (e) {
      case W:
        throw Error("Invalid section. Use getCommunitySection instead");
      case j:
        return this.favoritesCategory;
      case z:
        return this.noParentCategory;
      case this.recentsSectionNumber:
        return this.recentsCategory;
      case this.voiceChannelsSectionNumber:
        return this.voiceChannelsCategory;
      default:
        return this.getSortedNamedCategories()[e - J]
    }
  }
  getNamedCategoryFromSection(e) {
    return e -= J, a()(e >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
  }
  getCommunitySection() {
    return this.communitySection
  }
  getChannelFromSectionRow(e, t) {
    let n = this.getCategoryFromSection(e);
    if (null == n) return null;
    let i = n.channels[n.getShownChannelIds()[t]];
    return null == i ? null : {
      category: n,
      channel: i
    }
  }
  isPlaceholderRow(e, t) {
    return a()(e > W, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === Y
  }
  getFirstVoiceChannel(e) {
    if (void 0 === this.firstVoiceChannel) {
      if (this.firstVoiceChannel = this.favoritesCategory.getFirstVoiceChannel(e), null != this.firstVoiceChannel) return this.firstVoiceChannel;
      if (this.firstVoiceChannel = this.noParentCategory.getFirstVoiceChannel(e), null != this.firstVoiceChannel) return this.firstVoiceChannel;
      for (let t of this.getSortedNamedCategories())
        if (null != t.getFirstVoiceChannel(e)) {
          this.firstVoiceChannel = t.getFirstVoiceChannel(e);
          break
        }
    }
    return this.firstVoiceChannel
  }
  getSectionRowsFromChannel(e) {
    if (function(e) {
        return null != e && eg.has(e)
      }(e)) return [{
      row: this.getCommunitySection().getRows().indexOf(e),
      section: W
    }];
    let t = [],
      n = N.default.getChannel(e);
    if (null == n || null == e) return t;
    let i = n.isThread();
    if (i && (n = N.default.getChannel(n.parent_id)), null == n) return t;
    let s = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
    s >= 0 && t.push({
      section: j,
      row: s
    });
    let l = this.recentsCategory.getShownChannelIds().indexOf(n.id);
    if (l >= 0 && t.push({
        section: this.recentsSectionNumber,
        row: l
      }), n.type === F.ChannelTypes.GUILD_CATEGORY) return [{
      section: d().findIndex(this.getSortedNamedCategories(), e => e.id === (null == n ? void 0 : n.id)) + J
    }];
    let a = this.getCategory(n),
      r = a instanceof Q ? z : this.getSortedNamedCategories().indexOf(a) + J,
      o = a.getShownChannelIds().indexOf(n.id);
    if (r >= 0 && o >= 0) {
      let s = i ? a.channels[n.id].threadIds.indexOf(e) : 0;
      t.push({
        section: r,
        row: o,
        threadOffset: s
      })
    }
    let h = this.voiceChannelsCategory.getShownChannelIds().indexOf(n.id);
    return h >= 0 && t.push({
      section: this.voiceChannelsSectionNumber,
      row: h
    }), t
  }
  getCategory(e) {
    return null != e.parent_id && e.parent_id in this.categories ? this.categories[e.parent_id] : this.noParentCategory
  }
  updateRecentsCategory() {
    let e = this.recentsCategory.updateAllChannels(this.initializationData);
    return e && this.invalidate(), e
  }
  nonPositionalChannelUpdate(e) {
    let t = this.initializationData,
      n = this.getCategory(e).updateChannel(e, t);
    return this.favoritesCategory.updateChannel(e, t) && (n = !0), this.recentsCategory.updateChannel(e, t) && (n = !0), this.voiceChannelsCategory.updateChannel(e, t) && (n = !0), n && this.invalidate(), n
  }
  getSlicedChannels(e, t) {
    a()(e.length > 0, "must have at least one channel in the slice");
    let n = e[0],
      i = e[e.length - 1],
      s = !0,
      l = !1,
      r = [],
      d = [];
    for (let e of this.getSortedCategories()) {
      let a = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
      for (let t of e.getShownChannelIds()) {
        let o = e.channels[t];
        s && (o.id === n.id ? s = !1 : !a && r.push(o)), l && !a && d.push(o), !s && !l && o.id === i.id && (l = !0)
      }
    }
    return [r, e, d]
  }
  getChannels(e) {
    let t = [];
    if (null == this.allChannelsById)
      for (let e of (this.allChannelsById = {}, this.getSortedCategories()))
        for (let t in e.channels) this.allChannelsById[t] = e.channels[t];
    for (let n of e) null != this.allChannelsById[n] && t.push(this.allChannelsById[n]);
    return t
  }
  updateSubtitles(e) {
    let t = [];
    if (null != e) {
      let n = N.default.getChannel(e);
      if (null != n) {
        if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
        else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
        else {
          let i = this.getCategory(n);
          null != i && null != i.channels[e] && (t = [i.channels[e]])
        }
      }
    } else t = d()(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
    let n = !1;
    return t.forEach(e => {
      e.updateSubtitle() && (n = !0)
    }), n && this.version++, n
  }
  forEachShownChannel(e, t) {
    for (let n of this.getSortedCategories())
      if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
        for (let t of n.getShownChannelIds()) {
          let i = n.channels[t];
          for (let t of (e(i.record), i.threadIds)) {
            let n = N.default.getChannel(t);
            null != n && e(n)
          }
        }
  }
  forEachChannel(e, t) {
    for (let n of this.getSortedCategories())
      if (null == t || !t.ignoreRecents || n !== this.recentsCategory)
        for (let t of n.getChannelRecords()) e(t)
  }
  constructor(e, t) {
    var n, i;
    x(this, "id", void 0), x(this, "hideMutedChannels", void 0), x(this, "favoritesSectionNumber", void 0), x(this, "recentsSectionNumber", void 0), x(this, "voiceChannelsSectionNumber", void 0), x(this, "mutedChannelIds", void 0), x(this, "optedInChannels", void 0), x(this, "optInEnabled", void 0), x(this, "hideResourceChannels", void 0), x(this, "favoriteChannelIds", void 0), x(this, "suggestedFavoriteChannelId", void 0), x(this, "collapsedCategoryIds", void 0), x(this, "categories", void 0), x(this, "noParentCategory", void 0), x(this, "favoritesCategory", void 0), x(this, "recentsCategory", void 0), x(this, "voiceChannelsCategory", void 0), x(this, "communitySection", void 0), x(this, "sortedNamedCategories", void 0), x(this, "sections", void 0), x(this, "rows", void 0), x(this, "firstVoiceChannel", void 0), x(this, "allChannelsById", void 0), x(this, "version", void 0), this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = A.default.isGuildCollapsed(this.id), this.mutedChannelIds = A.default.getMutedChannels(this.id), this.optedInChannels = null !== (n = A.default.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== n ? n : A.default.getOptedInChannels(this.id), this.optInEnabled = (0, v.isOptInEnabledForGuild)(this.id), this.hideResourceChannels = (0, C.canSeeOnboardingHome)(this.id), this.favoriteChannelIds = new Set(null !== (i = A.default.getGuildFavorites(this.id)) && void 0 !== i ? i : []), this.suggestedFavoriteChannelId = I.default.getSuggestedChannelId(this.id), this.collapsedCategoryIds = _.default.getCollapsedCategories();
    let s = N.default.getMutableGuildChannelsForGuild(this.id),
      l = L.default.getGuild(this.id),
      r = {},
      o = [],
      h = {};
    for (let e in s) {
      let t = s[e];
      t.type === F.ChannelTypes.GUILD_CATEGORY && (r[t.id] = t, h[t.id] = [])
    }
    let u = [],
      c = [],
      g = [],
      f = this.initializationData;
    for (let e in s) {
      let t = s[e];
      if (t.type !== F.ChannelTypes.GUILD_CATEGORY) {
        if (t.type === F.ChannelTypes.GUILD_DIRECTORY) {
          null != l && !l.hasFeature(F.GuildFeatures.HUB) && g.push(t);
          continue
        }
        eC(this, t, f) ? u.push(t) : (t.type === F.ChannelTypes.GUILD_VOICE || t.type === F.ChannelTypes.GUILD_STAGE_VOICE) && (null != t.parent_id && null != r[t.parent_id] && c.push(r[t.parent_id]), c.push(t)), null != t.parent_id && t.parent_id in h ? h[t.parent_id].push(t) : o.push(t)
      }
    }
    for (let e in this.categories = {}, h) this.categories[e] = new $(this, r[e], h[e], f);
    this.recentsSectionNumber = 2, this.favoritesSectionNumber = j, this.noParentCategory = new Q(this, o, f), this.favoritesCategory = new ee(this, f), this.recentsCategory = new et(this, u, f), this.voiceChannelsCategory = new en(this, c, r, f), this.communitySection = new ei(t, g.length > 0), a()(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = J + d().size(this.categories)
  }
}
class Z {
  updateChannel(e, t) {
    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0)
  }
  invalidate() {
    this.shownChannelIds = null
  }
  getRows() {
    let e = this.getShownChannelIds();
    return 0 === e.length && this.shouldShowEmptyCategory() ? [Y] : e
  }
  shouldShowEmptyCategory() {
    return d().some(this.channels, e => e.renderLevel >= 3)
  }
  getShownChannelIds() {
    return null == this.shownChannelIds && (this.shownChannelIds = d()(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
      let {
        record: t
      } = e;
      return t.isGuildVocal() ? t.position + 1e4 : t.position
    }).map(e => e.id).value()), this.shownChannelIds
  }
  getShownChannelAndThreadIds() {
    let e = d()(this.channels).values().flatMap(e => e.threadIds).value();
    return this.getShownChannelIds().concat(e)
  }
  isEmpty() {
    return 0 === this.getShownChannelIds().length
  }
  getChannelRecords() {
    return d()(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value()
  }
  getFirstVoiceChannel(e) {
    for (let t of this.getShownChannelIds()) {
      if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
      if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t]
    }
    return null
  }
  constructor(e) {
    x(this, "guild", void 0), x(this, "isMuted", void 0), x(this, "isCollapsed", void 0), x(this, "position", void 0), x(this, "channels", void 0), x(this, "shownChannelIds", void 0), this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null
  }
}
class Q extends Z {
  constructor(e, t, n) {
    super(e), this.channels = d()(t).map(e => new el(this, e, n)).keyBy(e => e.id).value()
  }
}
class $ extends Z {
  shouldShowEmptyCategory() {
    return !!(super.shouldShowEmptyCategory() || T.default.can(B.Permissions.MANAGE_CHANNELS, this.record) && T.default.can(B.Permissions.VIEW_CHANNEL, this.record) && d().isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))) || !1
  }
  constructor(e, t, n, i) {
    for (let s of (super(e), x(this, "id", void 0), x(this, "record", void 0), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[s.id] = new el(this, s, i)
  }
}
class ee extends Z {
  updateChannel(e, t) {
    let n = e.id in this.channels && A.default.isFavorite(e.guild_id, e.id),
      i = I.default.getSuggestedChannelId(e.guild_id);
    return (e.id === i && !n && (t = {
      ...t,
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    }), e.id in this.channels && this.channels[e.id].updateChannel(e, t)) ? (this.invalidate(), !0) : e.id in this.channels && e.id !== i && !n && (delete this.channels[e.id], this.invalidate(), !0)
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t) {
    var n;
    if (super(e), !e.optInEnabled && ! function() {
        return !1
      }()) return;
    this.channels = d()(null !== (n = A.default.getGuildFavorites(e.id)) && void 0 !== n ? n : []).map(e => N.default.getChannel(e)).filter(G.isNotNullish).map(e => new ea(this, e, t)).keyBy(e => e.id).value();
    let i = I.default.getSuggestedChannelId(e.id),
      s = N.default.getChannel(i);
    null != s && null != i && (this.channels[i] = new ea(this, s, {
      ...t,
      activeJoinedRelevantThreads: {},
      activeJoinedUnreadThreads: {}
    }))
  }
}
class et extends Z {
  updateAllChannels(e) {
    let t = !1;
    return U.default.keys(this.channels).forEach(n => {
      this.updateChannel(this.channels[n].record, e) && (t = !0)
    }), t
  }
  updateChannel(e, t) {
    let n = super.updateChannel(e, t);
    if (this.guild.optInEnabled) {
      let n = this.channels[e.id],
        i = eC(this.guild, e, t);
      if (i && null == n) return this.channels[e.id] = new er(this, e, t), this.invalidate(), !0;
      if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0
    }
    return n
  }
  getFirstVoiceChannel(e) {
    return null
  }
  getShownChannelIds() {
    if (null == this.shownChannelIds) {
      let e = d()(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel).filter(e => !e.record.isGuildVocal()),
        t = e.sortBy(e => {
          let {
            record: t
          } = e;
          return t.position
        }).take(5).value(),
        n = e.filter(e => 4 === e.renderLevel).value(),
        i = new Set([...n, ...t]);
      this.shownChannelIds = d()([...i]).sortBy(e => {
        let {
          record: t
        } = e;
        return t.position
      }).map(e => e.id).value()
    }
    return this.shownChannelIds
  }
  constructor(e, t, n) {
    if (super(e), !e.optInEnabled || f.default.isFullServerPreview(e.id)) return;
    this.isCollapsed = !1, this.isMuted = !1, this.channels = d()(t).map(e => new er(this, e, n)).keyBy(e => e.id).value()
  }
}
class en extends Z {
  invalidate() {
    super.invalidate(), this.hiddenChannelIds = null
  }
  getHiddenChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.hiddenChannelIds) {
      let e = d()(this.channels).filter(e => 3 === e.renderLevel).value();
      if (e.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
      this.hiddenChannelIds = e.map(e => e.id)
    }
    return this.hiddenChannelIds
  }
  getRows() {
    if (!this.guild.optInEnabled) return [];
    let e = this.getShownChannelIds();
    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [Y] : e
  }
  getShownChannelIds() {
    if (!this.guild.optInEnabled) return [];
    if (null == this.shownChannelIds) {
      let t = d()(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
        if (e.record.type === F.ChannelTypes.GUILD_CATEGORY) return e.record.position;
        if (null != e.record.parent_id) {
          var n, i;
          return null !== (i = null === (n = t[e.record.parent_id]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : -1
        }
        return -1
      })(e, this.categoriesById), e => e.record.type === F.ChannelTypes.GUILD_CATEGORY ? -1 : e.record.position], ["asc", "asc"]).value();
      this.shownChannelIds = [];
      for (let n = 0; n < t.length; n++) {
        var e;
        let i = t[n];
        if (!(n < t.length - 1) || i.record.type !== F.ChannelTypes.GUILD_CATEGORY || (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.record.type) !== F.ChannelTypes.GUILD_CATEGORY)(n !== t.length - 1 || i.record.type !== F.ChannelTypes.GUILD_CATEGORY) && this.shownChannelIds.push(i.id)
      }
    }
    return this.shownChannelIds
  }
  getFirstVoiceChannel(e) {
    return null
  }
  constructor(e, t, n, i) {
    if (super(e), x(this, "categoriesById", void 0), x(this, "hiddenChannelIds", void 0), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
    this.isCollapsed = M.default.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = d()(t).map(e => new ed(this, e, i)).keyBy(e => e.id).value()
  }
}
class ei {
  isEmpty() {
    return 0 === this.communityRows.length
  }
  getRows() {
    return this.communityRows
  }
  getRow(e) {
    return this.communityRows[e]
  }
  constructor(e, t) {
    x(this, "communityRows", void 0), this.communityRows = e.map(String), t && this.communityRows.push(String(P.ChannelListCommunityRow.GUILD_DIRECTORY))
  }
}
class es {
  get isMuted() {
    return this.category.guild.mutedChannelIds.has(this.id)
  }
  get isCollapsed() {
    return w.default.isCollapsed(this.id)
  }
  get isFirstVoiceChannel() {
    return this.category.getFirstVoiceChannel() === this
  }
  get lastMessageTimestamp() {
    return Math.max(O.default.lastMessageTimestamp(this.id), ...this.threadIds.map(O.default.lastMessageTimestamp))
  }
  updateChannel(e, t) {
    let n = !1;
    null != e && e !== this.record && (this.record = e, n = !0);
    let i = this.computeState(t);
    return (i.renderLevel !== this.renderLevel || !d().isEqual(i.threadIds, this.threadIds)) && (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = d().size(i.threadIds), n = !0), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n
  }
  updateSubtitle() {
    let e = this.computeSubtitle();
    return !d().isEqual(this.subtitle, e) && (this.subtitle = e, !0)
  }
  computeSubtitle() {
    return eo(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
  }
  constructor(e, t, n) {
    x(this, "category", void 0), x(this, "record", void 0), x(this, "id", void 0), x(this, "position", void 0), x(this, "threadIds", void 0), x(this, "threadCount", void 0), x(this, "subtitle", void 0), x(this, "renderLevel", void 0), this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
    let {
      renderLevel: i,
      threadIds: s
    } = this.computeState(n);
    this.renderLevel = i, this.threadCount = d().size(s), this.threadIds = s, 4 === i && (this.subtitle = this.computeSubtitle())
  }
}
class el extends es {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s,
      activeJoinedUnreadThreads: l
    } = e, a = [];
    if (!T.default.can(B.Permissions.VIEW_CHANNEL, this.record)) {
      if (this.id === i) return {
        renderLevel: 4,
        threadIds: a
      };
      if (!c.default.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
        renderLevel: 1,
        threadIds: a
      }
    }
    let r = this.record.parent_id,
      o = this.category.guild;
    if (ec(o, this.record)) return {
      renderLevel: 1,
      threadIds: a
    };
    let h = (null == n ? void 0 : n.id) === this.id || i === this.id,
      u = null != n && n.isThread() && n.parent_id === this.id,
      C = null !== (t = h || u || !this.category.isCollapsed && !this.isMuted ? s[this.id] : l[this.id]) && void 0 !== t ? t : {};
    return (a = eh(this.record, C, n, i, o.hideMutedChannels), o.optInEnabled && o.hideResourceChannels && this.record.hasFlag(H.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) ? {
      renderLevel: h ? 4 : 1,
      threadIds: a
    } : !o.optInEnabled || o.optedInChannels.has(this.id) || null != r && o.optedInChannels.has(r) ? h || u || !d().isEmpty(a) || O.default.getMentionCount(this.id) > 0 ? {
      renderLevel: 4,
      threadIds: a
    } : o.hideMutedChannels && o.mutedChannelIds.has(this.id) ? {
      renderLevel: 2,
      threadIds: a
    } : this.category.isCollapsed && (o.mutedChannelIds.has(this.id) || null != r && o.mutedChannelIds.has(r) || this.record.isGuildVocal() || this.record.type === F.ChannelTypes.GUILD_STORE || (0, m.isGuildReadableType)(this.record.type) && !O.default.hasUnread(this.record.id)) ? {
      renderLevel: 3,
      threadIds: a
    } : {
      renderLevel: 4,
      threadIds: a
    } : {
      renderLevel: 2,
      threadIds: a
    }
  }
}
class ea extends es {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return T.default.can(B.Permissions.VIEW_CHANNEL, this.record) ? {
      renderLevel: 4,
      threadIds: eh(this.record, null !== (t = s[this.id]) && void 0 !== t ? t : {}, n, i, !1)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class er extends es {
  computeState(e) {
    var t;
    let {
      selectedChannel: n,
      selectedVoiceChannelId: i,
      activeJoinedRelevantThreads: s
    } = e;
    return T.default.can(B.Permissions.VIEW_CHANNEL, this.record) ? {
      renderLevel: function(e, t) {
        let {
          selectedChannel: n,
          activeJoinedRelevantThreads: i
        } = t;
        if (O.default.getMentionCount(e.id) > 0) return !0;
        for (let t in i[e.id])
          if (O.default.getMentionCount(t) > 0) return !0;
        if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return true;
        let s = E.default.getNewChannelIds(e.category.guild.id);
        if (s.size > k);
        else if (s.has(e.id)) return !0;
        return !1
      }(this, e) ? 4 : 3,
      threadIds: eh(this.record, null !== (t = s[this.id]) && void 0 !== t ? t : {}, n, i, !1)
    } : {
      renderLevel: 1,
      threadIds: []
    }
  }
}
class ed extends el {
  getRenderLevel(e) {
    let t = this.category.guild;
    return !T.default.can(B.Permissions.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || ec(t, this.record) ? 1 : this.category.isCollapsed ? d().some(b.default.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
  }
  computeState(e) {
    let t = super.computeState(e),
      n = this.getRenderLevel(t.renderLevel);
    return 4 === n && (this.subtitle = eo(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
      threadIds: [],
      renderLevel: n
    }
  }
}

function eo(e, t, n) {
  if (e.type === F.ChannelTypes.GUILD_VOICE) {
    let i = g.default.getActiveEventByChannel(e.id);
    if (null != i) return {
      type: "event",
      name: i.name
    };
    let s = D.default.getVoiceStatesForChannel(e);
    if (n && t && (0, V.hasStream)(s)) return {
      type: "go-live"
    };
    let l = u.default.getChannelStatus(e);
    if (null != l && l.length > 0) return {
      type: "voice",
      text: l
    };
    let a = o.default.getEmbeddedActivitiesForChannel(e.id),
      r = (null != a ? a : []).map(e => {
        var t;
        return null === (t = h.default.getApplication(e.applicationId)) || void 0 === t ? void 0 : t.name
      }).filter(G.isNotNullish);
    return r.length > 0 ? {
      type: "embedded-activities",
      name: r.join(", ")
    } : null
  }
  return null
}

function eh(e, t, n, i, s) {
  let l = null != n && (n.id === e.id || i === e.id),
    a = null != n && n.isThread() && n.parent_id === e.id;
  if (m.THREADED_CHANNEL_TYPES.has(e.type)) {
    let e = d().sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
    if (l) return e;
    if (a) return !(n.id in t) && !(0, p.isInMainTabsExperiment)() && e.unshift(n.id), e;
    else if (s) return e.filter(e => !y.default.isMuted(e));
    else return e
  }
  return []
}

function eu() {
  return !1
}

function ec(e, t) {
  return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
}

function eC(e, t, n) {
  let {
    selectedChannel: i,
    activeJoinedRelevantThreads: s
  } = n;
  if (t.type === F.ChannelTypes.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(H.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
  if (null != i && !(0, p.isInMainTabsExperiment)() && (i.id === t.id || i.isThread() && i.parent_id === t.id) || O.default.getMentionCount(t.id) > 0) return !0;
  let l = E.default.getNewChannelIds(e.id),
    a = Array.from(l).sort((e, t) => U.default.compare(t, e));
  if (l.has(t.id) && a.indexOf(t.id) < k) return !0;
  for (let e in s[t.id])
    if (O.default.getMentionCount(e) > 0 || O.default.hasUnread(e) || O.default.hasRecentlyVisitedAndRead(e)) return !0;
  return !(e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) && (!!O.default.hasRecentlyVisitedAndRead(t.id) || !1)
}
let eg = new Set(Object.values(P.ChannelListCommunityRow))