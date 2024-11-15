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
    let { sound: P, channel: k, containerClassName: U, className: G, focused: B, forceSecondaryActions: Z = !1, interactive: F = !0, enableSecondaryActions: V = !1, suppressPlaySound: j, onMouseEnter: H, onSelectItem: Y, analyticsLocations: W, buttonOverlay: K = b.Pb.PLAY, showLockForDisabledSound: z = !0, inNitroLockedSection: q = !1, refreshEnabled: Q = !1, isAnimated: X = !0, isPlayingSoundOverride: J, isSoundmoji: $, tooltipOverride: ee, tooltipClassName: et, tooltipContentClassName: en, ...er } = e,
        { name: ei, emojiId: ea, emojiName: es } = P,
        eo = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        el = (0, y.z)(P, null == k ? void 0 : k.guild_id),
        { playSoundboardSound: eu, previewSound: ec, isPlayingSound: ed, isPreviewingSound: ef } = (0, T.Z)(P, null !== (v = null == k ? void 0 : k.id) && void 0 !== v ? v : null),
        { createMultipleConfettiAt: e_ } = i.useContext(p.h),
        ep = i.useRef(null);
    let eh =
            ((w = P.soundId),
            (M = ep.current),
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
        em = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eg = i.useRef(0.01),
        eE = i.useRef(new u.Xp()),
        ev = '1' === P.soundId,
        eI = 'sound-'.concat(P.soundId),
        eb = (0, o.JA)(eI),
        eS = null != ea || null != es,
        eT = !(0, S.Nq)(eo, P, k) && !$,
        ey = Z || (V && !eT),
        eA = i.useRef(null),
        eN = (null !== (I = null === (n = eA.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== I ? I : 0) > (null !== (R = null === (a = eA.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== R ? R : 0),
        eC = null !== (L = h.Wq.useStore().bottomPosition) && void 0 !== L ? L : 0,
        eR = null !== (x = null === (c = ep.current) || void 0 === c ? void 0 : c.getBoundingClientRect().bottom) && void 0 !== x ? x : 0,
        [eO, eD] = i.useState(!1),
        eL = eT && z,
        { enableInlineUpsell: ex } = g.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eL });
    function ew() {
        if ((ev && !em && ((eg.current = Math.min(eg.current + 0.01, 0.1)), Math.random() < eg.current && e_(eh.x, eh.y, void 0, void 0, { sprite: A.vv })), null != Y)) {
            Y();
            return;
        }
        j || eu(W);
    }
    let eM = O({
            sound: P,
            previewSound: ec,
            disabled: eT && !Z,
            refreshEnabled: Q
        }),
        eP = (e) =>
            j || eT || Q
                ? eT && z && ex
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(Q ? C.primaryIconRefresh : C.primaryIcon, C.lockIcon, e, { [C.hasEmoji]: eS })
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(C.primaryIcon, e)
                  }),
        ek = (0, r.jsx)(D, {
            sound: P,
            refreshEnabled: Q,
            disabled: !F && !Z
        }),
        eU = () =>
            ex && eT && z && !q
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: C.buttonOverlayBackground }),
                          eP(C.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: C.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: Q ? C.buttonOverlayActionsRefresh : C.buttonOverlayActions,
                                  children: [ey && eM, ey && ek]
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
                                      ? (0, r.jsx)(m.ZP, {
                                            sound: P,
                                            channel: k,
                                            setTooltipShowing: eD
                                        })
                                      : (0, r.jsxs)(r.Fragment, {
                                            children: [ey && eM, eP(), ey && ek]
                                        })
                          })
                      ]
                  });
    return (
        i.useEffect(() => {
            let e = eE.current;
            return (
                ev &&
                    e.start(1000, () => {
                        eg.current = Math.max(eg.current - 0.01, 0.01);
                    }),
                () => e.stop()
            );
        }, [ev]),
        (0, r.jsxs)('li', {
            ref: t,
            className: s()(C.soundButtonWrapper, U),
            onMouseEnter: H,
            children: [
                (0, r.jsx)(d.Tooltip, {
                    'aria-label': null != ee ? P.name : void 0,
                    text: null != ee ? ee : P.name,
                    tooltipClassName: et,
                    tooltipContentClassName: en,
                    position: eR + 50 > eC ? 'top' : 'bottom',
                    shouldShow: !eO,
                    delay: 500,
                    children: (e) =>
                        (0, r.jsxs)(d.ClickableContainer, {
                            ...er,
                            buttonProps: {
                                ...eb,
                                id: eI,
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
                                    [C.playing]: null != J ? J : ed,
                                    [C.previewing]: ef,
                                    [C.hoverActiveBackground]: j && !Q,
                                    [C.soundButtonInteractive]: F && !Q,
                                    [C.soundButtonInteractiveRefresh]: F && Q,
                                    [C.buttonDisabled]: !F && !Z,
                                    [C.premiumDisabled]: eT && !Z,
                                    [C.premiumDisabledRefresh]: eT && Q,
                                    [C.buttonDisabledSecondaryActionsEnabled]: !F && Z,
                                    [C.focused]: F && B
                                },
                                G
                            ),
                            ...e,
                            onClick: ew,
                            onContextMenu: V && !eT ? el : void 0,
                            onMouseOver: () => {
                                var t;
                                return null != ee || (eN && Q && !0 !== $) ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(Q ? C.soundInfoRefresh : C.soundInfo, { [C.hasEmoji]: eS }),
                                    'aria-hidden': !0,
                                    ref: ep,
                                    children: [
                                        eS &&
                                            (Q
                                                ? (0, r.jsx)('div', {
                                                      className: C.emojiCircle,
                                                      children: (0, r.jsx)(f.Z, {
                                                          emojiId: ea,
                                                          emojiName: es,
                                                          className: C.emoji
                                                      })
                                                  })
                                                : (0, r.jsx)(f.Z, {
                                                      emojiId: ea,
                                                      emojiName: es,
                                                      className: C.emoji
                                                  })),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: F ? void 0 : 'text-muted',
                                            className: s()(Q ? C.soundNameRefresh : C.soundName, { [C.hasEmoji]: eS }),
                                            ref: eA,
                                            children: ei
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
                                                            eM,
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
                                                            ey && ek
                                                        ]
                                                    })
                                                ]
                                            });
                                        case b.Pb.NONE:
                                            return null;
                                        case b.Pb.PLAY:
                                        case b.Pb.SOUNDMOJI:
                                        default:
                                            return eU();
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
