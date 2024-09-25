n.d(t, {
    Rg: function () {
        return h;
    },
    Xh: function () {
        return f;
    },
    ho: function () {
        return E;
    }
});
var r = n(627341);
var i = n(735250);
n(470079);
var a = n(278074),
    o = n(481060),
    s = n(841784),
    l = n(297781),
    u = n(371991),
    c = n(561308),
    d = n(232174),
    _ = n(981631);
function E(e) {
    var t, n, r;
    let { activity: c } = e,
        E = null !== (r = null === (t = c.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== r ? r : c.created_at;
    if (null == E || (0, d.Z)(c)) return null;
    let f = (0, a.EQ)(c)
        .when(s.Z, () => o.ActivitiesIcon)
        .with({ type: _.IIU.LISTENING }, () => o.RecordPlayerIcon)
        .with({ type: _.IIU.WATCHING }, () => o.TvIcon)
        .otherwise(() => o.GameControllerIcon);
    return (0, i.jsxs)(l.m7, {
        children: [
            (0, i.jsx)(f, {
                size: 'xxs',
                color: o.tokens.colors.TEXT_POSITIVE
            }),
            (0, i.jsx)(u.x3, {
                entry: {
                    start: E,
                    end: null === (n = c.timestamps) || void 0 === n ? void 0 : n.end
                },
                textColor: 'text-positive',
                bold: !0
            })
        ]
    });
}
function f(e) {
    let { activity: t } = e;
    if ((0, s.Z)(t) || null == t.party) return null;
    let n = (0, c.bT)(t.state, t.party);
    return null == n
        ? null
        : (0, i.jsx)(l.ej, {
              Icon: o.GroupIcon,
              text: n
          });
}
function h(e) {
    var t;
    let { activity: n } = e,
        r = (0, c.ap)(null === (t = n.assets) || void 0 === t ? void 0 : t.large_text);
    return null == r
        ? null
        : (0, i.jsx)(l.ej, {
              Icon: o.TopicsIcon,
              text: r
          });
}
