n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(423650),
    i = n.n(r),
    a = n(754700),
    s = n(628665),
    o = n(388032);
function l(e) {
    let { entityName: t } = e,
        n = [
            {
                key: 'NOT_INTERESTED',
                text: o.intl.formatToPlainString(o.t.AZRWVV, { entityName: t })
            },
            {
                key: 'INVALUABLE',
                text: o.intl.string(o.t.ETU4NT)
            },
            {
                key: 'TOO_LONG',
                text: o.intl.string(o.t.uRIIpK)
            },
            {
                key: 'UNSURE_HOW',
                text: o.intl.string(o.t['5dxvxs'])
            },
            {
                key: 'OTHER',
                text: o.intl.string(o.t.RFasgo)
            }
        ];
    return {
        id: '1290718710658629658',
        title: o.intl.string(o.t.ugbhDQ),
        subtitle: o.intl.string(o.t.FIYcpK),
        choices: i()(n.slice(0, 4)).concat(n[4]),
        taskType: a.X.WATCH_VIDEO,
        experiment: s.Y
    };
}
