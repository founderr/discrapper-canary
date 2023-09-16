"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [53572], {
        653572: (e, t, n) => {
            n.r(t);
            n.d(t, {
                default: () => s
            });
            var a = n(785893),
                u = (n(667294), n(882723)),
                c = n(971402),
                l = n(997309),
                r = n(473708);

            function s(e) {
                var t = e.target,
                    n = e.onSelect,
                    s = (0, l.Z)({
                        type: t.getAttribute("data-type"),
                        packId: t.getAttribute("data-pack-id")
                    });
                return (0, a.jsx)(u.Menu, {
                    navId: "expression-picker",
                    onClose: c.Zy,
                    "aria-label": r.Z.Messages.EXPRESSION_PICKER_ACTIONS_MENU_LABEL,
                    onSelect: n,
                    className: "context-menu",
                    children: (0, a.jsx)(u.MenuGroup, {
                        children: s
                    })
                })
            }
        },
        997309: (e, t, n) => {
            n.d(t, {
                Z: () => p
            });
            var a = n(785893),
                u = (n(667294), n(202351)),
                c = n(882723),
                l = n(897436),
                r = n(768834),
                s = n(690296),
                d = n(879913),
                i = n(473708);

            function p(e) {
                var t = e.type,
                    n = e.packId,
                    p = (0, u.e7)([s.Z], (function() {
                        return null !== n && null != s.Z.getPackByPackId(n)
                    }));
                return (0, l.Xx)({
                    autoTrackExposure: !1
                }).viewAndUseEnabled && p ? t !== d.S.EMOJI && t !== d.S.PACK_ICON || null === n ? null : (0, a.jsx)(c.MenuItem, {
                    id: "uncollect",
                    action: function() {
                        null != n && (0, r.Y5)({
                            packId: n
                        })
                    },
                    label: i.Z.Messages.INVENTORY_REMOVE_PACK
                }) : null
            }
        }
    }
]);
//# sourceMappingURL=506d9ffacce574809436.js.map