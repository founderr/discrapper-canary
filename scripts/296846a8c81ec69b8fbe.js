(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["90823"], {
        38228: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return x
                }
            }), a("222007");
            var s = a("37983"),
                i = a("884691"),
                o = a("414456"),
                l = a.n(o),
                n = a("77078"),
                d = a("476765"),
                u = a("418298"),
                r = a("356581"),
                m = a("782340"),
                c = a("353096");
            let h = (0, d.uid)();

            function x(e) {
                let {
                    channelId: t,
                    answer: a,
                    index: o,
                    onAnswerTextChange: d,
                    transitionState: x,
                    onClose: C
                } = e, {
                    emoji: E,
                    hasUpload: L,
                    gifUrl: M,
                    gifFilename: g
                } = (0, r.default)({
                    channelId: t,
                    uploadId: a.uploadId,
                    image: a.image
                }), [j, p] = i.useState(a.text);
                return (0, s.jsxs)(n.ModalRoot, {
                    size: n.ModalSize.DYNAMIC,
                    className: l(c.modal, {
                        [c.hasImage]: L,
                        [c.hasEmoji]: null != E
                    }),
                    transitionState: x,
                    "aria-label": m.default.Messages.CREATE_POLL_EDIT_IMAGE_DESCRIPTION,
                    children: [(0, s.jsx)(u.PollCreationMediaPreview, {
                        hasUpload: L,
                        gifUrl: M,
                        gifFilename: g,
                        imageClassName: c.imagePreview,
                        emoji: E,
                        emojiClassName: c.emojiPreview
                    }), (0, s.jsxs)(n.ModalContent, {
                        className: c.content,
                        children: [(0, s.jsx)(n.FormTitle, {
                            tag: n.FormTitleTags.LABEL,
                            htmlFor: h,
                            children: m.default.Messages.CREATE_POLL_ALT_TEXT_LABEL
                        }), (0, s.jsx)(n.TextInput, {
                            id: h,
                            value: j,
                            inputClassName: c.input,
                            onChange: p,
                            autoFocus: !0
                        })]
                    }), (0, s.jsxs)(n.ModalFooter, {
                        className: c.footer,
                        children: [(0, s.jsx)(n.Button, {
                            look: n.ButtonLooks.FILLED,
                            size: n.Button.Sizes.MEDIUM,
                            onClick: () => {
                                null != j && d(j, o), C()
                            },
                            children: (0, s.jsx)(n.Text, {
                                variant: "text-md/semibold",
                                children: m.default.Messages.SAVE
                            })
                        }), (0, s.jsx)(n.Button, {
                            look: n.ButtonLooks.LINK,
                            size: n.Button.Sizes.MEDIUM,
                            onClick: C,
                            children: (0, s.jsx)(n.Text, {
                                variant: "text-md/semibold",
                                children: m.default.Messages.CANCEL
                            })
                        })]
                    })]
                })
            }
        }
    }
]);