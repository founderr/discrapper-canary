"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2139], {
        802139: (e, r, t) => {
            t.d(r, {
                BC: () => Z,
                ZP: () => Y
            });
            var n = t(785893),
                i = t(667294),
                l = t(294184),
                a = t.n(l),
                o = t(608575),
                s = t(882723),
                u = t(930948),
                d = t(70145),
                c = t(473291),
                h = t(347117),
                m = t(716997),
                p = t(786170),
                f = t(2590),
                b = t(473708);

            function y(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function g(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function v(e, r) {
                if (null == e) return {};
                var t, n, i = function(e, r) {
                    if (null == e) return {};
                    var t, n, i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || (i[t] = e[t])
                    }
                    return i
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        t = l[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                    }
                }
                return i
            }

            function x(e) {
                var r = e.poster,
                    t = e.src,
                    l = e.width,
                    a = e.height,
                    o = e.naturalWidth,
                    s = e.naturalHeight,
                    u = e.play,
                    d = void 0 === u || u,
                    c = e.className,
                    h = e.alt,
                    m = e.responsive,
                    b = i.useRef(null);
                i.useEffect((function() {
                    var e = b.current;
                    null != e && (d ? e.play() : e.pause())
                }), [d]);
                return o <= f.N_j && s <= f.XKF || o <= f.XKF && s <= f.N_j ? (0, n.jsx)(p.Z, {
                    ref: b,
                    className: c,
                    poster: r,
                    src: t,
                    width: l,
                    height: a,
                    responsive: m,
                    muted: !0,
                    loop: !0,
                    autoPlay: d,
                    preload: "none",
                    "aria-label": h
                }) : (0, n.jsx)("img", {
                    alt: "",
                    src: r,
                    width: l,
                    height: a
                })
            }

            function w(e) {
                var r = e.src,
                    t = e.poster,
                    i = e.naturalWidth,
                    l = e.naturalHeight,
                    a = e.responsive,
                    o = e.autoPlay,
                    s = e.className,
                    u = e.playable,
                    d = void 0 === u || u,
                    c = e.renderImageComponent,
                    h = e.alt,
                    p = void 0 === h ? b.Z.Messages.GIF : h,
                    f = v(e, ["src", "poster", "naturalWidth", "naturalHeight", "responsive", "autoPlay", "className", "playable", "renderImageComponent", "alt"]);
                return (0, n.jsx)(m.h.Consumer, y({}, "children", (function(e) {
                    return c(g(function(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = null != arguments[r] ? arguments[r] : {},
                                n = Object.keys(t);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))));
                            n.forEach((function(r) {
                                y(e, r, t[r])
                            }))
                        }
                        return e
                    }({}, f), y({
                        alt: p,
                        src: t,
                        containerClassName: s,
                        autoPlay: o,
                        animated: d,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: d ? 0 : -1
                    }, "children", (function(e) {
                        var t = e.src,
                            o = e.size,
                            u = e.animating,
                            c = e.alt;
                        return (0, n.jsx)(x, {
                            alt: c,
                            className: s,
                            poster: t,
                            src: r,
                            width: o.width,
                            height: o.height,
                            naturalWidth: i,
                            naturalHeight: l,
                            responsive: a,
                            play: d && u
                        })
                    }))))
                })))
            }
            var j = t(159689),
                O = t(507488),
                I = t(220496),
                P = t(330484),
                S = t(155349),
                C = t(248691),
                N = t(581373),
                E = t(966334),
                M = t(710978),
                A = t.n(M),
                k = t(913198),
                H = t.n(k);

            function _(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function D(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function L(e) {
                L = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return L(e)
            }

            function V(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        T(e, r, t[r])
                    }))
                }
                return e
            }

            function W(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function R(e, r) {
                return !r || "object" !== G(r) && "function" != typeof r ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : r
            }

            function B(e, r) {
                B = Object.setPrototypeOf || function(e, r) {
                    e.__proto__ = r;
                    return e
                };
                return B(e, r)
            }

            function F(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (n = t.next()).done); a = !0) {
                                l.push(n.value);
                                if (r && l.length === r) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return _(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var G = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function U(e) {
                var r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})));
                        return !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, n = L(e);
                    if (r) {
                        var i = L(this).constructor;
                        t = Reflect.construct(n, arguments, i)
                    } else t = n.apply(this, arguments);
                    return R(this, t)
                }
            }

            function Z(e) {
                var r = e.className,
                    t = e.iframeWrapperClassName,
                    l = e.maxWidth,
                    s = e.maxHeight,
                    d = e.thumbnail,
                    c = e.video,
                    m = e.allowFullScreen,
                    p = void 0 === m || m,
                    b = e.responsive,
                    y = void 0 !== b && b,
                    g = e.renderImageComponent,
                    v = e.renderVideoComponent,
                    x = e.renderLinkComponent,
                    w = e.playable,
                    j = void 0 === w || w,
                    O = e.autoPlay,
                    P = void 0 !== O && O,
                    S = e.autoMute,
                    N = e.volume,
                    E = e.onPlay,
                    M = e.onEnded,
                    k = e.onVolumeChange,
                    H = e.onMute,
                    _ = e.href,
                    D = e.messageId,
                    T = e.channelId,
                    L = F(i.useState(P), 2),
                    R = L[0],
                    B = L[1],
                    G = null != c && null == c.proxyURL,
                    U = i.useCallback((function() {
                        return B(!1)
                    }), [B]),
                    Z = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        null == E || E(!1);
                        B(!0);
                        if (G) {
                            u.S.dispatch(f.CkL.VIDEO_EMBED_PLAYBACK_STARTED);
                            u.S.subscribeOnce(f.CkL.VIDEO_EMBED_PLAYBACK_STARTED, U)
                        }
                    };
                i.useEffect((function() {
                    return function() {
                        G && u.S.unsubscribe(f.CkL.VIDEO_EMBED_PLAYBACK_STARTED, U)
                    }
                }), [G, U]);
                var q = d.width,
                    K = d.height;
                if (null != c) {
                    q = c.width;
                    K = c.height
                }
                var Y = (0, h.Tj)({
                    width: q,
                    height: K,
                    maxWidth: l,
                    maxHeight: s
                });
                q = Math.max(Y.width, 150);
                K = Math.max(Y.height, 144);
                var z = (0, C.q)(d);
                if (null != c && null != c.proxyURL) return (0, n.jsx)("div", {
                    className: a()(A().embedVideo, r),
                    children: v({
                        poster: z,
                        src: c.proxyURL,
                        width: q,
                        height: K,
                        responsive: y,
                        autoPlay: P,
                        onEnded: M,
                        naturalWidth: c.width,
                        naturalHeight: c.height,
                        onVolumeChange: k,
                        playable: j,
                        autoMute: S,
                        volume: N,
                        onPlay: E,
                        onMute: H
                    })
                });
                if (R && null != c) {
                    var J = o.parse(c.url, !0);
                    J.query = W(V({}, J.query), {
                        autoplay: "1",
                        auto_play: "1"
                    });
                    (!0 === S || "function" == typeof S && S()) && (J.query.mute = "1");
                    J.search = null;
                    var X, $ = o.format(J),
                        Q = {
                            width: q,
                            height: K
                        },
                        ee = {
                            width: q,
                            height: K
                        };
                    if (y) {
                        Q = {
                            maxWidth: l,
                            maxHeight: s,
                            width: void 0,
                            height: void 0
                        };
                        ee = {
                            paddingBottom: "".concat(100 * (0 !== q ? K / q : 1), "%"),
                            maxWidth: q
                        };
                        X = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            maxWidth: q,
                            maxHeight: K
                        }
                    }
                    return (0, n.jsx)("div", {
                        className: r,
                        style: Q,
                        children: (0, n.jsx)("div", {
                            className: a()(A().embedVideo, t),
                            style: ee,
                            children: (0, n.jsx)("iframe", {
                                className: A().embedIframe,
                                src: $,
                                style: X,
                                width: q,
                                height: K,
                                frameBorder: 0,
                                scrolling: "no",
                                allowFullScreen: p,
                                sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                            })
                        })
                    })
                }
                return (0, n.jsxs)("div", {
                    className: a()(A().embedVideo, r),
                    style: y ? {
                        maxWidth: q
                    } : {
                        width: q,
                        height: K
                    },
                    children: [g({
                        src: z,
                        width: q,
                        height: K,
                        maxWidth: q,
                        maxHeight: K,
                        responsive: y,
                        containerClassName: A().embedVideoImageComponent,
                        imageClassName: A().embedVideoImageComponentInner,
                        onClick: j && null != c ? Z : null
                    }), (0, n.jsx)("div", {
                        className: A().embedVideoActions,
                        children: (0, n.jsx)("div", {
                            className: A().centerContent,
                            children: j ? (0, n.jsx)(I.Z, {
                                onPlay: null != c ? Z : null,
                                externalURL: _,
                                renderLinkComponent: x,
                                messageId: D,
                                channelId: T
                            }) : null
                        })
                    })]
                })
            }

            function q(e) {
                var r = e.className,
                    t = e.href,
                    i = e.autoPlay,
                    l = e.maxWidth,
                    o = e.maxHeight,
                    s = e.thumbnail,
                    u = e.video,
                    d = e.renderImageComponent,
                    c = e.responsive,
                    h = e.alt,
                    m = e.playable,
                    p = void 0 === m || m,
                    f = e.hiddenSpoilers;
                return (0, n.jsx)(w, {
                    className: a()(A().embedVideo, r),
                    original: t,
                    poster: (0, C.q)(s),
                    src: (0, C.q)(u),
                    alt: h,
                    width: s.width,
                    height: s.height,
                    naturalHeight: u.height,
                    naturalWidth: u.width,
                    maxWidth: l,
                    maxHeight: o,
                    responsive: c,
                    autoPlay: i,
                    playable: p,
                    renderImageComponent: d,
                    hiddenSpoilers: f
                })
            }

            function K(e) {
                var r = e.className,
                    t = e.embed.url;
                if (null == t) return null;
                var i = null,
                    l = null;
                try {
                    var s = o.parse(t, !0);
                    i = s.host;
                    l = s.pathname
                } catch (e) {
                    return null
                }
                if ("open.spotify.com" !== i || null == l) return null;
                var u = l.split("/"),
                    d = null != u[1] ? u[1].toLowerCase() : null,
                    c = null != u[3] ? u[3].toLowerCase() : null,
                    h = u[4];
                if (!["track", "playlist", "album", "artist", "user", "show", "episode"].includes(null != d ? d : "") || "user" === d && "playlist" !== c) return null;
                "user" === d && "playlist" === c && null != h && (l = "/playlist/".concat(h));
                var m = 352;
                "track" === d ? m = 80 : "episode" !== d && "show" !== d || (m = 232);
                return (0, n.jsx)("iframe", {
                    className: a()(A().embedSpotify, r),
                    src: E.C7.EMBED(l),
                    style: {
                        width: 400,
                        height: m
                    },
                    frameBorder: 0,
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                })
            }
            var Y = function(e) {
                ! function(e, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    r && B(e, r)
                }(t, e);
                var r = U(t);

                function t() {
                    D(this, t);
                    var e;
                    (e = r.apply(this, arguments)).state = {
                        isVisible: !e.props.spoiler
                    };
                    e.onReveal = function() {
                        e.setState({
                            isVisible: !0
                        })
                    };
                    e.renderInlineMediaEmbed = function() {
                        var r, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            i = e.props,
                            l = i.spoiler,
                            o = i.className;
                        return (0, n.jsx)("div", {
                            "aria-hidden": t,
                            className: a()(A().inlineMediaEmbed, o, (r = {}, T(r, A().spoilerAttachment, l), T(r, A().hiddenSpoiler, t), T(r, A().justifyAuto, e.usesJustifiedAutoStyle()), r)),
                            children: e.renderMedia(t)
                        })
                    };
                    e.renderEmbedContent = function() {
                        var r, t, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            l = e.props,
                            o = l.className,
                            s = l.onSuppressEmbed,
                            u = l.spoiler,
                            d = e.renderAll(),
                            c = d.provider,
                            h = d.author,
                            m = d.title,
                            p = d.description,
                            f = d.fields,
                            b = d.thumbnail,
                            y = d.media,
                            g = d.footer;
                        return (0, n.jsx)("article", {
                            className: a()(o, A().embedFull, H().markup, (r = {}, T(r, A().hiddenSpoiler, i), T(r, A().spoilerEmbed, u), T(r, A().justifyAuto, e.usesJustifiedAutoStyle()), r)),
                            "aria-hidden": i,
                            style: {
                                borderColor: e.getEmbedColor(i),
                                maxWidth: e.getMaxWidth()
                            },
                            children: (0, n.jsx)("div", {
                                className: A().gridContainer,
                                children: (0, n.jsxs)("div", {
                                    className: a()((t = {}, T(t, A().grid, !0), T(t, A().hasThumbnail, null != b), t)),
                                    children: [null != s ? e.renderSuppressButton(s) : null, c, h, m, p, f, y, b, g]
                                })
                            })
                        })
                    };
                    return e
                }
                var i = t.prototype;
                i.renderProvider = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        r = this.props,
                        t = r.embed.provider,
                        i = r.renderLinkComponent,
                        l = r.messageId,
                        o = r.channelId;
                    return null == t ? null : (0, n.jsx)("div", {
                        className: a()(A().embedProvider, A().embedMargin),
                        children: null != t.url ? i({
                            className: A().embedLink,
                            href: t.url,
                            tabIndex: e ? 0 : -1,
                            children: t.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: l,
                            channelId: o
                        }) : (0, n.jsx)("span", {
                            children: t.name
                        })
                    })
                };
                i.renderAuthor = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        r = this.props,
                        t = r.embed.author,
                        i = r.renderLinkComponent,
                        l = r.messageId,
                        o = r.channelId;
                    return null == t ? null : (0, n.jsxs)("div", {
                        className: a()(A().embedAuthor, A().embedMargin),
                        children: [null != t.iconProxyURL ? (0, n.jsx)("img", {
                            alt: "",
                            className: A().embedAuthorIcon,
                            src: t.iconProxyURL
                        }) : null, null != t.url ? i({
                            className: A().embedAuthorNameLink,
                            href: t.url,
                            tabIndex: e ? 0 : -1,
                            children: t.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: l,
                            channelId: o
                        }) : (0, n.jsx)("span", {
                            className: A().embedAuthorName,
                            children: t.name
                        })]
                    })
                };
                i.renderTitle = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        r = this.props,
                        t = r.embed,
                        i = r.renderLinkComponent,
                        l = r.renderTitle,
                        o = r.messageId,
                        s = r.channelId,
                        u = t.rawTitle,
                        d = t.url;
                    return null == u ? null : (0, n.jsx)("div", {
                        className: a()(A().embedTitle, A().embedMargin),
                        children: null != d ? i({
                            className: A().embedTitleLink,
                            href: d,
                            tabIndex: e ? 0 : -1,
                            children: l(t, u),
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: o,
                            channelId: s
                        }) : l(t, u)
                    })
                };
                i.renderDescription = function() {
                    var e = this.props,
                        r = e.embed,
                        t = e.renderDescription,
                        i = r.rawDescription;
                    return null == i ? null : (0, n.jsx)("div", {
                        className: a()(A().embedDescription, A().embedMargin),
                        children: t(r, i, !1)
                    })
                };
                i.renderThumbnail = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        r = this.props,
                        t = r.embed.thumbnail,
                        i = r.maxThumbnailWidth,
                        l = r.maxThumbnailHeight,
                        a = r.renderImageComponent,
                        o = r.autoPlayGif;
                    return null == t ? null : (0, n.jsx)(P.G.Consumer, {
                        children: function(r) {
                            var n = r.disableAnimations;
                            return a({
                                containerClassName: A().embedThumbnail,
                                src: (0,
                                    C.q)(t),
                                original: t.url,
                                width: t.width,
                                height: t.height,
                                maxWidth: i,
                                maxHeight: l,
                                shouldLink: e,
                                autoPlay: o && !n
                            })
                        }
                    })
                };
                i.renderFields = function() {
                    var e = this,
                        r = this.props.embed,
                        t = r.fields;
                    if (null == t || 0 === t.length) return null;
                    var i = [],
                        l = null;
                    t.forEach((function(t) {
                        var n = t.rawName,
                            a = t.rawValue,
                            o = t.inline;
                        if (!o && null != l) {
                            i.push(l);
                            l = null
                        }
                        null == l && (l = []);
                        l.push([e.props.renderTitle(r, n), e.props.renderDescription(r, a, !0)]);
                        if (3 === l.length || !o) {
                            i.push(l);
                            l = null
                        }
                    }));
                    null != l && i.push(l);
                    return (0, n.jsx)("div", {
                        className: A().embedFields,
                        children: i.map((function(e, r) {
                            var t = e.length;
                            return e.map((function(e, i) {
                                var l, a, o, s, u = F(e, 2),
                                    d = u[0],
                                    c = u[1];
                                return (0, n.jsxs)("div", {
                                    className: A().embedField,
                                    style: {
                                        gridColumn: (l = i, a = t, o = 12 / a, s = l * o, "".concat(s + 1, " / ").concat(s + o + 1))
                                    },
                                    children: [(0, n.jsx)("div", {
                                        className: A().embedFieldName,
                                        children: d
                                    }), (0, n.jsx)("div", {
                                        className: A().embedFieldValue,
                                        children: c
                                    })]
                                }, "".concat(r, "-").concat(i))
                            }))
                        }))
                    })
                };
                i.renderImages = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.hiddenSpoiler,
                        t = void 0 !== r && r,
                        i = e.isVisible,
                        l = void 0 === i || i,
                        a = this,
                        o = this.props,
                        s = o.embed,
                        u = o.maxMediaHeight;
                    if (null == s.images) return null;
                    var d = F(s.images.map((function(e) {
                            return a.renderImage({
                                hiddenSpoiler: t,
                                isVisible: l,
                                image: e,
                                isGalleryImage: !0,
                                allImages: s.images
                            })
                        })), 4),
                        c = d[0],
                        h = d[1],
                        m = d[2],
                        p = d[3];
                    return null == c && null == h && null == m && null == p ? null : (0, n.jsxs)("div", {
                        className: A().embedGalleryImagesWrapper,
                        style: {
                            height: u
                        },
                        children: [(0, n.jsxs)("div", {
                            className: A().embedGallerySide,
                            children: [c, null != p && m]
                        }), (0, n.jsxs)("div", {
                            className: A().embedGallerySide,
                            children: [h, null == p && null != m && m, null != p && p]
                        })]
                    })
                };
                i.renderImage = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.hiddenSpoiler,
                        t = void 0 !== r && r,
                        i = e.isVisible,
                        l = void 0 === i || i,
                        o = e.image,
                        s = e.isGalleryImage,
                        u = void 0 !== s && s,
                        d = e.alt,
                        c = void 0 === d ? b.Z.Messages.IMAGE : d,
                        h = e.allImages,
                        p = void 0 === h ? null : h,
                        f = this.props,
                        y = f.maxMediaWidth,
                        g = f.maxMediaHeight,
                        v = f.renderImageComponent,
                        x = f.className,
                        w = f.autoPlayGif;
                    if (null == o) return null;
                    var O, I = (0, C.q)(o),
                        S = null == p ? {} : (0, N.Cx)(p.map(N.nP)),
                        E = j.Z.isAnimated({
                            src: (0, C.q)(o),
                            original: o.url,
                            animated: !1
                        }),
                        M = {
                            containerClassName: a()(x, (O = {}, T(O, A().embedMedia, !u), T(O, A().embedImage, !u), T(O, A().galleryImage, u), O)),
                            imageContainerClassName: u ? A().galleryImageContainer : void 0,
                            imageClassName: u ? A().embedGalleryImageElement : void 0,
                            src: (0, C.q)(o),
                            alt: c,
                            responsive: !0,
                            limitResponsiveWidth: !u,
                            width: o.width,
                            height: o.height,
                            maxWidth: y,
                            maxHeight: g,
                            original: o.url,
                            shouldLink: l,
                            disableAltTextDisplay: !0,
                            hiddenSpoilers: t
                        };
                    I in S && (M.onClick = S[I]);
                    return (0, n.jsx)(m.h.Consumer, {
                        children: function(e) {
                            return (0,
                                n.jsx)(P.G.Consumer, {
                                children: function(r) {
                                    var n = r.disableAnimations;
                                    return v(W(V({}, M), {
                                        autoPlay: w && !n && !t,
                                        renderAccessory: E ? e : null
                                    }))
                                }
                            }, o.url)
                        }
                    })
                };
                i.renderVideo = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.gifv,
                        t = void 0 !== r && r,
                        i = e.isVisible,
                        l = void 0 === i || i,
                        a = e.hiddenSpoiler,
                        o = void 0 !== a && a,
                        s = this.props,
                        u = s.embed,
                        d = u.url,
                        c = u.thumbnail,
                        h = u.video,
                        m = s.maxMediaWidth,
                        p = s.maxMediaHeight,
                        f = s.renderVideoComponent,
                        b = s.renderImageComponent,
                        y = s.renderLinkComponent,
                        g = s.allowFullScreen,
                        v = s.autoPlayGif,
                        x = s.messageId,
                        w = s.channelId;
                    return null == d || null == c ? null : t ? null == h ? null : (0, n.jsx)(P.G.Consumer, {
                        children: function(e) {
                            var r = e.disableAnimations;
                            return (0, n.jsx)(q, {
                                className: A().embedMedia,
                                href: d,
                                thumbnail: c,
                                video: h,
                                maxWidth: m,
                                maxHeight: p,
                                responsive: !0,
                                autoPlay: !o && v && !r && l,
                                renderImageComponent: b,
                                playable: l,
                                hiddenSpoilers: o
                            })
                        }
                    }) : (0, n.jsx)(Z, {
                        className: A().embedMedia,
                        href: d,
                        allowFullScreen: g,
                        thumbnail: c,
                        video: h,
                        maxWidth: m,
                        maxHeight: p,
                        responsive: !0,
                        renderImageComponent: b,
                        renderVideoComponent: f,
                        renderLinkComponent: y,
                        playable: l && !o,
                        messageId: x,
                        channelId: w
                    })
                };
                i.renderFooter = function() {
                    var e = this.props.embed,
                        r = e.footer,
                        t = e.timestamp;
                    if (null != r) {
                        var i = null != r.iconProxyURL && "" !== r.iconProxyURL ? r.iconProxyURL : r.iconURL;
                        return (0, n.jsxs)("div", {
                            className: a()(A().embedFooter, A().embedMargin),
                            children: [null != i ? (0, n.jsx)("img", {
                                alt: "",
                                className: A().embedFooterIcon,
                                src: i
                            }) : null, (0, n.jsxs)("span", {
                                className: A().embedFooterText,
                                children: [r.text, null != r.text && null != t ? (0, n.jsx)("span", {
                                    className: A().embedFooterSeparator,
                                    children: "•"
                                }) : null, null != t ? (0, d.Y4)(t) : null]
                            })]
                        })
                    }
                    if (null != t) return (0, n.jsx)("div", {
                        className: a()(A().embedFooter, A().embedMargin),
                        children: (0, n.jsx)("span", {
                            className: A().embedFooterText,
                            children: (0, d.Y4)(t)
                        })
                    })
                };
                i.renderMedia = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        r = this.props.embed,
                        t = this.state.isVisible;
                    switch (r.type) {
                        case f.hBH.GIFV:
                            return this.renderVideo({
                                gifv: !0,
                                hiddenSpoiler: e,
                                isVisible: t
                            });
                        case f.hBH.VIDEO:
                        default:
                            return null != r.video ? this.renderVideo({
                                gifv: !1,
                                hiddenSpoiler: e,
                                isVisible: t
                            }) : null != r.images ? this.renderImages({
                                hiddenSpoiler: e,
                                isVisible: t
                            }) : this.renderImage({
                                hiddenSpoiler: e,
                                isVisible: t,
                                image: r.image,
                                alt: r.rawTitle
                            })
                    }
                };
                i.renderAll = function() {
                    var e, r = this.props,
                        t = r.embed,
                        n = r.hideMedia,
                        i = this.state.isVisible,
                        l = this.renderProvider(i),
                        a = this.renderAuthor(i),
                        o = this.renderTitle(i);
                    switch (t.type) {
                        case f.hBH.IMAGE:
                        case f.hBH.VIDEO:
                        case f.hBH.GIFV:
                            break;
                        default:
                            e = this.renderDescription()
                    }
                    var s, u = this.renderFields();
                    n || (s = this.renderMedia(!i));
                    var d = this.renderFooter(),
                        c = null == s;
                    t.type === f.hBH.RICH && (c = null == t.video);
                    return {
                        provider: l,
                        author: a,
                        title: o,
                        description: e,
                        thumbnail: !n && c ? this.renderThumbnail(i) : null,
                        fields: u,
                        media: s,
                        footer: d
                    }
                };
                i.getMaxWidth = function() {
                    var e = this.props,
                        r = e.maxMediaWidth,
                        t = e.maxMediaHeight,
                        n = e.embed,
                        i = n.image,
                        l = n.images,
                        a = n.video,
                        o = n.type,
                        s = null != i ? i : a;
                    if (null != s) {
                        var u = (0, h.Tj)({
                            width: s.width,
                            height: s.height,
                            maxWidth: r,
                            maxHeight: t
                        }).width;
                        return o === f.hBH.VIDEO || u >= 300 ? u + 32 : o === f.hBH.RICH && void 0 !== l ? 520 : void 0
                    }
                };
                i.isInline = function() {
                    var e = this.props,
                        r = e.hideMedia,
                        t = e.embed;
                    return !r && (0, c.dY)(t)
                };
                i.renderSuppressButton = function(e) {
                    return (0, n.jsx)(s.Clickable, {
                        focusProps: {
                            offset: {
                                bottom: 4
                            }
                        },
                        className: A().embedSuppressButton,
                        onClick: e,
                        "aria-label": b.Z.Messages.SUPPRESS_ALL_EMBEDS,
                        children: (0, n.jsx)(S.Z, {
                            width: 16,
                            height: 16
                        })
                    })
                };
                i.usesJustifiedAutoStyle = function() {
                    var e = this.props.embed;
                    return e.type === f.hBH.IMAGE || e.type === f.hBH.VIDEO || e.type === f.hBH.GIFV || (e.type === f.hBH.RICH || e.type === f.hBH.ARTICLE) && (null != e.video || null != e.image)
                };
                i.getEmbedColor = function(e) {
                    var r = this.props.embed.color;
                    return null != r && "#ffffff" === r.toLowerCase() || e ? void 0 : r
                };
                i.getSpoilerStyles = function(e) {
                    var r = this.props,
                        t = r.maxMediaWidth,
                        n = r.maxMediaHeight,
                        i = r.embed,
                        l = i.image,
                        a = i.images,
                        o = i.video,
                        s = i.type;
                    if (this.usesJustifiedAutoStyle()) {
                        var u = e ? void 0 : this.getMaxWidth();
                        if (void 0 === u && void 0 === a && s !== f.hBH.RICH) {
                            var d = null != l ? l : o;
                            if (void 0 !== d) {
                                u = (0, h.Tj)({
                                    width: d.width,
                                    height: d.height,
                                    maxWidth: t,
                                    maxHeight: n
                                }).width
                            }
                        }
                        return {
                            maxWidth: void 0 === u ? "max-content" : u,
                            justifySelf: "auto"
                        }
                    }
                };
                i.render = function() {
                    var e = this.props,
                        r = e.embed,
                        t = e.spoiler,
                        i = e.className;
                    return null != r.provider && "Spotify" === r.provider.name ? (0, n.jsx)(K, {
                        embed: r,
                        className: i
                    }) : this.isInline() ? t ? (0, n.jsx)(O.Z, {
                        type: O.Z.Types.ATTACHMENT,
                        onReveal: this.onReveal,
                        containerStyles: this.getSpoilerStyles(!0),
                        children: this.renderInlineMediaEmbed
                    }) : this.renderInlineMediaEmbed() : t ? (0, n.jsx)(O.Z, {
                        type: O.Z.Types.EMBED,
                        onReveal: this.onReveal,
                        containerStyles: this.getSpoilerStyles(!1),
                        children: this.renderEmbedContent
                    }) : this.renderEmbedContent()
                };
                return t
            }(i.PureComponent);
            Y.defaultProps = {
                hideMedia: !1,
                allowFullScreen: !0,
                maxThumbnailWidth: 80,
                maxThumbnailHeight: 80,
                maxMediaWidth: 400,
                maxMediaHeight: 300,
                spoiler: !1
            }
        },
        716997: (e, r, t) => {
            t.d(r, {
                h: () => n
            });
            var n = t(667294).createContext((function() {
                return null
            }))
        },
        248691: (e, r, t) => {
            t.d(r, {
                q: () => n
            });

            function n(e) {
                var r = e.proxyURL,
                    t = e.url;
                return null != r && "" !== r ? r : t
            }
        },
        581373: (e, r, t) => {
            t.d(r, {
                j9: () => D,
                Nh: () => H,
                nP: () => k,
                Cx: () => T
            });
            var n = t(785893),
                i = (t(667294), t(809784)),
                l = t(882723),
                a = t(4629),
                o = t(38736),
                s = t(652591),
                u = t(2590);

            function d(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function c(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        d(e, r, t[r])
                    }))
                }
                return e
            }

            function h(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }
            var m = {
                    guildId: void 0,
                    channelId: void 0,
                    channelType: void 0,
                    viewerSwipes: 0,
                    thumbnailSwipes: 0,
                    selectedItemChanges: 0,
                    numMediaItems: 0
                },
                p = (0, o.Z)((function() {
                    return m
                }));

            function f() {
                var e = p.getState();
                s.default.track(u.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
                    guild_id: e.guildId,
                    channel_id: e.channelId,
                    channel_type: e.channelType,
                    number_viewer_swipes: e.viewerSwipes,
                    number_thumbnail_swipes: e.thumbnailSwipes,
                    number_selected_item_changes: e.selectedItemChanges,
                    number_media_items: e.numMediaItems
                });
                p.setState(c({}, m))
            }

            function b() {
                p.setState((function(e) {
                    return {
                        selectedItemChanges: e.selectedItemChanges + 1
                    }
                }))
            }
            var y = t(570738),
                g = t(248691),
                v = t(493254),
                x = t(126466),
                w = t.n(x);

            function j(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }

            function O(e, r, t, n, i, l, a) {
                try {
                    var o = e[l](a),
                        s = o.value
                } catch (e) {
                    t(e);
                    return
                }
                o.done ? r(s) : Promise.resolve(s).then(n, i)
            }

            function I(e) {
                return function() {
                    var r = this,
                        t = arguments;
                    return new Promise((function(n, i) {
                        var l = e.apply(r, t);

                        function a(e) {
                            O(l, n, i, a, o, "next", e)
                        }

                        function o(e) {
                            O(l, n, i, a, o, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function P(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function S() {
                S = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                };
                return S.apply(this, arguments)
            }

            function C(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))));
                    n.forEach((function(r) {
                        P(e, r, t[r])
                    }))
                }
                return e
            }

            function N(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function E(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (t = t.call(e); !(a = (n = t.next()).done); a = !0) {
                                l.push(n.value);
                                if (r && l.length === r) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, r) || function(e, r) {
                    if (!e) return;
                    if ("string" == typeof e) return j(e, r);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === t && e.constructor && (t = e.constructor.name);
                    if ("Map" === t || "Set" === t) return Array.from(t);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return j(e, r)
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var M = function(e, r) {
                var t, n, i, l, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return l = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                    return this
                }), l;

                function o(l) {
                    return function(o) {
                        return function(l) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (t = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
                                (n = 0, i) && (l = [2 & l[0], i.value]);
                                switch (l[0]) {
                                    case 0:
                                    case 1:
                                        i = l;
                                        break;
                                    case 4:
                                        a.label++;
                                        return {
                                            value: l[1], done: !1
                                        };
                                    case 5:
                                        a.label++;
                                        n = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys,
                                                i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                            a.label = l[1];
                                            break
                                        }
                                        if (6 === l[0] && a.label < i[1]) {
                                            a.label = i[1];
                                            i = l;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2];
                                            a.ops.push(l);
                                            break
                                        }
                                        i[2] && a.ops.pop();
                                        a.trys.pop();
                                        continue
                                }
                                l = r.call(e, a)
                            } catch (e) {
                                l = [6, e];
                                n = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & l[0]) throw l[1];
                            return {
                                value: l[0] ? l[1] : void 0,
                                done: !0
                            }
                        }([l, o])
                    }
                }
            };

            function A(e, r, a, o) {
                e.preventDefault();
                (0, i.k)(e.currentTarget) && e.currentTarget.blur();
                if (null != o) {
                    s.default.track(u.rMx.OPEN_MODAL, C({
                        type: u.jXE.MEDIA_VIEWER
                    }, o), {
                        throttlePercent: .01
                    });
                    d = o.guild_id, y = o.channel_id, g = o.channel_type, v = r.length, p.setState(h(c({}, m), {
                        guildId: d,
                        channelId: y,
                        channelType: g,
                        numMediaItems: v
                    }))
                }
                var d, y, g, v;
                (0, l.openModalLazy)(I((function() {
                    var e, i;
                    return M(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, Promise.all([t.e(40532), t.e(47405), t.e(43586), t.e(84991)]).then(t.bind(t, 484991))];
                            case 1:
                                e = l.sent(), i = e.default;
                                return [2, function(e) {
                                    var t = S({}, e);
                                    return (0, n.jsx)(i, N(C({}, t), {
                                        onIndexChange: null != o ? b : void 0,
                                        className: w().zoomedCarouselModalRoot,
                                        items: r,
                                        modalCarouselClassName: w().modalCarouselWrapper,
                                        startingIndex: a
                                    }))
                                }]
                        }
                    }))
                })), {
                    onCloseCallback: null != o ? f : void 0
                })
            }

            function k(e) {
                var r = e.width,
                    t = e.height,
                    i = (0, g.q)(e);
                return {
                    component: (0, n.jsx)(y.y, {
                        width: r,
                        height: t,
                        original: e.url,
                        renderLinkComponent: function(e) {
                            return (0, n.jsx)(a.Z, C({}, e))
                        },
                        src: i
                    }),
                    width: r,
                    height: t,
                    src: i
                }
            }

            function H(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (v.IQ.test(e.filename)) {
                    var t, i, l = null !== (t = e.width) && void 0 !== t ? t : 0,
                        o = null !== (i = e.height) && void 0 !== i ? i : 0,
                        s = (0, g.q)({
                            proxyURL: e.proxy_url,
                            url: e.url
                        });
                    return {
                        component: (0, n.jsx)(y.y, {
                            width: l,
                            height: o,
                            original: e.url,
                            renderLinkComponent: function(e) {
                                return (0, n.jsx)(a.Z, C({}, e))
                            },
                            src: s,
                            shouldHideMediaOptions: r
                        }),
                        width: l,
                        height: o,
                        src: s
                    }
                }
                return null
            }

            function _(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (v.XH.test(e.filename)) {
                    var t, i, l = null !== (t = e.width) && void 0 !== t ? t : 0,
                        o = null !== (i = e.height) && void 0 !== i ? i : 0,
                        s = (0, g.q)({
                            proxyURL: e.proxy_url,
                            url: e.url
                        }),
                        u = new URL(e.proxy_url);
                    u.searchParams.append("format", "jpeg");
                    return {
                        component: (0, n.jsx)(y.K, {
                            width: l,
                            height: o,
                            poster: u.toString(),
                            naturalWidth: l,
                            naturalHeight: o,
                            renderLinkComponent: function(e) {
                                return (0, n.jsx)(a.Z, C({}, e))
                            },
                            src: s,
                            fileSize: e.size,
                            fileName: e.filename,
                            shouldHideMediaOptions: r
                        }),
                        width: l,
                        height: o,
                        src: s
                    }
                }
                return null
            }

            function D(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = H(e, r);
                if (null != t) return t;
                var n = _(e, r);
                return null != n ? n : null
            }

            function T(e, r) {
                var t = {},
                    n = !0,
                    i = !1,
                    l = void 0;
                try {
                    for (var a, o = function() {
                            var n = E(a.value, 2),
                                i = n[0],
                                l = n[1];
                            t[l.src] = function(t) {
                                return A(t, e, i, r)
                            }
                        }, s = e.entries()[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) o()
                } catch (e) {
                    i = !0;
                    l = e
                } finally {
                    try {
                        n || null == s.return || s.return()
                    } finally {
                        if (i) throw l
                    }
                }
                return t
            }
        }
    }
]);