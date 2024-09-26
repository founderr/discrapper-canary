t(47120);
var n = t(735250),
    r = t(470079),
    i = t(481060);
s.Z = function (e) {
    let { assetKey: s, initialValue: t, onMessageChange: a, title: l } = e,
        [o, d] = r.useState('');
    return (
        r.useEffect(() => {
            d(null != t ? t : '');
        }, [t]),
        (0, n.jsxs)(i.FormItem, {
            children: [
                (0, n.jsx)(i.FormTitle, {
                    tag: i.FormTitleTags.H5,
                    children: l
                }),
                (0, n.jsx)(i.FormText, {
                    children: (0, n.jsx)(i.TextInput, {
                        value: o,
                        onChange: function (e) {
                            d(e), a(s, e);
                        }
                    })
                })
            ]
        })
    );
};
