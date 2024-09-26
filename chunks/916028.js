t(47120);
var n = t(735250);
t(470079);
var r = t(481060),
    i = t(113434);
s.Z = function (e) {
    let { onSelect: s, quest: t } = e,
        { quests: a } = (0, i.J2)({ fetchPolicy: 'cache-and-network' }),
        l = [
            {
                label: 'NONE',
                value: null
            },
            ...a.map((e) => ({
                label: e.config.messages.questName,
                value: e
            }))
        ];
    return (0, n.jsxs)(r.FormItem, {
        children: [
            (0, n.jsx)(r.FormTitle, {
                tag: r.FormTitleTags.H5,
                children: 'Prefill with Quest'
            }),
            (0, n.jsx)(r.FormText, {
                children: (0, n.jsx)(r.Select, {
                    'aria-label': 'Prefill Quest',
                    options: l,
                    isSelected: (e) => (null == e ? void 0 : e.id) === (null == t ? void 0 : t.id),
                    select: s,
                    serialize: String
                })
            })
        ]
    });
};
