var i = n(200651),
    r = n(192379),
    a = n(481060),
    o = n(246364),
    l = n(388032);
t.Z = function (e) {
    let { className: t, sortOrder: n, onSortChange: c } = e,
        s = r.useMemo(
            () => [
                {
                    value: o.Nw.TIMESTAMP_DESC,
                    label: l.intl.string(l.t.eoXe0t)
                },
                {
                    value: o.Nw.TIMESTAMP_ASC,
                    label: l.intl.string(l.t.mmeWUF)
                }
            ],
            []
        );
    return (0, i.jsx)(a.SingleSelect, {
        className: t,
        onChange: c,
        value: n,
        options: s
    });
};
