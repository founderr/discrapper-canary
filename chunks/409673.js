n.d(t, {
    K_: function () {
        return R;
    },
    hU: function () {
        return C;
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
    m = n(631771),
    g = n(594174),
    E = n(208049),
    v = n(763296),
    I = n(697426),
    S = n(242291),
    T = n(706667),
    b = n(286654),
    y = n(675654),
    A = n(388032),
    N = n(423298);
function C(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: o = 'top', refreshEnabled: l = !1 } = e;
    return (0, r.jsx)(d.Tooltip, {
        text: i,
        position: o,
        children: (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                'aria-label': i,
                className: s()(l ? N.secondaryButtonRefresh : N.secondaryButton, { [N.buttonDisabled]: t }),
                onClick: n,
                children: a
            })
    });
}
function R(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top', refreshEnabled: s = !1 } = e;
    return (0, r.jsx)(C, {
        tooltipPosition: a,
        disabled: i,
        onClick: function (e) {
            e.stopPropagation(), e.currentTarget.blur(), n();
        },
        text: A.intl.formatToPlainString(A.t['/8fYOz'], {
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: s,
        children: (0, r.jsx)(d.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: N.secondaryIcon
        })
    });
}
t.ZP = i.forwardRef(function (e, t) {
    var n, a, O, D, L, x, w, M, P, k;
    let { sound: U, channel: G, containerClassName: B, className: Z, focused: F, forceSecondaryActions: V = !1, interactive: j = !0, enableSecondaryActions: H = !1, suppressPlaySound: Y, onMouseEnter: W, onSelectItem: K, analyticsLocations: z, buttonOverlay: q = I.Pb.PLAY, showLockForDisabledSound: Q = !0, inNitroLockedSection: X = !1, refreshEnabled: J = !1, isAnimated: $ = !0, isPlayingSoundOverride: ee, isSoundmoji: et, ...en } = e,
        { soundId: er, name: ei, emojiId: ea, emojiName: es } = U,
        eo = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        el = (0, b.z)(U, null == G ? void 0 : G.guild_id),
        { playSoundboardSound: eu, previewSound: ec, isPlayingSound: ed, isPreviewingSound: ef } = (0, T.Z)(U, null !== (D = null == G ? void 0 : G.id) && void 0 !== D ? D : null),
        { createMultipleConfettiAt: e_ } = i.useContext(h.h),
        eh = i.useRef(null);
    let ep =
            ((P = U.soundId),
            (k = eh.current),
            i.useMemo(() => {
                if (null == k || '1' !== P)
                    return {
                        x: 0,
                        y: 0
                    };
                let e = k.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                };
            }, [k, P])),
        em = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        eg = i.useRef(0.01),
        eE = i.useRef(new u.Xp()),
        ev = '1' === U.soundId,
        eI = (0, l.e7)([v.Z], () => v.Z.isFavoriteSound(er), [er]),
        eS = 'sound-'.concat(U.soundId),
        eT = (0, o.JA)(eS),
        eb = null != ea || null != es,
        ey = !(0, S.Nq)(eo, U, G) && !et,
        eA = V || (H && !ey),
        eN = i.useRef(null),
        eC = (null !== (L = null === (n = eN.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== L ? L : 0) > (null !== (x = null === (a = eN.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== x ? x : 0),
        eR = null !== (w = p.Wq.useStore().bottomPosition) && void 0 !== w ? w : 0,
        eO = null !== (M = null === (O = eh.current) || void 0 === O ? void 0 : O.getBoundingClientRect().bottom) && void 0 !== M ? M : 0,
        eD = ey && Q,
        { enableInlineUpsell: eL } = m.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eD });
    function ex(e) {
        e.stopPropagation(), e.currentTarget.blur(), eI ? (0, E.hs)(er) : (0, E.TB)(er);
    }
    function ew() {
        return (0, r.jsx)(C, {
            disabled: !j && !V,
            onClick: ex,
            text: A.intl.formatToPlainString(eI ? A.t.lQLsjY : A.t.Y5DOs7, {
                emojiName: U.emojiName,
                soundName: U.name
            }),
            refreshEnabled: J,
            children: eI
                ? (0, r.jsx)(d.StarIcon, {
                      size: 'xs',
                      className: s()(N.secondaryIcon, N.favoriteIconFavorite),
                      color: c.Z.unsafe_rawColors.GOLD.css
                  })
                : (0, r.jsx)(d.StarOutlineIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: N.secondaryIcon
                  })
        });
    }
    function eM() {
        if ((ev && !em && ((eg.current = Math.min(eg.current + 0.01, 0.1)), Math.random() < eg.current && e_(ep.x, ep.y, void 0, void 0, { sprite: y.vv })), null != K)) {
            K();
            return;
        }
        Y || eu(z);
    }
    let eP = R({
            sound: U,
            previewSound: ec,
            disabled: ey && !V,
            refreshEnabled: J
        }),
        ek = (e) =>
            Y || ey || J
                ? ey && Q && eL
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(J ? N.primaryIconRefresh : N.primaryIcon, N.lockIcon, e, { [N.hasEmoji]: eb })
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(N.primaryIcon, e)
                  }),
        eU = () =>
            eL && ey && Q && !X
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: N.buttonOverlayBackground }),
                          ek(N.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: N.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: J ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                                  children: [eA && eP, eA && ew()]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: N.buttonOverlay,
                      children: [
                          !J && (0, r.jsx)('div', { className: s()({ [N.buttonOverlayBackground]: !Y }) }),
                          (0, r.jsxs)('div', {
                              className: J ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                              children: [eA && eP, ek(), eA && ew()]
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
            className: s()(N.soundButtonWrapper, B),
            onMouseEnter: W,
            children: [
                (0, r.jsx)(d.Tooltip, {
                    text: U.name,
                    position: eO + 50 > eR ? 'top' : 'bottom',
                    children: (e) =>
                        (0, r.jsxs)(d.ClickableContainer, {
                            ...en,
                            buttonProps: {
                                ...eT,
                                id: eS,
                                role: 'button'
                            },
                            'aria-label': A.intl.formatToPlainString(A.t.tuMUJy, {
                                emojiName: U.emojiName,
                                soundName: U.name
                            }),
                            className: s()(
                                J ? N.soundButtonRefresh : N.soundButton,
                                {
                                    [N.animated]: $,
                                    [N.playing]: null != ee ? ee : ed,
                                    [N.previewing]: ef,
                                    [N.hoverActiveBackground]: Y && !J,
                                    [N.soundButtonInteractive]: j && !J,
                                    [N.soundButtonInteractiveRefresh]: j && J,
                                    [N.buttonDisabled]: !j && !V,
                                    [N.premiumDisabled]: ey && !V,
                                    [N.premiumDisabledRefresh]: ey && J,
                                    [N.buttonDisabledSecondaryActionsEnabled]: !j && V,
                                    [N.focused]: j && F
                                },
                                Z
                            ),
                            ...e,
                            onClick: eM,
                            onContextMenu: H && !ey ? el : void 0,
                            onMouseOver: () => {
                                var t;
                                return eC && J ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(J ? N.soundInfoRefresh : N.soundInfo, { [N.hasEmoji]: eb }),
                                    'aria-hidden': !0,
                                    ref: eh,
                                    children: [
                                        eb &&
                                            (J
                                                ? (0, r.jsx)('div', {
                                                      className: N.emojiCircle,
                                                      children: (0, r.jsx)(f.Z, {
                                                          emojiId: ea,
                                                          emojiName: es,
                                                          className: N.emoji
                                                      })
                                                  })
                                                : (0, r.jsx)(f.Z, {
                                                      emojiId: ea,
                                                      emojiName: es,
                                                      className: N.emoji
                                                  })),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: j ? void 0 : 'text-muted',
                                            className: s()(J ? N.soundNameRefresh : N.soundName, { [N.hasEmoji]: eb }),
                                            ref: eN,
                                            children: ei
                                        })
                                    ]
                                }),
                                (function () {
                                    switch (q) {
                                        case I.Pb.ADD:
                                            return (0, r.jsxs)('div', {
                                                className: N.addButtonOverlay,
                                                children: [
                                                    (0, r.jsx)('div', { className: N.buttonOverlayBackground }),
                                                    (0, r.jsxs)('div', {
                                                        className: J ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                                                        children: [
                                                            eP,
                                                            J
                                                                ? (0, r.jsx)('div', {
                                                                      className: N.primaryIconRefresh,
                                                                      children: (0, r.jsx)(d.PlusLargeIcon, {
                                                                          size: 'md',
                                                                          color: 'currentColor',
                                                                          className: N.plusSign
                                                                      })
                                                                  })
                                                                : (0, r.jsxs)('div', {
                                                                      className: N.addButton,
                                                                      children: [
                                                                          (0, r.jsx)(d.PlusSmallIcon, {
                                                                              size: 'md',
                                                                              color: 'currentColor',
                                                                              className: N.plusSign
                                                                          }),
                                                                          (0, r.jsx)(d.Text, {
                                                                              variant: 'text-xs/medium',
                                                                              color: 'header-primary',
                                                                              children: A.intl.string(A.t.QqqXLS)
                                                                          })
                                                                      ]
                                                                  }),
                                                            eA && ew()
                                                        ]
                                                    })
                                                ]
                                            });
                                        case I.Pb.PLAY:
                                        default:
                                            return eU();
                                    }
                                })()
                            ]
                        })
                }),
                !U.available &&
                    (0, r.jsx)(d.Tooltip, {
                        text: A.intl.string(A.t.MDOXJS),
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: J ? N.unavailableTooltipRefresh : N.unavailableTooltip,
                                ...e
                            })
                    })
            ]
        })
    );
});
