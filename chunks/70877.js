e.d(t, {
    Z: function () {
        return S;
    }
});
var l = e(200651);
e(192379);
var i = e(360963),
    r = e.n(i),
    u = e(913527),
    d = e.n(u),
    o = e(593473),
    a = e(442837),
    c = e(481060),
    s = e(579806),
    E = e(957730),
    g = e(430824),
    f = e(358085),
    _ = e(924301),
    v = e(79874),
    Z = e(236373),
    h = e(854698),
    m = e(765305),
    T = e(981631),
    I = e(388032);
let N = 'YYYYMMDDTHHmmss',
    p = 'YYYY-MM-DDTHH:mm:ss',
    P = /RRULE:.*/;
function S(n, t, e, i) {
    var u, S, M;
    let D;
    let C = (0, a.e7)([_.ZP], () => _.ZP.isActive(n)),
        b = (0, v.zI)(null != n ? n : '', i),
        A = (0, a.e7)([_.ZP], () => _.ZP.getGuildScheduledEvent(n), [n]),
        x = (0, a.e7)([g.Z], () => g.Z.getGuild(t), [t]);
    if (C || null == b || null == A) return null;
    D =
        A.entity_type === m.WX.EXTERNAL
            ? A.entity_metadata.location
            : null != e && null != x
              ? I.intl.formatToPlainString(I.t['2t8L09'], {
                    channelName: e.name,
                    guildName: x.name
                })
              : I.intl.string(I.t.VSgOVl);
    let y = d()(A.scheduled_start_time),
        G = null != A.scheduled_end_time ? d()(A.scheduled_end_time) : y,
        w = null != A.description && '' !== A.description ? E.ZP.unparse(A.description, null !== (u = null == e ? void 0 : e.id) && void 0 !== u ? u : T.lds, !0) : '',
        O = (0, Z.KV)(A.recurrence_rule),
        j = null != O ? (0, h.Ho)(O) : null,
        { startTime: L, endTime: U } = b,
        R = null !== (S = d()(L)) && void 0 !== S ? S : y,
        V = null !== (M = d()(null != U ? U : L)) && void 0 !== M ? M : y,
        W = () => {
            let n = r()();
            n.createEvent({
                start: y,
                end: G,
                summary: A.name,
                description: w,
                location: D,
                repeating: j
            }),
                f.isPlatformEmbedded ? s.Z.fileManager.saveWithDialog(n.toString(), 'discord-event.ics') : window.open(n.toURL(), '_blank');
        };
    return (0, l.jsxs)(c.MenuItem, {
        id: I.intl.string(I.t.k5pvjo),
        label: I.intl.string(I.t.k5pvjo),
        action: W,
        children: [
            (0, l.jsx)(c.MenuItem, {
                id: I.intl.string(I.t.JKSLRE),
                label: I.intl.string(I.t.JKSLRE),
                action: () => {
                    var n;
                    let t = null == j ? void 0 : j.toString(),
                        e = {
                            text: A.name,
                            dates: ''.concat(y.format(N), '/').concat(G.format(N)),
                            details: w,
                            action: 'TEMPLATE',
                            location: D,
                            recur: null != t ? (null === (n = P.exec(t)) || void 0 === n ? void 0 : n[0]) : void 0
                        },
                        l = 'https://calendar.google.com/calendar/render?'.concat((0, o.stringify)(e));
                    window.open(l, '_blank');
                }
            }),
            (0, l.jsx)(c.MenuItem, {
                id: I.intl.string(I.t.nrBYSU),
                label: I.intl.string(I.t.nrBYSU),
                action: W
            }),
            (0, l.jsx)(c.MenuItem, {
                id: I.intl.string(I.t.odzaCQ),
                label: I.intl.string(I.t.odzaCQ),
                action: () => {
                    let n = {
                            v: 60,
                            title: A.name,
                            st: R.format(N),
                            et: V.format(N),
                            desc: w,
                            in_loc: D
                        },
                        t = 'https://calendar.yahoo.com/?'.concat((0, o.stringify)(n));
                    window.open(t, '_blank');
                }
            }),
            (0, l.jsx)(c.MenuItem, {
                id: I.intl.string(I.t.rQe8EB),
                label: I.intl.string(I.t.rQe8EB),
                action: () => {
                    let n = {
                            path: '/calendar/action/compose',
                            rru: 'addevent',
                            startdt: R.format(p),
                            enddt: V.format(p),
                            subject: A.name,
                            body: w,
                            location: D,
                            allday: !1
                        },
                        t = 'https://outlook.live.com/calendar/0/deeplink/compose?'.concat((0, o.stringify)(n));
                    window.open(t, '_blank');
                }
            })
        ]
    });
}
