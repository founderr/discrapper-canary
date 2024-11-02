var r = n(911969),
    i = n(465343),
    a = n(706454),
    s = n(117530),
    o = n(174212),
    l = n(456007),
    u = n(581364),
    c = n(689079),
    d = n(388032);
let f = {
        [r.jw.SUB_COMMAND]: () => ({ success: !1 }),
        [r.jw.SUB_COMMAND_GROUP]: () => ({ success: !1 }),
        [r.jw.STRING]: (e, t, n) => {
            var i, a, s;
            let l =
                null ===
                    (i = (function (e) {
                        switch (e.type) {
                            case 'emoji':
                                return e.surrogate;
                            case 'text':
                                return e.text;
                        }
                    })(e)) || void 0 === i
                    ? void 0
                    : i.trim();
            if (t.autocomplete) {
                let e = o.Z.getAutocompleteLastChoices(n, t.name);
                null != e && (l = String(null !== (s = null === (a = e.find((e) => e.name === l)) || void 0 === a ? void 0 : a.value) && void 0 !== s ? s : l));
            }
            return null == t.choices || (null != l && t.choices.map((e) => e.displayName).includes(l))
                ? t.type === r.jw.STRING && (void 0 !== t.minLength || void 0 !== t.maxLength)
                    ? void 0 !== l
                        ? (function (e, t, n) {
                              if ((void 0 !== t.minLength && e.length < t.minLength) || (void 0 !== t.maxLength && e.length > t.maxLength)) {
                                  if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength)
                                      return {
                                          success: !1,
                                          error: d.intl.formatToPlainString(n.exactRangeErrorMessage, { value: p(t.minLength) })
                                      };
                                  if (void 0 !== t.maxLength && void 0 !== t.minLength)
                                      return {
                                          success: !1,
                                          error: d.intl.formatToPlainString(n.rangeErrorMessage, {
                                              minimum: p(t.minLength),
                                              maximum: p(t.maxLength)
                                          })
                                      };
                                  else if (void 0 !== t.minLength)
                                      return {
                                          success: !1,
                                          error: d.intl.formatToPlainString(n.minErrorMessage, { minimum: p(t.minLength) })
                                      };
                                  else if (void 0 !== t.maxLength)
                                      return {
                                          success: !1,
                                          error: d.intl.formatToPlainString(n.maxErrorMessage, { maximum: p(t.maxLength) })
                                      };
                              }
                              return { success: !0 };
                          })(l, t, {
                              exactRangeErrorMessage: d.t['e+9/SU'],
                              rangeErrorMessage: d.t.IE1sTk,
                              minErrorMessage: d.t.rXAFQE,
                              maxErrorMessage: d.t.ycEPx8
                          })
                        : { success: !0 }
                    : { success: !0 }
                : { success: !1 };
        },
        [r.jw.BOOLEAN]: (e) => {
            if ('text' !== e.type) return { success: !1 };
            let t = e.text.trim();
            return { success: c.ak.map((e) => e.displayName.toLowerCase()).includes(t.toLowerCase()) };
        },
        [r.jw.INTEGER]: (e, t, n) => {
            if ('text' !== e.type || t.type !== r.jw.INTEGER) return { success: !1 };
            let i = e.text.trim();
            if (0 === i.length) return { success: !1 };
            if (null != t.choices) return t.choices.map((e) => e.displayName).includes(i) ? { success: !0 } : { success: !1 };
            let s = o.Z.getAutocompleteLastChoices(n, t.name);
            if (null != s && s.map((e) => e.displayName).includes(i)) return { success: !0 };
            let u = Number(l.AS(a.default.locale, i));
            return !isNaN(u) && Number.isInteger(u) && Number.isSafeInteger(u) ? h(u, t, d.t['8Y5zsr'], d.t.CyRLmJ, d.t['VD3Q+f']) : { success: !1 };
        },
        [r.jw.NUMBER]: (e, t, n) => {
            if ('text' !== e.type || t.type !== r.jw.NUMBER) return { success: !1 };
            let i = e.text.trim();
            if (0 === i.length) return { success: !1 };
            if (null != t.choices) return t.choices.map((e) => e.displayName).includes(i) ? { success: !0 } : { success: !1 };
            let s = o.Z.getAutocompleteLastChoices(n, t.name);
            if (null != s && s.map((e) => e.displayName).includes(i)) return { success: !0 };
            let u = Number(l.AS(a.default.locale, i));
            return isNaN(u) || u > Number.MAX_SAFE_INTEGER || u < Number.MIN_SAFE_INTEGER ? { success: !1 } : h(u, t, d.t['8Y5zsr'], d.t.CyRLmJ, d.t['VD3Q+f']);
        },
        [r.jw.USER]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type };
            {
                if ((0, u.BH)(e.text)) return { success: !0 };
                let t = (0, i.K)(e.text, r, n, { allowRoles: !1 });
                return { success: (null == t ? void 0 : t.type) === 'userMention' };
            }
        },
        [r.jw.CHANNEL]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'channelMention' === e.type };
            {
                if ((0, u.BH)(e.text)) return { success: !0 };
                let t = (0, i.K)(e.text, r, n);
                return { success: (null == t ? void 0 : t.type) === 'channelMention' };
            }
        },
        [r.jw.ROLE]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: _(e) };
            {
                if ((0, u.BH)(e.text)) return { success: !0 };
                let t = (0, i.K)(e.text, r, n, { allowUsers: !1 });
                return { success: (null == t ? void 0 : t.type) === 'roleMention' };
            }
        },
        [r.jw.MENTIONABLE]: (e, t, n, r) => {
            if ('text' !== e.type) return { success: 'userMention' === e.type || _(e) };
            {
                if ((0, u.BH)(e.text)) return { success: !0 };
                let t = (0, i.K)(e.text, r, n);
                return { success: null != t && ('userMention' === t.type || _(t)) };
            }
        },
        [r.jw.ATTACHMENT]: (e, t, n, r, i) => {
            if ('text' !== e.type) return { success: !1 };
            let a = s.Z.getUpload(n, t.name, (0, u.D7)(i));
            return { success: null != a && a.filename === e.text };
        }
    },
    _ = (e) => 'roleMention' === e.type || ('textMention' === e.type && '@everyone' === e.text);
function h(e, t, n, r, i) {
    if ((null != t.minValue && e < t.minValue) || (null != t.maxValue && e > t.maxValue)) {
        if (null != t.maxValue && null != t.minValue)
            return {
                success: !1,
                error: d.intl.formatToPlainString(n, {
                    minimum: p(t.minValue),
                    maximum: p(t.maxValue)
                })
            };
        if (null != t.minValue)
            return {
                success: !1,
                error: d.intl.formatToPlainString(r, { minimum: p(t.minValue) })
            };
        else if (null != t.maxValue)
            return {
                success: !1,
                error: d.intl.formatToPlainString(i, { maximum: p(t.maxValue) })
            };
    }
    return { success: !0 };
}
function p(e) {
    return e.toLocaleString(d.intl.currentLocale, { useGrouping: !1 });
}
t.Z = f;
