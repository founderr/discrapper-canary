t.r(n), t(47120), t(757143);
var s = t(735250),
    r = t(470079),
    l = t(593473),
    o = t(266067),
    i = t(478677),
    a = t(457330),
    c = t(675207),
    u = t(981631);
function d(e) {
    let { platformType: n } = e,
        [t, i] = r.useState('verifying'),
        d = (0, o.k6)();
    return (
        r.useEffect(() => {
            let { code: e, state: t } = l.parse(window.location.search);
            if (null == e || null == t) {
                i('error');
                return;
            }
            a.Z.linkDispatchAuthCallback(n, {
                code: e,
                state: t
            }).then(
                (e) => {
                    let { status: t } = e;
                    if (204 === t) return d.replace(u.Z5c.CONNECTIONS_SUCCESS(n));
                    i('error');
                },
                () => {
                    i('error');
                }
            );
        }, [d, n]),
        (0, s.jsx)(c.AccountConnectionResult, {
            platformType: n,
            verifying: 'verifying' === t
        })
    );
}
n.default = function (e) {
    let { match: n } = e,
        t = n.params.type,
        { two_way_link_type: r } = l.parse(window.location.search);
    return [u.ABu.XBOX, u.ABu.PLAYSTATION_STAGING, u.ABu.PLAYSTATION, u.ABu.CRUNCHYROLL].includes(t) && r === i.g.DESKTOP ? (0, s.jsx)(d, { platformType: t }) : null;
};
