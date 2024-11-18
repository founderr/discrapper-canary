n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(990547),
    s = n(481060),
    l = n(213609),
    a = n(388905),
    o = n(760213),
    c = n(388032),
    u = n(675792);
function d(e) {
    let { onDismiss: t } = e;
    return (
        (0, l.Z)({
            type: r.ImpressionTypes.MODAL,
            name: r.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
        }),
        (0, i.jsxs)(a.ZP, {
            className: u.chooseAccountAuthBox,
            children: [
                (0, i.jsx)(a.Dx, { children: c.intl.string(c.t['bVbB6+']) }),
                (0, i.jsx)(s.Text, {
                    className: u.chooseAccountHelpText,
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: c.intl.string(c.t['0M5fNz'])
                }),
                (0, i.jsx)(o.Z, {
                    actionText: c.intl.string(c.t['DSN+h4']),
                    onAction: (e) => {
                        e === o.W.LOGIN_REQUIRED && t();
                    }
                }),
                (0, i.jsx)('div', {
                    className: u.actions,
                    children: (0, i.jsx)(s.Button, {
                        className: u.__invalid_chooseAccountButton,
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.PRIMARY,
                        onClick: t,
                        size: s.Button.Sizes.MEDIUM,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t['9g2mqa'])
                        })
                    })
                })
            ]
        })
    );
}
