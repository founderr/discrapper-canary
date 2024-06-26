"use strict";
n.d(t, {
  K_: function() {
    return C
  },
  hU: function() {
    return g
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(91192),
  l = n(442837),
  u = n(846519),
  _ = n(692547),
  c = n(481060),
  d = n(596454),
  E = n(607070),
  I = n(745510),
  T = n(594174),
  h = n(208049),
  f = n(763296),
  S = n(697426),
  N = n(242291),
  A = n(706667),
  m = n(286654),
  O = n(675654),
  p = n(689938),
  R = n(260240);

function g(e) {
  let {
    disabled: t = !1,
    onClick: n,
    text: r,
    children: s,
    tooltipPosition: a = "top"
  } = e;
  return (0, i.jsx)(c.Tooltip, {
    text: r,
    position: a,
    children: e => (0, i.jsx)(c.Clickable, {
      ...e,
      "aria-label": r,
      className: o()(R.secondaryButton, {
        [R.buttonDisabled]: t
      }),
      onClick: n,
      children: s
    })
  })
}

function C(e) {
  let {
    sound: t,
    previewSound: n,
    disabled: r = !1,
    tooltipPosition: s = "top"
  } = e;
  return (0, i.jsx)(g, {
    tooltipPosition: s,
    disabled: r,
    onClick: function(e) {
      e.stopPropagation(), e.currentTarget.blur(), n()
    },
    text: p.Z.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
      emojiName: t.emojiName,
      soundName: t.name
    }),
    children: (0, i.jsx)(c.VoiceNormalIcon, {
      size: "md",
      color: "currentColor",
      className: R.secondaryIcon
    })
  })
}
t.ZP = r.forwardRef(function(e, t) {
  var n, s, v;
  let {
    sound: L,
    channel: D,
    className: M,
    focused: P,
    forceSecondaryActions: y = !1,
    interactive: U = !0,
    enableSecondaryActions: b = !1,
    suppressPlaySound: G,
    onMouseEnter: w,
    onSelectItem: x,
    analyticsLocations: B,
    buttonOverlay: k = S.Pb.PLAY,
    ...V
  } = e, {
    soundId: Z,
    name: H,
    emojiId: F,
    emojiName: Y
  } = L, j = (0, l.e7)([T.default], () => T.default.getCurrentUser()), W = (0, m.z)(L, null == D ? void 0 : D.guild_id), {
    playSoundboardSound: K,
    previewSound: z,
    isPlayingSound: q
  } = (0, A.Z)(L, null !== (n = null == D ? void 0 : D.id) && void 0 !== n ? n : null), {
    createMultipleConfettiAt: X
  } = r.useContext(I.h), Q = r.useRef(null);
  let J = (s = L.soundId, v = Q.current, r.useMemo(() => {
      if (null == v || "1" !== s) return {
        x: 0,
        y: 0
      };
      let e = v.getBoundingClientRect();
      return {
        x: e.left + e.width / 2,
        y: e.top + e.height / 2
      }
    }, [v, s])),
    $ = (0, l.e7)([E.Z], () => E.Z.useReducedMotion),
    ee = r.useRef(.01),
    et = r.useRef(new u.Xp),
    en = "1" === L.soundId,
    ei = (0, l.e7)([f.Z], () => f.Z.isFavoriteSound(Z), [Z]),
    er = "sound-".concat(L.soundId),
    es = (0, a.JA)(er),
    eo = null != F || null != Y,
    ea = !(0, N.Nq)(j, L, D),
    el = y || b && !ea;

  function eu(e) {
    e.stopPropagation(), e.currentTarget.blur(), ei ? (0, h.hs)(Z) : (0, h.TB)(Z)
  }

  function e_() {
    return (0, i.jsx)(g, {
      disabled: !U && !y,
      onClick: eu,
      text: p.Z.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
        emojiName: L.emojiName,
        soundName: L.name
      }),
      children: ei ? (0, i.jsx)(c.StarIcon, {
        size: "xs",
        className: o()(R.secondaryIcon, R.favoriteIconFavorite),
        color: _.Z.unsafe_rawColors.GOLD.css
      }) : (0, i.jsx)(c.StarOutlineIcon, {
        size: "xs",
        color: "currentColor",
        className: R.secondaryIcon
      })
    })
  }
  let ec = C({
      sound: L,
      previewSound: z,
      disabled: ea
    }),
    ed = () => (0, i.jsxs)("div", {
      className: R.buttonOverlay,
      children: [(0, i.jsx)("div", {
        className: o()({
          [R.buttonOverlayBackground]: !G
        })
      }), (0, i.jsxs)("div", {
        className: R.buttonOverlayActions,
        children: [el && ec, !G && !ea && (0, i.jsx)(c.PlayIcon, {
          size: "xs",
          color: "currentColor",
          className: R.playIcon
        }), el && e_()]
      })]
    });
  return r.useEffect(() => {
    let e = et.current;
    return en && e.start(1e3, () => {
      ee.current = Math.max(ee.current - .01, .01)
    }), () => e.stop()
  }, [en]), (0, i.jsxs)("li", {
    ref: t,
    className: R.soundButtonWrapper,
    onMouseEnter: w,
    children: [(0, i.jsxs)(c.ClickableContainer, {
      ...V,
      buttonProps: {
        ...es,
        id: er,
        role: "button"
      },
      "aria-label": p.Z.Messages.SOUNDBOARD_PLAY_SOUND.format({
        emojiName: L.emojiName,
        soundName: L.name
      }),
      className: o()(M, R.soundButton, {
        [R.playing]: q,
        [R.hoverActiveBackground]: G,
        [R.soundButtonInteractive]: U,
        [R.buttonDisabled]: !U && !y,
        [R.premiumDisabled]: ea && !y,
        [R.buttonDisabledSecondaryActionsEnabled]: !U && y,
        [R.focused]: U && P
      }),
      onClick: function() {
        if (en && !$ && (ee.current = Math.min(ee.current + .01, .1), Math.random() < ee.current && X(J.x, J.y, void 0, void 0, {
            sprite: O.vv
          })), null != x) {
          x();
          return
        }
        G || K(B)
      },
      onContextMenu: b && !ea ? W : void 0,
      children: [(0, i.jsxs)("div", {
        className: R.soundInfo,
        "aria-hidden": !0,
        ref: Q,
        children: [eo && (0, i.jsx)(d.Z, {
          emojiId: F,
          emojiName: Y,
          className: R.emoji
        }), (0, i.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: U ? "header-primary" : "text-muted",
          className: o()(R.soundName, {
            [R.hasEmoji]: eo
          }),
          children: H
        })]
      }), function() {
        switch (k) {
          case S.Pb.ADD:
            return (0, i.jsxs)("div", {
              className: R.addButtonOverlay,
              children: [(0, i.jsx)("div", {
                className: R.buttonOverlayBackground
              }), (0, i.jsxs)("div", {
                className: R.buttonOverlayActions,
                children: [ec, (0, i.jsxs)("div", {
                  className: R.addButton,
                  children: [(0, i.jsx)(c.PlusSmallIcon, {
                    size: "md",
                    color: "currentColor",
                    className: R.plusSign
                  }), (0, i.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "header-primary",
                    children: p.Z.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                  })]
                }), el && e_()]
              })]
            });
          case S.Pb.PLAY:
          default:
            return ed()
        }
      }()]
    }), !L.available && (0, i.jsx)(c.Tooltip, {
      text: p.Z.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
      children: e => (0, i.jsx)("div", {
        className: R.unavailableTooltip,
        ...e
      })
    })]
  })
})