e.d(t, {
    CM: function () {
        return Z;
    },
    UT: function () {
        return v;
    },
    _Z: function () {
        return p;
    },
    kj: function () {
        return f;
    },
    oC: function () {
        return h;
    },
    s3: function () {
        return m;
    },
    uA: function () {
        return g;
    },
    xh: function () {
        return C;
    }
}),
    e(47120);
var i = e(524437),
    r = e(675478),
    a = e(592125),
    l = e(496675),
    o = e(709054),
    u = e(853856),
    d = e(231338);
function s() {
    let n = u.Z.getFavoriteChannels(),
        t = 1;
    for (let e in n) t = Math.max(t, n[e].order);
    return t + 1;
}
function c(n) {
    for (let t in n) {
        let e = n[t];
        if (null == e) {
            delete n[t];
            continue;
        }
        if (e.type === i.Dd.CATEGORY) continue;
        let r = a.Z.getChannel(t);
        if (null == r) {
            delete n[t];
            continue;
        }
        if (!r.isPrivate()) {
            if (!l.Z.can(d.Pl.VIEW_CHANNEL, r)) {
                delete n[t];
                continue;
            }
        }
    }
}
function f(n, t) {
    if (!u.Z.isFavorite(n))
        r.hW.updateAsync(
            'favorites',
            (e) => {
                (e.favoriteChannels[n] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != t ? t : '0'
                })),
                    c(e.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION
        );
}
function h(n) {
    let t = u.Z.getFavorite(n);
    if (null != t)
        r.hW.updateAsync(
            'favorites',
            (e) => {
                if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY)) for (let t in e.favoriteChannels) e.favoriteChannels[t].parentId === n && (e.favoriteChannels[t].parentId = '0');
                c(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function v(n, t) {
    if (!!u.Z.isFavorite(n))
        r.hW.updateAsync(
            'favorites',
            (e) => {
                e.favoriteChannels[n].nickname = null != t ? t : '';
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function Z(n) {
    let t = o.default.fromTimestamp(Date.now());
    r.hW.updateAsync(
        'favorites',
        (e) => {
            e.favoriteChannels[t] = i.aV.create({
                nickname: n,
                type: i.Dd.CATEGORY,
                position: s(),
                parentId: '0'
            });
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function C(n) {
    h(n);
}
function m(n) {
    r.hW.updateAsync(
        'favorites',
        (t) => {
            for (let i of n)
                if ((null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var e;
                    t.favoriteChannels[i.id].parentId = null !== (e = i.parent_id) && void 0 !== e ? e : '0';
                }
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function g(n, t) {
    r.hW.updateAsync(
        'favorites',
        (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : '0';
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function p() {
    r.hW.updateAsync(
        'favorites',
        (n) => {
            n.muted = !n.muted;
        },
        r.fy.INFREQUENT_USER_ACTION
    );
}
