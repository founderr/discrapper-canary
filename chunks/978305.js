t.r(r), t(47120);
var o = t(200651),
    n = t(192379),
    s = t(120356),
    i = t.n(s),
    l = t(512722),
    a = t.n(l),
    c = t(481060),
    d = t(198993),
    C = t(626135),
    u = t(985002),
    f = t(880257),
    m = t(631885),
    b = t(292352),
    x = t(981631),
    h = t(388032),
    g = t(116594),
    p = t(232186);
r.default = (e) => {
    let { transitionState: r, onClose: t } = e,
        s = (0, f.Z)(),
        [l, v] = n.useState(!1),
        { getLinkCode: _, isGetLinkCodeLoading: j } = (0, u.G)({}),
        N = (0, m.rW)(),
        y = (0, m.gU)(),
        q = n.useRef(y);
    a()(!s, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let z = () => {
        v((e) => (C.default.track(x.rMx.FAMILY_CENTER_ACTION, { action: l ? b.YC.HideQRCode : b.YC.RevealQRCode }), !e)),
            !l &&
                setTimeout(() => {
                    t();
                }, b.f2);
    };
    n.useEffect(() => {
        _();
    }, []),
        n.useEffect(() => {
            y > q.current && t();
        }, [q, y, t]);
    let O = l && !j && null != N;
    return (0, o.jsxs)(c.ModalRoot, {
        className: g.modalRoot,
        transitionState: r,
        children: [
            (0, o.jsxs)(c.Notice, {
                className: g.notice,
                color: c.NoticeColors.WARNING,
                children: [
                    (0, o.jsx)(c.CircleInformationIcon, {
                        size: 'sm',
                        color: 'currentColor'
                    }),
                    h.intl.string(h.t.iHYMAw)
                ]
            }),
            (0, o.jsxs)(c.ModalContent, {
                className: g.content,
                children: [
                    (0, o.jsx)(c.Text, {
                        className: p.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: h.intl.string(h.t.AVTZaG)
                    }),
                    (0, o.jsx)(c.Text, {
                        className: p.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: h.intl.format(h.t.LyyCsL, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, o.jsx)('div', {
                        className: g.qrCodeContainer,
                        children: (0, o.jsx)(c.Clickable, {
                            className: i()(g.qrCodeObscure, { [g.visible]: O }),
                            onClick: z,
                            children: (0, o.jsx)(d.c2, {
                                size: 272,
                                text: O ? N : b.vH,
                                overlaySize: d.cK.SIZE_60,
                                className: g.qrCodeOverlay
                            })
                        })
                    }),
                    (0, o.jsx)(c.Text, {
                        className: g.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: h.intl.string(h.t.goDyoa)
                    }),
                    (0, o.jsxs)('div', {
                        className: i()(g.buttonContainer, p.marginTop20),
                        children: [
                            (0, o.jsx)(c.Button, {
                                className: p.marginBottom8,
                                grow: !0,
                                size: c.Button.Sizes.LARGE,
                                onClick: z,
                                submitting: l && j,
                                children: l ? h.intl.string(h.t.wg2xwc) : h.intl.string(h.t['10dX6e'])
                            }),
                            (0, o.jsx)(c.Button, {
                                grow: !0,
                                color: c.Button.Colors.PRIMARY,
                                onClick: t,
                                children: h.intl.string(h.t.cpT0Cg)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
