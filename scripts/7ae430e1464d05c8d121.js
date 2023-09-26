"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [18079], {
        718079: (e, s, a) => {
            a.r(s);
            a.d(s, {
                default: () => h
            });
            var t = a(785893),
                o = (a(667294), a(882723)),
                l = a(652591),
                n = a(860123),
                i = a(2590),
                r = a(473708),
                d = a(598373),
                c = a.n(d);

            function h(e) {
                var s = e.transitionState,
                    a = e.onClose,
                    d = e.onDelete,
                    h = e.clip;
                return (0, t.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.SMALL,
                    transitionState: s,
                    className: c().modal,
                    children: [(0, t.jsxs)(o.ModalContent, {
                        className: c().modalContent,
                        children: [(0, t.jsxs)("div", {
                            className: c().header,
                            children: [(0, t.jsx)(o.Heading, {
                                className: c().title,
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: r.Z.Messages.CLIPS_DELETE_MODAL_TITLE
                            }), (0, t.jsx)(o.ModalCloseButton, {
                                onClick: a
                            })]
                        }), (0, t.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-normal",
                            className: c().body,
                            children: r.Z.Messages.CLIPS_DELETE_MODAL_SUBTITLE
                        })]
                    }), (0, t.jsx)(o.ModalFooter, {
                        children: (0, t.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            onClick: function() {
                                n.sS(h.filepath);
                                d();
                                l.default.track(i.rMx.CLIP_DELETED)
                            },
                            children: r.Z.Messages.CLIPS_DELETE_CLIP
                        })
                    })]
                })
            }
        }
    }
]);