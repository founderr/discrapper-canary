"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
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
  I = l("822516"),
  g = l("745049"),
  m = l("49111"),
  N = l("782340");
let R = "YYYYMMDDTHHmmss",
  S = "YYYY-MM-DDTHH:mm:ss",
  D = /RRULE:.*/;

function C(e, t, l, a) {
  var s, C, O;
  let h;
  let p = (0, i.useStateFromStores)([T.default], () => T.default.isActive(e)),
    {
      startTime: x,
      endTime: L
    } = (0, M.default)(null != e ? e : "", a),
    b = (0, i.useStateFromStores)([T.default], () => T.default.getGuildScheduledEvent(e), [e]),
    A = (0, i.useStateFromStores)([E.default], () => E.default.getGuild(t), [t]);
  if (p || null == b) return null;
  h = b.entity_type === g.GuildScheduledEventEntityTypes.EXTERNAL ? b.entity_metadata.location : null != l && null != A ? N.default.Messages.CALENDAR_CHANNEL_LOCATION.format({
    channelName: l.name,
    guildName: A.name
  }) : N.default.Messages.NOTIFICATION_TITLE_DISCORD;
  let V = d(b.scheduled_start_time),
    j = null != b.scheduled_end_time ? d(b.scheduled_end_time) : V,
    G = null != b.description && "" !== b.description ? f.default.unparse(b.description, null !== (s = null == l ? void 0 : l.id) && void 0 !== s ? s : m.EMPTY_STRING_CHANNEL_ID, !0) : "",
    P = (0, v.recurrenceRuleFromServer)(b.recurrence_rule),
    U = null != P ? (0, I.getRRule)(P) : null,
    F = null !== (C = d(x)) && void 0 !== C ? C : V,
    w = null !== (O = d(null != L ? L : x)) && void 0 !== O ? O : V,
    y = () => {
      let e = u();
      e.createEvent({
        start: V,
        end: j,
        summary: b.name,
        description: G,
        location: h,
        repeating: U
      }), _.isPlatformEmbedded ? c.default.fileManager.saveWithDialog(e.toString(), "discord-event.ics") : window.open(e.toURL(), "_blank")
    };
  return (0, n.jsxs)(o.MenuItem, {
    id: N.default.Messages.ADD_TO_CALENDAR,
    label: N.default.Messages.ADD_TO_CALENDAR,
    action: y,
    children: [(0, n.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      label: N.default.Messages.ADD_TO_GOOGLE_CALENDAR,
      action: () => {
        var e;
        let t = null == U ? void 0 : U.toString(),
          l = {
            text: b.name,
            dates: "".concat(V.format(R), "/").concat(j.format(R)),
            details: G,
            action: "TEMPLATE",
            location: h,
            recur: null != t ? null === (e = D.exec(t)) || void 0 === e ? void 0 : e[0] : void 0
          },
          n = "https://calendar.google.com/calendar/render?".concat((0, r.stringify)(l));
        window.open(n, "_blank")
      }
    }), (0, n.jsx)(o.MenuItem, {
      id: N.default.Messages.DOWNLOAD_ICS,
      label: N.default.Messages.DOWNLOAD_ICS,
      action: y
    }), (0, n.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_YAHOO,
      label: N.default.Messages.ADD_TO_YAHOO,
      action: () => {
        let e = {
            v: 60,
            title: b.name,
            st: F.format(R),
            et: w.format(R),
            desc: G,
            in_loc: h
          },
          t = "https://calendar.yahoo.com/?".concat((0, r.stringify)(e));
        window.open(t, "_blank")
      }
    }), (0, n.jsx)(o.MenuItem, {
      id: N.default.Messages.ADD_TO_OUTLOOK,
      label: N.default.Messages.ADD_TO_OUTLOOK,
      action: () => {
        let e = {
            path: "/calendar/action/compose",
            rru: "addevent",
            startdt: F.format(S),
            enddt: w.format(S),
            subject: b.name,
            body: G,
            location: h,
            allday: !1
          },
          t = "https://outlook.live.com/calendar/0/deeplink/compose?".concat((0, r.stringify)(e));
        window.open(t, "_blank")
      }
    })]
  })
}