"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("222007"), n("70102");
var i, a, l = n("811022"),
  s = n("398183"),
  r = n("913144"),
  o = n("115718"),
  u = n("689988"),
  d = n("49671"),
  c = n("568307"),
  f = n("703370"),
  E = n("860957"),
  h = n("901165"),
  _ = n("599110"),
  C = n("50885"),
  S = n("816454"),
  g = n("360782"),
  T = n("84970"),
  m = n("49111"),
  p = n("6791");
let I = new l.default("OverlayUsageStatsManager");
I.verbose = () => {};
class A {
  increment(e) {
    ++this.actions[e]
  }
  getAnalytics(e, t) {
    let n = this.actions[p.OverlayNotificationAction.Viewed],
      i = this.actions[p.OverlayNotificationAction.Clicked];
    return 0 === n && 0 === i ? null : {
      event_uuid: t,
      notification_type: e,
      viewed_count: n,
      clicked_count: i
    }
  }
  constructor() {
    this.actions = {
      [p.OverlayNotificationAction.Viewed]: 0,
      [p.OverlayNotificationAction.Clicked]: 0
    }
  }
}
class N {
  static makeEmptyGroupAnalytics() {
    return {
      [p.OverlayNotificationGroup.Nudge]: 0,
      [p.OverlayNotificationGroup.TextChat]: 0,
      [p.OverlayNotificationGroup.VoiceCall]: 0,
      [p.OverlayNotificationGroup.Activity]: 0,
      [p.OverlayNotificationGroup.Clips]: 0,
      [p.OverlayNotificationGroup.Other]: 0
    }
  }
  increment(e, t) {
    let n = this.groupCounters[t];
    if (null == n) {
      I.error("NotificationCounter: Unknown notification action: ".concat(t));
      return
    }
    let i = (0, p.getOverlayNotificationGroup)(e);
    if (!(i in n)) {
      I.error("NotificationCounter: Unknown notification action: ".concat(e));
      return
    }++n[i], ++this.actionCounters[t];
    let a = this.counters[e];
    if (null == a) {
      I.error("NotificationCounter: Unknown notification type: ".concat(e));
      return
    }
    a.increment(t)
  }
  getAnalytics() {
    let e = this.groupCounters[p.OverlayNotificationAction.Viewed],
      t = this.groupCounters[p.OverlayNotificationAction.Clicked];
    return {
      notices_viewed: this.actionCounters[p.OverlayNotificationAction.Viewed],
      notices_clicked: this.actionCounters[p.OverlayNotificationAction.Clicked],
      notice_nudge_viewed: e[p.OverlayNotificationGroup.Nudge],
      notice_text_chat_viewed: e[p.OverlayNotificationGroup.TextChat],
      notice_voice_call_viewed: e[p.OverlayNotificationGroup.VoiceCall],
      notice_activity_viewed: e[p.OverlayNotificationGroup.Activity],
      notice_clips_viewed: e[p.OverlayNotificationGroup.Clips],
      notice_other_viewed: e[p.OverlayNotificationGroup.Other],
      notice_nudge_clicked: t[p.OverlayNotificationGroup.Nudge],
      notice_text_chat_clicked: t[p.OverlayNotificationGroup.TextChat],
      notice_voice_call_clicked: t[p.OverlayNotificationGroup.VoiceCall],
      notice_activity_clicked: t[p.OverlayNotificationGroup.Activity],
      notice_clips_clicked: t[p.OverlayNotificationGroup.Clips],
      notice_other_clicked: t[p.OverlayNotificationGroup.Other]
    }
  }
  getCounterAnalytics(e) {
    return Object.entries(this.counters).map(t => {
      let [n, i] = t;
      return i.getAnalytics(n, e)
    }).filter(e => null != e)
  }
  constructor() {
    this.actionCounters = {
      [p.OverlayNotificationAction.Viewed]: 0,
      [p.OverlayNotificationAction.Clicked]: 0
    }, this.groupCounters = {
      [p.OverlayNotificationAction.Viewed]: N.makeEmptyGroupAnalytics(),
      [p.OverlayNotificationAction.Clicked]: N.makeEmptyGroupAnalytics()
    }, this.counters = {
      [p.OverlayNotificationType.NewsNudge]: new A,
      [p.OverlayNotificationType.WelcomeNudge]: new A,
      [p.OverlayNotificationType.TextChat]: new A,
      [p.OverlayNotificationType.ActivityUserJoin]: new A,
      [p.OverlayNotificationType.ActivityInvite]: new A,
      [p.OverlayNotificationType.IncomingCall]: new A,
      [p.OverlayNotificationType.GoLiveNudge]: new A,
      [p.OverlayNotificationType.GoLiveNonVoiceNudge]: new A,
      [p.OverlayNotificationType.OverlayCrashed]: new A,
      [p.OverlayNotificationType.StartBroadcastNotification]: new A,
      [p.OverlayNotificationType.ClipsReminderNotification]: new A,
      [p.OverlayNotificationType.ClipsNotification]: new A,
      [p.OverlayNotificationType.KeybindIndicatorsNotification]: new A
    }
  }
}(a = i || (i = {}))[a.Voice = 0] = "Voice", a[a.Text = 1] = "Text";
class O {
  static makeEmptyAnalytics() {
    return {
      initialized: !1,
      pinnedToggledCount: 0,
      visibleDuration: new s.StopWatch,
      pinned: !1
    }
  }
  getByType(e) {
    return this.types[e]
  }
  getByWidget(e) {
    switch (e) {
      case m.OverlayWidgets.VOICE:
        return this.getByType(0);
      case m.OverlayWidgets.TEXT:
        return this.getByType(1);
      default:
        return null
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
    }
  }
  constructor() {
    this.types = {
      0: O.makeEmptyAnalytics(),
      1: O.makeEmptyAnalytics()
    }
  }
}
class v {
  update() {
    let e = this.game,
      t = C.default.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
    if (t !== this.lastscreenType) {
      if (!(t in this.counters)) {
        I.error("ScreenTypeAnalytics: Unknown screen type: ".concat(t), t);
        return
      }
      this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), this.lastscreenType = t
    }
  }
  getAnalytics() {
    var e, t;
    let n = e => this.counters[e].elapsed().asMilliseconds(),
      i = {
        [o.RunningProcessFullscreenType.UNKNOWN]: n(o.RunningProcessFullscreenType.UNKNOWN),
        [o.RunningProcessFullscreenType.WINDOWED]: n(o.RunningProcessFullscreenType.WINDOWED),
        [o.RunningProcessFullscreenType.MAXIMIZED]: n(o.RunningProcessFullscreenType.MAXIMIZED),
        [o.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN]: n(o.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN),
        [o.RunningProcessFullscreenType.FULLSCREEN]: n(o.RunningProcessFullscreenType.FULLSCREEN),
        [o.RunningProcessFullscreenType.MINIMIZED]: n(o.RunningProcessFullscreenType.MINIMIZED)
      },
      a = Object.entries(i).sort((e, t) => {
        let [n, i] = e, [a, l] = t;
        return l - i
      })[0],
      l = parseInt(a[0], 10),
      s = isNaN(l) ? o.RunningProcessFullscreenType.UNKNOWN : l;
    isNaN(l) && I.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(a), i);
    let r = T.GameDisplayModeStorage.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
    T.GameDisplayModeStorage.setGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id, s);
    let u = {
      screentype_unknown_duration: i[o.RunningProcessFullscreenType.UNKNOWN],
      screentype_windowed_duration: i[o.RunningProcessFullscreenType.WINDOWED],
      screentype_maximized_duration: i[o.RunningProcessFullscreenType.MAXIMIZED],
      screentype_borderless_fullscreen_duration: i[o.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN],
      screentype_fullscreen_duration: i[o.RunningProcessFullscreenType.FULLSCREEN],
      screentype_minimized_duration: i[o.RunningProcessFullscreenType.MINIMIZED]
    };
    return {
      ...u,
      screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
      screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
      screentype_initial: o.RunningProcessFullscreenType[this.game.fullscreenType],
      screentype_most_used: o.RunningProcessFullscreenType[s],
      screentype_most_used_previous: null == r ? null : o.RunningProcessFullscreenType[r],
      game_display_mode_is_adjustment_supported: C.default.GameDisplayModeIsGameSupported(this.game.name)
    }
  }
  destroy() {
    clearInterval(this.updateScreenInterval)
  }
  constructor(e) {
    this.game = e, this.counters = {
      [o.RunningProcessFullscreenType.UNKNOWN]: new s.StopWatch,
      [o.RunningProcessFullscreenType.WINDOWED]: new s.StopWatch,
      [o.RunningProcessFullscreenType.MAXIMIZED]: new s.StopWatch,
      [o.RunningProcessFullscreenType.BORDERLESS_FULLSCREEN]: new s.StopWatch,
      [o.RunningProcessFullscreenType.FULLSCREEN]: new s.StopWatch,
      [o.RunningProcessFullscreenType.MINIMIZED]: new s.StopWatch
    }, this.lastscreenType = void 0, this.update(), this.updateScreenInterval = setInterval(() => this.update(), 1e4)
  }
}
class R {
  static get debug() {
    return {
      gamesByPid: R.gamesByPid,
      gamesByName: R.gamesByName
    }
  }
  static getGameName(e) {
    var t, n;
    return null !== (n = null !== (t = e.name) && void 0 !== t ? t : e.id) && void 0 !== n ? n : null
  }
  static ignoreGame(e) {
    var t;
    return null !== (t = e.isLauncher) && void 0 !== t && t
  }
  static create(e) {
    let t = R.getGameName(e);
    if (R.ignoreGame(e) || null == t) return null;
    let n = new R({
      ...e
    });
    return n.gameConcurrentGameCount = Object.values(R.gamesByPid).length, R.gamesByPid[e.pid] = n, R.gamesByName[t] = n, n
  }
  static getByName(e) {
    return null == e ? null : R.gamesByName[e]
  }
  static getByPid(e) {
    return R.gamesByPid[e]
  }
  static async destroy(e) {
    let t = R.getGameName(e);
    if (R.ignoreGame(e) || null == t) return;
    let n = R.gamesByPid[e.pid];
    if (null != n) {
      n.screenAnalytics.destroy();
      let t = await n.getAnalytics();
      for (let e of (_.default.track(m.AnalyticEvents.OVERLAY_USAGE_STATS, t.usage), t.notifications)) _.default.track(m.AnalyticEvents.OVERLAY_USAGE_NOTIFICATION_STATS, e);
      I.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), t), delete R.gamesByPid[e.pid]
    }
    delete R.gamesByName[t]
  }
  async getAnalytics() {
    var e, t, n, i, a, l;
    let s = {
        setting_is_enabled: E.default.enabled,
        setting_method: null == this.overlayStatus ? null : p.OverlayMethod[this.overlayStatus.overlayMethod],
        setting_display_user: h.default.getDisplayUserMode(),
        setting_display_name: h.default.getDisplayNameMode(),
        setting_avatar_size: h.default.getAvatarSizeMode(),
        setting_notification_position: h.default.getNotificationPositionMode(),
        setting_chat_notification: h.default.getTextChatNotificationMode()
      },
      r = (0, c.getOverlayGameStatus)(this.game),
      o = {
        event_uuid: this.uuid,
        overlay_usage_stats_version: 2,
        ...this.notificationAnalytics.getAnalytics(),
        ...this.widgetAnalytics.getAnalytics(),
        ...this.screenAnalytics.getAnalytics(),
        ...s,
        overlay_status_game_enabled: r.enabled,
        overlay_status_game_source: r.source,
        game_name: null !== (n = this.game.name) && void 0 !== n ? n : null,
        game_id: null !== (i = this.game.id) && void 0 !== i ? i : null,
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
        hardware_display_count: null !== (l = await (null === d.default || void 0 === d.default ? void 0 : null === (t = d.default.hardware) || void 0 === t ? void 0 : null === (e = t.getDisplayCount) || void 0 === e ? void 0 : e.call(t))) && void 0 !== l ? l : null,
        message_ack_count: this.overlayMessageAckCount,
        message_created_count: this.overlayMessageCreateCount,
        desktop_message_ack_count: this.desktopMessageAckCount,
        desktop_message_created_count: this.desktopMessageCreateCount,
        desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
        desktop_focused_change_count: this.desktopFocusChangedCount,
        rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
        mute_toggled_count: this.muteToggledCount
      };
    return {
      usage: o,
      notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
    }
  }
  setLocked(e) {
    e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount)
  }
  static gameSetAllUnfocused() {
    for (let e of Object.values(R.gamesByPid)) e.gameFocusedTimer.stop()
  }
  static incrementConcurrentGameCount() {
    for (let e of Object.values(R.gamesByPid)) ++e.gameConcurrentGameCount
  }
  gameSetFocused(e) {
    this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount
  }
  setSoundboardShown(e, t) {
    this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount)
  }
  static handleMuteToggled() {
    for (let e of Object.values(R.gamesByPid)) ++e.muteToggledCount
  }
  static desktopSetFocused(e) {
    if (e !== R.desktopMainWindowHasFocus) {
      for (let t of Object.values(R.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
      R.desktopMainWindowHasFocus = e
    }
  }
  static desktopMessageEvent(e) {
    for (let t of Object.values(R.gamesByPid)) switch (e) {
      case "ack":
        ++t.desktopMessageAckCount;
        break;
      case "created":
        ++t.desktopMessageCreateCount
    }
  }
  static toggleRtcConnection(e) {
    for (let t of Object.values(R.gamesByPid)) t.rtcConnectionTimer.toggle(e)
  }
  constructor(e) {
    this.game = e, this.uuid = crypto.randomUUID(), this.notificationAnalytics = new N, this.widgetAnalytics = new O, this.uiUnlockedCount = 0, this.uiLockedCount = 0, this.gameFocusChangedCount = 0, this.gameConcurrentGameCount = 0, this.overlayMessageAckCount = 0, this.overlayMessageCreateCount = 0, this.gameTimer = s.StopWatch.startNew(), this.gameFocusedTimer = new s.StopWatch, this.unlockedTimer = new s.StopWatch, this.rtcConnectionTimer = new s.StopWatch, this.desktopFocusedTimer = new s.StopWatch, this.desktopFocusChangedCount = 0, this.desktopMessageAckCount = 0, this.desktopMessageCreateCount = 0, this.soundboardShownTimer = new s.StopWatch, this.soundboardShownCount = 0, this.soundboardKeepOpenCount = 0, this.muteToggledCount = 0, this.screenAnalytics = new v(e), this.overlayStatus = c.default.getGameOverlayStatus(e), R.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), x.hasConnection() && this.rtcConnectionTimer.start()
  }
}

function M(e) {
  for (let t of (I.verbose("handleRunningGamesChange", e), e.added)) {
    R.incrementConcurrentGameCount();
    let e = R.create(t);
    I.verbose("handleRunningGamesChange added", t, e)
  }
  for (let t of e.removed) R.destroy(t), I.verbose("handleRunningGamesChange removed", t)
}

function L(e) {
  let t = R.getByPid(e.pid);
  if (I.verbose("OVERLAY_SET_UI_LOCKED", t), null == t) {
    I.error("OVERLAY_SET_UI_LOCKED: Unable to find game", e, R.debug);
    return
  }
  t.setLocked(e.locked)
}

function y(e) {
  var t;
  I.verbose("OVERLAY_NOTIFICATION_EVENT", e);
  let n = R.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
  if (null == n) {
    I.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, R.debug);
    return
  }
  n.notificationAnalytics.increment(e.notificationType, e.action)
}

function D(e) {
  var t;
  I.verbose("OVERLAY_WIDGET_CHANGED", e);
  let n = R.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
  if (null == n) {
    I.error("OVERLAY_WIDGET_CHANGED: Game not found", e, R.debug);
    return
  }
  let i = n.widgetAnalytics.getByWidget(e.widgetType);
  null != i && (!i.initialized && (i.initialized = !0, i.pinned = e.pinned), i.pinned !== e.pinned && ++i.pinnedToggledCount, i.pinned = e.pinned, i.visibleDuration.toggle(e.visible))
}

function P(e) {
  if (I.verbose("OVERLAY_FOCUSED", e), R.gameSetAllUnfocused(), null == e.pid) return;
  let t = R.getByPid(e.pid);
  if (null == t) {
    I.error("OVERLAY_FOCUSED: Game not found", e, R.debug);
    return
  }
  t.gameSetFocused(!0)
}

function w(e) {
  var t;
  I.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e);
  let n = R.getByPid(e.pid);
  if (null == n) {
    I.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, R.debug);
    return
  }
  n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t)
}

function b(e) {
  var t;
  I.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e);
  let n = R.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
  if (null == n) {
    I.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, R.debug);
    return
  }
  switch (e.eventType) {
    case "ack":
      ++n.overlayMessageAckCount;
      break;
    case "create":
      ++n.overlayMessageCreateCount
  }
}

function U(e) {
  I.verbose("MESSAGE_ACKED", e), R.desktopMessageEvent("ack")
}

function F(e) {
  e.message.state === m.MessageStates.SENDING && R.desktopMessageEvent("created")
}

function G(e) {
  null != (0, g.default)() && (I.verbose("AUDIO_TOGGLE_SELF_MUTE", e), R.handleMuteToggled())
}

function k(e) {
  I.verbose("WINDOW_FOCUS", e);
  let t = (0, S.getMainWindowId)();
  if (e.windowId !== t) {
    I.verbose("WINDOW_FOCUS: Not main window", {
      action: e,
      mainWindowId: t
    });
    return
  }
  R.desktopSetFocused(e.focused)
}
R.gamesByPid = {}, R.gamesByName = {}, R.desktopMainWindowHasFocus = document.hasFocus();
class x {
  static hasConnection() {
    return x.connections.size > 0
  }
  static handleRTCConnectionState(e) {
    var t;
    let n = (null !== (t = e.channelId) && void 0 !== t ? t : "unknown") + e.context;
    switch (e.state) {
      case m.RTCConnectionStates.RTC_CONNECTED:
        x.connections.add(n);
        break;
      case m.RTCConnectionStates.DISCONNECTED:
        x.connections.delete(n)
    }
    let i = x.hasConnection();
    x.previousHasConnection !== i && (R.toggleRtcConnection(i), x.previousHasConnection = i)
  }
}
x.connections = new Set, x.previousHasConnection = !1;
class H {
  static handleMessageAcked(e) {
    I.verbose("MESSAGE_ACKED", e);
    let t = f.default.getGame();
    if (null == t) {
      I.error("Game not found.");
      return
    }
    r.default.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "ack",
      gameName: t.name,
      gameId: t.id
    })
  }
  static handleMessageCreate(e) {
    if (e.message.state !== m.MessageStates.SENDING) return;
    I.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = f.default.getGame();
    if (null == t) {
      I.error("Game not found.");
      return
    }
    r.default.dispatch({
      type: "OVERLAY_MESSAGE_EVENT_ACTION",
      eventType: "create",
      gameName: t.name,
      gameId: t.id
    })
  }
}
class V extends u.default {
  constructor(...e) {
    super(...e), this.actions = __OVERLAY__ ? {
      MESSAGE_ACKED: H.handleMessageAcked,
      MESSAGE_CREATE: H.handleMessageCreate
    } : {
      OVERLAY_FOCUSED: P,
      OVERLAY_NOTIFICATION_EVENT: y,
      OVERLAY_SET_UI_LOCKED: L,
      OVERLAY_WIDGET_CHANGED: D,
      OVERLAY_MESSAGE_EVENT_ACTION: b,
      RUNNING_GAMES_CHANGE: M,
      SOUNDBOARD_SET_OVERLAY_ENABLED: w,
      MESSAGE_ACKED: U,
      MESSAGE_CREATE: F,
      WINDOW_FOCUS: k,
      RTC_CONNECTION_STATE: x.handleRTCConnectionState,
      AUDIO_TOGGLE_SELF_MUTE: G
    }
  }
}
var B = new V