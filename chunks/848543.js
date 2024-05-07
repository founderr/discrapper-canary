"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("120356"),
  l = n.n(i),
  r = n("399606"),
  o = n("524437"),
  u = n("923462"),
  d = n("481060"),
  c = n("239091"),
  f = n("100527"),
  E = n("906732"),
  h = n("706140"),
  _ = n("294629"),
  C = n("131951"),
  m = n("459273"),
  S = n("242291"),
  p = n("792165"),
  g = n("603074"),
  I = n("981631"),
  T = n("921944"),
  A = n("689938"),
  N = n("594078");

function v(e) {
  let {
    channel: t,
    iconClassName: i,
    className: v,
    innerClassName: R,
    ...O
  } = e, {
    mute: L,
    suppress: M
  } = (0, _.default)(t), y = (0, r.useStateFromStores)([C.default], () => C.default.isDeaf()), P = L || M || y, [x, D] = s.useState(!1), b = t.getGuildId(), U = (0, S.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: P
  }), [j, G] = (0, h.useGetDismissibleContent)(U), {
    analyticsLocations: k
  } = (0, E.default)(f.default.SOUNDBOARD_BUTTON);

  function w(e) {
    null != b && (0, c.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, "338991"));
      return t => (0, a.jsx)(e, {
        guildId: b,
        ...t
      })
    })
  }
  let {
    Component: F,
    play: B,
    events: {
      onMouseEnter: H,
      onMouseLeave: V
    }
  } = (0, u.useSoundboardLottie)(), Y = e => (0, a.jsx)(d.Popout, {
    shouldShow: x,
    position: "top",
    onRequestClose: () => D(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(g.default, {
        guildId: b,
        channel: t,
        onClose: n,
        gridNotice: j === o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(p.CustomCallSoundUpsell, {
          onClose: n,
          markAsDismissed: G
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, a.jsx)("div", {
      children: (0, a.jsx)(d.Button, {
        ...e,
        ...t,
        className: l()(v, {
          [N.buttonActive]: x,
          [N.disabled]: P
        }),
        wrapperClassName: v,
        innerClassName: R,
        disabled: P,
        onClick: () => {
          var t, n;
          null == n || n(), null != j && j !== o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && G(T.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), D(!x), B()
        },
        onMouseEnter: t => {
          var n, a;
          null === (n = O.onMouseEnter) || void 0 === n || n.call(O, t), null == e || null === (a = e.onMouseEnter) || void 0 === a || a.call(e), H()
        },
        onMouseLeave: t => {
          var n, a;
          null === (n = O.onMouseLeave) || void 0 === n || n.call(O, t), null == e || null === (a = e.onMouseLeave) || void 0 === a || a.call(e), V()
        },
        onContextMenu: w,
        fullWidth: !0,
        size: d.Button.Sizes.SMALL,
        ...O,
        children: (0, a.jsx)(F, {
          className: i,
          size: "sm",
          color: x ? "white" : d.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  }), W = s.useCallback(() => {
    !P && D(!x)
  }, [P, x]);
  return (0, m.useComponentAction)({
    event: I.ComponentActions.TOGGLE_SOUNDBOARD,
    handler: W
  }), (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: k,
    children: (0, a.jsx)(d.Tooltip, {
      text: function() {
        if (L) return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (M) return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (y) return A.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => Y(e)
    })
  })
}