e.d(t, {
    CM: function () {
        return _;
    },
    UT: function () {
        return g;
    },
    _Z: function () {
        return h;
    },
    kj: function () {
        return f;
    },
    oC: function () {
        return E;
    },
    s3: function () {
        return C;
    },
    uA: function () {
        return p;
    },
    xh: function () {
        return v;
    }
}),
    e(47120);
var i = e(524437),
    a = e(675478),
    r = e(592125),
    l = e(496675),
    u = e(709054),
    o = e(853856),
    c = e(231338);
function d() {
    let n = o.Z.getFavoriteChannels(),
        t = 1;
    for (let e in n) t = Math.max(t, n[e].order);
    return t + 1;
}
function s(n) {
    for (let t in n) {
        let e = n[t];
        if (null == e) {
            delete n[t];
            continue;
        }
        if (e.type === i.Dd.CATEGORY) continue;
        let a = r.Z.getChannel(t);
        if (null == a) {
            delete n[t];
            continue;
        }
        if (!a.isPrivate()) {
            if (!l.Z.can(c.Pl.VIEW_CHANNEL, a)) {
                delete n[t];
                continue;
            }
        }
    }
}
function f(n, t) {
    if (!o.Z.isFavorite(n))
        a.hW.updateAsync(
            'favorites',
            (e) => {
                (e.favoriteChannels[n] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: d(),
                    parentId: null != t ? t : '0'
                })),
                    s(e.favoriteChannels);
            },
            a.fy.FREQUENT_USER_ACTION
        );
}
function E(n) {
    let t = o.Z.getFavorite(n);
    if (null != t)
        a.hW.updateAsync(
            'favorites',
            (e) => {
                if ((delete e.favoriteChannels[n], t.type === i.Dd.CATEGORY)) for (let t in e.favoriteChannels) e.favoriteChannels[t].parentId === n && (e.favoriteChannels[t].parentId = '0');
                s(e.favoriteChannels);
            },
            a.fy.INFREQUENT_USER_ACTION
        );
}
function g(n, t) {
    if (!!o.Z.isFavorite(n))
        a.hW.updateAsync(
            'favorites',
            (e) => {
                e.favoriteChannels[n].nickname = null != t ? t : '';
            },
            a.fy.INFREQUENT_USER_ACTION
        );
}
function _(n) {
    let t = u.default.fromTimestamp(Date.now());
    a.hW.updateAsync(
        'favorites',
        (e) => {
            e.favoriteChannels[t] = i.aV.create({
                nickname: n,
                type: i.Dd.CATEGORY,
                position: d(),
                parentId: '0'
            });
        },
        a.fy.FREQUENT_USER_ACTION
    );
}
function v(n) {
    E(n);
}
function C(n) {
    a.hW.updateAsync(
        'favorites',
        (t) => {
            for (let i of n)
                if ((null != i.position && (t.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var e;
                    t.favoriteChannels[i.id].parentId = null !== (e = i.parent_id) && void 0 !== e ? e : '0';
                }
        },
        a.fy.FREQUENT_USER_ACTION
    );
}
function p(n, t) {
    a.hW.updateAsync(
        'favorites',
        (e) => {
            e.favoriteChannels[n].parentId = null != t ? t : '0';
        },
        a.fy.FREQUENT_USER_ACTION
    );
}
function h() {
    a.hW.updateAsync(
        'favorites',
        (n) => {
            n.muted = !n.muted;
        },
        a.fy.INFREQUENT_USER_ACTION
    );
}
