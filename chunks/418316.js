n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(924301);
n(57132);
var r = n(430824),
    l = n(699516),
    a = n(594174),
    o = n(624138),
    s = n(51144),
    c = n(497089),
    u = n(981631),
    d = n(388032);
function m(e) {
    var t, n, m, h, f, p, _, g, E, C, I, x, N, v, T;
    let S = null !== (m = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== m ? m : u.lds,
        A = s.ZP.getName(a.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
    switch (e.type) {
        case c.O7.INCOMING_FRIEND_REQUESTS:
            return d.intl.formatToPlainString(d.t.uIomX1, { username: '**'.concat(A, '**') });
        case c.O7.FRIEND_REQUESTS_GROUPED:
            let b = s.ZP.getName(a.default.getUser(null === (f = e.other_users) || void 0 === f ? void 0 : null === (h = f[0]) || void 0 === h ? void 0 : h.id)),
                j = s.ZP.getName(a.default.getUser(null === (_ = e.other_users) || void 0 === _ ? void 0 : null === (p = _[1]) || void 0 === p ? void 0 : p.id)),
                Z = Math.max((null !== (E = null === (g = e.other_users) || void 0 === g ? void 0 : g.length) && void 0 !== E ? E : 0) - 2, 0);
            return d.intl.format(d.t.g5xyIC, {
                user: b,
                user2: j,
                count: Z
            });
        case c.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let R = null !== (I = null === (C = e.local_id) || void 0 === C ? void 0 : C.split('_').pop()) && void 0 !== I ? I : 'unknown';
            return 'Update to build '.concat(R, ' available!');
        case c.DY.FRIEND_SUGGESTION_CREATED:
            let L = l.Z.getRelationshipType(S) === u.OGo.PENDING_OUTGOING;
            return null !== (x = e.body) && void 0 !== x ? x : '';
        case c.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let P = e.guild_scheduled_event_id,
                y = null != P ? i.ZP.getGuildScheduledEvent(P) : null,
                O = null == y ? void 0 : y.name,
                M = null === (N = r.Z.getGuild(null == y ? void 0 : y.guild_id)) || void 0 === N ? void 0 : N.name,
                k = (0, i.Z2)(null != y ? y : void 0);
            return (0, o.Ew)(M) || (0, o.Ew)(O) || !k
                ? null !== (v = e.body) && void 0 !== v
                    ? v
                    : ''
                : d.intl.format(d.t.AyvfXV, {
                      event_name: O,
                      guild_name: M
                  });
        case c.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return d.intl.formatToPlainString(d.t['5Uzkdn'], { username: '**'.concat(A, '**') });
    }
    return null !== (T = e.body) && void 0 !== T ? T : '';
}
