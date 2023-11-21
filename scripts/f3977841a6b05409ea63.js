(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["11048"], {
        651072: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
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
            var s = n
        },
        229798: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("249654"),
                d = l("77078"),
                r = l("686904"),
                u = l("322224"),
                i = l("397680"),
                o = l("822516"),
                c = l("953143"),
                E = l("782340"),
                _ = l("297506");

            function g(e) {
                let {
                    guildEvent: t,
                    recurrenceId: l,
                    transitionState: g,
                    onClose: h
                } = e, f = (0, i.default)(l, t.id), x = (0, o.getBaseScheduleForRecurrence)(l, t), T = (0, o.getScheduleForRecurrenceWithException)(x, f), [N, m] = n.useState(T), [A, {
                    loading: D,
                    error: R
                }] = (0, r.default)(async () => {
                    let e = (0, o.areDatesIdentical)(x.startDate, N.startDate) ? null : N.startDate,
                        a = (0, o.areDatesIdentical)(x.endDate, N.endDate) ? null : N.endDate;
                    if (null != f)(0, o.areSchedulesIdentical)(N, x) ? await u.default.deleteGuildEventException(t.guild_id, t.id, f.event_exception_id) : await u.default.updateGuildEventException({
                        scheduled_start_time: null == e ? void 0 : e.toISOString(),
                        scheduled_end_time: null == a ? void 0 : a.toISOString(),
                        is_canceled: f.is_canceled
                    }, t.guild_id, t.id, l);
                    else {
                        let n = s.default.extractTimestamp(l);
                        await u.default.createGuildEventException({
                            original_scheduled_start_time: new Date(n).toISOString(),
                            scheduled_start_time: null == e ? void 0 : e.toISOString(),
                            scheduled_end_time: null == a ? void 0 : a.toISOString(),
                            is_canceled: !1
                        }, t.guild_id, t.id)
                    }
                    null == R && h()
                });
                return (0, a.jsxs)(d.ModalRoot, {
                    transitionState: g,
                    children: [(0, a.jsx)(d.ModalHeader, {
                        children: (0, a.jsx)(d.Heading, {
                            variant: "heading-lg/semibold",
                            children: E.default.Messages.EDIT_THIS_EVENT
                        })
                    }), (0, a.jsxs)(d.ModalContent, {
                        className: _.content,
                        children: [(0, a.jsx)(c.default, {
                            onScheduleChange: e => {
                                let {
                                    startDate: t,
                                    endDate: l
                                } = e;
                                null != t && null != l && l.isBefore(t) && (l = t.clone().add(1, "hour")), m({
                                    startDate: t,
                                    endDate: l
                                })
                            },
                            schedule: N,
                            showEndDate: null != N.endDate,
                            requireEndDate: null != N.endDate,
                            guildId: t.guild_id
                        }), null != R ? (0, a.jsx)(d.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: _.warning,
                            children: R.getAnyErrorMessage()
                        }) : null]
                    }), (0, a.jsxs)(d.ModalFooter, {
                        className: _.footer,
                        children: [(0, a.jsx)(d.Button, {
                            color: d.Button.Colors.BRAND,
                            onClick: A,
                            className: _.button,
                            submitting: D,
                            disabled: (0, o.areSchedulesIdentical)(N, T),
                            children: E.default.Messages.SAVE_EVENT
                        }), (0, a.jsx)(d.Button, {
                            color: d.Button.Colors.PRIMARY,
                            onClick: h,
                            children: E.default.Messages.CANCEL
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
                s = l("77078"),
                d = l("20606"),
                r = l("956089"),
                u = l("822516"),
                i = l("757767"),
                o = l("782340"),
                c = l("572721");
            let E = new Set([0, 6]);

            function _(e) {
                let {
                    startDate: t,
                    recurrenceRule: l,
                    onRecurrenceChange: _
                } = e, g = n.useMemo(() => (0, u.recurrenceRuleToOption)(t, l), [l, t]), h = function(e) {
                    let t = e.toDate(),
                        l = t.toLocaleString(o.default.getLocale(), {
                            weekday: "long"
                        }),
                        a = [{
                            value: i.RecurrenceOptions.NONE,
                            label: o.default.Messages.CREATE_EVENT_RECUR_NONE
                        }, {
                            value: i.RecurrenceOptions.WEEKLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
                                weekday: l
                            })
                        }, {
                            value: i.RecurrenceOptions.YEARLY,
                            label: o.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
                                date: t.toLocaleString(o.default.getLocale(), {
                                    month: "short",
                                    day: "2-digit"
                                })
                            })
                        }];
                    return !E.has(t.getDay()) && a.push({
                        value: i.RecurrenceOptions.WEEKDAY_ONLY,
                        label: o.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }), a
                }(t), f = e => e.toString(), x = (0, a.jsxs)("div", {
                    className: c.title,
                    children: [o.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, a.jsx)(r.TextBadge, {
                        text: o.default.Messages.NEW,
                        color: d.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, a.jsx)(s.FormItem, {
                    title: x,
                    required: !0,
                    children: (0, a.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: h,
                        select: _,
                        serialize: f,
                        isSelected: e => null != g && f(e) === f(g)
                    })
                })
            }
        },
        953143: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("866227"),
                s = l.n(n),
                d = l("77078"),
                r = l("812204"),
                u = l("685665"),
                i = l("381546"),
                o = l("351825"),
                c = l("651072"),
                E = l("822516"),
                _ = l("844808"),
                g = l("782340"),
                h = l("234865");

            function f(e) {
                let {
                    className: t,
                    guildId: l,
                    onScheduleChange: n,
                    onRecurrenceChange: f,
                    onTimeChange: x,
                    timeSelected: T = !0,
                    schedule: N,
                    recurrenceRule: m,
                    showEndDate: A = !1,
                    requireEndDate: D = !1,
                    disableStartDateTime: R = !1
                } = e, {
                    analyticsLocations: S
                } = (0, u.default)(r.default.EVENT_SETTINGS), {
                    enabled: v
                } = c.default.useExperiment({
                    guildId: null != l ? l : "",
                    location: S[0]
                }, {
                    autoTrackExposure: !1
                });
                if (null == N) return null;
                let I = null,
                    C = N.startDate,
                    j = s(),
                    p = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    M = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    L = e => {
                        n({
                            ...N,
                            endDate: e
                        })
                    };
                return null != C && c.default.trackExposure({
                    guildId: null != l ? l : "",
                    location: S[0]
                }), A && (I = null != N.endDate || D ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: h.doubleInput,
                        children: [(0, a.jsx)(d.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: D,
                            children: (0, a.jsx)(d.DateInput, {
                                value: N.endDate,
                                onSelect: L,
                                minDate: N.startDate,
                                maxDate: M
                            })
                        }), (0, a.jsx)(d.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: D,
                            children: (0, a.jsx)(d.TimeInput, {
                                value: N.endDate,
                                onChange: L
                            })
                        })]
                    }), D ? null : (0, a.jsx)(d.Button, {
                        onClick: () => {
                            L(void 0)
                        },
                        look: d.Button.Looks.BLANK,
                        size: d.Button.Sizes.MIN,
                        children: (0, a.jsxs)("div", {
                            className: h.link,
                            children: [(0, a.jsx)(i.default, {
                                width: 17,
                                height: 17,
                                className: h.removeIcon
                            }), (0, a.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: g.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, a.jsx)(d.Button, {
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.MIN,
                    onClick: () => {
                        L(s(N.startDate).add(1, "hour"))
                    },
                    children: (0, a.jsxs)("div", {
                        className: h.link,
                        children: [(0, a.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: h.addIcon
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children: g.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: h.doubleInput,
                        children: [(0, a.jsx)(d.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(d.DateInput, {
                                value: N.startDate,
                                onSelect: e => {
                                    n({
                                        ...N,
                                        startDate: e
                                    })
                                },
                                minDate: j,
                                maxDate: p,
                                disabled: R
                            })
                        }), (0, a.jsx)(d.FormItem, {
                            title: g.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(d.TimeInput, {
                                value: N.startDate,
                                onChange: e => {
                                    e.isValid() && (null == x || x(!0), n({
                                        ...N,
                                        startDate: e
                                    }))
                                },
                                hideValue: !T,
                                disabled: R
                            })
                        })]
                    }), I, v && null != C && null != f && (0, a.jsx)(_.default, {
                        onRecurrenceChange: f,
                        startDate: C,
                        recurrenceRule: m
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
            var a = l("884691"),
                n = l("448993");

            function s(e, t) {
                let [l, s] = a.useState(!1), [d, r] = a.useState(null), u = async () => {
                    s(!0), r(null);
                    try {
                        let t = await e();
                        return s(!1), r(null), t
                    } catch (l) {
                        let e = new n.APIError(l);
                        return null == t || t(e), r(e), s(!1), null
                    }
                };
                return [u, {
                    loading: l,
                    error: d
                }]
            }
        }
    }
]);