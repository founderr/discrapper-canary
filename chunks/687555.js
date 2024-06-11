"use strict";
t.r(s), t("47120"), t("653041");
var a = t("735250"),
  r = t("470079"),
  l = t("120356"),
  i = t.n(l),
  n = t("512722"),
  C = t.n(n),
  d = t("597312"),
  o = t("442837"),
  c = t("481060"),
  u = t("232567"),
  f = t("461745"),
  x = t("434650"),
  h = t("210887"),
  p = t("51144"),
  _ = t("281494"),
  R = t("276444"),
  E = t("529840"),
  j = t("689938"),
  L = t("114480"),
  m = t("724531"),
  g = t("99713"),
  S = t("334202"),
  A = t("7234");

function M(e) {
  let {
    numOfSelectedUsers: s
  } = e, t = (0, o.useStateFromStores)([R.default], () => R.default.getReferralsRemaining());
  C()(null != t, "Referrals remaining should not be null");
  let r = t - s,
    l = j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
      numReferrals: t
    });
  return r < t && (l = j.default.Messages.REFERRAL_PROGRAM_SELECT_MORE_FRIEND.format({
    numFriends: r
  }), 1 === r && (l = j.default.Messages.REFERRAL_PROGRAM_SELECT_ONE_MORE_FRIEND), 0 === r && (l = j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECTION_HIT_LIMIT.format({
    numReferrals: t
  }))), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: L.title,
      children: [(0, a.jsx)(y, {
        className: L.titleImage
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: j.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, a.jsx)(c.Text, {
      className: L.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: l
    })]
  })
}

function F() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: L.title,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: j.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, a.jsx)(c.Text, {
      className: L.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: j.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function N() {
  return (0, a.jsx)("div", {
    className: L.erroredContent,
    children: (0, a.jsx)(c.Image, {
      src: S,
      width: 225,
      height: 160
    })
  })
}

function v(e) {
  let {
    onClose: s
  } = e;
  return (0, a.jsxs)("div", {
    className: L.erroredContainer,
    children: [(0, a.jsxs)("div", {
      className: i()(L.erroredHeader, L.headerSeparator),
      children: [(0, a.jsx)("div", {
        className: L.title,
        children: (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, a.jsx)(c.Text, {
        className: L.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, a.jsx)("div", {
      className: L.erroredContent,
      children: (0, a.jsx)(c.Image, {
        src: g,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: i()(L.footer, L.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: L.submit,
        onClick: () => s(),
        children: j.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}

function O(e) {
  let {
    onShare: s
  } = e, t = (0, o.useStateFromStores)([R.default], () => R.default.getRecipientStatus()), [l, n] = r.useState([]), [C, d] = r.useState(new Set);
  return r.useEffect(() => {
    (async () => {
      let e = [];
      for (let [s, a] of t)
        if (a === _.ReferralOfferStatus.PENDING) {
          let t = await (0, u.getUser)(s);
          e.push(t)
        } n(e)
    })()
  }, [t]), (0, a.jsxs)("div", {
    className: L.remindContainer,
    children: [(0, a.jsxs)("div", {
      className: i()(L.remindHeader, L.headerSeparator),
      children: [(0, a.jsxs)("div", {
        className: L.title,
        children: [(0, a.jsx)(y, {
          className: L.titleImage
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: j.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS
        })]
      }), (0, a.jsx)(c.Text, {
        className: L.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: j.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER
      })]
    }), (0, a.jsx)("div", {
      className: L.list,
      children: l.map(e => (0, a.jsx)(E.default, {
        user: e,
        checked: C.has(e),
        onChange: (e, s) => {
          d(t => {
            let a = new Set(t);
            return s ? a.add(e) : a.delete(e), a
          })
        }
      }, e.id))
    }), (0, a.jsx)("div", {
      className: i()(L.footer, L.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: L.submit,
        onClick: () => s([...C.values()]),
        children: j.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}

function y(e) {
  let {
    className: s
  } = e;
  return "light" === (0, o.useStateFromStores)([h.default], () => h.default.theme) ? (0, a.jsx)(c.Image, {
    className: s,
    src: m,
    width: 55,
    height: 38
  }) : (0, a.jsx)(c.Image, {
    className: s,
    src: A,
    width: 55,
    height: 38
  })
}
s.default = function(e) {
  let {
    onClose: s,
    onShare: t
  } = e, l = (0, o.useStateFromStores)([R.default], () => R.default.getReferralsRemaining()), n = (0, o.useStateFromStores)([R.default], () => R.default.getRecipientStatus()), [h, m] = r.useState(0), [g, S] = r.useState(""), [A, y] = r.useState([]), [I, w] = r.useState(!1), [G, U] = r.useState(!1), T = function(e, s) {
    let [t, a] = r.useState(e);
    return r.useEffect(() => {
      let t = setTimeout(() => {
        a(e)
      }, s);
      return () => {
        clearTimeout(t)
      }
    }, [e, s]), t
  }(g, 400), [D, B] = r.useState(new Map), [P, k] = r.useState(new Map);
  r.useEffect(() => {
    H(0)
  }, [T]), C()(null != l, "Referrals remaining should not be null");
  let H = async e => {
    try {
      if (null == e) return;
      w(!0);
      let s = [...P.values()];
      for (let [e, t] of n)
        if (t === _.ReferralOfferStatus.PENDING && !P.has(e)) {
          let t = await (0, u.getUser)(e);
          s.push(t)
        } let t = await (0, _.fetchReferralEligibleUsers)(e, T);
      y(a => {
        let r = t.users.filter(e => !D.has(e.id));
        return (s = s.filter(e => !D.has(e.id)), 0 === e) ? [...D.values(), ...s.values(), ...r] : [...a, ...r]
      }), k(e => {
        let t = new Map(e);
        for (let e of s) t.set(e.id, e);
        return t
      }), m(t.nextIndex)
    } catch (e) {
      U(!0)
    } finally {
      w(!1)
    }
  }, b = (0, x.useIsVisible)(e => {
    e && !I && H(h)
  });
  if (G) return (0, a.jsx)(v, {
    onClose: s
  });
  if (0 === l) return (0, a.jsx)(O, {
    onShare: t
  });
  let Z = T.length > 0 && 0 === A.length;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: i()(L.header, L.headerSeparator),
      children: [Z ? (0, a.jsx)(F, {}) : (0, a.jsx)(M, {
        numOfSelectedUsers: D.size
      }), (0, a.jsx)(f.default, {
        className: L.searchbar,
        size: f.default.Sizes.MEDIUM,
        tags: [...D.values()].map(e => p.default.getName(e)),
        placeholder: j.default.Messages.REFERRAL_PROGRAM_SEARCH_FRIENDS,
        query: g,
        onRemoveTag: e => {
          B(s => {
            let t = [...s.values()][e],
              a = new Map(s);
            return a.delete(t.id), a
          })
        },
        onQueryChange: S,
        onClear: () => S("")
      })]
    }), Z ? (0, a.jsx)(N, {}) : (0, a.jsxs)(d.ScrollerAuto, {
      className: L.list,
      children: [A.map(e => (0, a.jsx)(E.default, {
        disabled: [...D.values()].filter(e => !P.has(e.id)).length >= l && !D.has(e.id) && !P.has(e.id),
        checked: D.has(e.id),
        user: e,
        onChange: (e, s) => {
          B(t => {
            let a = new Map(t);
            return s ? a.set(e.id, e) : a.delete(e.id), a
          })
        }
      }, e.id)), I && (0, a.jsx)(c.Spinner, {}), (0, a.jsx)("div", {
        ref: b
      })]
    }), (0, a.jsx)("div", {
      className: i()(L.footer, L.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: L.submit,
        disabled: 0 === D.size && !Z,
        onClick: () => {
          if (Z) {
            s();
            return
          }
          t([...D.values()])
        },
        children: Z ? j.default.Messages.REFERRAL_PROGRAM_CLOSE : j.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}