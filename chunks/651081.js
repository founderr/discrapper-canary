l.r(t), l.d(t, {
  default: function() {
    return A
  }
}), l(47120), l(653041), l(411104);
var a = l(735250),
  s = l(470079),
  n = l(120356),
  r = l.n(n),
  i = l(442837),
  o = l(481060),
  d = l(129861),
  c = l(700582),
  u = l(410030),
  m = l(566006),
  h = l(222677),
  x = l(592125),
  v = l(594174),
  f = l(514342),
  j = l(768581),
  p = l(176354),
  g = l(5192),
  _ = l(91047),
  S = l(79390),
  T = l(918088),
  L = l(22864),
  M = l(981631),
  E = l(689938),
  N = l(240270),
  O = l(144452);
let C = m.O.VOTE;

function Z() {
  let e = (0, u.ZP)();
  return (0, a.jsxs)(o.EmptyState, {
    theme: e,
    children: [(0, a.jsx)(o.EmptyStateImage, {
      darkSrc: O,
      lightSrc: O,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, a.jsx)(o.EmptyStateText, {
      note: E.Z.Messages.POLL_VOTES_NO_RESULTS_SUBTITLE,
      noteClassName: N.emptyText,
      className: N.emptyTitle,
      children: E.Z.Messages.POLL_VOTES_NO_RESULTS_TITLE
    })]
  })
}

function b(e) {
  var t;
  let {
    emoji: l,
    emojiSize: s,
    imageClassNames: n,
    textClassNames: r
  } = e, i = null == l.id ? p.ZP.getURL(l.name) : j.ZP.getEmojiURL({
    id: l.id,
    animated: null !== (t = l.animated) && void 0 !== t && t,
    size: s
  });
  return null != i && "" !== i ? (0, a.jsx)("img", {
    className: n,
    src: i,
    alt: l.name
  }) : (0, a.jsx)("span", {
    className: r,
    children: l.name
  })
}

function I(e) {
  let {
    poll: t,
    reactionVoteCounts: l,
    selectedAnswerId: s,
    onSelectAnswer: n
  } = e;
  return (0, a.jsx)(o.TabBar, {
    look: "custom",
    orientation: "vertical",
    "aria-label": E.Z.Messages.POLL_ANSWER_VOTES_MODAL_TAB_GROUP_LABEL,
    selectedItem: s,
    onItemSelect: n,
    children: t.answers.map(e => {
      var t;
      let n = String(e.answer_id),
        i = null !== (t = l[n]) && void 0 !== t ? t : 0,
        {
          emoji: d,
          text: c
        } = e.poll_media,
        u = E.Z.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
          numVotes: i,
          option: c
        }),
        m = s === n;
      return (0, a.jsxs)(o.TabBar.Item, {
        id: n,
        className: r()({
          [N.voteDefault]: !m,
          [N.voteSelected]: m
        }),
        "aria-label": u,
        selectedItem: s,
        children: [null != d ? (0, a.jsx)(b, {
          emoji: d,
          emojiSize: 16,
          imageClassNames: N.emoji,
          textClassNames: r()(N.emoji, N.emojiText),
          "aria-hidden": !0
        }) : null, (0, a.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          lineClamp: 1,
          children: (0, a.jsx)(f.Z, {
            position: "left",
            "aria-hidden": !0,
            children: c
          })
        }), (0, a.jsxs)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          className: N.voteCount,
          children: ["(", i.toLocaleString(), ")"]
        })]
      }, n)
    })
  })
}

function P(e) {
  let {
    user: t,
    channel: l
  } = e, s = (0, i.e7)([v.default], () => v.default.getUser(t.id), [t]), n = g.ZP.useName(l.guild_id, l.id, t);
  return (0, a.jsxs)("div", {
    className: N.voterDefault,
    onContextMenu: e => (0, _.Pv)(e, t, l),
    children: [(0, a.jsx)("div", {
      className: N.voterAvatarContainer,
      children: (0, a.jsx)(c.Z, {
        user: null != s ? s : t,
        size: o.AvatarSizes.SIZE_24,
        "aria-hidden": !0
      })
    }), (0, a.jsxs)(o.Text, {
      tag: "span",
      variant: "text-md/normal",
      className: N.name,
      "aria-label": n,
      children: [(0, a.jsx)("span", {
        className: t.isPomelo() ? "" : N.nickname,
        children: n
      }), (0, a.jsx)(d.Z, {
        user: t,
        className: N.tagFaded,
        usernameClass: N.username,
        discriminatorClass: N.discriminator,
        forceUsername: !0
      })]
    })]
  })
}

function w(e) {
  let {
    message: t,
    reaction: l,
    channel: n
  } = e, {
    reactors: r,
    hasMore: i
  } = (0, L.Z)({
    channelId: n.id,
    messageId: t.id,
    reaction: l
  }), d = s.useRef(null), c = s.useRef(null), [u, m] = s.useState(!1), x = s.useCallback(async () => {
    let e = c.current;
    m(!0);
    let a = await h.U0({
      channelId: n.id,
      messageId: t.id,
      emoji: l.emoji,
      limit: M.pTL,
      after: e,
      type: C
    });
    c.current = a[a.length - 1].id, m(!1)
  }, [n.id, t.id, l.emoji]);
  s.useEffect(() => {
    x()
  }, []);
  let v = s.useCallback(() => {
      let {
        current: e
      } = d;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 40 && i && !u && x()
    }, [d, i, u, x]),
    f = s.useCallback((e, t) => {
      if (1 === e) return 0 === t ? 40 : 0;
      if (0 === e) {
        if (0 === t && 0 === r.length) return 440;
        if (null != r[t]) return 40
      }
      return 0
    }, [r]),
    j = s.useCallback(e => {
      let {
        section: t,
        row: l
      } = e, s = r[l];
      if (1 === t) return 0 === l ? (0, a.jsx)(o.Spinner, {
        className: N.spinnerMore
      }, "hasMore") : null;
      return 0 === r.length && u ? (0, a.jsx)(o.Spinner, {
        className: N.spinner
      }, "loadingMore") : null != s && (0, a.jsx)(P, {
        channel: n,
        user: s
      }, s.id)
    }, [n, u, r]),
    p = s.useMemo(() => {
      let e = [];
      return 0 === r.length && u ? e.push(0) : (e.push(r.length), i && e.push(1)), e
    }, [i, u, r.length]);
  return (0, a.jsx)("div", {
    className: N.votersListContainer,
    children: (0, a.jsx)(o.List, {
      className: N.voters,
      fade: !0,
      ref: d,
      sections: p,
      sectionHeight: 0,
      rowHeight: f,
      renderRow: j,
      onScroll: i ? v : void 0
    })
  })
}

function A(e) {
  var t;
  let {
    message: l,
    initialAnswerId: n,
    onClose: r,
    transitionState: d
  } = e, c = (0, i.e7)([x.Z], () => x.Z.getChannel(l.getChannelId())), [u, m] = s.useState(n), h = s.useMemo(() => {
    if (null != l.reactions) return (0, T.ef)(l.reactions, u)
  }, [l.reactions, u]), v = s.useMemo(() => (0, S.cZ)(l.reactions), [l.reactions]), f = s.useMemo(() => (function(e) {
    let t = {};
    for (let s of e) {
      var l, a;
      let e = null !== (a = null === (l = s.count_details) || void 0 === l ? void 0 : l.vote) && void 0 !== a ? a : 0,
        n = s.emoji.id;
      null != n && (t[n] = e)
    }
    return t
  })(l.reactions), [l.reactions]), j = f[u], p = s.useMemo(() => {
    var e;
    let t = {};
    return null === (e = l.poll) || void 0 === e || e.answers.forEach(e => {
      var l;
      (null == e ? void 0 : e.answer_id) != null && (null === (l = e.poll_media) || void 0 === l ? void 0 : l.text) != null && (t[e.answer_id] = e.poll_media.text)
    }), t
  }, [null === (t = l.poll) || void 0 === t ? void 0 : t.answers]), g = E.Z.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
    numVotes: j,
    option: p[u]
  });
  if (null == c) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == l.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, a.jsxs)(o.ModalRoot, {
    "aria-label": E.Z.Messages.POLL_ANSWER_VOTES_MODAL_TITLE,
    transitionState: d,
    size: o.ModalSize.MEDIUM,
    children: [(0, a.jsxs)(o.ModalHeader, {
      className: N.header,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(o.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: N.question,
          children: l.poll.question.text
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "text-normal",
          children: E.Z.Messages.POLL_VOTES_COUNT.format({
            count: v.toLocaleString()
          })
        })]
      }), (0, a.jsx)(o.ModalCloseButton, {
        onClick: r,
        className: N.close
      })]
    }), (0, a.jsxs)(o.ModalContent, {
      className: N.content,
      children: [(0, a.jsx)(o.Scroller, {
        className: N.scroller,
        fade: !0,
        children: (0, a.jsx)(I, {
          poll: l.poll,
          selectedAnswerId: u,
          onSelectAnswer: m,
          reactionVoteCounts: f
        })
      }), (0, a.jsx)(o.TabBar.Panel, {
        id: u,
        "aria-label": g,
        className: N.panel,
        children: null != h && j > 0 ? (0, a.jsx)(w, {
          message: l,
          reaction: h,
          channel: c
        }) : (0, a.jsx)(Z, {})
      })]
    })]
  })
}