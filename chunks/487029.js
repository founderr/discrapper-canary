n.d(t, {
  Z: function() {
    return Z
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(990547),
  r = n(442837),
  a = n(100527),
  o = n(906732),
  u = n(213609),
  c = n(675478),
  d = n(19780),
  h = n(709054),
  g = n(208049),
  p = n(763296),
  m = n(242291),
  C = n(174470),
  E = n(549771),
  f = n(964398),
  _ = n(409673),
  I = n(710111),
  N = n(814639);

function Z(e) {
  let {
    guildId: t,
    channel: n,
    width: Z,
    height: S,
    keepOpen: x,
    interactive: T = !0,
    analyticsSource: L,
    onClose: v
  } = e, A = function(e) {
    let [t, n] = (0, r.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites()]);
    return i.useMemo(() => {
      let l = [],
        i = [...e, I.X8],
        s = (e, i) => {
          var s, r;
          for (let a of null !== (r = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== r ? r : []) {
            let e = n.has(a.soundId);
            (e && i || !e && !i) && a.available && l.push(a)
          }
        };
      return i.forEach(e => s(e, !0)), i.forEach(e => s(e, !1)), l
    }, [t, n, e])
  }((0, E.h)(n, !0)), M = (0, C.j)(), R = i.useRef(null), [O, P] = i.useState(void 0), j = (0, r.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: b
  } = (0, o.ZP)(a.Z.SOUNDBOARD_WHEEL), D = i.useCallback(e => {
    (0, m.GN)(e, n.id, b), v()
  }, [b, n.id, v]);
  i.useEffect(() => {
    g.w(), c.DZ.loadIfNecessary()
  }, []), i.useEffect(() => {
    0 === A.length && 0 === M.length && v()
  }, [A.length, M, v]), i.useEffect(() => () => {
    let e = R.current;
    !x && null != e && D(e)
  }, [x, D]), (0, u.Z)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: L,
      guild_id: t,
      media_session_id: j
    }
  }, {
    disableTrack: !T
  });
  let y = i.useCallback(e => {
      R.current = e, P(null == e ? void 0 : e.soundId)
    }, []),
    U = i.useCallback(e => {
      if (null == e) {
        y(null);
        return
      }
      let t = A[e];
      if (null != t) y(t)
    }, [y, A]),
    G = i.useCallback(e => {
      if (null == e) return;
      let t = A[e];
      if (null != t) D(t)
    }, [A, D]),
    w = i.useMemo(() => A.map(e => (0, l.jsx)(_.ZP, {
      interactive: T,
      className: N.soundButton,
      sound: e,
      focused: O === e.soundId,
      channel: n
    }, e.soundId)), [O, n, T, A]);
  return 0 === A.length ? null : (0, l.jsx)(o.Gt, {
    value: b,
    children: (0, l.jsx)(f.Z, {
      wheelWidth: Z,
      wheelHeight: S,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !x,
      activeItem: O,
      onItemSelect: U,
      onItemAction: G,
      interactive: T,
      children: w
    })
  })
}