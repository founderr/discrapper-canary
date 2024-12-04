t.d(s, {
    a: function () {
        return a;
    }
});
var i,
    a,
    n = t(200651);
t(192379);
var l = t(481060);
((i = a || (a = {}))[(i.UNENROLLED = 0)] = 'UNENROLLED'), (i[(i.ENROLLED = 1)] = 'ENROLLED'), (i[(i.COMPLETED_25 = 2)] = 'COMPLETED_25'), (i[(i.COMPLETED_50 = 3)] = 'COMPLETED_50'), (i[(i.COMPLETED_75 = 4)] = 'COMPLETED_75'), (i[(i.COMPLETED_100 = 5)] = 'COMPLETED_100'), (i[(i.CLAIMED = 6)] = 'CLAIMED');
s.Z = function (e) {
    let { onChange: s, value: t } = e;
    return (0, n.jsxs)(l.FormItem, {
        children: [
            (0, n.jsx)(l.FormTitle, {
                tag: l.FormTitleTags.H5,
                children: 'User State'
            }),
            (0, n.jsx)(l.FormText, {
                children: (0, n.jsx)(l.Select, {
                    'aria-label': 'User State',
                    options: [
                        {
                            label: 'Unenrolled',
                            value: 0
                        },
                        {
                            label: 'Enrolled',
                            value: 1
                        },
                        {
                            label: '25% Complete',
                            value: 2
                        },
                        {
                            label: '50% Complete',
                            value: 3
                        },
                        {
                            label: '75% Complete',
                            value: 4
                        },
                        {
                            label: '100% Complete',
                            value: 5
                        },
                        {
                            label: 'Claimed',
                            value: 6
                        }
                    ],
                    isSelected: (e) => e === t,
                    select: s,
                    serialize: String
                })
            })
        ]
    });
};
