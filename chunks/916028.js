t(47120);
var i = t(200651);
t(192379);
var a = t(481060),
    n = t(113434);
s.Z = function (e) {
    let { onSelect: s, quest: t } = e,
        { quests: l } = (0, n.J2)({ fetchPolicy: 'cache-and-network' }),
        r = [
            {
                label: 'NONE',
                value: null
            },
            ...l.map((e) => ({
                label: e.config.messages.questName,
                value: e
            }))
        ];
    return (0, i.jsxs)(a.FormItem, {
        children: [
            (0, i.jsx)(a.FormTitle, {
                tag: a.FormTitleTags.H5,
                children: 'Prefill with Quest'
            }),
            (0, i.jsx)(a.FormText, {
                children: (0, i.jsx)(a.Select, {
                    'aria-label': 'Prefill Quest',
                    options: r,
                    isSelected: (e) => (null == e ? void 0 : e.id) === (null == t ? void 0 : t.id),
                    select: s,
                    serialize: String
                })
            })
        ]
    });
};
