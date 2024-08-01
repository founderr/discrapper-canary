t.d(n, {
  f: function() {
return c;
  },
  l: function() {
return d;
  }
}), t(411104);
var r = t(735250),
  i = t(470079),
  o = t(399606),
  l = t(38618),
  u = t(423117),
  a = t(289393);
let s = i.createContext(void 0);

function c(e) {
  let n = i.useContext(s);
  if (null == n)
throw Error(''.concat(null != e ? e : 'useGroupListingsFetchContext', ' must be used within a GroupListingsFetchContextProvider'));
  let {
listingsLoaded: t,
fetchGroupListingsForGuild: r
  } = n;
  return r(), t;
}

function d(e) {
  let {
guildId: n,
children: t,
refetchOnMount: c,
includeSoftDeleted: d,
countryCode: _,
dontFetchWhileTrue: E
  } = e, f = (0, o.e7)([l.Z], () => l.Z.isConnected()), I = (0, o.e7)([a.Z], () => null != n ? a.Z.getSubscriptionGroupListingsForGuildFetchState(n) : a.M.FETCHED), T = i.useRef(c), S = i.useCallback(() => {
if (null == n || !f || !0 === E)
  return;
let e = a.Z.getSubscriptionGroupListingsForGuildFetchState(n);
(T.current || e === a.M.NOT_FETCHED) && (T.current = !1, u.FP(n, {
  includeSoftDeleted: d,
  countryCode: _
}));
  }, [
f,
n,
d,
_,
E
  ]), A = i.useMemo(() => I === a.M.FETCHED && !0 !== T.current, [
I,
T
  ]);
  return (0, r.jsx)(s.Provider, {
value: {
  listingsLoaded: A,
  fetchGroupListingsForGuild: S
},
children: t
  });
}