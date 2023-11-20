(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["48820"], {
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
                    return m
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("77078"),
                o = n("716849"),
                c = n("552917"),
                u = n("109036"),
                d = n("336522"),
                p = n("782340"),
                h = n("831839"),
                f = n("4184");

            function v() {
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
            class g extends i.Component {
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
                        style: i,
                        className: s
                    } = this.props;
                    return (0, r.jsx)("div", {
                        ref: this.elementDOMRef,
                        className: a(s, h.uploadArea, {
                            [h.droppable]: this.state.isDragging,
                            [h.uploadModalIn]: this.state.isOverZone
                        }),
                        style: i,
                        children: (0, r.jsxs)("div", {
                            className: h.uploadDropModal,
                            children: [this.state.isDragging && (0, r.jsx)(v, {}), (0, r.jsx)("div", {
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
                    }, this.dragOverTimeout = null, this.elementDOMRef = i.createRef(), this.isAllDropFiles = e => {
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
                        let i = Array.isArray(r.types) && -1 !== r.types.indexOf("text/uri-list") && -1 === r.types.indexOf("application/json"),
                            s = null != r.items && !t.isAllDropFiles(r.items);
                        return !i && !s || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", n && (t.setState({
                            isDragging: !1
                        }), (0, d.openUploadError)({
                            title: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_TITLE,
                            help: p.default.Messages.UPLOAD_AREA_INVALID_FILE_TYPE_HELP,
                            icons: t.props.icons
                        })), !1)
                    }, this.handleDragOver = e => {
                        var t, n, r;
                        if (!this.preventUnwantedDrop(e)) return !1;
                        let i = e.dataTransfer;
                        if (null == i) return;
                        i.dropEffect = "copy";
                        let s = (0, l.hasModalOpen)(d.UPLOAD_ERROR_MODAL_KEY);
                        if (s && (0, l.closeModal)(d.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging) {
                            (0, o.maybeFetchPremiumLikelihood)(c.default);
                            let e = null === (r = this.elementDOMRef.current) || void 0 === r ? void 0 : r.ownerDocument.defaultView,
                                t = null != e && i.types instanceof e.DOMStringList && i.types.contains("application/x-moz-file");
                            (t || -1 !== i.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
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
            var m = g
        },
        85941: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ListBulletsIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM2 20a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM9 3a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H9ZM8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM9 19a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H9Z",
                        className: l
                    })
                })
            }
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
            var i = n("669491"),
                s = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(o),
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
                        className: l
                    })
                })
            }
        },
        594203: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ResizeOrientation: function() {
                    return r
                },
                default: function() {
                    return u
                }
            }), n("222007");
            var r, i, s, a, l = n("884691"),
                o = n("917351");

            function c(e) {
                return 2 === e || 3 === e ? 1 : 0
            }(s = r || (r = {}))[s.VERTICAL_TOP = 0] = "VERTICAL_TOP", s[s.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", s[s.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", s[s.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (a = i || (i = {}))[a.VERTICAL = 0] = "VERTICAL", a[a.HORIZONTAL = 1] = "HORIZONTAL";
            var u = e => {
                let {
                    initialElementDimension: t,
                    resizableDomNodeRef: n,
                    maxDimension: r,
                    minDimension: i,
                    onElementResize: s,
                    onElementResizeEnd: a,
                    throttleDuration: u = 300,
                    orientation: d,
                    usePointerEvents: p = !1
                } = e, [h, f] = l.useState(!1), v = l.useRef(0), g = l.useRef(null == t ? 0 : t);
                return l.useLayoutEffect(() => {
                    if (!h || null == n.current) return;

                    function e(e) {
                        let t = 1 === c(d) ? e.screenX : e.screenY,
                            n = 0 === d || 2 === d,
                            s = (t - v.current) * (n ? -1 : 1),
                            a = g.current + s;
                        return (0, o.clamp)(a, null != i ? i : 0, null != r ? r : a)
                    }
                    let t = (0, o.throttle)(s, u),
                        l = r => {
                            if (null == n.current) return null;
                            let i = e(r),
                                s = 1 === c(d) ? "width" : "height";
                            n.current.style[s] = "".concat(i, "px"), t(i)
                        },
                        m = t => {
                            f(!1);
                            let n = e(t);
                            s(n), null == a || a(n)
                        },
                        x = p ? "pointerup" : "mouseup",
                        j = p ? "pointermove" : "mousemove",
                        E = n.current.ownerDocument;
                    return E.addEventListener(x, m), E.addEventListener(j, l), () => {
                        E.removeEventListener(x, m), E.removeEventListener(j, l), t.cancel()
                    }
                }, [h, s, i, r, d, n, u, a, p]), l.useCallback(e => {
                    let t = 1 === c(d);
                    null != n.current && (g.current = t ? n.current.offsetWidth : n.current.offsetHeight), v.current = t ? e.screenX : e.screenY, f(!0)
                }, [d, n])
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691");
            let i = r.createContext(void 0);
            var s = i
        },
        882641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return f
                },
                default: function() {
                    return v
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("301165"),
                o = n("77078"),
                c = n("913144"),
                u = n("474293"),
                d = n("958706"),
                p = n("782340"),
                h = n("505436");
            let f = {
                tension: 800,
                friction: 24
            };
            var v = function(e) {
                let {
                    tabIndex: t,
                    className: n,
                    renderButtonContents: s,
                    active: v,
                    onClick: g,
                    "aria-controls": m,
                    focusProps: x
                } = e, [j, E] = i.useState(!1), [D, O] = i.useState(0), b = j || v, L = (0, u.getClass)(h, "emojiButton", b ? "Hovered" : "Normal"), C = function(e) {
                    let t = -e % d.EmojiSprites.PickerPerRow * 22,
                        n = -(22 * Math.floor(e / d.EmojiSprites.PickerPerRow));
                    return {
                        backgroundPosition: "".concat(t, "px ").concat(n, "px"),
                        backgroundSize: "".concat(22 * d.EmojiSprites.PickerPerRow, "px ").concat(22 * Math.ceil(d.EmojiSprites.PickerCount / d.EmojiSprites.PickerPerRow), "px")
                    }
                }(D), N = i.useCallback(() => {
                    if (b) return;
                    let e = Math.floor(Math.random() * d.EmojiSprites.PickerCount);
                    E(!0), O(e), c.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonMouseEntered
                    })
                }, [b, E, O]), M = i.useCallback(() => {
                    E(!1)
                }, [E]), I = i.useCallback(() => {
                    c.default.dispatch({
                        type: "EMOJI_INTERACTION_INITIATED",
                        interaction: d.EmojiInteractionPoint.EmojiButtonFocused
                    })
                }, []);
                return (0, r.jsx)(o.Button, {
                    look: o.Button.Looks.BLANK,
                    size: o.Button.Sizes.NONE,
                    tabIndex: t,
                    className: a(L, n),
                    onMouseEnter: N,
                    onMouseOver: N,
                    onMouseLeave: M,
                    onFocus: I,
                    onClick: g,
                    "aria-label": p.default.Messages.SELECT_EMOJI,
                    "aria-controls": m,
                    "aria-expanded": v,
                    "aria-haspopup": "dialog",
                    focusProps: x,
                    children: null != s ? s() : (0, r.jsx)(l.Spring, {
                        config: f,
                        to: {
                            value: b ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, r.jsx)(l.animated.div, {
                                className: h.sprite,
                                style: {
                                    ...C,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")")),
                                    filter: t.to(e => "grayscale(".concat(100 - 100 * e, "%)"))
                                }
                            })
                        }
                    })
                })
            }
        },
        818643: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("851298"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: i
                        }), (0, r.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: i
                        })]
                    })
                }, s.ImagePlusIcon, void 0, {
                    size: 24
                })
        },
        100300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("85941"),
                a = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M1.25 0.5H4.25C4.66475 0.5 5 0.836 5 1.25V4.25C5 4.664 4.66475 5 4.25 5H1.25C0.836 5 0.5 4.664 0.5 4.25V1.25C0.5 0.836 0.836 0.5 1.25 0.5ZM1.25 5.75H4.25C4.66475 5.75 5 6.086 5 6.5V9.5C5 9.914 4.66475 10.25 4.25 10.25H1.25C0.836 10.25 0.5 9.914 0.5 9.5V6.5C0.5 6.086 0.836 5.75 1.25 5.75ZM4.25 11H1.25C0.836 11 0.5 11.336 0.5 11.75V14.75C0.5 15.164 0.836 15.5 1.25 15.5H4.25C4.66475 15.5 5 15.164 5 14.75V11.75C5 11.336 4.66475 11 4.25 11ZM6.5 2H15.5V3.5H6.5V2ZM15.5 7.25H6.5V8.75H15.5V7.25ZM6.5 12.5H15.5V14H6.5V12.5Z",
                            fill: i
                        })
                    })
                }, s.ListBulletsIcon, void 0, {
                    size: 16
                })
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
            var i = n("469563"),
                s = n("645156"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        className: s,
                        foreground: a
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: s,
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
                                fill: i,
                                points: "12 2.32 10.513 2 4 13.68 5.487 14"
                            })]
                        })
                    })
                }, s.SlashIcon, void 0, {
                    size: 16
                })
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return v
                },
                Divider: function() {
                    return g
                },
                default: function() {
                    return x
                }
            });
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                a = n.n(s),
                l = n("353386"),
                o = n("394846"),
                c = n("77078"),
                u = n("597590"),
                d = n("980428"),
                p = n("772280"),
                h = n("587974"),
                f = n("133934");
            let v = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: i,
                        selected: s = !1,
                        disabled: l = !1,
                        showBadge: o = !1,
                        color: u,
                        foreground: d,
                        background: p,
                        icon: v,
                        onClick: g,
                        onContextMenu: m,
                        tooltip: x = null,
                        tooltipColor: j,
                        tooltipPosition: E = "bottom",
                        hideOnClick: D = !0,
                        role: O,
                        "aria-label": b,
                        "aria-hidden": L,
                        "aria-checked": C,
                        "aria-expanded": N,
                        "aria-haspopup": M
                    } = e, I = (0, r.jsx)(v, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: a(n, f.icon),
                        foreground: null != d ? d : void 0,
                        background: null != p ? p : void 0,
                        color: u
                    }), T = b;
                    return null == T && "string" == typeof x && (T = x), (0, r.jsx)(c.Tooltip, {
                        text: x,
                        color: j,
                        position: E,
                        hideOnClick: D,
                        children: e => {
                            let {
                                onMouseEnter: x,
                                onMouseLeave: j,
                                onFocus: E,
                                onBlur: D
                            } = e;
                            return null == g ? (0, r.jsx)("div", {
                                className: a(t, [f.iconWrapper]),
                                children: (0, r.jsx)(v, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: a(n, f.icon),
                                    foreground: null != d ? d : void 0,
                                    background: null != p ? p : void 0,
                                    color: u,
                                    "aria-hidden": L,
                                    onMouseEnter: x,
                                    onMouseLeave: j,
                                    onFocus: E,
                                    onBlur: D
                                })
                            }) : (0, r.jsxs)(c.Clickable, {
                                tag: "div",
                                onClick: l ? void 0 : g,
                                onContextMenu: l ? void 0 : m,
                                onMouseEnter: x,
                                onMouseLeave: j,
                                onFocus: E,
                                onBlur: D,
                                className: a(t, {
                                    [f.iconWrapper]: !0,
                                    [f.clickable]: !l && null != g,
                                    [f.selected]: s
                                }),
                                role: O,
                                "aria-label": T,
                                "aria-hidden": L,
                                "aria-checked": C,
                                "aria-haspopup": M,
                                "aria-expanded": N,
                                tabIndex: l || null == g ? -1 : 0,
                                children: [o ? (0, r.jsx)(h.default, {
                                    mask: h.default.Masks.HEADER_BAR_BADGE,
                                    children: I
                                }) : I, o ? (0, r.jsx)("span", {
                                    className: f.iconBadge
                                }) : null, i]
                            })
                        }
                    })
                },
                g = e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: a(f.divider, t)
                    })
                },
                m = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: s,
                        childrenBottom: d,
                        toolbar: p,
                        onDoubleClick: h,
                        "aria-label": v,
                        "aria-labelledby": g,
                        role: m,
                        scrollable: x,
                        transparent: j = !1
                    } = e, E = i.useRef(null), D = i.useContext(u.default);
                    return (0, r.jsx)("section", {
                        className: a(t, f.container, {
                            [f.themed]: !j,
                            [f.transparent]: j,
                            [f.themedMobile]: o.isMobile
                        }),
                        "aria-label": v,
                        "aria-labelledby": g,
                        role: m,
                        ref: E,
                        children: (0, r.jsxs)(c.FocusRingScope, {
                            containerRef: E,
                            children: [(0, r.jsxs)("div", {
                                className: f.upperContainer,
                                children: [(0, r.jsxs)("div", {
                                    className: a(f.children, n, {
                                        [f.scrollable]: x
                                    }),
                                    onDoubleClick: h,
                                    children: [o.isMobile && null != D ? (0, r.jsx)(l.default, {
                                        onClick: D,
                                        className: f.hamburger
                                    }) : null, s]
                                }), null != p ? (0, r.jsx)("div", {
                                    className: f.toolbar,
                                    children: p
                                }) : null]
                            }), d]
                        })
                    })
                };
            m.Icon = v, m.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: i,
                    onContextMenu: s,
                    onClick: l,
                    id: o,
                    muted: u = !1,
                    level: d = 1
                } = e, p = (0, r.jsx)(c.HeadingLevel, {
                    forceLevel: d,
                    children: (0, r.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        color: u ? "header-secondary" : void 0,
                        className: a(t, f.title),
                        id: o,
                        children: i
                    })
                });
                return null != l ? (0, r.jsx)(c.Clickable, {
                    onClick: l,
                    onContextMenu: s,
                    className: a(n, f.titleWrapper),
                    children: p
                }) : (0, r.jsx)("div", {
                    className: a(n, f.titleWrapper),
                    onContextMenu: s,
                    children: p
                })
            }, m.Divider = g, m.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, r.jsx)(p.default, {
                    className: f.caret
                }) : (0, r.jsx)(d.default, {
                    className: f.caret
                })
            };
            var x = m
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("580420"),
                s = n.n(i),
                a = n("249907"),
                l = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...i
                    } = e;
                    return (0, r.jsxs)("button", {
                        type: "button",
                        className: s(a.btnHamburger, {
                            [a.btnHamburgerOpen]: t
                        }, n),
                        ...i,
                        children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
                    })
                }
        }
    }
]);