"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("37983");
n("884691");
var u = n("398351"),
  a = n.n(u),
  d = n("866227"),
  i = n.n(d),
  s = n("730290"),
  r = n("446674"),
  o = n("77078"),
  c = n("49671"),
  E = n("884351"),
  f = n("305961"),
  _ = n("773336"),
  T = n("398604"),
  S = n("466148"),
  v = n("189443"),
  g = n("822516"),
  I = n("745049"),
  N = n("782340");
let m = "YYYYMMDDTHHmmss",
  M = "YYYY-MM-DDTHH:mm:ss",
  h = /RRULE:.*/;

function p(e, t, n, u) {
  var d, p, D;
  let R;
  let C = (0, r.useStateFromStores)([T.default], () => T.default.isActive(e)),
    {
      startTime: O,
      endTime: A
    } = (0, S.default)(null != e ? e : "", u),
    G = (0, r.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    L = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  if (C || null == G) return null;
  R = G.entity_type === I.GuildScheduledEventEntityTypes.EXTERNAL ? G.entity_metadata.location : null != n && null != L ? N.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: n.name,
    guildName: L.name
  }) : N.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let y = i(G.scheduled_start_time),
    x = null != G.scheduled_end_time ? i(G.scheduled_end_time) : y,
    V = null != G.description && "" !== G.description ? E.default.unparse(G.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : "", !0) : "",
    U = (0, v.recurrenceRuleFromServer)(G.recurrence_rule),
    b = null != U ? (0, g.getRRule)(U) : null,
    P = null !== (p = i(O)) && void 0 !== p ? p : y,
    w = null !== (D = i(null != A ? A : O)) && void 0 !== D ? D : y,
    F = () => {
      let e = a();
      e.createEvent({
        start: y,
        end: x,
        summary: G.name,
        description: V,
        location: R,
        repeating: b
      }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(o.MenuItem, {
    id: N.default.Messages.ADD_TO_CALENDAR,
    label: N.default.Messages.ADD_TO_CALENDAR,
    action: F,
    children: [(0, l.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: N.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == b ? void 0 : b.toString(),
          n = {
            text: G.name,
            dates: "".concat(y.format(m), "/").concat(x.format(m)),
            details: V,
            action: "TEMPLATE",
            location: R,
            recur: null != t ? null === (e = h.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, s.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: N.default.Messages.DOWNLOAD_ICS,
      label: N.default.Messages.DOWNLOAD_ICS,
      action: F
    }), (0, l.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_YAHOO,
      label: N.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: G.name,
            st: P.format(m),
            et: w.format(m),
            desc: V,
            in_loc: R
          },
          t = "https://calendar.yahoo.com/?".concat((0, s.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_OUTLOOK,
      label: N.default.Messages.ADD_TO_OUTLOOK,
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: P.format(M),
            enddt: w.format(M),
            subject: G.name,
            body: V,
            location: R,
            allday: !1
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, s.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}