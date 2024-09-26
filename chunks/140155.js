var r,
    i = n(47120);
var a = n(653041);
var o = n(442837),
    s = n(570140),
    l = n(924301);
n(57132);
var u = n(786761),
    c = n(735778),
    d = n(23750),
    _ = n(594174),
    E = n(709054),
    f = n(497089),
    h = n(178480),
    p = n(981631);
function m(e, t, n) {
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
function g() {
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
function S() {
    I.loading = !0;
}
function A() {
    (I.loading = !1), (I.initialized = !0), (I.errored = !0);
}
function v(e) {
    return {
        ...e,
        kind: 'notification-center-item',
        message: null != e.message ? (0, u.e5)(e.message) : void 0
    };
}
function N(e) {
    g();
    let t = [];
    e.relationships.forEach((e) => {
        let { type: n, user: r, since: i, is_spam_request: a } = e;
        if (n !== p.OGo.PENDING_INCOMING || ((0, c.A)({ location: 'notification-center' }) && a) || null == r || null == i) return null;
        let o = _.default.getUser(r.id);
        if (null == o) return null;
        t.push((0, h.mH)(o, i));
    }),
        e.guilds.forEach((e) => {
            e.guild_scheduled_events.forEach((e) => {
                k(e);
            });
        }),
        (I.notifCenterLocalItems = t);
}
function O(e) {
    let { items: t, hasMore: n, cursor: r } = e;
    if (!!I.loading) (I.loading = !1), (I.initialized = !0), (I.errored = !1), (I.isDataStale = !1), (null == r || !I.notifCenterIds.has(r)) && ((I.paginationHasMore = t.length > 0 && n), (I.paginationCursor = t.length > 0 ? r : void 0)), (I.notifCenterItems = [...I.notifCenterItems, ...t.map(v).filter((e) => !I.notifCenterIds.has(e.id))]), I.notifCenterItems.sort((e, t) => E.default.compare(t.id, e.id)), t.forEach((e) => I.notifCenterIds.add(e.id));
}
function R(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? v(e.item) : e.item;
    if (!I.initialized || !T(t) || I.notifCenterIds.has(t.id)) return !1;
    I.notifCenterIds.add(t.id), (I.notifCenterItems = [t, ...I.notifCenterItems]), I.notifCenterItems.sort((e, t) => E.default.compare(t.id, e.id));
}
function C(e) {
    let { id: t } = e;
    if (!I.notifCenterIds.has(t)) return !1;
    I.notifCenterIds.delete(t), (I.notifCenterItems = I.notifCenterItems.filter((e) => e.id !== t));
}
function y(e, t) {
    I.notifCenterItems = I.notifCenterItems
        .map((n) =>
            e.includes(n.id)
                ? {
                      ...n,
                      acked: t
                  }
                : n
        )
        .filter(T);
}
function L(e) {
    let { ids: t } = e;
    y(t, !0);
}
function b(e) {
    let { ids: t } = e;
    y(t, !1);
}
function D(e) {
    let { active: t } = e;
    I.notifCenterActive = t;
}
function M(e) {
    let { focused: t } = e;
    I.notifCenterTabFocused = t;
}
function P(e, t, n) {
    var r;
    return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n;
}
function U(e) {
    if (e.relationship.type === p.OGo.PENDING_INCOMING && (!(0, c.A)({ location: 'notification-center' }) || !e.relationship.isSpamRequest)) {
        let { user: t, since: n } = e.relationship;
        if (null == n) return null;
        let r = _.default.getUser(t.id);
        if (null == r) return null;
        I.notifCenterLocalItems = [...I.notifCenterLocalItems, (0, h.mH)(r, n)];
    }
    e.relationship.type === p.OGo.FRIEND &&
        (I.notifCenterLocalItems = I.notifCenterLocalItems.map((t) =>
            P(t, f.O7.INCOMING_FRIEND_REQUESTS, e.relationship.user.id)
                ? {
                      ...t,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(e.relationship.user.id, '_').concat(t.id),
                      type: f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  }
                : t
        )),
        e.relationship.type === p.OGo.BLOCKED && (I.notifCenterLocalItems = I.notifCenterLocalItems.filter((t) => !P(t, f.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !P(t, f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)));
}
function w(e) {
    I.notifCenterLocalItems = I.notifCenterLocalItems.filter((t) => !P(t, f.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !P(t, f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
}
function x(e) {
    let { item_enum: t } = e;
    I.notifCenterItems = I.notifCenterItems
        .map((e) =>
            e.item_enum === t
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
    let { guildScheduledEvent: t } = e;
    k(t);
}
function k(e) {
    if (!!(0, l.Z2)(e))
        I.notifCenterItems = I.notifCenterItems.map((t) =>
            t.type === f.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? {
                      ...t,
                      disable_action: !0
                  }
                : t
        );
}
function B(e) {
    let { newBuild: t } = e;
    if (null !== t) {
        let e = (0, h.hn)(t);
        void 0 === I.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (I.notifCenterLocalItems = [...I.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
    }
}
class F extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(_.default), null != e)) {
            let t = (e) => ({
                    ...e,
                    message: null != e.message ? new d.ZP(e.message) : void 0
                }),
                n = e.notifCenterItems.map(t);
            n.length > 0 &&
                (I = {
                    ...I,
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: n
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
m(F, 'displayName', 'NotificationCenterItemsStore'), m(F, 'persistKey', 'NotificationCenterItemsStore_v2');
let Z = new F(s.Z, {
    CONNECTION_OPEN: N,
    LOGOUT: g,
    NOTIFICATION_CENTER_ITEMS_ACK: L,
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: b,
    GUILD_SCHEDULED_EVENT_UPDATE: G,
    NOTIFICATION_CENTER_ITEM_CREATE: R,
    NOTIFICATION_CENTER_ITEM_DELETE: C,
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: R,
    LOAD_NOTIFICATION_CENTER_ITEMS: S,
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: A,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: O,
    RESET_NOTIFICATION_CENTER: g,
    NOTIFICATION_CENTER_SET_ACTIVE: D,
    NOTIFICATION_CENTER_TAB_FOCUSED: M,
    RELATIONSHIP_ADD: U,
    RELATIONSHIP_REMOVE: w,
    NOTIFICATION_CENTER_ITEM_COMPLETED: x,
    SET_RECENT_MENTIONS_FILTER: g,
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: B
});
t.Z = Z;
