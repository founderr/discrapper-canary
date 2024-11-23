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
    m = n(600164),
    f = n(436774),
    g = n(313201),
    C = n(451603),
    _ = n(885714),
    v = n(973616),
    x = n(594174),
    I = n(855981),
    b = n(55543),
    S = n(626135),
    E = n(768581),
    Z = n(358085),
    N = n(998502),
    y = n(379164),
    T = n(590965),
    A = n(981631),
    P = n(474936),
    j = n(388032),
    R = n(56180),
    M = n(113207);
function L() {
    let { analyticsLocations: e, sourceAnalyticsLocations: t } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_TOOLTIP);
    return (
        l.useEffect(() => {
            S.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
                type: P.cd.GUILD_CAP_INLINE_INVITE_MODAL,
                location: { page: A.ZY5.NATIVE_INVITE_MODAL },
                location_stack: t
            });
        }, [t]),
        (0, i.jsxs)(s.Clickable, {
            onClick: () =>
                (0, _.Z)({
                    analyticsSource: { page: A.Sbl.EXTERNAL_INVITE_LINK_MODAL },
                    analyticsLocation: {
                        page: A.Sbl.EXTERNAL_INVITE_LINK_MODAL,
                        section: A.jXE.GUILD_CAP_UPSELL_MODAL
                    },
                    analyticsLocations: e
                }),
            className: R.experimentUpsellError,
            children: [
                (0, i.jsx)(s.NitroWheelIcon, {
                    size: 'md',
                    className: R.experimentUpsellIcon,
                    color: f.JX.PREMIUM_TIER_2
                }),
                (0, i.jsx)('span', {
                    className: R.experimentUpsellText,
                    children: j.intl.string(j.t['4/W4Pz'])
                }),
                (0, i.jsx)('span', {
                    className: R.experimentGetNitro,
                    children: j.intl.string(j.t.b6KOkJ)
                })
            ]
        })
    );
}
function w(e) {
    let { className: t } = e;
    return (0, i.jsxs)('div', {
        'aria-hidden': 'true',
        className: a()(R.iconContainer, t),
        children: [
            (0, i.jsx)(I.Z, { className: R.iconSparklePlus }),
            (0, i.jsx)(s.LinkIcon, {
                size: 'custom',
                color: 'currentColor',
                className: R.iconLink,
                width: 40,
                height: 40
            }),
            (0, i.jsx)(b.Z, { className: R.iconSparkleStar })
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
                className: R.errorContent,
                children: [
                    (0, i.jsx)(w, { className: R.errorImage }),
                    (0, i.jsx)(s.Heading, {
                        id: n,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: j.intl.string(j.t.u9zxnZ)
                    }),
                    (0, i.jsx)('div', {
                        className: R.errorBody,
                        children: j.intl.string(j.t.FWkU6O)
                    }),
                    (0, i.jsx)(h.zx, {
                        size: h.zx.Sizes.LARGE,
                        onClick: () => y.Z.close(),
                        color: h.zx.Colors.BRAND,
                        children: j.intl.string(j.t.wcqOoK)
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
    (0, o.e7)([x.default], () => {
        var e;
        return null === (e = x.default.getCurrentUser()) || void 0 === e ? void 0 : e.premiumType;
    });
    let { invite: f, error: _, submitting: I } = (0, o.cj)([T.Z], () => T.Z.getProps());
    l.useEffect(() => {
        !__OVERLAY__ && Z.isPlatformEmbedded && ((0, Z.isWindows)() ? N.ZP.minimize() : N.ZP.restore(), N.ZP.focus());
    }, []);
    let b = (0, g.Dt)(),
        { analyticsLocations: S } = (0, d.ZP)(u.Z.INVITE_MODAL);
    if (null == f) return null;
    if (f.state === A.r2o.EXPIRED || f.state === A.r2o.BANNED || f.state === A.r2o.ERROR) return (0, i.jsx)(D, { transitionState: r });
    if (null == f.channel) return null;
    function P() {
        null != f && y.Z.acceptInvite(f);
    }
    let { guild: w, channel: O, inviter: k, target_application: U } = f,
        G = null != w,
        B = null != f.stage_instance,
        V = null == f.guild && null == f.channel && null != f.inviter;
    if (null != U) (t = null == w ? void 0 : w.name), (n = v.Z.createFromServer(U).getCoverImageURL(1024));
    else if (null != w)
        (t = w.name),
            (n = E.ZP.getGuildSplashURL({
                id: w.id,
                splash: w.splash
            }));
    else if (((null == (t = O.name) || '' === t) && null != k && (t = k.username), null == t)) throw Error('no name for group DM invite');
    let H = (0, C.yU)(),
        F = B ? j.intl.string(j.t['5UKyUl']) : j.intl.format(j.t.QD7BDA, { guildName: t });
    return (
        V && (F = j.intl.string(j.t['e/6Ogo'])),
        (0, i.jsx)(d.Gt, {
            value: S,
            children: (0, i.jsxs)(s.ModalRoot, {
                size: s.ModalSize.DYNAMIC,
                'aria-labelledby': b,
                transitionState: r,
                className: R.container,
                children: [
                    (0, i.jsx)('div', {
                        className: R.contentWrapper,
                        children: (0, i.jsx)(s.Scroller, {
                            className: R.scroller,
                            children: (0, i.jsxs)(m.Z, {
                                className: R.inviteContent,
                                direction: m.Z.Direction.VERTICAL,
                                justify: m.Z.Justify.BETWEEN,
                                children: [
                                    (0, i.jsx)('div', {
                                        id: b,
                                        className: M.marginBottom20,
                                        children: (0, i.jsx)(c.Z, {
                                            invite: f,
                                            disableUser: G,
                                            error: _
                                        })
                                    }),
                                    B && null != w
                                        ? (0, i.jsx)('div', {
                                              className: a()(M.marginBottom20, R.stage),
                                              children: (0, i.jsx)(p.Z, {
                                                  isCard: !0,
                                                  stageInstance: f.stage_instance,
                                                  guild: w
                                              })
                                          })
                                        : null,
                                    (0, i.jsxs)('div', {
                                        children: [
                                            H ? (0, i.jsx)(L, {}) : null,
                                            null == U
                                                ? (0, i.jsx)(s.Tooltip, {
                                                      text: H ? j.intl.string(j.t.iLyuDA) : null,
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
                                                              children: H ? j.intl.string(j.t.ZNCziI) : F
                                                          });
                                                      }
                                                  })
                                                : (0, i.jsxs)('div', {
                                                      className: R.buttonGroup,
                                                      children: [
                                                          (0, i.jsx)(h.zx, {
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: P,
                                                              submitting: I,
                                                              children: j.intl.string(j.t.RscU7O)
                                                          }),
                                                          (0, i.jsx)(h.zx, {
                                                              color: h.zx.Colors.PRIMARY,
                                                              size: h.zx.Sizes.LARGE,
                                                              onClick: P,
                                                              submitting: I,
                                                              children: j.intl.string(j.t.eylRaW)
                                                          })
                                                      ]
                                                  }),
                                            (0, i.jsx)(m.Z, {
                                                justify: m.Z.Justify.CENTER,
                                                className: M.marginTop8,
                                                children: (0, i.jsx)(h.zx, {
                                                    look: h.zx.Looks.LINK,
                                                    className: R.noThanksButton,
                                                    onClick: function () {
                                                        y.Z.close();
                                                    },
                                                    color: h.zx.Colors.TRANSPARENT,
                                                    children: j.intl.string(j.t.ndsK4e)
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
                            className: R.inviteSplash,
                            style: { backgroundImage: 'url('.concat(n, ')') }
                        })
                ]
            })
        })
    );
}
