t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(200651);
t(192379);
var i = t(913527),
    a = t.n(i),
    r = t(481060),
    o = t(854698),
    s = t(401876),
    c = t(388032),
    d = t(711136);
function u(e) {
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: m = !0, schedule: h, recurrenceRule: x, showEndDate: g = !1, requireEndDate: f = !1, disableStartDateTime: v = !1 } = e;
    if (null == h) return null;
    let _ = null,
        I = h.startDate,
        N = a()(),
        j = a()().add(o.G3, 'days'),
        C = a()().add(o.Ib, 'days');
    null != x && (j.add(o.hn, 'years'), C.add(o.hn, 'years'));
    let p = (e) => {
        t({
            ...h,
            endDate: e
        });
    };
    return (
        g &&
            (_ =
                null != h.endDate || f
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, l.jsx)(r.FormItem, {
                                          title: c.intl.string(c.t.CTLgZG),
                                          required: f,
                                          children: (0, l.jsx)(r.DateInput, {
                                              value: h.endDate,
                                              onSelect: p,
                                              minDate: h.startDate,
                                              maxDate: C
                                          })
                                      }),
                                      (0, l.jsx)(r.FormItem, {
                                          title: c.intl.string(c.t.j2RuXF),
                                          required: f,
                                          children: (0, l.jsx)(r.TimeInput, {
                                              value: h.endDate,
                                              onChange: p
                                          })
                                      })
                                  ]
                              }),
                              f
                                  ? null
                                  : (0, l.jsx)(r.Button, {
                                        onClick: () => {
                                            p(void 0);
                                        },
                                        look: r.Button.Looks.BLANK,
                                        size: r.Button.Sizes.MIN,
                                        children: (0, l.jsxs)('div', {
                                            className: d.link,
                                            children: [
                                                (0, l.jsx)(r.CircleXIcon, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: d.removeIcon
                                                }),
                                                (0, l.jsx)(r.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: c.intl.string(c.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, l.jsx)(r.Button, {
                          look: r.Button.Looks.BLANK,
                          size: r.Button.Sizes.MIN,
                          onClick: () => {
                              p(a()(h.startDate).add(1, 'hour'));
                          },
                          children: (0, l.jsxs)('div', {
                              className: d.link,
                              children: [
                                  (0, l.jsx)(r.CirclePlusIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: d.addIcon
                                  }),
                                  (0, l.jsx)(r.Text, {
                                      variant: 'text-sm/normal',
                                      children: c.intl.string(c.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, l.jsxs)('div', {
            className: n,
            children: [
                (0, l.jsxs)('div', {
                    className: d.doubleInput,
                    children: [
                        (0, l.jsx)(r.FormItem, {
                            title: c.intl.string(c.t.kKOIwM),
                            required: !0,
                            children: (0, l.jsx)(r.DateInput, {
                                value: h.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...h,
                                        startDate: e
                                    });
                                },
                                minDate: N,
                                maxDate: j,
                                disabled: v
                            })
                        }),
                        (0, l.jsx)(r.FormItem, {
                            title: c.intl.string(c.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(r.TimeInput, {
                                value: h.startDate,
                                onChange: (e) => {
                                    if (!!e.isValid())
                                        null == u || u(!0),
                                            t({
                                                ...h,
                                                startDate: e
                                            });
                                },
                                hideValue: !m,
                                disabled: v
                            })
                        })
                    ]
                }),
                _,
                null != I &&
                    null != i &&
                    (0, l.jsx)(s.Z, {
                        onRecurrenceChange: i,
                        startDate: I,
                        recurrenceRule: x
                    })
            ]
        })
    );
}
