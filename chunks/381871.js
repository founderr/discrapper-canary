n.d(t, {
  Z: function() {
    return w
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n(442837),
  r = n(704215),
  o = n(481060),
  c = n(570140),
  u = n(230711),
  d = n(607070),
  h = n(367907),
  m = n(243778),
  E = n(543241),
  p = n(633302),
  g = n(970731),
  f = n(594174),
  C = n(176354),
  _ = n(823379),
  I = n(74538),
  x = n(401062),
  T = n(696900),
  N = n(456631),
  Z = n(963838),
  S = n(535879),
  v = n(310892),
  A = n(12168),
  M = n(353368),
  R = n(981631),
  j = n(354459),
  L = n(185923),
  O = n(474936),
  P = n(526761),
  y = n(689938),
  b = n(471915);
let D = L.Hz.CHAT,
  U = {
    section: R.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER,
    openPopoutType: "voice_channel_effect_emoji_picker"
  },
  k = [p.ZP.getByName("thumbsup"), p.ZP.getByName("eyes"), p.ZP.getByName("laughing"), p.ZP.getByName("watermelon"), p.ZP.getByName("fork_and_knife"), p.ZP.getByName("yum")].filter(_.lm);

function w(e) {
  var t;
  let {
    channel: n,
    closePopout: p,
    onFocus: _
  } = e, L = (0, a.e7)([d.Z], () => d.Z.useReducedMotion), w = (0, a.e7)([f.default], () => f.default.getCurrentUser()), H = I.ZP.canUseFancyVoiceChannelReactions(w), G = (0, a.e7)([T.Z], () => T.Z.getState().animationType), B = i.useRef(!1), V = (0, E.wC)(n.guild_id), F = (0, s.uniqBy)([...V, ...k], "name").filter(e => !C.ZP.isEmojiFilteredOrLocked({
    emoji: e,
    channel: n,
    intention: D
  })).slice(0, j.e5), z = (null !== (t = N.Z.recentlyUsedEmojis) && void 0 !== t ? t : []).filter(e => !F.slice(0, j.e5 - 1).some(t => t.name === e.name));
  z.length > 0 && F.splice(F.length - 1, 1, z[0]);
  let W = (0, Z.Iu)(G),
    Y = e => {
      c.Z.dispatch({
        type: "VOICE_CHANNEL_EFFECT_RECENT_EMOJI",
        emoji: e
      }), (0, x.Lx)({
        channel: n,
        emoji: e,
        location: x.yX.EMOJI_PICKER,
        animationType: G,
        animationId: W,
        isPremium: H
      })
    },
    K = () => {
      (0, v.openEffectsUpsellModal)({
        analytics: {
          type: O.cd.EMOJI_PICKER_EMOJI_CLICKED,
          object: R.qAy.BUTTON_CTA,
          section: R.jXE.VOICE_CHANNEL_EFFECTS_BAR
        }
      })
    },
    q = e => {
      B.current = e, e && h.ZP.trackWithMetadata(R.rMx.VOICE_CHANNEL_EFFECT_EMOJI_PICKER_EXPANDED, {
        channel_id: X,
        guild_id: Q
      })
    },
    {
      id: X,
      guild_id: Q
    } = n;
  i.useEffect(() => {
    h.ZP.trackWithMetadata(R.rMx.VOICE_CHANNEL_EFFECT_BAR_VIEWED, {
      channel_id: X,
      guild_id: Q
    })
  }, [X, Q]);
  let J = L ? [r.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP] : [],
    $ = G === M.q.PREMIUM;
  return (0, l.jsx)(m.Z, {
    contentTypes: J,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e, s = L && t === r.z.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP;
      return (0, l.jsx)(o.Popout, {
        position: "left",
        "aria-label": y.Z.Messages.VOICE_CHANNEL_EFFECTS_MORE,
        shouldShow: s,
        renderPopout: () => (0, l.jsx)("div", {
          onMouseEnter: _,
          children: (0, l.jsx)(g.ZP, {
            className: b.reducedMotionTooltip,
            header: y.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_TITLE,
            content: y.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_BODY,
            onClick: () => {
              u.Z.open(R.oAB.ACCESSIBILITY, null, {
                scrollPosition: P.rP.REDUCED_MOTION
              }), p()
            },
            markAsDismissed: i,
            buttonCTA: y.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CONFIRM,
            secondaryButtonCTA: y.Z.Messages.VOICE_CHANNEL_EFFECTS_REDUCED_MOTION_TOOLTIP_CANCEL,
            caretPosition: g.DF.RIGHT_CENTER
          })
        }),
        children: () => (0, l.jsx)(A.Z, {
          title: y.Z.Messages.VOICE_CHANNEL_EFFECTS_HOTBAR_TITLE,
          channel: n,
          closePopout: p,
          onSelectEmoji: Y,
          onSelectDisabledEmoji: K,
          onFocus: _,
          onExpandedToggle: q,
          analyticsOverride: U,
          emojiSearchProps: {
            accessory: (0, l.jsx)(S.Z, {
              labelText: y.Z.Messages.VOICE_CHANNEL_EFFECTS_TOGGLE,
              value: $,
              onChange: () => {
                if (H) return h.ZP.trackWithMetadata(R.rMx.VOICE_CHANNEL_EFFECT_FANCY_ANIMATION_TOGGLED, {
                  channel_id: X,
                  guild_id: Q,
                  enabled: !$
                }), c.Z.dispatch({
                  type: "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE"
                })
              },
              onShowUpsell: () => (0, v.openEffectsUpsellModal)({
                analytics: {
                  type: B.current ? O.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED_EXPANDED : O.cd.VOICE_CHANNEL_EFFECTS_TOGGLE_CLICKED,
                  object: R.qAy.VOICE_CHANNEL_EFFECTS_TOGGLE,
                  section: B.current ? R.jXE.VOICE_CHANNEL_EFFECTS_EMOJI_PICKER : R.jXE.VOICE_CHANNEL_EFFECTS_BAR
                }
              })
            })
          },
          recentlyUsedEmojis: z
        })
      })
    }
  })
}