t.d(n, {
    Vm: function () {
        return v;
    },
    ZP: function () {
        return g;
    },
    eF: function () {
        return L;
    },
    gM: function () {
        return S;
    },
    k5: function () {
        return O;
    },
    qY: function () {
        return A;
    },
    sz: function () {
        return M;
    },
    u1: function () {
        return m;
    }
}),
    t(47120),
    t(724458);
var l = t(470079),
    i = t(442837),
    u = t(241155),
    r = t(592125),
    a = t(984933),
    d = t(430824),
    o = t(496675),
    s = t(70956),
    c = t(823379),
    E = t(924301),
    _ = t(658041),
    f = t(835184),
    N = t(79874),
    Z = t(854698),
    I = t(765305),
    C = t(981631);
let T = [],
    h = 15 * s.Z.Millis.MINUTE;
function g(e, n) {
    return (0, i.Wu)(
        [d.Z, u.Z, E.ZP, o.Z, r.Z, a.ZP],
        () => {
            let t = d.Z.getGuild(e);
            if (null == t) return T;
            if (t.hasFeature(C.oNc.HUB)) {
                var l, i;
                let e = null === (l = a.ZP.getDefaultChannel(t.id)) || void 0 === l ? void 0 : l.id;
                return (null !== (i = u.Z.getEventDirectoryEntries(e)) && void 0 !== i ? i : [])
                    .map((e) => {
                        let n = e.scheduledEventId,
                            t = E.ZP.getGuildScheduledEvent(n);
                        return null != t ? t : u.Z.getCachedGuildScheduledEventById(n);
                    })
                    .filter(c.lm);
            }
            return E.ZP.getGuildScheduledEventsByIndex(null != n ? n : E.bN.GUILD_EVENT_UPCOMING(t.id)).filter((e) => {
                let n = e.channel_id;
                if (null == n) return !0;
                let t = r.Z.getChannel(n);
                return o.Z.can(C.Plq.VIEW_CHANNEL, t);
            });
        },
        [n, e]
    );
}
function A(e) {
    return (0, i.e7)(
        [E.ZP, r.Z, o.Z],
        () => {
            let n = r.Z.getChannel(e);
            if (!o.Z.can(C.Plq.VIEW_CHANNEL, n) || null == (null == n ? void 0 : n.guild_id)) return null;
            let t = E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_ACTIVE(e));
            return t.length > 0 ? t[0] : null;
        },
        [e]
    );
}
function S(e) {
    let n = (0, i.Wu)([E.ZP], () => E.ZP.getGuildScheduledEventsForGuild(e), [e]);
    return l.useMemo(() => {
        let e = new Map();
        return (
            n.forEach((n) => {
                let t = n.channel_id;
                null != t && e.set(t, n);
            }),
            e
        );
    }, [n]);
}
function v(e) {
    var n, t;
    let l =
            ((n = e),
            (0, i.Wu)(
                [E.ZP, r.Z, o.Z],
                () =>
                    E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_UPCOMING(n)).filter((e) => {
                        if (e.entity_type === I.WX.NONE || e.status !== I.p1.SCHEDULED) return !1;
                        if (null == e.channel_id) return !0;
                        let n = r.Z.getChannel(e.channel_id);
                        return o.Z.can(C.Plq.VIEW_CHANNEL, n);
                    }),
                [n]
            )),
        u = (0, i.cj)([f.Z], () => f.Z.getAllEventDismissals()),
        a = (0, i.cj)([f.Z], () => f.Z.getAllUpcomingNoticeSeenTimes()),
        s = (0, i.cj)(
            [E.ZP],
            () =>
                null == l
                    ? {}
                    : l.reduce((e, n) => {
                          let t = (0, Z.DK)(n);
                          return {
                              ...e,
                              [n.id]: E.ZP.isInterestedInEventRecurrence(n.id, t)
                          };
                      }, {}),
            [l]
        ),
        c = (0, i.e7)([d.Z], () => d.Z.getGuild(e)),
        N = null != c && !c.hasFeature(C.oNc.COMMUNITY) && c.hasFeature(C.oNc.INTERNAL_EMPLOYEE_ONLY);
    if (null != l && null != s && N)
        for (let e = 0; e < l.length; e++) {
            let n = l[e],
                i = u[n.id],
                r = a[n.id],
                d = null !== (t = s[n.id]) && void 0 !== t && t,
                o = (0, _.M)(n, i, r, d);
            if (null != o)
                return {
                    upcomingEvent: n,
                    noticeType: o
                };
        }
}
function O(e) {
    return (0, i.e7)(
        [E.ZP, r.Z, o.Z],
        () =>
            E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_ACTIVE(e)).find((e) => {
                if (e.entity_type === I.WX.NONE || !(0, E.xt)(e)) return !1;
                if (null == e.channel_id) return !0;
                let n = r.Z.getChannel(e.channel_id);
                return o.Z.can(C.Plq.VIEW_CHANNEL, n);
            }),
        [e]
    );
}
function m(e) {
    return (0, i.e7)([E.ZP], () => E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(e)), [e]);
}
function L(e) {
    return (0, i.e7)(
        [r.Z, E.ZP],
        () => {
            let n = E.ZP.getGuildScheduledEventsByIndex(E.bN.GUILD_EVENT_ACTIVE(e)).find((e) => null != r.Z.getChannel(e.channel_id));
            return r.Z.getChannel(null == n ? void 0 : n.channel_id);
        },
        [e]
    );
}
function M(e) {
    let [n, t] = l.useState(() => Date.now());
    l.useEffect(() => {
        let e = setInterval(() => {
            t(Date.now());
        }, h);
        return () => clearInterval(e);
    }, []);
    let u = (0, i.e7)([E.ZP], () => (null == e ? [] : E.ZP.getGuildScheduledEventsByIndex(E.bN.CHANNEL_EVENT_UPCOMING(e))), [e, n]);
    return l.useMemo(
        () =>
            u.filter((e) => {
                let { startTime: n, endTime: t } = (0, N.Kq)(e),
                    { withinStartWindow: l, diffMinutes: i } = (0, Z.ub)(n.toISOString(), null == t ? void 0 : t.toISOString());
                return e.status !== I.p1.ACTIVE && l && i < 15;
            }),
        [u]
    );
}
