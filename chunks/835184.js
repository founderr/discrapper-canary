var i,
    l = e(442837),
    r = e(570140),
    d = e(314897),
    a = e(924301),
    u = e(658041),
    s = e(765305);
function o(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[n] = e),
        t
    );
}
let _ = {},
    c = {};
function E(t) {
    let n = { ..._ };
    delete n[t], (_ = n);
    let e = { ...c };
    delete e[t], (c = e);
}
class I extends (i = l.ZP.PersistedStore) {
    initialize(t) {
        if (null != t) {
            var n, e;
            (_ = null !== (n = t.upcomingEventDismissals) && void 0 !== n ? n : {}), (c = null !== (e = t.upcomingEventSeenTimestamps) && void 0 !== e ? e : {});
        }
    }
    getGuildEventNoticeDismissalTime(t) {
        return _[t];
    }
    getAllEventDismissals() {
        return _;
    }
    getUpcomingNoticeSeenTime(t) {
        return c[t];
    }
    getAllUpcomingNoticeSeenTimes() {
        return c;
    }
    getState() {
        return {
            upcomingEventDismissals: _,
            upcomingEventSeenTimestamps: c
        };
    }
}
o(I, 'displayName', 'UpcomingEventNoticesStore'),
    o(I, 'persistKey', 'UpcomingEventNotices'),
    (n.Z = new I(r.Z, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (t) {
            let { eventId: n } = t,
                e = { ..._ };
            (e[n] = Date.now()), (_ = e);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
            let { guildScheduledEvent: n } = t;
            (n.status === s.p1.CANCELED || n.status === s.p1.COMPLETED) && E(n.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (t) {
            let { guildScheduledEvent: n } = t;
            E(n.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (t) {
            let { userId: n, guildEventId: e } = t;
            if (n !== d.default.getId()) return;
            let i = a.ZP.getGuildScheduledEvent(e);
            if (null == i || i.status !== s.p1.SCHEDULED || null != _[e]) return;
            let l = c[e];
            if ((0, u.M)(i, void 0, l, !1) === s.X_.NEW_EVENT) {
                let t = { ..._ };
                (t[e] = Date.now()), (_ = t);
            }
        },
        UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (t) {
            let { guildEventId: n } = t,
                e = { ...c };
            (e[n] = Date.now()), (c = e);
        }
    }));
