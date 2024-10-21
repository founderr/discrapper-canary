t.d(n, {
    Z: function () {
        return u;
    }
});
var a = t(200651);
t(192379);
var l = t(913527),
    s = t.n(l),
    i = t(481060),
    r = t(854698),
    o = t(401876),
    c = t(689938),
    d = t(805553);
function u(e) {
    let { className: n, onScheduleChange: t, onRecurrenceChange: l, onTimeChange: u, timeSelected: _ = !0, schedule: E, recurrenceRule: h, showEndDate: T = !1, requireEndDate: m = !1, disableStartDateTime: I = !1 } = e;
    if (null == E) return null;
    let N = null,
        x = E.startDate,
        f = s()(),
        g = s()().add(r.G3, 'days'),
        S = s()().add(r.Ib, 'days');
    null != h && (g.add(r.hn, 'years'), S.add(r.hn, 'years'));
    let C = (e) => {
        t({
            ...E,
            endDate: e
        });
    };
    return (
        T &&
            (N =
                null != E.endDate || m
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsxs)('div', {
                                  className: d.doubleInput,
                                  children: [
                                      (0, a.jsx)(i.FormItem, {
                                          title: c.Z.Messages.CREATE_EVENT_END_DATE_LABEL,
                                          required: m,
                                          children: (0, a.jsx)(i.DateInput, {
                                              value: E.endDate,
                                              onSelect: C,
                                              minDate: E.startDate,
                                              maxDate: S
                                          })
                                      }),
                                      (0, a.jsx)(i.FormItem, {
                                          title: c.Z.Messages.CREATE_EVENT_END_TIME_LABEL,
                                          required: m,
                                          children: (0, a.jsx)(i.TimeInput, {
                                              value: E.endDate,
                                              onChange: C
                                          })
                                      })
                                  ]
                              }),
                              m
                                  ? null
                                  : (0, a.jsx)(i.Button, {
                                        onClick: () => {
                                            C(void 0);
                                        },
                                        look: i.Button.Looks.BLANK,
                                        size: i.Button.Sizes.MIN,
                                        children: (0, a.jsxs)('div', {
                                            className: d.link,
                                            children: [
                                                (0, a.jsx)(i.CircleXIcon, {
                                                    size: 'custom',
                                                    color: 'currentColor',
                                                    width: 17,
                                                    height: 17,
                                                    className: d.removeIcon
                                                }),
                                                (0, a.jsx)(i.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: c.Z.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
                                                })
                                            ]
                                        })
                                    })
                          ]
                      })
                    : (0, a.jsx)(i.Button, {
                          look: i.Button.Looks.BLANK,
                          size: i.Button.Sizes.MIN,
                          onClick: () => {
                              C(s()(E.startDate).add(1, 'hour'));
                          },
                          children: (0, a.jsxs)('div', {
                              className: d.link,
                              children: [
                                  (0, a.jsx)(i.CirclePlusIcon, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      width: 20,
                                      height: 20,
                                      className: d.addIcon
                                  }),
                                  (0, a.jsx)(i.Text, {
                                      variant: 'text-sm/normal',
                                      children: c.Z.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
                                  })
                              ]
                          })
                      })),
        (0, a.jsxs)('div', {
            className: n,
            children: [
                (0, a.jsxs)('div', {
                    className: d.doubleInput,
                    children: [
                        (0, a.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_START_DATE_LABEL,
                            required: !0,
                            children: (0, a.jsx)(i.DateInput, {
                                value: E.startDate,
                                onSelect: (e) => {
                                    t({
                                        ...E,
                                        startDate: e
                                    });
                                },
                                minDate: f,
                                maxDate: g,
                                disabled: I
                            })
                        }),
                        (0, a.jsx)(i.FormItem, {
                            title: c.Z.Messages.CREATE_EVENT_START_TIME_LABEL,
                            required: !0,
                            children: (0, a.jsx)(i.TimeInput, {
                                value: E.startDate,
                                onChange: (e) => {
                                    if (!!e.isValid())
                                        null == u || u(!0),
                                            t({
                                                ...E,
                                                startDate: e
                                            });
                                },
                                hideValue: !_,
                                disabled: I
                            })
                        })
                    ]
                }),
                N,
                null != x &&
                    null != l &&
                    (0, a.jsx)(o.Z, {
                        onRecurrenceChange: l,
                        startDate: x,
                        recurrenceRule: h
                    })
            ]
        })
    );
}
