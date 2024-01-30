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
  r = n("730290"),
  s = n("446674"),
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
  h = "YYYY-MM-DDTHH:mm:ss",
  M = /RRULE:.*/;

function p(e, t, n, u) {
  var d, p, C;
  let R;
  let D = (0, s.useStateFromStores)([T.default], () => T.default.isActive(e)),
    {
      startTime: O,
      endTime: A
    } = (0, S.default)(null != e ? e : "", u),
    L = (0, s.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    y = (0, s.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  if (D || null == L) return null;
  R = L.entity_type === I.GuildScheduledEventEntityTypes.EXTERNAL ? L.entity_metadata.location : null != n && null != y ? N.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: n.name,
    guildName: y.name
  }) : N.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let x = i(L.scheduled_start_time),
    G = null != L.scheduled_end_time ? i(L.scheduled_end_time) : x,
    V = null != L.description && "" !== L.description ? E.default.unparse(L.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : "", !0) : "",
    U = (0, v.recurrenceRuleFromServer)(L.recurrence_rule),
    b = null != U ? (0, g.getRRule)(U) : null,
    w = null !== (p = i(O)) && void 0 !== p ? p : x,
    P = null !== (C = i(null != A ? A : O)) && void 0 !== C ? C : x,
    j = () => {
      let e = a();
      e.createEvent({
        start: x,
        end: G,
        summary: L.name,
        description: V,
        location: R,
        repeating: b
      }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(o.MenuItem, {
    id: N.default.Messages.ADD_TO_CALENDAR,
    label: N.default.Messages.ADD_TO_CALENDAR,
    action: j,
    children: [(0, l.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: N.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == b ? void 0 : b.toString(),
          n = {
            text: L.name,
            dates: "".concat(x.format(m), "/").concat(G.format(m)),
            details: V,
            action: "TEMPLATE",
            location: R,
            recur: null != t ? null === (e = M.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, r.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: N.default.Messages.DOWNLOAD_ICS,
      label: N.default.Messages.DOWNLOAD_ICS,
      action: j
    }), (0, l.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_YAHOO,
      label: N.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: L.name,
            st: w.format(m),
            et: P.format(m),
            desc: V,
            in_loc: R
          },
          t = "https://calendar.yahoo.com/?".concat((0, r.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_OUTLOOK,
      label: N.default.Messages.ADD_TO_OUTLOOK,
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: w.format(h),
            enddt: P.format(h),
            subject: L.name,
            body: V,
            location: R,
            allday: !1
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, r.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}