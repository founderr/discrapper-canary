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
  p = t("332475"),
  _ = t("51144"),
  R = t("281494"),
  E = t("276444"),
  j = t("529840"),
  L = t("689938"),
  m = t("114480"),
  g = t("724531"),
  S = t("99713"),
  A = t("334202"),
  M = t("7234");

function F(e) {
  let {
    numOfSelectedUsers: s
  } = e, t = (0, o.useStateFromStores)([E.default], () => E.default.getReferralsRemaining());
  C()(null != t, "Referrals remaining should not be null");
  let r = t - s,
    l = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
      numReferrals: t
    });
  return r < t && (l = L.default.Messages.REFERRAL_PROGRAM_SELECT_MORE_FRIEND.format({
    numFriends: r
  }), 1 === r && (l = L.default.Messages.REFERRAL_PROGRAM_SELECT_ONE_MORE_FRIEND), 0 === r && (l = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECTION_HIT_LIMIT.format({
    numReferrals: t
  }))), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: m.title,
      children: [(0, a.jsx)(w, {
        className: m.titleImage
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: L.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, a.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: l
    })]
  })
}

function N() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.title,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: L.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, a.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: L.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function v() {
  return (0, a.jsx)("div", {
    className: m.erroredContent,
    children: (0, a.jsx)(p.default, {
      src: A,
      width: 225,
      height: 160
    })
  })
}

function O(e) {
  let {
    onClose: s
  } = e;
  return (0, a.jsxs)("div", {
    className: m.erroredContainer,
    children: [(0, a.jsxs)("div", {
      className: i()(m.erroredHeader, m.headerSeparator),
      children: [(0, a.jsx)("div", {
        className: m.title,
        children: (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, a.jsx)("div", {
      className: m.erroredContent,
      children: (0, a.jsx)(p.default, {
        src: S,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: i()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => s(),
        children: L.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}

function y(e) {
  let {
    onShare: s
  } = e, t = (0, o.useStateFromStores)([E.default], () => E.default.getRecipientStatus()), [l, n] = r.useState([]), [C, d] = r.useState(new Set);
  return r.useEffect(() => {
    (async () => {
      let e = [];
      for (let [s, a] of t)
        if (a === R.ReferralOfferStatus.PENDING) {
          let t = await (0, u.getUser)(s);
          e.push(t)
        } n(e)
    })()
  }, [t]), (0, a.jsxs)("div", {
    className: m.remindContainer,
    children: [(0, a.jsxs)("div", {
      className: i()(m.remindHeader, m.headerSeparator),
      children: [(0, a.jsxs)("div", {
        className: m.title,
        children: [(0, a.jsx)(w, {
          className: m.titleImage
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: L.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS
        })]
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER
      })]
    }), (0, a.jsx)("div", {
      className: m.list,
      children: l.map(e => (0, a.jsx)(j.default, {
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
      className: i()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => s([...C.values()]),
        children: L.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}

function w(e) {
  let {
    className: s
  } = e;
  return "light" === (0, o.useStateFromStores)([h.default], () => h.default.theme) ? (0, a.jsx)(p.default, {
    className: s,
    src: g,
    width: 55,
    height: 38
  }) : (0, a.jsx)(p.default, {
    className: s,
    src: M,
    width: 55,
    height: 38
  })
}
s.default = function(e) {
  let {
    onClose: s,
    onShare: t
  } = e, l = (0, o.useStateFromStores)([E.default], () => E.default.getReferralsRemaining()), n = (0, o.useStateFromStores)([E.default], () => E.default.getRecipientStatus()), [h, p] = r.useState(0), [g, S] = r.useState(""), [A, M] = r.useState([]), [w, I] = r.useState(!1), [G, U] = r.useState(!1), T = function(e, s) {
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
      I(!0);
      let s = [...P.values()];
      for (let [e, t] of n)
        if (t === R.ReferralOfferStatus.PENDING && !P.has(e)) {
          let t = await (0, u.getUser)(e);
          s.push(t)
        } let t = await (0, R.fetchReferralEligibleUsers)(e, T);
      M(a => {
        let r = t.users.filter(e => !D.has(e.id));
        return (s = s.filter(e => !D.has(e.id)), 0 === e) ? [...D.values(), ...s.values(), ...r] : [...a, ...r]
      }), k(e => {
        let t = new Map(e);
        for (let e of s) t.set(e.id, e);
        return t
      }), p(t.nextIndex)
    } catch (e) {
      U(!0)
    } finally {
      I(!1)
    }
  }, b = (0, x.useIsVisible)(e => {
    e && !w && H(h)
  });
  if (G) return (0, a.jsx)(O, {
    onClose: s
  });
  if (0 === l) return (0, a.jsx)(y, {
    onShare: t
  });
  let Z = T.length > 0 && 0 === A.length;
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)("div", {
      className: i()(m.header, m.headerSeparator),
      children: [Z ? (0, a.jsx)(N, {}) : (0, a.jsx)(F, {
        numOfSelectedUsers: D.size
      }), (0, a.jsx)(f.default, {
        className: m.searchbar,
        size: f.default.Sizes.MEDIUM,
        tags: [...D.values()].map(e => _.default.getName(e)),
        placeholder: L.default.Messages.REFERRAL_PROGRAM_SEARCH_FRIENDS,
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
    }), Z ? (0, a.jsx)(v, {}) : (0, a.jsxs)(d.ScrollerAuto, {
      className: m.list,
      children: [A.map(e => (0, a.jsx)(j.default, {
        disabled: [...D.values()].filter(e => !P.has(e.id)).length >= l && !D.has(e.id) && !P.has(e.id),
        checked: D.has(e.id),
        user: e,
        onChange: (e, s) => {
          B(t => {
            let a = new Map(t);
            return s ? a.set(e.id, e) : a.delete(e.id), a
          })
        }
      }, e.id)), w && (0, a.jsx)(c.Spinner, {}), (0, a.jsx)("div", {
        ref: b
      })]
    }), (0, a.jsx)("div", {
      className: i()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        disabled: 0 === D.size && !Z,
        onClick: () => {
          if (Z) {
            s();
            return
          }
          t([...D.values()])
        },
        children: Z ? L.default.Messages.REFERRAL_PROGRAM_CLOSE : L.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}