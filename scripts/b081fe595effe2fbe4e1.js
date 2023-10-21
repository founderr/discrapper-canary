"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [71775], {
        71775: (e, n, u) => {
            u.d(n, {
                Z: () => c
            });
            var t = u(667294),
                i = u(202351),
                d = u(269300);

            function c(e, n) {
                var u = (0, i.e7)([d.ZP], (function() {
                    return d.ZP.getGuildScheduledEvent(n)
                }), [n]);
                return t.useMemo((function() {
                    return null == u ? void 0 : u.guild_scheduled_event_exceptions.find((function(n) {
                        return n.event_exception_id === e
                    }))
                }), [null == u ? void 0 : u.guild_scheduled_event_exceptions, e])
            }
        }
    }
]);