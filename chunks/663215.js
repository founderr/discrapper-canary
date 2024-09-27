n.d(t, {
    FS: function () {
        return C;
    },
    ZP: function () {
        return R;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(470079),
    o = n(442837),
    s = n(357156),
    l = n(675478),
    u = n(430824),
    c = n(496675),
    d = n(594174),
    _ = n(74538),
    E = n(709054),
    f = n(164878),
    h = n(178106),
    p = n(763296),
    m = n(697426),
    I = n(549771),
    T = n(710111),
    g = n(474936);
function S(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e.map((e) => ({
            type: m.vB.SOUND,
            sound: e
        }));
    return t ? n.sort((e, t) => E.default.compare(e.sound.soundId, t.sound.soundId)) : n;
}
function A(e) {
    let { sections: t, guildIds: n, allSounds: r, potentialSoundIdsForSection: i, sectionType: a, sortById: o } = e,
        s = {};
    for (let e of [...n, T.X8]) {
        var l;
        for (let t of null !== (l = r.get(e)) && void 0 !== l ? l : []) null != i.find((e) => e === t.soundId) && (s[t.soundId] = t);
    }
    let u = [];
    for (let e of i) {
        let t = s[e];
        null != t && u.push(t);
    }
    let c = S(u, o);
    c.length > 0 &&
        t.push({
            key: a,
            categoryInfo: { type: a },
            items: c
        });
}
function v(e, t, n, r, i) {
    for (let o of t) {
        var a;
        if (o.id === n) continue;
        let t = S(null !== (a = r.get(o.id)) && void 0 !== a ? a : []);
        t.length > 0 &&
            e.push({
                categoryInfo: {
                    type: m.bg.GUILD,
                    guild: o,
                    isNitroLocked: !i
                },
                key: o.id,
                items: t
            });
    }
}
function N(e, t, n, r, i) {
    var a;
    if (null == t) return;
    let o = null !== (a = r.get(t.id)) && void 0 !== a ? a : [],
        s = S(o),
        l = o.length < t.getMaxSoundboardSlots() && n,
        u = 0 === s.length,
        c = i;
    (l || u) &&
        !c &&
        s.push({
            type: m.vB.ADD_SOUND,
            guild: t
        }),
        !(i && u) &&
            e.push({
                categoryInfo: {
                    type: m.bg.GUILD,
                    guild: t,
                    isNitroLocked: !1
                },
                key: t.id,
                items: s
            });
}
function O(e, t) {
    var n;
    let r = null !== (n = t.get(T.X8)) && void 0 !== n ? n : T.Hy;
    e.push({
        key: m.bg.DEFAULTS,
        categoryInfo: { type: m.bg.DEFAULTS },
        items: S(r)
    });
}
function R(e) {
    let { filterOutEmptyCurrentGuild: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        i = _.ZP.isPremium(r, g.p9.TIER_2),
        [l, E, T] = (0, o.Wu)([p.Z], () => [p.Z.getSounds(), p.Z.getFavorites(), p.Z.isFetching()]),
        S = (0, I.h)(e, !1),
        R = (0, o.Wu)([u.Z], () => {
            let e = [];
            return (
                S.forEach((t) => {
                    let n = u.Z.getGuild(t);
                    null != n && e.push(n);
                }),
                e
            );
        }),
        C = _.ZP.canUseSoundboardEverywhere(r),
        L = (0, o.e7)([u.Z], () => u.Z.getGuild(null == e ? void 0 : e.guild_id)),
        b = (0, o.e7)(
            [c.Z],
            () => {
                let { canCreateExpressions: e } = (0, s.Gw)(L);
                return e;
            },
            [L]
        ),
        { canSeeRecentlyHeard: D, canSeeFrequentlyPlayed: M } = (0, f.k)({
            location: 'soundboard-useSoundGrid',
            autoTrackExposure: !0
        }),
        P = y(),
        U = (0, o.Wu)([h.Z], () => h.Z.recentlyHeardSoundIds);
    return a.useMemo(() => {
        let e = [];
        return n
            ? (O(e, l),
              {
                  categories: e,
                  isFetching: T
              })
            : (A({
                  sections: e,
                  guildIds: S,
                  allSounds: l,
                  potentialSoundIdsForSection: Array.from(E),
                  sectionType: m.bg.FAVORITES,
                  sortById: !0
              }),
              D &&
                  A({
                      sections: e,
                      guildIds: S,
                      allSounds: l,
                      potentialSoundIdsForSection: U,
                      sectionType: m.bg.RECENTLY_HEARD,
                      sortById: !1
                  }),
              M &&
                  A({
                      sections: e,
                      guildIds: S,
                      allSounds: l,
                      potentialSoundIdsForSection: P.map((e) => e.soundId),
                      sectionType: m.bg.FREQUENTLY_USED,
                      sortById: !1
                  }),
              N(e, L, b, l, t),
              !C && O(e, l),
              v(e, R, null == L ? void 0 : L.id, l, i),
              C && O(e, l),
              {
                  categories: e,
                  isFetching: T
              });
    }, [S, l, E, U, P, M, D, L, b, t, C, R, n, T, i]);
}
function C(e, t, n) {
    return a.useMemo(
        () =>
            n.length > 0
                ? [
                      {
                          key: m.bg.SEARCH,
                          categoryInfo: { type: m.bg.SEARCH },
                          items: S(t, !1)
                      }
                  ]
                : e,
        [e, n.length, t]
    );
}
function y() {
    return (
        a.useEffect(() => {
            l.DZ.loadIfNecessary();
        }, []),
        (0, o.e7)([h.Z], () => h.Z.frecentlyPlayedSounds)
    );
}
