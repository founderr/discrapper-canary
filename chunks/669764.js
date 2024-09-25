var r,
    i = n(47120);
var a = n(442837),
    o = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let l = new Map(),
    u = new Set(),
    c = new Set();
function d() {
    (l = new Map()), (u = new Set()), (c = new Set());
}
function _(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        u.add(e), c.delete(e);
    });
}
function E(e) {
    let { applicationIds: t, supplementalGameData: n } = e;
    t.forEach((e) => {
        u.delete(e), c.delete(e);
    }),
        n.forEach((e) => {
            let { application_id: t, name: n, summary: r, websites: i, themes: a, genres: o, platforms: s, artwork_urls: u, screenshot_urls: c, cover_image_url: d, first_release_date: _, publisher_names: E, developer_names: f } = e;
            l.set(t, {
                applicationId: t,
                name: n,
                summary: r,
                websites: i,
                themes: a,
                genres: o,
                platforms: s,
                artwork: u,
                screenshots: c,
                coverImageUrl: d,
                firstReleaseDate: _,
                publishers: null != E ? E : [],
                developers: null != f ? f : []
            });
        });
}
function f(e) {
    let { applicationIds: t } = e;
    t.forEach((e) => {
        u.delete(e), c.add(e);
    });
}
class h extends (r = a.ZP.Store) {
    canFetch(e) {
        return !u.has(e) && !c.has(e) && !l.has(e);
    }
    isFetching(e) {
        return u.has(e);
    }
    getGame(e) {
        return l.get(e);
    }
    getLocalizedName(e) {
        var t;
        return null === (t = l.get(e)) || void 0 === t ? void 0 : t.name;
    }
    getThemes(e) {
        var t;
        return null === (t = l.get(e)) || void 0 === t ? void 0 : t.themes;
    }
    getCoverImageUrl(e, t) {
        var n;
        let r = null === (n = l.get(e)) || void 0 === n ? void 0 : n.coverImageUrl;
        return null == r ? null : null == t ? r : ''.concat(r, '?width=').concat(t.width, '&height=').concat(t.height);
    }
}
s(h, 'displayName', 'DetectableGameSupplementalStore'),
    (t.Z = new h(o.Z, {
        LOGOUT: d,
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH: _,
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH_SUCCESS: E,
        DETECTABLE_GAME_SUPPLEMENTAL_FETCH_FAILURE: f
    }));
