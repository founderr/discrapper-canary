"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [6825], {
        906825: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => _
            });
            var n = r(785893),
                o = (r(667294), r(482507)),
                c = r(318715),
                i = r(304548),
                u = r(971402),
                l = r(396043),
                s = r(682776),
                a = r(652591),
                O = r(176758),
                p = r(460124),
                b = r(2590),
                f = r(897196),
                y = r(473708);

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function P(e, t) {
                t = null != t ? t : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })));
                        r.push.apply(r, n)
                    }
                    return r
                }(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }));
                return e
            }

            function _(e) {
                var t = e.guild,
                    r = e.onSelect,
                    _ = (0, c.ZP)([s.Z], (function() {
                        return null != t && s.Z.can(b.Plq.ADMINISTRATOR, t)
                    }));
                return (0, n.jsx)(i.Menu, {
                    navId: "guild-shop-context",
                    "aria-label": y.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTION_MENU_LABEL,
                    onClose: u.Zy,
                    onSelect: r,
                    children: (0, n.jsx)(i.MenuGroup, {
                        children: (0, n.jsx)(i.MenuItem, {
                            id: "role-subscription-copy-link",
                            label: y.Z.Messages.COPY_LINK,
                            action: function() {
                                a.default.track(b.rMx.GUILD_SHOP_COPY_LINK, P(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {},
                                            n = Object.keys(r);
                                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                                        }))));
                                        n.forEach((function(t) {
                                            d(e, t, r[t])
                                        }))
                                    }
                                    return e
                                }({}, (0, l.hH)(t.id)), {
                                    is_admin_or_owner: _,
                                    copy_location: p.xv.CHANNEL_ROW_CONTEXT_MENU
                                }));
                                (0, o.J)((0, O.wR)(t.id, f.oC.GUILD_SHOP))
                            }
                        })
                    })
                })
            }
        }
    }
]);