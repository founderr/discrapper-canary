var r = n(47120);
var i = n(147913),
    a = n(70956),
    o = n(272008),
    s = n(569984),
    l = n(497505),
    u = n(977156),
    c = n(569743),
    d = n(46140);
function _(e, t, n) {
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
let E = a.Z.Millis.DAY,
    f = 30 * a.Z.Millis.MINUTE,
    h = 5 * a.Z.Millis.SECOND,
    p = 5 * a.Z.Millis.MINUTE,
    m = 12 * a.Z.Millis.HOUR;
class I extends i.Z {
    _fetch() {
        if (!!(0, u.cB)({ location: d.dr.QUESTS_MANAGER }) && !s.Z.isFetchingCurrentQuests) (0, o.xw)(), (0, c.Z)({ location: d.dr.QUESTS_MANAGER }) && (0, o.w)(l.Ok.DESKTOP_ACCOUNT_PANEL_AREA);
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
                        Date.now() - this.lastFetchAttemptedAt > E && ((this.lastFetchAttemptedAt = Date.now()), this._fetch());
                    }, f)),
                    (this.initialFetchTimerId = window.setTimeout(
                        () => {
                            0 === s.Z.lastFetchedCurrentQuests && this._fetch();
                        },
                        Math.floor(Math.random() * h)
                    ));
            }),
            _(this, 'handleRunningGamesChange', () => {
                if (!(this.instantiatedAt + m > Date.now() || s.Z.lastFetchedCurrentQuests + m > Date.now())) this._fetch();
            }),
            _(this, 'handleUserSettingsProtoUpdate', (e) => {
                let { partial: t, settings: n, wasSaved: r } = e;
                if (!(!('localization' in n.proto) || !t || r || Date.now() - this.lastFetchedQuestForLocaleChangeAt <= p)) (this.lastFetchedQuestForLocaleChangeAt = Date.now()), this._fetch();
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
t.Z = new I();
