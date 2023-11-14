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
                    return h
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                s = l("866227"),
                d = l.n(s),
                u = l("249654"),
                i = l("77078"),
                r = l("686904"),
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
                } = e, m = (0, c.default)(l, t.id), T = (0, E.getScheduleFromEvent)(t), [x, N] = n.useState((() => {
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
                })()), [A, {
                    loading: D,
                    error: v
                }] = (0, r.default)(async () => {
                    var e, a, n, s;
                    if (null != m) await o.default.updateGuildEventException({
                        scheduled_start_time: null === (e = x.startDate) || void 0 === e ? void 0 : e.toISOString(),
                        scheduled_end_time: null === (a = x.endDate) || void 0 === a ? void 0 : a.toISOString(),
                        is_canceled: m.is_canceled
                    }, t.guild_id, t.id, l);
                    else {
                        let e = u.default.extractTimestamp(l);
                        await o.default.createGuildEventException({
                            original_scheduled_start_time: new Date(e).toISOString(),
                            scheduled_start_time: null === (n = x.startDate) || void 0 === n ? void 0 : n.toISOString(),
                            scheduled_end_time: null === (s = x.endDate) || void 0 === s ? void 0 : s.toISOString(),
                            is_canceled: !1
                        }, t.guild_id, t.id)
                    }
                    null == v && h()
                });
                return (0, a.jsxs)(i.ModalRoot, {
                    transitionState: s,
                    children: [(0, a.jsx)(i.ModalHeader, {
                        children: (0, a.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            children: f.default.Messages.EDIT_THIS_EVENT
                        })
                    }), (0, a.jsxs)(i.ModalContent, {
                        className: g.content,
                        children: [(0, a.jsx)(_.default, {
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
                            schedule: x,
                            showEndDate: null != x.endDate,
                            guildId: t.guild_id
                        }), null != v ? (0, a.jsx)(i.Text, {
                            color: "text-danger",
                            variant: "text-xs/normal",
                            className: g.warning,
                            children: v.getAnyErrorMessage()
                        }) : null]
                    }), (0, a.jsxs)(i.ModalFooter, {
                        className: g.footer,
                        children: [(0, a.jsx)(i.Button, {
                            color: i.Button.Colors.BRAND,
                            onClick: A,
                            className: g.button,
                            submitting: D,
                            children: f.default.Messages.SAVE_EVENT
                        }), (0, a.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
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
                    return E
                }
            });
            var a = l("37983"),
                n = l("884691"),
                s = l("77078"),
                d = l("20606"),
                u = l("956089"),
                i = l("822516"),
                r = l("757767"),
                o = l("782340"),
                c = l("572721");

            function E(e) {
                let {
                    startDate: t,
                    recurrenceRule: l,
                    onRecurrenceChange: E
                } = e, _ = n.useMemo(() => (0, i.recurrenceRuleToOption)(t, l), [l, t]), f = function(e) {
                    let t = e.toDate(),
                        l = t.toLocaleString(o.default.getLocale(), {
                            weekday: "long"
                        });
                    return [{
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
                    }, {
                        value: r.RecurrenceOptions.WEEKDAY_ONLY,
                        label: o.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
                    }]
                }(t), g = e => e.toString(), h = (0, a.jsxs)("div", {
                    className: c.title,
                    children: [o.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, a.jsx)(u.TextBadge, {
                        text: o.default.Messages.NEW,
                        color: d.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
                    })]
                });
                return (0, a.jsx)(s.FormItem, {
                    title: h,
                    required: !0,
                    children: (0, a.jsx)(s.Select, {
                        placeholder: "gaming",
                        options: f,
                        select: E,
                        serialize: g,
                        isSelected: e => null != _ && g(e) === g(_)
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
            var a = l("37983");
            l("884691");
            var n = l("866227"),
                s = l.n(n),
                d = l("77078"),
                u = l("812204"),
                i = l("685665"),
                r = l("381546"),
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
                    onScheduleChange: n,
                    onRecurrenceChange: h,
                    onTimeChange: m,
                    timeSelected: T = !0,
                    schedule: x,
                    recurrenceRule: N,
                    showEndDate: A = !1,
                    requireEndDate: D = !1,
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
                if (null == x) return null;
                let C = null,
                    j = x.startDate,
                    I = s(),
                    M = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
                    p = s().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days"),
                    L = e => {
                        n({
                            ...x,
                            endDate: e
                        })
                    };
                return null != j && c.default.trackExposure({
                    guildId: null != l ? l : "",
                    location: R[0]
                }), A && (C = null != x.endDate || D ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: g.doubleInput,
                        children: [(0, a.jsx)(d.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_DATE_LABEL,
                            required: D,
                            children: (0, a.jsx)(d.DateInput, {
                                value: x.endDate,
                                onSelect: L,
                                minDate: x.startDate,
                                maxDate: p
                            })
                        }), (0, a.jsx)(d.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_END_TIME_LABEL,
                            required: D,
                            children: (0, a.jsx)(d.TimeInput, {
                                value: x.endDate,
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
                            className: g.link,
                            children: [(0, a.jsx)(r.default, {
                                width: 17,
                                height: 17,
                                className: g.removeIcon
                            }), (0, a.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: f.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                            })]
                        })
                    })]
                }) : (0, a.jsx)(d.Button, {
                    look: d.Button.Looks.BLANK,
                    size: d.Button.Sizes.MIN,
                    onClick: () => {
                        L(s(x.startDate).add(1, "hour"))
                    },
                    children: (0, a.jsxs)("div", {
                        className: g.link,
                        children: [(0, a.jsx)(o.default, {
                            width: 20,
                            height: 20,
                            className: g.addIcon
                        }), (0, a.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            children: f.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                        })]
                    })
                })), (0, a.jsxs)("div", {
                    className: t,
                    children: [(0, a.jsxs)("div", {
                        className: g.doubleInput,
                        children: [(0, a.jsx)(d.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(d.DateInput, {
                                value: x.startDate,
                                onSelect: e => {
                                    n({
                                        ...x,
                                        startDate: e
                                    })
                                },
                                minDate: I,
                                maxDate: M,
                                disabled: v
                            })
                        }), (0, a.jsx)(d.FormItem, {
                            title: f.default.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(d.TimeInput, {
                                value: x.startDate,
                                onChange: e => {
                                    e.isValid() && (null == m || m(!0), n({
                                        ...x,
                                        startDate: e
                                    }))
                                },
                                hideValue: !T,
                                disabled: v
                            })
                        })]
                    }), C, S && null != j && null != h && (0, a.jsx)(_.default, {
                        onRecurrenceChange: h,
                        startDate: j,
                        recurrenceRule: N
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
                let [l, s] = a.useState(!1), [d, u] = a.useState(null), i = async () => {
                    s(!0), u(null);
                    try {
                        let t = await e();
                        return s(!1), u(null), t
                    } catch (l) {
                        let e = new n.APIError(l);
                        return null == t || t(e), u(e), s(!1), null
                    }
                };
                return [i, {
                    loading: l,
                    error: d
                }]
            }
        }
    }
]);