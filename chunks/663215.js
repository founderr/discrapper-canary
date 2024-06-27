"use strict";
n.d(t, {
  FS: function() {
    return O
  },
  ZP: function() {
    return m
  }
}), n(47120), n(653041);
var i = n(470079),
  r = n(442837),
  s = n(889161),
  o = n(675478),
  a = n(430824),
  l = n(496675),
  u = n(594174),
  _ = n(74538),
  c = n(709054),
  d = n(164878),
  E = n(178106),
  I = n(763296),
  T = n(697426),
  h = n(549771),
  f = n(710111);

function S(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e.map(e => ({
      type: T.vB.SOUND,
      sound: e
    }));
  return t ? n.sort((e, t) => c.default.compare(e.sound.soundId, t.sound.soundId)) : n
}

function A(e) {
  let {
    sections: t,
    guildIds: n,
    allSounds: i,
    potentialSoundIdsForSection: r,
    sectionType: s,
    sortById: o
  } = e, a = {};
  for (let e of [...n, f.X8]) {
    var l;
    for (let t of null !== (l = i.get(e)) && void 0 !== l ? l : []) null != r.find(e => e === t.soundId) && (a[t.soundId] = t)
  }
  let u = [];
  for (let e of r) {
    let t = a[e];
    null != t && u.push(t)
  }
  let _ = S(u, o);
  _.length > 0 && t.push({
    key: s,
    categoryInfo: {
      type: s
    },
    items: _
  })
}

function N(e, t) {
  var n;
  let i = null !== (n = t.get(f.X8)) && void 0 !== n ? n : f.Hy;
  e.push({
    key: T.bg.DEFAULTS,
    categoryInfo: {
      type: T.bg.DEFAULTS
    },
    items: S(i)
  })
}

function m(e) {
  let {
    filterOutEmptyCurrentGuild: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], c = (0, r.e7)([u.default], () => u.default.getCurrentUser()), [f, m, O] = (0, r.Wu)([I.Z], () => [I.Z.getSounds(), I.Z.getFavorites(), I.Z.isFetching()]), R = (0, h.h)(e, !1), p = (0, r.Wu)([a.Z], () => {
    let e = [];
    return R.forEach(t => {
      let n = a.Z.getGuild(t);
      null != n && e.push(n)
    }), e
  }), g = _.ZP.canUseSoundboardEverywhere(c), C = (0, r.e7)([a.Z], () => a.Z.getGuild(null == e ? void 0 : e.guild_id)), v = (0, r.e7)([l.Z], () => {
    let {
      canCreateExpressions: e
    } = (0, s.Gw)(C);
    return e
  }, [C]), {
    canSeeRecentlyHeard: L,
    canSeeFrequentlyPlayed: D
  } = (0, d.k)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: !0
  }), M = function() {
    return i.useEffect(() => {
      o.DZ.loadIfNecessary()
    }, []), (0, r.e7)([E.Z], () => E.Z.frecentlyPlayedSounds)
  }(), P = (0, r.Wu)([E.Z], () => E.Z.recentlyHeardSoundIds);
  return i.useMemo(() => {
    let e = [];
    return n ? (N(e, f), {
      categories: e,
      isFetching: O
    }) : (A({
      sections: e,
      guildIds: R,
      allSounds: f,
      potentialSoundIdsForSection: Array.from(m),
      sectionType: T.bg.FAVORITES,
      sortById: !0
    }), L && A({
      sections: e,
      guildIds: R,
      allSounds: f,
      potentialSoundIdsForSection: P,
      sectionType: T.bg.RECENTLY_HEARD,
      sortById: !1
    }), D && A({
      sections: e,
      guildIds: R,
      allSounds: f,
      potentialSoundIdsForSection: M.map(e => e.soundId),
      sectionType: T.bg.FREQUENTLY_USED,
      sortById: !1
    }), ! function(e, t, n, i, r) {
      var s;
      if (null == t) return;
      let o = null !== (s = i.get(t.id)) && void 0 !== s ? s : [],
        a = S(o),
        l = o.length < t.getMaxSoundboardSlots() && n,
        u = 0 === a.length;
      (l || u) && !r && a.push({
        type: T.vB.ADD_SOUND,
        guild: t
      });
      !(r && u) && e.push({
        categoryInfo: {
          type: T.bg.GUILD,
          guild: t
        },
        key: t.id,
        items: a
      })
    }(e, C, v, f, t), !g && N(e, f), ! function(e, t, n, i) {
      for (let s of t) {
        var r;
        if (s.id === n) continue;
        let t = S(null !== (r = i.get(s.id)) && void 0 !== r ? r : []);
        t.length > 0 && e.push({
          categoryInfo: {
            type: T.bg.GUILD,
            guild: s
          },
          key: s.id,
          items: t
        })
      }
    }(e, p, null == C ? void 0 : C.id, f), g && N(e, f), {
      categories: e,
      isFetching: O
    })
  }, [R, f, m, P, M, D, L, C, v, t, g, p, n, O])
}

function O(e, t, n) {
  return i.useMemo(() => n.length > 0 ? [{
    key: T.bg.SEARCH,
    categoryInfo: {
      type: T.bg.SEARCH
    },
    items: S(t, !1)
  }] : e, [e, n.length, t])
}