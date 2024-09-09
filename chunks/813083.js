r(627341);
var a,
    n,
    s = r(735250);
r(470079);
var i = r(120356),
    o = r.n(i),
    l = r(278074),
    c = r(780384),
    d = r(481060),
    u = r(410030),
    f = r(884697),
    p = r(689938),
    C = r(112562);
((n = a || (a = {})).BANNER = 'banner'), (n.MODAL = 'modal'), (n.CARD = 'card');
t.Z = (e) => {
    let { category: t, display: r, className: a } = e,
        n = (0, u.ZP)();
    if (null == t.unpublishedAt) return null;
    let i = (0, f.OT)(t.unpublishedAt);
    function _(e) {
        return (0, s.jsx)(d.TextBadge, {
            disableColor: !0,
            text: e,
            className: o()((0, c.wj)(n) ? C.badgeDark : C.badgeLight, a)
        });
    }
    return (0, l.EQ)([r, i > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => _(p.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({ days: i })))
        .with(['modal', !0], () => _(p.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({ days: i })))
        .otherwise(() => _(p.Z.Messages.COLLECTIBLES_LAST_DAY));
};
