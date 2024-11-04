n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(192379),
    l = n(592125),
    r = n(944486),
    s = n(585483),
    a = n(917107),
    o = n(89425),
    c = n(197386),
    u = n(981631);
function d(e) {
    let { onTransition: t } = e;
    i.useEffect(() => {
        async function e(e) {
            let { channelId: n } = e;
            if (!(0, a.Z)(n)) return;
            r.Z.getVoiceChannelId() !== n && (await (0, o.Z)({ channelId: n }));
            let i = l.Z.getChannel(n),
                s = null == i ? void 0 : i.guild_id;
            setTimeout(() => {
                (0, c.Z)(s, n), null == t || t();
            }, 0);
        }
        return (
            s.S.subscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                s.S.unsubscribe(u.CkL.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
