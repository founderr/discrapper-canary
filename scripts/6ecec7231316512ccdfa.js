(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["79403"], {
        78349: function(e, t, n) {
            "use strict";
            n("424973"), e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (l = t[2].split("-")).shift(), r = l);
                var u = [];
                t[5] && (u = t[5].split("-")).shift();
                var a = [];
                if (t[6]) {
                    (l = t[6].split("-")).shift();
                    for (var l, o, i = []; l.length;) {
                        var c = l.shift();
                        1 === c.length ? o ? (a.push({
                            singleton: o,
                            extension: i
                        }), o = c, i = []) : o = c : i.push(c)
                    }
                    a.push({
                        singleton: o,
                        extension: i
                    })
                }
                var s = [];
                t[7] && ((s = t[7].split("-")).shift(), s.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: u,
                        extension: a,
                        privateuse: s
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var r = n("14716"),
                u = n("745510"),
                a = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007");
            var r = n("884691");

            function u() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let u = {};

            function a(e) {
                let t = (0, r.useRef)(u);
                return t.current === u && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                u = n("48174");
            let a = [];

            function l(e, t) {
                let n = (0, r.useRef)(),
                    l = (0, r.useRef)(a);
                return l.current === a ? (n.current = e(), l.current = t) : !(0, u.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }
        },
        133457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchEULA: function() {
                    return l
                }
            });
            var r = n("872717"),
                u = n("913144"),
                a = n("49111");
            async function l(e) {
                let t = await r.default.get({
                    url: a.Endpoints.STORE_EULA(e),
                    oldFormErrors: !0
                });
                u.default.dispatch({
                    type: "EULA_FETCH_SUCCESS",
                    eula: t.body
                })
            }
        },
        523360: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                u = n("884691"),
                a = n("446674"),
                l = n("77078"),
                o = n("133457"),
                i = n("784736"),
                c = n("145131"),
                s = n("9074"),
                d = n("782340"),
                f = n("639420");

            function p(e) {
                var t;
                let {
                    eulaId: n,
                    transitionState: p,
                    onClose: h
                } = e, g = (0, a.useStateFromStores)([i.default], () => i.default.getEULA(n));
                u.useEffect(() => {
                    (0, o.fetchEULA)(n)
                }, [n]);
                let m = null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : d.default.Messages.LOADING,
                    v = null != g ? (0, r.jsx)(s.default, {
                        children: g.content,
                        className: f.markdown
                    }) : (0, r.jsx)(l.Spinner, {
                        className: f.spinner
                    });
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: p,
                    size: l.ModalSize.SMALL,
                    "aria-label": m,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        justify: c.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: m
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            onClick: h
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        children: v
                    })]
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, u = n("872717"),
                a = n("49111"),
                l = n("782340");
            r = class extends u.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: a.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: a.Links.STATUS
                    }))
                }
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("773336");
            async function u(e, t) {
                let {
                    default: u
                } = await n.el("572544").then(n.bind(n, "572544")), a = u(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != a) a(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function a(e) {
                return !1
            }

            function l() {
                return !1
            }

            function o() {
                return !1
            }

            function i(e) {
                let {} = e;
                return !1
            }

            function c(e, t) {
                return !1
            }

            function s() {
                return !1
            }

            function d(e) {}

            function f(e) {}

            function p(e) {}

            function h(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return u
                },
                navigateToRootTab: function() {
                    return a
                },
                resetToAuthRoute: function() {
                    return l
                },
                resetToPanelsUI: function() {
                    return o
                },
                pushModal: function() {
                    return i
                },
                popModal: function() {
                    return c
                },
                popAllModals: function() {
                    return s
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceGuildsRoute: function() {
                    return f
                },
                coerceModalRoute: function() {
                    return p
                },
                useIsModalOpen: function() {
                    return h
                }
            })
        },
        784736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("446674"),
                u = n("913144");
            let a = {};
            class l extends r.default.Store {
                getEULA(e) {
                    return a[e]
                }
            }
            l.displayName = "EULAStore";
            var o = new l(u.default, {
                EULA_FETCH_SUCCESS: function(e) {
                    let {
                        eula: t
                    } = e;
                    a[t.id] = t
                }
            })
        },
        895530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("414456"),
                a = n.n(u),
                l = n("813986");

            function o(e) {
                let {
                    children: t,
                    tag: n,
                    className: u
                } = e;
                return n = null != n ? n : "h3", (0, r.jsx)(n, {
                    className: a(l.title, u),
                    children: t
                })
            }
        },
        9074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var r, u = n("37983"),
                a = n("884691"),
                l = n("414456"),
                o = n.n(l),
                i = n("132710"),
                c = n.n(i),
                s = n("269936"),
                d = n("647374"),
                f = n("47677"),
                p = n("895530"),
                h = n("238165"),
                g = n("862839");
            let m = new RegExp("https?://".concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""));

            function v(e) {
                return "string" == typeof e.content ? e.content : R(e.content)
            }
            let y = {
                    ...c.defaultRules,
                    heading: {
                        ...c.defaultRules.heading,
                        react(e, t, n) {
                            let r = "h".concat(e.level);
                            return (0, u.jsx)(p.default, {
                                tag: r,
                                children: t(e.content, n)
                            }, n.key)
                        }
                    },
                    paragraph: {
                        ...c.defaultRules.paragraph,
                        react: (e, t, n) => (0, u.jsx)("div", {
                            className: h.paragraph,
                            children: t(e.content, n)
                        }, n.key)
                    },
                    strong: {
                        ...c.defaultRules.strong,
                        order: 6
                    },
                    em: {
                        ...c.defaultRules.em,
                        order: 6
                    },
                    u: {
                        ...c.defaultRules.u,
                        order: 5
                    },
                    del: {
                        ...c.defaultRules.del,
                        order: 6
                    },
                    link: {
                        ...d.default,
                        ...(0, f.default)({
                            enableBuildOverrides: !1
                        }),
                        order: 6
                    },
                    blockQuote: {
                        ...c.defaultRules.blockQuote,
                        react: (e, t, n) => (0, u.jsx)("blockquote", {
                            className: h.blockquote,
                            children: v(e)
                        }, n.key)
                    },
                    image: {
                        ...c.defaultRules.image,
                        order: 6,
                        match(e, t, n) {
                            let r = c.defaultRules.image;
                            if (null == r || null == r.match) return !1;
                            let u = r.match(e, t, n);
                            if (null != u && Array.isArray(u) && u.length >= 3) {
                                let e = u[2];
                                if ("string" == typeof e) return null != e.match(m) ? u : null
                            }
                            return !1
                        }
                    },
                    inlineCode: {
                        ...c.defaultRules.inlineCode,
                        order: 6,
                        react: (e, t, n) => (0, u.jsx)("code", {
                            className: h.codeInline,
                            children: v(e)
                        }, n.key)
                    },
                    codeBlock: {
                        ...c.defaultRules.codeBlock,
                        react(e, t, r) {
                            let a = () => (0, u.jsx)("pre", {
                                children: (0, u.jsx)("code", {
                                    className: o(g.scrollbarGhostHairline, "hljs"),
                                    children: v(e)
                                })
                            }, r.key);
                            return (0, u.jsx)(s.LazyLibrary, {
                                createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                                webpackId: "86256",
                                renderFallback: a,
                                render: t => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n ? a() : (0, u.jsx)("pre", {
                                            children: (0, u.jsx)("code", {
                                                className: o(g.scrollbarGhostHairline, "hljs", n.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: n.value
                                                }
                                            })
                                        }, r.key)
                                    }
                                }
                            }, r.key)
                        }
                    }
                },
                E = c.parserFor(y),
                R = c.reactFor(c.ruleOutput(y, "react"));
            class k extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        children: t,
                        state: n,
                        parser: r,
                        output: a
                    } = this.props, l = r("".concat(t, "\n\n"), {
                        inline: !1,
                        ...n
                    }), i = a(l);
                    return (0, u.jsx)("div", {
                        className: o(h.markdown, e),
                        children: i
                    })
                }
            }
            k.rules = y, k.defaultProps = {
                parser: E,
                output: R
            };
            var b = k
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return l
                },
                copy: function() {
                    return o
                }
            }), n("70102");
            var r = n("281071"),
                u = n("773336"),
                a = n("50885");
            let l = (() => {
                if (u.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!l && (u.isPlatformEmbedded ? (a.default.copy(e), !0) : r.copy(e))
            }
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("872717"),
                u = n("599110");

            function a(e, t, n) {
                let {
                    trackedActionData: r,
                    ...a
                } = t, l = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, u.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let o = r.properties;
                        "function" == typeof r.properties && (o = r.properties(e)), (0, u.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...l,
                            ...o
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return a(r.default.get, e, "get")
                },
                post: function(e) {
                    return a(r.default.post, e, "post")
                },
                put: function(e) {
                    return a(r.default.put, e, "put")
                },
                patch: function(e) {
                    return a(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.default.delete, e, "del")
                }
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    u = document.createElement("textarea");
                u.value = e, u.contentEditable = "true", u.style.visibility = "none", t.appendChild(u), n.selectNodeContents(u), null == r || r.removeAllRanges(), null == r || r.addRange(n), u.focus(), u.setSelectionRange(0, e.length);
                let a = document.execCommand("copy");
                return t.removeChild(u), a
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            }), n("70102")
        }
    }
]);