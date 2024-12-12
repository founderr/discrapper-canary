var i,
    a = r(47120);
var s = r(653041);
var o = r(442837),
    l = r(570140),
    u = r(924301),
    c = r(786761),
    d = r(735778),
    f = r(922611),
    _ = r(23750),
    h = r(594174),
    p = r(709054),
    m = r(497089),
    g = r(178480),
    E = r(981631);
function v(e, n, r) {
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
let I = {
    loading: !1,
    initialized: !1,
    errored: !1,
    isDataStale: !1,
    notifCenterItems: [],
    staleNotifCenterItems: [],
    notifCenterIds: new Set(),
    notifCenterLocalItems: [],
    paginationHasMore: !0,
    paginationCursor: void 0,
    notifCenterActive: !1,
    notifCenterTabFocused: !1
};
function T(e) {
    return null != e.id && null != e.type;
}
function b() {
    I = {
        loading: !1,
        initialized: !1,
        errored: !1,
        isDataStale: !1,
        notifCenterItems: [],
        staleNotifCenterItems: [],
        notifCenterIds: new Set(),
        notifCenterLocalItems: [],
        paginationHasMore: !0,
        paginationCursor: void 0,
        notifCenterActive: !1,
        notifCenterTabFocused: !1
    };
}
function y() {
    I.loading = !0;
}
function S() {
    (I.loading = !1), (I.initialized = !0), (I.errored = !0);
}
function A(e) {
    return {
        ...e,
        kind: 'notification-center-item',
        message: null != e.message ? (0, c.e5)(e.message) : void 0
    };
}
function N(e) {
    b();
    let n = [];
    e.relationships.forEach((e) => {
        let { type: r, user: i, since: a, is_spam_request: s, user_ignored: o } = e;
        if (r !== E.OGo.PENDING_INCOMING || ((0, d.A)({ location: 'notification-center' }) && s) || ((0, f.JX)({ location: 'notification-center' }) && o) || null == i || null == a) return null;
        let l = h.default.getUser(i.id);
        if (null == l) return null;
        n.push((0, g.mH)(l, a));
    }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                Z(e);
            });
        }),
        (I.notifCenterLocalItems = n);
}
function C(e) {
    let { items: n, hasMore: r, cursor: i } = e;
    if (!!I.loading) (I.loading = !1), (I.initialized = !0), (I.errored = !1), (I.isDataStale = !1), (null == i || !I.notifCenterIds.has(i)) && ((I.paginationHasMore = n.length > 0 && r), (I.paginationCursor = n.length > 0 ? i : void 0)), (I.notifCenterItems = [...I.notifCenterItems, ...n.map(A).filter((e) => !I.notifCenterIds.has(e.id))]), I.notifCenterItems.sort((e, n) => p.default.compare(n.id, e.id)), n.forEach((e) => I.notifCenterIds.add(e.id));
}
function R(e) {
    let n = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? A(e.item) : e.item;
    if (!I.initialized || !T(n) || I.notifCenterIds.has(n.id)) return !1;
    I.notifCenterIds.add(n.id), (I.notifCenterItems = [n, ...I.notifCenterItems]), I.notifCenterItems.sort((e, n) => p.default.compare(n.id, e.id));
}
function O(e) {
    let { id: n } = e;
    if (!I.notifCenterIds.has(n)) return !1;
    I.notifCenterIds.delete(n), (I.notifCenterItems = I.notifCenterItems.filter((e) => e.id !== n));
}
function D(e, n) {
    I.notifCenterItems = I.notifCenterItems
        .map((r) =>
            e.includes(r.id)
                ? {
                      ...r,
                      acked: n
                  }
                : r
        )
        .filter(T);
}
function L(e) {
    let { ids: n } = e;
    D(n, !0);
}
function x(e) {
    let { ids: n } = e;
    D(n, !1);
}
function w(e) {
    let { active: n } = e;
    I.notifCenterActive = n;
}
function P(e) {
    let { focused: n } = e;
    I.notifCenterTabFocused = n;
}
function M(e, n, r) {
    var i;
    return e.type === n && (null === (i = e.other_user) || void 0 === i ? void 0 : i.id) === r;
}
function k(e) {
    let { relationship: n } = e,
        { id: r, type: i, isSpamRequest: a, userIgnored: s, user: o, since: l } = n;
    if (i === E.OGo.PENDING_INCOMING && (!(0, d.A)({ location: 'notification-center' }) || !a) && !((0, f.JX)({ location: 'notification-center' }) && s)) {
        if (null == l) return null;
        if (null != o) {
            let e = h.default.getUser(o.id);
            null != e && (I.notifCenterLocalItems = [...I.notifCenterLocalItems, (0, g.mH)(e, l)]);
        }
    }
    i === E.OGo.FRIEND &&
        (I.notifCenterLocalItems = I.notifCenterLocalItems.map((e) =>
            M(e, m.O7.INCOMING_FRIEND_REQUESTS, n.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(o.id, '_').concat(e.id),
                      type: m.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  }
                : e
        )),
        (i === E.OGo.BLOCKED || s) && (I.notifCenterLocalItems = I.notifCenterLocalItems.filter((e) => !M(e, m.O7.INCOMING_FRIEND_REQUESTS, r) && !M(e, m.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, r)));
}
function U(e) {
    I.notifCenterLocalItems = I.notifCenterLocalItems.filter((n) => !M(n, m.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !M(n, m.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
}
function B(e) {
    let { item_enum: n } = e;
    I.notifCenterItems = I.notifCenterItems
        .map((e) =>
            e.item_enum === n
                ? {
                      ...e,
                      completed: !0,
                      acked: !0
                  }
                : e
        )
        .filter(T);
}
function G(e) {
    let { guildScheduledEvent: n } = e;
    Z(n);
}
function Z(e) {
    if (!!(0, u.Z2)(e))
        I.notifCenterItems = I.notifCenterItems.map((n) =>
            n.type === m.DY.GUILD_SCHEDULED_EVENT_STARTED && n.guild_scheduled_event_id === e.id
                ? {
                      ...n,
                      disable_action: !0
                  }
                : n
        );
}
function F(e) {
    let { newBuild: n } = e;
    if (null !== n) {
        let e = (0, g.hn)(n);
        void 0 === I.notifCenterLocalItems.find((n) => n.local_id === e.local_id) && (I.notifCenterLocalItems = [...I.notifCenterLocalItems.filter((n) => n.kind !== e.kind), e]);
    }
}
class V extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(h.default), null != e)) {
            let n = (e) => ({
                    ...e,
                    message: null != e.message ? new _.ZP(e.message) : void 0
                }),
                r = e.notifCenterItems.map(n);
            r.length > 0 &&
                (I = {
                    ...I,
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: r
                });
        }
    }
    getState() {
        let e = (e) => ({
            ...e,
            message: null != e.message ? e.message.toJS() : void 0
        });
        return {
            ...I,
            notifCenterItems: I.notifCenterItems.map(e),
            staleNotifCenterItems: I.staleNotifCenterItems.map(e)
        };
    }
    get loading() {
        return I.loading;
    }
    get initialized() {
        return I.initialized;
    }
    get items() {
        return I.isDataStale ? I.staleNotifCenterItems : I.notifCenterItems;
    }
    get hasMore() {
        return I.paginationHasMore;
    }
    get cursor() {
        return I.paginationCursor;
    }
    get errored() {
        return I.errored;
    }
    get active() {
        return I.notifCenterActive;
    }
    get localItems() {
        return I.notifCenterLocalItems;
    }
    get tabFocused() {
        return I.notifCenterTabFocused;
    }
}
v(V, 'displayName', 'NotificationCenterItemsStore'), v(V, 'persistKey', 'NotificationCenterItemsStore_v2');
let j = new V(l.Z, {
    CONNECTION_OPEN: N,
    LOGOUT: b,
    NOTIFICATION_CENTER_ITEMS_ACK: L,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: x,
    GUILD_SCHEDULED_EVENT_UPDATE: G,
    NOTIFICATION_CENTER_ITEM_CREATE: R,
    NOTIFICATION_CENTER_ITEM_DELETE: O,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: R,
    LOAD_NOTIFICATION_CENTER_ITEMS: y,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: S,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: C,
    RESET_NOTIFICATION_CENTER: b,
    NOTIFICATION_CENTER_SET_ACTIVE: w,
    NOTIFICATION_CENTER_TAB_FOCUSED: P,
    RELATIONSHIP_ADD: k,
    RELATIONSHIP_UPDATE: k,
    RELATIONSHIP_REMOVE: U,
    NOTIFICATION_CENTER_ITEM_COMPLETED: B,
    SET_RECENT_MENTIONS_FILTER: b,
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: F
});
n.Z = j;
