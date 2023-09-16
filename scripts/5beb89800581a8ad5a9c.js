"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [68675, 41394], {
        753074: e => {
            var t = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                r = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, o, s) {
                if ("string" != typeof o) {
                    var n = Object.getOwnPropertyNames(o);
                    r && (n = n.concat(Object.getOwnPropertySymbols(o)));
                    for (var l = 0; l < n.length; ++l)
                        if (!(t[n[l]] || a[n[l]] || s && s[n[l]])) try {
                            e[n[l]] = o[n[l]]
                        } catch (e) {}
                }
                return e
            }
        },
        441394: (e, t, a) => {
            a.d(t, {
                Z: () => u
            });
            var r = a(785893),
                o = (a(667294), a(294184)),
                s = a.n(o),
                n = a(882723),
                l = a(473708),
                c = a(165580),
                p = a.n(c),
                i = Object.freeze({
                    DEFAULT: p().default,
                    FILLED: p().filled
                });

            function u(e) {
                var t = e.className,
                    a = e.onClick,
                    o = e["aria-label"],
                    c = e.look,
                    u = void 0 === c ? i.DEFAULT : c;
                return (0, r.jsx)(n.Clickable, {
                    "aria-label": null != o ? o : l.Z.Messages.REMOVE,
                    className: s()(p().button, u, t),
                    onClick: a
                })
            }
            u.Looks = i
        }
    }
]);
//# sourceMappingURL=5beb89800581a8ad5a9c.js.map