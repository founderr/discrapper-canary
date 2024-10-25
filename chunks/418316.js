n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(924301);
n(57132);
var a = n(430824),
    s = n(699516),
    r = n(594174),
    l = n(624138),
    o = n(51144),
    c = n(497089),
    u = n(981631),
    d = n(689938);
function _(e) {
    var t, n, _, E, I, m, f, T, h, N, p, C, g, S, A;
    let x = null !== (_ = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== _ ? _ : u.lds,
        R = o.ZP.getName(r.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
    switch (e.type) {
        case c.O7.INCOMING_FRIEND_REQUESTS:
            return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({ username: '**'.concat(R, '**') });
        case c.O7.FRIEND_REQUESTS_GROUPED:
            let v = o.ZP.getName(r.default.getUser(null === (I = e.other_users) || void 0 === I ? void 0 : null === (E = I[0]) || void 0 === E ? void 0 : E.id)),
                O = o.ZP.getName(r.default.getUser(null === (f = e.other_users) || void 0 === f ? void 0 : null === (m = f[1]) || void 0 === m ? void 0 : m.id)),
                M = Math.max((null !== (h = null === (T = e.other_users) || void 0 === T ? void 0 : T.length) && void 0 !== h ? h : 0) - 2, 0);
            return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUESTS.format({
                user: v,
                user2: O,
                count: M
            });
        case c.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let L = null !== (p = null === (N = e.local_id) || void 0 === N ? void 0 : N.split('_').pop()) && void 0 !== p ? p : 'unknown';
            return 'Update to build '.concat(L, ' available!');
        case c.DY.FRIEND_SUGGESTION_CREATED:
            let Z = s.Z.getRelationshipType(x) === u.OGo.PENDING_OUTGOING;
            return null !== (C = e.body) && void 0 !== C ? C : '';
        case c.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let b = e.guild_scheduled_event_id,
                P = null != b ? i.ZP.getGuildScheduledEvent(b) : null,
                D = null == P ? void 0 : P.name,
                j = null === (g = a.Z.getGuild(null == P ? void 0 : P.guild_id)) || void 0 === g ? void 0 : g.name,
                U = (0, i.Z2)(null != P ? P : void 0);
            return (0, l.Ew)(j) || (0, l.Ew)(D) || !U
                ? null !== (S = e.body) && void 0 !== S
                    ? S
                    : ''
                : d.Z.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                      event_name: D,
                      guild_name: j
                  });
        case c.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({ username: '**'.concat(R, '**') });
    }
    return null !== (A = e.body) && void 0 !== A ? A : '';
}
