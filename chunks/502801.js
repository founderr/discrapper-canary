"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("653041"), n("47120");
var l = n("735250"),
  i = n("470079"),
  a = n("120356"),
  u = n.n(a),
  E = n("442837"),
  d = n("952265"),
  r = n("481060"),
  o = n("493683"),
  s = n("700582"),
  _ = n("100527"),
  C = n("906732"),
  S = n("933557"),
  A = n("471445"),
  c = n("734307"),
  T = n("359110"),
  I = n("210887"),
  L = n("131704"),
  f = n("699516"),
  D = n("944486"),
  N = n("914010"),
  h = n("800599"),
  U = n("594174"),
  R = n("186523"),
  P = n("553826"),
  g = n("823379"),
  O = n("407316"),
  G = n("937784"),
  m = n("689938"),
  H = n("948935"),
  p = n("138715"),
  M = n("979770");

function v(e) {
  let {
    channel: t,
    ChannelIcon: n,
    selected: i,
    onClick: a
  } = e, u = (0, S.default)(t);
  return (0, l.jsxs)(r.Clickable, {
    className: H.channelRow,
    onClick: () => a(t.id),
    children: [i ? (0, l.jsx)(P.default, {
      className: H.radioIcon
    }) : (0, l.jsx)(R.default, {
      className: H.radioIcon
    }), (0, l.jsx)(n, {
      className: H.icon,
      width: 16,
      height: 16
    }), (0, l.jsx)(r.Text, {
      variant: "text-md/medium",
      color: "interactive-active",
      children: u
    })]
  })
}

function x(e) {
  let {
    guildId: t,
    selectedChannelId: n,
    onSelectChannelId: a
  } = e, d = (0, E.useStateFromStores)([D.default], () => D.default.getChannelId()), {
    guildChannels: o
  } = (0, E.useStateFromStoresObject)([c.default], () => c.default.getGuildWithoutChangingCommunityRows(t)), s = i.useMemo(() => {
    let e = [];
    return o.forEachChannel(t => {
      !1 !== (0, O.canAttachClipsToChannel)(t.id) && ((0, L.isGuildSelectableChannelType)(t.type) || (0, L.isGuildVocalChannelType)(t.type)) && e.push(t)
    }), e.sort((e, t) => e.id === d ? -1 : t.id === d ? 1 : 0)
  }, [o, d]);
  return 0 === s.length ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)("div", {
      className: u()(H.divider, H.bottomDivider)
    }), (0, l.jsx)(r.Text, {
      variant: "eyebrow",
      color: "interactive-normal",
      className: H.contentPadding,
      children: m.default.Messages.CLIP_SHARE_SELECT_CHANNEL
    }), (0, l.jsx)(r.List, {
      sections: [s.length],
      sectionHeight: 0,
      renderRow: e => {
        let {
          section: t,
          row: i
        } = e;
        if (t > 0) return null;
        let u = s[i],
          E = (0, A.getChannelIconComponent)(u);
        return null == E ? null : (0, l.jsx)(v, {
          channel: u,
          ChannelIcon: E,
          selected: n === u.id,
          onClick: a
        }, u.id)
      },
      rowHeight: (e, t) => e > 0 ? 0 : null != s[t] ? 56 : 0,
      renderSection: () => null,
      className: u()(H.channelList, H.contentPadding),
      fade: !0
    })]
  })
}

function B(e) {
  let {
    friends: t,
    searchQuery: n,
    disabled: a,
    onShareClip: d
  } = e, o = i.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), _ = (0, E.useStateFromStores)([I.default], () => I.default.theme);
  return 0 === o.length ? (0, l.jsxs)(r.EmptyState, {
    theme: _,
    className: H.emptyStateContainer,
    children: [(0, l.jsx)(r.EmptyStateImage, {
      width: 415,
      height: 75,
      lightSrc: M,
      darkSrc: p
    }), (0, l.jsx)(r.EmptyStateText, {
      note: m.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
    })]
  }) : (0, l.jsx)(r.List, {
    sections: [o.length],
    sectionHeight: 0,
    renderRow: e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let i = o[n],
        u = o[n].username;
      return (0, l.jsxs)("div", {
        className: H.userRow,
        children: [(0, l.jsx)(s.default, {
          user: i
        }), (0, l.jsx)(r.Text, {
          className: H.username,
          variant: "text-md/normal",
          children: u
        }), (0, l.jsx)(r.Button, {
          disabled: a,
          onClick: () => d(i.id),
          className: H.__invalid_friendShareButton,
          look: r.ButtonLooks.OUTLINED,
          size: r.ButtonSizes.SMALL,
          color: r.ButtonColors.BRAND,
          children: (0, l.jsx)(r.Text, {
            variant: "text-sm/medium",
            children: m.default.Messages.SHARE
          })
        })]
      }, i.id)
    },
    rowHeight: (e, t) => e > 0 ? 0 : null != o[t] ? 52 : 0,
    renderSection: () => null,
    className: u()(H.friendsList, H.contentPadding),
    fade: !0
  })
}

function F(e) {
  let {
    clip: t,
    editMetadata: n,
    transitionState: a,
    onClose: s
  } = e, [S, A] = i.useState(""), [c, I] = i.useState(!1), [L, D] = i.useState(null), R = (0, E.useStateFromStoresArray)([f.default], () => f.default.getFriendIDs()), P = (0, E.useStateFromStoresArray)([h.default, U.default], () => R.map(e => U.default.getUser(e)).filter(g.isNotNullish).sort((e, t) => {
    var n, l, i, a;
    return (null !== (i = null === (n = h.default.getUserAffinity(t.id)) || void 0 === n ? void 0 : n.affinity) && void 0 !== i ? i : 0) - (null !== (a = null === (l = h.default.getUserAffinity(e.id)) || void 0 === l ? void 0 : l.affinity) && void 0 !== a ? a : 0)
  }), [R]), O = (0, E.useStateFromStores)([N.default], () => N.default.getGuildId()), {
    analyticsLocations: p
  } = (0, C.default)(_.default.CLIPS_SHARE_MODAL);
  async function M(e) {
    let l = null != e ? e : L;
    if (null != l) {
      I(!0);
      try {
        await (0, G.shareClip)(t, {
          channelId: l,
          editMetadata: n,
          analyticsLocations: p
        }), null == e && (0, T.transitionToChannel)(l), d.closeAllModals()
      } catch (e) {} finally {
        I(!1)
      }
    }
  }
  async function v(e) {
    let t = await o.default.openPrivateChannel(e);
    await M(t)
  }
  return (0, l.jsxs)(r.ModalRoot, {
    size: r.ModalSize.SMALL,
    transitionState: a,
    children: [(0, l.jsx)(r.Heading, {
      className: u()(H.title, H.contentPadding),
      variant: "heading-lg/semibold",
      color: "interactive-active",
      children: m.default.Messages.CLIP_SHARE_MODAL_TITLE
    }), (0, l.jsx)(r.Text, {
      variant: "text-md/normal",
      color: "text-normal",
      className: u()(H.subtitle, H.contentPadding),
      children: m.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
    }), (0, l.jsx)(r.SearchBar, {
      className: H.searchBar,
      query: S,
      onChange: A,
      size: r.SearchBar.Sizes.MEDIUM,
      onClear: function() {
        A("")
      },
      placeholder: m.default.Messages.INVITE_SEARCH_FOR_FRIENDS
    }), (0, l.jsx)("div", {
      className: u()(H.divider, H.topDivider)
    }), (0, l.jsx)(B, {
      searchQuery: S,
      friends: P,
      onShareClip: v,
      disabled: c
    }), null != O && (0, l.jsx)(x, {
      guildId: O,
      selectedChannelId: L,
      onSelectChannelId: D
    }), (0, l.jsxs)(r.ModalFooter, {
      children: [(0, l.jsx)(r.Button, {
        disabled: null == L,
        submitting: c,
        color: r.Button.Colors.BRAND,
        onClick: () => M(),
        children: m.default.Messages.CLIPS_EDIT_SHARE_CLIP
      }), (0, l.jsx)(r.Button, {
        submitting: c,
        look: r.ButtonLooks.LINK,
        onClick: s,
        color: r.ButtonColors.PRIMARY,
        children: m.default.Messages.BACK
      })]
    })]
  })
}