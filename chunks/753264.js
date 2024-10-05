n.d(t, {
    Fv: function () {
        return d;
    },
    Oj: function () {
        return l;
    },
    TV: function () {
        return _;
    },
    co: function () {
        return c;
    },
    x3: function () {
        return u;
    }
});
var r = n(182823),
    i = n(612001),
    a = n(251433),
    s = n(148836),
    o = n(275857);
let l = new WeakMap();
function u(e, t) {
    var n;
    let r = l.get(e);
    if (!r) throw Error('Unknown list');
    return `${r.id}-option-${'string' == typeof (n = t) ? n.replace(/\s*/g, '') : '' + n}`;
}
function c(e, t, n) {
    let o = (0, r.zL)(e, { labelable: !0 }),
        u = e.selectionBehavior || 'toggle',
        c = e.linkBehavior || ('replace' === u ? 'action' : 'override');
    'toggle' === u && 'action' === c && (c = 'override');
    let { listProps: d } = (0, s._t)({
            ...e,
            ref: n,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            linkBehavior: c
        }),
        { focusWithinProps: _ } = (0, i.L_)({
            onFocusWithin: e.onFocus,
            onBlurWithin: e.onBlur,
            onFocusWithinChange: e.onFocusChange
        }),
        E = (0, r.Me)(e.id);
    l.set(t, {
        id: E,
        shouldUseVirtualFocus: e.shouldUseVirtualFocus,
        shouldSelectOnPressUp: e.shouldSelectOnPressUp,
        shouldFocusOnHover: e.shouldFocusOnHover,
        isVirtualized: e.isVirtualized,
        onAction: e.onAction,
        linkBehavior: c
    });
    let { labelProps: f, fieldProps: h } = (0, a.N)({
        ...e,
        id: E,
        labelElementType: 'span'
    });
    return {
        labelProps: f,
        listBoxProps: (0, r.dG)(o, _, 'multiple' === t.selectionManager.selectionMode ? { 'aria-multiselectable': 'true' } : {}, {
            role: 'listbox',
            ...(0, r.dG)(h, d)
        })
    };
}
function d(e, t, n) {
    var a, c, d, _, E, f, h;
    let { key: p } = e,
        I = l.get(t),
        m = null !== (c = e.isDisabled) && void 0 !== c ? c : t.disabledKeys.has(p),
        T = null !== (d = e.isSelected) && void 0 !== d ? d : t.selectionManager.isSelected(p),
        S = null !== (_ = e.shouldSelectOnPressUp) && void 0 !== _ ? _ : null == I ? void 0 : I.shouldSelectOnPressUp,
        g = null !== (E = e.shouldFocusOnHover) && void 0 !== E ? E : null == I ? void 0 : I.shouldFocusOnHover,
        A = null !== (f = e.shouldUseVirtualFocus) && void 0 !== f ? f : null == I ? void 0 : I.shouldUseVirtualFocus,
        N = null !== (h = e.isVirtualized) && void 0 !== h ? h : null == I ? void 0 : I.isVirtualized,
        O = (0, r.mp)(),
        R = (0, r.mp)(),
        v = {
            role: 'option',
            'aria-disabled': m || void 0,
            'aria-selected': 'none' !== t.selectionManager.selectionMode ? T : void 0
        };
    !((0, r.V5)() && (0, r.Pf)()) && ((v['aria-label'] = e['aria-label']), (v['aria-labelledby'] = O), (v['aria-describedby'] = R));
    let C = t.collection.getItem(p);
    if (N) {
        let e = Number(null == C ? void 0 : C.index);
        (v['aria-posinset'] = Number.isNaN(e) ? void 0 : e + 1), (v['aria-setsize'] = (0, o.is)(t.collection));
    }
    let {
            itemProps: L,
            isPressed: D,
            isFocused: y,
            hasAction: b,
            allowsSelection: M
        } = (0, s.Cs)({
            selectionManager: t.selectionManager,
            key: p,
            ref: n,
            shouldSelectOnPressUp: S,
            allowsDifferentPressOrigin: S && g,
            isVirtualized: N,
            shouldUseVirtualFocus: A,
            isDisabled: m,
            onAction: (null == I ? void 0 : I.onAction)
                ? () => {
                      var e;
                      return null == I ? void 0 : null === (e = I.onAction) || void 0 === e ? void 0 : e.call(I, p);
                  }
                : void 0,
            linkBehavior: null == I ? void 0 : I.linkBehavior
        }),
        { hoverProps: P } = (0, i.XI)({
            isDisabled: m || !g,
            onHoverStart() {
                !(0, i.E)() && (t.selectionManager.setFocused(!0), t.selectionManager.setFocusedKey(p));
            }
        }),
        U = (0, r.zL)(null == C ? void 0 : C.props, { isLink: !!(null == C ? void 0 : null === (a = C.props) || void 0 === a ? void 0 : a.href) });
    return (
        delete U.id,
        {
            optionProps: {
                ...v,
                ...(0, r.dG)(U, L, P),
                id: u(t, p)
            },
            labelProps: { id: O },
            descriptionProps: { id: R },
            isFocused: y,
            isFocusVisible: y && (0, i.E)(),
            isSelected: T,
            isDisabled: m,
            isPressed: D,
            allowsSelection: M,
            hasAction: b
        }
    );
}
function _(e) {
    let { heading: t, 'aria-label': n } = e,
        i = (0, r.Me)();
    return {
        itemProps: { role: 'presentation' },
        headingProps: t
            ? {
                  id: i,
                  role: 'presentation'
              }
            : {},
        groupProps: {
            role: 'group',
            'aria-label': n,
            'aria-labelledby': t ? i : void 0
        }
    };
}
