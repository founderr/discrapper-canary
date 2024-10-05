n.d(t, {
    L7: function () {
        return E;
    },
    MG: function () {
        return f;
    }
});
var r = n(182823),
    i = n(470079),
    a = n(148836),
    s = n(612001),
    o = n(616073),
    l = n(251433),
    u = n(370225),
    c = n(705782),
    d = n(297821);
let _ = new WeakMap();
function E(e, t, n) {
    let { keyboardDelegate: c, isDisabled: d, isRequired: E, name: f, validationBehavior: h = 'aria' } = e,
        p = (0, o.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }),
        I = (0, i.useMemo)(() => c || new a.dp(t.collection, t.disabledKeys, null, p), [c, t.collection, t.disabledKeys, p]),
        { menuTriggerProps: m, menuProps: T } = (0, u.u4)(
            {
                isDisabled: d,
                type: 'listbox'
            },
            t,
            n
        ),
        { typeSelectProps: S } = (0, a.ip)({
            keyboardDelegate: I,
            selectionManager: t.selectionManager,
            onTypeSelect(e) {
                t.setSelectedKey(e);
            }
        }),
        { isInvalid: g, validationErrors: A, validationDetails: N } = t.displayValidation,
        {
            labelProps: O,
            fieldProps: R,
            descriptionProps: v,
            errorMessageProps: C
        } = (0, l.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: g,
            errorMessage: e.errorMessage || A
        });
    (S.onKeyDown = S.onKeyDownCapture), delete S.onKeyDownCapture;
    let L = (0, r.zL)(e, { labelable: !0 }),
        D = (0, r.dG)(S, m, R),
        y = (0, r.Me)();
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
                    !e.isDisabled && (n.current.focus(), (0, s._w)('keyboard'));
                }
            },
            triggerProps: (0, r.dG)(L, {
                ...D,
                isDisabled: d,
                onKeyDown: (0, r.tS)(
                    D.onKeyDown,
                    (e) => {
                        switch (e.key) {
                            case 'ArrowLeft': {
                                e.preventDefault();
                                let n = null != t.selectedKey ? I.getKeyAbove(t.selectedKey) : I.getFirstKey();
                                n && t.setSelectedKey(n);
                                break;
                            }
                            case 'ArrowRight': {
                                e.preventDefault();
                                let n = null != t.selectedKey ? I.getKeyBelow(t.selectedKey) : I.getFirstKey();
                                n && t.setSelectedKey(n);
                            }
                        }
                    },
                    e.onKeyDown
                ),
                onKeyUp: e.onKeyUp,
                'aria-labelledby': [y, D['aria-labelledby'], D['aria-label'] && !D['aria-labelledby'] ? D.id : null].filter(Boolean).join(' '),
                onFocus(n) {
                    !t.isFocused && (e.onFocus && e.onFocus(n), e.onFocusChange && e.onFocusChange(!0), t.setFocused(!0));
                },
                onBlur(n) {
                    !t.isOpen && (e.onBlur && e.onBlur(n), e.onFocusChange && e.onFocusChange(!1), t.setFocused(!1));
                }
            }),
            valueProps: { id: y },
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
                'aria-labelledby': [R['aria-labelledby'], D['aria-label'] && !R['aria-labelledby'] ? D.id : null].filter(Boolean).join(' ')
            },
            descriptionProps: v,
            errorMessageProps: C,
            isInvalid: g,
            validationErrors: A,
            validationDetails: N
        }
    );
}
function f(e) {
    var t;
    let { state: n, triggerRef: a, label: o, name: l, isDisabled: u } = e,
        E = (0, i.useRef)(null),
        {
            containerProps: f,
            inputProps: h,
            selectProps: p
        } = (function (e, t, n) {
            var i;
            let a = _.get(t) || {},
                { autoComplete: o, name: l = a.name, isDisabled: u = a.isDisabled } = e,
                { validationBehavior: E, isRequired: f } = a,
                h = (0, s.Kf)(),
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
                        autoComplete: o,
                        disabled: u,
                        required: 'native' === E && f,
                        name: l,
                        value: null !== (i = t.selectedKey) && void 0 !== i ? i : '',
                        onChange: (e) => t.setSelectedKey(e.target.value)
                    }
                }
            );
        })(
            {
                ...e,
                selectRef: E
            },
            n,
            a
        );
    return n.collection.size <= 300
        ? i.createElement(
              'div',
              {
                  ...f,
                  'data-testid': 'hidden-select-container'
              },
              i.createElement('input', h),
              i.createElement(
                  'label',
                  null,
                  o,
                  i.createElement(
                      'select',
                      {
                          ...p,
                          ref: E
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
        : l
          ? i.createElement('input', {
                type: 'hidden',
                autoComplete: p.autoComplete,
                name: l,
                disabled: u,
                value: null !== (t = n.selectedKey) && void 0 !== t ? t : ''
            })
          : null;
}
