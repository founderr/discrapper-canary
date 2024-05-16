"use strict";
t.r(s), t("47120"), t("653041");
var a = t("735250"),
  r = t("470079"),
  i = t("120356"),
  l = t.n(i),
  n = t("512722"),
  C = t.n(n),
  d = t("597312"),
  o = t("442837"),
  c = t("481060"),
  u = t("232567"),
  f = t("461745"),
  x = t("434650"),
  p = t("210887"),
  h = t("332475"),
  _ = t("51144"),
  R = t("281494"),
  j = t("276444"),
  E = t("529840"),
  L = t("689938"),
  m = t("114480"),
  g = t("724531"),
  S = t("99713"),
  A = t("334202"),
  M = t("7234");

function F(e) {
  let {
    numOfSelectedUsers: s
  } = e, t = (0, o.useStateFromStores)([j.default], () => j.default.getReferralsRemaining());
  C()(null != t, "Referrals remaining should not be null");
  let r = t - s,
    i = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_HEADER.format({
      numReferrals: t
    });
  return r < t && (i = L.default.Messages.REFERRAL_PROGRAM_SELECT_MORE_FRIEND.format({
    numFriends: r
  }), 1 === r && (i = L.default.Messages.REFERRAL_PROGRAM_SELECT_ONE_MORE_FRIEND), 0 === r && (i = L.default.Messages.REFERRAL_PROGRAM_FRIEND_SELECTION_HIT_LIMIT.format({
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
      children: i
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
    children: (0, a.jsx)(h.default, {
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
      children: (0, a.jsx)(h.default, {
        src: S,
        width: 178,
        height: 190
      })
    }), (0, a.jsx)("div", {
      className: l()(m.footer, m.footerSeparator),
      children: (0, a.jsx)(c.Button, {
        className: m.submit,
        onClick: () => s(),
        children: L.default.Messages.REFERRAL_PROGRAM_CLOSE
      })
    })]
  })
}

function O(e) {
  let {
    onShare: s
  } = e, t = (0, o.useStateFromStores)([j.default], () => j.default.getRecipientStatus()), [i, n] = r.useState([]), [C, d] = r.useState(new Set);
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
      className: l()(m.remindHeader, m.headerSeparator),
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
      children: i.map(e => (0, a.jsx)(E.default, {
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
      className: l()(m.footer, m.footerSeparator),
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
  return "light" === (0, o.useStateFromStores)([p.default], () => p.default.theme) ? (0, a.jsx)(h.default, {
    className: s,
    src: g,
    width: 55,
    height: 38
  }) : (0, a.jsx)(h.default, {
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
  } = e, i = (0, o.useStateFromStores)([j.default], () => j.default.getReferralsRemaining()), n = (0, o.useStateFromStores)([j.default], () => j.default.getRecipientStatus()), [p, h] = r.useState(0), [g, S] = r.useState(""), [A, M] = r.useState([]), [w, I] = r.useState(!1), [U, G] = r.useState(!1), T = function(e, s) {
    let [t, a] = r.useState(e);
    return r.useEffect(() => {
      let t = setTimeout(() => {
        a(e)
      }, s);
      return () => {
        clearTimeout(t)
      }
    }, [e, s]), t
  }(g, 400), [B, D] = r.useState(new Map), [k, H] = r.useState(new Map);
  r.useEffect(() => {
    P(0)
  }, [T]), C()(null != i, "Referrals remaining should not be null");
  let P = async e => {
    try {
      if (null == e) return;
      I(!0);
      let s = [...k.values()];
      for (let [e, t] of n)
        if (t === R.ReferralOfferStatus.PENDING && !k.has(e)) {
          let t = await (0, u.getUser)(e);
          s.push(t)
        } let t = await (0, R.fetchReferralEligibleUsers)(e, T);
      M(a => {
        let r = t.users.filter(e => !B.has(e.id));
        return (s = s.filter(e => !B.has(e.id)), 0 === e) ? [...B.values(), ...s.values(), ...r] : [...a, ...r]
      }), H(e => {
        let t = new Map(e);
        for (let e of s) t.set(e.id, e);
        return t
      }), h(t.nextIndex)
    } catch (e) {
      G(!0)
    } finally {
      I(!1)
    }
  }, b = (0, x.useIsVisible)(e => {
    e && !w && P(p)
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
      children: [Z ? (0, a.jsx)(N, {}) : (0, a.jsx)(F, {
        numOfSelectedUsers: B.size
      }), (0, a.jsx)(f.default, {
        className: m.searchbar,
        size: f.default.Sizes.MEDIUM,
        tags: [...B.values()].map(e => _.default.getName(e)),
        placeholder: L.default.Messages.REFERRAL_PROGRAM_SEARCH_FRIENDS,
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
    }), Z ? (0, a.jsx)(v, {}) : (0, a.jsxs)(d.ScrollerAuto, {
      className: m.list,
      children: [A.map(e => (0, a.jsx)(E.default, {
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
        ref: b
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
        children: Z ? L.default.Messages.REFERRAL_PROGRAM_CLOSE : L.default.Messages.REFERRAL_PROGRAM_SHARE_TRIAL
      })
    })]
  })
}