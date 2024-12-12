var i = r(47120);
var a = r(147913),
    s = r(70956),
    o = r(272008),
    l = r(569984),
    u = r(497505),
    c = r(977156),
    d = r(569743),
    f = r(46140);
function _(e, n, r) {
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
let h = s.Z.Millis.DAY,
    p = 30 * s.Z.Millis.MINUTE,
    m = 5 * s.Z.Millis.SECOND,
    g = 5 * s.Z.Millis.MINUTE,
    E = 12 * s.Z.Millis.HOUR;
class v extends a.Z {
    _fetch() {
        if (!!(0, c.cB)({ location: f.dr.QUESTS_MANAGER }) && !l.Z.isFetchingCurrentQuests) (0, o.xw)(), (0, d.Z)({ location: f.dr.QUESTS_MANAGER }) && (0, o.w)(u.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
    }
    constructor(...e) {
        super(...e),
            _(this, 'instantiatedAt', Date.now()),
            _(this, 'initialFetchTimerId', null),
            _(this, 'recurringFetchTimerId', null),
            _(this, 'lastFetchAttemptedAt', 0),
            _(this, 'lastFetchedQuestForLocaleChangeAt', 0),
            _(this, 'handleQuestsFetchCurrentQuestsBegin', () => {
                this.lastFetchAttemptedAt = Date.now();
            }),
            _(this, 'handlePostConnectionOpen', () => {
                window.clearTimeout(this.initialFetchTimerId),
                    window.clearTimeout(this.recurringFetchTimerId),
                    (this.recurringFetchTimerId = window.setInterval(() => {
                        Date.now() - this.lastFetchAttemptedAt > h && ((this.lastFetchAttemptedAt = Date.now()), this._fetch());
                    }, p)),
                    (this.initialFetchTimerId = window.setTimeout(
                        () => {
                            0 === l.Z.lastFetchedCurrentQuests && this._fetch();
                        },
                        Math.floor(Math.random() * m)
                    ));
            }),
            _(this, 'handleRunningGamesChange', () => {
                if (!(this.instantiatedAt + E > Date.now() || l.Z.lastFetchedCurrentQuests + E > Date.now())) this._fetch();
            }),
            _(this, 'handleUserSettingsProtoUpdate', (e) => {
                let { partial: n, settings: r, wasSaved: i } = e;
                if (!(!('localization' in r.proto) || !n || i || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= g)) (this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch();
            }),
            _(this, 'handleLogout', () => {
                window.clearTimeout(this.initialFetchTimerId), window.clearTimeout(this.recurringFetchTimerId), (this.lastFetchAttemptedAt = 0), (this.lastFetchedQuestForLocaleChangeAt = 0);
            }),
            _(this, 'actions', {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                USER_SETTINGS_PROTO_UPDATE: this.handleUserSettingsProtoUpdate,
                LOGOUT: this.handleLogout
            });
    }
}
n.Z = new v();
