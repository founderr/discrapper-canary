n.d(t, {
    K_: function () {
        return P;
    },
    hU: function () {
        return M;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(91192),
    l = n(442837),
    u = n(846519),
    c = n(692547),
    d = n(481060),
    _ = n(596454),
    E = n(607070),
    f = n(745510),
    h = n(806966),
    p = n(631771),
    m = n(594174),
    I = n(208049),
    T = n(763296),
    g = n(697426),
    S = n(242291),
    A = n(706667),
    v = n(286654),
    N = n(675654),
    O = n(689938),
    R = n(423298);
let C = '1',
    y = 0.01,
    b = 0.1,
    L = 0.01,
    D = 1000;
function M(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: s = 'top', refreshEnabled: l = !1 } = e;
    return (0, r.jsx)(d.Tooltip, {
        text: i,
        position: s,
        children: (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                'aria-label': i,
                className: o()(l ? R.secondaryButtonRefresh : R.secondaryButton, { [R.buttonDisabled]: t }),
                onClick: n,
                children: a
            })
    });
}
function P(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top', refreshEnabled: o = !1 } = e;
    function s(e) {
        e.stopPropagation(), e.currentTarget.blur(), n();
    }
    return (0, r.jsx)(M, {
        tooltipPosition: a,
        disabled: i,
        onClick: s,
        text: O.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
            emojiName: t.emojiName,
            soundName: t.name
        }),
        refreshEnabled: o,
        children: (0, r.jsx)(d.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: R.secondaryIcon
        })
    });
}
function U(e, t) {
    return i.useMemo(() => {
        if (null == t || e !== C)
            return {
                x: 0,
                y: 0
            };
        let n = t.getBoundingClientRect();
        return {
            x: n.left + n.width / 2,
            y: n.top + n.height / 2
        };
    }, [t, e]);
}
t.ZP = i.forwardRef(function (e, t) {
    var n, a, w, x, G, k, B, F;
    let { sound: Z, channel: V, className: H, focused: Y, forceSecondaryActions: j = !1, interactive: W = !0, enableSecondaryActions: K = !1, suppressPlaySound: z, onMouseEnter: q, onSelectItem: Q, analyticsLocations: X, buttonOverlay: $ = g.Pb.PLAY, showLockForDisabledSound: J = !0, inNitroLockedSection: ee = !1, refreshEnabled: et = !1, ...en } = e,
        { soundId: er, name: ei, emojiId: ea, emojiName: eo } = Z,
        es = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        el = (0, v.z)(Z, null == V ? void 0 : V.guild_id),
        { playSoundboardSound: eu, previewSound: ec, isPlayingSound: ed, isPreviewingSound: e_ } = (0, A.Z)(Z, null !== (x = null == V ? void 0 : V.id) && void 0 !== x ? x : null),
        { createMultipleConfettiAt: eE } = i.useContext(f.h),
        ef = i.useRef(null),
        eh = U(Z.soundId, ef.current),
        ep = (0, l.e7)([E.Z], () => E.Z.useReducedMotion),
        em = i.useRef(y),
        eI = i.useRef(new u.Xp()),
        eT = Z.soundId === C,
        eg = (0, l.e7)([T.Z], () => T.Z.isFavoriteSound(er), [er]),
        eS = 'sound-'.concat(Z.soundId),
        eA = (0, s.JA)(eS),
        ev = null != ea || null != eo,
        eN = !(0, S.Nq)(es, Z, V),
        eO = j || (K && !eN),
        eR = i.useRef(null),
        eC = (null !== (G = null === (n = eR.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== G ? G : 0) > (null !== (k = null === (a = eR.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== k ? k : 0),
        ey = null !== (B = h.Wq.useStore().bottomPosition) && void 0 !== B ? B : 0,
        eb = (null !== (F = null === (w = ef.current) || void 0 === w ? void 0 : w.getBoundingClientRect().bottom) && void 0 !== F ? F : 0) + 50 > ey ? 'top' : 'bottom',
        eL = eN && J,
        { enableInlineUpsell: eD } = p.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eL });
    function eM(e) {
        e.stopPropagation(), e.currentTarget.blur(), eg ? (0, I.hs)(er) : (0, I.TB)(er);
    }
    function eP() {
        return (0, r.jsx)(M, {
            disabled: !W && !j,
            onClick: eM,
            text: (eg ? O.Z.Messages.SOUNDBOARD_SOUND_UNFAVORITE_SOUND : O.Z.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND).format({
                emojiName: Z.emojiName,
                soundName: Z.name
            }),
            refreshEnabled: et,
            children: eg
                ? (0, r.jsx)(d.StarIcon, {
                      size: 'xs',
                      className: o()(R.secondaryIcon, R.favoriteIconFavorite),
                      color: c.Z.unsafe_rawColors.GOLD.css
                  })
                : (0, r.jsx)(d.StarOutlineIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: R.secondaryIcon
                  })
        });
    }
    function eU() {
        !z && eu(X);
    }
    function ew() {
        if ((eT && !ep && ((em.current = Math.min(em.current + L, b)), Math.random() < em.current && eE(eh.x, eh.y, void 0, void 0, { sprite: N.vv })), null != Q)) {
            Q();
            return;
        }
        eU();
    }
    let ex = P({
            sound: Z,
            previewSound: ec,
            disabled: eN && !j,
            refreshEnabled: et
        }),
        eG = (e) =>
            z || eN || et
                ? eN && J && eD
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: o()(et ? R.primaryIconRefresh : R.primaryIcon, R.lockIcon, e, { [R.hasEmoji]: ev })
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: o()(R.primaryIcon, e)
                  }),
        ek = () =>
            eD && eN && J && !ee
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: R.buttonOverlayBackground }),
                          eG(R.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: R.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: et ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                                  children: [eO && ex, eO && eP()]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: R.buttonOverlay,
                      children: [
                          !et && (0, r.jsx)('div', { className: o()({ [R.buttonOverlayBackground]: !z }) }),
                          (0, r.jsxs)('div', {
                              className: et ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                              children: [eO && ex, eG(), eO && eP()]
                          })
                      ]
                  });
    function eB() {
        switch ($) {
            case g.Pb.ADD:
                return (0, r.jsxs)('div', {
                    className: R.addButtonOverlay,
                    children: [
                        (0, r.jsx)('div', { className: R.buttonOverlayBackground }),
                        (0, r.jsxs)('div', {
                            className: et ? R.buttonOverlayActionsRefresh : R.buttonOverlayActions,
                            children: [
                                ex,
                                et
                                    ? (0, r.jsx)('div', {
                                          className: R.primaryIconRefresh,
                                          children: (0, r.jsx)(d.PlusLargeIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: R.plusSign
                                          })
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: R.addButton,
                                          children: [
                                              (0, r.jsx)(d.PlusSmallIcon, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: R.plusSign
                                              }),
                                              (0, r.jsx)(d.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-primary',
                                                  children: O.Z.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                              })
                                          ]
                                      }),
                                eO && eP()
                            ]
                        })
                    ]
                });
            case g.Pb.PLAY:
            default:
                return ek();
        }
    }
    return (
        i.useEffect(() => {
            let e = eI.current;
            return (
                eT &&
                    e.start(D, () => {
                        em.current = Math.max(em.current - L, y);
                    }),
                () => e.stop()
            );
        }, [eT]),
        (0, r.jsxs)('li', {
            ref: t,
            className: R.soundButtonWrapper,
            onMouseEnter: q,
            children: [
                (0, r.jsx)(d.Tooltip, {
                    text: Z.name,
                    position: eb,
                    children: (e) =>
                        (0, r.jsxs)(d.ClickableContainer, {
                            ...en,
                            buttonProps: {
                                ...eA,
                                id: eS,
                                role: 'button'
                            },
                            'aria-label': O.Z.Messages.SOUNDBOARD_PLAY_SOUND.format({
                                emojiName: Z.emojiName,
                                soundName: Z.name
                            }),
                            className: o()(H, et ? R.soundButtonRefresh : R.soundButton, {
                                [R.playing]: ed,
                                [R.previewing]: e_,
                                [R.hoverActiveBackground]: z && !et,
                                [R.soundButtonInteractive]: W && !et,
                                [R.soundButtonInteractiveRefresh]: W && et,
                                [R.buttonDisabled]: !W && !j,
                                [R.premiumDisabled]: eN && !j,
                                [R.premiumDisabledRefresh]: eN && et,
                                [R.buttonDisabledSecondaryActionsEnabled]: !W && j,
                                [R.focused]: W && Y
                            }),
                            ...e,
                            onClick: ew,
                            onContextMenu: K && !eN ? el : void 0,
                            onMouseOver: () => {
                                var t;
                                return eC && et ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: o()(et ? R.soundInfoRefresh : R.soundInfo, { [R.hasEmoji]: ev }),
                                    'aria-hidden': !0,
                                    ref: ef,
                                    children: [
                                        ev &&
                                            (et
                                                ? (0, r.jsx)('div', {
                                                      className: R.emojiCircle,
                                                      children: (0, r.jsx)(_.Z, {
                                                          emojiId: ea,
                                                          emojiName: eo,
                                                          className: R.emoji
                                                      })
                                                  })
                                                : (0, r.jsx)(_.Z, {
                                                      emojiId: ea,
                                                      emojiName: eo,
                                                      className: R.emoji
                                                  })),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: W ? void 0 : 'text-muted',
                                            className: o()(et ? R.soundNameRefresh : R.soundName, { [R.hasEmoji]: ev }),
                                            ref: eR,
                                            children: ei
                                        })
                                    ]
                                }),
                                eB()
                            ]
                        })
                }),
                !Z.available &&
                    (0, r.jsx)(d.Tooltip, {
                        text: O.Z.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: et ? R.unavailableTooltipRefresh : R.unavailableTooltip,
                                ...e
                            })
                    })
            ]
        })
    );
});
