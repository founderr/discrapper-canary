n.d(e, {
    c: function () {
        return i;
    }
});
var a = n(200651);
n(192379);
var r = n(481060),
    o = n(689938),
    s = n(715802),
    c = n(387852);
let i = (t) => {
    let { onTryAgain: e } = t;
    return (0, a.jsxs)('div', {
        className: s.content,
        children: [
            (0, a.jsx)('img', {
                src: c,
                width: '254',
                height: '127',
                alt: ''
            }),
            (0, a.jsxs)('div', {
                className: s.innerContent,
                children: [
                    (0, a.jsx)(r.Heading, {
                        variant: 'heading-xl/extrabold',
                        children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_TITLE
                    }),
                    (0, a.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: o.Z.Messages.ACTIVATE_DEVICE_ERROR_BODY
                    })
                ]
            }),
            (0, a.jsx)(r.Button, {
                className: s.footerButton,
                color: r.Button.Colors.BRAND,
                onClick: e,
                children: o.Z.Messages.TRY_AGAIN
            })
        ]
    });
};
