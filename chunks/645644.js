n(47120), n(411104);
var r,
    i,
    a = n(259443),
    s = n(379649),
    o = n(570140),
    l = n(593472),
    u = n(147913),
    c = n(579806),
    d = n(581567),
    f = n(594190),
    _ = n(449224),
    h = n(808506),
    p = n(237997),
    m = n(626135),
    g = n(998502),
    E = n(830917),
    v = n(554174),
    I = n(938038),
    S = n(981631),
    T = n(987650);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let y = new a.Y('OverlayUsageStatsManager');
y.verbose = () => {};
class A {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[T.bv.Viewed],
            r = this.actions[T.bv.Clicked];
        return 0 === n && 0 === r
            ? null
            : {
                  event_uuid: t,
                  notification_type: e,
                  viewed_count: n,
                  clicked_count: r
              };
    }
    constructor() {
        b(this, 'actions', {
            [T.bv.Viewed]: 0,
            [T.bv.Clicked]: 0
        });
    }
}
class N {
    static makeEmptyGroupAnalytics() {
        return {
            [T.Vk.Nudge]: 0,
            [T.Vk.TextChat]: 0,
            [T.Vk.VoiceCall]: 0,
            [T.Vk.Activity]: 0,
            [T.Vk.Clips]: 0,
            [T.Vk.Other]: 0
        };
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) {
            y.error('NotificationCounter: Unknown notification action: '.concat(t));
            return;
        }
        let r = (0, T.YK)(e);
        if (!(r in n)) {
            y.error('NotificationCounter: Unknown notification action: '.concat(e));
            return;
        }
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        if (null == i) {
            y.error('NotificationCounter: Unknown notification type: '.concat(e));
            return;
        }
        i.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[T.bv.Viewed],
            t = this.groupCounters[T.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[T.bv.Viewed],
            notices_clicked: this.actionCounters[T.bv.Clicked],
            notice_nudge_viewed: e[T.Vk.Nudge],
            notice_text_chat_viewed: e[T.Vk.TextChat],
            notice_voice_call_viewed: e[T.Vk.VoiceCall],
            notice_activity_viewed: e[T.Vk.Activity],
            notice_clips_viewed: e[T.Vk.Clips],
            notice_other_viewed: e[T.Vk.Other],
            notice_nudge_clicked: t[T.Vk.Nudge],
            notice_text_chat_clicked: t[T.Vk.TextChat],
            notice_voice_call_clicked: t[T.Vk.VoiceCall],
            notice_activity_clicked: t[T.Vk.Activity],
            notice_clips_clicked: t[T.Vk.Clips],
            notice_other_clicked: t[T.Vk.Other]
        };
    }
    getCounterAnalytics(e) {
        return Object.entries(this.counters)
            .map((t) => {
                let [n, r] = t;
                return r.getAnalytics(n, e);
            })
            .filter((e) => null != e);
    }
    constructor() {
        b(this, 'actionCounters', {
            [T.bv.Viewed]: 0,
            [T.bv.Clicked]: 0
        }),
            b(this, 'groupCounters', {
                [T.bv.Viewed]: N.makeEmptyGroupAnalytics(),
                [T.bv.Clicked]: N.makeEmptyGroupAnalytics()
            }),
            b(this, 'counters', {
                [T.n0.NewsNudge]: new A(),
                [T.n0.WelcomeNudge]: new A(),
                [T.n0.TextChat]: new A(),
                [T.n0.ActivityUserJoin]: new A(),
                [T.n0.ActivityInvite]: new A(),
                [T.n0.IncomingCall]: new A(),
                [T.n0.GoLiveNudge]: new A(),
                [T.n0.GoLiveNonVoiceNudge]: new A(),
                [T.n0.OverlayCrashed]: new A(),
                [T.n0.ClipsReminderNotification]: new A(),
                [T.n0.ClipsNotification]: new A(),
                [T.n0.KeybindIndicatorsNotification]: new A(),
                [T.n0.SendGameInvitesNotification]: new A()
            });
    }
}
((i = r || (r = {}))[(i.Voice = 0)] = 'Voice'), (i[(i.Text = 1)] = 'Text');
class C {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new s.G9(),
            pinned: !1
        };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case S.Odu.VOICE:
                return this.getByType(0);
            case S.Odu.TEXT:
                return this.getByType(1);
            default:
                return null;
        }
    }
    getAnalytics() {
        let e = this.types[0],
            t = this.types[1];
        return {
            widget_voice_pin_toggle_count: e.pinnedToggledCount,
            widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
            widget_voice_pinned: e.pinned,
            widget_text_pin_toggle_count: t.pinnedToggledCount,
            widget_text_visible_duration: t.visibleDuration.elapsed().asMilliseconds(),
            widget_text_pinned: t.pinned
        };
    }
    constructor() {
        b(this, 'types', {
            0: C.makeEmptyAnalytics(),
            1: C.makeEmptyAnalytics()
        });
    }
}
class R {
    update() {
        let e = this.game,
            t = g.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                y.error('ScreenTypeAnalytics: Unknown screen type: '.concat(t), t);
                return;
            }
            this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), (this.lastscreenType = t);
        }
    }
    getAnalytics() {
        var e, t;
        let n = (e) => this.counters[e].elapsed().asMilliseconds(),
            r = {
                [l.Jx.UNKNOWN]: n(l.Jx.UNKNOWN),
                [l.Jx.WINDOWED]: n(l.Jx.WINDOWED),
                [l.Jx.MAXIMIZED]: n(l.Jx.MAXIMIZED),
                [l.Jx.BORDERLESS_FULLSCREEN]: n(l.Jx.BORDERLESS_FULLSCREEN),
                [l.Jx.FULLSCREEN]: n(l.Jx.FULLSCREEN),
                [l.Jx.MINIMIZED]: n(l.Jx.MINIMIZED)
            },
            i = Object.entries(r).sort((e, t) => {
                let [n, r] = e,
                    [i, a] = t;
                return a - r;
            })[0],
            a = parseInt(i[0], 10),
            s = isNaN(a) ? l.Jx.UNKNOWN : a;
        isNaN(a) && y.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(i), r);
        let o = I.c.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
        I.c.setGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id, s);
        let u = {
            screentype_unknown_duration: r[l.Jx.UNKNOWN],
            screentype_windowed_duration: r[l.Jx.WINDOWED],
            screentype_maximized_duration: r[l.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: r[l.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: r[l.Jx.FULLSCREEN],
            screentype_minimized_duration: r[l.Jx.MINIMIZED]
        };
        return {
            ...u,
            screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
            screentype_initial: l.Jx[this.game.fullscreenType],
            screentype_most_used: l.Jx[s],
            screentype_most_used_previous: null == o ? null : l.Jx[o],
            game_display_mode_is_adjustment_supported: g.ZP.GameDisplayModeIsGameSupported(this.game.name)
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        b(this, 'game', void 0),
            b(this, 'counters', void 0),
            b(this, 'lastscreenType', void 0),
            b(this, 'updateScreenInterval', void 0),
            (this.game = e),
            (this.counters = {
                [l.Jx.UNKNOWN]: new s.G9(),
                [l.Jx.WINDOWED]: new s.G9(),
                [l.Jx.MAXIMIZED]: new s.G9(),
                [l.Jx.BORDERLESS_FULLSCREEN]: new s.G9(),
                [l.Jx.FULLSCREEN]: new s.G9(),
                [l.Jx.MINIMIZED]: new s.G9()
            }),
            (this.lastscreenType = void 0),
            this.update(),
            (this.updateScreenInterval = setInterval(() => this.update(), 10000));
    }
}
class O {
    static get debug() {
        return {
            gamesByPid: O.gamesByPid,
            gamesByName: O.gamesByName
        };
    }
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    static getGameName(e) {
        var t, n;
        return null !== (n = null !== (t = e.name) && void 0 !== t ? t : e.id) && void 0 !== n ? n : null;
    }
    static ignoreGame(e) {
        var t;
        return null !== (t = e.isLauncher) && void 0 !== t && t;
    }
    static create(e) {
        let t = O.getGameName(e);
        if (O.ignoreGame(e) || null == t) return null;
        let n = new O({ ...e });
        return (n.gameConcurrentGameCount = Object.values(O.gamesByPid).length), (O.gamesByPid[e.pid] = n), (O.gamesByName[t] = n), n;
    }
    static getByName(e) {
        return null == e ? null : O.gamesByName[e];
    }
    static getByPid(e) {
        return O.gamesByPid[e];
    }
    static async destroy(e) {
        let t = O.getGameName(e);
        if (O.ignoreGame(e) || null == t) return;
        let n = O.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (m.default.track(S.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) m.default.track(S.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            y.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), t), delete O.gamesByPid[e.pid];
        }
        delete O.gamesByName[t];
    }
    async getAnalytics() {
        var e, t, n, r, i, a, s;
        let o = {
                setting_is_enabled: h.Z.enabled,
                setting_method: null == this.overlayStatus ? null : T.gl[this.overlayStatus.overlayMethod],
                setting_display_user: p.Z.getDisplayUserMode(),
                setting_display_name: p.Z.getDisplayNameMode(),
                setting_avatar_size: p.Z.getAvatarSizeMode(),
                setting_notification_position: p.Z.getNotificationPositionMode(),
                setting_chat_notification: p.Z.getTextChatNotificationMode()
            },
            l = (0, f.jk)(this.game),
            u = (0, d.G8)(this.game);
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: 3,
                ...this.notificationAnalytics.getAnalytics(),
                ...this.widgetAnalytics.getAnalytics(),
                ...this.screenAnalytics.getAnalytics(),
                ...o,
                overlay_status_game_enabled: l.enabled,
                overlay_status_game_source: l.source,
                game_name: null !== (n = u.gameName) && void 0 !== n ? n : null,
                game_id: null !== (r = u.gameId) && void 0 !== r ? r : null,
                game_exe: null !== (i = u.exe) && void 0 !== i ? i : null,
                game_elevated: this.game.elevated,
                game_is_launcher: null !== (a = this.game.isLauncher) && void 0 !== a && a,
                game_duration: this.gameTimer.elapsed().asMilliseconds(),
                game_focused_duration: this.gameFocusedTimer.elapsed().asMilliseconds(),
                game_focused_change_count: this.gameFocusChangedCount,
                game_concurrent_game_count: this.gameConcurrentGameCount,
                ui_unlocked_duration: this.unlockedTimer.elapsed().asMilliseconds(),
                ui_unlocked_count: this.uiUnlockedCount,
                ui_locked_count: this.uiLockedCount,
                soundboard_shown_duration: this.soundboardShownTimer.elapsed().asMilliseconds(),
                soundboard_shown_count: this.soundboardShownCount,
                soundboard_keep_open_count: this.soundboardKeepOpenCount,
                hardware_display_count: null !== (s = await (null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.hardware) || void 0 === t ? void 0 : null === (e = t.getDisplayCount) || void 0 === e ? void 0 : e.call(t))) && void 0 !== s ? s : null,
                message_ack_count: this.overlayMessageAckCount,
                message_created_count: this.overlayMessageCreateCount,
                desktop_message_ack_count: this.desktopMessageAckCount,
                desktop_message_created_count: this.desktopMessageCreateCount,
                desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                desktop_focused_change_count: this.desktopFocusChangedCount,
                rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                mute_toggled_count: this.muteToggledCount,
                overlay_successfully_shown: this._successfullyShown
            },
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
        };
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount);
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(O.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(O.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(O.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== O.desktopMainWindowHasFocus) {
            for (let t of Object.values(O.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
            O.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(O.gamesByPid))
            switch (e) {
                case 'ack':
                    ++t.desktopMessageAckCount;
                    break;
                case 'created':
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(O.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        b(this, 'game', void 0), b(this, 'uuid', void 0), b(this, 'overlayStatus', void 0), b(this, 'notificationAnalytics', void 0), b(this, 'widgetAnalytics', void 0), b(this, 'screenAnalytics', void 0), b(this, 'uiUnlockedCount', void 0), b(this, 'uiLockedCount', void 0), b(this, 'gameFocusChangedCount', void 0), b(this, 'gameConcurrentGameCount', void 0), b(this, 'overlayMessageAckCount', void 0), b(this, 'overlayMessageCreateCount', void 0), b(this, 'gameTimer', void 0), b(this, 'gameFocusedTimer', void 0), b(this, 'unlockedTimer', void 0), b(this, 'rtcConnectionTimer', void 0), b(this, 'desktopFocusedTimer', void 0), b(this, 'desktopFocusChangedCount', void 0), b(this, 'desktopMessageAckCount', void 0), b(this, 'desktopMessageCreateCount', void 0), b(this, 'soundboardShownTimer', void 0), b(this, 'soundboardShownCount', void 0), b(this, 'soundboardKeepOpenCount', void 0), b(this, 'muteToggledCount', void 0), b(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = crypto.randomUUID()), (this.notificationAnalytics = new N()), (this.widgetAnalytics = new C()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = s.G9.startNew()), (this.gameFocusedTimer = new s.G9()), (this.unlockedTimer = new s.G9()), (this.rtcConnectionTimer = new s.G9()), (this.desktopFocusedTimer = new s.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new s.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new R(e)), (this.overlayStatus = f.ZP.getGameOverlayStatus(e)), O.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), V.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function D(e) {
    for (let t of (y.verbose('handleRunningGamesChange', e), e.added)) {
        O.incrementConcurrentGameCount();
        let e = O.create(t);
        y.verbose('handleRunningGamesChange added', t, e);
    }
    for (let t of e.removed) O.destroy(t), y.verbose('handleRunningGamesChange removed', t);
}
function L(e) {
    let t = O.getByPid(e.pid);
    if ((y.verbose('OVERLAY_SET_UI_LOCKED', t), null == t)) {
        y.error('OVERLAY_SET_UI_LOCKED: Unable to find game', e, O.debug);
        return;
    }
    t.setLocked(e.locked);
}
function x(e) {
    var t;
    y.verbose('OVERLAY_NOTIFICATION_EVENT', e);
    let n = O.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        y.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, O.debug);
        return;
    }
    n.notificationAnalytics.increment(e.notificationType, e.action);
}
function w(e) {
    var t;
    y.verbose('OVERLAY_WIDGET_CHANGED', e);
    let n = O.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        y.error('OVERLAY_WIDGET_CHANGED: Game not found', e, O.debug);
        return;
    }
    let r = n.widgetAnalytics.getByWidget(e.widgetType);
    if (null != r) !r.initialized && ((r.initialized = !0), (r.pinned = e.pinned)), r.pinned !== e.pinned && ++r.pinnedToggledCount, (r.pinned = e.pinned), r.visibleDuration.toggle(e.visible);
}
function M(e) {
    if ((y.verbose('OVERLAY_FOCUSED', e), O.gameSetAllUnfocused(), null == e.pid)) return;
    let t = O.getByPid(e.pid);
    if (null == t) {
        y.error('OVERLAY_FOCUSED: Game not found', e, O.debug);
        return;
    }
    t.gameSetFocused(!0);
}
function P(e) {
    var t;
    y.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e);
    let n = O.getByPid(e.pid);
    if (null == n) {
        y.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, O.debug);
        return;
    }
    n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t);
}
function k(e) {
    var t;
    y.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e);
    let n = O.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        y.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, O.debug);
        return;
    }
    switch (e.eventType) {
        case 'ack':
            ++n.overlayMessageAckCount;
            break;
        case 'create':
            ++n.overlayMessageCreateCount;
    }
}
function U(e) {
    y.verbose('MESSAGE_ACKED', e), O.desktopMessageEvent('ack');
}
function G(e) {
    e.message.state === S.yb.SENDING && O.desktopMessageEvent('created');
}
function B(e) {
    null != (0, v.Z)() && (y.verbose('AUDIO_TOGGLE_SELF_MUTE', e), O.handleMuteToggled());
}
function Z(e) {
    y.verbose('WINDOW_FOCUS', e);
    let t = (0, E.UU)();
    if (e.windowId !== t) {
        y.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: t
        });
        return;
    }
    O.desktopSetFocused(e.focused);
}
function F(e) {
    let t = O.getByPid(e.pid);
    if (null == t) {
        y.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, O.debug);
        return;
    }
    t.successfullyShown = !0;
}
b(O, 'gamesByPid', {}), b(O, 'gamesByName', {}), b(O, 'desktopMainWindowHasFocus', document.hasFocus());
class V {
    static hasConnection() {
        return V.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
        switch (e.state) {
            case S.hes.RTC_CONNECTED:
                V.connections.add(n);
                break;
            case S.hes.DISCONNECTED:
                V.connections.delete(n);
        }
        let r = V.hasConnection();
        V.previousHasConnection !== r && (O.toggleRtcConnection(r), (V.previousHasConnection = r));
    }
}
b(V, 'connections', new Set()), b(V, 'previousHasConnection', !1);
class j {
    static handleMessageAcked(e) {
        y.verbose('MESSAGE_ACKED', e);
        let t = _.Z.getGame();
        if (null == t) {
            y.error('Game not found.');
            return;
        }
        o.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'ack',
            gameName: t.name,
            gameId: t.id
        });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== S.yb.SENDING) return;
        y.verbose('MESSAGE_CREATE', e, Error().stack);
        let t = _.Z.getGame();
        if (null == t) {
            y.error('Game not found.');
            return;
        }
        o.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'create',
            gameName: t.name,
            gameId: t.id
        });
    }
}
class H extends u.Z {
    constructor(...e) {
        super(...e),
            b(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: j.handleMessageAcked,
                          MESSAGE_CREATE: j.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: M,
                          OVERLAY_NOTIFICATION_EVENT: x,
                          OVERLAY_SET_UI_LOCKED: L,
                          OVERLAY_WIDGET_CHANGED: w,
                          OVERLAY_MESSAGE_EVENT_ACTION: k,
                          RUNNING_GAMES_CHANGE: D,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: P,
                          MESSAGE_ACKED: U,
                          MESSAGE_CREATE: G,
                          WINDOW_FOCUS: Z,
                          RTC_CONNECTION_STATE: V.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: B,
                          OVERLAY_SUCCESSFULLY_SHOWN: F
                      }
            );
    }
}
t.Z = new H();
