r.d(n, {
    U: function () {
        return o;
    },
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(388032);
function o(e) {
    return null == e || null == e.end_time
        ? null
        : s.intl.formatToPlainString(s.t.j7h4AA, {
              endTime: new Date(e.end_time).toLocaleString(s.intl.currentLocale, {
                  month: 'numeric',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit'
              })
          });
}
function l(e) {
    let { muteConfig: n, className: r } = e,
        s = o(n);
    return null != s
        ? (0, i.jsx)(a.Text, {
              variant: 'text-xs/normal',
              color: 'text-muted',
              className: r,
              children: s
          })
        : null;
}
