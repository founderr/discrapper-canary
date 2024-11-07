n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(399606),
    s = n(481060),
    c = n(588705),
    u = n(100527),
    d = n(906732),
    h = n(388905),
    p = n(792766),
    f = n(600164),
    m = n(436774),
    g = n(313201),
    C = n(451603),
    _ = n(885714),
    x = n(973616),
    v = n(594174),
    I = n(855981),
    b = n(55543),
    S = n(626135),
    Z = n(768581),
    N = n(358085),
    E = n(998502),
    y = n(379164),
    j = n(590965),
    T = n(981631),
    P = n(474936),
    A = n(388032),
    M = n(940535),
    w = n(971436);
function L() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            S.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: P.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: T.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, i.jsxs)(s.Clickable, {
            onClick: () =>
                (0, _.Z)({
                    analyticsSource: { page: T.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: T.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: T.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: M.experimentUpsellError,
            children: [
                (0, i.jsx)(s.NitroWheelIcon, {
                    size: 'md',
                    className: M.experimentUpsellIcon,
                    color: m.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: M.experimentUpsellText,
                    children: A.intl.string(A.t['4/W4Pz'])
                }),
                (0, i.jsx)('span', {
                    className: M.experimentGetNitro,
                    children: A.intl.string(A.t.b6KOkJ)
                })
            ]
        })
    );
}
function R(e) {
    let { className: t } = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: a()(M.iconContainer, t),
        children: [
            (0, i.jsx)(I.Z, { className: M.iconSparklePlus }),
            (0, i.jsx)(s.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                className: M.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(b.Z, { className: M.iconSparkleStar })
        ]
    });
}
function D(e) {
    let { transitionState: t } = e,
        n = (0, g.Dt)(),
        { analyticsLocations: l } = (0, d.ZP)(u.Z.INVITE_MODAL);
    return (0, i.jsx)(d.Gt, {
        value: l,
        children: (0, i.jsx)(s.ModalRoot, {
            size: s.ModalSize.DYNAMIC,
            'aria-labelledby': n,
            transitionState: t,
            children: (0, i.jsxs)(s.ModalContent, {
                className: M.errorContent,
                children: [
                    (0, i.jsx)(R, { className: M.errorImage }),
                    (0, i.jsx)(s.Heading, {
                        id: n,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: A.intl.string(A.t.u9zxnZ)
                    }),
                    (0, i.jsx)('div', {
                        className: M.errorBody,
                        children: A.intl.string(A.t.FWkU6O)
                    }),
                    (0, i.jsx)(h.zx, {
                        size: h.zx.Sizes.LARGE,
                        onClick: () => y.Z.close(),
                        color: h.zx.Colors.BRAND,
                        children: A.intl.string(A.t.wcqOoK)
                    })
                ]
            })
        })
    });
}
function O(e) {
    let t,
        n,
        { transitionState: r } = e;
    (0, o.e7)([v.default], () => {
        var e;
        return null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let { invite: m, error: _, submitting: I } = (0, o.cj)([j.Z], () => j.Z.getProps());
    l.useEffect(() => {
        !__OVERLAY__ && N.isPlatformEmbedded && ((0, N.isWindows)() ? E.ZP.minimize() : E.ZP.restore(), E.ZP.focus());
    }, []);
    let b = (0, g.Dt)(),
        { analyticsLocations: S } = (0, d.ZP)(u.Z.INVITE_MODAL);
    if (null == m) return null;
    if (m.state === T.r2o.EXPIRED || m.state === T.r2o.BANNED || m.state === T.r2o.ERROR) return (0, i.jsx)(D, { transitionState: r });
    if (null == m.channel) return null;
    function P() {
        null != m && y.Z.acceptInvite(m);
    }
    let { guild: R, channel: O, inviter: k, target_application: U } = m,
        G = null != R,
        B = null != m.stage_instance,
        V = null == m.guild && null == m.channel && null != m.inviter;
    if (null != U) (t = null == R ? void 0 : R.name), (n = x.Z.createFromServer(U).getCoverImageURL(1024));
    else if (null != R)
        (t = R.name),
            (n = Z.ZP.getGuildSplashURL({
                id: R.id,
                splash: R.splash
            }));
    else if (((null == (t = O.name) || '' === t) && null != k && (t = k.username), null == t)) throw Error('no name for group DM invite');
    let H = (0, C.yU)(),
        F = B ? A.intl.string(A.t['5UKyUl']) : A.intl.format(A.t.QD7BDA, { guildName: t });
    return (
        V && (F = A.intl.string(A.t['e/6Ogo'])),
        (0, i.jsx)(d.Gt, {
            value: S,
            children: (0, i.jsxs)(s.ModalRoot, {
                size: s.ModalSize.DYNAMIC,
                'aria-labelledby': b,
                transitionState: r,
                className: M.container,
                children: [
                    (0, i.jsx)('div', {
                        className: M.contentWrapper,
                        children: (0, i.jsx)(s.Scroller, {
                            className: M.scroller,
                            children: (0, i.jsxs)(f.Z, {
                                className: M.inviteContent,
                                direction: f.Z.Direction.VERTICAL,
                                justify: f.Z.Justify.BETWEEN,
                                children: [
                                    (0, i.jsx)('div', {
                                        id: b,
                                        className: w.marginBottom20,
                                        children: (0, i.jsx)(c.Z, {
                                            invite: m,
                                            disableUser: G,
                                            error: _
                                        })
                                    }),
                                    B && null != R
                                        ? (0, i.jsx)('div', {
                                              className: a()(w.marginBottom20, M.stage),
                                              children: (0, i.jsx)(p.Z, {
                                                  isCard: !0,
                                                  stageInstance: m.stage_instance,
                                                  guild: R
                                              })
                                          })
                                        : null,
                                    (0, i.jsxs)('div', {
                                        children: [
                                            H ? (0, i.jsx)(L, {}) : null,
                                            null == U
                                                ? (0, i.jsx)(s.Tooltip, {
                                                      text: H ? A.intl.string(A.t.iLyuDA) : null,
                                                      position: 'bottom',
                                                      children: (e) => {
                                                          let { onMouseEnter: t, onMouseLeave: n } = e;
                                                          return (0, i.jsx)(h.zx, {
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: P,
                                                              submitting: I,
                                                              disabled: H,
                                                              color: B ? h.zx.Colors.GREEN : h.zx.Colors.BRAND,
                                                              onMouseEnter: t,
                                                              onMouseLeave: n,
                                                              children: H ? A.intl.string(A.t.ZNCziI) : F
                                                          });
                                                      }
                                                  })
                                                : (0, i.jsxs)('div', {
                                                      className: M.buttonGroup,
                                                      children: [
                                                          (0, i.jsx)(h.zx, {
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: P,
                                                              submitting: I,
                                                              children: A.intl.string(A.t.RscU7O)
                                                          }),
                                                          (0, i.jsx)(h.zx, {
                                                              color: h.zx.Colors.PRIMARY,
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: P,
                                                              submitting: I,
                                                              children: A.intl.string(A.t.eylRaW)
                                                          })
                                                      ]
                                                  }),
                                            (0, i.jsx)(f.Z, {
                                                justify: f.Z.Justify.CENTER,
                                                className: w.marginTop8,
                                                children: (0, i.jsx)(h.zx, {
                                                    look: h.zx.Looks.LINK,
                                                    className: M.noThanksButton,
                                                    onClick: function () {
                                                        y.Z.close();
                                                    },
                                                    color: h.zx.Colors.TRANSPARENT,
                                                    children: A.intl.string(A.t.ndsK4e)
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
                            className: M.inviteSplash,
                            style: { backgroundImage: 'url('.concat(n, ')') }
                        })
                ]
            })
        })
    );
}
