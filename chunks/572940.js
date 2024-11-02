var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(246364),
    s = n(388032);
t.Z = function (e) {
    let { className: t, sortOrder: n, onSortChange: o } = e,
        c = l.useMemo(
            () => [
                {
                    value: a.Nw.TIMESTAMP_DESC,
                    label: s.intl.string(s.t.eoXe0t)
                },
                {
                    value: a.Nw.TIMESTAMP_ASC,
                    label: s.intl.string(s.t.mmeWUF)
                }
            ],
            []
        );
    return (0, i.jsx)(r.SingleSelect, {
        className: t,
        onChange: o,
        value: n,
        options: c
    });
};
