"use strict";
a.r(t), a.d(t, {
  default: function() {
    return V
  }
}), a("47120"), a("653041"), a("411104");
var l = a("735250"),
  s = a("470079"),
  n = a("120356"),
  r = a.n(n),
  o = a("442837"),
  i = a("481060"),
  d = a("129861"),
  u = a("700582"),
  c = a("410030"),
  m = a("566006"),
  f = a("222677"),
  h = a("592125"),
  x = a("594174"),
  S = a("514342"),
  v = a("768581"),
  _ = a("176354"),
  p = a("5192"),
  g = a("91047"),
  j = a("79390"),
  T = a("918088"),
  E = a("22864"),
  M = a("981631"),
  N = a("689938"),
  L = a("742479"),
  O = a("144452");
let C = m.ReactionTypes.VOTE;

function R() {
  let e = (0, c.default)();
  return (0, l.jsxs)(i.EmptyState, {
    theme: e,
    children: [(0, l.jsx)(i.EmptyStateImage, {
      darkSrc: O,
      lightSrc: O,
      width: 106,
      height: 100,
      style: {
        marginBottom: 10
      }
    }), (0, l.jsx)(i.EmptyStateText, {
      note: N.default.Messages.POLL_VOTES_NO_RESULTS_SUBTITLE,
      noteClassName: L.emptyText,
      className: L.emptyTitle,
      children: N.default.Messages.POLL_VOTES_NO_RESULTS_TITLE
    })]
  })
}

function A(e) {
  var t;
  let {
    emoji: a,
    emojiSize: s,
    imageClassNames: n,
    textClassNames: r
  } = e, o = null == a.id ? _.default.getURL(a.name) : v.default.getEmojiURL({
    id: a.id,
    animated: null !== (t = a.animated) && void 0 !== t && t,
    size: s
  });
  return null != o && "" !== o ? (0, l.jsx)("img", {
    className: n,
    src: o,
    alt: a.name
  }) : (0, l.jsx)("span", {
    className: r,
    children: a.name
  })
}

function I(e) {
  let {
    poll: t,
    reactionVoteCounts: a,
    selectedAnswerId: s,
    onSelectAnswer: n
  } = e;
  return (0, l.jsx)(i.TabBar, {
    look: "custom",
    orientation: "vertical",
    "aria-label": N.default.Messages.POLL_ANSWER_VOTES_MODAL_TAB_GROUP_LABEL,
    selectedItem: s,
    onItemSelect: n,
    children: t.answers.map(e => {
      var t;
      let n = String(e.answer_id),
        o = null !== (t = a[n]) && void 0 !== t ? t : 0,
        {
          emoji: d,
          text: u
        } = e.poll_media,
        c = N.default.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
          numVotes: o,
          option: u
        }),
        m = s === n;
      return (0, l.jsxs)(i.TabBar.Item, {
        id: n,
        className: r()({
          [L.voteDefault]: !m,
          [L.voteSelected]: m
        }),
        "aria-label": c,
        selectedItem: s,
        children: [null != d ? (0, l.jsx)(A, {
          emoji: d,
          emojiSize: 16,
          imageClassNames: L.emoji,
          textClassNames: r()(L.emoji, L.emojiText),
          "aria-hidden": !0
        }) : null, (0, l.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          lineClamp: 1,
          children: (0, l.jsx)(S.default, {
            position: "left",
            "aria-hidden": !0,
            children: u
          })
        }), (0, l.jsxs)(i.Text, {
          variant: "text-sm/semibold",
          color: "text-secondary",
          className: L.voteCount,
          children: ["(", o.toLocaleString(), ")"]
        })]
      }, n)
    })
  })
}

function b(e) {
  let {
    user: t,
    channel: a
  } = e, s = (0, o.useStateFromStores)([x.default], () => x.default.getUser(t.id), [t]), n = p.default.useName(a.guild_id, a.id, t);
  return (0, l.jsxs)("div", {
    className: L.voterDefault,
    onContextMenu: e => (0, g.openUserContextMenu)(e, t, a),
    children: [(0, l.jsx)("div", {
      className: L.voterAvatarContainer,
      children: (0, l.jsx)(u.default, {
        user: null != s ? s : t,
        size: i.AvatarSizes.SIZE_24,
        "aria-hidden": !0
      })
    }), (0, l.jsxs)(i.Text, {
      tag: "span",
      variant: "text-md/normal",
      className: L.name,
      "aria-label": n,
      children: [(0, l.jsx)("span", {
        className: t.isPomelo() ? "" : L.nickname,
        children: n
      }), (0, l.jsx)(d.default, {
        user: t,
        className: L.tagFaded,
        usernameClass: L.username,
        discriminatorClass: L.discriminator,
        forceUsername: !0
      })]
    })]
  })
}

function U(e) {
  let {
    message: t,
    reaction: a,
    channel: n
  } = e, {
    reactors: r,
    hasMore: o
  } = (0, E.default)({
    channelId: n.id,
    messageId: t.id,
    reaction: a
  }), d = s.useRef(null), u = s.useRef(null), [c, m] = s.useState(!1), h = s.useCallback(async () => {
    let e = u.current;
    m(!0);
    let l = await f.getReactors({
      channelId: n.id,
      messageId: t.id,
      emoji: a.emoji,
      limit: M.DEFAULT_NUM_REACTION_USERS,
      after: e,
      type: C
    });
    u.current = l[l.length - 1].id, m(!1)
  }, [n.id, t.id, a.emoji]);
  s.useEffect(() => {
    h()
  }, []);
  let x = s.useCallback(() => {
      let {
        current: e
      } = d;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 40 && o && !c && h()
    }, [d, o, c, h]),
    S = s.useCallback((e, t) => {
      if (1 === e) return 0 === t ? 40 : 0;
      if (0 === e) {
        if (0 === t && 0 === r.length) return 440;
        if (null != r[t]) return 40
      }
      return 0
    }, [r]),
    v = s.useCallback(e => {
      let {
        section: t,
        row: a
      } = e, s = r[a];
      if (1 === t) return 0 === a ? (0, l.jsx)(i.Spinner, {
        className: L.spinnerMore
      }, "hasMore") : null;
      return 0 === r.length && c ? (0, l.jsx)(i.Spinner, {
        className: L.spinner
      }, "loadingMore") : null != s && (0, l.jsx)(b, {
        channel: n,
        user: s
      }, s.id)
    }, [n, c, r]),
    _ = s.useMemo(() => {
      let e = [];
      return 0 === r.length && c ? e.push(0) : (e.push(r.length), o && e.push(1)), e
    }, [o, c, r.length]);
  return (0, l.jsx)("div", {
    className: L.votersListContainer,
    children: (0, l.jsx)(i.List, {
      className: L.voters,
      fade: !0,
      ref: d,
      sections: _,
      sectionHeight: 0,
      rowHeight: S,
      renderRow: v,
      onScroll: o ? x : void 0
    })
  })
}

function V(e) {
  var t;
  let {
    message: a,
    initialAnswerId: n,
    onClose: r,
    transitionState: d
  } = e, u = (0, o.useStateFromStores)([h.default], () => h.default.getChannel(a.getChannelId())), [c, m] = s.useState(n), f = s.useMemo(() => {
    if (null != a.reactions) return (0, T.reactionForId)(a.reactions, c)
  }, [a.reactions, c]), x = s.useMemo(() => (0, j.getTotalVotes)(a.reactions), [a.reactions]), S = s.useMemo(() => (function(e) {
    let t = {};
    for (let s of e) {
      var a, l;
      let e = null !== (l = null === (a = s.count_details) || void 0 === a ? void 0 : a.vote) && void 0 !== l ? l : 0,
        n = s.emoji.id;
      null != n && (t[n] = e)
    }
    return t
  })(a.reactions), [a.reactions]), v = S[c], _ = s.useMemo(() => {
    var e;
    let t = {};
    return null === (e = a.poll) || void 0 === e || e.answers.forEach(e => {
      var a;
      (null == e ? void 0 : e.answer_id) != null && (null === (a = e.poll_media) || void 0 === a ? void 0 : a.text) != null && (t[e.answer_id] = e.poll_media.text)
    }), t
  }, [null === (t = a.poll) || void 0 === t ? void 0 : t.answers]), p = N.default.Messages.POLL_ANSWER_VOTES_MODAL_VOTE_TAB.format({
    numVotes: v,
    option: _[c]
  });
  if (null == u) throw Error("PollVotesModal.render: Message does not have a channelId");
  if (null == a.poll) throw Error("PollVotesModal.render: Message does not have a poll");
  return (0, l.jsxs)(i.ModalRoot, {
    "aria-label": N.default.Messages.POLL_ANSWER_VOTES_MODAL_TITLE,
    transitionState: d,
    size: i.ModalSize.MEDIUM,
    children: [(0, l.jsxs)(i.ModalHeader, {
      className: L.header,
      children: [(0, l.jsxs)("div", {
        children: [(0, l.jsx)(i.Text, {
          color: "header-primary",
          variant: "text-md/semibold",
          className: L.question,
          children: a.poll.question.text
        }), (0, l.jsx)(i.Text, {
          variant: "text-md/medium",
          color: "text-normal",
          children: N.default.Messages.POLL_VOTES_COUNT.format({
            count: x.toLocaleString()
          })
        })]
      }), (0, l.jsx)(i.ModalCloseButton, {
        onClick: r,
        className: L.close
      })]
    }), (0, l.jsxs)(i.ModalContent, {
      className: L.content,
      children: [(0, l.jsx)(i.Scroller, {
        className: L.scroller,
        fade: !0,
        children: (0, l.jsx)(I, {
          poll: a.poll,
          selectedAnswerId: c,
          onSelectAnswer: m,
          reactionVoteCounts: S
        })
      }), (0, l.jsx)(i.TabBar.Panel, {
        id: c,
        "aria-label": p,
        className: L.panel,
        children: null != f && v > 0 ? (0, l.jsx)(U, {
          message: a,
          reaction: f,
          channel: u
        }) : (0, l.jsx)(R, {})
      })]
    })]
  })
}