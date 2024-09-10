let a;
t.d(n, {
    Sz: function () {
        return U;
    },
    Vg: function () {
        return x;
    },
    an: function () {
        return C;
    },
    bm: function () {
        return i;
    },
    rh: function () {
        return b;
    }
}),
    t(653041),
    t(47120);
var i,
    r,
    o = t(317381),
    c = t(592125),
    l = t(271383),
    s = t(306680),
    u = t(699516),
    d = t(594174),
    _ = t(55589),
    I = t(483360),
    f = t(981631),
    E = t(245335),
    N = t(689938);
(a = t(603617)), ((r = i || (i = {})).GROUP_DM = 'GROUP_DM'), (r.DM = 'DM'), (r.FRIEND = 'FRIEND'), (r.CHANNEL = 'CHANNEL');
let T = (e, n) => null != e && l.ZP.isMember(e, n),
    S = (e) => {
        let { omitUserIds: n, suggestedUserIds: t, maxRowsWithoutQuery: a, omitGuildId: i, shownUserIds: r, rows: o, counts: c } = e;
        if (null != t)
            for (let e of t) {
                if (null != a && a > 0 && o.length >= a) break;
                if (n.has(e) || r.has(e)) continue;
                let t = d.default.getUser(e);
                !(null == t || T(i, t.id)) &&
                    (r.add(t.id),
                    o.push({
                        type: 'FRIEND',
                        item: t,
                        isSuggested: !0
                    }),
                    c.numFriends++);
            }
    },
    m = (e) => {
        let { suggestedChannelIds: n, maxRowsWithoutQuery: t, rows: a, counts: i } = e;
        if (null != n)
            for (let e of n) {
                if (null != t && t > 0 && a.length >= t) break;
                let n = c.Z.getChannel(e);
                null != n &&
                    (a.push({
                        type: 'CHANNEL',
                        item: n,
                        isSuggested: !0
                    }),
                    i.numChannels++);
            }
    },
    h = (e) => {
        let { omitUserIds: n, maxRowsWithoutQuery: t, omitGuildId: a, shownUserIds: i, rows: r, counts: o, includeGroupDms: l, limit: u } = e,
            I = 0;
        for (let e of _.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && r.length >= t) || (null != u && I >= u)) break;
            let _ = c.Z.getChannel(e);
            if (null == _ || !_.isPrivate()) continue;
            if (l && _.type === f.d4z.GROUP_DM) {
                r.push({
                    type: 'GROUP_DM',
                    item: _,
                    isSuggested: !1
                }),
                    o.numGroupDms++,
                    I++;
                continue;
            }
            if (null == s.ZP.lastMessageId(_.id)) continue;
            let E = _.getRecipientId();
            if (null != E && !n.has(E) && !i.has(E)) {
                let e = d.default.getUser(E);
                if (null == e || e.bot || T(a, e.id)) continue;
                i.add(e.id),
                    r.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    o.numDms++,
                    I++;
            }
        }
    },
    g = (e) => {
        let { omitUserIds: n, maxRowsWithoutQuery: t, omitGuildId: a, shownUserIds: i, rows: r, counts: o } = e;
        for (let e of u.Z.getFriendIDs()) {
            if (null != t && t > 0 && r.length >= t) break;
            if (n.has(e) || i.has(e)) continue;
            let c = d.default.getUser(e);
            !(null == c || T(a, c.id)) &&
                (r.push({
                    type: 'FRIEND',
                    item: c,
                    isSuggested: !1
                }),
                o.numFriends++);
        }
    },
    O = (e) => {
        let { query: n, rows: t, counts: a, inviteTargetType: i } = e;
        i === E.Iq.EMBEDDED_APPLICATION &&
            I.ZP.queryChannels({
                query: n,
                limit: 3,
                guildId: void 0
            }).forEach((e) => {
                let { record: n } = e;
                t.push({
                    type: 'CHANNEL',
                    item: n,
                    isSuggested: !1
                }),
                    a.numChannels++;
            });
    },
    p = (e) => {
        let { query: n, omitUserIds: t, shownUserIds: a, rows: i, counts: r } = e;
        I.ZP.queryDMUsers({
            query: n,
            limit: 50
        }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let o = c.Z.getDMFromUserId(n.id);
            if (null != o && null != s.ZP.lastMessageId(o))
                a.add(n.id),
                    i.push({
                        type: 'DM',
                        item: n,
                        isSuggested: !1
                    }),
                    r.numDms++;
        });
    },
    v = (e) => {
        let { query: n, rows: t, counts: a } = e;
        I.ZP.queryGroupDMs({
            query: n,
            limit: 50,
            fuzzy: !1
        }).forEach((e) => {
            let { record: n } = e;
            t.push({
                type: 'GROUP_DM',
                item: n,
                isSuggested: !1
            }),
                a.numGroupDms++;
        });
    },
    P = (e) => {
        let { query: n, rows: t, counts: a, omitUserIds: i, shownUserIds: r } = e;
        I.ZP.queryFriends({
            query: n,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: n } = e;
            if (!(i.has(n.id) || r.has(n.id)))
                r.add(n.id),
                    t.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !1
                    }),
                    a.numFriends++;
        });
    };
function C(e) {
    let { query: n, inviteTargetType: t, omitUserIds: a, suggestedUserIds: i, suggestedChannelIds: r, maxRowsWithoutQuery: o, omitGuildId: c } = e,
        l = new Set(),
        s = [],
        u = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === n) {
        let e = {
            omitUserIds: a,
            maxRowsWithoutQuery: o,
            omitGuildId: c,
            shownUserIds: l,
            rows: s,
            counts: u
        };
        t === E.Iq.EMBEDDED_APPLICATION &&
            (h({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            m({
                ...e,
                suggestedChannelIds: r
            })),
            S({
                ...e,
                suggestedUserIds: i
            }),
            h({
                ...e,
                includeGroupDms: !0
            }),
            g(e);
    } else {
        let e = {
            query: n,
            rows: s,
            counts: u
        };
        t === E.Iq.EMBEDDED_APPLICATION &&
            O({
                ...e,
                inviteTargetType: t
            }),
            p({
                ...e,
                omitUserIds: a,
                shownUserIds: l
            }),
            v(e),
            P({
                ...e,
                omitUserIds: a,
                shownUserIds: l
            });
    }
    return {
        rows: s,
        counts: u
    };
}
function b(e, n) {
    for (let t of _.Z.getPrivateChannelIds()) {
        let a = c.Z.getChannel(t);
        if (null == a || !a.isDM() || null == s.ZP.lastMessageId(a.id)) continue;
        let i = a.getRecipientId();
        if (null != i && !e.has(i)) {
            let e = d.default.getUser(i);
            if (null == e || e.bot || T(n, e.id)) continue;
            return e;
        }
    }
    return null;
}
function U(e) {
    let { channel: n, inviteTargetType: t, applicationId: a } = e;
    if (t === E.Iq.EMBEDDED_APPLICATION) {
        if (null != n) {
            for (let e of o.ZP.getEmbeddedActivitiesForChannel(n.id)) if (e.applicationId === a) return new Set(e.userIds);
        }
    }
    return new Set();
}
let M = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    R = {
        [a.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: M.MINUTES
        },
        [a.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: M.HOURS
        },
        [a.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: M.HOURS
        },
        [a.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: M.HOURS
        },
        [a.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: M.DAYS
        },
        [a.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: M.DAYS
        },
        [a.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: M.NEVER
        }
    };
function x(e, n) {
    let t = parseInt(n, 10),
        a = 0 === t,
        i = R[e].value;
    switch (R[e].type) {
        case M.MINUTES:
            if (a) return N.Z.Messages.INVITE_EXPIRES_MINUTES;
            return N.Z.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({ numUses: t });
        case M.HOURS:
            if (a) return N.Z.Messages.INVITE_EXPIRES_HOURS.format({ numHours: i });
            return N.Z.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
                numHours: i,
                numUses: t
            });
        case M.DAYS:
            if (a) return N.Z.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({ numDays: i });
            return N.Z.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
                numDays: i,
                numUses: t
            });
        case M.NEVER:
            if (a) return N.Z.Messages.INVITE_EXPIRES_NEVER;
            return N.Z.Messages.INVITE_EXPIRES_USES.format({ numUses: t });
        default:
            return '';
    }
}
n.ZP = {
    getMaxAgeOptions: a.MAX_AGE_OPTIONS,
    getMaxUsesOptions: a.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: a.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: a.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: a.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_12_HOURS: a.INVITE_OPTIONS_12_HOURS,
    INVITE_OPTIONS_6_HOURS: a.INVITE_OPTIONS_6_HOURS,
    INVITE_OPTIONS_1_HOUR: a.INVITE_OPTIONS_1_HOUR,
    INVITE_OPTIONS_30_MINUTES: a.INVITE_OPTIONS_30_MINUTES,
    INVITE_OPTIONS_UNLIMITED: a.INVITE_OPTIONS_UNLIMITED,
    INVITE_OPTIONS_ONCE: a.INVITE_OPTIONS_ONCE,
    INVITE_OPTIONS_5_TIMES: a.INVITE_OPTIONS_5_TIMES,
    INVITE_OPTIONS_10_TIMES: a.INVITE_OPTIONS_10_TIMES,
    INVITE_OPTIONS_25_TIMES: a.INVITE_OPTIONS_25_TIMES,
    INVITE_OPTIONS_50_TIMES: a.INVITE_OPTIONS_50_TIMES,
    INVITE_OPTIONS_100_TIMES: a.INVITE_OPTIONS_100_TIMES
};
