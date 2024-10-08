n.d(t, {
    Z: function () {
        return L;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(212433),
    o = n(990547),
    c = n(873546),
    d = n(481060),
    u = n(906732),
    _ = n(213609),
    E = n(963249),
    h = n(579185),
    m = n(814443),
    I = n(479446),
    p = n(522558),
    g = n(441623),
    T = n(317271),
    f = n(16474),
    S = n(474936),
    C = n(981631),
    N = n(689938),
    A = n(551370),
    v = n(886733);
let Z = {
    width: 14,
    height: 14
};
function L(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: s, shouldHighlight: L } = e,
        { analyticsLocations: R } = (0, u.ZP)(),
        { isHovered: O, setIsHovered: x, onMouseEnter: b, onMouseLeave: M } = (0, h.Z)(200, 300),
        { enableEmojiCTA: P } = p.w.useExperiment({ location: 'GiftIntentActionButton' }, { autoTrackExposure: !1 });
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
    let D = a.useCallback(
            (e) => {
                'focus' !== e.type && b();
            },
            [b]
        ),
        y = (e) => {
            e.stopPropagation(),
                (0, E.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, T.F)(n).actionButton,
                    analyticsLocations: R,
                    analyticsObject: {
                        page: s,
                        section: C.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: C.qAy.BUTTON_CTA,
                        objectType: C.Qqv.GIFT
                    },
                    giftMessage: j()
                });
        },
        j = () => {
            if (n === S.hX.FRIEND_ANNIVERSARY) return N.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: g.Z.getFriendAnniversaryYears(t.id) });
            return (0, I.Ou)(n);
        },
        U = () => {
            if (n === S.hX.FRIEND_ANNIVERSARY) return N.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY;
            return (0, I.Ou)(n);
        },
        G = () =>
            P
                ? (0, i.jsx)(d.Clickable, {
                      'aria-label': U(),
                      onClick: y,
                      className: r()(v.actionButton, A.popoutButton, {
                          [v.highlight]: L,
                          [v.actionButtonMobile]: c.tq
                      }),
                      onMouseEnter: D,
                      onMouseLeave: M,
                      children: (0, i.jsx)(l.animated.div, {
                          className: A.spriteContainer,
                          children: (0, i.jsx)('div', { className: A.sprite })
                      })
                  })
                : (0, i.jsx)(d.Button, {
                      onClick: y,
                      onMouseEnter: D,
                      onMouseLeave: M,
                      children: (0, i.jsxs)('div', {
                          className: A.pillContentContainer,
                          children: [
                              (0, i.jsx)(d.GiftIcon, {
                                  size: 'custom',
                                  width: Z.width,
                                  height: Z.height,
                                  color: 'currentColor'
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  className: A.pillButtonText,
                                  children: U()
                              })
                          ]
                      })
                  });
    return (0, i.jsx)(d.Popout, {
        animation: d.Popout.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        closeOnScroll: !0,
        shouldShow: O,
        position: 'right',
        align: 'top',
        spacing: 9,
        onRequestClose: () => {
            x(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(f.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: f.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: b,
                onMouseLeave: M,
                popoutPosition: e.position,
                analyticsPage: s,
                analyticsSection: C.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                glow: !0
            }),
        children: () => G()
    });
}
