"use strict";
n.r(t), n.d(t, {
  default: function() {
    return et
  }
}), n("222007"), n("424973"), n("860677"), n("70102");
var l = n("37983"),
  a = n("884691"),
  r = n("414456"),
  i = n.n(r),
  o = n("627445"),
  s = n.n(o),
  u = n("917351"),
  c = n.n(u),
  d = n("509043"),
  f = n("446674"),
  h = n("819855"),
  m = n("77078"),
  g = n("430568"),
  R = n("145079"),
  E = n("87657"),
  S = n("206230"),
  p = n("867805"),
  A = n("584375"),
  T = n("430475"),
  N = n("390236"),
  j = n("185014"),
  I = n("875978"),
  v = n("512306"),
  M = n("941723"),
  _ = n("166257"),
  b = n("432173"),
  C = n("300322"),
  O = n("161778"),
  x = n("42203"),
  y = n("26989"),
  U = n("486996"),
  w = n("377253"),
  D = n("957255"),
  L = n("27618"),
  B = n("697218"),
  k = n("145131"),
  F = n("945330"),
  z = n("315102"),
  H = n("402671"),
  P = n("387111"),
  G = n("299039"),
  V = n("441823"),
  Y = n("49111"),
  J = n("782340"),
  X = n("726347"),
  q = n("890957");

function K(e) {
  return null == e.id ? p.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}
let W = e => {
  let {
    emoji: t,
    channelId: n,
    messageId: r
  } = e, [o, s] = a.useState(!0), [u, c] = a.useState([]), d = a.useMemo(() => {
    if (null == u || u.length < 1) return;
    let e = (0, M.buildEffect)(t, u[0], n, {
      emojiSize: v.BurstReactionSize.LARGE,
      messageId: r
    });
    return (0, l.jsx)(v.default, {
      className: X.effect,
      effect: e,
      emojiSize: v.BurstReactionSize.LARGE,
      onComplete: () => s(!1)
    })
  }, [u, t, n, r]);
  return a.useEffect(() => {
    let e = !1;
    return s(!0), !async function() {
      let n = await (0, H.getEmojiColors)(t);
      Array.isArray(n) && n.length > 0 && !e && c(n)
    }(), () => {
      e = !0
    }
  }, [t]), (0, l.jsxs)("div", {
    className: X.burstEmojiSection,
    children: [d, (0, l.jsx)(g.default, {
      className: i(X.burstEmoji, {
        [X.hideEmoji]: o
      }),
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated,
      size: "reaction"
    }), (0, l.jsx)(m.Text, {
      variant: "text-md/medium",
      children: K(t)
    })]
  })
};
class Z extends a.PureComponent {
  render() {
    let {
      emoji: e,
      count: t,
      isSelected: n,
      setSelected: a,
      reactionType: r,
      colors: o
    } = this.props, s = K(e), u = function(e, t, n, a) {
      let r = null == e.id ? H.default.getURL(e.name) : z.default.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 24
      });
      return null != r && "" !== r ? (0, l.jsx)("img", {
        className: n,
        src: r,
        alt: e.name
      }) : (0, l.jsx)("span", {
        className: a,
        children: e.name
      })
    }(e, 24, X.emoji, i(X.emoji, X.emojiText)), c = r === I.ReactionTypes.BURST, f = c ? J.default.Messages.BURST_REACTION_REACTORS_A11Y : J.default.Messages.REACTION_REACTORS_A11Y, h = f.format({
      name: s,
      n: t
    }), g = {}, R = {};
    if (c) {
      let {
        backgroundColor: e = "",
        opacity: t = 1,
        accentColor: l = ""
      } = null != o ? o : {};
      if (R.color = l, n) {
        var E;
        g.background = null !== (E = (0, d.hex2rgb)(e, t)) && void 0 !== E ? E : ""
      }
    }
    return (0, l.jsx)(m.Tooltip, {
      position: "left",
      text: s,
      children: o => {
        let {
          onMouseEnter: s,
          onMouseLeave: c
        } = o;
        return (0, l.jsxs)(m.Clickable, {
          className: i({
            [X.reactionDefault]: !n,
            [X.reactionSelected]: n
          }),
          "aria-label": h,
          onClick: () => a({
            emoji: e,
            reactionType: r
          }),
          onMouseEnter: s,
          onMouseLeave: c,
          style: g,
          children: [u, (0, l.jsx)(m.Text, {
            variant: "text-sm/bold",
            style: R,
            children: t
          })]
        })
      }
    })
  }
}

function Q(e) {
  let {
    emoji: t,
    user: n,
    message: a,
    channel: r,
    guildId: i,
    reactionType: o,
    onRemoveReactor: u,
    disableManage: c = !1
  } = e, d = B.default.getCurrentUser(), h = (0, f.useStateFromStores)([B.default], () => B.default.getUser(n.id), [n]);
  s(null != d, "Reactor: currentUser cannot be undefined");
  let g = (0, C.useIsActiveChannelOrUnarchivableThread)(r),
    S = (0, f.useStateFromStores)([D.default], () => D.default.can(Y.Permissions.MANAGE_MESSAGES, r) && g),
    p = S || d.id === n.id,
    A = (0, f.useStateFromStores)([y.default, x.default, L.default], () => P.default.getName(i, r.id, n));
  return (0, l.jsxs)(k.default, {
    className: X.reactorDefault,
    onContextMenu: e => (0, V.openUserContextMenu)(e, n, r),
    align: k.default.Align.CENTER,
    children: [(0, l.jsx)(k.default.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: q.marginReset,
      children: (0, l.jsx)(E.default, {
        user: null != h ? h : n,
        size: m.AvatarSizes.SIZE_24
      })
    }), (0, l.jsx)(k.default.Child, {
      children: (0, l.jsxs)(m.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: X.name,
        children: [null != A && "" !== A && (0, l.jsx)("span", {
          className: n.isPomelo() ? "" : X.nickname,
          children: A
        }), (0, l.jsx)(R.default, {
          user: n,
          className: null != A && "" !== A ? X.tagFaded : null,
          usernameClass: X.username,
          discriminatorClass: X.discriminator,
          forceUsername: !0
        })]
      })
    }), !c && p && (0, l.jsx)(m.Clickable, {
      onClick: function() {
        _.removeReactionWithConfirmation({
          emoji: t,
          userId: n.id,
          channelId: r.id,
          messageId: a.id,
          reactionType: o,
          isMe: (null == d ? void 0 : d.id) === n.id
        }), null == u || u()
      },
      children: (0, l.jsx)(F.default, {
        width: 16,
        height: 16,
        className: X.remove
      })
    })]
  })
}
class $ extends a.PureComponent {
  componentDidMount() {
    this.loadMore()
  }
  componentDidUpdate(e) {
    (!c.isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) && this.setState({
      lastId: null,
      loadingMore: !1
    }, () => this.loadMore())
  }
  loadMore() {
    let {
      message: e,
      reaction: t,
      reactionType: n
    } = this.props, {
      lastId: l
    } = this.state;
    this.setState({
      loadingMore: !0
    }), _.getReactors({
      channelId: e.getChannelId(),
      messageId: e.id,
      emoji: t.emoji,
      limit: Y.DEFAULT_NUM_REACTION_USERS,
      after: l,
      type: n
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
      reaction: n,
      message: a,
      reactionType: r
    } = this.props, i = [];
    return 0 === t.length && this.state.loadingMore ? i.push(length) : (i.push(t.length), e && i.push(1)), (0, l.jsxs)("div", {
      className: X.reactorsContainer,
      children: [r === I.ReactionTypes.BURST && (0, l.jsx)(W, {
        emoji: n.emoji,
        channelId: a.getChannelId(),
        messageId: a.id
      }), (0, l.jsx)(m.List, {
        className: X.reactors,
        fade: !0,
        ref: this.scrollerRef,
        sections: i,
        sectionHeight: 0,
        rowHeight: this.getRowHeight,
        renderRow: this.renderRow,
        renderSection: this.renderSection,
        onScroll: e ? this.handleScroll : void 0
      })]
    })
  }
  constructor(...e) {
    super(...e), this.scrollerRef = a.createRef(), this.state = {
      lastId: null,
      loadingMore: !1
    }, this.handleScroll = () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }, this.getRowHeight = (e, t) => {
      let {
        reactors: n
      } = this.props;
      if (1 === e) return 0 === t ? 44 : 0;
      if (0 === e) {
        if (0 === t && 0 === n.length) return 440;
        if (null != this.props.reactors[t]) return 44
      }
      return 0
    }, this.renderRow = e => {
      let {
        section: t,
        row: n
      } = e, {
        message: a,
        guildId: r,
        channel: i,
        reaction: o,
        reactors: s,
        reactionType: u,
        disableManage: c
      } = this.props, d = s[n];
      if (1 === t) return 0 === n ? (0, l.jsx)(m.Spinner, {
        className: X.spinnerMore
      }, "hasMore") : null;
      return 0 === s.length && this.state.loadingMore ? (0, l.jsx)(m.Spinner, {
        className: X.spinner
      }, "loadingMore") : null != d && (0, l.jsx)(Q, {
        message: a,
        emoji: o.emoji,
        guildId: r,
        channel: i,
        user: d,
        reaction: o,
        reactionType: u,
        disableManage: c
      }, d.id)
    }
  }
}
let ee = f.default.connectStores([U.default], e => {
  let {
    message: t,
    reaction: n,
    reactionType: l
  } = e, a = U.default.getReactions(t.getChannelId(), t.id, n.emoji, Y.DEFAULT_NUM_REACTION_USERS, l);
  if (null == a) return {
    reactors: [],
    hasMore: !1
  };
  let r = Object.values(a),
    i = l === I.ReactionTypes.BURST ? n.burst_count : n.count,
    o = i > r.length;
  return {
    reactors: r,
    hasMore: o
  }
})($);

function et(e) {
  var t;
  let {
    message: n,
    selectedReaction: r,
    disableManage: i = !1,
    disableTabs: o = !1,
    onClose: s,
    transitionState: u,
    "aria-label": c = J.default.Messages.REACTIONS
  } = e, d = (0, f.useStateFromStores)([x.default], () => x.default.getChannel(n.getChannelId())), g = null == d ? void 0 : d.getGuildId(), R = (0, f.useStateFromStores)([w.default, T.default, j.default], () => {
    var e, t, l;
    let a = null !== (l = null !== (t = w.default.getMessage(n.getChannelId(), n.id)) && void 0 !== t ? t : null === (e = T.default.getMessage(G.default.castMessageIdAsChannelId(n.id))) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== l ? l : null != g ? j.default.getCachedMessage(g, n.getChannelId(), n.id) : void 0;
    return null != a ? a.reactions : []
  }, [n, g]);
  let E = (t = R, a.useMemo(() => {
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
        let n = e.burst_count > 0 ? e.burst_count : e.count,
          l = t.burst_count > 0 ? t.burst_count : t.count;
        return l - n
      }), e
    }, [t])),
    p = E[0],
    v = null != p ? {
      emoji: p.emoji,
      reactionType: p.burst_count > 0 ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL
    } : null,
    [M, _] = function(e, t, n) {
      let [l, r] = a.useState(null != e ? e : t);
      return a.useEffect(() => {
        if (null != l) {
          let e = n.find(e => {
            let t = null != e.me_vote ? I.ReactionTypes.VOTE : e.burst_count > 0 ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL;
            return (0, b.emojiEquals)(e.emoji, l.emoji) && t === l.reactionType
          });
          null == e && r(t)
        }
      }, [l, r, n, t]), [l, r]
    }(r, v, R),
    C = a.useMemo(() => {
      var e;
      return null == M ? null : null !== (e = R.find(e => (0, b.emojiEquals)(e.emoji, M.emoji))) && void 0 !== e ? e : null
    }, [R, M]),
    y = (0, f.useStateFromStores)([S.default], () => S.default.saturation),
    U = (0, f.useStateFromStores)([O.default], () => (0, h.isThemeDark)(O.default.theme));
  if (a.useEffect(() => {
      (0 === R.length || null == M && null == C) && setImmediate(s)
    }, [s, R.length, C, M]), null == M || null == C) return (0, l.jsx)(m.Spinner, {});
  if (null == d) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, l.jsx)(N.default.Provider, {
    value: null != g ? g : void 0,
    children: (0, l.jsxs)(m.ModalRoot, {
      "aria-label": c,
      transitionState: u,
      size: m.ModalSize.DYNAMIC,
      className: X.container,
      children: [o ? null : (0, l.jsx)(m.Scroller, {
        className: X.scroller,
        fade: !0,
        children: E.map(e => {
          var t;
          let n = e.burst_count > 0;
          return (0, l.jsx)(Z, {
            isSelected: en(M, e, n ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL),
            setSelected: _,
            reactionType: n ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL,
            emoji: e.emoji,
            count: n ? e.burst_count : e.count,
            colors: null != e.burst_colors ? (0, A.buildEmojiColorPalette)(e.burst_colors, y, U) : void 0
          }, "".concat(n ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
        })
      }), (0, l.jsx)(ee, {
        message: n,
        reaction: C,
        guildId: g,
        channel: d,
        reactionType: M.reactionType,
        disableManage: i
      })]
    })
  })
}
let en = (e, t, n) => c.isEqual(e.emoji, t.emoji) && e.reactionType === n