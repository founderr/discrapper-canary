n.d(t, {
    Fb: function () {
        return f;
    },
    c: function () {
        return E;
    },
    fQ: function () {
        return p;
    }
});
var r = n(182823),
    i = n(464593),
    a = n(706682),
    o = n(148836),
    s = n(612001),
    l = n(470079),
    u = n(616073);
let c = new WeakMap();
function d(e, t) {
    let { id: n } = c.get(e);
    if (!n) throw Error('Unknown list');
    return `${n}-${_(t)}`;
}
function _(e) {
    return 'string' == typeof e ? e.replace(/\s*/g, '') : '' + e;
}
function E(e, t, n) {
    let { isVirtualized: s, keyboardDelegate: l, onAction: u, linkBehavior: d = 'action' } = e;
    !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: _ } = (0, o._t)({
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            ref: n,
            keyboardDelegate: l,
            isVirtualized: s,
            selectOnFocus: 'replace' === t.selectionManager.selectionBehavior,
            shouldFocusWrap: e.shouldFocusWrap,
            linkBehavior: d
        }),
        E = (0, r.Me)(e.id);
    c.set(t, {
        id: E,
        onAction: u,
        linkBehavior: d
    });
    let f = (0, i.jS)({
            selectionManager: t.selectionManager,
            hasItemActions: !!u
        }),
        h = (0, a.pu)(n, { isDisabled: 0 !== t.collection.size }),
        p = (0, r.zL)(e, { labelable: !0 }),
        m = (0, r.dG)(
            p,
            {
                role: 'grid',
                id: E,
                'aria-multiselectable': 'multiple' === t.selectionManager.selectionMode ? 'true' : void 0
            },
            0 === t.collection.size ? { tabIndex: h ? -1 : 0 } : _,
            f
        );
    return s && ((m['aria-rowcount'] = t.collection.size), (m['aria-colcount'] = 1)), (0, i.B6)({}, t), { gridProps: m };
}
function f(e, t, n) {
    let { node: i, isVirtualized: _, shouldSelectOnPressUp: E } = e,
        { direction: f } = (0, u.bU)(),
        { onAction: p, linkBehavior: m } = c.get(t),
        I = (0, r.mp)(),
        T = (0, l.useRef)(null),
        g = () => {
            ((null != T.current && i.key !== T.current) || !n.current.contains(document.activeElement)) && (0, a.ex)(n.current);
        },
        { itemProps: S, ...A } = (0, o.Cs)({
            selectionManager: t.selectionManager,
            key: i.key,
            ref: n,
            isVirtualized: _,
            shouldSelectOnPressUp: E,
            onAction: p ? () => p(i.key) : void 0,
            focus: g,
            linkBehavior: m
        }),
        v = (e) => {
            if (!e.currentTarget.contains(e.target)) return;
            let t = (0, a.QL)(n.current);
            switch (((t.currentNode = document.activeElement), e.key)) {
                case 'ArrowLeft': {
                    let i = 'rtl' === f ? t.nextNode() : t.previousNode();
                    if (i) e.preventDefault(), e.stopPropagation(), (0, a.ex)(i), (0, r.Gt)(i, { containingElement: (0, r.rP)(n.current) });
                    else if ((e.preventDefault(), e.stopPropagation(), 'rtl' === f)) (0, a.ex)(n.current), (0, r.Gt)(n.current, { containingElement: (0, r.rP)(n.current) });
                    else {
                        t.currentNode = n.current;
                        let e = h(t);
                        e && ((0, a.ex)(e), (0, r.Gt)(e, { containingElement: (0, r.rP)(n.current) }));
                    }
                    break;
                }
                case 'ArrowRight': {
                    let i = 'rtl' === f ? t.previousNode() : t.nextNode();
                    if (i) e.preventDefault(), e.stopPropagation(), (0, a.ex)(i), (0, r.Gt)(i, { containingElement: (0, r.rP)(n.current) });
                    else if ((e.preventDefault(), e.stopPropagation(), 'ltr' === f)) (0, a.ex)(n.current), (0, r.Gt)(n.current, { containingElement: (0, r.rP)(n.current) });
                    else {
                        t.currentNode = n.current;
                        let e = h(t);
                        e && ((0, a.ex)(e), (0, r.Gt)(e, { containingElement: (0, r.rP)(n.current) }));
                    }
                    break;
                }
                case 'ArrowUp':
                case 'ArrowDown':
                    !e.altKey && n.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), n.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
            }
        },
        N = (e) => {
            if (((T.current = i.key), e.target !== n.current)) {
                !(0, s.E)() && t.selectionManager.setFocusedKey(i.key);
                return;
            }
        },
        O = A.hasAction ? (0, r.ib)(i.props) : {},
        R = (0, r.dG)(S, O, {
            role: 'row',
            onKeyDownCapture: v,
            onFocus: N,
            'aria-label': i.textValue || void 0,
            'aria-selected': t.selectionManager.canSelectItem(i.key) ? t.selectionManager.isSelected(i.key) : void 0,
            'aria-disabled': t.selectionManager.isDisabled(i.key) || void 0,
            'aria-labelledby': I && i.textValue ? `${d(t, i.key)} ${I}` : void 0,
            id: d(t, i.key)
        });
    return (
        _ && (R['aria-rowindex'] = i.index + 1),
        {
            rowProps: R,
            gridCellProps: {
                role: 'gridcell',
                'aria-colindex': 1
            },
            descriptionProps: { id: I },
            ...A
        }
    );
}
function h(e) {
    let t, n;
    do (n = e.lastChild()) && (t = n);
    while (n);
    return t;
}
function p(e, t) {
    let { key: n } = e,
        { checkboxProps: r } = (0, i.Ug)(e, t);
    return {
        checkboxProps: {
            ...r,
            'aria-labelledby': `${r.id} ${d(t, n)}`
        }
    };
}
