n.r(t),
    n.d(t, {
        CalendarPicker: function () {
            return _;
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
n(114923);
var d = n(76674);
function _(e) {
    let { value: t = s()().local(), minDate: n, maxDate: a, onSelect: o, calendarClassName: _, autoFocus: E, onClickOutside: f } = e,
        h = i.useCallback(
            (e, t) => {
                null == o || o(s()(e), t);
            },
            [o]
        ),
        p = i.useMemo(() => t.toDate(), [t]),
        I = i.useMemo(() => (null == a ? void 0 : a.toDate()), [a]),
        m = i.useMemo(() => (null == n ? void 0 : n.toDate()), [n]),
        T = (0, u.e7)([c.default], () => c.default.locale),
        S = i.useRef(null),
        g = i.useCallback((e) => {
            let t = e.currentTarget;
            if (!!t.classList.contains('react-datepicker__day'))
                setTimeout(() => {
                    var e, n;
                    if (null === (e = S.current) || void 0 === e ? void 0 : e.contains(t)) return;
                    let r = null === (n = S.current) || void 0 === n ? void 0 : n.querySelector('.react-datepicker__day[tabindex="0"]');
                    if (null != r) r.focus();
                }, 100);
        }, []);
    return (0, r.jsx)('div', {
        ref: S,
        className: d.calendarPicker,
        children: (0, r.jsx)(l(), {
            calendarClassName: _,
            selected: p,
            onChange: h,
            autoFocus: E,
            fixedHeight: !0,
            inline: !0,
            locale: T,
            maxDate: I,
            minDate: m,
            onKeyDown: g,
            onClickOutside: f
        })
    });
}
t.default = _;
