r.d(n, {
    L7: function () {
        return h;
    },
    MG: function () {
        return m;
    }
});
var i = r(661763),
    a = r(192379),
    s = r(766203),
    o = r(921336),
    l = r(649859),
    u = r(523603),
    c = r(184495),
    d = r(464170),
    f = r(867824);
let _ = new WeakMap();
function h(e, n, r) {
    let { keyboardDelegate: d, isDisabled: f, isRequired: h, name: p, validationBehavior: m = 'aria' } = e,
        g = (0, l.Xe)({
            usage: 'search',
            sensitivity: 'base'
        }),
        E = (0, a.useMemo)(() => d || new s.dp(n.collection, n.disabledKeys, null, g), [d, n.collection, n.disabledKeys, g]),
        { menuTriggerProps: v, menuProps: I } = (0, c.u4)(
            {
                isDisabled: f,
                type: 'listbox'
            },
            n,
            r
        ),
        T = (e) => {
            switch (e.key) {
                case 'ArrowLeft': {
                    e.preventDefault();
                    let r = null != n.selectedKey ? E.getKeyAbove(n.selectedKey) : E.getFirstKey();
                    r && n.setSelectedKey(r);
                    break;
                }
                case 'ArrowRight': {
                    e.preventDefault();
                    let r = null != n.selectedKey ? E.getKeyBelow(n.selectedKey) : E.getFirstKey();
                    r && n.setSelectedKey(r);
                }
            }
        },
        { typeSelectProps: b } = (0, s.ip)({
            keyboardDelegate: E,
            selectionManager: n.selectionManager,
            onTypeSelect(e) {
                n.setSelectedKey(e);
            }
        }),
        { isInvalid: y, validationErrors: S, validationDetails: A } = n.displayValidation,
        {
            labelProps: N,
            fieldProps: C,
            descriptionProps: R,
            errorMessageProps: O
        } = (0, u.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: y,
            errorMessage: e.errorMessage || S
        });
    (b.onKeyDown = b.onKeyDownCapture), delete b.onKeyDownCapture;
    let D = (0, i.zL)(e, { labelable: !0 }),
        L = (0, i.dG)(b, v, C),
        x = (0, i.Me)();
    return (
        _.set(n, {
            isDisabled: f,
            isRequired: h,
            name: p,
            validationBehavior: m
        }),
        {
            labelProps: {
                ...N,
                onClick: () => {
                    !e.isDisabled && (r.current.focus(), (0, o._w)('keyboard'));
                }
            },
            triggerProps: (0, i.dG)(D, {
                ...L,
                isDisabled: f,
                onKeyDown: (0, i.tS)(L.onKeyDown, T, e.onKeyDown),
                onKeyUp: e.onKeyUp,
                'aria-labelledby': [x, L['aria-labelledby'], L['aria-label'] && !L['aria-labelledby'] ? L.id : null].filter(Boolean).join(' '),
                onFocus(r) {
                    !n.isFocused && (e.onFocus && e.onFocus(r), e.onFocusChange && e.onFocusChange(!0), n.setFocused(!0));
                },
                onBlur(r) {
                    !n.isOpen && (e.onBlur && e.onBlur(r), e.onFocusChange && e.onFocusChange(!1), n.setFocused(!1));
                }
            }),
            valueProps: { id: x },
            menuProps: {
                ...I,
                autoFocus: n.focusStrategy || !0,
                shouldSelectOnPressUp: !0,
                shouldFocusOnHover: !0,
                disallowEmptySelection: !0,
                linkBehavior: 'selection',
                onBlur: (r) => {
                    !r.currentTarget.contains(r.relatedTarget) && (e.onBlur && e.onBlur(r), e.onFocusChange && e.onFocusChange(!1), n.setFocused(!1));
                },
                'aria-labelledby': [C['aria-labelledby'], L['aria-label'] && !C['aria-labelledby'] ? L.id : null].filter(Boolean).join(' ')
            },
            descriptionProps: R,
            errorMessageProps: O,
            isInvalid: y,
            validationErrors: S,
            validationDetails: A
        }
    );
}
function p(e, n, r) {
    var a;
    let s = _.get(n) || {},
        { autoComplete: l, name: u = s.name, isDisabled: c = s.isDisabled } = e,
        { validationBehavior: h, isRequired: p } = s,
        m = (0, o.Kf)(),
        { visuallyHiddenProps: g } = (0, f.S)();
    return (
        (0, i.y$)(e.selectRef, n.selectedKey, n.setSelectedKey),
        (0, d.Q)(
            {
                validationBehavior: h,
                focus: () => r.current.focus()
            },
            n,
            e.selectRef
        ),
        {
            containerProps: {
                ...g,
                'aria-hidden': !0,
                'data-a11y-ignore': 'aria-hidden-focus'
            },
            inputProps: {
                type: 'text',
                tabIndex: null == m || n.isFocused || n.isOpen ? -1 : 0,
                style: { fontSize: 16 },
                onFocus: () => r.current.focus(),
                disabled: c
            },
            selectProps: {
                tabIndex: -1,
                autoComplete: l,
                disabled: c,
                required: 'native' === h && p,
                name: u,
                value: null !== (a = n.selectedKey) && void 0 !== a ? a : '',
                onChange: (e) => n.setSelectedKey(e.target.value)
            }
        }
    );
}
function m(e) {
    var n;
    let { state: r, triggerRef: i, label: s, name: o, isDisabled: l } = e,
        u = (0, a.useRef)(null),
        {
            containerProps: c,
            inputProps: d,
            selectProps: f
        } = p(
            {
                ...e,
                selectRef: u
            },
            r,
            i
        );
    return r.collection.size <= 300
        ? a.createElement(
              'div',
              {
                  ...c,
                  'data-testid': 'hidden-select-container'
              },
              a.createElement('input', d),
              a.createElement(
                  'label',
                  null,
                  s,
                  a.createElement(
                      'select',
                      {
                          ...f,
                          ref: u
                      },
                      a.createElement('option', null),
                      [...r.collection.getKeys()].map((e) => {
                          let n = r.collection.getItem(e);
                          if ('item' === n.type)
                              return a.createElement(
                                  'option',
                                  {
                                      key: n.key,
                                      value: n.key
                                  },
                                  n.textValue
                              );
                      })
                  )
              )
          )
        : o
          ? a.createElement('input', {
                type: 'hidden',
                autoComplete: f.autoComplete,
                name: o,
                disabled: l,
                value: null !== (n = r.selectedKey) && void 0 !== n ? n : ''
            })
          : null;
}
