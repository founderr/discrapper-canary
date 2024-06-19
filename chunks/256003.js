t.d(l, {
  Z: function() {
    return s
  }
}), t(47120);
let n = (0, t(652874).Z)((e, l) => ({
  selectedUserIds: {},
  addUsers: (t, n) => {
    var s;
    let {
      selectedUserIds: a
    } = l(), o = new Set([...null !== (s = a[t]) && void 0 !== s ? s : new Set, ...n]);
    e({
      selectedUserIds: {
        ...a,
        [t]: o
      }
    })
  },
  removeUser: (t, n) => {
    let {
      selectedUserIds: s
    } = l(), a = s[t];
    if (null == a) return;
    let o = [...a].filter(e => e !== n);
    e({
      selectedUserIds: {
        ...s,
        [t]: new Set(o)
      }
    })
  },
  clearSelection: t => {
    let {
      selectedUserIds: n
    } = l();
    null != n && e({
      selectedUserIds: {
        ...n,
        [t]: new Set
      }
    })
  }
}));

function s(e) {
  return n(l => {
    var t;
    return {
      selectedUserIds: null !== (t = l.selectedUserIds[e]) && void 0 !== t ? t : new Set,
      addUsers: t => {
        l.addUsers(e, t)
      },
      removeUser: t => {
        l.removeUser(e, t)
      },
      clearSelection: () => {
        l.clearSelection(e)
      }
    }
  })
}