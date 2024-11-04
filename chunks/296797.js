n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    l = n(592125),
    a = n(944486),
    r = n(585483),
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
            a.Z.getVoiceChannelId() !== n && (await (0, o.Z)({ channelId: n }));
            let i = l.Z.getChannel(n),
                r = null == i ? void 0 : i.guild_id;
            setTimeout(() => {
                (0, c.Z)(r, n), null == t || t();
            }, 0);
        }
        return (
            r.S.subscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e),
            () => {
                r.S.unsubscribe(d.CkL.OPEN_EMBEDDED_ACTIVITY, e);
            }
        );
    }, [t]);
}
