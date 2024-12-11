var i = n(200651),
    r = n(192379),
    o = n(481060),
    a = n(246364),
    l = n(388032);
t.Z = function (e) {
    let { className: t, sortOrder: n, onSortChange: c } = e,
        s = r.useMemo(
            () => [
                {
                    value: a.Nw.TIMESTAMP_DESC,
                    label: l.intl.string(l.t.eoXe0t)
                },
                {
                    value: a.Nw.TIMESTAMP_ASC,
                    label: l.intl.string(l.t.mmeWUF)
                }
            ],
            []
        );
    return (0, i.jsx)(o.SingleSelect, {
        className: t,
        onChange: c,
        value: n,
        options: s
    });
};
