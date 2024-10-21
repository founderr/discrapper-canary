s(627341);
var a,
    r,
    n = s(200651);
s(192379);
var i = s(120356),
    l = s.n(i),
    o = s(278074),
    c = s(780384),
    d = s(481060),
    u = s(410030),
    m = s(884697),
    C = s(689938),
    f = s(161386);
((r = a || (a = {})).BANNER = 'banner'), (r.MODAL = 'modal'), (r.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: s, className: a } = e,
        r = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let i = (0, m.OT)(t.unpublishedAt);
    function p(e) {
        return (0, n.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: l()((0, c.wj)(r) ? f.badgeDark : f.badgeLight, a)
        });
    }
    return (0, o.EQ)([s, i > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => p(C.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({ days: i })))
        .with(['modal', !0], () => p(C.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: i })))
        .otherwise(() => p(C.Z.Messages.COLLECTIBLES_LAST_DAY));
};
