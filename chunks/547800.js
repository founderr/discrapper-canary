n.r(t),
    n.d(t, {
        CalendarPicker: function () {
            return f;
        }
    });
var r = n(200651),
    i = n(192379),
    a = n(913527),
    s = n.n(a),
    o = n(674091),
    l = n.n(o),
    u = n(442837),
    c = n(706454);
n(165969);
var d = n(525300);
function f(e) {
    let { value: t = s()().local(), minDate: n, maxDate: a, onSelect: o, calendarClassName: f, autoFocus: _, onClickOutside: p } = e,
        h = i.useCallback(
            (e, t) => {
                null == o || o(s()(e), t);
            },
            [o]
        ),
        m = i.useMemo(() => t.toDate(), [t]),
        g = i.useMemo(() => (null == a ? void 0 : a.toDate()), [a]),
        E = i.useMemo(() => (null == n ? void 0 : n.toDate()), [n]),
        v = (0, u.e7)([c.default], () => c.default.locale),
        b = i.useRef(null),
        I = i.useCallback((e) => {
            let t = e.currentTarget;
            if (!!t.classList.contains('react-datepicker__day'))
                setTimeout(() => {
                    var e, n;
                    if (null === (e = b.current) || void 0 === e ? void 0 : e.contains(t)) return;
                    let r = null === (n = b.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                    if (null != r) r.focus();
                }, 100);
        }, []);
    return (0, r.jsx)('div', {
        ref: b,
        className: d.calendarPicker,
        children: (0, r.jsx)(l(), {
            calendarClassName: f,
            selected: m,
            onChange: h,
            autoFocus: _,
            fixedHeight: !0,
            inline: !0,
            locale: v,
            maxDate: g,
            minDate: E,
            onKeyDown: I,
            onClickOutside: p
        })
    });
}
t.default = f;
