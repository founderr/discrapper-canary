r.d(n, {
    Fv: function () {
        return _;
    },
    Oj: function () {
        return u;
    },
    TV: function () {
        return h;
    },
    co: function () {
        return f;
    },
    x3: function () {
        return d;
    }
});
var i = r(661763),
    a = r(921336),
    s = r(523603),
    o = r(766203),
    l = r(989103);
let u = new WeakMap();
function c(e) {
    return 'string' == typeof e ? e.replace(/\s*/g, '') : '' + e;
}
function d(e, n) {
    let r = u.get(e);
    if (!r) throw Error('Unknown list');
    return `${r.id}-option-${c(n)}`;
}
function f(e, n, r) {
    let l = (0, i.zL)(e, { labelable: !0 }),
        c = e.selectionBehavior || 'toggle',
        d = e.linkBehavior || ('replace' === c ? 'action' : 'override');
    'toggle' === c && 'action' === d && (d = 'override');
    let { listProps: f } = (0, o._t)({
            ...e,
            ref: r,
            selectionManager: n.selectionManager,
            collection: n.collection,
            disabledKeys: n.disabledKeys,
            linkBehavior: d
        }),
        { focusWithinProps: _ } = (0, a.L_)({
            onFocusWithin: e.onFocus,
            onBlurWithin: e.onBlur,
            onFocusWithinChange: e.onFocusChange
        }),
        h = (0, i.Me)(e.id);
    u.set(n, {
        id: h,
        shouldUseVirtualFocus: e.shouldUseVirtualFocus,
        shouldSelectOnPressUp: e.shouldSelectOnPressUp,
        shouldFocusOnHover: e.shouldFocusOnHover,
        isVirtualized: e.isVirtualized,
        onAction: e.onAction,
        linkBehavior: d
    });
    let { labelProps: p, fieldProps: m } = (0, s.N)({
        ...e,
        id: h,
        labelElementType: 'span'
    });
    return {
        labelProps: p,
        listBoxProps: (0, i.dG)(l, _, 'multiple' === n.selectionManager.selectionMode ? { 'aria-multiselectable': 'true' } : {}, {
            role: 'listbox',
            ...(0, i.dG)(m, f)
        })
    };
}
function _(e, n, r) {
    var s, c, f, _, h, p, m;
    let { key: g } = e,
        E = u.get(n),
        v = null !== (c = e.isDisabled) && void 0 !== c ? c : n.disabledKeys.has(g),
        I = null !== (f = e.isSelected) && void 0 !== f ? f : n.selectionManager.isSelected(g),
        T = null !== (_ = e.shouldSelectOnPressUp) && void 0 !== _ ? _ : null == E ? void 0 : E.shouldSelectOnPressUp,
        b = null !== (h = e.shouldFocusOnHover) && void 0 !== h ? h : null == E ? void 0 : E.shouldFocusOnHover,
        y = null !== (p = e.shouldUseVirtualFocus) && void 0 !== p ? p : null == E ? void 0 : E.shouldUseVirtualFocus,
        S = null !== (m = e.isVirtualized) && void 0 !== m ? m : null == E ? void 0 : E.isVirtualized,
        A = (0, i.mp)(),
        N = (0, i.mp)(),
        C = {
            role: 'option',
            'aria-disabled': v || void 0,
            'aria-selected': 'none' !== n.selectionManager.selectionMode ? I : void 0
        };
    !((0, i.V5)() && (0, i.Pf)()) && ((C['aria-label'] = e['aria-label']), (C['aria-labelledby'] = A), (C['aria-describedby'] = N));
    let R = n.collection.getItem(g);
    if (S) {
        let e = Number(null == R ? void 0 : R.index);
        (C['aria-posinset'] = Number.isNaN(e) ? void 0 : e + 1), (C['aria-setsize'] = (0, l.is)(n.collection));
    }
    let {
            itemProps: O,
            isPressed: D,
            isFocused: L,
            hasAction: x,
            allowsSelection: w
        } = (0, o.Cs)({
            selectionManager: n.selectionManager,
            key: g,
            ref: r,
            shouldSelectOnPressUp: T,
            allowsDifferentPressOrigin: T && b,
            isVirtualized: S,
            shouldUseVirtualFocus: y,
            isDisabled: v,
            onAction: (null == E ? void 0 : E.onAction)
                ? () => {
                      var e;
                      return null == E ? void 0 : null === (e = E.onAction) || void 0 === e ? void 0 : e.call(E, g);
                  }
                : void 0,
            linkBehavior: null == E ? void 0 : E.linkBehavior
        }),
        { hoverProps: P } = (0, a.XI)({
            isDisabled: v || !b,
            onHoverStart() {
                !(0, a.E)() && (n.selectionManager.setFocused(!0), n.selectionManager.setFocusedKey(g));
            }
        }),
        M = (0, i.zL)(null == R ? void 0 : R.props, { isLink: !!(null == R ? void 0 : null === (s = R.props) || void 0 === s ? void 0 : s.href) });
    return (
        delete M.id,
        {
            optionProps: {
                ...C,
                ...(0, i.dG)(M, O, P),
                id: d(n, g)
            },
            labelProps: { id: A },
            descriptionProps: { id: N },
            isFocused: L,
            isFocusVisible: L && (0, a.E)(),
            isSelected: I,
            isDisabled: v,
            isPressed: D,
            allowsSelection: w,
            hasAction: x
        }
    );
}
function h(e) {
    let { heading: n, 'aria-label': r } = e,
        a = (0, i.Me)();
    return {
        itemProps: { role: 'presentation' },
        headingProps: n
            ? {
                  id: a,
                  role: 'presentation'
              }
            : {},
        groupProps: {
            role: 'group',
            'aria-label': r,
            'aria-labelledby': n ? a : void 0
        }
    };
}
