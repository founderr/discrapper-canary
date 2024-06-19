n.d(t, {
  j: function() {
    return i
  }
}), n(411104), n(47120);
var i, s = n(735250),
  l = n(470079),
  a = n(748780),
  r = n(442837),
  o = n(481060),
  c = n(210887),
  u = n(981631),
  d = n(689938),
  E = n(113042);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(i || (i = {})).SECTION_NO_RESULTS = "SECTION_NO_RESULTS";
let _ = Object.freeze({
    SECTION_ALL: {
      lightSrc: n(900933),
      darkSrc: n(67764),
      width: 376,
      height: 162,
      renderContent: e => (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)(o.EmptyStateText, {
          note: d.Z.Messages.FRIENDS_EMPTY_STATE_ALL
        }), (0, s.jsx)(o.Button, {
          className: E.button,
          onClick: e,
          children: d.Z.Messages.ADD_FRIEND
        })]
      })
    },
    SECTION_ONLINE: {
      lightSrc: n(55346),
      darkSrc: n(917847),
      width: 421,
      height: 218,
      renderContent: () => (0, s.jsx)(o.EmptyStateText, {
        note: d.Z.Messages.FRIENDS_EMPTY_STATE_ONLINE
      })
    },
    SECTION_BLOCKED: {
      lightSrc: n(459505),
      darkSrc: n(356634),
      width: 433,
      height: 232,
      renderContent: () => (0, s.jsx)(o.EmptyStateText, {
        note: d.Z.Messages.FRIENDS_EMPTY_STATE_BLOCKED
      })
    },
    SECTION_PENDING: {
      lightSrc: n(979770),
      darkSrc: n(138715),
      width: 415,
      height: 200,
      renderContent: () => (0, s.jsx)(o.EmptyStateText, {
        note: d.Z.Messages.FRIENDS_EMPTY_STATE_PENDING
      })
    },
    SECTION_SUGGESTIONS: {
      lightSrc: n(979770),
      darkSrc: n(138715),
      width: 415,
      height: 200,
      renderContent: () => (0, s.jsx)(o.EmptyStateText, {
        note: d.Z.Messages.FRIENDS_EMPTY_STATE_SUGGESTIONS
      })
    },
    SECTION_NO_RESULTS: {
      lightSrc: n(55346),
      darkSrc: n(917847),
      width: 421,
      height: 218,
      renderContent: () => (0, s.jsx)(o.EmptyStateText, {
        note: d.Z.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
      })
    }
  }),
  I = e => {
    let {
      theme: t
    } = e, n = d.Z.Messages.FRIENDS_EMPTY_STATE_ALL, i = _.SECTION_ALL;
    return (0, s.jsx)(l.Fragment, {
      children: (0, s.jsxs)(o.EmptyState, {
        theme: t,
        children: [(0, s.jsx)(o.EmptyStateImage, {
          width: i.width,
          height: i.height,
          lightSrc: i.lightSrc,
          darkSrc: i.darkSrc
        }), (0, s.jsx)(o.EmptyStateText, {
          note: n
        })]
      })
    })
  };
class m extends l.PureComponent {
  render() {
    let {
      type: e,
      onClick: t,
      theme: n
    } = this.props, i = {
      opacity: this.state.opacity
    }, l = function(e) {
      switch (e) {
        case u.pJs.ADD_FRIEND:
        case u.pJs.ALL:
          return _.SECTION_ALL;
        case u.pJs.ONLINE:
          return _.SECTION_ONLINE;
        case u.pJs.PENDING:
          return _.SECTION_PENDING;
        case u.pJs.SUGGESTIONS:
          return _.SECTION_SUGGESTIONS;
        case u.pJs.BLOCKED:
          return _.SECTION_BLOCKED;
        case "SECTION_NO_RESULTS":
          return _.SECTION_NO_RESULTS;
        default:
          throw Error("FriendsEmptyState: Invalid empty state")
      }
    }(e);
    return e === u.pJs.ADD_FRIEND ? (0, s.jsx)(a.Z.div, {
      className: E.friendsEmpty,
      style: i,
      children: (0, s.jsx)(I, {
        theme: n
      })
    }) : (0, s.jsx)(a.Z.div, {
      className: E.friendsEmpty,
      style: i,
      children: (0, s.jsxs)(o.EmptyState, {
        theme: n,
        children: [(0, s.jsx)(o.EmptyStateImage, {
          width: l.width,
          height: l.height,
          lightSrc: l.lightSrc,
          darkSrc: l.darkSrc
        }), l.renderContent(t)]
      })
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      opacity: new a.Z.Value(1)
    }), h(this, "componentWillEnter", e => {
      this.state.opacity.setValue(0), a.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 250
      }).start(e)
    }), h(this, "componentWillLeave", e => {
      a.Z.timing(this.state.opacity, {
        toValue: 0,
        duration: 250
      }).start(e)
    })
  }
}
t.Z = r.ZP.connectStores([c.Z], () => ({
  theme: c.Z.theme
}), {
  forwardRef: !0
})(m)