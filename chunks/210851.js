t(47120);
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(763610),
    o = t(673105);
s.Z = function (e) {
    var s, t;
    let { assetKey: l, filters: c, initialValue: d, onFileChange: _, title: u } = e,
        [E, T] = a.useState(null),
        [S, I] = a.useState(!1);
    return (0, n.jsxs)(i.FormItem, {
        children: [
            (0, n.jsx)(i.FormTitle, {
                tag: i.FormTitleTags.H5,
                children: (0, n.jsxs)('div', {
                    className: o.headingWithTooltip,
                    children: [
                        u,
                        (0, n.jsx)(i.Tooltip, {
                            text: 'Supported asset formats: '.concat(c.join(', ')),
                            children: (e) =>
                                (0, n.jsx)(i.CircleInformationIcon, {
                                    size: 'xs',
                                    ...e
                                })
                        })
                    ]
                })
            }),
            (0, n.jsx)(r.Z, {
                filename: null !== (t = null !== (s = null == E ? void 0 : E.name) && void 0 !== s ? s : d) && void 0 !== t ? t : '',
                filters: [
                    {
                        name: u,
                        extensions: c
                    }
                ],
                buttonText: 'Browse',
                placeholder: 'Select an asset',
                onFileSelect: function (e) {
                    if ((T(null != e ? e : null), null == e)) return;
                    I(!0);
                    let s = new FileReader();
                    (s.onload = function () {
                        'string' == typeof s.result && (_(l, s.result), I(!1));
                    }),
                        (s.onerror = function (e) {
                            console.error(e);
                        }),
                        s.readAsDataURL(e);
                }
            })
        ]
    });
};
