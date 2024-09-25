let r, i, a;
var o,
    s = n(47120);
var l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(570140),
    _ = n(981631);
function E(e, t, n) {
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
let f = 7,
    h = 28800000,
    p = m();
function m() {
    return {
        recentCustomStatuses: [],
        currentDefaultStatus: null
    };
}
function I() {
    p = m();
}
function T(e) {
    let { status: t, saveAsDefault: n } = e;
    (r = t),
        (i = null),
        n &&
            (p.currentDefaultStatus = {
                status: t,
                customHangStatus: i,
                expiresAt: Date.now() + h
            }),
        (a = {
            type: _.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: r
        });
}
function g(e) {
    let { status: t, emoji: n, saveAsDefault: o } = e;
    (r = _.tNA.CUSTOM),
        (i = {
            status: t,
            emoji: n
        });
    let s = [...p.recentCustomStatuses],
        l = s.findIndex((e) => e.status === t && u().isEqual(e.emoji, n));
    -1 !== l ? s.splice(l, 1) : s.length === f && s.splice(f - 1, 1),
        (p.recentCustomStatuses = [i, ...s]),
        o &&
            (p.currentDefaultStatus = {
                status: r,
                customHangStatus: i,
                expiresAt: Date.now() + h
            }),
        (a = {
            type: _.IIU.HANG_STATUS,
            name: 'Hang Status',
            state: r,
            details: t,
            emoji: n
        });
}
function S(e) {
    let { saveAsDefault: t } = e;
    (r = null),
        (i = null),
        t &&
            (p.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                expiresAt: Date.now() + h
            }),
        (a = null);
}
function A(e) {
    let { statuses: t } = e,
        n = [...p.recentCustomStatuses];
    t.forEach((e) => {
        let { status: t, emoji: o } = e,
            s = n.findIndex((e) => e.status === t && u().isEqual(e.emoji, o));
        -1 !== s && n.splice(s, 1), t === (null == i ? void 0 : i.status) && u().isEqual(o, null == i ? void 0 : i.emoji) && ((r = null), (i = null), (p.currentDefaultStatus = null), (a = null));
    }),
        (p.recentCustomStatuses = n);
}
class v extends (o = c.ZP.PersistedStore) {
    initialize(e) {
        p = {
            ...m(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return p;
    }
    getCurrentHangStatus() {
        return r;
    }
    getCustomHangStatus() {
        return i;
    }
    getRecentCustomStatuses() {
        return p.recentCustomStatuses;
    }
    getCurrentDefaultStatus() {
        return p.currentDefaultStatus;
    }
    getHangStatusActivity() {
        return null == r ? null : a;
    }
}
E(v, 'displayName', 'HangStatusStore'),
    E(v, 'persistKey', 'HangStatusStore'),
    (t.Z = new v(d.Z, {
        LOGOUT: I,
        UPDATE_HANG_STATUS: T,
        UPDATE_HANG_STATUS_CUSTOM: g,
        DELETE_INVALID_HANG_STATUSES: A,
        CLEAR_HANG_STATUS: S
    }));
