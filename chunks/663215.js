r.d(n, {
    FS: function () {
        return R;
    },
    ZP: function () {
        return C;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(192379),
    o = r(442837),
    l = r(357156),
    u = r(675478),
    c = r(430824),
    d = r(496675),
    f = r(594174),
    _ = r(74538),
    h = r(709054),
    p = r(164878),
    m = r(178106),
    g = r(763296),
    E = r(697426),
    v = r(549771),
    I = r(710111),
    T = r(474936);
function b(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = e.map((e) => ({
            type: E.vB.SOUND,
            sound: e
        }));
    return n ? r.sort((e, n) => h.default.compare(e.sound.soundId, n.sound.soundId)) : r;
}
function y(e) {
    let { sections: n, guildIds: r, allSounds: i, potentialSoundIdsForSection: a, sectionType: s, sortById: o } = e,
        l = {};
    for (let e of [...r, I.X8]) {
        var u;
        for (let n of null !== (u = i.get(e)) && void 0 !== u ? u : []) null != a.find((e) => e === n.soundId) && (l[n.soundId] = n);
    }
    let c = [];
    for (let e of a) {
        let n = l[e];
        null != n && c.push(n);
    }
    let d = b(c, o);
    d.length > 0 &&
        n.push({
            key: s,
            categoryInfo: { type: s },
            items: d
        });
}
function S(e, n, r, i, a) {
    for (let o of n) {
        var s;
        if (o.id === r) continue;
        let n = b(null !== (s = i.get(o.id)) && void 0 !== s ? s : []);
        n.length > 0 &&
            e.push({
                categoryInfo: {
                    type: E.bg.GUILD,
                    guild: o,
                    isNitroLocked: !a
                },
                key: o.id,
                items: n
            });
    }
}
function A(e, n, r, i, a) {
    var s;
    if (null == n) return;
    let o = null !== (s = i.get(n.id)) && void 0 !== s ? s : [],
        l = b(o),
        u = o.length < n.getMaxSoundboardSlots() && r,
        c = 0 === l.length,
        d = a;
    (u || c) &&
        !d &&
        l.push({
            type: E.vB.ADD_SOUND,
            guild: n
        }),
        !(a && c) &&
            e.push({
                categoryInfo: {
                    type: E.bg.GUILD,
                    guild: n,
                    isNitroLocked: !1
                },
                key: n.id,
                items: l
            });
}
function N(e, n) {
    var r;
    let i = null !== (r = n.get(I.X8)) && void 0 !== r ? r : I.Hy;
    e.push({
        key: E.bg.DEFAULTS,
        categoryInfo: { type: E.bg.DEFAULTS },
        items: b(i)
    });
}
function C(e) {
    let { filterOutEmptyCurrentGuild: n = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        a = _.ZP.isPremium(i, T.p9.TIER_2),
        [u, h, I] = (0, o.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites(), g.Z.isFetching()]),
        b = (0, v.h)(e, !1),
        C = (0, o.Wu)([c.Z], () => {
            let e = [];
            return (
                b.forEach((n) => {
                    let r = c.Z.getGuild(n);
                    null != r && e.push(r);
                }),
                e
            );
        }),
        R = _.ZP.canUseSoundboardEverywhere(i),
        D = (0, o.e7)([c.Z], () => c.Z.getGuild(null == e ? void 0 : e.guild_id)),
        L = (0, o.e7)(
            [d.Z],
            () => {
                let { canCreateExpressions: e } = (0, l.Gw)(D);
                return e;
            },
            [D]
        ),
        { canSeeRecentlyHeard: x, canSeeFrequentlyPlayed: w } = (0, p.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        P = O(),
        M = (0, o.Wu)([m.Z], () => m.Z.recentlyHeardSoundIds);
    return s.useMemo(() => {
        let e = 0,
            i = 0,
            s = [];
        return r
            ? (N(s, u),
              {
                  categories: s,
                  isFetching: I,
                  soundCounts: {
                      favoriteSoundCount: 0,
                      unlockedCustomSoundCount: 0,
                      lockedCustomSoundCount: 0
                  }
              })
            : (y({
                  sections: s,
                  guildIds: b,
                  allSounds: u,
                  potentialSoundIdsForSection: Array.from(h),
                  sectionType: E.bg.FAVORITES,
                  sortById: !0
              }),
              x &&
                  y({
                      sections: s,
                      guildIds: b,
                      allSounds: u,
                      potentialSoundIdsForSection: M,
                      sectionType: E.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              w &&
                  y({
                      sections: s,
                      guildIds: b,
                      allSounds: u,
                      potentialSoundIdsForSection: P.map((e) => e.soundId),
                      sectionType: E.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              A(s, D, L, u, n),
              !R && N(s, u),
              S(s, C, null == D ? void 0 : D.id, u, a),
              R && N(s, u),
              s.forEach((n) => {
                  n.categoryInfo.type === E.bg.GUILD && (n.categoryInfo.isNitroLocked ? (i += n.items.length) : (e += n.items.length));
              }),
              {
                  categories: s,
                  isFetching: I,
                  soundCounts: {
                      favoriteSoundCount: h.size,
                      unlockedCustomSoundCount: e,
                      lockedCustomSoundCount: i
                  }
              });
    }, [b, u, h, M, P, w, x, D, L, n, R, C, r, I, a]);
}
function R(e, n, r) {
    return s.useMemo(
        () =>
            r.length > 0
                ? [
                      {
                          key: E.bg.SEARCH,
                          categoryInfo: { type: E.bg.SEARCH },
                          items: b(n, !1)
                      }
                  ]
                : e,
        [e, r.length, n]
    );
}
function O() {
    return (
        s.useEffect(() => {
            u.DZ.loadIfNecessary();
        }, []),
        (0, o.e7)([m.Z], () => m.Z.frecentlyPlayedSounds)
    );
}
