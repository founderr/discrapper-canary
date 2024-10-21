t(47120);
var a = t(200651),
    n = t(192379),
    r = t(481060);
s.Z = function (e) {
    let { assetKey: s, initialValue: t, onMessageChange: i, title: l } = e,
        [o, d] = n.useState('');
    return (
        n.useEffect(() => {
            d(null != t ? t : '');
        }, [t]),
        (0, a.jsxs)(r.FormItem, {
            children: [
                (0, a.jsx)(r.FormTitle, {
                    tag: r.FormTitleTags.H5,
                    children: l
                }),
                (0, a.jsx)(r.FormText, {
                    children: (0, a.jsx)(r.TextInput, {
                        value: o,
                        onChange: function (e) {
                            d(e), i(s, e);
                        }
                    })
                })
            ]
        })
    );
};
