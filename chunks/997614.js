n.d(t, {
  Z: function() {
    return x
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(399606),
  a = n(704215),
  r = n(481060),
  o = n(239091),
  c = n(706140),
  u = n(242291),
  d = n(458263),
  h = n(603074),
  m = n(294629),
  p = n(390322),
  E = n(871499),
  g = n(131951),
  f = n(459273),
  C = n(304388),
  _ = n(981631),
  I = n(689938);

function x(e) {
  let {
    channel: t,
    themeable: x
  } = e, T = t.getGuildId(), {
    mute: N,
    suppress: Z
  } = (0, m.Z)(t), S = (0, s.e7)([g.Z], () => g.Z.isDeaf()), v = N || Z || S, A = (0, u.sR)({
    isSoundboardButtonDisabled: v
  }), [M, R] = (0, c.c)(A);

  function j(e) {
    null != T && (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("56049").then(n.bind(n, 338991));
      return t => (0, l.jsx)(e, {
        guildId: T,
        ...t
      })
    })
  }
  let L = i.useRef(null),
    O = i.useCallback(() => {
      var e;
      null === (e = L.current) || void 0 === e || e.hidePopout()
    }, []);
  return (0, f.yp)({
    event: _.CkL.TOGGLE_SOUNDBOARD,
    handler: O
  }), (0, l.jsx)(C.Z, {
    ref: L,
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, l.jsx)(p.Z, {
        children: (0, l.jsx)(h.Z, {
          guildId: T,
          channel: t,
          onClose: n,
          gridNotice: M === a.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, l.jsx)(d.o, {
            onClose: n,
            markAsDismissed: R
          }),
          analyticsSource: "action bar button"
        })
      })
    },
    children: e => (0, l.jsx)(E.Z, {
      themeable: x,
      label: function() {
        if (N) return I.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
        if (Z) return I.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
        if (S) return I.Z.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED
      }(),
      iconComponent: r.SoundboardIcon,
      disabled: v,
      onContextMenu: j,
      ...e
    })
  })
}