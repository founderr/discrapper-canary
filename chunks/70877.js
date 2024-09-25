t.d(n, {
    Z: function () {
        return C;
    }
});
var l = t(735250);
t(470079);
var i = t(360963),
    u = t.n(i),
    s = t(913527),
    a = t.n(s),
    r = t(593473),
    E = t(442837),
    d = t(481060),
    o = t(579806),
    c = t(957730),
    _ = t(430824),
    Z = t(358085),
    T = t(924301),
    N = t(79874),
    I = t(236373),
    g = t(854698),
    M = t(765305),
    f = t(981631),
    v = t(689938);
let D = 'YYYYMMDDTHHmmss',
    m = 'YYYY-MM-DDTHH:mm:ss',
    L = /RRULE:.*/;
function C(e, n, t, i) {
    var s, C, P;
    let S;
    let O = (0, E.e7)([T.ZP], () => T.ZP.isActive(e)),
        h = (0, N.zI)(null != e ? e : '', i),
        R = (0, E.e7)([T.ZP], () => T.ZP.getGuildScheduledEvent(e), [e]),
        A = (0, E.e7)([_.Z], () => _.Z.getGuild(n), [n]);
    if (O || null == h || null == R) return null;
    S =
        R.entity_type === M.WX.EXTERNAL
            ? R.entity_metadata.location
            : null != t && null != A
              ? v.Z.Messages.CALENDAR_CHANNEL_LOCATION.format({
                    channelName: t.name,
                    guildName: A.name
                })
              : v.Z.Messages.NOTIFICATION_TITLE_DISCORD;
    let V = a()(R.scheduled_start_time),
        p = null != R.scheduled_end_time ? a()(R.scheduled_end_time) : V,
        x = null != R.description && '' !== R.description ? c.ZP.unparse(R.description, null !== (s = null == t ? void 0 : t.id) && void 0 !== s ? s : f.lds, !0) : '',
        U = (0, I.KV)(R.recurrence_rule),
        G = null != U ? (0, g.Ho)(U) : null,
        { startTime: b, endTime: j } = h,
        y = null !== (C = a()(b)) && void 0 !== C ? C : V,
        w = null !== (P = a()(null != j ? j : b)) && void 0 !== P ? P : V,
        H = () => {
            let e = u()();
            e.createEvent({
                start: V,
                end: p,
                summary: R.name,
                description: x,
                location: S,
                repeating: G
            }),
                Z.isPlatformEmbedded ? o.Z.fileManager.saveWithDialog(e.toString(), 'discord-event.ics') : window.open(e.toURL(), '_blank');
        };
    return (0, l.jsxs)(d.MenuItem, {
        id: v.Z.Messages.ADD_TO_CALENDAR,
        label: v.Z.Messages.ADD_TO_CALENDAR,
        action: H,
        children: [
            (0, l.jsx)(d.MenuItem, {
                id: v.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
                label: v.Z.Messages.ADD_TO_GOOGLE_CALENDAR,
                action: () => {
                    var e;
                    let n = null == G ? void 0 : G.toString(),
                        t = {
                            text: R.name,
                            dates: ''.concat(V.format(D), '/').concat(p.format(D)),
                            details: x,
                            action: 'TEMPLATE',
                            location: S,
                            recur: null != n ? (null === (e = L.exec(n)) || void 0 === e ? void 0 : e[0]) : void 0
                        },
                        l = 'https://calendar.google.com/calendar/render?'.concat((0, r.stringify)(t));
                    window.open(l, '_blank');
                }
            }),
            (0, l.jsx)(d.MenuItem, {
                id: v.Z.Messages.DOWNLOAD_ICS,
                label: v.Z.Messages.DOWNLOAD_ICS,
                action: H
            }),
            (0, l.jsx)(d.MenuItem, {
                id: v.Z.Messages.ADD_TO_YAHOO,
                label: v.Z.Messages.ADD_TO_YAHOO,
                action: () => {
                    let e = {
                            v: 60,
                            title: R.name,
                            st: y.format(D),
                            et: w.format(D),
                            desc: x,
                            in_loc: S
                        },
                        n = 'https://calendar.yahoo.com/?'.concat((0, r.stringify)(e));
                    window.open(n, '_blank');
                }
            }),
            (0, l.jsx)(d.MenuItem, {
                id: v.Z.Messages.ADD_TO_OUTLOOK,
                label: v.Z.Messages.ADD_TO_OUTLOOK,
                action: () => {
                    let e = {
                            path: '/calendar/action/compose',
                            rru: 'addevent',
                            startdt: y.format(m),
                            enddt: w.format(m),
                            subject: R.name,
                            body: x,
                            location: S,
                            allday: !1
                        },
                        n = 'https://outlook.live.com/calendar/0/deeplink/compose?'.concat((0, r.stringify)(e));
                    window.open(n, '_blank');
                }
            })
        ]
    });
}
