n.d(t, {
    K_: function () {
        return C;
    },
    hU: function () {
        return R;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    l = n(442837),
    u = n(846519),
    c = n(692547),
    d = n(481060),
    _ = n(596454),
    E = n(607070),
    f = n(745510),
    h = n(631771),
    p = n(594174),
    I = n(208049),
    m = n(763296),
    T = n(697426),
    g = n(242291),
    S = n(706667),
    A = n(286654),
    N = n(675654),
    O = n(689938),
    v = n(573035);
function R(e) {
    let { disabled: t = !1, onClick: n, text: i, children: a, tooltipPosition: o = 'top' } = e;
    return (0, r.jsx)(d.Tooltip, {
        text: i,
        position: o,
        children: (e) =>
            (0, r.jsx)(d.Clickable, {
                ...e,
                'aria-label': i,
                className: s()(v.secondaryButton, { [v.buttonDisabled]: t }),
                onClick: n,
                children: a
            })
    });
}
function C(e) {
    let { sound: t, previewSound: n, disabled: i = !1, tooltipPosition: a = 'top' } = e;
    return (0, r.jsx)(R, {
        tooltipPosition: a,
        disabled: i,
        onClick: function (e) {
            e.stopPropagation(), e.currentTarget.blur(), n();
        },
        text: O.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
            emojiName: t.emojiName,
            soundName: t.name
        }),
        children: (0, r.jsx)(d.VoiceNormalIcon, {
            size: 'md',
            color: 'currentColor',
            className: v.secondaryIcon
        })
    });
}
t.ZP = i.forwardRef(function (e, t) {
    var n, a, y;
    let { sound: D, channel: L, className: b, focused: M, forceSecondaryActions: P = !1, interactive: U = !0, enableSecondaryActions: w = !1, suppressPlaySound: x, onMouseEnter: G, onSelectItem: k, analyticsLocations: B, buttonOverlay: F = T.Pb.PLAY, showLockForDisabledSound: V = !0, inNitroLockedSection: H = !1, ...Z } = e,
        { soundId: Y, name: j, emojiId: W, emojiName: K } = D,
        z = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
        q = (0, A.z)(D, null == L ? void 0 : L.guild_id),
        { playSoundboardSound: Q, previewSound: X, isPlayingSound: $ } = (0, S.Z)(D, null !== (n = null == L ? void 0 : L.id) && void 0 !== n ? n : null),
        { createMultipleConfettiAt: J } = i.useContext(f.h),
        ee = i.useRef(null);
    let et =
            ((a = D.soundId),
            (y = ee.current),
            i.useMemo(() => {
                if (null == y || '1' !== a)
                    return {
                        x: 0,
                        y: 0
                    };
                let e = y.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                };
            }, [y, a])),
        en = (0, l.e7)([E.Z], () => E.Z.useReducedMotion),
        er = i.useRef(0.01),
        ei = i.useRef(new u.Xp()),
        ea = '1' === D.soundId,
        es = (0, l.e7)([m.Z], () => m.Z.isFavoriteSound(Y), [Y]),
        eo = 'sound-'.concat(D.soundId),
        el = (0, o.JA)(eo),
        eu = null != W || null != K,
        ec = !(0, g.Nq)(z, D, L),
        ed = P || (w && !ec),
        e_ = ec && V,
        { enableInlineUpsell: eE } = h.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: e_ });
    function ef(e) {
        e.stopPropagation(), e.currentTarget.blur(), es ? (0, I.hs)(Y) : (0, I.TB)(Y);
    }
    function eh() {
        return (0, r.jsx)(R, {
            disabled: !U && !P,
            onClick: ef,
            text: O.Z.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                emojiName: D.emojiName,
                soundName: D.name
            }),
            children: es
                ? (0, r.jsx)(d.StarIcon, {
                      size: 'xs',
                      className: s()(v.secondaryIcon, v.favoriteIconFavorite),
                      color: c.Z.unsafe_rawColors.GOLD.css
                  })
                : (0, r.jsx)(d.StarOutlineIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: v.secondaryIcon
                  })
        });
    }
    let ep = C({
            sound: D,
            previewSound: X,
            disabled: ec && !P
        }),
        eI = (e) =>
            x || ec
                ? ec && V && eE
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(v.primaryIcon, e, v.lockIcon)
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(v.primaryIcon, e)
                  }),
        em = () =>
            eE && ec && V && !H
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: v.buttonOverlayBackground }),
                          eI(v.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: v.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: v.buttonOverlayActions,
                                  children: [ed && ep, ed && eh()]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: v.buttonOverlay,
                      children: [
                          (0, r.jsx)('div', { className: s()({ [v.buttonOverlayBackground]: !x }) }),
                          (0, r.jsxs)('div', {
                              className: v.buttonOverlayActions,
                              children: [ed && ep, eI(), ed && eh()]
                          })
                      ]
                  });
    return (
        i.useEffect(() => {
            let e = ei.current;
            return (
                ea &&
                    e.start(1000, () => {
                        er.current = Math.max(er.current - 0.01, 0.01);
                    }),
                () => e.stop()
            );
        }, [ea]),
        (0, r.jsxs)('li', {
            ref: t,
            className: v.soundButtonWrapper,
            onMouseEnter: G,
            children: [
                (0, r.jsxs)(d.ClickableContainer, {
                    ...Z,
                    buttonProps: {
                        ...el,
                        id: eo,
                        role: 'button'
                    },
                    'aria-label': O.Z.Messages.SOUNDBOARD_PLAY_SOUND.format({
                        emojiName: D.emojiName,
                        soundName: D.name
                    }),
                    className: s()(b, v.soundButton, {
                        [v.playing]: $,
                        [v.hoverActiveBackground]: x,
                        [v.soundButtonInteractive]: U,
                        [v.buttonDisabled]: !U && !P,
                        [v.premiumDisabled]: ec && !P,
                        [v.buttonDisabledSecondaryActionsEnabled]: !U && P,
                        [v.focused]: U && M
                    }),
                    onClick: function () {
                        if ((ea && !en && ((er.current = Math.min(er.current + 0.01, 0.1)), Math.random() < er.current && J(et.x, et.y, void 0, void 0, { sprite: N.vv })), null != k)) {
                            k();
                            return;
                        }
                        x || Q(B);
                    },
                    onContextMenu: w && !ec ? q : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: v.soundInfo,
                            'aria-hidden': !0,
                            ref: ee,
                            children: [
                                eu &&
                                    (0, r.jsx)(_.Z, {
                                        emojiId: W,
                                        emojiName: K,
                                        className: v.emoji
                                    }),
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-xs/medium',
                                    color: U ? 'header-primary' : 'text-muted',
                                    className: s()(v.soundName, { [v.hasEmoji]: eu }),
                                    children: j
                                })
                            ]
                        }),
                        (function () {
                            switch (F) {
                                case T.Pb.ADD:
                                    return (0, r.jsxs)('div', {
                                        className: v.addButtonOverlay,
                                        children: [
                                            (0, r.jsx)('div', { className: v.buttonOverlayBackground }),
                                            (0, r.jsxs)('div', {
                                                className: v.buttonOverlayActions,
                                                children: [
                                                    ep,
                                                    (0, r.jsxs)('div', {
                                                        className: v.addButton,
                                                        children: [
                                                            (0, r.jsx)(d.PlusSmallIcon, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: v.plusSign
                                                            }),
                                                            (0, r.jsx)(d.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'header-primary',
                                                                children: O.Z.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                                            })
                                                        ]
                                                    }),
                                                    ed && eh()
                                                ]
                                            })
                                        ]
                                    });
                                case T.Pb.PLAY:
                                default:
                                    return em();
                            }
                        })()
                    ]
                }),
                !D.available &&
                    (0, r.jsx)(d.Tooltip, {
                        text: O.Z.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                        children: (e) =>
                            (0, r.jsx)('div', {
                                className: v.unavailableTooltip,
                                ...e
                            })
                    })
            ]
        })
    );
});
