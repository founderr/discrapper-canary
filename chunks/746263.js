s.d(t, {
  Z: function() {
return m;
  }
}), s(47120), s(315314), s(610138), s(216116), s(78328), s(815648);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(979554),
  l = s(442837),
  c = s(481060),
  d = s(53281),
  _ = s(921813),
  E = s(594174),
  u = s(572004),
  T = s(477146),
  I = s(329156),
  S = s(757613),
  N = s(346537),
  C = s(830318);

function m() {
  let e = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
[t, s] = a.useState(!0),
[i, m] = a.useState([]),
A = a.useRef(null),
[g, h] = a.useState(!1),
[O, p] = a.useState(!1),
[R, x] = a.useState(!1);
  return null == e ? (0, n.jsx)('div', {}) : (0, n.jsxs)('div', {
className: S.root,
children: [
  (0, n.jsxs)('div', {
    className: S.grid,
    children: [
      (0, n.jsxs)('div', {
        className: r()(S.col, S.preview),
        children: [
          (0, n.jsx)('img', {
            src: g ? N : C,
            alt: '',
            width: 450
          }),
          t && (0, n.jsx)(I.Z, {
            config: {
              type: o.Z.PROFILE_EFFECT,
              title: 'debug',
              description: 'debug',
              accessibilityLabel: 'debug',
              reducedMotionSrc: '',
              effects: R ? (0, T.Tp)(i) : i,
              animationType: 0
            },
            profileEffectId: 'debug'
          })
        ]
      }),
      (0, n.jsxs)('div', {
        className: r()(S.col, S.controls),
        children: [
          (0, n.jsxs)('div', {
            className: S.grid,
            children: [
              (0, n.jsxs)('div', {
                className: S.row,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'Dark Theme'
                  }),
                  (0, n.jsx)('input', {
                    type: 'checkbox',
                    checked: g,
                    className: S.checkBox,
                    onChange: () => {
                      h(!g);
                    }
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: S.row,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'Show User Profile'
                  }),
                  (0, n.jsx)('input', {
                    type: 'checkbox',
                    checked: O,
                    className: S.checkBox,
                    onChange: () => {
                      p(!O);
                    }
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: S.row,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    children: 'Simulate Android'
                  }),
                  (0, n.jsx)('input', {
                    type: 'checkbox',
                    checked: R,
                    className: S.checkBox,
                    onChange: () => {
                      x(!R);
                    }
                  })
                ]
              })
            ]
          }),
          (0, n.jsxs)('div', {
            children: [
              (0, n.jsxs)('div', {
                className: S.uploadButton,
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    color: 'always-white',
                    children: 'Click to upload image'
                  }),
                  (0, n.jsx)(d.Z, {
                    ref: A,
                    onChange: e => {
                      let t = e.currentTarget.files;
                      if (null == t)
                        return;
                      let s = t[0],
                        n = new FileReader();
                      n.onload = async e => {
                        if (null == e.target || 'string' != typeof e.target.result)
                          return;
                        let t = await (0, T.Xv)(URL.createObjectURL(s), e.target.result, s, i.length);
                        m(e => [
                          ...e,
                          t
                        ]);
                      }, n.readAsDataURL(s);
                    },
                    multiple: !1
                  })
                ]
              }),
              (0, n.jsx)(c.Text, {
                variant: 'text-sm/semibold',
                children: 'Make sure to upload the bottommost layer first!'
              })
            ]
          }),
          (0, n.jsxs)('div', {
            className: S.bottomControls,
            children: [
              (0, n.jsx)(c.Button, {
                color: c.ButtonColors.RED,
                look: c.ButtonLooks.LINK,
                onClick: () => {
                  m([]);
                },
                children: 'Clear Assets'
              }),
              (0, n.jsx)(c.Button, {
                color: c.ButtonColors.BRAND,
                onClick: () => {
                  s(!1), setTimeout(() => s(!0), 100);
                },
                children: 'Replay Animation'
              }),
              (0, n.jsx)(c.Button, {
                color: c.ButtonColors.BRAND,
                onClick: () => {
                  (0, u.JG)((0, T.HV)(i, 'proto')), (0, c.showToast)((0, c.createToast)('Copied to clipboard!', c.ToastType.SUCCESS));
                },
                children: 'Export'
              })
            ]
          }),
          O && (0, n.jsxs)('div', {
            className: r()(S.userProfilePreview, S.preview),
            children: [
              (0, n.jsx)(_.Z, {
                user: e,
                pendingAvatar: void 0,
                pendingProfileEffectId: null,
                canUsePremiumCustomization: !0,
                isTryItOutFlow: !0
              }),
              (0, n.jsx)(I.Z, {
                config: {
                  type: o.Z.PROFILE_EFFECT,
                  title: 'debug',
                  description: 'debug',
                  accessibilityLabel: 'debug',
                  reducedMotionSrc: '',
                  effects: R ? (0, T.Tp)(i) : i,
                  animationType: 0
                },
                profileEffectId: 'debug'
              })
            ]
          })
        ]
      })
    ]
  }),
  (0, n.jsx)('div', {
    className: r()(S.grid, S.layers),
    children: i.map((e, t) => (0, n.jsxs)('div', {
      className: S.layerForm,
      children: [
        (0, n.jsx)(c.Heading, {
          variant: 'heading-md/bold',
          children: e.name
        }),
        (0, n.jsx)('img', {
          src: e.base64,
          className: S.layerPreview,
          alt: ''
        }),
        (0, n.jsxs)('div', {
          className: r()(S.grid, S.section),
          children: [
            (0, n.jsxs)('div', {
              className: S.col,
              children: [
                (0, n.jsx)(c.Text, {
                  variant: 'text-md/bold',
                  children: 'Start'
                }),
                (0, n.jsx)('input', {
                  type: 'number',
                  value: e.start,
                  className: S.input,
                  onChange: e => {
                    m(s => {
                      let n = [...s],
                        a = s[t];
                      return a.start = +e.target.value, n[t] = a, n;
                    });
                  },
                  contentEditable: !0
                })
              ]
            }),
            (0, n.jsxs)('div', {
              className: S.col,
              children: [
                (0, n.jsx)(c.Text, {
                  variant: 'text-md/bold',
                  children: 'Duration'
                }),
                (0, n.jsx)('input', {
                  type: 'number',
                  value: e.duration,
                  className: S.input,
                  onChange: e => {
                    m(s => {
                      let n = [...s],
                        a = s[t];
                      return a.duration = +e.target.value, n[t] = a, n;
                    });
                  },
                  contentEditable: !0
                })
              ]
            })
          ]
        }),
        (0, n.jsxs)('div', {
          className: r()(S.grid, S.section),
          children: [
            (0, n.jsxs)('div', {
              className: S.col,
              children: [
                (0, n.jsx)(c.Text, {
                  variant: 'text-md/bold',
                  children: 'Loop'
                }),
                (0, n.jsx)('input', {
                  type: 'checkbox',
                  checked: e.loop,
                  className: S.checkBox,
                  onChange: e => {
                    m(s => {
                      let n = [...s],
                        a = s[t];
                      return a.loop = e.target.checked, n[t] = a, n;
                    });
                  }
                })
              ]
            }),
            (0, n.jsx)('div', {
              className: S.col,
              children: e.loop && (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(c.Text, {
                    variant: 'text-md/bold',
                    children: 'Loop Delay'
                  }),
                  (0, n.jsx)('input', {
                    type: 'number',
                    value: e.loopDelay,
                    className: S.input,
                    onChange: e => {
                      m(s => {
                        let n = [...s],
                          a = s[t];
                        return a.loopDelay = +e.target.value, n[t] = a, n;
                      });
                    },
                    contentEditable: !0
                  })
                ]
              })
            })
          ]
        }),
        (0, n.jsx)('div', {
          className: r()(S.row, S.end),
          children: (0, n.jsx)(c.Button, {
            color: c.ButtonColors.RED,
            look: c.ButtonLooks.LINK,
            onClick: () => {
              m(t => t.filter(t => t !== e));
            },
            children: 'Remove Layer'
          })
        })
      ]
    }, t))
  })
]
  });
}