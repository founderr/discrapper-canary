t.d(n, {
    DK: function () {
        return g;
    },
    Dx: function () {
        return _;
    },
    EJ: function () {
        return B;
    },
    Ee: function () {
        return v;
    },
    Hh: function () {
        return A;
    },
    II: function () {
        return T;
    },
    MC: function () {
        return S;
    },
    Vj: function () {
        return I;
    },
    gO: function () {
        return C;
    },
    i_: function () {
        return E;
    },
    jQ: function () {
        return R;
    },
    qE: function () {
        return N;
    },
    v6: function () {
        return O;
    },
    zx: function () {
        return j;
    }
}),
    t(536091);
var a = t(735250);
t(470079);
var i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(43267),
    s = t(905656),
    c = t(600164),
    d = t(313201),
    u = t(565138),
    p = t(361207),
    m = t(63063),
    x = t(981631),
    f = t(689938),
    b = t(986579);
let h = o.Avatar;
null == h && (h = () => null);
let _ = (e) => {
        let { className: n, id: t, children: i } = e;
        return (0, a.jsx)(o.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: r()(b.title, n),
            id: t,
            children: i
        });
    },
    g = (e) => {
        let { className: n, children: t } = e;
        return (0, a.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: n,
            children: t
        });
    },
    v = (e) => {
        let { className: n, src: t } = e;
        return (0, a.jsx)('img', {
            alt: '',
            src: t,
            className: r()(b.image, n)
        });
    },
    j = (e) => {
        let { className: n, ...t } = e,
            i = t.look === o.Button.Looks.LINK;
        return (0, a.jsx)(o.Button, {
            size: i ? o.Button.Sizes.MIN : o.Button.Sizes.LARGE,
            fullWidth: !i,
            className: r()(n, {
                [b.button]: !i,
                [b.linkButton]: i
            }),
            ...t
        });
    };
(j.Looks = o.Button.Looks), (j.Colors = o.Button.Colors), (j.Sizes = o.Button.Sizes);
let N = (e) => {
        let { className: n, src: t, size: i } = e;
        return (0, a.jsx)(h, {
            src: t,
            size: i,
            className: r()(b.inviteLargeIcon, n),
            'aria-hidden': !0
        });
    },
    I = (e) => {
        let { guild: n, size: t, animate: i = !1, className: r } = e;
        return (0, a.jsx)(u.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: i,
            className: r
        });
    };
I.Sizes = u.Z.Sizes;
let S = (e) => {
    let { className: n, channel: t, size: i } = e;
    return (0, a.jsx)(h, {
        src: (0, l.x)(t),
        size: i,
        className: r()(b.inviteIcon, n),
        'aria-hidden': !0
    });
};
S.Sizes = o.AvatarSizes;
let T = (e) => {
        let { label: n, error: t, placeholder: i, value: l, className: s, inputClassName: c, setRef: u, type: p = 'text', onChange: m, autoComplete: x, autoFocus: f, maxLength: h, spellCheck: _, name: g, description: v, required: j, onFocus: N, onBlur: I } = e,
            S = (0, d.Dt)();
        return (0, a.jsxs)(o.FormItem, {
            title: n,
            error: t,
            className: s,
            required: j,
            tag: 'label',
            htmlFor: S,
            children: [
                (0, a.jsx)(o.TextInput, {
                    name: g,
                    type: p,
                    value: l,
                    inputRef: u,
                    placeholder: i,
                    inputClassName: r()(c, { [b.inputError]: null != t }),
                    'aria-label': n,
                    onChange: m,
                    autoComplete: x,
                    autoFocus: f,
                    maxLength: h,
                    spellCheck: _,
                    id: S,
                    onFocus: N,
                    onBlur: I
                }),
                null != v
                    ? (0, a.jsx)(o.FormText, {
                          type: o.FormText.Types.DESCRIPTION,
                          className: b.description,
                          children: v
                      })
                    : null
            ]
        });
    },
    C = (e) => {
        let { className: n, children: t } = e;
        return (0, a.jsx)('div', {
            className: r()(b.block, n),
            children: t
        });
    },
    E = (e) => {
        let { className: n, children: t, isProminent: i } = e;
        return (0, a.jsx)(o.Text, {
            variant: i ? 'text-sm/normal' : 'text-xs/normal',
            className: r()(b.subText, n),
            children: t
        });
    },
    A = (e) => {
        let { className: n } = e;
        return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(s.Z, { className: b.spinnerVideo })
        });
    },
    B = (e) => {
        let n,
            { online: t, total: i, className: l, flat: s, textClassName: d } = e;
        return null == i
            ? null
            : (null != t &&
                  t > 0 &&
                  (n = (0, a.jsxs)('div', {
                      className: r()(b.pill, b.pillOnline, s && b.pillFlat),
                      children: [
                          (0, a.jsx)('i', { className: b.pillIconOnline }),
                          (0, a.jsx)(o.Text, {
                              tag: 'span',
                              className: r()(b.pillMessage, d),
                              variant: 'text-sm/normal',
                              children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t })
                          })
                      ]
                  })),
              (0, a.jsxs)(c.Z, {
                  justify: c.Z.Justify.CENTER,
                  className: l,
                  children: [
                      n,
                      (0, a.jsxs)('div', {
                          className: r()(b.pill, s && b.pillFlat),
                          children: [
                              (0, a.jsx)('i', { className: b.pillIconTotal }),
                              (0, a.jsx)(o.Text, {
                                  tag: 'span',
                                  className: r()(b.pillMessage, d),
                                  variant: 'text-sm/normal',
                                  children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: i })
                              })
                          ]
                      })
                  ]
              }));
    },
    R = (e) => {
        let { user: n } = e;
        return null == n
            ? null
            : (0, a.jsxs)('div', {
                  className: b.joiningAs,
                  children: [
                      (0, a.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: f.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                      }),
                      (0, a.jsx)(N, {
                          className: b.joiningAsAvatar,
                          src: n.getAvatarURL(void 0, 24),
                          size: o.AvatarSizes.SIZE_24,
                          'aria-label': n.username
                      }),
                      (0, a.jsx)(o.Text, {
                          className: b.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: n.username
                      })
                  ]
              });
    },
    O = (e) => {
        let { className: n } = e;
        return (0, a.jsxs)(C, {
            className: n,
            children: [
                (0, a.jsx)(j, {
                    onClick: () => window.open((0, p.t3)()),
                    children: f.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({ platform: (0, p.DW)() })
                }),
                (0, a.jsx)(E, {
                    className: b.downloadButtonSubtext,
                    children: f.Z.Messages.INCOMPATIBLE_BROWSER.format({ supportedBrowserURL: m.Z.getArticleURL(x.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    };
n.ZP = (e) => {
    let { className: n, contentClassName: t, tag: i = 'section', onSubmit: l, children: s, expanded: c = !1, theme: d = x.BRd.DARK, style: u } = e;
    return (0, a.jsx)(o.ThemeProvider, {
        theme: d,
        children: (e) =>
            (0, a.jsxs)(i, {
                'data-theme': d,
                'data-disable-adaptive-theme': !0,
                onSubmit: l,
                style: u,
                className: r()(c ? b.authBoxExpanded : b.authBox, e, n),
                children: [
                    (0, a.jsx)('div', { className: b.discordLogo }),
                    (0, a.jsx)('div', {
                        className: r()(b.centeringWrapper, t),
                        children: s
                    })
                ]
            })
    });
};
