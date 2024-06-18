"use strict";
n.d(t, {
  Z: function() {
    return g
  }
});
var s = n(735250),
  l = n(470079),
  a = n(481060),
  r = n(665906),
  i = n(499033),
  o = n(585483),
  c = n(456269),
  d = n(228392),
  u = n(981631),
  m = n(689938),
  h = n(737472);

function g(e) {
  let {
    channelName: t,
    guildId: g,
    tagFilter: x,
    channel: _
  } = e, E = (0, c.r_)(_), f = (0, r.cD)(_), C = _.isMediaChannel(), T = l.useCallback(() => {
    (0, d.qz)(), (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("18417")]).then(n.bind(n, 740696));
      return t => (0, s.jsx)(e, {
        ...t,
        guildId: g
      })
    })
  }, [g]), N = x.size > 0, I = f || E, S = !N && E && !C, p = l.useCallback(() => S ? T() : f ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)(), [T, S, f]);
  return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsxs)("div", {
      className: h.iconContainer,
      children: [(0, s.jsx)("div", {
        className: h.icon,
        children: (0, s.jsx)(a.ChatIcon, {
          size: "custom",
          color: "currentColor",
          width: 30,
          height: 30
        })
      }), (0, s.jsx)(i.Z, {
        className: h.stars
      })]
    }), (0, s.jsx)(a.Heading, {
      className: h.header,
      variant: "heading-md/semibold",
      children: N ? m.Z.Messages.FORUM_NO_POST_WITH_TAG_TITLE.format({
        numTags: x.size
      }) : m.Z.Messages.FORUM_EMPTY_STATE_TITLE
    }), (0, s.jsx)(a.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: N ? m.Z.Messages.FORUM_NO_POST_WITH_TAG_DESCRIPTION.format({
        numTags: x.size
      }) : m.Z.Messages.FORUM_EMPTY_STATE_DESCRIPTION.format({
        channelName: t
      })
    }), I && (0, s.jsxs)(a.Button, {
      look: a.Button.Looks.BLANK,
      size: a.Button.Sizes.MIN,
      color: a.Button.Colors.GREEN,
      onClick: p,
      className: h.cta,
      innerClassName: h.button,
      children: [S ? m.Z.Messages.FORUM_EMPTY_STATE_CTA : m.Z.Messages.FORUM_EMPTY_STATE_CREATE_POST_CTA, (0, s.jsx)(a.ChevronSmallRightIcon, {
        size: "custom",
        color: "currentColor",
        width: 12
      })]
    })]
  })
}