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
  p = n(208049),
  g = n(763296),
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
    interactive: L = !0,
    analyticsSource: T,
    onClose: v
  } = e, A = function(e) {
    let [t, n] = (0, r.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
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
  }((0, E.h)(n, !0)), M = (0, C.j)(), R = i.useRef(null), [O, P] = i.useState(void 0), b = (0, r.e7)([d.Z], () => d.Z.getMediaSessionId()), {
    analyticsLocations: j
  } = (0, o.ZP)(a.Z.SOUNDBOARD_WHEEL), y = i.useCallback(e => {
    (0, m.GN)(e, n.id, j), v()
  }, [j, n.id, v]);
  i.useEffect(() => {
    p.w(), c.DZ.loadIfNecessary()
  }, []), i.useEffect(() => {
    0 === A.length && 0 === M.length && v()
  }, [A.length, M, v]), i.useEffect(() => () => {
    let e = R.current;
    !x && null != e && y(e)
  }, [x, y]), (0, u.Z)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
    properties: {
      source: T,
      guild_id: t,
      media_session_id: b
    }
  }, {
    disableTrack: !L
  });
  let D = i.useCallback(e => {
      R.current = e, P(null == e ? void 0 : e.soundId)
    }, []),
    U = i.useCallback(e => {
      if (null == e) {
        D(null);
        return
      }
      let t = A[e];
      if (null != t) D(t)
    }, [D, A]),
    G = i.useCallback(e => {
      if (null == e) return;
      let t = A[e];
      if (null != t) y(t)
    }, [A, y]),
    w = i.useMemo(() => A.map(e => (0, l.jsx)(_.ZP, {
      interactive: L,
      className: N.soundButton,
      sound: e,
      focused: O === e.soundId,
      channel: n
    }, e.soundId)), [O, n, L, A]);
  return 0 === A.length ? null : (0, l.jsx)(o.Gt, {
    value: j,
    children: (0, l.jsx)(f.Z, {
      wheelWidth: Z,
      wheelHeight: S,
      itemWidth: 96,
      itemHeight: 52,
      showDeadZoneIndicator: !x,
      activeItem: O,
      onItemSelect: U,
      onItemAction: G,
      interactive: L,
      children: w
    })
  })
}