(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11048"], {
        651072: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            });
            var a = l("862205");
            let n = (0, a.createExperiment)({
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
            var d = n
        },
        780609: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("866227"),
                n = l.n(a),
                d = l("249654");

            function s(e, t, l) {
                if (null == l) {
                    let l = n(d.default.extractTimestamp(e)),
                        a = (null == t ? void 0 : t.endDate) != null ? l.clone().add(t.endDate.diff(t.startDate)) : void 0;
                    return {
                        startDate: l,
                        endDate: a
                    }
                }
                return {
                    startDate: null != l.scheduled_start_time ? n(l.scheduled_start_time) : n(d.default.extractTimestamp(e)),
                    endDate: null != l.scheduled_end_time ? n(l.scheduled_end_time) : void 0
                }
            }
        },
        229798: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                d = l("249654"),
                s = l("77078"),
                u = l("686904"),
                i = l("322224"),
                r = l("397680"),
                o = l("780609"),
                c = l("822516"),
                E = l("953143"),
                _ = l("782340"),
                f = l("297506");

            function h(e) {
                let {
                    guildEvent: t,
                    recurrenceId: l,
                    transitionState: h,
                    onClose: g
                } = e, m = (0, r.default)(l, t.id), x = (0, c.getScheduleFromEvent)(t), T = (0, o.default)(l, x, m), [D, N] = n.useState(T), [A, {
                    loading: v,
                    error: R
                }] = (0, u.default)(async () => {
                    let e = (0, c.areDatesIdentical)(T.startDate, D.startDate) ? null : D.startDate,
                        a = (0, c.areDatesIdentical)(T.endDate, D.endDate) ? null : D.endDate;
                    if (null != m)(0, c.areSchedulesIdentical)(D, x) ? await i.default.deleteGuildEventException(t.guild_id, t.id, m.event_exception_id) : await i.default.updateGuildEventException({
                        scheduled_start_time: null == e ? void 0 : e.toISOString(),
                        scheduled_end_time: null == a ? void 0 : a.toISOString(),
                        is_canceled: m.is_canceled
                    }, t.guild_id, t.id, l);
                    else {
                        let n = d.default.extractTimestamp(l);
                        await i.default.createGuildEventException({
                            original_scheduled_start_time: new Date(n).toISOString(),
                            scheduled_start_time: null == e ? void 0 : e.toISOString(),
                            scheduled_end_time: null == a ? void 0 : a.toISOString(),
                            is_canceled: !1
                        }, t.guild_id, t.id)
                    }
                    null == R && g()
                });
                return (0, a.jsxs)(s.ModalRoot, {
                    transitionState: h,
                    children: [(0, a.jsx)(s.ModalHeader, {
                        children: (0, a.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: _.default.Messages.EDIT_THIS_EVENT
                        })
                    }), (0, a.jsxs)(s.ModalContent, {
                        className: f.content,
                        children: [(0, a.jsx)(E.default, {
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: l
                                } = e;
                                null != t && null != l && (null == l ? void 0 : l.isBefore(t)) && (l = t.add(1, "hour")), N({
                                    startDate: t,
                                    endDate: l
                                })
                            },
                            schedule: D,
                            showEndDate: null != D.endDate,
                            requireEndDate: null != D.endDate,
                            guildId: t.guild_id
                        }), null != R ? (0, a.jsx)(s.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: f.warning,
                            children: R.getAnyErrorMessage()
                        }) : null]
                    }), (0, a.jsxs)(s.ModalFooter, {
                        className: f.footer,
                        children: [(0, a.jsx)(s.Button, {
                            color: s.Button.Colors.BRAND,
                            onClick: A,
                            className: f.button,
                            submitting: v,
                            disabled: (0, c.areSchedulesIdentical)(D, T),
                            children: _.default.Messages.SAVE_EVENT
                        }), (0, a.jsx)(s.Button, {
                            color: s.Button.Colors.PRIMARY,
                            onClick: g,
                            children: _.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        844808: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return _
                }
            }), l("222007"), l("424973");
            var a = l("37983"),
                n = l("884691"),
                d = l("77078"),
                s = l("20606"),
                u = l("956089"),
                i = l("822516"),
                r = l("757767"),
                o = l("782340"),
                c = l("572721");
            let E = new Set([0, 6]);

            function _(e) {
                let {
                    startDate: t,
                    recurrenceRule: l,
                    onRecurrenceChange: _
                } = e, f = n.useMemo(() => (0, i.recurrenceRuleToOption)(t, l), [l, t]), h = function(e) {
                    let t = e.toDate(),
                        l = t.toLocaleString(o.default.getLocale(), {
                            weekday: "long"
                        }),
                        a = [{
                            value: r.RecurrenceOptions.NONE,
                            label: o.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: r.RecurrenceOptions.WEEKLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: l
                            })
                        }, {
                            value: r.RecurrenceOptions.YEARLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(o.default.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }];
                    return !E.has(t.getDay()) && a.push({
                        value: r.RecurrenceOptions.WEEKDAY_ONLY,
                        label: o.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), a
                }(t), g = e => e.toString(), m = (0, a.jsxs)("div", {
                    className: c.title,
                    children: [o.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, a.jsx)(u.TextBadge, {
                        text: o.default.Messages.NEW,
                        color: s.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, a.jsx)(d.FormItem, {
                    title: m,
                    required: !0,
                    children: (0, a.jsx)(d.Select, {
                        placeholder: "gaming",
                        options: h,
                        select: _,
                        serialize: g,
                        isSelected: e => null != f && g(e) === g(f)
                    })
                })
            }
        },
        953143: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("866227"),
                d = l.n(n),
                s = l("77078"),
                u = l("812204"),
                i = l("685665"),
                r = l("381546"),
                o = l("351825"),
                c = l("651072"),
                E = l("822516"),
                _ = l("844808"),
                f = l("782340"),
                h = l("234865");

            function g(e) {
                let {
                    className: t,
                    guildId: l,
                    onScheduleChange: n,
                    onRecurrenceChange: g,
                    onTimeChange: m,
                    timeSelected: x = !0,
                    schedule: T,
                    recurrenceRule: D,
                    showEndDate: N = !1,
                    requireEndDate: A = !1,
                    disableStartDateTime: v = !1
                } = e, {
                    analyticsLocations: R
                } = (0, i.default)(u.default.EVENT_SETTINGS), {
                    enabled: S
                } = c.default.useExperiment({
                    guildId: null != l ? l : "",
                    location: R[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == T) return null;
                let I = null,
                    C = T.startDate,
                    j = d(),
                    p = d().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    M = d().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    L = e => {
                        n({
                            ...T,
                            endDate: e
                        })
                    };
                return null != C && c.default.trackExposure({
                    guildId: null != l ? l : "",
                    location: R[0]
                }), N && (I = null != T.endDate || A ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: h.doubleInput,
                        children: [(0, a.jsx)(s.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: A,
                            children: (0, a.jsx)(s.DateInput, {
                                value: T.endDate,
                                onSelect: L,
                                minDate: T.startDate,
                                maxDate: M
                            })
                        }), (0, a.jsx)(s.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: A,
                            children: (0, a.jsx)(s.TimeInput, {
                                value: T.endDate,
                                onChange: L
                            })
                        })]
                    }), A ? null : (0, a.jsx)(s.Button, {
                        onClick: () => {
                            L(void 0)
                        },
                        look: s.Button.Looks.BLANK,
                        size: s.Button.Sizes.MIN,
                        children: (0, a.jsxs)("div", {
                            className: h.link,
                            children: [(0, a.jsx)(r.default, {
                                width: 17,
                                height: 17,
                                className: h.removeIcon
                            }), (0, a.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: f.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, a.jsx)(s.Button, {
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: () => {
                        L(d(T.startDate).add(1, "hour"))
                    },
                    children: (0, a.jsxs)("div", {
                        className: h.link,
                        children: [(0, a.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: h.addIcon
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            children: f.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: h.doubleInput,
                        children: [(0, a.jsx)(s.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(s.DateInput, {
                                value: T.startDate,
                                onSelect: e => {
                                    n({
                                        ...T,
                                        startDate: e
                                    })
                                },
                                minDate: j,
                                maxDate: p,
                                disabled: v
                            })
                        }), (0, a.jsx)(s.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(s.TimeInput, {
                                value: T.startDate,
                                onChange: e => {
                                    e.isValid() && (null == m || m(!0), n({
                                        ...T,
                                        startDate: e
                                    }))
                                },
                                hideValue: !x,
                                disabled: v
                            })
                        })]
                    }), I, S && null != C && null != g && (0, a.jsx)(_.default, {
                        onRecurrenceChange: g,
                        startDate: C,
                        recurrenceRule: D
                    })]
                })
            }
        },
        686904: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return d
                }
            }), l("222007");
            var a = l("884691"),
                n = l("448993");

            function d(e, t) {
                let [l, d] = a.useState(!1), [s, u] = a.useState(null), i = async () => {
                    d(!0), u(null);
                    try {
                        let t = await e();
                        return d(!1), u(null), t
                    } catch (l) {
                        let e = new n.APIError(l);
                        return null == t || t(e), u(e), d(!1), null
                    }
                };
                return [i, {
                    loading: l,
                    error: s
                }]
            }
        }
    }
]);