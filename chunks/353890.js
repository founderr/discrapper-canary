"use strict";
t.d(s, {
  Z: function() {
    return m
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(442837),
  r = t(481060),
  o = t(471445),
  c = t(977258),
  d = t(637853),
  u = t(816436),
  E = t(259580),
  _ = t(889369),
  I = t(838324),
  T = t(689938),
  N = t(513477);

function m(e) {
  let {
    guild: s,
    scrollToQuestions: t
  } = e, i = (0, a.e7)([_.Z], () => _.Z.editedDefaultChannelIds), l = (0, u.b)(s.id, i).filter(e => e.isCategory() || (0, c.s)(e.guild_id, e.id));
  return (0, n.jsxs)("div", {
    className: N.container,
    children: [(0, n.jsx)("div", {
      className: N.header,
      children: (0, n.jsx)(I.Z, {
        guildId: s.id,
        scrollToQuestions: t
      })
    }), (0, n.jsxs)("div", {
      className: N.channelList,
      children: [(0, n.jsx)(g, {}), 0 === l.length && (0, n.jsx)(S, {}), (0, n.jsx)(h, {
        channels: l
      })]
    })]
  })
}

function S() {
  return (0, n.jsxs)("div", {
    className: N.emptyState,
    children: [(0, n.jsx)("div", {
      className: N.emptyStateIcon,
      children: (0, n.jsx)(r.TextIcon, {
        size: "md",
        color: "currentColor"
      })
    }), (0, n.jsx)(r.Text, {
      className: N.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      children: T.Z.Messages.DEFAULT_CHANNELS_PREVIEW_EMPTY_STATE
    })]
  })
}

function h(e) {
  let {
    channels: s
  } = e;
  return (0, n.jsx)(n.Fragment, {
    children: s.map(e => e.isCategory() ? (0, n.jsx)(C, {
      label: e.name
    }, e.id) : (0, n.jsx)(x, {
      channel: e
    }, e.id))
  })
}

function g() {
  return (0, n.jsx)("div", {
    className: N.divider
  })
}

function C(e) {
  let {
    label: s
  } = e;
  return (0, n.jsxs)("div", {
    className: N.category,
    children: [(0, n.jsx)(E.Z, {
      className: N.caret,
      width: 12,
      height: 12,
      direction: E.Z.Directions.DOWN
    }), (0, n.jsx)(r.Text, {
      variant: "text-xs/semibold",
      color: "text-muted",
      lineClamp: 1,
      children: s
    })]
  })
}

function x(e) {
  var s;
  let {
    channel: t
  } = e, i = (0, d.iF)(t), a = null !== (s = (0, o.KS)(t)) && void 0 !== s ? s : r.TextIcon;
  return (0, n.jsxs)("div", {
    className: N.channel,
    children: [(0, n.jsx)(a, {
      className: N.channelIcon,
      size: "xs",
      color: "currentColor"
    }), (0, n.jsx)(r.Text, {
      className: N.channelName,
      variant: "text-md/normal",
      color: "text-muted",
      lineClamp: 1,
      children: t.name
    }), (0, n.jsx)("div", {
      className: l()({
        [N.chattableIndicator]: i
      })
    })]
  })
}