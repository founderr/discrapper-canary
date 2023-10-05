"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [2139], {
        802139: (e, t, r) => {
            r.d(t, {
                BC: () => q,
                ZP: () => Y
            });
            var n = r(785893),
                i = r(667294),
                l = r(294184),
                a = r.n(l),
                o = r(608575),
                s = r(304548),
                u = r(210643),
                d = r(930948),
                c = r(70145),
                h = r(473291),
                m = r(347117),
                p = r(716997),
                f = r(786170),
                b = r(2590),
                y = r(473708);

            function g(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function v(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function x(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || (i[r] = e[r])
                    }
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) {
                        r = l[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }

            function w(e) {
                var t = e.poster,
                    r = e.src,
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
                return o <= b.N_j && s <= b.XKF || o <= b.XKF && s <= b.N_j ? (0, n.jsx)(f.Z, {
                    ref: p,
                    className: c,
                    poster: t,
                    src: r,
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
                    src: t,
                    width: l,
                    height: a
                })
            }

            function j(e) {
                var t = e.src,
                    r = e.poster,
                    i = e.naturalWidth,
                    l = e.naturalHeight,
                    a = e.responsive,
                    o = e.autoPlay,
                    s = e.className,
                    u = e.playable,
                    d = void 0 === u || u,
                    c = e.renderImageComponent,
                    h = e.alt,
                    m = void 0 === h ? y.Z.Messages.GIF : h,
                    f = x(e, ["src", "poster", "naturalWidth", "naturalHeight", "responsive", "autoPlay", "className", "playable", "renderImageComponent", "alt"]);
                return (0, n.jsx)(p.h.Consumer, g({}, "children", (function(e) {
                    return c(v(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable
                            }))));
                            n.forEach((function(t) {
                                g(e, t, r[t])
                            }))
                        }
                        return e
                    }({}, f), g({
                        alt: m,
                        src: r,
                        containerClassName: s,
                        autoPlay: o,
                        animated: d,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: d ? 0 : -1
                    }, "children", (function(e) {
                        var r = e.src,
                            o = e.size,
                            u = e.animating,
                            c = e.alt;
                        return (0, n.jsx)(w, {
                            alt: c,
                            className: s,
                            poster: r,
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
            var O = r(159689),
                I = r(507488),
                P = r(220496),
                S = r(330484),
                C = r(189865),
                E = r(248691),
                N = r(581373),
                M = r(966334),
                A = r(220408),
                k = r.n(A),
                H = r(169595),
                _ = r.n(H);

            function D(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function L(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function T(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
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
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        T(e, t, r[t])
                    }))
                }
                return e
            }

            function W(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
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
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return D(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return D(e, t)
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
                    var r, n = R(e);
                    if (t) {
                        var i = R(this).constructor;
                        r = Reflect.construct(n, arguments, i)
                    } else r = n.apply(this, arguments);
                    return B(this, r)
                }
            }

            function q(e) {
                var t = e.className,
                    r = e.iframeWrapperClassName,
                    l = e.maxWidth,
                    s = e.maxHeight,
                    u = e.thumbnail,
                    c = e.video,
                    h = e.allowFullScreen,
                    p = void 0 === h || h,
                    f = e.responsive,
                    y = void 0 !== f && f,
                    g = e.renderImageComponent,
                    v = e.renderVideoComponent,
                    x = e.renderLinkComponent,
                    w = e.playable,
                    j = void 0 === w || w,
                    O = e.autoPlay,
                    I = void 0 !== O && O,
                    S = e.autoMute,
                    C = e.volume,
                    N = e.onPlay,
                    M = e.onEnded,
                    A = e.onVolumeChange,
                    H = e.onMute,
                    _ = e.href,
                    D = e.messageId,
                    L = e.channelId,
                    T = G(i.useState(I), 2),
                    R = T[0],
                    B = T[1],
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
                if (null != c && null != c.proxyURL) return (0, n.jsx)("div", {
                    className: a()(k().embedVideo, t),
                    children: v({
                        poster: Y,
                        src: c.proxyURL,
                        width: q,
                        height: K,
                        responsive: y,
                        autoPlay: I,
                        onEnded: M,
                        naturalWidth: c.width,
                        naturalHeight: c.height,
                        onVolumeChange: A,
                        playable: j,
                        autoMute: S,
                        volume: C,
                        onPlay: N,
                        onMute: H
                    })
                });
                if (R && null != c) {
                    var z = o.parse(c.url, !0);
                    z.query = W(V({}, z.query), {
                        autoplay: "1",
                        auto_play: "1"
                    });
                    (!0 === S || "function" == typeof S && S()) && (z.query.mute = "1");
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
                        className: t,
                        style: Q,
                        children: (0, n.jsx)("div", {
                            className: a()(k().embedVideo, r),
                            style: ee,
                            children: (0, n.jsx)("iframe", {
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
                return (0, n.jsxs)("div", {
                    className: a()(k().embedVideo, t),
                    style: y ? {
                        maxWidth: q
                    } : {
                        width: q,
                        height: K
                    },
                    children: [g({
                        src: Y,
                        width: q,
                        height: K,
                        maxWidth: q,
                        maxHeight: K,
                        responsive: y,
                        containerClassName: k().embedVideoImageComponent,
                        imageClassName: k().embedVideoImageComponentInner,
                        onClick: j && null != c ? Z : null
                    }), (0, n.jsx)("div", {
                        className: k().embedVideoActions,
                        children: (0, n.jsx)("div", {
                            className: k().centerContent,
                            children: j ? (0, n.jsx)(P.Z, {
                                onPlay: null != c ? Z : null,
                                externalURL: _,
                                renderLinkComponent: x,
                                messageId: D,
                                channelId: L
                            }) : null
                        })
                    })]
                })
            }

            function K(e) {
                var t = e.className,
                    r = e.href,
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
                return (0, n.jsx)(j, {
                    className: a()(k().embedVideo, t),
                    original: r,
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
                    playable: p,
                    renderImageComponent: d,
                    hiddenSpoilers: f
                })
            }

            function J(e) {
                var t = e.className,
                    r = e.embed.url;
                if (null == r) return null;
                var i = null,
                    l = null;
                try {
                    var s = o.parse(r, !0);
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
                }(r, e);
                var t = Z(r);

                function r() {
                    L(this, r);
                    var e;
                    (e = t.apply(this, arguments)).state = {
                        isVisible: null == e.props.obscureReason
                    };
                    e.onReveal = function() {
                        e.setState({
                            isVisible: !0
                        })
                    };
                    e.renderInlineMediaEmbed = function() {
                        var t, r = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            i = e.props,
                            l = i.obscureReason,
                            o = i.className;
                        return (0, n.jsx)("div", {
                            "aria-hidden": r,
                            className: a()(k().inlineMediaEmbed, o, (t = {}, T(t, k().spoilerAttachment, null != l), T(t, k().hiddenSpoiler, r), T(t, k().justifyAuto, e.usesJustifiedAutoStyle()), t)),
                            children: e.renderMedia(r)
                        })
                    };
                    e.renderEmbedContent = function() {
                        var t, r, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
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
                            y = c.thumbnail,
                            g = c.media,
                            v = c.footer;
                        return (0, n.jsx)("article", {
                            className: a()(o, k().embedFull, _().markup, (t = {}, T(t, k().hiddenSpoiler, i), T(t, k().spoilerEmbed, d === u.wk.SPOILER), T(t, k().justifyAuto, e.usesJustifiedAutoStyle()), t)),
                            "aria-hidden": i,
                            style: {
                                borderColor: e.getEmbedColor(i),
                                maxWidth: e.getMaxWidth()
                            },
                            children: (0, n.jsx)("div", {
                                className: k().gridContainer,
                                children: (0, n.jsxs)("div", {
                                    className: a()((r = {}, T(r, k().grid, !0), T(r, k().hasThumbnail, null != y), r)),
                                    children: [null != s ? e.renderSuppressButton(s) : null, h, m, p, f, b, g, y, v]
                                })
                            })
                        })
                    };
                    return e
                }
                var i = r.prototype;
                i.renderProvider = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.props,
                        r = t.embed.provider,
                        i = t.renderLinkComponent,
                        l = t.messageId,
                        o = t.channelId;
                    return null == r ? null : (0, n.jsx)("div", {
                        className: a()(k().embedProvider, k().embedMargin),
                        children: null != r.url ? i({
                            className: k().embedLink,
                            href: r.url,
                            tabIndex: e ? 0 : -1,
                            children: r.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: l,
                            channelId: o
                        }) : (0, n.jsx)("span", {
                            children: r.name
                        })
                    })
                };
                i.renderAuthor = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.props,
                        r = t.embed.author,
                        i = t.renderLinkComponent,
                        l = t.messageId,
                        o = t.channelId;
                    return null == r ? null : (0, n.jsxs)("div", {
                        className: a()(k().embedAuthor, k().embedMargin),
                        children: [null != r.iconProxyURL ? (0, n.jsx)("img", {
                            alt: "",
                            className: k().embedAuthorIcon,
                            src: r.iconProxyURL
                        }) : null, null != r.url ? i({
                            className: k().embedAuthorNameLink,
                            href: r.url,
                            tabIndex: e ? 0 : -1,
                            children: r.name,
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: l,
                            channelId: o
                        }) : (0, n.jsx)("span", {
                            className: k().embedAuthorName,
                            children: r.name
                        })]
                    })
                };
                i.renderTitle = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.props,
                        r = t.embed,
                        i = t.renderLinkComponent,
                        l = t.renderTitle,
                        o = t.messageId,
                        s = t.channelId,
                        u = r.rawTitle,
                        d = r.url;
                    return null == u ? null : (0, n.jsx)("div", {
                        className: a()(k().embedTitle, k().embedMargin),
                        children: null != d ? i({
                            className: k().embedTitleLink,
                            href: d,
                            tabIndex: e ? 0 : -1,
                            children: l(r, u),
                            target: "_blank",
                            rel: "noreferrer noopener",
                            messageId: o,
                            channelId: s
                        }) : l(r, u)
                    })
                };
                i.renderDescription = function() {
                    var e = this.props,
                        t = e.embed,
                        r = e.renderDescription,
                        i = t.rawDescription;
                    return null == i ? null : (0, n.jsx)("div", {
                        className: a()(k().embedDescription, k().embedMargin),
                        children: r(t, i, !1)
                    })
                };
                i.renderThumbnail = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = this.props,
                        r = t.embed.thumbnail,
                        i = t.maxThumbnailWidth,
                        l = t.maxThumbnailHeight,
                        a = t.renderImageComponent,
                        o = t.autoPlayGif;
                    return null == r ? null : (0, n.jsx)(S.G.Consumer, {
                        children: function(t) {
                            var n = t.disableAnimations;
                            return a({
                                containerClassName: k().embedThumbnail,
                                src: (0,
                                    E.q)(r),
                                original: r.url,
                                width: r.width,
                                height: r.height,
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
                        t = this.props.embed,
                        r = t.fields;
                    if (null == r || 0 === r.length) return null;
                    var i = [],
                        l = null;
                    r.forEach((function(r) {
                        var n = r.rawName,
                            a = r.rawValue,
                            o = r.inline;
                        if (!o && null != l) {
                            i.push(l);
                            l = null
                        }
                        null == l && (l = []);
                        l.push([e.props.renderTitle(t, n), e.props.renderDescription(t, a, !0)]);
                        if (3 === l.length || !o) {
                            i.push(l);
                            l = null
                        }
                    }));
                    null != l && i.push(l);
                    return (0, n.jsx)("div", {
                        className: k().embedFields,
                        children: i.map((function(e, t) {
                            var r = e.length;
                            return e.map((function(e, i) {
                                var l, a, o, s, u = G(e, 2),
                                    d = u[0],
                                    c = u[1];
                                return (0, n.jsxs)("div", {
                                    className: k().embedField,
                                    style: {
                                        gridColumn: (l = i, a = r, o = 12 / a, s = l * o, "".concat(s + 1, " / ").concat(s + o + 1))
                                    },
                                    children: [(0, n.jsx)("div", {
                                        className: k().embedFieldName,
                                        children: d
                                    }), (0, n.jsx)("div", {
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
                        r = void 0 !== t && t,
                        i = e.isVisible,
                        l = void 0 === i || i,
                        a = this,
                        o = this.props,
                        s = o.embed,
                        u = o.maxMediaHeight;
                    if (null == s.images) return null;
                    var d = G(s.images.map((function(e) {
                            return a.renderImage({
                                hiddenSpoiler: r,
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
                        className: k().embedGalleryImagesWrapper,
                        style: {
                            height: u
                        },
                        children: [(0, n.jsxs)("div", {
                            className: k().embedGallerySide,
                            children: [c, null != p && m]
                        }), (0, n.jsxs)("div", {
                            className: k().embedGallerySide,
                            children: [h, null == p && null != m && m, null != p && p]
                        })]
                    })
                };
                i.renderImage = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.hiddenSpoiler,
                        r = void 0 !== t && t,
                        i = e.isVisible,
                        l = void 0 === i || i,
                        o = e.image,
                        s = e.isGalleryImage,
                        u = void 0 !== s && s,
                        d = e.alt,
                        c = void 0 === d ? y.Z.Messages.IMAGE : d,
                        h = e.allImages,
                        m = void 0 === h ? null : h,
                        f = this.props,
                        b = f.maxMediaWidth,
                        g = f.maxMediaHeight,
                        v = f.renderImageComponent,
                        x = f.className,
                        w = f.autoPlayGif;
                    if (null == o) return null;
                    var j, I = (0, E.q)(o),
                        P = null == m ? {} : (0, N.Cx)(m.map(N.nP)),
                        C = O.Z.isAnimated({
                            src: (0, E.q)(o),
                            original: o.url,
                            animated: !1
                        }),
                        M = {
                            containerClassName: a()(x, (j = {}, T(j, k().embedMedia, !u), T(j, k().embedImage, !u), T(j, k().galleryImage, u), j)),
                            imageContainerClassName: u ? k().galleryImageContainer : void 0,
                            imageClassName: u ? k().embedGalleryImageElement : void 0,
                            src: (0, E.q)(o),
                            alt: c,
                            responsive: !0,
                            limitResponsiveWidth: !u,
                            width: o.width,
                            height: o.height,
                            maxWidth: b,
                            maxHeight: g,
                            original: o.url,
                            shouldLink: l,
                            disableAltTextDisplay: !0,
                            hiddenSpoilers: r
                        };
                    I in P && (M.onClick = P[I]);
                    return (0, n.jsx)(p.h.Consumer, {
                        children: function(e) {
                            return (0,
                                n.jsx)(S.G.Consumer, {
                                children: function(t) {
                                    var n = t.disableAnimations;
                                    return v(W(V({}, M), {
                                        autoPlay: w && !n && !r,
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
                        r = void 0 !== t && t,
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
                    return null == d || null == c ? null : r ? null == h ? null : (0, n.jsx)(S.G.Consumer, {
                        children: function(e) {
                            var t = e.disableAnimations;
                            return (0, n.jsx)(K, {
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
                                hiddenSpoilers: o
                            })
                        }
                    }) : (0, n.jsx)(q, {
                        className: k().embedMedia,
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
                        t = e.footer,
                        r = e.timestamp;
                    if (null != t) {
                        var i = null != t.iconProxyURL && "" !== t.iconProxyURL ? t.iconProxyURL : t.iconURL;
                        return (0, n.jsxs)("div", {
                            className: a()(k().embedFooter, k().embedMargin),
                            children: [null != i ? (0, n.jsx)("img", {
                                alt: "",
                                className: k().embedFooterIcon,
                                src: i
                            }) : null, (0, n.jsxs)("span", {
                                className: k().embedFooterText,
                                children: [t.text, null != t.text && null != r ? (0, n.jsx)("span", {
                                    className: k().embedFooterSeparator,
                                    children: "•"
                                }) : null, null != r ? (0, c.Y4)(r) : null]
                            })]
                        })
                    }
                    if (null != r) return (0, n.jsx)("div", {
                        className: a()(k().embedFooter, k().embedMargin),
                        children: (0, n.jsx)("span", {
                            className: k().embedFooterText,
                            children: (0, c.Y4)(r)
                        })
                    })
                };
                i.renderMedia = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = this.props.embed,
                        r = this.state.isVisible;
                    switch (t.type) {
                        case b.hBH.GIFV:
                            return this.renderVideo({
                                gifv: !0,
                                hiddenSpoiler: e,
                                isVisible: r
                            });
                        case b.hBH.VIDEO:
                        default:
                            return null != t.video ? this.renderVideo({
                                gifv: !1,
                                hiddenSpoiler: e,
                                isVisible: r
                            }) : null != t.images ? this.renderImages({
                                hiddenSpoiler: e,
                                isVisible: r
                            }) : this.renderImage({
                                hiddenSpoiler: e,
                                isVisible: r,
                                image: t.image,
                                alt: t.rawTitle
                            })
                    }
                };
                i.renderAll = function() {
                    var e, t = this.props,
                        r = t.embed,
                        n = t.hideMedia,
                        i = this.state.isVisible,
                        l = this.renderProvider(i),
                        a = this.renderAuthor(i),
                        o = this.renderTitle(i);
                    switch (r.type) {
                        case b.hBH.IMAGE:
                        case b.hBH.VIDEO:
                        case b.hBH.GIFV:
                            break;
                        default:
                            e = this.renderDescription()
                    }
                    var s, u = this.renderFields();
                    n || (s = this.renderMedia(!i));
                    var d = this.renderFooter(),
                        c = null == s;
                    r.type === b.hBH.RICH && (c = null == r.video);
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
                        t = e.maxMediaWidth,
                        r = e.maxMediaHeight,
                        n = e.embed,
                        i = n.image,
                        l = n.images,
                        a = n.video,
                        o = n.type,
                        s = null != i ? i : a;
                    if (null != s) {
                        var u = (0, m.Tj)({
                            width: s.width,
                            height: s.height,
                            maxWidth: t,
                            maxHeight: r
                        }).width;
                        return o === b.hBH.VIDEO || u >= 300 ? u + 32 : o === b.hBH.RICH && void 0 !== l ? 520 : void 0
                    }
                };
                i.isInline = function() {
                    var e = this.props,
                        t = e.hideMedia,
                        r = e.embed;
                    return !t && (0, h.dY)(r)
                };
                i.renderSuppressButton = function(e) {
                    return (0, n.jsx)(s.Clickable, {
                        focusProps: {
                            offset: {
                                bottom: 4
                            }
                        },
                        className: k().embedSuppressButton,
                        onClick: e,
                        "aria-label": y.Z.Messages.SUPPRESS_ALL_EMBEDS,
                        children: (0, n.jsx)(C.Z, {
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
                        r = t.maxMediaWidth,
                        n = t.maxMediaHeight,
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
                                    maxWidth: r,
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
                        t = e.embed,
                        r = e.obscureReason,
                        i = e.className;
                    return null != t.provider && "Spotify" === t.provider.name ? (0, n.jsx)(J, {
                        embed: t,
                        className: i
                    }) : this.isInline() ? null != r ? (0, n.jsx)(I.Z, {
                        type: I.Z.Types.ATTACHMENT,
                        reason: r,
                        onReveal: this.onReveal,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!0),
                        children: this.renderInlineMediaEmbed
                    }) : this.renderInlineMediaEmbed() : null != r ? (0, n.jsx)(I.Z, {
                        type: I.Z.Types.EMBED,
                        onReveal: this.onReveal,
                        reason: r,
                        isSingleMosaicItem: !0,
                        containerStyles: this.getSpoilerStyles(!1),
                        children: this.renderEmbedContent
                    }) : this.renderEmbedContent()
                };
                return r
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
        716997: (e, t, r) => {
            r.d(t, {
                h: () => n
            });
            var n = r(667294).createContext((function() {
                return null
            }))
        },
        248691: (e, t, r) => {
            r.d(t, {
                q: () => n
            });

            function n(e) {
                var t = e.proxyURL,
                    r = e.url;
                return null != t && "" !== t ? t : r
            }
        },
        581373: (e, t, r) => {
            r.d(t, {
                j9: () => L,
                nP: () => H,
                Cx: () => T
            });
            var n = r(785893),
                i = (r(667294), r(809784)),
                l = r(304548),
                a = r(4629),
                o = r(174333),
                s = r(38736),
                u = r(652591),
                d = r(2590);

            function c(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        c(e, t, r[t])
                    }))
                }
                return e
            }

            function m(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
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

            function y() {
                f.setState((function(e) {
                    return {
                        selectedItemChanges: e.selectedItemChanges + 1
                    }
                }))
            }
            var g = r(570738),
                v = r(248691),
                x = r(493254),
                w = r(466868),
                j = r.n(w);

            function O(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }

            function I(e, t, r, n, i, l, a) {
                try {
                    var o = e[l](a),
                        s = o.value
                } catch (e) {
                    r(e);
                    return
                }
                o.done ? t(s) : Promise.resolve(s).then(n, i)
            }

            function P(e) {
                return function() {
                    var t = this,
                        r = arguments;
                    return new Promise((function(n, i) {
                        var l = e.apply(t, r);

                        function a(e) {
                            I(l, n, i, a, o, "next", e)
                        }

                        function o(e) {
                            I(l, n, i, a, o, "throw", e)
                        }
                        a(void 0)
                    }))
                }
            }

            function S(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function C() {
                C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                };
                return C.apply(this, arguments)
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))));
                    n.forEach((function(t) {
                        S(e, t, r[t])
                    }))
                }
                return e
            }

            function N(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function M(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != r) {
                        var n, i, l = [],
                            a = !0,
                            o = !1;
                        try {
                            for (r = r.call(e); !(a = (n = r.next()).done); a = !0) {
                                l.push(n.value);
                                if (t && l.length === t) break
                            }
                        } catch (e) {
                            o = !0;
                            i = e
                        } finally {
                            try {
                                a || null == r.return || r.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return l
                    }
                }(e, t) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return O(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(r);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var A = function(e, t) {
                var r, n, i, l, a = {
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
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
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
                                l = t.call(e, a)
                            } catch (e) {
                                l = [6, e];
                                n = 0
                            } finally {
                                r = i = 0
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
                    s = o.guild_id, c = o.channel_id, g = o.channel_type, v = t.length, f.setState(m(h({}, p), {
                        guildId: s,
                        channelId: c,
                        channelType: g,
                        numMediaItems: v
                    }))
                }
                var s, c, g, v;
                (0, l.openModalLazy)(P((function() {
                    var e, i;
                    return A(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return [4, Promise.all([r.e(40532), r.e(85157), r.e(62419), r.e(89975), r.e(84991)]).then(r.bind(r, 484991))];
                            case 1:
                                e = l.sent(), i = e.default;
                                return [2, function(e) {
                                    var r = C({}, e);
                                    return (0,
                                        n.jsx)(i, N(E({}, r), {
                                        onIndexChange: null != o ? y : void 0,
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

            function H(e) {
                var t = e.width,
                    r = e.height,
                    i = (0, v.q)(e);
                return {
                    component: (0, n.jsx)(g.y, {
                        width: t,
                        height: r,
                        original: e.url,
                        renderLinkComponent: function(e) {
                            return (0, n.jsx)(a.Z, E({}, e))
                        },
                        src: i
                    }),
                    width: t,
                    height: r,
                    src: i
                }
            }

            function _(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (x.IQ.test(e.filename)) {
                    var i, l, s = null !== (i = e.width) && void 0 !== i ? i : 0,
                        u = null !== (l = e.height) && void 0 !== l ? l : 0,
                        d = (0, v.q)({
                            proxyURL: e.proxy_url,
                            url: e.url
                        });
                    return {
                        component: (0, n.jsx)(g.y, {
                            width: s,
                            height: u,
                            original: e.url,
                            renderLinkComponent: function(e) {
                                return (0, n.jsx)(a.Z, E({}, e))
                            },
                            src: d,
                            shouldHideMediaOptions: t,
                            obscure: (0, o.KP)({
                                type: o.lJ.Attachment,
                                media: e
                            }, r)
                        }),
                        width: s,
                        height: u,
                        src: d
                    }
                }
                return null
            }

            function D(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
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
                        component: (0, n.jsx)(g.K, {
                            width: s,
                            height: u,
                            poster: c.toString(),
                            naturalWidth: s,
                            naturalHeight: u,
                            renderLinkComponent: function(e) {
                                return (0, n.jsx)(a.Z, E({}, e))
                            },
                            src: d,
                            fileSize: e.size,
                            fileName: e.filename,
                            shouldHideMediaOptions: t,
                            obscure: (0, o.KP)({
                                type: o.lJ.Attachment,
                                media: e
                            }, r)
                        }),
                        width: s,
                        height: u,
                        src: d
                    }
                }
                return null
            }

            function L(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    n = _(e, t, r);
                if (null != n) return n;
                var i = D(e, t, r);
                return null != i ? i : null
            }

            function T(e, t) {
                var r = {},
                    n = !0,
                    i = !1,
                    l = void 0;
                try {
                    for (var a, o = function() {
                            var n = M(a.value, 2),
                                i = n[0],
                                l = n[1];
                            r[l.src] = function(r) {
                                return k(r, e, i, t)
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
                return r
            }
        }
    }
]);