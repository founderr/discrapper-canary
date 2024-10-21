t.d(n, {
    DK: function () {
        return g;
    },
    Dx: function () {
        return f;
    },
    EJ: function () {
        return E;
    },
    Ee: function () {
        return v;
    },
    Hh: function () {
        return B;
    },
    II: function () {
        return C;
    },
    MC: function () {
        return T;
    },
    Vj: function () {
        return I;
    },
    gO: function () {
        return S;
    },
    i_: function () {
        return A;
    },
    jQ: function () {
        return R;
    },
    qE: function () {
        return N;
    },
    v6: function () {
        return L;
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
    s = t(481060),
    o = t(43267),
    l = t(905656),
    c = t(600164),
    d = t(313201),
    u = t(565138),
    p = t(361207),
    m = t(63063),
    x = t(981631),
    b = t(689938),
    _ = t(878145);
let h = s.Avatar;
null == h && (h = () => null);
let f = (e) => {
        let { className: n, id: t, children: i } = e;
        return (0, a.jsx)(s.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: r()(_.title, n),
            id: t,
            children: i
        });
    },
    g = (e) => {
        let { className: n, children: t } = e;
        return (0, a.jsx)(s.Text, {
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
            className: r()(_.image, n)
        });
    },
    j = (e) => {
        let { className: n, ...t } = e,
            i = t.look === s.Button.Looks.LINK;
        return (0, a.jsx)(s.Button, {
            size: i ? s.Button.Sizes.MIN : s.Button.Sizes.LARGE,
            fullWidth: !i,
            className: r()(n, {
                [_.button]: !i,
                [_.linkButton]: i
            }),
            ...t
        });
    };
(j.Looks = s.Button.Looks), (j.Colors = s.Button.Colors), (j.Sizes = s.Button.Sizes);
let N = (e) => {
        let { className: n, src: t, size: i } = e;
        return (0, a.jsx)(h, {
            src: t,
            size: i,
            className: r()(_.inviteLargeIcon, n),
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
let T = (e) => {
    let { className: n, channel: t, size: i } = e;
    return (0, a.jsx)(h, {
        src: (0, o.x)(t),
        size: i,
        className: r()(_.inviteIcon, n),
        'aria-hidden': !0
    });
};
T.Sizes = s.AvatarSizes;
let C = (e) => {
        let { label: n, error: t, placeholder: i, value: o, className: l, inputClassName: c, setRef: u, type: p = 'text', onChange: m, autoComplete: x, autoFocus: b, maxLength: h, spellCheck: f, name: g, description: v, required: j, onFocus: N, onBlur: I } = e,
            T = (0, d.Dt)();
        return (0, a.jsxs)(s.FormItem, {
            title: n,
            error: t,
            className: l,
            required: j,
            tag: 'label',
            htmlFor: T,
            children: [
                (0, a.jsx)(s.TextInput, {
                    name: g,
                    type: p,
                    value: o,
                    inputRef: u,
                    placeholder: i,
                    inputClassName: r()(c, { [_.inputError]: null != t }),
                    'aria-label': n,
                    onChange: m,
                    autoComplete: x,
                    autoFocus: b,
                    maxLength: h,
                    spellCheck: f,
                    id: T,
                    onFocus: N,
                    onBlur: I
                }),
                null != v
                    ? (0, a.jsx)(s.FormText, {
                          type: s.FormText.Types.DESCRIPTION,
                          className: _.description,
                          children: v
                      })
                    : null
            ]
        });
    },
    S = (e) => {
        let { className: n, children: t } = e;
        return (0, a.jsx)('div', {
            className: r()(_.block, n),
            children: t
        });
    },
    A = (e) => {
        let { className: n, children: t, isProminent: i } = e;
        return (0, a.jsx)(s.Text, {
            variant: i ? 'text-sm/normal' : 'text-xs/normal',
            className: r()(_.subText, n),
            children: t
        });
    },
    B = (e) => {
        let { className: n } = e;
        return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(l.Z, { className: _.spinnerVideo })
        });
    },
    E = (e) => {
        let n,
            { online: t, total: i, className: o, flat: l, textClassName: d } = e;
        return null == i
            ? null
            : (null != t &&
                  t > 0 &&
                  (n = (0, a.jsxs)('div', {
                      className: r()(_.pill, _.pillOnline, l && _.pillFlat),
                      children: [
                          (0, a.jsx)('i', { className: _.pillIconOnline }),
                          (0, a.jsx)(s.Text, {
                              tag: 'span',
                              className: r()(_.pillMessage, d),
                              variant: 'text-sm/normal',
                              children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t })
                          })
                      ]
                  })),
              (0, a.jsxs)(c.Z, {
                  justify: c.Z.Justify.CENTER,
                  className: o,
                  children: [
                      n,
                      (0, a.jsxs)('div', {
                          className: r()(_.pill, l && _.pillFlat),
                          children: [
                              (0, a.jsx)('i', { className: _.pillIconTotal }),
                              (0, a.jsx)(s.Text, {
                                  tag: 'span',
                                  className: r()(_.pillMessage, d),
                                  variant: 'text-sm/normal',
                                  children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: i })
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
                  className: _.joiningAs,
                  children: [
                      (0, a.jsx)(s.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: b.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                      }),
                      (0, a.jsx)(N, {
                          className: _.joiningAsAvatar,
                          src: n.getAvatarURL(void 0, 24),
                          size: s.AvatarSizes.SIZE_24,
                          'aria-label': n.username
                      }),
                      (0, a.jsx)(s.Text, {
                          className: _.joiningAsUsername,
                          tag: 'span',
                          variant: 'text-md/semibold',
                          color: 'header-primary',
                          children: n.username
                      })
                  ]
              });
    },
    L = (e) => {
        let { className: n } = e;
        return (0, a.jsxs)(S, {
            className: n,
            children: [
                (0, a.jsx)(j, {
                    onClick: () => window.open((0, p.t3)()),
                    children: b.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({ platform: (0, p.DW)() })
                }),
                (0, a.jsx)(A, {
                    className: _.downloadButtonSubtext,
                    children: b.Z.Messages.INCOMPATIBLE_BROWSER.format({ supportedBrowserURL: m.Z.getArticleURL(x.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    };
n.ZP = (e) => {
    let { className: n, contentClassName: t, tag: i = 'section', onSubmit: o, children: l, expanded: c = !1, theme: d = x.BRd.DARK, style: u } = e;
    return (0, a.jsx)(s.ThemeProvider, {
        theme: d,
        children: (e) =>
            (0, a.jsxs)(i, {
                'data-theme': d,
                'data-disable-adaptive-theme': !0,
                onSubmit: o,
                style: u,
                className: r()(c ? _.authBoxExpanded : _.authBox, e, n),
                children: [
                    (0, a.jsx)('div', { className: _.discordLogo }),
                    (0, a.jsx)('div', {
                        className: r()(_.centeringWrapper, t),
                        children: l
                    })
                ]
            })
    });
};
