r(627341);
var s,
    n,
    a = r(200651);
r(192379);
var i = r(120356),
    l = r.n(i),
    o = r(278074),
    c = r(780384),
    d = r(481060),
    u = r(410030),
    m = r(884697),
    f = r(689938),
    p = r(161386);
((n = s || (s = {})).BANNER = 'banner'), (n.MODAL = 'modal'), (n.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: r, className: s } = e,
        n = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let i = (0, m.OT)(t.unpublishedAt);
    function C(e) {
        return (0, a.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: l()((0, c.wj)(n) ? p.badgeDark : p.badgeLight, s)
        });
    }
    return (0, o.EQ)([r, i > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => C(f.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({ days: i })))
        .with(['modal', !0], () => C(f.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: i })))
        .otherwise(() => C(f.Z.Messages.COLLECTIBLES_LAST_DAY));
};
