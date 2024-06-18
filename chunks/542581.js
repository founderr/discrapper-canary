"use strict";
n(47120);
var s = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  i = n(920906),
  o = n(442837),
  c = n(481060),
  d = n(787014),
  u = n(607070),
  m = n(454585),
  h = n(456269),
  g = n(470623),
  x = n(981631),
  _ = n(689938),
  E = n(411900),
  f = n(946278);
t.Z = l.memo(function(e) {
  let {
    channel: t,
    onChange: a
  } = e, C = (0, g.AF)(), {
    guidelinesOpen: T
  } = (0, g.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }), N = (0, h.r_)(t), [I, S] = l.useState(!1), p = l.useCallback(e => {
    if (null == e) return;
    let t = e.clientHeight >= 220;
    t !== I && S(t)
  }, [I]);
  l.useLayoutEffect(() => {
    setTimeout(a, 350)
  }, [T, a]);
  let v = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
    [M, j] = l.useState(!T),
    A = (0, i.useSpring)({
      opacity: T ? 1 : 0,
      maxHeight: T ? 500 : 0,
      config: {
        duration: 300
      },
      immediate: v,
      onRest: () => j(!T)
    });
  return null != t.topic && t.topic.length > 0 ? (0, s.jsx)(i.animated.div, {
    style: A,
    className: M ? E.hiddenVisually : void 0,
    children: (0, s.jsxs)("div", {
      className: E.container,
      children: [(0, s.jsxs)("div", {
        className: E.headerContainer,
        children: [(0, s.jsxs)(c.Heading, {
          variant: "heading-lg/semibold",
          className: E.guidelinesHeader,
          children: [(0, s.jsx)(c.BookCheckIcon, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }), _.Z.Messages.FORUM_POST_GUIDELINES_TITLE, N && (0, s.jsx)(c.Clickable, {
            onClick: () => {
              d.ZP.open(t.id, void 0, x.ZfP.TOPIC)
            },
            tag: "span",
            className: E.clickable,
            children: (0, s.jsx)(c.PencilIcon, {
              size: "xs",
              color: "currentColor"
            })
          })]
        }), (0, s.jsx)(c.Clickable, {
          "aria-label": _.Z.Messages.CLOSE,
          className: E.clickable,
          onClick: () => {
            C.getState().setGuidelinesOpen(!1)
          },
          children: (0, s.jsx)(c.CloseSmallIcon, {
            size: "xs",
            color: "currentColor"
          })
        })]
      }), (0, s.jsxs)("div", {
        className: E.descriptionContainer,
        children: [(0, s.jsx)(c.Text, {
          selectable: !0,
          variant: "text-sm/normal",
          color: "header-secondary",
          style: {
            maxHeight: 220
          },
          className: r()(E.guidelines, f.markup),
          children: (0, s.jsx)("div", {
            ref: p,
            children: m.Z.parseForumPostGuidelines(t.topic, !0, {
              channelId: t.id,
              allowHeading: !0,
              allowList: !0
            })
          })
        }), I && (0, s.jsxs)("div", {
          className: E.showMore,
          children: [(0, s.jsx)("div", {
            className: E.gradient
          }), (0, s.jsx)("div", {
            className: E.linkContainer,
            children: (0, s.jsx)(c.Clickable, {
              className: E.showMoreLink,
              onClick: () => {
                (0, c.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("99387"), n.e("78712")]).then(n.bind(n, 223164));
                  return n => (0, s.jsx)(e, {
                    ...n,
                    channel: t
                  })
                })
              },
              children: (0, s.jsxs)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-brand",
                className: E.showMoreText,
                children: [_.Z.Messages.FORUM_CHANNEL_TOPIC_VIEW_ALL, (0, s.jsx)(c.MaximizeIcon, {
                  size: "xs",
                  color: "currentColor",
                  className: E.showMoreIcon
                })]
              })
            })
          })]
        })]
      })]
    })
  }) : null
})