var i,
    a = r(47120);
var s = r(411104);
var o = r(259443),
    l = r(379649),
    u = r(570140),
    c = r(593472),
    d = r(147913),
    f = r(579806),
    _ = r(581567),
    h = r(594190),
    p = r(449224),
    m = r(808506),
    g = r(237997),
    E = r(626135),
    v = r(998502),
    I = r(145597),
    T = r(830917),
    b = r(554174),
    y = r(938038),
    S = r(981631),
    A = r(987650);
function N(e, n, r) {
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
let C = 3,
    R = !1,
    O = new o.Yd('OverlayUsageStatsManager');
!R && (O.verbose = () => {});
class D {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, n) {
        let r = this.actions[A.bv.Viewed],
            i = this.actions[A.bv.Clicked];
        return 0 === r && 0 === i
            ? null
            : {
                  event_uuid: n,
                  notification_type: e,
                  viewed_count: r,
                  clicked_count: i
              };
    }
    constructor() {
        N(this, 'actions', {
            [A.bv.Viewed]: 0,
            [A.bv.Clicked]: 0
        });
    }
}
class L {
    static makeEmptyGroupAnalytics() {
        return {
            [A.Vk.Nudge]: 0,
            [A.Vk.TextChat]: 0,
            [A.Vk.VoiceCall]: 0,
            [A.Vk.Activity]: 0,
            [A.Vk.Clips]: 0,
            [A.Vk.Other]: 0
        };
    }
    increment(e, n) {
        let r = this.groupCounters[n];
        if (null == r) {
            O.error('NotificationCounter: Unknown notification action: '.concat(n));
            return;
        }
        let i = (0, A.YK)(e);
        if (!(i in r)) {
            O.error('NotificationCounter: Unknown notification action: '.concat(e));
            return;
        }
        ++r[i], ++this.actionCounters[n];
        let a = this.counters[e];
        if (null == a) {
            O.error('NotificationCounter: Unknown notification type: '.concat(e));
            return;
        }
        a.increment(n);
    }
    getAnalytics() {
        let e = this.groupCounters[A.bv.Viewed],
            n = this.groupCounters[A.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[A.bv.Viewed],
            notices_clicked: this.actionCounters[A.bv.Clicked],
            notice_nudge_viewed: e[A.Vk.Nudge],
            notice_text_chat_viewed: e[A.Vk.TextChat],
            notice_voice_call_viewed: e[A.Vk.VoiceCall],
            notice_activity_viewed: e[A.Vk.Activity],
            notice_clips_viewed: e[A.Vk.Clips],
            notice_other_viewed: e[A.Vk.Other],
            notice_nudge_clicked: n[A.Vk.Nudge],
            notice_text_chat_clicked: n[A.Vk.TextChat],
            notice_voice_call_clicked: n[A.Vk.VoiceCall],
            notice_activity_clicked: n[A.Vk.Activity],
            notice_clips_clicked: n[A.Vk.Clips],
            notice_other_clicked: n[A.Vk.Other]
        };
    }
    getCounterAnalytics(e) {
        return Object.entries(this.counters)
            .map((n) => {
                let [r, i] = n;
                return i.getAnalytics(r, e);
            })
            .filter((e) => null != e);
    }
    constructor() {
        N(this, 'actionCounters', {
            [A.bv.Viewed]: 0,
            [A.bv.Clicked]: 0
        }),
            N(this, 'groupCounters', {
                [A.bv.Viewed]: L.makeEmptyGroupAnalytics(),
                [A.bv.Clicked]: L.makeEmptyGroupAnalytics()
            }),
            N(this, 'counters', {
                [A.n0.NewsNudge]: new D(),
                [A.n0.WelcomeNudge]: new D(),
                [A.n0.TextChat]: new D(),
                [A.n0.ActivityUserJoin]: new D(),
                [A.n0.ActivityInvite]: new D(),
                [A.n0.IncomingCall]: new D(),
                [A.n0.GoLiveNudge]: new D(),
                [A.n0.GoLiveNonVoiceNudge]: new D(),
                [A.n0.OverlayCrashed]: new D(),
                [A.n0.ClipsReminderNotification]: new D(),
                [A.n0.ClipsNotification]: new D(),
                [A.n0.KeybindIndicatorsNotification]: new D(),
                [A.n0.SendGameInvitesNotification]: new D()
            });
    }
}
!(function (e) {
    (e[(e.Voice = 0)] = 'Voice'), (e[(e.Text = 1)] = 'Text');
})(i || (i = {}));
class x {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new l.G9(),
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
            n = this.types[1];
        return {
            widget_voice_pin_toggle_count: e.pinnedToggledCount,
            widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
            widget_voice_pinned: e.pinned,
            widget_text_pin_toggle_count: n.pinnedToggledCount,
            widget_text_visible_duration: n.visibleDuration.elapsed().asMilliseconds(),
            widget_text_pinned: n.pinned
        };
    }
    constructor() {
        N(this, 'types', {
            0: x.makeEmptyAnalytics(),
            1: x.makeEmptyAnalytics()
        });
    }
}
class w {
    update() {
        let e = this.game,
            n = v.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (n !== this.lastscreenType) {
            if (!(n in this.counters)) {
                O.error('ScreenTypeAnalytics: Unknown screen type: '.concat(n), n);
                return;
            }
            this.counters[n].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), (this.lastscreenType = n);
        }
    }
    getAnalytics() {
        var e, n;
        let r = (e) => this.counters[e].elapsed().asMilliseconds(),
            i = {
                [c.Jx.UNKNOWN]: r(c.Jx.UNKNOWN),
                [c.Jx.WINDOWED]: r(c.Jx.WINDOWED),
                [c.Jx.MAXIMIZED]: r(c.Jx.MAXIMIZED),
                [c.Jx.BORDERLESS_FULLSCREEN]: r(c.Jx.BORDERLESS_FULLSCREEN),
                [c.Jx.FULLSCREEN]: r(c.Jx.FULLSCREEN),
                [c.Jx.MINIMIZED]: r(c.Jx.MINIMIZED)
            },
            a = Object.entries(i).sort((e, n) => {
                let [r, i] = e,
                    [a, s] = n;
                return s - i;
            })[0],
            s = parseInt(a[0], 10),
            o = isNaN(s) ? c.Jx.UNKNOWN : s;
        isNaN(s) && O.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(a), i);
        let l = y.c.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
        y.c.setGameDisplayMode(null !== (n = this.game.name) && void 0 !== n ? n : this.game.id, o);
        let u = {
            screentype_unknown_duration: i[c.Jx.UNKNOWN],
            screentype_windowed_duration: i[c.Jx.WINDOWED],
            screentype_maximized_duration: i[c.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: i[c.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: i[c.Jx.FULLSCREEN],
            screentype_minimized_duration: i[c.Jx.MINIMIZED]
        };
        return {
            ...u,
            screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
            screentype_initial: c.Jx[this.game.fullscreenType],
            screentype_most_used: c.Jx[o],
            screentype_most_used_previous: null == l ? null : c.Jx[l],
            game_display_mode_is_adjustment_supported: v.ZP.GameDisplayModeIsGameSupported(this.game.name)
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        N(this, 'game', void 0),
            N(this, 'counters', void 0),
            N(this, 'lastscreenType', void 0),
            N(this, 'updateScreenInterval', void 0),
            (this.game = e),
            (this.counters = {
                [c.Jx.UNKNOWN]: new l.G9(),
                [c.Jx.WINDOWED]: new l.G9(),
                [c.Jx.MAXIMIZED]: new l.G9(),
                [c.Jx.BORDERLESS_FULLSCREEN]: new l.G9(),
                [c.Jx.FULLSCREEN]: new l.G9(),
                [c.Jx.MINIMIZED]: new l.G9()
            }),
            (this.lastscreenType = void 0),
            this.update(),
            (this.updateScreenInterval = setInterval(() => this.update(), 10000));
    }
}
class P {
    static get debug() {
        return {
            gamesByPid: P.gamesByPid,
            gamesByName: P.gamesByName
        };
    }
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    static getGameName(e) {
        var n, r;
        return null !== (r = null !== (n = e.name) && void 0 !== n ? n : e.id) && void 0 !== r ? r : null;
    }
    static ignoreGame(e) {
        var n;
        return null !== (n = e.isLauncher) && void 0 !== n && n;
    }
    static create(e) {
        let n = P.getGameName(e);
        if (P.ignoreGame(e) || null == n) return null;
        let r = new P({ ...e });
        return (r.gameConcurrentGameCount = Object.values(P.gamesByPid).length), (P.gamesByPid[e.pid] = r), (P.gamesByName[n] = r), r;
    }
    static getByName(e) {
        return null == e ? null : P.gamesByName[e];
    }
    static getByPid(e) {
        return P.gamesByPid[e];
    }
    static async destroy(e) {
        let n = P.getGameName(e);
        if (P.ignoreGame(e) || null == n) return;
        let r = P.gamesByPid[e.pid];
        if (null != r) {
            r.screenAnalytics.destroy();
            let n = await r.getAnalytics();
            for (let e of (E.default.track(S.rMx.OVERLAY_USAGE_STATS, n.usage), n.notifications)) E.default.track(S.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            O.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), n), delete P.gamesByPid[e.pid];
        }
        delete P.gamesByName[n];
    }
    async getAnalytics() {
        var e, n, r, i, a, s, o;
        let l = {
                setting_is_enabled: m.Z.enabled,
                setting_method: null == this.overlayStatus ? null : A.gl[this.overlayStatus.overlayMethod],
                setting_display_user: g.Z.getDisplayUserMode(),
                setting_display_name: g.Z.getDisplayNameMode(),
                setting_avatar_size: g.Z.getAvatarSizeMode(),
                setting_notification_position: g.Z.getNotificationPositionMode(),
                setting_chat_notification: g.Z.getTextChatNotificationMode()
            },
            u = (0, h.jk)(this.game),
            c = (0, _.G8)(this.game);
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: C,
                ...this.notificationAnalytics.getAnalytics(),
                ...this.widgetAnalytics.getAnalytics(),
                ...this.screenAnalytics.getAnalytics(),
                ...l,
                overlay_status_game_enabled: u.enabled,
                overlay_status_game_source: u.source,
                game_name: null !== (r = c.gameName) && void 0 !== r ? r : null,
                game_id: null !== (i = c.gameId) && void 0 !== i ? i : null,
                game_exe: null !== (a = c.exe) && void 0 !== a ? a : null,
                game_elevated: this.game.elevated,
                game_is_launcher: null !== (s = this.game.isLauncher) && void 0 !== s && s,
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
                hardware_display_count: null !== (o = await (null === f.Z || void 0 === f.Z ? void 0 : null === (n = f.Z.hardware) || void 0 === n ? void 0 : null === (e = n.getDisplayCount) || void 0 === e ? void 0 : e.call(n))) && void 0 !== o ? o : null,
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
        for (let e of Object.values(P.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(P.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, n) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, n && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(P.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== P.desktopMainWindowHasFocus) {
            for (let n of Object.values(P.gamesByPid)) ++n.desktopFocusChangedCount, e && n.desktopFocusedTimer.toggle(e);
            P.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let n of Object.values(P.gamesByPid))
            switch (e) {
                case 'ack':
                    ++n.desktopMessageAckCount;
                    break;
                case 'created':
                    ++n.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let n of Object.values(P.gamesByPid)) n.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        N(this, 'game', void 0), N(this, 'uuid', void 0), N(this, 'overlayStatus', void 0), N(this, 'notificationAnalytics', void 0), N(this, 'widgetAnalytics', void 0), N(this, 'screenAnalytics', void 0), N(this, 'uiUnlockedCount', void 0), N(this, 'uiLockedCount', void 0), N(this, 'gameFocusChangedCount', void 0), N(this, 'gameConcurrentGameCount', void 0), N(this, 'overlayMessageAckCount', void 0), N(this, 'overlayMessageCreateCount', void 0), N(this, 'gameTimer', void 0), N(this, 'gameFocusedTimer', void 0), N(this, 'unlockedTimer', void 0), N(this, 'rtcConnectionTimer', void 0), N(this, 'desktopFocusedTimer', void 0), N(this, 'desktopFocusChangedCount', void 0), N(this, 'desktopMessageAckCount', void 0), N(this, 'desktopMessageCreateCount', void 0), N(this, 'soundboardShownTimer', void 0), N(this, 'soundboardShownCount', void 0), N(this, 'soundboardKeepOpenCount', void 0), N(this, 'muteToggledCount', void 0), N(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = crypto.randomUUID()), (this.notificationAnalytics = new L()), (this.widgetAnalytics = new x()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = l.G9.startNew()), (this.gameFocusedTimer = new l.G9()), (this.unlockedTimer = new l.G9()), (this.rtcConnectionTimer = new l.G9()), (this.desktopFocusedTimer = new l.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new l.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new w(e)), (this.overlayStatus = h.ZP.getGameOverlayStatus(e)), P.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), K.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function M(e) {
    for (let n of (O.verbose('handleRunningGamesChange', e), e.added)) {
        P.incrementConcurrentGameCount();
        let e = P.create(n);
        O.verbose('handleRunningGamesChange added', n, e);
    }
    for (let n of e.removed) P.destroy(n), O.verbose('handleRunningGamesChange removed', n);
}
function k(e) {
    if (e.pid === I.Js) return;
    let n = P.getByPid(e.pid);
    if ((O.verbose('OVERLAY_SET_INPUT_LOCKED', n), null == n)) {
        O.error('OVERLAY_SET_INPUT_LOCKED: Unable to find game', e, P.debug);
        return;
    }
    n.setLocked(e.locked);
}
function U(e) {
    var n;
    if ((O.verbose('OVERLAY_NOTIFICATION_EVENT', e), null == e.gameName && null == e.gameId)) return;
    let r = P.getByName(null !== (n = e.gameName) && void 0 !== n ? n : e.gameId);
    if (null == r) {
        O.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, P.debug);
        return;
    }
    r.notificationAnalytics.increment(e.notificationType, e.action);
}
function B(e) {
    var n;
    if ((O.verbose('OVERLAY_WIDGET_CHANGED', e), null == e.gameName && null == e.gameId)) return;
    let r = P.getByName(null !== (n = e.gameName) && void 0 !== n ? n : e.gameId);
    if (null == r) {
        O.error('OVERLAY_WIDGET_CHANGED: Game not found', e, P.debug);
        return;
    }
    let i = r.widgetAnalytics.getByWidget(e.widgetType);
    if (null != i) !i.initialized && ((i.initialized = !0), (i.pinned = e.pinned)), i.pinned !== e.pinned && ++i.pinnedToggledCount, (i.pinned = e.pinned), i.visibleDuration.toggle(e.visible);
}
function G(e) {
    if ((O.verbose('OVERLAY_FOCUSED', e), P.gameSetAllUnfocused(), null == e.pid || e.pid === I.Js)) return;
    let n = P.getByPid(e.pid);
    if (null == n) {
        O.error('OVERLAY_FOCUSED: Game not found', e, P.debug);
        return;
    }
    n.gameSetFocused(!0);
}
function Z(e) {
    var n;
    if ((O.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e), e.pid === I.Js)) return;
    let r = P.getByPid(e.pid);
    if (null == r) {
        O.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, P.debug);
        return;
    }
    r.setSoundboardShown(e.enabled, !!e.enabled && null !== (n = e.keepOpen) && void 0 !== n && n);
}
function F(e) {
    var n;
    if ((O.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e), null == e.gameName && null == e.gameId)) return;
    let r = P.getByName(null !== (n = e.gameName) && void 0 !== n ? n : e.gameId);
    if (null == r) {
        O.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, P.debug);
        return;
    }
    switch (e.eventType) {
        case 'ack':
            ++r.overlayMessageAckCount;
            break;
        case 'create':
            ++r.overlayMessageCreateCount;
    }
}
function V(e) {
    O.verbose('MESSAGE_ACKED', e), P.desktopMessageEvent('ack');
}
function j(e) {
    e.message.state === S.yb.SENDING && P.desktopMessageEvent('created');
}
function H(e) {
    let n = (0, b.Z)();
    null != n && n !== I.Js && (O.verbose('AUDIO_TOGGLE_SELF_MUTE', e), P.handleMuteToggled());
}
function Y(e) {
    O.verbose('WINDOW_FOCUS', e);
    let n = (0, T.UU)();
    if (e.windowId !== n) {
        O.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: n
        });
        return;
    }
    P.desktopSetFocused(e.focused);
}
function W(e) {
    if (e.pid === I.Js) return;
    let n = P.getByPid(e.pid);
    if (null == n) {
        O.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, P.debug);
        return;
    }
    n.successfullyShown = !0;
}
N(P, 'gamesByPid', {}), N(P, 'gamesByName', {}), N(P, 'desktopMainWindowHasFocus', document.hasFocus());
class K {
    static hasConnection() {
        return K.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var n;
        let r = (null !== (n = e.channelId) && void 0 !== n ? n : 'unknown') + e.context;
        switch (e.state) {
            case S.hes.RTC_CONNECTED:
                K.connections.add(r);
                break;
            case S.hes.DISCONNECTED:
                K.connections.delete(r);
        }
        let i = K.hasConnection();
        K.previousHasConnection !== i && (P.toggleRtcConnection(i), (K.previousHasConnection = i));
    }
}
N(K, 'connections', new Set()), N(K, 'previousHasConnection', !1);
class z {
    static handleMessageAcked(e) {
        O.verbose('MESSAGE_ACKED', e);
        let n = p.Z.getGame();
        if (null == n) {
            O.error('Game not found.');
            return;
        }
        u.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'ack',
            gameName: n.name,
            gameId: n.id
        });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== S.yb.SENDING) return;
        O.verbose('MESSAGE_CREATE', e, Error().stack);
        let n = p.Z.getGame();
        if (null == n) {
            O.error('Game not found.');
            return;
        }
        u.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'create',
            gameName: n.name,
            gameId: n.id
        });
    }
}
R &&
    !__OVERLAY__ &&
    setInterval(async () => {
        for (let e of Object.values(P.debug.gamesByName)) O.verbose('Game analytics', await e.getAnalytics());
    }, 5000);
class q extends d.Z {
    constructor(...e) {
        super(...e),
            N(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: z.handleMessageAcked,
                          MESSAGE_CREATE: z.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: G,
                          OVERLAY_NOTIFICATION_EVENT: U,
                          OVERLAY_SET_INPUT_LOCKED: k,
                          OVERLAY_WIDGET_CHANGED: B,
                          OVERLAY_MESSAGE_EVENT_ACTION: F,
                          RUNNING_GAMES_CHANGE: M,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: Z,
                          MESSAGE_ACKED: V,
                          MESSAGE_CREATE: j,
                          WINDOW_FOCUS: Y,
                          RTC_CONNECTION_STATE: K.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: H,
                          OVERLAY_SUCCESSFULLY_SHOWN: W
                      }
            );
    }
}
n.Z = new q();
