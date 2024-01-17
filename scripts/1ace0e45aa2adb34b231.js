(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["39620"], {
        136759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                persist: function() {
                    return u
                }
            }), n("222007");
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var r = Object.defineProperty,
                i = Object.getOwnPropertySymbols,
                a = Object.prototype.hasOwnProperty,
                l = Object.prototype.propertyIsEnumerable,
                s = (e, t, n) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : e[t] = n,
                o = (e, t) => {
                    for (var n in t || (t = {})) a.call(t, n) && s(e, n, t[n]);
                    if (i)
                        for (var n of i(t)) l.call(t, n) && s(e, n, t[n]);
                    return e
                };
            let c = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => c(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => c(t)(e)
                        }
                    }
                },
                u = (e, t) => (n, r, i) => {
                    let a, l, s = o({
                        getStorage: () => localStorage,
                        serialize: JSON.stringify,
                        deserialize: JSON.parse,
                        partialize: e => e,
                        version: 0,
                        merge: (e, t) => o(o({}, t), e)
                    }, t);
                    (s.blacklist || s.whitelist) && console.warn("The ".concat(s.blacklist ? "blacklist" : "whitelist", " option is deprecated and will be removed in the next version. Please use the 'partialize' option instead."));
                    let u = !1,
                        d = new Set,
                        f = new Set;
                    try {
                        a = s.getStorage()
                    } catch (e) {}
                    if (!a) return e(function() {
                        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        console.warn("[zustand persist middleware] Unable to update item '".concat(s.name, "', the given storage is currently unavailable.")), n(...t)
                    }, r, i);
                    !a.removeItem && console.warn("[zustand persist middleware] The given storage for item '".concat(s.name, "' does not contain a 'removeItem' method, which will be required in v4."));
                    let h = c(s.serialize),
                        v = () => {
                            let e;
                            let t = s.partialize(o({}, r()));
                            s.whitelist && Object.keys(t).forEach(e => {
                                var n;
                                (null == (n = s.whitelist) ? void 0 : n.includes(e)) || delete t[e]
                            }), s.blacklist && s.blacklist.forEach(e => delete t[e]);
                            let n = h({
                                state: t,
                                version: s.version
                            }).then(e => a.setItem(s.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return n
                        },
                        p = i.setState;
                    i.setState = (e, t) => {
                        p(e, t), v()
                    };
                    let m = e(function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            n(...t), v()
                        }, r, i),
                        g = () => {
                            var e;
                            if (!a) return;
                            u = !1, d.forEach(e => e(r()));
                            let t = (null == (e = s.onRehydrateStorage) ? void 0 : e.call(s, r())) || void 0;
                            return c(a.getItem.bind(a))(s.name).then(e => {
                                if (e) return s.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === s.version) return e.state;
                                    if (s.migrate) return s.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(l = s.merge(e, null != (t = r()) ? t : m), !0), v()
                            }).then(() => {
                                null == t || t(l, void 0), u = !0, f.forEach(e => e(l))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            s = o(o({}, s), e), e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            var e;
                            null == (e = null == a ? void 0 : a.removeItem) || e.call(a, s.name)
                        },
                        rehydrate: () => g(),
                        hasHydrated: () => u,
                        onHydrate: e => (d.add(e), () => {
                            d.delete(e)
                        }),
                        onFinishHydration: e => (f.add(e), () => {
                            f.delete(e)
                        })
                    }, g(), l || m
                }
        },
        328269: function(e, t, n) {
            "use strict";
            e.exports = n.p + "746284e4cfc7cd6c5e15.svg"
        },
        958787: function(e, t, n) {
            "use strict";
            e.exports = n.p + "80b04934274a1d198741.svg"
        },
        96386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("691870"),
                s = e => {
                    let {
                        message: t,
                        className: n,
                        noResultsImageURL: i,
                        forceLightTheme: s,
                        suggestions: o
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a({
                            [l.forceLightTheme]: s
                        }, n),
                        children: (0, r.jsxs)("div", {
                            className: l.wrapper,
                            children: [(0, r.jsx)("div", {
                                className: l.sadImage,
                                style: null != i ? {
                                    backgroundImage: "url(".concat(i, ")")
                                } : {}
                            }), (0, r.jsx)("div", {
                                children: t
                            }), o]
                        })
                    })
                }
        },
        737960: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("308723");

            function l(e) {
                return i.forwardRef(function(t, n) {
                    let l = i.useRef();
                    return i.useImperativeHandle(n, () => ({
                        triggerResize: () => {
                            var e;
                            null === (e = l.current) || void 0 === e || e.onResize()
                        }
                    })), (0, r.jsx)(a.default, {
                        ref: l,
                        children: n => {
                            let {
                                width: i,
                                height: a
                            } = n;
                            return (0, r.jsx)(e, {
                                ...t,
                                width: i,
                                height: a
                            })
                        }
                    })
                })
            }
        },
        308472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm16-9.59V13a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h3.59l-5.09 5.09-1.8-1.8a1 1 0 0 0-1.4 0l-4 4a1 1 0 1 0 1.4 1.42L9 13.4l1.8 1.8a1 1 0 0 0 1.4 0L18 9.4Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        891722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ArrowSmallLeftIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M3.3 11.3a1 1 0 0 0 0 1.4l5 5a1 1 0 0 0 1.4-1.4L6.42 13H20a1 1 0 1 0 0-2H6.41l3.3-3.3a1 1 0 0 0-1.42-1.4l-5 5Z",
                        className: s
                    })
                })
            }
        },
        538282: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openExpressionPicker: function() {
                    return u
                },
                closeExpressionPicker: function() {
                    return d
                },
                toggleMultiExpressionPicker: function() {
                    return f
                },
                toggleExpressionPicker: function() {
                    return h
                },
                setExpressionPickerView: function() {
                    return v
                },
                setSearchQuery: function() {
                    return p
                },
                useExpressionPickerStore: function() {
                    return m
                }
            });
            var r = n("995008"),
                i = n.n(r),
                a = n("308503"),
                l = n("136759"),
                s = n("13030");
            let o = Object.freeze({
                    activeView: null,
                    lastActiveView: null,
                    activeViewType: null,
                    searchQuery: "",
                    isSearchSuggestion: !1,
                    pickerId: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                        return i(e)
                    }()
                }),
                c = (0, a.default)((0, l.persist)((e, t) => o, {
                    name: "expression-picker-last-active-view",
                    partialize: e => ({
                        lastActiveView: e.lastActiveView
                    })
                })),
                u = (e, t) => {
                    c.setState({
                        activeView: e,
                        activeViewType: t,
                        lastActiveView: c.getState().activeView
                    })
                },
                d = e => {
                    let t = c.getState();
                    if (void 0 === e || e === t.activeViewType) null !== t.activeView && c.setState({
                        activeView: null,
                        activeViewType: null,
                        lastActiveView: t.activeView
                    })
                },
                f = e => {
                    let t = c.getState();
                    if (null == t.activeView) {
                        var n;
                        u(null !== (n = t.lastActiveView) && void 0 !== n ? n : s.ExpressionPickerViewType.EMOJI, e)
                    } else d()
                },
                h = (e, t) => {
                    c.getState().activeView === e ? d() : u(e, t)
                },
                v = e => {
                    c.setState({
                        activeView: e,
                        lastActiveView: c.getState().activeView
                    })
                },
                p = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    c.setState({
                        searchQuery: e,
                        isSearchSuggestion: t
                    })
                },
                m = c
        },
        646077: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("77078"),
                o = n("812204"),
                c = n("685665"),
                u = n("873622"),
                d = n("476765"),
                f = n("599110"),
                h = n("652914"),
                v = n("254398"),
                p = n("49111"),
                m = n("782340"),
                g = n("369522");

            function w(e) {
                let {
                    transitionState: t,
                    onClose: a,
                    onComplete: w,
                    uploadType: y,
                    showUpsellHeader: S,
                    analyticsPage: x
                } = e, [A, E] = i.useState(!1), b = (0, s.useModalContext)(), L = (0, d.useUID)(), {
                    AnalyticsLocationProvider: R
                } = (0, c.default)(o.default.GIF_PICKER);
                async function I(e) {
                    let {
                        gifSrc: t
                    } = e;
                    if (null == t || A) return;
                    E(!0);
                    let i = (0, v.makeTenorProxyURL)(t),
                        l = await fetch(i),
                        o = await l.blob();
                    a(), (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("57015").then(n.bind(n, "57015"));
                        return t => (0, r.jsx)(e, {
                            imgURI: i,
                            file: new File([o], "tenor.gif", {
                                type: "image/gif"
                            }),
                            onCrop: w,
                            uploadType: y,
                            showUpsellHeader: S,
                            ...t
                        })
                    }, {
                        contextKey: b
                    })
                }
                return i.useEffect(() => {
                    f.default.track(p.AnalyticEvents.OPEN_MODAL, {
                        type: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                        location: {
                            page: x
                        }
                    })
                }, [x]), (0, r.jsx)(R, {
                    children: (0, r.jsxs)(s.ModalRoot, {
                        className: g.gifPickerCroppingModal,
                        "aria-labelledby": L,
                        transitionState: t,
                        size: s.ModalSize.SMALL,
                        children: [S ? (0, r.jsx)(h.default, {
                            type: y,
                            analyticsPage: x,
                            analyticsSection: p.AnalyticsSections.GIF_PICKER_AVATAR_OR_BANNER_MODAL,
                            isGIF: !0
                        }) : null, (0, r.jsxs)(s.ModalHeader, {
                            className: g.modalHeader,
                            separator: !1,
                            children: [(0, r.jsx)(s.FormTitle, {
                                className: g.titleCase,
                                tag: s.FormTitleTags.H1,
                                children: m.default.Messages.SELECT_IMAGE_MODAL_CHOOSE_GIF
                            }), (0, r.jsx)(s.ModalCloseButton, {
                                onClick: a,
                                className: g.modalCloseButton
                            })]
                        }), (0, r.jsxs)("div", {
                            children: [(0, r.jsx)(u.default, {
                                className: l(g.gifPicker, {
                                    [g.loadingOverlay]: A
                                }),
                                onSelectGIF: I,
                                hideFavorites: !0
                            }), A && (0, r.jsx)(s.Spinner, {
                                className: g.spinner
                            })]
                        })]
                    })
                })
            }
        },
        254398: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeTenorProxyURL: function() {
                    return a
                }
            }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("70102");
            var r = n("49111");
            let i = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function a(e) {
                let t = new URL("".concat(window.location.protocol).concat(e)),
                    {
                        ASSET_ENDPOINT: n
                    } = window.GLOBAL_ENV;
                if (null == t.pathname.match(i)) throw Error("Unexpected Tenor GIF path.");
                let a = "".concat(r.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(n).concat(a)
            }
        },
        519841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AttachmentLinkRefreshExperiment: function() {
                    return i
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-12_attachment_link_refresh",
                label: "Attachment Link Refresh User Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Refresh expired attachment links",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        787336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isAttachmentUrl: function() {
                    return d
                },
                removeSignedUrlParameters: function() {
                    return f
                },
                messageHasExpiredAttachmentUrl: function() {
                    return g
                },
                maybeRefreshAttachmentUrl: function() {
                    return y
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var r, i = n("872717"),
                a = n("718517"),
                l = n("519841"),
                s = n("49111");
            let o = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)]),
                c = new Set(["/attachments/", "/ephemeral-attachments/"]),
                u = 1 * a.default.Millis.HOUR;

            function d(e) {
                return o.has(e.hostname) && Array.from(c).some(t => e.pathname.startsWith(t))
            }

            function f(e) {
                for (let t of (e = new URL(e), ["ex", "is", "hm"])) e.searchParams.delete(t);
                return e
            }

            function h(e) {
                let t = function(e) {
                    let t = e.searchParams.get("ex"),
                        n = parseInt(null != t ? t : "", 16);
                    return isNaN(n) ? void 0 : n * a.default.Millis.SECOND
                }(e);
                return null == t || t <= Date.now() + u
            }

            function v(e) {
                let t = new URL(e.url);
                return h(t)
            }

            function p(e) {
                if (null == e) return !1;
                let t = new URL(e.url);
                return !!d(t) && h(t)
            }

            function m(e) {
                var t;
                return p(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(p)) || p(e.video)
            }

            function g(e) {
                return e.attachments.some(v) || e.embeds.some(m)
            }
            async function w(e) {
                let t = await i.default.post({
                    url: s.Endpoints.ATTACHMENTS_REFRESH_URLS,
                    body: {
                        attachment_urls: [e]
                    }
                });
                return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
            }
            async function y(e) {
                if (!l.AttachmentLinkRefreshExperiment.getCurrentConfig({
                        location: "link_clicked"
                    }).enabled) return e;
                let t = new URL(e);
                if (!h(t)) return e;
                let n = await w(e);
                return null != n ? n : e
            }
        },
        42507: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useFrecencySettings: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("446674"),
                a = n("872173"),
                l = n("374363");

            function s() {
                return r.useEffect(() => {
                    a.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, i.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }
        },
        531470: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("891722"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M20 10.9378H14.2199H8.06628L10.502 8.50202L9 7L4 12L9 17L10.502 15.498L8.06628 13.0622H20V10.9378Z"
                        })
                    })
                }, a.ArrowSmallLeftIcon, void 0, {
                    size: 24
                })
        },
        240292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("308472"),
                l = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            transform: "translate(2 6)",
                            children: (0, r.jsx)("path", {
                                className: a,
                                fill: i,
                                d: "M14 0l2.29 2.29-4.88 4.88-4-4L0 10.59 1.41 12l6-6 4 4 6.3-6.29L20 6V0z"
                            })
                        })
                    })
                }, a.AnalyticsIcon, void 0, {
                    size: 24
                })
        }
    }
]);