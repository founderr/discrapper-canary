(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11048"], {
        651072: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var n = l("862205");
            let a = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = a
        },
        229798: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            }), l("222007");
            var n = l("37983"),
                a = l("884691"),
                s = l("866227"),
                d = l.n(s),
                u = l("249654"),
                r = l("77078"),
                i = l("686904"),
                o = l("322224"),
                c = l("397680"),
                E = l("822516"),
                _ = l("953143"),
                f = l("782340"),
                g = l("297506");

            function h(e) {
                let {
                    guildEvent: t,
                    recurrenceId: l,
                    transitionState: s,
                    onClose: h
                } = e, m = (0, c.default)(l, t.id), T = (0, E.getScheduleFromEvent)(t), [x, A] = a.useState((() => {
                    if (null != m) return {
                        startDate: d(m.scheduled_start_time),
                        endDate: null != m.scheduled_end_time ? d(m.scheduled_end_time) : void 0
                    };
                    {
                        let e = d(u.default.extractTimestamp(l)),
                            t = (null == T ? void 0 : T.endDate) != null ? e.clone().add(T.endDate.diff(T.startDate)) : void 0;
                        return {
                            startDate: e,
                            endDate: t
                        }
                    }
                })()), [N, {
                    loading: v,
                    error: D
                }] = (0, i.default)(async () => {
                    var e, n, a, s;
                    if (null != m) await o.default.updateGuildEventException({
                        scheduled_start_time: null === (e = x.startDate) || void 0 === e ? void 0 : e.toISOString(),
                        scheduled_end_time: null === (n = x.endDate) || void 0 === n ? void 0 : n.toISOString(),
                        is_canceled: m.is_canceled
                    }, t.guild_id, t.id, l);
                    else {
                        let e = u.default.extractTimestamp(l);
                        await o.default.createGuildEventException({
                            original_scheduled_start_time: new Date(e).toISOString(),
                            scheduled_start_time: null === (a = x.startDate) || void 0 === a ? void 0 : a.toISOString(),
                            scheduled_end_time: null === (s = x.endDate) || void 0 === s ? void 0 : s.toISOString(),
                            is_canceled: !1
                        }, t.guild_id, t.id)
                    }
                    null == D && h()
                });
                return (0, n.jsxs)(r.ModalRoot, {
                    transitionState: s,
                    children: [(0, n.jsx)(r.ModalHeader, {
                        children: (0, n.jsx)(r.Heading, {
                            variant: "heading-lg/semibold",
                            children: f.default.Messages.EDIT_THIS_EVENT
                        })
                    }), (0, n.jsxs)(r.ModalContent, {
                        className: g.content,
                        children: [(0, n.jsx)(_.default, {
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: l
                                } = e;
                                null != t && null != l && (null == l ? void 0 : l.isBefore(t)) && (l = t.add(1, "hour")), A({
                                    startDate: t,
                                    endDate: l
                                })
                            },
                            schedule: x,
                            showEndDate: null != x.endDate,
                            guildId: t.guild_id
                        }), null != D ? (0, n.jsx)(r.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: g.warning,
                            children: D.getAnyErrorMessage()
                        }) : null]
                    }), (0, n.jsxs)(r.ModalFooter, {
                        className: g.footer,
                        children: [(0, n.jsx)(r.Button, {
                            color: r.Button.Colors.BRAND,
                            onClick: N,
                            className: g.button,
                            submitting: v,
                            children: f.default.Messages.SAVE_EVENT
                        }), (0, n.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            onClick: h,
                            children: f.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        844808: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("37983"),
                a = l("884691"),
                s = l("77078"),
                d = l("822516"),
                u = l("757767"),
                r = l("782340");

            function i(e) {
                let {
                    startDate: t,
                    recurrenceRule: l,
                    onRecurrenceChange: i
                } = e, o = a.useMemo(() => (0, d.recurrenceRuleToOption)(t, l), [l, t]), c = function(e) {
                    let t = e.toDate(),
                        l = t.toLocaleString(r.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
                        value: u.RecurrenceOptions.NONE,
                        label: r.default.Messages.CREATE_EVENT_RECUR_NONE
                    }, {
                        value: u.RecurrenceOptions.WEEKLY,
                        label: r.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                            weekday: l
                        })
                    }, {
                        value: u.RecurrenceOptions.YEARLY,
                        label: r.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                            date: t.toLocaleString(r.default.getLocale(), {
                                month: "short",
                                day: "2-digit"
                            })
                        })
                    }, {
                        value: u.RecurrenceOptions.WEEKDAY_ONLY,
                        label: r.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), E = e => e.toString();
                return (0, n.jsx)(s.FormItem, {
                    title: r.default.Messages.CREATE_EVENT_RECUR_LABEL,
                    required: !0,
                    children: (0, n.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: c,
                        select: i,
                        serialize: E,
                        isSelected: e => null != o && E(e) === E(o)
                    })
                })
            }
        },
        953143: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("866227"),
                s = l.n(a),
                d = l("77078"),
                u = l("812204"),
                r = l("685665"),
                i = l("381546"),
                o = l("351825"),
                c = l("651072"),
                E = l("822516"),
                _ = l("844808"),
                f = l("782340"),
                g = l("234865");

            function h(e) {
                let {
                    className: t,
                    guildId: l,
                    onScheduleChange: a,
                    onRecurrenceChange: h,
                    onTimeChange: m,
                    timeSelected: T = !0,
                    schedule: x,
                    recurrenceRule: A,
                    showEndDate: N = !1,
                    requireEndDate: v = !1,
                    disableStartDateTime: D = !1
                } = e, {
                    analyticsLocations: R
                } = (0, r.default)(u.default.EVENT_SETTINGS), {
                    enabled: S
                } = c.default.useExperiment({
                    guildId: null != l ? l : "",
                    location: R[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == x) return null;
                let C = null,
                    j = x.startDate,
                    I = s(),
                    M = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    p = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    L = e => {
                        a({
                            ...x,
                            endDate: e
                        })
                    };
                return null != j && c.default.trackExposure({
                    guildId: null != l ? l : "",
                    location: R[0]
                }), N && (C = null != x.endDate || v ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: g.doubleInput,
                        children: [(0, n.jsx)(d.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: v,
                            children: (0, n.jsx)(d.DateInput, {
                                value: x.endDate,
                                onSelect: L,
                                minDate: x.startDate,
                                maxDate: p
                            })
                        }), (0, n.jsx)(d.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: v,
                            children: (0, n.jsx)(d.TimeInput, {
                                value: x.endDate,
                                onChange: L
                            })
                        })]
                    }), v ? null : (0, n.jsx)(d.Button, {
                        onClick: () => {
                            L(void 0)
                        },
                        look: d.Button.Looks.BLANK,
                        size: d.Button.Sizes.MIN,
                        children: (0, n.jsxs)("div", {
                            className: g.link,
                            children: [(0, n.jsx)(i.default, {
                                width: 17,
                                height: 17,
                                className: g.removeIcon
                            }), (0, n.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: f.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, n.jsx)(d.Button, {
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.MIN,
                    onClick: () => {
                        L(s(x.startDate).add(1, "hour"))
                    },
                    children: (0, n.jsxs)("div", {
                        className: g.link,
                        children: [(0, n.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: g.addIcon
                        }), (0, n.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children: f.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, n.jsxs)("div", {
                    className: t,
                    children: [(0, n.jsxs)("div", {
                        className: g.doubleInput,
                        children: [(0, n.jsx)(d.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, n.jsx)(d.DateInput, {
                                value: x.startDate,
                                onSelect: e => {
                                    a({
                                        ...x,
                                        startDate: e
                                    })
                                },
                                minDate: I,
                                maxDate: M,
                                disabled: D
                            })
                        }), (0, n.jsx)(d.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, n.jsx)(d.TimeInput, {
                                value: x.startDate,
                                onChange: e => {
                                    e.isValid() && (null == m || m(!0), a({
                                        ...x,
                                        startDate: e
                                    }))
                                },
                                hideValue: !T,
                                disabled: D
                            })
                        })]
                    }), C, S && null != j && null != h && (0, n.jsx)(_.default, {
                        onRecurrenceChange: h,
                        startDate: j,
                        recurrenceRule: A
                    })]
                })
            }
        },
        686904: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            }), l("222007");
            var n = l("884691"),
                a = l("448993");

            function s(e, t) {
                let [l, s] = n.useState(!1), [d, u] = n.useState(null), r = async () => {
                    s(!0), u(null);
                    try {
                        let t = await e();
                        return s(!1), u(null), t
                    } catch (l) {
                        let e = new a.APIError(l);
                        return null == t || t(e), u(e), s(!1), null
                    }
                };
                return [r, {
                    loading: l,
                    error: d
                }]
            }
        }
    }
]);