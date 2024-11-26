n.d(t, {
    N3: function () {
        return I;
    },
    OV: function () {
        return N;
    },
    P$: function () {
        return C;
    },
    RM: function () {
        return A;
    }
});
var r = n(927521),
    i = n(697),
    a = n(328199),
    s = n(495484),
    o = n(165352),
    l = n(781988),
    u = n(239700),
    c = n(192379),
    d = n(133886);
function f(e, t, n) {
    return null != e && ((null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0));
}
let _ = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    },
    p = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
function h(e, t) {
    var n;
    e = {
        ...(t.shouldForceLeadingZeros ? p : _),
        ...e
    };
    let r = t.granularity || 'minute',
        i = Object.keys(e),
        a = i.indexOf(null !== (n = t.maxGranularity) && void 0 !== n ? n : 'year');
    a < 0 && (a = 0);
    let s = i.indexOf(r);
    if ((s < 0 && (s = 2), a > s)) throw Error('maxGranularity must be greater than granularity');
    let o = i.slice(a, s + 1).reduce((t, n) => ((t[n] = e[n]), t), {});
    return null != t.hourCycle && (o.hour12 = 12 === t.hourCycle), (o.timeZone = t.timeZone || 'UTC'), ('hour' === r || 'minute' === r || 'second' === r) && t.timeZone && !t.hideTimeZone && (o.timeZoneName = 'short'), t.showEra && 0 === a && (o.era = 'short'), o;
}
function m(e) {
    return e && 'hour' in e ? e : new r.qp();
}
function g(e, t) {
    return null === e ? null : e ? (0, i.Mw)(e, t) : void 0;
}
function E(e, t, n, r) {
    if (e) return g(e, n);
    let s = (0, i.Mw)(
        (0, a.zO)(r).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }),
        n
    );
    return 'year' === t || 'month' === t || 'day' === t ? (0, i.WG)(s) : r ? s : (0, i.IO)(s);
}
function v(e, t) {
    let n = e && 'timeZone' in e ? e.timeZone : void 0,
        r = e && 'minute' in e ? 'minute' : 'day';
    if (e && t && !(t in e)) throw Error('Invalid granularity ' + t + ' for value ' + e.toString());
    let [i, a] = (0, c.useState)([r, n]);
    return e && (i[0] !== r || i[1] !== n) && a([r, n]), !t && (t = e ? r : i[0]), [t, e ? n : i[1]];
}
function I(e) {
    var t, n;
    let r = (0, l.d)(e),
        [a, o] = (0, u.zk)(e.value, e.defaultValue || null, e.onChange),
        d = a || e.placeholderValue,
        [_, p] = v(d, e.granularity),
        g = null != a ? a.toDate(null != p ? p : 'UTC') : null,
        E = 'hour' === _ || 'minute' === _ || 'second' === _,
        I = null === (n = e.shouldCloseOnSelect) || void 0 === n || n,
        [T, b] = (0, c.useState)(null),
        [S, y] = (0, c.useState)(null);
    if ((a && ((T = a), 'hour' in a && (S = a)), d && !(_ in d))) throw Error('Invalid granularity ' + _ + ' for value ' + d.toString());
    let A = (e, t) => {
            o('timeZone' in t ? t.set((0, i.WG)(e)) : (0, i.IO)(e, t)), b(null), y(null);
        },
        N = e.isInvalid || 'invalid' === e.validationState || f(a, e.minValue, e.maxValue) || (a && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, a))),
        C = e.validationState || (N ? 'invalid' : null);
    return {
        value: a,
        setValue: o,
        dateValue: T,
        timeValue: S,
        setDateValue: (t) => {
            let n = 'function' == typeof I ? I() : I;
            E ? (S || n ? A(t, S || m(e.placeholderValue)) : b(t)) : o(t), n && r.setOpen(!1);
        },
        setTimeValue: (e) => {
            T && e ? A(T, e) : y(e);
        },
        granularity: _,
        hasTime: E,
        ...r,
        setOpen(t) {
            !t && !a && T && E && A(T, S || m(e.placeholderValue)), r.setOpen(t);
        },
        validationState: C,
        isInvalid: N,
        formatValue(t, n) {
            if (!g) return '';
            let r = h(n, {
                granularity: _,
                timeZone: p,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                showEra: 'gregory' === a.calendar.identifier && 'BC' === a.era
            });
            return new s.C(t, r).format(g);
        }
    };
}
let T = new d.J(
        {
            ach: {
                year: 'mwaka',
                month: 'dwe',
                day: 'nino'
            },
            af: {
                year: 'jjjj',
                month: 'mm',
                day: 'dd'
            },
            am: {
                year: 'ዓዓዓዓ',
                month: 'ሚሜ',
                day: 'ቀቀ'
            },
            an: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            ar: {
                year: 'سنة',
                month: 'شهر',
                day: 'يوم'
            },
            ast: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            az: {
                year: 'iiii',
                month: 'aa',
                day: 'gg'
            },
            be: {
                year: 'гггг',
                month: 'мм',
                day: 'дд'
            },
            bg: {
                year: 'гггг',
                month: 'мм',
                day: 'дд'
            },
            bn: {
                year: 'yyyy',
                month: 'মিমি',
                day: 'dd'
            },
            br: {
                year: 'bbbb',
                month: 'mm',
                day: 'dd'
            },
            bs: {
                year: 'gggg',
                month: 'mm',
                day: 'dd'
            },
            ca: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            cak: {
                year: 'jjjj',
                month: 'ii',
                day: "q'q'"
            },
            ckb: {
                year: 'ساڵ',
                month: 'مانگ',
                day: 'ڕۆژ'
            },
            cs: {
                year: 'rrrr',
                month: 'mm',
                day: 'dd'
            },
            cy: {
                year: 'bbbb',
                month: 'mm',
                day: 'dd'
            },
            da: {
                year: 'åååå',
                month: 'mm',
                day: 'dd'
            },
            de: {
                year: 'jjjj',
                month: 'mm',
                day: 'tt'
            },
            dsb: {
                year: 'llll',
                month: 'mm',
                day: 'źź'
            },
            el: {
                year: 'εεεε',
                month: 'μμ',
                day: 'ηη'
            },
            en: {
                year: 'yyyy',
                month: 'mm',
                day: 'dd'
            },
            eo: {
                year: 'jjjj',
                month: 'mm',
                day: 'tt'
            },
            es: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            et: {
                year: 'aaaa',
                month: 'kk',
                day: 'pp'
            },
            eu: {
                year: 'uuuu',
                month: 'hh',
                day: 'ee'
            },
            fa: {
                year: 'سال',
                month: 'ماه',
                day: 'روز'
            },
            ff: {
                year: 'hhhh',
                month: 'll',
                day: 'ññ'
            },
            fi: {
                year: 'vvvv',
                month: 'kk',
                day: 'pp'
            },
            fr: {
                year: 'aaaa',
                month: 'mm',
                day: 'jj'
            },
            fy: {
                year: 'jjjj',
                month: 'mm',
                day: 'dd'
            },
            ga: {
                year: 'bbbb',
                month: 'mm',
                day: 'll'
            },
            gd: {
                year: 'bbbb',
                month: 'mm',
                day: 'll'
            },
            gl: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            he: {
                year: 'שנה',
                month: 'חודש',
                day: 'יום'
            },
            hr: {
                year: 'gggg',
                month: 'mm',
                day: 'dd'
            },
            hsb: {
                year: 'llll',
                month: 'mm',
                day: 'dd'
            },
            hu: {
                year: 'éééé',
                month: 'hh',
                day: 'nn'
            },
            ia: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            id: {
                year: 'tttt',
                month: 'bb',
                day: 'hh'
            },
            it: {
                year: 'aaaa',
                month: 'mm',
                day: 'gg'
            },
            ja: {
                year: ' 年 ',
                month: '月',
                day: '日'
            },
            ka: {
                year: 'წწწწ',
                month: 'თთ',
                day: 'რრ'
            },
            kk: {
                year: 'жжжж',
                month: 'аа',
                day: 'кк'
            },
            kn: {
                year: 'ವವವವ',
                month: 'ಮಿಮೀ',
                day: 'ದಿದಿ'
            },
            ko: {
                year: '연도',
                month: '월',
                day: '일'
            },
            lb: {
                year: 'jjjj',
                month: 'mm',
                day: 'dd'
            },
            lo: {
                year: 'ປປປປ',
                month: 'ດດ',
                day: 'ວວ'
            },
            lt: {
                year: 'mmmm',
                month: 'mm',
                day: 'dd'
            },
            lv: {
                year: 'gggg',
                month: 'mm',
                day: 'dd'
            },
            meh: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            ml: {
                year: 'വർഷം',
                month: 'മാസം',
                day: 'തീയതി'
            },
            ms: {
                year: 'tttt',
                month: 'mm',
                day: 'hh'
            },
            nl: {
                year: 'jjjj',
                month: 'mm',
                day: 'dd'
            },
            nn: {
                year: 'åååå',
                month: 'mm',
                day: 'dd'
            },
            no: {
                year: 'åååå',
                month: 'mm',
                day: 'dd'
            },
            oc: {
                year: 'aaaa',
                month: 'mm',
                day: 'jj'
            },
            pl: {
                year: 'rrrr',
                month: 'mm',
                day: 'dd'
            },
            pt: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            rm: {
                year: 'oooo',
                month: 'mm',
                day: 'dd'
            },
            ro: {
                year: 'aaaa',
                month: 'll',
                day: 'zz'
            },
            ru: {
                year: 'гггг',
                month: 'мм',
                day: 'дд'
            },
            sc: {
                year: 'aaaa',
                month: 'mm',
                day: 'dd'
            },
            scn: {
                year: 'aaaa',
                month: 'mm',
                day: 'jj'
            },
            sk: {
                year: 'rrrr',
                month: 'mm',
                day: 'dd'
            },
            sl: {
                year: 'llll',
                month: 'mm',
                day: 'dd'
            },
            sr: {
                year: 'гггг',
                month: 'мм',
                day: 'дд'
            },
            sv: {
                year: 'åååå',
                month: 'mm',
                day: 'dd'
            },
            szl: {
                year: 'rrrr',
                month: 'mm',
                day: 'dd'
            },
            tg: {
                year: 'сссс',
                month: 'мм',
                day: 'рр'
            },
            th: {
                year: 'ปปปป',
                month: 'ดด',
                day: 'วว'
            },
            tr: {
                year: 'yyyy',
                month: 'aa',
                day: 'gg'
            },
            uk: {
                year: 'рррр',
                month: 'мм',
                day: 'дд'
            },
            'zh-CN': {
                year: '年',
                month: '月',
                day: '日'
            },
            'zh-TW': {
                year: '年',
                month: '月',
                day: '日'
            }
        },
        'en'
    ),
    b = {
        year: !0,
        month: !0,
        day: !0,
        hour: !0,
        minute: !0,
        second: !0,
        dayPeriod: !0,
        era: !0
    },
    S = {
        year: 5,
        month: 2,
        day: 7,
        hour: 2,
        minute: 15,
        second: 15
    },
    y = { dayperiod: 'dayPeriod' };
function A(e) {
    var t, n;
    let { locale: r, createCalendar: l, hideTimeZone: d, isDisabled: _, isReadOnly: p, isRequired: m } = e,
        I = e.value || e.defaultValue || e.placeholderValue,
        [A, N] = v(I, e.granularity),
        C = N || 'UTC';
    if (I && !(A in I)) throw Error('Invalid granularity ' + A + ' for value ' + I.toString());
    let R = (0, c.useMemo)(() => new s.C(r), [r]),
        O = (0, c.useMemo)(() => l(R.resolvedOptions().calendar), [l, R]),
        [D, L] = (0, u.zk)(e.value, e.defaultValue, e.onChange),
        x = (0, c.useMemo)(() => g(D, O), [D, O]),
        [w, P] = (0, c.useState)(() => E(e.placeholderValue, A, O, N)),
        M = x || w,
        k = 'gregory' === O.identifier && 'BC' === M.era,
        U = (0, c.useMemo)(
            () => ({
                granularity: A,
                maxGranularity: null !== (t = e.maxGranularity) && void 0 !== t ? t : 'year',
                timeZone: N,
                hideTimeZone: d,
                hourCycle: e.hourCycle,
                showEra: k,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros
            }),
            [e.maxGranularity, A, e.hourCycle, e.shouldForceLeadingZeros, N, d, k]
        ),
        B = (0, c.useMemo)(() => h({}, U), [U]),
        G = (0, c.useMemo)(() => new s.C(r, B), [r, B]),
        Z = (0, c.useMemo)(() => G.resolvedOptions(), [G]),
        F = (0, c.useMemo)(
            () =>
                G.formatToParts(new Date())
                    .filter((e) => b[e.type])
                    .reduce((e, t) => ((e[t.type] = !0), e), {}),
            [G]
        ),
        [V, j] = (0, c.useState)(() => (e.value || e.defaultValue ? { ...F } : {})),
        H = (0, c.useRef)(),
        Y = (0, c.useRef)(O.identifier);
    (0, c.useEffect)(() => {
        O.identifier !== Y.current && ((Y.current = O.identifier), P((t) => (Object.keys(V).length > 0 ? (0, i.Mw)(t, O) : E(e.placeholderValue, A, O, N))));
    }, [O, A, V, N, e.placeholderValue]),
        D && Object.keys(V).length < Object.keys(F).length && j((V = { ...F })),
        null == D && Object.keys(V).length === Object.keys(F).length && (j((V = {})), P(E(e.placeholderValue, A, O, N)));
    let W = x && Object.keys(V).length >= Object.keys(F).length ? x : w,
        K = (t) => {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys(V),
                r = Object.keys(F);
            null == t ? (L(null), P(E(e.placeholderValue, A, O, N)), j({})) : n.length >= r.length || (n.length === r.length - 1 && F.dayPeriod && !V.dayPeriod && 'dayPeriod' !== H.current) ? L((t = (0, i.Mw)(t, (null == I ? void 0 : I.calendar) || new o.IQ()))) : P(t), (H.current = null);
        },
        z = (0, c.useMemo)(() => W.toDate(C), [W, C]),
        q = (0, c.useMemo)(
            () =>
                G.formatToParts(z).map((e) => {
                    var t, n, i;
                    let s = b[e.type];
                    'era' === e.type && 1 === O.getEras().length && (s = !1);
                    let o = b[e.type] && !V[e.type];
                    let l = b[e.type] ? ((t = e.type), (n = e.value), (i = r), 'era' === t || 'dayPeriod' === t ? n : 'year' === t || 'month' === t || 'day' === t ? T.getStringForLocale(t, i) : '\u2013\u2013') : null;
                    return {
                        type: y[e.type] || e.type,
                        text: o ? l : e.value,
                        ...(function (e, t, n) {
                            switch (t) {
                                case 'era': {
                                    let t = e.calendar.getEras();
                                    return {
                                        value: t.indexOf(e.era),
                                        minValue: 0,
                                        maxValue: t.length - 1
                                    };
                                }
                                case 'year':
                                    return {
                                        value: e.year,
                                        minValue: 1,
                                        maxValue: e.calendar.getYearsInEra(e)
                                    };
                                case 'month':
                                    return {
                                        value: e.month,
                                        minValue: (0, a.jx)(e),
                                        maxValue: e.calendar.getMonthsInYear(e)
                                    };
                                case 'day':
                                    return {
                                        value: e.day,
                                        minValue: (0, a.PA)(e),
                                        maxValue: e.calendar.getDaysInMonth(e)
                                    };
                            }
                            if ('hour' in e)
                                switch (t) {
                                    case 'dayPeriod':
                                        return {
                                            value: e.hour >= 12 ? 12 : 0,
                                            minValue: 0,
                                            maxValue: 12
                                        };
                                    case 'hour':
                                        if (n.hour12) {
                                            let t = e.hour >= 12;
                                            return {
                                                value: e.hour,
                                                minValue: t ? 12 : 0,
                                                maxValue: t ? 23 : 11
                                            };
                                        }
                                        return {
                                            value: e.hour,
                                            minValue: 0,
                                            maxValue: 23
                                        };
                                    case 'minute':
                                        return {
                                            value: e.minute,
                                            minValue: 0,
                                            maxValue: 59
                                        };
                                    case 'second':
                                        return {
                                            value: e.second,
                                            minValue: 0,
                                            maxValue: 59
                                        };
                                }
                            return {};
                        })(W, e.type, Z),
                        isPlaceholder: o,
                        placeholder: l,
                        isEditable: s
                    };
                }),
            [z, V, G, Z, W, O, r]
        );
    F.era && V.year && !V.era ? ((V.era = !0), j({ ...V })) : !F.era && V.era && (delete V.era, j({ ...V }));
    let Q = (e) => {
            (V[e] = !0), 'year' === e && F.era && (V.era = !0), j({ ...V });
        },
        X = (e, t) => {
            if (V[e])
                K(
                    (function (e, t, n, r) {
                        switch (t) {
                            case 'era':
                            case 'year':
                            case 'month':
                            case 'day':
                                return e.cycle(t, n, { round: 'year' === t });
                        }
                        if ('hour' in e)
                            switch (t) {
                                case 'dayPeriod': {
                                    let t = e.hour;
                                    return e.set({ hour: t >= 12 ? t - 12 : t + 12 });
                                }
                                case 'hour':
                                case 'minute':
                                case 'second':
                                    return e.cycle(t, n, {
                                        round: 'hour' !== t,
                                        hourCycle: r.hour12 ? 12 : 24
                                    });
                            }
                    })(W, e, t, Z)
                );
            else {
                Q(e);
                let t = Object.keys(V),
                    n = Object.keys(F);
                (t.length >= n.length || (t.length === n.length - 1 && F.dayPeriod && !V.dayPeriod)) && K(W);
            }
        },
        J = e.isInvalid || 'invalid' === e.validationState || f(x, e.minValue, e.maxValue);
    return {
        value: x,
        dateValue: z,
        calendar: O,
        setValue: K,
        segments: q,
        dateFormatter: G,
        validationState: e.validationState || (J ? 'invalid' : null),
        isInvalid: J,
        granularity: A,
        maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : 'year',
        isDisabled: _,
        isReadOnly: p,
        isRequired: m,
        increment(e) {
            X(e, 1);
        },
        decrement(e) {
            X(e, -1);
        },
        incrementPage(e) {
            X(e, S[e] || 1);
        },
        decrementPage(e) {
            X(e, -(S[e] || 1));
        },
        setSegment(e, t) {
            Q(e),
                K(
                    (function (e, t, n, r) {
                        switch (t) {
                            case 'day':
                            case 'month':
                            case 'year':
                            case 'era':
                                return e.set({ [t]: n });
                        }
                        if ('hour' in e)
                            switch (t) {
                                case 'dayPeriod': {
                                    let t = e.hour,
                                        r = t >= 12;
                                    if (n >= 12 === r) return e;
                                    return e.set({ hour: r ? t - 12 : t + 12 });
                                }
                                case 'hour':
                                    if (r.hour12) {
                                        let t = e.hour >= 12;
                                        !t && 12 === n && (n = 0), t && n < 12 && (n += 12);
                                    }
                                case 'minute':
                                case 'second':
                                    return e.set({ [t]: n });
                            }
                    })(W, e, t, Z)
                );
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(V),
                n = Object.keys(F);
            t.length === n.length - 1 && F.dayPeriod && !V.dayPeriod && (j((V = { ...F })), K(W.copy()));
        },
        clearSegment(t) {
            delete V[t], (H.current = t), j({ ...V });
            let n = E(e.placeholderValue, A, O, N),
                r = W;
            if ('dayPeriod' === t && 'hour' in W && 'hour' in n) {
                let e = W.hour >= 12,
                    t = n.hour >= 12;
                e && !t ? (r = W.set({ hour: W.hour - 12 })) : !e && t && (r = W.set({ hour: W.hour + 12 }));
            } else t in W && (r = W.set({ [t]: n[t] }));
            L(null), K(r);
        },
        formatValue(e) {
            if (!x) return '';
            let t = h(e, U);
            return new s.C(r, t).format(z);
        }
    };
}
function N(e) {
    var t, n, r;
    let a = (0, l.d)(e),
        [o, d] = (0, u.zk)(e.value, e.defaultValue || null, e.onChange),
        [_, p] = (0, c.useState)(
            () =>
                o || {
                    start: null,
                    end: null
                }
        );
    null == o &&
        _.start &&
        _.end &&
        p(
            (_ = {
                start: null,
                end: null
            })
        );
    let g = o || _,
        E = (e) => {
            p(e), (null == e ? void 0 : e.start) && e.end ? d(e) : d(null);
        },
        [I] = v((null == g ? void 0 : g.start) || (null == g ? void 0 : g.end) || e.placeholderValue, e.granularity),
        T = 'hour' === I || 'minute' === I || 'second' === I,
        b = null === (r = e.shouldCloseOnSelect) || void 0 === r || r,
        [S, y] = (0, c.useState)(null),
        [A, N] = (0, c.useState)(null);
    g && g.start && g.end && ((S = g), 'hour' in g.start && (A = g));
    let C = (e, t) => {
            E({
                start: 'timeZone' in t.start ? t.start.set((0, i.WG)(e.start)) : (0, i.IO)(e.start, t.start),
                end: 'timeZone' in t.end ? t.end.set((0, i.WG)(e.end)) : (0, i.IO)(e.end, t.end)
            }),
                y(null),
                N(null);
        },
        R = (t) => {
            let n = 'function' == typeof b ? b() : b;
            T
                ? n || (t.start && t.end && (null == A ? void 0 : A.start) && (null == A ? void 0 : A.end))
                    ? C(t, {
                          start: (null == A ? void 0 : A.start) || m(e.placeholderValue),
                          end: (null == A ? void 0 : A.end) || m(e.placeholderValue)
                      })
                    : y(t)
                : t.start && t.end
                  ? E(t)
                  : y(t),
                n && a.setOpen(!1);
        },
        O = (e) => {
            (null == S ? void 0 : S.start) && (null == S ? void 0 : S.end) && e.start && e.end ? C(S, e) : N(e);
        },
        D = e.isInvalid || 'invalid' === e.validationState || (null != g && (f(g.start, e.minValue, e.maxValue) || f(g.end, e.minValue, e.maxValue) || (null != g.end && null != g.start && 0 > g.end.compare(g.start)) || ((null == g ? void 0 : g.start) && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, g.start))) || ((null == g ? void 0 : g.end) && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, g.end))))),
        L = e.validationState || (D ? 'invalid' : null);
    return {
        value: g,
        setValue: E,
        dateRange: S,
        timeRange: A,
        granularity: I,
        hasTime: T,
        setDate(e, t) {
            R({
                ...S,
                [e]: t
            });
        },
        setTime(e, t) {
            O({
                ...A,
                [e]: t
            });
        },
        setDateTime(e, t) {
            E({
                ...g,
                [e]: t
            });
        },
        setDateRange: R,
        setTimeRange: O,
        ...a,
        setOpen(t) {
            !t &&
                !((null == g ? void 0 : g.start) && (null == g ? void 0 : g.end)) &&
                (null == S ? void 0 : S.start) &&
                (null == S ? void 0 : S.end) &&
                T &&
                C(S, {
                    start: (null == A ? void 0 : A.start) || m(e.placeholderValue),
                    end: (null == A ? void 0 : A.end) || m(e.placeholderValue)
                }),
                a.setOpen(t);
        },
        validationState: L,
        isInvalid: D,
        formatValue(t, n) {
            let r;
            if (!g || !g.start || !g.end) return null;
            let i = 'timeZone' in g.start ? g.start.timeZone : void 0,
                a = e.granularity || (g.start && 'minute' in g.start ? 'minute' : 'day'),
                o = 'timeZone' in g.end ? g.end.timeZone : void 0,
                l = e.granularity || (g.end && 'minute' in g.end ? 'minute' : 'day'),
                u = h(n, {
                    granularity: a,
                    timeZone: i,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                    showEra: ('gregory' === g.start.calendar.identifier && 'BC' === g.start.era) || ('gregory' === g.end.calendar.identifier && 'BC' === g.end.era)
                }),
                c = g.start.toDate(i || 'UTC'),
                d = g.end.toDate(o || 'UTC'),
                f = new s.C(t, u);
            if (i === o && a === l && 0 !== g.start.compare(g.end)) {
                try {
                    let e = f.formatRangeToParts(c, d),
                        t = -1;
                    for (let n = 0; n < e.length; n++) {
                        let r = e[n];
                        if ('shared' === r.source && 'literal' === r.type) t = n;
                        else if ('endRange' === r.source) break;
                    }
                    let n = '',
                        r = '';
                    for (let i = 0; i < e.length; i++) i < t ? (n += e[i].value) : i > t && (r += e[i].value);
                    return {
                        start: n,
                        end: r
                    };
                } catch (e) {}
                r = f;
            } else {
                let i = h(n, {
                    granularity: l,
                    timeZone: o,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle
                });
                r = new s.C(t, i);
            }
            return {
                start: f.format(c),
                end: r.format(d)
            };
        }
    };
}
function C(e) {
    let { placeholderValue: t = new r.qp(), minValue: n, maxValue: a, granularity: s } = e,
        [l, d] = (0, u.zk)(e.value, e.defaultValue, e.onChange),
        f = l || t,
        _ = f && 'day' in f ? f : void 0,
        p = e.defaultValue && 'timeZone' in e.defaultValue ? e.defaultValue.timeZone : void 0,
        h = (0, c.useMemo)(() => {
            let e = f && 'timeZone' in f ? f.timeZone : void 0;
            return (e || p) && t ? (0, i.fW)(R(t), e || p) : R(t);
        }, [t, f, p]),
        m = (0, c.useMemo)(() => R(n, _), [n, _]),
        g = (0, c.useMemo)(() => R(a, _), [a, _]),
        E = (0, c.useMemo)(() => (l && 'day' in l ? (0, i.ZB)(l) : l), [l]),
        v = (0, c.useMemo)(() => (null == l ? null : R(l)), [l]);
    return {
        ...A({
            ...e,
            value: v,
            defaultValue: void 0,
            minValue: m,
            maxValue: g,
            onChange: (e) => {
                d(_ || p ? e : e && (0, i.ZB)(e));
            },
            granularity: s || 'minute',
            maxGranularity: 'hour',
            placeholderValue: h,
            createCalendar: () => new o.IQ()
        }),
        timeValue: E
    };
}
function R(e, t = (0, a.Lg)((0, a.iT)())) {
    return e ? ('day' in e ? e : (0, i.IO)(t, e)) : null;
}
