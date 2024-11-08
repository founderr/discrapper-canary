n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var a = n(442837),
    l = n(814443),
    i = n(594174),
    o = n(681619),
    c = n(370577),
    s = n(986310);
let d = [
    {
        key: 'user',
        cellClassName: c.userCell,
        render(e) {
            var t;
            let { user: n, key: r } = e;
            return null !== (t = null == n ? void 0 : n.username) && void 0 !== t ? t : r;
        }
    },
    {
        key: 'affinity',
        cellClassName: c.affinityCell,
        render(e) {
            let { affinity: t } = e;
            return ''.concat(t);
        }
    }
];
function u() {
    let e = (0, a.Wu)([l.Z, i.default], () =>
        l.Z.getUserAffinities().map((e) => {
            let { user_id: t, affinity: n } = e;
            return {
                user: i.default.getUser(t),
                affinity: n,
                key: t
            };
        })
    );
    return 0 === e.length
        ? null
        : (0, r.jsx)(o.Z, {
              className: s.panel,
              columns: d,
              rowClassName: c.row,
              data: e
          });
}
