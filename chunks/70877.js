"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var l = n("735250");
n("470079");
var u = n("360963"),
  a = n.n(u),
  d = n("913527"),
  s = n.n(d),
  i = n("593473"),
  r = n("442837"),
  o = n("481060"),
  E = n("579806"),
  c = n("957730"),
  f = n("430824"),
  _ = n("358085"),
  T = n("924301"),
  S = n("79874"),
  N = n("236373"),
  I = n("854698"),
  g = n("765305"),
  v = n("981631"),
  m = n("689938");
let M = "YYYYMMDDTHHmmss",
  D = "YYYY-MM-DDTHH:mm:ss",
  h = /RRULE:.*/;

function O(e, t, n, u) {
  var d, O, p;
  let R;
  let A = (0, r.useStateFromStores)([T.default], () => T.default.isActive(e)),
    C = (0, S.useEventScheduleById)(null != e ? e : "", u),
    L = (0, r.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    G = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  if (A || null == C || null == L) return null;
  R = L.entity_type === g.GuildScheduledEventEntityTypes.EXTERNAL ? L.entity_metadata.location : null != n && null != G ? m.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: n.name,
    guildName: G.name
  }) : m.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let y = s()(L.scheduled_start_time),
    P = null != L.scheduled_end_time ? s()(L.scheduled_end_time) : y,
    U = null != L.description && "" !== L.description ? c.default.unparse(L.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : v.EMPTY_STRING_SNOWFLAKE_ID, !0) : "",
    V = (0, N.recurrenceRuleFromServer)(L.recurrence_rule),
    x = null != V ? (0, I.getRRule)(V) : null,
    {
      startTime: b,
      endTime: w
    } = C,
    F = null !== (O = s()(b)) && void 0 !== O ? O : y,
    j = null !== (p = s()(null != w ? w : b)) && void 0 !== p ? p : y,
    H = () => {
      let e = a()();
      e.createEvent({
        start: y,
        end: P,
        summary: L.name,
        description: U,
        location: R,
        repeating: x
      }), _.isPlatformEmbedded ? E.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(o.MenuItem, {
    id: m.default.Messages.ADD_TO_CALENDAR,
    label: m.default.Messages.ADD_TO_CALENDAR,
    action: H,
    children: [(0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == x ? void 0 : x.toString(),
          n = {
            text: L.name,
            dates: "".concat(y.format(M), "/").concat(P.format(M)),
            details: U,
            action: "TEMPLATE",
            location: R,
            recur: null != t ? null === (e = h.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, i.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.DOWNLOAD_ICS,
      label: m.default.Messages.DOWNLOAD_ICS,
      action: H
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_YAHOO,
      label: m.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: L.name,
            st: F.format(M),
            et: j.format(M),
            desc: U,
            in_loc: R
          },
          t = "https://calendar.yahoo.com/?".concat((0, i.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_OUTLOOK,
      label: m.default.Messages.ADD_TO_OUTLOOK,
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: F.format(D),
            enddt: j.format(D),
            subject: L.name,
            body: U,
            location: R,
            allday: !1
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, i.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}