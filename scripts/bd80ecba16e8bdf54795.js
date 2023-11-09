(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44893"], {
        746164: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2023-02_voice_channel_statuses",
                label: "Voice Channel Status Guild Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable viewing and setting voice channel statuses for guild",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "A/A test, identical to treatment 1",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        848415: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("424973");
            var i = n("627445"),
                l = n.n(i),
                s = n("446674"),
                a = n("151426"),
                r = n("913144"),
                d = n("10641"),
                h = n("42203"),
                u = n("923959"),
                o = n("305961"),
                c = n("957255"),
                C = n("677099"),
                g = n("49111");
            let f = null,
                p = [];
            class I extends s.default.Store {
                initialize() {
                    this.waitFor(C.default, u.default, h.default)
                }
                isCallout(e) {
                    return p.some(t => t.targetId === e)
                }
                getCurrentAction() {
                    return 0 === p.length ? null : p[0]
                }
                isCurrentKind(e) {
                    return 0 !== p.length && p[0].kind === e
                }
                isActive(e) {
                    return null != f && f === e && p.length > 0
                }
            }
            I.displayName = "AssistantStore";
            var S = new I(r.default, {
                ASSISTANT_REBUILD_ACTION_STACK: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if ((0, d.isDismissibleContentDismissed)(a.DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER)) return !1;
                    let n = o.default.getGuild(t);
                    if (null == n) return !1;
                    f = t, (p = []).push({
                        guildId: t,
                        kind: "splashScreen",
                        targetKey: void 0,
                        targetId: void 0
                    });
                    let i = function(e) {
                        let t = u.default.getVocalChannelIds(e);
                        for (var n = 0; n < t.length; n++) {
                            let e = t[n],
                                i = h.default.getChannel(e);
                            if (null != i && !i.nsfw && c.default.can(g.Permissions.VIEW_CHANNEL, i)) return i
                        }
                        return null
                    }(t);
                    null != i && (p.push({
                        guildId: t,
                        kind: "joinVoiceChannel",
                        targetKey: "voiceChannel",
                        targetId: i.id
                    }), p.push({
                        guildId: t,
                        kind: "joinVoiceChannelMultitask",
                        targetKey: "voiceChannel",
                        targetId: i.id
                    }));
                    let l = function(e) {
                        let t = h.default.getChannel(e.systemChannelId);
                        return null != t && !t.nsfw && c.default.can(g.Permissions.VIEW_CHANNEL, t) ? t : u.default.getSFWDefaultChannel(e.id)
                    }(n);
                    null != l && (p.push({
                        guildId: t,
                        kind: "openTextChannel",
                        targetKey: "textChannel",
                        targetId: l.id
                    }), p.push({
                        guildId: t,
                        kind: "sendMessage",
                        targetKey: void 0,
                        targetId: void 0
                    })), p.push({
                        guildId: t,
                        kind: "navigateAround",
                        targetKey: void 0,
                        targetId: void 0
                    }), p.push({
                        guildId: t,
                        kind: "wumpusJoined",
                        targetKey: void 0,
                        targetId: void 0
                    }), p.push({
                        guildId: t,
                        kind: "startActivity",
                        targetKey: void 0,
                        targetId: void 0
                    })
                },
                ASSISTANT_COMPLETE_ACTION: function(e) {
                    let {
                        kind: t
                    } = e;
                    return 0 === p.length ? (l("AssistantStore: no actions to complete"), !1) : p[0].kind === t && void p.shift()
                },
                ASSISTANT_DISMISS: function() {
                    p = []
                }
            })
        },
        207273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("298386"),
                l = n("446674"),
                s = n("913144"),
                a = n("619443");
            let r = new Set,
                d = {};

            function h() {
                r.clear()
            }

            function u(e) {
                r.delete(e.guild.id)
            }
            class o extends l.default.Store {
                getChannelStatus(e) {
                    var t;
                    if (null != e && null != e.guild_id) {
                        if (e.type === i.ChannelTypes.GUILD_VOICE) return !r.has(e.guild_id) && (r.add(e.guild_id), a.default.getSocket().requestChannelStatuses(e.guild_id)), null === (t = d[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
                    }
                }
            }
            o.displayName = "ChannelStatusStore";
            var c = new o(s.default, {
                GUILD_CREATE: u,
                GUILD_DELETE: u,
                CONNECTION_RESUMED: h,
                CONNECTION_OPEN: h,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    null == d[e.guildId] && (d[e.guildId] = {}), d[e.guildId][e.id] = e.status
                },
                CHANNEL_STATUSES: function(e) {
                    for (let {
                            id: t,
                            status: n
                        }
                        of(d[e.guildId] = {}, e.channels)) d[e.guildId][t] = n
                }
            })
        },
        319839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_NEW_CHANNELS_TO_SHOW: function() {
                    return X
                },
                SECTION_INDEX_COMMUNITY: function() {
                    return J
                },
                SECTION_INDEX_FAVORITES: function() {
                    return q
                },
                SECTION_INDEX_UNCATEGORIZED_CHANNELS: function() {
                    return Z
                },
                SECTION_INDEX_FIRST_NAMED_CATEGORY: function() {
                    return Q
                },
                ChannelListFavoritesCategory: function() {
                    return el
                },
                computeSubtitle: function() {
                    return ef
                },
                computeThreadIds: function() {
                    return ep
                },
                default: function() {
                    return l
                }
            }), n("222007"), n("70102"), n("424973"), n("881410"), n("808653"), n("843762");
            var i, l, s, a = n("627445"),
                r = n.n(a),
                d = n("917351"),
                h = n.n(d),
                u = n("746164"),
                o = n("191225"),
                c = n("299285"),
                C = n("848415"),
                g = n("207273"),
                f = n("203288"),
                p = n("650033"),
                I = n("290886"),
                S = n("398604"),
                E = n("38654"),
                v = n("126198"),
                y = n("21121"),
                _ = n("364281"),
                m = n("797694"),
                w = n("512395"),
                N = n("15684"),
                T = n("401690"),
                L = n("755624"),
                A = n("233069"),
                R = n("870691"),
                O = n("42203"),
                b = n("816092"),
                D = n("305961"),
                G = n("957255"),
                U = n("660478"),
                V = n("18494"),
                M = n("282109"),
                P = n("800762"),
                F = n("316133"),
                H = n("449008"),
                B = n("299039"),
                x = n("89073"),
                k = n("323137"),
                Y = n("796618"),
                W = n("49111"),
                K = n("724210"),
                j = n("843455");
            let z = "placeholder-channel-id",
                X = 2;
            (s = i || (i = {}))[s.CannotShow = 1] = "CannotShow", s[s.DoNotShow = 2] = "DoNotShow", s[s.WouldShowIfUncollapsed = 3] = "WouldShowIfUncollapsed", s[s.Show = 4] = "Show";
            let J = 0,
                q = 1,
                Z = 3,
                Q = 4,
                $ = new Set([String(Y.ChannelListCommunityRow.GUILD_DIRECTORY)]);
            l = class {
                getGuild(e, t) {
                    var n;
                    return (!(e in this.guilds) || !h.isEqual(null === (n = this.guilds[e]) || void 0 === n ? void 0 : n.getCommunitySection().getRows().filter(e => !$.has(e)), t)) && (this.guilds[e] = new ee(e, t)), this.guilds[e]
                }
                getGuildWithoutCommunityRows(e) {
                    return !(e in this.guilds) && (this.guilds[e] = new ee(e, [])), this.guilds[e]
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
                    let t = O.default.getBasicChannel(e);
                    return null != t && null != t.guild_id && null != this.guilds[t.guild_id] && (t instanceof A.ChannelRecordBase || null != (t = O.default.getChannel(e))) && this.nonPositionalChannelUpdate(t)
                }
                nonPositionalChannelUpdate(e) {
                    if (null == e.guild_id) return !1;
                    let t = this.guilds[e.guild_id];
                    if (null == t) return !1;
                    let n = !1;
                    return e.isThread() && (n = this.nonPositionalChannelIdUpdate(e.parent_id)), t.nonPositionalChannelUpdate(e) || n
                }
                updateSubtitles(e, t) {
                    let n = null == e ? Object.values(this.guilds) : e in this.guilds ? [this.guilds[e]] : [];
                    n.forEach(e => e.updateSubtitles(t))
                }
                constructor() {
                    this.guilds = {}
                }
            };
            class ee {
                get initializationData() {
                    return {
                        selectedChannel: O.default.getChannel(V.default.getChannelId()),
                        selectedVoiceChannelId: V.default.getVoiceChannelId(),
                        activeJoinedRelevantThreads: T.default.getActiveJoinedRelevantThreadsForGuild(this.id),
                        activeJoinedUnreadThreads: T.default.getActiveJoinedUnreadThreadsForGuild(this.id)
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
                        this.sortedNamedCategories = h.sortBy(Object.values(this.categories), e => e.record.position), this.rows = [this.communitySection, this.favoritesCategory, this.recentsCategory, this.noParentCategory, ...this.sortedNamedCategories, this.voiceChannelsCategory].map(e => e.getRows());
                        let e = 0;
                        for (let t of [this.noParentCategory, ...this.sortedNamedCategories])
                            for (let n of (t.position = ++e, t.getShownChannelIds())) t.channels[n].position = ++e
                    }
                    return this.rows
                }
                getCategoryFromSection(e) {
                    switch (e) {
                        case J:
                            throw Error("Invalid section. Use getCommunitySection instead");
                        case q:
                            return this.favoritesCategory;
                        case Z:
                            return this.noParentCategory;
                        case this.recentsSectionNumber:
                            return this.recentsCategory;
                        case this.voiceChannelsSectionNumber:
                            return this.voiceChannelsCategory;
                        default:
                            return this.getSortedNamedCategories()[e - Q]
                    }
                }
                getNamedCategoryFromSection(e) {
                    return r((e -= Q) >= 0 && e < this.getSortedNamedCategories().length, "invalid section index ".concat(e)), this.getSortedNamedCategories()[e]
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
                    return r(e > J, "Invalid section"), e !== this.recentsSectionNumber && this.getRows()[e][t] === z
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
                            return null != e && ey.has(e)
                        }(e)) {
                        let t = this.getCommunitySection().getRows().indexOf(e);
                        return [{
                            row: t,
                            section: J
                        }]
                    }
                    let t = [],
                        n = O.default.getChannel(e);
                    if (null == n || null == e) return t;
                    let i = n.isThread();
                    if (i && (n = O.default.getChannel(n.parent_id)), null == n) return t;
                    let l = this.favoritesCategory.getShownChannelIds().indexOf(n.id);
                    l >= 0 && t.push({
                        section: q,
                        row: l
                    });
                    let s = this.recentsCategory.getShownChannelIds().indexOf(n.id);
                    if (s >= 0 && t.push({
                            section: this.recentsSectionNumber,
                            row: s
                        }), n.type === W.ChannelTypes.GUILD_CATEGORY) {
                        let e = h.findIndex(this.getSortedNamedCategories(), e => e.id === (null == n ? void 0 : n.id));
                        return [{
                            section: e + Q
                        }]
                    }
                    let a = this.getCategory(n),
                        r = a instanceof en ? Z : this.getSortedNamedCategories().indexOf(a) + Q,
                        d = a.getShownChannelIds().indexOf(n.id);
                    if (r >= 0 && d >= 0) {
                        let l = i ? a.channels[n.id].threadIds.indexOf(e) : 0;
                        t.push({
                            section: r,
                            row: d,
                            threadOffset: l
                        })
                    }
                    let u = this.voiceChannelsCategory.getShownChannelIds().indexOf(n.id);
                    return u >= 0 && t.push({
                        section: this.voiceChannelsSectionNumber,
                        row: u
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
                        n = this.getCategory(e),
                        i = n.updateChannel(e, t);
                    return this.favoritesCategory.updateChannel(e, t) && (i = !0), this.recentsCategory.updateChannel(e, t) && (i = !0), this.voiceChannelsCategory.updateChannel(e, t) && (i = !0), i && this.invalidate(), i
                }
                getSlicedChannels(e, t) {
                    r(e.length > 0, "must have at least one channel in the slice");
                    let n = e[0],
                        i = e[e.length - 1],
                        l = !0,
                        s = !1,
                        a = [],
                        d = [];
                    for (let e of this.getSortedCategories()) {
                        let r = (null == t ? void 0 : t.ignoreRecents) && e === this.recentsCategory;
                        for (let t of e.getShownChannelIds()) {
                            let h = e.channels[t];
                            l && (h.id === n.id ? l = !1 : !r && a.push(h)), s && !r && d.push(h), !l && !s && h.id === i.id && (s = !0)
                        }
                    }
                    return [a, e, d]
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
                        let n = O.default.getChannel(e);
                        if (null != n) {
                            if (n.id in this.favoritesCategory.channels) t = [this.favoritesCategory.channels[n.id]];
                            else if (n.id in this.recentsCategory.channels) t = [this.recentsCategory.channels[n.id]];
                            else {
                                let i = this.getCategory(n);
                                null != i && null != i.channels[e] && (t = [i.channels[e]])
                            }
                        }
                    } else t = h(this.getSortedCategories()).map(e => Object.values(e.channels)).flatten().value();
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
                                    let n = O.default.getChannel(t);
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
                    this.id = e, this.sortedNamedCategories = null, this.sections = null, this.rows = null, this.firstVoiceChannel = void 0, this.allChannelsById = null, this.version = 0, this.hideMutedChannels = M.default.isGuildCollapsed(this.id), this.mutedChannelIds = M.default.getMutedChannels(this.id), this.optedInChannels = null !== (n = M.default.getOptedInChannelsWithPendingUpdates(this.id)) && void 0 !== n ? n : M.default.getOptedInChannels(this.id), this.optInEnabled = (0, w.isOptInEnabledForGuild)(this.id), this.hideResourceChannels = (0, I.canSeeOnboardingHome)(this.id), this.favoriteChannelIds = new Set(null !== (i = M.default.getGuildFavorites(this.id)) && void 0 !== i ? i : []), this.suggestedFavoriteChannelId = _.default.getSuggestedChannelId(this.id), this.collapsedCategoryIds = R.default.getCollapsedCategories();
                    let l = O.default.getMutableGuildChannelsForGuild(this.id),
                        s = D.default.getGuild(this.id),
                        a = {},
                        d = [],
                        u = {};
                    for (let e in l) {
                        let t = l[e];
                        t.type === W.ChannelTypes.GUILD_CATEGORY && (a[t.id] = t, u[t.id] = [])
                    }
                    let o = [],
                        c = [],
                        C = [],
                        g = this.initializationData;
                    for (let e in l) {
                        let t = l[e];
                        if (t.type !== W.ChannelTypes.GUILD_CATEGORY) {
                            if (t.type === W.ChannelTypes.GUILD_DIRECTORY) {
                                null != s && !s.hasFeature(W.GuildFeatures.HUB) && C.push(t);
                                continue
                            }
                            ev(this, t, g) ? o.push(t) : (t.type === W.ChannelTypes.GUILD_VOICE || t.type === W.ChannelTypes.GUILD_STAGE_VOICE) && (null != t.parent_id && null != a[t.parent_id] && c.push(a[t.parent_id]), c.push(t)), null != t.parent_id && t.parent_id in u ? u[t.parent_id].push(t) : d.push(t)
                        }
                    }
                    for (let e in this.categories = {}, u) this.categories[e] = new ei(this, a[e], u[e], g);
                    this.recentsSectionNumber = 2, this.favoritesSectionNumber = q, this.noParentCategory = new en(this, d, g), this.favoritesCategory = new el(this, g), this.recentsCategory = (0, v.isRecentChannelsEnabled)() ? new es(this, l, g) : new ea(this, o, g), this.voiceChannelsCategory = new er(this, c, a, g), this.communitySection = new ed(t, C.length > 0), r(!("null" in this.categories), "somehow a null got into categories"), this.voiceChannelsSectionNumber = Q + h.size(this.categories)
                }
            }
            class et {
                updateChannel(e, t) {
                    return !!(e.id in this.channels && this.channels[e.id].updateChannel(e, t)) && (this.invalidate(), !0)
                }
                invalidate() {
                    this.shownChannelIds = null
                }
                getRows() {
                    let e = this.getShownChannelIds();
                    return 0 === e.length && this.shouldShowEmptyCategory() ? [z] : e
                }
                shouldShowEmptyCategory() {
                    return h.some(this.channels, e => e.renderLevel >= 3)
                }
                getShownChannelIds() {
                    return null == this.shownChannelIds && (this.shownChannelIds = h(this.channels).values().filter(e => 4 === e.renderLevel).sortBy(e => {
                        let {
                            record: t
                        } = e;
                        return t.isGuildVocal() ? t.position + 1e4 : t.position
                    }).map(e => e.id).value()), this.shownChannelIds
                }
                getShownChannelAndThreadIds() {
                    let e = h(this.channels).values().flatMap(e => e.threadIds).value();
                    return this.getShownChannelIds().concat(e)
                }
                isEmpty() {
                    return 0 === this.getShownChannelIds().length
                }
                getChannelRecords() {
                    return h(this.channels).values().filter(e => e.renderLevel > 1).map(e => e.record).value()
                }
                getFirstVoiceChannel(e) {
                    for (let t of this.getShownChannelIds()) {
                        if (e && this.channels[t].record.isGuildStageVoice()) return this.channels[t];
                        if (!e && this.channels[t].record.isGuildVocal()) return this.channels[t]
                    }
                    return null
                }
                constructor(e) {
                    this.guild = e, this.isMuted = !1, this.isCollapsed = !1, this.position = -1, this.channels = {}, this.shownChannelIds = null
                }
            }
            class en extends et {
                constructor(e, t, n) {
                    super(e), this.channels = h(t).map(e => new eu(this, e, n)).keyBy(e => e.id).value()
                }
            }
            class ei extends et {
                shouldShowEmptyCategory() {
                    return !!(super.shouldShowEmptyCategory() || G.default.can(j.Permissions.MANAGE_CHANNELS, this.record) && G.default.can(j.Permissions.VIEW_CHANNEL, this.record) && h.isEmpty(this.channels) && (!this.guild.optInEnabled || this.guild.optedInChannels.has(this.id))) || !1
                }
                constructor(e, t, n, i) {
                    for (let l of (super(e), this.record = t, this.id = t.id, this.isCollapsed = !0 === e.collapsedCategoryIds[t.id], this.isMuted = e.mutedChannelIds.has(t.id), this.channels = {}, n)) this.channels[l.id] = new eu(this, l, i)
                }
            }
            class el extends et {
                updateChannel(e, t) {
                    let n = e.id in this.channels && M.default.isFavorite(e.guild_id, e.id),
                        i = _.default.getSuggestedChannelId(e.guild_id),
                        l = e.id === i && !n;
                    if (l && (t = {
                            ...t,
                            activeJoinedRelevantThreads: {},
                            activeJoinedUnreadThreads: {}
                        }), e.id in this.channels && this.channels[e.id].updateChannel(e, t)) return this.invalidate(), !0;
                    let s = e.id in this.channels && e.id !== i && !n;
                    return !!s && (delete this.channels[e.id], this.invalidate(), !0)
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                constructor(e, t) {
                    var n;
                    if (super(e), !e.optInEnabled && ! function() {
                            return !1
                        }()) return;
                    this.channels = h(null !== (n = M.default.getGuildFavorites(e.id)) && void 0 !== n ? n : []).map(e => O.default.getChannel(e)).filter(H.isNotNullish).map(e => new eo(this, e, t)).keyBy(e => e.id).value();
                    let i = _.default.getSuggestedChannelId(e.id),
                        l = O.default.getChannel(i);
                    null != l && null != i && (this.channels[i] = new eo(this, l, {
                        ...t,
                        activeJoinedRelevantThreads: {},
                        activeJoinedUnreadThreads: {}
                    }))
                }
            }
            class es extends et {
                shouldShowEmptyCategory() {
                    return this.enabled && this.isCollapsed && super.shouldShowEmptyCategory()
                }
                updateAllChannels(e) {
                    return Object.values(this.channels).reduce((t, n) => this.updateChannel(n.record, e) || t, !1)
                }
                updateChannel(e, t) {
                    if (!this.enabled) return !1;
                    if ((0, A.isThread)(e.type)) {
                        let t = this.channels[e.parent_id];
                        return null != t && this.updateShownChannelIds(t)
                    }
                    if (!(0, A.isGuildReadableType)(e.type)) return !1;
                    let n = super.updateChannel(e, t),
                        i = this.channels[e.id];
                    return null == i ? (i = new eC(this, e, t), this.channels[e.id] = i, this.invalidate(), !0) : this.updateShownChannelIds(i) || n
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                getShownChannelIds() {
                    if (null == this.shownChannelIds) {
                        let e = this.isCollapsed ? 4 : 3;
                        this.shownChannelIds = this.enabled ? h(this.channels).filter(t => t.renderLevel >= e).map(e => [e.id, e.lastMessageTimestamp, e.renderLevel]).filter(e => {
                            let [, t, n] = e;
                            return 4 === n || t > 0 && Date.now() - t < es.MAX_TIMESTAMP_DELTA
                        }).sortBy(e => {
                            let [, t, n] = e;
                            return -(t - (4 === n ? 0 : B.DISCORD_EPOCH))
                        }).take(es.MAX_RECENT_CHANNELS).sortBy(e => {
                            let [, t] = e;
                            return -t
                        }).map(e => {
                            let [t] = e;
                            return t
                        }).value() : []
                    }
                    return this.shownChannelIds
                }
                updateShownChannelIds(e) {
                    var t;
                    if (this.isThrottled) return !1;
                    let n = this.isCollapsed ? 4 : 3;
                    if (null == this.shownChannelIds || e.renderLevel < n) return !1;
                    if (e.lastMessageTimestamp > (null === (t = this.channels[this.shownChannelIds[0]]) || void 0 === t ? void 0 : t.lastMessageTimestamp)) {
                        let t = this.shownChannelIds.indexOf(e.id);
                        return t > -1 && this.shownChannelIds.splice(t, 1), this.shownChannelIds.splice(0, 0, e.id), this.shownChannelIds.length > es.MAX_RECENT_CHANNELS && (this.shownChannelIds = this.shownChannelIds.slice(0, es.MAX_RECENT_CHANNELS)), p.default.get("recent_channels_throttle") && (this.isThrottled = !0, setTimeout(() => {
                            this.isThrottled = !1
                        }, this.RECENTS_THROTTLE)), !0
                    }
                    return !1
                }
                constructor(e, t, n) {
                    if (super(e), this.enabled = !1, this.RECENTS_THROTTLE = 5e3, this.isThrottled = !1, this.isCollapsed = m.default.isCollapsed(e.id), this.enabled = function() {
                            return !1
                        }() && Object.keys(t).length >= es.MIN_READABLE_CHANNELS, this.enabled)
                        for (let e of Object.values(t))(0, A.isGuildReadableType)(e.type) && !(0, A.isThread)(e.type) && (this.channels[e.id] = new eC(this, e, n))
                }
            }
            es.MIN_READABLE_CHANNELS = 7, es.MAX_RECENT_CHANNELS = 10, es.MAX_TIMESTAMP_DELTA = 6048e5;
            class ea extends et {
                updateAllChannels(e) {
                    let t = !1;
                    return Object.keys(this.channels).forEach(n => {
                        this.updateChannel(this.channels[n].record, e) && (t = !0)
                    }), t
                }
                updateChannel(e, t) {
                    let n = super.updateChannel(e, t);
                    if (this.guild.optInEnabled) {
                        let n = this.channels[e.id],
                            i = ev(this.guild, e, t);
                        if (i && null == n) return this.channels[e.id] = new ec(this, e, t), this.invalidate(), !0;
                        if (!i && null != n) return delete this.channels[e.id], this.invalidate(), !0
                    }
                    return n
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                getShownChannelIds() {
                    if (null == this.shownChannelIds) {
                        let e = h(this.channels).values().filter(e => 4 === e.renderLevel || 3 === e.renderLevel).filter(e => !e.record.isGuildVocal()),
                            t = e.sortBy(e => {
                                let {
                                    record: t
                                } = e;
                                return t.position
                            }).take(5).value(),
                            n = e.filter(e => 4 === e.renderLevel).value(),
                            i = new Set([...n, ...t]);
                        this.shownChannelIds = h([...i]).sortBy(e => {
                            let {
                                record: t
                            } = e;
                            return t.position
                        }).map(e => e.id).value()
                    }
                    return this.shownChannelIds
                }
                constructor(e, t, n) {
                    if (super(e), !e.optInEnabled || E.default.isFullServerPreview(e.id)) return;
                    this.isCollapsed = !1, this.isMuted = !1, this.channels = h(t).map(e => new ec(this, e, n)).keyBy(e => e.id).value()
                }
            }
            class er extends et {
                invalidate() {
                    super.invalidate(), this.hiddenChannelIds = null
                }
                getHiddenChannelIds() {
                    if (!this.guild.optInEnabled) return [];
                    if (null == this.hiddenChannelIds) {
                        let e = h(this.channels).filter(e => 3 === e.renderLevel).value();
                        if (e.every(e => e.record.isCategory())) return this.hiddenChannelIds = [], this.hiddenChannelIds;
                        this.hiddenChannelIds = e.map(e => e.id)
                    }
                    return this.hiddenChannelIds
                }
                getRows() {
                    if (!this.guild.optInEnabled) return [];
                    let e = this.getShownChannelIds();
                    return 0 === e.length && this.getHiddenChannelIds().length > 0 ? [z] : e
                }
                getShownChannelIds() {
                    if (!this.guild.optInEnabled) return [];
                    if (null == this.shownChannelIds) {
                        let t = h(this.channels).filter(e => 4 === e.renderLevel).orderBy([e => (function(e, t) {
                            if (e.record.type === W.ChannelTypes.GUILD_CATEGORY) return e.record.position;
                            if (null != e.record.parent_id) {
                                var n, i;
                                return null !== (i = null === (n = t[e.record.parent_id]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : -1
                            }
                            return -1
                        })(e, this.categoriesById), e => e.record.type === W.ChannelTypes.GUILD_CATEGORY ? -1 : e.record.position], ["asc", "asc"]).value();
                        this.shownChannelIds = [];
                        for (let n = 0; n < t.length; n++) {
                            var e;
                            let i = t[n];
                            if (!(n < t.length - 1) || i.record.type !== W.ChannelTypes.GUILD_CATEGORY || (null === (e = t[n + 1]) || void 0 === e ? void 0 : e.record.type) !== W.ChannelTypes.GUILD_CATEGORY)(n !== t.length - 1 || i.record.type !== W.ChannelTypes.GUILD_CATEGORY) && this.shownChannelIds.push(i.id)
                        }
                    }
                    return this.shownChannelIds
                }
                getFirstVoiceChannel(e) {
                    return null
                }
                constructor(e, t, n, i) {
                    if (super(e), this.categoriesById = n, this.hiddenChannelIds = null, !e.optInEnabled) return;
                    this.isCollapsed = k.default.isVoiceCategoryCollapsed(e.id), this.isMuted = !1, this.categoriesById = n, this.channels = h(t).map(e => new eg(this, e, i)).keyBy(e => e.id).value()
                }
            }
            class ed {
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
                    this.communityRows = e.map(String), t && this.communityRows.push(String(Y.ChannelListCommunityRow.GUILD_DIRECTORY))
                }
            }
            class eh {
                get isMuted() {
                    return this.category.guild.mutedChannelIds.has(this.id)
                }
                get isCollapsed() {
                    return b.default.isCollapsed(this.id)
                }
                get isFirstVoiceChannel() {
                    return this.category.getFirstVoiceChannel() === this
                }
                get isAssistantCallout() {
                    return C.default.isCallout(this.id)
                }
                get lastMessageTimestamp() {
                    return Math.max(U.default.lastMessageTimestamp(this.id), ...this.threadIds.map(U.default.lastMessageTimestamp))
                }
                updateChannel(e, t) {
                    let n = !1;
                    null != e && e !== this.record && (this.record = e, n = !0);
                    let i = this.computeState(t);
                    return (i.renderLevel !== this.renderLevel || !h.isEqual(i.threadIds, this.threadIds)) && (this.renderLevel = i.renderLevel, this.threadIds = i.threadIds, this.threadCount = h.size(i.threadIds), n = !0), 4 === this.renderLevel && this.updateSubtitle() && (n = !0), n
                }
                updateSubtitle() {
                    let e = this.computeSubtitle();
                    return !h.isEqual(this.subtitle, e) && (this.subtitle = e, !0)
                }
                computeSubtitle() {
                    return ef(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)
                }
                constructor(e, t, n) {
                    this.category = e, this.record = t, this.position = -1, this.threadIds = [], this.threadCount = 0, this.subtitle = null, this.renderLevel = 1, this.id = t.id;
                    let {
                        renderLevel: i,
                        threadIds: l
                    } = this.computeState(n);
                    this.renderLevel = i, this.threadCount = h.size(l), this.threadIds = l, 4 === i && (this.subtitle = this.computeSubtitle())
                }
            }
            class eu extends eh {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: l,
                        activeJoinedUnreadThreads: s
                    } = e, a = [];
                    if (!G.default.can(j.Permissions.VIEW_CHANNEL, this.record)) {
                        if (this.id === i) return {
                            renderLevel: 4,
                            threadIds: a
                        };
                        if (!f.default.isChannelGatedAndVisible(this.record.guild_id, this.record.id)) return {
                            renderLevel: 1,
                            threadIds: a
                        }
                    }
                    let r = this.record.parent_id,
                        d = this.category.guild;
                    if (eS(d, this.record)) return {
                        renderLevel: 1,
                        threadIds: a
                    };
                    let u = (null == n ? void 0 : n.id) === this.id || i === this.id,
                        o = null != n && n.isThread() && n.parent_id === this.id,
                        c = null !== (t = u || o || !this.category.isCollapsed && !this.isMuted ? l[this.id] : s[this.id]) && void 0 !== t ? t : {};
                    return (a = ep(this.record, c, n, i, d.hideMutedChannels), d.optInEnabled && d.hideResourceChannels && this.record.hasFlag(K.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) ? {
                        renderLevel: u ? 4 : 1,
                        threadIds: a
                    } : !d.optInEnabled || d.optedInChannels.has(this.id) || null != r && d.optedInChannels.has(r) ? u || o || !h.isEmpty(a) || U.default.getMentionCount(this.id) > 0 ? {
                        renderLevel: 4,
                        threadIds: a
                    } : d.hideMutedChannels && d.mutedChannelIds.has(this.id) ? {
                        renderLevel: 2,
                        threadIds: a
                    } : this.category.isCollapsed && (d.mutedChannelIds.has(this.id) || null != r && d.mutedChannelIds.has(r) || this.record.isGuildVocal() || this.record.type === W.ChannelTypes.GUILD_STORE || (0, A.isGuildReadableType)(this.record.type) && !1 === U.default.hasRelevantUnread(this.record)) ? {
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
            class eo extends eh {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: l
                    } = e;
                    return G.default.can(j.Permissions.VIEW_CHANNEL, this.record) ? {
                        renderLevel: 4,
                        threadIds: ep(this.record, null !== (t = l[this.id]) && void 0 !== t ? t : {}, n, i, !1)
                    } : {
                        renderLevel: 1,
                        threadIds: []
                    }
                }
            }
            class ec extends eh {
                computeState(e) {
                    var t;
                    let {
                        selectedChannel: n,
                        selectedVoiceChannelId: i,
                        activeJoinedRelevantThreads: l
                    } = e;
                    return G.default.can(j.Permissions.VIEW_CHANNEL, this.record) ? {
                        renderLevel: eE(this, e) ? 4 : 3,
                        threadIds: ep(this.record, null !== (t = l[this.id]) && void 0 !== t ? t : {}, n, i, !1)
                    } : {
                        renderLevel: 1,
                        threadIds: []
                    }
                }
            }
            class eC extends eu {
                computeState(e) {
                    let {
                        renderLevel: t,
                        threadIds: n
                    } = super.computeState(e);
                    if (t > 1) {
                        let i = this.record.parent_id,
                            l = this.category.guild;
                        l.mutedChannelIds.has(this.id) || null != i && l.mutedChannelIds.has(i) ? t = 2 : 4 === t ? t = 3 : 2 === t && ev(this.category.guild, this.record, e) && (t = 3), 3 === t && eE(this, e) && (t = 4), n = h.sortBy(n, e => -U.default.lastMessageTimestamp(e))
                    }
                    return {
                        renderLevel: t,
                        threadIds: n
                    }
                }
            }
            class eg extends eu {
                getRenderLevel(e) {
                    let t = this.category.guild;
                    return !G.default.can(j.Permissions.VIEW_CHANNEL, this.record) || 4 === e || 3 === e || eS(t, this.record) ? 1 : this.category.isCollapsed ? h.some(P.default.getVoiceStatesForChannel(this.record.id)) ? 4 : 3 : 4
                }
                computeState(e) {
                    let t = super.computeState(e),
                        n = this.getRenderLevel(t.renderLevel);
                    return 4 === n && (this.subtitle = ef(this.record, this.isCollapsed || this.category.isCollapsed, this.category.guild.optInEnabled)), {
                        threadIds: [],
                        renderLevel: n
                    }
                }
            }

            function ef(e, t, n) {
                if (e.type === W.ChannelTypes.GUILD_VOICE) {
                    let i = S.default.getActiveEventByChannel(e.id);
                    if (null != i) return {
                        type: "event",
                        name: i.name
                    };
                    let l = F.default.getVoiceStatesForChannel(e);
                    if (n && t && (0, x.hasStream)(l)) return {
                        type: "go-live"
                    };
                    let s = o.default.getEmbeddedActivitiesForChannel(e.id),
                        a = (null != s ? s : []).map(e => {
                            var t;
                            return null === (t = c.default.getApplication(e.application_id)) || void 0 === t ? void 0 : t.name
                        }).filter(H.isNotNullish);
                    if (a.length > 0) return {
                        type: "embedded-activities",
                        name: a.join(", ")
                    };
                    let r = u.default.getCurrentConfig({
                        guildId: e.guild_id,
                        location: "cf7f69_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                    if (r) {
                        let t = g.default.getChannelStatus(e);
                        if (null != t && t.length > 0) return {
                            type: "voice",
                            text: t
                        }
                    };
                }
                return null
            }

            function ep(e, t, n, i, l) {
                let s = null != n && (n.id === e.id || i === e.id),
                    a = null != n && n.isThread() && n.parent_id === e.id;
                if (A.THREADED_CHANNEL_TYPES.has(e.type)) {
                    let e = h.sortBy(Object.values(t), e => -e.joinTimestamp).map(e => e.channel.id);
                    if (s) return e;
                    if (a) return !(n.id in t) && !(0, y.isInMainTabsExperiment)() && e.unshift(n.id), e;
                    else if (l) return e.filter(e => !L.default.isMuted(e));
                    else return e
                }
                return []
            }

            function eI() {
                return !1
            }

            function eS(e, t) {
                return e.favoriteChannelIds.has(t.id) && (e.optInEnabled || !1)
            }

            function eE(e, t) {
                let {
                    selectedChannel: n,
                    activeJoinedRelevantThreads: i
                } = t;
                if (U.default.getMentionCount(e.id) > 0) return !0;
                for (let t in i[e.id])
                    if (U.default.getMentionCount(t) > 0) return !0;
                if (null != n && (n.id === e.id || n.isThread() && n.parent_id === e.id)) return true;
                let l = N.default.getNewChannelIds(e.category.guild.id);
                if (l.size > X);
                else if (l.has(e.id)) return !0;
                return !1
            }

            function ev(e, t, n) {
                let {
                    selectedChannel: i,
                    activeJoinedRelevantThreads: l
                } = n;
                if (t.type === W.ChannelTypes.GUILD_DIRECTORY || !e.optInEnabled || t.isGuildVocal() || e.optedInChannels.has(t.id) || t.isThread() || null != t.parent_id && e.optedInChannels.has(t.parent_id) || e.hideResourceChannels && t.hasFlag(K.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) return !1;
                if (null != i && !(0, y.isInMainTabsExperiment)() && (i.id === t.id || i.isThread() && i.parent_id === t.id) || U.default.getMentionCount(t.id) > 0) return !0;
                let s = N.default.getNewChannelIds(e.id),
                    a = Array.from(s).sort((e, t) => B.default.compare(t, e));
                if (s.has(t.id) && a.indexOf(t.id) < X) return !0;
                for (let e in l[t.id])
                    if (U.default.getMentionCount(e) > 0 || U.default.hasUnread(e) || U.default.hasRecentlyVisitedAndRead(e)) return !0;
                return !(e.mutedChannelIds.has(t.id) || null != t.parent_id && e.mutedChannelIds.has(t.parent_id)) && (!!U.default.hasRecentlyVisitedAndRead(t.id) || !1)
            }
            let ey = new Set(Object.values(Y.ChannelListCommunityRow))
        },
        323137: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("446674"),
                l = n("913144");
            let s = {};

            function a(e) {
                let {
                    guildId: t,
                    expand: n
                } = e;
                n ? s[t] = !0 : delete s[t]
            }
            class r extends i.default.PersistedStore {
                initialize(e) {
                    s = null != e ? e : {}
                }
                isVoiceCategoryExpanded(e) {
                    var t;
                    return null !== (t = null != e && s[e]) && void 0 !== t && t
                }
                isVoiceCategoryCollapsed(e) {
                    return !this.isVoiceCategoryExpanded(e)
                }
                getState() {
                    return s
                }
            }
            r.displayName = "ChannelListVoiceCategoryStore", r.persistKey = "ChannelListVoiceCategoryStore";
            var d = new r(l.default, {
                VOICE_CATEGORY_COLLAPSE: a,
                VOICE_CATEGORY_EXPAND: a
            })
        },
        796618: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                ChannelListCommunityRow: function() {
                    return i
                }
            }), (l = i || (i = {})).GUILD_PREMIUM_PROGRESS_BAR = "guild-premium-progress-bar", l.GUILD_SCHEDULED_EVENTS = "guild-scheduled-events", l.GUILD_HUB_HEADER_OPTIONS = "guild-hub-header-options", l.GUILD_FAVORITES = "favorites", l.GUILD_CHANNEL_LIST_OPT_IN_NOTICE = "guild-channel-list-opt-in-notice", l.GUILD_ROLE_SUBSCRIPTIONS = "role-subscriptions", l.GUILD_SHOP = "shop", l.GUILD_MEMBER_APPLICATIONS = "member-applications", l.GUILD_HOME = "@home", l.CHANNELS_AND_ROLES = "channels-and-roles", l.BROWSE_CHANNELS = "browse-channels", l.GUILD_DIRECTORY = "guild-directory", l.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR = "guild-new-member-actions-progress-bar", l.GUILD_MOD_DASH_MEMBER_SAFETY = "guild-mod-dash-member-safety"
        },
        364281: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var i = n("446674"),
                l = n("913144"),
                s = n("42203"),
                a = n("18494"),
                r = n("282109");
            let d = {},
                h = {},
                u = {};

            function o() {
                let e = a.default.getChannelId();
                if (null == e) return;
                let t = s.default.getChannel(e);
                if (null == t || null == t.guild_id) return;
                let n = t.guild_id;
                if (null == u[e] && (u[e] = 0), t.isThread() || r.default.isOptInEnabled(n) && !r.default.isChannelOrParentOptedIn(n, t.id)) {
                    delete u[e], null != d[n] && d[n].delete(e);
                    return
                }
                if (u[e]++, null == d[n] && (d[n] = new Set), r.default.isFavorite(n, e)) {
                    d[n].delete(e);
                    return
                }
                if ((null == h[n] || !h[n].has(e)) && u[e] > 50) return d[n].add(e), !0
            }
            class c extends i.default.PersistedStore {
                initialize(e) {
                    var t, n;
                    if (this.syncWith([a.default], o), null == e) return;
                    let {
                        suggestedChannels: i,
                        dismissedSuggestions: l,
                        channelOpensByChannelId: s
                    } = e;
                    if (null != i)
                        for (let e in i) t = new Set(i[e]), d[e] = void 0 !== t ? t : new Set;
                    if (null != l)
                        for (let e in l) n = new Set(l[e]), h[e] = void 0 !== n ? n : new Set;
                    u = null != s ? s : {}
                }
                getSuggestedChannelId(e) {
                    return null
                }
                getState() {
                    return {
                        suggestedChannels: {},
                        dismissedSuggestions: {},
                        channelOpensByChannelId: {}
                    }
                }
            }
            c.displayName = "FavoritesSuggestionStore", c.persistKey = "FavoritesSuggestionStore";
            var C = new c(l.default, {
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return null == h[t] && (h[t] = new Set), h[t].add(n), d[t].delete(n), !0
                }
            })
        },
        797694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("446674"),
                l = n("913144");
            let s = new Set;
            class a extends i.default.PersistedStore {
                initialize(e) {
                    s.clear(), null == e || e.guilds.forEach(e => s.add(e))
                }
                isCollapsed(e) {
                    return s.has(e)
                }
                getState() {
                    return {
                        guilds: s
                    }
                }
            }
            a.displayName = "RecentlyActiveCollapseStore", a.persistKey = "RecentlyActiveCollapseStore";
            var r = new a(l.default, {
                SET_RECENTLY_ACTIVE_COLLAPSED: function(e) {
                    let {
                        guildId: t,
                        collapsed: n
                    } = e;
                    n ? s.add(t) : s.delete(t)
                }
            })
        },
        15684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var i = n("249654"),
                l = n("446674"),
                s = n("913144"),
                a = n("267363"),
                r = n("582713"),
                d = n("374363"),
                h = n("271938"),
                u = n("42203"),
                o = n("923959"),
                c = n("26989"),
                C = n("305961"),
                g = n("660478"),
                f = n("282109"),
                p = n("718517"),
                I = n("49111");
            let S = new Set,
                E = {},
                v = {};

            function y(e, t) {
                let n = E[e];
                if (null != n && null != t && n.has(t)) {
                    var l;
                    f.default.isOptInEnabled(e) && !(null === (l = u.default.getChannel(t)) || void 0 === l ? void 0 : l.isThread()) && null == g.default.ackMessageId(t) && s.default.wait(() => (0, a.ack)(t, !0, !0, i.default.atPreviousMillisecond(t)))
                }
            }

            function _(e) {
                var t;
                if (null != E[e]) return;
                let n = o.default.getChannels(e),
                    l = n[0, o.GUILD_SELECTABLE_CHANNELS_KEY].map(e => e.channel.id),
                    s = null === (t = c.default.getMember(e, h.default.getId())) || void 0 === t ? void 0 : t.joinedAt;
                if (null == s) return;
                E[e] = new Set;
                let a = new Date(s).getTime();
                0 !== l.length && (E[e] = new Set(l.filter(t => {
                    let n = i.default.extractTimestamp(t);
                    return null == g.default.getTrackedAckMessageId(t) && n > Date.now() - p.default.Millis.WEEK && n > d.default.getGuildRecentsDismissedAt(e) && n > a && !f.default.isChannelOrParentOptedIn(e, t)
                })), v[e] = Date.now())
            }

            function m() {
                Object.keys(E).forEach(e => {
                    let t = E[e];
                    E[e] = new Set([...t].filter(t => !f.default.isChannelOrParentOptedIn(e, t)))
                })
            }
            class w extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, h.default, c.default, f.default, g.default, d.default), this.syncWith([f.default], m)
                }
                getNewChannelIds(e) {
                    var t;
                    return null != e && null == E[e] && _(e), null != e && null !== (t = E[e]) && void 0 !== t ? t : S
                }
                shouldIndicateNewChannel(e, t) {
                    var n;
                    if (null == e) return !1;
                    let i = C.default.getGuild(e);
                    return !!(null != i && i.hasFeature(I.GuildFeatures.COMMUNITY)) && (null != e && null == E[e] && _(e), (null === (n = E[e]) || void 0 === n ? void 0 : n.has(t)) && null == g.default.getTrackedAckMessageId(t))
                }
            }
            w.displayName = "NewChannelsStore";
            var N = new w(s.default, {
                BULK_CLEAR_RECENTS: function(e) {
                    let {
                        guildId: t,
                        channelIds: n
                    } = e;
                    if (null == E[t]) return !1;
                    n.forEach(e => E[t].delete(e)), 0 === E[t].size && delete E[t]
                },
                CHANNEL_ACK: () => !0,
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    if (null == t) return !1;
                    let i = E[t];
                    return null == i || v[t] < Date.now() - p.default.Millis.HOUR ? (_(t), !0) : (null != n && y(t, n), !1)
                },
                SIDEBAR_VIEW_CHANNEL: function(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        sidebarType: i
                    } = e;
                    return null != t && i === r.SidebarType.VIEW_CHANNEL && (y(t, n), !1)
                },
                SIDEBAR_VIEW_GUILD: function(e) {
                    let {
                        guildId: t,
                        baseChannelId: n
                    } = e;
                    return null != t && (y(t, n), !1)
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete E[t.id]
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e;
                    !n.isVocal() && (E[n.guild_id] = null !== (t = E[n.guild_id]) && void 0 !== t ? t : new Set, E[n.guild_id].add(n.id))
                }
            })
        },
        816092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("446674"),
                l = n("913144"),
                s = n("42203");
            let a = {},
                r = a;

            function d() {
                Object.keys(r).forEach(e => {
                    null == s.default.getChannel(e) && delete r[e]
                })
            }
            class h extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), r = null != e ? e : a
                }
                getState() {
                    return r
                }
                getCollapsed() {
                    return r
                }
                isCollapsed(e) {
                    return r[e] || !1
                }
            }
            h.displayName = "CollapsedVoiceChannelStore", h.persistKey = "collapsedChannels";
            var u = new h(l.default, {
                CONNECTION_OPEN: d,
                OVERLAY_INITIALIZE: d,
                CHANNEL_COLLAPSE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    r[t] ? delete r[t] : r[t] = !0, r = {
                        ...r
                    }
                }
            })
        }
    }
]);