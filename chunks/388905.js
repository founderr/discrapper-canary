t.d(n, {
  DK: function() {
return Z;
  },
  Dx: function() {
return j;
  },
  EJ: function() {
return O;
  },
  Ee: function() {
return v;
  },
  Hh: function() {
return M;
  },
  II: function() {
return T;
  },
  MC: function() {
return E;
  },
  Vj: function() {
return b;
  },
  gO: function() {
return _;
  },
  i_: function() {
return L;
  },
  jQ: function() {
return S;
  },
  qE: function() {
return C;
  },
  v6: function() {
return A;
  },
  zx: function() {
return I;
  }
}), t(536091);
var l = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  s = t(43267),
  o = t(905656),
  u = t(600164),
  c = t(313201),
  d = t(565138),
  p = t(361207),
  x = t(63063),
  m = t(792125),
  h = t(981631),
  f = t(689938),
  N = t(173307);
let g = i.Avatar;
null == g && (g = () => null);
let j = e => {
let {
  className: n,
  id: t,
  children: a
} = e;
return (0, l.jsx)(i.Heading, {
  variant: 'heading-xl/semibold',
  color: 'header-primary',
  className: r()(N.title, n),
  id: t,
  children: a
});
  },
  Z = e => {
let {
  className: n,
  children: t
} = e;
return (0, l.jsx)(i.Text, {
  variant: 'text-md/normal',
  color: 'header-secondary',
  className: n,
  children: t
});
  },
  v = e => {
let {
  className: n,
  src: t
} = e;
return (0, l.jsx)('img', {
  alt: '',
  src: t,
  className: r()(N.image, n)
});
  },
  I = e => {
let {
  className: n,
  ...t
} = e, a = t.look === i.Button.Looks.LINK;
return (0, l.jsx)(i.Button, {
  size: a ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
  fullWidth: !a,
  className: r()(n, {
    [N.button]: !a,
    [N.linkButton]: a
  }),
  ...t
});
  };
I.Looks = i.Button.Looks, I.Colors = i.Button.Colors, I.Sizes = i.Button.Sizes;
let C = e => {
let {
  className: n,
  src: t,
  size: a
} = e;
return (0, l.jsx)(g, {
  src: t,
  size: a,
  className: r()(N.inviteLargeIcon, n),
  'aria-hidden': !0
});
  },
  b = e => {
let {
  guild: n,
  size: t,
  animate: a = !1,
  className: r
} = e;
return (0, l.jsx)(d.Z, {
  active: !0,
  guild: n,
  size: t,
  animate: a,
  className: r
});
  };
b.Sizes = d.Z.Sizes;
let E = e => {
  let {
className: n,
channel: t,
size: a
  } = e;
  return (0, l.jsx)(g, {
src: (0, s.x)(t),
size: a,
className: r()(N.inviteIcon, n),
'aria-hidden': !0
  });
};
E.Sizes = i.AvatarSizes;
let T = e => {
let {
  label: n,
  error: t,
  placeholder: a,
  value: s,
  className: o,
  inputClassName: u,
  setRef: d,
  type: p = 'text',
  onChange: x,
  autoComplete: m,
  autoFocus: h,
  maxLength: f,
  spellCheck: g,
  name: j,
  description: Z,
  required: v,
  onFocus: I,
  onBlur: C
} = e, b = (0, c.Dt)();
return (0, l.jsxs)(i.FormItem, {
  title: n,
  error: t,
  className: o,
  required: v,
  tag: 'label',
  htmlFor: b,
  children: [
    (0, l.jsx)(i.TextInput, {
      name: j,
      type: p,
      value: s,
      inputRef: d,
      placeholder: a,
      inputClassName: r()(u, {
        [N.inputError]: null != t
      }),
      'aria-label': n,
      onChange: x,
      autoComplete: m,
      autoFocus: h,
      maxLength: f,
      spellCheck: g,
      id: b,
      onFocus: I,
      onBlur: C
    }),
    null != Z ? (0, l.jsx)(i.FormText, {
      type: i.FormText.Types.DESCRIPTION,
      className: N.description,
      children: Z
    }) : null
  ]
});
  },
  _ = e => {
let {
  className: n,
  children: t
} = e;
return (0, l.jsx)('div', {
  className: r()(N.block, n),
  children: t
});
  },
  L = e => {
let {
  className: n,
  children: t,
  isProminent: a
} = e;
return (0, l.jsx)(i.Text, {
  variant: a ? 'text-sm/normal' : 'text-xs/normal',
  className: r()(N.subText, n),
  children: t
});
  },
  M = e => {
let {
  className: n
} = e;
return (0, l.jsx)(u.Z, {
  direction: u.Z.Direction.VERTICAL,
  align: u.Z.Align.CENTER,
  className: n,
  children: (0, l.jsx)(o.Z, {
    className: N.spinnerVideo
  })
});
  },
  O = e => {
let n, {
  online: t,
  total: a,
  className: s,
  flat: o,
  textClassName: c
} = e;
return null == a ? null : (null != t && t > 0 && (n = (0, l.jsxs)('div', {
  className: r()(N.pill, N.pillOnline, o && N.pillFlat),
  children: [
    (0, l.jsx)('i', {
      className: N.pillIconOnline
    }),
    (0, l.jsx)(i.Text, {
      tag: 'span',
      className: r()(N.pillMessage, c),
      variant: 'text-sm/normal',
      children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
        membersOnline: t
      })
    })
  ]
})), (0, l.jsxs)(u.Z, {
  justify: u.Z.Justify.CENTER,
  className: s,
  children: [
    n,
    (0, l.jsxs)('div', {
      className: r()(N.pill, o && N.pillFlat),
      children: [
        (0, l.jsx)('i', {
          className: N.pillIconTotal
        }),
        (0, l.jsx)(i.Text, {
          tag: 'span',
          className: r()(N.pillMessage, c),
          variant: 'text-sm/normal',
          children: f.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
            count: a
          })
        })
      ]
    })
  ]
}));
  },
  S = e => {
let {
  user: n
} = e;
return null == n ? null : (0, l.jsxs)('div', {
  className: N.joiningAs,
  children: [
    (0, l.jsx)(i.Text, {
      tag: 'span',
      variant: 'text-md/normal',
      color: 'header-secondary',
      children: f.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
    }),
    (0, l.jsx)(C, {
      className: N.joiningAsAvatar,
      src: n.getAvatarURL(void 0, 24),
      size: i.AvatarSizes.SIZE_24,
      'aria-label': n.username
    }),
    (0, l.jsx)(i.Text, {
      className: N.joiningAsUsername,
      tag: 'span',
      variant: 'text-md/semibold',
      color: 'header-primary',
      children: n.username
    })
  ]
});
  },
  A = e => {
let {
  className: n
} = e;
return (0, l.jsxs)(_, {
  className: n,
  children: [
    (0, l.jsx)(I, {
      onClick: () => window.open((0, p.t3)()),
      children: f.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
        platform: (0, p.DW)()
      })
    }),
    (0, l.jsx)(L, {
      className: N.downloadButtonSubtext,
      children: f.Z.Messages.INCOMPATIBLE_BROWSER.format({
        supportedBrowserURL: x.Z.getArticleURL(h.BhN.SUPPORTED_BROWSERS)
      })
    })
  ]
});
  };
n.ZP = e => {
  let {
className: n,
contentClassName: t,
tag: a = 'section',
onSubmit: i,
children: s,
expanded: o = !1,
theme: u = h.BRd.DARK,
style: c
  } = e;
  return (0, l.jsxs)(a, {
'data-theme': u,
'data-disable-adaptive-theme': !0,
onSubmit: i,
style: c,
className: r()(o ? N.authBoxExpanded : N.authBox, (0, m.Q)(u), n),
children: [
  (0, l.jsx)('div', {
    className: N.discordLogo
  }),
  (0, l.jsx)('div', {
    className: r()(N.centeringWrapper, t),
    children: s
  })
]
  });
};