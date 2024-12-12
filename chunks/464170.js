r.d(n, {
    Q: function () {
        return o;
    }
});
var i = r(192379),
    a = r(921336),
    s = r(661763);
function o(e, n, r) {
    let { validationBehavior: o, focus: l } = e;
    (0, s.bt)(() => {
        if ('native' === o && (null == r ? void 0 : r.current)) {
            let e = n.realtimeValidation.isInvalid ? n.realtimeValidation.validationErrors.join(' ') || 'Invalid value.' : '';
            r.current.setCustomValidity(e), !r.current.hasAttribute('title') && (r.current.title = ''), !n.realtimeValidation.isInvalid && n.updateValidation(u(r.current));
        }
    });
    let d = (0, s.iW)(() => {
            n.resetValidation();
        }),
        f = (0, s.iW)((e) => {
            var i, s;
            !n.displayValidation.isInvalid && n.commitValidation();
            let o = null == r ? void 0 : null === (i = r.current) || void 0 === i ? void 0 : i.form;
            !e.defaultPrevented && r && o && c(o) === r.current && (l ? l() : null === (s = r.current) || void 0 === s || s.focus(), (0, a._w)('keyboard')), e.preventDefault();
        }),
        _ = (0, s.iW)(() => {
            n.commitValidation();
        });
    (0, i.useEffect)(() => {
        let e = null == r ? void 0 : r.current;
        if (!e) return;
        let n = e.form;
        return (
            e.addEventListener('invalid', f),
            e.addEventListener('change', _),
            null == n || n.addEventListener('reset', d),
            () => {
                e.removeEventListener('invalid', f), e.removeEventListener('change', _), null == n || n.removeEventListener('reset', d);
            }
        );
    }, [r, f, _, d, o]);
}
function l(e) {
    let n = e.validity;
    return {
        badInput: n.badInput,
        customError: n.customError,
        patternMismatch: n.patternMismatch,
        rangeOverflow: n.rangeOverflow,
        rangeUnderflow: n.rangeUnderflow,
        stepMismatch: n.stepMismatch,
        tooLong: n.tooLong,
        tooShort: n.tooShort,
        typeMismatch: n.typeMismatch,
        valueMissing: n.valueMissing,
        valid: n.valid
    };
}
function u(e) {
    return {
        isInvalid: !e.validity.valid,
        validationDetails: l(e),
        validationErrors: e.validationMessage ? [e.validationMessage] : []
    };
}
function c(e) {
    for (let n = 0; n < e.elements.length; n++) {
        let r = e.elements[n];
        if (!r.validity.valid) return r;
    }
    return null;
}
