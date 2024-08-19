t.d(n, {
    DK: function () {
        return v;
    },
    Dx: function () {
        return g;
    },
    EJ: function () {
        return R;
    },
    Ee: function () {
        return N;
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
        return S;
    },
    gO: function () {
        return E;
    },
    i_: function () {
        return A;
    },
    jQ: function () {
        return O;
    },
    qE: function () {
        return I;
    },
    v6: function () {
        return L;
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
    x = t(792125),
    f = t(981631),
    b = t(689938),
    h = t(986579);
let _ = o.Avatar;
null == _ && (_ = () => null);
let g = (e) => {
        let { className: n, id: t, children: i } = e;
        return (0, a.jsx)(o.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: r()(h.title, n),
            id: t,
            children: i
        });
    },
    v = (e) => {
        let { className: n, children: t } = e;
        return (0, a.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'header-secondary',
            className: n,
            children: t
        });
    },
    N = (e) => {
        let { className: n, src: t } = e;
        return (0, a.jsx)('img', {
            alt: '',
            src: t,
            className: r()(h.image, n)
        });
    },
    j = (e) => {
        let { className: n, ...t } = e,
            i = t.look === o.Button.Looks.LINK;
        return (0, a.jsx)(o.Button, {
            size: i ? o.Button.Sizes.MIN : o.Button.Sizes.LARGE,
            fullWidth: !i,
            className: r()(n, {
                [h.button]: !i,
                [h.linkButton]: i
            }),
            ...t
        });
    };
(j.Looks = o.Button.Looks), (j.Colors = o.Button.Colors), (j.Sizes = o.Button.Sizes);
let I = (e) => {
        let { className: n, src: t, size: i } = e;
        return (0, a.jsx)(_, {
            src: t,
            size: i,
            className: r()(h.inviteLargeIcon, n),
            'aria-hidden': !0
        });
    },
    S = (e) => {
        let { guild: n, size: t, animate: i = !1, className: r } = e;
        return (0, a.jsx)(u.Z, {
            active: !0,
            guild: n,
            size: t,
            animate: i,
            className: r
        });
    };
S.Sizes = u.Z.Sizes;
let T = (e) => {
    let { className: n, channel: t, size: i } = e;
    return (0, a.jsx)(_, {
        src: (0, l.x)(t),
        size: i,
        className: r()(h.inviteIcon, n),
        'aria-hidden': !0
    });
};
T.Sizes = o.AvatarSizes;
let C = (e) => {
        let { label: n, error: t, placeholder: i, value: l, className: s, inputClassName: c, setRef: u, type: p = 'text', onChange: m, autoComplete: x, autoFocus: f, maxLength: b, spellCheck: _, name: g, description: v, required: N, onFocus: j, onBlur: I } = e,
            S = (0, d.Dt)();
        return (0, a.jsxs)(o.FormItem, {
            title: n,
            error: t,
            className: s,
            required: N,
            tag: 'label',
            htmlFor: S,
            children: [
                (0, a.jsx)(o.TextInput, {
                    name: g,
                    type: p,
                    value: l,
                    inputRef: u,
                    placeholder: i,
                    inputClassName: r()(c, { [h.inputError]: null != t }),
                    'aria-label': n,
                    onChange: m,
                    autoComplete: x,
                    autoFocus: f,
                    maxLength: b,
                    spellCheck: _,
                    id: S,
                    onFocus: j,
                    onBlur: I
                }),
                null != v
                    ? (0, a.jsx)(o.FormText, {
                          type: o.FormText.Types.DESCRIPTION,
                          className: h.description,
                          children: v
                      })
                    : null
            ]
        });
    },
    E = (e) => {
        let { className: n, children: t } = e;
        return (0, a.jsx)('div', {
            className: r()(h.block, n),
            children: t
        });
    },
    A = (e) => {
        let { className: n, children: t, isProminent: i } = e;
        return (0, a.jsx)(o.Text, {
            variant: i ? 'text-sm/normal' : 'text-xs/normal',
            className: r()(h.subText, n),
            children: t
        });
    },
    B = (e) => {
        let { className: n } = e;
        return (0, a.jsx)(c.Z, {
            direction: c.Z.Direction.VERTICAL,
            align: c.Z.Align.CENTER,
            className: n,
            children: (0, a.jsx)(s.Z, { className: h.spinnerVideo })
        });
    },
    R = (e) => {
        let n,
            { online: t, total: i, className: l, flat: s, textClassName: d } = e;
        return null == i
            ? null
            : (null != t &&
                  t > 0 &&
                  (n = (0, a.jsxs)('div', {
                      className: r()(h.pill, h.pillOnline, s && h.pillFlat),
                      children: [
                          (0, a.jsx)('i', { className: h.pillIconOnline }),
                          (0, a.jsx)(o.Text, {
                              tag: 'span',
                              className: r()(h.pillMessage, d),
                              variant: 'text-sm/normal',
                              children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t })
                          })
                      ]
                  })),
              (0, a.jsxs)(c.Z, {
                  justify: c.Z.Justify.CENTER,
                  className: l,
                  children: [
                      n,
                      (0, a.jsxs)('div', {
                          className: r()(h.pill, s && h.pillFlat),
                          children: [
                              (0, a.jsx)('i', { className: h.pillIconTotal }),
                              (0, a.jsx)(o.Text, {
                                  tag: 'span',
                                  className: r()(h.pillMessage, d),
                                  variant: 'text-sm/normal',
                                  children: b.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: i })
                              })
                          ]
                      })
                  ]
              }));
    },
    O = (e) => {
        let { user: n } = e;
        return null == n
            ? null
            : (0, a.jsxs)('div', {
                  className: h.joiningAs,
                  children: [
                      (0, a.jsx)(o.Text, {
                          tag: 'span',
                          variant: 'text-md/normal',
                          color: 'header-secondary',
                          children: b.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
                      }),
                      (0, a.jsx)(I, {
                          className: h.joiningAsAvatar,
                          src: n.getAvatarURL(void 0, 24),
                          size: o.AvatarSizes.SIZE_24,
                          'aria-label': n.username
                      }),
                      (0, a.jsx)(o.Text, {
                          className: h.joiningAsUsername,
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
        return (0, a.jsxs)(E, {
            className: n,
            children: [
                (0, a.jsx)(j, {
                    onClick: () => window.open((0, p.t3)()),
                    children: b.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({ platform: (0, p.DW)() })
                }),
                (0, a.jsx)(A, {
                    className: h.downloadButtonSubtext,
                    children: b.Z.Messages.INCOMPATIBLE_BROWSER.format({ supportedBrowserURL: m.Z.getArticleURL(f.BhN.SUPPORTED_BROWSERS) })
                })
            ]
        });
    };
n.ZP = (e) => {
    let { className: n, contentClassName: t, tag: i = 'section', onSubmit: o, children: l, expanded: s = !1, theme: c = f.BRd.DARK, style: d } = e;
    return (0, a.jsxs)(i, {
        'data-theme': c,
        'data-disable-adaptive-theme': !0,
        onSubmit: o,
        style: d,
        className: r()(s ? h.authBoxExpanded : h.authBox, (0, x.Q)(c), n),
        children: [
            (0, a.jsx)('div', { className: h.discordLogo }),
            (0, a.jsx)('div', {
                className: r()(h.centeringWrapper, t),
                children: l
            })
        ]
    });
};
