t.d(s, {
  b: function() {
    return d
  }
});
var n = t(481060),
  i = t(358085),
  a = t(394644),
  l = t(295545),
  r = t(168308),
  o = t(726985),
  c = t(332325),
  E = t(689938);

function d() {
  let e = (0, r.bC)(),
    s = (0, a.Gj)(o.s6.GAMES);
  return function(e, s, t) {
    var a;
    let l = (a = e, [{
      id: c.Z.MY_GAMES,
      title: E.Z.Messages.MY_GAMES,
      icon: n.DpadIcon,
      predicate: () => !i.isPlatformEmbedded,
      setting: o.s6.GAMES_MY_GAMES
    }, {
      id: c.Z.CLIPS,
      title: E.Z.Messages.CLIPS,
      icon: n.ClipsIcon,
      setting: o.s6.GAMES_CLIPS
    }, {
      id: c.Z.OVERLAY,
      title: E.Z.Messages.SETTINGS_GAMES_OVERLAY,
      icon: n.ScreenSystemRequirementsIcon,
      predicate: () => !a,
      setting: o.s6.GAMES_OVERLAY
    }, {
      id: c.Z.ACTIVITY_PRIVACY,
      title: E.Z.Messages.ACTIVITY_PRIVACY,
      icon: n.FlashIcon,
      setting: o.s6.GAMES_ACTIVITY_PRIVACY
    }]).filter(e => null == e.predicate || !e.predicate());
    if (s && null != t && t.size > 0) {
      let e = l.filter(e => t.has(e.setting));
      return e.length > 0 ? e : l
    }
    return l
  }(e, (0, l.eA)({
    location: "settings"
  }), s)
}