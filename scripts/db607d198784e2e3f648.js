"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [41433], {
        341433: (e, n, t) => {
            t.r(n);
            t.d(n, {
                default: () => m
            });
            var l = t(785893),
                a = (t(667294), t(809784)),
                s = t(70418),
                o = t(971402),
                r = t(73904),
                c = t(112897),
                d = t(446419),
                i = t(480657),
                u = t(269083),
                h = t(699050),
                M = t(979498),
                p = t(443),
                S = t(880994),
                g = t(473708);

            function m(e) {
                var n, t, m, Z, E = e.channel,
                    f = e.message,
                    x = e.target,
                    G = e.attachment,
                    _ = e.onSelect,
                    k = e.onHeightUpdate,
                    v = x;
                if (null != G) m = t = G.url;
                else
                    for (;
                        (0, a.k)(v);) {
                        (0, a.k)(v, HTMLImageElement) && null != v.src && (m = v.src);
                        if ((0, a.k)(v, HTMLAnchorElement) && null != v.href) {
                            t = v.href;
                            Z = v.textContent
                        }
                        v = v.parentNode
                    }
                var C = null === (n = document.getSelection()) || void 0 === n ? void 0 : n.toString(),
                    I = (0, d.Z)(C),
                    j = (0, u.Z)(C),
                    A = (0, h.Z)({
                        commandType: r.yU.MESSAGE,
                        commandTargetId: f.id,
                        channel: E,
                        guildId: void 0,
                        location: "SystemMessageContextMenu",
                        onShow: k
                    }),
                    T = (0, S.Z)(f, E),
                    b = (0, M.Z)(f, E),
                    y = (0, p.Z)(f, E),
                    L = (0, i.Z)(null != t ? t : m, Z),
                    w = (0, c.Z)({
                        id: f.id,
                        label: g.Z.Messages.COPY_ID_MESSAGE,
                        shiftId: "".concat(f.channel_id, "-").concat(f.id)
                    });
                return (0, l.jsxs)(s.Menu, {
                    navId: "message",
                    onClose: o.Zy,
                    "aria-label": g.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
                    onSelect: _,
                    children: [(0, l.jsx)(s.MenuGroup, {
                        children: I
                    }), (0, l.jsx)(s.MenuGroup, {
                        children: j
                    }), (0, l.jsxs)(s.MenuGroup, {
                        children: [A, T, b, y]
                    }), (0, l.jsx)(s.MenuGroup, {
                        children: L
                    }), (0, l.jsx)(s.MenuGroup, {
                        children: w
                    })]
                })
            }
        }
    }
]);