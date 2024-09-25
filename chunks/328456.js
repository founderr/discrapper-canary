r.d(t, {
    R: function () {
        return o;
    },
    b: function () {
        return s;
    }
}),
    r(724458),
    r(653041),
    r(47120);
var n = r(470079),
    a = r(979554);
class s {
    get firstAvatarDecoration() {
        return this.getFirstItemByType(a.Z.AVATAR_DECORATION);
    }
    get firstProfileEffect() {
        return this.getFirstItemByType(a.Z.PROFILE_EFFECT);
    }
    getFirstItemByType(e) {
        var t;
        let r = (null !== (t = this.itemsByTypes.get(e)) && void 0 !== t ? t : [])[0];
        if (null != r) return r;
    }
    sortByTypes(e) {
        return e.reduce((e, t) => {
            let r = e.get(t.type);
            return null != r ? r.push(t) : e.set(t.type, [t]), e;
        }, new Map());
    }
    constructor(e) {
        var t, r, n;
        (t = this),
            (n = void 0),
            (r = 'itemsByTypes') in t
                ? Object.defineProperty(t, r, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[r] = n),
            (this.itemsByTypes = this.sortByTypes(e));
    }
}
let o = (e) => {
    let { firstProfileEffect: t, firstAvatarDecoration: r } = n.useMemo(() => new s(e.items), [e]);
    return {
        firstProfileEffect: t,
        firstAvatarDecoration: r
    };
};
