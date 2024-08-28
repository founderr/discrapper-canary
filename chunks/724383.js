n.d(t, {
    A: function () {
        return h;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(252618),
    r = n(121711),
    l = n(823379),
    o = n(571457),
    c = n(976076),
    d = n(545114),
    u = n(49898),
    _ = n(689938),
    E = n(623641);
function h() {
    let e = (0, c.Z)(),
        t = (function (e) {
            switch (e) {
                case u.F$.SERVERS:
                    return (0, i.jsx)(d.Z, {});
                case u.F$.QUESTS:
                    return (0, i.jsx)(r.Z, {});
                default:
                    (0, l.vE)(e);
            }
        })(e);
    return (
        a.useEffect(() => {
            (0, o.R)({ selectedTab: e });
        }, [e]),
        (0, i.jsxs)('section', {
            className: E.container,
            children: [
                (0, i.jsx)(s.yY, {
                    location: (function (e) {
                        switch (e) {
                            case u.F$.SERVERS:
                                return _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_TITLE;
                            case u.F$.QUESTS:
                                return _.Z.Messages.GLOBAL_DISCOVERY_QUESTS_TITLE;
                            default:
                                (0, l.vE)(e);
                        }
                    })(e)
                }),
                (0, i.jsx)('div', { className: E.dragRegion }),
                t
            ]
        })
    );
}
