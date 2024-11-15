let a;
t.d(n, {
    Sz: function () {
        return v;
    },
    Vg: function () {
        return C;
    },
    an: function () {
        return U;
    },
    bm: function () {
        return r;
    },
    rh: function () {
        return D;
    }
}),
    t(653041),
    t(47120);
var r,
    i,
    o = t(317381),
    c = t(592125),
    _ = t(271383),
    I = t(306680),
    l = t(699516),
    d = t(594174),
    u = t(55589),
    f = t(483360),
    s = t(981631),
    T = t(245335),
    S = t(388032);
(a = t(603617)), ((i = r || (r = {})).GROUP_DM = 'GROUP_DM'), (i.DM = 'DM'), (i.FRIEND = 'FRIEND'), (i.CHANNEL = 'CHANNEL');
let N = (e, n) => null != e && _.ZP.isMember(e, n),
    O = (e) => {
        let { omitUserIds: n, suggestedUserIds: t, maxRowsWithoutQuery: a, omitGuildId: r, shownUserIds: i, rows: o, counts: c } = e;
        if (null != t)
            for (let e of t) {
                if (null != a && a > 0 && o.length >= a) break;
                if (n.has(e) || i.has(e)) continue;
                let t = d.default.getUser(e);
                !(null == t || N(r, t.id)) &&
                    (i.add(t.id),
                    o.push({
                        type: 'FRIEND',
                        item: t,
                        isSuggested: !0
                    }),
                    c.numFriends++);
            }
    },
    m = (e) => {
        let { suggestedChannelIds: n, maxRowsWithoutQuery: t, rows: a, counts: r } = e;
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
                    r.numChannels++);
            }
    },
    p = (e) => {
        let { omitUserIds: n, maxRowsWithoutQuery: t, omitGuildId: a, shownUserIds: r, rows: i, counts: o, includeGroupDms: _, limit: l } = e,
            f = 0;
        for (let e of u.Z.getPrivateChannelIds()) {
            if ((null != t && t > 0 && i.length >= t) || (null != l && f >= l)) break;
            let u = c.Z.getChannel(e);
            if (null == u || !u.isPrivate()) continue;
            if (_ && u.type === s.d4z.GROUP_DM) {
                i.push({
                    type: 'GROUP_DM',
                    item: u,
                    isSuggested: !1
                }),
                    o.numGroupDms++,
                    f++;
                continue;
            }
            if (null == I.ZP.lastMessageId(u.id)) continue;
            let T = u.getRecipientId();
            if (null != T && !n.has(T) && !r.has(T)) {
                let e = d.default.getUser(T);
                if (null == e || e.bot || N(a, e.id)) continue;
                r.add(e.id),
                    i.push({
                        type: 'DM',
                        item: e,
                        isSuggested: !1
                    }),
                    o.numDms++,
                    f++;
            }
        }
    },
    g = (e) => {
        let { omitUserIds: n, maxRowsWithoutQuery: t, omitGuildId: a, shownUserIds: r, rows: i, counts: o } = e;
        for (let e of l.Z.getFriendIDs()) {
            if (null != t && t > 0 && i.length >= t) break;
            if (n.has(e) || r.has(e)) continue;
            let c = d.default.getUser(e);
            !(null == c || N(a, c.id)) &&
                (i.push({
                    type: 'FRIEND',
                    item: c,
                    isSuggested: !1
                }),
                o.numFriends++);
        }
    },
    E = (e) => {
        let { query: n, rows: t, counts: a, inviteTargetType: r } = e;
        r === T.Iq.EMBEDDED_APPLICATION &&
            f.ZP.queryChannels({
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
    P = (e) => {
        let { query: n, omitUserIds: t, shownUserIds: a, rows: r, counts: i } = e;
        f.ZP.queryDMUsers({
            query: n,
            limit: 50
        }).forEach((e) => {
            let { record: n } = e;
            if (t.has(n.id)) return;
            let o = c.Z.getDMFromUserId(n.id);
            if (null != o && null != I.ZP.lastMessageId(o))
                a.add(n.id),
                    r.push({
                        type: 'DM',
                        item: n,
                        isSuggested: !1
                    }),
                    i.numDms++;
        });
    },
    h = (e) => {
        let { query: n, rows: t, counts: a } = e;
        f.ZP.queryGroupDMs({
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
    b = (e) => {
        let { query: n, rows: t, counts: a, omitUserIds: r, shownUserIds: i } = e;
        f.ZP.queryFriends({
            query: n,
            limit: 500,
            _fuzzy: !1
        }).forEach((e) => {
            let { record: n } = e;
            if (!(r.has(n.id) || i.has(n.id)))
                i.add(n.id),
                    t.push({
                        type: 'FRIEND',
                        item: n,
                        isSuggested: !1
                    }),
                    a.numFriends++;
        });
    };
function U(e) {
    let { query: n, inviteTargetType: t, omitUserIds: a, suggestedUserIds: r, suggestedChannelIds: i, maxRowsWithoutQuery: o, omitGuildId: c } = e,
        _ = new Set(),
        I = [],
        l = {
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
            shownUserIds: _,
            rows: I,
            counts: l
        };
        t === T.Iq.EMBEDDED_APPLICATION &&
            (p({
                ...e,
                includeGroupDms: !1,
                limit: 1
            }),
            m({
                ...e,
                suggestedChannelIds: i
            })),
            O({
                ...e,
                suggestedUserIds: r
            }),
            p({
                ...e,
                includeGroupDms: !0
            }),
            g(e);
    } else {
        let e = {
            query: n,
            rows: I,
            counts: l
        };
        t === T.Iq.EMBEDDED_APPLICATION &&
            E({
                ...e,
                inviteTargetType: t
            }),
            P({
                ...e,
                omitUserIds: a,
                shownUserIds: _
            }),
            h(e),
            b({
                ...e,
                omitUserIds: a,
                shownUserIds: _
            });
    }
    return {
        rows: I,
        counts: l
    };
}
function D(e, n) {
    for (let t of u.Z.getPrivateChannelIds()) {
        let a = c.Z.getChannel(t);
        if (null == a || !a.isDM() || null == I.ZP.lastMessageId(a.id)) continue;
        let r = a.getRecipientId();
        if (null != r && !e.has(r)) {
            let e = d.default.getUser(r);
            if (null == e || e.bot || N(n, e.id)) continue;
            return e;
        }
    }
    return null;
}
function v(e) {
    let { channel: n, inviteTargetType: t, applicationId: a } = e;
    if (t === T.Iq.EMBEDDED_APPLICATION) {
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
    V = {
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
function C(e, n) {
    let t = parseInt(n, 10),
        a = 0 === t,
        r = V[e].value;
    switch (V[e].type) {
        case M.MINUTES:
            if (a) return S.intl.string(S.t['/WbTXF']);
            return S.intl.formatToPlainString(S.t.eDRWJC, { numUses: t });
        case M.HOURS:
            if (a) return S.intl.formatToPlainString(S.t.ZVdJMz, { numHours: r });
            return S.intl.formatToPlainString(S.t.NgZgAA, {
                numHours: r,
                numUses: t
            });
        case M.DAYS:
            if (a) return S.intl.formatToPlainString(S.t.T96qsr, { numDays: r });
            return S.intl.formatToPlainString(S.t.TfuB9P, {
                numDays: r,
                numUses: t
            });
        case M.NEVER:
            if (a) return S.intl.string(S.t.QrHBnJ);
            return S.intl.formatToPlainString(S.t.yJnTxM, { numUses: t });
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
