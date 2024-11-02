n.d(t, {
    Rg: function () {
        return h;
    },
    Xh: function () {
        return _;
    },
    ho: function () {
        return f;
    }
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(481060),
    s = n(841784),
    o = n(297781),
    l = n(371991),
    u = n(561308),
    c = n(232174),
    d = n(981631);
function f(e) {
    var t, n, u;
    let { activity: f } = e,
        _ = null !== (u = null === (t = f.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== u ? u : f.created_at;
    if (null == _ || (0, c.Z)(f)) return null;
    let h = (0, i.EQ)(f)
        .when(s.Z, () => a.ActivitiesIcon)
        .with({ type: d.IIU.LISTENING }, () => a.RecordPlayerIcon)
        .with({ type: d.IIU.WATCHING }, () => a.TvIcon)
        .otherwise(() => a.GameControllerIcon);
    return (0, r.jsxs)(o.m7, {
        children: [
            (0, r.jsx)(h, {
                size: 'xxs',
                color: a.tokens.colors.TEXT_POSITIVE
            }),
            (0, r.jsx)(l.x3, {
                entry: {
                    start: _,
                    end: null === (n = f.timestamps) || void 0 === n ? void 0 : n.end
                },
                textColor: 'text-positive',
                bold: !0
            })
        ]
    });
}
function _(e) {
    let { activity: t } = e;
    if ((0, s.Z)(t) || null == t.party) return null;
    let n = (0, u.bT)(t.state, t.party);
    return null == n
        ? null
        : (0, r.jsx)(o.ej, {
              Icon: a.GroupIcon,
              text: n
          });
}
function h(e) {
    var t;
    let { activity: n } = e,
        i = (0, u.ap)(null === (t = n.assets) || void 0 === t ? void 0 : t.large_text);
    return null == i
        ? null
        : (0, r.jsx)(o.ej, {
              Icon: a.TopicsIcon,
              text: i
          });
}
