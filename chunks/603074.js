"use strict";
n.d(t, {
  Z: function() {
    return N
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(990547),
  l = n(442837),
  u = n(481060),
  _ = n(100527),
  c = n(906732),
  d = n(213609),
  E = n(28546),
  I = n(675478),
  T = n(19780),
  h = n(208049),
  f = n(763296),
  S = n(526617),
  A = n(761326);

function N(e) {
  let {
    guildId: t,
    channel: n,
    containerWidth: s,
    onClose: N,
    onSelect: m,
    analyticsSource: O,
    suppressPlaySound: p,
    shouldShowUpsell: R = !0,
    gridNotice: g,
    autoWidth: C = !1,
    soundButtonOverlay: v,
    listPadding: L,
    renderHeader: D,
    defaultSoundsOnly: M
  } = e, P = (0, l.e7)([f.Z], () => f.Z.isFetchingSounds() || f.Z.isFetchingDefaultSounds()), y = (0, l.e7)([T.Z], () => T.Z.getMediaSessionId()), {
    analyticsLocations: U
  } = (0, c.ZP)(_.Z.SOUNDBOARD_POPOUT);
  return (0, d.Z)({
    type: a.ImpressionTypes.POPOUT,
    name: a.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: O,
      guild_id: t,
      media_session_id: y
    }
  }), r.useEffect(() => {
    h.w(), I.DZ.loadIfNecessary(), (0, E.ql)("")
  }, []), (0, i.jsx)(c.Gt, {
    value: U,
    children: (0, i.jsx)(u.Dialog, {
      className: o()(A.picker, {
        [A.fetching]: P,
        [A.autoWidth]: C
      }),
      children: P ? (0, i.jsx)(u.Spinner, {}) : (0, i.jsx)(S.Z, {
        guildId: t,
        channel: n,
        onClose: N,
        onSelect: m,
        containerWidth: s,
        suppressPlaySound: p,
        shouldShowUpsell: R,
        gridNotice: g,
        soundButtonOverlay: v,
        listPadding: L,
        renderHeader: D,
        defaultSoundsOnly: M
      })
    })
  })
}