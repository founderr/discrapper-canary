"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("399606"),
  o = n("524437"),
  u = n("582019"),
  d = n("481060"),
  c = n("239091"),
  f = n("100527"),
  E = n("906732"),
  _ = n("706140"),
  h = n("294629"),
  C = n("131951"),
  m = n("459273"),
  S = n("242291"),
  I = n("792165"),
  T = n("603074"),
  p = n("981631"),
  g = n("921944"),
  N = n("689938"),
  A = n("815668");

function R(e) {
  let {
    channel: t,
    iconClassName: l,
    className: R,
    innerClassName: O,
    ...v
  } = e, {
    mute: L,
    suppress: P
  } = (0, h.default)(t), M = (0, r.useStateFromStores)([C.default], () => C.default.isDeaf()), y = L || P || M, [D, x] = s.useState(!1), b = t.getGuildId(), U = (0, S.useSoundBoardDismissContentTypes)({
    isSoundboardButtonDisabled: y
  }), [j, G] = (0, _.useGetDismissibleContent)(U), {
    analyticsLocations: w
  } = (0, E.default)(f.default.SOUNDBOARD_BUTTON);

  function k(e) {
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
    shouldShow: D,
    position: "top",
    onRequestClose: () => x(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, a.jsx)(T.default, {
        guildId: b,
        channel: t,
        onClose: n,
        gridNotice: j === o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, a.jsx)(I.CustomCallSoundUpsell, {
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
        className: i()(R, {
          [A.buttonActive]: D,
          [A.disabled]: y
        }),
        wrapperClassName: R,
        innerClassName: O,
        disabled: y,
        onClick: () => {
          var t, n;
          null == n || n(), null != j && j !== o.DismissibleContent.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && G(g.ContentDismissActionType.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), x(!D), B()
        },
        onMouseEnter: t => {
          var n, a;
          null === (n = v.onMouseEnter) || void 0 === n || n.call(v, t), null == e || null === (a = e.onMouseEnter) || void 0 === a || a.call(e), H()
        },
        onMouseLeave: t => {
          var n, a;
          null === (n = v.onMouseLeave) || void 0 === n || n.call(v, t), null == e || null === (a = e.onMouseLeave) || void 0 === a || a.call(e), V()
        },
        onContextMenu: k,
        fullWidth: !0,
        size: d.Button.Sizes.SMALL,
        ...v,
        children: (0, a.jsx)(F, {
          className: l,
          size: "sm",
          color: d.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  }), W = s.useCallback(() => {
    !y && x(!D)
  }, [y, D]);
  return (0, m.useComponentAction)({
    event: p.ComponentActions.TOGGLE_SOUNDBOARD,
    handler: W
  }), (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: w,
    children: (0, a.jsx)(d.Tooltip, {
      text: function() {
        if (L) return N.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (P) return N.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (M) return N.default.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return N.default.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => Y(e)
    })
  })
}