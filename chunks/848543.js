n.d(t, {
  Z: function() {
    return Z
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(399606),
  o = n(704215),
  c = n(923462),
  u = n(481060),
  d = n(239091),
  E = n(100527),
  h = n(906732),
  _ = n(706140),
  I = n(294629),
  m = n(131951),
  g = n(459273),
  p = n(242291),
  T = n(458263),
  N = n(603074),
  S = n(981631),
  C = n(921944),
  A = n(689938),
  f = n(707747);

function Z(e) {
  let {
    channel: t,
    iconClassName: l,
    className: Z,
    innerClassName: v,
    ...L
  } = e, {
    mute: O,
    suppress: R
  } = (0, I.Z)(t), x = (0, r.e7)([m.Z], () => m.Z.isDeaf()), M = O || R || x, [P, D] = s.useState(!1), b = t.getGuildId(), y = (0, p.sR)({
    isSoundboardButtonDisabled: M
  }), [j, U] = (0, _.c)(y), {
    analyticsLocations: G
  } = (0, h.ZP)(E.Z.SOUNDBOARD_BUTTON);

  function w(e) {
    null != b && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, i.jsx)(e, {
        guildId: b,
        ...t
      })
    })
  }
  let {
    Component: k,
    play: B,
    events: {
      onMouseEnter: H,
      onMouseLeave: V
    }
  } = (0, c.j)(), F = e => (0, i.jsx)(u.Popout, {
    shouldShow: P,
    position: "top",
    onRequestClose: () => D(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(N.Z, {
        guildId: b,
        channel: t,
        onClose: n,
        gridNotice: j === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, i.jsx)(T.o, {
          onClose: n,
          markAsDismissed: U
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, i.jsx)("div", {
      children: (0, i.jsx)(u.Button, {
        ...e,
        ...t,
        className: a()(Z, {
          [f.buttonActive]: P,
          [f.disabled]: M
        }),
        wrapperClassName: Z,
        innerClassName: v,
        disabled: M,
        onClick: () => {
          var t, n;
          null != j && j !== o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(C.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), D(!P), B()
        },
        onMouseEnter: t => {
          var n, i;
          null === (n = L.onMouseEnter) || void 0 === n || n.call(L, t), null == e || null === (i = e.onMouseEnter) || void 0 === i || i.call(e), H()
        },
        onMouseLeave: t => {
          var n, i;
          null === (n = L.onMouseLeave) || void 0 === n || n.call(L, t), null == e || null === (i = e.onMouseLeave) || void 0 === i || i.call(e), V()
        },
        onContextMenu: w,
        fullWidth: !0,
        size: u.Button.Sizes.SMALL,
        ...L,
        children: (0, i.jsx)(k, {
          className: l,
          size: "sm",
          color: P ? "white" : u.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  }), Y = s.useCallback(() => {
    !M && D(!P)
  }, [M, P]);
  return (0, g.yp)({
    event: S.CkL.TOGGLE_SOUNDBOARD,
    handler: Y
  }), (0, i.jsx)(h.Gt, {
    value: G,
    children: (0, i.jsx)(u.Tooltip, {
      text: function() {
        if (O) return A.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (R) return A.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (x) return A.Z.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return A.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => F(e)
    })
  })
}