t(47120);
var n = t(735250),
    r = t(470079),
    i = t(481060),
    a = t(763610),
    l = t(720778);
s.Z = function (e) {
    var s, t;
    let { assetKey: o, filters: d, initialValue: c, onFileChange: u, title: m } = e,
        [h, g] = r.useState(null),
        [x, f] = r.useState(!1);
    return (0, n.jsxs)(i.FormItem, {
        children: [
            (0, n.jsx)(i.FormTitle, {
                tag: i.FormTitleTags.H5,
                children: (0, n.jsxs)('div', {
                    className: l.headingWithTooltip,
                    children: [
                        m,
                        (0, n.jsx)(i.Tooltip, {
                            text: 'Supported asset formats: '.concat(d.join(', ')),
                            children: (e) =>
                                (0, n.jsx)(i.CircleInformationIcon, {
                                    size: 'xs',
                                    ...e
                                })
                        })
                    ]
                })
            }),
            (0, n.jsx)(a.Z, {
                filename: null !== (t = null !== (s = null == h ? void 0 : h.name) && void 0 !== s ? s : c) && void 0 !== t ? t : '',
                filters: [
                    {
                        name: m,
                        extensions: d
                    }
                ],
                buttonText: 'Browse',
                placeholder: 'Select an asset',
                onFileSelect: function (e) {
                    if ((g(null != e ? e : null), null == e)) return;
                    f(!0);
                    let s = new FileReader();
                    (s.onload = function () {
                        'string' == typeof s.result && (u(o, s.result), f(!1));
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
