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
    d = t(805553);
function u(e) {
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: h = !0, schedule: m, recurrenceRule: x, showEndDate: f = !1, requireEndDate: g = !1, disableStartDateTime: _ = !1 } = e;
    if (null == m) return null;
    let v = null,
        I = m.startDate,
        N = a()(),
        p = a()().add(o.G3, 'days'),
        C = a()().add(o.Ib, 'days');
    null != x && (p.add(o.hn, 'years'), C.add(o.hn, 'years'));
    let j = (e) => {
        t({
            ...m,
            endDate: e
        });
    };
    return (
        f &&
            (v =
                null != m.endDate || g
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, l.jsx)(r.FormItem, {
                                          title: c.intl.string(c.t.CTLgZG),
                                          required: g,
                                          children: (0, l.jsx)(r.DateInput, {
                                              value: m.endDate,
                                              onSelect: j,
                                              minDate: m.startDate,
                                              maxDate: C
                                          })
                                      }),
                                      (0, l.jsx)(r.FormItem, {
                                          title: c.intl.string(c.t.j2RuXF),
                                          required: g,
                                          children: (0, l.jsx)(r.TimeInput, {
                                              value: m.endDate,
                                              onChange: j
                                          })
                                      })
                                  ]
                              }),
                              g
                                  ? null
                                  : (0, l.jsx)(r.Button, {
                                        onClick: () => {
                                            j(void 0);
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
                              j(a()(m.startDate).add(1, 'hour'));
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
                                value: m.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...m,
                                        startDate: e
                                    });
                                },
                                minDate: N,
                                maxDate: p,
                                disabled: _
                            })
                        }),
                        (0, l.jsx)(r.FormItem, {
                            title: c.intl.string(c.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(r.TimeInput, {
                                value: m.startDate,
                                onChange: (e) => {
                                    if (!!e.isValid())
                                        null == u || u(!0),
                                            t({
                                                ...m,
                                                startDate: e
                                            });
                                },
                                hideValue: !h,
                                disabled: _
                            })
                        })
                    ]
                }),
                v,
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
