n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(526629),
    o = n(873546),
    c = n(481060),
    d = n(906732),
    u = n(963249),
    _ = n(579185),
    E = n(479446),
    h = n(522558),
    m = n(441623),
    I = n(16474),
    g = n(474936),
    p = n(981631),
    T = n(689938),
    S = n(551370),
    f = n(886733);
let C = {
    width: 14,
    height: 14
};
function N(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: s, shouldHighlight: N } = e,
        { analyticsLocations: A } = (0, d.ZP)(),
        { isHovered: v, setIsHovered: Z, onMouseEnter: L, onMouseLeave: R } = (0, _.Z)(200, 300),
        { enableEmojiCTA: O } = h.w.useExperiment({ location: 'GiftIntentActionButton' }, { autoTrackExposure: !1 }),
        x = a.useCallback(
            (e) => {
                'focus' !== e.type && L();
            },
            [L]
        ),
        b = (e) => {
            M(e, p.jXE.FRIENDS_LIST_FRIEND_ROW);
        },
        P = (e) => {
            M(e, p.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT);
        },
        M = (e, n) => {
            e.stopPropagation(),
                (0, u.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocations: A,
                    analyticsObject: {
                        page: s,
                        section: n,
                        object: p.qAy.BUTTON_CTA,
                        objectType: p.Qqv.GIFT
                    },
                    giftMessage: D()
                });
        },
        D = () => {
            if (n === g.hX.FRIEND_ANNIVERSARY) return T.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: m.Z.getFriendAnniversaryYears(t.id) });
            return (0, E.Ou)(n);
        },
        y = () => {
            if (n === g.hX.FRIEND_ANNIVERSARY) return T.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY;
            return (0, E.Ou)(n);
        },
        j = () =>
            O
                ? (0, i.jsx)(c.Clickable, {
                      'aria-label': y(),
                      onClick: b,
                      className: r()(f.actionButton, S.popoutButton, {
                          [f.highlight]: N,
                          [f.actionButtonMobile]: o.tq
                      }),
                      onMouseEnter: x,
                      onMouseLeave: R,
                      children: (0, i.jsx)(l.animated.div, {
                          className: S.spriteContainer,
                          children: (0, i.jsx)('div', { className: S.sprite })
                      })
                  })
                : (0, i.jsx)(c.Button, {
                      onClick: b,
                      onMouseEnter: x,
                      onMouseLeave: R,
                      children: (0, i.jsxs)('div', {
                          className: S.pillContentContainer,
                          children: [
                              (0, i.jsx)(c.GiftIcon, {
                                  size: 'custom',
                                  width: C.width,
                                  height: C.height,
                                  color: 'currentColor'
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  className: S.pillButtonText,
                                  children: y()
                              })
                          ]
                      })
                  });
    return (0, i.jsx)(c.Popout, {
        animation: c.Popout.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        closeOnScroll: !0,
        shouldShow: v,
        position: 'right',
        align: 'top',
        spacing: 9,
        onRequestClose: () => {
            Z(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(I.Z, {
                giftIntentType: n,
                recipientUser: t,
                onMouseEnter: L,
                onMouseLeave: R,
                onClick: P,
                popoutPosition: e.position
            }),
        children: () => j()
    });
}
