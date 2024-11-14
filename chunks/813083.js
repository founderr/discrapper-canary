n(627341);
var r,
    a,
    i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    o = n(278074),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(884697),
    p = n(388032),
    h = n(161386);
((a = r || (r = {})).BANNER = 'banner'), (a.MODAL = 'modal'), (a.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: n, className: r } = e,
        a = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let s = (0, m.OT)(t.unpublishedAt);
    function f(e) {
        return (0, i.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: l()((0, c.wj)(a) ? h.badgeDark : h.badgeLight, r)
        });
    }
    return (0, o.EQ)([n, s > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => f(p.intl.formatToPlainString(p.t['8gsP5O'], { days: s })))
        .with(['modal', !0], () => f(p.intl.formatToPlainString(p.t.Io7ozs, { days: s })))
        .otherwise(() => f(p.intl.string(p.t.Bc13HB)));
};
