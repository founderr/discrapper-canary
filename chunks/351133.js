var r = n(512722),
    i = n.n(r),
    a = n(911969),
    s = n(465343),
    o = n(706454),
    l = n(117530),
    u = n(160062),
    c = n(456007),
    d = n(581364),
    _ = n(689938);
let E = {
        [a.jw.SUB_COMMAND]: () => ({ success: !1 }),
        [a.jw.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [a.jw.BOOLEAN]: (e) => {
            if ('text' !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: null != (0, u.Kl)(t) };
        },
        [a.jw.STRING]: (e, t, n) => {
            let r;
            switch ((i()(t.type === a.jw.STRING, 'option type must match validator type'), e.type)) {
                case 'emoji':
                    r = e.surrogate;
                    break;
                case 'text':
                    r = e.text.trim();
                    break;
                default:
                    return { success: !1 };
            }
            if (null != t.choices) return { success: null != (0, u.cT)(t.choices, r) };
            if (t.autocomplete) return { success: null != (0, u.Wv)(n, t.name, r) };
            let s = r;
            if (void 0 !== t.minLength || void 0 !== t.maxLength) {
                if (null == s) return { success: !1 };
                let e = (function (e, t, n) {
                    if ((void 0 !== t.minLength && e.length < t.minLength) || (void 0 !== t.maxLength && e.length > t.maxLength)) {
                        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
                            return {
                                success: !1,
                                error: n.exactRangeErrorMessage.format({ value: p(t.minLength) })
                            };
                        if (void 0 !== t.maxLength && void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: n.rangeErrorMessage.format({
                                    minimum: p(t.minLength),
                                    maximum: p(t.maxLength)
                                })
                            };
                        else if (void 0 !== t.minLength)
                            return {
                                success: !1,
                                error: n.minErrorMessage.format({ minimum: p(t.minLength) })
                            };
                        else if (void 0 !== t.maxLength)
                            return {
                                success: !1,
                                error: n.maxErrorMessage.format({ maximum: p(t.maxLength) })
                            };
                    }
                    return { success: !0 };
                })(s, t, {
                    exactRangeErrorMessage: _.Z.Messages.COMMAND_VALIDATION_STRING_EXACT_RANGE_ERROR,
                    rangeErrorMessage: _.Z.Messages.COMMAND_VALIDATION_STRING_RANGE_ERROR,
                    minErrorMessage: _.Z.Messages.COMMAND_VALIDATION_STRING_MINIMUM_ERROR,
                    maxErrorMessage: _.Z.Messages.COMMAND_VALIDATION_STRING_MAXIMUM_ERROR
                });
                if (!e.success) return e;
            }
            return { success: !0 };
        },
        [a.jw.INTEGER]: (e, t, n) => {
            i()(t.type === a.jw.INTEGER, 'option type must match validator type');
            let r = 'text' === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, u.l1)(t.choices, r) };
            if (t.autocomplete) return { success: null != (0, u.xg)(n, t.name, r) };
            let s = Number(c.AS(o.default.locale, r));
            return null == s || isNaN(s) || !Number.isInteger(s) || !Number.isSafeInteger(s) ? { success: !1 } : h(s, t, _.Z.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, _.Z.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, _.Z.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR);
        },
        [a.jw.NUMBER]: (e, t, n) => {
            i()(t.type === a.jw.NUMBER, 'option type must match validator type');
            let r = 'text' === e.type ? e.text.trim() : null;
            if (null == r || 0 === r.length) return { success: !1 };
            if (null != t.choices) return { success: null != (0, u.l1)(t.choices, r) };
            if (t.autocomplete) return { success: null != (0, u.xg)(n, t.name, r) };
            let s = Number(c.AS(o.default.locale, r));
            return isNaN(s) || s > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER ? { success: !1 } : h(s, t, _.Z.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, _.Z.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, _.Z.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR);
        },
        [a.jw.USER]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, s.K)(e.text, r, n, { allowRoles: !1 });
                return { success: (null == t ? void 0 : t.type) === 'userMention' };
            }
        },
        [a.jw.CHANNEL]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'channelMention' === e.type };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, s.K)(e.text, r, n);
                return { success: (null == t ? void 0 : t.type) === 'channelMention' };
            }
        },
        [a.jw.ROLE]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: f(e) };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, s.K)(e.text, r, n, { allowUsers: !1 });
                return { success: (null == t ? void 0 : t.type) === 'roleMention' };
            }
        },
        [a.jw.MENTIONABLE]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type || f(e) };
            {
                if ((0, d.BH)(e.text)) return { success: !0 };
                let t = (0, s.K)(e.text, r, n);
                return { success: null != t && ('userMention' === t.type || f(t)) };
            }
        },
        [a.jw.ATTACHMENT]: (e, t, n, r, i) => {
            if ('text' !== e.type) return { success: !1 };
            let a = l.Z.getUpload(n, t.name, (0, d.D7)(i));
            return { success: null != a && a.filename === e.text };
        }
    },
    f = (e) => 'roleMention' === e.type || ('textMention' === e.type && '@everyone' === e.text);
function h(e, t, n, r, i) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: n.format({
                    minimum: p(t.minValue),
                    maximum: p(t.maxValue)
                })
            };
        if (null != t.minValue)
            return {
                success: !1,
                error: r.format({ minimum: p(t.minValue) })
            };
        else if (null != t.maxValue)
            return {
                success: !1,
                error: i.format({ maximum: p(t.maxValue) })
            };
    }
    return { success: !0 };
}
function p(e) {
    return e.toLocaleString(_.Z.getLocale(), { useGrouping: !1 });
}
t.Z = E;
