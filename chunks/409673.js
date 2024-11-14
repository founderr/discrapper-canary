n.d(t, {
    K_: function () {
        return O;
    },
    hU: function () {
        return R;
    }
}),
    n(47120);
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
    p = n(745510),
    h = n(806966),
    m = n(409700),
    g = n(631771),
    E = n(594174),
    v = n(208049),
    I = n(763296),
    b = n(697426),
    S = n(242291),
    T = n(706667),
    y = n(286654),
    A = n(675654),
    N = n(388032),
    C = n(423298);
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
    let { sound: P, channel: k, containerClassName: U, className: G, focused: B, forceSecondaryActions: Z = !1, interactive: F = !0, enableSecondaryActions: V = !1, suppressPlaySound: j, onMouseEnter: H, onSelectItem: Y, analyticsLocations: W, buttonOverlay: K = b.Pb.PLAY, showLockForDisabledSound: z = !0, inNitroLockedSection: q = !1, refreshEnabled: Q = !1, isAnimated: X = !0, isPlayingSoundOverride: J, isSoundmoji: $, tooltipOverride: ee, tooltipContentClassName: et, ...en } = e,
        { name: er, emojiId: ei, emojiName: ea } = P,
        es = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        eo = (0, y.z)(P, null == k ? void 0 : k.guild_id),
        { playSoundboardSound: el, previewSound: eu, isPlayingSound: ec, isPreviewingSound: ed } = (0, T.Z)(P, null !== (v = null == k ? void 0 : k.id) && void 0 !== v ? v : null),
        { createMultipleConfettiAt: ef } = i.useContext(p.h),
        e_ = i.useRef(null);
    let ep =
            ((w = P.soundId),
            (M = e_.current),
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
        em = i.useRef(0.01),
        eg = i.useRef(new u.Xp()),
        eE = '1' === P.soundId,
        ev = 'sound-'.concat(P.soundId),
        eI = (0, o.JA)(ev),
        eb = null != ei || null != ea,
        eS = !(0, S.Nq)(es, P, k) && !$,
        eT = Z || (V && !eS),
        ey = i.useRef(null),
        eA = (null !== (I = null === (n = ey.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== I ? I : 0) > (null !== (R = null === (a = ey.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== R ? R : 0),
        eN = null !== (L = h.Wq.useStore().bottomPosition) && void 0 !== L ? L : 0,
        eC = null !== (x = null === (c = e_.current) || void 0 === c ? void 0 : c.getBoundingClientRect().bottom) && void 0 !== x ? x : 0,
        [eR, eO] = i.useState(!1),
        eD = eS && z,
        { enableInlineUpsell: eL } = g.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eD });
    function ex() {
        if ((eE && !eh && ((em.current = Math.min(em.current + 0.01, 0.1)), Math.random() < em.current && ef(ep.x, ep.y, void 0, void 0, { sprite: A.vv })), null != Y)) {
            Y();
            return;
        }
        j || el(W);
    }
    let ew = O({
            sound: P,
            previewSound: eu,
            disabled: eS && !Z,
            refreshEnabled: Q
        }),
        eM = (e) =>
            j || eS || Q
                ? eS && z && eL
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(Q ? C.primaryIconRefresh : C.primaryIcon, C.lockIcon, e, { [C.hasEmoji]: eb })
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(C.primaryIcon, e)
                  }),
        eP = (0, r.jsx)(D, {
            sound: P,
            refreshEnabled: Q,
            disabled: !F && !Z
        }),
        ek = () =>
            eL && eS && z && !q
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: C.buttonOverlayBackground }),
                          eM(C.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: C.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: Q ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                                  children: [eT && ew, eT && eP]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: C.buttonOverlay,
                      children: [
                          !Q && (0, r.jsx)('div', { className: s()({ [C.buttonOverlayBackground]: !j }) }),
                          (0, r.jsx)('div', {
                              className: Q ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                              children:
                                  K === b.Pb.SOUNDMOJI
                                      ? (0, r.jsx)(m.Z, {
                                            sound: P,
                                            setTooltipShowing: eO
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [eT && ew, eM(), eT && eP]
                                        })
                          })
                      ]
                  });
    return (
        i.useEffect(() => {
            let e = eg.current;
            return (
                eE &&
                    e.start(1000, () => {
                        em.current = Math.max(em.current - 0.01, 0.01);
                    }),
                () => e.stop()
            );
        }, [eE]),
        (0, r.jsxs)('li', {
            ref: t,
            className: s()(C.soundButtonWrapper, U),
            onMouseEnter: H,
            children: [
                (0, r.jsx)(d.Tooltip, {
                    'aria-label': null != ee ? P.name : void 0,
                    text: null != ee ? ee : P.name,
                    tooltipContentClassName: et,
                    position: eC + 50 > eN ? 'top' : 'bottom',
                    shouldShow: !eR,
                    delay: 500,
                    children: (e) =>
                        (0, r.jsxs)(d.ClickableContainer, {
                            ...en,
                            buttonProps: {
                                ...eI,
                                id: ev,
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
                                    [C.playing]: null != J ? J : ec,
                                    [C.previewing]: ed,
                                    [C.hoverActiveBackground]: j && !Q,
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
                            onClick: ex,
                            onContextMenu: V && !eS ? eo : void 0,
                            onMouseOver: () => {
                                var t;
                                return null != ee || (eA && Q && !0 !== $) ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(Q ? C.soundInfoRefresh : C.soundInfo, { [C.hasEmoji]: eb }),
                                    'aria-hidden': !0,
                                    ref: e_,
                                    children: [
                                        eb &&
                                            (Q
                                                ? (0, r.jsx)('div', {
                                                      className: C.emojiCircle,
                                                      children: (0, r.jsx)(f.Z, {
                                                          emojiId: ei,
                                                          emojiName: ea,
                                                          className: C.emoji
                                                      })
                                                  })
                                                : (0, r.jsx)(f.Z, {
                                                      emojiId: ei,
                                                      emojiName: ea,
                                                      className: C.emoji
                                                  })),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: F ? void 0 : 'text-muted',
                                            className: s()(Q ? C.soundNameRefresh : C.soundName, { [C.hasEmoji]: eb }),
                                            ref: ey,
                                            children: er
                                        })
                                    ]
                                }),
                                (function () {
                                    switch (K) {
                                        case b.Pb.ADD:
                                            return (0, r.jsxs)('div', {
                                                className: C.addButtonOverlay,
                                                children: [
                                                    (0, r.jsx)('div', { className: C.buttonOverlayBackground }),
                                                    (0, r.jsxs)('div', {
                                                        className: Q ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                                                        children: [
                                                            ew,
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
                                                            eT && eP
                                                        ]
                                                    })
                                                ]
                                            });
                                        case b.Pb.NONE:
                                            return null;
                                        case b.Pb.PLAY:
                                        case b.Pb.SOUNDMOJI:
                                        default:
                                            return ek();
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
