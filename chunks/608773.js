n.d(t, {
    C3: function () {
        return et;
    },
    IZ: function () {
        return ee;
    },
    O7: function () {
        return ea;
    },
    kt: function () {
        return en;
    },
    wE: function () {
        return es;
    }
});
var r = n(852163),
    i = n(907572),
    a = n(634060),
    o = n(411746),
    s = n(778679),
    l = n(978714),
    u = n(385350),
    c = n(247099),
    d = n(641387),
    _ = n(275835),
    E = n(857241),
    f = n(949041),
    h = n(937285),
    p = n(21913),
    m = n(867597),
    I = n(117603),
    T = n(583404),
    g = n(143558),
    S = n(904656),
    A = n(83632),
    v = n(446405),
    N = n(17749),
    O = n(360587),
    R = n(651847),
    C = n(483578),
    y = n(392107),
    b = n(747658),
    L = n(123143),
    D = n(95988),
    M = n(695474),
    P = n(85074),
    U = n(201646),
    w = n(681916),
    x = n(909490),
    G = n(706682),
    k = n(182823),
    B = n(201284),
    F = n(470079),
    Z = n(251433),
    V = n(612001),
    H = n(616073),
    Y = n(705782),
    j = n(387103),
    W = n(881085),
    K = n(469163);
function z(e) {
    return e && e.__esModule ? e.default : e;
}
var q = {};
function Q(e, t, n) {
    let { direction: r } = (0, H.bU)(),
        i = (0, F.useMemo)(() => (0, G.E7)(t), [t]),
        a = (t) => {
            if (!!t.currentTarget.contains(t.target)) {
                if ((t.altKey && ('ArrowDown' === t.key || 'ArrowUp' === t.key) && 'setOpen' in e && (t.preventDefault(), t.stopPropagation(), e.setOpen(!0)), !n))
                    switch (t.key) {
                        case 'ArrowLeft':
                            t.preventDefault(), t.stopPropagation(), 'rtl' === r ? i.focusNext() : i.focusPrevious();
                            break;
                        case 'ArrowRight':
                            t.preventDefault(), t.stopPropagation(), 'rtl' === r ? i.focusPrevious() : i.focusNext();
                    }
            }
        },
        o = () => {
            var e;
            let n = null === (e = window.event) || void 0 === e ? void 0 : e.target,
                r = (0, G.QL)(t.current, { tabbable: !0 });
            if ((n && ((r.currentNode = n), (n = r.previousNode())), !n)) {
                let e;
                do (e = r.lastChild()) && (n = e);
                while (e);
            }
            for (; null == n ? void 0 : n.hasAttribute('data-placeholder'); ) {
                let e = r.previousNode();
                if (e && e.hasAttribute('data-placeholder')) n = e;
                else break;
            }
            n && n.focus();
        },
        { pressProps: s } = (0, V.r7)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                'mouse' === e.pointerType && o();
            },
            onPress(e) {
                'mouse' !== e.pointerType && o();
            }
        });
    return (0, k.dG)(s, { onKeyDown: a });
}
q = {
    'ar-AE': r.Z,
    'bg-BG': i.Z,
    'cs-CZ': a.Z,
    'da-DK': o.Z,
    'de-DE': s.Z,
    'el-GR': l.Z,
    'en-US': u.Z,
    'es-ES': c.Z,
    'et-EE': d.Z,
    'fi-FI': _.Z,
    'fr-FR': E.Z,
    'he-IL': f.Z,
    'hr-HR': h.Z,
    'hu-HU': p.Z,
    'it-IT': m.Z,
    'ja-JP': I.Z,
    'ko-KR': T.Z,
    'lt-LT': g.Z,
    'lv-LV': S.Z,
    'nb-NO': A.Z,
    'nl-NL': v.Z,
    'pl-PL': N.Z,
    'pt-BR': O.Z,
    'pt-PT': R.Z,
    'ro-RO': C.Z,
    'ru-RU': y.Z,
    'sk-SK': b.Z,
    'sl-SI': L.Z,
    'sr-SP': D.Z,
    'sv-SE': M.Z,
    'tr-TR': P.Z,
    'uk-UA': U.Z,
    'zh-CN': w.Z,
    'zh-TW': x.Z
};
let X = new WeakMap(),
    $ = '__role_' + Date.now(),
    J = '__focusManager_' + Date.now();
function ee(e, t, n) {
    var r;
    let i;
    let { isInvalid: a, validationErrors: o, validationDetails: s } = t.displayValidation,
        {
            labelProps: l,
            fieldProps: u,
            descriptionProps: c,
            errorMessageProps: d
        } = (0, Z.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: a,
            errorMessage: e.errorMessage || o
        }),
        _ = (0, F.useRef)(null),
        { focusWithinProps: E } = (0, V.L_)({
            ...e,
            onFocusWithin(n) {
                var r;
                (_.current = t.value), null === (r = e.onFocus) || void 0 === r || r.call(e, n);
            },
            onBlurWithin: (n) => {
                var r;
                t.confirmPlaceholder(), t.value !== _.current && t.commitValidation(), null === (r = e.onBlur) || void 0 === r || r.call(e, n);
            },
            onFocusWithinChange: e.onFocusChange
        }),
        f = (0, H.qb)(z(q), '@react-aria/datepicker'),
        h = 'hour' === t.maxGranularity ? 'selectedTimeDescription' : 'selectedDateDescription',
        p = 'hour' === t.maxGranularity ? 'time' : 'date',
        m = t.value ? f.format(h, { [p]: t.formatValue({ month: 'long' }) }) : '',
        I = (0, k.PK)(m),
        T = 'presentation' === e[$] ? u['aria-describedby'] : [I['aria-describedby'], u['aria-describedby']].filter(Boolean).join(' ') || void 0,
        g = e[J],
        S = (0, F.useMemo)(() => g || (0, G.E7)(n), [g, n]),
        A = Q(t, n, 'presentation' === e[$]);
    X.set(t, {
        ariaLabel: e['aria-label'],
        ariaLabelledBy: [l.id, e['aria-labelledby']].filter(Boolean).join(' ') || void 0,
        ariaDescribedBy: T,
        focusManager: S
    });
    let v = (0, F.useRef)(e.autoFocus);
    (i =
        'presentation' === e[$]
            ? { role: 'presentation' }
            : (0, k.dG)(u, {
                  role: 'group',
                  'aria-disabled': e.isDisabled || void 0,
                  'aria-describedby': T
              })),
        (0, F.useEffect)(() => {
            v.current && S.focusFirst(), (v.current = !1);
        }, [S]),
        (0, k.y$)(e.inputRef, t.value, t.setValue),
        (0, Y.Q)(
            {
                ...e,
                focus() {
                    S.focusFirst();
                }
            },
            t,
            e.inputRef
        );
    let N = {
        type: 'hidden',
        name: e.name,
        value: (null === (r = t.value) || void 0 === r ? void 0 : r.toString()) || ''
    };
    'native' === e.validationBehavior && ((N.type = 'text'), (N.hidden = !0), (N.required = e.isRequired), (N.onChange = () => {}));
    let O = (0, k.zL)(e);
    return {
        labelProps: {
            ...l,
            onClick: () => {
                S.focusFirst();
            }
        },
        fieldProps: (0, k.dG)(O, i, A, E, {
            onKeyDown(t) {
                e.onKeyDown && e.onKeyDown(t);
            },
            onKeyUp(t) {
                e.onKeyUp && e.onKeyUp(t);
            }
        }),
        inputProps: N,
        descriptionProps: c,
        errorMessageProps: d,
        isInvalid: a,
        validationErrors: o,
        validationDetails: s
    };
}
function et(e, t, n) {
    var r;
    let i = ee(e, t, n);
    return (i.inputProps.value = (null === (r = t.timeValue) || void 0 === r ? void 0 : r.toString()) || ''), i;
}
function en(e, t, n) {
    let r = (0, k.Me)(),
        i = (0, k.Me)(),
        a = (0, k.Me)(),
        o = (0, H.qb)(z(q), '@react-aria/datepicker'),
        { isInvalid: s, validationErrors: l, validationDetails: u } = t.displayValidation,
        {
            labelProps: c,
            fieldProps: d,
            descriptionProps: _,
            errorMessageProps: E
        } = (0, Z.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: s,
            errorMessage: e.errorMessage || l
        }),
        f = Q(t, n),
        h = d['aria-labelledby'] || d.id,
        { locale: p } = (0, H.bU)(),
        m = t.formatValue(p, { month: 'long' }),
        I = m ? o.format('selectedDateDescription', { date: m }) : '',
        T = (0, k.PK)(I),
        g = [T['aria-describedby'], d['aria-describedby']].filter(Boolean).join(' ') || void 0,
        S = (0, k.zL)(e),
        A = (0, F.useMemo)(() => (0, G.E7)(n), [n]),
        { focusWithinProps: v } = (0, V.L_)({
            ...e,
            isDisabled: t.isOpen,
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange
        });
    return {
        groupProps: (0, k.dG)(S, f, d, T, v, {
            role: 'group',
            'aria-disabled': e.isDisabled || null,
            'aria-labelledby': h,
            'aria-describedby': g,
            onKeyDown(n) {
                !t.isOpen && e.onKeyDown && e.onKeyDown(n);
            },
            onKeyUp(n) {
                !t.isOpen && e.onKeyUp && e.onKeyUp(n);
            }
        }),
        labelProps: {
            ...c,
            onClick: () => {
                A.focusFirst();
            }
        },
        fieldProps: {
            ...d,
            id: a,
            [$]: 'presentation',
            'aria-describedby': g,
            value: t.value,
            onChange: t.setValue,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            granularity: e.granularity,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior,
            [B.tL]: t,
            autoFocus: e.autoFocus,
            name: e.name
        },
        descriptionProps: _,
        errorMessageProps: E,
        buttonProps: {
            ...T,
            id: r,
            'aria-haspopup': 'dialog',
            'aria-label': o.format('calendar'),
            'aria-labelledby': `${r} ${h}`,
            'aria-describedby': g,
            'aria-expanded': t.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => t.setOpen(!0)
        },
        dialogProps: {
            id: i,
            'aria-labelledby': `${r} ${h}`
        },
        calendarProps: {
            autoFocus: !0,
            value: t.dateValue,
            onChange: t.setDateValue,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
            isInvalid: t.isInvalid,
            errorMessage: 'function' == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(' ')
        },
        isInvalid: s,
        validationErrors: l,
        validationDetails: u
    };
}
function er() {
    let { locale: e } = (0, H.bU)(),
        t = (0, H.Kq)(z(q), '@react-aria/datepicker');
    return (0, F.useMemo)(() => {
        try {
            return new Intl.DisplayNames(e, { type: 'dateTimeField' });
        } catch (n) {
            return new ei(e, t);
        }
    }, [e, t]);
}
class ei {
    of(e) {
        return this.dictionary.getStringForLocale(e, this.locale);
    }
    constructor(e, t) {
        (this.locale = e), (this.dictionary = t);
    }
}
function ea(e, t, n) {
    let r = (0, F.useRef)(''),
        { locale: i } = (0, H.bU)(),
        a = er(),
        { ariaLabel: o, ariaLabelledBy: s, ariaDescribedBy: l, focusManager: u } = X.get(t),
        c = e.isPlaceholder ? '' : e.text,
        d = (0, F.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
        _ = (0, H.aQ)({
            month: 'long',
            timeZone: d.timeZone
        }),
        E = (0, H.aQ)({
            hour: 'numeric',
            hour12: d.hour12,
            timeZone: d.timeZone
        });
    if ('month' !== e.type || e.isPlaceholder) 'hour' === e.type && !e.isPlaceholder && (c = E.format(t.dateValue));
    else {
        let e = _.format(t.dateValue);
        c = e !== c ? `${c} \u{2013} ${e}` : e;
    }
    let { spinButtonProps: f } = (0, K.G)({
            value: e.value,
            textValue: c,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: t.isDisabled,
            isReadOnly: t.isReadOnly || !e.isEditable,
            isRequired: t.isRequired,
            onIncrement: () => {
                (r.current = ''), t.increment(e.type);
            },
            onDecrement: () => {
                (r.current = ''), t.decrement(e.type);
            },
            onIncrementPage: () => {
                (r.current = ''), t.incrementPage(e.type);
            },
            onDecrementPage: () => {
                (r.current = ''), t.decrementPage(e.type);
            },
            onIncrementToMax: () => {
                (r.current = ''), t.setSegment(e.type, e.maxValue);
            },
            onDecrementToMin: () => {
                (r.current = ''), t.setSegment(e.type, e.minValue);
            }
        }),
        h = (0, F.useMemo)(() => new W.d(i, { maximumFractionDigits: 0 }), [i]),
        p = () => {
            if (!h.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) 'dayPeriod' === e.type && t.clearSegment(e.type);
            else {
                let n = e.text.slice(0, -1),
                    i = h.parse(n);
                0 === n.length || 0 === i ? t.clearSegment(e.type) : t.setSegment(e.type, i), (r.current = n);
            }
        },
        m = (e) => {
            if (('a' === e.key && ((0, k.V5)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey))
                switch (e.key) {
                    case 'Backspace':
                    case 'Delete':
                        e.preventDefault(), e.stopPropagation(), p();
                }
        },
        { startsWith: I } = (0, H.L0)({ sensitivity: 'base' }),
        T = (0, H.aQ)({
            hour: 'numeric',
            hour12: !0
        }),
        g = (0, F.useMemo)(() => {
            let e = new Date();
            return e.setHours(0), T.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
        }, [T]),
        S = (0, F.useMemo)(() => {
            let e = new Date();
            return e.setHours(12), T.formatToParts(e).find((e) => 'dayPeriod' === e.type).value;
        }, [T]),
        A = (0, H.aQ)({
            year: 'numeric',
            era: 'narrow',
            timeZone: 'UTC'
        }),
        v = (0, F.useMemo)(() => {
            if ('era' !== e.type) return [];
            let n = (0, j.Mw)(new j.aw(1, 1, 1), t.calendar),
                r = t.calendar.getEras().map((e) => {
                    let t = n
                        .set({
                            year: 1,
                            month: 1,
                            day: 1,
                            era: e
                        })
                        .toDate('UTC');
                    return {
                        era: e,
                        formatted: A.formatToParts(t).find((e) => 'era' === e.type).value
                    };
                }),
                i = eo(r.map((e) => e.formatted));
            if (i) for (let e of r) e.formatted = e.formatted.slice(i);
            return r;
        }, [A, t.calendar, e.type]),
        N = (n) => {
            if (t.isDisabled || t.isReadOnly) return;
            let i = r.current + n;
            switch (e.type) {
                case 'dayPeriod':
                    if (I(g, n)) t.setSegment('dayPeriod', 0);
                    else if (I(S, n)) t.setSegment('dayPeriod', 12);
                    else break;
                    u.focusNext();
                    break;
                case 'era': {
                    let e = v.find((e) => I(e.formatted, n));
                    e && (t.setSegment('era', e.era), u.focusNext());
                    break;
                }
                case 'day':
                case 'hour':
                case 'minute':
                case 'second':
                case 'month':
                case 'year': {
                    if (!h.isValidPartialNumber(i)) return;
                    let a = h.parse(i),
                        o = a,
                        s = 0 === e.minValue;
                    if ('hour' === e.type && t.dateFormatter.resolvedOptions().hour12) {
                        switch (t.dateFormatter.resolvedOptions().hourCycle) {
                            case 'h11':
                                a > 11 && (o = h.parse(n));
                                break;
                            case 'h12':
                                (s = !1), a > 12 && (o = h.parse(n));
                        }
                        e.value >= 12 && a > 1 && (a += 12);
                    } else a > e.maxValue && (o = h.parse(n));
                    if (isNaN(a)) return;
                    let l = 0 !== o || s;
                    l && t.setSegment(e.type, o), Number(a + '0') > e.maxValue || i.length >= String(e.maxValue).length ? ((r.current = ''), l && u.focusNext()) : (r.current = i);
                }
            }
        },
        O = () => {
            (r.current = ''), (0, k.Gt)(n.current, { containingElement: (0, k.rP)(n.current) }), window.getSelection().collapse(n.current);
        },
        R = (0, F.useRef)('');
    (0, k.zX)(n, 'beforeinput', (r) => {
        switch ((r.preventDefault(), r.inputType)) {
            case 'deleteContentBackward':
            case 'deleteContentForward':
                h.isValidPartialNumber(e.text) && !t.isReadOnly && p();
                break;
            case 'insertCompositionText':
                (R.current = n.current.textContent), (n.current.textContent = n.current.textContent);
                break;
            default:
                null != r.data && N(r.data);
        }
    }),
        (0, k.zX)(n, 'input', (e) => {
            let { inputType: t, data: r } = e;
            if ('insertCompositionText' === t) (n.current.textContent = R.current), (I(g, r) || I(S, r)) && N(r);
        }),
        (0, k.bt)(() => {
            let e = n.current;
            return () => {
                document.activeElement === e && !u.focusPrevious() && u.focusNext();
            };
        }, [n, u]);
    let C =
        (0, k.gn)() || 'timeZoneName' === e.type
            ? {
                  role: 'textbox',
                  'aria-valuemax': null,
                  'aria-valuemin': null,
                  'aria-valuetext': null,
                  'aria-valuenow': null
              }
            : {};
    e !== (0, F.useMemo)(() => t.segments.find((e) => e.isEditable), [t.segments]) && !t.isInvalid && (l = void 0);
    let y = (0, k.Me)(),
        b = !t.isDisabled && !t.isReadOnly && e.isEditable,
        L = 'literal' === e.type ? '' : a.of(e.type),
        D = (0, k.bE)({
            'aria-label': `${L}${o ? `, ${o}` : ''}${s ? ', ' : ''}`,
            'aria-labelledby': s
        });
    return 'literal' === e.type
        ? { segmentProps: { 'aria-hidden': !0 } }
        : {
              segmentProps: (0, k.dG)(f, D, {
                  id: y,
                  ...C,
                  'aria-invalid': t.isInvalid ? 'true' : void 0,
                  'aria-describedby': l,
                  'aria-readonly': t.isReadOnly || !e.isEditable ? 'true' : void 0,
                  'data-placeholder': e.isPlaceholder || void 0,
                  contentEditable: b,
                  suppressContentEditableWarning: b,
                  spellCheck: b ? 'false' : void 0,
                  autoCapitalize: b ? 'off' : void 0,
                  autoCorrect: b ? 'off' : void 0,
                  [parseInt(F.version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: b ? 'next' : void 0,
                  inputMode: t.isDisabled || 'dayPeriod' === e.type || 'era' === e.type || !b ? void 0 : 'numeric',
                  tabIndex: t.isDisabled ? void 0 : 0,
                  onKeyDown: m,
                  onFocus: O,
                  style: { caretColor: 'transparent' },
                  onPointerDown(e) {
                      e.stopPropagation();
                  },
                  onMouseDown(e) {
                      e.stopPropagation();
                  }
              })
          };
}
function eo(e) {
    e.sort();
    let t = e[0],
        n = e[e.length - 1];
    for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return e;
    return 0;
}
function es(e, t, n) {
    var r, i;
    let a = (0, H.qb)(z(q), '@react-aria/datepicker'),
        { isInvalid: o, validationErrors: s, validationDetails: l } = t.displayValidation,
        {
            labelProps: u,
            fieldProps: c,
            descriptionProps: d,
            errorMessageProps: _
        } = (0, Z.U)({
            ...e,
            labelElementType: 'span',
            isInvalid: o,
            errorMessage: e.errorMessage || s
        }),
        E = c['aria-labelledby'] || c.id,
        { locale: f } = (0, H.bU)(),
        h = t.formatValue(f, { month: 'long' }),
        p = h
            ? a.format('selectedRangeDescription', {
                  startDate: h.start,
                  endDate: h.end
              })
            : '',
        m = (0, k.PK)(p),
        I = {
            'aria-label': a.format('startDate'),
            'aria-labelledby': E
        },
        T = {
            'aria-label': a.format('endDate'),
            'aria-labelledby': E
        },
        g = (0, k.Me)(),
        S = (0, k.Me)(),
        A = Q(t, n),
        v = [m['aria-describedby'], c['aria-describedby']].filter(Boolean).join(' ') || void 0,
        N = (0, F.useMemo)(() => (0, G.E7)(n, { accept: (e) => e.id !== g }), [n, g]),
        O = {
            [J]: N,
            [$]: 'presentation',
            'aria-describedby': v,
            placeholderValue: e.placeholderValue,
            hideTimeZone: e.hideTimeZone,
            hourCycle: e.hourCycle,
            granularity: e.granularity,
            shouldForceLeadingZeros: e.shouldForceLeadingZeros,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isRequired: e.isRequired,
            validationBehavior: e.validationBehavior
        },
        R = (0, k.zL)(e),
        { focusWithinProps: C } = (0, V.L_)({
            ...e,
            isDisabled: t.isOpen,
            onBlurWithin: e.onBlur,
            onFocusWithin: e.onFocus,
            onFocusWithinChange: e.onFocusChange
        }),
        y = (0, F.useRef)(B.PS),
        b = (0, F.useRef)(B.PS);
    return {
        groupProps: (0, k.dG)(R, A, c, m, C, {
            role: 'group',
            'aria-disabled': e.isDisabled || null,
            'aria-describedby': v,
            onKeyDown(n) {
                !t.isOpen && e.onKeyDown && e.onKeyDown(n);
            },
            onKeyUp(n) {
                !t.isOpen && e.onKeyUp && e.onKeyUp(n);
            }
        }),
        labelProps: {
            ...u,
            onClick: () => {
                N.focusFirst();
            }
        },
        buttonProps: {
            ...m,
            id: g,
            'aria-haspopup': 'dialog',
            'aria-label': a.format('calendar'),
            'aria-labelledby': `${g} ${E}`,
            'aria-describedby': v,
            'aria-expanded': t.isOpen,
            isDisabled: e.isDisabled || e.isReadOnly,
            onPress: () => t.setOpen(!0)
        },
        dialogProps: {
            id: S,
            'aria-labelledby': `${g} ${E}`
        },
        startFieldProps: {
            ...I,
            ...O,
            value: null === (r = t.value) || void 0 === r ? void 0 : r.start,
            onChange: (e) => t.setDateTime('start', e),
            autoFocus: e.autoFocus,
            name: e.startName,
            [B.tL]: {
                realtimeValidation: t.realtimeValidation,
                displayValidation: t.displayValidation,
                updateValidation(e) {
                    (y.current = e), t.updateValidation((0, B.W0)(e, b.current));
                },
                resetValidation: t.resetValidation,
                commitValidation: t.commitValidation
            }
        },
        endFieldProps: {
            ...T,
            ...O,
            value: null === (i = t.value) || void 0 === i ? void 0 : i.end,
            onChange: (e) => t.setDateTime('end', e),
            name: e.endName,
            [B.tL]: {
                realtimeValidation: t.realtimeValidation,
                displayValidation: t.displayValidation,
                updateValidation(e) {
                    (b.current = e), t.updateValidation((0, B.W0)(y.current, e));
                },
                resetValidation: t.resetValidation,
                commitValidation: t.commitValidation
            }
        },
        descriptionProps: d,
        errorMessageProps: _,
        calendarProps: {
            autoFocus: !0,
            value: t.dateRange,
            onChange: t.setDateRange,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: e.isDisabled,
            isReadOnly: e.isReadOnly,
            isDateUnavailable: e.isDateUnavailable,
            allowsNonContiguousRanges: e.allowsNonContiguousRanges,
            defaultFocusedValue: t.dateRange ? void 0 : e.placeholderValue,
            isInvalid: t.isInvalid,
            errorMessage: 'function' == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(' ')
        },
        isInvalid: o,
        validationErrors: s,
        validationDetails: l
    };
}
