n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(752877),
    o = n(990547),
    c = n(873546),
    d = n(481060),
    u = n(906732),
    h = n(213609),
    m = n(963249),
    p = n(579185),
    g = n(814443),
    f = n(626135),
    _ = n(479446),
    E = n(522558),
    I = n(441623),
    C = n(317271),
    v = n(674701),
    N = n(474936),
    S = n(981631),
    T = n(388032),
    x = n(378480),
    b = n(423360);
let A = {
    width: 14,
    height: 14
};
function Z(e) {
    let { recipientUser: t, giftIntentType: n, analyticsPage: l, shouldHighlight: Z } = e,
        { analyticsLocations: L } = (0, u.ZP)(),
        { isHovered: y, setIsHovered: P, onMouseEnter: O, onMouseLeave: R } = (0, p.Z)(200, 300),
        { enableEmojiCTA: j } = E.w.useExperiment({ location: 'GiftIntentActionButton' }, { autoTrackExposure: !1 });
    r.useEffect(() => {
        let e = g.Z.getUserAffinity(t.id);
        (0, h.h)({
            name: o.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: o.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: n,
                affinity: null == e ? void 0 : e.affinity
            }
        });
    }, [t, n]);
    let D = r.useCallback(
            (e) => {
                'focus' !== e.type && O();
            },
            [O]
        ),
        M = (e) => {
            e.stopPropagation();
            let i = g.Z.getUserAffinity(t.id);
            f.default.track(S.rMx.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
                gift_intent_type: n,
                affinity: null == i ? void 0 : i.affinity
            }),
                (0, m.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: t,
                    analyticsLocation: (0, C.F)(n).actionButton,
                    analyticsLocations: L,
                    analyticsObject: {
                        page: l,
                        section: S.jXE.FRIENDS_LIST_FRIEND_ROW,
                        object: S.qAy.BUTTON_CTA,
                        objectType: S.Qqv.GIFT
                    },
                    giftMessage: w()
                });
        },
        w = () => {
            if (n === N.hX.FRIEND_ANNIVERSARY) return T.intl.formatToPlainString(T.t['L2s/Nz'], { numberOfYears: I.Z.getFriendAnniversaryYears(t.id) });
            return (0, _.Ou)(n);
        },
        k = () => {
            if (n === N.hX.FRIEND_ANNIVERSARY) return T.intl.string(T.t['4LohBA']);
            return (0, _.Ou)(n);
        },
        U = () =>
            j
                ? (0, i.jsx)(d.Clickable, {
                      'aria-label': k(),
                      onClick: M,
                      className: a()(b.actionButton, x.popoutButton, {
                          [b.highlight]: Z,
                          [b.actionButtonMobile]: c.tq
                      }),
                      onMouseEnter: D,
                      onMouseLeave: R,
                      children: (0, i.jsx)(s.animated.div, {
                          className: x.spriteContainer,
                          children: (0, i.jsx)('div', { className: x.sprite })
                      })
                  })
                : (0, i.jsx)(d.Button, {
                      onClick: M,
                      onMouseEnter: D,
                      onMouseLeave: R,
                      children: (0, i.jsxs)('div', {
                          className: x.pillContentContainer,
                          children: [
                              (0, i.jsx)(d.GiftIcon, {
                                  size: 'custom',
                                  width: A.width,
                                  height: A.height,
                                  color: 'currentColor'
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: 'text-sm/medium',
                                  color: 'always-white',
                                  className: x.pillButtonText,
                                  children: k()
                              })
                          ]
                      })
                  });
    return (0, i.jsx)(d.Popout, {
        animation: d.Popout.Animation.FADE,
        nudgeAlignIntoViewport: !1,
        closeOnScroll: !0,
        shouldShow: y,
        position: 'right',
        align: 'top',
        spacing: 9,
        onRequestClose: () => {
            P(!1);
        },
        renderPopout: (e) =>
            (0, i.jsx)(v.Z, {
                giftIntentType: n,
                premiumGiftIntentCardType: v.U.COACHMARK,
                recipientUser: t,
                onMouseEnter: O,
                onMouseLeave: R,
                popoutPosition: e.position,
                analyticsPage: l,
                analyticsSection: S.jXE.FRIENDS_LIST_FRIEND_ROW_GIFT_POPOUT,
                giftIntentSecondaryAction: N.X2.SEND_MESSAGE,
                glow: !0
            }),
        children: () => U()
    });
}
