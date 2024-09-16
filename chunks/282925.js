n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(515593),
    s = n(921944),
    o = n(689938),
    l = n(46403);
function u(e) {
    let { onDismissClick: t, onCheckItOutClick: n } = e;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsx)(a.Z, {
                size: i.AvatarSizes.SIZE_80,
                className: l.image
            }),
            (0, r.jsx)(i.ModalCloseButton, {
                onClick: t,
                withCircleBackground: !0,
                className: l.closeButton,
                innerClassName: l.popoutCloseButton
            }),
            (0, r.jsxs)('div', {
                className: l.body,
                children: [
                    (0, r.jsx)(i.Heading, {
                        className: l.text,
                        variant: 'heading-sm/semibold',
                        children: o.Z.Messages.NITROWEEN_GIFT_UPSELL_TITLE
                    }),
                    (0, r.jsx)(i.Text, {
                        className: l.text,
                        variant: 'text-sm/normal',
                        children: o.Z.Messages.NITROWEEN_GIFT_UPSELL_DESCRIPTION
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: l.buttonContainer,
                children: (0, r.jsx)(i.Button, {
                    className: l.ctaButton,
                    color: i.Button.Colors.BRAND_INVERTED,
                    onClick: () => n(),
                    children: o.Z.Messages.CHECK_IT_OUT
                })
            }),
            (0, r.jsx)('div', { className: l.pointer })
        ]
    });
}
function c(e) {
    let { onComplete: t, onCheckItOutClick: n, markAsDismissed: a } = e;
    return (0, r.jsx)(i.Popout, {
        spacing: 0,
        shouldShow: !0,
        position: 'top',
        align: 'center',
        renderPopout: (e) =>
            (0, r.jsx)(u, {
                ...e,
                onDismissClick: () => {
                    t(), a(s.L.USER_DISMISS);
                },
                onCheckItOutClick: () => {
                    n(), t(), a(s.L.TAKE_ACTION);
                }
            }),
        onRequestClose: () => void 0,
        closeOnScroll: !1,
        ignoreModalClicks: !0,
        children: () => (0, r.jsx)('div', { className: l.popoutTarget })
    });
}
