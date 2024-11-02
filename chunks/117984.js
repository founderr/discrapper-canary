e.d(n, {
    CM: function () {
        return T;
    },
    UT: function () {
        return I;
    },
    _Z: function () {
        return A;
    },
    kj: function () {
        return E;
    },
    oC: function () {
        return f;
    },
    s3: function () {
        return _;
    },
    uA: function () {
        return N;
    },
    xh: function () {
        return p;
    }
}),
    e(47120);
var i = e(524437),
    r = e(675478),
    o = e(592125),
    a = e(496675),
    u = e(709054),
    l = e(853856),
    d = e(231338);
function s() {
    let t = l.Z.getFavoriteChannels(),
        n = 1;
    for (let e in t) n = Math.max(n, t[e].order);
    return n + 1;
}
function c(t) {
    for (let n in t) {
        let e = t[n];
        if (null == e) {
            delete t[n];
            continue;
        }
        if (e.type === i.Dd.CATEGORY) continue;
        let r = o.Z.getChannel(n);
        if (null == r) {
            delete t[n];
            continue;
        }
        if (!r.isPrivate()) {
            if (!a.Z.can(d.Pl.VIEW_CHANNEL, r)) {
                delete t[n];
                continue;
            }
        }
    }
}
function E(t, n) {
    if (!l.Z.isFavorite(t))
        r.hW.updateAsync(
            'favorites',
            (e) => {
                (e.favoriteChannels[t] = i.aV.create({
                    nickname: '',
                    type: i.Dd.REFERENCE_ORIGINAL,
                    position: s(),
                    parentId: null != n ? n : '0'
                })),
                    c(e.favoriteChannels);
            },
            r.fy.FREQUENT_USER_ACTION
        );
}
function f(t) {
    let n = l.Z.getFavorite(t);
    if (null != n)
        r.hW.updateAsync(
            'favorites',
            (e) => {
                if ((delete e.favoriteChannels[t], n.type === i.Dd.CATEGORY)) for (let n in e.favoriteChannels) e.favoriteChannels[n].parentId === t && (e.favoriteChannels[n].parentId = '0');
                c(e.favoriteChannels);
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function I(t, n) {
    if (!!l.Z.isFavorite(t))
        r.hW.updateAsync(
            'favorites',
            (e) => {
                e.favoriteChannels[t].nickname = null != n ? n : '';
            },
            r.fy.INFREQUENT_USER_ACTION
        );
}
function T(t) {
    let n = u.default.fromTimestamp(Date.now());
    r.hW.updateAsync(
        'favorites',
        (e) => {
            e.favoriteChannels[n] = i.aV.create({
                nickname: t,
                type: i.Dd.CATEGORY,
                position: s(),
                parentId: '0'
            });
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function p(t) {
    f(t);
}
function _(t) {
    r.hW.updateAsync(
        'favorites',
        (n) => {
            for (let i of t)
                if ((null != i.position && (n.favoriteChannels[i.id].position = i.position), void 0 !== i.parent_id)) {
                    var e;
                    n.favoriteChannels[i.id].parentId = null !== (e = i.parent_id) && void 0 !== e ? e : '0';
                }
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function N(t, n) {
    r.hW.updateAsync(
        'favorites',
        (e) => {
            e.favoriteChannels[t].parentId = null != n ? n : '0';
        },
        r.fy.FREQUENT_USER_ACTION
    );
}
function A() {
    r.hW.updateAsync(
        'favorites',
        (t) => {
            t.muted = !t.muted;
        },
        r.fy.INFREQUENT_USER_ACTION
    );
}
