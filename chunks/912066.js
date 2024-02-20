"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("907002"),
  o = s("446674"),
  u = s("77078"),
  d = s("18054"),
  c = s("206230"),
  m = s("367376"),
  h = s("213523"),
  f = s("945330"),
  g = s("673078"),
  x = s("987772"),
  C = s("680986"),
  _ = s("578198"),
  S = s("49111"),
  T = s("782340"),
  p = s("268887"),
  E = s("919163"),
  N = n.memo(function(e) {
    let {
      channel: t,
      onChange: l
    } = e, N = (0, _.useForumPostComposerStoreApi)(), {
      guidelinesOpen: M
    } = (0, _.useForumPostComposerStore)(e => {
      let {
        guidelinesOpen: t
      } = e;
      return {
        guidelinesOpen: t
      }
    }), v = (0, C.useCanManageChannel)(t), [A, I] = n.useState(!1), j = n.useCallback(e => {
      if (null == e) return;
      let t = e.clientHeight >= 220;
      t !== A && I(t)
    }, [A]);
    n.useLayoutEffect(() => {
      setTimeout(l, 350)
    }, [M, l]);
    let R = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion),
      [O, F] = n.useState(!M),
      b = (0, i.useSpring)({
        opacity: M ? 1 : 0,
        maxHeight: M ? 500 : 0,
        config: {
          duration: 300
        },
        immediate: R,
        onRest: () => F(!M)
      }),
      L = null != t.topic && t.topic.length > 0;
    return L ? (0, a.jsx)(i.animated.div, {
      style: b,
      className: O ? p.hiddenVisually : void 0,
      children: (0, a.jsxs)("div", {
        className: p.container,
        children: [(0, a.jsxs)("div", {
          className: p.headerContainer,
          children: [(0, a.jsxs)(u.Heading, {
            variant: "heading-lg/semibold",
            className: p.guidelinesHeader,
            children: [(0, a.jsx)(h.default, {
              width: 20,
              height: 20
            }), T.default.Messages.FORUM_POST_GUIDELINES_TITLE, v && (0, a.jsx)(u.Clickable, {
              onClick: () => {
                d.default.open(t.id, void 0, S.ChannelSettingsSubsections.TOPIC)
              },
              tag: "span",
              className: p.clickable,
              children: (0, a.jsx)(x.default, {
                width: 16,
                height: 16
              })
            })]
          }), (0, a.jsx)(u.Clickable, {
            "aria-label": T.default.Messages.CLOSE,
            className: p.clickable,
            onClick: () => {
              N.getState().setGuidelinesOpen(!1)
            },
            children: (0, a.jsx)(f.default, {
              width: 16,
              height: 16
            })
          })]
        }), (0, a.jsxs)("div", {
          className: p.descriptionContainer,
          children: [(0, a.jsx)(u.Text, {
            selectable: !0,
            variant: "text-sm/normal",
            color: "header-secondary",
            style: {
              maxHeight: 220
            },
            className: r(p.guidelines, E.markup),
            children: (0, a.jsx)("div", {
              ref: j,
              children: m.default.parseForumPostGuidelines(t.topic, !0, {
                channelId: t.id,
                allowHeading: !0,
                allowList: !0
              })
            })
          }), A && (0, a.jsxs)("div", {
            className: p.showMore,
            children: [(0, a.jsx)("div", {
              className: p.gradient
            }), (0, a.jsx)("div", {
              className: p.linkContainer,
              children: (0, a.jsx)(u.Clickable, {
                className: p.showMoreLink,
                onClick: () => {
                  (0, u.openModalLazy)(async () => {
                    let {
                      default: e
                    } = await s.el("553415").then(s.bind(s, "553415"));
                    return s => (0, a.jsx)(e, {
                      ...s,
                      channel: t
                    })
                  })
                },
                children: (0, a.jsxs)(u.Text, {
                  variant: "text-sm/semibold",
                  color: "text-brand",
                  className: p.showMoreText,
                  children: [T.default.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, a.jsx)(g.default, {
                    className: p.showMoreIcon
                  })]
                })
              })
            })]
          })]
        })]
      })
    }) : null
  })