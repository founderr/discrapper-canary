"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("753809"),
  o = n("77078"),
  u = n("545158"),
  d = n("368639"),
  c = n("37785"),
  f = n("62843"),
  p = n("837899"),
  m = n("425190"),
  h = n("701909"),
  E = n("49111"),
  g = n("782340"),
  S = n("474963"),
  C = n("632215");

function T(e) {
  let {
    className: t,
    lineClamp: n = 6,
    isExpanded: a = !1
  } = e, [T, v] = i.useState(a), I = i.useMemo(() => (0, d.parseBioReact)(g.default.Messages.MORE_INFO_CLYDE_LEGAL), []);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Collapsible, {
      isExpanded: T,
      collapsibleContent: (0, l.jsx)("div", {
        className: s(t, C.markup),
        children: (0, l.jsx)(o.Text, {
          variant: "text-sm/normal",
          lineClamp: n,
          children: (0, l.jsx)(f.MessagesInteractionContext.Provider, {
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
        return (0, l.jsx)(o.Clickable, {
          onClick: e => {
            v(!T), t(e)
          },
          children: (0, l.jsxs)("div", {
            className: S.header,
            children: [(0, l.jsx)(o.Heading, {
              variant: "eyebrow",
              className: S.userInfoSectionHeader,
              children: g.default.Messages.MORE_INFO
            }), T ? (0, l.jsx)(m.default, {
              className: S.arrow
            }) : (0, l.jsx)(p.default, {
              className: S.arrow
            })]
          })
        })
      }
    }), (0, l.jsxs)(o.Text, {
      className: S.helpCenterCta,
      variant: "text-sm/medium",
      children: [(0, l.jsx)(r.LinkIcon, {
        color: "var(--text-link)",
        className: S.linkIcon
      }), (0, l.jsx)(c.default, {
        onClick: () => (0, u.default)(h.default.getArticleURL(E.HelpdeskArticles.CLYDE_AI), !0),
        children: g.default.Messages.MORE_INFO_HELP_CENTER
      })]
    })]
  })
}