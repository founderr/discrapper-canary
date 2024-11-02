let i;
t.d(n, {
    Sz: function () {
        return x;
    },
    Vg: function () {
        return M;
    },
    an: function () {
        return C;
    },
    bm: function () {
        return a;
    },
    rh: function () {
        return b;
    }
}),
    t(653041),
    t(47120);
var a,
    r,
    o = t(317381),
    l = t(592125),
    c = t(271383),
    u = t(306680),
    d = t(699516),
    s = t(594174),
    _ = t(55589),
    I = t(483360),
    f = t(981631),
    T = t(245335),
    N = t(388032);
(i = t(603617)), ((r = a || (a = {})).GROUP_DM = 'GROUP_DM'), (r.DM = 'DM'), (r.FRIEND = 'FRIEND'), (r.CHANNEL = 'CHANNEL');
let m = (e, n) => null != e && c.ZP.isMember(e, n),
    g = (e) => {
        let { omitUserIds: n, suggestedUserIds: t, maxRowsWithoutQuery: i, omitGuildId: a, shownUserIds: r, rows: o, counts: l } = e;
        if (null != t)
            for (let e of t) {
                if (null != i && i > 0 && o.length >= i) break;
                if (n.has(e) || r.has(e)) continue;
                let t = s.default.getUser(e);
                !(null == t || m(a, t.id)) &&
                    (r.add(t.id),
                    o.push({
                        type: 'FRIEND',
                        item: t,
                        isSuggested: !0
                    }),
                    l.numFriends++);
            }
    },
    h = (e) => {
        let { suggestedChannelIds: n, maxRowsWithoutQuery: t, rows: i, counts: a } = e;
        if (null != n)
            for (let e of n) {
                if (null != t && t > 0 && i.length >= t) break;
                let n = l.Z.getChannel(e);
                null != n &&
                    (i.push({
                        type: 'CHANNEL',
                        item: n,
                        isSuggested: !0
                    }),
                    a.numChannels++);
            }
    },
    E = (e) => {
        let { omitUserIds: n, maxRowsWithoutQuery: t, omitGuildId: i, shownUserIds: a, rows: r, counts: o, includeGroupDms: c, limit: d } = e,
            I = 0;
        for (let e of _.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && r.length >= t) || (null != d && I >= d)) break;
            let _ = l.Z.getChannel(e);
            if (null == _ || !_.isPrivate()) continue;
            if (c && _.type === f.d4z.GROUP_DM) {
                r.push({
                    type: 'GROUP_DM',
                    item: _,
                    isSuggested: !1
                }),
                    o.numGroupDms++,
                    I++;
                continue;
            }
            if (null == u.ZP.lastMessageId(_.id)) continue;
            let T = _.getRecipientId();
            if (null != T && !n.has(T) && !a.has(T)) {
                let e = s.default.getUser(T);
                if (null == e || e.bot || m(i, e.id)) continue;
                a.add(e.id),
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
    p = (e) => {
        let { omitUserIds: n, maxRowsWithoutQuery: t, omitGuildId: i, shownUserIds: a, rows: r, counts: o } = e;
        for (let e of d.Z.getFriendIDs()) {
            if (null != t && t > 0 && r.length >= t) break;
            if (n.has(e) || a.has(e)) continue;
            let l = s.default.getUser(e);
            !(null == l || m(i, l.id)) &&
                (r.push({
                    type: 'FRIEND',
                    item: l,
                    isSuggested: !1
                }),
                o.numFriends++);
        }
    },
    S = (e) => {
        let { query: n, rows: t, counts: i, inviteTargetType: a } = e;
        a === T.Iq.EMBEDDED_APPLICATION &&
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
                    i.numChannels++;
            });
    },
    O = (e) => {
        let { query: n, omitUserIds: t, shownUserIds: i, rows: a, counts: r } = e;
        I.ZP.queryDMUsers({
            query: n,
            limit: 50
        }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let o = l.Z.getDMFromUserId(n.id);
            if (null != o && null != u.ZP.lastMessageId(o))
                i.add(n.id),
                    a.push({
                        type: 'DM',
                        item: n,
                        isSuggested: !1
                    }),
                    r.numDms++;
        });
    },
    v = (e) => {
        let { query: n, rows: t, counts: i } = e;
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
                i.numGroupDms++;
        });
    },
    P = (e) => {
        let { query: n, rows: t, counts: i, omitUserIds: a, shownUserIds: r } = e;
        I.ZP.queryFriends({
            query: n,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: n } = e;
            if (!(a.has(n.id) || r.has(n.id)))
                r.add(n.id),
                    t.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !1
                    }),
                    i.numFriends++;
        });
    };
function C(e) {
    let { query: n, inviteTargetType: t, omitUserIds: i, suggestedUserIds: a, suggestedChannelIds: r, maxRowsWithoutQuery: o, omitGuildId: l } = e,
        c = new Set(),
        u = [],
        d = {
            numFriends: 0,
            numDms: 0,
            numGroupDms: 0,
            numGuildMembers: 0,
            numChannels: 0
        };
    if ('' === n) {
        let e = {
            omitUserIds: i,
            maxRowsWithoutQuery: o,
            omitGuildId: l,
            shownUserIds: c,
            rows: u,
            counts: d
        };
        t === T.Iq.EMBEDDED_APPLICATION &&
            (E({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            h({
                ...e,
                suggestedChannelIds: r
            })),
            g({
                ...e,
                suggestedUserIds: a
            }),
            E({
                ...e,
                includeGroupDms: !0
            }),
            p(e);
    } else {
        let e = {
            query: n,
            rows: u,
            counts: d
        };
        t === T.Iq.EMBEDDED_APPLICATION &&
            S({
                ...e,
                inviteTargetType: t
            }),
            O({
                ...e,
                omitUserIds: i,
                shownUserIds: c
            }),
            v(e),
            P({
                ...e,
                omitUserIds: i,
                shownUserIds: c
            });
    }
    return {
        rows: u,
        counts: d
    };
}
function b(e, n) {
    for (let t of _.Z.getPrivateChannelIds()) {
        let i = l.Z.getChannel(t);
        if (null == i || !i.isDM() || null == u.ZP.lastMessageId(i.id)) continue;
        let a = i.getRecipientId();
        if (null != a && !e.has(a)) {
            let e = s.default.getUser(a);
            if (null == e || e.bot || m(n, e.id)) continue;
            return e;
        }
    }
    return null;
}
function x(e) {
    let { channel: n, inviteTargetType: t, applicationId: i } = e;
    if (t === T.Iq.EMBEDDED_APPLICATION) {
        if (null != n) {
            for (let e of o.ZP.getEmbeddedActivitiesForChannel(n.id)) if (e.applicationId === i) return new Set(e.userIds);
        }
    }
    return new Set();
}
let U = {
        MINUTES: 'minutes',
        HOURS: 'hours',
        DAYS: 'days',
        NEVER: 'never'
    },
    D = {
        [i.INVITE_OPTIONS_30_MINUTES.value]: {
            value: 30,
            type: U.MINUTES
        },
        [i.INVITE_OPTIONS_1_HOUR.value]: {
            value: 1,
            type: U.HOURS
        },
        [i.INVITE_OPTIONS_6_HOURS.value]: {
            value: 6,
            type: U.HOURS
        },
        [i.INVITE_OPTIONS_12_HOURS.value]: {
            value: 12,
            type: U.HOURS
        },
        [i.INVITE_OPTIONS_1_DAY.value]: {
            value: 1,
            type: U.DAYS
        },
        [i.INVITE_OPTIONS_7_DAYS.value]: {
            value: 7,
            type: U.DAYS
        },
        [i.INVITE_OPTIONS_FOREVER.value]: {
            value: 0,
            type: U.NEVER
        }
    };
function M(e, n) {
    let t = parseInt(n, 10),
        i = 0 === t,
        a = D[e].value;
    switch (D[e].type) {
        case U.MINUTES:
            if (i) return N.intl.string(N.t['/WbTXF']);
            return N.intl.formatToPlainString(N.t.eDRWJC, { numUses: t });
        case U.HOURS:
            if (i) return N.intl.formatToPlainString(N.t.ZVdJMz, { numHours: a });
            return N.intl.formatToPlainString(N.t.NgZgAA, {
                numHours: a,
                numUses: t
            });
        case U.DAYS:
            if (i) return N.intl.formatToPlainString(N.t.T96qsr, { numDays: a });
            return N.intl.formatToPlainString(N.t.TfuB9P, {
                numDays: a,
                numUses: t
            });
        case U.NEVER:
            if (i) return N.intl.string(N.t.QrHBnJ);
            return N.intl.formatToPlainString(N.t.yJnTxM, { numUses: t });
        default:
            return '';
    }
}
n.ZP = {
    getMaxAgeOptions: i.MAX_AGE_OPTIONS,
    getMaxUsesOptions: i.MAX_USES_OPTIONS,
    INVITE_OPTIONS_FOREVER: i.INVITE_OPTIONS_FOREVER,
    INVITE_OPTIONS_1_DAY: i.INVITE_OPTIONS_1_DAY,
    INVITE_OPTIONS_7_DAYS: i.INVITE_OPTIONS_7_DAYS,
    INVITE_OPTIONS_12_HOURS: i.INVITE_OPTIONS_12_HOURS,
    INVITE_OPTIONS_6_HOURS: i.INVITE_OPTIONS_6_HOURS,
    INVITE_OPTIONS_1_HOUR: i.INVITE_OPTIONS_1_HOUR,
    INVITE_OPTIONS_30_MINUTES: i.INVITE_OPTIONS_30_MINUTES,
    INVITE_OPTIONS_UNLIMITED: i.INVITE_OPTIONS_UNLIMITED,
    INVITE_OPTIONS_ONCE: i.INVITE_OPTIONS_ONCE,
    INVITE_OPTIONS_5_TIMES: i.INVITE_OPTIONS_5_TIMES,
    INVITE_OPTIONS_10_TIMES: i.INVITE_OPTIONS_10_TIMES,
    INVITE_OPTIONS_25_TIMES: i.INVITE_OPTIONS_25_TIMES,
    INVITE_OPTIONS_50_TIMES: i.INVITE_OPTIONS_50_TIMES,
    INVITE_OPTIONS_100_TIMES: i.INVITE_OPTIONS_100_TIMES
};
