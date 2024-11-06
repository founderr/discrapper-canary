n.d(t, {
    J: function () {
        return x;
    }
}),
    n(47120),
    n(913527);
var i,
    r,
    l,
    a = n(149765),
    o = n(442837);
n(433517);
var s = n(570140),
    c = n(491428),
    u = n(650774),
    d = n(430824),
    m = n(496675),
    h = n(914010),
    f = n(594174),
    p = n(981631);
function g(e, t, n) {
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
let _ = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null
    },
    C = _,
    E = {},
    I = null,
    x = 86400000;
((l = i || (i = {})).IS_OWNER = 'is_owner'), (l.IS_ADMIN = 'is_admin'), (l.IS_COMMUNITY = 'is_community'), (l.GUILD_SIZE = 'guild_size'), (l.IS_HUB = 'is_hub'), (l.IS_VIEWING = 'is_viewing'), (l.GUILD_PERMISSIONS = 'guild_permissions'), (l.GUILD_SIZE_ALL = 'guild_size_all');
let v = new Set(Object.values(i));
function N(e) {
    return (
        (function (e) {
            return !0;
        })(e) &&
        (function (e) {
            let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: i = [] } = e;
            if (0 === t.length) return !0;
            for (let e of t) if (!v.has(e)) return !1;
            let r = t.includes('guild_size_all'),
                l = !0;
            for (let o of Object.values(d.Z.getGuilds())) {
                if (r || t.includes('guild_size')) {
                    let e = u.Z.getMemberCount(o.id);
                    if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                        l = !1;
                        continue;
                    }
                }
                if ((t.includes('is_community') && !o.hasFeature(p.oNc.COMMUNITY)) || (t.includes('is_hub') && !o.hasFeature(p.oNc.HUB))) continue;
                if (t.includes('guild_permissions')) {
                    if (0 === i.length) continue;
                    let e = !1;
                    for (let t of i)
                        try {
                            let n = a.vB(t);
                            if (m.Z.can(n, o)) {
                                e = !0;
                                break;
                            }
                        } catch (e) {}
                    if (!e) continue;
                }
                let s = f.default.getCurrentUser(),
                    c = (null == s ? void 0 : s.id) === o.ownerId,
                    d = m.Z.can(p.Plq.ADMINISTRATOR, o);
                if ((t.includes('is_owner') && !c) || (t.includes('is_admin') && !d)) continue;
                null == (E = null != E ? E : {})[e.key] && (E[e.key] = e);
                let g = h.Z.getGuildId(),
                    _ = null != g && g === o.id;
                if (!t.includes('is_viewing') || !!_) {
                    if (!r) return !0;
                }
            }
            return (!!r && !!l) || !1;
        })(e)
    );
}
function T(e) {
    let { survey: t } = e;
    if (((C.lastFetched = Date.now()), null == C.hiddenSurveys && (C.hiddenSurveys = {}), null != t && null == C.hiddenSurveys[t.key])) {
        if (!N(t)) return;
        I = t;
    }
}
function S() {
    if (null != I && (N(I) || ((I = null), 0))) return !1;
    !(function () {
        let e = Object.values((E = null != E ? E : {}))[0];
        if (null != e && N(e)) {
            T({
                type: 'SURVEY_FETCHED',
                survey: e
            });
            return;
        }
        if (null == I) return;
        I = null;
    })();
}
class b extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        (C = null != e ? e : _), this.syncWith([h.Z], S);
    }
    getState() {
        return C;
    }
    getCurrentSurvey() {
        return I;
    }
    getSurveyOverride() {
        return C.surveyOverride;
    }
    getLastSeenTimestamp() {
        return C.lastSeen;
    }
}
g(b, 'displayName', 'SurveyStore'),
    g(b, 'persistKey', 'SurveyStore'),
    g(b, 'migrations', [
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
    (t.Z = new b(s.Z, {
        CONNECTION_OPEN: function () {
            var e;
            if (!(null != C.lastFetched && Date.now() - (null !== (e = C.lastFetched) && void 0 !== e ? e : 0) < x) || null != C.surveyOverride) (0, c.wk)(C.surveyOverride, !0);
        },
        SURVEY_FETCHED: T,
        SURVEY_HIDE: function (e) {
            let { key: t } = e;
            (C.hiddenSurveys[t] = !0), (I = null), (E = null != E ? E : {}), delete E[t];
        },
        SURVEY_OVERRIDE: function (e) {
            let { id: t } = e;
            (C.surveyOverride = t), null != t && delete C.hiddenSurveys[t], (0, c.wk)(C.surveyOverride, !0);
        },
        PUSH_NOTIFICATION_CLICK: function () {},
        DISPLAYED_INVITE_SHOW: function () {},
        LOGOUT: function () {
            C.hiddenSurveys = {};
        },
        SURVEY_SEEN: function () {
            C.lastSeen = Date.now();
        }
    }));
