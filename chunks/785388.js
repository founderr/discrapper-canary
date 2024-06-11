"use strict";
i.r(t), i.d(t, {
  default: function() {
    return ee
  }
}), i("47120"), i("653041"), i("177593"), i("411104");
var n = i("735250"),
  a = i("470079"),
  s = i("120356"),
  l = i.n(s),
  o = i("392711"),
  r = i.n(o),
  u = i("866442"),
  d = i("442837"),
  c = i("780384"),
  h = i("481060"),
  m = i("596454"),
  f = i("129861"),
  p = i("700582"),
  g = i("607070"),
  T = i("633302"),
  S = i("712057"),
  v = i("660189"),
  E = i("372900"),
  R = i("566006"),
  I = i("620652"),
  N = i("815605"),
  C = i("222677"),
  _ = i("995774"),
  x = i("665906"),
  O = i("210887"),
  j = i("314897"),
  A = i("592125"),
  M = i("271383"),
  b = i("542578"),
  y = i("375954"),
  L = i("496675"),
  P = i("699516"),
  U = i("594174"),
  w = i("285952"),
  F = i("465670"),
  D = i("768581"),
  B = i("176354"),
  k = i("5192"),
  H = i("709054"),
  V = i("91047"),
  G = i("981631"),
  z = i("689938"),
  W = i("916703"),
  K = i("611273");

function J(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e
}

function Y(e) {
  return null == e.id ? T.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}
let Z = e => {
  let {
    emoji: t,
    channelId: i,
    messageId: s
  } = e, [o, r] = a.useState(!0), [u, d] = a.useState([]), c = a.useMemo(() => {
    if (null == u || u.length < 1) return;
    let e = (0, N.buildEffect)(t, u[0], i, {
      emojiSize: I.BurstReactionSize.LARGE,
      messageId: s
    });
    return (0, n.jsx)(I.default, {
      className: W.__invalid_effect,
      effect: e,
      emojiSize: I.BurstReactionSize.LARGE,
      onComplete: () => r(!1)
    })
  }, [u, t, i, s]);
  return a.useEffect(() => {
    let e = !1;
    return r(!0), !async function() {
      let i = await (0, B.getEmojiColors)(t);
      Array.isArray(i) && i.length > 0 && !e && d(i)
    }(), () => {
      e = !0
    }
  }, [t]), (0, n.jsxs)("div", {
    className: W.burstEmojiSection,
    children: [c, (0, n.jsx)(m.default, {
      className: l()(W.burstEmoji, {
        [W.hideEmoji]: o
      }),
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated,
      size: "reaction"
    }), (0, n.jsx)(h.Text, {
      variant: "text-md/medium",
      children: Y(t)
    })]
  })
};
class X extends a.PureComponent {
  render() {
    let {
      emoji: e,
      count: t,
      isSelected: i,
      setSelected: a,
      reactionType: s,
      colors: o
    } = this.props, r = Y(e), d = function(e, t, i, a) {
      let s = null == e.id ? B.default.getURL(e.name) : D.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 24
      });
      return null != s && "" !== s ? (0, n.jsx)("img", {
        className: i,
        src: s,
        alt: e.name
      }) : (0, n.jsx)("span", {
        className: a,
        children: e.name
      })
    }(e, 24, W.emoji, l()(W.emoji, W.emojiText)), c = s === R.ReactionTypes.BURST, m = (c ? z.default.Messages.BURST_REACTION_REACTORS_A11Y : z.default.Messages.REACTION_REACTORS_A11Y).format({
      name: r,
      n: t
    }), f = {}, p = {};
    if (c) {
      let {
        backgroundColor: e = "",
        opacity: t = 1,
        accentColor: n = ""
      } = null != o ? o : {};
      if (p.color = n, i) {
        var g;
        f.background = null !== (g = (0, u.hex2rgb)(e, t)) && void 0 !== g ? g : ""
      }
    }
    return (0, n.jsx)(h.Tooltip, {
      position: "left",
      text: r,
      children: o => {
        let {
          onMouseEnter: r,
          onMouseLeave: u
        } = o;
        return (0, n.jsxs)(h.Clickable, {
          className: l()({
            [W.reactionDefault]: !i,
            [W.reactionSelected]: i
          }),
          "aria-label": m,
          onClick: () => a({
            emoji: e,
            reactionType: s
          }),
          onMouseEnter: r,
          onMouseLeave: u,
          style: f,
          children: [d, (0, n.jsx)(h.Text, {
            variant: "text-sm/bold",
            style: p,
            children: t
          })]
        })
      }
    })
  }
}

function q(e) {
  let {
    emoji: t,
    user: i,
    message: a,
    channel: s,
    guildId: l,
    reactionType: o,
    onRemoveReactor: r,
    disableManage: u = !1
  } = e, c = (0, d.useStateFromStores)([j.default], () => j.default.getId()), m = (0, d.useStateFromStores)([U.default], () => U.default.getUser(i.id), [i]), g = (0, x.useIsActiveChannelOrUnarchivableThread)(s), T = (0, d.useStateFromStores)([L.default], () => L.default.can(G.Permissions.MANAGE_MESSAGES, s) && g) || c === i.id, S = (0, d.useStateFromStores)([M.default, A.default, P.default], () => k.default.getName(l, s.id, i));
  return (0, n.jsxs)(w.default, {
    className: W.reactorDefault,
    onContextMenu: e => (0, V.openUserContextMenu)(e, i, s),
    align: w.default.Align.CENTER,
    children: [(0, n.jsx)(w.default.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: K.marginReset,
      children: (0, n.jsx)(p.default, {
        user: null != m ? m : i,
        size: h.AvatarSizes.SIZE_24
      })
    }), (0, n.jsx)(w.default.Child, {
      children: (0, n.jsxs)(h.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: W.name,
        children: [null != S && "" !== S && (0, n.jsx)("span", {
          className: i.isPomelo() ? "" : W.nickname,
          children: S
        }), (0, n.jsx)(f.default, {
          user: i,
          className: null != S && "" !== S ? W.tagFaded : null,
          usernameClass: W.username,
          discriminatorClass: W.discriminator,
          forceUsername: !0
        })]
      })
    }), !u && T && (0, n.jsx)(h.Clickable, {
      onClick: function() {
        C.removeReactionWithConfirmation({
          emoji: t,
          userId: i.id,
          channelId: s.id,
          messageId: a.id,
          reactionType: o,
          isMe: c === i.id
        }), null == r || r()
      },
      children: (0, n.jsx)(F.default, {
        width: 16,
        height: 16,
        className: W.remove
      })
    })]
  })
}
class Q extends a.PureComponent {
  componentDidMount() {
    this.loadMore()
  }
  componentDidUpdate(e) {
    (!r().isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) && this.setState({
      lastId: null,
      loadingMore: !1
    }, () => this.loadMore())
  }
  loadMore() {
    let {
      message: e,
      reaction: t,
      reactionType: i
    } = this.props, {
      lastId: n
    } = this.state;
    this.setState({
      loadingMore: !0
    }), C.getReactors({
      channelId: e.getChannelId(),
      messageId: e.id,
      emoji: t.emoji,
      limit: G.DEFAULT_NUM_REACTION_USERS,
      after: n,
      type: i
    }).then(e => {
      var t;
      return this.setState({
        loadingMore: !1,
        lastId: null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.id
      })
    })
  }
  renderSection() {
    return null
  }
  render() {
    let {
      hasMore: e,
      reactors: t,
      reaction: i,
      message: a,
      reactionType: s
    } = this.props, l = [];
    return 0 === t.length && this.state.loadingMore ? l.push(length) : (l.push(t.length), e && l.push(1)), (0, n.jsxs)("div", {
      className: W.reactorsContainer,
      children: [s === R.ReactionTypes.BURST && (0, n.jsx)(Z, {
        emoji: i.emoji,
        channelId: a.getChannelId(),
        messageId: a.id
      }), (0, n.jsx)(h.List, {
        className: W.reactors,
        fade: !0,
        ref: this.scrollerRef,
        sections: l,
        sectionHeight: 0,
        rowHeight: this.getRowHeight,
        renderRow: this.renderRow,
        renderSection: this.renderSection,
        onScroll: e ? this.handleScroll : void 0
      })]
    })
  }
  constructor(...e) {
    super(...e), J(this, "scrollerRef", a.createRef()), J(this, "state", {
      lastId: null,
      loadingMore: !1
    }), J(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }), J(this, "getRowHeight", (e, t) => {
      let {
        reactors: i
      } = this.props;
      if (1 === e) return 0 === t ? 44 : 0;
      if (0 === e) {
        if (0 === t && 0 === i.length) return 440;
        if (null != this.props.reactors[t]) return 44
      }
      return 0
    }), J(this, "renderRow", e => {
      let {
        section: t,
        row: i
      } = e, {
        message: a,
        guildId: s,
        channel: l,
        reaction: o,
        reactors: r,
        reactionType: u,
        disableManage: d
      } = this.props, c = r[i];
      if (1 === t) return 0 === i ? (0, n.jsx)(h.Spinner, {
        className: W.spinnerMore
      }, "hasMore") : null;
      return 0 === r.length && this.state.loadingMore ? (0, n.jsx)(h.Spinner, {
        className: W.spinner
      }, "loadingMore") : null != c && (0, n.jsx)(q, {
        message: a,
        emoji: o.emoji,
        guildId: s,
        channel: l,
        user: c,
        reaction: o,
        reactionType: u,
        disableManage: d
      }, c.id)
    })
  }
}
let $ = d.default.connectStores([b.default], e => {
  let {
    message: t,
    reaction: i,
    reactionType: n
  } = e, a = b.default.getReactions(t.getChannelId(), t.id, i.emoji, G.DEFAULT_NUM_REACTION_USERS, n);
  if (null == a) return {
    reactors: [],
    hasMore: !1
  };
  let s = Object.values(a),
    l = (n === R.ReactionTypes.BURST ? i.burst_count : i.count) > s.length;
  return {
    reactors: s,
    hasMore: l
  }
})(Q);

function ee(e) {
  var t;
  let {
    message: i,
    selectedReaction: s,
    disableManage: l = !1,
    disableTabs: o = !1,
    onClose: r,
    transitionState: u,
    "aria-label": m = z.default.Messages.REACTIONS
  } = e, f = (0, d.useStateFromStores)([A.default], () => A.default.getChannel(i.getChannelId())), p = null == f ? void 0 : f.getGuildId(), T = (0, d.useStateFromStores)([y.default, v.default], () => {
    var e, t;
    let n = null !== (t = y.default.getMessage(i.getChannelId(), i.id)) && void 0 !== t ? t : null === (e = v.default.getMessage(H.default.castMessageIdAsChannelId(i.id))) || void 0 === e ? void 0 : e.firstMessage;
    return null != n ? n.reactions : []
  }, [i]);
  let I = (t = T, a.useMemo(() => {
      let e = [];
      return t.forEach(t => {
        t.burst_count > 0 && e.push({
          ...t,
          count: 0
        }), t.count > 0 && e.push({
          ...t,
          burst_count: 0
        })
      }), e.sort((e, t) => {
        let i = e.burst_count > 0 ? e.burst_count : e.count;
        return (t.burst_count > 0 ? t.burst_count : t.count) - i
      }), e
    }, [t])),
    N = I[0],
    [C, x] = function(e, t, i) {
      let [n, s] = a.useState(null != e ? e : t);
      return a.useEffect(() => {
        null != n && null == i.find(e => {
          let t = null != e.me_vote ? R.ReactionTypes.VOTE : e.burst_count > 0 ? R.ReactionTypes.BURST : R.ReactionTypes.NORMAL;
          return (0, _.emojiEquals)(e.emoji, n.emoji) && t === n.reactionType
        }) && s(t)
      }, [n, s, i, t]), [n, s]
    }(s, null != N ? {
      emoji: N.emoji,
      reactionType: N.burst_count > 0 ? R.ReactionTypes.BURST : R.ReactionTypes.NORMAL
    } : null, T),
    j = a.useMemo(() => {
      var e;
      return null == C ? null : null !== (e = T.find(e => (0, _.emojiEquals)(e.emoji, C.emoji))) && void 0 !== e ? e : null
    }, [T, C]),
    M = (0, d.useStateFromStores)([g.default], () => g.default.saturation),
    b = (0, d.useStateFromStores)([O.default], () => (0, c.isThemeDark)(O.default.theme));
  if (a.useEffect(() => {
      (0 === T.length || null == C && null == j) && setImmediate(r)
    }, [r, T.length, j, C]), null == C || null == j) return (0, n.jsx)(h.Spinner, {});
  if (null == f) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, n.jsx)(E.default.Provider, {
    value: null != p ? p : void 0,
    children: (0, n.jsxs)(h.ModalRoot, {
      "aria-label": m,
      transitionState: u,
      size: h.ModalSize.DYNAMIC,
      className: W.container,
      children: [o ? null : (0, n.jsx)(h.Scroller, {
        className: W.scroller,
        fade: !0,
        children: I.map(e => {
          var t;
          let i = e.burst_count > 0;
          return (0, n.jsx)(X, {
            isSelected: et(C, e, i ? R.ReactionTypes.BURST : R.ReactionTypes.NORMAL),
            setSelected: x,
            reactionType: i ? R.ReactionTypes.BURST : R.ReactionTypes.NORMAL,
            emoji: e.emoji,
            count: i ? e.burst_count : e.count,
            colors: null != e.burst_colors ? (0, S.buildEmojiColorPalette)(e.burst_colors, M, b) : void 0
          }, "".concat(i ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
        })
      }), (0, n.jsx)($, {
        message: i,
        reaction: j,
        guildId: p,
        channel: f,
        reactionType: C.reactionType,
        disableManage: l
      })]
    })
  })
}
let et = (e, t, i) => r().isEqual(e.emoji, t.emoji) && e.reactionType === i