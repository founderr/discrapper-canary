t.d(s, {
    a: function () {
        return n;
    }
});
var a,
    n,
    r = t(200651);
t(192379);
var i = t(481060);
((a = n || (n = {}))[(a.UNENROLLED = 0)] = 'UNENROLLED'), (a[(a.ENROLLED = 1)] = 'ENROLLED'), (a[(a.COMPLETED_25 = 2)] = 'COMPLETED_25'), (a[(a.COMPLETED_50 = 3)] = 'COMPLETED_50'), (a[(a.COMPLETED_75 = 4)] = 'COMPLETED_75'), (a[(a.COMPLETED_100 = 5)] = 'COMPLETED_100'), (a[(a.CLAIMED = 6)] = 'CLAIMED');
s.Z = function (e) {
    let { onChange: s, value: t } = e;
    return (0, r.jsxs)(i.FormItem, {
        children: [
            (0, r.jsx)(i.FormTitle, {
                tag: i.FormTitleTags.H5,
                children: 'User State'
            }),
            (0, r.jsx)(i.FormText, {
                children: (0, r.jsx)(i.Select, {
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
