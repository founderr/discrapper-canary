"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [96404], {
        996404: (a, e, n) => {
            n.r(e);
            n.d(e, {
                default: () => r
            });
            var s = n(785893),
                t = (n(667294), n(70418)),
                c = n(971402),
                i = n(473708);
            const r = function(a) {
                var e = a.changeAvatarAction,
                    n = a.changeDecorationAction;
                return (0, s.jsxs)(t.Menu, {
                    onClose: c.Zy,
                    onSelect: c.Zy,
                    navId: "user-settings-change-avatar",
                    "aria-label": i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR,
                    children: [(0, s.jsx)(t.MenuItem, {
                        action: e,
                        id: "change-avatar",
                        label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR
                    }), (0, s.jsx)(t.MenuItem, {
                        action: n,
                        id: "change-avatar-decoration",
                        label: i.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                    })]
                })
            }
        }
    }
]);