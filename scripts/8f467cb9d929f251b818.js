(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3328"], {
        254398: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                makeTenorProxyURL: function() {
                    return o
                }
            }), l("511434"), l("313619"), l("654714"), l("287168"), l("956660"), l("222007"), l("70102");
            var a = l("49111");
            let n = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function o(e) {
                let t = new URL("".concat(window.location.protocol).concat(e)),
                    {
                        ASSET_ENDPOINT: l
                    } = window.GLOBAL_ENV;
                if (null == t.pathname.match(n)) throw Error("Unexpected Tenor GIF path.");
                let o = "".concat(a.Endpoints.TENOR_ASSET_PATH).concat(t.pathname);
                return "".concat(location.protocol).concat(l).concat(o)
            }
        },
        172402: function(e, t, l) {
            "use strict";
            var a, n;
            l.r(t), l.d(t, {
                PollGifUploadAttachmentStatus: function() {
                    return a
                }
            }), (n = a || (a = {})).PREPARING = "PREPARING", n.READY_TO_UPLOAD = "READY_TO_UPLOAD", n.ERROR = "ERROR"
        },
        104182: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("222007");
            var a = l("884691"),
                n = l("418009"),
                o = l("162426"),
                i = l("462495"),
                s = l("314743"),
                u = l("172402"),
                r = l("914271"),
                c = l("847511"),
                d = l("562228");

            function f(e, t) {
                let l = e.id,
                    f = a.useRef();
                null == f.current && (f.current = [(0, d.generateEmptyPollAnswer)(), (0, d.generateEmptyPollAnswer)()]);
                let [m, E] = a.useState(f.current), [h, x] = a.useState(""), [L, P] = a.useState(n.PollLayoutTypes.DEFAULT), [A, v] = a.useState(!1), g = m.filter(e => (0, d.isAnswerFilled)(e, L)), T = m.filter(e => (0, d.isIncompleteAnswer)(e, L)), C = h.length > 0 && g.length >= 1 && 0 === T.length, [I, {
                    loading: R
                }] = (0, o.default)(c.default.createPoll), y = a.useMemo(() => [...m].every(e => null != e.image || null != e.text && e.text.length > 0), [m]), S = m.length < 6, k = a.useCallback((e, t) => {
                    E(l => {
                        let a = [...l];
                        return a[t] = {
                            ...a[t],
                            text: e
                        }, a
                    })
                }, []), N = a.useCallback((e, t, l) => {
                    E(a => {
                        var n;
                        let o = [...a];
                        return o[t] = {
                            ...o[t],
                            image: e,
                            uploadId: null != l ? l : null === (n = o[t]) || void 0 === n ? void 0 : n.uploadId
                        }, o
                    })
                }, []), _ = a.useCallback((e, t, l) => {
                    var a, n;
                    let o = m[t],
                        i = null === (n = m[t]) || void 0 === n ? void 0 : null === (a = n.image) || void 0 === a ? void 0 : a.gifAttachmentState;
                    null != o && null != i && i.gifUrl !== l && r.removePollUploadAttachment(e, o.uploadId, (0, s.getFileNameFromGifUrl)(o.uploadId, i.gifUrl))
                }, [m]), j = a.useCallback(async (e, t, l) => {
                    var a, n;
                    let o = null !== (n = null === (a = m[t]) || void 0 === a ? void 0 : a.uploadId) && void 0 !== n ? n : (0, d.generateUploadId)();
                    _(e, t), N(p(l, u.PollGifUploadAttachmentStatus.PREPARING), t, o);
                    let i = await r.handlePollGifAttachmentAdd(e, o, l);
                    if (null == i) {
                        N(p(l, u.PollGifUploadAttachmentStatus.ERROR), t);
                        return
                    }
                    N(p(l, u.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), t)
                }, [m, N, _]), O = a.useCallback((e, t) => {
                    _(l, t), N({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, t)
                }, [l, N, _]), M = a.useCallback(e => {
                    E(t => {
                        let l = [...t];
                        return l.splice(e, 1), l
                    })
                }, []);
                a.useEffect(() => () => {
                    let e = i.default.getFiles(l);
                    (null == e || 0 === e.length) && r.removeAllPollUploadAttachments(l)
                }, [l]);
                let U = a.useCallback(async () => {
                    await I({
                        channel: e,
                        question: h,
                        answers: g,
                        allowMultiSelect: A,
                        layout: L,
                        onClose: t
                    })
                }, [h, g, A, I, e, L, t]);
                return {
                    answers: m,
                    question: h,
                    setQuestion: x,
                    selectedLayoutType: L,
                    setSelectedLayoutType: P,
                    allowMultiSelect: A,
                    setAllowMultiSelect: v,
                    canPost: C,
                    areAllAnswersFilled: y,
                    canAddMoreAnswers: S,
                    handleAnswerTextChange: k,
                    handleGifSelect: j,
                    handleEmojiSelect: O,
                    handleRemoveAnswer: M,
                    createPoll: U,
                    submitting: R
                }
            }

            function p(e, t) {
                return {
                    gifAttachmentState: {
                        status: t,
                        gifUrl: e
                    },
                    emoji: void 0,
                    stickerId: void 0
                }
            }
        },
        418298: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            }), l("222007"), l("511434"), l("313619"), l("654714"), l("287168"), l("956660");
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                i = l.n(o),
                s = l("77078"),
                u = l("446674"),
                r = l("418009"),
                c = l("430568"),
                d = l("858619"),
                f = l("474643"),
                p = l("585722"),
                m = l("46829"),
                E = l("818643"),
                h = l("172402"),
                x = l("264317"),
                L = l("782340"),
                P = l("177037"),
                A = l("877055");

            function v(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: o,
                    layout: i,
                    image: s
                } = e, h = null == s ? void 0 : s.emoji, x = (0, u.useStateFromStores)([p.default], () => p.default.getUpload(l, o, f.DraftType.Poll)), [L, A] = n.useState();
                n.useEffect(() => {
                    var e;
                    if ((null == x ? void 0 : null === (e = x.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let t = URL.createObjectURL(x.item.file);
                    return A(t), () => {
                        URL.revokeObjectURL(t)
                    }
                }, [null == x ? void 0 : null === (t = x.item) || void 0 === t ? void 0 : t.file]);
                let v = n.useMemo(() => {
                    if (null != x) return (0, a.jsx)("img", {
                        src: L,
                        className: i === r.PollLayoutTypes.DEFAULT ? P.gifDefault : P.gifJumbo,
                        alt: ""
                    });
                    if (null != h) return (0, a.jsx)(c.default, {
                        emojiId: h.id,
                        emojiName: h.type === d.EmojiTypes.UNICODE ? h.surrogates : h.name,
                        animated: h.animated,
                        className: P.expressionPickerButtonImage,
                        size: i === r.PollLayoutTypes.DEFAULT ? "default" : "jumbo"
                    });
                    let e = i === r.PollLayoutTypes.DEFAULT ? m.default : E.default;
                    return (0, a.jsx)(e, {
                        className: P.expressionPickerButtonImage
                    })
                }, [h, i, x, L]);
                return v
            }

            function g(e) {
                var t;
                let {
                    channelId: l,
                    uploadId: n,
                    buttonImage: o,
                    layout: i,
                    handleTogglePollExpressionPicker: u
                } = e, {
                    pollExpressionPickerId: c
                } = (0, x.default)(i), d = (null == o ? void 0 : null === (t = o.gifAttachmentState) || void 0 === t ? void 0 : t.status) === h.PollGifUploadAttachmentStatus.PREPARING;
                return d ? (0, a.jsx)(s.Spinner, {
                    className: i === r.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? P.spinnerWrapper : void 0
                }) : (0, a.jsx)(s.Clickable, {
                    onClick: u,
                    "aria-controls": c,
                    "aria-label": L.default.Messages.POLL_EXPRESSION_PICKER_BUTTON_ARIA,
                    className: i === r.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? P.imageExpressionPickerButton : void 0,
                    "data-menu-item": "true",
                    children: (0, a.jsx)(v, {
                        channelId: l,
                        layout: i,
                        image: o,
                        uploadId: n
                    })
                })
            }
            var T = n.forwardRef(function(e, t) {
                let {
                    channelId: l,
                    answer: n,
                    index: o,
                    layout: u,
                    onAnswerTextChange: c,
                    handleTogglePollExpressionPicker: d
                } = e, f = (0, a.jsx)(g, {
                    channelId: l,
                    buttonImage: n.image,
                    layout: u,
                    handleTogglePollExpressionPicker: d,
                    uploadId: n.uploadId
                });
                return (0, a.jsx)(a.Fragment, {
                    children: u === r.PollLayoutTypes.DEFAULT ? (0, a.jsxs)("li", {
                        className: i(A.formInput, P.defaultContainer),
                        ref: t,
                        children: [f, (0, a.jsx)(s.TextInput, {
                            placeholder: L.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                            value: n.text,
                            className: P.defaultTextInput,
                            inputClassName: i(A.formInput, P.defaultTextInput),
                            onChange: e => c(e, o)
                        })]
                    }) : (0, a.jsx)("li", {
                        className: P.imageOnlyContainer,
                        ref: t,
                        children: f
                    })
                })
            })
        },
        487757: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return T
                }
            }), l("424973");
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                i = l.n(o),
                s = l("627445"),
                u = l.n(s),
                r = l("77078"),
                c = l("418009"),
                d = l("476765"),
                f = l("164424"),
                p = l("562228"),
                m = l("104182"),
                E = l("418298"),
                h = l("612805"),
                x = l("53013"),
                L = l("264317"),
                P = l("186859"),
                A = l("782340"),
                v = l("877055");
            let g = (0, d.uid)();

            function T(e) {
                let {
                    channel: t,
                    transitionState: l,
                    onClose: o
                } = e, {
                    answers: s,
                    question: d,
                    setQuestion: T,
                    selectedLayoutType: C,
                    setSelectedLayoutType: I,
                    allowMultiSelect: R,
                    setAllowMultiSelect: y,
                    canPost: S,
                    areAllAnswersFilled: k,
                    canAddMoreAnswers: N,
                    handleAnswerTextChange: _,
                    handleEmojiSelect: j,
                    handleGifSelect: O,
                    createPoll: M,
                    submitting: U
                } = (0, m.default)(t, o), b = n.useRef([]), {
                    togglePollExpressionPicker: w,
                    lastActiveParentIndex: D
                } = (0, L.default)(C), G = n.useCallback(() => {
                    u(null != D, "Must have an active input");
                    let e = b.current[D];
                    return u(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [D]), F = n.useMemo(() => {
                    let e = {
                            layout: C,
                            onAnswerTextChange: _
                        },
                        l = s.map((l, n) => (0, a.jsx)(E.default, {
                            answer: l,
                            channelId: t.id,
                            index: n,
                            ref: e => b.current[n] = e,
                            handleTogglePollExpressionPicker: () => w(n),
                            ...e
                        }, n));
                    if (k && N) {
                        let n = s.length;
                        l.push((0, a.jsx)(E.default, {
                            answer: (0, p.generateEmptyPollAnswer)(),
                            channelId: t.id,
                            index: n,
                            ref: e => b.current[n] = e,
                            handleTogglePollExpressionPicker: () => w(n),
                            ...e
                        }, n))
                    }
                    return l
                }, [s, _, C, k, N, w, b, t.id]);
                return (0, a.jsxs)(r.ModalRoot, {
                    size: r.ModalSize.DYNAMIC,
                    className: v.container,
                    transitionState: l,
                    "aria-labelledby": g,
                    children: [(0, a.jsxs)(r.ModalHeader, {
                        className: v.header,
                        separator: !1,
                        children: [(0, a.jsx)(r.Heading, {
                            color: "interactive-normal",
                            variant: "text-md/normal",
                            className: v.headerText,
                            id: g,
                            children: A.default.Messages.CREATE_POLL_HEADING
                        }), (0, a.jsx)(r.ModalCloseButton, {
                            onClick: o
                        })]
                    }), (0, a.jsxs)(r.ModalContent, {
                        className: v.content,
                        children: [(0, a.jsx)(r.TextInput, {
                            placeholder: A.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: d,
                            inputClassName: v.formInput,
                            onChange: T,
                            autoFocus: !0
                        }), (0, a.jsx)(h.default, {
                            selectedLayoutType: C,
                            onSelectedLayoutType: I
                        }), (0, a.jsx)("ul", {
                            className: i(v.answerInputsContainer, C === c.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? v.imageOnlyContainer : v.defaultContainer),
                            "aria-label": A.default.Messages.POLL_OPTIONS_ARIA,
                            children: F
                        })]
                    }), (0, a.jsxs)(r.ModalFooter, {
                        className: v.footer,
                        children: [(0, a.jsx)(r.Checkbox, {
                            type: r.Checkbox.Types.INVERTED,
                            size: 18,
                            value: R,
                            onChange: (e, t) => y(t),
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "header-primary",
                                children: A.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, a.jsxs)(r.Button, {
                            look: r.ButtonLooks.FILLED,
                            size: r.Button.Sizes.MEDIUM,
                            className: v.postButton,
                            innerClassName: v.postButtonInner,
                            onClick: M,
                            submitting: U,
                            disabled: !S,
                            children: [(0, a.jsx)(f.default, {
                                className: v.postIcon
                            }), (0, a.jsx)(r.Text, {
                                variant: "text-md/semibold",
                                children: A.default.Messages.CREATE_POLL_POST
                            })]
                        })]
                    }), (0, a.jsx)(x.default, {
                        channel: t,
                        layout: C,
                        parentModalKey: P.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: j,
                        onGifSelect: O,
                        positionTargetRef: G,
                        lastActiveInputIndex: D
                    })]
                })
            }
        },
        612805: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return p
                }
            });
            var a = l("37983"),
                n = l("884691"),
                o = l("414456"),
                i = l.n(o),
                s = l("77078"),
                u = l("418009"),
                r = l("95689"),
                c = l("100300"),
                d = l("782340"),
                f = l("105335"),
                p = function(e) {
                    let {
                        selectedLayoutType: t,
                        onSelectedLayoutType: l
                    } = e, o = n.useMemo(() => [{
                        name: u.PollLayoutTypes.DEFAULT,
                        label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                        icon: c.default
                    }, {
                        name: u.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                        label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                        icon: r.default
                    }], []), p = e => {
                        l(e)
                    };
                    return (0, a.jsx)("div", {
                        className: f.container,
                        children: o.map(e => {
                            let l = e.name === t,
                                n = e.icon;
                            return (0, a.jsx)(s.Clickable, {
                                "aria-label": e.label,
                                role: "button",
                                onClick: () => p(e.name),
                                className: i(f.option, l && f.optionSelected),
                                children: (0, a.jsx)(n, {
                                    className: i(f.icon, l && f.iconSelected)
                                })
                            }, e.name)
                        })
                    })
                }
        },
        53013: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("37983"),
                n = l("884691"),
                o = l("627445"),
                i = l.n(o),
                s = l("241488"),
                u = l("254398"),
                r = l("264317");

            function c(e) {
                let {
                    channel: t,
                    layout: l,
                    parentModalKey: o,
                    lastActiveInputIndex: c,
                    onEmojiSelect: d,
                    onGifSelect: f,
                    positionTargetRef: p
                } = e, {
                    showPollExpressionPicker: m,
                    closePollExpressionPicker: E,
                    chatInputType: h
                } = (0, r.default)(l), x = n.useCallback(e => {
                    i(null != c, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && f(t.id, c, (0, u.makeTenorProxyURL)(e.gifSrc)), E()
                }, [E, c, f, t.id]), L = n.useCallback(e => {
                    i(null != c, "Expected to have an active input"), i(null != e, "Expected to have an emoji"), d(e, c), E()
                }, [c, d, E]), P = n.useCallback(() => {}, []);
                return m ? (0, a.jsx)(s.default, {
                    positionTargetRef: p,
                    type: h,
                    includeCreateEmojiButton: !1,
                    onSelectGIF: x,
                    onSelectEmoji: L,
                    onSelectSticker: P,
                    channel: t,
                    parentModalKey: o,
                    closeOnModalOuterClick: !0
                }) : null
            }
        },
        264317: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            }), l("222007");
            var a = l("884691"),
                n = l("16470"),
                o = l("418009"),
                i = l("850391"),
                s = l("538282"),
                u = l("13030");

            function r(e) {
                let [t, l] = a.useState(null), [r, c, d] = (0, s.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], n.default), f = i.ChatInputTypes.CREATE_POLL, p = null != r && null != c && c === f, m = e === o.PollLayoutTypes.DEFAULT ? u.ExpressionPickerViewType.EMOJI : u.ExpressionPickerViewType.GIF, E = a.useCallback(e => {
                    l(e), (0, s.toggleExpressionPicker)(m, f)
                }, [m, f]), h = a.useCallback(() => {
                    (0, s.closeExpressionPicker)(f)
                }, [f]);
                return a.useEffect(() => () => {
                    (0, s.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: p,
                    togglePollExpressionPicker: E,
                    closePollExpressionPicker: h,
                    pollExpressionPickerId: d,
                    chatInputType: f,
                    lastActiveParentIndex: t
                }
            }
        },
        818643: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                o = l("851298"),
                i = l("75196"),
                s = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        ...o
                    } = e;
                    return (0, a.jsxs)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.2899 2L6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V10.7101C21.3663 10.8987 20.695 11 20 11C16.134 11 13 7.86599 13 4C13 3.30503 13.1013 2.63371 13.2899 2ZM8 6C9.1032 6 10 6.8952 10 8C10 9.1056 9.1032 10 8 10C6.8944 10 6 9.1056 6 8C6 6.8952 6.8944 6 8 6ZM6 18L9 14L11 16L15 11L18 18H6Z",
                            fill: n
                        }), (0, a.jsx)("path", {
                            d: "M21 0V3H24V5H21V8H19V5H16V3H19V0H21Z",
                            fill: n
                        })]
                    })
                }, o.ImagePlusIcon, void 0, {
                    size: 24
                })
        }
    }
]);