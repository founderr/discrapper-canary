"use strict";
a.r(t), a.d(t, {
  default: function() {
    return v
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("399606"),
  o = a("524437"),
  u = a("923462"),
  d = a("481060"),
  c = a("239091"),
  f = a("100527"),
  E = a("906732"),
  h = a("706140"),
  _ = a("294629"),
  C = a("131951"),
  m = a("459273"),
  S = a("242291"),
  p = a("792165"),
  I = a("603074"),
  T = a("981631"),
  g = a("921944"),
  A = a("689938"),
  N = a("594078");

function v(e) {
  let {
    channel: t,
    iconClassName: l,
    className: v,
    innerClassName: R,
    ...L
  } = e, {
    mute: O,
    suppress: M
  } = (0, _.default)(t), P = (0, r.useStateFromStores)([C.default], () => C.default.isDeaf()), x = O || M || P, [y, D] = s.useState(!1), b = t.getGuildId(), U = (0, S.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: x
  }), [j, G] = (0, h.useGetDismissibleContent)(U), {
    analyticsLocations: w
  } = (0, E.default)(f.default.SOUNDBOARD_BUTTON);

  function k(e) {
    null != b && (0, c.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await a.e("56049").then(a.bind(a, "338991"));
      return t => (0, n.jsx)(e, {
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
  } = (0, u.useSoundboardLottie)(), Y = e => (0, n.jsx)(d.Popout, {
    shouldShow: y,
    position: "top",
    onRequestClose: () => D(!1),
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return (0, n.jsx)(I.default, {
        guildId: b,
        channel: t,
        onClose: a,
        gridNotice: j === o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, n.jsx)(p.CustomCallSoundUpsell, {
          onClose: a,
          markAsDismissed: G
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, n.jsx)("div", {
      children: (0, n.jsx)(d.Button, {
        ...e,
        ...t,
        className: i()(v, {
          [N.buttonActive]: y,
          [N.disabled]: x
        }),
        wrapperClassName: v,
        innerClassName: R,
        disabled: x,
        onClick: () => {
          var t, a;
          null == a || a(), null != j && j !== o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && G(g.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), D(!y), B()
        },
        onMouseEnter: t => {
          var a, n;
          null === (a = L.onMouseEnter) || void 0 === a || a.call(L, t), null == e || null === (n = e.onMouseEnter) || void 0 === n || n.call(e), H()
        },
        onMouseLeave: t => {
          var a, n;
          null === (a = L.onMouseLeave) || void 0 === a || a.call(L, t), null == e || null === (n = e.onMouseLeave) || void 0 === n || n.call(e), V()
        },
        onContextMenu: k,
        fullWidth: !0,
        size: d.Button.Sizes.SMALL,
        ...L,
        children: (0, n.jsx)(F, {
          className: l,
          size: "sm",
          color: y ? "white" : d.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  }), W = s.useCallback(() => {
    !x && D(!y)
  }, [x, y]);
  return (0, m.useComponentAction)({
    event: T.ComponentActions.TOGGLE_SOUNDBOARD,
    handler: W
  }), (0, n.jsx)(E.AnalyticsLocationProvider, {
    value: w,
    children: (0, n.jsx)(d.Tooltip, {
      text: function() {
        if (O) return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (M) return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (P) return A.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return A.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => Y(e)
    })
  })
}