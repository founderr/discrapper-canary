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
    h = n(388032),
    p = n(161386);
((a = r || (r = {})).BANNER = 'banner'), (a.MODAL = 'modal'), (a.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: n, className: r } = e,
        a = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let i = (0, m.OT)(t.unpublishedAt);
    function f(e) {
        return (0, s.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: l()((0, c.wj)(a) ? p.badgeDark : p.badgeLight, r)
        });
    }
    return (0, o.EQ)([n, i > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => f(h.intl.formatToPlainString(h.t['8gsP5O'], { days: i })))
        .with(['modal', !0], () => f(h.intl.formatToPlainString(h.t.Io7ozs, { days: i })))
        .otherwise(() => f(h.intl.string(h.t.Bc13HB)));
};
