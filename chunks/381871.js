n.d(t, {
    Z: function () {
        return w;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(392711),
    l = n(442837),
    r = n(704215),
    o = n(481060),
    c = n(570140),
    u = n(230711),
    d = n(607070),
    h = n(367907),
    p = n(243778),
    m = n(543241),
    _ = n(633302),
    f = n(970731),
    E = n(594174),
    g = n(176354),
    C = n(823379),
    I = n(74538),
    T = n(401062),
    x = n(696900),
    v = n(456631),
    S = n(963838),
    N = n(535879),
    A = n(310892),
    Z = n(12168),
    M = n(353368),
    b = n(981631),
    R = n(354459),
    L = n(185923),
    j = n(474936),
    P = n(526761),
    O = n(689938),
    y = n(742831);
let D = L.Hz.CHAT,
    U = {
        section: b.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
        openPopoutType: 'voice_channel_effect_emoji_picker'
    },
    k = [_.ZP.getByName('thumbsup'), _.ZP.getByName('eyes'), _.ZP.getByName('laughing'), _.ZP.getByName('watermelon'), _.ZP.getByName('fork_and_knife'), _.ZP.getByName('yum')].filter(C.lm);
function w(e) {
    var t;
    let { channel: n, closePopout: _, onFocus: C } = e,
        L = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        w = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
        B = I.ZP.canUseFancyVoiceChannelReactions(w),
        H = (0, l.e7)([x.Z], () => x.Z.getState().animationType),
        G = s.useRef(!1),
        V = (0, m.wC)(n.guild_id),
        F = (0, a.uniqBy)([...V, ...k], 'name')
            .filter(
                (e) =>
                    !g.ZP.isEmojiFilteredOrLocked({
                        emoji: e,
                        channel: n,
                        intention: D
                    })
            )
            .slice(0, R.e5),
        W = (null !== (t = v.Z.recentlyUsedEmojis) && void 0 !== t ? t : []).filter((e) => !F.slice(0, R.e5 - 1).some((t) => t.name === e.name));
    W.length > 0 && F.splice(F.length - 1, 1, W[0]);
    let z = (0, S.Iu)(H),
        Y = (e) => {
            c.Z.dispatch({
                type: 'VOICE_CHANNEL_EFFECT_RECENT_EMOJI',
                emoji: e
            }),
                (0, T.Lx)({
                    channel: n,
                    emoji: e,
                    location: T.yX.EMOJI_PICKER,
                    animationType: H,
                    animationId: z,
                    isPremium: B
                });
        },
        K = () => {
            (0, A.openEffectsUpsellModal)({
                analytics: {
                    type: j.cd.EMOJI_PICKER_EMOJI_CLICKED,
                    object: b.qAy.BUTTON_CTA,
                    section: b.jXE.VOICE_CHANNEL_EFFECTS_BAR
                }
            });
        },
        q = (e) => {
            (G.current = e),
                e &&
                    h.ZP.trackWithMetadata(b.rMx.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
                        channel_id: X,
                        guild_id: J
                    });
        },
        { id: X, guild_id: J } = n;
    s.useEffect(() => {
        h.ZP.trackWithMetadata(b.rMx.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
            channel_id: X,
            guild_id: J
        });
    }, [X, J]);
    let Q = L ? [r.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
        $ = H === M.q.PREMIUM;
    return (0, i.jsx)(p.ZP, {
        contentTypes: Q,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: s } = e,
                a = L && t === r.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
            return (0, i.jsx)(o.Popout, {
                position: 'left',
                'aria-label': O.Z.Messages.VOICE_CHANNEL_EFFECTS_MORE,
                shouldShow: a,
                renderPopout: () =>
                    (0, i.jsx)('div', {
                        onMouseEnter: C,
                        children: (0, i.jsx)(f.ZP, {
                            className: y.reducedMotionTooltip,
                            header: O.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_TITLE,
                            content: O.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_BODY,
                            onClick: () => {
                                u.Z.open(b.oAB.ACCESSIBILITY, null, { scrollPosition: P.rP.REDUCED_MOTION }), _();
                            },
                            markAsDismissed: s,
                            buttonCTA: O.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CONFIRM,
                            secondaryButtonCTA: O.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CANCEL,
                            caretPosition: f.DF.RIGHT_CENTER
                        })
                    }),
                children: () =>
                    (0, i.jsx)(Z.Z, {
                        title: O.Z.Messages.VOICE_CHANNEL_EFFECTS_HOTBAR_TITLE,
                        channel: n,
                        closePopout: _,
                        onSelectEmoji: Y,
                        onSelectDisabledEmoji: K,
                        onFocus: C,
                        onExpandedToggle: q,
                        analyticsOverride: U,
                        emojiSearchProps: {
                            accessory: (0, i.jsx)(N.Z, {
                                labelText: O.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                value: $,
                                onChange: () => {
                                    if (B)
                                        return (
                                            h.ZP.trackWithMetadata(b.rMx.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                                                channel_id: X,
                                                guild_id: J,
                                                enabled: !$
                                            }),
                                            c.Z.dispatch({ type: 'VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE' })
                                        );
                                },
                                onShowUpsell: () =>
                                    (0, A.openEffectsUpsellModal)({
                                        analytics: {
                                            type: G.current ? j.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : j.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                                            object: b.qAy.VOICE_CHANNEL_EFFECTS_TOGGLE,
                                            section: G.current ? b.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : b.jXE.VOICE_CHANNEL_EFFECTS_BAR
                                        }
                                    })
                            })
                        },
                        recentlyUsedEmojis: W
                    })
            });
        }
    });
}
