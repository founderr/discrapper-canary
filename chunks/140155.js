n(47120), n(653041);
var r,
    i = n(442837),
    a = n(570140),
    s = n(924301);
n(57132);
var o = n(786761),
    l = n(735778),
    u = n(922611),
    c = n(23750),
    d = n(594174),
    f = n(709054),
    _ = n(497089),
    p = n(178480),
    h = n(981631);
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
let g = {
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
function E(e) {
    return null != e.id && null != e.type;
}
function v() {
    g = {
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
function b(e) {
    return {
        ...e,
        kind: 'notification-center-item',
        message: null != e.message ? (0, o.e5)(e.message) : void 0
    };
}
function I(e) {
    let t = 'NOTIFICATION_CENTER_ITEM_CREATE' === e.type ? b(e.item) : e.item;
    if (!g.initialized || !E(t) || g.notifCenterIds.has(t.id)) return !1;
    g.notifCenterIds.add(t.id), (g.notifCenterItems = [t, ...g.notifCenterItems]), g.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id));
}
function T(e, t) {
    g.notifCenterItems = g.notifCenterItems
        .map((n) =>
            e.includes(n.id)
                ? {
                      ...n,
                      acked: t
                  }
                : n
        )
        .filter(E);
}
function S(e, t, n) {
    var r;
    return e.type === t && (null === (r = e.other_user) || void 0 === r ? void 0 : r.id) === n;
}
function y(e) {
    let { relationship: t } = e,
        { id: n, type: r, isSpamRequest: i, userIgnored: a, user: s, since: o } = t;
    if (r === h.OGo.PENDING_INCOMING && (!(0, l.A)({ location: 'notification-center' }) || !i) && !((0, u.JX)({ location: 'notification-center' }) && a)) {
        if (null == o) return null;
        let e = d.default.getUser(s.id);
        if (null == e) return null;
        g.notifCenterLocalItems = [...g.notifCenterLocalItems, (0, p.mH)(e, o)];
    }
    r === h.OGo.FRIEND &&
        (g.notifCenterLocalItems = g.notifCenterLocalItems.map((e) =>
            S(e, _.O7.INCOMING_FRIEND_REQUESTS, t.user.id)
                ? {
                      ...e,
                      acked: !0,
                      forceUnacked: !1,
                      local_id: 'incoming_friend_requests_accepted_'.concat(s.id, '_').concat(e.id),
                      type: _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED
                  }
                : e
        )),
        r === h.OGo.BLOCKED && (g.notifCenterLocalItems = g.notifCenterLocalItems.filter((e) => !S(e, _.O7.INCOMING_FRIEND_REQUESTS, n) && !S(e, _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, n)));
}
function A(e) {
    if (!!(0, s.Z2)(e))
        g.notifCenterItems = g.notifCenterItems.map((t) =>
            t.type === _.DY.GUILD_SCHEDULED_EVENT_STARTED && t.guild_scheduled_event_id === e.id
                ? {
                      ...t,
                      disable_action: !0
                  }
                : t
        );
}
class N extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(d.default), null != e)) {
            let t = e.notifCenterItems.map((e) => ({
                ...e,
                message: null != e.message ? new c.ZP(e.message) : void 0
            }));
            t.length > 0 &&
                (g = {
                    ...g,
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
            ...g,
            notifCenterItems: g.notifCenterItems.map(e),
            staleNotifCenterItems: g.staleNotifCenterItems.map(e)
        };
    }
    get loading() {
        return g.loading;
    }
    get initialized() {
        return g.initialized;
    }
    get items() {
        return g.isDataStale ? g.staleNotifCenterItems : g.notifCenterItems;
    }
    get hasMore() {
        return g.paginationHasMore;
    }
    get cursor() {
        return g.paginationCursor;
    }
    get errored() {
        return g.errored;
    }
    get active() {
        return g.notifCenterActive;
    }
    get localItems() {
        return g.notifCenterLocalItems;
    }
    get tabFocused() {
        return g.notifCenterTabFocused;
    }
}
m(N, 'displayName', 'NotificationCenterItemsStore'), m(N, 'persistKey', 'NotificationCenterItemsStore_v2');
let C = new N(a.Z, {
    CONNECTION_OPEN: function (e) {
        v();
        let t = [];
        e.relationships.forEach((e) => {
            let { type: n, user: r, since: i, is_spam_request: a, user_ignored: s } = e;
            if (n !== h.OGo.PENDING_INCOMING || ((0, l.A)({ location: 'notification-center' }) && a) || ((0, u.JX)({ location: 'notification-center' }) && s) || null == r || null == i) return null;
            let o = d.default.getUser(r.id);
            if (null == o) return null;
            t.push((0, p.mH)(o, i));
        }),
            e.guilds.forEach((e) => {
                e.guild_scheduled_events.forEach((e) => {
                    A(e);
                });
            }),
            (g.notifCenterLocalItems = t);
    },
    LOGOUT: v,
    NOTIFICATION_CENTER_ITEMS_ACK: function (e) {
        let { ids: t } = e;
        T(t, !0);
    },
    NOTIFICATION_CENTER_ITEMS_ACK_FAILURE: function (e) {
        let { ids: t } = e;
        T(t, !1);
    },
    GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
        let { guildScheduledEvent: t } = e;
        A(t);
    },
    NOTIFICATION_CENTER_ITEM_CREATE: I,
    NOTIFICATION_CENTER_ITEM_DELETE: function (e) {
        let { id: t } = e;
        if (!g.notifCenterIds.has(t)) return !1;
        g.notifCenterIds.delete(t), (g.notifCenterItems = g.notifCenterItems.filter((e) => e.id !== t));
    },
    NOTIFICATION_CENTER_ITEM_DELETE_FAILURE: I,
    LOAD_NOTIFICATION_CENTER_ITEMS: function () {
        g.loading = !0;
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: function () {
        (g.loading = !1), (g.initialized = !0), (g.errored = !0);
    },
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: function (e) {
        let { items: t, hasMore: n, cursor: r } = e;
        if (!!g.loading) (g.loading = !1), (g.initialized = !0), (g.errored = !1), (g.isDataStale = !1), (null == r || !g.notifCenterIds.has(r)) && ((g.paginationHasMore = t.length > 0 && n), (g.paginationCursor = t.length > 0 ? r : void 0)), (g.notifCenterItems = [...g.notifCenterItems, ...t.map(b).filter((e) => !g.notifCenterIds.has(e.id))]), g.notifCenterItems.sort((e, t) => f.default.compare(t.id, e.id)), t.forEach((e) => g.notifCenterIds.add(e.id));
    },
    RESET_NOTIFICATION_CENTER: v,
    NOTIFICATION_CENTER_SET_ACTIVE: function (e) {
        let { active: t } = e;
        g.notifCenterActive = t;
    },
    NOTIFICATION_CENTER_TAB_FOCUSED: function (e) {
        let { focused: t } = e;
        g.notifCenterTabFocused = t;
    },
    RELATIONSHIP_ADD: y,
    RELATIONSHIP_UPDATE: y,
    RELATIONSHIP_REMOVE: function (e) {
        g.notifCenterLocalItems = g.notifCenterLocalItems.filter((t) => !S(t, _.O7.INCOMING_FRIEND_REQUESTS, e.relationship.id) && !S(t, _.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED, e.relationship.id));
    },
    NOTIFICATION_CENTER_ITEM_COMPLETED: function (e) {
        let { item_enum: t } = e;
        g.notifCenterItems = g.notifCenterItems
            .map((e) =>
                e.item_enum === t
                    ? {
                          ...e,
                          completed: !0,
                          acked: !0
                      }
                    : e
            )
            .filter(E);
    },
    SET_RECENT_MENTIONS_FILTER: v,
    MOBILE_NATIVE_UPDATE_CHECK_FINISHED: function (e) {
        let { newBuild: t } = e;
        if (null !== t) {
            let e = (0, p.hn)(t);
            void 0 === g.notifCenterLocalItems.find((t) => t.local_id === e.local_id) && (g.notifCenterLocalItems = [...g.notifCenterLocalItems.filter((t) => t.kind !== e.kind), e]);
        }
    }
});
t.Z = C;
