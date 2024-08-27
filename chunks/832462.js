t.r(n), t(757143);
var o = t(735250),
    r = t(470079),
    c = t(593473),
    l = t(266067),
    i = t(478677),
    a = t(457330),
    s = t(675207),
    u = t(981631);
function d(e) {
    let { platformType: n } = e,
        t = (0, l.k6)();
    return (
        r.useEffect(() => {
            let { code: e, state: o } = c.parse(window.location.search),
                r = ''.concat(u.Z5c.CONNECTIONS_ERROR(n)).concat(window.location.search);
            if (null == e || null == o) {
                t.replace(r);
                return;
            }
            a.Z.linkDispatchAuthCallback(n, {
                code: e,
                state: o
            }).then(
                (e) => {
                    let { status: o } = e;
                    204 === o ? t.replace(u.Z5c.CONNECTIONS_SUCCESS(n)) : t.replace(r);
                },
                () => {
                    t.replace(r);
                }
            );
        }, [t, n]),
        (0, o.jsx)(s.VerifyAccountLoading, { platformType: n })
    );
}
n.default = function (e) {
    let { match: n } = e,
        t = n.params.type,
        { two_way_link_type: r } = c.parse(window.location.search);
    return [u.ABu.XBOX, u.ABu.PLAYSTATION_STAGING, u.ABu.PLAYSTATION, u.ABu.CRUNCHYROLL].includes(t) && r === i.g.DESKTOP ? (0, o.jsx)(d, { platformType: t }) : null;
};
