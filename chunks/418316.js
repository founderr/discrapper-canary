n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(924301);
n(57132);
var i = n(430824),
    a = n(699516),
    o = n(594174),
    s = n(624138),
    l = n(51144),
    u = n(497089),
    c = n(981631),
    d = n(689938);
function _(e) {
    var t, n, _, E, f, h, p, m, I, T, g, S, A, v, N;
    let O = null !== (_ = null === (t = e.other_user) || void 0 === t ? void 0 : t.id) && void 0 !== _ ? _ : c.lds,
        R = l.ZP.getName(o.default.getUser(null === (n = e.other_user) || void 0 === n ? void 0 : n.id));
    switch (e.type) {
        case u.O7.INCOMING_FRIEND_REQUESTS:
            return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({ username: '**'.concat(R, '**') });
        case u.O7.FRIEND_REQUESTS_GROUPED:
            let C = l.ZP.getName(o.default.getUser(null === (f = e.other_users) || void 0 === f ? void 0 : null === (E = f[0]) || void 0 === E ? void 0 : E.id)),
                y = l.ZP.getName(o.default.getUser(null === (p = e.other_users) || void 0 === p ? void 0 : null === (h = p[1]) || void 0 === h ? void 0 : h.id)),
                L = Math.max((null !== (I = null === (m = e.other_users) || void 0 === m ? void 0 : m.length) && void 0 !== I ? I : 0) - 2, 0);
            return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUESTS.format({
                user: C,
                user2: y,
                count: L
            });
        case u.O7.MOBILE_NATIVE_UPDATE_AVAILABLE:
            let b = null !== (g = null === (T = e.local_id) || void 0 === T ? void 0 : T.split('_').pop()) && void 0 !== g ? g : 'unknown';
            return 'Update to build '.concat(b, ' available!');
        case u.DY.FRIEND_SUGGESTION_CREATED:
            let D = !1,
                M = a.Z.getRelationshipType(O) === c.OGo.PENDING_OUTGOING;
            return D && M ? d.Z.Messages.NOTIF_CENTER_V2_ADD_FRIEND_REQUEST_SENT.format({ user: R }) : null !== (S = e.body) && void 0 !== S ? S : '';
        case u.DY.GUILD_SCHEDULED_EVENT_STARTED:
            let P = e.guild_scheduled_event_id,
                U = null != P ? r.ZP.getGuildScheduledEvent(P) : null,
                w = null == U ? void 0 : U.name,
                x = null === (A = i.Z.getGuild(null == U ? void 0 : U.guild_id)) || void 0 === A ? void 0 : A.name,
                G = (0, r.Z2)(null != U ? U : void 0);
            return (0, s.Ew)(x) || (0, s.Ew)(w) || !G
                ? null !== (v = e.body) && void 0 !== v
                    ? v
                    : ''
                : d.Z.Messages.NOTIFICATION_CENTER_GUILD_SCHEDULED_EVENT_ENDED.format({
                      event_name: w,
                      guild_name: x
                  });
        case u.O7.INCOMING_FRIEND_REQUESTS_ACCEPTED:
            return d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST_ACCEPTED.format({ username: '**'.concat(R, '**') });
    }
    return null !== (N = e.body) && void 0 !== N ? N : '';
}
