l.d(n, {
    Z: function () {
        return C;
    }
});
var t = l(735250);
l(470079);
var i = l(442837), r = l(481060), a = l(749210), s = l(287734), u = l(933557), o = l(314897), d = l(592125), c = l(984933), Z = l(271383), E = l(430824), M = l(496675), _ = l(699516), f = l(594174), g = l(979651), m = l(934415), R = l(700785), I = l(981631), N = l(689938);
function C(e, n) {
    let l = (0, i.e7)([c.ZP], () => c.ZP.getChannels(n)[c.Zb], [n]), C = (0, i.e7)([
            g.Z,
            d.Z
        ], () => {
            let l = g.Z.getUserVoiceChannelId(n, e.id);
            return d.Z.getChannel(l);
        }, [
            n,
            e.id
        ]);
    if ((0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, e.id), [
            n,
            e.id
        ]) || null == C)
        return null;
    let O = e.id === o.default.getId();
    if (!O && !M.Z.can(I.Plq.MOVE_MEMBERS, C))
        return null;
    let A = l.filter(n => {
        let {channel: l} = n;
        return l.id !== C.id && (O ? M.Z.can(I.Plq.CONNECT, l) && !(0, m.rY)(l, g.Z, E.Z) : M.Z.can(I.Plq.MOVE_MEMBERS, l) && (M.Z.can(I.Plq.CONNECT, l) || R.BT({
            permission: I.Plq.CONNECT,
            user: e,
            context: l
        })) && !(0, m.rY)(l, g.Z, E.Z));
    });
    return 0 === A.length ? null : (0, t.jsx)(r.MenuItem, {
        id: 'voice-move',
        label: N.Z.Messages.MOVE_TO,
        children: A.map(l => {
            let {channel: i} = l;
            return (0, t.jsx)(r.MenuItem, {
                id: i.id,
                action: () => {
                    var l;
                    return l = i, void (e.id === o.default.getId() ? s.default.selectVoiceChannel(l.id) : a.Z.setChannel(n, e.id, l.id));
                },
                label: (0, u.F6)(i, f.default, _.Z)
            }, i.id);
        })
    });
}
