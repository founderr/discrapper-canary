"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("399606"),
  i = n("524437"),
  r = n("582019"),
  o = n("481060"),
  u = n("239091"),
  d = n("100527"),
  c = n("906732"),
  f = n("706140"),
  E = n("294629"),
  _ = n("131951"),
  h = n("459273"),
  C = n("242291"),
  S = n("792165"),
  m = n("603074"),
  I = n("981631"),
  p = n("921944"),
  T = n("689938");

function g(e) {
  let {
    channel: t,
    iconClassName: g,
    className: A,
    innerClassName: N,
    ...R
  } = e, {
    mute: O,
    suppress: v
  } = (0, E.default)(t), L = (0, l.useStateFromStores)([_.default], () => _.default.isDeaf()), P = O || v || L, [M, y] = s.useState(!1), D = t.getGuildId(), x = (0, C.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: P
  }), [b, U] = (0, f.useGetDismissibleContent)(x), {
    analyticsLocations: G
  } = (0, c.default)(d.default.SOUNDBOARD_BUTTON);

  function j(e) {
    null != D && (0, u.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, "338991"));
      return t => (0, a.jsx)(e, {
        guildId: D,
        ...t
      })
    })
  }
  let {
    Component: w,
    play: k,
    events: {
      onMouseEnter: F,
      onMouseLeave: B
    }
  } = (0, r.useSoundboardLottie)(), H = e => (0, a.jsx)(o.Popout, {
    shouldShow: M,
    position: "top",
    onRequestClose: () => y(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(m.default, {
        guildId: D,
        channel: t,
        onClose: n,
        gridNotice: b === i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(S.CustomCallSoundUpsell, {
          onClose: n,
          markAsDismissed: U
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, a.jsx)("div", {
      children: (0, a.jsx)(o.Button, {
        ...e,
        ...t,
        className: A,
        wrapperClassName: A,
        innerClassName: N,
        disabled: P,
        onClick: () => {
          var t, n;
          null == n || n(), null != b && b !== i.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(p.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), y(!M), k()
        },
        onMouseEnter: e => {
          var t;
          null === (t = R.onMouseEnter) || void 0 === t || t.call(R, e), F()
        },
        onMouseLeave: e => {
          var t;
          null === (t = R.onMouseLeave) || void 0 === t || t.call(R, e), B()
        },
        onContextMenu: j,
        fullWidth: !0,
        size: o.Button.Sizes.SMALL,
        ...R,
        children: (0, a.jsx)(w, {
          className: g,
          size: "sm",
          color: o.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  }), V = s.useCallback(() => {
    !P && y(!M)
  }, [P, M]);
  return (0, h.useComponentAction)({
    event: I.ComponentActions.TOGGLE_SOUNDBOARD,
    handler: V
  }), (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: G,
    children: (0, a.jsx)(o.Tooltip, {
      text: function() {
        if (O) return T.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (v) return T.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (L) return T.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return T.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => H(e)
    })
  })
}