"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("753809"),
  o = l("77078"),
  u = l("545158"),
  d = l("368639"),
  c = l("37785"),
  f = l("62843"),
  m = l("837899"),
  p = l("425190"),
  h = l("701909"),
  T = l("49111"),
  E = l("782340"),
  S = l("474963"),
  _ = l("632215");

function g(e) {
  let {
    className: t,
    lineClamp: l = 6,
    isExpanded: s = !1
  } = e, [g, A] = a.useState(s), I = a.useMemo(() => (0, d.parseBioReact)(E.default.Messages.MORE_INFO_CLYDE_LEGAL), []);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.Collapsible, {
      isExpanded: g,
      collapsibleContent: (0, n.jsx)("div", {
        className: i(t, _.markup),
        children: (0, n.jsx)(o.Text, {
          variant: "text-sm/normal",
          lineClamp: l,
          children: (0, n.jsx)(f.MessagesInteractionContext.Provider, {
            value: {
              disableAnimations: !0,
              disableInteractions: !1
            },
            children: I
          })
        })
      }),
      className: S.collapseable,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, n.jsx)(o.Clickable, {
          onClick: e => {
            A(!g), t(e)
          },
          children: (0, n.jsxs)("div", {
            className: S.header,
            children: [(0, n.jsx)(o.Heading, {
              variant: "eyebrow",
              className: S.userInfoSectionHeader,
              children: E.default.Messages.MORE_INFO
            }), g ? (0, n.jsx)(p.default, {
              className: S.arrow
            }) : (0, n.jsx)(m.default, {
              className: S.arrow
            })]
          })
        })
      }
    }), (0, n.jsxs)(o.Text, {
      className: S.helpCenterCta,
      variant: "text-sm/medium",
      children: [(0, n.jsx)(r.LinkIcon, {
        color: "var(--text-link)",
        className: S.linkIcon
      }), (0, n.jsx)(c.default, {
        onClick: () => (0, u.default)(h.default.getArticleURL(T.HelpdeskArticles.CLYDE_AI), !0),
        children: E.default.Messages.MORE_INFO_HELP_CENTER
      })]
    })]
  })
}