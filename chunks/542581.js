"use strict";
a.r(t), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("120356"),
  r = a.n(l),
  i = a("920906"),
  o = a("442837"),
  u = a("481060"),
  d = a("787014"),
  c = a("607070"),
  m = a("454585"),
  h = a("814550"),
  f = a("465670"),
  g = a("928457"),
  x = a("185403"),
  C = a("456269"),
  _ = a("470623"),
  p = a("981631"),
  S = a("689938"),
  T = a("411900"),
  E = a("946278");
t.default = n.memo(function(e) {
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
  }), A = (0, C.useCanManageChannel)(t), [I, v] = n.useState(!1), j = n.useCallback(e => {
    if (null == e) return;
    let t = e.clientHeight >= 220;
    t !== I && v(t)
  }, [I]);
  n.useLayoutEffect(() => {
    setTimeout(l, 350)
  }, [M, l]);
  let O = (0, o.useStateFromStores)([c.default], () => c.default.useReducedMotion),
    [R, b] = n.useState(!M),
    F = (0, i.useSpring)({
      opacity: M ? 1 : 0,
      maxHeight: M ? 500 : 0,
      config: {
        duration: 300
      },
      immediate: O,
      onRest: () => b(!M)
    });
  return null != t.topic && t.topic.length > 0 ? (0, s.jsx)(i.animated.div, {
    style: F,
    className: R ? T.hiddenVisually : void 0,
    children: (0, s.jsxs)("div", {
      className: T.container,
      children: [(0, s.jsxs)("div", {
        className: T.headerContainer,
        children: [(0, s.jsxs)(u.Heading, {
          variant: "heading-lg/semibold",
          className: T.guidelinesHeader,
          children: [(0, s.jsx)(h.default, {
            width: 20,
            height: 20
          }), S.default.Messages.FORUM_POST_GUIDELINES_TITLE, A && (0, s.jsx)(u.Clickable, {
            onClick: () => {
              d.default.open(t.id, void 0, p.ChannelSettingsSubsections.TOPIC)
            },
            tag: "span",
            className: T.clickable,
            children: (0, s.jsx)(x.default, {
              width: 16,
              height: 16
            })
          })]
        }), (0, s.jsx)(u.Clickable, {
          "aria-label": S.default.Messages.CLOSE,
          className: T.clickable,
          onClick: () => {
            N.getState().setGuidelinesOpen(!1)
          },
          children: (0, s.jsx)(f.default, {
            width: 16,
            height: 16
          })
        })]
      }), (0, s.jsxs)("div", {
        className: T.descriptionContainer,
        children: [(0, s.jsx)(u.Text, {
          selectable: !0,
          variant: "text-sm/normal",
          color: "header-secondary",
          style: {
            maxHeight: 220
          },
          className: r()(T.guidelines, E.markup),
          children: (0, s.jsx)("div", {
            ref: j,
            children: m.default.parseForumPostGuidelines(t.topic, !0, {
              channelId: t.id,
              allowHeading: !0,
              allowList: !0
            })
          })
        }), I && (0, s.jsxs)("div", {
          className: T.showMore,
          children: [(0, s.jsx)("div", {
            className: T.gradient
          }), (0, s.jsx)("div", {
            className: T.linkContainer,
            children: (0, s.jsx)(u.Clickable, {
              className: T.showMoreLink,
              onClick: () => {
                (0, u.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([a.e("99387"), a.e("78712")]).then(a.bind(a, "223164"));
                  return a => (0, s.jsx)(e, {
                    ...a,
                    channel: t
                  })
                })
              },
              children: (0, s.jsxs)(u.Text, {
                variant: "text-sm/semibold",
                color: "text-brand",
                className: T.showMoreText,
                children: [S.default.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, s.jsx)(g.default, {
                  className: T.showMoreIcon
                })]
              })
            })
          })]
        })]
      })]
    })
  }) : null
})