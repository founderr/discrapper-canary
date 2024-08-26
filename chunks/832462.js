t.r(n), t(757143);
var r = t(735250),
    o = t(470079),
    c = t(593473),
    l = t(266067),
    s = t(478677),
    i = t(457330),
    a = t(675207),
    u = t(981631);
function d(e) {
    let { platformType: n } = e,
        t = (0, l.k6)();
    return (
        o.useEffect(() => {
            let { code: e, state: r } = c.parse(window.location.search),
                o = ''.concat(u.Z5c.CONNECTIONS_ERROR(n)).concat(window.location.search);
            if (null == e || null == r) {
                t.replace(o);
                return;
            }
            i.Z.linkDispatchAuthCallback(n, {
                code: e,
                state: r
            }).then(
                (e) => {
                    let { status: r } = e;
                    204 === r ? t.replace(u.Z5c.CONNECTIONS_SUCCESS(n)) : t.replace(o);
                },
                () => {
                    t.replace(o);
                }
            );
        }, [t, n]),
        (0, r.jsx)(a.VerifyAccountLoading, { platformType: n })
    );
}
n.default = function (e) {
    let { match: n } = e,
        t = n.params.type,
        { two_way_link_type: o } = c.parse(window.location.search);
    return [u.ABu.XBOX, u.ABu.PLAYSTATION_STAGING, u.ABu.PLAYSTATION, u.ABu.CRUNCHYROLL].includes(t) && o === s.g.DESKTOP ? (0, r.jsx)(d, { platformType: t }) : null;
};
