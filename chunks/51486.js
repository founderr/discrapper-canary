n(47120);
var i = n(200651),
    s = n(192379),
    a = n(399606),
    l = n(704215),
    r = n(952265),
    o = n(481060),
    c = n(243778),
    u = n(38618),
    d = n(914010),
    h = n(921944);
function m(e) {
    return 'dismissible_content_'.concat(h.R.GUILD_TAKEOVER_MODAL, '-').concat(e);
}
t.Z = s.memo(function () {
    return (
        !(function () {
            let e = (0, a.e7)([u.Z], () => u.Z.isConnected()) ? [] : [],
                [t, p] = (0, c.US)(e, h.R.GUILD_TAKEOVER_MODAL),
                _ = (0, r.f9)(),
                f = s.useRef(null);
            s.useEffect(() => {
                if (null == t) {
                    f.current = null;
                    return;
                }
                if (!_ && f.current !== t)
                    !(function (e) {
                        let { dismissibleContent: t, markAsDismissed: s } = e,
                            a = {
                                onCloseCallback: (e) => s(null != e ? e : h.L.UNKNOWN),
                                modalKey: m(t)
                            },
                            r = d.Z.getGuildId();
                        if (t === l.z.SERVER_SHOP_UPSELL)
                            null != r &&
                                (0, o.openModalLazy)(async () => {
                                    let { default: e } = await n.e('7302').then(n.bind(n, 756779));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            guildId: r,
                                            markAsDismissed: s
                                        });
                                }, a);
                    })({
                        dismissibleContent: t,
                        markAsDismissed: p
                    }),
                        (f.current = t);
            }, [t, _, p]),
                s.useEffect(
                    () => () => {
                        null != t && (0, r.Mr)(m(t));
                    },
                    [t]
                );
        })(),
        null
    );
});
