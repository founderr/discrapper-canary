var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(246364),
    o = n(388032);
t.Z = function (e) {
    let { className: t, sortOrder: n, onSortChange: c } = e,
        s = r.useMemo(
            () => [
                {
                    value: l.Nw.TIMESTAMP_DESC,
                    label: o.intl.string(o.t.eoXe0t)
                },
                {
                    value: l.Nw.TIMESTAMP_ASC,
                    label: o.intl.string(o.t.mmeWUF)
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
