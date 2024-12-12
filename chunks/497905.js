r.d(n, {
    S: function () {
        return o;
    },
    V: function () {
        return l;
    }
});
var i = r(989103),
    a = r(398928),
    s = r(192379);
function o(e) {
    let { collection: n, focusMode: r } = e,
        o = (0, a.q)(e),
        l = (0, s.useMemo)(() => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()), [e.disabledKeys]),
        u = o.setFocusedKey;
    o.setFocusedKey = (e, a) => {
        if ('cell' === r && null != e) {
            let r = n.getItem(e);
            if ((null == r ? void 0 : r.type) === 'item') {
                var s, o;
                let l = (0, i._P)(r, n);
                e = 'last' === a ? (null === (s = (0, i.s)(l)) || void 0 === s ? void 0 : s.key) : null === (o = (0, i.l8)(l)) || void 0 === o ? void 0 : o.key;
            }
        }
        u(e, a);
    };
    let c = (0, s.useMemo)(() => new a.Z(n, o), [n, o]),
        d = (0, s.useRef)(null);
    return (
        (0, s.useEffect)(() => {
            if (null != o.focusedKey && !n.getItem(o.focusedKey)) {
                let e;
                let r = d.current.getItem(o.focusedKey),
                    a = null != r.parentKey && ('cell' === r.type || 'rowheader' === r.type || 'column' === r.type) ? d.current.getItem(r.parentKey) : r,
                    s = d.current.rows,
                    l = n.rows,
                    u = s.length - l.length,
                    f = Math.min(u > 1 ? Math.max(a.index - u + 1, 0) : a.index, l.length - 1);
                for (; f >= 0; ) {
                    if (!c.isDisabled(l[f].key) && 'headerrow' !== l[f].type) {
                        e = l[f];
                        break;
                    }
                    f < l.length - 1 ? f++ : (f > a.index && (f = a.index), f--);
                }
                if (e) {
                    let s = e.hasChildNodes ? [...(0, i._P)(e, n)] : [],
                        l = e.hasChildNodes && a !== r && r.index < s.length ? s[r.index].key : e.key;
                    o.setFocusedKey(l);
                } else o.setFocusedKey(null);
            }
            d.current = n;
        }, [n, c, o, o.focusedKey]),
        {
            collection: n,
            disabledKeys: l,
            isKeyboardNavigationDisabled: !1,
            selectionManager: c
        }
    );
}
class l {
    *[Symbol.iterator]() {
        yield* [...this.rows];
    }
    get size() {
        return [...this.rows].length;
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
        var e;
        return null === (e = [...this.rows][0]) || void 0 === e ? void 0 : e.key;
    }
    getLastKey() {
        var e;
        let n = [...this.rows];
        return null === (e = n[n.length - 1]) || void 0 === e ? void 0 : e.key;
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
        (this.keyMap = new Map()), (this.keyMap = new Map()), (this.columnCount = null == e ? void 0 : e.columnCount), (this.rows = []);
        let r = (n) => {
                let a,
                    s = this.keyMap.get(n.key);
                e.visitNode && (n = e.visitNode(n)), this.keyMap.set(n.key, n);
                let o = new Set();
                for (let e of n.childNodes) 'cell' === e.type && null == e.parentKey && (e.parentKey = n.key), o.add(e.key), a ? ((a.nextKey = e.key), (e.prevKey = a.key)) : (e.prevKey = null), r(e), (a = e);
                if ((a && (a.nextKey = null), s)) for (let e of s.childNodes) !o.has(e.key) && i(e);
            },
            i = (e) => {
                for (let n of (this.keyMap.delete(e.key), e.childNodes)) this.keyMap.get(n.key) === n && i(n);
            };
        e.items.forEach((e, i) => {
            let a = {
                level: 0,
                key: 'row-' + i,
                type: 'row',
                value: void 0,
                hasChildNodes: !0,
                childNodes: [...e.childNodes],
                rendered: void 0,
                textValue: void 0,
                ...e
            };
            n ? ((n.nextKey = a.key), (a.prevKey = n.key)) : (a.prevKey = null), this.rows.push(a), r(a), (n = a);
        }),
            n && (n.nextKey = null);
    }
}
