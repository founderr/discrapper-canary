var i,
    r = e(442837),
    l = e(570140),
    a = e(314897),
    d = e(924301),
    c = e(658041),
    u = e(765305);
function o(n, t, e) {
    return (
        t in n
            ? Object.defineProperty(n, t, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (n[t] = e),
        n
    );
}
let _ = {},
    s = {};
function E(n) {
    let t = { ..._ };
    delete t[n], (_ = t);
    let e = { ...s };
    delete e[n], (s = e);
}
class p extends (i = r.ZP.PersistedStore) {
    initialize(n) {
        if (null != n) {
            var t, e;
            (_ = null !== (t = n.upcomingEventDismissals) && void 0 !== t ? t : {}), (s = null !== (e = n.upcomingEventSeenTimestamps) && void 0 !== e ? e : {});
        }
    }
    getGuildEventNoticeDismissalTime(n) {
        return _[n];
    }
    getAllEventDismissals() {
        return _;
    }
    getUpcomingNoticeSeenTime(n) {
        return s[n];
    }
    getAllUpcomingNoticeSeenTimes() {
        return s;
    }
    getState() {
        return {
            upcomingEventDismissals: _,
            upcomingEventSeenTimestamps: s
        };
    }
}
o(p, 'displayName', 'UpcomingEventNoticesStore'),
    o(p, 'persistKey', 'UpcomingEventNotices'),
    (t.Z = new p(l.Z, {
        UPCOMING_GUILD_EVENT_NOTICE_HIDE: function (n) {
            let { eventId: t } = n,
                e = { ..._ };
            (e[t] = Date.now()), (_ = e);
        },
        GUILD_SCHEDULED_EVENT_UPDATE: function (n) {
            let { guildScheduledEvent: t } = n;
            (t.status === u.p1.CANCELED || t.status === u.p1.COMPLETED) && E(t.id);
        },
        GUILD_SCHEDULED_EVENT_DELETE: function (n) {
            let { guildScheduledEvent: t } = n;
            E(t.id);
        },
        GUILD_SCHEDULED_EVENT_USER_ADD: function (n) {
            let { userId: t, guildEventId: e } = n;
            if (t !== a.default.getId()) return;
            let i = d.ZP.getGuildScheduledEvent(e);
            if (null == i || i.status !== u.p1.SCHEDULED || null != _[e]) return;
            let r = s[e];
            if ((0, c.M)(i, void 0, r, !1) === u.X_.NEW_EVENT) {
                let n = { ..._ };
                (n[e] = Date.now()), (_ = n);
            }
        },
        UPCOMING_GUILD_EVENT_NOTICE_SEEN: function (n) {
            let { guildEventId: t } = n,
                e = { ...s };
            (e[t] = Date.now()), (s = e);
        }
    }));
