i.r(n),
    i.d(n, {
        default: function () {
            return c;
        }
    });
var r = i(200651);
i(192379);
var e = i(481060),
    a = i(388032);
function c(t) {
    let { ruleName: n, keyword: i, ...c } = t,
        l = null != n ? n : a.intl.string(a.t.ffR2cH);
    return (0, r.jsx)(e.ConfirmModal, {
        ...c,
        header: a.intl.string(a.t['zib/xM']),
        cancelText: a.intl.string(a.t['ETE/oK']),
        confirmText: a.intl.string(a.t['cY+Ooa']),
        children: (0, r.jsx)(e.Text, {
            variant: 'text-md/normal',
            children: a.intl.format(a.t.AxSYKC, {
                ruleName: l,
                keyword: i
            })
        })
    });
}
