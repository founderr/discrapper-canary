var t = n(200651),
    a = n(192379),
    l = n(481060),
    r = n(246364),
    i = n(689938);
s.Z = function (e) {
    let { className: s, sortOrder: n, onSortChange: o } = e,
        c = a.useMemo(
            () => [
                {
                    value: r.Nw.TIMESTAMP_DESC,
                    label: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_NEWEST
                },
                {
                    value: r.Nw.TIMESTAMP_ASC,
                    label: i.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_SORT_OLDEST
                }
            ],
            []
        );
    return (0, t.jsx)(l.SingleSelect, {
        className: s,
        onChange: o,
        value: n,
        options: c
    });
};
