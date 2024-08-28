r.d(t, {
    Z: function () {
        return u;
    }
});
var a = r(735250);
r(470079);
var n = r(442837),
    i = r(814443),
    o = r(594174),
    l = r(681619),
    c = r(914121),
    s = r(535271);
let d = [
    {
        key: 'user',
        cellClassName: c.userCell,
        render(e) {
            var t;
            let { user: r, key: a } = e;
            return null !== (t = null == r ? void 0 : r.username) && void 0 !== t ? t : a;
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
    let e = (0, n.Wu)([i.Z, o.default], () =>
        i.Z.getUserAffinities().map((e) => {
            let { user_id: t, affinity: r } = e;
            return {
                user: o.default.getUser(t),
                affinity: r,
                key: t
            };
        })
    );
    return 0 === e.length
        ? null
        : (0, a.jsx)(l.Z, {
              className: s.panel,
              columns: d,
              rowClassName: c.row,
              data: e
          });
}
