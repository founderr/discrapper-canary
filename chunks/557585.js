"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  },
  useSearchCategories: function() {
    return I
  }
}), n("222007"), n("424973");
var l = n("884691"),
  i = n("249654"),
  a = n("446674"),
  s = n("817963"),
  r = n("872173"),
  o = n("305961"),
  u = n("957255"),
  d = n("697218"),
  c = n("719923"),
  f = n("880342"),
  m = n("469607"),
  p = n("235004"),
  h = n("389480"),
  E = n("774473"),
  g = n("846325");

function S(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = e.map(e => ({
      type: h.SoundboardSoundItemType.SOUND,
      sound: e
    }));
  return t ? n.sort((e, t) => i.default.compare(e.sound.soundId, t.sound.soundId)) : n
}

function C(e) {
  let {
    sections: t,
    guildIds: n,
    allSounds: l,
    potentialSoundIdsForSection: i,
    sectionType: a,
    sortById: s
  } = e, r = {}, o = [...n, g.DEFAULT_SOUND_GUILD_ID];
  for (let e of o) {
    var u;
    let t = null !== (u = l.get(e)) && void 0 !== u ? u : [];
    for (let e of t) {
      let t = i.find(t => t === e.soundId);
      null != t && (r[e.soundId] = e)
    }
  }
  let d = [];
  for (let e of i) {
    let t = r[e];
    null != t && d.push(t)
  }
  let c = S(d, s);
  c.length > 0 && t.push({
    key: a,
    categoryInfo: {
      type: a
    },
    items: c
  })
}

function T(e, t) {
  var n;
  let l = null !== (n = t.get(g.DEFAULT_SOUND_GUILD_ID)) && void 0 !== n ? n : g.EMPTY_SOUND_LIST;
  e.push({
    key: h.SoundboardSoundGridSectionType.DEFAULTS,
    categoryInfo: {
      type: h.SoundboardSoundGridSectionType.DEFAULTS
    },
    items: S(l)
  })
}

function v(e) {
  let {
    filterOutEmptyCurrentGuild: t = !1
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [g, v, I] = (0, a.useStateFromStoresArray)([p.default], () => [p.default.getSounds(), p.default.getFavorites(), p.default.isFetching()]), _ = (0, E.useSortedGuildIdsForSoundboard)(e, !1), N = (0, a.useStateFromStoresArray)([o.default], () => {
    let e = [];
    return _.forEach(t => {
      let n = o.default.getGuild(t);
      null != n && e.push(n)
    }), e
  }), A = c.default.canUseSoundboardEverywhere(i), y = (0, a.useStateFromStores)([o.default], () => o.default.getGuild(null == e ? void 0 : e.guild_id)), x = (0, a.useStateFromStores)([u.default], () => {
    let {
      canCreateExpressions: e
    } = (0, s.getManageResourcePermissions)(y);
    return e
  }, [y]), {
    canSeeRecentlyHeard: O,
    canSeeFrequentlyPlayed: R
  } = (0, f.useRecentlyHeardExperiment)({
    location: "soundboard-useSoundGrid",
    autoTrackExposure: !0
  }), M = function() {
    l.useEffect(() => {
      r.FrecencyUserSettingsActionCreators.loadIfNecessary()
    }, []);
    let e = (0, a.useStateFromStores)([m.default], () => m.default.frecentlyPlayedSounds);
    return e
  }(), L = (0, a.useStateFromStoresArray)([m.default], () => m.default.recentlyHeardSoundIds);
  return l.useMemo(() => {
    let e = [];
    return n ? (T(e, g), {
      categories: e,
      isFetching: I
    }) : (C({
      sections: e,
      guildIds: _,
      allSounds: g,
      potentialSoundIdsForSection: Array.from(v),
      sectionType: h.SoundboardSoundGridSectionType.FAVORITES,
      sortById: !0
    }), O && C({
      sections: e,
      guildIds: _,
      allSounds: g,
      potentialSoundIdsForSection: L,
      sectionType: h.SoundboardSoundGridSectionType.RECENTLY_HEARD,
      sortById: !1
    }), R && C({
      sections: e,
      guildIds: _,
      allSounds: g,
      potentialSoundIdsForSection: M.map(e => e.soundId),
      sectionType: h.SoundboardSoundGridSectionType.FREQUENTLY_USED,
      sortById: !1
    }), ! function(e, t, n, l, i) {
      var a;
      if (null == t) return;
      let s = null !== (a = l.get(t.id)) && void 0 !== a ? a : [],
        r = S(s),
        o = s.length < t.getMaxSoundboardSlots() && n,
        u = 0 === r.length;
      (o || u) && !i && r.push({
        type: h.SoundboardSoundItemType.ADD_SOUND,
        guild: t
      });
      !(i && u) && e.push({
        categoryInfo: {
          type: h.SoundboardSoundGridSectionType.GUILD,
          guild: t
        },
        key: t.id,
        items: r
      })
    }(e, y, x, g, t), !A && T(e, g), ! function(e, t, n, l) {
      for (let a of t) {
        var i;
        if (a.id === n) continue;
        let t = null !== (i = l.get(a.id)) && void 0 !== i ? i : [],
          s = S(t);
        s.length > 0 && e.push({
          categoryInfo: {
            type: h.SoundboardSoundGridSectionType.GUILD,
            guild: a
          },
          key: a.id,
          items: s
        })
      }
    }(e, N, null == y ? void 0 : y.id, g), A && T(e, g), {
      categories: e,
      isFetching: I
    })
  }, [_, g, v, L, M, R, O, y, x, t, A, N, n, I])
}

function I(e, t, n) {
  return l.useMemo(() => n.length > 0 ? [{
    key: h.SoundboardSoundGridSectionType.SEARCH,
    categoryInfo: {
      type: h.SoundboardSoundGridSectionType.SEARCH
    },
    items: S(t, !1)
  }] : e, [e, n.length, t])
}