t.d(n, {
    h: function () {
        return s;
    },
    m: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var r = t(481060),
    o = t(17894),
    a = t(689938),
    l = t(632354);
let s = (e) => {
    let { onConfirm: n, onCancel: t, title: s, subtitle: c, confirmCta: d, showOpenDiscord: u = !0 } = e;
    return (0, i.jsxs)('div', {
        className: l.confirmationContainer,
        children: [
            (0, i.jsx)(r.Heading, {
                className: l.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: s
            }),
            null != c
                ? (0, i.jsx)(r.Text, {
                      className: l.confirmationSubtitle,
                      variant: 'text-sm/normal',
                      color: 'header-secondary',
                      children: c
                  })
                : null,
            (0, i.jsxs)('div', {
                className: l.buttonContainer,
                children: [
                    u &&
                        (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            onClick: () => (0, o.Z)('application_sub_mweb_success_modal'),
                            children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }),
                    (0, i.jsx)(r.Button, {
                        fullWidth: !0,
                        color: r.Button.Colors.PRIMARY,
                        onClick: n,
                        children: d
                    }),
                    null != t &&
                        (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            onClick: t,
                            children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
                        })
                ]
            })
        ]
    });
};
function c(e) {
    let { onConfirm: n, tierName: t, subscription: s } = e;
    return (0, i.jsxs)('div', {
        className: l.confirmationContainer,
        children: [
            (0, i.jsx)(r.Heading, {
                className: l.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({ tier: t })
            }),
            (0, i.jsx)(r.Text, {
                className: l.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({ timestamp: null == s ? void 0 : s.currentPeriodEnd })
            }),
            (0, i.jsxs)('div', {
                className: l.buttonContainer,
                children: [
                    (0, i.jsx)(r.Button, {
                        className: l.__invalid_openDiscordButton,
                        onClick: () => (0, o.Z)('application_sub_mweb_success_modal'),
                        children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                    }),
                    (0, i.jsx)(r.Button, {
                        className: l.__invalid_doneButton,
                        look: r.Button.Looks.BLANK,
                        onClick: n,
                        children: a.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                    })
                ]
            })
        ]
    });
}
