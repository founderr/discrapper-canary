o.r(t), o(47120);
var r = o(200651),
    n = o(192379),
    s = o(120356),
    i = o.n(s),
    c = o(512722),
    l = o.n(c),
    a = o(481060),
    d = o(198993),
    u = o(626135),
    f = o(985002),
    C = o(880257),
    m = o(631885),
    b = o(292352),
    x = o(981631),
    h = o(388032),
    g = o(116594),
    p = o(232186);
t.default = (e) => {
    let { transitionState: t, onClose: o } = e,
        s = (0, C.Z)(),
        [c, _] = n.useState(!1),
        { getLinkCode: v, isGetLinkCodeLoading: j } = (0, f.G)({}),
        N = (0, m.rW)(),
        I = (0, m.gU)(),
        z = n.useRef(I);
    l()(!s, 'FamilyCenterQRCodeModal should only be rendered for teens.');
    let R = () => {
        _((e) => (u.default.track(x.rMx.FAMILY_CENTER_ACTION, { action: c ? b.YC.HideQRCode : b.YC.RevealQRCode }), !e)),
            !c &&
                setTimeout(() => {
                    o();
                }, b.f2);
    };
    n.useEffect(() => {
        v();
    }, []),
        n.useEffect(() => {
            I > z.current && o();
        }, [z, I, o]);
    let y = c && !j && null != N;
    return (0, r.jsxs)(a.ModalRoot, {
        className: g.modalRoot,
        transitionState: t,
        children: [
            (0, r.jsxs)(a.Notice, {
                className: g.notice,
                color: a.NoticeColors.WARNING,
                children: [
                    (0, r.jsx)(a.CircleInformationIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: g.infoIcon
                    }),
                    h.intl.string(h.t.iHYMAw)
                ]
            }),
            (0, r.jsxs)(a.ModalContent, {
                className: g.content,
                children: [
                    (0, r.jsx)(a.Text, {
                        className: p.marginBottom8,
                        variant: 'text-lg/bold',
                        color: 'header-primary',
                        children: h.intl.string(h.t.AVTZaG)
                    }),
                    (0, r.jsx)(a.Text, {
                        className: p.marginBottom20,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: h.intl.format(h.t.LyyCsL, { link: 'https://support.discord.com/hc/articles/14155060633623' })
                    }),
                    (0, r.jsx)('div', {
                        className: g.qrCode,
                        children: (0, r.jsx)(a.Clickable, {
                            className: i()(g.qrCodeObscure, { [g.visible]: y }),
                            onClick: R,
                            children: (0, r.jsx)(d.c2, {
                                size: 272,
                                text: y ? N : b.vH,
                                overlaySize: d.cK.SIZE_60
                            })
                        })
                    }),
                    (0, r.jsx)(a.Text, {
                        className: g.reminder,
                        variant: 'text-xs/semibold',
                        color: 'header-secondary',
                        children: h.intl.string(h.t.goDyoa)
                    }),
                    (0, r.jsxs)('div', {
                        className: i()(g.buttonContainer, p.marginTop20),
                        children: [
                            (0, r.jsx)(a.Button, {
                                className: p.marginBottom8,
                                grow: !0,
                                size: a.Button.Sizes.LARGE,
                                onClick: R,
                                submitting: c && j,
                                children: c ? h.intl.string(h.t.wg2xwc) : h.intl.string(h.t['10dX6e'])
                            }),
                            (0, r.jsx)(a.Button, {
                                grow: !0,
                                color: a.Button.Colors.PRIMARY,
                                onClick: o,
                                children: h.intl.string(h.t.cpT0Cg)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
