n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(100621),
    o = n(990547),
    c = n(873546),
    d = n(481060),
    u = n(906732),
    _ = n(213609),
    E = n(963249),
    h = n(579185),
    m = n(814443),
    I = n(626135),
    p = n(479446),
    g = n(522558),
    T = n(441623),
    S = n(317271),
    C = n(674701),
    f = n(474936),
    N = n(981631),
    A = n(689938),
    v = n(756),
    Z = n(886733);
let L = {
    width: 14,
    height: 14
};
function R(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: s, shouldHighlight: R } = e,
        { analyticsLocations: O } = (0, u.ZP)(),
        { isHovered: x, setIsHovered: b, onMouseEnter: M, onMouseLeave: P } = (0, h.Z)(200, 300),
        { enableEmojiCTA: D } = g.w.useExperiment({ location: 'GiftIntentActionButton' }, { autoTrackExposure: !1 });
    a.useEffect(() => {
        let e = m.Z.getUserAffinity(t.id);
        (0, _.h)({
            name: o.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: o.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: n,
                affinity: null == e ? void 0 : e.affinity
            }
        });
    }, [t, n]);
    let y = a.useCallback(
            (e) => {
                'focus' !== e.type && M();
            },
            [M]
        ),
        j = (e) => {
            e.stopPropagation();
            let i = m.Z.getUserAffinity(t.id);
            I.default.track(N.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: n,
                affinity: null == i ? void 0 : i.affinity
            }),
                (0, E.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, S.F)(n).actionButton,
                    analyticsLocations: O,
                    analyticsObject: {
                        page: s,
                        section: N.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: N.qAy.BUTTON_CTA,
                        objectType: N.Qqv.GIFT
                    },
                    giftMessage: U()
                });
        },
        U = () => {
            if (n === f.hX.FRIEND_ANNIVERSARY) return A.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: T.Z.getFriendAnniversaryYears(t.id) });
            return (0, p.Ou)(n);
        },
        G = () => {
            if (n === f.hX.FRIEND_ANNIVERSARY) return A.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY;
            return (0, p.Ou)(n);
        },
        w = () =>
            D
                ? (0, i.jsx)(d.Clickable, {
                      'aria-label': G(),
                      onClick: j,
                      className: r()(Z.actionButton, v.popoutButton, {
                          [Z.highlight]: R,
                          [Z.actionButtonMobile]: c.tq
                      }),
                      onMouseEnter: y,
                      onMouseLeave: P,
                      children: (0, i.jsx)(l.animated.div, {
                          className: v.spriteContainer,
                          children: (0, i.jsx)('div', { className: v.sprite })
                      })
                  })
                : (0, i.jsx)(d.Button, {
                      onClick: j,
                      onMouseEnter: y,
                      onMouseLeave: P,
                      children: (0, i.jsxs)('div', {
                          className: v.pillContentContainer,
                          children: [
                              (0, i.jsx)(d.GiftIcon, {
                                  size: 'custom',
                                  width: L.width,
                                  height: L.height,
                                  color: 'currentColor'
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  className: v.pillButtonText,
                                  children: G()
                              })
                          ]
                      })
                  });
    return (0, i.jsx)(d.Popout, {
        animation: d.Popout.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        closeOnScroll: !0,
        shouldShow: x,
        position: 'right',
        align: 'top',
        spacing: 9,
        onRequestClose: () => {
            b(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(C.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: C.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: M,
                onMouseLeave: P,
                popoutPosition: e.position,
                analyticsPage: s,
                analyticsSection: N.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                giftIntentSecondaryAction: f.X2.SEND_MESSAGE,
                glow: !0
            }),
        children: () => w()
    });
}
