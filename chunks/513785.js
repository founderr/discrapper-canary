n.d(t, {
    M: function () {
        return r;
    }
});
var r,
    i,
    a = n(442837),
    o = n(570140);
function s(e, t, n) {
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
!(function (e) {
    (e[(e.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (e[(e.FETCHING = 1)] = 'FETCHING'), (e[(e.FETCHED = 2)] = 'FETCHED');
})(r || (r = {}));
let l = {
        userTenureRewardStatusByRewardId: {},
        lastFetchTimeMs: null,
        fetchState: 0
    },
    u = l;
function c() {
    u.fetchState = 1;
}
function d(e) {
    let { userTenureRewardStatus: t } = e;
    if (null != t) {
        let e = {};
        t.forEach((t) => {
            null != t.next_tenure_reward_id && (e[t.next_tenure_reward_id] = t);
        }),
            (u.userTenureRewardStatusByRewardId = e);
    } else u.userTenureRewardStatusByRewardId = l.userTenureRewardStatusByRewardId;
    (u.lastFetchTimeMs = Date.now()), (u.fetchState = 2);
}
function _() {
    u.userTenureRewardStatusByRewardId = l.userTenureRewardStatusByRewardId;
}
function E(e) {
    let { tenureRewardIds: t } = e;
    t.forEach((e) => {
        delete u.userTenureRewardStatusByRewardId[e];
    });
}
function f() {
    u = l;
}
class h extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        u = {
            ...u,
            ...(null != e ? e : {})
        };
    }
    getState() {
        return u;
    }
    getFetchState() {
        return u.fetchState;
    }
    getTenureRewardStatusForRewardId(e) {
        return u.userTenureRewardStatusByRewardId[e];
    }
}
s(h, 'displayName', 'TenureRewardStore'),
    s(h, 'persistKey', 'TenureRewardStore'),
    (t.Z = new h(o.Z, {
        USER_TENURE_REWARD_SYNC_START: c,
        USER_TENURE_REWARD_SYNC_SUCCESS: d,
        USER_TENURE_REWARD_STATUS_RESET: _,
        USER_TENURE_REWARD_STATUS_DELETE: E,
        LOGOUT: f
    }));
