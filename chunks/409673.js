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
    let { sound: U, channel: G, className: B, focused: Z, forceSecondaryActions: F = !1, interactive: V = !0, enableSecondaryActions: j = !1, suppressPlaySound: H, onMouseEnter: Y, onSelectItem: W, analyticsLocations: K, buttonOverlay: z = I.Pb.PLAY, showLockForDisabledSound: q = !0, inNitroLockedSection: Q = !1, refreshEnabled: X = !1, ...J } = e,
        { soundId: $, name: ee, emojiId: et, emojiName: en } = U,
        er = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        ei = (0, b.z)(U, null == G ? void 0 : G.guild_id),
        { playSoundboardSound: ea, previewSound: es, isPlayingSound: eo, isPreviewingSound: el } = (0, T.Z)(U, null !== (D = null == G ? void 0 : G.id) && void 0 !== D ? D : null),
        { createMultipleConfettiAt: eu } = i.useContext(h.h),
        ec = i.useRef(null);
    let ed =
            ((P = U.soundId),
            (k = ec.current),
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
        ef = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        e_ = i.useRef(0.01),
        eh = i.useRef(new u.Xp()),
        ep = '1' === U.soundId,
        em = (0, l.e7)([v.Z], () => v.Z.isFavoriteSound($), [$]),
        eg = 'sound-'.concat(U.soundId),
        eE = (0, o.JA)(eg),
        ev = null != et || null != en,
        eI = !(0, S.Nq)(er, U, G),
        eS = F || (j && !eI),
        eT = i.useRef(null),
        eb = (null !== (L = null === (n = eT.current) || void 0 === n ? void 0 : n.scrollHeight) && void 0 !== L ? L : 0) > (null !== (x = null === (a = eT.current) || void 0 === a ? void 0 : a.offsetHeight) && void 0 !== x ? x : 0),
        ey = null !== (w = p.Wq.useStore().bottomPosition) && void 0 !== w ? w : 0,
        eA = null !== (M = null === (O = ec.current) || void 0 === O ? void 0 : O.getBoundingClientRect().bottom) && void 0 !== M ? M : 0,
        eN = eI && q,
        { enableInlineUpsell: eC } = m.Qs.useExperiment({ location: 'Soundboard Sound Button' }, { autoTrackExposure: eN });
    function eR(e) {
        e.stopPropagation(), e.currentTarget.blur(), em ? (0, E.hs)($) : (0, E.TB)($);
    }
    function eO() {
        return (0, r.jsx)(C, {
            disabled: !V && !F,
            onClick: eR,
            text: A.intl.formatToPlainString(em ? A.t.lQLsjY : A.t.Y5DOs7, {
                emojiName: U.emojiName,
                soundName: U.name
            }),
            refreshEnabled: X,
            children: em
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
    function eD() {
        if ((ep && !ef && ((e_.current = Math.min(e_.current + 0.01, 0.1)), Math.random() < e_.current && eu(ed.x, ed.y, void 0, void 0, { sprite: y.vv })), null != W)) {
            W();
            return;
        }
        H || ea(K);
    }
    let eL = R({
            sound: U,
            previewSound: es,
            disabled: eI && !F,
            refreshEnabled: X
        }),
        ex = (e) =>
            H || eI || X
                ? eI && q && eC
                    ? (0, r.jsx)(d.LockIcon, {
                          size: 'xs',
                          color: 'currentColor',
                          className: s()(X ? N.primaryIconRefresh : N.primaryIcon, N.lockIcon, e, { [N.hasEmoji]: ev })
                      })
                    : null
                : (0, r.jsx)(d.PlayIcon, {
                      size: 'xs',
                      color: 'currentColor',
                      className: s()(N.primaryIcon, e)
                  }),
        ew = () =>
            eC && eI && q && !Q
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)('div', { className: N.buttonOverlayBackground }),
                          ex(N.primaryIconTopLevel),
                          (0, r.jsx)('div', {
                              className: N.buttonOverlay,
                              children: (0, r.jsxs)('div', {
                                  className: X ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                                  children: [eS && eL, eS && eO()]
                              })
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: N.buttonOverlay,
                      children: [
                          !X && (0, r.jsx)('div', { className: s()({ [N.buttonOverlayBackground]: !H }) }),
                          (0, r.jsxs)('div', {
                              className: X ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                              children: [eS && eL, ex(), eS && eO()]
                          })
                      ]
                  });
    return (
        i.useEffect(() => {
            let e = eh.current;
            return (
                ep &&
                    e.start(1000, () => {
                        e_.current = Math.max(e_.current - 0.01, 0.01);
                    }),
                () => e.stop()
            );
        }, [ep]),
        (0, r.jsxs)('li', {
            ref: t,
            className: N.soundButtonWrapper,
            onMouseEnter: Y,
            children: [
                (0, r.jsx)(d.Tooltip, {
                    text: U.name,
                    position: eA + 50 > ey ? 'top' : 'bottom',
                    children: (e) =>
                        (0, r.jsxs)(d.ClickableContainer, {
                            ...J,
                            buttonProps: {
                                ...eE,
                                id: eg,
                                role: 'button'
                            },
                            'aria-label': A.intl.formatToPlainString(A.t.tuMUJy, {
                                emojiName: U.emojiName,
                                soundName: U.name
                            }),
                            className: s()(B, X ? N.soundButtonRefresh : N.soundButton, {
                                [N.playing]: eo,
                                [N.previewing]: el,
                                [N.hoverActiveBackground]: H && !X,
                                [N.soundButtonInteractive]: V && !X,
                                [N.soundButtonInteractiveRefresh]: V && X,
                                [N.buttonDisabled]: !V && !F,
                                [N.premiumDisabled]: eI && !F,
                                [N.premiumDisabledRefresh]: eI && X,
                                [N.buttonDisabledSecondaryActionsEnabled]: !V && F,
                                [N.focused]: V && Z
                            }),
                            ...e,
                            onClick: eD,
                            onContextMenu: j && !eI ? ei : void 0,
                            onMouseOver: () => {
                                var t;
                                return eb && X ? (null === (t = e.onMouseEnter) || void 0 === t ? void 0 : t.call(e)) : null;
                            },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: s()(X ? N.soundInfoRefresh : N.soundInfo, { [N.hasEmoji]: ev }),
                                    'aria-hidden': !0,
                                    ref: ec,
                                    children: [
                                        ev &&
                                            (X
                                                ? (0, r.jsx)('div', {
                                                      className: N.emojiCircle,
                                                      children: (0, r.jsx)(f.Z, {
                                                          emojiId: et,
                                                          emojiName: en,
                                                          className: N.emoji
                                                      })
                                                  })
                                                : (0, r.jsx)(f.Z, {
                                                      emojiId: et,
                                                      emojiName: en,
                                                      className: N.emoji
                                                  })),
                                        (0, r.jsx)(d.Text, {
                                            variant: 'text-xs/medium',
                                            color: V ? void 0 : 'text-muted',
                                            className: s()(X ? N.soundNameRefresh : N.soundName, { [N.hasEmoji]: ev }),
                                            ref: eT,
                                            children: ee
                                        })
                                    ]
                                }),
                                (function () {
                                    switch (z) {
                                        case I.Pb.ADD:
                                            return (0, r.jsxs)('div', {
                                                className: N.addButtonOverlay,
                                                children: [
                                                    (0, r.jsx)('div', { className: N.buttonOverlayBackground }),
                                                    (0, r.jsxs)('div', {
                                                        className: X ? N.buttonOverlayActionsRefresh : N.buttonOverlayActions,
                                                        children: [
                                                            eL,
                                                            X
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
                                                            eS && eO()
                                                        ]
                                                    })
                                                ]
                                            });
                                        case I.Pb.PLAY:
                                        default:
                                            return ew();
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
                                className: X ? N.unavailableTooltipRefresh : N.unavailableTooltip,
                                ...e
                            })
                    })
            ]
        })
    );
});
