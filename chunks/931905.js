t.d(n, {
    h: function () {
        return l;
    },
    m: function () {
        return c;
    }
});
var r = t(735250);
t(470079);
var i = t(481060),
    a = t(17894),
    s = t(689938),
    o = t(632354);
let l = (e) => {
    let { onConfirm: n, onCancel: t, title: l, subtitle: c, confirmCta: u, showOpenDiscord: d = !0 } = e;
    return (0, r.jsxs)('div', {
        className: o.confirmationContainer,
        children: [
            (0, r.jsx)(i.Heading, {
                className: o.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: l
            }),
            null != c
                ? (0, r.jsx)(i.Text, {
                      className: o.confirmationSubtitle,
                      variant: 'text-sm/normal',
                      color: 'header-secondary',
                      children: c
                  })
                : null,
            (0, r.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    d &&
                        (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            onClick: () => (0, a.Z)('application_sub_mweb_success_modal'),
                            children: s.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }),
                    (0, r.jsx)(i.Button, {
                        fullWidth: !0,
                        color: i.Button.Colors.PRIMARY,
                        onClick: n,
                        children: u
                    }),
                    null != t &&
                        (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: t,
                            children: s.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
                        })
                ]
            })
        ]
    });
};
function c(e) {
    let { onConfirm: n, tierName: t, subscription: l } = e;
    return (0, r.jsxs)('div', {
        className: o.confirmationContainer,
        children: [
            (0, r.jsx)(i.Heading, {
                className: o.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: s.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({ tier: t })
            }),
            (0, r.jsx)(i.Text, {
                className: o.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: s.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({ timestamp: null == l ? void 0 : l.currentPeriodEnd })
            }),
            (0, r.jsxs)('div', {
                className: o.buttonContainer,
                children: [
                    (0, r.jsx)(i.Button, {
                        className: o.__invalid_openDiscordButton,
                        onClick: () => (0, a.Z)('application_sub_mweb_success_modal'),
                        children: s.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                    }),
                    (0, r.jsx)(i.Button, {
                        className: o.__invalid_doneButton,
                        look: i.Button.Looks.BLANK,
                        onClick: n,
                        children: s.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                    })
                ]
            })
        ]
    });
}
