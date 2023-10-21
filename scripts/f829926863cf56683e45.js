"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58499], {
        158499: (u, n, e) => {
            e.d(n, {
                Z: () => r
            });
            var i = e(202351),
                t = e(826945),
                d = e(567403);

            function r(u, n) {
                return (0, i.cj)([d.Z, t.Z], (function() {
                    var e = d.Z.getGuild(u),
                        i = null != e;
                    null == e && null != n && (e = t.Z.getCachedGuildByEventId(n));
                    return {
                        isMember: i,
                        guild: e
                    }
                }), [u, n])
            }
        }
    }
]);