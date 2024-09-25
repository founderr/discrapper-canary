n.d(t, {
    o: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    l = n(693789),
    s = n(260034),
    a = n(993365),
    o = n(481060),
    u = n(230711),
    c = n(197115),
    d = n(504983),
    h = n(594174),
    _ = n(74538),
    f = n(981631),
    E = n(921944),
    p = n(474936),
    m = n(526761),
    C = n(689938),
    S = n(568492);
function I(e) {
    var t;
    let { onClose: n, markAsDismissed: I } = e,
        g = (0, i.e7)([h.default], () => h.default.getCurrentUser());
    let T = (t = null == g ? void 0 : g.premiumType) === p.p9.TIER_2 ? C.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? C.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : C.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
        R = _.ZP.canUseCustomCallSounds(g);
    return (0, r.jsxs)(d.Z, {
        isShown: !0,
        type: d.Y.PREMIUM,
        className: S.upsellOuter,
        backgroundClassName: S.upsellInner,
        children: [
            null != I
                ? (0, r.jsx)(o.Clickable, {
                      className: S.close,
                      onClick: () => (null == I ? void 0 : I(E.L.DISMISS)),
                      'aria-label': C.Z.Messages.CLOSE,
                      children: (0, r.jsx)(o.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: S.closeIcon
                      })
                  })
                : null,
            (0, r.jsxs)('div', {
                className: S.upsellTitle,
                children: [
                    (0, r.jsx)(o.NitroWheelIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: S.nitroWheel
                    }),
                    (0, r.jsx)(s.X, {
                        variant: 'heading-sm/bold',
                        children: C.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
                    })
                ]
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-sm/normal',
                children: T
            }),
            R
                ? (0, r.jsx)(l.zx, {
                      onClick: function () {
                          u.Z.open(f.oAB.VOICE, m.GA), null == n || n(), null == I || I(E.L.PRIMARY);
                      },
                      children: C.Z.Messages.CHECK_IT_OUT
                  })
                : (0, r.jsx)(c.Z, {
                      buttonText: C.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                      subscriptionTier: p.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: f.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: f.qAy.BUTTON_CTA
                      },
                      color: l.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == I ? void 0 : I(E.L.PRIMARY))
                  })
        ]
    });
}
