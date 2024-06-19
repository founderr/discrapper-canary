t.d(s, {
  DK: function() {
    return g
  },
  Dx: function() {
    return v
  },
  EJ: function() {
    return L
  },
  Ee: function() {
    return T
  },
  Hh: function() {
    return B
  },
  II: function() {
    return S
  },
  MC: function() {
    return E
  },
  Vj: function() {
    return R
  },
  gO: function() {
    return A
  },
  i_: function() {
    return C
  },
  jQ: function() {
    return _
  },
  qE: function() {
    return I
  },
  v6: function() {
    return M
  },
  zx: function() {
    return b
  }
}), t(536091);
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  l = t(481060),
  i = t(43267),
  o = t(285952),
  c = t(346656),
  u = t(153124),
  d = t(838949),
  m = t(361207),
  x = t(63063),
  p = t(792125),
  h = t(981631),
  N = t(689938),
  j = t(562910);
let f = l.Avatar;
null == f && (f = () => null);
let v = e => {
    let {
      className: s,
      id: t,
      children: a
    } = e;
    return (0, n.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: r()(j.title, s),
      id: t,
      children: a
    })
  },
  g = e => {
    let {
      className: s,
      children: t
    } = e;
    return (0, n.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: s,
      children: t
    })
  },
  T = e => {
    let {
      className: s,
      src: t
    } = e;
    return (0, n.jsx)("img", {
      alt: "",
      src: t,
      className: r()(j.image, s)
    })
  },
  b = e => {
    let {
      className: s,
      ...t
    } = e, a = t.look === l.Button.Looks.LINK;
    return (0, n.jsx)(l.Button, {
      size: a ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
      fullWidth: !a,
      className: r()(s, {
        [j.button]: !a,
        [j.linkButton]: a
      }),
      ...t
    })
  };
b.Looks = l.Button.Looks, b.Colors = l.Button.Colors, b.Sizes = l.Button.Sizes;
let I = e => {
    let {
      className: s,
      src: t,
      size: a
    } = e;
    return (0, n.jsx)(f, {
      src: t,
      size: a,
      className: r()(j.inviteLargeIcon, s),
      "aria-hidden": !0
    })
  },
  R = e => {
    let {
      guild: s,
      size: t,
      animate: a = !1,
      className: r
    } = e;
    return (0, n.jsx)(c.Z, {
      active: !0,
      guild: s,
      size: t,
      animate: a,
      className: r
    })
  };
R.Sizes = c.Z.Sizes;
let E = e => {
  let {
    className: s,
    channel: t,
    size: a
  } = e;
  return (0, n.jsx)(f, {
    src: (0, i.x)(t),
    size: a,
    className: r()(j.inviteIcon, s),
    "aria-hidden": !0
  })
};
E.Sizes = l.AvatarSizes;
let S = e => {
    let {
      label: s,
      error: t,
      placeholder: a,
      value: i,
      className: o,
      inputClassName: c,
      setRef: d,
      type: m = "text",
      onChange: x,
      autoComplete: p,
      autoFocus: h,
      maxLength: N,
      spellCheck: f,
      name: v,
      description: g,
      required: T,
      onFocus: b,
      onBlur: I
    } = e, R = (0, u.Dt)();
    return (0, n.jsxs)(l.FormItem, {
      title: s,
      error: t,
      className: o,
      required: T,
      tag: "label",
      htmlFor: R,
      children: [(0, n.jsx)(l.TextInput, {
        name: v,
        type: m,
        value: i,
        inputRef: d,
        placeholder: a,
        inputClassName: r()(c, {
          [j.inputError]: null != t
        }),
        "aria-label": s,
        onChange: x,
        autoComplete: p,
        autoFocus: h,
        maxLength: N,
        spellCheck: f,
        id: R,
        onFocus: b,
        onBlur: I
      }), null != g ? (0, n.jsx)(l.FormText, {
        type: l.FormText.Types.DESCRIPTION,
        className: j.description,
        children: g
      }) : null]
    })
  },
  A = e => {
    let {
      className: s,
      children: t
    } = e;
    return (0, n.jsx)("div", {
      className: r()(j.block, s),
      children: t
    })
  },
  C = e => {
    let {
      className: s,
      children: t,
      isProminent: a
    } = e;
    return (0, n.jsx)(l.Text, {
      variant: a ? "text-sm/normal" : "text-xs/normal",
      className: r()(j.subText, s),
      children: t
    })
  },
  B = e => {
    let {
      className: s
    } = e;
    return (0, n.jsx)(o.Z, {
      direction: o.Z.Direction.VERTICAL,
      align: o.Z.Align.CENTER,
      className: s,
      children: (0, n.jsx)(d.Z, {
        className: j.spinnerVideo
      })
    })
  },
  L = e => {
    let s, {
      online: t,
      total: a,
      className: i,
      flat: c,
      textClassName: u
    } = e;
    return null == a ? null : (null != t && t > 0 && (s = (0, n.jsxs)("div", {
      className: r()(j.pill, j.pillOnline, c && j.pillFlat),
      children: [(0, n.jsx)("i", {
        className: j.pillIconOnline
      }), (0, n.jsx)(l.Text, {
        tag: "span",
        className: r()(j.pillMessage, u),
        variant: "text-sm/normal",
        children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: t
        })
      })]
    })), (0, n.jsxs)(o.Z, {
      justify: o.Z.Justify.CENTER,
      className: i,
      children: [s, (0, n.jsxs)("div", {
        className: r()(j.pill, c && j.pillFlat),
        children: [(0, n.jsx)("i", {
          className: j.pillIconTotal
        }), (0, n.jsx)(l.Text, {
          tag: "span",
          className: r()(j.pillMessage, u),
          variant: "text-sm/normal",
          children: N.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
            count: a
          })
        })]
      })]
    }))
  },
  _ = e => {
    let {
      user: s
    } = e;
    return null == s ? null : (0, n.jsxs)("div", {
      className: j.joiningAs,
      children: [(0, n.jsx)(l.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "header-secondary",
        children: N.Z.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
      }), (0, n.jsx)(I, {
        className: j.joiningAsAvatar,
        src: s.getAvatarURL(void 0, 24),
        size: l.AvatarSizes.SIZE_24,
        "aria-label": s.username
      }), (0, n.jsx)(l.Text, {
        className: j.joiningAsUsername,
        tag: "span",
        variant: "text-md/semibold",
        color: "header-primary",
        children: s.username
      })]
    })
  },
  M = e => {
    let {
      className: s
    } = e;
    return (0, n.jsxs)(A, {
      className: s,
      children: [(0, n.jsx)(b, {
        onClick: () => window.open((0, m.t3)()),
        children: N.Z.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
          platform: (0, m.DW)()
        })
      }), (0, n.jsx)(C, {
        className: j.downloadButtonSubtext,
        children: N.Z.Messages.INCOMPATIBLE_BROWSER.format({
          supportedBrowserURL: x.Z.getArticleURL(h.BhN.SUPPORTED_BROWSERS)
        })
      })]
    })
  };
s.ZP = e => {
  let {
    className: s,
    contentClassName: t,
    tag: a = "section",
    onSubmit: l,
    children: i,
    expanded: o = !1,
    theme: c = h.BRd.DARK,
    style: u
  } = e;
  return (0, n.jsxs)(a, {
    "data-theme": c,
    "data-disable-adaptive-theme": !0,
    onSubmit: l,
    style: u,
    className: r()(o ? j.authBoxExpanded : j.authBox, (0, p.Q)(c), s),
    children: [(0, n.jsx)("div", {
      className: j.discordLogo
    }), (0, n.jsx)("div", {
      className: r()(j.centeringWrapper, t),
      children: i
    })]
  })
}