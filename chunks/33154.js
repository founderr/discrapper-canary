n.d(t, {
    s: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(442837),
    l = n(481060),
    u = n(749210),
    c = n(313201),
    d = n(823379),
    _ = n(41776),
    E = n(981631),
    f = n(689938),
    h = n(583694);
!(function (e) {
    (e[(e.CHAT = 0)] = 'CHAT'), (e[(e.REACTIONS = 1)] = 'REACTIONS');
})(r || (r = {}));
let p = (e) => {
    let { type: t, guild: r, closePopout: i, ctaRef: p } = e,
        m = (0, c.Dt)(),
        [I, T] = o.useState(!1),
        g = (0, s.e7)([_.Z], () => _.Z.isLurking(r.id), [r.id]);
    o.useEffect(() => {
        I && !g && i();
    }, [I, g, i]);
    let S = null,
        A = f.Z.Messages.LURKER_MODE_POPOUT_UPSELL_BODY;
    switch (t) {
        case 0:
            S = f.Z.Messages.LURKER_MODE_POPOUT_CHAT_HEADER;
            break;
        case 1:
            S = f.Z.Messages.LURKER_MODE_POPOUT_REACTIONS_HEADER;
            break;
        default:
            return (0, d.vE)(t);
    }
    if (null == S) return null;
    let v = async () => {
        T(!0);
        try {
            await u.Z.joinGuild(r.id, { source: E.vtS.CHAT_INPUT_BLOCKER }), i();
        } catch {
            T(!1);
        }
    };
    return (0, a.jsxs)(l.Dialog, {
        className: h.container,
        'aria-labelledby': m,
        children: [
            (0, a.jsx)('img', {
                alt: '',
                className: h.image,
                src: n(64395)
            }),
            (0, a.jsxs)('div', {
                className: h.content,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'heading-md/semibold',
                        id: m,
                        children: S
                    }),
                    (0, a.jsx)(l.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: A
                    }),
                    (0, a.jsxs)('div', {
                        className: h.buttonContainer,
                        children: [
                            (0, a.jsx)(l.Button, {
                                buttonRef: p,
                                onClick: v,
                                submitting: I,
                                children: f.Z.Messages.LURKER_MODE_POPOUT_JOIN
                            }),
                            (0, a.jsx)(l.Button, {
                                onClick: i,
                                look: l.Button.Looks.BLANK,
                                className: h.cancel,
                                children: f.Z.Messages.LURKER_MODE_POPOUT_CANCEL
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
t.Z = p;
