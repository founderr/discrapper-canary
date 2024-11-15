t.d(n, {
    h: function () {
        return s;
    },
    m: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    o = t(17894),
    a = t(388032),
    l = t(160371);
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
                            children: a.intl.string(a.t['8L5bZG'])
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
                            children: a.intl.string(a.t.iAfxo6)
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
                children: a.intl.format(a.t['wLFT6+'], { tier: t })
            }),
            (0, i.jsx)(r.Text, {
                className: l.confirmationSubtitle,
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: a.intl.format(a.t.OsAK9v, { timestamp: null == s ? void 0 : s.currentPeriodEnd })
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
