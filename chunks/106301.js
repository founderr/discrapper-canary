let r, i, a;
n(47120);
var s,
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(570140),
    d = n(981631);
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
let _ = h();
function h() {
    return {
        recentCustomStatuses: [],
        currentDefaultStatus: null
    };
}
class p extends (s = u.ZP.PersistedStore) {
    initialize(e) {
        _ = {
            ...h(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return _;
    }
    getCurrentHangStatus() {
        return r;
    }
    getCustomHangStatus() {
        return i;
    }
    getRecentCustomStatuses() {
        return _.recentCustomStatuses;
    }
    getCurrentDefaultStatus() {
        return _.currentDefaultStatus;
    }
    getHangStatusActivity() {
        return null == r ? null : a;
    }
}
f(p, 'displayName', 'HangStatusStore'),
    f(p, 'persistKey', 'HangStatusStore'),
    (t.Z = new p(c.Z, {
        LOGOUT: function () {
            _ = h();
        },
        UPDATE_HANG_STATUS: function (e) {
            let { status: t, saveAsDefault: n } = e;
            (r = t),
                (i = null),
                n &&
                    (_.currentDefaultStatus = {
                        status: t,
                        customHangStatus: i,
                        expiresAt: Date.now() + 28800000
                    }),
                (a = {
                    type: d.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: r
                });
        },
        UPDATE_HANG_STATUS_CUSTOM: function (e) {
            let { status: t, emoji: n, saveAsDefault: s } = e;
            (r = d.tNA.CUSTOM),
                (i = {
                    status: t,
                    emoji: n
                });
            let o = [..._.recentCustomStatuses],
                u = o.findIndex((e) => e.status === t && l().isEqual(e.emoji, n));
            -1 !== u ? o.splice(u, 1) : 7 === o.length && o.splice(6, 1),
                (_.recentCustomStatuses = [i, ...o]),
                s &&
                    (_.currentDefaultStatus = {
                        status: r,
                        customHangStatus: i,
                        expiresAt: Date.now() + 28800000
                    }),
                (a = {
                    type: d.IIU.HANG_STATUS,
                    name: 'Hang Status',
                    state: r,
                    details: t,
                    emoji: n
                });
        },
        DELETE_INVALID_HANG_STATUSES: function (e) {
            let { statuses: t } = e,
                n = [..._.recentCustomStatuses];
            t.forEach((e) => {
                let { status: t, emoji: s } = e,
                    o = n.findIndex((e) => e.status === t && l().isEqual(e.emoji, s));
                -1 !== o && n.splice(o, 1), t === (null == i ? void 0 : i.status) && l().isEqual(s, null == i ? void 0 : i.emoji) && ((r = null), (i = null), (_.currentDefaultStatus = null), (a = null));
            }),
                (_.recentCustomStatuses = n);
        },
        CLEAR_HANG_STATUS: function (e) {
            let { saveAsDefault: t } = e;
            (r = null),
                (i = null),
                t &&
                    (_.currentDefaultStatus = {
                        status: null,
                        customHangStatus: null,
                        expiresAt: Date.now() + 28800000
                    }),
                (a = null);
        }
    }));
