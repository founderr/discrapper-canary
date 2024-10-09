n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(411104);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(399606),
    o = n(481060),
    c = n(588705),
    u = n(100527),
    d = n(906732),
    h = n(388905),
    p = n(792766),
    f = n(600164),
    m = n(436774),
    _ = n(313201),
    g = n(451603),
    C = n(885714),
    I = n(973616),
    E = n(594174),
    N = n(855981),
    S = n(55543),
    x = n(626135),
    v = n(768581),
    T = n(358085),
    Z = n(998502),
    A = n(379164),
    b = n(590965),
    R = n(981631),
    M = n(474936),
    L = n(689938),
    P = n(56180),
    y = n(113207);
function O() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            x.default.track(R.rMx.PREMIUM_UPSELL_VIEWED, {
                type: M.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: R.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, i.jsxs)(o.Clickable, {
            onClick: () =>
                (0, C.Z)({
                    analyticsSource: { page: R.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: R.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: R.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: P.experimentUpsellError,
            children: [
                (0, i.jsx)(o.NitroWheelIcon, {
                    size: 'md',
                    className: P.experimentUpsellIcon,
                    color: m.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: P.experimentUpsellText,
                    children: L.Z.Messages.GUILD_CAP_UPSELL_TOOLTIP
                }),
                (0, i.jsx)('span', {
                    className: P.experimentGetNitro,
                    children: L.Z.Messages.GUILD_CAP_UPSELL_GET_NITRO
                })
            ]
        })
    );
}
function j(e) {
    let { className: t } = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: a()(P.iconContainer, t),
        children: [
            (0, i.jsx)(N.Z, { className: P.iconSparklePlus }),
            (0, i.jsx)(o.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                className: P.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(S.Z, { className: P.iconSparkleStar })
        ]
    });
}
function D(e) {
    let { transitionState: t } = e,
        n = (0, _.Dt)(),
        { analyticsLocations: l } = (0, d.ZP)(u.Z.INVITE_MODAL);
    return (0, i.jsx)(d.Gt, {
        value: l,
        children: (0, i.jsx)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            'aria-labelledby': n,
            transitionState: t,
            children: (0, i.jsxs)(o.ModalContent, {
                className: P.errorContent,
                children: [
                    (0, i.jsx)(j, { className: P.errorImage }),
                    (0, i.jsx)(o.Heading, {
                        id: n,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: L.Z.Messages.INVITE_MODAL_ERROR_INVALID_TITLE
                    }),
                    (0, i.jsx)('div', {
                        className: P.errorBody,
                        children: L.Z.Messages.INVITE_MODAL_ERROR_INVALID_BODY
                    }),
                    (0, i.jsx)(h.zx, {
                        size: h.zx.Sizes.LARGE,
                        onClick: () => A.Z.close(),
                        color: h.zx.Colors.BRAND,
                        children: L.Z.Messages.INVITE_MODAL_ERROR_BUTTON_TEXT
                    })
                ]
            })
        })
    });
}
function w(e) {
    let t,
        n,
        { transitionState: r } = e;
    (0, s.e7)([E.default], () => {
        var e;
        return null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let { invite: m, error: C, submitting: N } = (0, s.cj)([b.Z], () => b.Z.getProps());
    l.useEffect(() => {
        !__OVERLAY__ && T.isPlatformEmbedded && ((0, T.isWindows)() ? Z.ZP.minimize() : Z.ZP.restore(), Z.ZP.focus());
    }, []);
    let S = (0, _.Dt)(),
        { analyticsLocations: x } = (0, d.ZP)(u.Z.INVITE_MODAL);
    if (null == m) return null;
    if (m.state === R.r2o.EXPIRED || m.state === R.r2o.BANNED || m.state === R.r2o.ERROR) return (0, i.jsx)(D, { transitionState: r });
    if (null == m.channel) return null;
    function M() {
        null != m && A.Z.acceptInvite(m);
    }
    let { guild: j, channel: w, inviter: G, target_application: U } = m,
        k = null != j,
        B = null != m.stage_instance,
        V = null == m.guild && null == m.channel && null != m.inviter;
    if (null != U) (t = null == j ? void 0 : j.name), (n = I.Z.createFromServer(U).getCoverImageURL(1024));
    else if (null != j)
        (t = j.name),
            (n = v.ZP.getGuildSplashURL({
                id: j.id,
                splash: j.splash
            }));
    else if (((null == (t = w.name) || '' === t) && null != G && (t = G.username), null == t)) throw Error('no name for group DM invite');
    let H = (0, g.yU)(),
        F = B ? L.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : L.Z.Messages.INVITE_MODAL_BUTTON.format({ guildName: t });
    return (
        V && (F = L.Z.Messages.ACCEPT_INVITE_MODAL_BUTTON),
        (0, i.jsx)(d.Gt, {
            value: x,
            children: (0, i.jsxs)(o.ModalRoot, {
                size: o.ModalSize.DYNAMIC,
                'aria-labelledby': S,
                transitionState: r,
                className: P.container,
                children: [
                    (0, i.jsx)('div', {
                        className: P.contentWrapper,
                        children: (0, i.jsx)(o.Scroller, {
                            className: P.scroller,
                            children: (0, i.jsxs)(f.Z, {
                                className: P.inviteContent,
                                direction: f.Z.Direction.VERTICAL,
                                justify: f.Z.Justify.BETWEEN,
                                children: [
                                    (0, i.jsx)('div', {
                                        id: S,
                                        className: y.marginBottom20,
                                        children: (0, i.jsx)(c.Z, {
                                            invite: m,
                                            disableUser: k,
                                            error: C
                                        })
                                    }),
                                    B && null != j
                                        ? (0, i.jsx)('div', {
                                              className: a()(y.marginBottom20, P.stage),
                                              children: (0, i.jsx)(p.Z, {
                                                  isCard: !0,
                                                  stageInstance: m.stage_instance,
                                                  guild: j
                                              })
                                          })
                                        : null,
                                    (0, i.jsxs)('div', {
                                        children: [
                                            H ? (0, i.jsx)(O, {}) : null,
                                            null == U
                                                ? (0, i.jsx)(o.Tooltip, {
                                                      text: H ? L.Z.Messages.TOO_MANY_USER_GUILDS_DESCRIPTION : null,
                                                      position: 'bottom',
                                                      children: (e) => {
                                                          let { onMouseEnter: t, onMouseLeave: n } = e;
                                                          return (0, i.jsx)(h.zx, {
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: M,
                                                              submitting: N,
                                                              disabled: H,
                                                              color: B ? h.zx.Colors.GREEN : h.zx.Colors.BRAND,
                                                              onMouseEnter: t,
                                                              onMouseLeave: n,
                                                              children: H ? L.Z.Messages.GUILD_CAP_INVITE_MODAL_BUTTON : F
                                                          });
                                                      }
                                                  })
                                                : (0, i.jsxs)('div', {
                                                      className: P.buttonGroup,
                                                      children: [
                                                          (0, i.jsx)(h.zx, {
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: M,
                                                              submitting: N,
                                                              children: L.Z.Messages.PLAY
                                                          }),
                                                          (0, i.jsx)(h.zx, {
                                                              color: h.zx.Colors.PRIMARY,
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: M,
                                                              submitting: N,
                                                              children: L.Z.Messages.SPECTATE
                                                          })
                                                      ]
                                                  }),
                                            (0, i.jsx)(f.Z, {
                                                justify: f.Z.Justify.CENTER,
                                                className: y.marginTop8,
                                                children: (0, i.jsx)(h.zx, {
                                                    look: h.zx.Looks.LINK,
                                                    className: P.noThanksButton,
                                                    onClick: function () {
                                                        A.Z.close();
                                                    },
                                                    color: h.zx.Colors.TRANSPARENT,
                                                    children: L.Z.Messages.INIVTE_MODAL_NO_THANKS
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    null != n &&
                        (0, i.jsx)('div', {
                            className: P.inviteSplash,
                            style: { backgroundImage: 'url('.concat(n, ')') }
                        })
                ]
            })
        })
    );
}
