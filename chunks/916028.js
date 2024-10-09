t(47120);
var a = t(735250);
t(470079);
var n = t(481060),
    r = t(113434);
s.Z = function (e) {
    let { onSelect: s, quest: t } = e,
        { quests: i } = (0, r.J2)({ fetchPolicy: 'cache-and-network' }),
        l = [
            {
                label: 'NONE',
                value: null
            },
            ...i.map((e) => ({
                label: e.config.messages.questName,
                value: e
            }))
        ];
    return (0, a.jsxs)(n.FormItem, {
        children: [
            (0, a.jsx)(n.FormTitle, {
                tag: n.FormTitleTags.H5,
                children: 'Prefill with Quest'
            }),
            (0, a.jsx)(n.FormText, {
                children: (0, a.jsx)(n.Select, {
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
