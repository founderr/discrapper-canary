"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [58264], {
        595081: (e, n, a) => {
            a.r(n);
            a.d(n, {
                default: () => _
            });
            var d = a(785893),
                s = (a(667294), a(70418)),
                i = a(971402),
                l = a(61209),
                r = a(652591),
                t = a(60744),
                u = a(2590),
                c = a(473708);

            function _(e) {
                var n = e.summary,
                    a = e.onSelect;
                return (0, d.jsx)(s.Menu, {
                    onSelect: a,
                    navId: "channel-summaries-context-menu",
                    "aria-label": c.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: i.Zy,
                    children: (0, d.jsx)(s.MenuGroup, {
                        children: (0, d.jsx)(s.MenuItem, {
                            id: "delete-summary",
                            color: "danger",
                            label: c.Z.Messages.SUMMARIES_DELETE_SUMMARY,
                            action: function() {
                                (0, t.$l)(n);
                                var e = l.Z.getChannel(n.channelId);
                                r.default.track(u.rMx.SUMMARY_DELETED, {
                                    guild_id: null == e ? void 0 : e.guild_id,
                                    channel_id: null == e ? void 0 : e.id,
                                    summary_id: n.id,
                                    start_message_id: n.startId,
                                    end_message_id: n.endId
                                })
                            }
                        })
                    })
                })
            }
        }
    }
]);