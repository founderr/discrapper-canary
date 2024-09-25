n.d(t, {
    W: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(547800),
    s = n(1561),
    l = n(507274),
    u = n(235874),
    c = n(481060),
    d = n(890780),
    _ = n(803636);
let E = 'MMM D, YYYY';
function f(e) {
    let { value: t, onSelect: n, dateFormat: i = E, minDate: f, maxDate: h, disabled: p = !1 } = e;
    function m(e) {
        let { closePopout: i } = e;
        return (0, r.jsx)(l.V, {
            children: (0, r.jsx)(o.CalendarPicker, {
                minDate: f,
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
    }
    return (0, r.jsx)(u.y, {
        renderPopout: m,
        position: 'bottom',
        children: (e) => {
            let { onClick: n, ...o } = e;
            return (0, r.jsx)(s.P, {
                ...o,
                className: a()(_.inputDefault, d.container, {
                    [_.disabled]: p,
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
