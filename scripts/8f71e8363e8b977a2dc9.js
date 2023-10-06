"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2139], {
        802139: (e, t, n) => {
            n.d(t, {
                BC: () => q,
                ZP: () => Y
            });
            var r = n(785893),
                i = n(667294),
                l = n(294184),
                a = n.n(l),
                o = n(608575),
                s = n(304548),
                u = n(210643),
                d = n(930948),
                c = n(70145),
                h = n(473291),
                m = n(347117),
                p = n(716997),
                f = n(786170),
                b = n(2590),
                g = n(473708);

            function y(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function v(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function x(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) {
                        n = l[r];
                        t.indexOf(n) >= 0 || (i[n] = e[n])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) {
                        n = l[r];
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                }
                return i
            }

            function w(e) {
                var t = e.poster,
                    n = e.src,
                    l = e.width,
                    a = e.height,
                    o = e.naturalWidth,
                    s = e.naturalHeight,
                    u = e.play,
                    d = void 0 === u || u,
                    c = e.className,
                    h = e.alt,
                    m = e.responsive,
                    p = i.useRef(null);
                i.useEffect((function() {
                    var e = p.current;
                    null != e && (d ? e.play() : e.pause())
                }), [d]);
                return o <= b.N_j && s <= b.XKF || o <= b.XKF && s <= b.N_j ? (0, r.jsx)(f.Z, {
                    ref: p,
                    className: c,
                    poster: t,
                    src: n,
                    width: l,
                    height: a,
                    responsive: m,
                    muted: !0,
                    loop: !0,
                    autoPlay: d,
                    preload: "none",
                    "aria-label": h
                }) : (0, r.jsx)("img", {
                    alt: "",
                    src: t,
                    width: l,
                    height: a
                })
            }

            function j(e) {
                var t = e.src,
                    n = e.poster,
                    i = e.naturalWidth,
                    l = e.naturalHeight,
                    a = e.responsive,
                    o = e.autoPlay,
                    s = e.className,
                    u = e.playable,
                    d = void 0 === u || u,
                    c = e.renderImageComponent,
                    h = e.alt,
                    m = void 0 === h ? g.Z.Messages.GIF : h,
                    f = x(e, ["src", "poster", "naturalWidth", "naturalHeight", "responsive", "autoPlay", "className", "playable", "renderImageComponent", "alt"]);
                return (0, r.jsx)(p.h.Consumer, y({}, "children", (function(e) {
                    return c(v(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))));
                            r.forEach((function(t) {
                                y(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, f), y({
                        alt: m,
                        src: n,
                        containerClassName: s,
                        autoPlay: o,
                        animated: d,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: d ? 0 : -1
                    }, "children", (function(e) {
                        var n = e.src,
                            o = e.size,
                            u = e.animating,
                            c = e.alt;
                        return (0, r.jsx)(w, {
                            alt: c,
                            className: s,
                            poster: n,
                            src: t,
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
            var O = n(159689),
                I = n(507488),
                S = n(220496),
                P = n(330484),
                C = n(189865),
                E = n(248691),
                N = n(581373),
                M = n(966334),
                A = n(220408),
                k = n.n(A),
                T = n(169595),
                D = n.n(T);

            function H(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function L(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function R(e) {
                R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                };
                return R(e)
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        L(e, t, n[t])
                    }))
                }
                return e
            }

            function W(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function B(e, t) {
                return !t || "object" !== U(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function F(e, t) {
                F = Object.setPrototypeOf || function(e, t) {
                    e.__proto__ = t;
                    return e
                };
                return F(e, t)
            }

            function G(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                l.push(r.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return H(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var U = function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };

            function Z(e) {
                var t = function() {
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
                    var n, r = R(e);
                    if (t) {
                        var i = R(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return B(this, n)
                }
            }

            function q(e) {
                var t = e.className,
                    n = e.iframeWrapperClassName,
                    l = e.maxWidth,
                    s = e.maxHeight,
                    u = e.thumbnail,
                    c = e.video,
                    h = e.allowFullScreen,
                    p = void 0 === h || h,
                    f = e.responsive,
                    g = void 0 !== f && f,
                    y = e.renderImageComponent,
                    v = e.renderVideoComponent,
                    x = e.renderLinkComponent,
                    w = e.playable,
                    j = void 0 === w || w,
                    O = e.autoPlay,
                    I = void 0 !== O && O,
                    P = e.autoMute,
                    C = e.volume,
                    N = e.onPlay,
                    M = e.onEnded,
                    A = e.onVolumeChange,
                    T = e.onMute,
                    D = e.href,
                    H = e.messageId,
                    _ = e.channelId,
                    L = G(i.useState(I), 2),
                    R = L[0],
                    B = L[1],
                    F = null != c && null == c.proxyURL,
                    U = i.useCallback((function() {
                        return B(!1)
                    }), [B]),
                    Z = function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        null == N || N(!1);
                        B(!0);
                        if (F) {
                            d.S.dispatch(b.CkL.VIDEO_EMBED_PLAYBACK_STARTED);
                            d.S.subscribeOnce(b.CkL.VIDEO_EMBED_PLAYBACK_STARTED, U)
                        }
                    };
                i.useEffect((function() {
                    return function() {
                        F && d.S.unsubscribe(b.CkL.VIDEO_EMBED_PLAYBACK_STARTED, U)
                    }
                }), [F, U]);
                var q = u.width,
                    K = u.height;
                if (null != c) {
                    q = c.width;
                    K = c.height
                }
                var J = (0, m.Tj)({
                    width: q,
                    height: K,
                    maxWidth: l,
                    maxHeight: s
                });
                q = Math.max(J.width, 150);
                K = Math.max(J.height, 144);
                var Y = (0, E.q)(u);
                if (null != c && null != c.proxyURL) return (0, r.jsx)("div", {
                    className: a()(k().embedVideo, t),
                    children: v({
                        poster: Y,
                        src: c.proxyURL,
                        width: q,
                        height: K,
                        responsive: g,
                        autoPlay: I,
                        onEnded: M,
                        naturalWidth: c.width,
                        naturalHeight: c.height,
                        onVolumeChange: A,
                        playable: j,
                        autoMute: P,
                        volume: C,
                        onPlay: N,
                        onMute: T
                    })
                });
                if (R && null != c) {
                    var z = o.parse(c.url, !0);
                    z.query = W(V({}, z.query), {
                        autoplay: "1",
                        auto_play: "1"
                    });
                    (!0 === P || "function" == typeof P && P()) && (z.query.mute = "1");
                    z.search = null;
                    var X, $ = o.format(z),
                        Q = {
                            width: q,
                            height: K
                        },
                        ee = {
                            width: q,
                            height: K
                        };
                    if (g) {
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
                    return (0, r.jsx)("div", {
                        className: t,
                        style: Q,
                        children: (0, r.jsx)("div", {
                            className: a()(k().embedVideo, n),
                            style: ee,
                            children: (0, r.jsx)("iframe", {
                                className: k().embedIframe,
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
                return (0, r.jsxs)("div", {
                    className: a()(k().embedVideo, t),
                    style: g ? {
                        maxWidth: q
                    } : {
                        width: q,
                        height: K
                    },
                    children: [y({
                        src: Y,
                        width: q,
                        height: K,
                        maxWidth: q,
                        maxHeight: K,
                        responsive: g,
                        containerClassName: k().embedVideoImageComponent,
                        imageClassName: k().embedVideoImageComponentInner,
                        onClick: j && null != c ? Z : null
                    }), (0, r.jsx)("div", {
                        className: k().embedVideoActions,
                        children: (0, r.jsx)("div", {
                            className: k().centerContent,
                            children: j ? (0, r.jsx)(S.Z, {
                                onPlay: null != c ? Z : null,
                                externalURL: D,
                                renderLinkComponent: x,
                                messageId: H,
                                channelId: _
                            }) : null
                        })
                    })]
                })
            }

            function K(e) {
                var t = e.className,
                    n = e.href,
                    i = e.autoPlay,
                    l = e.maxWidth,
                    o = e.maxHeight,
                    s = e.thumbnail,
                    u = e.video,
                    d = e.renderImageComponent,
                    c = e.responsive,
                    h = e.alt,
                    m = e.disableAltTextDisplay,
                    p = void 0 !== m && m,
                    f = e.playable,
                    b = void 0 === f || f,
                    g = e.hiddenSpoilers;
                return (0, r.jsx)(j, {
                    className: a()(k().embedVideo, t),
                    original: n,
                    poster: (0, E.q)(s),
                    src: (0, E.q)(u),
                    alt: h,
                    width: s.width,
                    height: s.height,
                    naturalHeight: u.height,
                    naturalWidth: u.width,
                    maxWidth: l,
                    maxHeight: o,
                    responsive: c,
                    autoPlay: i,
                    playable: b,
                    renderImageComponent: d,
                    hiddenSpoilers: g,
                    disableAltTextDisplay: p
                })
            }

            function J(e) {
                var t = e.className,
                    n = e.embed.url;
                if (null == n) return null;
                var i = null,
                    l = null;
                try {
                    var s = o.parse(n, !0);
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
                return (0, r.jsx)("iframe", {
                    className: a()(k().embedSpotify, t),
                    src: M.C7.EMBED(l),
                    style: {
                        width: 400,
                        height: m
                    },
                    frameBorder: 0,
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                })
            }
            var Y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    });
                    t && F(e, t)
                }(n, e);
                var t = Z(n);

                function n() {
                    _(this, n);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        isVisible: null == e.props.obscureReason
                    };
                    e.onReveal = function() {
                        e.setState({
                            isVisible: !0
                        })
                    };
                    e.onToggleObscurity = function() {
                        e.setState({
                            isVisible: !e.state.isVisible
                        })
                    };
                    e.renderInlineMediaEmbed = function() {
                        var t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            i = e.props,
                            l = i.obscureReason,
                            o = i.className;
                        return (0, r.jsx)("div", {
                            "aria-hidden": n,
                            className: a()(k().inlineMediaEmbed, o, (t = {}, L(t, k().spoilerAttachment, null != l), L(t, k().hiddenSpoiler, n), L(t, k().justifyAuto, e.usesJustifiedAutoStyle()), t)),
                            children: e.renderMedia(n)
                        })
                    };
                    e.renderEmbedContent = function() {
                        var t, n, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            l = e.props,
                            o = l.className,
                            s = l.onSuppressEmbed,
                            d = l.obscureReason,
                            c = e.renderAll(),
                            h = c.provider,
                            m = c.author,
                            p = c.title,
                            f = c.description,
                            b = c.fields,
                            g = c.thumbnail,
                            y = c.media,
                            v = c.footer;
                        return (0, r.jsx)("article", {
                            className: a()(o, k().embedFull, D().markup, (t = {}, L(t, k().hiddenSpoiler, i), L(t, k().spoilerEmbed, d === u.wk.SPOILER), L(t, k().justifyAuto, e.usesJustifiedAutoStyle()), t)),
                            "aria-hidden": i,
                            style: {
                                borderColor: e.getEmbedColor(i),
                                maxWidth: e.getMaxWidth()
                            },
                            children: (0, r.jsx)("div", {
                                className: k().gridContainer,
                                children: (0, r.jsxs)("div", {
                                    className: a()((n = {}, L(n, k().grid, !0), L(n, k().hasThumbnail, null != g), n)),
                                    children: [null != s ? e.renderSuppressButton(s) : null, h, m, p, f, b, y, g, v]
                                })
                            })
                        })
                    };
                    return e
                }
                var i = n.prototype;
                i.renderProvider = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.props,
                        n = t.embed.provider,
                        i = t.renderLinkComponent,
                        l = t.messageId,
                        o = t.channelId;
                    return null == n ? null : (0, r.jsx)("div", {
                        className: a()(k().embedProvider, k().embedMargin),
                        children: null != n.url ? i({
                            className: k().embedLink,
                            href: n.url,
                            tabIndex: e ? 0 : -1,
                            children: n.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: l,
                            channelId: o
                        }) : (0, r.jsx)("span", {
                            children: n.name
                        })
                    })
                };
                i.renderAuthor = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.props,
                        n = t.embed.author,
                        i = t.renderLinkComponent,
                        l = t.messageId,
                        o = t.channelId;
                    return null == n ? null : (0, r.jsxs)("div", {
                        className: a()(k().embedAuthor, k().embedMargin),
                        children: [null != n.iconProxyURL ? (0, r.jsx)("img", {
                            alt: "",
                            className: k().embedAuthorIcon,
                            src: n.iconProxyURL
                        }) : null, null != n.url ? i({
                            className: k().embedAuthorNameLink,
                            href: n.url,
                            tabIndex: e ? 0 : -1,
                            children: n.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: l,
                            channelId: o
                        }) : (0, r.jsx)("span", {
                            className: k().embedAuthorName,
                            children: n.name
                        })]
                    })
                };
                i.renderTitle = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.props,
                        n = t.embed,
                        i = t.renderLinkComponent,
                        l = t.renderTitle,
                        o = t.messageId,
                        s = t.channelId,
                        u = n.rawTitle,
                        d = n.url;
                    return null == u ? null : (0, r.jsx)("div", {
                        className: a()(k().embedTitle, k().embedMargin),
                        children: null != d ? i({
                            className: k().embedTitleLink,
                            href: d,
                            tabIndex: e ? 0 : -1,
                            children: l(n, u),
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: o,
                            channelId: s
                        }) : l(n, u)
                    })
                };
                i.renderDescription = function() {
                    var e = this.props,
                        t = e.embed,
                        n = e.renderDescription,
                        i = t.rawDescription;
                    return null == i ? null : (0, r.jsx)("div", {
                        className: a()(k().embedDescription, k().embedMargin),
                        children: n(t, i, !1)
                    })
                };
                i.renderThumbnail = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.props,
                        n = t.embed.thumbnail,
                        i = t.maxThumbnailWidth,
                        l = t.maxThumbnailHeight,
                        a = t.renderImageComponent,
                        o = t.autoPlayGif;
                    return null == n ? null : (0, r.jsx)(P.G.Consumer, {
                        children: function(t) {
                            var r = t.disableAnimations;
                            return a({
                                containerClassName: k().embedThumbnail,
                                src: (0,
                                    E.q)(n),
                                original: n.url,
                                width: n.width,
                                height: n.height,
                                maxWidth: i,
                                maxHeight: l,
                                shouldLink: e,
                                autoPlay: o && !r
                            })
                        }
                    })
                };
                i.renderFields = function() {
                    var e = this,
                        t = this.props.embed,
                        n = t.fields;
                    if (null == n || 0 === n.length) return null;
                    var i = [],
                        l = null;
                    n.forEach((function(n) {
                        var r = n.rawName,
                            a = n.rawValue,
                            o = n.inline;
                        if (!o && null != l) {
                            i.push(l);
                            l = null
                        }
                        null == l && (l = []);
                        l.push([e.props.renderTitle(t, r), e.props.renderDescription(t, a, !0)]);
                        if (3 === l.length || !o) {
                            i.push(l);
                            l = null
                        }
                    }));
                    null != l && i.push(l);
                    return (0, r.jsx)("div", {
                        className: k().embedFields,
                        children: i.map((function(e, t) {
                            var n = e.length;
                            return e.map((function(e, i) {
                                var l, a, o, s, u = G(e, 2),
                                    d = u[0],
                                    c = u[1];
                                return (0, r.jsxs)("div", {
                                    className: k().embedField,
                                    style: {
                                        gridColumn: (l = i, a = n, o = 12 / a, s = l * o, "".concat(s + 1, " / ").concat(s + o + 1))
                                    },
                                    children: [(0, r.jsx)("div", {
                                        className: k().embedFieldName,
                                        children: d
                                    }), (0, r.jsx)("div", {
                                        className: k().embedFieldValue,
                                        children: c
                                    })]
                                }, "".concat(t, "-").concat(i))
                            }))
                        }))
                    })
                };
                i.renderImages = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.hiddenSpoiler,
                        n = void 0 !== t && t,
                        i = e.isVisible,
                        l = void 0 === i || i,
                        a = this,
                        o = this.props,
                        s = o.embed,
                        u = o.maxMediaHeight;
                    if (null == s.images) return null;
                    var d = G(s.images.map((function(e) {
                            return a.renderImage({
                                hiddenSpoiler: n,
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
                    return null == c && null == h && null == m && null == p ? null : (0, r.jsxs)("div", {
                        className: k().embedGalleryImagesWrapper,
                        style: {
                            height: u
                        },
                        children: [(0, r.jsxs)("div", {
                            className: k().embedGallerySide,
                            children: [c, null != p && m]
                        }), (0, r.jsxs)("div", {
                            className: k().embedGallerySide,
                            children: [h, null == p && null != m && m, null != p && p]
                        })]
                    })
                };
                i.renderImage = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.hiddenSpoiler,
                        n = void 0 !== t && t,
                        i = e.isVisible,
                        l = void 0 === i || i,
                        o = e.image,
                        s = e.isGalleryImage,
                        u = void 0 !== s && s,
                        d = e.alt,
                        c = void 0 === d ? g.Z.Messages.IMAGE : d,
                        h = e.allImages,
                        m = void 0 === h ? null : h,
                        f = this.props,
                        b = f.maxMediaWidth,
                        y = f.maxMediaHeight,
                        v = f.renderImageComponent,
                        x = f.className,
                        w = f.autoPlayGif;
                    if (null == o) return null;
                    var j, I = (0, E.q)(o),
                        S = null == m ? {} : (0, N.Cx)(m.map(N.nP)),
                        C = O.Z.isAnimated({
                            src: (0, E.q)(o),
                            original: o.url,
                            animated: !1
                        }),
                        M = {
                            containerClassName: a()(x, (j = {}, L(j, k().embedMedia, !u), L(j, k().embedImage, !u), L(j, k().galleryImage, u), j)),
                            imageContainerClassName: u ? k().galleryImageContainer : void 0,
                            imageClassName: u ? k().embedGalleryImageElement : void 0,
                            src: (0, E.q)(o),
                            alt: c,
                            responsive: !0,
                            limitResponsiveWidth: !u,
                            width: o.width,
                            height: o.height,
                            maxWidth: b,
                            maxHeight: y,
                            original: o.url,
                            shouldLink: l,
                            disableAltTextDisplay: !0,
                            hiddenSpoilers: n
                        };
                    I in S && (M.onClick = S[I]);
                    return (0, r.jsx)(p.h.Consumer, {
                        children: function(e) {
                            return (0,
                                r.jsx)(P.G.Consumer, {
                                children: function(t) {
                                    var r = t.disableAnimations;
                                    return v(W(V({}, M), {
                                        autoPlay: w && !r && !n,
                                        renderAccessory: C ? e : null
                                    }))
                                }
                            }, o.url)
                        }
                    })
                };
                i.renderVideo = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.gifv,
                        n = void 0 !== t && t,
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
                        g = s.renderLinkComponent,
                        y = s.allowFullScreen,
                        v = s.autoPlayGif,
                        x = s.messageId,
                        w = s.channelId,
                        j = s.obscureReason;
                    return null == d || null == c ? null : n ? null == h ? null : (0, r.jsx)(P.G.Consumer, {
                        children: function(e) {
                            var t = e.disableAnimations;
                            return (0, r.jsx)(K, {
                                className: k().embedMedia,
                                href: d,
                                thumbnail: c,
                                video: h,
                                maxWidth: m,
                                maxHeight: p,
                                responsive: !0,
                                autoPlay: !o && v && !t && l,
                                renderImageComponent: b,
                                playable: l,
                                hiddenSpoilers: o,
                                disableAltTextDisplay: null != j
                            })
                        }
                    }) : (0, r.jsx)(q, {
                        className: k().embedMedia,
                        href: d,
                        allowFullScreen: y,
                        thumbnail: c,
                        video: h,
                        maxWidth: m,
                        maxHeight: p,
                        responsive: !0,
                        renderImageComponent: b,
                        renderVideoComponent: f,
                        renderLinkComponent: g,
                        playable: l && !o,
                        messageId: x,
                        channelId: w
                    })
                };
                i.renderFooter = function() {
                    var e = this.props.embed,
                        t = e.footer,
                        n = e.timestamp;
                    if (null != t) {
                        var i = null != t.iconProxyURL && "" !== t.iconProxyURL ? t.iconProxyURL : t.iconURL;
                        return (0, r.jsxs)("div", {
                            className: a()(k().embedFooter, k().embedMargin),
                            children: [null != i ? (0, r.jsx)("img", {
                                alt: "",
                                className: k().embedFooterIcon,
                                src: i
                            }) : null, (0, r.jsxs)("span", {
                                className: k().embedFooterText,
                                children: [t.text, null != t.text && null != n ? (0, r.jsx)("span", {
                                    className: k().embedFooterSeparator,
                                    children: "•"
                                }) : null, null != n ? (0, c.Y4)(n) : null]
                            })]
                        })
                    }
                    if (null != n) return (0, r.jsx)("div", {
                        className: a()(k().embedFooter, k().embedMargin),
                        children: (0, r.jsx)("span", {
                            className: k().embedFooterText,
                            children: (0, c.Y4)(n)
                        })
                    })
                };
                i.renderMedia = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this.props.embed,
                        n = this.state.isVisible;
                    switch (t.type) {
                        case b.hBH.GIFV:
                            return this.renderVideo({
                                gifv: !0,
                                hiddenSpoiler: e,
                                isVisible: n
                            });
                        case b.hBH.VIDEO:
                        default:
                            return null != t.video ? this.renderVideo({
                                gifv: !1,
                                hiddenSpoiler: e,
                                isVisible: n
                            }) : null != t.images ? this.renderImages({
                                hiddenSpoiler: e,
                                isVisible: n
                            }) : this.renderImage({
                                hiddenSpoiler: e,
                                isVisible: n,
                                image: t.image,
                                alt: t.rawTitle
                            })
                    }
                };
                i.renderAll = function() {
                    var e, t = this.props,
                        n = t.embed,
                        r = t.hideMedia,
                        i = this.state.isVisible,
                        l = this.renderProvider(i),
                        a = this.renderAuthor(i),
                        o = this.renderTitle(i);
                    switch (n.type) {
                        case b.hBH.IMAGE:
                        case b.hBH.VIDEO:
                        case b.hBH.GIFV:
                            break;
                        default:
                            e = this.renderDescription()
                    }
                    var s, u = this.renderFields();
                    r || (s = this.renderMedia(!i));
                    var d = this.renderFooter(),
                        c = null == s;
                    n.type === b.hBH.RICH && (c = null == n.video);
                    return {
                        provider: l,
                        author: a,
                        title: o,
                        description: e,
                        thumbnail: !r && c ? this.renderThumbnail(i) : null,
                        fields: u,
                        media: s,
                        footer: d
                    }
                };
                i.getMaxWidth = function() {
                    var e = this.props,
                        t = e.maxMediaWidth,
                        n = e.maxMediaHeight,
                        r = e.embed,
                        i = r.image,
                        l = r.images,
                        a = r.video,
                        o = r.type,
                        s = null != i ? i : a;
                    if (null != s) {
                        var u = (0, m.Tj)({
                            width: s.width,
                            height: s.height,
                            maxWidth: t,
                            maxHeight: n
                        }).width;
                        return o === b.hBH.VIDEO || u >= 300 ? u + 32 : o === b.hBH.RICH && void 0 !== l ? 520 : void 0
                    }
                };
                i.isInline = function() {
                    var e = this.props,
                        t = e.hideMedia,
                        n = e.embed;
                    return !t && (0, h.dY)(n)
                };
                i.renderSuppressButton = function(e) {
                    return (0, r.jsx)(s.Clickable, {
                        focusProps: {
                            offset: {
                                bottom: 4
                            }
                        },
                        className: k().embedSuppressButton,
                        onClick: e,
                        "aria-label": g.Z.Messages.SUPPRESS_ALL_EMBEDS,
                        children: (0, r.jsx)(C.Z, {
                            width: 16,
                            height: 16
                        })
                    })
                };
                i.usesJustifiedAutoStyle = function() {
                    var e = this.props.embed;
                    return e.type === b.hBH.IMAGE || e.type === b.hBH.VIDEO || e.type === b.hBH.GIFV || (e.type === b.hBH.RICH || e.type === b.hBH.ARTICLE) && (null != e.video || null != e.image)
                };
                i.getEmbedColor = function(e) {
                    var t = this.props.embed.color;
                    return null != t && "#ffffff" === t.toLowerCase() || e ? void 0 : t
                };
                i.getSpoilerStyles = function(e) {
                    var t = this.props,
                        n = t.maxMediaWidth,
                        r = t.maxMediaHeight,
                        i = t.embed,
                        l = i.image,
                        a = i.images,
                        o = i.video,
                        s = i.type;
                    if (this.usesJustifiedAutoStyle()) {
                        var u = e ? void 0 : this.getMaxWidth();
                        if (void 0 === u && void 0 === a && s !== b.hBH.RICH) {
                            var d = null != l ? l : o;
                            if (void 0 !== d) {
                                u = (0, m.Tj)({
                                    width: d.width,
                                    height: d.height,
                                    maxWidth: n,
                                    maxHeight: r
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
                        t = e.embed,
                        n = e.obscureReason,
                        i = e.className;
                    return null != t.provider && "Spotify" === t.provider.name ? (0, r.jsx)(J, {
                        embed: t,
                        className: i
                    }) : this.isInline() ? null != n ? (0, r.jsx)(I.Z, {
                        type: I.Z.Types.ATTACHMENT,
                        reason: n,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        children: this.renderInlineMediaEmbed
                    }) : this.renderInlineMediaEmbed() : null != n ? (0, r.jsx)(I.Z, {
                        type: I.Z.Types.EMBED,
                        onReveal: this.onReveal,
                        onToggleObscurity: this.onToggleObscurity,
                        reason: n,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!1),
                        children: this.renderEmbedContent
                    }) : this.renderEmbedContent()
                };
                return n
            }(i.PureComponent);
            Y.defaultProps = {
                hideMedia: !1,
                allowFullScreen: !0,
                maxThumbnailWidth: 80,
                maxThumbnailHeight: 80,
                maxMediaWidth: 400,
                maxMediaHeight: 300
            }
        },
        716997: (e, t, n) => {
            n.d(t, {
                h: () => r
            });
            var r = n(667294).createContext((function() {
                return null
            }))
        },
        248691: (e, t, n) => {
            n.d(t, {
                q: () => r
            });

            function r(e) {
                var t = e.proxyURL,
                    n = e.url;
                return null != t && "" !== t ? t : n
            }
        },
        581373: (e, t, n) => {
            n.d(t, {
                j9: () => _,
                nP: () => T,
                Cx: () => L
            });
            var r = n(785893),
                i = (n(667294), n(809784)),
                l = n(304548),
                a = n(4629),
                o = n(174333),
                s = n(38736),
                u = n(652591),
                d = n(2590);

            function c(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        c(e, t, n[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }
            var p = {
                    guildId: void 0,
                    channelId: void 0,
                    channelType: void 0,
                    viewerSwipes: 0,
                    thumbnailSwipes: 0,
                    selectedItemChanges: 0,
                    numMediaItems: 0
                },
                f = (0, s.Z)((function() {
                    return p
                }));

            function b() {
                var e = f.getState();
                u.default.track(d.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
                    guild_id: e.guildId,
                    channel_id: e.channelId,
                    channel_type: e.channelType,
                    number_viewer_swipes: e.viewerSwipes,
                    number_thumbnail_swipes: e.thumbnailSwipes,
                    number_selected_item_changes: e.selectedItemChanges,
                    number_media_items: e.numMediaItems
                });
                f.setState(h({}, p))
            }

            function g() {
                f.setState((function(e) {
                    return {
                        selectedItemChanges: e.selectedItemChanges + 1
                    }
                }))
            }
            var y = n(570738),
                v = n(248691),
                x = n(493254),
                w = n(466868),
                j = n.n(w);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function I(e, t, n, r, i, l, a) {
                try {
                    var o = e[l](a),
                        s = o.value
                } catch (e) {
                    n(e);
                    return
                }
                o.done ? t(s) : Promise.resolve(s).then(r, i)
            }

            function S(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var l = e.apply(t, n);

                        function a(e) {
                            I(l, r, i, a, o, "next", e)
                        }

                        function o(e) {
                            I(l, r, i, a, o, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function P(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n;
                return e
            }

            function C() {
                C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                };
                return C.apply(this, arguments)
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))));
                    r.forEach((function(t) {
                        P(e, t, n[t])
                    }))
                }
                return e
            }

            function N(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        n.push.apply(n, r)
                    }
                    return n
                }(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }));
                return e
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (n = n.call(e); !(a = (r = n.next()).done); a = !0) {
                                l.push(r.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(e, t) {
                var n, r, i, l, a = {
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
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & l[0] ? r.return : l[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, l[1])).done) return i;
                                (r = 0, i) && (l = [2 & l[0], i.value]);
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
                                        r = l[1];
                                        l = [0];
                                        continue;
                                    case 7:
                                        l = a.ops.pop();
                                        a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
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
                                l = t.call(e, a)
                            } catch (e) {
                                l = [6, e];
                                r = 0
                            } finally {
                                n = i = 0
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

            function k(e, t, a, o) {
                e.preventDefault();
                (0, i.k)(e.currentTarget) && e.currentTarget.blur();
                if (null != o) {
                    u.default.track(d.rMx.OPEN_MODAL, E({
                        type: d.jXE.MEDIA_VIEWER
                    }, o), {
                        throttlePercent: .01
                    });
                    s = o.guild_id, c = o.channel_id, y = o.channel_type, v = t.length, f.setState(m(h({}, p), {
                        guildId: s,
                        channelId: c,
                        channelType: y,
                        numMediaItems: v
                    }))
                }
                var s, c, y, v;
                (0, l.openModalLazy)(S((function() {
                    var e, i;
                    return A(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, Promise.all([n.e(40532), n.e(85157), n.e(62419), n.e(89975), n.e(84991)]).then(n.bind(n, 484991))];
                            case 1:
                                e = l.sent(), i = e.default;
                                return [2, function(e) {
                                    var n = C({}, e);
                                    return (0, r.jsx)(i, N(E({}, n), {
                                        onIndexChange: null != o ? g : void 0,
                                        className: j().zoomedCarouselModalRoot,
                                        items: t,
                                        modalCarouselClassName: j().modalCarouselWrapper,
                                        startingIndex: a
                                    }))
                                }]
                        }
                    }))
                })), {
                    onCloseCallback: null != o ? b : void 0
                })
            }

            function T(e) {
                var t = e.width,
                    n = e.height,
                    i = (0, v.q)(e);
                return {
                    component: (0, r.jsx)(y.y, {
                        width: t,
                        height: n,
                        original: e.url,
                        renderLinkComponent: function(e) {
                            return (0, r.jsx)(a.Z, E({}, e))
                        },
                        src: i
                    }),
                    width: t,
                    height: n,
                    src: i
                }
            }

            function D(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (x.IQ.test(e.filename)) {
                    var i, l, s = null !== (i = e.width) && void 0 !== i ? i : 0,
                        u = null !== (l = e.height) && void 0 !== l ? l : 0,
                        d = (0, v.q)({
                            proxyURL: e.proxy_url,
                            url: e.url
                        });
                    return {
                        component: (0, r.jsx)(y.y, {
                            width: s,
                            height: u,
                            original: e.url,
                            renderLinkComponent: function(e) {
                                return (0,
                                    r.jsx)(a.Z, E({}, e))
                            },
                            src: d,
                            shouldHideMediaOptions: t,
                            obscure: (0, o.KP)({
                                type: o.lJ.Attachment,
                                media: e
                            }, n)
                        }),
                        width: s,
                        height: u,
                        src: d
                    }
                }
                return null
            }

            function H(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (x.XH.test(e.filename)) {
                    var i, l, s = null !== (i = e.width) && void 0 !== i ? i : 0,
                        u = null !== (l = e.height) && void 0 !== l ? l : 0,
                        d = (0, v.q)({
                            proxyURL: e.proxy_url,
                            url: e.url
                        }),
                        c = new URL(e.proxy_url);
                    c.searchParams.append("format", "jpeg");
                    return {
                        component: (0, r.jsx)(y.K, {
                            width: s,
                            height: u,
                            poster: c.toString(),
                            naturalWidth: s,
                            naturalHeight: u,
                            renderLinkComponent: function(e) {
                                return (0, r.jsx)(a.Z, E({}, e))
                            },
                            src: d,
                            fileSize: e.size,
                            fileName: e.filename,
                            shouldHideMediaOptions: t,
                            obscure: (0, o.KP)({
                                type: o.lJ.Attachment,
                                media: e
                            }, n)
                        }),
                        width: s,
                        height: u,
                        src: d
                    }
                }
                return null
            }

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = D(e, t, n);
                if (null != r) return r;
                var i = H(e, t, n);
                return null != i ? i : null
            }

            function L(e, t) {
                var n = {},
                    r = !0,
                    i = !1,
                    l = void 0;
                try {
                    for (var a, o = function() {
                            var r = M(a.value, 2),
                                i = r[0],
                                l = r[1];
                            n[l.src] = function(n) {
                                return k(n, e, i, t)
                            }
                        }, s = e.entries()[Symbol.iterator](); !(r = (a = s.next()).done); r = !0) o()
                } catch (e) {
                    i = !0;
                    l = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (i) throw l
                    }
                }
                return n
            }
        }
    }
]);