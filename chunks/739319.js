n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(454585),
    c = n(572004),
    d = n(689938),
    _ = n(207839);
function E(e) {
    let {
            element: {
                data: { title: t, body: n, sms: r, is_localized: o }
            }
        } = e,
        [E, f] = a.useState(!1),
        h = a.useRef(u.Z.reactParserFor(u.Z.defaultRules));
    if (!o) return null;
    let p = () => {
        (0, c.JG)(r) && f(!0);
    };
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-sm/semibold',
                color: 'header-secondary',
                className: _.header,
                children: t
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                className: _.bodyText,
                children: h.current(n)
            }),
            (0, i.jsx)('div', {
                className: _.__invalid_smsInfoContainer,
                children: (0, i.jsxs)('div', {
                    className: s()(_.smsNumberContainer, { [_.copied]: E }),
                    children: [
                        (0, i.jsx)(l.Text, {
                            variant: 'text-md/normal',
                            selectable: !0,
                            className: _.smsNumberText,
                            children: r
                        }),
                        (0, i.jsx)(l.Button, {
                            size: l.Button.Sizes.SMALL,
                            className: _.__invalid_trailingButton,
                            onClick: p,
                            color: l.Button.Colors.PRIMARY,
                            children: E ? d.Z.Messages.COPIED : d.Z.Messages.COPY
                        })
                    ]
                })
            })
        ]
    });
}
