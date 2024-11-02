e.d(n, {
    Vm: function () {
        return N;
    },
    ZP: function () {
        return m;
    },
    eF: function () {
        return G;
    },
    gM: function () {
        return C;
    },
    k5: function () {
        return D;
    },
    qY: function () {
        return U;
    },
    sz: function () {
        return O;
    },
    u1: function () {
        return A;
    }
}),
    e(47120),
    e(724458);
var i = e(192379),
    l = e(442837),
    r = e(241155),
    d = e(592125),
    a = e(984933),
    u = e(430824),
    s = e(496675),
    o = e(70956),
    _ = e(823379),
    c = e(924301),
    E = e(658041),
    I = e(835184),
    g = e(79874),
    p = e(854698),
    T = e(765305),
    f = e(981631);
let S = [],
    L = 15 * o.Z.Millis.MINUTE;
function m(t, n) {
    return (0, l.Wu)(
        [u.Z, r.Z, c.ZP, s.Z, d.Z, a.ZP],
        () => {
            let e = u.Z.getGuild(t);
            if (null == e) return S;
            if (e.hasFeature(f.oNc.HUB)) {
                var i, l;
                let t = null === (i = a.ZP.getDefaultChannel(e.id)) || void 0 === i ? void 0 : i.id;
                return (null !== (l = r.Z.getEventDirectoryEntries(t)) && void 0 !== l ? l : [])
                    .map((t) => {
                        let n = t.scheduledEventId,
                            e = c.ZP.getGuildScheduledEvent(n);
                        return null != e ? e : r.Z.getCachedGuildScheduledEventById(n);
                    })
                    .filter(_.lm);
            }
            return c.ZP.getGuildScheduledEventsByIndex(null != n ? n : c.bN.GUILD_EVENT_UPCOMING(e.id)).filter((t) => {
                let n = t.channel_id;
                if (null == n) return !0;
                let e = d.Z.getChannel(n);
                return s.Z.can(f.Plq.VIEW_CHANNEL, e);
            });
        },
        [n, t]
    );
}
function U(t) {
    return (0, l.e7)(
        [c.ZP, d.Z, s.Z],
        () => {
            let n = d.Z.getChannel(t);
            if (!s.Z.can(f.Plq.VIEW_CHANNEL, n) || null == (null == n ? void 0 : n.guild_id)) return null;
            let e = c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_ACTIVE(t));
            return e.length > 0 ? e[0] : null;
        },
        [t]
    );
}
function C(t) {
    let n = (0, l.Wu)([c.ZP], () => c.ZP.getGuildScheduledEventsForGuild(t), [t]);
    return i.useMemo(() => {
        let t = new Map();
        return (
            n.forEach((n) => {
                let e = n.channel_id;
                null != e && t.set(e, n);
            }),
            t
        );
    }, [n]);
}
function N(t) {
    var n, e;
    let i =
            ((n = t),
            (0, l.Wu)(
                [c.ZP, d.Z, s.Z],
                () =>
                    c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_UPCOMING(n)).filter((t) => {
                        if (t.entity_type === T.WX.NONE || t.status !== T.p1.SCHEDULED) return !1;
                        if (null == t.channel_id) return !0;
                        let n = d.Z.getChannel(t.channel_id);
                        return s.Z.can(f.Plq.VIEW_CHANNEL, n);
                    }),
                [n]
            )),
        r = (0, l.cj)([I.Z], () => I.Z.getAllEventDismissals()),
        a = (0, l.cj)([I.Z], () => I.Z.getAllUpcomingNoticeSeenTimes()),
        o = (0, l.cj)(
            [c.ZP],
            () =>
                null == i
                    ? {}
                    : i.reduce((t, n) => {
                          let e = (0, p.DK)(n);
                          return {
                              ...t,
                              [n.id]: c.ZP.isInterestedInEventRecurrence(n.id, e)
                          };
                      }, {}),
            [i]
        ),
        _ = (0, l.e7)([u.Z], () => u.Z.getGuild(t)),
        g = null != _ && !_.hasFeature(f.oNc.COMMUNITY) && _.hasFeature(f.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != i && null != o && g)
        for (let t = 0; t < i.length; t++) {
            let n = i[t],
                l = r[n.id],
                d = a[n.id],
                u = null !== (e = o[n.id]) && void 0 !== e && e,
                s = (0, E.M)(n, l, d, u);
            if (null != s)
                return {
                    upcomingEvent: n,
                    noticeType: s
                };
        }
}
function D(t) {
    return (0, l.e7)(
        [c.ZP, d.Z, s.Z],
        () =>
            c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(t)).find((t) => {
                if (t.entity_type === T.WX.NONE || !(0, c.xt)(t)) return !1;
                if (null == t.channel_id) return !0;
                let n = d.Z.getChannel(t.channel_id);
                return s.Z.can(f.Plq.VIEW_CHANNEL, n);
            }),
        [t]
    );
}
function A(t) {
    return (0, l.e7)([c.ZP], () => c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(t)), [t]);
}
function G(t) {
    return (0, l.e7)(
        [d.Z, c.ZP],
        () => {
            let n = c.ZP.getGuildScheduledEventsByIndex(c.bN.GUILD_EVENT_ACTIVE(t)).find((t) => null != d.Z.getChannel(t.channel_id));
            return d.Z.getChannel(null == n ? void 0 : n.channel_id);
        },
        [t]
    );
}
function O(t) {
    let [n, e] = i.useState(() => Date.now());
    i.useEffect(() => {
        let t = setInterval(() => {
            e(Date.now());
        }, L);
        return () => clearInterval(t);
    }, []);
    let r = (0, l.e7)([c.ZP], () => (null == t ? [] : c.ZP.getGuildScheduledEventsByIndex(c.bN.CHANNEL_EVENT_UPCOMING(t))), [t, n]);
    return i.useMemo(
        () =>
            r.filter((t) => {
                let { startTime: n, endTime: e } = (0, g.Kq)(t),
                    { withinStartWindow: i, diffMinutes: l } = (0, p.ub)(n.toISOString(), null == e ? void 0 : e.toISOString());
                return t.status !== T.p1.ACTIVE && i && l < 15;
            }),
        [r]
    );
}
