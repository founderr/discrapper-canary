n(627341);
var r,
    a,
    s = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(278074),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(884697),
    p = n(388032),
    f = n(844976);
((a = r || (r = {})).BANNER = 'banner'), (a.MODAL = 'modal'), (a.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: n, className: r } = e,
        a = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let i = (0, m.OT)(t.unpublishedAt);
    function h(e) {
        return (0, s.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: l()((0, c.wj)(a) ? f.badgeDark : f.badgeLight, r)
        });
    }
    return (0, o.EQ)([n, i > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => h(p.intl.formatToPlainString(p.t['8gsP5O'], { days: i })))
        .with(['modal', !0], () => h(p.intl.formatToPlainString(p.t.Io7ozs, { days: i })))
        .otherwise(() => h(p.intl.string(p.t.Bc13HB)));
};
