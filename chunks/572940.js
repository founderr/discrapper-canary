var i = n(200651),
    r = n(192379),
    o = n(481060),
    a = n(246364),
    c = n(388032);
t.Z = function (e) {
    let { className: t, sortOrder: n, onSortChange: l } = e,
        s = r.useMemo(
            () => [
                {
                    value: a.Nw.TIMESTAMP_DESC,
                    label: c.intl.string(c.t.eoXe0t)
                },
                {
                    value: a.Nw.TIMESTAMP_ASC,
                    label: c.intl.string(c.t.mmeWUF)
                }
            ],
            []
        );
    return (0, i.jsx)(o.SingleSelect, {
        className: t,
        onChange: l,
        value: n,
        options: s
    });
};
