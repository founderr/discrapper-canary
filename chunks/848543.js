n.d(t, {
  Z: function() {
    return Z
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(459273),
  g = n(242291),
  p = n(458263),
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
    innerClassName: L,
    ...O
  } = e, {
    mute: v,
    suppress: R
  } = (0, I.Z)(t), P = (0, r.e7)([m.Z], () => m.Z.isDeaf()), x = v || R || P, [M, D] = i.useState(!1), b = t.getGuildId(), y = (0, g.sR)({
    isSoundboardButtonDisabled: x
  }), [j, U] = (0, _.c)(y), {
    analyticsLocations: G
  } = (0, h.ZP)(E.Z.SOUNDBOARD_BUTTON);

  function w(e) {
    null != b && (0, d.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, s.jsx)(e, {
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
  } = (0, c.j)(), F = e => (0, s.jsx)(u.Popout, {
    shouldShow: M,
    position: "top",
    onRequestClose: () => D(!1),
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, s.jsx)(N.Z, {
        guildId: b,
        channel: t,
        onClose: n,
        gridNotice: j === o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, s.jsx)(p.o, {
          onClose: n,
          markAsDismissed: U
        }),
        analyticsSource: "rtc panel"
      })
    },
    children: t => (0, s.jsx)("div", {
      children: (0, s.jsx)(u.Button, {
        ...e,
        ...t,
        className: a()(Z, {
          [f.buttonActive]: M,
          [f.disabled]: x
        }),
        wrapperClassName: Z,
        innerClassName: L,
        disabled: x,
        onClick: () => {
          var t, n;
          null != j && j !== o.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && U(C.L.UNKNOWN), null == e || null === (t = e.onClick) || void 0 === t || t.call(e), D(!M), B()
        },
        onMouseEnter: t => {
          var n, s;
          null === (n = O.onMouseEnter) || void 0 === n || n.call(O, t), null == e || null === (s = e.onMouseEnter) || void 0 === s || s.call(e), H()
        },
        onMouseLeave: t => {
          var n, s;
          null === (n = O.onMouseLeave) || void 0 === n || n.call(O, t), null == e || null === (s = e.onMouseLeave) || void 0 === s || s.call(e), V()
        },
        onContextMenu: w,
        fullWidth: !0,
        size: u.Button.Sizes.SMALL,
        ...O,
        children: (0, s.jsx)(k, {
          className: l,
          size: "sm",
          color: M ? "white" : u.tokens.colors.INTERACTIVE_ACTIVE
        })
      })
    })
  }), Y = i.useCallback(() => {
    !x && D(!M)
  }, [x, M]);
  return (0, T.yp)({
    event: S.CkL.TOGGLE_SOUNDBOARD,
    handler: Y
  }), (0, s.jsx)(h.Gt, {
    value: G,
    children: (0, s.jsx)(u.Tooltip, {
      text: function() {
        if (v) return A.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (R) return A.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (P) return A.Z.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
        return A.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD
      }(),
      children: e => F(e)
    })
  })
}