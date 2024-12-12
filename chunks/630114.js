r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(789020);
var o = r(724458);
var l = r(392711),
    u = r.n(l),
    c = r(131704),
    d = r(680089),
    f = r(592125),
    _ = r(480294),
    h = r(580005),
    p = r(496675),
    m = r(9156),
    g = r(70956),
    E = r(630388),
    v = r(823379),
    I = r(789662),
    T = r(981631),
    b = r(526761);
function y(e, n, r, i, a) {
    if (n !== I.AR.UseGreyDot)
        return [
            {
                label: 'Setting the guild to a white dot unread',
                apply: (e, n) => {
                    C(e, n, !0);
                }
            }
        ];
    let s = [],
        o = Object.values(f.Z.getMutableGuildChannelsForGuild(e.id)).filter((e) => p.Z.can(T.Plq.VIEW_CHANNEL, e));
    return s.push(...S(e, o)), s.push(A(e)), s.push(N()), s.push(...R(o)), s.push(...O(o)), s.push(...x(o)), _.Z.hasConsented(T.pjP.PERSONALIZATION) ? s.push(...D(e, o, r, i, a)) : s.push(...L(e, o)), s.filter(v.lm);
}
function S(e, n) {
    if (!(m.ZP.isMuted(e.id) && !m.ZP.isTemporarilyMuted(e.id))) return [];
    let r = [
            {
                label: 'Unmuting the guild and marking it as read',
                apply: (e) => {
                    (e.muted = !1), (e.mute_config = null);
                },
                needsMarkedAsRead: !0
            }
        ],
        i = n.filter((n) => m.ZP.getChannelMessageNotifications(e.id, n.id) === T.bL.ALL_MESSAGES);
    return (
        i.length > 0 &&
            r.push({
                label: 'Setting '.concat(i.length, ' to mentions-only since they were all-messages and we are unmuting the guild'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let r of i)
                        w(e, n, r.id, (e) => {
                            e.message_notifications = T.bL.ONLY_MENTIONS;
                        });
                }
            }),
        r
    );
}
function A(e) {
    if (m.ZP.getMessageNotifications(e.id) === T.bL.ALL_MESSAGES)
        return {
            label: 'Setting the guild to only mentions since it is in care-a-little but was previously all-messages',
            apply: (e) => {
                e.message_notifications = T.bL.ONLY_MENTIONS;
            }
        };
}
function N() {
    return {
        label: 'Setting the guild to a grey dot unread',
        apply: (e, n) => {
            C(e, n, !1);
        }
    };
}
function C(e, n, r) {
    var i, a;
    (e.flags = (0, E.mB)(null !== (a = null !== (i = e.flags) && void 0 !== i ? i : n.flags) && void 0 !== a ? a : 0, b.vc.UNREADS_ALL_MESSAGES, r)), (e.flags = (0, E.mB)(e.flags, b.vc.UNREADS_ONLY_MENTIONS, !r));
}
function R(e) {
    let n = [],
        [r, i] = u()(e)
            .filter((e) => e.type === T.d4z.GUILD_ANNOUNCEMENT)
            .partition((e) => m.ZP.isChannelMuted(e.guild_id, e.id) || (null != e.parent_id && m.ZP.isChannelMuted(e.guild_id, e.parent_id)))
            .value();
    return (
        r.length > 0 &&
            n.push({
                label: 'Not touching '.concat(r.length, ' announcement channels since they are muted'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join('')
            }),
        i.length > 0 &&
            n.push({
                label: 'Setting '.concat(i.length, ' announcement channels to white-dot'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let r of i) P(e, n, r.id, !0);
                }
            }),
        n
    );
}
function O(e) {
    let n = [],
        r = [];
    for (let n of e) m.ZP.isChannelMuted(n.guild_id, n.id) && n.isCategory() && !d.Z.isCollapsed(n.id) && r.push(n);
    return (
        r.length > 0 &&
            n.push({
                label: 'Unmuting '.concat(r.length, ' categories and setting to grey-dot'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let i of r)
                        P(e, n, i.id, !1),
                            w(e, n, i.id, (e) => {
                                (e.muted = !1), (e.mute_config = null);
                            });
                }
            }),
        n
    );
}
function D(e, n, r, i, a) {
    if (m.ZP.isMuted(e.id) && !m.ZP.isTemporarilyMuted(e.id)) return [];
    let s = new Set(n.map((e) => e.id)),
        o = i.filter((e) => s.has(e.channel_id)),
        l = u().keyBy(o, 'channel_id'),
        c = Math.max(
            r.messages === I.XR.High ? a.frecency.yearMinOpensLargeServer : a.frecency.yearMinOpensSmallServer,
            o.reduce((e, n) => {
                var r;
                return e + Number(null !== (r = n.num_year_opens) && void 0 !== r ? r : 0);
            }, 0) * a.frecency.totalOpensPercent
        ),
        d = Math.max(
            a.frecency.monthMinOpens,
            o.reduce((e, n) => {
                var r;
                return e + Number(null !== (r = n.num_three_month_opens) && void 0 !== r ? r : 0);
            }, 0) * a.frecency.totalOpensPercent
        ),
        f = [],
        _ = [];
    n.forEach((e) => {
        var n, r, i, a;
        let s = null !== (n = l[e.id]) && void 0 !== n ? n : {};
        Number(null !== (r = s.num_year_opens) && void 0 !== r ? r : 0) > c || Number(null !== (i = s.num_month_opens) && void 0 !== i ? i : 0) > d ? f.push(e) : Number(null !== (a = s.num_three_month_opens) && void 0 !== a ? a : 0) > 2 && _.push(e);
    });
    let h = [];
    return (
        f.length > 0 &&
            h.push({
                label: 'Setting '.concat(f.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: f.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join(''),
                apply: (e, n) => {
                    for (let r of f) P(e, n, r.id, !0);
                }
            }),
        _.length > 0 &&
            h.push({
                label: 'NOT setting '.concat(_.length, ' channels to white-dot because they were only viewed a little.'),
                debug: _.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(l[e.id]), ')')).join('')
            }),
        h
    );
}
function L(e, n) {
    if (m.ZP.isMuted(e.id) && !m.ZP.isTemporarilyMuted(e.id)) return [];
    let r = [],
        i = new Set(n.map((e) => e.id)),
        a = Date.now() - g.Z.Millis.DAYS_30,
        s = h.Z.getFrequentlyWithoutFetchingLatest()
            .filter((e) => e instanceof c.Sf && i.has(e.id))
            .filter((e) => {
                var n, r;
                let i = null !== (r = null === (n = h.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === n ? void 0 : n.recentUses) && void 0 !== r ? r : [];
                return 0 !== i.length && i[i.length - 1] >= a;
            });
    return (
        s.length > 0 &&
            r.push({
                label: 'Setting '.concat(s.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: s.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let r of s) P(e, n, r.id, !0);
                }
            }),
        r
    );
}
function x(e) {
    let n = [],
        r = [],
        i = [];
    return (
        e.forEach((e) => {
            if (m.ZP.isChannelMuted(e.guild_id, e.id)) return;
            let n = m.ZP.getChannelMessageNotifications(e.guild_id, e.id);
            n === T.bL.ALL_MESSAGES ? r.push(e) : n === T.bL.ONLY_MENTIONS && i.push(e);
        }),
        r.length > 0 &&
            n.push({
                label: 'Setting '.concat(r.length, ' channels to white-dot since they were explicitly All Messages'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let i of r) P(e, n, i.id, !0);
                }
            }),
        i.length > 0 &&
            n.push({
                label: 'Setting '.concat(i.length, ' channels to grey-dot since they were explicitly Mentions Only'),
                debug: i.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, n) => {
                    for (let r of i) P(e, n, r.id, !1);
                }
            }),
        n
    );
}
function w(e, n, r, i) {
    var a, s, o, l;
    let c = null !== (o = null === (a = e.channel_overrides) || void 0 === a ? void 0 : a[r]) && void 0 !== o ? o : {};
    i(c, null !== (l = null === (s = n.channel_overrides) || void 0 === s ? void 0 : s[r]) && void 0 !== l ? l : {}), !u().isEmpty(c) && (null == e.channel_overrides && (e.channel_overrides = {}), (e.channel_overrides[r] = c));
}
function P(e, n, r, i) {
    w(e, n, r, (e, n) => {
        var r, a;
        (e.flags = (0, E.mB)(null !== (a = null !== (r = e.flags) && void 0 !== r ? r : n.flags) && void 0 !== a ? a : 0, b.ic.UNREADS_ALL_MESSAGES, i)), (e.flags = (0, E.mB)(e.flags, b.ic.UNREADS_ONLY_MENTIONS, !i));
    });
}
