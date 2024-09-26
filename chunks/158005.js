n.d(t, {
    L7: function () {
        return E;
    },
    MG: function () {
        return h;
    }
});
var r = n(182823),
    i = n(470079),
    a = n(148836),
    o = n(612001),
    s = n(616073),
    l = n(251433),
    u = n(370225),
    c = n(705782),
    d = n(297821);
let _ = new WeakMap();
function E(e, t, n) {
    let { keyboardDelegate: c, isDisabled: d, isRequired: E, name: f, validationBehavior: h = 'aria' } = e,
        p = (0, s.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }),
        m = (0, i.useMemo)(() => c || new a.dp(t.collection, t.disabledKeys, null, p), [c, t.collection, t.disabledKeys, p]),
        { menuTriggerProps: I, menuProps: T } = (0, u.u4)(
            {
                isDisabled: d,
                type: 'listbox'
            },
            t,
            n
        ),
        g = (e) => {
            switch (e.key) {
                case 'ArrowLeft': {
                    e.preventDefault();
                    let n = null != t.selectedKey ? m.getKeyAbove(t.selectedKey) : m.getFirstKey();
                    n && t.setSelectedKey(n);
                    break;
                }
                case 'ArrowRight': {
                    e.preventDefault();
                    let n = null != t.selectedKey ? m.getKeyBelow(t.selectedKey) : m.getFirstKey();
                    n && t.setSelectedKey(n);
                }
            }
        },
        { typeSelectProps: S } = (0, a.ip)({
            keyboardDelegate: m,
            selectionManager: t.selectionManager,
            onTypeSelect(e) {
                t.setSelectedKey(e);
            }
        }),
        { isInvalid: A, validationErrors: v, validationDetails: N } = t.displayValidation,
        {
            labelProps: O,
            fieldProps: R,
            descriptionProps: C,
            errorMessageProps: y
        } = (0, l.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: A,
            errorMessage: e.errorMessage || v
        });
    (S.onKeyDown = S.onKeyDownCapture), delete S.onKeyDownCapture;
    let L = (0, r.zL)(e, { labelable: !0 }),
        b = (0, r.dG)(S, I, R),
        D = (0, r.Me)();
    return (
        _.set(t, {
            isDisabled: d,
            isRequired: E,
            name: f,
            validationBehavior: h
        }),
        {
            labelProps: {
                ...O,
                onClick: () => {
                    !e.isDisabled && (n.current.focus(), (0, o._w)('keyboard'));
                }
            },
            triggerProps: (0, r.dG)(L, {
                ...b,
                isDisabled: d,
                onKeyDown: (0, r.tS)(b.onKeyDown, g, e.onKeyDown),
                onKeyUp: e.onKeyUp,
                'aria-labelledby': [D, b['aria-labelledby'], b['aria-label'] && !b['aria-labelledby'] ? b.id : null].filter(Boolean).join(' '),
                onFocus(n) {
                    !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
                },
                onBlur(n) {
                    !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
                }
            }),
            valueProps: { id: D },
            menuProps: {
                ...T,
                autoFocus: t.focusStrategy || !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                disallowEmptySelection: !0,
                linkBehavior: 'selection',
                onBlur: (n) => {
                    !n.currentTarget.contains(n.relatedTarget) && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
                },
                'aria-labelledby': [R['aria-labelledby'], b['aria-label'] && !R['aria-labelledby'] ? b.id : null].filter(Boolean).join(' ')
            },
            descriptionProps: C,
            errorMessageProps: y,
            isInvalid: A,
            validationErrors: v,
            validationDetails: N
        }
    );
}
function f(e, t, n) {
    var i;
    let a = _.get(t) || {},
        { autoComplete: s, name: l = a.name, isDisabled: u = a.isDisabled } = e,
        { validationBehavior: E, isRequired: f } = a,
        h = (0, o.Kf)(),
        { visuallyHiddenProps: p } = (0, d.S)();
    return (
        (0, r.y$)(e.selectRef, t.selectedKey, t.setSelectedKey),
        (0, c.Q)(
            {
                validationBehavior: E,
                focus: () => n.current.focus()
            },
            t,
            e.selectRef
        ),
        {
            containerProps: {
                ...p,
                'aria-hidden': !0,
                'data-a11y-ignore': 'aria-hidden-focus'
            },
            inputProps: {
                type: 'text',
                tabIndex: null == h || t.isFocused || t.isOpen ? -1 : 0,
                style: { fontSize: 16 },
                onFocus: () => n.current.focus(),
                disabled: u
            },
            selectProps: {
                tabIndex: -1,
                autoComplete: s,
                disabled: u,
                required: 'native' === E && f,
                name: l,
                value: null !== (i = t.selectedKey) && void 0 !== i ? i : '',
                onChange: (e) => t.setSelectedKey(e.target.value)
            }
        }
    );
}
function h(e) {
    var t;
    let { state: n, triggerRef: r, label: a, name: o, isDisabled: s } = e,
        l = (0, i.useRef)(null),
        {
            containerProps: u,
            inputProps: c,
            selectProps: d
        } = f(
            {
                ...e,
                selectRef: l
            },
            n,
            r
        );
    return n.collection.size <= 300
        ? i.createElement(
              'div',
              {
                  ...u,
                  'data-testid': 'hidden-select-container'
              },
              i.createElement('input', c),
              i.createElement(
                  'label',
                  null,
                  a,
                  i.createElement(
                      'select',
                      {
                          ...d,
                          ref: l
                      },
                      i.createElement('option', null),
                      [...n.collection.getKeys()].map((e) => {
                          let t = n.collection.getItem(e);
                          if ('item' === t.type)
                              return i.createElement(
                                  'option',
                                  {
                                      key: t.key,
                                      value: t.key
                                  },
                                  t.textValue
                              );
                      })
                  )
              )
          )
        : o
          ? i.createElement('input', {
                type: 'hidden',
                autoComplete: d.autoComplete,
                name: o,
                disabled: s,
                value: null !== (t = n.selectedKey) && void 0 !== t ? t : ''
            })
          : null;
}
