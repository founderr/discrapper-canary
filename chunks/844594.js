n.r(i),
    n.d(i, {
        default: function () {
            return E;
        }
    });
var a = n(735250),
    o = n(470079),
    r = n(481060),
    s = n(313201),
    l = n(197115),
    t = n(921813),
    c = n(318661),
    u = n(721987),
    d = n(626135),
    m = n(981631),
    v = n(486324),
    f = n(474936),
    p = n(689938),
    I = n(745117);
function E(e) {
    let { user: i, guildId: n, transitionState: E, imageSrc: A, uploadType: _, onSubscribe: T, onClose: h } = e,
        Z = (0, s.Dt)(),
        x = (0, c.ZP)(i.id, n),
        { primaryColor: N, secondaryColor: P } = (0, u.Z)({
            user: i,
            displayProfile: x,
            pendingAvatar: _ === v.pC.AVATAR ? A : void 0,
            isPreview: !0
        });
    return (
        o.useEffect(() => {
            d.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, { type: f.cd.ANIMATED_AVATAR_PREVIEW_GIF_MODAL });
        }, []),
        (0, a.jsxs)(r.ModalRoot, {
            className: I.modalRoot,
            transitionState: E,
            size: r.ModalSize.SMALL,
            'aria-labelledby': Z,
            hideShadow: !0,
            children: [
                (0, a.jsx)(t.Z, {
                    user: i,
                    canUsePremiumCustomization: !0,
                    disabledInputs: !0,
                    pendingAvatar: _ === v.pC.AVATAR ? A : void 0,
                    pendingBanner: _ === v.pC.BANNER ? A : void 0,
                    pendingThemeColors: [N, P]
                }),
                (0, a.jsxs)('div', {
                    className: I.upsellSection,
                    children: [
                        (0, a.jsx)(r.Text, {
                            className: I.joinText,
                            variant: 'text-sm/normal',
                            children: _ === v.pC.AVATAR ? p.Z.Messages.PREMIUM_PREVIEW_JOIN_AVATAR : p.Z.Messages.PREMIUM_PREVIEW_JOIN_BANNER
                        }),
                        (0, a.jsx)(l.Z, {
                            buttonText: p.Z.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
                            subscriptionTier: f.Si.TIER_2,
                            className: I.premiumSubscribeButton,
                            size: r.Button.Sizes.SMALL,
                            premiumModalAnalyticsLocation: {
                                section: m.jXE.SETTINGS_EDIT_PROFILE,
                                object: m.qAy.BUTTON_CTA
                            },
                            onSubscribeModalClose: (e) => {
                                e && (null == T || T(), h());
                            }
                        }),
                        (0, a.jsx)(r.Button, {
                            onClick: h,
                            size: r.Button.Sizes.SMALL,
                            color: r.Button.Colors.PRIMARY,
                            look: r.Button.Looks.FILLED,
                            children: p.Z.Messages.PREMIUM_PREVIEW_EXIT
                        })
                    ]
                })
            ]
        })
    );
}
