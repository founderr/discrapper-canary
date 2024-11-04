n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    s = n(512722),
    a = n.n(s),
    o = n(442837),
    c = n(481060),
    u = n(924301),
    d = n(786915),
    h = n(430824),
    m = n(496675),
    p = n(981631),
    f = n(388032),
    g = n(632189);
function C(e) {
    var t, l;
    let { stream: s, applicationId: C, channel: x, exitFullScreen: v, appContext: _, analyticsLocation: I, className: E, ...b } = e,
        S = null == x ? void 0 : x.getGuildId(),
        Z = null == x ? void 0 : x.id,
        T = (0, o.e7)([h.Z], () => (null != S ? h.Z.getGuild(S) : null), [S]),
        N = (0, o.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(Z), [Z]);
    if (((t = T), (l = x), !(null != t && null != l && m.Z.can(p.Plq.CREATE_INSTANT_INVITE, l)))) return null;
    let j = f.intl.string(f.t.VINpSE);
    return (
        null != s ? (j = f.intl.string(f.t['6VQaqa'])) : null != C && (j = f.intl.string(f.t['OzOM/v'])),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(c.Button, {
                    size: c.Button.Sizes.SMALL,
                    color: g.buttonColor,
                    onClick: () => {
                        a()(null != T, 'guild cannot be null'),
                            a()(null != x, 'channel cannot be null'),
                            !(function (e) {
                                let { guild: t, channel: l, streamUserId: r, applicationId: s, appContext: a, exitFullScreen: o, analyticsLocation: u, guildScheduledEvent: d } = e;
                                null == o || o(),
                                    (0, c.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                                            return (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    guild: t,
                                                    channel: l,
                                                    streamUserId: r,
                                                    applicationId: s,
                                                    analyticsLocation: u,
                                                    source: l.isGuildStageVoice() ? p.t4x.STAGE_CHANNEL : p.t4x.STREAM_INVITE,
                                                    guildScheduledEvent: d
                                                });
                                        },
                                        {
                                            modalKey: 'stream-invite-modal',
                                            contextKey: a === p.IlC.POPOUT ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
                                        }
                                    );
                            })({
                                guild: T,
                                channel: x,
                                streamUserId: null == s ? void 0 : s.ownerId,
                                applicationId: C,
                                appContext: _,
                                exitFullScreen: v,
                                analyticsLocation: I,
                                guildScheduledEvent: N
                            });
                    },
                    className: r()(E, g.textButton),
                    ...b,
                    children: j
                }),
                (0, i.jsx)(d.Z, {
                    channel: x,
                    stream: s,
                    appContext: _,
                    className: r()(E, g.iconButton),
                    exitFullScreen: v,
                    analyticsLocation: I,
                    guildScheduledEvent: N
                })
            ]
        })
    );
}
