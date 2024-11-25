e.d(t, {
    Vm: function () {
        return v;
    },
    ZP: function () {
        return D;
    },
    eF: function () {
        return N;
    },
    gM: function () {
        return m;
    },
    k5: function () {
        return G;
    },
    qY: function () {
        return L;
    },
    sz: function () {
        return O;
    },
    u1: function () {
        return S;
    }
}),
    e(47120),
    e(724458);
var i = e(192379),
    r = e(442837),
    l = e(241155),
    a = e(592125),
    d = e(984933),
    c = e(430824),
    u = e(496675),
    o = e(70956),
    _ = e(823379),
    s = e(924301),
    E = e(658041),
    p = e(835184),
    I = e(79874),
    T = e(854698),
    g = e(765305),
    C = e(981631);
let f = [],
    U = 15 * o.Z.Millis.MINUTE;
function D(n, t) {
    return (0, r.Wu)(
        [c.Z, l.Z, s.ZP, u.Z, a.Z, d.ZP],
        () => {
            let e = c.Z.getGuild(n);
            if (null == e) return f;
            if (e.hasFeature(C.oNc.HUB)) {
                var i, r;
                let n = null === (i = d.ZP.getDefaultChannel(e.id)) || void 0 === i ? void 0 : i.id;
                return (null !== (r = l.Z.getEventDirectoryEntries(n)) && void 0 !== r ? r : [])
                    .map((n) => {
                        let t = n.scheduledEventId,
                            e = s.ZP.getGuildScheduledEvent(t);
                        return null != e ? e : l.Z.getCachedGuildScheduledEventById(t);
                    })
                    .filter(_.lm);
            }
            return s.ZP.getGuildScheduledEventsByIndex(null != t ? t : s.bN.GUILD_EVENT_UPCOMING(e.id)).filter((n) => {
                let t = n.channel_id;
                if (null == t) return !0;
                let e = a.Z.getChannel(t);
                return u.Z.can(C.Plq.VIEW_CHANNEL, e);
            });
        },
        [t, n]
    );
}
function L(n) {
    return (0, r.e7)(
        [s.ZP, a.Z, u.Z],
        () => {
            let t = a.Z.getChannel(n);
            if (!u.Z.can(C.Plq.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
            let e = s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_ACTIVE(n));
            return e.length > 0 ? e[0] : null;
        },
        [n]
    );
}
function m(n) {
    let t = (0, r.Wu)([s.ZP], () => s.ZP.getGuildScheduledEventsForGuild(n), [n]);
    return i.useMemo(() => {
        let n = new Map();
        return (
            t.forEach((t) => {
                let e = t.channel_id;
                null != e && n.set(e, t);
            }),
            n
        );
    }, [t]);
}
function v(n) {
    var t, e;
    let i =
            ((t = n),
            (0, r.Wu)(
                [s.ZP, a.Z, u.Z],
                () =>
                    s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_UPCOMING(t)).filter((n) => {
                        if (n.entity_type === g.WX.NONE || n.status !== g.p1.SCHEDULED) return !1;
                        if (null == n.channel_id) return !0;
                        let t = a.Z.getChannel(n.channel_id);
                        return u.Z.can(C.Plq.VIEW_CHANNEL, t);
                    }),
                [t]
            )),
        l = (0, r.cj)([p.Z], () => p.Z.getAllEventDismissals()),
        d = (0, r.cj)([p.Z], () => p.Z.getAllUpcomingNoticeSeenTimes()),
        o = (0, r.cj)(
            [s.ZP],
            () =>
                null == i
                    ? {}
                    : i.reduce((n, t) => {
                          let e = (0, T.DK)(t);
                          return {
                              ...n,
                              [t.id]: s.ZP.isInterestedInEventRecurrence(t.id, e)
                          };
                      }, {}),
            [i]
        ),
        _ = (0, r.e7)([c.Z], () => c.Z.getGuild(n)),
        I = null != _ && !_.hasFeature(C.oNc.COMMUNITY) && _.hasFeature(C.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != i && null != o && I)
        for (let n = 0; n < i.length; n++) {
            let t = i[n],
                r = l[t.id],
                a = d[t.id],
                c = null !== (e = o[t.id]) && void 0 !== e && e,
                u = (0, E.M)(t, r, a, c);
            if (null != u)
                return {
                    upcomingEvent: t,
                    noticeType: u
                };
        }
}
function G(n) {
    return (0, r.e7)(
        [s.ZP, a.Z, u.Z],
        () =>
            s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(n)).find((n) => {
                if (n.entity_type === g.WX.NONE || !(0, s.xt)(n)) return !1;
                if (null == n.channel_id) return !0;
                let t = a.Z.getChannel(n.channel_id);
                return u.Z.can(C.Plq.VIEW_CHANNEL, t);
            }),
        [n]
    );
}
function S(n) {
    return (0, r.e7)([s.ZP], () => s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(n)), [n]);
}
function N(n) {
    return (0, r.e7)(
        [a.Z, s.ZP],
        () => {
            let t = s.ZP.getGuildScheduledEventsByIndex(s.bN.GUILD_EVENT_ACTIVE(n)).find((n) => null != a.Z.getChannel(n.channel_id));
            return a.Z.getChannel(null == t ? void 0 : t.channel_id);
        },
        [n]
    );
}
function O(n) {
    let [t, e] = i.useState(() => Date.now());
    i.useEffect(() => {
        let n = setInterval(() => {
            e(Date.now());
        }, U);
        return () => clearInterval(n);
    }, []);
    let l = (0, r.e7)([s.ZP], () => (null == n ? [] : s.ZP.getGuildScheduledEventsByIndex(s.bN.CHANNEL_EVENT_UPCOMING(n))), [n, t]);
    return i.useMemo(
        () =>
            l.filter((n) => {
                let { startTime: t, endTime: e } = (0, I.Kq)(n),
                    { withinStartWindow: i, diffMinutes: r } = (0, T.ub)(t.toISOString(), null == e ? void 0 : e.toISOString());
                return n.status !== g.p1.ACTIVE && i && r < 15;
            }),
        [l]
    );
}
