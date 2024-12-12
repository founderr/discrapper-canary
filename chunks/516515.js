r.d(n, {
    hp: function () {
        return f;
    },
    xD: function () {
        return c;
    }
});
var i = r(661763),
    a = r(766203),
    s = r(192379),
    o = r(649859);
let l = new WeakMap();
function u(e, n, r) {
    'string' == typeof n && (n = n.replace(/\s+/g, ''));
    let i = l.get(e);
    return `${i}-${r}-${n}`;
}
function c(e, n, r) {
    var s;
    let { key: o, isDisabled: l, shouldSelectOnPressUp: c } = e,
        { selectionManager: d, selectedKey: f } = n,
        _ = o === f,
        h = l || n.isDisabled || n.disabledKeys.has(o),
        { itemProps: p, isPressed: m } = (0, a.Cs)({
            selectionManager: d,
            key: o,
            ref: r,
            isDisabled: h,
            shouldSelectOnPressUp: c,
            linkBehavior: 'selection'
        }),
        g = u(n, o, 'tab'),
        E = u(n, o, 'tabpanel'),
        { tabIndex: v } = p,
        I = n.collection.getItem(o),
        T = (0, i.zL)(null == I ? void 0 : I.props, {
            isLink: !!(null == I ? void 0 : null === (s = I.props) || void 0 === s ? void 0 : s.href),
            labelable: !0
        });
    return (
        delete T.id,
        {
            tabProps: (0, i.dG)(T, p, {
                id: g,
                'aria-selected': _,
                'aria-disabled': h || void 0,
                'aria-controls': _ ? E : void 0,
                tabIndex: h ? void 0 : v,
                role: 'tab'
            }),
            isSelected: _,
            isDisabled: h,
            isPressed: m
        }
    );
}
class d {
    getKeyLeftOf(e) {
        return this.flipDirection ? this.getNextKey(e) : this.getPreviousKey(e);
    }
    getKeyRightOf(e) {
        return this.flipDirection ? this.getPreviousKey(e) : this.getNextKey(e);
    }
    getKeyAbove(e) {
        return this.getPreviousKey(e);
    }
    getKeyBelow(e) {
        return this.getNextKey(e);
    }
    getFirstKey() {
        let e = this.collection.getFirstKey();
        return null != e && this.disabledKeys.has(e) && (e = this.getNextKey(e)), e;
    }
    getLastKey() {
        let e = this.collection.getLastKey();
        return null != e && this.disabledKeys.has(e) && (e = this.getPreviousKey(e)), e;
    }
    getNextKey(e) {
        do null == (e = this.collection.getKeyAfter(e)) && (e = this.collection.getFirstKey());
        while (this.disabledKeys.has(e));
        return e;
    }
    getPreviousKey(e) {
        do null == (e = this.collection.getKeyBefore(e)) && (e = this.collection.getLastKey());
        while (this.disabledKeys.has(e));
        return e;
    }
    constructor(e, n, r, i = new Set()) {
        (this.collection = e), (this.flipDirection = 'rtl' === n && 'horizontal' === r), (this.disabledKeys = i);
    }
}
function f(e, n, r) {
    let { orientation: u = 'horizontal', keyboardActivation: c = 'automatic' } = e,
        { collection: f, selectionManager: _, disabledKeys: h } = n,
        { direction: p } = (0, o.bU)(),
        m = (0, s.useMemo)(() => new d(f, p, u, h), [f, h, u, p]),
        { collectionProps: g } = (0, a.gq)({
            ref: r,
            selectionManager: _,
            keyboardDelegate: m,
            selectOnFocus: 'automatic' === c,
            disallowEmptySelection: !0,
            scrollRef: r,
            linkBehavior: 'selection'
        }),
        E = (0, i.Me)();
    l.set(n, E);
    let v = (0, i.bE)({
        ...e,
        id: E
    });
    return {
        tabListProps: {
            ...(0, i.dG)(g, v),
            role: 'tablist',
            'aria-orientation': u,
            tabIndex: void 0
        }
    };
}
