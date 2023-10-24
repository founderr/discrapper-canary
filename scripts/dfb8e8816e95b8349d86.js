"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71775], {
        71775: (e, n, u) => {
            u.d(n, {
                Z: () => r
            });
            var i = u(667294),
                t = u(202351),
                d = u(269300);

            function r(e, n) {
                var u = (0, t.Wu)([d.ZP], (function() {
                    var e, u;
                    return null !== (u = null === (e = d.ZP.getGuildScheduledEvent(n)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== u ? u : []
                }));
                return i.useMemo((function() {
                    return null == u ? void 0 : u.find((function(n) {
                        return n.event_exception_id === e
                    }))
                }), [u, e])
            }
        }
    }
]);