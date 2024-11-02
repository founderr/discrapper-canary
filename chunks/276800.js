var i = n(200651);
n(192379);
var r = n(774078),
    a = n(706454),
    s = n(388032);
function l(e) {
    return e.toLocaleString(a.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
t.Z = function (e) {
    let { endDate: t } = e,
        n = (0, r.Z)(t, 1000);
    return (0, i.jsx)(i.Fragment, {
        children:
            n.days > 0
                ? s.intl.formatToPlainString(s.t.f0QaSU, { days: n.days })
                : s.intl.formatToPlainString(s.t['3MT4MT'], {
                      hours: l(n.hours),
                      minutes: l(n.minutes),
                      seconds: l(n.seconds)
                  })
    });
};
