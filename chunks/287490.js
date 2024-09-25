t.d(s, {
    Z: function () {
        return N;
    }
}),
    t(47120),
    t(653041);
var n = t(735250),
    a = t(470079),
    i = t(392711),
    r = t.n(i),
    o = t(442837),
    l = t(481060),
    c = t(492435),
    d = t(353926),
    _ = t(430824),
    u = t(499533),
    E = t(878209),
    T = t(987338),
    S = t(891742);
function I(e, s) {
    return e.map((e, t) => ({
        label: 'object' == typeof s ? s[t] : u.Z.getExperimentBucketName(e),
        value: e
    }));
}
function N() {
    let e = (0, o.cj)([d.Z], () => d.Z.getAllExperimentOverrideDescriptors()),
        s = (0, o.cj)([d.Z], () => d.Z.getRegisteredExperiments()),
        [t, i] = a.useState(''),
        r = (0, E.Ro)((0, E.Tc)((0, E.Cg)(s), e), t);
    return (0, n.jsxs)(l.FormSection, {
        tag: l.FormTitleTags.H1,
        title: 'Experiments',
        children: [
            (0, n.jsx)(l.SearchBar, {
                size: l.SearchBar.Sizes.LARGE,
                query: t,
                onChange: i,
                onClear: () => i('')
            }),
            r.length > 0
                ? r.map((s) => {
                      let t = s.experiment.type === T.xY.GUILD ? m : A;
                      return (0, n.jsx)(
                          t,
                          {
                              experiment: s.experiment,
                              experimentId: s.id,
                              overrideDescriptor: e[s.id]
                          },
                          s.id
                      );
                  })
                : (0, n.jsx)('div', {
                      className: S.emptyState,
                      children: (0, n.jsx)(l.Heading, {
                          variant: 'heading-md/semibold',
                          children: 'No Experiments Found'
                      })
                  })
        ]
    });
}
function A(e) {
    var s;
    let { experiment: t, experimentId: i, overrideDescriptor: _ } = e,
        [u, E] = a.useState(null != _),
        [N, A] = a.useState(!1),
        m = a.useCallback(() => {
            E((e) => !e);
        }, []),
        C = (0, o.e7)([d.Z], () => d.Z.getUserExperimentDescriptor(i)),
        g = (0, o.e7)([d.Z], () => d.Z.getLoadedUserExperiment(i)),
        h = (0, o.e7)([d.Z], () =>
            r()
                .sortBy(d.Z.getRecentExposures(T.xY.USER, i), (e) => {
                    let [s, t] = e;
                    return -t;
                })
                .map((e) => {
                    let [s, t] = e;
                    return ''.concat(new Date(t).toLocaleString(), ' (').concat(s, ')');
                })
        ),
        O = (0, n.jsx)(l.Clickable, {
            onClick: m,
            children: (0, n.jsxs)(l.FormTitle, {
                tag: l.FormTitleTags.H3,
                className: S.title,
                children: [
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)('span', { children: t.title }),
                            (0, n.jsx)(l.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: i
                            })
                        ]
                    }),
                    (0, n.jsx)('span', {
                        className: S.experimentDate,
                        children: 'User'
                    })
                ]
            })
        });
    return u
        ? (0, n.jsxs)('div', {
              className: S.group,
              children: [
                  (0, n.jsxs)(l.FormSection, {
                      children: [
                          O,
                          (0, n.jsxs)('div', {
                              children: [
                                  (0, n.jsx)(l.FormItem, {
                                      title: 'Bucket Override',
                                      children: (0, n.jsx)(l.SingleSelect, {
                                          value: null != _ ? _.bucket : null,
                                          clearable: null != _,
                                          options: I(t.buckets, t.description),
                                          onChange: (e) => {
                                              (0, c.rX)(i, e);
                                          }
                                      })
                                  }),
                                  'string' == typeof t.description
                                      ? (0, n.jsx)('div', {
                                            className: S.description,
                                            children: (0, n.jsx)(l.FormText, {
                                                type: l.FormTextTypes.DESCRIPTION,
                                                children: t.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, n.jsxs)('div', {
                              className: S.description,
                              children: [
                                  (0, n.jsxs)(l.FormText, {
                                      type: l.FormTextTypes.DESCRIPTION,
                                      children: ['Current assigned to bucket ', null !== (s = null == C ? void 0 : C.bucket) && void 0 !== s ? s : T.NZ.NOT_ELIGIBLE]
                                  }),
                                  null == g
                                      ? (0, n.jsx)(l.FormText, {
                                            type: l.FormTextTypes.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          N
                              ? (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: 'h5',
                                            className: S.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'code',
                                            className: S.pre,
                                            children: null == g ? 'None' : JSON.stringify(g, void 0, 2)
                                        }),
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: 'h5',
                                            className: S.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'code',
                                            className: S.pre,
                                            children: null == _ ? 'None' : JSON.stringify(_, void 0, 2)
                                        }),
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: 'h5',
                                            className: S.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'code',
                                            className: S.pre,
                                            children: 0 === h.length ? 'None' : h.join('\n')
                                        })
                                    ]
                                })
                              : (0, n.jsx)(l.Button, {
                                    className: S.debugButton,
                                    size: l.Button.Sizes.SMALL,
                                    look: l.Button.Looks.BLANK,
                                    onClick: () => A(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, n.jsx)(l.FormDivider, { className: S.divider })
              ]
          })
        : (0, n.jsx)('div', {
              className: S.group,
              children: (0, n.jsx)(l.FormSection, { children: O })
          });
}
function m(e) {
    let { experiment: s, experimentId: t, overrideDescriptor: i } = e,
        [u, E] = a.useState(null != i),
        [N, A] = a.useState(!1),
        m = a.useCallback(() => {
            E((e) => !e);
        }, []),
        C = (0, o.e7)([d.Z], () => d.Z.getLoadedGuildExperiment(t)),
        g = (0, o.e7)([d.Z], () =>
            r()
                .sortBy(d.Z.getRecentExposures(T.xY.GUILD, t), (e) => {
                    let [s, t] = e;
                    return -t;
                })
                .map((e) => {
                    let [s, t] = e;
                    return ''.concat(new Date(t).toLocaleString(), ' (').concat(s, ')');
                })
        ),
        [h, O] = (0, o.Wu)([_.Z, d.Z], () => {
            let e = r().sortBy(r().values(_.Z.getGuilds()), (e) => e.name.toLowerCase()),
                s = {},
                n = [];
            for (let i of e) {
                var a;
                let e = d.Z.getGuildExperimentDescriptor(t, i.id),
                    r = null !== (a = null == e ? void 0 : e.bucket) && void 0 !== a ? a : T.NZ.NOT_ELIGIBLE;
                !(r in s) && (s[r] = 0), s[r]++, n.push(''.concat(i.name, ': ').concat(r));
            }
            return [
                n,
                r()(s)
                    .keys()
                    .map(Number)
                    .sort()
                    .map((e) => ''.concat(s[e], ' guilds in bucket ').concat(e))
                    .join(', ')
            ];
        }),
        p = (0, n.jsx)(l.Clickable, {
            onClick: m,
            children: (0, n.jsxs)(l.FormTitle, {
                tag: l.FormTitleTags.H3,
                className: S.title,
                children: [
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)('span', { children: s.title }),
                            (0, n.jsx)(l.Text, {
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: t
                            })
                        ]
                    }),
                    (0, n.jsx)('span', {
                        className: S.experimentDate,
                        children: 'Guild'
                    })
                ]
            })
        });
    return u
        ? (0, n.jsxs)('div', {
              className: S.group,
              children: [
                  (0, n.jsxs)(l.FormSection, {
                      children: [
                          p,
                          (0, n.jsxs)('div', {
                              children: [
                                  (0, n.jsx)(l.FormItem, {
                                      title: 'Bucket Override',
                                      children: (0, n.jsx)(l.SingleSelect, {
                                          value: null != i ? i.bucket : null,
                                          clearable: null != i,
                                          options: I(s.buckets, s.description),
                                          onChange: (e) => {
                                              (0, c.rX)(t, e);
                                          }
                                      })
                                  }),
                                  'string' == typeof s.description
                                      ? (0, n.jsx)('div', {
                                            className: S.description,
                                            children: (0, n.jsx)(l.FormText, {
                                                type: l.FormTextTypes.DESCRIPTION,
                                                children: s.description
                                            })
                                        })
                                      : null
                              ]
                          }),
                          (0, n.jsxs)('div', {
                              className: S.description,
                              children: [
                                  (0, n.jsxs)(l.FormText, {
                                      type: l.FormTextTypes.DESCRIPTION,
                                      children: ['Current Assignments: ', O]
                                  }),
                                  null == C
                                      ? (0, n.jsx)(l.FormText, {
                                            type: l.FormTextTypes.DESCRIPTION,
                                            children: 'Warning: Server did not send any experiment config. You may need to check the "Send to Client" box in the admin UI.'
                                        })
                                      : null
                              ]
                          }),
                          N
                              ? (0, n.jsxs)('div', {
                                    children: [
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: 'h5',
                                            className: S.debugTitle,
                                            children: 'Guild Assignments'
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'code',
                                            className: S.pre,
                                            children: h.join('\n')
                                        }),
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: 'h5',
                                            className: S.debugTitle,
                                            children: 'Server Descriptor'
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'code',
                                            className: S.pre,
                                            children: null == C ? 'None' : JSON.stringify(C, void 0, 2)
                                        }),
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: 'h5',
                                            className: S.debugTitle,
                                            children: 'Override Descriptor'
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'code',
                                            className: S.pre,
                                            children: null == i ? 'None' : JSON.stringify(i, void 0, 2)
                                        }),
                                        (0, n.jsx)(l.FormTitle, {
                                            tag: 'h5',
                                            className: S.debugTitle,
                                            children: 'Recent Exposures'
                                        }),
                                        (0, n.jsx)(l.Text, {
                                            variant: 'code',
                                            className: S.pre,
                                            children: 0 === g.length ? 'None' : g.join('\n')
                                        })
                                    ]
                                })
                              : (0, n.jsx)(l.Button, {
                                    className: S.debugButton,
                                    size: l.Button.Sizes.SMALL,
                                    look: l.Button.Looks.BLANK,
                                    onClick: () => A(!0),
                                    children: 'More Details \xBB'
                                })
                      ]
                  }),
                  (0, n.jsx)(l.FormDivider, { className: S.divider })
              ]
          })
        : (0, n.jsx)('div', {
              className: S.group,
              children: (0, n.jsx)(l.FormSection, { children: p })
          });
}
