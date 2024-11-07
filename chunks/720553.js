e.r(n),
    e.d(n, {
        default: function () {
            return c;
        }
    }),
    e(757143);
var o = e(200651);
e(192379);
var l = e(481060),
    a = e(313201),
    r = e(988158),
    i = e(388032),
    s = e(952430);
function c(t) {
    let { url: n, trustUrl: e, isProtocol: c, onConfirm: d, onClose: x, transitionState: u } = t,
        h = (0, a.Dt)(),
        {
            protocol: m,
            hostname: C,
            theRestOfTheUrl: p,
            shouldTrustUrl: k,
            setShouldTrustUrl: g,
            handleConfirm: b
        } = (0, r.X)({
            url: n,
            trustUrl: e,
            onConfirm: d,
            onClose: x
        });
    return (0, o.jsxs)(l.ModalRoot, {
        size: l.ModalSize.DYNAMIC,
        transitionState: u,
        'aria-labelledby': h,
        children: [
            (0, o.jsxs)(l.ModalContent, {
                children: [
                    (0, o.jsx)(l.Heading, {
                        id: h,
                        variant: 'heading-xl/bold',
                        className: s.title,
                        children: i.intl.string(i.t['3w1QGh'])
                    }),
                    (0, o.jsx)(l.Text, {
                        className: s.warningText,
                        variant: 'text-md/normal',
                        children: c ? i.intl.format(i.t.aCYv19, {}) : i.intl.string(i.t.soRxRU)
                    }),
                    (0, o.jsxs)(l.Scroller, {
                        className: s.linkCalloutContainer,
                        children: [
                            (0, o.jsxs)(l.Text, {
                                tag: 'span',
                                variant: c ? 'text-md/semibold' : 'text-md/normal',
                                color: c ? 'text-normal' : 'text-muted',
                                children: [m, '//']
                            }),
                            (0, o.jsx)(l.Text, {
                                tag: 'span',
                                variant: c ? 'text-md/normal' : 'text-md/semibold',
                                color: c ? 'text-muted' : 'text-normal',
                                children: C
                            }),
                            (0, o.jsx)(l.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: p
                            })
                        ]
                    }),
                    (0, o.jsx)(l.Checkbox, {
                        className: s.checkbox,
                        type: l.Checkbox.Types.INVERTED,
                        value: k,
                        onChange: (t, n) => g(n),
                        children: (0, o.jsx)(l.Text, {
                            variant: 'text-sm/normal',
                            children: c ? i.intl.format(i.t['haA+X1'], { protocol: m.replace(':', '') }) : i.intl.format(i.t.ZgXDsL, { domain: C })
                        })
                    })
                ]
            }),
            (0, o.jsxs)(l.ModalFooter, {
                children: [
                    (0, o.jsx)(l.Button, {
                        type: 'button',
                        size: l.Button.Sizes.MEDIUM,
                        color: l.Button.Colors.BRAND,
                        onClick: b,
                        children: c ? i.intl.string(i.t.COq6kp) : i.intl.string(i.t.NcJfJC)
                    }),
                    (0, o.jsx)(l.Button, {
                        type: 'button',
                        size: l.Button.Sizes.MEDIUM,
                        color: l.Button.Colors.PRIMARY,
                        onClick: x,
                        look: l.ButtonLooks.LINK,
                        children: i.intl.string(i.t['/g10LC'])
                    })
                ]
            })
        ]
    });
}
