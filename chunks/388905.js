t.d(n, {
    DK: function () {
        return _;
    },
    Dx: function () {
        return v;
    },
    EJ: function () {
        return A;
    },
    Ee: function () {
        return g;
    },
    Hh: function () {
        return R;
    },
    II: function () {
        return S;
    },
    MC: function () {
        return I;
    },
    Vj: function () {
        return C;
    },
    gO: function () {
        return B;
    },
    i_: function () {
        return T;
    },
    jQ: function () {
        return y;
    },
    qE: function () {
        return N;
    },
    v6: function () {
        return k;
    },
    zx: function () {
        return j;
    }
}),
    t(536091);
var a = t(200651);
t(192379);
var i = t(120356),
    r = t.n(i),
    l = t(481060),
    o = t(43267),
    s = t(905656),
    c = t(600164),
    d = t(313201),
    u = t(565138),
    p = t(361207),
    m = t(63063),
    x = t(981631),
    b = t(388032),
    h = t(878145);
let f = l.Avatar;
null == f && (f = () => null);
let v = (e) => {
        let { className: n, id: t, children: i } = e;
        return (0, a.jsx)(l.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: r()(h.title, n),
            id: t,
            children: i
        });
    },
    _ = (e) => {
        let { className: n, children: t } = e;
        return (0, a.jsx)(l.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: n,
            children: t
        });
    },
    g = (e) => {
        let { className: n, src: t } = e;
        return (0, a.jsx)('img', {
            alt: '',
            src: t,
            className: r()(h.image, n)
        });
    },
    j = (e) => {
        let { className: n, ...t } = e,
            i = t.look === l.Button.Looks.LINK;
        return (0, a.jsx)(l.Button, {
            size: i ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
            fullWidth: !i,
            className: r()(n, {
                [h.button]: !i,
                [h.linkButton]: i
            }),
            ...t
        });
    };
(j.Looks = l.Button.Looks), (j.Colors = l.Button.Colors), (j.Sizes = l.Button.Sizes);
let N = (e) => {
        let { className: n, src: t, size: i } = e;
        return (0, a.jsx)(f, {
            src: t,
            size: i,
            className: r()(h.inviteLargeIcon, n),
            'aria-hidden': !0
        });
    },
    C = (e) => {
        let { guild: n, size: t, animate: i = !1, className: r } = e;
        return (0, a.jsx)(u.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: i,
            className: r
        });
    };
C.Sizes = u.Z.Sizes;
let I = (e) => {
    let { className: n, channel: t, size: i } = e;
    return (0, a.jsx)(f, {
        src: (0, o.x)(t),
        size: i,
        className: r()(h.inviteIcon, n),
        'aria-hidden': !0
    });
};
I.Sizes = l.AvatarSizes;
let S = (e) => {
        let { label: n, error: t, placeholder: i, value: o, className: s, inputClassName: c, setRef: u, type: p = 'text', onChange: m, autoComplete: x, autoFocus: b, maxLength: f, spellCheck: v, name: _, description: g, required: j, onFocus: N, onBlur: C } = e,
            I = (0, d.Dt)();
        return (0, a.jsxs)(l.FormItem, {
            title: n,
            error: t,
            className: s,
            required: j,
            tag: 'label',
            htmlFor: I,
            children: [
                (0, a.jsx)(l.TextInput, {
                    name: _,
                    type: p,
                    value: o,
                    inputRef: u,
                    placeholder: i,
                    inputClassName: r()(c, { [h.inputError]: null != t }),
                    'aria-label': n,
                    onChange: m,
                    autoComplete: x,
                    autoFocus: b,
                    maxLength: f,
                    spellCheck: v,
                    id: I,
                    onFocus: N,
                    onBlur: C
                }),
                null != g
                    ? (0, a.jsx)(l.FormText, {
                          type: l.FormText.Types.DESCRIPTION,
                          className: h.description,
                          children: g
                      })
                    : null
            ]
        });
    },
    B = (e) => {
        let { className: n, children: t } = e;
        return (0, a.jsx)('div', {
            className: r()(h.block, n),
            children: t
        });
    },
    T = (e) => {
        let { className: n, children: t, isProminent: i } = e;
        return (0, a.jsx)(l.Text, {
            variant: i ? 'text-sm/normal' : 'text-xs/normal',
            className: r()(h.subText, n),
            children: t
        });
    },
    R = (e) => {
        let { className: n } = e;
        return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(s.Z, { className: h.spinnerVideo })
        });
    },
    A = (e) => {
        let n,
            { online: t, total: i, className: o, flat: s, textClassName: d } = e;
        return null == i
            ? null
            : (null != t &&
                  t > 0 &&
                  (n = (0, a.jsxs)('div', {
                      className: r()(h.pill, h.pillOnline, s && h.pillFlat),
                      children: [
                          (0, a.jsx)('i', { className: h.pillIconOnline }),
                          (0, a.jsx)(l.Text, {
                              tag: 'span',
                              className: r()(h.pillMessage, d),
                              variant: 'text-sm/normal',
                              children: b.intl.format(b.t['LC+S+v'], { membersOnline: t })
                          })
                      ]
                  })),
              (0, a.jsxs)(c.Z, {
                  justify: c.Z.Justify.CENTER,
                  className: o,
                  children: [
                      n,
                      (0, a.jsxs)('div', {
                          className: r()(h.pill, s && h.pillFlat),
                          children: [
                              (0, a.jsx)('i', { className: h.pillIconTotal }),
                              (0, a.jsx)(l.Text, {
                                  tag: 'span',
                                  className: r()(h.pillMessage, d),
                                  variant: 'text-sm/normal',
                                  children: b.intl.format(b.t.zRl6XV, { count: i })
                              })
                          ]
                      })
                  ]
              }));
    },
    y = (e) => {
        let { user: n } = e;
        return null == n
            ? null
            : (0, a.jsxs)('div', {
                  className: h.joiningAs,
                  children: [
                      (0, a.jsx)(l.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: b.intl.string(b.t['/8WWvL'])
                      }),
                      (0, a.jsx)(N, {
                          className: h.joiningAsAvatar,
                          src: n.getAvatarURL(void 0, 24),
                          size: l.AvatarSizes.SIZE_24,
                          'aria-label': n.username
                      }),
                      (0, a.jsx)(l.Text, {
                          className: h.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: n.username
                      })
                  ]
              });
    },
    k = (e) => {
        let { className: n } = e;
        return (0, a.jsxs)(B, {
            className: n,
            children: [
                (0, a.jsx)(j, {
                    onClick: () => window.open((0, p.t3)()),
                    children: b.intl.format(b.t.JoS1i4, { platform: (0, p.DW)() })
                }),
                (0, a.jsx)(T, {
                    className: h.downloadButtonSubtext,
                    children: b.intl.format(b.t.wO1VBg, { supportedBrowserURL: m.Z.getArticleURL(x.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    };
n.ZP = (e) => {
    let { className: n, contentClassName: t, tag: i = 'section', onSubmit: o, children: s, expanded: c = !1, theme: d = x.BRd.DARK, style: u } = e;
    return (0, a.jsx)(l.ThemeProvider, {
        theme: d,
        children: (e) =>
            (0, a.jsxs)(i, {
                'data-theme': d,
                'data-disable-adaptive-theme': !0,
                onSubmit: o,
                style: u,
                className: r()(c ? h.authBoxExpanded : h.authBox, e, n),
                children: [
                    (0, a.jsx)('div', { className: h.discordLogo }),
                    (0, a.jsx)('div', {
                        className: r()(h.centeringWrapper, t),
                        children: s
                    })
                ]
            })
    });
};
