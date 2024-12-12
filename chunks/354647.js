r.d(n, {
    n_: function () {
        return l;
    }
});
var i = r(192379),
    a = r(398928),
    s = r(989103);
class o {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(e) {
        let n = this.keyMap.get(e);
        return n ? n.prevKey : null;
    }
    getKeyAfter(e) {
        let n = this.keyMap.get(e);
        return n ? n.nextKey : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(e) {
        return this.keyMap.get(e);
    }
    at(e) {
        let n = [...this.getKeys()];
        return this.getItem(n[e]);
    }
    getChildren(e) {
        let n = this.keyMap.get(e);
        return (null == n ? void 0 : n.childNodes) || [];
    }
    constructor(e) {
        let n;
        (this.keyMap = new Map()), (this.iterable = e);
        let r = (e) => {
            if ((this.keyMap.set(e.key, e), e.childNodes && 'section' === e.type)) for (let n of e.childNodes) r(n);
        };
        for (let n of e) r(n);
        let i = 0;
        for (let [e, r] of this.keyMap) n ? ((n.nextKey = e), (r.prevKey = n.key)) : ((this.firstKey = e), (r.prevKey = void 0)), 'item' === r.type && (r.index = i++), ((n = r).nextKey = void 0);
        this.lastKey = null == n ? void 0 : n.key;
    }
}
function l(e) {
    let { filter: n } = e,
        r = (0, a.q)(e),
        l = (0, i.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        u = (0, i.useCallback)((e) => new o(n ? n(e) : e), [n]),
        c = (0, i.useMemo)(() => ({ suppressTextValueWarning: e.suppressTextValueWarning }), [e.suppressTextValueWarning]),
        d = (0, s.Kx)(e, u, c),
        f = (0, i.useMemo)(() => new a.Z(d, r), [d, r]),
        _ = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            if (null != r.focusedKey && !d.getItem(r.focusedKey)) {
                let e;
                let n = _.current.getItem(r.focusedKey),
                    i = [..._.current.getKeys()]
                        .map((e) => {
                            let n = _.current.getItem(e);
                            return 'item' === n.type ? n : null;
                        })
                        .filter((e) => null !== e),
                    a = [...d.getKeys()]
                        .map((e) => {
                            let n = d.getItem(e);
                            return 'item' === n.type ? n : null;
                        })
                        .filter((e) => null !== e),
                    s = i.length - a.length,
                    o = Math.min(s > 1 ? Math.max(n.index - s + 1, 0) : n.index, a.length - 1);
                for (; o >= 0; ) {
                    if (!f.isDisabled(a[o].key)) {
                        e = a[o];
                        break;
                    }
                    o < a.length - 1 ? o++ : (o > n.index && (o = n.index), o--);
                }
                r.setFocusedKey(e ? e.key : null);
            }
            _.current = d;
        }, [d, f, r, r.focusedKey]),
        {
            collection: d,
            disabledKeys: l,
            selectionManager: f
        }
    );
}
