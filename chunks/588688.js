r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(278074),
    o = r(788307),
    l = r(26033),
    u = r(388032);
function c(e) {
    let { entry: n, className: r, textClassName: i } = e,
        { message: c, title: d } = (0, s.EQ)(n)
            .when(l.dX, (e) => {
                let { extra: n } = e;
                return {
                    message: u.t['wgtd/f'],
                    title: n.game_name
                };
            })
            .when(l.Mq, (e) => {
                let { extra: n } = e;
                return {
                    message: u.t['wgtd/f'],
                    title: n.activity_name
                };
            })
            .when(l.y0, (e) => {
                let { extra: n } = e;
                return {
                    message: u.t.nCCdMD,
                    title: n.media_title
                };
            })
            .when(l.dU, (e) => {
                var n, r;
                let { extra: i } = e;
                return {
                    message: u.t.PYEeFh,
                    title: null === (r = i.entries[0]) || void 0 === r ? void 0 : null === (n = r.media) || void 0 === n ? void 0 : n.title
                };
            })
            .exhaustive();
    return (0, a.jsx)('div', {
        className: r,
        children: (0, a.jsx)(o.DD, {
            text: u.intl.format(c, { title: d }),
            className: i
        })
    });
}
