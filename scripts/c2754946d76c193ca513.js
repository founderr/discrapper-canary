(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33235"], {
        361345: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7a280f89e607805835b8.png"
        },
        627771: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1998dcf226b71188b1bb.png"
        },
        202023: function(e, t, n) {
            "use strict";
            e.exports = n.p + "41fc6b68fd6791249f24.png"
        },
        626964: function(e, t, n) {
            "use strict";
            e.exports = n.p + "967ea9a6f0917ccea479.png"
        },
        937549: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5cf339c022ee100316f1.png"
        },
        674303: function(e, t, n) {
            "use strict";
            e.exports = n.p + "969507450abcd9cdd0f8.png"
        },
        475577: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c19dbbb190412b96403e.png"
        },
        365127: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6ca564c0842e4bf922a9.png"
        },
        711737: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d886ddab54ac6aa53568.png"
        },
        361784: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6ecfa3eb0eb955e3006a.png"
        },
        134647: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9d40ac01a4c79449fa1c.png"
        },
        856931: function(e, t, n) {
            "use strict";
            e.exports = n.p + "48956fccb1adf21b366d.png"
        },
        160864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                o = n("77078"),
                l = n("716849"),
                c = n("552917"),
                u = n("109036"),
                d = n("336522"),
                p = n("782340"),
                h = n("831839"),
                f = n("4184");

            function g() {
                return (0, r.jsxs)("div", {
                    children: [(0, r.jsx)("div", {
                        className: a(f.sparkleWhite, h.sparkleOne)
                    }), (0, r.jsx)("div", {
                        className: a(f.sparkleWhite, h.sparkleTwo)
                    }), (0, r.jsx)("div", {
                        className: a(f.lightWhite, h.lightOne)
                    }), (0, r.jsx)("div", {
                        className: a(f.lightWhite, h.lightTwo)
                    }), (0, r.jsx)("div", {
                        className: a(f.crossWhite, h.crossOne)
                    }), (0, r.jsx)("div", {
                        className: a(f.crossWhite, h.crossTwo)
                    }), (0, r.jsx)("div", {
                        className: a(f.popWhite, h.popOne)
                    })]
                })
            }
            class v extends s.Component {
                componentDidMount() {
                    let e = this.elementDOMRef.current;
                    null != e && (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1), e.addEventListener("dragover", this.handleDragOverZone, !1), e.addEventListener("dragleave", this.handleDragLeaveZone, !1), e.addEventListener("drop", this.handleDrop, !1))
                }
                componentWillUnmount() {
                    let e = this.elementDOMRef.current;
                    null != e && (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1), e.removeEventListener("dragover", this.handleDragOverZone, !1), e.removeEventListener("dragleave", this.handleDragLeaveZone, !1), e.removeEventListener("drop", this.handleDrop, !1)), clearTimeout(this.dragOverTimeout)
                }
                render() {
                    let {
                        title: e,
                        description: t,
                        icons: n,
                        style: s,
                        className: i
                    } = this.props;
                    return (0, r.jsx)("div", {
                        ref: this.elementDOMRef,
                        className: a(i, h.uploadArea, {
                            [h.droppable]: this.state.isDragging,
                            [h.uploadModalIn]: this.state.isOverZone
                        }),
                        style: s,
                        children: (0, r.jsxs)("div", {
                            className: h.uploadDropModal,
                            children: [this.state.isDragging && (0, r.jsx)(g, {}), (0, r.jsx)("div", {
                                className: h.bgScale
                            }), (0, r.jsxs)("div", {
                                className: h.inner,
                                children: [(0, r.jsx)(u.default, {
                                    icons: n
                                }), (0, r.jsx)("div", {
                                    className: h.title,
                                    children: e
                                }), (0, r.jsx)("div", {
                                    className: h.instructions,
                                    children: (0, r.jsx)("pre", {
                                        children: t
                                    })
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        isDragging: !1,
                        isOverZone: !1
                    }, this.dragOverTimeout = null, this.elementDOMRef = s.createRef(), this.isAllDropFiles = e => {
                        for (let n = 0; n < e.length; n++) try {
                            var t;
                            let r = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
                            if (r && !r.isFile) return !1
                        } catch (e) {
                            continue
                        }
                        return !0
                    }, this.preventUnwantedDrop = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = e.dataTransfer;
                        if (null == r) return !0;
                        let s = Array.isArray(r.types) && -1 !== r.types.indexOf("text/uri-list") && -1 === r.types.indexOf("application/json"),
                            i = null != r.items && !t.isAllDropFiles(r.items);
                        return !s && !i || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", n && (t.setState({
                            isDragging: !1
                        }), (0, d.openUploadError)({
                            title: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
                            help: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
                            icons: t.props.icons
                        })), !1)
                    }, this.handleDragOver = e => {
                        var t, n, r;
                        if (!this.preventUnwantedDrop(e)) return !1;
                        let s = e.dataTransfer;
                        if (null == s) return;
                        s.dropEffect = "copy";
                        let i = (0, o.hasModalOpen)(d.UPLOAD_ERROR_MODAL_KEY);
                        if (i && (0, o.closeModal)(d.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging) {
                            (0, l.maybeFetchPremiumLikelihood)(c.default);
                            let e = null === (r = this.elementDOMRef.current) || void 0 === r ? void 0 : r.ownerDocument.defaultView,
                                t = null != e && s.types instanceof e.DOMStringList && s.types.contains("application/x-moz-file");
                            (t || -1 !== s.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
                                isDragging: !0
                            })
                        }
                        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({
                                isDragging: !1
                            }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
                        }, 1e3)
                    }, this.handleDragOverZone = () => {
                        this.setState({
                            isOverZone: !0
                        })
                    }, this.handleDragLeaveZone = () => {
                        this.setState({
                            isOverZone: !1
                        })
                    }, this.handleDragLeave = e => {
                        this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
                    }, this.clearDragging = () => {
                        var e, t;
                        this.setState({
                            isDragging: !1,
                            isOverZone: !1
                        }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
                    }, this.handleDrop = e => {
                        if (!this.preventUnwantedDrop(e, !0)) return !1;
                        let t = e.dataTransfer;
                        if (null == t) return !0;
                        this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
                    }
                }
            }
            var O = v
        },
        645156: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M19.117 2a.5.5 0 0 1 .429.757L8.218 21.636a.75.75 0 0 1-.643.364H4.883a.5.5 0 0 1-.429-.757L15.782 2.364A.75.75 0 0 1 16.424 2h2.692Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        594203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ResizeOrientation: function() {
                    return i
                },
                default: function() {
                    return u
                }
            });
            var r, s, i, a, o = n("884691"),
                l = n("917351");

            function c(e) {
                return e === i.HORIZONTAL_LEFT || e === i.HORIZONTAL_RIGHT ? a.HORIZONTAL : a.VERTICAL
            }(r = i || (i = {}))[r.VERTICAL_TOP = 0] = "VERTICAL_TOP", r[r.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", r[r.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", r[r.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (s = a || (a = {}))[s.VERTICAL = 0] = "VERTICAL", s[s.HORIZONTAL = 1] = "HORIZONTAL";
            var u = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: s,
                    onElementResize: u,
                    onElementResizeEnd: d,
                    throttleDuration: p = 300,
                    orientation: h,
                    usePointerEvents: f = !1
                } = e, [g, v] = o.useState(!1), O = o.useRef(0), m = o.useRef(null == t ? 0 : t);
                return o.useLayoutEffect(() => {
                    if (!g || null == n.current) return;

                    function e(e) {
                        let t = c(h) === a.HORIZONTAL ? e.screenX : e.screenY,
                            n = h === i.VERTICAL_TOP || h === i.HORIZONTAL_LEFT,
                            o = (t - O.current) * (n ? -1 : 1),
                            u = m.current + o;
                        return (0, l.clamp)(u, null != s ? s : 0, null != r ? r : u)
                    }
                    let t = (0, l.throttle)(u, p),
                        o = r => {
                            if (null == n.current) return null;
                            let s = e(r),
                                i = c(h) === a.HORIZONTAL ? "width" : "height";
                            n.current.style[i] = "".concat(s, "px"), t(s)
                        },
                        E = t => {
                            v(!1);
                            let n = e(t);
                            u(n), null == d || d(n)
                        },
                        L = f ? "pointerup" : "mouseup",
                        D = f ? "pointermove" : "mousemove",
                        T = n.current.ownerDocument;
                    return T.addEventListener(L, E), T.addEventListener(D, o), () => {
                        T.removeEventListener(L, E), T.removeEventListener(D, o), t.cancel()
                    }
                }, [g, u, s, r, h, n, p, d, f]), o.useCallback(e => {
                    let t = c(h) === a.HORIZONTAL;
                    null != n.current && (m.current = t ? n.current.offsetWidth : n.current.offsetHeight), O.current = t ? e.screenX : e.screenY, v(!0)
                }, [h, n])
            }
        },
        882641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return f
                },
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
                o = n("301165"),
                l = n("77078"),
                c = n("913144"),
                u = n("474293"),
                d = n("958706"),
                p = n("782340"),
                h = n("505436");
            let f = {
                tension: 800,
                friction: 24
            };
            var g = function(e) {
                let {
                    tabIndex: t,
                    className: n,
                    renderButtonContents: i,
                    active: g,
                    onClick: v,
                    "aria-controls": O,
                    focusProps: m
                } = e, [E, L] = s.useState(!1), [D, T] = s.useState(0), I = E || g, x = (0, u.getClass)(h, "emojiButton", I ? "Hovered" : "Normal"), R = function(e) {
                    let t = -e % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(e / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(D), A = s.useCallback(() => {
                    if (I) return;
                    let e = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    L(!0), T(e), c.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [I, L, T]), N = s.useCallback(() => {
                    L(!1)
                }, [L]), b = s.useCallback(() => {
                    c.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                    })
                }, []);
                return (0, r.jsx)(l.Button, {
                    look: l.Button.Looks.BLANK,
                    size: l.Button.Sizes.NONE,
                    tabIndex: t,
                    className: a(x, n),
                    onMouseEnter: A,
                    onMouseOver: A,
                    onMouseLeave: N,
                    onFocus: b,
                    onClick: v,
                    "aria-label": p.default.Messages.SELECT_EMOJI,
                    "aria-controls": O,
                    "aria-expanded": g,
                    "aria-haspopup": "dialog",
                    focusProps: m,
                    children: null != i ? i() : (0, r.jsx)(o.Spring, {
                        config: f,
                        to: {
                            value: I ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, r.jsx)(o.animated.div, {
                                className: h.sprite,
                                style: {
                                    ...R,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")")),
                                    filter: t.to(e => "grayscale(".concat(100 - 100 * e, "%)"))
                                }
                            })
                        }
                    })
                })
            }
        },
        548775: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("469563"),
                i = n("645156"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        className: i,
                        foreground: a
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("rect", {
                                width: "16",
                                height: "16"
                            }), (0, r.jsx)("polygon", {
                                className: a,
                                fill: s,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, i.SlashIcon)
        }
    }
]);