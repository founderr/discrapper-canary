n.d(t, {
    DK: function () {
        return v;
    },
    Dx: function () {
        return E;
    },
    EJ: function () {
        return O;
    },
    Ee: function () {
        return b;
    },
    Hh: function () {
        return R;
    },
    II: function () {
        return A;
    },
    MC: function () {
        return y;
    },
    Vj: function () {
        return T;
    },
    gO: function () {
        return N;
    },
    i_: function () {
        return C;
    },
    jQ: function () {
        return D;
    },
    qE: function () {
        return S;
    },
    v6: function () {
        return L;
    },
    zx: function () {
        return I;
    }
}),
    n(536091);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(43267),
    l = n(905656),
    u = n(600164),
    c = n(313201),
    d = n(565138),
    f = n(361207),
    _ = n(63063),
    p = n(981631),
    h = n(388032),
    m = n(704042);
let g = s.Avatar;
null == g && (g = () => null);
let E = (e) => {
        let { className: t, id: n, children: i } = e;
        return (0, r.jsx)(s.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: a()(m.title, t),
            id: n,
            children: i
        });
    },
    v = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)(s.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: t,
            children: n
        });
    },
    b = (e) => {
        let { className: t, src: n } = e;
        return (0, r.jsx)('img', {
            alt: '',
            src: n,
            className: a()(m.image, t)
        });
    },
    I = (e) => {
        let { className: t, ...n } = e,
            i = n.look === s.Button.Looks.LINK;
        return (0, r.jsx)(s.Button, {
            size: i ? s.Button.Sizes.MIN : s.Button.Sizes.LARGE,
            fullWidth: !i,
            className: a()(t, {
                [m.button]: !i,
                [m.linkButton]: i
            }),
            ...n
        });
    };
(I.Looks = s.Button.Looks), (I.Colors = s.Button.Colors), (I.Sizes = s.Button.Sizes);
let S = (e) => {
        let { className: t, src: n, size: i } = e;
        return (0, r.jsx)(g, {
            src: n,
            size: i,
            className: a()(m.inviteLargeIcon, t),
            'aria-hidden': !0
        });
    },
    T = (e) => {
        let { guild: t, size: n, animate: i = !1, className: a } = e;
        return (0, r.jsx)(d.Z, {
            active: !0,
            guild: t,
            size: n,
            animate: i,
            className: a
        });
    };
T.Sizes = d.Z.Sizes;
let y = (e) => {
    let { className: t, channel: n, size: i } = e;
    return (0, r.jsx)(g, {
        src: (0, o.x)(n),
        size: i,
        className: a()(m.inviteIcon, t),
        'aria-hidden': !0
    });
};
y.Sizes = s.AvatarSizes;
let A = (e) => {
        let { label: t, error: n, placeholder: i, value: o, className: l, inputClassName: u, setRef: d, type: f = 'text', onChange: _, autoComplete: p, autoFocus: h, maxLength: g, spellCheck: E, name: v, description: b, required: I, onFocus: S, onBlur: T } = e,
            y = (0, c.Dt)();
        return (0, r.jsxs)(s.FormItem, {
            title: t,
            error: n,
            className: l,
            required: I,
            tag: 'label',
            htmlFor: y,
            children: [
                (0, r.jsx)(s.TextInput, {
                    name: v,
                    type: f,
                    value: o,
                    inputRef: d,
                    placeholder: i,
                    inputClassName: a()(u, { [m.inputError]: null != n }),
                    'aria-label': t,
                    onChange: _,
                    autoComplete: p,
                    autoFocus: h,
                    maxLength: g,
                    spellCheck: E,
                    id: y,
                    onFocus: S,
                    onBlur: T
                }),
                null != b
                    ? (0, r.jsx)(s.FormText, {
                          type: s.FormText.Types.DESCRIPTION,
                          className: m.description,
                          children: b
                      })
                    : null
            ]
        });
    },
    N = (e) => {
        let { className: t, children: n } = e;
        return (0, r.jsx)('div', {
            className: a()(m.block, t),
            children: n
        });
    },
    C = (e) => {
        let { className: t, children: n, isProminent: i } = e;
        return (0, r.jsx)(s.Text, {
            variant: i ? 'text-sm/normal' : 'text-xs/normal',
            className: a()(m.subText, t),
            children: n
        });
    },
    R = (e) => {
        let { className: t } = e;
        return (0, r.jsx)(u.Z, {
            direction: u.Z.Direction.VERTICAL,
            align: u.Z.Align.CENTER,
            className: t,
            children: (0, r.jsx)(l.Z, { className: m.spinnerVideo })
        });
    },
    O = (e) => {
        let t,
            { online: n, total: i, className: o, flat: l, textClassName: c } = e;
        return null == i
            ? null
            : (null != n &&
                  n > 0 &&
                  (t = (0, r.jsxs)('div', {
                      className: a()(m.pill, m.pillOnline, l && m.pillFlat),
                      children: [
                          (0, r.jsx)('i', { className: m.pillIconOnline }),
                          (0, r.jsx)(s.Text, {
                              tag: 'span',
                              className: a()(m.pillMessage, c),
                              variant: 'text-sm/normal',
                              children: h.intl.format(h.t['LC+S+v'], { membersOnline: n })
                          })
                      ]
                  })),
              (0, r.jsxs)(u.Z, {
                  justify: u.Z.Justify.CENTER,
                  className: o,
                  children: [
                      t,
                      (0, r.jsxs)('div', {
                          className: a()(m.pill, l && m.pillFlat),
                          children: [
                              (0, r.jsx)('i', { className: m.pillIconTotal }),
                              (0, r.jsx)(s.Text, {
                                  tag: 'span',
                                  className: a()(m.pillMessage, c),
                                  variant: 'text-sm/normal',
                                  children: h.intl.format(h.t.zRl6XV, { count: i })
                              })
                          ]
                      })
                  ]
              }));
    },
    D = (e) => {
        let { user: t } = e;
        return null == t
            ? null
            : (0, r.jsxs)('div', {
                  className: m.joiningAs,
                  children: [
                      (0, r.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: h.intl.string(h.t['/8WWvL'])
                      }),
                      (0, r.jsx)(S, {
                          className: m.joiningAsAvatar,
                          src: t.getAvatarURL(void 0, 24),
                          size: s.AvatarSizes.SIZE_24,
                          'aria-label': t.username
                      }),
                      (0, r.jsx)(s.Text, {
                          className: m.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: t.username
                      })
                  ]
              });
    },
    L = (e) => {
        let { className: t } = e;
        return (0, r.jsxs)(N, {
            className: t,
            children: [
                (0, r.jsx)(I, {
                    onClick: () => window.open((0, f.t3)()),
                    children: h.intl.format(h.t.JoS1i4, { platform: (0, f.DW)() })
                }),
                (0, r.jsx)(C, {
                    className: m.downloadButtonSubtext,
                    children: h.intl.format(h.t.wO1VBg, { supportedBrowserURL: _.Z.getArticleURL(p.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    };
t.ZP = (e) => {
    let { className: t, contentClassName: n, tag: i = 'section', onSubmit: o, children: l, expanded: u = !1, theme: c = p.BRd.DARK, style: d } = e;
    return (0, r.jsx)(s.ThemeProvider, {
        theme: c,
        children: (e) =>
            (0, r.jsxs)(i, {
                'data-theme': c,
                'data-disable-adaptive-theme': !0,
                onSubmit: o,
                style: d,
                className: a()(u ? m.authBoxExpanded : m.authBox, e, t),
                children: [
                    (0, r.jsx)('div', { className: m.discordLogo }),
                    (0, r.jsx)('div', {
                        className: a()(m.centeringWrapper, n),
                        children: l
                    })
                ]
            })
    });
};
