t.r(n), t.d(n, {
  default: function() {
    return B
  }
}), t(653041), t(47120);
var l = t(735250),
  i = t(470079),
  E = t(120356),
  a = t.n(E),
  r = t(442837),
  o = t(952265),
  u = t(481060),
  _ = t(493683),
  d = t(700582),
  s = t(100527),
  C = t(906732),
  S = t(933557),
  A = t(471445),
  T = t(734307),
  c = t(359110),
  I = t(814443),
  L = t(210887),
  D = t(131704),
  N = t(699516),
  U = t(944486),
  h = t(914010),
  P = t(594174),
  R = t(186523),
  f = t(553826),
  g = t(823379),
  O = t(407316),
  G = t(937784),
  m = t(689938),
  H = t(168167),
  Z = t(138715),
  M = t(979770);

function p(e) {
  let {
    channel: n,
    ChannelIcon: t,
    selected: i,
    onClick: E
  } = e, a = (0, S.ZP)(n);
  return (0, l.jsxs)(u.Clickable, {
    className: H.channelRow,
    onClick: () => E(n.id),
    children: [i ? (0, l.jsx)(f.Z, {
      className: H.radioIcon
    }) : (0, l.jsx)(R.Z, {
      className: H.radioIcon
    }), (0, l.jsx)(t, {
      className: H.icon,
      size: "xs",
      color: "currentColor"
    }), (0, l.jsx)(u.Text, {
      variant: "text-md/medium",
      color: "interactive-active",
      children: a
    })]
  })
}

function x(e) {
  let {
    guildId: n,
    selectedChannelId: t,
    onSelectChannelId: E
  } = e, o = (0, r.e7)([U.Z], () => U.Z.getChannelId()), {
    guildChannels: _
  } = (0, r.cj)([T.Z], () => T.Z.getGuildWithoutChangingCommunityRows(n)), d = i.useMemo(() => {
    let e = [];
    return _.forEachChannel(n => {
      !1 !== (0, O.W)(n.id) && ((0, D.r8)(n.type) || (0, D.bw)(n.type)) && e.push(n)
    }), e.sort((e, n) => e.id === o ? -1 : n.id === o ? 1 : 0)
  }, [_, o]);
  return 0 === d.length ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: a()(H.divider, H.bottomDivider)
    }), (0, l.jsx)(u.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: H.contentPadding,
      children: m.Z.Messages.CLIP_SHARE_SELECT_CHANNEL
    }), (0, l.jsx)(u.List, {
      sections: [d.length],
      sectionHeight: 0,
      renderRow: e => {
        let {
          section: n,
          row: i
        } = e;
        if (n > 0) return null;
        let a = d[i],
          r = (0, A.KS)(a);
        return null == r ? null : (0, l.jsx)(p, {
          channel: a,
          ChannelIcon: r,
          selected: t === a.id,
          onClick: E
        }, a.id)
      },
      rowHeight: (e, n) => e > 0 ? 0 : null != d[n] ? 56 : 0,
      renderSection: () => null,
      className: a()(H.channelList, H.contentPadding),
      fade: !0
    })]
  })
}

function v(e) {
  let {
    friends: n,
    searchQuery: t,
    disabled: E,
    onShareClip: o
  } = e, _ = i.useMemo(() => 0 === t.length ? n : n.filter(e => e.username.toLowerCase().includes(t.toLowerCase())), [n, t]), s = (0, r.e7)([L.Z], () => L.Z.theme);
  return 0 === _.length ? (0, l.jsxs)(u.EmptyState, {
    theme: s,
    className: H.emptyStateContainer,
    children: [(0, l.jsx)(u.EmptyStateImage, {
      width: 415,
      height: 75,
      lightSrc: M,
      darkSrc: Z
    }), (0, l.jsx)(u.EmptyStateText, {
      note: m.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
    })]
  }) : (0, l.jsx)(u.List, {
    sections: [_.length],
    sectionHeight: 0,
    renderRow: e => {
      let {
        section: n,
        row: t
      } = e;
      if (n > 0) return null;
      let i = _[t],
        a = _[t].username;
      return (0, l.jsxs)("div", {
        className: H.userRow,
        children: [(0, l.jsx)(d.Z, {
          user: i
        }), (0, l.jsx)(u.Text, {
          className: H.username,
          variant: "text-md/normal",
          children: a
        }), (0, l.jsx)(u.Button, {
          disabled: E,
          onClick: () => o(i.id),
          className: H.__invalid_friendShareButton,
          look: u.ButtonLooks.OUTLINED,
          size: u.ButtonSizes.SMALL,
          color: u.ButtonColors.BRAND,
          children: (0, l.jsx)(u.Text, {
            variant: "text-sm/medium",
            children: m.Z.Messages.SHARE
          })
        })]
      }, i.id)
    },
    rowHeight: (e, n) => e > 0 ? 0 : null != _[n] ? 52 : 0,
    renderSection: () => null,
    className: a()(H.friendsList, H.contentPadding),
    fade: !0
  })
}

function B(e) {
  let {
    clip: n,
    editMetadata: t,
    transitionState: E,
    onClose: d
  } = e, [S, A] = i.useState(""), [T, L] = i.useState(!1), [D, U] = i.useState(null), R = (0, r.Wu)([N.Z], () => N.Z.getFriendIDs()), f = (0, r.Wu)([I.Z, P.default], () => R.map(e => P.default.getUser(e)).filter(g.lm).sort((e, n) => {
    var t, l, i, E;
    return (null !== (i = null === (t = I.Z.getUserAffinity(n.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== i ? i : 0) - (null !== (E = null === (l = I.Z.getUserAffinity(e.id)) || void 0 === l ? void 0 : l.affinity) && void 0 !== E ? E : 0)
  }), [R]), O = (0, r.e7)([h.Z], () => h.Z.getGuildId()), {
    analyticsLocations: Z
  } = (0, C.ZP)(s.Z.CLIPS_SHARE_MODAL);
  async function M(e) {
    let l = null != e ? e : D;
    if (null != l) {
      L(!0);
      try {
        await (0, G.e)(n, {
          channelId: l,
          editMetadata: t,
          analyticsLocations: Z
        }), null == e && (0, c.Kh)(l), o.pT()
      } catch (e) {} finally {
        L(!1)
      }
    }
  }
  async function p(e) {
    let n = await _.Z.openPrivateChannel(e);
    await M(n)
  }
  return (0, l.jsxs)(u.ModalRoot, {
    size: u.ModalSize.SMALL,
    transitionState: E,
    children: [(0, l.jsx)(u.Heading, {
      className: a()(H.title, H.contentPadding),
      variant: "heading-lg/semibold",
      color: "interactive-active",
      children: m.Z.Messages.CLIP_SHARE_MODAL_TITLE
    }), (0, l.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      className: a()(H.subtitle, H.contentPadding),
      children: m.Z.Messages.CLIP_SHARE_MODAL_SUBTITLE
    }), (0, l.jsx)(u.SearchBar, {
      className: H.searchBar,
      query: S,
      onChange: A,
      size: u.SearchBar.Sizes.MEDIUM,
      onClear: function() {
        A("")
      },
      placeholder: m.Z.Messages.INVITE_SEARCH_FOR_FRIENDS
    }), (0, l.jsx)("div", {
      className: a()(H.divider, H.topDivider)
    }), (0, l.jsx)(v, {
      searchQuery: S,
      friends: f,
      onShareClip: p,
      disabled: T
    }), null != O && (0, l.jsx)(x, {
      guildId: O,
      selectedChannelId: D,
      onSelectChannelId: U
    }), (0, l.jsxs)(u.ModalFooter, {
      children: [(0, l.jsx)(u.Button, {
        disabled: null == D,
        submitting: T,
        color: u.Button.Colors.BRAND,
        onClick: () => M(),
        children: m.Z.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, l.jsx)(u.Button, {
        submitting: T,
        look: u.ButtonLooks.LINK,
        onClick: d,
        color: u.ButtonColors.PRIMARY,
        children: m.Z.Messages.BACK
      })]
    })]
  })
}