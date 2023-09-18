"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6825], {
        906825: (e, n, s) => {
            s.r(n);
            s.d(n, {
                default: () => r
            });
            var i = s(785893),
                o = (s(667294), s(482507)),
                a = s(882723),
                c = s(971402),
                t = s(176758),
                u = s(897196),
                l = s(473708);

            function r(e) {
                var n = e.guild,
                    s = e.onSelect;
                return (0, i.jsx)(a.Menu, {
                    navId: "guild-shop-context",
                    "aria-label": l.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
                    onClose: c.Zy,
                    onSelect: s,
                    children: (0, i.jsx)(a.MenuGroup, {
                        children: (0, i.jsx)(a.MenuItem, {
                            id: "role-subscription-copy-link",
                            label: l.Z.Messages.COPY_LINK,
                            action: function() {
                                (0, o.J)((0, t.wR)(n.id, u.oC.GUILD_SHOP))
                            }
                        })
                    })
                })
            }
        }
    }
]);