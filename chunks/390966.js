n.d(t, {
  z: function() {
    return f
  }
}), n(47120);
var s, a, r = n(735250),
  l = n(470079),
  i = n(120356),
  u = n.n(i),
  c = n(913527),
  o = n.n(c),
  E = n(692547),
  d = n(481060),
  N = n(44315),
  T = n(894017),
  _ = n(854698),
  m = n(849464),
  x = n(765305),
  D = n(231338),
  v = n(689938),
  h = n(642790);
(a = s || (s = {}))[a.SCHEDULED = 0] = "SCHEDULED", a[a.STARTING_SOON = 1] = "STARTING_SOON", a[a.READY = 2] = "READY", a[a.STARTED = 3] = "STARTED", a[a.ENDED = 4] = "ENDED", a[a.CANCELED = 5] = "CANCELED";

function g() {
  return (0, r.jsx)(d.TextBadge, {
    className: h.newBadge,
    color: E.Z.unsafe_rawColors.BRAND_260.css,
    text: (0, r.jsx)(d.Text, {
      className: h.newBadgeText,
      variant: "text-xs/bold",
      children: v.Z.Messages.NEW
    })
  })
}

function S(e) {
  let {
    children: t,
    className: n,
    tooltipText: s
  } = e;
  return (0, r.jsx)("div", {
    className: u()(h.eventStatusContainer, n),
    children: (0, r.jsx)(d.Tooltip, {
      position: "right",
      text: s,
      shouldShow: null != s,
      children: e => (0, r.jsx)("div", {
        ...e,
        className: u()(h.eventStatusContainer, n),
        children: t
      })
    })
  })
}

function f(e) {
  let {
    startTime: t,
    status: n,
    eventType: s,
    className: a,
    endTime: i,
    liveText: c,
    textVariant: E = "text-sm/semibold",
    isNew: f,
    recurrenceRule: L,
    guildEventId: Z,
    recurrenceId: A
  } = e, C = (0, N.O0)(D.tP.TEXT_BRAND), I = (0, N.O0)(D.tP.TEXT_POSITIVE), R = (0, N.O0)(D.tP.TEXT_DANGER);
  null == c && (c = s === x.WX.EXTERNAL ? v.Z.Messages.STAGE_CHANNEL_HAPPENING_NOW : v.Z.Messages.STAGE_CHANNEL_LIVE_NOW);
  let j = (0, T.Z)(A, Z),
    [{
      startDateTimeString: p,
      endDateTimeString: M,
      currentOrPastEvent: O,
      upcomingEvent: U,
      diffMinutes: b
    }, H] = l.useState((0, _.ub)(t, i));
  l.useEffect(() => {
    H((0, _.ub)(t, i));
    let e = setInterval(() => H((0, _.ub)(t, i)), 1e3);
    return () => {
      clearInterval(e)
    }
  }, [t, i]);
  let P = p;
  null != M && "" !== M && (P = v.Z.Messages.START_DATE_TO_END_DATE.format({
    start: p,
    end: M
  }));
  let G = l.useMemo(() => n === x.p1.CANCELED || (null == j ? void 0 : j.is_canceled) ? 5 : n === x.p1.ACTIVE ? 3 : x.$I.has(n) ? 4 : O ? 2 : U ? 1 : 0, [n, null == j ? void 0 : j.is_canceled, O, U]),
    w = function(e, t, n, s, a) {
      switch (e) {
        case 1:
          return a > 0 ? v.Z.Messages.STARTING_IN_MINUTES.format({
            minutes: a
          }) : v.Z.Messages.STARTING_SOON;
        case 2:
          return v.Z.Messages.STARTING_SOON;
        case 3:
          return null != s && "" !== s ? v.Z.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
            start: n,
            startHook: e => (0, r.jsx)(d.Text, {
              color: "text-positive",
              variant: "text-sm/semibold",
              className: h.liveEventEndTime,
              children: e
            }),
            end: s
          }) : null != n ? n : "";
        default:
          return t
      }
    }(G, P, c, M, b),
    {
      Icon: Y,
      iconColor: k,
      textColor: V,
      tooltipText: W
    } = l.useMemo(() => (function(e) {
      let t, {
          timeStatus: n,
          textBrand: s,
          textPositive: a,
          textDanger: r,
          endDateTimeString: l,
          startDateTimeString: i
        } = e,
        u = d.CalendarIcon,
        c = s,
        o = "header-secondary";
      switch (n) {
        case 3:
          c = a, o = null != l ? void 0 : "text-positive";
          break;
        case 4:
          u = d.ClockIcon;
          break;
        case 2:
        case 1:
          o = "text-brand", t = i;
          break;
        case 5:
          c = r
      }
      return {
        Icon: u,
        iconColor: c.hex,
        textColor: o,
        tooltipText: t
      }
    })({
      timeStatus: G,
      textBrand: C,
      textPositive: I,
      textDanger: R,
      endDateTimeString: M,
      startDateTimeString: p
    }), [G, C, I, R, M, p]),
    z = null;
  if (null != L) {
    let e = (0, _.Ho)(L);
    z = v.Z.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
      recurrenceRule: e.toText()
    });
    let n = o()(t);
    z = function(e, t) {
      let n = t.toDate(),
        s = n.toLocaleString(v.Z.getLocale(), {
          weekday: "long"
        });
      switch (e) {
        case m.z.WEEKLY:
          return v.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
            weekday: s
          });
        case m.z.BIWEEKLY:
          return v.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_BIWEEKLY.format({
            weekday: s
          });
        case m.z.MONTHLY:
          let a = Math.ceil(n.getDate() / 7);
          return v.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_MONTHLY.format({
            weekday: s,
            nth: a
          });
        case m.z.YEARLY:
          return v.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
            date: n.toLocaleString(v.Z.getLocale(), {
              month: "short",
              day: "2-digit"
            })
          });
        case m.z.WEEKDAY_ONLY:
          return v.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
        case m.z.WEEKEND_ONLY:
          return v.Z.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKENDS;
        default:
          return null
      }
    }((0, _.zi)(n, L), n)
  }
  return (0, r.jsxs)(S, {
    className: u()(a, {
      [h.isRecurring]: null != z
    }),
    tooltipText: W,
    children: [f && n === x.p1.SCHEDULED ? (0, r.jsx)(g, {}) : (0, r.jsx)(Y, {
      color: k,
      size: "custom",
      width: 20,
      height: 20
    }), (0, r.jsxs)("div", {
      className: h.eventStatusLabel,
      children: [(0, r.jsx)(d.Text, {
        color: V,
        variant: E,
        children: w
      }), null != z && (0, r.jsx)(d.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        children: z
      })]
    })]
  })
}