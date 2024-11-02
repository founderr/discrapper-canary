n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(173511),
    l = n(481060);
function a() {
    let [e, t] = s.useState('');
    return (0, i.jsxs)(l.FormSection, {
        title: 'Text components',
        tag: l.FormTitleTags.H1,
        children: [
            (0, i.jsx)(l.TextInput, {
                placeholder: 'Enter custom text...',
                onChange: (e) => t(e)
            }),
            (0, i.jsx)(l.FormDivider, { style: { margin: '10px 0' } }),
            r.O.map((t) =>
                'code' === t
                    ? null
                    : (0, i.jsx)(
                          l.Text,
                          {
                              variant: t,
                              children: '' !== e ? ''.concat(e, ' (').concat(t, ')') : t
                          },
                          t
                      )
            )
        ]
    });
}
