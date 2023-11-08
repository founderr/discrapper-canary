(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44105"], {
        509007: function(e, t, r) {
            e.exports = function(e, t, r, n) {
                var u = -1,
                    a = null == e ? 0 : e.length;
                for (n && a && (r = e[++u]); ++u < a;) r = t(r, e[u], u, e);
                return r
            }
        },
        270281: function(e, t, r) {
            e.exports = function(e) {
                return e.split("")
            }
        },
        698555: function(e, t, r) {
            var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            e.exports = function(e) {
                return e.match(n) || []
            }
        },
        300437: function(e, t, r) {
            e.exports = function(e) {
                return function(t) {
                    return null == e ? void 0 : e[t]
                }
            }
        },
        389832: function(e, t, r) {
            var n = r("890022");
            e.exports = function(e, t, r) {
                var u = e.length;
                return r = void 0 === r ? u : r, !t && r >= u ? e : n(e, t, r)
            }
        },
        568410: function(e, t, r) {
            var n = r("389832"),
                u = r("488605"),
                a = r("907193"),
                o = r("890305");
            e.exports = function(e) {
                return function(t) {
                    var r = u(t = o(t)) ? a(t) : void 0,
                        i = r ? r[0] : t.charAt(0),
                        l = r ? n(r, 1).join("") : t.slice(1);
                    return i[e]() + l
                }
            }
        },
        864979: function(e, t, r) {
            r("781738");
            var n = r("509007"),
                u = r("109129"),
                a = r("787191"),
                o = RegExp("['’]", "g");
            e.exports = function(e) {
                return function(t) {
                    return n(a(u(t).replace(o, "")), e, "")
                }
            }
        },
        954328: function(e, t, r) {
            var n = r("300437"),
                u = n({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                });
            e.exports = u
        },
        488605: function(e, t, r) {
            var n = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function(e) {
                return n.test(e)
            }
        },
        899368: function(e, t, r) {
            var n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            e.exports = function(e) {
                return n.test(e)
            }
        },
        907193: function(e, t, r) {
            var n = r("270281"),
                u = r("488605"),
                a = r("152828");
            e.exports = function(e) {
                return u(e) ? a(e) : n(e)
            }
        },
        152828: function(e, t, r) {
            var n = "\ud800-\udfff",
                u = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                a = "\ud83c[\udffb-\udfff]",
                o = "[^" + n + "]",
                i = "(?:\ud83c[\udde6-\uddff]){2}",
                l = "[\ud800-\udbff][\udc00-\udfff]",
                f = "(?:" + u + "|" + a + ")?",
                d = "[\\ufe0e\\ufe0f]?",
                c = "(?:\\u200d(?:" + [o, i, l].join("|") + ")" + d + f + ")*",
                s = RegExp(a + "(?=" + a + ")|" + ("(?:" + [o + u + "?", u, i, l, "[" + n + "]"].join("|") + ")") + (d + f + c), "g");
            e.exports = function(e) {
                return e.match(s) || []
            }
        },
        711615: function(e, t, r) {
            var n = "\ud800-\udfff",
                u = "\\u2700-\\u27bf",
                a = "a-z\\xdf-\\xf6\\xf8-\\xff",
                o = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                i = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                l = "['’]",
                f = "[" + i + "]",
                d = "[" + a + "]",
                c = "[^" + n + i + "\\d+" + u + a + o + "]",
                s = "(?:\ud83c[\udde6-\uddff]){2}",
                _ = "[\ud800-\udbff][\udc00-\udfff]",
                E = "[" + o + "]",
                S = "(?:" + d + "|" + c + ")",
                p = "(?:" + l + "(?:d|ll|m|re|s|t|ve))?",
                g = "(?:" + l + "(?:D|LL|M|RE|S|T|VE))?",
                h = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
                C = "[\\ufe0e\\ufe0f]?",
                v = "(?:\\u200d(?:" + ["[^" + n + "]", s, _].join("|") + ")" + C + h + ")*",
                b = "(?:" + ["[" + u + "]", s, _].join("|") + ")" + (C + h + v),
                x = RegExp([E + "?" + d + "+" + p + "(?=" + [f, E, "$"].join("|") + ")", "(?:" + E + "|" + c + ")+" + g + "(?=" + [f, E + S, "$"].join("|") + ")", E + "?" + S + "+" + p, E + "+" + g, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", b].join("|"), "g");
            e.exports = function(e) {
                return e.match(x) || []
            }
        },
        208302: function(e, t, r) {
            var n = r("863398"),
                u = r("864979")(function(e, t, r) {
                    return t = t.toLowerCase(), e + (r ? n(t) : t)
                });
            e.exports = u
        },
        863398: function(e, t, r) {
            var n = r("890305"),
                u = r("191986");
            e.exports = function(e) {
                return u(n(e).toLowerCase())
            }
        },
        109129: function(e, t, r) {
            r("781738");
            var n = r("954328"),
                u = r("890305"),
                a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                o = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            e.exports = function(e) {
                return (e = u(e)) && e.replace(a, n).replace(o, "")
            }
        },
        191986: function(e, t, r) {
            var n = r("568410")("toUpperCase");
            e.exports = n
        },
        787191: function(e, t, r) {
            var n = r("698555"),
                u = r("899368"),
                a = r("890305"),
                o = r("711615");
            e.exports = function(e, t, r) {
                return (e = a(e), void 0 === (t = r ? void 0 : t)) ? u(e) ? o(e) : n(e) : e.match(t) || []
            }
        },
        578899: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return u
                }
            });
            var n = r("862205");
            let u = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-08_deadchat_simple_prompt_guild",
                label: "Simple deadchat prompt",
                defaultConfig: {
                    triggerDeadchat: !1,
                    enableDeadchat: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !1
                    }
                }, {
                    id: 1,
                    label: "trigger deadchat upon connection open",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !0
                    }
                }]
            })
        },
        127421: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchAllGuildMembers: function() {
                    return d
                }
            }), r("70102");
            var n = r("811022"),
                u = r("872717"),
                a = r("913144"),
                o = r("448993"),
                i = r("828434"),
                l = r("49111");
            let f = new n.default("MemberSafetyElasticSearch");
            async function d(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (n > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: c = !0,
                    signal: s
                } = r;
                try {
                    var _;
                    let o = await u.default.post({
                        url: l.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: s
                    });
                    if (f.info("JANK searchAllGuildMembers", {
                            response: o
                        }), o.status === i.INDEXING_RESPONSE_CODE) {
                        if (null == o.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!c) throw Error("Indexing response received but autoRetry is disabled");
                        return await a.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * o.body.retry_after)), d(e, t, r, n + 1)
                    }
                    return {
                        type: i.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (_ = o.body).guild_id,
                            members: _.members,
                            page_result_count: _.page_result_count,
                            total_result_count: _.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new o.APIError(t);
                    return f.info("JANK searchAllGuildMembers error", {
                        error: e
                    }), {
                        type: i.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }
        },
        828434: function(e, t, r) {
            "use strict";
            var n, u;
            r.r(t), r.d(t, {
                INDEXING_RESPONSE_CODE: function() {
                    return a
                },
                GuildMemberSearchResponseType: function() {
                    return n
                }
            });
            let a = 202;
            (u = n || (n = {}))[u.SUCCESSFUL_QUERY = 1] = "SUCCESSFUL_QUERY", u[u.ERROR = 2] = "ERROR"
        },
        225982: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchGuildMembers: function() {
                    return l
                }
            });
            var n = r("811022"),
                u = r("913144"),
                a = r("127421"),
                o = r("828434");
            let i = new n.default("MemberSafetyGuildMemberSearchActionCreators");
            async function l(e, t, r) {
                let n = await (0, a.searchAllGuildMembers)(e, t, r);
                if (n.type === o.GuildMemberSearchResponseType.ERROR) throw n.body;
                let {
                    body: l
                } = n;
                i.info("JANK searchGuildMembers success", {
                    body: l
                }), u.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: l.members,
                    page_result_count: l.page_result_count,
                    total_result_count: l.total_result_count
                })
            }
        },
        219115: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useIsMakingRequestV2: function() {
                    return D
                },
                useIsStillIndexingV2: function() {
                    return N
                },
                handleInitializeV2: function() {
                    return M
                },
                handleGuildDeleteV2: function() {
                    return T
                },
                handleSearchStateUpdateV2: function() {
                    return L
                },
                handlePaginationUpdateV2: function() {
                    return H
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return G
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return w
                }
            }), r("222007"), r("70102");
            var n, u, a, o, i = r("714617"),
                l = r.n(i),
                f = r("917351"),
                d = r("308503"),
                c = r("811022"),
                s = r("249654"),
                _ = r("449008"),
                E = r("691386"),
                S = r("770115"),
                p = r("490931"),
                g = r("225982"),
                h = r("178406");
            let C = new c.default("MemberSafetySearchManagerV2");

            function v(e) {
                return "guild_".concat(e)
            }

            function b(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(a = n || (n = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.STILL_INDEXING = 4] = "STILL_INDEXING";
            let x = (0, d.default)(e => ({}));

            function U(e, t) {
                let r = x.getState()[e];
                return null == r && (r = b(1)), r = {
                    ...r,
                    ...t
                }, x.setState(t => ({
                    ...t,
                    [e]: r
                })), r
            }

            function R(e) {
                return x.getState()[e]
            }

            function A(e) {
                let t = R(e);
                return null == t && U(e, t = b(1)), t
            }

            function I(e) {
                let t = R(e);
                null != t && U(e, {
                    requestState: 3,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function m(e) {
                var t;
                let r = v(e);
                t = r, x.setState(e => {
                    let r = {
                        ...e
                    };
                    return delete r[t], r
                })
            }(o = u || (u = {}))[o.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", o[o.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", o[o.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", o[o.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function y(e) {
                var t, r, n, u;
                let a = h.default.getSearchStateByGuildId(e),
                    o = h.default.getPaginationStateByGuildId(e),
                    i = v(e),
                    d = A(i),
                    [c, b] = function(e, t, r) {
                        var n, u, a, o, i, l;
                        let f = function(e, t) {
                                var r;
                                let {
                                    currentPageChunkNumber: n,
                                    previousPageChunkNumber: u,
                                    nextPageChunkNumber: a
                                } = function(e) {
                                    let t = e.pageSize * e.currentPage,
                                        r = Math.floor(t / E.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        n = Math.floor(e.pageSize * (e.currentPage - 1) / E.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        u = Math.floor(e.pageSize * (e.currentPage + 1) / E.DEFAULT_SEARCH_CHUNK_LIMIT);
                                    return {
                                        currentPageChunkNumber: r,
                                        previousPageChunkNumber: n,
                                        nextPageChunkNumber: u
                                    }
                                }(t), {
                                    previousPagination: o
                                } = A(v(e)), i = t.currentPage, l = null !== (r = null == o ? void 0 : o.currentPage) && void 0 !== r ? r : 0, f = h.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == f:
                                    case n === a && 0 === n:
                                        return 0;
                                    case n === a && n === u:
                                        return 1;
                                    case l < i && n < a:
                                        return 2;
                                    case l > i && n >= u:
                                        if (0 < n) return 3;
                                        return 0;
                                    default:
                                        return 1
                                }
                            }(e, r),
                            d = h.default.getElasticSearchPaginationByGuildId(e);
                        switch (f) {
                            case 0: {
                                let t = h.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: E.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: s.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case 1:
                                return [null !== (n = t.cursor) && void 0 !== n ? n : null, {
                                    limit: E.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (u = t.cursor) && void 0 !== u ? u : void 0
                                }];
                            case 2:
                                return [null !== (a = null == d ? void 0 : d.after) && void 0 !== a ? a : null, {
                                    limit: E.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (o = null == d ? void 0 : d.after) && void 0 !== o ? o : void 0
                                }];
                            case 3:
                                return [null !== (i = null == d ? void 0 : d.before) && void 0 !== i ? i : null, {
                                    limit: E.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    before: null !== (l = null == d ? void 0 : d.before) && void 0 !== l ? l : void 0
                                }];
                            default:
                                (0, _.assertNever)(f)
                        }
                    }(e, d, o);
                let x = (t = function(e) {
                    var t;
                    let r = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: n
                        } = e;
                    if (null != (t = n) && t.length > 1) {
                        let [e, t] = (0, S.splitQuery)(n);
                        e.length > 0 && (r.and_query.usernames = {
                            or_query: e
                        }), t.length > 0 && (r.and_query.user_id = {
                            or_query: t
                        })
                    }
                    let {
                        requireUnusualDmActivity: u,
                        requireCommunicationDisabled: a
                    } = e, o = {};
                    u && (o.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - p.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), a && (o.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), Object.keys(o).length > 0 && (r.or_query.safety_signals = o);
                    let {
                        selectedRoleIds: i
                    } = e;
                    return i.size > 0 && (r.and_query.role_ids = {
                        and_query: Array.from(i)
                    }), r
                }(a), null == (r = b) ? t : {
                    ...t,
                    ...r
                });
                if (function(e, t) {
                        let r = A(e);
                        return l(r.query, t)
                    }(i, x) && (0, f.isEqual)(c, d.cursor)) return;
                let m = function(e, t, r, n) {
                    let u = R(e);
                    if ((null == u ? void 0 : u.requestState) === 2) {
                        var a;
                        null === (a = u.abortController) || void 0 === a || a.abort()
                    }
                    return U(e, {
                        requestState: 2,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: r,
                        previousPagination: n
                    })
                }(i, x, c, o);
                try {
                    ;
                    if (C.info("Making member search request", {
                            query: m.query,
                            guildId: e
                        }), null == m.query) throw Error("Query is null");
                    await (0, g.searchGuildMembers)(e, m.query, {
                        signal: null !== (u = null === (n = m.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== u ? u : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = R(e);
                        null != t && U(e, {
                            requestState: 0,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(i);
                    return
                }
                I(i)
            }

            function D(e) {
                return x(t => {
                    var r;
                    let n = v(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 2
                })
            }

            function N(e) {
                return x(t => {
                    var r;
                    let n = v(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === 4
                })
            }

            function M(e) {
                let {
                    guildId: t
                } = e;
                m(t), y(t)
            }

            function T(e) {
                let {
                    guild: t
                } = e;
                m(t.id)
            }

            function L(e) {
                let {
                    guildId: t
                } = e;
                y(t)
            }

            function H(e) {
                let {
                    guildId: t
                } = e;
                y(t)
            }

            function G(e) {
                let {
                    guildId: t
                } = e, r = v(t);
                I(r)
            }

            function w(e) {
                let {
                    guildId: t
                } = e, r = v(t);
                U(r, {
                    requestState: 4,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }
        }
    }
]);