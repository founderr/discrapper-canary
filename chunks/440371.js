t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(200651);
t(192379);
var i = t(913527),
    r = t.n(i),
    a = t(481060),
    s = t(854698),
    o = t(401876),
    c = t(388032),
    d = t(297229);
function u(e) {
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: x = !0, schedule: m, recurrenceRule: h, showEndDate: g = !1, requireEndDate: v = !1, disableStartDateTime: j = !1 } = e;
    if (null == m) return null;
    let f = null,
        N = m.startDate,
        I = r()(),
        p = r()().add(s.G3, 'days'),
        C = r()().add(s.Ib, 'days');
    null != h && (p.add(s.hn, 'years'), C.add(s.hn, 'years'));
    let E = (e) => {
        t({
            ...m,
            endDate: e
        });
    };
    return (
        g &&
            (f =
                null != m.endDate || v
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, l.jsx)(a.FormItem, {
                                          title: c.intl.string(c.t.CTLgZG),
                                          required: v,
                                          children: (0, l.jsx)(a.DateInput, {
                                              value: m.endDate,
                                              onSelect: E,
                                              minDate: m.startDate,
                                              maxDate: C
                                          })
                                      }),
                                      (0, l.jsx)(a.FormItem, {
                                          title: c.intl.string(c.t.j2RuXF),
                                          required: v,
                                          children: (0, l.jsx)(a.TimeInput, {
                                              value: m.endDate,
                                              onChange: E
                                          })
                                      })
                                  ]
                              }),
                              v
                                  ? null
                                  : (0, l.jsx)(a.Button, {
                                        onClick: () => {
                                            E(void 0);
                                        },
                                        look: a.Button.Looks.BLANK,
                                        size: a.Button.Sizes.MIN,
                                        children: (0, l.jsxs)('div', {
                                            className: d.link,
                                            children: [
                                                (0, l.jsx)(a.CircleXIcon, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: d.removeIcon
                                                }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: c.intl.string(c.t.petdfn)
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, l.jsx)(a.Button, {
                          look: a.Button.Looks.BLANK,
                          size: a.Button.Sizes.MIN,
                          onClick: () => {
                              E(r()(m.startDate).add(1, 'hour'));
                          },
                          children: (0, l.jsxs)('div', {
                              className: d.link,
                              children: [
                                  (0, l.jsx)(a.CirclePlusIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: d.addIcon
                                  }),
                                  (0, l.jsx)(a.Text, {
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
                        (0, l.jsx)(a.FormItem, {
                            title: c.intl.string(c.t.kKOIwM),
                            required: !0,
                            children: (0, l.jsx)(a.DateInput, {
                                value: m.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...m,
                                        startDate: e
                                    });
                                },
                                minDate: I,
                                maxDate: p,
                                disabled: j
                            })
                        }),
                        (0, l.jsx)(a.FormItem, {
                            title: c.intl.string(c.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(a.TimeInput, {
                                value: m.startDate,
                                onChange: (e) => {
                                    if (!!e.isValid())
                                        null == u || u(!0),
                                            t({
                                                ...m,
                                                startDate: e
                                            });
                                },
                                hideValue: !x,
                                disabled: j
                            })
                        })
                    ]
                }),
                f,
                null != N &&
                    null != i &&
                    (0, l.jsx)(o.Z, {
                        onRecurrenceChange: i,
                        startDate: N,
                        recurrenceRule: h
                    })
            ]
        })
    );
}
