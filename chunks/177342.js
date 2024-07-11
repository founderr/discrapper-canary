n.d(t, {
    Q: function () {
        return h;
    }
});
var i = n(735250), a = n(470079), s = n(286379), l = n(481060), r = n(797614), o = n(473092), c = n(689938), d = n(995286), u = n(560580);
function h(e) {
    let {
        channelId: t,
        warningId: n,
        senderId: h,
        warningType: p,
        header: m,
        description: _,
        onDismiss: f,
        buttons: E
    } = e;
    a.useEffect(() => {
        r.Z.increment({ name: s.V.SAFETY_WARNING_VIEW });
    }, []);
    let C = a.useCallback(() => {
        null == f || f(), (0, o.qc)({
            channelId: t,
            warningId: n,
            senderId: h,
            warningType: p,
            cta: o.NM.USER_BANNER_DISMISS
        });
    }, [
        f,
        t,
        n,
        h,
        p
    ]);
    return (0, i.jsxs)('div', {
        className: d.safetyWarningBanner,
        children: [
            (0, i.jsxs)('div', {
                className: d.shieldAndHeading,
                children: [
                    (0, i.jsx)('img', {
                        className: d.safetyShieldIcon,
                        src: u,
                        alt: ''
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: 'heading-md/semibold',
                                color: 'text-primary',
                                children: m
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-primary',
                                children: _
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: d.buttons,
                children: null == E ? void 0 : E.map((e, t) => (0, i.jsx)(l.Button, {
                    size: l.Button.Sizes.SMALL,
                    color: e.color,
                    'aria-label': e.text,
                    onClick: e.onclick,
                    className: d.ctaButton,
                    children: e.text
                }, t))
            }),
            (0, i.jsx)(l.Clickable, {
                className: d.closeButton,
                onClick: C,
                role: 'button',
                'aria-label': c.Z.Messages.DISMISS,
                children: (0, i.jsx)(l.CloseSmallIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: d.closeButton
                })
            })
        ]
    });
}
