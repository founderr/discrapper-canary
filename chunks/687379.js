n.d(t, {
    N3: function () {
        return p;
    },
    OV: function () {
        return R;
    },
    P$: function () {
        return C;
    },
    RM: function () {
        return A;
    }
});
var r = n(387103),
    i = n(99047),
    a = n(697898),
    o = n(470079),
    s = n(133886);
function l(e, t, n) {
    return null != e && ((null != t && 0 > e.compare(t)) || (null != n && e.compare(n) > 0));
}
let u = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    },
    c = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
function d(e, t) {
    var n;
    e = {
        ...(t.shouldForceLeadingZeros ? c : u),
        ...e
    };
    let r = t.granularity || 'minute',
        i = Object.keys(e),
        a = i.indexOf(null !== (n = t.maxGranularity) && void 0 !== n ? n : 'year');
    a < 0 && (a = 0);
    let o = i.indexOf(r);
    if ((o < 0 && (o = 2), a > o)) throw Error('maxGranularity must be greater than granularity');
    let s = i.slice(a, o + 1).reduce((t, n) => ((t[n] = e[n]), t), {});
    return null != t.hourCycle && (s.hour12 = 12 === t.hourCycle), (s.timeZone = t.timeZone || 'UTC'), ('hour' === r || 'minute' === r || 'second' === r) && t.timeZone && !t.hideTimeZone && (s.timeZoneName = 'short'), t.showEra && 0 === a && (s.era = 'short'), s;
}
function _(e) {
    return e && 'hour' in e ? e : new r.qp();
}
function E(e, t) {
    return null === e ? null : e ? (0, r.Mw)(e, t) : void 0;
}
function f(e, t, n, i) {
    if (e) return E(e, n);
    let a = (0, r.Mw)(
        (0, r.zO)(i).set({
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0
        }),
        n
    );
    return 'year' === t || 'month' === t || 'day' === t ? (0, r.WG)(a) : i ? a : (0, r.IO)(a);
}
function h(e, t) {
    let n = e && 'timeZone' in e ? e.timeZone : void 0,
        r = e && 'minute' in e ? 'minute' : 'day';
    if (e && t && !(t in e)) throw Error('Invalid granularity ' + t + ' for value ' + e.toString());
    let [i, a] = (0, o.useState)([r, n]);
    return e && (i[0] !== r || i[1] !== n) && a([r, n]), !t && (t = e ? r : i[0]), [t, e ? n : i[1]];
}
function p(e) {
    var t, n;
    let s = (0, i.d)(e),
        [u, c] = (0, a.zk)(e.value, e.defaultValue || null, e.onChange),
        E = u || e.placeholderValue,
        [f, p] = h(E, e.granularity),
        m = null != u ? u.toDate(null != p ? p : 'UTC') : null,
        I = 'hour' === f || 'minute' === f || 'second' === f,
        T = null === (n = e.shouldCloseOnSelect) || void 0 === n || n,
        [g, S] = (0, o.useState)(null),
        [A, v] = (0, o.useState)(null);
    if ((u && ((g = u), 'hour' in u && (A = u)), E && !(f in E))) throw Error('Invalid granularity ' + f + ' for value ' + E.toString());
    let N = (e, t) => {
            c('timeZone' in t ? t.set((0, r.WG)(e)) : (0, r.IO)(e, t)), S(null), v(null);
        },
        O = (t) => {
            let n = 'function' == typeof T ? T() : T;
            I ? (A || n ? N(t, A || _(e.placeholderValue)) : S(t)) : c(t), n && s.setOpen(!1);
        },
        R = (e) => {
            g && e ? N(g, e) : v(e);
        },
        C = e.isInvalid || 'invalid' === e.validationState || l(u, e.minValue, e.maxValue) || (u && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, u))),
        y = e.validationState || (C ? 'invalid' : null);
    return {
        value: u,
        setValue: c,
        dateValue: g,
        timeValue: A,
        setDateValue: O,
        setTimeValue: R,
        granularity: f,
        hasTime: I,
        ...s,
        setOpen(t) {
            !t && !u && g && I && N(g, A || _(e.placeholderValue)), s.setOpen(t);
        },
        validationState: y,
        isInvalid: C,
        formatValue(t, n) {
            if (!m) return '';
            let i = d(n, {
                granularity: f,
                timeZone: p,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                showEra: 'gregory' === u.calendar.identifier && 'BC' === u.era
            });
            return new r.CN(t, i).format(m);
        }
    };
}
let m = new s.J(
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
);
function I(e, t, n) {
    return 'era' === e || 'dayPeriod' === e ? t : 'year' === e || 'month' === e || 'day' === e ? m.getStringForLocale(e, n) : '\u2013\u2013';
}
let T = {
        year: !0,
        month: !0,
        day: !0,
        hour: !0,
        minute: !0,
        second: !0,
        dayPeriod: !0,
        era: !0
    },
    g = {
        year: 5,
        month: 2,
        day: 7,
        hour: 2,
        minute: 15,
        second: 15
    },
    S = { dayperiod: 'dayPeriod' };
function A(e) {
    var t, n;
    let { locale: i, createCalendar: s, hideTimeZone: u, isDisabled: c, isReadOnly: _, isRequired: p } = e,
        m = e.value || e.defaultValue || e.placeholderValue,
        [A, R] = h(m, e.granularity),
        C = R || 'UTC';
    if (m && !(A in m)) throw Error('Invalid granularity ' + A + ' for value ' + m.toString());
    let y = (0, o.useMemo)(() => new r.CN(i), [i]),
        b = (0, o.useMemo)(() => s(y.resolvedOptions().calendar), [s, y]),
        [L, D] = (0, a.zk)(e.value, e.defaultValue, e.onChange),
        M = (0, o.useMemo)(() => E(L, b), [L, b]),
        [P, U] = (0, o.useState)(() => f(e.placeholderValue, A, b, R)),
        w = M || P,
        x = 'gregory' === b.identifier && 'BC' === w.era,
        G = (0, o.useMemo)(
            () => ({
                granularity: A,
                maxGranularity: null !== (t = e.maxGranularity) && void 0 !== t ? t : 'year',
                timeZone: R,
                hideTimeZone: u,
                hourCycle: e.hourCycle,
                showEra: x,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros
            }),
            [e.maxGranularity, A, e.hourCycle, e.shouldForceLeadingZeros, R, u, x]
        ),
        k = (0, o.useMemo)(() => d({}, G), [G]),
        B = (0, o.useMemo)(() => new r.CN(i, k), [i, k]),
        F = (0, o.useMemo)(() => B.resolvedOptions(), [B]),
        Z = (0, o.useMemo)(
            () =>
                B.formatToParts(new Date())
                    .filter((e) => T[e.type])
                    .reduce((e, t) => ((e[t.type] = !0), e), {}),
            [B]
        ),
        [V, H] = (0, o.useState)(() => (e.value || e.defaultValue ? { ...Z } : {})),
        Y = (0, o.useRef)(),
        j = (0, o.useRef)(b.identifier);
    (0, o.useEffect)(() => {
        b.identifier !== j.current && ((j.current = b.identifier), U((t) => (Object.keys(V).length > 0 ? (0, r.Mw)(t, b) : f(e.placeholderValue, A, b, R))));
    }, [b, A, V, R, e.placeholderValue]),
        L && Object.keys(V).length < Object.keys(Z).length && H((V = { ...Z })),
        null == L && Object.keys(V).length === Object.keys(Z).length && (H((V = {})), U(f(e.placeholderValue, A, b, R)));
    let W = M && Object.keys(V).length >= Object.keys(Z).length ? M : P,
        K = (t) => {
            if (e.isDisabled || e.isReadOnly) return;
            let n = Object.keys(V),
                i = Object.keys(Z);
            null == t ? (D(null), U(f(e.placeholderValue, A, b, R)), H({})) : n.length >= i.length || (n.length === i.length - 1 && Z.dayPeriod && !V.dayPeriod && 'dayPeriod' !== Y.current) ? D((t = (0, r.Mw)(t, (null == m ? void 0 : m.calendar) || new r.IQ()))) : U(t), (Y.current = null);
        },
        z = (0, o.useMemo)(() => W.toDate(C), [W, C]),
        q = (0, o.useMemo)(
            () =>
                B.formatToParts(z).map((e) => {
                    let t = T[e.type];
                    'era' === e.type && 1 === b.getEras().length && (t = !1);
                    let n = T[e.type] && !V[e.type],
                        r = T[e.type] ? I(e.type, e.value, i) : null;
                    return {
                        type: S[e.type] || e.type,
                        text: n ? r : e.value,
                        ...v(W, e.type, F),
                        isPlaceholder: n,
                        placeholder: r,
                        isEditable: t
                    };
                }),
            [z, V, B, F, W, b, i]
        );
    Z.era && V.year && !V.era ? ((V.era = !0), H({ ...V })) : !Z.era && V.era && (delete V.era, H({ ...V }));
    let Q = (e) => {
            (V[e] = !0), 'year' === e && Z.era && (V.era = !0), H({ ...V });
        },
        X = (e, t) => {
            if (V[e]) K(N(W, e, t, F));
            else {
                Q(e);
                let t = Object.keys(V),
                    n = Object.keys(Z);
                (t.length >= n.length || (t.length === n.length - 1 && Z.dayPeriod && !V.dayPeriod)) && K(W);
            }
        },
        $ = e.isInvalid || 'invalid' === e.validationState || l(M, e.minValue, e.maxValue);
    return {
        value: M,
        dateValue: z,
        calendar: b,
        setValue: K,
        segments: q,
        dateFormatter: B,
        validationState: e.validationState || ($ ? 'invalid' : null),
        isInvalid: $,
        granularity: A,
        maxGranularity: null !== (n = e.maxGranularity) && void 0 !== n ? n : 'year',
        isDisabled: c,
        isReadOnly: _,
        isRequired: p,
        increment(e) {
            X(e, 1);
        },
        decrement(e) {
            X(e, -1);
        },
        incrementPage(e) {
            X(e, g[e] || 1);
        },
        decrementPage(e) {
            X(e, -(g[e] || 1));
        },
        setSegment(e, t) {
            Q(e), K(O(W, e, t, F));
        },
        confirmPlaceholder() {
            if (e.isDisabled || e.isReadOnly) return;
            let t = Object.keys(V),
                n = Object.keys(Z);
            t.length === n.length - 1 && Z.dayPeriod && !V.dayPeriod && (H((V = { ...Z })), K(W.copy()));
        },
        clearSegment(t) {
            delete V[t], (Y.current = t), H({ ...V });
            let n = f(e.placeholderValue, A, b, R),
                r = W;
            if ('dayPeriod' === t && 'hour' in W && 'hour' in n) {
                let e = W.hour >= 12,
                    t = n.hour >= 12;
                e && !t ? (r = W.set({ hour: W.hour - 12 })) : !e && t && (r = W.set({ hour: W.hour + 12 }));
            } else t in W && (r = W.set({ [t]: n[t] }));
            D(null), K(r);
        },
        formatValue(e) {
            if (!M) return '';
            let t = d(e, G);
            return new r.CN(i, t).format(z);
        }
    };
}
function v(e, t, n) {
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
                minValue: (0, r.jx)(e),
                maxValue: e.calendar.getMonthsInYear(e)
            };
        case 'day':
            return {
                value: e.day,
                minValue: (0, r.PA)(e),
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
}
function N(e, t, n, r) {
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
                let t = e.hour,
                    n = t >= 12;
                return e.set({ hour: n ? t - 12 : t + 12 });
            }
            case 'hour':
            case 'minute':
            case 'second':
                return e.cycle(t, n, {
                    round: 'hour' !== t,
                    hourCycle: r.hour12 ? 12 : 24
                });
        }
}
function O(e, t, n, r) {
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
}
function R(e) {
    var t, n, s;
    let u = (0, i.d)(e),
        [c, E] = (0, a.zk)(e.value, e.defaultValue || null, e.onChange),
        [f, p] = (0, o.useState)(
            () =>
                c || {
                    start: null,
                    end: null
                }
        );
    null == c &&
        f.start &&
        f.end &&
        p(
            (f = {
                start: null,
                end: null
            })
        );
    let m = c || f,
        I = (e) => {
            p(e), (null == e ? void 0 : e.start) && e.end ? E(e) : E(null);
        },
        [T] = h((null == m ? void 0 : m.start) || (null == m ? void 0 : m.end) || e.placeholderValue, e.granularity),
        g = 'hour' === T || 'minute' === T || 'second' === T,
        S = null === (s = e.shouldCloseOnSelect) || void 0 === s || s,
        [A, v] = (0, o.useState)(null),
        [N, O] = (0, o.useState)(null);
    m && m.start && m.end && ((A = m), 'hour' in m.start && (N = m));
    let R = (e, t) => {
            I({
                start: 'timeZone' in t.start ? t.start.set((0, r.WG)(e.start)) : (0, r.IO)(e.start, t.start),
                end: 'timeZone' in t.end ? t.end.set((0, r.WG)(e.end)) : (0, r.IO)(e.end, t.end)
            }),
                v(null),
                O(null);
        },
        C = (t) => {
            let n = 'function' == typeof S ? S() : S;
            g
                ? n || (t.start && t.end && (null == N ? void 0 : N.start) && (null == N ? void 0 : N.end))
                    ? R(t, {
                          start: (null == N ? void 0 : N.start) || _(e.placeholderValue),
                          end: (null == N ? void 0 : N.end) || _(e.placeholderValue)
                      })
                    : v(t)
                : t.start && t.end
                  ? I(t)
                  : v(t),
                n && u.setOpen(!1);
        },
        y = (e) => {
            (null == A ? void 0 : A.start) && (null == A ? void 0 : A.end) && e.start && e.end ? R(A, e) : O(e);
        },
        b = e.isInvalid || 'invalid' === e.validationState || (null != m && (l(m.start, e.minValue, e.maxValue) || l(m.end, e.minValue, e.maxValue) || (null != m.end && null != m.start && 0 > m.end.compare(m.start)) || ((null == m ? void 0 : m.start) && (null === (t = e.isDateUnavailable) || void 0 === t ? void 0 : t.call(e, m.start))) || ((null == m ? void 0 : m.end) && (null === (n = e.isDateUnavailable) || void 0 === n ? void 0 : n.call(e, m.end))))),
        L = e.validationState || (b ? 'invalid' : null);
    return {
        value: m,
        setValue: I,
        dateRange: A,
        timeRange: N,
        granularity: T,
        hasTime: g,
        setDate(e, t) {
            C({
                ...A,
                [e]: t
            });
        },
        setTime(e, t) {
            y({
                ...N,
                [e]: t
            });
        },
        setDateTime(e, t) {
            I({
                ...m,
                [e]: t
            });
        },
        setDateRange: C,
        setTimeRange: y,
        ...u,
        setOpen(t) {
            !t &&
                !((null == m ? void 0 : m.start) && (null == m ? void 0 : m.end)) &&
                (null == A ? void 0 : A.start) &&
                (null == A ? void 0 : A.end) &&
                g &&
                R(A, {
                    start: (null == N ? void 0 : N.start) || _(e.placeholderValue),
                    end: (null == N ? void 0 : N.end) || _(e.placeholderValue)
                }),
                u.setOpen(t);
        },
        validationState: L,
        isInvalid: b,
        formatValue(t, n) {
            let i;
            if (!m || !m.start || !m.end) return null;
            let a = 'timeZone' in m.start ? m.start.timeZone : void 0,
                o = e.granularity || (m.start && 'minute' in m.start ? 'minute' : 'day'),
                s = 'timeZone' in m.end ? m.end.timeZone : void 0,
                l = e.granularity || (m.end && 'minute' in m.end ? 'minute' : 'day'),
                u = d(n, {
                    granularity: o,
                    timeZone: a,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle,
                    showEra: ('gregory' === m.start.calendar.identifier && 'BC' === m.start.era) || ('gregory' === m.end.calendar.identifier && 'BC' === m.end.era)
                }),
                c = m.start.toDate(a || 'UTC'),
                _ = m.end.toDate(s || 'UTC'),
                E = new r.CN(t, u);
            if (a === s && o === l && 0 !== m.start.compare(m.end)) {
                try {
                    let e = E.formatRangeToParts(c, _),
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
                i = E;
            } else {
                let a = d(n, {
                    granularity: l,
                    timeZone: s,
                    hideTimeZone: e.hideTimeZone,
                    hourCycle: e.hourCycle
                });
                i = new r.CN(t, a);
            }
            return {
                start: E.format(c),
                end: i.format(_)
            };
        }
    };
}
function C(e) {
    let { placeholderValue: t = new r.qp(), minValue: n, maxValue: i, granularity: s } = e,
        [l, u] = (0, a.zk)(e.value, e.defaultValue, e.onChange),
        c = l || t,
        d = c && 'day' in c ? c : void 0,
        _ = e.defaultValue && 'timeZone' in e.defaultValue ? e.defaultValue.timeZone : void 0,
        E = (0, o.useMemo)(() => {
            let e = c && 'timeZone' in c ? c.timeZone : void 0;
            return (e || _) && t ? (0, r.fW)(y(t), e || _) : y(t);
        }, [t, c, _]),
        f = (0, o.useMemo)(() => y(n, d), [n, d]),
        h = (0, o.useMemo)(() => y(i, d), [i, d]),
        p = (0, o.useMemo)(() => (l && 'day' in l ? (0, r.ZB)(l) : l), [l]),
        m = (0, o.useMemo)(() => (null == l ? null : y(l)), [l]),
        I = (e) => {
            u(d || _ ? e : e && (0, r.ZB)(e));
        };
    return {
        ...A({
            ...e,
            value: m,
            defaultValue: void 0,
            minValue: f,
            maxValue: h,
            onChange: I,
            granularity: s || 'minute',
            maxGranularity: 'hour',
            placeholderValue: E,
            createCalendar: () => new r.IQ()
        }),
        timeValue: p
    };
}
function y(e, t = (0, r.Lg)((0, r.iT)())) {
    return e ? ('day' in e ? e : (0, r.IO)(t, e)) : null;
}
