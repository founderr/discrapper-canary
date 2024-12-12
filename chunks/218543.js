var i = r(47120);
var a = r(956067),
    s = r(586444);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = () => {};
r.g.__timingFunction = () => performance.now();
let u = null == r.g.__getTotalRequireTime ? () => 0 : () => r.g.__getTotalRequireTime();
function c(e, n) {
    if (0 === n || null == n) return null;
    let r = n - e;
    return r < 0 || r > 1000000 ? null : r;
}
class d {
    get start() {
        return this.start_;
    }
    get end() {
        return this.end_;
    }
    hasStart() {
        return this.start_ > 0;
    }
    hasData() {
        return this.end_ > 0;
    }
    recordStart() {
        0 === this.start_ && this.recordStart_(), a.Z.mark(this.emoji, 'Start '.concat(this.name)), l();
    }
    recordStart_() {
        (this.start_ = Date.now()), (this.startNumImports = s.dp()), (this.startImportTime = u());
    }
    recordEnd() {
        0 === this.end_ && 0 !== this.start_ ? (this.recordEnd_(), a.Z.mark(this.emoji, 'Finish '.concat(this.name), this.end_ - this.start_)) : a.Z.mark(this.emoji, 'Finish '.concat(this.name)), l();
    }
    recordEnd_() {
        (this.end_ = Date.now()), (this.endNumImports = s.dp()), (this.endImportTime = u());
    }
    set(e, n) {
        0 === this.start_ && ((this.start_ = e), (this.end_ = e + n), (this.endNumImports = s.dp()), (this.endImportTime = u())), a.Z.mark(this.emoji, this.name, n), l();
    }
    serializeStart(e) {
        return c(e, this.start_);
    }
    serializeEnd(e) {
        return c(e, this.end_);
    }
    measure(e) {
        if (this.start_ > 0) return a.Z.time(this.emoji, this.name, e);
        this.recordStart_();
        let n = a.Z.time(this.emoji, this.name, e);
        return this.recordEnd_(), l(), n;
    }
    async measureAsync(e) {
        if (this.start_ > 0) return a.Z.timeAsync(this.emoji, this.name, e);
        this.recordStart_();
        let n = await a.Z.timeAsync(this.emoji, this.name, e);
        return this.recordEnd_(), l(), n;
    }
    async measureAsyncWithoutNesting(e) {
        if (this.start_ > 0) return a.Z.timeAsync(this.emoji, this.name, e);
        this.recordStart_();
        let n = Date.now();
        a.Z.mark(this.emoji, 'Start '.concat(this.name));
        let r = await e();
        return a.Z.mark(this.emoji, 'Finish '.concat(this.name), Date.now() - n), this.recordEnd_(), l(), r;
    }
    constructor(e, n) {
        o(this, 'emoji', void 0), o(this, 'name', void 0), o(this, 'start_', void 0), o(this, 'startNumImports', void 0), o(this, 'startImportTime', void 0), o(this, 'end_', void 0), o(this, 'endNumImports', void 0), o(this, 'endImportTime', void 0), (this.emoji = e), (this.name = n), (this.start_ = 0), (this.startNumImports = 0), (this.startImportTime = 0), (this.end_ = 0), (this.endNumImports = 0), (this.endImportTime = 0);
    }
}
class f {
    get time() {
        return this.time_;
    }
    record() {
        0 === this.time_ ? ((this.time_ = Date.now()), (this.numImports = s.dp()), (this.importTime = u()), a.Z.mark(this.emoji, this.name)) : !this.onlyOnce && a.Z.mark(this.emoji, this.name), l();
    }
    hasData() {
        return this.time_ > 0;
    }
    serialize(e) {
        return c(e, this.time_);
    }
    constructor(e, n, r = !1) {
        o(this, 'emoji', void 0), o(this, 'name', void 0), o(this, 'onlyOnce', void 0), o(this, 'time_', void 0), o(this, 'numImports', void 0), o(this, 'importTime', void 0), (this.emoji = e), (this.name = n), (this.onlyOnce = r), (this.time_ = 0), (this.numImports = null), (this.importTime = 0);
    }
}
class _ {
    get time() {
        return this.time_;
    }
    record() {
        0 === this.time_ && (this.time_ = u());
    }
    constructor() {
        o(this, 'time_', 0);
    }
}
class h {
    constructor() {
        o(this, 'loadIndex', new d('\u2757', 'Load index.tsx')),
            o(this, 'loadFastConnectNativeModule', new d('\uD83D\uDCBE', 'Load fast_connect native module')),
            o(this, 'beginFastConnect', new d('\uD83C\uDF10', 'Fast Connect IDENTIFY')),
            o(this, 'loadImports', new d('\uD83C\uDFC3', 'Load Imports')),
            o(this, 'init', new d('\uD83C\uDFC3', 'Initial Initialization')),
            o(this, 'loadStorage', new d('\uD83D\uDCBE', 'Load Storage')),
            o(this, 'parseStorage', new d('\uD83D\uDCBE', 'Parse Storage')),
            o(this, 'loadMiniCache', new d('\uD83D\uDCBE', 'Load Mini Cache')),
            o(this, 'fetchGuildCache', new d('\uD83D\uDCBE', 'Fetch Guild Cache')),
            o(this, 'fetchGuildChannelsCache', new d('\uD83D\uDCBE', 'Fetch Initial Guild Channels Cache')),
            o(this, 'loadCachedMessages', new d('\uD83D\uDCBE', 'Load Cached Messages')),
            o(this, 'renderApp', new f('\uD83C\uDFA8', 'First React Render')),
            o(this, 'renderAppEffect', new f('\uD83C\uDFA8', 'First React Render useEffect')),
            o(this, 'renderMessages', new f('\uD83C\uDFA8', 'React Render Messages', !0)),
            o(this, 'renderMessagesWithCache', new f('\uD83C\uDFA8', 'React Render Cached Messages', !0)),
            o(this, 'firstRowGenerator', new d('\uD83C\uDFA8', 'RowGenerator.generate()')),
            o(this, 'renderLatestMessages', new f('\uD83C\uDFA8', 'React Render Latest Messages')),
            o(this, 'initialGuild', new d('\uD83C\uDF10', 'Initial Guild')),
            o(this, 'loadLazyCache', new d('\uD83D\uDCBE', 'Load Lazy Cache')),
            o(this, 'fetchLazyCache', new d('\uD83D\uDCBE', 'Fetch Lazy Cache')),
            o(this, 'parseLazyCache', new d('\uD83D\uDCBE', 'Parse Lazy Cache')),
            o(this, 'fetchStaleChannels', new d('\uD83D\uDCBE', 'Fetch Stale Channels')),
            o(this, 'deserializeCache', new d('\uD83D\uDCBE', 'Deserialize Cache')),
            o(this, 'dispatchLazyCache', new d('\uD83D\uDCBE', 'Dispatch Lazy Cache')),
            o(this, 'parseReady', new d('\uD83C\uDF10', 'Parse READY')),
            o(this, 'ready', new d('\uD83C\uDF10', 'READY')),
            o(this, 'hydrateReady', new d('\uD83C\uDF10', 'Hydrate READY')),
            o(this, 'dispatchReady', new d('\uD83C\uDF10', 'Dispatch READY')),
            o(this, 'parseReadySupplemental', new d('\uD83C\uDF10', 'Parse READY Supplemental')),
            o(this, 'readySupplemental', new d('\uD83C\uDF10', 'READY Supplemental')),
            o(this, 'hydrateReadySupplemental', new d('\uD83C\uDF10', 'Hydrate READY Supplemental')),
            o(this, 'dispatchReadySupplemental', new d('\uD83C\uDF10', 'Dispatch READY Supplemental')),
            o(this, 'fetchMessages', new d('\uD83C\uDF10', 'Fetch messages')),
            o(this, 'dispatchMessages', new d('\uD83C\uDF10', 'Dispatch messages')),
            o(this, 'imports', {
                polyfillsEnd: new _(),
                sentryEnd: new _(),
                appStateChangeStart: new _(),
                appStateChangeEnd: new _(),
                loadMiniCacheStart: new _(),
                loadStorageStart: new _(),
                loadStorageEnd: new _()
            });
    }
}
class p extends h {
    setTTICallback(e) {
        l = () => {
            !0 === e() && (l = () => !1);
        };
    }
    setCacheInfo(e) {
        this.cacheInfo = e;
    }
    setInterstitial(e) {
        (this.interstitial = e), l();
    }
    addLocalMessages(e, n) {
        for (this.cachedChannelCounts.set(e, n); this.cachedChannelCounts.size > 100; ) {
            let e = this.cachedChannelCounts.keys();
            this.cachedChannelCounts.delete(e.next().value);
        }
    }
    attachReadyPayloadProperties(e) {
        this.readyProperties = e;
    }
    appStateChanged(e) {
        'active' === e && (null == this.firstAppActiveTime && (this.firstAppActiveTime = Date.now()), (this.wasEverActive = !0)), null == this.readyProperties.num_guilds && (this.didBackgroundApp = this.didBackgroundApp || 'active' !== e);
    }
    recordRender(e, n) {
        this.renderMessages.record(), (n || e > 0) && this.renderMessagesWithCache.record(), n && this.renderLatestMessages.record();
    }
    recordMessageRender(e, n, i, a) {
        let { default: s } = r(709054);
        if (!this.renderLatestMessages.hasData()) {
            if ((this.renderMessages.record(), n.length > 0 && this.renderMessagesWithCache.record(), i)) {
                if ((this.renderLatestMessages.record(), null == this.cachedChannelId)) {
                    this.messageCacheMissingReason = 'no-cache';
                    return;
                }
                if (this.cachedChannelId !== e) {
                    this.messageCacheMissingReason = 'channel-changed';
                    return;
                }
                if (null == this.cachedMessageIds || 0 === this.cachedMessageIds.length) {
                    this.messageCacheMissingReason = 'no-cache';
                    return;
                }
                if (0 === n.length) {
                    this.messageCacheMissingReason = 'channel-empty';
                    return;
                }
                if (e === this.cachedChannelId) {
                    var o;
                    let r = this.cachedMessageIds.sort(s.compare).reverse()[0],
                        i = n.sort(s.compare).reverse()[0];
                    this.messageCacheAgeSeconds = Math.floor((s.extractTimestamp(i) - s.extractTimestamp(r)) / 1000);
                    let l = n.filter((e) => {
                        var n;
                        return null === (n = this.cachedMessageIds) || void 0 === n ? void 0 : n.includes(e);
                    }).length;
                    (this.messageCacheCount = null !== (o = this.cachedChannelCounts.get(e)) && void 0 !== o ? o : null), (this.messageCacheHavingCount = l), (this.messageCacheMissingCount = n.length - l), (this.messageRenderFullCount = n.length), (this.messageRenderCachedCount = this.cachedMessageIds.length), (this.messageRenderHasMoreAfter = a);
                }
            } else (null == this.cachedChannelId || e === this.cachedChannelId) && ((this.cachedChannelId = e), (this.cachedMessageIds = n), n.length > 0 && (this.messageCacheMissingReason = null));
        }
    }
    getStartTime(e) {
        return this.extraProperties.headless_task_ran && null != this.firstAppActiveTime ? this.firstAppActiveTime : null == e || e <= 0 ? this.loadIndex.start : e;
    }
    processNativeLogs(e, n) {
        let r = this.getStartTime(n);
        for (let n of e)
            switch (n.label) {
                case 'Finish MainApplication.initialize()':
                    this.extraProperties.time_main_application_initialize_end = c(r, n.timestamp);
                    break;
                case 'GET_REACT_INSTANCE_MANAGER_START':
                    this.extraProperties.time_get_react_instance_manager_start = c(r, n.timestamp);
                    break;
                case 'GET_REACT_INSTANCE_MANAGER_END':
                    this.extraProperties.time_get_react_instance_manager_end = c(r, n.timestamp);
                    break;
                case 'PROCESS_PACKAGES_START':
                    this.extraProperties.time_process_packages_start = c(r, n.timestamp);
                    break;
                case 'PROCESS_PACKAGES_END':
                    this.extraProperties.time_process_packages_end = c(r, n.timestamp);
                    break;
                case 'CREATE_CATALYST_INSTANCE_START':
                    this.extraProperties.time_create_catalyst_instance_start = c(r, n.timestamp);
                    break;
                case 'CREATE_CATALYST_INSTANCE_END':
                    this.extraProperties.time_create_catalyst_instance_end = c(r, n.timestamp);
                    break;
                case 'CREATE_UI_MANAGER_MODULE_START':
                    this.extraProperties.time_create_ui_manager_module_start = c(r, n.timestamp);
                    break;
                case 'CREATE_UI_MANAGER_MODULE_END':
                    this.extraProperties.time_create_ui_manager_module_end = c(r, n.timestamp);
                    break;
                case 'REACT_BRIDGE_LOADING_START':
                    this.extraProperties.time_react_bridge_loading_start = c(r, n.timestamp);
                    break;
                case 'REACT_BRIDGE_LOADING_END':
                    this.extraProperties.time_react_bridge_loading_end = c(r, n.timestamp);
                    break;
                case 'CacheStorage Init Start':
                    this.extraProperties.time_init_native_storage_start = c(r, n.timestamp);
                    break;
                case 'CacheStorage Init End':
                    this.extraProperties.time_init_native_storage_end = c(r, n.timestamp);
                    break;
                case 'ChatModule.updateRows() Start':
                    if (null != this.extraProperties.time_first_native_message_render_start) continue;
                    this.extraProperties.time_first_native_message_render_start = c(r, n.timestamp);
                    break;
                case 'ChatModule.updateRows() Finish':
                    if (null != this.extraProperties.time_first_native_message_render_end) continue;
                    this.extraProperties.time_first_native_message_render_end = c(r, n.timestamp);
            }
    }
    serializeTTITracker(e) {
        var n, i, s, o, l, u;
        let c = this.getStartTime(e),
            d = r(392711)(a.Z.logGroups['0'].logs)
                .filter((e) => e.log.startsWith('Require '))
                .map((e) => {
                    var n;
                    return null !== (n = e.delta) && void 0 !== n ? n : 0;
                })
                .sum();
        return {
            ...this.extraProperties,
            time_load_index_start: this.loadIndex.serializeStart(c),
            time_load_index_end: this.loadIndex.serializeEnd(c),
            time_begin_fast_connect_start: this.beginFastConnect.serializeStart(c),
            time_begin_fast_connect_end: this.beginFastConnect.serializeEnd(c),
            time_load_imports_start: this.loadImports.serializeStart(c),
            time_load_imports_end: this.loadImports.serializeEnd(c),
            time_init_start: this.init.serializeStart(c),
            time_init_end: this.init.serializeEnd(c),
            time_load_storage_start: this.loadStorage.serializeStart(c),
            time_load_storage_end: this.loadStorage.serializeEnd(c),
            time_parse_storage_start: this.parseStorage.serializeStart(c),
            time_parse_storage_end: this.parseStorage.serializeEnd(c),
            time_load_mini_cache_start: this.loadMiniCache.serializeStart(c),
            time_load_mini_cache_end: this.loadMiniCache.serializeEnd(c),
            time_fetch_initial_guild_start: this.fetchGuildCache.serializeStart(c),
            time_fetch_initial_guild_end: this.fetchGuildCache.serializeEnd(c),
            time_load_cached_messages_start: this.loadCachedMessages.serializeStart(c),
            time_load_cached_messages_end: this.loadCachedMessages.serializeEnd(c),
            time_render_app_start: this.renderApp.serialize(c),
            time_render_app_effect_start: this.renderAppEffect.serialize(c),
            time_render_messages_end: this.renderMessages.serialize(c),
            time_render_messages_with_cache_end: this.renderMessagesWithCache.serialize(c),
            time_render_latest_messages_end: this.renderLatestMessages.serialize(c),
            time_first_row_generator_start: this.firstRowGenerator.serializeStart(c),
            time_first_row_generator_end: this.firstRowGenerator.serializeEnd(c),
            time_initial_guild_start: this.initialGuild.serializeStart(c),
            time_initial_guild_end: this.initialGuild.serializeEnd(c),
            time_load_lazy_cache_start: this.loadLazyCache.serializeStart(c),
            time_load_lazy_cache_end: this.loadLazyCache.serializeEnd(c),
            time_fetch_lazy_cache_start: this.fetchLazyCache.serializeStart(c),
            time_fetch_lazy_cache_end: this.fetchLazyCache.serializeEnd(c),
            time_parse_lazy_cache_start: this.parseLazyCache.serializeStart(c),
            time_parse_lazy_cache_end: this.parseLazyCache.serializeEnd(c),
            time_fetch_stale_channels_start: this.fetchStaleChannels.serializeStart(c),
            time_fetch_stale_channels_end: this.fetchStaleChannels.serializeEnd(c),
            time_deserialize_cache_start: this.deserializeCache.serializeStart(c),
            time_deserialize_cache_end: this.deserializeCache.serializeEnd(c),
            time_dispatch_lazy_cache_start: this.dispatchLazyCache.serializeStart(c),
            time_dispatch_lazy_cache_end: this.dispatchLazyCache.serializeEnd(c),
            time_parse_ready_start: this.parseReady.serializeStart(c),
            time_parse_ready_end: this.parseReady.serializeEnd(c),
            time_ready_start: this.ready.serializeStart(c),
            time_ready_end: this.ready.serializeEnd(c),
            time_hydrate_ready_start: this.hydrateReady.serializeStart(c),
            time_hydrate_ready_end: this.hydrateReady.serializeEnd(c),
            time_dispatch_ready_start: this.dispatchReady.serializeStart(c),
            time_dispatch_ready_end: this.dispatchReady.serializeEnd(c),
            time_parse_ready_supplemental_start: this.parseReadySupplemental.serializeStart(c),
            time_parse_ready_supplemental_end: this.parseReadySupplemental.serializeEnd(c),
            time_ready_supplemental_start: this.readySupplemental.serializeStart(c),
            time_ready_supplemental_end: this.readySupplemental.serializeEnd(c),
            time_hydrate_ready_supplemental_start: this.hydrateReadySupplemental.serializeStart(c),
            time_hydrate_ready_supplemental_end: this.hydrateReadySupplemental.serializeEnd(c),
            time_dispatch_ready_supplemental_start: this.dispatchReadySupplemental.serializeStart(c),
            time_dispatch_ready_supplemental_end: this.dispatchReadySupplemental.serializeEnd(c),
            time_fetch_messages_start: this.fetchMessages.serializeStart(c),
            time_fetch_messages_end: this.fetchMessages.serializeEnd(c),
            time_dispatch_messages_start: this.dispatchMessages.serializeStart(c),
            time_dispatch_messages_end: this.dispatchMessages.serializeEnd(c),
            time_load_fast_connect_native_module_start: this.loadFastConnectNativeModule.serializeStart(c),
            time_load_fast_connect_native_module_end: this.loadFastConnectNativeModule.serializeEnd(c),
            identify_total_server_duration_ms: this.readyProperties.identify_total_server_duration_ms,
            identify_api_duration_ms: this.readyProperties.identify_api_duration_ms,
            identify_guilds_duration_ms: this.readyProperties.identify_guilds_duration_ms,
            ready_compressed_byte_size: this.readyProperties.compressed_byte_size,
            ready_uncompressed_byte_size: this.readyProperties.uncompressed_byte_size,
            identify_compressed_byte_size: this.readyProperties.identify_compressed_byte_size,
            identify_uncompressed_byte_size: this.readyProperties.identify_uncompressed_byte_size,
            ready_compression_algorithm: this.readyProperties.compression_algorithm,
            ready_packing_algorithm: this.readyProperties.packing_algorithm,
            ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms,
            is_reconnect: this.readyProperties.is_reconnect,
            is_fast_connect: this.readyProperties.is_fast_connect,
            did_force_clear_guild_hashes: this.readyProperties.did_force_clear_guild_hashes,
            num_guilds: this.readyProperties.num_guilds,
            num_changed_guild_channels: this.readyProperties.num_guild_channels,
            ready_presences_size: this.readyProperties.presences_size,
            ready_users_size: this.readyProperties.users_size,
            ready_read_states_size: this.readyProperties.read_states_size,
            ready_private_channels_size: this.readyProperties.private_channels_size,
            ready_user_guild_settings_size: this.readyProperties.user_guild_settings_size,
            ready_relationships_size: this.readyProperties.relationships_size,
            ready_experiments_size: this.readyProperties.experiments_size,
            ready_user_settings_size: this.readyProperties.user_settings_size,
            ready_remaining_data_size: this.readyProperties.remaining_data_size,
            ready_guild_channels_size: this.readyProperties.guild_channels_size,
            ready_guild_members_size: this.readyProperties.guild_members_size,
            ready_guild_presences_size: this.readyProperties.guild_presences_size,
            ready_guild_roles_size: this.readyProperties.guild_roles_size,
            ready_guild_emojis_size: this.readyProperties.guild_emojis_size,
            ready_guild_remaining_data_size: this.readyProperties.guild_remaining_data_size,
            ready_guild_threads_size: this.readyProperties.guild_threads_size,
            ready_guild_stickers_size: this.readyProperties.guild_stickers_size,
            ready_guild_events_size: this.readyProperties.guild_events_size,
            ready_guild_features_size: this.readyProperties.guild_features_size,
            ready_size_metrics_duration_ms: this.readyProperties.size_metrics_duration_ms,
            had_cache_at_startup: this.readyProperties.had_cache_at_startup,
            used_cache_at_startup: this.readyProperties.used_cache_at_startup,
            was_authenticated: this.wasAuthenticated,
            did_background_app: this.didBackgroundApp,
            interstitial: this.interstitial,
            message_cache_missing_reason: this.messageCacheMissingReason,
            message_cache_age_seconds: this.messageCacheAgeSeconds,
            message_cache_count: this.messageCacheCount,
            message_cache_having_count: this.messageCacheHavingCount,
            message_cache_missing_count: this.messageCacheMissingCount,
            message_render_full_count: this.messageRenderFullCount,
            message_render_cached_count: this.messageRenderCachedCount,
            message_render_has_more_after: this.messageRenderHasMoreAfter,
            duration_major_js_imports: this.loadImports.end - this.loadIndex.start + d,
            cache_num_guilds: null === (n = this.cacheInfo) || void 0 === n ? void 0 : n.guilds,
            cache_num_private_channels: null === (i = this.cacheInfo) || void 0 === i ? void 0 : i.privateChannels,
            cache_num_basic_channels: null === (s = this.cacheInfo) || void 0 === s ? void 0 : s.basicChannels,
            cache_num_basic_channels_stale: null === (o = this.cacheInfo) || void 0 === o ? void 0 : o.basicChannelsStale,
            cache_num_full_channels: null === (l = this.cacheInfo) || void 0 === l ? void 0 : l.fullChannels,
            cache_num_full_channel_guilds: null === (u = this.cacheInfo) || void 0 === u ? void 0 : u.fullChannelGuilds,
            num_imports_at_load_index_end: this.loadIndex.endNumImports,
            num_imports_at_init_end: this.init.endNumImports,
            num_imports_at_load_mini_cache_end: this.loadMiniCache.endNumImports,
            num_imports_at_render_app_start: this.renderApp.numImports,
            num_imports_at_render_app_effect_start: this.renderAppEffect.numImports,
            num_imports_at_render_messages_end: this.renderMessages.numImports,
            num_imports_at_render_messages_with_cache_end: this.renderMessagesWithCache.numImports,
            num_imports_at_render_latest_messages_end: this.renderLatestMessages.numImports,
            num_imports_at_load_lazy_cache_start: this.loadLazyCache.startNumImports,
            num_imports_at_load_lazy_cache_end: this.loadLazyCache.endNumImports,
            num_imports_at_ready_start: this.ready.startNumImports,
            num_imports_at_ready_end: this.ready.endNumImports,
            num_imports_at_ready_supplemental_start: this.readySupplemental.startNumImports,
            num_imports_at_ready_supplemental_end: this.readySupplemental.endNumImports,
            duration_imports_at_load_index_start: Math.ceil(this.loadIndex.startImportTime),
            duration_imports_at_load_index_end: Math.ceil(this.loadIndex.endImportTime),
            duration_imports_at_init_end: Math.ceil(this.init.endImportTime),
            duration_imports_at_load_mini_cache_end: Math.ceil(this.loadMiniCache.endImportTime),
            duration_imports_at_render_app_start: Math.ceil(this.renderApp.importTime),
            duration_imports_at_render_app_effect_start: Math.ceil(this.renderAppEffect.importTime),
            duration_imports_at_render_messages_end: Math.ceil(this.renderMessages.importTime),
            duration_imports_at_render_messages_with_cache_end: Math.ceil(this.renderMessagesWithCache.importTime),
            duration_imports_at_render_latest_messages_end: Math.ceil(this.renderLatestMessages.importTime),
            duration_imports_at_load_lazy_cache_start: Math.ceil(this.loadLazyCache.startImportTime),
            duration_imports_at_load_lazy_cache_end: Math.ceil(this.loadLazyCache.endImportTime),
            duration_imports_at_ready_start: Math.ceil(this.ready.startImportTime),
            duration_imports_at_ready_end: Math.ceil(this.ready.endImportTime),
            duration_imports_at_ready_supplemental_start: Math.ceil(this.readySupplemental.startImportTime),
            duration_imports_at_ready_supplemental_end: Math.ceil(this.readySupplemental.endImportTime),
            duration_imports_at_polyfills_end: Math.ceil(this.imports.polyfillsEnd.time),
            duration_imports_at_sentry_end: Math.ceil(this.imports.sentryEnd.time),
            duration_imports_at_fast_connect_start: Math.ceil(this.beginFastConnect.startImportTime),
            duration_imports_at_fast_connect_end: Math.ceil(this.beginFastConnect.endImportTime),
            duration_imports_at_app_state_change_start: Math.ceil(this.imports.appStateChangeStart.time),
            duration_imports_at_app_state_change_end: Math.ceil(this.imports.appStateChangeEnd.time),
            duration_imports_at_load_mini_cache_start: Math.ceil(this.imports.loadMiniCacheStart.time),
            duration_imports_at_load_storage_start: Math.ceil(this.imports.loadStorageStart.time),
            duration_imports_at_load_storage_end: Math.ceil(this.imports.loadStorageEnd.time)
        };
    }
    constructor(...e) {
        super(...e), o(this, 'readyProperties', {}), o(this, 'didBackgroundApp', !1), o(this, 'wasEverActive', !1), o(this, 'wasAuthenticated', !1), o(this, 'interstitial', null), o(this, 'cachedChannelCounts', new Map()), o(this, 'cachedChannelId', null), o(this, 'cachedMessageIds', null), o(this, 'messageCacheMissingReason', 'never-loaded'), o(this, 'messageCacheAgeSeconds', null), o(this, 'messageCacheCount', null), o(this, 'messageCacheHavingCount', null), o(this, 'messageCacheMissingCount', null), o(this, 'messageRenderFullCount', null), o(this, 'messageRenderCachedCount', null), o(this, 'messageRenderHasMoreAfter', null), o(this, 'firstAppActiveTime', null), o(this, 'cacheInfo', null), o(this, 'extraProperties', {});
    }
}
n.Z = new p();
