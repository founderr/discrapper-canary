n(627341);
var r,
    s,
    a = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(278074),
    c = n(780384),
    d = n(481060),
    u = n(410030),
    m = n(884697),
    f = n(689938),
    p = n(161386);
((s = r || (r = {})).BANNER = 'banner'), (s.MODAL = 'modal'), (s.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: n, className: r } = e,
        s = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let i = (0, m.OT)(t.unpublishedAt);
    function C(e) {
        return (0, a.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: l()((0, c.wj)(s) ? p.badgeDark : p.badgeLight, r)
        });
    }
    return (0, o.EQ)([n, i > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => C(f.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({ days: i })))
        .with(['modal', !0], () => C(f.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: i })))
        .otherwise(() => C(f.Z.Messages.COLLECTIBLES_LAST_DAY));
};
