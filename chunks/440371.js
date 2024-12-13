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
    d = t(388032),
    c = t(297229);
function u(e) {
    let { className: n, onScheduleChange: t, onRecurrenceChange: i, onTimeChange: u, timeSelected: m = !0, schedule: x, recurrenceRule: h, showEndDate: g = !1, requireEndDate: v = !1, disableStartDateTime: j = !1 } = e;
    if (null == x) return null;
    let p = null,
        f = x.startDate,
        I = r()(),
        N = r()().add(s.G3, 'days'),
        C = r()().add(s.Ib, 'days');
    null != h && (N.add(s.hn, 'years'), C.add(s.hn, 'years'));
    let E = (e) => {
        t({
            ...x,
            endDate: e
        });
    };
    return (
        g &&
            (p =
                null != x.endDate || v
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsxs)('div', {
                                  className: c.doubleInput,
                                  children: [
                                      (0, l.jsx)(a.FormItem, {
                                          title: d.intl.string(d.t.CTLgZG),
                                          required: v,
                                          children: (0, l.jsx)(a.DateInput, {
                                              value: x.endDate,
                                              onSelect: E,
                                              minDate: x.startDate,
                                              maxDate: C
                                          })
                                      }),
                                      (0, l.jsx)(a.FormItem, {
                                          title: d.intl.string(d.t.j2RuXF),
                                          required: v,
                                          children: (0, l.jsx)(a.TimeInput, {
                                              value: x.endDate,
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
                                            className: c.link,
                                            children: [
                                                (0, l.jsx)(a.CircleXIcon, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: c.removeIcon
                                                }),
                                                (0, l.jsx)(a.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: d.intl.string(d.t.petdfn)
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
                              E(r()(x.startDate).add(1, 'hour'));
                          },
                          children: (0, l.jsxs)('div', {
                              className: c.link,
                              children: [
                                  (0, l.jsx)(a.CirclePlusIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: c.addIcon
                                  }),
                                  (0, l.jsx)(a.Text, {
                                      variant: 'text-sm/normal',
                                      children: d.intl.string(d.t.ncdPcn)
                                  })
                              ]
                          })
                      })),
        (0, l.jsxs)('div', {
            className: n,
            children: [
                (0, l.jsxs)('div', {
                    className: c.doubleInput,
                    children: [
                        (0, l.jsx)(a.FormItem, {
                            title: d.intl.string(d.t.kKOIwM),
                            required: !0,
                            children: (0, l.jsx)(a.DateInput, {
                                value: x.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...x,
                                        startDate: e
                                    });
                                },
                                minDate: I,
                                maxDate: N,
                                disabled: j
                            })
                        }),
                        (0, l.jsx)(a.FormItem, {
                            title: d.intl.string(d.t['6dGmCA']),
                            required: !0,
                            children: (0, l.jsx)(a.TimeInput, {
                                value: x.startDate,
                                onChange: (e) => {
                                    if (!!e.isValid())
                                        null == u || u(!0),
                                            t({
                                                ...x,
                                                startDate: e
                                            });
                                },
                                hideValue: !m,
                                disabled: j
                            })
                        })
                    ]
                }),
                p,
                null != f &&
                    null != i &&
                    (0, l.jsx)(o.Z, {
                        onRecurrenceChange: i,
                        startDate: f,
                        recurrenceRule: h
                    })
            ]
        })
    );
}
