n.d(t, {
    FS: function () {
        return T;
    },
    ZP: function () {
        return b;
    }
}),
    n(47120),
    n(653041);
var r = n(192379),
    i = n(442837),
    a = n(357156),
    s = n(675478),
    o = n(430824),
    l = n(496675),
    u = n(594174),
    c = n(74538),
    d = n(709054),
    f = n(164878),
    _ = n(178106),
    h = n(763296),
    p = n(697426),
    m = n(549771),
    g = n(710111),
    E = n(474936);
function v(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.map((e) => ({
            type: p.vB.SOUND,
            sound: e
        }));
    return t ? n.sort((e, t) => d.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}
function I(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: a, sortById: s } = e,
        o = {};
    for (let e of [...n, g.X8]) {
        var l;
        for (let t of null !== (l = r.get(e)) && void 0 !== l ? l : []) null != i.find((e) => e === t.soundId) && (o[t.soundId] = t);
    }
    let u = [];
    for (let e of i) {
        let t = o[e];
        null != t && u.push(t);
    }
    let c = v(u, s);
    c.length > 0 &&
        t.push({
            key: a,
            categoryInfo: { type: a },
            items: c
        });
}
function S(e, t) {
    var n;
    let r = null !== (n = t.get(g.X8)) && void 0 !== n ? n : g.Hy;
    e.push({
        key: p.bg.DEFAULTS,
        categoryInfo: { type: p.bg.DEFAULTS },
        items: v(r)
    });
}
function b(e) {
    let { filterOutEmptyCurrentGuild: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        d = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
        g = c.ZP.isPremium(d, E.p9.TIER_2),
        [b, T, y] = (0, i.Wu)([h.Z], () => [h.Z.getSounds(), h.Z.getFavorites(), h.Z.isFetching()]),
        A = (0, m.h)(e, !1),
        N = (0, i.Wu)([o.Z], () => {
            let e = [];
            return (
                A.forEach((t) => {
                    let n = o.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        C = c.ZP.canUseSoundboardEverywhere(d),
        R = (0, i.e7)([o.Z], () => o.Z.getGuild(null == e ? void 0 : e.guild_id)),
        O = (0, i.e7)(
            [l.Z],
            () => {
                let { canCreateExpressions: e } = (0, a.Gw)(R);
                return e;
            },
            [R]
        ),
        { canSeeRecentlyHeard: D, canSeeFrequentlyPlayed: L } = (0, f.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        x = (function () {
            return (
                r.useEffect(() => {
                    s.DZ.loadIfNecessary();
                }, []),
                (0, i.e7)([_.Z], () => _.Z.frecentlyPlayedSounds)
            );
        })(),
        w = (0, i.Wu)([_.Z], () => _.Z.recentlyHeardSoundIds);
    return r.useMemo(() => {
        let e = [];
        return n
            ? (S(e, b),
              {
                  categories: e,
                  isFetching: y
              })
            : (I({
                  sections: e,
                  guildIds: A,
                  allSounds: b,
                  potentialSoundIdsForSection: Array.from(T),
                  sectionType: p.bg.FAVORITES,
                  sortById: !0
              }),
              D &&
                  I({
                      sections: e,
                      guildIds: A,
                      allSounds: b,
                      potentialSoundIdsForSection: w,
                      sectionType: p.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              L &&
                  I({
                      sections: e,
                      guildIds: A,
                      allSounds: b,
                      potentialSoundIdsForSection: x.map((e) => e.soundId),
                      sectionType: p.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              !(function (e, t, n, r, i) {
                  var a;
                  if (null == t) return;
                  let s = null !== (a = r.get(t.id)) && void 0 !== a ? a : [],
                      o = v(s),
                      l = s.length < t.getMaxSoundboardSlots() && n,
                      u = 0 === o.length;
                  (l || u) &&
                      !i &&
                      o.push({
                          type: p.vB.ADD_SOUND,
                          guild: t
                      });
                  !(i && u) &&
                      e.push({
                          categoryInfo: {
                              type: p.bg.GUILD,
                              guild: t,
                              isNitroLocked: !1
                          },
                          key: t.id,
                          items: o
                      });
              })(e, R, O, b, t),
              !C && S(e, b),
              !(function (e, t, n, r, i) {
                  for (let s of t) {
                      var a;
                      if (s.id === n) continue;
                      let t = v(null !== (a = r.get(s.id)) && void 0 !== a ? a : []);
                      t.length > 0 &&
                          e.push({
                              categoryInfo: {
                                  type: p.bg.GUILD,
                                  guild: s,
                                  isNitroLocked: !i
                              },
                              key: s.id,
                              items: t
                          });
                  }
              })(e, N, null == R ? void 0 : R.id, b, g),
              C && S(e, b),
              {
                  categories: e,
                  isFetching: y
              });
    }, [A, b, T, w, x, L, D, R, O, t, C, N, n, y, g]);
}
function T(e, t, n) {
    return r.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: p.bg.SEARCH,
                          categoryInfo: { type: p.bg.SEARCH },
                          items: v(t, !1)
                      }
                  ]
                : e,
        [e, n.length, t]
    );
}
