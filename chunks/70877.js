"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
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
  g = n("854698"),
  I = n("765305"),
  v = n("981631"),
  m = n("689938");
let M = "YYYYMMDDTHHmmss",
  D = "YYYY-MM-DDTHH:mm:ss",
  O = /RRULE:.*/;

function h(e, t, n, u) {
  var d, h, p;
  let R;
  let A = (0, r.useStateFromStores)([T.default], () => T.default.isActive(e)),
    {
      startTime: C,
      endTime: L
    } = (0, S.default)(null != e ? e : "", u),
    G = (0, r.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    P = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  if (A || null == G) return null;
  R = G.entity_type === I.GuildScheduledEventEntityTypes.EXTERNAL ? G.entity_metadata.location : null != n && null != P ? m.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: n.name,
    guildName: P.name
  }) : m.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let y = s()(G.scheduled_start_time),
    U = null != G.scheduled_end_time ? s()(G.scheduled_end_time) : y,
    V = null != G.description && "" !== G.description ? c.default.unparse(G.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : v.EMPTY_STRING_SNOWFLAKE_ID, !0) : "",
    x = (0, N.recurrenceRuleFromServer)(G.recurrence_rule),
    b = null != x ? (0, g.getRRule)(x) : null,
    w = null !== (h = s()(C)) && void 0 !== h ? h : y,
    F = null !== (p = s()(null != L ? L : C)) && void 0 !== p ? p : y,
    j = () => {
      let e = a()();
      e.createEvent({
        start: y,
        end: U,
        summary: G.name,
        description: V,
        location: R,
        repeating: b
      }), _.isPlatformEmbedded ? E.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(o.MenuItem, {
    id: m.default.Messages.ADD_TO_CALENDAR,
    label: m.default.Messages.ADD_TO_CALENDAR,
    action: j,
    children: [(0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == b ? void 0 : b.toString(),
          n = {
            text: G.name,
            dates: "".concat(y.format(M), "/").concat(U.format(M)),
            details: V,
            action: "TEMPLATE",
            location: R,
            recur: null != t ? null === (e = O.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, i.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.DOWNLOAD_ICS,
      label: m.default.Messages.DOWNLOAD_ICS,
      action: j
    }), (0, l.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_YAHOO,
      label: m.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: G.name,
            st: w.format(M),
            et: F.format(M),
            desc: V,
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
            startdt: w.format(D),
            enddt: F.format(D),
            subject: G.name,
            body: V,
            location: R,
            allday: !1
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, i.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}