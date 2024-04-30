"use strict";
a.r(t), a.d(t, {
  FriendsSearchStatus: function() {
    return n
  }
}), a("411104"), a("47120");
var n, s = a("735250"),
  l = a("470079"),
  i = a("748780"),
  r = a("442837"),
  o = a("481060"),
  u = a("210887"),
  d = a("186095"),
  c = a("981631"),
  f = a("689938"),
  E = a("95408");

function h(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}(n || (n = {})).SECTION_NO_RESULTS = "SECTION_NO_RESULTS";
let _ = Object.freeze({
    SECTION_ALL: {
      lightSrc: a("900933"),
      darkSrc: a("67764"),
      width: 376,
      height: 162,
      renderContent: e => (0, s.jsxs)(l.Fragment, {
        children: [(0, s.jsx)(d.default.Text, {
          note: f.default.Messages.FRIENDS_EMPTY_STATE_ALL
        }), (0, s.jsx)(o.Button, {
          className: E.button,
          onClick: e,
          children: f.default.Messages.ADD_FRIEND
        })]
      })
    },
    SECTION_ONLINE: {
      lightSrc: a("55346"),
      darkSrc: a("917847"),
      width: 421,
      height: 218,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIENDS_EMPTY_STATE_ONLINE
      })
    },
    SECTION_BLOCKED: {
      lightSrc: a("459505"),
      darkSrc: a("356634"),
      width: 433,
      height: 232,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIENDS_EMPTY_STATE_BLOCKED
      })
    },
    SECTION_PENDING: {
      lightSrc: a("979770"),
      darkSrc: a("138715"),
      width: 415,
      height: 200,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIENDS_EMPTY_STATE_PENDING
      })
    },
    SECTION_SUGGESTIONS: {
      lightSrc: a("979770"),
      darkSrc: a("138715"),
      width: 415,
      height: 200,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIENDS_EMPTY_STATE_SUGGESTIONS
      })
    },
    SECTION_NO_RESULTS: {
      lightSrc: a("55346"),
      darkSrc: a("917847"),
      width: 421,
      height: 218,
      renderContent: () => (0, s.jsx)(d.default.Text, {
        note: f.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
      })
    }
  }),
  C = e => {
    let {
      theme: t
    } = e, a = f.default.Messages.FRIENDS_EMPTY_STATE_ALL, n = _.SECTION_ALL;
    return (0, s.jsx)(l.Fragment, {
      children: (0, s.jsxs)(d.default, {
        theme: t,
        children: [(0, s.jsx)(d.default.Image, {
          width: n.width,
          height: n.height,
          lightSrc: n.lightSrc,
          darkSrc: n.darkSrc
        }), (0, s.jsx)(d.default.Text, {
          note: a
        })]
      })
    })
  };
class m extends l.PureComponent {
  render() {
    let {
      type: e,
      onClick: t,
      theme: a
    } = this.props, n = {
      opacity: this.state.opacity
    }, l = function(e) {
      switch (e) {
        case c.FriendsSections.ADD_FRIEND:
        case c.FriendsSections.ALL:
          return _.SECTION_ALL;
        case c.FriendsSections.ONLINE:
          return _.SECTION_ONLINE;
        case c.FriendsSections.PENDING:
          return _.SECTION_PENDING;
        case c.FriendsSections.SUGGESTIONS:
          return _.SECTION_SUGGESTIONS;
        case c.FriendsSections.BLOCKED:
          return _.SECTION_BLOCKED;
        case "SECTION_NO_RESULTS":
          return _.SECTION_NO_RESULTS;
        default:
          throw Error("FriendsEmptyState: Invalid empty state")
      }
    }(e);
    return e === c.FriendsSections.ADD_FRIEND ? (0, s.jsx)(i.default.div, {
      className: E.friendsEmpty,
      style: n,
      children: (0, s.jsx)(C, {
        theme: a
      })
    }) : (0, s.jsx)(i.default.div, {
      className: E.friendsEmpty,
      style: n,
      children: (0, s.jsxs)(d.default, {
        theme: a,
        children: [(0, s.jsx)(d.default.Image, {
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
      opacity: new i.default.Value(1)
    }), h(this, "componentWillEnter", e => {
      this.state.opacity.setValue(0), i.default.timing(this.state.opacity, {
        toValue: 1,
        duration: 250
      }).start(e)
    }), h(this, "componentWillLeave", e => {
      i.default.timing(this.state.opacity, {
        toValue: 0,
        duration: 250
      }).start(e)
    })
  }
}
t.default = r.default.connectStores([u.default], () => ({
  theme: u.default.theme
}), {
  forwardRef: !0
})(m)