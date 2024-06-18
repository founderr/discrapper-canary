"use strict";
n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(239091),
  l = n(79712),
  u = n(91159),
  _ = n(496675),
  c = n(306680),
  d = n(446183),
  E = n(677281),
  I = n(880080),
  T = n(709054),
  h = n(765104),
  S = n(477291),
  f = n(478758),
  N = n(789707),
  A = n(981631),
  m = n(531578),
  O = n(561701);

function R(e) {
  let {
    summary: t,
    channel: c,
    members: N,
    guildId: R,
    unread: p,
    onClick: g
  } = e, [C, v] = r.useState(!1), L = (0, u.Ye)(T.default.extractTimestamp(t.startId)), D = (0, s.e7)([h.Z], () => h.Z.summaryFeedback(t)), M = (e, n) => {
    e.stopPropagation(), (0, S.Z)({
      summary: t,
      channel: c,
      rating: n
    })
  }, P = _.Z.can(A.Plq.MANAGE_MESSAGES, c);
  return (0, i.jsxs)(o.Clickable, {
    className: O.container,
    onClick: g,
    onContextMenu: e => {
      P && (0, a.jW)(e, async () => {
        let {
          default: e
        } = await n.e("12891").then(n.bind(n, 519620));
        return n => (0, i.jsx)(e, {
          ...n,
          summary: t
        })
      })
    },
    onMouseEnter: () => v(!0),
    onMouseLeave: () => v(!1),
    children: [(0, i.jsx)(I.Z, {
      hovered: C,
      unread: p,
      className: O.unreadPill
    }), (0, i.jsx)("div", {
      className: O.rowHeader,
      children: (0, i.jsxs)("div", {
        className: O.rowHeaderLeft,
        children: [(0, i.jsx)(o.Text, {
          className: O.timestamp,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: L
        }), (0, i.jsx)(l.Z, {
          height: 4,
          width: 4,
          "aria-hidden": "true",
          className: O.dot
        }), (0, i.jsx)(o.ChatIcon, {
          size: "xxs",
          color: "currentColor",
          className: O.icon
        }), (0, i.jsx)(o.Text, {
          className: O.count,
          color: "interactive-normal",
          variant: "text-xs/normal",
          children: t.count
        }), N.length > 0 && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(l.Z, {
            height: 4,
            width: 4,
            "aria-hidden": "true",
            className: O.dot
          }), (0, i.jsx)(f.Z, {
            partySize: {
              knownSize: N.length,
              totalSize: N.length
            },
            maxAvatarsShown: 3,
            members: N,
            guildId: R
          })]
        })]
      })
    }), C && !D && (0, i.jsxs)("div", {
      className: O.feedbackContainer,
      children: [(0, i.jsx)(o.Clickable, {
        onClick: e => M(e, m.aZ.GOOD),
        children: (0, i.jsx)(E.Z, {
          className: O.thumbIcon,
          width: 12,
          height: 12
        })
      }), (0, i.jsx)(o.Clickable, {
        onClick: e => M(e, m.aZ.BAD),
        children: (0, i.jsx)(d.Z, {
          className: O.thumbIcon,
          width: 12,
          height: 12
        })
      })]
    }), (0, i.jsx)(o.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      className: O.title,
      children: t.topic
    }), (0, i.jsx)(o.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: O.subtitle,
      children: t.summShort
    })]
  })
}

function p(e) {
  let {
    summaries: t,
    summariesMembers: n,
    channel: o,
    selectTopic: a,
    setOpen: l
  } = e, u = (0, s.e7)([c.ZP], () => c.ZP.getOldestUnreadMessageId(o.id)), _ = r.useCallback(e => {
    a(e), l(!1)
  }, [a, l]);
  return t.length < 1 ? (0, i.jsx)(N.Z, {}) : (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => {
      var r;
      let s = null !== (r = n[t]) && void 0 !== r ? r : [];
      return (0, i.jsx)(R, {
        summary: e,
        channel: o,
        members: s,
        guildId: o.guild_id,
        unread: null != u && T.default.compare(e.endId, u) > 0,
        onClick: () => _(t)
      }, t)
    })
  })
}