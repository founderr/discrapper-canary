n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    l = n(592125),
    r = n(944486),
    a = n(585483),
    s = n(917107),
    o = n(89425),
    c = n(197386),
    d = n(981631);
function u(e) {
    let { onTransition: t } = e;
    i.useEffect(() => {
        async function e(e) {
            let { channelId: n } = e;
            if (!(0, s.Z)(n)) return;
            r.Z.getVoiceChannelId() !== n && (await (0, o.Z)({ channelId: n }));
            let i = l.Z.getChannel(n),
                a = null == i ? void 0 : i.guild_id;
            setTimeout(() => {
                (0, c.Z)(a, n), null == t || t();
            }, 0);
        }
        return (
            a.S.subscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                a.S.unsubscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
