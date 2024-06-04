"use strict";
n.r(t), n("47120");
var i = n("147913"),
  r = n("70956"),
  s = n("272008"),
  a = n("569984"),
  o = n("977156"),
  l = n("46140");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = r.default.Millis.DAY,
  _ = 30 * r.default.Millis.MINUTE,
  c = 5 * r.default.Millis.SECOND,
  E = 5 * r.default.Millis.MINUTE,
  I = 12 * r.default.Millis.HOUR;
class T extends i.default {
  _fetch() {
    (0, o.getIsEligibleForQuests)({
      location: l.QuestsExperimentLocations.QUESTS_MANAGER
    }) && !a.default.isFetchingCurrentQuests && (0, s.fetchCurrentQuests)()
  }
  constructor(...e) {
    super(...e), u(this, "instantiatedAt", Date.now()), u(this, "initialFetchTimerId", null), u(this, "recurringFetchTimerId", null), u(this, "lastFetchAttemptedAt", 0), u(this, "lastFetchedQuestForLocaleChangeAt", 0), u(this, "handleQuestsFetchCurrentQuestsBegin", () => {
      this.lastFetchAttemptedAt = Date.now()
    }), u(this, "handlePostConnectionOpen", () => {
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.recurringFetchTimerId = window.setInterval(() => {
        Date.now() - this.lastFetchAttemptedAt > d && (this.lastFetchAttemptedAt = Date.now(), this._fetch())
      }, _), this.initialFetchTimerId = window.setTimeout(() => {
        0 === a.default.lastFetchedCurrentQuests && this._fetch()
      }, Math.floor(Math.random() * c))
    }), u(this, "handleRunningGamesChange", () => {
      !(this.instantiatedAt + I > Date.now() || a.default.lastFetchedCurrentQuests + I > Date.now()) && this._fetch()
    }), u(this, "handleUserSettingsProtoUpdate", e => {
      let {
        partial: t,
        settings: n,
        wasSaved: i
      } = e;
      !(!("localization" in n.proto) || !t || i || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= E) && (this.lastFetchedQuestForLocaleChangeAt = Date.now(), this._fetch())
    }), u(this, "handleLogout", () => {
      window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), this.lastFetchAttemptedAt = 0, this.lastFetchedQuestForLocaleChangeAt = 0
    }), u(this, "actions", {
      QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
      POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
      LOGOUT: this.handleLogout
    })
  }
}
t.default = new T