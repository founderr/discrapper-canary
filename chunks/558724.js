n.d(t, {
    J: function () {
        return C;
    }
}),
    n(47120),
    n(913527);
var i,
    a,
    s,
    r = n(149765),
    l = n(442837);
n(433517);
var o = n(570140),
    c = n(491428),
    u = n(650774),
    d = n(430824),
    _ = n(496675),
    E = n(914010),
    I = n(594174),
    m = n(981631);
function f(e, t, n) {
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
let T = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null
    },
    h = T,
    N = {},
    p = null,
    C = 86400000;
((s = i || (i = {})).IS_OWNER = 'is_owner'), (s.IS_ADMIN = 'is_admin'), (s.IS_COMMUNITY = 'is_community'), (s.GUILD_SIZE = 'guild_size'), (s.IS_HUB = 'is_hub'), (s.IS_VIEWING = 'is_viewing'), (s.GUILD_PERMISSIONS = 'guild_permissions'), (s.GUILD_SIZE_ALL = 'guild_size_all');
let g = new Set(Object.values(i));
function S(e) {
    return (
        (function (e) {
            return !0;
        })(e) &&
        (function (e) {
            let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: i = [] } = e;
            if (0 === t.length) return !0;
            for (let e of t) if (!g.has(e)) return !1;
            let a = t.includes('guild_size_all'),
                s = !0;
            for (let l of Object.values(d.Z.getGuilds())) {
                if (a || t.includes('guild_size')) {
                    let e = u.Z.getMemberCount(l.id);
                    if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                        s = !1;
                        continue;
                    }
                }
                if ((t.includes('is_community') && !l.hasFeature(m.oNc.COMMUNITY)) || (t.includes('is_hub') && !l.hasFeature(m.oNc.HUB))) continue;
                if (t.includes('guild_permissions')) {
                    if (0 === i.length) continue;
                    let e = !1;
                    for (let t of i)
                        try {
                            let n = r.vB(t);
                            if (_.Z.can(n, l)) {
                                e = !0;
                                break;
                            }
                        } catch (e) {}
                    if (!e) continue;
                }
                let o = I.default.getCurrentUser(),
                    c = (null == o ? void 0 : o.id) === l.ownerId,
                    d = _.Z.can(m.Plq.ADMINISTRATOR, l);
                if ((t.includes('is_owner') && !c) || (t.includes('is_admin') && !d)) continue;
                null == (N = null != N ? N : {})[e.key] && (N[e.key] = e);
                let f = E.Z.getGuildId(),
                    T = null != f && f === l.id;
                if (!t.includes('is_viewing') || !!T) {
                    if (!a) return !0;
                }
            }
            return (!!a && !!s) || !1;
        })(e)
    );
}
function A(e) {
    let { survey: t } = e;
    if (((h.lastFetched = Date.now()), null == h.hiddenSurveys && (h.hiddenSurveys = {}), null != t && null == h.hiddenSurveys[t.key])) {
        if (!S(t)) return;
        p = t;
    }
}
function x() {
    if (null != p && (S(p) || ((p = null), 0))) return !1;
    !(function () {
        let e = Object.values((N = null != N ? N : {}))[0];
        if (null != e && S(e)) {
            A({
                type: 'SURVEY_FETCHED',
                survey: e
            });
            return;
        }
        if (null == p) return;
        p = null;
    })();
}
class R extends (a = l.ZP.PersistedStore) {
    initialize(e) {
        (h = null != e ? e : T), this.syncWith([E.Z], x);
    }
    getState() {
        return h;
    }
    getCurrentSurvey() {
        return p;
    }
    getSurveyOverride() {
        return h.surveyOverride;
    }
    getLastSeenTimestamp() {
        return h.lastSeen;
    }
}
f(R, 'displayName', 'SurveyStore'),
    f(R, 'persistKey', 'SurveyStore'),
    f(R, 'migrations', [
        (e) => {
            let t = { ...e };
            return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t;
        },
        (e) => {
            var t;
            return {
                ...e,
                lastSeen: null !== (t = e.lastSeen) && void 0 !== t ? t : null
            };
        },
        (e) => {
            var t;
            return {
                ...e,
                hiddenSurveys: null !== (t = e.hiddenSurveys) && void 0 !== t ? t : {}
            };
        }
    ]),
    (t.Z = new R(o.Z, {
        CONNECTION_OPEN: function () {
            var e;
            if (!(null != h.lastFetched && Date.now() - (null !== (e = h.lastFetched) && void 0 !== e ? e : 0) < C) || null != h.surveyOverride) (0, c.wk)(h.surveyOverride, !0);
        },
        SURVEY_FETCHED: A,
        SURVEY_HIDE: function (e) {
            let { key: t } = e;
            (h.hiddenSurveys[t] = !0), (p = null), (N = null != N ? N : {}), delete N[t];
        },
        SURVEY_OVERRIDE: function (e) {
            let { id: t } = e;
            (h.surveyOverride = t), null != t && delete h.hiddenSurveys[t], (0, c.wk)(h.surveyOverride, !0);
        },
        PUSH_NOTIFICATION_CLICK: function () {},
        DISPLAYED_INVITE_SHOW: function () {},
        LOGOUT: function () {
            h.hiddenSurveys = {};
        },
        SURVEY_SEEN: function () {
            h.lastSeen = Date.now();
        }
    }));
