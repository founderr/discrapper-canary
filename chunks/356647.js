n.d(t, {
    E: function () {
        return m;
    }
}),
    n(47120),
    n(653041),
    n(789020);
var i = n(602715),
    s = n(812206),
    a = n(258732),
    l = n(314897),
    r = n(630388),
    o = n(786761),
    c = n(3148),
    u = n(981631);
let d = new Map();
function h(e, t, n) {
    let i = (0, c.ZP)({
            channelId: n,
            type: u.uaV.IN_GAME_MESSAGE_NUX,
            content: '',
            author: t.author,
            flags: u.iLy.EPHEMERAL,
            state: u.yb.SENT
        }),
        s = (0, o.e5)(i);
    (s.applicationId = t.applicationId),
        e.push({
            type: u.ys_.MESSAGE,
            content: s,
            groupId: i.id
        });
}
function m(e, t, n) {
    !(function (e, t, n) {
        var o, c;
        if (d.get(n.id) === t.id) {
            h(e, t, n.id);
            return;
        }
        if (null == t.applicationId || !n.isDM() || t.author.id === l.default.getId() || (0, r.yE)(null !== (o = n.recipientFlags) && void 0 !== o ? o : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX) || d.has(n.id)) return;
        let m = s.Z.getApplication(t.applicationId);
        if (null == m || !(0, r.yE)(m.flags, u.udG.SOCIAL_LAYER_INTEGRATION)) return;
        h(e, t, n.id), d.set(n.id, t.id);
        let p = (0, r.mB)(null !== (c = n.recipientFlags) && void 0 !== c ? c : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        a.Z.updatePrivateChannelRecipientFlags(n.id, p);
    })(e, t, n);
}
