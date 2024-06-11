"use strict";
a.r(t), a.d(t, {
  GuildEventTimeStatus: function() {
    return L
  }
}), a("47120");
var l, n, s = a("735250"),
  r = a("470079"),
  u = a("120356"),
  i = a.n(u),
  c = a("913527"),
  d = a.n(c),
  o = a("692547"),
  E = a("481060"),
  f = a("44315"),
  T = a("305878"),
  m = a("855693"),
  N = a("894017"),
  v = a("854698"),
  _ = a("849464"),
  h = a("765305"),
  S = a("231338"),
  D = a("689938"),
  g = a("944950");
(n = l || (l = {}))[n.SCHEDULED = 0] = "SCHEDULED", n[n.STARTING_SOON = 1] = "STARTING_SOON", n[n.READY = 2] = "READY", n[n.STARTED = 3] = "STARTED", n[n.ENDED = 4] = "ENDED", n[n.CANCELED = 5] = "CANCELED";

function x() {
  return (0, s.jsx)(E.TextBadge, {
    className: g.newBadge,
    color: o.default.unsafe_rawColors.BRAND_260.css,
    text: (0, s.jsx)(E.Text, {
      className: g.newBadgeText,
      variant: "text-xs/bold",
      children: D.default.Messages.NEW
    })
  })
}

function R(e) {
  let {
    children: t,
    className: a,
    tooltipText: l
  } = e;
  return (0, s.jsx)("div", {
    className: i()(g.eventStatusContainer, a),
    children: (0, s.jsx)(E.Tooltip, {
      position: "right",
      text: l,
      shouldShow: null != l,
      children: e => (0, s.jsx)("div", {
        ...e,
        className: i()(g.eventStatusContainer, a),
        children: t
      })
    })
  })
}

function L(e) {
  let {
    startTime: t,
    status: a,
    eventType: l,
    className: n,
    endTime: u,
    liveText: c,
    textVariant: o = "text-sm/semibold",
    isNew: L,
    recurrenceRule: C,
    guildEventId: A,
    recurrenceId: I
  } = e, p = (0, f.useThemedColorValue)(S.ThemeColor.TEXT_BRAND), j = (0, f.useThemedColorValue)(S.ThemeColor.TEXT_POSITIVE), O = (0, f.useThemedColorValue)(S.ThemeColor.TEXT_DANGER);
  null == c && (c = l === h.GuildScheduledEventEntityTypes.EXTERNAL ? D.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : D.default.Messages.STAGE_CHANNEL_LIVE_NOW);
  let G = (0, N.default)(I, A),
    [{
      startDateTimeString: M,
      endDateTimeString: U,
      currentOrPastEvent: b,
      upcomingEvent: w,
      diffMinutes: H
    }, Y] = r.useState((0, v.getEventTimeData)(t, u));
  r.useEffect(() => {
    Y((0, v.getEventTimeData)(t, u));
    let e = setInterval(() => Y((0, v.getEventTimeData)(t, u)), 1e3);
    return () => {
      clearInterval(e)
    }
  }, [t, u]);
  let V = M;
  null != U && "" !== U && (V = D.default.Messages.START_DATE_TO_END_DATE.format({
    start: M,
    end: U
  }));
  let k = r.useMemo(() => a === h.GuildScheduledEventStatus.CANCELED || (null == G ? void 0 : G.is_canceled) ? 5 : a === h.GuildScheduledEventStatus.ACTIVE ? 3 : h.GuildScheduledEventStatusDone.has(a) ? 4 : b ? 2 : w ? 1 : 0, [a, null == G ? void 0 : G.is_canceled, b, w]),
    P = function(e, t, a, l, n) {
      switch (e) {
        case 1:
          return n > 0 ? D.default.Messages.STARTING_IN_MINUTES.format({
            minutes: n
          }) : D.default.Messages.STARTING_SOON;
        case 2:
          return D.default.Messages.STARTING_SOON;
        case 3:
          return null != l && "" !== l ? D.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
            start: a,
            startHook: e => (0, s.jsx)(E.Text, {
              color: "text-positive",
              variant: "text-sm/semibold",
              className: g.liveEventEndTime,
              children: e
            }),
            end: l
          }) : null != a ? a : "";
        default:
          return t
      }
    }(k, V, c, U, H),
    {
      Icon: W,
      iconColor: y,
      textColor: B,
      tooltipText: K
    } = r.useMemo(() => (function(e) {
      let t, {
          timeStatus: a,
          textBrand: l,
          textPositive: n,
          textDanger: s,
          endDateTimeString: r,
          startDateTimeString: u
        } = e,
        i = T.default,
        c = l,
        d = "header-secondary";
      switch (a) {
        case 3:
          c = n, d = null != r ? void 0 : "text-positive";
          break;
        case 4:
          i = m.default;
          break;
        case 2:
        case 1:
          d = "text-brand", t = u;
          break;
        case 5:
          c = s
      }
      return {
        Icon: i,
        iconColor: c.hex,
        textColor: d,
        tooltipText: t
      }
    })({
      timeStatus: k,
      textBrand: p,
      textPositive: j,
      textDanger: O,
      endDateTimeString: U,
      startDateTimeString: M
    }), [k, p, j, O, U, M]),
    F = null;
  if (null != C) {
    let e = (0, v.getRRule)(C);
    F = D.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
      recurrenceRule: e.toText()
    });
    let a = d()(t);
    F = function(e, t) {
      let a = t.toDate(),
        l = a.toLocaleString(D.default.getLocale(), {
          weekday: "long"
        });
      switch (e) {
        case _.RecurrenceOptions.WEEKLY:
          return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
            weekday: l
          });
        case _.RecurrenceOptions.BIWEEKLY:
          return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
            weekday: l
          });
        case _.RecurrenceOptions.MONTHLY:
          let n = Math.ceil(a.getDate() / 7);
          return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
            weekday: l,
            nth: n
          });
        case _.RecurrenceOptions.YEARLY:
          return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
            date: a.toLocaleString(D.default.getLocale(), {
              month: "short",
              day: "2-digit"
            })
          });
        case _.RecurrenceOptions.WEEKDAY_ONLY:
          return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
        case _.RecurrenceOptions.WEEKEND_ONLY:
          return D.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
        default:
          return null
      }
    }((0, v.recurrenceRuleToOption)(a, C), a)
  }
  return (0, s.jsxs)(R, {
    className: i()(n, {
      [g.isRecurring]: null != F
    }),
    tooltipText: K,
    children: [L && a === h.GuildScheduledEventStatus.SCHEDULED ? (0, s.jsx)(x, {}) : (0, s.jsx)(W, {
      color: y,
      width: 20,
      height: 20
    }), (0, s.jsxs)("div", {
      className: g.eventStatusLabel,
      children: [(0, s.jsx)(E.Text, {
        color: B,
        variant: o,
        children: P
      }), null != F && (0, s.jsx)(E.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        children: F
      })]
    })]
  })
}