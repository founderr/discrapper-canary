n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(470079),
    a = n(143927),
    s = n(731965),
    r = n(352057),
    l = n(836768),
    o = n(49898);
function c() {
    let e = (0, r.h)({ location: 'DiscoveryUISelectedTab' }),
        t = (0, l.d)((e) => e.selectedTab, a.Z);
    return (
        i.useEffect(() => {
            let t = (function (e, t) {
                switch (e) {
                    case '/discovery/quests':
                        return o.F$.QUESTS;
                    case '/discovery/apps':
                        return t ? o.F$.APPS : o.D7;
                    case '/discovery/servers':
                        return o.F$.SERVERS;
                    default:
                        return o.D7;
                }
            })(new URL(window.location.href).pathname, e);
            (0, s.j)(() => l.d.setState({ selectedTab: t }));
        }, [e]),
        t
    );
}
