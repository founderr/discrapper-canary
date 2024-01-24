"use strict";
E.r(_), E.d(_, {
  default: function() {
    return S
  }
}), E("222007");
var t = E("446674"),
  o = E("913144");
let n = !1,
  r = new Map,
  a = 0,
  i = new Set;

function I(e, _) {
  r = new Map(r);
  let E = r.get(e);
  null != E && r.set(e, {
    ...E,
    ..._
  })
}

function s(e) {
  let _ = new Set(i);
  _.delete(e), i = _
}
class T extends t.default.Store {
  get quests() {
    return r
  }
  get isFetchingCurrentQuests() {
    return n
  }
  get lastFetchedCurrentQuests() {
    return a
  }
  isEnrolling(e) {
    return i.has(e)
  }
}
T.displayName = "QuestsStore";
var S = new T(o.default, {
  LOGOUT: function() {
    n = !1, r = new Map, a = 0, i = new Set
  },
  QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
    a = Date.now(), n = !0
  },
  QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
    let {
      quests: _
    } = e;
    for (let e of (n = !1, r = new Map, _)) r.set(e.id, e)
  },
  QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
    a = 0, n = !1
  },
  QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
    let {
      questId: _,
      userStatus: E
    } = e;
    I(_, {
      userStatus: E
    })
  },
  QUESTS_ENROLL_BEGIN: function(e) {
    let {
      questId: _
    } = e, E = new Set(i);
    E.add(_), i = E
  },
  QUESTS_ENROLL_SUCCESS: function(e) {
    let {
      enrolledQuestUserStatus: _
    } = e;
    I(_.questId, {
      userStatus: _
    }), s(_.questId)
  },
  QUESTS_ENROLL_FAILURE: function(e) {
    let {
      questId: _
    } = e;
    s(_)
  }
})