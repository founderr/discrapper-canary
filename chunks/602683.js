t(47120);
var n = t(735250),
    r = t(470079),
    a = t(481060);
s.Z = function (e) {
    let { assetKey: s, initialValue: t, onMessageChange: i, title: l } = e,
        [o, d] = r.useState('');
    return (
        r.useEffect(() => {
            d(null != t ? t : '');
        }, [t]),
        (0, n.jsxs)(a.FormItem, {
            children: [
                (0, n.jsx)(a.FormTitle, {
                    tag: a.FormTitleTags.H5,
                    children: l
                }),
                (0, n.jsx)(a.FormText, {
                    children: (0, n.jsx)(a.TextInput, {
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
