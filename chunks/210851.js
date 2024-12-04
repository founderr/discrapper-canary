t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
var i = t(200651),
    a = t(192379),
    n = t(481060),
    l = t(763610),
    r = t(102787);
s.Z = function (e) {
    var s, t;
    let { assetKey: o, filters: d, initialValue: c, onFileChange: u, title: g } = e,
        [m, h] = a.useState(null),
        v = a.useRef(null);
    return (
        a.useEffect(
            () => () => {
                null != v.current && URL.revokeObjectURL(v.current);
            },
            []
        ),
        (0, i.jsxs)(n.FormItem, {
            children: [
                (0, i.jsx)(n.FormTitle, {
                    tag: n.FormTitleTags.H5,
                    children: (0, i.jsxs)('div', {
                        className: r.headingWithTooltip,
                        children: [
                            g,
                            (0, i.jsx)(n.Tooltip, {
                                text: 'Supported asset formats: '.concat(d.join(', ')),
                                children: (e) =>
                                    (0, i.jsx)(n.CircleInformationIcon, {
                                        size: 'xs',
                                        ...e
                                    })
                            })
                        ]
                    })
                }),
                (0, i.jsx)(l.Z, {
                    filename: null !== (t = null !== (s = null == m ? void 0 : m.name) && void 0 !== s ? s : c) && void 0 !== t ? t : '',
                    filters: [
                        {
                            name: g,
                            extensions: d
                        }
                    ],
                    buttonText: 'Browse',
                    placeholder: 'Select an asset',
                    onFileSelect: function (e) {
                        if ((h(null != e ? e : null), null == e)) return;
                        let s = URL.createObjectURL(e);
                        v.current = s;
                        let t = new URL(s);
                        t.searchParams.append('mimetype', e.type), t.searchParams.append('name', e.name), u(o, t.toString());
                    }
                })
            ]
        })
    );
};
