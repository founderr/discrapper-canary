l.r(n),
    l.d(n, {
        default: function () {
            return j;
        }
    }),
    l(47120);
var a = l(200651),
    i = l(192379),
    t = l(481060),
    o = l(442837),
    r = l(410030),
    s = l(430824),
    d = l(594174),
    c = l(931240),
    u = l(645896),
    m = l(603368),
    v = l(353093),
    x = l(114487),
    g = l(380365),
    h = l(981631),
    f = l(921944),
    C = l(388032),
    N = l(854983);
function j(e) {
    var n, l;
    let { guildId: j, transitionState: S, onClose: _ } = e,
        p = (0, o.e7)([s.Z], () => s.Z.getGuild(j), [j]),
        k = (0, u.Cc)(null != j ? j : null),
        b = (0, o.e7)([d.default], () => d.default.getCurrentUser(), []),
        [T, w] = i.useState(!0),
        M = (0, r.ZP)(),
        P = i.useCallback(async () => {
            T && (await (0, c.nE)(j, !0, h.Sbl.CLAN_ADOPT_IDENTITY_MODAL)), _(f.L.PRIMARY);
        }, [T, _, j]),
        Z = i.useCallback(() => {
            _(f.L.DISMISS);
        }, [_]);
    i.useEffect(() => ((null == p || null == b) && _(f.L.AUTO_DISMISS), () => {}), [b, p, j, _]);
    let A = (0, m.nP)(null == k ? void 0 : null === (n = k.branding) || void 0 === n ? void 0 : n.primaryColor, [t.tokens.colors.BG_BRAND, 0.7]),
        I = t.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: M,
            saturation: 1
        }).hex(),
        L = (0, m.nj)(A, I, 'top center'),
        B = (0, m.nP)(null == k ? void 0 : null === (l = k.branding) || void 0 === l ? void 0 : l.primaryColor, [t.tokens.colors.BG_BRAND, 1]),
        y = (0, m.$0)(A).hex(),
        R = (0, v.Zp)(p, null == b ? void 0 : b.clan);
    if (null == p || null == b) return null;
    let D = R ? C.intl.format(C.t['hyP/19'], { guildName: p.name }) : C.intl.format(C.t.h1CclZ, { guildName: p.name }),
        E = R ? C.intl.formatToPlainString(C.t['x+B7c3'], { guildName: p.name }) : C.intl.formatToPlainString(C.t.kPJowM, { guildName: p.name }),
        U = C.intl.string(C.t.re8ZPj);
    return (0, a.jsxs)(t.ModalRoot, {
        transitionState: S,
        size: t.ModalSize.SMALL,
        className: N.modal,
        children: [
            (0, a.jsx)(t.ModalContent, {
                style: L,
                children: (0, a.jsxs)('div', {
                    className: N.mainContainer,
                    children: [
                        (0, a.jsxs)('div', {
                            className: N.infoContainer,
                            children: [
                                (0, a.jsx)(x.Z, {
                                    guild: p,
                                    iconSize: 64
                                }),
                                (0, a.jsxs)('div', {
                                    className: N.headerTextContainer,
                                    children: [
                                        (0, a.jsx)(t.Heading, {
                                            variant: 'heading-xl/normal',
                                            color: 'header-primary',
                                            children: D
                                        }),
                                        (0, a.jsx)(t.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-secondary',
                                            children: E
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, a.jsx)(g.Z, {
                            guildId: j,
                            isTagAdopted: T,
                            onChangeUseTag: w
                        })
                    ]
                })
            }),
            (0, a.jsxs)(t.ModalFooter, {
                className: N.modalFooter,
                children: [
                    (0, a.jsx)(t.Button, {
                        onClick: P,
                        color: t.Button.Colors.CUSTOM,
                        look: t.Button.Looks.FILLED,
                        style: {
                            backgroundColor: B,
                            color: y
                        },
                        children: U
                    }),
                    (0, a.jsx)(t.Button, {
                        onClick: Z,
                        color: t.Button.Colors.PRIMARY,
                        look: t.Button.Looks.LINK,
                        children: C.intl.string(C.t.QMwUJy)
                    })
                ]
            })
        ]
    });
}
