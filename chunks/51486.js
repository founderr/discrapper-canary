n(47120);
var i = n(200651),
    l = n(192379),
    r = n(399606),
    a = n(704215),
    s = n(952265),
    o = n(481060),
    c = n(243778),
    u = n(38618),
    d = n(914010),
    h = n(921944);
function m(e) {
    return 'dismissible_content_'.concat(h.R.GUILD_TAKEOVER_MODAL, '-').concat(e);
}
t.Z = l.memo(function () {
    return (
        !(function () {
            let e = (0, r.e7)([u.Z], () => u.Z.isConnected()) ? [] : [],
                [t, p] = (0, c.US)(e, h.R.GUILD_TAKEOVER_MODAL),
                f = (0, s.f9)(),
                g = l.useRef(null);
            l.useEffect(() => {
                if (null == t) {
                    g.current = null;
                    return;
                }
                if (!f && g.current !== t)
                    !(function (e) {
                        let { dismissibleContent: t, markAsDismissed: l } = e,
                            r = {
                                onCloseCallback: (e) => l(null != e ? e : h.L.UNKNOWN),
                                modalKey: m(t)
                            },
                            s = d.Z.getGuildId();
                        if (t === a.z.SERVER_SHOP_UPSELL)
                            null != s &&
                                (0, o.openModalLazy)(async () => {
                                    let { default: e } = await n.e('7302').then(n.bind(n, 756779));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            ...t,
                                            guildId: s,
                                            markAsDismissed: l
                                        });
                                }, r);
                    })({
                        dismissibleContent: t,
                        markAsDismissed: p
                    }),
                        (g.current = t);
            }, [t, f, p]),
                l.useEffect(
                    () => () => {
                        null != t && (0, s.Mr)(m(t));
                    },
                    [t]
                );
        })(),
        null
    );
});
