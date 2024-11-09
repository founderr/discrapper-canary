n.d(t, {
    W: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(547800),
    o = n(1561),
    l = n(507274),
    u = n(235874),
    c = n(481060),
    d = n(890780),
    f = n(803636);
function _(e) {
    let { value: t, onSelect: n, dateFormat: i = 'MMM D, YYYY', minDate: _, maxDate: h, disabled: p = !1 } = e;
    return (0, r.jsx)(u.y, {
        renderPopout: function (e) {
            let { closePopout: i } = e;
            return (0, r.jsx)(l.V, {
                children: (0, r.jsx)(s.CalendarPicker, {
                    minDate: _,
                    maxDate: h,
                    value: t,
                    onSelect: (e) => {
                        n(e), i();
                    },
                    calendarClassName: d.calendarContainer,
                    onClickOutside: i,
                    autoFocus: !0
                })
            });
        },
        position: 'bottom',
        children: (e) => {
            let { onClick: n, ...s } = e;
            return (0, r.jsx)(o.P, {
                ...s,
                className: a()(f.inputDefault, d.container, {
                    [f.disabled]: p,
                    [d.disabled]: p
                }),
                onClick: p ? void 0 : n,
                'aria-disabled': p,
                children: (0, r.jsxs)('div', {
                    className: d.content,
                    children: [
                        (0, r.jsx)('div', {
                            className: d.text,
                            children: null == t ? void 0 : t.format(i)
                        }),
                        (0, r.jsx)(c.CalendarIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: d.icon
                        })
                    ]
                })
            });
        }
    });
}
