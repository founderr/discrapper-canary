(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3328"], {
        254398: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                makeTenorProxyURL: function() {
                    return s
                }
            }), t("511434"), t("313619"), t("654714"), t("287168"), t("956660"), t("222007"), t("70102");
            var l = t("49111");
            let n = /^\/([a-zA-Z0-9-_]+\/[a-z0-9-]+\.gif)$/;

            function s(e) {
                let a = new URL("".concat(window.location.protocol).concat(e)),
                    {
                        ASSET_ENDPOINT: t
                    } = window.GLOBAL_ENV;
                if (null == a.pathname.match(n)) throw Error("Unexpected Tenor GIF path.");
                let s = "".concat(l.Endpoints.TENOR_ASSET_PATH).concat(a.pathname);
                return "".concat(location.protocol).concat(t).concat(s)
            }
        },
        172402: function(e, a, t) {
            "use strict";
            var l, n;
            t.r(a), t.d(a, {
                PollGifUploadAttachmentStatus: function() {
                    return l
                }
            }), (n = l || (l = {})).PREPARING = "PREPARING", n.READY_TO_UPLOAD = "READY_TO_UPLOAD", n.ERROR = "ERROR"
        },
        104182: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return c
                }
            }), t("222007");
            var l = t("884691"),
                n = t("418009"),
                s = t("162426"),
                i = t("314743"),
                o = t("172402"),
                r = t("914271"),
                u = t("847511"),
                d = t("562228");

            function c(e, a) {
                let t = e.id,
                    c = l.useRef();
                null == c.current && (c.current = [(0, d.generateEmptyPollAnswer)(), (0, d.generateEmptyPollAnswer)()]);
                let [f, m] = l.useState(c.current), [A, _] = l.useState(""), [L, p] = l.useState(n.PollLayoutTypes.DEFAULT), [T, x] = l.useState(!1), R = f.filter(e => (0, d.isAnswerFilled)(e, L)), g = f.filter(e => (0, d.isIncompleteAnswer)(e, L)), h = A.length > 0 && R.length >= 1 && 0 === g.length, [P, {
                    error: C,
                    loading: I
                }] = (0, s.default)(u.default.createPoll), N = f.length < 6, O = l.useCallback(() => {
                    N && m(e => [...e, (0, d.generateEmptyPollAnswer)()])
                }, [N]), v = l.useCallback((e, a) => {
                    m(t => {
                        let l = [...t];
                        return l[a] = {
                            ...l[a],
                            text: e
                        }, l
                    })
                }, []), M = l.useCallback((e, a, t) => {
                    m(l => {
                        var n;
                        let s = [...l];
                        return s[a] = {
                            ...s[a],
                            image: e,
                            uploadId: null != t ? t : null === (n = s[a]) || void 0 === n ? void 0 : n.uploadId
                        }, s
                    })
                }, []), j = l.useCallback((e, a, t) => {
                    var l, n;
                    let s = f[a],
                        o = null === (n = f[a]) || void 0 === n ? void 0 : null === (l = n.image) || void 0 === l ? void 0 : l.gifAttachmentState;
                    null != s && null != o && o.gifUrl !== t && r.removePollUploadAttachment(e, s.uploadId, (0, i.getFileNameFromGifUrl)(s.uploadId, o.gifUrl))
                }, [f]), S = l.useCallback(async (e, a, t) => {
                    var l, n;
                    let s = null !== (n = null === (l = f[a]) || void 0 === l ? void 0 : l.uploadId) && void 0 !== n ? n : (0, d.generateUploadId)();
                    j(e, a), M(E(t, o.PollGifUploadAttachmentStatus.PREPARING), a, s);
                    let i = await r.handlePollGifAttachmentAdd(e, s, t);
                    if (null == i) {
                        M(E(t, o.PollGifUploadAttachmentStatus.ERROR), a);
                        return
                    }
                    M(E(t, o.PollGifUploadAttachmentStatus.READY_TO_UPLOAD), a)
                }, [f, M, j]), b = l.useCallback((e, a) => {
                    j(t, a), M({
                        emoji: e,
                        stickerId: void 0,
                        gifAttachmentState: void 0
                    }, a)
                }, [t, M, j]), k = l.useCallback(e => {
                    m(a => {
                        let t = [...a];
                        return t.splice(e, 1), t
                    })
                }, []);
                l.useEffect(() => () => {
                    r.removeAllPollUploadAttachments(t)
                }, [t]);
                let y = l.useCallback(async () => {
                    await P({
                        channel: e,
                        question: A,
                        answers: R,
                        allowMultiSelect: T,
                        layout: L,
                        onClose: a
                    })
                }, [A, R, T, P, e, L, a]);
                return {
                    answers: f,
                    question: A,
                    setQuestion: _,
                    selectedLayoutType: L,
                    setSelectedLayoutType: p,
                    allowMultiSelect: T,
                    setAllowMultiSelect: x,
                    canPost: h,
                    canAddMoreAnswers: N,
                    handleAddAnswer: O,
                    handleAnswerTextChange: v,
                    handleGifSelect: S,
                    handleEmojiSelect: b,
                    handleRemoveAnswer: k,
                    createPoll: y,
                    submitting: I,
                    createPollError: C
                }
            }

            function E(e, a) {
                return {
                    gifAttachmentState: {
                        status: a,
                        gifUrl: e
                    },
                    emoji: void 0,
                    stickerId: void 0
                }
            }
        },
        418298: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                PollCreationMediaPreview: function() {
                    return g
                },
                default: function() {
                    return P
                }
            });
            var l = t("37983"),
                n = t("884691"),
                s = t("414456"),
                i = t.n(s),
                o = t("597287"),
                r = t("77078"),
                u = t("418009"),
                d = t("430568"),
                c = t("9560"),
                E = t("858619"),
                f = t("46829"),
                m = t("987772"),
                A = t("228220"),
                _ = t("562228"),
                L = t("356581"),
                p = t("264317"),
                T = t("782340"),
                x = t("177037"),
                R = t("877055");

            function g(e) {
                let {
                    hasUpload: a,
                    gifUrl: t,
                    gifFilename: n,
                    imageClassName: s,
                    emoji: i,
                    emojiClassName: o,
                    fallback: r
                } = e;
                return a ? (0, l.jsx)("img", {
                    src: t,
                    alt: n,
                    className: s
                }) : null != i ? (0, l.jsx)(d.default, {
                    className: o,
                    emojiId: i.id,
                    emojiName: i.type === E.EmojiTypes.UNICODE ? i.surrogates : i.name,
                    animated: i.animated
                }) : (0, l.jsx)(l.Fragment, {
                    children: r
                })
            }

            function h(e) {
                let {
                    channelId: a,
                    uploadId: t,
                    buttonImage: s,
                    layout: i,
                    handleTogglePollExpressionPicker: o,
                    answerIndex: d
                } = e, {
                    pollExpressionPickerId: c
                } = (0, p.default)(i), {
                    emoji: E,
                    isLoadingGif: m,
                    hasUpload: A,
                    gifUrl: R,
                    gifFilename: h
                } = (0, L.default)({
                    channelId: a,
                    uploadId: t,
                    image: s
                }), P = i === u.PollLayoutTypes.DEFAULT, C = n.useMemo(() => A ? T.default.Messages.CREATE_POLL_EDIT_IMAGE.format({
                    imageName: (0, _.filterOutUUID)(h),
                    answerNumber: d + 1
                }) : null != E ? T.default.Messages.CREATE_POLL_EDIT_IMAGE.format({
                    imageName: E.name,
                    answerNumber: d + 1
                }) : T.default.Messages.CREATE_POLL_ADD_IMAGE.format({
                    answerNumber: d + 1
                }), [A, E, d, h]);
                return m ? (0, l.jsx)(r.Spinner, {
                    className: i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? x.spinnerWrapper : void 0
                }) : (0, l.jsx)(r.Clickable, {
                    onClick: o,
                    "aria-controls": c,
                    "aria-label": C,
                    className: i === u.PollLayoutTypes.IMAGE_ONLY_ANSWERS ? x.expressionPickerButtonImageOnly : x.expressionPickerButtonDefault,
                    "data-menu-item": "true",
                    children: (0, l.jsx)(g, {
                        hasUpload: A,
                        gifUrl: R,
                        gifFilename: h,
                        imageClassName: P ? x.gifDefault : x.gifJumbo,
                        emoji: E,
                        emojiClassName: P ? x.emojiDefault : x.emojiJumbo,
                        fallback: (0, l.jsx)(f.default, {
                            className: P ? x.expressionPickerIconDefault : x.expressionPickerIconImageOnly
                        })
                    })
                })
            }
            var P = n.forwardRef(function(e, a) {
                let {
                    channelId: n,
                    answer: s,
                    index: d,
                    layout: E,
                    onAnswerTextChange: f,
                    handleTogglePollExpressionPicker: _,
                    onRemoveAnswer: L
                } = e, p = () => {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await t.el("38228").then(t.bind(t, "38228"));
                        return a => (0, l.jsx)(e, {
                            channelId: n,
                            answer: s,
                            index: d,
                            onAnswerTextChange: f,
                            ...a
                        })
                    })
                }, g = (0, l.jsx)(h, {
                    channelId: n,
                    buttonImage: s.image,
                    layout: E,
                    handleTogglePollExpressionPicker: _,
                    uploadId: s.uploadId,
                    answerIndex: d
                }), P = null != s.text && s.text.length > 0;
                return (0, l.jsx)(l.Fragment, {
                    children: E === u.PollLayoutTypes.DEFAULT ? (0, l.jsxs)("div", {
                        className: x.answerRow,
                        children: [(0, l.jsxs)("div", {
                            className: i(R.formInput, x.defaultContainer),
                            ref: a,
                            children: [g, (0, l.jsx)(r.TextInput, {
                                "aria-label": T.default.Messages.CREATE_POLL_ANSWER_INPUT_LABEL.format({
                                    answerNumber: d + 1
                                }),
                                placeholder: T.default.Messages.CREATE_POLL_ANSWER_PLACEHOLDER,
                                value: s.text,
                                className: x.defaultTextInput,
                                inputClassName: i(R.formInput, x.defaultTextInput),
                                onChange: e => f(e, d)
                            })]
                        }), (0, l.jsx)(r.Clickable, {
                            onClick: () => L(d),
                            className: x.removeAnswerButtonDefault,
                            "aria-label": T.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                answerNumber: d + 1
                            }),
                            children: (0, l.jsx)(A.default, {
                                className: x.trashIcon,
                                "aria-hidden": !0
                            })
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: x.imageOnlyContainer,
                        ref: a,
                        children: [(0, l.jsxs)("div", {
                            className: x.imagePreviewContainer,
                            children: [g, P && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(r.Text, {
                                    variant: "text-xs/semibold",
                                    className: x.altBadge,
                                    "aria-hidden": !0,
                                    children: T.default.Messages.IMAGE_ALT
                                }), (0, l.jsxs)("div", {
                                    onClick: p,
                                    children: [(0, l.jsx)(o.VisuallyHidden, {
                                        children: T.default.Messages.CREATE_POLL_ALT_TEXT_SCREEN_READER_HINT
                                    }), (0, l.jsx)(r.Text, {
                                        variant: "text-xxs/medium",
                                        className: x.altTextPreview,
                                        children: s.text
                                    })]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: x.imageOnlyAnswerActionBar,
                            children: [(0, l.jsx)(c.default, {
                                tooltip: T.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                                "aria-label": P ? T.default.Messages.CREATE_POLL_EDIT_ALT_ARIA_LABEL.format({
                                    answerNumber: d + 1
                                }) : T.default.Messages.CREATE_POLL_ADD_ALT_ARIA_LABEL.format({
                                    answerNumber: d + 1
                                }),
                                onClick: p,
                                children: (0, l.jsx)(m.default, {
                                    "aria-hidden": !0
                                })
                            }), (0, l.jsx)(c.default, {
                                tooltip: T.default.Messages.CREATE_POLL_REMOVE_ANSWER,
                                "aria-label": T.default.Messages.CREATE_POLL_REMOVE_ANSWER_A11Y.format({
                                    answerNumber: d + 1
                                }),
                                onClick: () => L(d),
                                dangerous: !0,
                                children: (0, l.jsx)(A.default, {
                                    "aria-hidden": !0
                                })
                            })]
                        })]
                    })
                })
            })
        },
        487757: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return P
                }
            });
            var l = t("37983"),
                n = t("884691"),
                s = t("414456"),
                i = t.n(s),
                o = t("627445"),
                r = t.n(o),
                u = t("77078"),
                d = t("418009"),
                c = t("476765"),
                E = t("151185"),
                f = t("562228"),
                m = t("104182"),
                A = t("418298"),
                _ = t("612805"),
                L = t("53013"),
                p = t("233365"),
                T = t("264317"),
                x = t("186859"),
                R = t("782340"),
                g = t("877055");
            let h = (0, c.uid)();

            function P(e) {
                let {
                    channel: a,
                    transitionState: t,
                    onClose: s
                } = e, {
                    answers: o,
                    question: c,
                    setQuestion: C,
                    selectedLayoutType: I,
                    setSelectedLayoutType: N,
                    allowMultiSelect: O,
                    setAllowMultiSelect: v,
                    canPost: M,
                    canAddMoreAnswers: j,
                    handleAddAnswer: S,
                    handleAnswerTextChange: b,
                    handleEmojiSelect: k,
                    handleGifSelect: y,
                    handleRemoveAnswer: D,
                    createPoll: w,
                    createPollError: U,
                    submitting: G
                } = (0, m.default)(a, s), B = n.useRef([]), {
                    togglePollExpressionPicker: F,
                    lastActiveParentIndex: W
                } = (0, T.default)(I), V = n.useCallback(() => {
                    r(null != W, "Must have an active input");
                    let e = B.current[W];
                    return r(null != e, "Expected a mounted answer input component"), e.getBoundingClientRect()
                }, [W]), Y = I === d.PollLayoutTypes.DEFAULT, H = n.useCallback(() => {
                    let e = c.length > 0 || o.some(e => (0, f.isAnswerFilled)(e, I));
                    e ? (0, p.default)({
                        title: R.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE,
                        body: R.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BODY,
                        cta: R.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_CTA_EXIT,
                        closeLabel: R.default.Messages.CREATE_POLL_MODAL_WARNING_UNSAVED_CHANGES_BACK_TO_EDITING,
                        onConfirm: () => {
                            s()
                        }
                    }) : s()
                }, [s, o, c, I]);
                return n.useEffect(() => {
                    (0, u.updateModal)(x.POLL_CREATION_MODAL_KEY, e => (0, l.jsx)(P, {
                        ...e,
                        channel: a
                    }), H)
                }, [H, a]), (0, l.jsxs)(u.ModalRoot, {
                    size: u.ModalSize.MEDIUM,
                    className: g.container,
                    transitionState: t,
                    "aria-labelledby": h,
                    children: [(0, l.jsxs)(u.ModalHeader, {
                        className: g.header,
                        separator: !1,
                        children: [(0, l.jsx)(u.Heading, {
                            color: "interactive-normal",
                            variant: "text-lg/semibold",
                            className: g.headerText,
                            id: h,
                            children: R.default.Messages.CREATE_POLL_HEADING
                        }), (0, l.jsx)(u.ModalCloseButton, {
                            onClick: s
                        })]
                    }), (0, l.jsxs)(u.ModalContent, {
                        className: g.content,
                        children: [null != U && (0, l.jsx)(u.FormErrorBlock, {
                            children: U.getAnyErrorMessage()
                        }), (0, l.jsx)(u.TextInput, {
                            "aria-label": R.default.Messages.CREATE_POLL_QUESTION_INPUT_LABEL,
                            placeholder: R.default.Messages.CREATE_POLL_QUESTION_PLACEHOLDER,
                            value: c,
                            inputClassName: g.questionInput,
                            onChange: C,
                            autoFocus: !0
                        }), (0, l.jsx)(_.default, {
                            selectedLayoutType: I,
                            onSelectedLayoutType: N
                        }), (0, l.jsxs)("div", {
                            className: i(g.answerInputsContainer, Y ? g.defaultContainer : g.imageOnlyContainer),
                            role: "group",
                            "aria-label": R.default.Messages.POLL_OPTIONS_ARIA,
                            children: [o.map((e, t) => (0, l.jsx)(A.default, {
                                answer: e,
                                channelId: a.id,
                                index: t,
                                ref: e => B.current[t] = e,
                                handleTogglePollExpressionPicker: () => F(t),
                                layout: I,
                                onAnswerTextChange: b,
                                onRemoveAnswer: D
                            }, e.uploadId)), j && (0, l.jsxs)(u.Clickable, {
                                className: Y ? g.addAnswerButtonDefault : g.addAnswerButtonImageOnly,
                                onClick: j ? S : void 0,
                                "aria-label": R.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON,
                                children: [(0, l.jsx)(E.default, {
                                    className: Y ? g.addAnswerIconDefault : g.addAnswerIconImageOnly
                                }), Y && (0, l.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: R.default.Messages.CREATE_POLL_ADD_ANSWER_BUTTON
                                })]
                            })]
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        className: g.footer,
                        children: [(0, l.jsx)(u.Checkbox, {
                            type: u.Checkbox.Types.INVERTED,
                            size: 24,
                            value: O,
                            onChange: (e, a) => v(a),
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/normal",
                                color: "text-normal",
                                children: R.default.Messages.CREATE_POLL_MULTIPLE_ANSWERS
                            })
                        }), (0, l.jsx)(u.Button, {
                            look: u.ButtonLooks.FILLED,
                            size: u.Button.Sizes.MEDIUM,
                            className: g.postButton,
                            onClick: w,
                            submitting: G,
                            disabled: !M,
                            children: (0, l.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: g.postButtonText,
                                children: R.default.Messages.CREATE_POLL_POST
                            })
                        })]
                    }), (0, l.jsx)(L.default, {
                        channel: a,
                        layout: I,
                        parentModalKey: x.POLL_CREATION_MODAL_KEY,
                        onEmojiSelect: k,
                        onGifSelect: y,
                        positionTargetRef: V,
                        lastActiveInputIndex: W
                    })]
                })
            }
        },
        612805: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return m
                }
            });
            var l = t("37983"),
                n = t("884691"),
                s = t("414456"),
                i = t.n(s),
                o = t("77078"),
                r = t("418009"),
                u = t("95689"),
                d = t("100300"),
                c = t("782340"),
                E = t("105335");

            function f(e) {
                let {
                    label: a,
                    isSelected: t,
                    onClick: n,
                    children: s
                } = e, r = (0, o.useRadioItem)({
                    isSelected: t,
                    label: a
                });
                return (0, l.jsx)(o.Clickable, {
                    ...r,
                    onClick: n,
                    className: i(E.option, t && E.optionSelected),
                    children: s
                })
            }
            var m = function(e) {
                let {
                    selectedLayoutType: a,
                    onSelectedLayoutType: t
                } = e, s = (0, o.useRadioGroup)({
                    orientation: "horizontal"
                }), i = n.useMemo(() => [{
                    name: r.PollLayoutTypes.DEFAULT,
                    label: c.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
                    icon: d.default
                }, {
                    name: r.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
                    label: c.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
                    icon: u.default
                }], []), m = e => {
                    t(e)
                };
                return (0, l.jsx)("div", {
                    className: E.container,
                    "aria-label": c.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
                    ...s,
                    children: i.map(e => {
                        let t = e.icon;
                        return (0, l.jsx)(f, {
                            label: e.label,
                            isSelected: e.name === a,
                            onClick: () => m(e.name),
                            children: (0, l.jsx)(t, {
                                className: E.icon
                            })
                        }, e.name)
                    })
                })
            }
        },
        53013: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return d
                }
            });
            var l = t("37983"),
                n = t("884691"),
                s = t("627445"),
                i = t.n(s),
                o = t("241488"),
                r = t("254398"),
                u = t("264317");

            function d(e) {
                let {
                    channel: a,
                    layout: t,
                    parentModalKey: s,
                    lastActiveInputIndex: d,
                    onEmojiSelect: c,
                    onGifSelect: E,
                    positionTargetRef: f
                } = e, {
                    showPollExpressionPicker: m,
                    closePollExpressionPicker: A,
                    chatInputType: _
                } = (0, u.default)(t), L = n.useCallback(e => {
                    i(null != d, "Expected to have an active input"), (null == e ? void 0 : e.gifSrc) != null && E(a.id, d, (0, r.makeTenorProxyURL)(e.gifSrc)), A()
                }, [A, d, E, a.id]), p = n.useCallback(e => {
                    i(null != d, "Expected to have an active input"), i(null != e, "Expected to have an emoji"), c(e, d), A()
                }, [d, c, A]), T = n.useCallback(() => {}, []);
                return m ? (0, l.jsx)(o.default, {
                    positionTargetRef: f,
                    type: _,
                    hideGifFavorites: !0,
                    includeCreateEmojiButton: !1,
                    onSelectGIF: L,
                    onSelectEmoji: p,
                    onSelectSticker: T,
                    channel: a,
                    parentModalKey: s,
                    closeOnModalOuterClick: !0
                }) : null
            }
        },
        233365: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return s
                }
            });
            var l = t("37983");
            t("884691");
            var n = t("551042");

            function s(e) {
                (0, n.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await t.el("553621").then(t.bind(t, "553621"));
                    return t => (0, l.jsx)(a, {
                        ...e,
                        ...t
                    })
                })
            }
        },
        356581: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return r
                }
            }), t("222007"), t("511434"), t("313619"), t("654714"), t("287168"), t("956660");
            var l = t("884691"),
                n = t("446674"),
                s = t("474643"),
                i = t("585722"),
                o = t("172402");

            function r(e) {
                var a, t;
                let {
                    channelId: r,
                    uploadId: u,
                    image: d
                } = e, c = null == d ? void 0 : d.emoji, E = (null == d ? void 0 : null === (a = d.gifAttachmentState) || void 0 === a ? void 0 : a.status) === o.PollGifUploadAttachmentStatus.PREPARING, f = (0, n.useStateFromStores)([i.default], () => i.default.getUpload(r, u, s.DraftType.Poll)), [m, A] = l.useState(), [_, L] = l.useState("");
                return l.useEffect(() => {
                    var e;
                    if ((null == f ? void 0 : null === (e = f.item) || void 0 === e ? void 0 : e.file) == null) return;
                    let a = URL.createObjectURL(f.item.file);
                    return A(a), L(f.item.file.name), () => {
                        URL.revokeObjectURL(a)
                    }
                }, [null == f ? void 0 : null === (t = f.item) || void 0 === t ? void 0 : t.file]), {
                    emoji: c,
                    isLoadingGif: E,
                    hasUpload: null != f,
                    gifUrl: m,
                    gifFilename: _
                }
            }
        },
        264317: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                default: function() {
                    return u
                }
            }), t("222007");
            var l = t("884691"),
                n = t("16470"),
                s = t("418009"),
                i = t("850391"),
                o = t("538282"),
                r = t("13030");

            function u(e) {
                let [a, t] = l.useState(null), [u, d, c, E] = (0, o.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.lastActiveView, e.pickerId], n.default), f = i.ChatInputTypes.CREATE_POLL, m = null != u && null != d && d === f, A = null != c ? c : e === s.PollLayoutTypes.DEFAULT ? r.ExpressionPickerViewType.EMOJI : r.ExpressionPickerViewType.GIF, _ = l.useCallback(e => {
                    t(e), (0, o.toggleExpressionPicker)(A, f)
                }, [A, f]), L = l.useCallback(() => {
                    (0, o.closeExpressionPicker)(f)
                }, [f]);
                return l.useEffect(() => () => {
                    (0, o.closeExpressionPicker)(f)
                }, [f]), {
                    showPollExpressionPicker: m,
                    togglePollExpressionPicker: _,
                    closePollExpressionPicker: L,
                    pollExpressionPickerId: E,
                    chatInputType: f,
                    lastActiveParentIndex: a
                }
            }
        }
    }
]);