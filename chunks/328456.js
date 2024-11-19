n.d(e, {
    R: function () {
        return s;
    },
    b: function () {
        return a;
    }
}),
    n(724458),
    n(653041),
    n(47120);
var r = n(192379),
    i = n(979554);
class a {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(i.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(i.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(t) {
        var e;
        let n = (null !== (e = this.itemsByTypes.get(t)) && void 0 !== e ? e : [])[0];
        if (null != n) return n;
    }
    sortByTypes(t) {
        return t.reduce((t, e) => {
            let n = t.get(e.type);
            return null != n ? n.push(e) : t.set(e.type, [e]), t;
        }, new Map());
    }
    constructor(t) {
        var e, n, r;
        (e = this),
            (r = void 0),
            (n = 'itemsByTypes') in e
                ? Object.defineProperty(e, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[n] = r),
            (this.itemsByTypes = this.sortByTypes(t));
    }
}
let s = (t) => {
    let { firstProfileEffect: e, firstAvatarDecoration: n } = r.useMemo(() => new a(t.items), [t]);
    return {
        firstProfileEffect: e,
        firstAvatarDecoration: n
    };
};
