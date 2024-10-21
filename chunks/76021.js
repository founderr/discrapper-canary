n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(872810),
    s = n(451467),
    o = n(174609),
    l = n(928518),
    u = n(120522),
    c = n(933843),
    d = n(614011),
    _ = n(592125),
    E = n(430824),
    f = n(131951),
    h = n(594174),
    p = n(358085),
    I = n(981631),
    m = n(37113);
function T(e, t, T) {
    let S = l.Z.getWindowOpen(I.KJ3.CHANNEL_CALL_POPOUT) ? I.KJ3.CHANNEL_CALL_POPOUT : null;
    if (((0, o.Z)(S), p.isPlatformEmbedded))
        (0, i.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e('46746'), n.e('88904')]).then(n.bind(n, 60594));
            return (n) =>
                (0, r.jsx)(t, {
                    ...n,
                    guildId: e,
                    analyticsLocation: T
                });
        }),
            (0, c.F4)() && ((0, u.z)(), (0, d.O)());
    else {
        var g;
        let n = _.Z.getChannel(t),
            r = (0, s.Z)(m.tI.PRESET_CUSTOM, m.LY.RESOLUTION_1080, m.ws.FPS_30, h.default.getCurrentUser(), null === (g = E.Z.getGuild(e)) || void 0 === g ? void 0 : g.premiumTier, n)
                ? {
                      width: 1920,
                      height: 1080
                  }
                : {
                      width: 1280,
                      height: 720
                  };
        f.Z.getMediaEngine()
            .getDesktopSource(r, !0)
            .then((n) => {
                (0, a.WH)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                });
            });
    }
}
