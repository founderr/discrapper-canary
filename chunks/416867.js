n.d(s, {
    B: function () {
        return c;
    }
});
var t = n(735250);
n(470079);
var o = n(481060),
    a = n(313201),
    l = n(192635),
    r = n(689938),
    i = n(169528);
function E(e) {
    let { transitionState: s, Icon: n, title: E, body: c, onClose: u } = e,
        _ = (0, a.Dt)();
    return (0, t.jsxs)(o.ModalRoot, {
        className: i.container,
        transitionState: s,
        'aria-labelledby': _,
        children: [
            (0, t.jsxs)(o.ModalContent, {
                children: [
                    (0, t.jsx)(l.Z, { Icon: n }),
                    (0, t.jsx)(o.Spacer, { size: 24 }),
                    (0, t.jsx)(o.Heading, {
                        id: _,
                        className: i.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: E
                    }),
                    (0, t.jsx)(o.Spacer, { size: 8 }),
                    (0, t.jsx)(o.Text, {
                        className: i.body,
                        variant: 'text-sm/normal',
                        children: c
                    })
                ]
            }),
            (0, t.jsx)(o.Spacer, { size: 24 }),
            (0, t.jsx)(o.Button, {
                size: o.Button.Sizes.MEDIUM,
                grow: !1,
                onClick: u,
                children: r.Z.Messages.GOT_IT
            })
        ]
    });
}
function c(e) {
    (0, o.openModal)((s) =>
        (0, t.jsx)(E, {
            ...s,
            ...e
        })
    );
}
