r.d(n, {
    E: function () {
        return d;
    },
    h: function () {
        return _;
    }
});
var i = r(192379),
    a = r(661763),
    s = r(239700),
    o = r(523603),
    l = r(662845),
    u = r(464170),
    c = r(969129);
function d(e, n) {
    let { inputElementType: r = 'input', isDisabled: d = !1, isRequired: f = !1, isReadOnly: _ = !1, type: h = 'text', validationBehavior: p = 'aria' } = e,
        [m, g] = (0, s.zk)(e.value, e.defaultValue || '', e.onChange),
        { focusableProps: E } = (0, l.kc)(e, n),
        v = (0, c.Q3)({
            ...e,
            value: m
        }),
        { isInvalid: I, validationErrors: T, validationDetails: b } = v.displayValidation,
        {
            labelProps: y,
            fieldProps: S,
            descriptionProps: A,
            errorMessageProps: N
        } = (0, o.U)({
            ...e,
            isInvalid: I,
            errorMessage: e.errorMessage || T
        }),
        C = (0, a.zL)(e, { labelable: !0 }),
        R = {
            type: h,
            pattern: e.pattern
        };
    return (
        (0, a.y$)(n, m, g),
        (0, u.Q)(e, v, n),
        (0, i.useEffect)(() => {
            if (n.current instanceof (0, a.kR)(n.current).HTMLTextAreaElement) {
                let e = n.current;
                Object.defineProperty(e, 'defaultValue', {
                    get: () => e.value,
                    set: () => {},
                    configurable: !0
                });
            }
        }, [n]),
        {
            labelProps: y,
            inputProps: (0, a.dG)(C, 'input' === r && R, {
                disabled: d,
                readOnly: _,
                required: f && 'native' === p,
                'aria-required': (f && 'aria' === p) || void 0,
                'aria-invalid': I || void 0,
                'aria-errormessage': e['aria-errormessage'],
                'aria-activedescendant': e['aria-activedescendant'],
                'aria-autocomplete': e['aria-autocomplete'],
                'aria-haspopup': e['aria-haspopup'],
                value: m,
                onChange: (e) => g(e.target.value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...E,
                ...S
            }),
            descriptionProps: A,
            errorMessageProps: N,
            isInvalid: I,
            validationErrors: T,
            validationDetails: b
        }
    );
}
function f() {
    return 'undefined' != typeof window && window.InputEvent && 'function' == typeof InputEvent.prototype.getTargetRanges;
}
function _(e, n, r) {
    let s = (0, a.iW)((e) => {
        let i,
            a = r.current;
        switch (e.inputType) {
            case 'historyUndo':
            case 'historyRedo':
                return;
            case 'deleteContent':
            case 'deleteByCut':
            case 'deleteByDrag':
                i = a.value.slice(0, a.selectionStart) + a.value.slice(a.selectionEnd);
                break;
            case 'deleteContentForward':
                i = a.selectionEnd === a.selectionStart ? a.value.slice(0, a.selectionStart) + a.value.slice(a.selectionEnd + 1) : a.value.slice(0, a.selectionStart) + a.value.slice(a.selectionEnd);
                break;
            case 'deleteContentBackward':
                i = a.selectionEnd === a.selectionStart ? a.value.slice(0, a.selectionStart - 1) + a.value.slice(a.selectionStart) : a.value.slice(0, a.selectionStart) + a.value.slice(a.selectionEnd);
                break;
            case 'deleteSoftLineBackward':
            case 'deleteHardLineBackward':
                i = a.value.slice(a.selectionStart);
                break;
            default:
                null != e.data && (i = a.value.slice(0, a.selectionStart) + e.data + a.value.slice(a.selectionEnd));
        }
        (null == i || !n.validate(i)) && e.preventDefault();
    });
    (0, i.useEffect)(() => {
        if (!f()) return;
        let e = r.current;
        return (
            e.addEventListener('beforeinput', s, !1),
            () => {
                e.removeEventListener('beforeinput', s, !1);
            }
        );
    }, [r, s]);
    let o = f()
            ? null
            : (e) => {
                  let r = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
                  !n.validate(r) && e.preventDefault();
              },
        { labelProps: l, inputProps: u, descriptionProps: c, errorMessageProps: _, ...h } = d(e, r),
        p = (0, i.useRef)(null);
    return {
        inputProps: (0, a.dG)(u, {
            onBeforeInput: o,
            onCompositionStart() {
                let { value: e, selectionStart: n, selectionEnd: i } = r.current;
                p.current = {
                    value: e,
                    selectionStart: n,
                    selectionEnd: i
                };
            },
            onCompositionEnd() {
                if (!n.validate(r.current.value)) {
                    let { value: e, selectionStart: i, selectionEnd: a } = p.current;
                    (r.current.value = e), r.current.setSelectionRange(i, a), n.setInputValue(e);
                }
            }
        }),
        labelProps: l,
        descriptionProps: c,
        errorMessageProps: _,
        ...h
    };
}
