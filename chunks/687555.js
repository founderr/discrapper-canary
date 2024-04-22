"use strict";
t.r(s), t("47120"), t("653041");
var a = t("735250"),
  r = t("470079"),
  i = t("120356"),
  l = t.n(i),
  n = t("512722"),
  C = t.n(n),
  o = t("597312"),
  d = t("442837"),
  c = t("481060"),
  u = t("232567"),
  f = t("461745"),
  x = t("434650"),
  h = t("210887"),
  p = t("332475"),
  _ = t("51144"),
  j = t("281494"),
  R = t("276444"),
  L = t("529840"),
  E = t("689938"),
  m = t("415687"),
  g = t("724531"),
  S = t("99713"),
  A = t("334202"),
  M = t("7234");

function F(e) {
  let {
    numOfSelectedUsers: s
  } = e, t = (0, d.useStateFromStores)([R.default], () => R.default.getReferralsRemaining());
  C()(null != t, "Referrals remaining should not be null");
  let r = t - s,
    i = E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
      numReferrals: t
    });
  return r < t && (i = E.default.Messages.REFERRAL_PROGRAM_SELECT_MORE_FRIEND.format({
    numFriends: r
  }), 1 === r && (i = E.default.Messages.REFERRAL_PROGRAM_SELECT_ONE_MORE_FRIEND), 0 === r && (i = E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECTION_HIT_LIMIT.format({
    numReferrals: t
  }))), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: m.title,
      children: [(0, a.jsx)(w, {
        className: m.titleImage
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: E.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
      })]
    }), (0, a.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: i
    })]
  })
}

function v() {
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: m.title,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/bold",
        children: E.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS_NO_RESULTS_HEADER
      })
    }), (0, a.jsx)(c.Text, {
      className: m.description,
      variant: "text-md/medium",
      color: "header-secondary",
      children: E.default.Messages.REFERRAL_PROGRAM_SELCT_FRIENDS_NO_RESULTS_SUBHEADER
    })]
  })
}

function N() {
  return (0, a.jsx)("div", {
    className: m.erroredContent,
    children: (0, a.jsx)(p.default, {
      src: A,
      width: 225,
      height: 160
    })
  })
}

function y(e) {
  let {
    onClose: s
  } = e;
  return (0, a.jsxs)("div", {
    className: m.erroredContainer,
    children: [(0, a.jsxs)("div", {
      className: l()(m.erroredHeader, m.headerSeparator),
      children: [(0, a.jsx)("div", {
        className: m.title,
        children: (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_HEADER
        })
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_ERROR_SUBHEADER
      })]
    }), (0, a.jsx)("div", {
      className: m.erroredContent,
      children: (0, a.jsx)(p.default, {
        src: S,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: l()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => s(),
        children: E.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}

function O(e) {
  let {
    onShare: s
  } = e, t = (0, d.useStateFromStores)([R.default], () => R.default.getRecipientStatus()), [i, n] = r.useState([]), [C, o] = r.useState(new Set);
  return r.useEffect(() => {
    (async () => {
      let e = [];
      for (let [s, a] of t)
        if (a === j.ReferralOfferStatus.PENDING) {
          let t = await (0, u.getUser)(s);
          e.push(t)
        } n(e)
    })()
  }, [t]), (0, a.jsxs)("div", {
    className: m.remindContainer,
    children: [(0, a.jsxs)("div", {
      className: l()(m.remindHeader, m.headerSeparator),
      children: [(0, a.jsxs)("div", {
        className: m.title,
        children: [(0, a.jsx)(w, {
          className: m.titleImage
        }), (0, a.jsx)(c.Heading, {
          variant: "heading-xl/bold",
          children: E.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS
        })]
      }), (0, a.jsx)(c.Text, {
        className: m.description,
        variant: "text-md/medium",
        color: "header-secondary",
        children: E.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_HEADER
      })]
    }), (0, a.jsx)("div", {
      className: m.list,
      children: i.map(e => (0, a.jsx)(L.default, {
        user: e,
        checked: C.has(e),
        onChange: (e, s) => {
          o(t => {
            let a = new Set(t);
            return s ? a.add(e) : a.delete(e), a
          })
        }
      }, e.id))
    }), (0, a.jsx)("div", {
      className: l()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => s([...C.values()]),
        children: E.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}

function w(e) {
  let {
    className: s
  } = e;
  return "light" === (0, d.useStateFromStores)([h.default], () => h.default.theme) ? (0, a.jsx)(p.default, {
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
  } = e, i = (0, d.useStateFromStores)([R.default], () => R.default.getReferralsRemaining()), n = (0, d.useStateFromStores)([R.default], () => R.default.getRecipientStatus()), [h, p] = r.useState(0), [g, S] = r.useState(""), [A, M] = r.useState([]), [w, I] = r.useState(!1), [U, G] = r.useState(!1), T = function(e, s) {
    let [t, a] = r.useState(e);
    return r.useEffect(() => {
      let t = setTimeout(() => {
        a(e)
      }, s);
      return () => {
        clearTimeout(t)
      }
    }, [e, s]), t
  }(g, 400), [B, D] = r.useState(new Map), [k, b] = r.useState(new Map);
  r.useEffect(() => {
    H(0)
  }, [T]), C()(null != i, "Referrals remaining should not be null");
  let H = async e => {
    try {
      if (null == e) return;
      I(!0);
      let s = [...k.values()];
      for (let [e, t] of n)
        if (t === j.ReferralOfferStatus.PENDING && !k.has(e)) {
          let t = await (0, u.getUser)(e);
          s.push(t)
        } let t = await (0, j.fetchReferralEligibleUsers)(e, T);
      M(a => {
        let r = t.users.filter(e => !B.has(e.id));
        return (s = s.filter(e => !B.has(e.id)), 0 === e) ? [...B.values(), ...s.values(), ...r] : [...a, ...r]
      }), b(e => {
        let t = new Map(e);
        for (let e of s) t.set(e.id, e);
        return t
      }), p(t.nextIndex)
    } catch (e) {
      G(!0)
    } finally {
      I(!1)
    }
  }, P = (0, x.useIsVisible)(e => {
    e && !w && H(h)
  });
  if (U) return (0, a.jsx)(y, {
    onClose: s
  });
  if (0 === i) return (0, a.jsx)(O, {
    onShare: t
  });
  let Z = T.length > 0 && 0 === A.length;
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsxs)("div", {
      className: l()(m.header, m.headerSeparator),
      children: [Z ? (0, a.jsx)(v, {}) : (0, a.jsx)(F, {
        numOfSelectedUsers: B.size
      }), (0, a.jsx)(f.default, {
        className: m.searchbar,
        size: f.default.Sizes.MEDIUM,
        tags: [...B.values()].map(e => _.default.getName(e)),
        placeholder: E.default.Messages.REFERRAL_PROGRAM_SEARCH_FRIENDS,
        query: g,
        onRemoveTag: e => {
          D(s => {
            let t = [...s.values()][e],
              a = new Map(s);
            return a.delete(t.id), a
          })
        },
        onQueryChange: S,
        onClear: () => S("")
      })]
    }), Z ? (0, a.jsx)(N, {}) : (0, a.jsxs)(o.ScrollerAuto, {
      className: m.list,
      children: [A.map(e => (0, a.jsx)(L.default, {
        disabled: [...B.values()].filter(e => !k.has(e.id)).length >= i && !B.has(e.id) && !k.has(e.id),
        checked: B.has(e.id),
        user: e,
        onChange: (e, s) => {
          D(t => {
            let a = new Map(t);
            return s ? a.set(e.id, e) : a.delete(e.id), a
          })
        }
      }, e.id)), w && (0, a.jsx)(c.Spinner, {}), (0, a.jsx)("div", {
        ref: P
      })]
    }), (0, a.jsx)("div", {
      className: l()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        disabled: 0 === B.size && !Z,
        onClick: () => {
          if (Z) {
            s();
            return
          }
          t([...B.values()])
        },
        children: Z ? E.default.Messages.REFERRAL_PROGRAM_CLOSE : E.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}