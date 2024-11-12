var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(524437),
    u = n(570140),
    c = n(581883),
    d = n(131704),
    f = n(981631);
let _ = {},
    p = !1;
function h() {
    var e, t, n;
    (p = null !== (n = null === (e = c.Z.settings.favorites) || void 0 === e ? void 0 : e.muted) && void 0 !== n && n), (_ = {});
    let r = null === (t = c.Z.settings.favorites) || void 0 === t ? void 0 : t.favoriteChannels;
    if (null == r) return !1;
    for (let e in r) {
        let t = r[e];
        _[e] = {
            id: e,
            nickname: '' !== t.nickname ? t.nickname : null,
            type: t.type,
            order: t.position,
            parentId: '0' !== t.parentId ? t.parentId : null
        };
    }
}
class m extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z), h(), this.syncWith([c.Z], h);
    }
    getFavoriteChannels() {
        return _;
    }
    get favoriteServerMuted() {
        return p;
    }
    isFavorite(e) {
        return null != e && null != _[e];
    }
    getFavorite(e) {
        if (null != e) return _[e];
    }
    getCategoryRecord(e) {
        if (e in _ && _[e].type === l.Dd.CATEGORY) {
            var t, n;
            return (
                (t = _[e]),
                (0, d.kt)({
                    id: t.id,
                    name: null !== (n = t.nickname) && void 0 !== n ? n : '',
                    type: f.d4z.GUILD_CATEGORY,
                    position: t.order,
                    guild_id: f.I_8
                })
            );
        }
        return null;
    }
    getNickname(e) {
        var t;
        let n = this.getFavorite(e);
        return null !== (t = null == n ? void 0 : n.nickname) && void 0 !== t ? t : void 0;
    }
}
(a = 'FavoriteStore'),
    (i = 'displayName') in (r = m)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new m(u.Z, {}));
