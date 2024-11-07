n.d(t, {
    K_: function () {
        return O;
    },
    _6: function () {
        return D;
    },
    hU: function () {
        return R;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(846519),
    c = n(692547),
    d = n(481060),
    f = n(596454),
    _ = n(607070),
    h = n(745510),
    p = n(806966),
    m = n(409700),
    g = n(631771),
    E = n(594174),
    v = n(208049),
    I = n(763296),
    S = n(697426),
    T = n(242291),
    b = n(706667),
    y = n(286654),
    A = n(675654),
    N = n(388032),
    C = n(989682);
function R(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: o = 'top', refreshEnabled: l = !1 } = e;
    return (0, r.jsx)(d.Tooltip, {
        text: i,
        position: o,
        children: (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                'aria-label': i,
                className: s()(l ? C.secondaryButtonRefresh : C.secondaryButton, { [C.buttonDisabled]: t }),
                onClick: n,
                children: a
            })
    });
}
function O(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top', refreshEnabled: s = !1 } = e;
    return (0, r.jsx)(R, {
        tooltipPosition: a,
        disabled: i,
        onClick: function (e) {
            e.stopPropagation(), e.currentTarget.blur(), n();
        },
        text: N.intl.formatToPlainString(N.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: s,
        children: (0, r.jsx)(d.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: C.secondaryIcon
        })
    });
}
function D(e) {
    let { sound: t, refreshEnabled: n, disabled: a = !1 } = e,
        o = (0, l.e7)([I.Z], () => I.Z.isFavoriteSound(t.soundId), [t.soundId]),
        u = i.useCallback(
            (e) => {
                e.stopPropagation(), e.currentTarget.blur(), o ? (0, v.hs)(t.soundId) : (0, v.TB)(t.soundId);
            },
            [o, t.soundId]
        );
    return (0, r.jsx)(R, {
        disabled: a,
        onClick: u,
        text: N.intl.formatToPlainString(o ? N.t.lQLsjY : N.t.Y5DOs7, {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: n,
        children: o
            ? (0, r.jsx)(d.StarIcon, {
                  size: 'xs',
                  className: s()(C.secondaryIcon, C.favoriteIconFavorite),
                  color: c.Z.unsafe_rawColors.GOLD.css
              })
            : (0, r.jsx)(d.StarOutlineIcon, {
                  size: 'xs',
                  color: 'currentColor',
                  className: C.secondaryIcon
              })
    });
}
t.ZP = i.forwardRef(function (e, t) {
    var n, a, c, v, I, R, L, x, w, M;
    let { sound: P, channel: k, containerClassName: U, className: G, focused: B, forceSecondaryActions: Z = !1, interactive: F = !0, enableSecondaryActions: V = !1, suppressPlaySound: H, onMouseEnter: j, onSelectItem: Y, analyticsLocations: W, buttonOverlay: K = S.Pb.PLAY, showLockForDisabledSound: z = !0, inNitroLockedSection: q = !1, refreshEnabled: Q = !1, isAnimated: X = !0, isPlayingSoundOverride: J, isSoundmoji: $, overrideTooltipPosition: ee, ...et } = e,
        { name: en, emojiId: er, emojiName: ei } = P,
        ea = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        es = (0, y.z)(P, null == k ? void 0 : k.guild_id),
        { playSoundboardSound: eo, previewSound: el, isPlayingSound: eu, isPreviewingSound: ec } = (0, b.Z)(P, null !== (v = null == k ? void 0 : k.id) && void 0 !== v ? v : null),
        { createMultipleConfettiAt: ed } = i.useContext(h.h),
        ef = i.useRef(null);
    let e_ =
            ((w = P.soundId),
            (M = ef.current),
            i.useMemo(() => {
                if (null == M || '1' !== w)
                    return {
                        x: 0,
                        y: 0
                    };
                let e = M.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                };
            }, [M, w])),
        eh = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        ep = i.useRef(0.01),
        em = i.useRef(new u.Xp()),
        eg = '1' === P.soundId,
        eE = 'sound-'.concat(P.soundId),
        ev = (0, o.JA)(eE),
        eI = null != er || null != ei,
        eS = !(0, T.Nq)(ea, P, k) && !$,
        eT = Z || (V && !eS),
        eb = i.useRef(null),
        ey = (null !== (I = null === (n = eb.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== I ? I : 0) > (null !== (R = null === (a = eb.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== R ? R : 0),
        eA = null !== (L = p.Wq.useStore().bottomPosition) && void 0 !== L ? L : 0,
        eN = null !== (x = null === (c = ef.current) || void 0 === c ? void 0 : c.getBoundingClientRect().bottom) && void 0 !== x ? x : 0,
        eC = eS && z,
        { enableInlineUpsell: eR } = g.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eC });
    function eO() {
        if ((eg && !eh && ((ep.current = Math.min(ep.current + 0.01, 0.1)), Math.random() < ep.current && ed(e_.x, e_.y, void 0, void 0, { sprite: A.vv })), null != Y)) {
            Y();
            return;
        }
        H || eo(W);
    }
    let eD = O({
            sound: P,
            previewSound: el,
            disabled: eS && !Z,
            refreshEnabled: Q
        }),
        eL = (e) =>
            H || eS || Q
                ? eS && z && eR
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(Q ? C.primaryIconRefresh : C.primaryIcon, C.lockIcon, e, { [C.hasEmoji]: eI })
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(C.primaryIcon, e)
                  }),
        ex = (0, r.jsx)(D, {
            sound: P,
            refreshEnabled: Q,
            disabled: !F && !Z
        }),
        ew = () =>
            eR && eS && z && !q
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: C.buttonOverlayBackground }),
                          eL(C.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: C.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: Q ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                                  children: [eT && eD, eT && ex]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: C.buttonOverlay,
                      children: [
                          !Q && (0, r.jsx)('div', { className: s()({ [C.buttonOverlayBackground]: !H }) }),
                          (0, r.jsx)('div', {
                              className: Q ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                              children:
                                  K === S.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(m.Z, { sound: P })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eT && eD, eL(), eT && ex]
                                        })
                          })
                      ]
                  });
    return (
        i.useEffect(() => {
            let e = em.current;
            return (
                eg &&
                    e.start(1000, () => {
                        ep.current = Math.max(ep.current - 0.01, 0.01);
                    }),
                () => e.stop()
            );
        }, [eg]),
        (0, r.jsxs)('li', {
            ref: t,
            className: s()(C.soundButtonWrapper, U),
            onMouseEnter: j,
            children: [
                (0, r.jsx)(d.Tooltip, {
                    text: P.name,
                    position: null != ee ? ee : eN + 50 > eA ? 'top' : 'bottom',
                    children: (e) =>
                        (0, r.jsxs)(d.ClickableContainer, {
                            ...et,
                            buttonProps: {
                                ...ev,
                                id: eE,
                                role: 'button'
                            },
                            'aria-label': N.intl.formatToPlainString(N.t.tuMUJy, {
                                emojiName: P.emojiName,
                                soundName: P.name
                            }),
                            className: s()(
                                Q ? C.soundButtonRefresh : C.soundButton,
                                {
                                    [C.animated]: X,
                                    [C.playing]: null != J ? J : eu,
                                    [C.previewing]: ec,
                                    [C.hoverActiveBackground]: H && !Q,
                                    [C.soundButtonInteractive]: F && !Q,
                                    [C.soundButtonInteractiveRefresh]: F && Q,
                                    [C.buttonDisabled]: !F && !Z,
                                    [C.premiumDisabled]: eS && !Z,
                                    [C.premiumDisabledRefresh]: eS && Q,
                                    [C.buttonDisabledSecondaryActionsEnabled]: !F && Z,
                                    [C.focused]: F && B
                                },
                                G
                            ),
                            ...e,
                            onClick: eO,
                            onContextMenu: V && !eS ? es : void 0,
                            onMouseOver: () => {
                                var t;
                                return ey && Q ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(Q ? C.soundInfoRefresh : C.soundInfo, { [C.hasEmoji]: eI }),
                                    'aria-hidden': !0,
                                    ref: ef,
                                    children: [
                                        eI &&
                                            (Q
                                                ? (0, r.jsx)('div', {
                                                      className: C.emojiCircle,
                                                      children: (0, r.jsx)(f.Z, {
                                                          emojiId: er,
                                                          emojiName: ei,
                                                          className: C.emoji
                                                      })
                                                  })
                                                : (0, r.jsx)(f.Z, {
                                                      emojiId: er,
                                                      emojiName: ei,
                                                      className: C.emoji
                                                  })),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: F ? void 0 : 'text-muted',
                                            className: s()(Q ? C.soundNameRefresh : C.soundName, { [C.hasEmoji]: eI }),
                                            ref: eb,
                                            children: en
                                        })
                                    ]
                                }),
                                (function () {
                                    switch (K) {
                                        case S.Pb.ADD:
                                            return (0, r.jsxs)('div', {
                                                className: C.addButtonOverlay,
                                                children: [
                                                    (0, r.jsx)('div', { className: C.buttonOverlayBackground }),
                                                    (0, r.jsxs)('div', {
                                                        className: Q ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                                                        children: [
                                                            eD,
                                                            Q
                                                                ? (0, r.jsx)('div', {
                                                                      className: C.primaryIconRefresh,
                                                                      children: (0, r.jsx)(d.PlusLargeIcon, {
                                                                          size: 'md',
                                                                          color: 'currentColor',
                                                                          className: C.plusSign
                                                                      })
                                                                  })
                                                                : (0, r.jsxs)('div', {
                                                                      className: C.addButton,
                                                                      children: [
                                                                          (0, r.jsx)(d.PlusSmallIcon, {
                                                                              size: 'md',
                                                                              color: 'currentColor',
                                                                              className: C.plusSign
                                                                          }),
                                                                          (0, r.jsx)(d.Text, {
                                                                              variant: 'text-xs/medium',
                                                                              color: 'header-primary',
                                                                              children: N.intl.string(N.t.QqqXLS)
                                                                          })
                                                                      ]
                                                                  }),
                                                            eT && ex
                                                        ]
                                                    })
                                                ]
                                            });
                                        case S.Pb.PLAY:
                                        case S.Pb.SOUNDMOJI:
                                        default:
                                            return ew();
                                    }
                                })()
                            ]
                        })
                }),
                !P.available &&
                    (0, r.jsx)(d.Tooltip, {
                        text: N.intl.string(N.t.MDOXJS),
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: Q ? C.unavailableTooltipRefresh : C.unavailableTooltip,
                                ...e
                            })
                    })
            ]
        })
    );
});
