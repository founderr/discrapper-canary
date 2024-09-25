n.d(t, {
    KK: function () {
        return u;
    },
    Z5: function () {
        return d;
    },
    aG: function () {
        return c;
    },
    d$: function () {
        return _;
    }
});
var r = n(411104);
var i = n(358085),
    a = n(18323),
    o = n(647162),
    s = n(616922);
function l(e, t, n) {
    let r;
    !(0, i.isDesktop)() && (r = window.open('', '_blank')),
        (0, o.iy)(e, t)
            .then((e) => n(e))
            .then((e) => {
                let { resourceType: t, resourceId: n } = e,
                    i = a.Z.isProtocolRegistered() ? s.C7.PLAYER_OPEN(t, n) : s.C7.WEB_OPEN(t, n);
                null != r ? (r.location.href = i) : window.open(i);
            })
            .catch(() => {
                null != r && r.close();
            });
}
function u() {
    window.open(s.C7.PREMIUM_SITE);
}
function c(e) {
    var t;
    let { sync_id: n, metadata: r } = e;
    if (null == n) return;
    let i = (0, s.c8)(null !== (t = null == r ? void 0 : r.type) && void 0 !== t ? t : s.Hw.TRACK);
    if (null == i) return;
    let o = a.Z.isProtocolRegistered() ? s.C7.PLAYER_OPEN(i, n) : s.C7.WEB_OPEN(i, n);
    window.open(o);
}
function d(e, t) {
    l(e, t, (t) => {
        var n;
        let { album_id: r } = t;
        return {
            resourceType: (0, s.c8)(null === (n = e.metadata) || void 0 === n ? void 0 : n.type) === s.Hw.EPISODE ? s.Hw.SHOW : s.Hw.ALBUM,
            resourceId: r
        };
    });
}
function _(e, t, n) {
    l(e, t, (e) => {
        let { artist_ids: t } = e;
        if (null == t) throw Error('no artist ids in metadata');
        let r = t[n];
        if (null == r) throw Error('invalid artist index');
        return {
            resourceType: s.Hw.ARTIST,
            resourceId: r
        };
    });
}
