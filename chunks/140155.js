n(47120), n(653041);
var r,
    i = n(442837),
    a = n(570140),
    s = n(924301);
n(57132);
var o = n(786761),
    l = n(735778),
    u = n(23750),
    c = n(594174),
    d = n(709054),
    f = n(497089),
    _ = n(178480),
    h = n(981631);
function p(e, t, n) {
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
let m = {
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
function g(e) {
    return null != e.id && null != e.type;
}
function E() {
    m = {
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
function v(e) {
    return {
        ...e,
        kind: 'notification-center-item',
        message: null != e.message ? (0, o.e5)(e.message) : void 0
    };
}
function I(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? v(e.item) : e.item;
    if (!m.initialized || !g(t) || m.notifCenterIds.has(t.id)) return !1;
    m.notifCenterIds.add(t.id), (m.notifCenterItems = [t, ...m.notifCenterItems]), m.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id));
}
function S(e, t) {
    m.notifCenterItems = m.notifCenterItems
        .map((n) =>
            e.includes(n.id)
                ? {
                      ...n,
                      acked: t
                  }
                : n
        )
        .filter(g);
}
function T(e, t, n) {
    var r;
    return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n;
}
function b(e) {
    if (!!(0, s.Z2)(e))
        m.notifCenterItems = m.notifCenterItems.map((t) =>
            t.type === f.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? {
                      ...t,
                      disable_action: !0
                  }
                : t
        );
}
class y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(c.default), null != e)) {
            let t = e.notifCenterItems.map((e) => ({
                ...e,
                message: null != e.message ? new u.ZP(e.message) : void 0
            }));
            t.length > 0 &&
                (m = {
                    ...m,
                    initialized: !0,
                    isDataStale: !0,
                    notifCenterItems: [],
                    staleNotifCenterItems: t
                });
        }
    }
    getState() {
        let e = (e) => ({
            ...e,
            message: null != e.message ? e.message.toJS() : void 0
        });
        return {
            ...m,
            notifCenterItems: m.notifCenterItems.map(e),
            staleNotifCenterItems: m.staleNotifCenterItems.map(e)
        };
    }
    get loading() {
        return m.loading;
    }
    get initialized() {
        return m.initialized;
    }
    get items() {
        return m.isDataStale ? m.staleNotifCenterItems : m.notifCenterItems;
    }
    get hasMore() {
        return m.paginationHasMore;
    }
    get cursor() {
        return m.paginationCursor;
    }
    get errored() {
        return m.errored;
    }
    get active() {
        return m.notifCenterActive;
    }
    get localItems() {
        return m.notifCenterLocalItems;
    }
    get tabFocused() {
        return m.notifCenterTabFocused;
    }
}
p(y, 'displayName', 'NotificationCenterItemsStore'), p(y, 'persistKey', 'NotificationCenterItemsStore_v2');
let A = new y(a.Z, {
    CONNECTION_OPEN: function (e) {
        E();
        let t = [];
        e.relationships.forEach((e) => {
            let { type: n, user: r, since: i, is_spam_request: a } = e;
            if (n !== h.OGo.PENDING_INCOMING || ((0, l.A)({ location: 'notification-center' }) && a) || null == r || null == i) return null;
            let s = c.default.getUser(r.id);
            if (null == s) return null;
            t.push((0, _.mH)(s, i));
        }),
            e.guilds.forEach((e) => {
                e.guild_scheduled_events.forEach((e) => {
                    b(e);
                });
            }),
            (m.notifCenterLocalItems = t);
    },
    LOGOUT: E,
    NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
        let { ids: t } = e;
        S(t, !0);
    },
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function (e) {
        let { ids: t } = e;
        S(t, !1);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        b(t);
    },
    NOTIFICATION_CENTER_ITEM_CREATE: I,
    NOTIFICATION_CENTER_ITEM_DELETE: function (e) {
        let { id: t } = e;
        if (!m.notifCenterIds.has(t)) return !1;
        m.notifCenterIds.delete(t), (m.notifCenterItems = m.notifCenterItems.filter((e) => e.id !== t));
    },
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: I,
    LOAD_NOTIFICATION_CENTER_ITEMS: function () {
        m.loading = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function () {
        (m.loading = !1), (m.initialized = !0), (m.errored = !0);
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        let { items: t, hasMore: n, cursor: r } = e;
        if (!!m.loading) (m.loading = !1), (m.initialized = !0), (m.errored = !1), (m.isDataStale = !1), (null == r || !m.notifCenterIds.has(r)) && ((m.paginationHasMore = t.length > 0 && n), (m.paginationCursor = t.length > 0 ? r : void 0)), (m.notifCenterItems = [...m.notifCenterItems, ...t.map(v).filter((e) => !m.notifCenterIds.has(e.id))]), m.notifCenterItems.sort((e, t) => d.default.compare(t.id, e.id)), t.forEach((e) => m.notifCenterIds.add(e.id));
    },
    RESET_NOTIFICATION_CENTER: E,
    NOTIFICATION_CENTER_SET_ACTIVE: function (e) {
        let { active: t } = e;
        m.notifCenterActive = t;
    },
    NOTIFICATION_CENTER_TAB_FOCUSED: function (e) {
        let { focused: t } = e;
        m.notifCenterTabFocused = t;
    },
    RELATIONSHIP_ADD: function (e) {
        if (e.relationship.type === h.OGo.PENDING_INCOMING && (!(0, l.A)({ location: 'notification-center' }) || !e.relationship.isSpamRequest)) {
            let { user: t, since: n } = e.relationship;
            if (null == n) return null;
            let r = c.default.getUser(t.id);
            if (null == r) return null;
            m.notifCenterLocalItems = [...m.notifCenterLocalItems, (0, _.mH)(r, n)];
        }
        e.relationship.type === h.OGo.FRIEND &&
            (m.notifCenterLocalItems = m.notifCenterLocalItems.map((t) =>
                T(t, f.O7.INCOMING_FRIEND_REQUESTS, e.relationship.user.id)
                    ? {
                          ...t,
                          acked: !0,
                          forceUnacked: !1,
                          local_id: 'incoming_friend_requests_accepted_'.concat(e.relationship.user.id, '_').concat(t.id),
                          type: f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                      }
                    : t
            )),
            e.relationship.type === h.OGo.BLOCKED && (m.notifCenterLocalItems = m.notifCenterLocalItems.filter((t) => !T(t, f.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !T(t, f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id)));
    },
    RELATIONSHIP_REMOVE: function (e) {
        m.notifCenterLocalItems = m.notifCenterLocalItems.filter((t) => !T(t, f.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !T(t, f.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
    },
    NOTIFICATION_CENTER_ITEM_COMPLETED: function (e) {
        let { item_enum: t } = e;
        m.notifCenterItems = m.notifCenterItems
            .map((e) =>
                e.item_enum === t
                    ? {
                          ...e,
                          completed: !0,
                          acked: !0
                      }
                    : e
            )
            .filter(g);
    },
    SET_RECENT_MENTIONS_FILTER: E,
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function (e) {
        let { newBuild: t } = e;
        if (null !== t) {
            let e = (0, _.hn)(t);
            void 0 === m.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (m.notifCenterLocalItems = [...m.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
        }
    }
});
t.Z = A;
