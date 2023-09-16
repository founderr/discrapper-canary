"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [38634], {
        37093: (n, e, i) => {
            i.r(e);
            i.d(e, {
                default: () => o
            });
            var r = i(785893),
                t = (i(667294), i(441143)),
                a = i.n(t),
                l = i(318715),
                d = i(908741),
                u = i(472009),
                c = i(61209),
                h = i(688941);

            function o(n) {
                var e = n.windowKey,
                    i = n.channelId,
                    t = (0, l.ZP)([c.Z], (function() {
                        return c.Z.getChannel(i)
                    }));
                a()(null != t, "channel cannot be null for popout");
                return (0, r.jsx)(u.Z, {
                    withTitleBar: !0,
                    windowKey: e,
                    title: t.name,
                    children: (0, r.jsx)(d.Z.Provider, {
                        value: t.guild_id,
                        children: (0, r.jsx)(h.Z, {
                            channel: t
                        })
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=e0adea2b4a7a5171ba96.js.map