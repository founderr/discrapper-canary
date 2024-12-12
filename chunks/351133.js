var i = r(911969),
    a = r(465343),
    s = r(706454),
    o = r(117530),
    l = r(174212),
    u = r(456007),
    c = r(581364),
    d = r(689079),
    f = r(388032);
let _ = {
        [i.jw.SUB_COMMAND]: () => ({ success: !1 }),
        [i.jw.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [i.jw.STRING]: (e, n, r) => {
            var a, s, o;
            let u = null === (a = p(e)) || void 0 === a ? void 0 : a.trim();
            if (n.autocomplete) {
                let e = l.Z.getAutocompleteLastChoices(r, n.name);
                null != e && (u = String(null !== (o = null === (s = e.find((e) => e.name === u)) || void 0 === s ? void 0 : s.value) && void 0 !== o ? o : u));
            }
            return null == n.choices || (null != u && n.choices.map((e) => e.displayName).includes(u))
                ? n.type === i.jw.STRING && (void 0 !== n.minLength || void 0 !== n.maxLength)
                    ? void 0 !== u
                        ? g(u, n, {
                              exactRangeErrorMessage: f.t['e+9/SU'],
                              rangeErrorMessage: f.t.IE1sTk,
                              minErrorMessage: f.t.rXAFQE,
                              maxErrorMessage: f.t.ycEPx8
                          })
                        : { success: !0 }
                    : { success: !0 }
                : { success: !1 };
        },
        [i.jw.BOOLEAN]: (e) => {
            if ('text' !== e.type) return { success: !1 };
            let n = e.text.trim();
            return { success: d.ak.map((e) => e.displayName.toLowerCase()).includes(n.toLowerCase()) };
        },
        [i.jw.INTEGER]: (e, n, r) => {
            if ('text' !== e.type || n.type !== i.jw.INTEGER) return { success: !1 };
            let a = e.text.trim();
            if (0 === a.length) return { success: !1 };
            if (null != n.choices) return n.choices.map((e) => e.displayName).includes(a) ? { success: !0 } : { success: !1 };
            let o = l.Z.getAutocompleteLastChoices(r, n.name);
            if (null != o && o.map((e) => e.displayName).includes(a)) return { success: !0 };
            let c = Number(u.AS(s.default.locale, a));
            return !isNaN(c) && Number.isInteger(c) && Number.isSafeInteger(c) ? m(c, n, f.t['8Y5zsr'], f.t.CyRLmJ, f.t['VD3Q+f']) : { success: !1 };
        },
        [i.jw.NUMBER]: (e, n, r) => {
            if ('text' !== e.type || n.type !== i.jw.NUMBER) return { success: !1 };
            let a = e.text.trim();
            if (0 === a.length) return { success: !1 };
            if (null != n.choices) return n.choices.map((e) => e.displayName).includes(a) ? { success: !0 } : { success: !1 };
            let o = l.Z.getAutocompleteLastChoices(r, n.name);
            if (null != o && o.map((e) => e.displayName).includes(a)) return { success: !0 };
            let c = Number(u.AS(s.default.locale, a));
            return isNaN(c) || c > Number.MAX_SAFE_INTEGER || c < Number.MIN_SAFE_INTEGER ? { success: !1 } : m(c, n, f.t['8Y5zsr'], f.t.CyRLmJ, f.t['VD3Q+f']);
        },
        [i.jw.USER]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type };
            {
                if ((0, c.BH)(e.text)) return { success: !0 };
                let n = (0, a.K)(e.text, i, r, { allowRoles: !1 });
                return { success: (null == n ? void 0 : n.type) === 'userMention' };
            }
        },
        [i.jw.CHANNEL]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'channelMention' === e.type };
            {
                if ((0, c.BH)(e.text)) return { success: !0 };
                let n = (0, a.K)(e.text, i, r);
                return { success: (null == n ? void 0 : n.type) === 'channelMention' };
            }
        },
        [i.jw.ROLE]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: h(e) };
            {
                if ((0, c.BH)(e.text)) return { success: !0 };
                let n = (0, a.K)(e.text, i, r, { allowUsers: !1 });
                return { success: (null == n ? void 0 : n.type) === 'roleMention' };
            }
        },
        [i.jw.MENTIONABLE]: (e, n, r, i) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type || h(e) };
            {
                if ((0, c.BH)(e.text)) return { success: !0 };
                let n = (0, a.K)(e.text, i, r);
                return { success: null != n && ('userMention' === n.type || h(n)) };
            }
        },
        [i.jw.ATTACHMENT]: (e, n, r, i, a) => {
            if ('text' !== e.type) return { success: !1 };
            let s = o.Z.getUpload(r, n.name, (0, c.D7)(a));
            return { success: null != s && s.filename === e.text };
        }
    },
    h = (e) => 'roleMention' === e.type || ('textMention' === e.type && '@everyone' === e.text);
function p(e) {
    switch (e.type) {
        case 'emoji':
            return e.surrogate;
        case 'text':
            return e.text;
    }
}
function m(e, n, r, i, a) {
    if ((null != n.minValue && e < n.minValue) || (null != n.maxValue && e > n.maxValue)) {
        if (null != n.maxValue && null != n.minValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(r, {
                    minimum: E(n.minValue),
                    maximum: E(n.maxValue)
                })
            };
        if (null != n.minValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(i, { minimum: E(n.minValue) })
            };
        else if (null != n.maxValue)
            return {
                success: !1,
                error: f.intl.formatToPlainString(a, { maximum: E(n.maxValue) })
            };
    }
    return { success: !0 };
}
function g(e, n, r) {
    if ((void 0 !== n.minLength && e.length < n.minLength) || (void 0 !== n.maxLength && e.length > n.maxLength)) {
        if (void 0 !== n.maxLength && void 0 !== n.minLength && n.minLength === n.maxLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(r.exactRangeErrorMessage, { value: E(n.minLength) })
            };
        if (void 0 !== n.maxLength && void 0 !== n.minLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(r.rangeErrorMessage, {
                    minimum: E(n.minLength),
                    maximum: E(n.maxLength)
                })
            };
        else if (void 0 !== n.minLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(r.minErrorMessage, { minimum: E(n.minLength) })
            };
        else if (void 0 !== n.maxLength)
            return {
                success: !1,
                error: f.intl.formatToPlainString(r.maxErrorMessage, { maximum: E(n.maxLength) })
            };
    }
    return { success: !0 };
}
function E(e) {
    return e.toLocaleString(f.intl.currentLocale, { useGrouping: !1 });
}
n.Z = _;
