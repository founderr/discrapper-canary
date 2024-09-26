n.d(t, {
    z: function () {
        return C;
    }
});
var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(913527),
    c = n.n(u),
    d = n(692547),
    _ = n(481060),
    E = n(44315),
    f = n(894017),
    h = n(854698),
    p = n(849464),
    m = n(765305),
    I = n(231338),
    T = n(689938),
    g = n(205569);
let S = 20;
function A(e, t) {
    let n = t.toDate(),
        r = n.toLocaleString(T.Z.getLocale(), { weekday: 'long' });
    switch (e) {
        case p.z.WEEKLY:
            return T.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({ weekday: r });
        case p.z.BIWEEKLY:
            return T.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({ weekday: r });
        case p.z.MONTHLY:
            let i = Math.ceil(n.getDate() / 7);
            return T.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
                weekday: r,
                nth: i
            });
        case p.z.YEARLY:
            return T.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                date: n.toLocaleString(T.Z.getLocale(), {
                    month: 'short',
                    day: '2-digit'
                })
            });
        case p.z.WEEKDAY_ONLY:
            return T.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
        case p.z.WEEKEND_ONLY:
            return T.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
        default:
            return null;
    }
}
function v(e, t, n, r, i) {
    switch (e) {
        case 1:
            return i > 0 ? T.Z.Messages.STARTING_IN_MINUTES.format({ minutes: i }) : T.Z.Messages.STARTING_SOON;
        case 2:
            return T.Z.Messages.STARTING_SOON;
        case 3:
            return null != r && '' !== r
                ? T.Z.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                      start: n,
                      startHook: (e) =>
                          (0, a.jsx)(_.Text, {
                              color: 'text-positive',
                              variant: 'text-sm/semibold',
                              className: g.liveEventEndTime,
                              children: e
                          }),
                      end: r
                  })
                : null != n
                  ? n
                  : '';
        default:
            return t;
    }
}
function N(e) {
    let t,
        { timeStatus: n, textBrand: r, textPositive: i, textDanger: a, endDateTimeString: o, startDateTimeString: s } = e,
        l = _.CalendarIcon,
        u = r,
        c = 'header-secondary';
    switch (n) {
        case 3:
            (u = i), (c = null != o ? void 0 : 'text-positive');
            break;
        case 4:
            l = _.ClockIcon;
            break;
        case 2:
        case 1:
            (c = 'text-brand'), (t = s);
            break;
        case 5:
            u = a;
    }
    return {
        Icon: l,
        iconColor: u.hex,
        textColor: c,
        tooltipText: t
    };
}
function O() {
    return (0, a.jsx)(_.TextBadge, {
        className: g.newBadge,
        color: d.Z.unsafe_rawColors.BRAND_260.css,
        text: (0, a.jsx)(_.Text, {
            className: g.newBadgeText,
            variant: 'text-xs/bold',
            children: T.Z.Messages.NEW
        })
    });
}
function R(e) {
    let { children: t, className: n, tooltipText: r } = e;
    return (0, a.jsx)('div', {
        className: l()(g.eventStatusContainer, n),
        children: (0, a.jsx)(_.Tooltip, {
            position: 'right',
            text: r,
            shouldShow: null != r,
            children: (e) =>
                (0, a.jsx)('div', {
                    ...e,
                    className: l()(g.eventStatusContainer, n),
                    children: t
                })
        })
    });
}
function C(e) {
    let { startTime: t, status: n, eventType: r, className: i, endTime: s, liveText: u, textVariant: d = 'text-sm/semibold', isNew: p, recurrenceRule: C, guildEventId: y, recurrenceId: L } = e,
        b = (0, E.O0)(I.tP.TEXT_BRAND),
        D = (0, E.O0)(I.tP.TEXT_POSITIVE),
        M = (0, E.O0)(I.tP.TEXT_DANGER);
    null == u && (u = r === m.WX.EXTERNAL ? T.Z.Messages.STAGE_CHANNEL_HAPPENING_NOW : T.Z.Messages.STAGE_CHANNEL_LIVE_NOW);
    let P = (0, f.Z)(L, y),
        [{ startDateTimeString: U, endDateTimeString: w, currentOrPastEvent: x, upcomingEvent: G, diffMinutes: k }, B] = o.useState((0, h.ub)(t, s));
    o.useEffect(() => {
        B((0, h.ub)(t, s));
        let e = setInterval(() => B((0, h.ub)(t, s)), 1000);
        return () => {
            clearInterval(e);
        };
    }, [t, s]);
    let F = U;
    null != w &&
        '' !== w &&
        (F = T.Z.Messages.START_DATE_TO_END_DATE.format({
            start: U,
            end: w
        }));
    let Z = o.useMemo(() => (n === m.p1.CANCELED || (null == P ? void 0 : P.is_canceled) ? 5 : n === m.p1.ACTIVE ? 3 : m.$I.has(n) ? 4 : x ? 2 : G ? 1 : 0), [n, null == P ? void 0 : P.is_canceled, x, G]),
        V = v(Z, F, u, w, k),
        {
            Icon: H,
            iconColor: Y,
            textColor: j,
            tooltipText: W
        } = o.useMemo(
            () =>
                N({
                    timeStatus: Z,
                    textBrand: b,
                    textPositive: D,
                    textDanger: M,
                    endDateTimeString: w,
                    startDateTimeString: U
                }),
            [Z, b, D, M, w, U]
        ),
        K = null;
    if (null != C) {
        let e = (0, h.Ho)(C);
        K = T.Z.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({ recurrenceRule: e.toText() });
        let n = c()(t);
        K = A((0, h.zi)(n, C), n);
    }
    return (0, a.jsxs)(R, {
        className: l()(i, { [g.isRecurring]: null != K }),
        tooltipText: W,
        children: [
            p && n === m.p1.SCHEDULED
                ? (0, a.jsx)(O, {})
                : (0, a.jsx)(H, {
                      color: Y,
                      size: 'custom',
                      width: S,
                      height: S
                  }),
            (0, a.jsxs)('div', {
                className: g.eventStatusLabel,
                children: [
                    (0, a.jsx)(_.Text, {
                        color: j,
                        variant: d,
                        children: V
                    }),
                    null != K &&
                        (0, a.jsx)(_.Text, {
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            children: K
                        })
                ]
            })
        ]
    });
}
!(function (e) {
    (e[(e.SCHEDULED = 0)] = 'SCHEDULED'), (e[(e.STARTING_SOON = 1)] = 'STARTING_SOON'), (e[(e.READY = 2)] = 'READY'), (e[(e.STARTED = 3)] = 'STARTED'), (e[(e.ENDED = 4)] = 'ENDED'), (e[(e.CANCELED = 5)] = 'CANCELED');
})(r || (r = {}));
