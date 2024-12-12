r.d(n, {
    Fb: function () {
        return p;
    },
    c: function () {
        return h;
    },
    fQ: function () {
        return g;
    }
});
var i = r(661763),
    a = r(202616),
    s = r(662845),
    o = r(766203),
    l = r(921336),
    u = r(192379),
    c = r(649859);
let d = new WeakMap();
function f(e, n) {
    let { id: r } = d.get(e);
    if (!r) throw Error('Unknown list');
    return `${r}-${_(n)}`;
}
function _(e) {
    return 'string' == typeof e ? e.replace(/\s*/g, '') : '' + e;
}
function h(e, n, r) {
    let { isVirtualized: l, keyboardDelegate: u, onAction: c, linkBehavior: f = 'action' } = e;
    !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: _ } = (0, o._t)({
            selectionManager: n.selectionManager,
            collection: n.collection,
            disabledKeys: n.disabledKeys,
            ref: r,
            keyboardDelegate: u,
            isVirtualized: l,
            selectOnFocus: 'replace' === n.selectionManager.selectionBehavior,
            shouldFocusWrap: e.shouldFocusWrap,
            linkBehavior: f
        }),
        h = (0, i.Me)(e.id);
    d.set(n, {
        id: h,
        onAction: c,
        linkBehavior: f
    });
    let p = (0, a.jS)({
            selectionManager: n.selectionManager,
            hasItemActions: !!c
        }),
        m = (0, s.pu)(r, { isDisabled: 0 !== n.collection.size }),
        g = (0, i.zL)(e, { labelable: !0 }),
        E = (0, i.dG)(
            g,
            {
                role: 'grid',
                id: h,
                'aria-multiselectable': 'multiple' === n.selectionManager.selectionMode ? 'true' : void 0
            },
            0 === n.collection.size ? { tabIndex: m ? -1 : 0 } : _,
            p
        );
    return l && ((E['aria-rowcount'] = n.collection.size), (E['aria-colcount'] = 1)), (0, a.B6)({}, n), { gridProps: E };
}
function p(e, n, r) {
    let { node: a, isVirtualized: _, shouldSelectOnPressUp: h } = e,
        { direction: p } = (0, c.bU)(),
        { onAction: g, linkBehavior: E } = d.get(n),
        v = (0, i.mp)(),
        I = (0, u.useRef)(null),
        T = () => {
            ((null != I.current && a.key !== I.current) || !r.current.contains(document.activeElement)) && (0, s.ex)(r.current);
        },
        { itemProps: b, ...y } = (0, o.Cs)({
            selectionManager: n.selectionManager,
            key: a.key,
            ref: r,
            isVirtualized: _,
            shouldSelectOnPressUp: h,
            onAction: g ? () => g(a.key) : void 0,
            focus: T,
            linkBehavior: E
        }),
        S = (e) => {
            if (!e.currentTarget.contains(e.target)) return;
            let n = (0, s.QL)(r.current);
            switch (((n.currentNode = document.activeElement), e.key)) {
                case 'ArrowLeft': {
                    let a = 'rtl' === p ? n.nextNode() : n.previousNode();
                    if (a) e.preventDefault(), e.stopPropagation(), (0, s.ex)(a), (0, i.Gt)(a, { containingElement: (0, i.rP)(r.current) });
                    else if ((e.preventDefault(), e.stopPropagation(), 'rtl' === p)) (0, s.ex)(r.current), (0, i.Gt)(r.current, { containingElement: (0, i.rP)(r.current) });
                    else {
                        n.currentNode = r.current;
                        let e = m(n);
                        e && ((0, s.ex)(e), (0, i.Gt)(e, { containingElement: (0, i.rP)(r.current) }));
                    }
                    break;
                }
                case 'ArrowRight': {
                    let a = 'rtl' === p ? n.previousNode() : n.nextNode();
                    if (a) e.preventDefault(), e.stopPropagation(), (0, s.ex)(a), (0, i.Gt)(a, { containingElement: (0, i.rP)(r.current) });
                    else if ((e.preventDefault(), e.stopPropagation(), 'ltr' === p)) (0, s.ex)(r.current), (0, i.Gt)(r.current, { containingElement: (0, i.rP)(r.current) });
                    else {
                        n.currentNode = r.current;
                        let e = m(n);
                        e && ((0, s.ex)(e), (0, i.Gt)(e, { containingElement: (0, i.rP)(r.current) }));
                    }
                    break;
                }
                case 'ArrowUp':
                case 'ArrowDown':
                    !e.altKey && r.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), r.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
            }
        },
        A = (e) => {
            if (((I.current = a.key), e.target !== r.current)) {
                !(0, l.E)() && n.selectionManager.setFocusedKey(a.key);
                return;
            }
        },
        N = y.hasAction ? (0, i.ib)(a.props) : {},
        C = (0, i.dG)(b, N, {
            role: 'row',
            onKeyDownCapture: S,
            onFocus: A,
            'aria-label': a.textValue || void 0,
            'aria-selected': n.selectionManager.canSelectItem(a.key) ? n.selectionManager.isSelected(a.key) : void 0,
            'aria-disabled': n.selectionManager.isDisabled(a.key) || void 0,
            'aria-labelledby': v && a.textValue ? `${f(n, a.key)} ${v}` : void 0,
            id: f(n, a.key)
        });
    return (
        _ && (C['aria-rowindex'] = a.index + 1),
        {
            rowProps: C,
            gridCellProps: {
                role: 'gridcell',
                'aria-colindex': 1
            },
            descriptionProps: { id: v },
            ...y
        }
    );
}
function m(e) {
    let n, r;
    do (r = e.lastChild()) && (n = r);
    while (r);
    return n;
}
function g(e, n) {
    let { key: r } = e,
        { checkboxProps: i } = (0, a.Ug)(e, n);
    return {
        checkboxProps: {
            ...i,
            'aria-labelledby': `${i.id} ${f(n, r)}`
        }
    };
}
