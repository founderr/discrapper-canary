n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(278074),
    a = n(788307),
    s = n(26033),
    o = n(388032);
function l(e) {
    let { entry: t, className: n, textClassName: l } = e,
        { message: u, title: c } = (0, i.EQ)(t)
            .when(s.dX, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t['wgtd/f'],
                    title: t.game_name
                };
            })
            .when(s.Mq, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t['wgtd/f'],
                    title: t.activity_name
                };
            })
            .when(s.y0, (e) => {
                let { extra: t } = e;
                return {
                    message: o.t.nCCdMD,
                    title: t.media_title
                };
            })
            .when(s.dU, (e) => {
                var t, n;
                let { extra: r } = e;
                return {
                    message: o.t.PYEeFh,
                    title: null === (n = r.entries[0]) || void 0 === n ? void 0 : null === (t = n.media) || void 0 === t ? void 0 : t.title
                };
            })
            .otherwise(() => ({
                message: null,
                title: null
            }));
    return null == c || '' === c
        ? null
        : (0, r.jsx)('div', {
              className: n,
              children: (0, r.jsx)(a.DD, {
                  text: o.intl.format(u, { title: c }),
                  className: l
              })
          });
}
