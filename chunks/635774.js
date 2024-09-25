n.d(t, {
    Z: function () {
        return g;
    }
});
var s = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    r = n(442837),
    o = n(481060),
    l = n(230711),
    u = n(706454),
    d = n(346585),
    c = n(347649),
    E = n(981631),
    _ = n(689938),
    m = n(923112);
function g(e) {
    let { onClose: t, handleStartFlow: n } = e,
        i = (0, c.CC)(),
        g = (0, r.e7)([u.default], () => u.default.locale);
    return (0, s.jsxs)('div', {
        className: m.infoContainer,
        children: [
            (0, s.jsx)(o.Heading, {
                className: a()(m.finishTitle, { [m.finishTitlePadding]: i }),
                color: 'header-primary',
                variant: 'heading-xl/bold',
                children: i ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format({ date: (0, d.IE)(g) }) : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
            }),
            (0, s.jsx)(o.Text, {
                className: m.subtitleFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: i ? _.Z.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format({ date: (0, d.IE)(g) }) : _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
            }),
            (0, s.jsx)(o.Text, {
                className: m.promptFinish,
                color: 'header-secondary',
                variant: 'text-md/medium',
                children: _.Z.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                    onClick: () => {
                        t(), l.Z.open(E.oAB.ACCOUNT);
                    }
                })
            }),
            (0, s.jsx)(o.Button, {
                className: m.button,
                type: 'button',
                size: o.Button.Sizes.SMALL,
                onClick: i ? n : t,
                children: i ? _.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT : _.Z.Messages.INVITES_DISABLED_CONFIRMATION
            })
        ]
    });
}
