"use strict";
l.r(t), l.d(t, {
  default: function() {
    return D
  }
});
var n = l("37983");
l("884691");
var a = l("398351"),
  u = l.n(a),
  s = l("866227"),
  d = l.n(s),
  r = l("730290"),
  i = l("446674"),
  o = l("77078"),
  c = l("49671"),
  f = l("884351"),
  E = l("305961"),
  _ = l("773336"),
  T = l("398604"),
  M = l("466148"),
  v = l("189443"),
  g = l("822516"),
  I = l("745049"),
  m = l("782340");
let N = "YYYYMMDDTHHmmss",
  R = "YYYY-MM-DDTHH:mm:ss",
  S = /RRULE:.*/;

function D(e, t, l, a) {
  var s, D, C;
  let O;
  let h = (0, i.useStateFromStores)([T.default], () => T.default.isActive(e)),
    {
      startTime: p,
      endTime: x
    } = (0, M.default)(null != e ? e : "", a),
    L = (0, i.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    b = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]);
  if (h || null == L) return null;
  O = L.entity_type === I.GuildScheduledEventEntityTypes.EXTERNAL ? L.entity_metadata.location : null != l && null != b ? m.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: l.name,
    guildName: b.name
  }) : m.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let A = d(L.scheduled_start_time),
    V = null != L.scheduled_end_time ? d(L.scheduled_end_time) : A,
    j = null != L.description && "" !== L.description ? f.default.unparse(L.description, null !== (s = null == l ? void 0 : l.id) && void 0 !== s ? s : "", !0) : "",
    G = (0, v.recurrenceRuleFromServer)(L.recurrence_rule),
    P = null != G ? (0, g.getRRule)(G) : null,
    U = null !== (D = d(p)) && void 0 !== D ? D : A,
    F = null !== (C = d(null != x ? x : p)) && void 0 !== C ? C : A,
    w = () => {
      let e = u();
      e.createEvent({
        start: A,
        end: V,
        summary: L.name,
        description: j,
        location: O,
        repeating: P
      }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, n.jsxs)(o.MenuItem, {
    id: m.default.Messages.ADD_TO_CALENDAR,
    label: m.default.Messages.ADD_TO_CALENDAR,
    action: w,
    children: [(0, n.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: m.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == P ? void 0 : P.toString(),
          l = {
            text: L.name,
            dates: "".concat(A.format(N), "/").concat(V.format(N)),
            details: j,
            action: "TEMPLATE",
            location: O,
            recur: null != t ? null === (e = S.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          n = "https://calendar.google.com/calendar/render?".concat((0, r.stringify)(l));
        window.open(n, "_blank")
      }
    }), (0, n.jsx)(o.MenuItem, {
      id: m.default.Messages.DOWNLOAD_ICS,
      label: m.default.Messages.DOWNLOAD_ICS,
      action: w
    }), (0, n.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_YAHOO,
      label: m.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: L.name,
            st: U.format(N),
            et: F.format(N),
            desc: j,
            in_loc: O
          },
          t = "https://calendar.yahoo.com/?".concat((0, r.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, n.jsx)(o.MenuItem, {
      id: m.default.Messages.ADD_TO_OUTLOOK,
      label: m.default.Messages.ADD_TO_OUTLOOK,
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: U.format(R),
            enddt: F.format(R),
            subject: L.name,
            body: j,
            location: O,
            allday: !1
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, r.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}