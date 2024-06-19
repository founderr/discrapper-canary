l.r(t), l.d(t, {
  default: function() {
    return x
  }
}), l(47120);
var s = l(735250),
  n = l(470079),
  r = l(120356),
  a = l.n(r),
  i = l(442837),
  u = l(481060),
  o = l(988298),
  c = l(461745),
  d = l(212819),
  h = l(43267),
  I = l(447003),
  E = l(933557),
  p = l(606206),
  T = l(585483),
  _ = l(981631),
  N = l(689938),
  C = l(756674),
  m = l(331651);

function A(e, t, l) {
  return t in e ? Object.defineProperty(e, t, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = l, e
}
let v = e => {
    let {
      channel: t,
      categoryName: l,
      guildName: n
    } = e, r = u.TextIcon;
    return (0, I.Z)(t) ? r = u.TextLockIcon : t.isNSFW() && (r = u.TextWarningIcon), (0, s.jsxs)("div", {
      className: C.result,
      children: [(0, s.jsx)(r, {
        className: C.resultIcon,
        colorClass: C.resultIconBackground,
        size: "xs"
      }), (0, s.jsxs)("div", {
        className: C.resultText,
        children: [(0, s.jsx)("span", {
          children: t.name
        }), (0, s.jsx)("span", {
          className: C.resultCategoryName,
          children: l
        })]
      }), (0, s.jsx)("div", {
        className: C.resultGuildName,
        children: n
      })]
    })
  },
  g = e => {
    let {
      channel: t
    } = e, l = (0, E.ZP)(t);
    return (0, s.jsxs)("div", {
      className: C.result,
      children: [(0, s.jsx)(u.Avatar, {
        src: (0, h.x)(t),
        "aria-label": null != l ? l : "",
        className: C.resultAvatar,
        size: u.AvatarSizes.SIZE_32
      }), (0, s.jsx)("div", {
        className: C.resultText,
        children: l
      })]
    })
  },
  L = e => {
    let t, {
      user: l,
      comparator: n,
      status: r
    } = e;
    if (null != n && n === l.tag) {
      let e = n.split("#");
      e.pop(), t = e.join("#")
    } else t = null != n && "" !== n ? n : l.username;
    return (0, s.jsxs)("div", {
      className: C.result,
      children: [(0, s.jsx)(u.Avatar, {
        src: l.getAvatarURL(void 0, 32),
        "aria-label": l.username,
        className: C.resultAvatar,
        size: u.AvatarSizes.SIZE_32,
        status: r
      }), (0, s.jsxs)("div", {
        className: C.resultText,
        children: [(0, s.jsx)("span", {
          children: t
        }), (0, s.jsx)("span", {
          className: C.resultUsername,
          children: l.tag
        })]
      })]
    })
  };
class S extends n.Component {
  render() {
    let e, t;
    let {
      result: l,
      selected: n,
      sending: r
    } = this.props;
    switch (l.type) {
      case d.h8.GROUP_DM:
        e = (0, s.jsx)(g, {
          channel: l.data.record
        });
        break;
      case d.h8.TEXT_CHANNEL: {
        let {
          categoryName: t,
          guildName: n
        } = l;
        e = (0, s.jsx)(v, {
          channel: l.data.record,
          categoryName: t,
          guildName: n
        });
        break
      }
      case d.h8.USER: {
        let {
          data: {
            comparator: t,
            record: n
          },
          status: r
        } = l;
        e = (0, s.jsx)(L, {
          comparator: t,
          user: n,
          status: r
        })
      }
    }
    return t = l.sent ? (0, s.jsx)(u.Button, {
      className: C.inviteButton,
      look: u.Button.Looks.LINK,
      size: u.Button.Sizes.SMALL,
      disabled: !0,
      color: u.Button.Colors.WHITE,
      children: N.Z.Messages.ACTIVITY_INVITE_MODAL_SENT
    }) : (0, s.jsx)(u.Button, {
      color: u.Button.Colors.GREEN,
      look: n ? u.Button.Looks.FILLED : u.Button.Looks.OUTLINED,
      className: C.inviteButton,
      size: u.Button.Sizes.SMALL,
      submitting: r,
      onClick: this.handleClick,
      children: N.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE
    }), (0, s.jsxs)("div", {
      className: a()(C.resultWrapper, {
        [C.resultWrapperSelected]: n
      }),
      onMouseEnter: this.handleMouseEnter,
      children: [e, t]
    })
  }
  constructor(...e) {
    super(...e), A(this, "handleClick", () => {
      let {
        onInvite: e,
        row: t
      } = this.props;
      e(t)
    }), A(this, "handleMouseEnter", () => {
      let {
        onMouseEnter: e,
        row: t
      } = this.props;
      e(t)
    })
  }
}

function x(e) {
  let {
    transitionState: t,
    onClose: l
  } = e, {
    results: r,
    query: a,
    activity: h
  } = (0, i.cj)([p.Z], () => ({
    results: p.Z.getResults(),
    query: p.Z.getQuery(),
    activity: p.Z.getActivity()
  }), []), [I, E] = n.useState(a), [A, v] = n.useState(0), [g, L] = n.useState([]), [x, f] = n.useState(!1), M = n.useRef(null), y = n.useCallback(() => {
    var e;
    null === (e = M.current) || void 0 === e || e.scrollPageUp({
      animate: !0
    })
  }, [M]), R = n.useCallback(() => {
    var e;
    null === (e = M.current) || void 0 === e || e.scrollPageDown({
      animate: !0
    })
  }, [M]);
  n.useEffect(() => (T.S.subscribe(_.CkL.SCROLL_PAGE_UP, y), () => {
    T.S.unsubscribe(_.CkL.SCROLL_PAGE_UP, y)
  }), [y]), n.useEffect(() => (T.S.subscribe(_.CkL.SCROLL_PAGE_DOWN, R), () => {
    T.S.unsubscribe(_.CkL.SCROLL_PAGE_DOWN, R)
  }), [R]), n.useEffect(() => {
    null == h && l()
  }, [l, h]), n.useEffect(() => {
    var e;
    null === (e = M.current) || void 0 === e || e.scrollToTop(), v(0)
  }, [M, r]);
  let O = n.useCallback(e => {
      let {
        data: t,
        data: {
          record: {
            id: l
          }
        }
      } = r[e];
      if (!(null == l || g.includes(l))) switch (L([...g, l]), t.type) {
        case d.h8.GROUP_DM:
        case d.h8.TEXT_CHANNEL:
          (0, o.GG)(t.record.id);
          break;
        case d.h8.USER:
          (0, o.R2)(t.record.id)
      }
    }, [r, g]),
    j = n.useCallback(e => {
      v(e)
    }, [v]),
    D = () => {
      b("")
    },
    b = e => {
      E(e), (0, o.rh)(e)
    };
  return null == h ? null : (0, s.jsxs)(u.ModalRoot, {
    transitionState: t,
    size: u.ModalSize.SMALL,
    "aria-label": N.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
      name: h.name
    }),
    children: [(0, s.jsxs)(u.ModalHeader, {
      separator: x,
      children: [(0, s.jsx)(u.ModalCloseButton, {
        className: C.closeButton,
        onClick: l
      }), (0, s.jsxs)("div", {
        className: C.header,
        children: [(0, s.jsx)(u.FormTitle, {
          tag: "h2",
          className: m.marginBottom8,
          children: N.Z.Messages.ACTIVITY_INVITE_MODAL_HEADER.format({
            name: h.name
          })
        }), (0, s.jsx)(c.ZP, {
          size: c.ZP.Sizes.MEDIUM,
          query: I,
          selectedSection: 0,
          selectedRow: A,
          sections: [r.length],
          className: m.marginTop4,
          onSelect: (e, t) => {
            null == t ? D() : O(t)
          },
          onSelectionChange: (e, t) => {
            var l;
            v(t), null === (l = M.current) || void 0 === l || l.scrollIntoViewRect({
              start: 44 * t,
              end: 44 * t + 44
            })
          },
          onQueryChange: b,
          placeholder: N.Z.Messages.ACTIVITY_INVITE_MODAL_SEARCH_PLACEHOLDER,
          autoFocus: !0,
          onClear: D
        })]
      })]
    }), (0, s.jsx)(u.ModalListContent, {
      scrollerRef: M,
      className: 0 === r.length ? C.noResults : C.results,
      paddingBottom: 8,
      sections: [r.length],
      sectionHeight: 0,
      renderSection: _.VqG,
      rowHeight: (e, t) => e > 0 ? 0 : null != r[t] ? 44 : 0,
      renderRow: e => {
        let {
          section: t,
          row: l
        } = e;
        if (t > 0) return null;
        let n = r[l];
        return null == n ? null : (0, s.jsx)(S, {
          row: l,
          result: n,
          sending: null != n.data.record.id && g.includes(n.data.record.id),
          selected: l === A,
          onMouseEnter: j,
          onInvite: O
        }, n.data.record.id)
      },
      onScroll: e => {
        let t = e.currentTarget.scrollTop > 0;
        x !== t && f(t)
      }
    })]
  })
}