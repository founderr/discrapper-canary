t.d(n, {
    h: function () {
        return c;
    },
    m: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    o = t(17894),
    a = t(388032),
    l = t(753031);
let c = (e) => {
    let { onConfirm: n, onCancel: t, title: c, subtitle: d, confirmCta: s, showOpenDiscord: u = !0 } = e;
    return (0, i.jsxs)('div', {
        className: l.confirmationContainer,
        children: [
            (0, i.jsx)(r.Heading, {
                className: l.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c
            }),
            null != d
                ? (0, i.jsx)(r.Text, {
                      className: l.confirmationSubtitle,
                      variant: 'text-sm/normal',
                      color: 'header-secondary',
                      children: d
                  })
                : null,
            (0, i.jsxs)('div', {
                className: l.buttonContainer,
                children: [
                    u &&
                        (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            onClick: () => (0, o.Z)('application_sub_mweb_success_modal'),
                            children: a.intl.string(a.t['8L5bZG'])
                        }),
                    (0, i.jsx)(r.Button, {
                        fullWidth: !0,
                        color: r.Button.Colors.PRIMARY,
                        onClick: n,
                        children: s
                    }),
                    null != t &&
                        (0, i.jsx)(r.Button, {
                            fullWidth: !0,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.LINK,
                            onClick: t,
                            children: a.intl.string(a.t.iAfxo6)
                        })
                ]
            })
        ]
    });
};
function d(e) {
    let { onConfirm: n, tierName: t, subscription: c } = e;
    return (0, i.jsxs)('div', {
        className: l.confirmationContainer,
        children: [
            (0, i.jsx)(r.Heading, {
                className: l.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: a.intl.format(a.t['wLFT6+'], { tier: t })
            }),
            (0, i.jsx)(r.Text, {
                className: l.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.intl.format(a.t.OsAK9v, { timestamp: null == c ? void 0 : c.currentPeriodEnd })
            }),
            (0, i.jsxs)('div', {
                className: l.buttonContainer,
                children: [
                    (0, i.jsx)(r.Button, {
                        className: l.__invalid_openDiscordButton,
                        onClick: () => (0, o.Z)('application_sub_mweb_success_modal'),
                        children: a.intl.string(a.t['8L5bZG'])
                    }),
                    (0, i.jsx)(r.Button, {
                        className: l.__invalid_doneButton,
                        look: r.Button.Looks.BLANK,
                        onClick: n,
                        children: a.intl.string(a.t.nlkyw8)
                    })
                ]
            })
        ]
    });
}
