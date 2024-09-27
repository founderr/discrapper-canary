t.r(n), t(757143);
var r = t(735250),
    c = t(470079),
    o = t(593473),
    l = t(266067),
    a = t(478677),
    i = t(457330),
    s = t(675207),
    u = t(981631);
function f(e) {
    let { platformType: n } = e,
        t = (0, l.k6)();
    return (
        c.useEffect(() => {
            let { code: e, state: r } = o.parse(window.location.search),
                c = ''.concat(u.Z5c.CONNECTIONS_ERROR(n)).concat(window.location.search);
            if (null == e || null == r) {
                t.replace(c);
                return;
            }
            i.Z.linkDispatchAuthCallback(n, {
                code: e,
                state: r
            }).then(
                (e) => {
                    let { status: r } = e;
                    204 === r ? t.replace(u.Z5c.CONNECTIONS_SUCCESS(n)) : t.replace(c);
                },
                () => {
                    t.replace(c);
                }
            );
        }, [t, n]),
        (0, r.jsx)(s.VerifyAccountLoading, { platformType: n })
    );
}
n.default = function (e) {
    let { match: n } = e,
        t = n.params.type,
        { two_way_link_type: c } = o.parse(window.location.search);
    return [u.ABu.XBOX, u.ABu.PLAYSTATION_STAGING, u.ABu.PLAYSTATION, u.ABu.CRUNCHYROLL].includes(t) && c === a.g.DESKTOP ? (0, r.jsx)(f, { platformType: t }) : null;
};
