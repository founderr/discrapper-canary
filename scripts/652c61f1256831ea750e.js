"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [7434], {
        407434: (e, r, t) => {
            t.r(r);
            t.d(r, {
                default: () => f
            });
            var n = t(785893),
                o = t(667294),
                c = t(70418),
                i = t(500912),
                u = t(473708);

            function l(e, r, t) {
                r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t;
                return e
            }

            function s(e, r) {
                r = null != r ? r : {};
                Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter((function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })));
                        t.push.apply(t, n)
                    }
                    return t
                }(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }));
                return e
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        c = Object.keys(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || (o[t] = e[t])
                    }
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < c.length; n++) {
                        t = c[n];
                        r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                }
                return o
            }

            function f(e) {
                var r = e.guildId,
                    t = e.onConfirm,
                    f = a(e, ["guildId", "onConfirm"]),
                    O = o.useCallback((function() {
                        (0, i.YO)(r);
                        null == t || t()
                    }), [t, r]);
                return (0, n.jsx)(c.ConfirmModal, s(function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = null != arguments[r] ? arguments[r] : {},
                            n = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))));
                        n.forEach((function(r) {
                            l(e, r, t[r])
                        }))
                    }
                    return e
                }({
                    header: u.Z.Messages.MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_TITLE,
                    confirmText: u.Z.Messages.OK,
                    cancelText: u.Z.Messages.CANCEL,
                    confirmButtonColor: c.Button.Colors.BRAND,
                    onConfirm: O
                }, f), {
                    children: (0, n.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: u.Z.Messages.MEMBERS_TABLE_NEW_MEMBER_TIMESTAMP_REFRESH_MODAL_DESCRIPTION
                    })
                }))
            }
        }
    }
]);