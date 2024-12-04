t(47120);
var i = t(200651),
    a = t(192379),
    n = t(481060);
s.Z = function (e) {
    let { assetKey: s, initialValue: t, onMessageChange: l, title: r } = e,
        [o, d] = a.useState('');
    return (
        a.useEffect(() => {
            d(null != t ? t : '');
        }, [t]),
        (0, i.jsxs)(n.FormItem, {
            children: [
                (0, i.jsx)(n.FormTitle, {
                    tag: n.FormTitleTags.H5,
                    children: r
                }),
                (0, i.jsx)(n.FormText, {
                    children: (0, i.jsx)(n.TextInput, {
                        value: o,
                        onChange: function (e) {
                            d(e), l(s, e);
                        }
                    })
                })
            ]
        })
    );
};
