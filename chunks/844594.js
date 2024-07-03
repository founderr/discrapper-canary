a.r(i), a.d(i, {
    default: function () {
        return E;
    }
});
var n = a(735250), o = a(470079), r = a(481060), s = a(197115), t = a(921813), l = a(318661), c = a(721987), u = a(153124), d = a(626135), v = a(981631), f = a(486324), m = a(474936), p = a(689938), I = a(423883);
function E(e) {
    let {
            user: i,
            guildId: a,
            transitionState: E,
            imageSrc: A,
            uploadType: _,
            onSubscribe: T,
            onClose: h
        } = e, P = (0, u.Dt)(), Z = (0, l.ZP)(i.id, a), {
            primaryColor: x,
            secondaryColor: N
        } = (0, c.Z)({
            user: i,
            displayProfile: Z,
            pendingAvatar: _ === f.pC.AVATAR ? A : void 0,
            isPreview: !0
        });
    return o.useEffect(() => {
        d.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, { type: m.cd.ANIMATED_AVATAR_PREVIEW_GIF_MODAL });
    }, []), (0, n.jsxs)(r.ModalRoot, {
        className: I.modalRoot,
        transitionState: E,
        size: r.ModalSize.SMALL,
        'aria-labelledby': P,
        hideShadow: !0,
        children: [
            (0, n.jsx)(t.Z, {
                user: i,
                canUsePremiumCustomization: !0,
                disabledInputs: !0,
                pendingAvatar: _ === f.pC.AVATAR ? A : void 0,
                pendingBanner: _ === f.pC.BANNER ? A : void 0,
                pendingThemeColors: [
                    x,
                    N
                ]
            }),
            (0, n.jsxs)('div', {
                className: I.upsellSection,
                children: [
                    (0, n.jsx)(r.Text, {
                        className: I.joinText,
                        variant: 'text-sm/normal',
                        children: _ === f.pC.AVATAR ? p.Z.Messages.PREMIUM_PREVIEW_JOIN_AVATAR : p.Z.Messages.PREMIUM_PREVIEW_JOIN_BANNER
                    }),
                    (0, n.jsx)(s.Z, {
                        buttonText: p.Z.Messages.PREMIUM_PREVIEW_JOIN_NITRO,
                        subscriptionTier: m.Si.TIER_2,
                        className: I.premiumSubscribeButton,
                        size: r.Button.Sizes.SMALL,
                        premiumModalAnalyticsLocation: {
                            section: v.jXE.SETTINGS_EDIT_PROFILE,
                            object: v.qAy.BUTTON_CTA
                        },
                        onSubscribeModalClose: e => {
                            e && (null == T || T(), h());
                        }
                    }),
                    (0, n.jsx)(r.Button, {
                        onClick: h,
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.FILLED,
                        children: p.Z.Messages.PREMIUM_PREVIEW_EXIT
                    })
                ]
            })
        ]
    });
}
