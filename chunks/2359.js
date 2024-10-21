var s = n(200651),
    a = n(192379),
    r = n(937579),
    i = n(104494),
    l = n(639119),
    o = n(702328),
    c = n(474936);
t.Z = (e) => {
    let { entrypoint: t } = e,
        n = (0, l.N)(),
        _ = (0, i.Ng)(),
        d = t === c.EZ.ApplicationStoreHome;
    return (
        a.useEffect(() => {
            (null != n || null != _) && (0, r.a)(n, _);
        }, [n, _]),
        (0, s.jsx)(o.Z, {
            isFullscreen: d,
            entrypoint: t
        })
    );
};
