n.d(t, {
    e: function () {
        return v;
    }
});
var l = n(200651);
n(192379);
var a = n(481060),
    i = n(592125),
    o = n(703558),
    s = n(626135),
    r = n(709054),
    c = n(127654),
    d = n(61994),
    u = n(39604),
    m = n(356659),
    p = n(981631);
async function v(e, t) {
    let { channelId: v, editMetadata: h, analyticsLocations: x } = t,
        g = i.Z.getChannel(v);
    if (null != g)
        try {
            var C;
            let t = await (0, u.rO)(e, h),
                n = null !== (C = e.name) && void 0 !== C ? C : (0, m.yl)(r.default.extractTimestamp(e.id)),
                l = (0, d.Z)(n);
            (0, c.d)([new File([t], ''.concat('' !== l ? l : 'clip', '.mp4'), { type: 'video/mp4' })], g, o.d.ChannelMessage, { filesMetadata: [{ clip: e }] }),
                s.default.track(p.rMx.CLIP_SHARED, {
                    location_stack: x,
                    guild_id: g.guild_id,
                    channel_id: g.id,
                    channel_type: g.type,
                    application_id: e.applicationId,
                    clip_id: e.id
                });
        } catch (e) {
            throw (m.jF.error(e), e);
        }
    else
        (0, a.openModalLazy)(async () => {
            let { default: t } = await n.e('99617').then(n.bind(n, 502801));
            return (n) =>
                (0, l.jsx)(t, {
                    ...n,
                    clip: e,
                    editMetadata: h
                });
        });
}
