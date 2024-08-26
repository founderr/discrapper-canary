n.d(t, {
    CM: function () {
        return _;
    },
    UT: function () {
        return I;
    },
    _Z: function () {
        return S;
    },
    kj: function () {
        return E;
    },
    oC: function () {
        return f;
    },
    s3: function () {
        return N;
    },
    uA: function () {
        return p;
    },
    xh: function () {
        return T;
    }
}),
    n(47120);
var r = n(524437),
    i = n(675478),
    o = n(592125),
    a = n(496675),
    u = n(709054),
    s = n(853856),
    l = n(231338);
function d() {
    let e = s.Z.getFavoriteChannels(),
        t = 1;
    for (let n in e) t = Math.max(t, e[n].order);
    return t + 1;
}
function c(e) {
    for (let t in e) {
        let n = e[t];
        if (null == n) {
            delete e[t];
            continue;
        }
        if (n.type === r.Dd.CATEGORY) continue;
        let i = o.Z.getChannel(t);
        if (null == i) {
            delete e[t];
            continue;
        }
        if (!i.isPrivate()) {
            if (!a.Z.can(l.Pl.VIEW_CHANNEL, i)) {
                delete e[t];
                continue;
            }
        }
    }
}
function E(e, t) {
    if (!s.Z.isFavorite(e))
        i.hW.updateAsync(
            'favorites',
            (n) => {
                (n.favoriteChannels[e] = r.aV.create({
                    nickname: '',
                    type: r.Dd.REFERENCE_ORIGINAL,
                    position: d(),
                    parentId: null != t ? t : '0'
                })),
                    c(n.favoriteChannels);
            },
            i.fy.FREQUENT_USER_ACTION
        );
}
function f(e) {
    let t = s.Z.getFavorite(e);
    if (null != t)
        i.hW.updateAsync(
            'favorites',
            (n) => {
                if ((delete n.favoriteChannels[e], t.type === r.Dd.CATEGORY)) for (let t in n.favoriteChannels) n.favoriteChannels[t].parentId === e && (n.favoriteChannels[t].parentId = '0');
                c(n.favoriteChannels);
            },
            i.fy.INFREQUENT_USER_ACTION
        );
}
function I(e, t) {
    if (!!s.Z.isFavorite(e))
        i.hW.updateAsync(
            'favorites',
            (n) => {
                n.favoriteChannels[e].nickname = null != t ? t : '';
            },
            i.fy.INFREQUENT_USER_ACTION
        );
}
function _(e) {
    let t = u.default.fromTimestamp(Date.now());
    i.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[t] = r.aV.create({
                nickname: e,
                type: r.Dd.CATEGORY,
                position: d(),
                parentId: '0'
            });
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function T(e) {
    f(e);
}
function N(e) {
    i.hW.updateAsync(
        'favorites',
        (t) => {
            for (let r of e)
                if ((null != r.position && (t.favoriteChannels[r.id].position = r.position), void 0 !== r.parent_id)) {
                    var n;
                    t.favoriteChannels[r.id].parentId = null !== (n = r.parent_id) && void 0 !== n ? n : '0';
                }
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function p(e, t) {
    i.hW.updateAsync(
        'favorites',
        (n) => {
            n.favoriteChannels[e].parentId = null != t ? t : '0';
        },
        i.fy.FREQUENT_USER_ACTION
    );
}
function S() {
    i.hW.updateAsync(
        'favorites',
        (e) => {
            e.muted = !e.muted;
        },
        i.fy.INFREQUENT_USER_ACTION
    );
}
