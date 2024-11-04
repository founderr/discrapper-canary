n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(131704),
    s = n(9156),
    a = n(423589),
    o = n(674190),
    c = n(624617),
    u = n(490897);
let d = Object.freeze({
    NOTICE_RENDER: {
        MAX: 1,
        PER_SECONDS: 600
    },
    CHANNEL_VISTS: {
        MIN: 2,
        PER_SECONDS: 86400
    }
});
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, a.Mn)('useShouldRenderBanner'),
        h = (0, l.e7)(
            [c.Z, s.ZP],
            () => {
                let { guild_id: t, id: n } = e;
                if (!r.$N.has(e.type)) return !1;
                let i = s.ZP.resolveUnreadSetting(e),
                    l = s.ZP.getChannelUnreadSetting(t, n),
                    a = c.Z.getNumberOfRendersSince(d.NOTICE_RENDER.PER_SECONDS),
                    o = c.Z.getNumberOfChannelVisitsSince(t, n, d.CHANNEL_VISTS.PER_SECONDS);
                return l === u.i.UNSET && i !== u.i.ALL_MESSAGES && a <= d.NOTICE_RENDER.MAX && o >= d.CHANNEL_VISTS.MIN;
            },
            [e]
        );
    return (
        i.useEffect(() => {
            t && h && (0, o.g)(e.guild_id, e.id);
        }, [t, h, e.guild_id, e.id]),
        i.useEffect(() => {
            r.$N.has(e.type) && (0, o.a)(e.guild_id, e.id);
        }, [e.guild_id, e.id, e.type]),
        {
            canRenderNotice: h && n,
            recordNoticeRender: () => (0, o.g)(e.guild_id, e.id)
        }
    );
}
