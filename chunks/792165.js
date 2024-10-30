n.d(t, {
    o: function () {
        return N;
    }
});
var i = n(200651);
n(192379);
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
    f = n(526761),
    h = n(689938),
    T = n(568492);
function N(e) {
    var t;
    let { onClose: n, markAsDismissed: N } = e,
        p = (0, a.e7)([d.default], () => d.default.getCurrentUser());
    let C = (t = null == p ? void 0 : p.premiumType) === m.p9.TIER_2 ? h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_TIER_2 : null == t ? h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_SUB : h.Z.Messages.CALL_SOUNDS_UPSELL_DESCRIPTION_NON_TIER_2,
        g = _.ZP.canUseCustomCallSounds(p);
    return (0, i.jsxs)(u.Z, {
        isShown: !0,
        type: u.Y.PREMIUM,
        className: T.upsellOuter,
        backgroundClassName: T.upsellInner,
        children: [
            null != N
                ? (0, i.jsx)(l.Clickable, {
                      className: T.close,
                      onClick: () => (null == N ? void 0 : N(I.L.DISMISS)),
                      'aria-label': h.Z.Messages.CLOSE,
                      children: (0, i.jsx)(l.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: T.closeIcon
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: T.upsellTitle,
                children: [
                    (0, i.jsx)(l.NitroWheelIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: T.nitroWheel
                    }),
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-sm/bold',
                        children: h.Z.Messages.CALL_SOUNDS_UPSELL_TITLE_NON_SUB
                    })
                ]
            }),
            (0, i.jsx)(r.x, {
                variant: 'text-sm/normal',
                children: C
            }),
            g
                ? (0, i.jsx)(s.zx, {
                      onClick: function () {
                          o.Z.open(E.oAB.VOICE, f.GA), null == n || n(), null == N || N(I.L.PRIMARY);
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
                      onSubscribeModalClose: () => (null == N ? void 0 : N(I.L.PRIMARY))
                  })
        ]
    });
}
