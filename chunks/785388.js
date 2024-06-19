n.r(t), n.d(t, {
  default: function() {
    return Q
  }
}), n(47120), n(653041), n(177593), n(411104);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  l = n.n(a),
  o = n(392711),
  r = n.n(o),
  u = n(866442),
  c = n(442837),
  d = n(780384),
  h = n(481060),
  m = n(596454),
  p = n(129861),
  g = n(700582),
  T = n(607070),
  f = n(633302),
  v = n(712057),
  E = n(660189),
  I = n(372900),
  N = n(566006),
  x = n(620652),
  S = n(815605),
  C = n(222677),
  R = n(995774),
  Z = n(665906),
  _ = n(210887),
  O = n(314897),
  j = n(592125),
  A = n(271383),
  M = n(542578),
  b = n(375954),
  P = n(496675),
  L = n(699516),
  y = n(594174),
  U = n(285952),
  w = n(768581),
  k = n(176354),
  D = n(5192),
  B = n(709054),
  F = n(91047),
  V = n(981631),
  H = n(689938),
  G = n(260018),
  W = n(331651);

function z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function K(e) {
  return null == e.id ? f.ZP.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
}
let Y = e => {
  let {
    emoji: t,
    channelId: n,
    messageId: a
  } = e, [o, r] = s.useState(!0), [u, c] = s.useState([]), d = s.useMemo(() => {
    if (null == u || u.length < 1) return;
    let e = (0, S.Zn)(t, u[0], n, {
      emojiSize: x.M.LARGE,
      messageId: a
    });
    return (0, i.jsx)(x.Z, {
      className: G.__invalid_effect,
      effect: e,
      emojiSize: x.M.LARGE,
      onComplete: () => r(!1)
    })
  }, [u, t, n, a]);
  return s.useEffect(() => {
    let e = !1;
    return r(!0), !async function() {
      let n = await (0, k.B6)(t);
      Array.isArray(n) && n.length > 0 && !e && c(n)
    }(), () => {
      e = !0
    }
  }, [t]), (0, i.jsxs)("div", {
    className: G.burstEmojiSection,
    children: [d, (0, i.jsx)(m.Z, {
      className: l()(G.burstEmoji, {
        [G.hideEmoji]: o
      }),
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated,
      size: "reaction"
    }), (0, i.jsx)(h.Text, {
      variant: "text-md/medium",
      children: K(t)
    })]
  })
};
class J extends s.PureComponent {
  render() {
    let {
      emoji: e,
      count: t,
      isSelected: n,
      setSelected: s,
      reactionType: a,
      colors: o
    } = this.props, r = K(e), c = function(e, t, n, s) {
      let a = null == e.id ? k.ZP.getURL(e.name) : w.ZP.getEmojiURL({
        id: e.id,
        animated: e.animated,
        size: 24
      });
      return null != a && "" !== a ? (0, i.jsx)("img", {
        className: n,
        src: a,
        alt: e.name
      }) : (0, i.jsx)("span", {
        className: s,
        children: e.name
      })
    }(e, 24, G.emoji, l()(G.emoji, G.emojiText)), d = a === N.O.BURST, m = (d ? H.Z.Messages.BURST_REACTION_REACTORS_A11Y : H.Z.Messages.REACTION_REACTORS_A11Y).format({
      name: r,
      n: t
    }), p = {}, g = {};
    if (d) {
      let {
        backgroundColor: e = "",
        opacity: t = 1,
        accentColor: i = ""
      } = null != o ? o : {};
      if (g.color = i, n) {
        var T;
        p.background = null !== (T = (0, u.wK)(e, t)) && void 0 !== T ? T : ""
      }
    }
    return (0, i.jsx)(h.Tooltip, {
      position: "left",
      text: r,
      children: o => {
        let {
          onMouseEnter: r,
          onMouseLeave: u
        } = o;
        return (0, i.jsxs)(h.Clickable, {
          className: l()({
            [G.reactionDefault]: !n,
            [G.reactionSelected]: n
          }),
          "aria-label": m,
          onClick: () => s({
            emoji: e,
            reactionType: a
          }),
          onMouseEnter: r,
          onMouseLeave: u,
          style: p,
          children: [c, (0, i.jsx)(h.Text, {
            variant: "text-sm/bold",
            style: g,
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
    user: n,
    message: s,
    channel: a,
    guildId: l,
    reactionType: o,
    onRemoveReactor: r,
    disableManage: u = !1
  } = e, d = (0, c.e7)([O.default], () => O.default.getId()), m = (0, c.e7)([y.default], () => y.default.getUser(n.id), [n]), T = (0, Z.$R)(a), f = (0, c.e7)([P.Z], () => P.Z.can(V.Plq.MANAGE_MESSAGES, a) && T) || d === n.id, v = (0, c.e7)([A.ZP, j.Z, L.Z], () => D.ZP.getName(l, a.id, n));
  return (0, i.jsxs)(U.Z, {
    className: G.reactorDefault,
    onContextMenu: e => (0, F.Pv)(e, n, a),
    align: U.Z.Align.CENTER,
    children: [(0, i.jsx)(U.Z.Child, {
      wrap: !0,
      grow: 0,
      shrink: 0,
      className: W.marginReset,
      children: (0, i.jsx)(g.Z, {
        user: null != m ? m : n,
        size: h.AvatarSizes.SIZE_24
      })
    }), (0, i.jsx)(U.Z.Child, {
      children: (0, i.jsxs)(h.Text, {
        tag: "strong",
        variant: "text-md/normal",
        className: G.name,
        children: [null != v && "" !== v && (0, i.jsx)("span", {
          className: n.isPomelo() ? "" : G.nickname,
          children: v
        }), (0, i.jsx)(p.Z, {
          user: n,
          className: null != v && "" !== v ? G.tagFaded : null,
          usernameClass: G.username,
          discriminatorClass: G.discriminator,
          forceUsername: !0
        })]
      })
    }), !u && f && (0, i.jsx)(h.Clickable, {
      onClick: function() {
        C.Vn({
          emoji: t,
          userId: n.id,
          channelId: a.id,
          messageId: s.id,
          reactionType: o,
          isMe: d === n.id
        }), null == r || r()
      },
      children: (0, i.jsx)(h.CloseSmallIcon, {
        size: "xs",
        color: "currentColor",
        className: G.remove
      })
    })]
  })
}
class X extends s.PureComponent {
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
      reactionType: n
    } = this.props, {
      lastId: i
    } = this.state;
    this.setState({
      loadingMore: !0
    }), C.U0({
      channelId: e.getChannelId(),
      messageId: e.id,
      emoji: t.emoji,
      limit: V.pTL,
      after: i,
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
      message: s,
      reactionType: a
    } = this.props, l = [];
    return 0 === t.length && this.state.loadingMore ? l.push(length) : (l.push(t.length), e && l.push(1)), (0, i.jsxs)("div", {
      className: G.reactorsContainer,
      children: [a === N.O.BURST && (0, i.jsx)(Y, {
        emoji: n.emoji,
        channelId: s.getChannelId(),
        messageId: s.id
      }), (0, i.jsx)(h.List, {
        className: G.reactors,
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
    super(...e), z(this, "scrollerRef", s.createRef()), z(this, "state", {
      lastId: null,
      loadingMore: !1
    }), z(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null == e) return;
      let t = e.getScrollerState();
      t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
    }), z(this, "getRowHeight", (e, t) => {
      let {
        reactors: n
      } = this.props;
      if (1 === e) return 0 === t ? 44 : 0;
      if (0 === e) {
        if (0 === t && 0 === n.length) return 440;
        if (null != this.props.reactors[t]) return 44
      }
      return 0
    }), z(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        message: s,
        guildId: a,
        channel: l,
        reaction: o,
        reactors: r,
        reactionType: u,
        disableManage: c
      } = this.props, d = r[n];
      if (1 === t) return 0 === n ? (0, i.jsx)(h.Spinner, {
        className: G.spinnerMore
      }, "hasMore") : null;
      return 0 === r.length && this.state.loadingMore ? (0, i.jsx)(h.Spinner, {
        className: G.spinner
      }, "loadingMore") : null != d && (0, i.jsx)(q, {
        message: s,
        emoji: o.emoji,
        guildId: a,
        channel: l,
        user: d,
        reaction: o,
        reactionType: u,
        disableManage: c
      }, d.id)
    })
  }
}
let $ = c.ZP.connectStores([M.Z], e => {
  let {
    message: t,
    reaction: n,
    reactionType: i
  } = e, s = M.Z.getReactions(t.getChannelId(), t.id, n.emoji, V.pTL, i);
  if (null == s) return {
    reactors: [],
    hasMore: !1
  };
  let a = Object.values(s),
    l = (i === N.O.BURST ? n.burst_count : n.count) > a.length;
  return {
    reactors: a,
    hasMore: l
  }
})(X);

function Q(e) {
  var t;
  let {
    message: n,
    selectedReaction: a,
    disableManage: l = !1,
    disableTabs: o = !1,
    onClose: r,
    transitionState: u,
    "aria-label": m = H.Z.Messages.REACTIONS
  } = e, p = (0, c.e7)([j.Z], () => j.Z.getChannel(n.getChannelId())), g = null == p ? void 0 : p.getGuildId(), f = (0, c.e7)([b.Z, E.Z], () => {
    var e, t;
    let i = null !== (t = b.Z.getMessage(n.getChannelId(), n.id)) && void 0 !== t ? t : null === (e = E.Z.getMessage(B.default.castMessageIdAsChannelId(n.id))) || void 0 === e ? void 0 : e.firstMessage;
    return null != i ? i.reactions : []
  }, [n]);
  let x = (t = f, s.useMemo(() => {
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
        let n = e.burst_count > 0 ? e.burst_count : e.count;
        return (t.burst_count > 0 ? t.burst_count : t.count) - n
      }), e
    }, [t])),
    S = x[0],
    [C, Z] = function(e, t, n) {
      let [i, a] = s.useState(null != e ? e : t);
      return s.useEffect(() => {
        null != i && null == n.find(e => {
          let t = null != e.me_vote ? N.O.VOTE : e.burst_count > 0 ? N.O.BURST : N.O.NORMAL;
          return (0, R.ir)(e.emoji, i.emoji) && t === i.reactionType
        }) && a(t)
      }, [i, a, n, t]), [i, a]
    }(a, null != S ? {
      emoji: S.emoji,
      reactionType: S.burst_count > 0 ? N.O.BURST : N.O.NORMAL
    } : null, f),
    O = s.useMemo(() => {
      var e;
      return null == C ? null : null !== (e = f.find(e => (0, R.ir)(e.emoji, C.emoji))) && void 0 !== e ? e : null
    }, [f, C]),
    A = (0, c.e7)([T.Z], () => T.Z.saturation),
    M = (0, c.e7)([_.Z], () => (0, d.wj)(_.Z.theme));
  if (s.useEffect(() => {
      (0 === f.length || null == C && null == O) && setImmediate(r)
    }, [r, f.length, O, C]), null == C || null == O) return (0, i.jsx)(h.Spinner, {});
  if (null == p) throw Error("MessageReactions.render: Message does not have a channelId");
  return (0, i.jsx)(I.Z.Provider, {
    value: null != g ? g : void 0,
    children: (0, i.jsxs)(h.ModalRoot, {
      "aria-label": m,
      transitionState: u,
      size: h.ModalSize.DYNAMIC,
      className: G.container,
      children: [o ? null : (0, i.jsx)(h.Scroller, {
        className: G.scroller,
        fade: !0,
        children: x.map(e => {
          var t;
          let n = e.burst_count > 0;
          return (0, i.jsx)(J, {
            isSelected: ee(C, e, n ? N.O.BURST : N.O.NORMAL),
            setSelected: Z,
            reactionType: n ? N.O.BURST : N.O.NORMAL,
            emoji: e.emoji,
            count: n ? e.burst_count : e.count,
            colors: null != e.burst_colors ? (0, v.Z)(e.burst_colors, A, M) : void 0
          }, "".concat(n ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
        })
      }), (0, i.jsx)($, {
        message: n,
        reaction: O,
        guildId: g,
        channel: p,
        reactionType: C.reactionType,
        disableManage: l
      })]
    })
  })
}
let ee = (e, t, n) => r().isEqual(e.emoji, t.emoji) && e.reactionType === n