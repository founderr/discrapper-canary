"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var i = n("689988"),
  a = n("305961"),
  l = n("718517"),
  s = n("299039"),
  r = n("388142"),
  o = n("711454"),
  u = n("578899");
let d = 0;
class c extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: e => this.handleConnectionOpen(e),
      IDLE: () => this.handleIdleChange()
    }, this.handleConnectionOpen = e => {
      this._attemptDeadchatPrompt(), this._triggerGamingStatsSetupExperiment()
    }, this.handleIdleChange = () => {
      Date.now() - d > l.default.Millis.HOUR && this._attemptDeadchatPrompt()
    }, this._attemptDeadchatPrompt = () => {
      let e = a.default.getGuilds(),
        t = s.default.keys(e).filter(e => u.SimpleDeadchatPromptExperiment.getCurrentConfig({
          guildId: e,
          location: "manager"
        }).triggerDeadchat);
      t.length > 0 && (d = Date.now(), (0, r.initiateChannelPrompts)(t))
    }, this._triggerGamingStatsSetupExperiment = () => {
      let e = a.default.getGuilds();
      s.default.keys(e).forEach(e => {
        o.GamingStatsSetupExperiment.trackExposure({
          guildId: e,
          location: "manager"
        })
      })
    }
  }
}
var f = new c