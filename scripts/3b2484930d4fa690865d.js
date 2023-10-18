"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [36164], {
        536164: (e, t, r) => {
            r.r(t);
            r.d(t, {
                default: () => j
            });
            var n = r(785893),
                o = (r(667294), r(70418)),
                i = r(318715),
                c = r(105783),
                l = r(473903),
                u = r(652591),
                a = r(2590),
                s = r(473708);

            function O(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function f(e, t) {
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

            function b(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function p(e) {
                var t = e.header,
                    r = e.children,
                    p = e.sku_id,
                    y = e.sku_name,
                    d = e.guild_id,
                    g = e.cancelLabel,
                    m = e.confirmLabel,
                    j = e.transitionState,
                    P = e.onClose,
                    _ = b(e, ["header", "children", "sku_id", "sku_name", "guild_id", "cancelLabel", "confirmLabel", "transitionState", "onClose"]),
                    h = (0, i.ZP)([l.default], (function() {
                        return l.default.getCurrentUser()
                    }));
                return (0, n.jsx)(o.ConfirmModal, f(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))));
                        n.forEach((function(t) {
                            O(e, t, r[t])
                        }))
                    }
                    return e
                }({
                    header: null != t ? t : s.Z.Messages.REPORT,
                    cancelText: null != g ? g : s.Z.Messages.CANCEL,
                    confirmText: null != m ? m : s.Z.Messages.REPORT,
                    onConfirm: function() {
                        u.default.track(a.rMx.TNS_SKU_REPORT_SUBMITTED, {
                            sku_id: p,
                            guild_id: d,
                            user_id: null == h ? void 0 : h.id
                        });
                        c.Z.show({
                            title: s.Z.Messages.SKU_REPORT_CONFIRMATION_HEADER,
                            body: s.Z.Messages.SKU_REPORT_CONFIRMATION_BODY.format({
                                skuName: y
                            })
                        })
                    },
                    transitionState: j,
                    onClose: P
                }, _), {
                    children: r
                }))
            }
            var y = r(348592);

            function d(e, t, r) {
                t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r;
                return e
            }

            function g(e, t) {
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

            function m(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || (o[r] = e[r])
                    }
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) {
                        r = i[n];
                        t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                    }
                }
                return o
            }

            function j(e) {
                var t = e.listing,
                    r = e.transitionState,
                    i = e.onClose,
                    c = m(e, ["listing", "transitionState", "onClose"]);
                return (0, n.jsx)(p, g(function(e) {
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
                }({
                    sku_id: t.id,
                    sku_name: t.name,
                    guild_id: t.guild_id,
                    header: s.Z.Messages.GUILD_SHOP_REPORT_MODAL_HEADER.format({
                        listingName: t.name
                    }),
                    transitionState: r,
                    onClose: i
                }, c), {
                    children: (0, n.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: s.Z.Messages.GUILD_SHOP_REPORT_MODAL_BODY.format({
                            listingName: t.name,
                            monetizationTermsUrl: y.Z.getArticleURL(a.BhN.CREATOR_TERMS),
                            communityGuidelinesUrl: a.EYA.GUIDELINES
                        })
                    })
                }))
            }
        }
    }
]);