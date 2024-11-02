n.d(t, {
    o: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(693789),
    a = n(993365),
    o = n(481060),
    s = n(230711),
    c = n(197115),
    u = n(504983),
    d = n(594174),
    m = n(74538),
    f = n(981631),
    h = n(921944),
    p = n(474936),
    g = n(526761),
    _ = n(388032),
    C = n(568492);
function E(e) {
    var t;
    let { onClose: n, markAsDismissed: E } = e,
        I = (0, r.e7)([d.default], () => d.default.getCurrentUser());
    let x = (t = null == I ? void 0 : I.premiumType) === p.p9.TIER_2 ? _.intl.string(_.t.jqO5Qk) : null == t ? _.intl.string(_.t.f2qjw8) : _.intl.string(_.t.SblICQ),
        v = m.ZP.canUseCustomCallSounds(I);
    return (0, i.jsxs)(u.Z, {
        isShown: !0,
        type: u.Y.PREMIUM,
        className: C.upsellOuter,
        backgroundClassName: C.upsellInner,
        children: [
            null != E
                ? (0, i.jsx)(o.Clickable, {
                      className: C.close,
                      onClick: () => (null == E ? void 0 : E(h.L.DISMISS)),
                      'aria-label': _.intl.string(_.t.cpT0Cg),
                      children: (0, i.jsx)(o.XSmallIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: C.closeIcon
                      })
                  })
                : null,
            (0, i.jsxs)('div', {
                className: C.upsellTitle,
                children: [
                    (0, i.jsx)(o.NitroWheelIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: C.nitroWheel
                    }),
                    (0, i.jsx)(o.Heading, {
                        variant: 'heading-sm/bold',
                        children: _.intl.string(_.t.dTbAx8)
                    })
                ]
            }),
            (0, i.jsx)(a.x, {
                variant: 'text-sm/normal',
                children: x
            }),
            v
                ? (0, i.jsx)(l.zx, {
                      onClick: function () {
                          s.Z.open(f.oAB.VOICE, g.GA), null == n || n(), null == E || E(h.L.PRIMARY);
                      },
                      children: _.intl.string(_.t.RzWDqa)
                  })
                : (0, i.jsx)(c.Z, {
                      buttonText: _.intl.string(_.t.pj0XBA),
                      subscriptionTier: p.Si.TIER_2,
                      premiumModalAnalyticsLocation: {
                          section: f.jXE.SOUNDBOARD_SOUND_PICKER,
                          object: f.qAy.BUTTON_CTA
                      },
                      color: l.zx.Colors.GREEN,
                      onSubscribeModalClose: () => (null == E ? void 0 : E(h.L.PRIMARY))
                  })
        ]
    });
}
