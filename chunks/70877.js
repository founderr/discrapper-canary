"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("735250");
n("470079");
var u = n("811603"),
  a = n.n(u),
  d = n("913527"),
  s = n.n(d),
  i = n("593473"),
  r = n("442837"),
  o = n("481060"),
  c = n("579806"),
  E = n("957730"),
  f = n("430824"),
  _ = n("358085"),
  T = n("924301"),
  S = n("79874"),
  N = n("236373"),
  v = n("854698"),
  g = n("765305"),
  I = n("981631"),
  M = n("689938");
let m = "YYYYMMDDTHHmmss",
  h = "YYYY-MM-DDTHH:mm:ss",
  D = /RRULE:.*/;

function p(e, t, n, u) {
  var d, p, O;
  let R;
  let C = (0, r.useStateFromStores)([T.default], () => T.default.isActive(e)),
    {
      startTime: A,
      endTime: L
    } = (0, S.default)(null != e ? e : "", u),
    G = (0, r.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    y = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]);
  if (C || null == G) return null;
  R = G.entity_type === g.GuildScheduledEventEntityTypes.EXTERNAL ? G.entity_metadata.location : null != n && null != y ? M.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: n.name,
    guildName: y.name
  }) : M.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let P = s()(G.scheduled_start_time),
    V = null != G.scheduled_end_time ? s()(G.scheduled_end_time) : P,
    U = null != G.description && "" !== G.description ? E.default.unparse(G.description, null !== (d = null == n ? void 0 : n.id) && void 0 !== d ? d : I.EMPTY_STRING_SNOWFLAKE_ID, !0) : "",
    x = (0, N.recurrenceRuleFromServer)(G.recurrence_rule),
    b = null != x ? (0, v.getRRule)(x) : null,
    w = null !== (p = s()(A)) && void 0 !== p ? p : P,
    H = null !== (O = s()(null != L ? L : A)) && void 0 !== O ? O : P,
    j = () => {
      let e = a()();
      e.createEvent({
        start: P,
        end: V,
        summary: G.name,
        description: U,
        location: R,
        repeating: b
      }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, l.jsxs)(o.MenuItem, {
    id: M.default.Messages.ADD_TO_CALENDAR,
    label: M.default.Messages.ADD_TO_CALENDAR,
    action: j,
    children: [(0, l.jsx)(o.MenuItem, {
      id: M.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: M.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == b ? void 0 : b.toString(),
          n = {
            text: G.name,
            dates: "".concat(P.format(m), "/").concat(V.format(m)),
            details: U,
            action: "TEMPLATE",
            location: R,
            recur: null != t ? null === (e = D.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          l = "https://calendar.google.com/calendar/render?".concat((0, i.stringify)(n));
        window.open(l, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: M.default.Messages.DOWNLOAD_ICS,
      label: M.default.Messages.DOWNLOAD_ICS,
      action: j
    }), (0, l.jsx)(o.MenuItem, {
      id: M.default.Messages.ADD_TO_YAHOO,
      label: M.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: G.name,
            st: w.format(m),
            et: H.format(m),
            desc: U,
            in_loc: R
          },
          t = "https://calendar.yahoo.com/?".concat((0, i.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, l.jsx)(o.MenuItem, {
      id: M.default.Messages.ADD_TO_OUTLOOK,
      label: M.default.Messages.ADD_TO_OUTLOOK,
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: w.format(h),
            enddt: H.format(h),
            subject: G.name,
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