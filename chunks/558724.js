n.d(t, {
    J: function () {
        return R;
    }
});
var r,
    i,
    a = n(47120);
var o = n(913527),
    s = n.n(o),
    l = n(149765),
    u = n(442837),
    c = n(433517),
    d = n(570140),
    _ = n(491428),
    E = n(650774),
    f = n(430824),
    h = n(496675),
    p = n(914010),
    m = n(594174),
    I = n(981631);
function T(e, t, n) {
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
let g = {
        hiddenSurveys: {},
        surveyOverride: null,
        lastFetched: null,
        lastSeen: null
    },
    S = g,
    A = !1,
    v = !1,
    N = {},
    O = null,
    R = 86400000;
!(function (e) {
    (e.IS_OWNER = 'is_owner'), (e.IS_ADMIN = 'is_admin'), (e.IS_COMMUNITY = 'is_community'), (e.GUILD_SIZE = 'guild_size'), (e.IS_HUB = 'is_hub'), (e.IS_VIEWING = 'is_viewing'), (e.GUILD_PERMISSIONS = 'guild_permissions'), (e.GUILD_SIZE_ALL = 'guild_size_all');
})(r || (r = {}));
let C = new Set(Object.values(r));
function y() {
    var e;
    if (!(null != S.lastFetched && Date.now() - (null !== (e = S.lastFetched) && void 0 !== e ? e : 0) < R) || null != S.surveyOverride) (0, _.wk)(S.surveyOverride, !0);
}
function b(e) {
    return D(e) && L(e);
}
function L(e) {
    let { guild_requirements: t = [], guild_size: n = [null, null], guild_permissions: r = [] } = e;
    if (0 === t.length) return !0;
    for (let e of t) if (!C.has(e)) return !1;
    let i = t.includes('guild_size_all'),
        a = !0;
    for (let o of Object.values(f.Z.getGuilds())) {
        if (i || t.includes('guild_size')) {
            let e = E.Z.getMemberCount(o.id);
            if (null == e || (null != n[0] && e < n[0]) || (null != n[1] && e > n[1])) {
                a = !1;
                continue;
            }
        }
        if ((t.includes('is_community') && !o.hasFeature(I.oNc.COMMUNITY)) || (t.includes('is_hub') && !o.hasFeature(I.oNc.HUB))) continue;
        if (t.includes('guild_permissions')) {
            if (0 === r.length) continue;
            let e = !1;
            for (let t of r)
                try {
                    let n = l.vB(t);
                    if (h.Z.can(n, o)) {
                        e = !0;
                        break;
                    }
                } catch (e) {}
            if (!e) continue;
        }
        let s = m.default.getCurrentUser(),
            u = (null == s ? void 0 : s.id) === o.ownerId,
            c = h.Z.can(I.Plq.ADMINISTRATOR, o);
        if ((t.includes('is_owner') && !u) || (t.includes('is_admin') && !c)) continue;
        null == (N = null != N ? N : {})[e.key] && (N[e.key] = e);
        let d = p.Z.getGuildId(),
            _ = null != d && d === o.id;
        if (!t.includes('is_viewing') || !!_) {
            if (!i) return !0;
        }
    }
    return (!!i && !!a) || !1;
}
function D(e) {
    return !0;
}
function M(e) {
    let { survey: t } = e;
    if (((S.lastFetched = Date.now()), null == S.hiddenSurveys && (S.hiddenSurveys = {}), null != t && null == S.hiddenSurveys[t.key])) {
        if (!b(t)) return;
        O = t;
    }
}
function P(e) {
    let { id: t } = e;
    (S.surveyOverride = t), null != t && delete S.hiddenSurveys[t], (0, _.wk)(S.surveyOverride, !0);
}
function U() {
    A = !0;
}
function w() {
    v = !0;
}
function x(e) {
    let { key: t } = e;
    (S.hiddenSurveys[t] = !0), (O = null), (N = null != N ? N : {}), delete N[t];
}
function G() {
    S.hiddenSurveys = {};
}
function k(e) {
    return !!b(e) || ((O = null), !1);
}
function B() {
    let e = Object.values((N = null != N ? N : {}))[0];
    if (null != e && b(e)) {
        M({
            type: 'SURVEY_FETCHED',
            survey: e
        });
        return;
    }
    if (null == O) return !1;
    O = null;
}
function F() {
    if (null != O && k(O)) return !1;
    B();
}
function Z() {
    S.lastSeen = Date.now();
}
class V extends (i = u.ZP.PersistedStore) {
    initialize(e) {
        (S = null != e ? e : g), this.syncWith([p.Z], F);
    }
    getState() {
        return S;
    }
    getCurrentSurvey() {
        return O;
    }
    getSurveyOverride() {
        return S.surveyOverride;
    }
    getLastSeenTimestamp() {
        return S.lastSeen;
    }
}
T(V, 'displayName', 'SurveyStore'),
    T(V, 'persistKey', 'SurveyStore'),
    T(V, 'migrations', [
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
    (t.Z = new V(d.Z, {
        CONNECTION_OPEN: y,
        SURVEY_FETCHED: M,
        SURVEY_HIDE: x,
        SURVEY_OVERRIDE: P,
        PUSH_NOTIFICATION_CLICK: U,
        DISPLAYED_INVITE_SHOW: w,
        LOGOUT: G,
        SURVEY_SEEN: Z
    }));
