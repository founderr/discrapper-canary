"use strict";
s.r(t), s.d(t, {
  ActivityCount: function() {
    return L
  },
  AuthSpinner: function() {
    return y
  },
  Avatar: function() {
    return I
  },
  Block: function() {
    return E
  },
  Button: function() {
    return b
  },
  ChannelIcon: function() {
    return A
  },
  GuildIcon: function() {
    return S
  },
  Image: function() {
    return v
  },
  IncompatibleBrowser: function() {
    return _
  },
  Input: function() {
    return C
  },
  JoiningAs: function() {
    return B
  },
  SubText: function() {
    return R
  },
  SubTitle: function() {
    return g
  },
  Title: function() {
    return j
  }
}), s("536091");
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  r = s("481060"),
  i = s("43267"),
  o = s("285952"),
  c = s("346656"),
  u = s("153124"),
  d = s("838949"),
  m = s("361207"),
  p = s("63063"),
  x = s("792125"),
  f = s("981631"),
  h = s("689938"),
  N = s("266275");
let T = r.Avatar;
null == T && (T = () => null);
let j = e => {
    let {
      className: t,
      id: s,
      children: n
    } = e;
    return (0, a.jsx)(r.Heading, {
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: l()(N.title, t),
      id: s,
      children: n
    })
  },
  g = e => {
    let {
      className: t,
      children: s
    } = e;
    return (0, a.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: t,
      children: s
    })
  },
  v = e => {
    let {
      className: t,
      src: s
    } = e;
    return (0, a.jsx)("img", {
      alt: "",
      src: s,
      className: l()(N.image, t)
    })
  },
  b = e => {
    let {
      className: t,
      ...s
    } = e, n = s.look === r.Button.Looks.LINK;
    return (0, a.jsx)(r.Button, {
      size: n ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
      fullWidth: !n,
      className: l()(t, {
        [N.button]: !n,
        [N.linkButton]: n
      }),
      ...s
    })
  };
b.Looks = r.Button.Looks, b.Colors = r.Button.Colors, b.Sizes = r.Button.Sizes;
let I = e => {
    let {
      className: t,
      src: s,
      size: n
    } = e;
    return (0, a.jsx)(T, {
      src: s,
      size: n,
      className: l()(N.inviteLargeIcon, t),
      "aria-hidden": !0
    })
  },
  S = e => {
    let {
      guild: t,
      size: s,
      animate: n = !1,
      className: l
    } = e;
    return (0, a.jsx)(c.default, {
      active: !0,
      guild: t,
      size: s,
      animate: n,
      className: l
    })
  };
S.Sizes = c.default.Sizes;
let A = e => {
  let {
    className: t,
    channel: s,
    size: n
  } = e;
  return (0, a.jsx)(T, {
    src: (0, i.getChannelIconURL)(s),
    size: n,
    className: l()(N.inviteIcon, t),
    "aria-hidden": !0
  })
};
A.Sizes = r.AvatarSizes;
let C = e => {
    let {
      label: t,
      error: s,
      placeholder: n,
      value: i,
      className: o,
      inputClassName: c,
      setRef: d,
      type: m = "text",
      onChange: p,
      autoComplete: x,
      autoFocus: f,
      maxLength: h,
      spellCheck: T,
      name: j,
      description: g,
      required: v,
      onFocus: b,
      onBlur: I
    } = e, S = (0, u.useUID)();
    return (0, a.jsxs)(r.FormItem, {
      title: t,
      error: s,
      className: o,
      required: v,
      tag: "label",
      htmlFor: S,
      children: [(0, a.jsx)(r.TextInput, {
        name: j,
        type: m,
        value: i,
        inputRef: d,
        placeholder: n,
        inputClassName: l()(c, {
          [N.inputError]: null != s
        }),
        "aria-label": t,
        onChange: p,
        autoComplete: x,
        autoFocus: f,
        maxLength: h,
        spellCheck: T,
        id: S,
        onFocus: b,
        onBlur: I
      }), null != g ? (0, a.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: N.description,
        children: g
      }) : null]
    })
  },
  E = e => {
    let {
      className: t,
      children: s
    } = e;
    return (0, a.jsx)("div", {
      className: l()(N.block, t),
      children: s
    })
  },
  R = e => {
    let {
      className: t,
      children: s,
      isProminent: n
    } = e;
    return (0, a.jsx)(r.Text, {
      variant: n ? "text-sm/normal" : "text-xs/normal",
      className: l()(N.subText, t),
      children: s
    })
  },
  y = e => {
    let {
      className: t
    } = e;
    return (0, a.jsx)(o.default, {
      direction: o.default.Direction.VERTICAL,
      align: o.default.Align.CENTER,
      className: t,
      children: (0, a.jsx)(d.default, {
        className: N.spinnerVideo
      })
    })
  },
  L = e => {
    let t, {
      online: s,
      total: n,
      className: i,
      flat: c,
      textClassName: u
    } = e;
    return null == n ? null : (null != s && s > 0 && (t = (0, a.jsxs)("div", {
      className: l()(N.pill, N.pillOnline, c && N.pillFlat),
      children: [(0, a.jsx)("i", {
        className: N.pillIconOnline
      }), (0, a.jsx)(r.Text, {
        tag: "span",
        className: l()(N.pillMessage, u),
        variant: "text-sm/normal",
        children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
          membersOnline: s
        })
      })]
    })), (0, a.jsxs)(o.default, {
      justify: o.default.Justify.CENTER,
      className: i,
      children: [t, (0, a.jsxs)("div", {
        className: l()(N.pill, c && N.pillFlat),
        children: [(0, a.jsx)("i", {
          className: N.pillIconTotal
        }), (0, a.jsx)(r.Text, {
          tag: "span",
          className: l()(N.pillMessage, u),
          variant: "text-sm/normal",
          children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
            count: n
          })
        })]
      })]
    }))
  },
  B = e => {
    let {
      user: t
    } = e;
    return null == t ? null : (0, a.jsxs)("div", {
      className: N.joiningAs,
      children: [(0, a.jsx)(r.Text, {
        tag: "span",
        variant: "text-md/normal",
        color: "header-secondary",
        children: h.default.Messages.MULTI_ACCOUNT_SERVER_INVITE_JOINING_AS
      }), (0, a.jsx)(I, {
        className: N.joiningAsAvatar,
        src: t.getAvatarURL(void 0, 24),
        size: r.AvatarSizes.SIZE_24,
        "aria-label": t.username
      }), (0, a.jsx)(r.Text, {
        className: N.joiningAsUsername,
        tag: "span",
        variant: "text-md/semibold",
        color: "header-primary",
        children: t.username
      })]
    })
  },
  _ = e => {
    let {
      className: t
    } = e;
    return (0, a.jsxs)(E, {
      className: t,
      children: [(0, a.jsx)(b, {
        onClick: () => window.open((0, m.getCurrentPlatformDownloadURL)()),
        children: h.default.Messages.NUF_DOWNLOAD_APP_BUTTON_PLATFORM.format({
          platform: (0, m.getPlatformReadableName)()
        })
      }), (0, a.jsx)(R, {
        className: N.downloadButtonSubtext,
        children: h.default.Messages.INCOMPATIBLE_BROWSER.format({
          supportedBrowserURL: p.default.getArticleURL(f.HelpdeskArticles.SUPPORTED_BROWSERS)
        })
      })]
    })
  };
t.default = e => {
  let {
    className: t,
    contentClassName: s,
    tag: n = "section",
    onSubmit: r,
    children: i,
    expanded: o = !1,
    theme: c = f.ThemeTypes.DARK,
    style: u
  } = e;
  return (0, a.jsxs)(n, {
    "data-theme": c,
    onSubmit: r,
    style: u,
    className: l()(o ? N.authBoxExpanded : N.authBox, (0, x.getThemeClass)(c), t),
    children: [(0, a.jsx)("div", {
      className: N.discordLogo
    }), (0, a.jsx)("div", {
      className: l()(N.centeringWrapper, s),
      children: i
    })]
  })
}