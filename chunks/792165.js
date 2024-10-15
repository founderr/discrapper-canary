n.d(t, {
    o: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(693789),
    r = n(993365),
    l = n(481060),
    o = n(230711),
    c = n(197115),
    u = n(504983),
    d = n(594174),
    _ = n(74538),
    E = n(981631),
    I = n(921944),
    m = n(474936),
    T = n(526761),
    h = n(689938),
    N = n(568492);
function f(e) {
    var t;
    let { onClose: n, markAsDismissed: f } = e,
        C = (0, a.e7)([d.default], () => d.default.getCurrentUser());
    let p = (t = null == C ? void 0 : C.premiumType) === m.p9.TIER_2 ? h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
        g = _.ZP.canUseCustomCallSounds(C);
    return (0, i.jsxs)(u.Z, {
        isShown: !0,
        type: u.Y.PREMIUM,
        className: N.upsellOuter,
        backgroundClassName: N.upsellInner,
        children: [
            null != f
                ? (0, i.jsx)(l.Clickable, {
                      className: N.close,
                      onClick: () => (null == f ? void 0 : f(I.L.DISMISS)),
                      'aria-label': h.Z.Messages.CLOSE,
                      children: (0, i.jsx)(l.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: N.closeIcon
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: N.upsellTitle,
                children: [
                    (0, i.jsx)(l.NitroWheelIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: N.nitroWheel
                    }),
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-sm/bold',
                        children: h.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
                    })
                ]
            }),
            (0, i.jsx)(r.x, {
                variant: 'text-sm/normal',
                children: p
            }),
            g
                ? (0, i.jsx)(s.zx, {
                      onClick: function () {
                          o.Z.open(E.oAB.VOICE, T.GA), null == n || n(), null == f || f(I.L.PRIMARY);
                      },
                      children: h.Z.Messages.CHECK_IT_OUT
                  })
                : (0, i.jsx)(c.Z, {
                      buttonText: h.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                      subscriptionTier: m.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: E.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: E.qAy.BUTTON_CTA
                      },
                      color: s.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == f ? void 0 : f(I.L.PRIMARY))
                  })
        ]
    });
}
