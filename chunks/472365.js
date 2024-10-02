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
    _ = n(436774),
    m = n(313201),
    g = n(451603),
    C = n(885714),
    I = n(973616),
    E = n(594174),
    N = n(855981),
    S = n(55543),
    v = n(626135),
    x = n(768581),
    Z = n(358085),
    T = n(998502),
    b = n(379164),
    A = n(590965),
    M = n(981631),
    R = n(474936),
    L = n(689938),
    y = n(56180),
    P = n(113207);
function O() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            v.default.track(M.rMx.PREMIUM_UPSELL_VIEWED, {
                type: R.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: M.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, i.jsxs)(o.Clickable, {
            onClick: () =>
                (0, C.Z)({
                    analyticsSource: { page: M.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: M.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: M.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: y.experimentUpsellError,
            children: [
                (0, i.jsx)(o.NitroWheelIcon, {
                    size: 'md',
                    className: y.experimentUpsellIcon,
                    color: _.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: y.experimentUpsellText,
                    children: L.Z.Messages.GUILD_CAP_UPSELL_TOOLTIP
                }),
                (0, i.jsx)('span', {
                    className: y.experimentGetNitro,
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
        className: a()(y.iconContainer, t),
        children: [
            (0, i.jsx)(N.Z, { className: y.iconSparklePlus }),
            (0, i.jsx)(o.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                className: y.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(S.Z, { className: y.iconSparkleStar })
        ]
    });
}
function D(e) {
    let { transitionState: t } = e,
        n = (0, m.Dt)(),
        { analyticsLocations: l } = (0, d.ZP)(u.Z.INVITE_MODAL);
    return (0, i.jsx)(d.Gt, {
        value: l,
        children: (0, i.jsx)(o.ModalRoot, {
            size: o.ModalSize.DYNAMIC,
            'aria-labelledby': n,
            transitionState: t,
            children: (0, i.jsxs)(o.ModalContent, {
                className: y.errorContent,
                children: [
                    (0, i.jsx)(j, { className: y.errorImage }),
                    (0, i.jsx)(o.Heading, {
                        id: n,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: L.Z.Messages.INVITE_MODAL_ERROR_INVALID_TITLE
                    }),
                    (0, i.jsx)('div', {
                        className: y.errorBody,
                        children: L.Z.Messages.INVITE_MODAL_ERROR_INVALID_BODY
                    }),
                    (0, i.jsx)(h.zx, {
                        size: h.zx.Sizes.LARGE,
                        onClick: () => b.Z.close(),
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
    let { invite: _, error: C, submitting: N } = (0, s.cj)([A.Z], () => A.Z.getProps());
    l.useEffect(() => {
        !__OVERLAY__ && Z.isPlatformEmbedded && ((0, Z.isWindows)() ? T.ZP.minimize() : T.ZP.restore(), T.ZP.focus());
    }, []);
    let S = (0, m.Dt)(),
        { analyticsLocations: v } = (0, d.ZP)(u.Z.INVITE_MODAL);
    if (null == _) return null;
    if (_.state === M.r2o.EXPIRED || _.state === M.r2o.BANNED || _.state === M.r2o.ERROR) return (0, i.jsx)(D, { transitionState: r });
    if (null == _.channel) return null;
    function R() {
        null != _ && b.Z.acceptInvite(_);
    }
    let { guild: j, channel: w, inviter: G, target_application: U } = _,
        k = null != j,
        B = null != _.stage_instance,
        V = null == _.guild && null == _.channel && null != _.inviter;
    if (null != U) (t = null == j ? void 0 : j.name), (n = I.Z.createFromServer(U).getCoverImageURL(1024));
    else if (null != j)
        (t = j.name),
            (n = x.ZP.getGuildSplashURL({
                id: j.id,
                splash: j.splash
            }));
    else if (((null == (t = w.name) || '' === t) && null != G && (t = G.username), null == t)) throw Error('no name for group DM invite');
    let H = (0, g.yU)(),
        F = B ? L.Z.Messages.INSTANT_INVITE_ACCEPT_STAGE : L.Z.Messages.INVITE_MODAL_BUTTON.format({ guildName: t });
    return (
        V && (F = L.Z.Messages.ACCEPT_INVITE_MODAL_BUTTON),
        (0, i.jsx)(d.Gt, {
            value: v,
            children: (0, i.jsxs)(o.ModalRoot, {
                size: o.ModalSize.DYNAMIC,
                'aria-labelledby': S,
                transitionState: r,
                className: y.container,
                children: [
                    (0, i.jsx)('div', {
                        className: y.contentWrapper,
                        children: (0, i.jsx)(o.Scroller, {
                            className: y.scroller,
                            children: (0, i.jsxs)(f.Z, {
                                className: y.inviteContent,
                                direction: f.Z.Direction.VERTICAL,
                                justify: f.Z.Justify.BETWEEN,
                                children: [
                                    (0, i.jsx)('div', {
                                        id: S,
                                        className: P.marginBottom20,
                                        children: (0, i.jsx)(c.Z, {
                                            invite: _,
                                            disableUser: k,
                                            error: C
                                        })
                                    }),
                                    B && null != j
                                        ? (0, i.jsx)('div', {
                                              className: a()(P.marginBottom20, y.stage),
                                              children: (0, i.jsx)(p.Z, {
                                                  isCard: !0,
                                                  stageInstance: _.stage_instance,
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
                                                              onClick: R,
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
                                                      className: y.buttonGroup,
                                                      children: [
                                                          (0, i.jsx)(h.zx, {
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: R,
                                                              submitting: N,
                                                              children: L.Z.Messages.PLAY
                                                          }),
                                                          (0, i.jsx)(h.zx, {
                                                              color: h.zx.Colors.PRIMARY,
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: R,
                                                              submitting: N,
                                                              children: L.Z.Messages.SPECTATE
                                                          })
                                                      ]
                                                  }),
                                            (0, i.jsx)(f.Z, {
                                                justify: f.Z.Justify.CENTER,
                                                className: P.marginTop8,
                                                children: (0, i.jsx)(h.zx, {
                                                    look: h.zx.Looks.LINK,
                                                    className: y.noThanksButton,
                                                    onClick: function () {
                                                        b.Z.close();
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
                            className: y.inviteSplash,
                            style: { backgroundImage: 'url('.concat(n, ')') }
                        })
                ]
            })
        })
    );
}
