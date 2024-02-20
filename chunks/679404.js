"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("424973"), n("222007");
var i = n("917351"),
  a = n.n(i),
  l = n("713349"),
  s = n("95410"),
  r = n("689988"),
  o = n("342564"),
  u = n("605393"),
  d = n("385976"),
  c = n("469607"),
  f = n("865372"),
  E = n("319781"),
  h = n("718517"),
  _ = n("872173"),
  C = n("374363"),
  S = n("116949"),
  g = n("397336");
let T = "lastFrecencySavedTime",
  m = Math.random() * (5 * h.default.Millis.MINUTE),
  p = 1 * h.default.Millis.DAY + Math.floor(Math.random() * (1 * h.default.Millis.HOUR)),
  I = null,
  A = Date.now();
class N extends r.default {
  _initialize() {
    _.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => !1,
      processProto: () => {
        M(!0)
      }
    }), _.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => f.default.hasPendingUsage() && C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!f.default.hasPendingUsage()) C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.stickerFrecency = l.StickerFrecency.create(), e.stickerFrecency.stickers = (0, S.serializeUsageHistory)(f.default.stickerFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), _.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => d.default.hasPendingUsage() && C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!d.default.hasPendingUsage()) C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.emojiFrecency = l.EmojiFrecency.create(), e.emojiFrecency.emojis = (0, S.serializeUsageHistory)(d.default.emojiFrecencyWithoutFetchingLatest.usageHistory, 100))
      }
    }), _.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => c.default.hasPendingUsage() && C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!c.default.hasPendingUsage()) C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && !a.isEmpty(c.default.playedSoundHistory) && (e.playedSoundFrecency = l.PlayedSoundFrecency.create(), e.playedSoundFrecency.playedSounds = (0, S.serializeUsageHistory)(c.default.playedSoundHistory, 100))
      }
    }), _.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => o.default.hasPendingUsage() && C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!o.default.hasPendingUsage()) C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationCommandFrecency = l.ApplicationCommandFrecency.create(), e.applicationCommandFrecency.applicationCommands = (0, S.serializeUsageHistory)(o.default.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500))
      }
    }), _.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => u.default.hasPendingUsage() && C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!u.default.hasPendingUsage()) C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.applicationFrecency = l.ApplicationFrecency.create(), e.applicationFrecency.applications = (0, S.serializeUsageHistory)(u.default.getApplicationFrecencyWithoutLoadingLatest().usageHistory, u.FREQUENCY_ITEM_LIMIT))
      }
    }), _.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
      hasChanges: () => E.default.hasPendingUsage() && C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS),
      processProto: e => {
        if (!!E.default.hasPendingUsage()) C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (e.guildAndChannelFrecency = l.GuildAndChannelFrecency.create(), e.guildAndChannelFrecency.guildAndChannels = (0, S.serializeUsageHistory)(E.default.frecencyWithoutFetchingLatest.usageHistory, E.MAX_NUM_SELECTED_ITEMS))
      }
    })
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: O,
      CONNECTION_RESUMED: O,
      CONNECTION_CLOSED: v
    }
  }
}

function O() {
  var e;
  A = null !== (e = s.default.get(T)) && void 0 !== e ? e : Date.now(), M(!1)
}

function v() {
  clearTimeout(I), I = null
}
async function R() {
  A = Date.now(), M(!0), !C.default.hasLoaded(g.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (f.default.hasPendingUsage() || d.default.hasPendingUsage() || o.default.hasPendingUsage() || u.default.hasPendingUsage() || E.default.hasPendingUsage()) && await _.FrecencyUserSettingsActionCreators.loadIfNecessary(), a.forEach(_.UserSettingsActionCreatorsByType, e => {
    e.markDirtyIfHasPendingChange()
  })
}

function M(e) {
  e && (A = Date.now(), s.default.set(T, A)), null != I && clearTimeout(I);
  let t = Date.now() - A;
  I = setTimeout(R, Math.max(m, p - t))
}
var L = new N