n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(789020);
var o = n(724458);
var s = n(392711),
    l = n.n(s),
    u = n(131704),
    c = n(680089),
    d = n(592125),
    _ = n(480294),
    E = n(580005),
    f = n(496675),
    h = n(9156),
    p = n(70956),
    m = n(630388),
    I = n(823379),
    T = n(789662),
    g = n(981631),
    S = n(526761);
function A(e, t, n, r, i) {
    if (t !== T.AR.UseGreyDot)
        return [
            {
                label: 'Setting the guild to a white dot unread',
                apply: (e, t) => {
                    R(e, t, !0);
                }
            }
        ];
    let a = [],
        o = Object.values(d.Z.getMutableGuildChannelsForGuild(e.id)).filter((e) => f.Z.can(g.Plq.VIEW_CHANNEL, e));
    return a.push(...v(e, o)), a.push(N(e)), a.push(O()), a.push(...C(o)), a.push(...y(o)), a.push(...D(o)), _.Z.hasConsented(g.pjP.PERSONALIZATION) ? a.push(...L(e, o, n, r, i)) : a.push(...b(e, o)), a.filter(I.lm);
}
function v(e, t) {
    if (!(h.ZP.isMuted(e.id) && !h.ZP.isTemporarilyMuted(e.id))) return [];
    let n = [
            {
                label: 'Unmuting the guild and marking it as read',
                apply: (e) => {
                    (e.muted = !1), (e.mute_config = null);
                },
                needsMarkedAsRead: !0
            }
        ],
        r = t.filter((t) => h.ZP.getChannelMessageNotifications(e.id, t.id) === g.bL.ALL_MESSAGES);
    return (
        r.length > 0 &&
            n.push({
                label: 'Setting '.concat(r.length, ' to mentions-only since they were all-messages and we are unmuting the guild'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of r)
                        M(e, t, n.id, (e) => {
                            e.message_notifications = g.bL.ONLY_MENTIONS;
                        });
                }
            }),
        n
    );
}
function N(e) {
    if (h.ZP.getMessageNotifications(e.id) === g.bL.ALL_MESSAGES)
        return {
            label: 'Setting the guild to only mentions since it is in care-a-little but was previously all-messages',
            apply: (e) => {
                e.message_notifications = g.bL.ONLY_MENTIONS;
            }
        };
}
function O() {
    return {
        label: 'Setting the guild to a grey dot unread',
        apply: (e, t) => {
            R(e, t, !1);
        }
    };
}
function R(e, t, n) {
    var r, i;
    (e.flags = (0, m.mB)(null !== (i = null !== (r = e.flags) && void 0 !== r ? r : t.flags) && void 0 !== i ? i : 0, S.vc.UNREADS_ALL_MESSAGES, n)), (e.flags = (0, m.mB)(e.flags, S.vc.UNREADS_ONLY_MENTIONS, !n));
}
function C(e) {
    let t = [],
        [n, r] = l()(e)
            .filter((e) => e.type === g.d4z.GUILD_ANNOUNCEMENT)
            .partition((e) => h.ZP.isChannelMuted(e.guild_id, e.id) || (null != e.parent_id && h.ZP.isChannelMuted(e.guild_id, e.parent_id)))
            .value();
    return (
        n.length > 0 &&
            t.push({
                label: 'Not touching '.concat(n.length, ' announcement channels since they are muted'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join('')
            }),
        r.length > 0 &&
            t.push({
                label: 'Setting '.concat(r.length, ' announcement channels to white-dot'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of r) P(e, t, n.id, !0);
                }
            }),
        t
    );
}
function y(e) {
    let t = [],
        n = [];
    for (let t of e) h.ZP.isChannelMuted(t.guild_id, t.id) && t.isCategory() && !c.Z.isCollapsed(t.id) && n.push(t);
    return (
        n.length > 0 &&
            t.push({
                label: 'Unmuting '.concat(n.length, ' categories and setting to grey-dot'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let r of n)
                        P(e, t, r.id, !1),
                            M(e, t, r.id, (e) => {
                                (e.muted = !1), (e.mute_config = null);
                            });
                }
            }),
        t
    );
}
function L(e, t, n, r, i) {
    if (h.ZP.isMuted(e.id) && !h.ZP.isTemporarilyMuted(e.id)) return [];
    let a = new Set(t.map((e) => e.id)),
        o = r.filter((e) => a.has(e.channel_id)),
        s = l().keyBy(o, 'channel_id'),
        u = Math.max(
            n.messages === T.XR.High ? i.frecency.yearMinOpensLargeServer : i.frecency.yearMinOpensSmallServer,
            o.reduce((e, t) => {
                var n;
                return e + Number(null !== (n = t.num_year_opens) && void 0 !== n ? n : 0);
            }, 0) * i.frecency.totalOpensPercent
        ),
        c = Math.max(
            i.frecency.monthMinOpens,
            o.reduce((e, t) => {
                var n;
                return e + Number(null !== (n = t.num_three_month_opens) && void 0 !== n ? n : 0);
            }, 0) * i.frecency.totalOpensPercent
        ),
        d = [],
        _ = [];
    t.forEach((e) => {
        var t, n, r, i;
        let a = null !== (t = s[e.id]) && void 0 !== t ? t : {};
        Number(null !== (n = a.num_year_opens) && void 0 !== n ? n : 0) > u || Number(null !== (r = a.num_month_opens) && void 0 !== r ? r : 0) > c ? d.push(e) : Number(null !== (i = a.num_three_month_opens) && void 0 !== i ? i : 0) > 2 && _.push(e);
    });
    let E = [];
    return (
        d.length > 0 &&
            E.push({
                label: 'Setting '.concat(d.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: d.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(s[e.id]), ')')).join(''),
                apply: (e, t) => {
                    for (let n of d) P(e, t, n.id, !0);
                }
            }),
        _.length > 0 &&
            E.push({
                label: 'NOT setting '.concat(_.length, ' channels to white-dot because they were only viewed a little.'),
                debug: _.map((e) => '\n    - #'.concat(e.name, ' (').concat(JSON.stringify(s[e.id]), ')')).join('')
            }),
        E
    );
}
function b(e, t) {
    if (h.ZP.isMuted(e.id) && !h.ZP.isTemporarilyMuted(e.id)) return [];
    let n = [],
        r = new Set(t.map((e) => e.id)),
        i = Date.now() - p.Z.Millis.DAYS_30,
        a = E.Z.getFrequentlyWithoutFetchingLatest()
            .filter((e) => e instanceof u.Sf && r.has(e.id))
            .filter((e) => {
                var t, n;
                let r = null !== (n = null === (t = E.Z.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                return 0 !== r.length && r[r.length - 1] >= i;
            });
    return (
        a.length > 0 &&
            n.push({
                label: 'Setting '.concat(a.length, ' channels to white-dot since they are recent and frequently viewed'),
                debug: a.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of a) P(e, t, n.id, !0);
                }
            }),
        n
    );
}
function D(e) {
    let t = [],
        n = [],
        r = [];
    return (
        e.forEach((e) => {
            if (h.ZP.isChannelMuted(e.guild_id, e.id)) return;
            let t = h.ZP.getChannelMessageNotifications(e.guild_id, e.id);
            t === g.bL.ALL_MESSAGES ? n.push(e) : t === g.bL.ONLY_MENTIONS && r.push(e);
        }),
        n.length > 0 &&
            t.push({
                label: 'Setting '.concat(n.length, ' channels to white-dot since they were explicitly All Messages'),
                debug: n.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let r of n) P(e, t, r.id, !0);
                }
            }),
        r.length > 0 &&
            t.push({
                label: 'Setting '.concat(r.length, ' channels to grey-dot since they were explicitly Mentions Only'),
                debug: r.map((e) => '\n    - #'.concat(e.name)).join(''),
                apply: (e, t) => {
                    for (let n of r) P(e, t, n.id, !1);
                }
            }),
        t
    );
}
function M(e, t, n, r) {
    var i, a, o, s;
    let u = null !== (o = null === (i = e.channel_overrides) || void 0 === i ? void 0 : i[n]) && void 0 !== o ? o : {};
    r(u, null !== (s = null === (a = t.channel_overrides) || void 0 === a ? void 0 : a[n]) && void 0 !== s ? s : {}), !l().isEmpty(u) && (null == e.channel_overrides && (e.channel_overrides = {}), (e.channel_overrides[n] = u));
}
function P(e, t, n, r) {
    M(e, t, n, (e, t) => {
        var n, i;
        (e.flags = (0, m.mB)(null !== (i = null !== (n = e.flags) && void 0 !== n ? n : t.flags) && void 0 !== i ? i : 0, S.ic.UNREADS_ALL_MESSAGES, r)), (e.flags = (0, m.mB)(e.flags, S.ic.UNREADS_ONLY_MENTIONS, !r));
    });
}
