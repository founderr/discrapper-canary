"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [20089], {
        502575: (n, e, t) => {
            t.d(e, {
                Z: () => M,
                W: () => _
            });
            var r = t(785893),
                a = (t(667294), t(730381)),
                i = t.n(a),
                o = t(202351),
                s = t(882723),
                u = t(931893),
                d = t(229633),
                c = t(489981),
                l = t(343318),
                m = t(431089),
                E = t(473708);

            function M(n) {
                var e = d.Z.useExperiment({
                        location: "a65531_1"
                    }, {
                        autoTrackExposure: !1
                    }).showReminders,
                    t = (0, o.e7)([c.Z], (function() {
                        return null != c.Z.getMessageReminders().find((function(e) {
                            return e.messageId === n.id
                        }))
                    })),
                    a = _(n, (function(e) {
                        return (0, u.BW)(n, i()().add(e, "millisecond").toDate())
                    }));
                return e ? (0, r.jsx)(s.MenuItem, {
                    id: "mark-todo",
                    label: t ? E.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : E.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
                    icon: t ? m.Z : void 0,
                    action: function() {
                        return t ? (0, u.Kp)(n.id) : (0, u.BW)(n)
                    },
                    children: t ? null : a
                }) : null
            }

            function _(n, e) {
                return l.BS.map((function(n) {
                    var t = n.duration,
                        a = n.getLabel;
                    return (0, r.jsx)(s.MenuItem, {
                        id: "mark-todo-".concat(t),
                        label: a(),
                        action: function() {
                            return e(t)
                        }
                    }, t)
                }))
            }
        },
        903404: (n, e, t) => {
            t.r(e);
            t.d(e, {
                default: () => l
            });
            var r = t(785893),
                a = (t(667294), t(730381)),
                i = t.n(a),
                o = t(882723),
                s = t(971402),
                u = t(931893),
                d = t(502575),
                c = t(473708);

            function l(n) {
                var e = n.message,
                    t = (0, d.W)(e, (function(n) {
                        return (0, u.dR)(e.id, i()().add(n, "millisecond").toDate())
                    }));
                return (0, r.jsx)(o.Menu, {
                    navId: "message-reminder-snooze",
                    onClose: s.Zy,
                    "aria-label": c.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
                    onSelect: function() {},
                    children: t
                })
            }
        }
    }
]);