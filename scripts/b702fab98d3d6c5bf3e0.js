"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [63369], {
        463369: (e, a, n) => {
            n.r(a);
            n.d(a, {
                default: () => C
            });
            var s = n(785893),
                t = (n(667294), n(318715)),
                r = n(70418),
                o = n(473903),
                i = n(749565),
                c = n(473708);

            function C(e) {
                var a = e.transitionState,
                    n = e.onClose,
                    C = e.userId,
                    d = e.onCancel,
                    l = e.confirmBlock,
                    u = (0, t.ZP)([o.default], (function() {
                        return o.default.getUser(C)
                    })),
                    f = i.ZP.useName(u);
                return (0, s.jsx)(r.ConfirmModal, {
                    header: c.Z.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                        name: f
                    }),
                    confirmText: c.Z.Messages.BLOCK,
                    cancelText: c.Z.Messages.CANCEL,
                    onConfirm: l,
                    onClose: n,
                    onCancel: d,
                    transitionState: a,
                    children: (0, s.jsx)(r.Text, {
                        variant: "text-md/normal",
                        children: c.Z.Messages.CONFIRM_USER_BLOCK_BODY.format({
                            name: f
                        })
                    })
                })
            }
        }
    }
]);