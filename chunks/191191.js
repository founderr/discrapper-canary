"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("759843"),
  o = n("446674"),
  u = n("77078"),
  d = n("812204"),
  c = n("685665"),
  f = n("428958"),
  p = n("538282"),
  m = n("872173"),
  h = n("945956"),
  E = n("305122"),
  S = n("235004"),
  g = n("534108"),
  C = n("808910");

function T(e) {
  let {
    guildId: t,
    channel: n,
    containerWidth: a,
    onClose: T,
    onSelect: v,
    analyticsSource: I,
    suppressPlaySound: _,
    shouldShowUpsell: y = !0,
    gridNotice: A,
    autoWidth: N = !1,
    soundButtonOverlay: x,
    listPadding: O,
    renderHeader: R,
    defaultSoundsOnly: M
  } = e, L = (0, o.useStateFromStores)([S.default], () => S.default.isFetchingSounds() || S.default.isFetchingDefaultSounds()), P = (0, o.useStateFromStores)([h.default], () => h.default.getMediaSessionId()), {
    AnalyticsLocationProvider: b
  } = (0, c.default)(d.default.SOUNDBOARD_POPOUT);
  return (0, f.default)({
    type: r.ImpressionTypes.POPOUT,
    name: r.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: I,
      guild_id: t,
      media_session_id: P
    }
  }), i.useEffect(() => {
    E.maybeFetchSoundboardSounds(), m.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, p.setSearchQuery)("")
  }, []), (0, l.jsx)(b, {
    children: (0, l.jsx)("div", {
      className: s(C.picker, {
        [C.fetching]: L,
        [C.autoWidth]: N
      }),
      children: L ? (0, l.jsx)(u.Spinner, {}) : (0, l.jsx)(g.default, {
        guildId: t,
        channel: n,
        onClose: T,
        onSelect: v,
        containerWidth: a,
        suppressPlaySound: _,
        shouldShowUpsell: y,
        gridNotice: A,
        soundButtonOverlay: x,
        listPadding: O,
        renderHeader: R,
        defaultSoundsOnly: M
      })
    })
  })
}